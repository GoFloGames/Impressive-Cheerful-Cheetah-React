import{r as o,e as c,b as u,d as h,j as e,B as p}from"./index.js";import g from"./_...all_.js";const j=t=>{var{src:i,config:d,children:f}=t,m=function(s,l){var a={};for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&l.indexOf(r)<0&&(a[r]=s[r]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(r=Object.getOwnPropertySymbols(s);n<r.length;n++)l.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(s,r[n])&&(a[r[n]]=s[r[n]])}return a}(t,["src","config","children"]);const x=Object.assign(Object.assign({},{}),d);return o.useEffect(()=>{const s=document.createElement("script");return s.src="https://unpkg.com/@ruffle-rs/ruffle",s.async=!0,s.onload=()=>{window.RufflePlayer=window.RufflePlayer||{},window.RufflePlayer.config=x},document.body.appendChild(s),()=>{document.body.removeChild(s)}},[]),c.createElement(c.Fragment,null,c.createElement("object",Object.assign({data:i},m),c.createElement("param",{name:"movie",value:i}),f||c.createElement("p",null,"Your browser does not support WASM,"," ",c.createElement("a",{href:"https://ruffle.rs/",rel:"noopener noreferrer"},"see Ruffle documentation")," ","for more information.")))},b=j;function w(){const[t,i]=o.useState(null),d=o.useRef(null),[f,m]=o.useState(!1),{id:x}=u();return o.useEffect(()=>{const s=h.find(l=>l.id==x);s&&(m(!1),i(s))},[x]),o.useEffect(()=>{const s=()=>{try{const a=window.adsbygoogle;console.log({adsbygoogle:a}),a.push({})}catch(a){console.error(a)}};let l=setInterval(()=>{window.adsbygoogle&&(s(),clearInterval(l))},300);return()=>{clearInterval(l)}},[]),e.jsx(e.Fragment,{children:t?e.jsx(e.Fragment,{children:e.jsx("div",{className:"text-left flex items-center justify-center rounded-md max-w-[60vw]",children:e.jsxs("div",{children:[e.jsxs("div",{className:"w-[62.5vw] h-[35vw] overflow-hidden relative",ref:d,children:[f?e.jsx(e.Fragment,{children:t.embed?e.jsx("iframe",{src:t.embed,className:"border-none absolute left-0 top-0 w-full h-[calc(100%-40px)]"}):t.flash?e.jsx(b,{className:"border-none absolute left-0 top-0 w-full h-[calc(100%-40px)]",src:t.flash,config:{autoplay:"on",preloader:!1,backgroundColor:"#000",contextMenu:"off"}}):e.jsx(e.Fragment,{children:e.jsx("p",{className:"text-[#bbb]",children:"An error occured, try again and if that doesn't work please contact us."})})}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:t.image.startsWith("https://imagedelivery.net")?`${t.image}/small`:t.image,className:"absolute left-0 top-0 opacity-45 blur-xl scale-105 h-full w-full object-cover"}),e.jsx("div",{className:"absolute left-0 top-0 w-full h-[calc(100%-40px)] flex justify-center items-center text-center",children:e.jsxs("section",{children:[e.jsx("span",{className:"absolute aspect-[5/3] hidden xl:block rounded-xl h-32"}),e.jsx("img",{src:t.image.startsWith("https://imagedelivery.net")?`${t.image}/small`:t.image,className:"aspect-[5/3] hidden xl:block rounded-xl h-32 object-cover",draggable:!1}),e.jsx("h2",{className:"text-3xl xl:text-2xl flex items-center justify-center my-5",children:t.title}),e.jsxs(p,{style:"play",onClick:()=>{m(!0);const s=localStorage.getItem("play-history");let l=[];s&&(l=s.split(","));const a=l.indexOf(t.id);a>-1&&l.splice(a,1),l=[t.id,...l],localStorage.setItem("play-history",l.join(","))},children:["Play Game",e.jsx("svg",{viewBox:"0 0 24 24",children:e.jsx("path",{d:"m10 16.5 6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8"})})]})]})})]}),e.jsxs("div",{className:"absolute bottom-0 w-full bg-gg-950 h-[40px] overflow-hidden left-0 inline-flex items-center text-sm",children:[e.jsxs("div",{className:"relative flex justify-between gap-[10px] items-center ml-[10px]",children:[e.jsx("span",{className:"absolute left-0 h-5 w-5"}),e.jsx("img",{className:"h-5",src:"/icons/favicon-32x32.png"}),e.jsx("b",{children:t.title})]}),e.jsx("div",{className:"absolute right-0",children:e.jsx("button",{className:"group border-none h-10 w-10 cursor-pointer",onClick:()=>{var s;document.fullscreenElement?document.exitFullscreen():(s=d.current)==null||s.requestFullscreen()},children:e.jsx("svg",{viewBox:"0 0 24 24",className:"fill-white h-6 transition-all ease-in-out duration-75 group-hover:scale-[1.15]",children:e.jsx("path",{d:"M7 14H5v5h5v-2H7zm-2-4h2V7h3V5H5zm12 7h-3v2h5v-5h-2zM14 5v2h3v3h2V5z"})})})})]})]}),e.jsxs("div",{className:"flex justify-center flex-col-reverse xl:flex-row xl:justify-between items-start w-[62.5vw] relative p-5 bg-gg-800",children:[e.jsxs("div",{className:"xl:w-1/2",children:[e.jsx("h3",{className:"text-base xl:text-lg",children:t.title}),e.jsx("hr",{className:"bg-gg-900 rounded-3xl h-1.5 my-4"}),e.jsxs("div",{className:"mb-4 flex justify-start gap-4 leading-6 text-sm",children:[e.jsxs("div",{className:"text-gg-faded",children:["Developer",e.jsx("br",{}),"Released",e.jsx("br",{}),"Technology"]}),e.jsxs("div",{className:"font-semibold",children:[t.developers,e.jsx("br",{}),t.released,e.jsx("br",{}),t.technology]})]}),e.jsx("h3",{className:"text-base xl:text-lg my-4",children:"Description"}),e.jsx("p",{className:"text-sm",children:t.description})]}),e.jsx("div",{className:"xl:w-1/2 w-full relative flex justify-center items-center",children:e.jsx("ins",{className:"adsbygoogle block min-h-48 max-h-80 min-w-[22rem] max-w-[28rem] scale-[0.6] sm:scale-[0.8] md:scale-95 bg-gg-900 rounded-md border-none","date-ad-client":"ca-pub-9319396643474304","data-ad-slot":"6536714452","data-ad-format":"auto","data-full-width-responsive":"true"})})]})]})})}):e.jsx(e.Fragment,{children:e.jsx(g,{})})})}export{w as default};
