const __vite__fileDeps=["assets/index-EnGwLZIn.js","assets/index-CF9SmqZD.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{r as m,c,j as a,C as o,_ as s}from"./index-EnGwLZIn.js";function p(){const[r,i]=m.useState(null),t=c();return m.useEffect(()=>{(async()=>{let e;switch(t.pathname){case"/tag/popular":e=(await s(()=>import("./index-EnGwLZIn.js").then(l=>l.p),__vite__mapDeps([0,1]))).default;break;case"/tag/new":e=(await s(()=>import("./index-EnGwLZIn.js").then(l=>l.h),__vite__mapDeps([0,1]))).default;break;case"/tag/puzzle":e=(await s(()=>import("./puzzle-Bg52RB9N.js"),[])).default;break;case"/tag/shooting":e=(await s(()=>import("./shooting-BRj_yWJx.js"),[])).default;break;case"/tag/sports":e=(await s(()=>import("./sports-Dijd1SCa.js"),[])).default;break;case"/tag/jump-&-run":e=(await s(()=>import("./index-EnGwLZIn.js").then(l=>l.f),__vite__mapDeps([0,1]))).default;break;default:e=[]}e&&i(e.flat())})()},[t]),a.jsx(a.Fragment,{children:r?a.jsxs(a.Fragment,{children:[t.pathname==="/tag/popular"?a.jsx("h3",{className:"text-xl mb-2",children:"Popular Games"}):t.pathname==="/tag/new"?a.jsx("h3",{className:"text-xl mb-2",children:"New Games"}):t.pathname==="/tag/puzzle"?a.jsx("h3",{className:"text-xl mb-2",children:"Puzzle Games"}):t.pathname==="/tag/shooting"?a.jsx("h3",{className:"text-xl mb-2",children:"Shooting Games"}):t.pathname==="/tag/sports"?a.jsx("h3",{className:"text-xl mb-2",children:"Sport Games"}):t.pathname==="/tag/jump-&-run"?a.jsx("h3",{className:"text-xl mb-2",children:"Jump & Run Games"}):a.jsx(a.Fragment,{}),r.length>0?a.jsx("div",{className:"w-[calc(100vw-275px)] inline-block",children:a.jsx("div",{className:"gap-2 flex justify-center flex-wrap",children:r.flat().map(n=>a.jsx(o,{id:n},n))})}):a.jsx("p",{className:"text-sm text-[#bbb]",children:"No games are available at the moment."})]}):a.jsx(a.Fragment,{children:a.jsx("p",{className:"text-sm text-[#bbb]",children:"That tag could not be found."})})})}export{p as default};
