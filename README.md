## Yerba Mate Home
Yerba Mate Home is a simple informational site about Mate. It has public API for use to anyone, as well as visual representation of it in user friendly GUI. Core of the app is back-end powered by **`Go`** which runs the whole site. Front-end of the app is made with **`React`**, which is built into static files. However all the API data is held and processed by **`MySQL`** database.

## How to contribute
To add new entries visit **`YERBAS.md`** file, here you have a template for making suggestions for new entries with an example (yes, add that backslash to create new markdown line)
```
[*] <brand> - <country> // <github-username> \
[*] Pajarito - Paraguay // sobekcore \
```
Oh and one last request, please add new entries at the bottom of the file. For this kind of task anyone can contribute, the only requirement is to write any mate thats is not currently in our database.

However if you'd like to contribute in a other way than creating new mate entries you of course can! If you see anything in our service that you could improve, please make it happen via your fork and let us validate it, we will try to use your work in one way or another.

But overall every contribute is very much apppreciated, thank you for your effort!

## How to use
To use you must create .env file and add enviroment variable called **`DB_CONNECT`** which should contain generic MySQL connection string similar to:
```
<username>:<password>@tcp(<hostname>:3306)/<database_name>
```
and replace each sequence containing keys in brackets.

## Currently work in progress
