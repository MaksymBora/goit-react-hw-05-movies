"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[42],{197:function(n,e,r){r.d(e,{Hq:function(){return d},Mc:function(){return s},oO:function(){return l},vw:function(){return o},y:function(){return u}});var t=r(4165),a=r(5861),i=r(1243),c="?api_key=7f6cfc769c2057b00f9c41481e14f95f";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(){var e;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/trending/movie/day".concat(c),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"}});case 3:return e=n.sent,n.abrupt("return",e.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("movie/".concat(e,"?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:c}});case 3:return r=n.sent,n.abrupt("return",r.data);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/credits?language=en-US"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:c}});case 3:return r=n.sent,n.abrupt("return",r.data.cast);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i.Z.get("/movie/".concat(e,"/reviews?language=en-US&page=1"),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:c}});case 3:return r=n.sent,n.abrupt("return",r.data.results);case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,t.Z)().mark((function n(e){var r,a,o=arguments;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,n.prev=1,n.next=4,i.Z.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=").concat(r),{headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZjZjZmM3NjljMjA1N2IwMGY5YzQxNDgxZTE0Zjk1ZiIsInN1YiI6IjY0OWIwYzQxMGU1YWJhMDEzOWRlOThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgrZWZjw6R6HE8zHjFBAbKz3jQPlE2t--sCg4ktddXs"},params:{key:c}});case 4:return a=n.sent,n.abrupt("return",a.data);case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}()},2042:function(n,e,r){r.r(e),r.d(e,{default:function(){return C}});var t,a,i,c,o,s,u,l,d,p,h,Z=r(4165),x=r(3433),j=r(5861),f=r(9439),g=r(2791),v=r(7689),I=r(197),m=r(168),b=r(6487),J=r(1087),w=b.ZP.div(t||(t=(0,m.Z)(["\n  padding-bottom: 50px;\n  margin-top: 25px;\n"]))),y=b.ZP.img(a||(a=(0,m.Z)(["\n  border-radius: 4px;\n"]))),z=b.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  align-items: end;\n  gap: 30px;\n  padding-bottom: 50px;\n"]))),N=b.ZP.h2(c||(c=(0,m.Z)(["\n  font-size: 24px;\n  line-height: 1.3;\n  margin-bottom: 10px;\n"]))),W=b.ZP.p(o||(o=(0,m.Z)(["\n  font-size: 16px;\n  line-height: 1.3;\n  margin-bottom: 10px;\n"]))),k=b.ZP.div(s||(s=(0,m.Z)(["\n  padding-top: 15px;\n  padding-bottom: 25px;\n  margin-bottom: 20px;\n  border-top: 1px solid #d3d3d3;\n  border-bottom: 1px solid #d3d3d3;\n"]))),Y=b.ZP.ul(u||(u=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),O=(0,b.ZP)(J.rU)(l||(l=(0,m.Z)(["\n  border: none;\n  border-radius: 25px;\n  padding: 8px;\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: rgba(122, 184, 147, 1);\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);\n  font-size: 16px;\n  line-height: 1.3;\n  cursor: pointer;\n  transition: color 250ms ease-in-out;\n\n  &:hover {\n    color: yellow;\n  }\n"]))),M=r(184),Q=function(n){var e=n.items,r=e.poster_path,t=e.title,a=e.vote_average,i=e.overview,c=n.genres;return(0,M.jsxs)(w,{children:[(0,M.jsxs)(z,{children:[(0,M.jsx)("div",{children:(0,M.jsx)(y,{src:"https://image.tmdb.org/t/p/w400"+r,alt:t})}),(0,M.jsxs)("div",{children:[(0,M.jsx)(N,{children:t}),(0,M.jsxs)(W,{children:["User score: ",a?a.toFixed(1):"N/A","%"]}),(0,M.jsx)(N,{children:"Overview"}),(0,M.jsx)(W,{children:i}),(0,M.jsx)(N,{children:"Genres"}),(0,M.jsx)("div",{children:c.map((function(n){return(0,M.jsx)(W,{children:n.name},n.id)}))})]})]}),(0,M.jsxs)(k,{children:[(0,M.jsx)(N,{children:"Additional Information"}),(0,M.jsxs)(Y,{children:[(0,M.jsx)("li",{children:(0,M.jsx)(O,{to:"cast",children:"Cast"})}),(0,M.jsx)("li",{children:(0,M.jsx)(O,{to:"reviews",children:"Reviews"})})]})]}),(0,M.jsx)(g.Suspense,{fallback:(0,M.jsx)("div",{children:"Loadind..."}),children:(0,M.jsx)(v.j3,{})})]})},E=(0,b.ZP)(J.rU)(d||(d=(0,m.Z)(["\n  border: none;\n  border-radius: 4px;\n  padding: 10px;\n  color: #fff;\n  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);\n  background: rgba(122, 184, 147, 1);\n  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);\n  cursor: pointer;\n  transition: color 250ms ease-in-out;\n\n  &:hover {\n    color: yellow;\n  }\n"]))),G=b.ZP.div(p||(p=(0,m.Z)(["\n  padding: 20px;\n"]))),U=b.ZP.div(h||(h=(0,m.Z)([""]))),C=function(){var n,e,r=(0,g.useState)([]),t=(0,f.Z)(r,2),a=t[0],i=t[1],c=(0,g.useState)([]),o=(0,f.Z)(c,2),s=o[0],u=o[1],l=(0,v.UO)().movieId,d=(0,v.TH)(),p=(0,g.useRef)(null!==(n=null===(e=d.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/movies");return(0,g.useEffect)((function(){var n=function(){var n=(0,j.Z)((0,Z.Z)().mark((function n(){var e;return(0,Z.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,I.Mc)(l);case 3:e=n.sent,i(e),u((0,x.Z)(e.genres)),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}),[l]),(0,M.jsxs)(G,{children:[(0,M.jsx)(E,{to:p.current,children:"Back"}),(0,M.jsx)(U,{children:(0,M.jsx)(Q,{items:a,genres:s})})]})}}}]);
//# sourceMappingURL=42.71f0dfb1.chunk.js.map