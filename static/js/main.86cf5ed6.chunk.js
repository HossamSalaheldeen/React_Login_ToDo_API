(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(15),r=a.n(c),i=(a(31),a(20)),o=a(4),l=a(5),u=a(7),d=a(6),j=a(23),h=(a.p,a(32),a(25)),m=a(0),b=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.call(this)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.items.map((function(t){return Object(m.jsx)("div",{className:"list-group",children:Object(m.jsxs)("li",{className:t.finish?"mt-4 p-2 list-group-item list-group-item-success":"mt-4 p-2 list-group-item",children:[t.text,Object(m.jsx)("i",{className:"mr-4 mt-1 fas fa-calendar-times float-right",style:{cursor:"pointer",color:"red"},onClick:function(){e.props.deleteItem(t.key)}}),Object(m.jsx)("i",{className:"mr-4 mt-1 fas fa-calendar-check float-right",style:{cursor:"pointer",color:"green"},onClick:function(){return e.props.finishItem(t)}})]})},t.key)}));return Object(m.jsx)("div",{children:Object(m.jsx)(h.a,{duration:500,easing:"ease-in-out",children:t})})}}]),a}(n.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleInput=function(e){s.setState({currentItem:{text:e.target.value,key:Date.now(),finish:!1}})},s.addItem=function(e){e.preventDefault();var t=s.state.currentItem;if(""!==t.text){var a=[].concat(Object(j.a)(s.state.items),[t]);s.setState({items:a,currentItem:{text:"",key:""}}),s.saveToLocalStorage(a)}},s.deleteItem=function(e){var t=s.state.items.filter((function(t){return t.key!==e}));s.setState({items:t}),s.saveToLocalStorage(t)},s.finishItem=function(e){var t=Object(j.a)(s.state.items),a=t.indexOf(e);t[a].finish=!t[a].finish,s.setState({items:t}),s.saveToLocalStorage(t)},s.saveToLocalStorage=function(e){localStorage.items=JSON.stringify(e)},s.state={items:[],currentItem:{text:"",key:"",finish:""}},s}return Object(l.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.items){var e=JSON.parse(localStorage.items);this.setState({items:e})}}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"alert alert-primary",children:"Tasks List"}),Object(m.jsx)("div",{className:"mt-5 jumbotron row",children:Object(m.jsxs)("div",{className:"col col-md-12",children:[Object(m.jsxs)("form",{className:"form-inline",onSubmit:this.addItem,children:[Object(m.jsx)("div",{className:"flex-fill mr-2",children:Object(m.jsx)("input",{className:"form-control w-100",type:"text",placeholder:"Enter task",value:this.state.currentItem.text,onChange:this.handleInput})}),Object(m.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Add"})]}),Object(m.jsx)(b,{items:this.state.items,deleteItem:this.deleteItem,finishItem:this.finishItem})]})})]})}}]),a}(n.a.Component),O=a(12),f=a.n(O),g=a(16),x=a(17),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).setInputValue=function(t){e.setState(Object(x.a)({},t.target.name,t.target.value))},e.login=function(){var t=Object(g.a)(f.a.mark((function t(a){var s,n,c,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),s="NOT_LOGGED_IN",n={email:e.state.email,password:e.state.password},t.next=5,fetch("https://reqres.in/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(n)});case 5:return c=t.sent,t.next=8,c.json();case 8:(r=t.sent).token?(s="LOGGED_IN",e.props.handleSuccessfulAuth(s)):(alert(r.error),s="NOT_LOGGED_IN");case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.state={email:"",password:""},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{children:"Login"}),Object(m.jsxs)("form",{children:[Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email*"}),Object(m.jsx)("input",{type:"email",id:"exampleInputEmail1",className:"form-control",name:"email",value:this.state.email,onChange:this.setInputValue})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{htmlFor:"exampleInputPassword",children:"Password*"}),Object(m.jsx)("input",{type:"password",id:"exampleInputPassword",className:"form-control",name:"password",value:this.state.password,onChange:this.setInputValue})]}),Object(m.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:this.login,children:"Login"})]}),Object(m.jsxs)("div",{class:"mt-2 jumbotron text-center",children:[Object(m.jsx)("h4",{class:"display-4",children:"Try Successful Login"}),Object(m.jsx)("hr",{class:"my-4"}),Object(m.jsx)("p",{class:"h4",children:"Email : eve.holt@reqres.in"}),Object(m.jsx)("p",{class:"h4",children:"Password : cityslicka"})]})]})}}]),a}(n.a.Component),N=a(2),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleSuccessfulAuth=function(e){s.props.handleLogin(e),s.setState({redirect:"/dashboard"})},s.state={redirect:null},s}return Object(l.a)(a,[{key:"render",value:function(){return this.state.redirect?Object(m.jsx)(N.a,{to:this.state.redirect}):Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"alert alert-primary",children:"Home"}),Object(m.jsxs)("h5",{className:"alert alert-info",children:["Status: ",this.props.loggedInStatus]}),Object(m.jsx)(v,{handleSuccessfulAuth:this.handleSuccessfulAuth})]})}}]),a}(n.a.Component),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(o.a)(this,a),t.call(this)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{class:"col col-12 col-md-6 col-lg-4",children:Object(m.jsxs)("div",{className:"card mt-4",children:[Object(m.jsx)("img",{className:"card-img-top",src:this.props.user.avatar,alt:"User image"}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title",children:[this.props.user.first_name," ",this.props.user.last_name]}),Object(m.jsx)("p",{className:"card-text",children:this.props.user.email})]})]})})}}]),a}(n.a.Component),y=a.p+"static/media/loading.b5f9ca4c.gif",k=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={users:[],loading:!1},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(f.a.mark((function e(){var t=this;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({loading:!0}),setTimeout(Object(g.a)(f.a.mark((function e(){var a,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reqres.in/api/users?page=2",{method:"GET",headers:{"content-type":"application/json"}});case 2:return a=e.sent,e.next=5,a.json();case 5:s=e.sent,t.setState({users:s.data,loading:!1});case 7:case"end":return e.stop()}}),e)}))),5e3);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)("h1",{className:"alert alert-primary",children:"Users List"}),Object(m.jsx)("div",{className:"row",children:this.state.loading?Object(m.jsx)("img",{src:y,style:{width:"100%"},alt:"loading"}):this.state.users.map((function(e){return Object(m.jsx)(I,{user:e},e.id)}))})]})}}]),a}(n.a.Component),L=a(11),w=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).handleLogoutClick=function(){s.props.handleLogout("NOT_LOGGED_IN")},s}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"px-1 ",id:"sticky-sidebar",children:Object(m.jsxs)("nav",{className:"nav flex-column flex-nowrap vh-100 overflow-auto p-2",children:[Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(L.b,{to:"/dashboard/todo",className:"nav-link",children:"Todo list"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(L.b,{to:"/dashboard/users",className:"nav-link",children:"User list"})}),Object(m.jsx)("li",{className:"nav-item",children:Object(m.jsx)(L.b,{to:"/",className:"nav-link",onClick:function(){return e.handleLogoutClick()},children:"Logout"})})]})})}}]),a}(n.a.Component),C=function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"mt-5 p-5 alert alert-danger",children:"Page Not Found"})})},T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(l.a)(a,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-2 bg-dark",children:[Object(m.jsx)("h5",{style:{color:"white"},children:"Dashboard"}),Object(m.jsxs)("h6",{style:{color:"white"},children:["Status: ",this.props.loggedInStatus]}),Object(m.jsx)(w,{handleLogout:this.props.handleLogout})]}),Object(m.jsx)("div",{className:"col",children:Object(m.jsxs)(N.d,{children:[Object(m.jsx)(N.b,{path:"/dashboard/todo",exact:!0,component:p}),Object(m.jsx)(N.b,{path:"/dashboard/users",exact:!0,component:k}),Object(m.jsx)(N.b,{path:"/dashboard/*",component:C})]})})]})})}}]),a}(n.a.Component),D=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).handleLogin=function(t){e.setState({loggedInStatus:t}),e.saveToLocalStorage(t)},e.handleLogout=function(t){e.setState({loggedInStatus:t}),e.saveToLocalStorage(t)},e.saveToLocalStorage=function(e){localStorage.setItem("loggedInStatus",e)},e.state={loggedInStatus:"NOT_LOGGED_IN"},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){if(localStorage.loggedInStatus){var e=localStorage.getItem("loggedInStatus");this.setState({loggedInStatus:e})}}},{key:"render",value:function(){var e=this;return Object(m.jsx)(L.a,{children:Object(m.jsxs)(N.d,{children:[Object(m.jsx)(N.b,{path:"/",exact:!0,render:function(t){return Object(m.jsx)(S,Object(i.a)({handleLogin:e.handleLogin,loggedInStatus:e.state.loggedInStatus},t))}}),"LOGGED_IN"===localStorage.getItem("loggedInStatus")&&Object(m.jsx)(N.b,{path:"/dashboard",render:function(t){return Object(m.jsx)(T,Object(i.a)({handleLogout:e.handleLogout,loggedInStatus:e.state.loggedInStatus},t))}})]})})}}]),a}(n.a.Component),E=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))};a(40),a(41);r.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root")),E()}},[[42,1,2]]]);
//# sourceMappingURL=main.86cf5ed6.chunk.js.map