"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[519],{197:function(n,e,t){t.d(e,{Hq:function(){return p},Mc:function(){return s},oO:function(){return l},vw:function(){return c},y:function(){return u}});var r=t(4165),a=t(5861),o=t(1243),i="?api_key=7f6cfc769c2057b00f9c41481e14f95f";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/trending/movie/day".concat(i),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("movie/".concat(e,"?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:i}});case 3:return t=n.sent,n.abrupt("return",t.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(e,"/credits?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:i}});case 3:return t=n.sent,n.abrupt("return",t.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o.Z.get("/movie/".concat(e,"/reviews?language=en-US&page=1"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:i}});case 3:return t=n.sent,n.abrupt("return",t.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a,c=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,n.prev=1,n.next=4,o.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(t),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:i}});case 4:return a=n.sent,n.abrupt("return",a.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},1519:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var r,a,o,i=t(4165),c=t(5861),s=t(9439),u=t(2791),l=t(1087),p=t(7689),d=t(197),h=t(1306),f=t(3794),x=t(168),Z=t(6487),j=Z.ZP.span(r||(r=(0,x.Z)(["\n  position: relative;\n  display: inline-block;\n  margin: 30px 10px;\n"]))),g=Z.ZP.input(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 215px;\n  padding: 10px 0 10px 15px;\n  font-family: 'Open Sans', sans;\n  font-weight: 400;\n  color: #377d6a;\n  background: #efefef;\n  border: 0;\n  border-radius: 3px;\n  outline: 0;\n  text-indent: 60px;\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s ease-in-out;\n\n  &::-webkit-input-placeholder {\n    color: #efefef;\n    text-indent: 0;\n    font-weight: 300;\n  }\n\n  & + label {\n    display: inline-block;\n    position: absolute;\n    top: 8px;\n    left: 0;\n    bottom: 8px;\n    padding: 5px 15px;\n    color: #032429;\n    font-size: 11px;\n    font-weight: 700;\n    text-transform: uppercase;\n    text-shadow: 0 1px 0 rgba(19, 74, 70, 0);\n    transition: all 0.3s ease-in-out;\n    border-radius: 3px;\n    background: rgba(122, 184, 147, 0);\n\n    &:after {\n      position: absolute;\n      content: '';\n      width: 0;\n      height: 0;\n      top: 100%;\n      left: 50%;\n      margin-left: -3px;\n      border-left: 3px solid transparent;\n      border-right: 3px solid transparent;\n      border-top: 3px solid rgba(122, 184, 147, 0);\n      transition: all 0.3s ease-in-out;\n    }\n  }\n\n  &:focus,\n  &:active {\n    color: #377d6a;\n    text-indent: 0;\n    background: #fff;\n\n    &::-webkit-input-placeholder {\n      color: #aaa;\n    }\n\n    & + label {\n      color: #fff;\n      text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n      background: rgba(122, 184, 147, 1);\n      transform: translateY(-40px);\n\n      &:after {\n        border-top: 4px solid rgba(122, 184, 147, 1);\n      }\n    }\n  }\n"]))),b=Z.ZP.button(o||(o=(0,x.Z)(["\n  border: none;\n  border-radius: 4px;\n  padding: 11px;\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: rgba(122, 184, 147, 1);\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);\n  cursor: pointer;\n  transition: color 250ms ease-in-out;\n\n  &:hover {\n    color: yellow;\n  }\n"]))),I=t(184),v=function(n){var e=n.onSubmit,t=n.inputData,r=(n.queryString,n.onChange);return(0,I.jsxs)("form",{onSubmit:e,children:[(0,I.jsxs)(j,{children:[(0,I.jsx)(g,{id:"movies",type:"text",name:"search",value:t,onChange:r,placeholder:"Probably Comedy",autoComplete:"off"}),(0,I.jsx)("label",{htmlFor:"movies",children:"Enjoy"})]}),(0,I.jsx)(b,{type:"submit",children:"Search"})]})},y=(0,u.lazy)((function(){return t.e(49).then(t.bind(t,2049))})),m=function(){var n,e,t=(0,u.useState)([]),r=(0,s.Z)(t,2),a=r[0],o=r[1],x=(0,l.lr)(),Z=(0,s.Z)(x,2),j=Z[0],g=Z[1],b=(0,u.useState)(null!==(n=j.get("searchQuery"))&&void 0!==n?n:""),m=(0,s.Z)(b,2),w=m[0],J=m[1],z=(0,u.useState)(),k=(0,s.Z)(z,2),N=k[0],W=k[1],Y=(0,u.useState)(1),O=(0,s.Z)(Y,2),Q=O[0],M=O[1],C=(0,p.TH)(),E=null!==(e=j.get("searchQuery"))&&void 0!==e?e:"";(0,u.useEffect)((function(){if(E){var n=function(){var n=(0,c.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,d.Hq)(E,Q);case 3:e=n.sent,o(e.results),W(e.total_pages),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),h.ZP.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}else o([])}),[E,Q]);return(0,I.jsxs)("div",{children:[(0,I.jsx)(v,{onSubmit:function(n){if(n.preventDefault(),""===w)return h.ZP.error("Sorry, please provide a search word");g({searchQuery:w}),h.ZP.success((0,I.jsxs)("div",{children:["I like ",(0,I.jsx)("b",{children:w})," too!"]}),{duration:4e3,icon:"\ud83d\udd25"})},inputData:w,onChange:function(n){J(n.target.value)}}),(0,I.jsx)(y,{items:a,stateItem:{from:C}}),(0,I.jsx)(h.x7,{position:"top-right",reverseOrder:!0}),0!==a.length&&(0,I.jsx)(f.Z,{count:N,color:"primary",onClick:function(n){var e=parseInt(n.target.textContent);M(e)}})]})}}}]);
//# sourceMappingURL=519.c43338c0.chunk.js.map