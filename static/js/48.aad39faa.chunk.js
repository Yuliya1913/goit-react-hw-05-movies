"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[48],{854:function(e,t,r){r.d(t,{a:function(){return i}});var n=r(643),a=r(184),i=function(){return(0,a.jsx)(n.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},48:function(e,t,r){r.r(t),r.d(t,{default:function(){return z}});var n=r(861),a=r(439),i=r(757),c=r.n(i),s=r(87),o="Button_button__wiIYs",u=r(184),l=function(){return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(s.rU,{to:"path",className:o,children:"BACK"})})},h="CartFilm_wrap__1gisq",p="CartFilm_wrapdata__oMCgb",d="CartFilm_title_film__erp6Q",N="CartFilm_text_film__TyQ6B",f=function(e){var t=e.film,r=t.title,n=t.overview,a=t.poster_path,i=t.release_date,c=t.vote_average;return(0,u.jsxs)("div",{className:h,children:[(0,u.jsx)("div",{children:(0,u.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(a),alt:r})}),(0,u.jsxs)("div",{className:p,children:[(0,u.jsx)("h2",{className:d,children:r}),(0,u.jsxs)("p",{className:N,children:["User count ",(10*c).toFixed(),"%"]}),(0,u.jsx)("p",{className:N,children:i.slice(0,4)}),(0,u.jsx)("h3",{className:d,children:"overview"}),(0,u.jsx)("p",{className:N,children:n})]})]})},m=r(854),j=r(791),v=r(689),I=r(933),x="MoviesDetalise_title_data__-TRuI",g="MoviesDetalise_link_data__XL8fT",z=function(){var e,t,r=(0,v.UO)().movieId,i=(0,v.TH)();console.log(i);var o=(0,j.useState)(null),h=(0,a.Z)(o,2),p=h[0],d=h[1],N=(0,j.useState)(!1),z=(0,a.Z)(N,2),_=z[0],w=z[1],G=(0,j.useState)(""),J=(0,a.Z)(G,2),Z=J[0],b=J[1],y=(0,j.useRef)(null!==(e=null===(t=i.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,j.useEffect)((function(){function e(){return(e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,I.bN)(r);case 4:if(t=e.sent){e.next=7;break}return e.abrupt("return");case 7:d(t),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),b("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 13:return e.prev=13,w(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(l,{path:y.current}),p&&(0,u.jsx)(f,{film:p}),(0,u.jsx)("h2",{className:x,children:"Additional information"}),(0,u.jsx)(s.rU,{to:"cast",className:g,children:"Cast"}),(0,u.jsx)(s.rU,{to:"reviews",className:g,children:"Reviews"}),(0,u.jsx)(j.Suspense,{fallback:(0,u.jsx)("div",{children:"Loading..."}),children:(0,u.jsx)(v.j3,{})}),_&&(0,u.jsx)(m.a,{}),Z&&(0,u.jsx)("p",{children:Z})]})}},933:function(e,t,r){r.d(t,{Ij:function(){return u},Lt:function(){return s},TL:function(){return l},bN:function(){return o},gq:function(){return h}});var n=r(861),a=r(757),i=r.n(a),c=r(243),s=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s,o,u,l,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),r);case 3:return n=e.sent,a=n.data,s=a.title,o=a.overview,u=a.poster_path,l=a.release_date,h=a.vote_average,e.abrupt("return",{title:s,overview:o,poster_path:u,release_date:l,vote_average:h});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),r);case 3:return n=e.sent,a=n.data.cast,s=a.map((function(e){return{name:e.name,profile_path:e.profile_path,character:e.character,id:e.id}})),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),r);case 3:return n=e.sent,a=n.data.results,s=a.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",s);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=48.aad39faa.chunk.js.map