"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{854:function(e,t,r){r.d(t,{a:function(){return i}});var n=r(643),a=r(184),i=function(){return(0,a.jsx)(n.p2,{height:"80",width:"80",color:"#4fa94d",ariaLabel:"circles-loading",wrapperStyle:{},wrapperClass:"",visible:!0})}},186:function(e,t,r){r.r(t);var n=r(861),a=r(439),i=r(757),c=r.n(i),u=r(854),o=r(791),s=r(689),p=r(933),h=r(184);t.default=function(){var e=(0,s.UO)().movieId,t=(0,o.useState)(!1),r=(0,a.Z)(t,2),i=r[0],N=r[1],d=(0,o.useState)(""),l=(0,a.Z)(d,2),f=l[0],I=l[1],j=(0,o.useState)(null),v=(0,a.Z)(j,2),m=v[0],z=v[1];return(0,o.useEffect)((function(){function t(){return(t=(0,n.Z)(c().mark((function t(){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,N(!0),t.next=4,(0,p.gq)(e);case 4:if(r=t.sent){t.next=7;break}return t.abrupt("return");case 7:z(r),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),I("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 13:return t.prev=13,N(!1),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),(0,h.jsxs)(h.Fragment,{children:[m&&m.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,h.jsxs)("div",{children:[(0,h.jsx)("h3",{children:t}),(0,h.jsx)("p",{children:r})]},n)})),(0,h.jsx)("div",{}),i&&(0,h.jsx)(u.a,{}),f&&(0,h.jsx)("p",{children:f})]})}},933:function(e,t,r){r.d(t,{Ij:function(){return s},Lt:function(){return u},TL:function(){return p},bN:function(){return o},gq:function(){return h}});var n=r(861),a=r(757),i=r.n(a),c=r(243),u=function(){var e=(0,n.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?language=en-US",t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,u,o,s,p,h;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?language=en-US"),r);case 3:return n=e.sent,a=n.data,u=a.title,o=a.overview,s=a.poster_path,p=a.release_date,h=a.vote_average,e.abrupt("return",{title:u,overview:o,poster_path:s,release_date:p,vote_average:h});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),s=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&include_adult=false&language=en-US&page=1"),r);case 3:return n=e.sent,e.abrupt("return",n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),r);case 3:return n=e.sent,a=n.data.cast,u=a.map((function(e){return{name:e.name,profile_path:e.profile_path,character:e.character,id:e.id}})),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(i().mark((function e(t){var r,n,a,u;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjdiOWUxNGYzNTg3NjIwODVjNGE4YzkxYzc5ZjhlZSIsInN1YiI6IjY0NzM0NTgwNWNkMTZlMDExNmQ5NzRhNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j8VcB9r4iSid7CNi1G7L9GBX-4TzHHGev52Q2Kpm-aQ"}},e.next=3,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?language=en-US&page=1"),r);case 3:return n=e.sent,a=n.data.results,u=a.map((function(e){return{author:e.author,content:e.content,id:e.id}})),e.abrupt("return",u);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.3a4d478d.chunk.js.map