(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{326:function(t,o,e){var content=e(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("74a055c6",content,!0,{sourceMap:!1})},350:function(t,o,e){"use strict";var n=e(2),r=e(351);n({target:"String",proto:!0,forced:e(352)("link")},{link:function(t){return r(this,"a","href",t)}})},351:function(t,o,e){var n=e(7),r=e(24),c=e(13),l=/"/g,d=n("".replace);t.exports=function(t,o,e,n){var f=c(r(t)),m="<"+o;return""!==e&&(m+=" "+e+'="'+d(c(n),l,"&quot;")+'"'),m+">"+f+"</"+o+">"}},352:function(t,o,e){var n=e(3);t.exports=function(t){return n((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},353:function(t,o,e){"use strict";e(326)},354:function(t,o,e){var n=e(43)(!1);n.push([t.i,"@keyframes moveleft-36f52851{0%{transform:translateZ(0)}to{transform:translate3d(-100%,0,0)}}@keyframes pulse-36f52851{0%{transform:scale(0);opacity:0}50%{transform:scale(1);opacity:1}to{opacity:0}}.ourworks[data-v-36f52851]{background:#000;min-height:100vh}.ourworks__title[data-v-36f52851]{position:absolute;top:0;left:0;height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*3250);width:100vw;background:rgba(0,0,0,.6);z-index:10;display:flex;justify-content:center;align-items:center}.ourworks__title h1[data-v-36f52851]{color:#fff;text-transform:uppercase;font-size:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*170);font-weight:500;transform:translateY(calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*-300));text-align:center}.ourworks__content[data-v-36f52851]{margin-top:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*315);overflow:hidden}.ourworks__section[data-v-36f52851],.ourworks__section figure[data-v-36f52851]{height:calc(clamp(350px, 100vw, 3840px)/var(--ideal-viewport-width)*3250);position:relative}.ourworks__section figure[data-v-36f52851]{width:100vw}.ourworks__section figure img[data-v-36f52851]{-o-object-fit:cover;object-fit:cover;height:100%;width:100%}",""]),t.exports=n},366:function(t,o,e){"use strict";e.r(o);e(350),e(45),e(107),e(19),e(34);var n={data:function(){return{current:0}},mixins:[{data:function(){return{url:"https://echoworks.herokuapp.com"}},computed:{brand_link:function(){return"".concat(this.url,"/")}}}],methods:{gotolink:function(link){window.location.href="".concat(this.url,"/").concat(link)},isElementAtTop:function(element){return element.getBoundingClientRect().top<=0},handleScroll:function(){var t=this;document.querySelectorAll(".ourworks__section").forEach((function(section,o){var e=section.firstElementChild;t.isElementAtTop(section)?(e.style.position="fixed",e.style.top="0",e.style.left="0"):t.isElementAtTop(section)||(e.style.position="relative",e.style.top="0",e.style.left="0")}))}},mounted:function(){window.addEventListener("scroll",this.handleScroll)},beforeUnmount:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{items:function(){return[{link:"moneypigeon",id:0,name:"Money Pigeon",img:"https://res.cloudinary.com/dqmgqhman/image/upload/q_36/v1687504409/CRYPTO_r6v7kc.jpg"},{link:"oraimo",id:1,name:"Oraimo open audio",img:"https://res.cloudinary.com/dqmgqhman/image/upload/q_41/v1687504357/open-audio-newArtboard-2_m3erin.png"},{link:"oraimowaye",id:2,name:"Oraimo Waye",img:"https://res.cloudinary.com/dqmgqhman/image/upload/q_30/v1687504445/O-11_u80wtb.jpg"},{link:"pernodricard",id:3,name:"Pernod Ricard",img:"https://res.cloudinary.com/dqmgqhman/image/upload/q_39/v1687504482/Screenshot_2023-02-02_at_03.34.22_uszym3.png"}]}}},r=(e(353),e(23)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"ourworks"},[o("div",{staticClass:"ourworks__content"},t._l(t.items,(function(e,n){return o("section",{staticClass:"ourworks__section",class:{},style:{}},[o("figure",{on:{click:function(o){return t.gotolink(e.link)}}},[o("div",{staticClass:"ourworks__title"},[o("h1",[t._v(t._s(e.name))])]),t._v(" "),o("img",{attrs:{src:e.img}})])])})),0)])}),[],!1,null,"36f52851",null);o.default=component.exports}}]);