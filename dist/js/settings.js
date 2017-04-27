/*! (c) Philipp König under GPL-3.0 */
"use strict";function a(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}var b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a};!function(a,c){function d(a){return void 0!==a}function e(a){return"string"==typeof a}function f(a){return"object"==(void 0===a?"undefined":b(a))}function g(a){return Object.keys(a).length}function h(a,b,c){return b>a?b:a>c?c:a}function i(a,b){return parseInt(a,b||10)}function j(a){return Math.round(a)}function k(a){var b,c,d,e,f,g,h,i,k=+a[0],l=+a[1],m=+a[2];switch(e=Math.floor(6*k),f=6*k-e,g=m*(1-l),h=m*(1-f*l),i=m*(1-(1-f)*l),e=e||0,h=h||0,i=i||0,e%6){case 0:b=m,c=i,d=g;break;case 1:b=h,c=m,d=g;break;case 2:b=g,c=m,d=i;break;case 3:b=g,c=h,d=m;break;case 4:b=i,c=g,d=m;break;case 5:b=m,c=g,d=h}return[j(255*b),j(255*c),j(255*d)]}function l(a){return n(k(a))}function m(a){var b,c=+a[0],d=+a[1],e=+a[2],f=Math.max(c,d,e),g=Math.min(c,d,e),h=f-g,i=0===f?0:h/f,j=f/255;switch(f){case g:b=0;break;case c:b=d-e+h*(e>d?6:0),b/=6*h;break;case d:b=e-c+2*h,b/=6*h;break;case e:b=c-d+4*h,b/=6*h}return[b,i,j]}function n(a){var b=+a[2]|+a[1]<<8|+a[0]<<16;return b="000000"+b.toString(16),b.slice(-6)}function o(a){return m(p(a))}function p(a){return 3===a.length&&(a=a.replace(/./g,"$&$&")),[i(a[0]+a[1],16),i(a[2]+a[3],16),i(a[4]+a[5],16)]}function q(a){return[+a[0]/360,+a[1]/100,+a[2]/100]}function r(a){return[j(360*+a[0]),j(100*+a[1]),j(100*+a[2])]}function s(a){return[+a[0]/255,+a[1]/255,+a[2]/255]}function t(a){if(f(a))return a;var b=/\s*rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)\s*$/i.exec(a),c=/\s*hsv\s*\(\s*(\d+)\s*,\s*(\d+)%\s*,\s*(\d+)%\s*\)\s*$/i.exec(a);return"#"===a[0]&&a.match(/^#([\da-f]{3}|[\da-f]{6})$/i)?o(a.slice(1)):c?q([+c[1],+c[2],+c[3]]):b?m([+b[1],+b[2],+b[3]]):[0,1,1]}var u="__instance__",v="firstChild",w="offsetLeft",x="offsetTop",y=setTimeout;!function(a){a.version="1.3.3",a[u]={},a.each=function(b,c){return y(function(){var c,d=a[u];for(c in d)b(d[c],c,d)},0===c?0:c||1),a},a.parse=t,a._HSV2RGB=k,a._HSV2HEX=l,a._RGB2HSV=m,a._HEX2HSV=o,a._HEX2RGB=function(a){return s(p(a))},a.HSV2RGB=function(a){return k(q(a))},a.HSV2HEX=function(a){return l(q(a))},a.RGB2HSV=function(a){return r(m(a))},a.RGB2HEX=n,a.HEX2HSV=function(a){return r(o(a))},a.HEX2RGB=p}(a.CP=function(b,i){function j(a,b,c){a=a.split(/\s+/);for(var d=0,e=a.length;e>d;++d)b.addEventListener(a[d],c,!1)}function m(a,b,c){a=a.split(/\s+/);for(var d=0,e=a.length;e>d;++d)b.removeEventListener(a[d],c)}function n(a,b){var c=b.touches?b.touches[0].pageX:b.pageX,d=b.touches?b.touches[0].pageY:b.pageY,e=o(a);return{x:c-e.l,y:d-e.t}}function o(b){if(b===a)var c=a.pageXOffset||H.scrollLeft,d=a.pageYOffset||H.scrollTop;else for(var c=b[w],d=b[x];b=b.offsetParent;)c+=b[w],d+=b[x];return{l:c,t:d}}function p(a,b){for(;(a=a.parentElement)&&a!==b;);return a}function q(a){a&&a.preventDefault()}function r(b){return b===a?{w:a.innerWidth,h:a.innerHeight}:{w:b.offsetWidth,h:b.offsetHeight}}function s(a){return J||!!d(a)&&a}function t(a){J=a}function z(a,b,c){return d(a)?d(b)?(d(K[a])||(K[a]={}),d(c)||(c=g(K[a])),K[a][c]=b,I):K[a]:K}function A(a,b){return d(a)?d(b)?(delete K[a][b],I):(K[a]={},I):(K={},I)}function B(a,b,c){if(!d(K[a]))return I;if(d(c))d(K[a][c])&&K[a][c].apply(I,b);else for(var e in K[a])K[a][e].apply(I,b);return I}function C(a,b){a&&"h"!==a||B("change:h",b),a&&"sv"!==a||B("change:sv",b),B("change",b)}function D(){return L.parentNode}function E(d,e){function f(a){var c=a.target,d=c===b||p(c,b)===b;d?E():I.exit(),B(d?"enter":"exit",[I])}function g(a){var b=(k(S),k([S[0],1,1]));U.style.backgroundColor="rgb("+b.join(",")+")",t(S),q(a)}function o(a){var b=h(n(T,a).y,0,H);S[0]=(H-b)/H,V.style.top=b-R/2+"px",g(a)}function u(a){var b=n(U,a),c=h(b.x,0,J),d=h(b.y,0,K);S[1]=1-(J-c)/J,S[2]=(K-d)/K,W.style.right=J-c-_/2+"px",W.style.top=d-aa/2+"px",g(a)}function v(a){Z&&(o(a),da=l(S),X||(B("drag:h",[da,I]),B("drag",[da,I]),C("h",[da,I]))),$&&(u(a),da=l(S),Y||(B("drag:sv",[da,I]),B("drag",[da,I]),C("sv",[da,I]))),X=0,Y=0}function w(a){var c=a.target,d=Z?"h":"sv",e=[l(S),I],f=c===b||p(c,b)===b,g=c===L||p(c,L)===L;f||g?g&&(B("stop:"+d,e),B("stop",e),C(d,e)):D()&&!1!==i&&(I.exit(),B("exit",[I]),C(0,e)),Z=0,$=0}function x(a){X=1,Z=1,v(a),q(a),B("start:h",[da,I]),B("start",[da,I]),C("h",[da,I])}function y(a){Y=1,$=1,v(a),q(a),B("start:sv",[da,I]),B("start",[da,I]),C("sv",[da,I])}d||((e||G).appendChild(L),I.visible=!0),ba=r(L).w,ca=r(L).h;var z=r(U),A=r(W),H=r(T).h,J=z.w,K=z.h,R=r(V).h,_=A.w,aa=A.h;d?(L.style.left=L.style.top="-9999px",!1!==i&&j(i,b,f),I.create=function(){return E(1),B("create",[I]),I},I.destroy=function(){return!1!==i&&m(i,b,f),I.exit(),t(!1),B("destroy",[I]),I}):F(),Q=function(){S=s(S),g(),V.style.top=H-R/2-H*+S[0]+"px",W.style.right=J-_/2-J*+S[1]+"px",W.style.top=K-aa/2-K*+S[2]+"px"},I.exit=function(b){return D()&&(D().removeChild(L),I.visible=!1),m(M,T,x),m(M,U,y),m(N,c,v),m(O,c,w),m(P,a,F),I},Q(),d||(j(M,T,x),j(M,U,y),j(N,c,v),j(O,c,w),j(P,a,F))}function F(){return I.fit()}var G=c.body,H=c.documentElement,I=this,J=!1,K={},L=c.createElement("div"),M="touchstart mousedown",N="touchmove mousemove",O="touchend mouseup",P="orientationchange resize";if(!(I instanceof CP))return new CP(b,i);CP[u][b.id||b.name||g(CP[u])]=I,d(i)||(i=M),t(CP.parse(b.getAttribute("data-color")||b.value||[0,1,1])),L.className="color-picker",L.innerHTML='<div class="color-picker-control"><span class="color-picker-h"><i></i></span><span class="color-picker-sv"><i></i></span></div>';var Q,R=L[v].children,S=s([0,1,1]),T=R[0],U=R[1],V=T[v],W=U[v],X=0,Y=0,Z=0,$=0,_=0,aa=0,ba=0,ca=0,da=l(S);return E(1),y(function(){var a=[l(S),I];B("create",a),C(0,a)},0),I.fit=function(c){var e=r(a),g=r(H),h=g.h>e.h,i=o(a),j=(o(H),h?g.w:e.w+i.l),k=h?e.h+i.t:Math.max(g.h,e.h),l=o(b);return _=l.l,aa=l.t+r(b).h,f(c)?(d(c[0])&&(_=c[0]),d(c[1])&&(aa=c[1])):(_+ba>j&&(_=j-ba),aa+ca>k&&(aa=k-ca)),L.style.left=_+"px",L.style.top=aa+"px",B("fit",[I]),I},I.set=function(a){return d(a)?(e(a)&&(a=CP.parse(a)),t(a),Q(),I):s()},I.target=b,I.picker=L,I.visible=!1,I.on=z,I.off=A,I.trigger=B,I.hooks=K,I.enter=function(a){return E(0,a)},I})}(window,document),function(b){window.ModelHelper=function(a){var b=this,c={__default:{Thin:100,ExtraLight:200,Light:300,Normal:400,Medium:500,SemiBold:600,Bold:700,ExtraBold:800,Black:900},Roboto:{Thin:100,ExtraLight:100,Light:200,Normal:300,Medium:400,SemiBold:400,Bold:500,ExtraBold:500,Black:500}},d={u:{openStates:{},hiddenEntries:{},scrollPos:{},entriesLocked:!0,sort:{name:"custom",dir:"ASC"},mostViewedPerMonth:!1,viewAsTree:!0},b:{pxTolerance:{windowed:20,maximized:1},scrollSensitivity:{mouse:1,trackpad:1},openAction:"mousedown",newTab:"foreground",linkAction:"current",dirAccordion:!1,rememberState:"all",rememberSearch:!0,dirOpenDuration:.5,openDelay:0,closeTimeout:1},a:{sidebarPosition:"left",showIndicator:!0,showBookmarkIcons:!0,styles:{colorScheme:"rgb(0,137,123)",textColor:"rgb(102,102,102)",indicatorWidth:"50px",indicatorIconSize:"40px",indicatorIconColor:"rgb(255,255,255)",indicatorColor:"rgba(0,0,0,0.5)",sidebarWidth:"350px",sidebarMaskColor:"rgba(255,255,255,0.8)",bookmarksFontSize:"14px",bookmarksIconSize:"16px",bookmarksLineHeight:"40px",bookmarksDirIcon:"dir-1",bookmarksDirColor:"rgb(102,102,102)",bookmarksDirIndentation:"25px",bookmarksHorizontalPadding:"16px",overlayMaskColor:"rgba(0,0,0,0.5)",fontFamily:"Roboto"}}},e={};this.init=function(a){var b=["utility","behaviour","appearance"];chrome.storage.sync.get(b,function(c){e=c,b.forEach(function(a){void 0===e[a]&&(e[a]={})}),"function"==typeof a&&a()})},this.getFontWeights=function(a){var b={};return Object.keys(c.__default).forEach(function(d){var e=c.__default[d];c[a]&&c[a][d]&&(e=c[a][d]),b["fontWeight"+d]=e}),b},this.getData=function(a){var c=a;"string"==typeof c&&(c=[c]);var f={};if(c.forEach(function(a){var c=a.split("/")[0],g=a.split("/")[1],h=null,i=null;switch(c){case"u":i=e.utility;break;case"b":i=e.behaviour;break;case"a":i=e.appearance}null!==i&&(void 0===i[g]?"rememberState"===g&&void 0!==i.rememberScroll?h=!1===i.rememberScroll?"openStates":"all":void 0!==d[c]&&void 0!==d[c][g]&&(h=d[c][g]):h=i[g]),"a/styles"===a&&(h=Object.assign({},d.a.styles,h),Object.assign(h,b.getFontWeights(h.fontFamily))),"a/showIndicator"===a&&!0===h&&void 0!==e.behaviour.openAction&&"mousemove"===e.behaviour.openAction&&(h=!1),f[g]=h}),"string"==typeof a){var g=a.split("/")[1];f=f[g]}return f},this.setData=function(a,c){b.init(function(){Object.keys(a).forEach(function(b){var c=b.split("/")[0],d=b.split("/")[1],f=a[b];switch(c){case"u":e.utility[d]=f,e.utility;break;case"b":e.behaviour[d]=f;break;case"a":e.appearance[d]=f}});try{chrome.storage.sync.set(e,function(){"function"==typeof c&&c()})}catch(a){"function"==typeof c&&c()}})},this.call=function(a,b,c){"function"==typeof b&&(c=b,b={}),b.type=a,chrome.extension.sendMessage(b,function(a){"function"==typeof c&&c(a)})}},window.CheckboxHelper=function(a){var c=this,d={};this.get=function(d,e){var f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"checkbox",h=b("<div />").html("<input type='checkbox' />").data("uid",Math.random().toString(36).substr(2,12)).attr(a.opts.attr.type,f).addClass(a.opts.classes.checkbox.box);return void 0!==e&&(h.children("input[type='checkbox']").attr(e),e[a.opts.attr.name]&&h.attr(a.opts.attr.name,e[a.opts.attr.name])),c.isChecked(h)&&h.addClass(a.opts.classes.checkbox.active),g(h,d),h},this.isChecked=function(a){return a.find("input[type='checkbox']")[0].checked};var e=function(b,c){var d=b.children("input[type='checkbox']");d.trigger("change"),c.document()[0].dispatchEvent(new CustomEvent(a.opts.events.checkboxChanged,{detail:{container:b,checkbox:d,checked:b.hasClass(a.opts.classes.checkbox.active)},bubbles:!0,cancelable:!1}))},f=function f(g,h){g.addClass(a.opts.classes.checkbox.clicked),g.removeClass(a.opts.classes.checkbox.focus),g.toggleClass(a.opts.classes.checkbox.active);var i=g.hasClass(a.opts.classes.checkbox.active),j=g.children("input[type='checkbox']");if("radio"===g.attr(a.opts.attr.type)&&g.attr(a.opts.attr.name))if(h){var k=g.attr(a.opts.attr.name);g.addClass(a.opts.classes.checkbox.active),i&&(j.attr("checked",!0),e(g,h)),h.find("div."+a.opts.classes.checkbox.box+"["+a.opts.attr.type+"='radio']["+a.opts.attr.name+"='"+k+"']").forEach(function(a){var d=b(a);a!==g[0]&&c.isChecked(d)&&f(d)})}else j.attr("checked",!1);else j.attr("checked",i),e(g,h);var l=g.data("uid");d[l]&&clearTimeout(d[l]),d[l]=setTimeout(function(){g.removeClass(a.opts.classes.checkbox.clicked)},300)},g=function(c,d){c.on("mousedown",function(c){c.preventDefault(),c.stopPropagation(),b(c.currentTarget).addClass(a.opts.classes.checkbox.focus)}).on("click",function(a){a.preventDefault(),a.stopPropagation(),f(b(a.currentTarget),d)}),d.on("click",function(){c.removeClass(a.opts.classes.checkbox.focus)})}},window.AppearanceHelper=function(a){var c={sidebar:{template:"sidebar",styles:["sidebar"]},general:{template:"sidebar",styles:["sidebar"]},overlay:{template:"overlay",styles:["overlay"]},indicator:{template:"indicator",styles:["contentBase","content"]}};this.init=function(){i();var b=a.helper.model.getData("a/sidebarPosition");a.opts.elm.select.sidebarPosition[0].value=b,a.opts.elm.select.sidebarPosition.data("initial",b);var c=a.helper.model.getData("a/styles");setTimeout(function(){Object.keys(c).forEach(function(b){var e=c[b];a.opts.elm.range[b]?(a.opts.elm.range[b][0].value=e.replace("px",""),a.opts.elm.range[b].data("initial",e.replace("px","")),a.opts.elm.range[b].trigger("change")):a.opts.elm.color[b]?(a.opts.elm.color[b].data("initial",e),d(a.opts.elm.color[b],e)):a.opts.elm.select[b]&&(a.opts.elm.select[b][0].value=e,a.opts.elm.select[b].data("initial",e))}),j()},0)},this.save=function(){chrome.storage.sync.set({appearance:g()},function(){a.showSuccessMessage("saved_message")})};var d=function(a,b){var c=a.data("picker");if(b.search(/rgba\(/)>-1){var d=b.replace(/(rgba|\(|\))/gi,"").split(",");b="rgb("+d[0]+","+d[1]+","+d[2]+")",c.alpha&&(c.alpha[0].value=d[3])}c.set(b),c.trigger("change")},e=function(a,b){var c=new XMLHttpRequest;c.open("GET",chrome.extension.getURL(a),!0),c.onload=function(){c.response&&b(c.response)},c.send()},f=function(d){if(a.opts.elm.preview[d]){a.opts.elm.preview[d].find("head > style").remove();var e=g();Object.assign(e.styles,a.helper.model.getFontWeights(e.styles.fontFamily));var f=c[d].css;Object.keys(e.styles).forEach(function(a){f=f.replace(new RegExp('"?%'+a+'"?',"g"),e.styles[a])}),a.opts.elm.preview[d].find("["+a.opts.attr.style+"]").forEach(function(c){var d=b(c).attr(a.opts.attr.style);Object.keys(e.styles).forEach(function(a){d=d.replace(new RegExp('"?%'+a+'"?',"g"),e.styles[a])}),c.style.cssText=d}),a.opts.elm.preview[d].find("["+a.opts.attr.hideOnFalse+"]").forEach(function(c){var d=b(c).attr(a.opts.attr.hideOnFalse);void 0===e[d]||!1===e[d]?b(c).css("display","none"):b(c).css("display","block")}),a.opts.elm.body.attr(a.opts.attr.pos,e.sidebarPosition),a.opts.elm.preview[d].find("["+a.opts.attr.pos+"]").attr(a.opts.attr.pos,e.sidebarPosition),a.opts.elm.preview[d].find("head").append("<style>"+f+"</style>")}},g=function(){var b={sidebarPosition:a.opts.elm.select.sidebarPosition[0].value,showIndicator:!0,showBookmarkIcons:!0,styles:{}},c=a.helper.model.getData("a/styles");return Object.keys(c).forEach(function(c){a.opts.elm.range[c]?b.styles[c]=a.opts.elm.range[c][0].value+"px":a.opts.elm.color[c]?b.styles[c]=a.opts.elm.color[c][0].value:a.opts.elm.select[c]&&(b.styles[c]=a.opts.elm.select[c][0].value)}),0===parseInt(b.styles.indicatorWidth)&&(b.showIndicator=!1),0===parseInt(b.styles.bookmarksIconSize)&&(b.showBookmarkIcons=!1),b},h=function(b){return b.toLocaleDateString([chrome.i18n.getUILanguage(),a.opts.manifest.default_locale],{year:"numeric",month:"2-digit",day:"2-digit"})},i=function(){Object.keys(c).forEach(function(d){c[d].css="",a.opts.elm.preview[d]=b("<iframe />").attr(a.opts.attr.appearance,d).addClass(a.opts.classes.hidden).appendTo(a.opts.elm.body),e("html/template/"+c[d].template+".html",function(c){c=c.replace(/__MSG_\@\@extension_id__/g,chrome.runtime.id),c=c.replace(/__DATE__CREATED__/g,h(new Date("2016-11-25"))),a.opts.elm.preview[d].find("body").html(c),b("<link />").attr({rel:"stylesheet",type:"text/css",href:a.opts.fontHref}).appendTo(a.opts.elm.preview[d].find("head"))}),c[d].styles.forEach(function(a){e("css/"+a+".css",function(a){c[d].css+=a,f(d)})})})},j=function(){a.opts.elm.appearanceSections.find("input, select").on("change input",function(c){var d=b(c.currentTarget),e=c.currentTarget.value,g=d.data("initial"),h=d;d.next("span").length()>0&&(h=d.next("span")),e!==g?0===h.next("a."+a.opts.classes.revert).length()&&b("<a href='#' />").addClass(a.opts.classes.revert).data("elm",d).insertAfter(h):h.next("a."+a.opts.classes.revert).remove();var i=d.parents("["+a.opts.attr.appearance+"]").eq(0).attr(a.opts.attr.appearance);f(i)}),a.opts.elm.appearanceSections.on("click","a."+a.opts.classes.revert,function(a){a.preventDefault();var c=b(a.currentTarget).data("elm"),e=c.data("initial");c.data("picker")?d(c,e):(c[0].value=e,c.trigger("change"))}),a.opts.elm.backgroundChanger.on("click",function(c){c.preventDefault();var d=b(c.currentTarget).attr(a.opts.attr.bg);a.opts.elm.backgroundChanger.removeClass(a.opts.classes.tabs.active),b(c.currentTarget).addClass(a.opts.classes.tabs.active),a.opts.elm.body.attr(a.opts.attr.bg,d)}),a.opts.elm.backgroundChanger.eq(0).trigger("click"),a.opts.elm.appearanceLabels.children("a").on("click",function(c){c.preventDefault(),a.opts.elm.appearanceLabels.removeClass(a.opts.classes.tabs.active);var d=b(c.currentTarget).parent("li"),e=d.attr(a.opts.attr.type);d.addClass(a.opts.classes.tabs.active),a.opts.elm.appearanceSections.forEach(function(c){b(c).attr(a.opts.attr.appearance)===e?b(c).removeClass(a.opts.classes.hidden):b(c).addClass(a.opts.classes.hidden)}),Object.keys(a.opts.elm.preview).forEach(function(b){var c=a.opts.elm.preview[b];b===e?(f(b),c.removeClass(a.opts.classes.hidden)):c.addClass(a.opts.classes.hidden)})}),a.opts.elm.appearanceLabels.children("a").eq(0).trigger("click")}},window.BehaviourHelper=function(a){this.init=function(){b(),["rememberSearch","dirAccordion"].forEach(function(b){!0===a.helper.model.getData("b/"+b)&&a.opts.elm.checkbox[b].trigger("click")});var c=a.helper.model.getData("b/pxTolerance");a.opts.elm.range.pxToleranceMaximized[0].value=c.maximized,a.opts.elm.range.pxToleranceWindowed[0].value=c.windowed;var d=a.helper.model.getData("b/scrollSensitivity");a.opts.elm.range.mouseScrollSensitivity[0].value=d.mouse,a.opts.elm.range.trackpadScrollSensitivity[0].value=d.trackpad,a.opts.elm.range.closeTimeout[0].value=a.helper.model.getData("b/closeTimeout"),a.opts.elm.range.dirOpenDuration[0].value=a.helper.model.getData("b/dirOpenDuration"),a.opts.elm.range.openDelay[0].value=a.helper.model.getData("b/openDelay"),a.opts.elm.select.openAction[0].value=a.helper.model.getData("b/openAction"),a.opts.elm.select.linkAction[0].value=a.helper.model.getData("b/linkAction"),a.opts.elm.select.rememberState[0].value=a.helper.model.getData("b/rememberState"),a.opts.elm.select.newTab[0].value=a.helper.model.getData("b/newTab"),a.opts.elm.range.pxToleranceMaximized.trigger("change"),a.opts.elm.range.pxToleranceWindowed.trigger("change"),a.opts.elm.range.mouseScrollSensitivity.trigger("change"),a.opts.elm.range.trackpadScrollSensitivity.trigger("change"),a.opts.elm.range.closeTimeout.trigger("change"),a.opts.elm.range.dirOpenDuration.trigger("change"),a.opts.elm.range.openDelay.trigger("change"),a.opts.elm.select.openAction.trigger("change"),a.opts.elm.select.linkAction.trigger("change"),a.opts.elm.select.rememberState.trigger("change")},this.save=function(){var b={pxTolerance:{maximized:a.opts.elm.range.pxToleranceMaximized[0].value,windowed:a.opts.elm.range.pxToleranceWindowed[0].value},scrollSensitivity:{mouse:a.opts.elm.range.mouseScrollSensitivity[0].value,trackpad:a.opts.elm.range.trackpadScrollSensitivity[0].value},closeTimeout:a.opts.elm.range.closeTimeout[0].value,dirOpenDuration:a.opts.elm.range.dirOpenDuration[0].value,openDelay:a.opts.elm.range.openDelay[0].value,openAction:a.opts.elm.select.openAction[0].value,linkAction:a.opts.elm.select.linkAction[0].value,rememberState:a.opts.elm.select.rememberState[0].value,newTab:a.opts.elm.select.newTab[0].value};["rememberSearch","dirAccordion"].forEach(function(c){b[c]=a.helper.checkbox.isChecked(a.opts.elm.checkbox[c])}),chrome.storage.sync.set({behaviour:b},function(){a.showSuccessMessage("saved_message")})};var b=function(){a.opts.elm.keyboardShortcutInfo.children("a").on("click",function(a){a.preventDefault(),chrome.tabs.create({url:"chrome://extensions",active:!0})}),a.opts.elm.select.openAction.on("change",function(){"mousemove"===a.opts.elm.select.openAction[0].value?a.opts.elm.range.openDelay.parent("div."+a.opts.classes.configEntry).removeClass(a.opts.classes.hidden):a.opts.elm.range.openDelay.parent("div."+a.opts.classes.configEntry).addClass(a.opts.classes.hidden)})}},window.ContributeHelper=function(a){this.init=function(){chrome.storage.sync.get(["shareUserdata"],function(b){b.shareUserdata&&!0===b.shareUserdata&&a.opts.elm.checkbox.shareUserdata.trigger("click"),a.opts.elm.checkbox.shareUserdata.children("input[type='checkbox']").on("change",function(){chrome.storage.sync.set({shareUserdata:a.helper.checkbox.isChecked(a.opts.elm.checkbox.shareUserdata)},function(){a.showSuccessMessage("saved_share_userdata")})})})}},window.FeedbackHelper=function(a){this.send=function(){var c=a.opts.elm.textarea.feedbackMsg[0].value,d=a.opts.elm.field.feedbackEmail[0].value,e=d.length>0&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d),f=c.length>0;if(e&&f){var g=+new Date,h=a.getLoaderHtml().appendTo(a.opts.elm.body);a.opts.elm.body.addClass(a.opts.classes.loading);var i=new XMLHttpRequest;i.open("POST","https://moonware.de/ajax/extensions/feedback",!0),i.onload=function(){setTimeout(function(){a.opts.elm.textarea.feedbackMsg[0].value="",a.opts.elm.field.feedbackEmail[0].value="",a.opts.elm.body.removeClass(a.opts.classes.loading),h.remove(),a.showSuccessMessage("feedback_sent_message")},Math.max(0,1e3-(+new Date-g)))};var j=new FormData;j.append("email",d),j.append("msg",c),j.append("extension",JSON.stringify({name:a.opts.manifest.name,version:a.opts.manifest.version})),i.send(j)}else e?f||a.opts.elm.textarea.feedbackMsg.addClass(a.opts.classes.error):a.opts.elm.field.feedbackEmail.addClass(a.opts.classes.error);setTimeout(function(){b("."+a.opts.classes.error).removeClass(a.opts.classes.error)},700)}},window.FormHelper=function(c){this.init=function(){c.opts.elm.formElement.forEach(function(d){var e=b(d).attr(c.opts.attr.type),f=b(d).attr(c.opts.attr.name),g=b(d).attr(c.opts.attr.i18n)||"";b("<br />").insertAfter(d);var h=b("<label />").attr(c.opts.attr.i18n,g).insertAfter(d);switch(b("<p />").attr(c.opts.attr.i18n,g+"_desc").insertAfter(h),e){case"checkbox":c.opts.elm.checkbox[f]=c.helper.checkbox.get(c.opts.elm.body).insertAfter(h);break;case"text":case"email":c.opts.elm.field[f]=b("<input type='"+e+"' />").insertAfter(h),["placeholder"].forEach(function(a){var e=b(d).attr(c.opts.attr.field[a]);e&&c.opts.elm.field[f].attr(a,e)});break;case"textarea":c.opts.elm.textarea[f]=b("<textarea />").insertAfter(h);break;case"font":c.opts.elm.select[f]=b("<select />").insertAfter(h),chrome.fontSettings.getFontList(function(a){a.push({fontId:"Roboto",displayName:"Roboto ("+chrome.i18n.getMessage("settings_font_familiy_default")+")"}),a.sort(function(a,b){var c=a.displayName.toUpperCase(),d=b.displayName.toUpperCase();return c<d?-1:c>d?1:0}),a.forEach(function(a){0===c.opts.elm.select[f].children("option[value='"+a.fontId+"']").length()&&b("<option />").attr("value",a.fontId).text(a.displayName).appendTo(c.opts.elm.select[f])})});break;case"color":c.opts.elm.color[f]=b("<input type='text' />").addClass(c.opts.classes.color.field).insertAfter(h);var i=b("<span />").insertAfter(c.opts.elm.color[f]),j=new CP(c.opts.elm.color[f][0]);b(d).attr(c.opts.attr.color.alpha)&&(j.alpha=b("<input type='range' />").attr({min:0,max:1,step:.01,value:1}).appendTo(j.picker),j.alpha.on("change input",function(){return j.trigger("change")})),j.on("change",function(a){var b=CP._HSV2RGB(j.set());a&&(b=CP.HEX2RGB(a)),j.alpha&&j.alpha.css("background-image","linear-gradient(to right, transparent 0%, rgb("+b.join(",")+") 100%),url("+chrome.extension.getURL("img/settings/alpha.webp")+")"),b=j.alpha&&+j.alpha[0].value<1?"rgba("+b.join(",")+","+j.alpha[0].value+")":"rgb("+b.join(",")+")",c.opts.elm.color[f][0].value=b,c.opts.elm.color[f].trigger("change"),i.css("background-color",b)}),c.opts.elm.color[f].data("picker",j);break;case"range":c.opts.elm.range[f]=b("<input type='range' />").insertAfter(h),["min","max","step"].forEach(function(a){var e=b(d).attr(c.opts.attr.range[a]);e&&c.opts.elm.range[f].attr(a,e)}),c.opts.elm.range[f].attr("value",b(d).attr(c.opts.attr.value)||"");var k=b(d).attr(c.opts.attr.range.unit)||"",l=b("<span />").insertAfter(c.opts.elm.range[f]);c.opts.elm.range[f].on("input change",function(a){var b=a.currentTarget,d=b.max||100,e=b.min||0,g=Math.round(100*(b.value-e)/(d-e)),h=c.opts.elm.range[f].css("background-size").replace(/^.*\s/,g+"% ");c.opts.elm.range[f].css("background-size",h),l.text(b.value+k)}),c.opts.elm.range[f].trigger("input");break;case"select":c.opts.elm.select[f]=b("<select />").insertAfter(h),b(d).children("span").forEach(function(d){b("<option />").attr(a({value:b(d).attr(c.opts.attr.value)},c.opts.attr.i18n,b(d).attr(c.opts.attr.i18n))).appendTo(c.opts.elm.select[f])})}d.remove()})}},window.HelpHelper=function(a){this.init=function(){b("a."+a.opts.classes.gotoFeedback).on("click",function(b){b.preventDefault(),a.opts.elm.header.find("> ul > li["+a.opts.attr.name+"='feedback'] > a").trigger("click")}),b("a."+a.opts.classes.howto).on("click",function(a){a.preventDefault(),window.open(chrome.extension.getURL("html/howto.html")+"?tutorial=1","_blank")})}},window.settings=function(){var a=this;this.opts={classes:{tabs:{list:"tabBar",active:"active"},color:{field:"color"},checkbox:{box:"checkbox",active:"active",clicked:"clicked",focus:"focus"},hidden:"hidden",configEntry:"configEntry",success:"success",error:"error",loading:"loading",revert:"revert",gotoFeedback:"gotoFeedback",howto:"howto"},attr:{type:"data-type",appearance:"data-appearance",name:"data-name",i18n:"data-i18n",value:"data-value",tab:"data-tab",success:"data-successtext",style:"data-style",hideOnFalse:"data-hideOnFalse",pos:"data-pos",bg:"data-bg",range:{min:"data-min",max:"data-max",step:"data-step",unit:"data-unit"},color:{alpha:"data-alpha"},field:{placeholder:"data-placeholder"}},elm:{body:b("body"),title:b("head > title"),header:b("body > header"),tab:b("section#content > div.tab"),appearanceLabels:b("ul.appearanceLabels > li"),backgroundChanger:b("menu.backgroundChanger > a"),appearanceSections:b("div[data-appearance]"),copyrightDate:b("a#copyright > span"),keyboardShortcutInfo:b("p.shortcutInfo"),formElement:b("div.formElement"),feedback:{textarea:b("textarea#feedback"),email:b("input#feedbackEmail")},button:{save:b("div.tab > header > button.save"),restore:b("div.tab > header > button.restore")},preview:{},checkbox:{},range:{},select:{},color:{},textarea:{},field:{}},events:{checkboxChanged:"moonware-bs-checkboxChanged"},fontHref:"https://fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,100i,200i,300i,400i,500i",manifest:chrome.runtime.getManifest()},this.run=function(){c(),a.helper.form.init(),e(),f(),d(),g(),a.helper.model.init(function(){a.helper.behaviour.init(),a.helper.appearance.init(),a.helper.contribute.init(),a.helper.help.init(),h()})},this.showSuccessMessage=function(b){a.opts.elm.body.attr(a.opts.attr.success,chrome.i18n.getMessage("settings_"+b)),a.opts.elm.body.addClass(a.opts.classes.success),setTimeout(function(){a.opts.elm.body.removeClass(a.opts.classes.success)},1500)},this.getLoaderHtml=function(){return b('<div class="loading"> <div>  <div class="circle-clipper left">   <div></div>  </div>  <div class="gap-patch">   <div></div>  </div>  <div class="circle-clipper right">   <div></div>  </div> </div></div>')};var c=function(){a.helper={model:new window.ModelHelper(a),checkbox:new window.CheckboxHelper(a),form:new window.FormHelper(a),behaviour:new window.BehaviourHelper(a),appearance:new window.AppearanceHelper(a),feedback:new window.FeedbackHelper(a),contribute:new window.ContributeHelper(a),help:new window.HelpHelper(a)}},d=function(){var b=+a.opts.elm.copyrightDate.text(),c=(new Date).getFullYear();c>b&&a.opts.elm.copyrightDate.text(b+" - "+c)},e=function(){a.opts.elm.header.prepend('<svg height="48" width="48" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"/></svg>')},f=function(){b("["+a.opts.attr.i18n+"]").forEach(function(c){var d=b(c).attr(a.opts.attr.i18n),e=0===d.search(/^(share_userdata_|howto_)/)?d:"settings_"+d,f=chrome.i18n.getMessage(e);f?(f=f.replace(/\[u\](.*)\[\/u\]/,"<span>$1</span>"),f=f.replace(/\[a\](.*)\[\/a\]/,"<a href='#'>$1</a>"),f=f.replace(/\[em\](.*)\[\/em\]/,"<em>$1</em>"),b(c).html(f)):b(c).remove()}),a.opts.elm.title.text(a.opts.elm.title.text()+" - "+a.opts.manifest.short_name)},g=function(){var c=b("<ul />").addClass(a.opts.classes.tabs.list).prependTo(a.opts.elm.header);a.opts.elm.tab.forEach(function(d){var e=b(d).attr(a.opts.attr.name);b("<li />").attr(a.opts.attr.name,e).html("<a href='#'>"+chrome.i18n.getMessage("settings_tab_"+e)+"</a>").appendTo(c)}),c.find("> li > a").on("click",function(d){d.preventDefault(),c.children("li").removeClass(a.opts.classes.tabs.active);var e=b(d.currentTarget).parent("li"),f=e.attr(a.opts.attr.name);e.addClass(a.opts.classes.tabs.active),a.opts.elm.tab.forEach(function(c){b(c).attr(a.opts.attr.name)===f?b(c).removeClass(a.opts.classes.hidden):b(c).addClass(a.opts.classes.hidden)}),location.hash=f,a.opts.elm.body.attr(a.opts.attr.tab,f)});var d=location.hash?location.hash.substr(1):null;c.find("> li > a").eq(0).trigger("click"),d&&c.find("> li["+a.opts.attr.name+"='"+d+"'] > a").trigger("click")},h=function(){a.opts.elm.button.save.on("click",function(b){switch(b.preventDefault(),a.opts.elm.body.attr(a.opts.attr.tab)){case"behaviour":a.helper.behaviour.save();break;case"appearance":a.helper.appearance.save();break;case"feedback":a.helper.feedback.send()}}),a.opts.elm.button.restore.on("click",function(b){b.preventDefault();var c=a.opts.elm.body.attr(a.opts.attr.tab);switch(c){case"behaviour":case"appearance":chrome.storage.sync.remove([c],function(){a.showSuccessMessage("restored_message"),setTimeout(function(){location.reload(!0)},1500)})}})}},(new window.settings).run()}(jsu);