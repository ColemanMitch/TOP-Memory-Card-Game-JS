(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{13:function(e,o,a){},14:function(e,o,a){},16:function(e,o,a){"use strict";a.r(o);var n=a(1),t=a.n(n),l=a(7),i=a.n(l),c=(a(13),a(14),a(8)),s=a(2),d=a(0),m=function(e){return Object(d.jsxs)("div",{className:"team-logo-card",id:e.id,onClick:function(o){return e.handleGameLogic(o.target.parentNode.id)},children:[Object(d.jsx)("img",{className:"team-logo",src:e.image,alt:"Logo for the "+e.name}),Object(d.jsx)("p",{children:e.name})]})},p=a(4),g=function(){var e=Object(n.useState)(0),o=Object(s.a)(e,2),a=o[0],t=o[1],l=Object(n.useState)(0),i=Object(s.a)(l,2),g=i[0],r=i[1],f=Object(n.useState)([]),b=Object(s.a)(f,2),h=b[0],u=b[1],j=Object(n.useState)(p),k=Object(s.a)(j,2),w=k[0],O=k[1],x=Object(n.useState)(!1),v=Object(s.a)(x,2),C=v[0],S=v[1],N=function(){t(0),S(!1),u([]),console.log(p),O(p.sort((function(e,o){return parseFloat(e.id)-parseFloat(o.id)})))},y=function(){a>=g&&r(a)},B=function(e){h.includes(e)||C?(y(),N()):(!function(e){u((function(o){return[].concat(Object(c.a)(o),[e])})),console.log(h)}(e),32===a?(alert("You won!"),S(!0),y()):t(a+1),console.log(a),console.log(a+1),a<=31&&O(L(w)))},L=function(e){for(var o=e.length-1;o>0;o--){var a=Math.floor(Math.random()*(o+1)),n=[e[a],e[o]];e[o]=n[0],e[a]=n[1]}return e};return C?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"scores",children:["Current Score: ",a," High Score: ",g,"Max Score: 32"]}),Object(d.jsx)("button",{onClick:N,children:"Click to replay!"}),Object(d.jsx)("div",{className:"team-logos",children:w.map((function(e){return Object(d.jsx)(m,{id:e.id,image:e.image,name:e.name,handleGameLogic:B},e.id)}))})]}):Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"scores",children:[Object(d.jsxs)("text",{children:["Current Score: ",a]}),Object(d.jsxs)("text",{children:["High Score: ",g]}),Object(d.jsx)("text",{children:"Max Score: 32"})]}),Object(d.jsx)("div",{className:"team-logos",children:p.map((function(e){return Object(d.jsx)(m,{id:e.id,image:e.image,name:e.name,handleGameLogic:B},e.id)}))})]})};var r=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("header",{children:[Object(d.jsx)("img",{id:"logo",src:"https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg",alt:"nfl-logo"}),Object(d.jsx)("text",{children:"NFL Team Memory Card Game"})]}),Object(d.jsxs)("div",{className:"subheader",children:[Object(d.jsx)("div",{className:"instructions",children:"Get points by clicking on different logo each time... max score is 32!"}),Object(d.jsx)(g,{})]})]})},f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(o){var a=o.getCLS,n=o.getFID,t=o.getFCP,l=o.getLCP,i=o.getTTFB;a(e),n(e),t(e),l(e),i(e)}))};i.a.render(Object(d.jsx)(t.a.StrictMode,{children:Object(d.jsx)(r,{})}),document.getElementById("root")),f()},4:function(e){e.exports=JSON.parse('[{"id":1,"clicked":false,"name":"Arizona Cardinals","image":"http://loodibee.com/wp-content/uploads/nfl-arizona-cardinals-team-logo-2.png"},{"id":2,"clicked":false,"name":"Atlanta Falcons","image":"http://loodibee.com/wp-content/uploads/nfl-atlanta-falcons-team-logo-2.png"},{"id":3,"clicked":false,"name":"Baltimore Ravens","image":"http://loodibee.com/wp-content/uploads/nfl-baltimore-ravens-team-logo-2.png"},{"id":4,"clicked":false,"name":"Buffalo Bills","image":"http://loodibee.com/wp-content/uploads/nfl-buffalo-bills-team-logo-2.png"},{"id":5,"clicked":false,"name":"Carolina Panthers","image":"http://loodibee.com/wp-content/uploads/nfl-carolina-panthers-team-logo-2.png"},{"id":6,"clicked":false,"name":"Chicago Bears","image":"http://loodibee.com/wp-content/uploads/nfl-chicago-bears-team-logo-2.png"},{"id":7,"clicked":false,"name":"Cincinnati Bengals","image":"http://loodibee.com/wp-content/uploads/nfl-cincinnati-bengals-team-logo-2.png"},{"id":8,"clicked":false,"name":"Cleveland Browns","image":"http://loodibee.com/wp-content/uploads/nfl-cleveland-browns-team-logo-2.png"},{"id":9,"clicked":false,"name":"Dallas Cowboys","image":"http://loodibee.com/wp-content/uploads/nfl-dallas-cowboys-team-logo-2.png"},{"id":10,"clicked":false,"name":"Denver Broncos","image":"http://loodibee.com/wp-content/uploads/nfl-denver-broncos-team-logo-2.png"},{"id":11,"clicked":false,"name":"Detroit Lions","image":"http://loodibee.com/wp-content/uploads/nfl-detroit-lions-team-logo-2.png"},{"id":12,"clicked":false,"name":"Green Bay Packers","image":"http://loodibee.com/wp-content/uploads/nfl-green-bay-packers-team-logo-2.png"},{"id":13,"clicked":false,"name":"Houston Texans","image":"http://loodibee.com/wp-content/uploads/nfl-houston-texans-team-logo-2.png"},{"id":14,"clicked":false,"name":"Indianapolis Colts","image":"http://loodibee.com/wp-content/uploads/nfl-indianapolis-colts-team-logo-2.png"},{"id":15,"clicked":false,"name":"Jacksonville Jaguars","image":"http://loodibee.com/wp-content/uploads/nfl-jacksonville-jaguars-team-logo-2.png"},{"id":16,"clicked":false,"name":"Kansas City Chiefs","image":"http://loodibee.com/wp-content/uploads/nfl-kansas-city-chiefs-team-logo-2.png"},{"id":17,"clicked":false,"name":"Las Vegas Raiders","image":"http://loodibee.com/wp-content/uploads/nfl-oakland-raiders-team-logo.png"},{"id":18,"clicked":false,"name":"Los Angeles Chargers","image":"http://loodibee.com/wp-content/uploads/nfl-los-angeles-chargers-team-logo-2.png"},{"id":19,"clicked":false,"name":"Los Angeles Rams","image":"http://loodibee.com/wp-content/uploads/nfl-los-angeles-rams-team-logo-2.png"},{"id":20,"clicked":false,"name":"Miami Dolphins","image":"http://loodibee.com/wp-content/uploads/nfl-miami-dolphins-team-logo-2.png"},{"id":21,"clicked":false,"name":"Minnesota Vikings","image":"http://loodibee.com/wp-content/uploads/nfl-minnesota-vikings-team-logo-2.png"},{"id":22,"clicked":false,"name":"New England Patriots","image":"http://loodibee.com/wp-content/uploads/nfl-new-england-patriots-team-logo-2.png"},{"id":23,"clicked":false,"name":"New Orleans Saints","image":"http://loodibee.com/wp-content/uploads/nfl-new-orleans-saints-team-logo-2.png"},{"id":24,"clicked":false,"name":"New York Giants","image":"http://loodibee.com/wp-content/uploads/nfl-new-york-giants-team-logo-2.png"},{"id":25,"clicked":false,"name":"New York Jets","image":"http://loodibee.com/wp-content/uploads/nfl-new-york-jets-team-logo.png"},{"id":26,"clicked":false,"name":"Philadelphia Eagles","image":"http://loodibee.com/wp-content/uploads/nfl-philadelphia-eagles-team-logo-2.png"},{"id":27,"clicked":false,"name":"Pittsburgh Steelers","image":"http://loodibee.com/wp-content/uploads/nfl-pittsburgh-steelers-team-logo-2.png"},{"id":28,"clicked":false,"name":"San Francisco 49ers","image":"http://loodibee.com/wp-content/uploads/nfl-san-francisco-49ers-team-logo-2.png"},{"id":29,"clicked":false,"name":"Seattle Seahawks","image":"http://loodibee.com/wp-content/uploads/nfl-seattle-seahawks-team-logo-2.png"},{"id":30,"clicked":false,"name":"Tampa Bay Buccaneers","image":"http://loodibee.com/wp-content/uploads/nfl-tampa-bay-buccaneers-team-logo-2.png"},{"id":31,"clicked":false,"name":"Tennessee Titans","image":"http://loodibee.com/wp-content/uploads/nfl-tennessee-titans-team-logo-2.png"},{"id":32,"clicked":false,"name":"Washington Football Team","image":"http://loodibee.com/wp-content/uploads/washington-football-team-2020-logo.png"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.1e93bcaa.chunk.js.map