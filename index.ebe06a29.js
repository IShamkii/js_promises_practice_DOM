function e(e,n,t,r,o,i,c){try{var a=e[i](c),u=a.value}catch(e){t(e);return}a.done?n(u):Promise.resolve(u).then(r,o)}var n=!1,t=!1;function r(e,n){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.className=e,t.textContent=n,document.body.append(t)}function o(){var n;return n=function(e){return function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,function(n){return e.forEach(function(e){e.then(function(e){r("success",e)}).catch(function(e){r("error",e.message)})}),[2]})},(o=function(){var t=this,r=arguments;return new Promise(function(o,i){var c=n.apply(t,r);function a(n){e(c,o,i,a,u,"next",n)}function u(n){e(c,o,i,a,u,"throw",n)}a(void 0)})}).apply(this,arguments)}!function(e){o.apply(this,arguments)}([new Promise(function(e,t){addEventListener("click",function(){n=!0,clearTimeout(r),e("First promise was resolved")});var r=setTimeout(function(){t(Error("First promise was rejected"))},3e3)}),new Promise(function(e){addEventListener("click",function(){n=!0,e("Second promise was resolved")}),addEventListener("contextmenu",function(n){n.preventDefault(),t=!0,e("Second promise was resolved")})}),new Promise(function(e){addEventListener("click",function(){t&&e("Third promise was resolved")}),addEventListener("contextmenu",function(){n&&e("Third promise was resolved")})})]);
//# sourceMappingURL=index.ebe06a29.js.map
