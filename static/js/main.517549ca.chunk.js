(this["webpackJsonpmemory-card-game"]=this["webpackJsonpmemory-card-game"]||[]).push([[0],{13:function(e,i,a){},14:function(e,i,a){},16:function(e,i,a){"use strict";a.r(i);var c=a(1),t=a.n(c),n=a(7),s=a.n(n),m=(a(13),a(14),a(8)),l=a(2),o=a(0),g=function(e){return Object(o.jsxs)("div",{className:"team-logo-card",id:e.id,onClick:function(i){return e.handleGameLogic(i.target.parentNode.id)},children:[Object(o.jsx)("img",{className:"team-logo",src:e.image,alt:"Logo for the "+e.name}),Object(o.jsx)("p",{children:e.name})]})},r=a(4),d=function(){var e=Object(c.useState)(0),i=Object(l.a)(e,2),a=i[0],t=i[1],n=Object(c.useState)(0),s=Object(l.a)(n,2),d=s[0],p=s[1],u=Object(c.useState)([]),h=Object(l.a)(u,2),f=h[0],j=h[1],k=Object(c.useState)(r),b=Object(l.a)(k,2),O=b[0],x=b[1],v=Object(c.useState)(!1),N=Object(l.a)(v,2),C=N[0],S=N[1],w=function(){t(0),S(!1),j([]),console.log(r),x(r.sort((function(e,i){return parseFloat(e.id)-parseFloat(i.id)})))},B=function(){a>=d&&p(a)},L=function(e){f.includes(e)||C?(B(),w()):(!function(e){j((function(i){return[].concat(Object(m.a)(i),[e])})),console.log(f)}(e),32===a?(alert("You won!"),S(!0),B()):t(a+1),console.log(a),console.log(a+1),a<=31&&x(F(O)))},F=function(e){for(var i=e.length-1;i>0;i--){var a=Math.floor(Math.random()*(i+1)),c=[e[a],e[i]];e[i]=c[0],e[a]=c[1]}return e};return C?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"scores",children:["Current Score: ",a," High Score: ",d,"Max Score: 32"]}),Object(o.jsx)("button",{onClick:w,children:"Click to replay!"}),Object(o.jsx)("div",{className:"team-logos",children:O.map((function(e){return Object(o.jsx)(g,{id:e.id,image:e.image,name:e.name,handleGameLogic:L},e.id)}))})]}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"scores",children:[Object(o.jsxs)("text",{children:["Current Score: ",a]}),Object(o.jsxs)("text",{children:["High Score: ",d]}),Object(o.jsx)("text",{children:"Max Score: 32"})]}),Object(o.jsx)("div",{className:"team-logos",children:r.map((function(e){return Object(o.jsx)(g,{id:e.id,image:e.image,name:e.name,handleGameLogic:L},e.id)}))})]})};var p=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("header",{children:[Object(o.jsx)("img",{id:"logo",src:"https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg",alt:"nfl-logo"}),Object(o.jsx)("text",{children:"NFL Team Memory Card Game"})]}),Object(o.jsxs)("div",{className:"subheader",children:[Object(o.jsx)("div",{className:"instructions",children:"Get points by clicking on different logo each time... max score is 32!"}),Object(o.jsx)(d,{})]})]})},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,17)).then((function(i){var a=i.getCLS,c=i.getFID,t=i.getFCP,n=i.getLCP,s=i.getTTFB;a(e),c(e),t(e),n(e),s(e)}))};s.a.render(Object(o.jsx)(t.a.StrictMode,{children:Object(o.jsx)(p,{})}),document.getElementById("root")),u()},4:function(e){e.exports=JSON.parse('[{"id":1,"clicked":false,"name":"Arizona Cardinals","image":"https://i.imgur.com/RVfwnZz.png"},{"id":2,"clicked":false,"name":"Atlanta Falcons","image":"https://i.imgur.com/xAvw1Nt.png"},{"id":3,"clicked":false,"name":"Baltimore Ravens","image":"https://i.imgur.com/342cvvq.png"},{"id":4,"clicked":false,"name":"Buffalo Bills","image":"https://i.imgur.com/INsNBpj.png"},{"id":5,"clicked":false,"name":"Carolina Panthers","image":"https://i.imgur.com/0Vvocu0.png"},{"id":6,"clicked":false,"name":"Chicago Bears","image":"https://i.imgur.com/Pfb8FPY.png"},{"id":7,"clicked":false,"name":"Cincinnati Bengals","image":"https://i.imgur.com/xAvw1Nt.png"},{"id":8,"clicked":false,"name":"Cleveland Browns","image":"https://i.imgur.com/0Oed10R.png"},{"id":9,"clicked":false,"name":"Dallas Cowboys","image":"https://i.imgur.com/fnlNonn.png"},{"id":10,"clicked":false,"name":"Denver Broncos","image":"https://i.imgur.com/PZ67fJp.png"},{"id":11,"clicked":false,"name":"Detroit Lions","image":"https://i.imgur.com/Q6tmJYX.png"},{"id":12,"clicked":false,"name":"Green Bay Packers","image":"https://i.imgur.com/T3dLZg6.png"},{"id":13,"clicked":false,"name":"Houston Texans","image":"https://i.imgur.com/Ekc0DZY.png"},{"id":14,"clicked":false,"name":"Indianapolis Colts","image":"https://i.imgur.com/SPYs51c.png"},{"id":15,"clicked":false,"name":"Jacksonville Jaguars","image":"https://i.imgur.com/h5OLgQH.png"},{"id":16,"clicked":false,"name":"Kansas City Chiefs","image":"https://i.imgur.com/vWspVFy.png"},{"id":17,"clicked":false,"name":"Las Vegas Raiders","image":"https://i.imgur.com/WjK0fab.png"},{"id":18,"clicked":false,"name":"Los Angeles Chargers","image":"https://i.imgur.com/f7xGtIp.png"},{"id":19,"clicked":false,"name":"Los Angeles Rams","image":"https://i.imgur.com/31UGAkq.png"},{"id":20,"clicked":false,"name":"Miami Dolphins","image":"https://i.imgur.com/c2eOBwq.png"},{"id":21,"clicked":false,"name":"Minnesota Vikings","image":"https://i.imgur.com/KGCpwWa.png"},{"id":22,"clicked":false,"name":"New England Patriots","image":"https://i.imgur.com/5hQ0DWJ.png"},{"id":23,"clicked":false,"name":"New Orleans Saints","image":"https://i.imgur.com/rVg4mP9.png"},{"id":24,"clicked":false,"name":"New York Giants","image":"https://i.imgur.com/lRDhgBz.png"},{"id":25,"clicked":false,"name":"New York Jets","image":"https://i.imgur.com/RHUkWgN.png"},{"id":26,"clicked":false,"name":"Philadelphia Eagles","image":"https://i.imgur.com/CKA9GA0.png"},{"id":27,"clicked":false,"name":"Pittsburgh Steelers","image":"https://i.imgur.com/GpnsiXF.png"},{"id":28,"clicked":false,"name":"San Francisco 49ers","image":"https://i.imgur.com/97QrSZ2.png"},{"id":29,"clicked":false,"name":"Seattle Seahawks","image":"https://i.imgur.com/6VmSuZm.png"},{"id":30,"clicked":false,"name":"Tampa Bay Buccaneers","image":"https://i.imgur.com/1fQlgmL.png"},{"id":31,"clicked":false,"name":"Tennessee Titans","image":"https://i.imgur.com/0z4lUuC.png"},{"id":32,"clicked":false,"name":"Washington Football Team","image":"https://i.imgur.com/jpbseRB.png"}]')}},[[16,1,2]]]);
//# sourceMappingURL=main.517549ca.chunk.js.map