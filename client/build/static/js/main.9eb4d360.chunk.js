(this["webpackJsonpyerba-mate-home"]=this["webpackJsonpyerba-mate-home"]||[]).push([[0],{60:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(27),i=a.n(c),n=a(10),r=a(11),l=a(13),o=a(12),h=a(29),m=a(2),b=a.p+"static/media/home.9baaeb9e.svg",j=a.p+"static/media/about.57ad1567.svg",d=a.p+"static/media/mate.0a275c2d.svg",_=a.p+"static/media/api.4ceb1a76.svg",u=a.p+"static/media/search.65ccad02.svg",p=a.p+"static/media/hamburger.fc8ace34.svg",x=a(0);function O(e){return"home"==e.style?Object(x.jsx)("img",{className:"icon",src:b}):"about"==e.style?Object(x.jsx)("img",{className:"icon",src:j}):"mate"==e.style?Object(x.jsx)("img",{className:"icon",src:d}):"api"==e.style?Object(x.jsx)("img",{className:"icon",src:_}):"search"==e.style?Object(x.jsx)("img",{className:"icon",src:u}):"hamburger"==e.style?Object(x.jsx)("img",{className:"icon",src:p}):Object(x.jsx)("div",{children:"No icon style found!"})}function f(){return Object(x.jsxs)("div",{id:"wrapper",children:[Object(x.jsx)("h1",{id:"title",children:"YERBA MATE HOME"}),Object(x.jsxs)("header",{className:"home",children:[Object(x.jsxs)("section",{className:"home__fragment",children:[Object(x.jsx)("div",{className:"home__fragment__bg about"}),Object(x.jsx)("a",{href:"/about",className:"home__fragment__link",children:Object(x.jsxs)("div",{className:"home__fragment__text",children:[Object(x.jsxs)("h2",{className:"home__fragment__text--title",children:[Object(x.jsx)(O,{style:"about"})," About"]}),Object(x.jsx)("p",{children:"This is page about us, its a help for you to get to know us a little better. Oh and a small contribution guide if you'd like to create the service with us, everyone is welcomed!"})]})})]}),Object(x.jsxs)("section",{className:"home__fragment",children:[Object(x.jsx)("div",{className:"home__fragment__bg database"}),Object(x.jsx)("a",{href:"/mate",className:"home__fragment__link",children:Object(x.jsxs)("div",{className:"home__fragment__text",children:[Object(x.jsxs)("h2",{className:"home__fragment__text--title",children:[Object(x.jsx)(O,{style:"mate"})," Database"]}),Object(x.jsx)("p",{children:"Here you can find our database which contains all the mate data we have collected so far. It's an example usage of our API to get data and process it in an eye pleasing way."})]})})]}),Object(x.jsxs)("section",{className:"home__fragment",children:[Object(x.jsx)("div",{className:"home__fragment__bg api"}),Object(x.jsx)("a",{href:"/api",className:"home__fragment__link",children:Object(x.jsxs)("div",{className:"home__fragment__text",children:[Object(x.jsxs)("h2",{className:"home__fragment__text--title",children:[Object(x.jsx)(O,{style:"api"})," API"]}),Object(x.jsx)("p",{children:"Under this subpage you can find our API which powers our database. It's a public API, which means you can freely use it for any of your purposes. Have fun using!"})]})})]})]})]})}var g=a(31);function v(){var e="/"===location.pathname?" active":"",t=location.pathname.match(/^\/about/)?" active":"",a=location.pathname.match(/^\/mate/)?" active":"",c=location.pathname.match(/^\/api/)?" active":"",i=Object(s.useState)(0),n=Object(g.a)(i,2),r=n[0],l=n[1];return Object(s.useEffect)((function(){window.innerWidth<=699&&l(!r)}),[]),Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("div",{className:r?"navbar--hide":"navbar",children:Object(x.jsxs)("ul",{className:"navbar__list",children:[Object(x.jsx)("li",{className:"navbar__item",children:Object(x.jsxs)("a",{className:"navbar__item__link"+e,href:"/",children:[Object(x.jsx)(O,{style:"home"}),Object(x.jsx)("h3",{className:"navbar__item__link__title",children:Object(x.jsx)("span",{className:"navbar__item__link__title--margin",children:"Home"})})]})}),Object(x.jsx)("li",{className:"navbar__item",children:Object(x.jsxs)("a",{className:"navbar__item__link"+t,href:"/about",children:[Object(x.jsx)(O,{style:"about"}),Object(x.jsx)("h3",{className:"navbar__item__link__title",children:Object(x.jsx)("span",{className:"navbar__item__link__title--margin",children:"About"})})]})}),Object(x.jsx)("li",{className:"navbar__item",children:Object(x.jsxs)("a",{className:"navbar__item__link"+a,href:"/mate",children:[Object(x.jsx)(O,{style:"mate"}),Object(x.jsx)("h3",{className:"navbar__item__link__title",children:Object(x.jsx)("span",{className:"navbar__item__link__title--margin",children:"Database"})})]})}),Object(x.jsx)("li",{className:"navbar__item",children:Object(x.jsxs)("a",{className:"navbar__item__link"+c,href:"/api",children:[Object(x.jsx)(O,{style:"api"}),Object(x.jsx)("h3",{className:"navbar__item__link__title",children:Object(x.jsx)("span",{className:"navbar__item__link__title--margin",children:"API"})})]})})]})}),Object(x.jsx)("button",{onClick:function(){l(!r)},className:"navbar--hamburger",children:Object(x.jsx)(O,{style:"hamburger"})})]})}function N(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{className:"nav-offset",children:Object(x.jsxs)("div",{className:"article",children:[Object(x.jsx)("h2",{className:"article__title",children:"About Us"}),Object(x.jsx)("p",{className:"article__p",children:"Hello! We are a web service containing a Yerba Mate Database as well as its own public API. It is made with a user-first approach which means we try our best to make it as user friendly as possible."}),Object(x.jsx)("h2",{className:"article__title",children:"Contributing"}),Object(x.jsxs)("p",{className:"article__p",children:["If you'd like to somehow contribute to this project, please check the projects repo on"," ",Object(x.jsx)("a",{className:"link",href:"https://github.com/sobekcore/yerba-mate-home",target:"_blank",rel:"noreferrer",children:"GitHub"}),". Im sure you'll be usefull to us in any way. Even if you dont have the coding skills required, you can add some mate into our YERBAS.md file so we can add them into the database."]}),Object(x.jsx)("h2",{className:"article__title",children:"Technicalities"}),Object(x.jsx)("p",{className:"article__p",children:"Our service is made with various diferent tools. One of them is service' back-end which powers the whole site, it is made with Go. The back-end is made in a way to serve our front-end, this one is made with React, which is later built into static files. Then we must get our data somehow, in this case we are using MySQL database to get the data and process it. All of that is hosted on Heroku, which is one of the best ways to host your Go web applications."}),Object(x.jsx)("h2",{className:"article__title build",children:"Service is still in build"})]})})]})}var y=a(28),w=a.n(y),k=a.p+"static/media/loading.91bd59b5.svg",A="https://yerba-mate-home.herokuapp.com",I=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var s=arguments.length,c=new Array(s),i=0;i<s;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={items:[],search:""},e.getAllMate=function(){w.a.get(A+"/api/mate").then((function(t){t.data?e.setState({items:t.data}):e.setState({items:[]})}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.getAllMate()}},{key:"handleInputChange",value:function(e){this.setState({search:e.target.value})}},{key:"render",value:function(){var e=this.state.items,t=this.state.search,a=e.filter((function(e){return-1!==e.name.toLowerCase().indexOf(t.toLowerCase())}));return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsxs)("div",{className:"nav-offset",children:[Object(x.jsx)("h1",{className:"database__title",children:"Yerba Mate Database"}),Object(x.jsx)("div",{className:"database__input",children:Object(x.jsxs)("div",{className:"database__input__box",children:[Object(x.jsx)(O,{style:"search"}),Object(x.jsx)("input",{className:"database__input__box--field",onChange:this.handleInputChange.bind(this),placeholder:"Search for mate...",maxLength:"30"})]})}),Object(x.jsx)("ul",{className:"database__list",children:0==e?Object(x.jsx)("div",{className:"database__loading",children:Object(x.jsx)("img",{className:"database__loading--img",src:k})}):a.map((function(e){return Object(x.jsxs)("li",{className:"database__item",children:[e.name," - ",e.country,Object(x.jsx)("br",{})]},e.slug)}))})]})]})}}]),a}(s.Component);function T(){var e="https://yerba-mate-home.herokuapp.com",t="/api/mate";return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{className:"nav-offset",children:Object(x.jsxs)("div",{className:"article",children:[Object(x.jsx)("h2",{className:"article__title",children:"Yerba Mate API"}),Object(x.jsx)("p",{className:"article__p",children:"Our API holds data about yerba mate (Ilex paraguariensis) which is the national drink of South America, but is becoming more and more popular all over the world. The API is public which means it's freely available for your use. If you wish any field to be added that is not currently there, you can propose it in any type of DM's or in GitHub issues."}),Object(x.jsx)("h2",{className:"article__title",children:"How to use it?"}),Object(x.jsx)("p",{className:"article__p",children:"The usage of our API is really simple, currently there are only 2 possible endpoints, which are either for all of the entries or for one specific entry. To use them simply fetch from any of the endpoints which are listed in its section. You shouldn't need any CORS setup to use it, it should work from the get go."}),Object(x.jsx)("h2",{className:"article__title",children:"Endpoints"}),Object(x.jsxs)("p",{className:"article__p",children:["Main endpoint for our API is"," ",Object(x.jsx)("a",{className:"link",href:"/api/mate",children:t}),". From on there you can access all of our data. All of the possibilites will be listed below.",Object(x.jsxs)("span",{className:"api__endpoint",children:["To acces all of the entries:",Object(x.jsxs)("span",{className:"api__endpoint__href",children:["GET: ",e,Object(x.jsx)("span",{className:"api__endpoint__href--pathname",children:t})]})]}),Object(x.jsxs)("span",{className:"api__endpoint",children:["To get one specific entry:",Object(x.jsxs)("span",{className:"api__endpoint__href",children:["GET: ",e,Object(x.jsx)("span",{className:"api__endpoint__href--pathname",children:"/api/mate/{slug}"})]})]})]})]})})]})}function E(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(v,{}),Object(x.jsx)("div",{className:"center-div nav-offset",children:Object(x.jsxs)("h1",{className:"error__text",children:[Object(x.jsx)("span",{className:"error__text--404",children:"404"}),Object(x.jsx)("span",{className:"error__text--title",children:"This page could not be found."})]})})]})}var M=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=document.getElementById("loader-bg");e.id="loader-exit",0==(e=document.getElementById("loader-exit")).style.opacity&&setTimeout((function(){return e.remove()}),400)}},{key:"render",value:function(){return Object(x.jsx)(h.a,{children:Object(x.jsxs)(m.d,{children:[Object(x.jsx)(m.b,{exact:!0,path:"/",component:f}),Object(x.jsx)(m.b,{exact:!0,path:"/about",component:N}),Object(x.jsx)(m.b,{exact:!0,path:"/mate",component:I}),Object(x.jsx)(m.b,{exact:!0,path:"/api",component:T}),Object(x.jsx)(m.b,{exact:!0,path:"/404",component:E}),Object(x.jsx)(m.a,{to:"/404"})]})})}}]),a}(s.Component);a(60);i.a.render(Object(x.jsx)(M,{}),document.getElementById("app"))}},[[61,1,2]]]);
//# sourceMappingURL=main.9eb4d360.chunk.js.map