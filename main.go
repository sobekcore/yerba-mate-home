package main

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
)

// API Database struct
type Api struct {
	Slug    string `json:"slug"`
	Name    string `json:"name"`
	Country string `json:"country"`
}

var db *sql.DB
var err error

func main() {
	err := godotenv.Load(".env")

	db, err = sql.Open("mysql", os.Getenv("DB_CONNECT"))
	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	router := mux.NewRouter()

	// API Database calls
	api := router.PathPrefix("/api/").Subrouter()
	api.HandleFunc("/mate", getAll).Methods("GET")
	api.HandleFunc("/mate/{slug}", getSingle).Methods("GET")

	router.PathPrefix("/static/").
		Handler(http.StripPrefix("/static/",
			http.FileServer(http.Dir("./client/build/static/"))))

	router.PathPrefix("/").HandlerFunc(indexHandler)

	server := &http.Server{
		Handler:      router,
		Addr:         ":" + os.Getenv("PORT"),
		WriteTimeout: 15 * time.Second,
		ReadTimeout:  15 * time.Second,
	}

	fmt.Println("Starting Go web server...")
	log.Fatal(server.ListenAndServe())
}

// Serve Static React
func indexHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./client/build/index.html")
}

// Set JSON files type and accept CORS policy
func setJSONandCORS(w http.ResponseWriter) {
	w.Header().Set("Access-Control-Allow-Origin", "*")
	w.Header().Set("Content-Type", "application/json")
}

// Get all entries
func getAll(w http.ResponseWriter, r *http.Request) {
	setJSONandCORS(w)
	var entries []Api

	result, err := db.Query("SELECT slug, name, country FROM api")
	if err != nil {
		panic(err.Error())
	}

	defer result.Close()

	for result.Next() {
		var api Api
		err := result.Scan(&api.Slug, &api.Name, &api.Country)
		if err != nil {
			panic(err.Error())
		}

		entries = append(entries, api)
	}

	json.NewEncoder(w).Encode(entries)
}

// Get single entry
func getSingle(w http.ResponseWriter, r *http.Request) {
	setJSONandCORS(w)
	params := mux.Vars(r)

	result, err := db.Query("SELECT slug, name, country FROM api WHERE slug = ?", params["slug"])
	if err != nil {
		panic(err.Error())
	}

	defer result.Close()

	var api Api

	for result.Next() {
		err := result.Scan(&api.Slug, &api.Name, &api.Country)
		if err != nil {
			panic(err.Error())
		}
	}

	json.NewEncoder(w).Encode(api)
}
