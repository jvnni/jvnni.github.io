!function(){"use strict";var a=document.querySelector(".navbar-brand").style,b=document.querySelector(".navbar-brand-tag").style,c=document.querySelector(".navbar-toggle");addEventListener("core-header-transform",function(c){var d=c.detail,e=d.height-d.condensedHeight,f=Math.max(.75,(e-d.y)/(e/.25)+.75),g=(e-d.y)/e;a.webkitTransform=a.transform="scale("+f+") translateZ(0)",b.opacity=g}),c.addEventListener("click",function(){document.querySelector("core-drawer-panel").togglePanel()}),$(".experience-list").gridalicious({gutter:20,width:280,selector:".experience-item"})}();