function Di(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Zd(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Ua={duration:.5,overwrite:!1,delay:0},eh,nn,Pe,Jn=1e8,Ee=1/Jn,Vc=Math.PI*2,p_=Vc/4,m_=0,Jd=Math.sqrt,__=Math.cos,g_=Math.sin,Qe=function(t){return typeof t=="string"},Ue=function(t){return typeof t=="function"},Bi=function(t){return typeof t=="number"},nh=function(t){return typeof t>"u"},Mi=function(t){return typeof t=="object"},Tn=function(t){return t!==!1},ih=function(){return typeof window<"u"},Za=function(t){return Ue(t)||Qe(t)},Qd=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},un=Array.isArray,v_=/random\([^)]+\)/g,x_=/,\s*/g,qh=/(?:-?\.?\d|\.)+/gi,tp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ys=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,kl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ep=/[+-]=-?[.\d]+/,y_=/[^,'"\[\]\s]+/gi,M_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Le,di,Hc,rh,Wn={},al={},np,ip=function(t){return(al=Os(t,Wn))&&Cn},sh=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Na=function(t,e){return!e&&console.warn(t)},rp=function(t,e){return t&&(Wn[t]=e)&&al&&(al[t]=e)||Wn},Oa=function(){return 0},S_={suppressEvents:!0,isStart:!0,kill:!1},Wo={suppressEvents:!0,kill:!1},E_={suppressEvents:!0},ah={},ir=[],Gc={},sp,On={},Vl={},$h=30,Xo=[],oh="",lh=function(t){var e=t[0],n,i;if(Mi(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Xo.length;i--&&!Xo[i].targetTest(e););n=Xo[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ap(t[i],n)))||t.splice(i,1);return t},Or=function(t){return t._gsap||lh(Qn(t))[0]._gsap},ap=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():nh(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Be=function(t){return Math.round(t*1e5)/1e5||0},De=function(t){return Math.round(t*1e7)/1e7||0},bs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},T_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ol=function(){var t=ir.length,e=ir.slice(0),n,i;for(Gc={},ir.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ch=function(t){return!!(t._initted||t._startAt||t.add)},op=function(t,e,n,i){ir.length&&!nn&&ol(),t.render(e,n,!!(nn&&e<0&&ch(t))),ir.length&&!nn&&ol()},lp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(y_).length<2?e:Qe(t)?t.trim():t},cp=function(t){return t},Xn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},b_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Os=function(t,e){for(var n in e)t[n]=e[n];return t},Kh=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Mi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},ll=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},Ma=function(t){var e=t.parent||Le,n=t.keyframes?b_(un(t.keyframes)):Xn;if(Tn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},w_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},up=function(t,e,n,i,s){var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e},wl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},lr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Fr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},A_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Wc=function(t,e,n,i){return t._startAt&&(nn?t._startAt.revert(Wo):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},R_=function r(t){return!t||t._ts&&r(t.parent)},jh=function(t){return t._repeat?Fs(t._tTime,t=t.duration()+t._rDelay)*t:0},Fs=function(t,e){var n=Math.floor(t=De(t/e));return t&&n===t?n-1:n},cl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Al=function(t){return t._end=De(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ee)||0))},Rl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=De(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Al(t),n._dirty||Fr(n,t)),t},hp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=cl(t.rawTime(),e),(!e._dur||Ya(0,e.totalDuration(),n)-e._tTime>Ee)&&e.render(n,!0)),Fr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ee}},gi=function(t,e,n,i){return e.parent&&lr(e),e._start=De((Bi(n)?n:n||t!==Le?$n(t,n,e):t._time)+e._delay),e._end=De(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),up(t,e,"_first","_last",t._sort?"_start":0),Xc(e)||(t._recent=e),i||hp(t,e),t._ts<0&&Rl(t,t._tTime),t},fp=function(t,e){return(Wn.ScrollTrigger||sh("scrollTrigger",e))&&Wn.ScrollTrigger.create(e,t)},dp=function(t,e,n,i,s){if(hh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!nn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&sp!==zn.frame)return ir.push(t),t._lazy=[s,i],1},C_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Xc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},P_=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&C_(t)&&!(!t._initted&&Xc(t))||(t._ts<0||t._dp._ts<0)&&!Xc(t))?0:1,o=t._rDelay,l=0,c,u,f;if(o&&t._repeat&&(l=Ya(0,t._tDur,e),u=Fs(l,o),t._yoyo&&u&1&&(a=1-a),u!==Fs(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||nn||i||t._zTime===Ee||!e&&t._zTime){if(!t._initted&&dp(t,e,i,n,l))return;for(f=t._zTime,t._zTime=e||(n?Ee:0),n||(n=e&&!f),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=l,c=t._pt;c;)c.r(a,c.d),c=c._next;e<0&&Wc(t,e,n,!0),t._onUpdate&&!n&&Vn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&Vn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&lr(t,1),!n&&!nn&&(Vn(t,a?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},D_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Bs=function(t,e,n,i){var s=t._repeat,a=De(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:De(a*(s+1)+t._rDelay*s):a,o>0&&!i&&Rl(t,t._tTime=t._tDur*o),t.parent&&Al(t),n||Fr(t.parent,t),t},Zh=function(t){return t instanceof Sn?Fr(t):Bs(t,t._dur)},L_={_start:0,endTime:Oa,totalDuration:Oa},$n=function r(t,e,n){var i=t.labels,s=t._recent||L_,a=t.duration()>=Jn?s.endTime(!1):t._dur,o,l,c;return Qe(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",o=e.indexOf("="),l==="<"||l===">"?(o>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(l=parseFloat(e.charAt(o-1)+e.substr(o+1)),c&&n&&(l=l/100*(un(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+l:a+l)):e==null?a:+e},Sa=function(t,e,n){var i=Bi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,l;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Tn(l.vars.inherit)&&l.parent;a.immediateRender=Tn(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new Ge(e[0],a,e[s+1])},pr=function(t,e){return t||t===0?e(t):e},Ya=function(t,e,n){return n<t?t:n>e?e:n},ln=function(t,e){return!Qe(t)||!(e=M_.exec(t))?"":e[1]},I_=function(t,e,n){return pr(n,function(i){return Ya(t,e,i)})},Yc=[].slice,pp=function(t,e){return t&&Mi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Mi(t[0]))&&!t.nodeType&&t!==di},U_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Qe(i)&&!e||pp(i,1)?(s=n).push.apply(s,Qn(i)):n.push(i)})||n},Qn=function(t,e,n){return Pe&&!e&&Pe.selector?Pe.selector(t):Qe(t)&&!n&&(Hc||!zs())?Yc.call((e||rh).querySelectorAll(t),0):un(t)?U_(t,n):pp(t)?Yc.call(t,0):t?[t]:[]},qc=function(t){return t=Qn(t)[0]||Na("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Qn(e,n.querySelectorAll?n:n===t?Na("Invalid scope")||rh.createElement("div"):t)}},mp=function(t){return t.sort(function(){return .5-Math.random()})},_p=function(t){if(Ue(t))return t;var e=Mi(t)?t:{each:t},n=Br(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=e.axis,u=i,f=i;return Qe(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,_){var g=(_||e).length,p=a[g],m,y,x,M,A,w,S,R,L;if(!p){if(L=e.grid==="auto"?0:(e.grid||[1,Jn])[1],!L){for(S=-Jn;S<(S=_[L++].getBoundingClientRect().left)&&L<g;);L<g&&L--}for(p=a[g]=[],m=l?Math.min(L,g)*u-.5:i%L,y=L===Jn?0:l?g*f/L-.5:i/L|0,S=0,R=Jn,w=0;w<g;w++)x=w%L-m,M=y-(w/L|0),p[w]=A=c?Math.abs(c==="y"?M:x):Jd(x*x+M*M),A>S&&(S=A),A<R&&(R=A);i==="random"&&mp(p),p.max=S-R,p.min=R,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(L>g?g-1:c?c==="y"?g/L:L:Math.max(L,g/L))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=ln(e.amount||e.each)||0,n=n&&g<0?q_(n):n}return g=(p[d]-p.min)/p.max||0,De(p.b+(n?n(g):g)*p.v)+p.u}},$c=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=De(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Bi(n)?0:ln(n))}},gp=function(t,e){var n=un(t),i,s;return!n&&Mi(t)&&(i=n=t.radius||Jn,t.values?(t=Qn(t.values),(s=!Bi(t[0]))&&(i*=i)):t=$c(t.increment)),pr(e,n?Ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Jn,u=0,f=t.length,d,h;f--;)s?(d=t[f].x-o,h=t[f].y-l,d=d*d+h*h):d=Math.abs(t[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?t[u]:a,s||u===a||Bi(a)?u:u+ln(a)}:$c(t))},vp=function(t,e,n,i){return pr(un(t)?!e:n===!0?!!(n=0):!i,function(){return un(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},N_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}},O_=function(t,e){return function(n){return t(parseFloat(n))+(e||ln(n))}},F_=function(t,e,n){return yp(t,e,0,1,n)},xp=function(t,e,n){return pr(n,function(i){return t[~~e(i)]})},B_=function r(t,e,n){var i=e-t;return un(t)?xp(t,r(0,t.length),e):pr(n,function(s){return(i+(s-t)%i)%i+t})},z_=function r(t,e,n){var i=e-t,s=i*2;return un(t)?xp(t,r(0,t.length-1),e):pr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})},Fa=function(t){return t.replace(v_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(x_);return vp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},yp=function(t,e,n,i,s){var a=e-t,o=i-n;return pr(s,function(l){return n+((l-t)/a*o||0)})},k_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(h){return(1-h)*t+h*e};if(!s){var a=Qe(t),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(un(t)&&!un(e)){for(u=[],f=t.length,d=f-2,c=1;c<f;c++)u.push(r(t[c-1],t[c]));f--,s=function(_){_*=f;var g=Math.min(d,~~_);return u[g](_-g)},n=e}else i||(t=Os(un(t)?[]:{},t));if(!u){for(l in e)uh.call(o,t,l,"get",e[l]);s=function(_){return ph(_,o)||(a?t.p:t)}}}return pr(n,s)},Jh=function(t,e,n){var i=t.labels,s=Jn,a,o,l;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Vn=function(t,e,n){var i=t.vars,s=i[e],a=Pe,o=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ir.length&&ol(),o&&(Pe=o),u=l?s.apply(c,l):s.call(c),Pe=a,u},da=function(t){return lr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!nn),t.progress()<1&&Vn(t,"onInterrupt"),t},Ms,Mp=[],Sp=function(t){if(t)if(t=!t.name&&t.default||t,ih()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Oa,render:ph,add:uh,kill:ig,modifier:ng,rawVars:0},a={targetTest:0,get:0,getSetter:dh,aliases:{},register:0};if(zs(),t!==i){if(On[e])return;Xn(i,Xn(ll(t,s),a)),Os(i.prototype,Os(s,ll(t,a))),On[i.prop=e]=i,t.targetTest&&(Xo.push(i),ah[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}rp(e,i),t.register&&t.register(Cn,i,wn)}else Mp.push(t)},Se=255,pa={aqua:[0,Se,Se],lime:[0,Se,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Se],navy:[0,0,128],white:[Se,Se,Se],olive:[128,128,0],yellow:[Se,Se,0],orange:[Se,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Se,0,0],pink:[Se,192,203],cyan:[0,Se,Se],transparent:[Se,Se,Se,0]},Hl=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Se+.5|0},Ep=function(t,e,n){var i=t?Bi(t)?[t>>16,t>>8&Se,t&Se]:0:pa.black,s,a,o,l,c,u,f,d,h,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),pa[t])i=pa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t="#"+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Se,i&Se,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Se,t&Se]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(qh),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Hl(l+1/3,s,a),i[1]=Hl(l,s,a),i[2]=Hl(l-1/3,s,a);else if(~t.indexOf("="))return i=t.match(tp),n&&i.length<4&&(i[3]=1),i}else i=t.match(qh)||pa.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/Se,a=i[1]/Se,o=i[2]/Se,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},Tp=function(t){var e=[],n=[],i=-1;return t.split(rr).forEach(function(s){var a=s.match(ys)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e},Qh=function(t,e,n){var i="",s=(t+i).match(rr),a=e?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return t;if(s=s.map(function(d){return(d=Ep(d,e,1))&&a+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=Tp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(rr,"1").split(ys),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(rr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},rr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in pa)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),V_=/hsl[a]?\(/,bp=function(t){var e=t.join(" "),n;if(rr.lastIndex=0,rr.test(e))return n=V_.test(e),t[1]=Qh(t[1],n),t[0]=Qh(t[0],n,Tp(t[1])),!0},Ba,zn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,_=function g(p){var m=r()-i,y=p===!0,x,M,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,x=A-a,(x>0||y)&&(w=++f.frame,d=A-f.time*1e3,f.time=A=A/1e3,a+=x+(x>=s?4:s-x),M=1),y||(l=c(g)),M)for(h=0;h<o.length;h++)o[h](A,d,w,p)};return f={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){np&&(!Hc&&ih()&&(di=Hc=window,rh=di.document||{},Wn.gsap=Cn,(di.gsapVersions||(di.gsapVersions=[])).push(Cn.version),ip(al||di.GreenSockGlobals||!di.gsap&&di||{}),Mp.forEach(Sp)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(p){return setTimeout(p,a-f.time*1e3+1|0)},Ba=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Ba=0,c=Oa},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),a=f.time*1e3+s},add:function(p,m,y){var x=m?function(M,A,w,S){p(M,A,w,S),f.remove(x)}:p;return f.remove(p),o[y?"unshift":"push"](x),zs(),x},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&h>=m&&h--},_listeners:o},f}(),zs=function(){return!Ba&&zn.wake()},ce={},H_=/^[\d.\-M][\d.\-,\s]/,G_=/["']/g,W_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),e[i]=isNaN(c)?c.replace(G_,"").trim():+c,i=l.substr(o+1).trim();return e},X_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Y_=function(t){var e=(t+"").split("("),n=ce[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[W_(e[1])]:X_(t).split(",").map(lp)):ce._CE&&H_.test(t)?ce._CE("",t):n},q_=function(t){return function(e){return 1-t(1-e)}},Br=function(t,e){return t&&(Ue(t)?t:ce[t]||Y_(t))||e},Kr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return bn(t,function(o){ce[o]=Wn[o]=s,ce[a=o.toLowerCase()]=n;for(var l in s)ce[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ce[o+"."+l]=s[l]}),s},wp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Gl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Vc*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*g_((u-a)*s)+1},l=t==="out"?o:t==="in"?function(c){return 1-o(1-c)}:wp(o);return s=Vc/s,l.config=function(c,u){return r(t,c,u)},l},Wl=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:wp(n);return i.config=function(s){return r(t,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Kr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ce.Linear.easeNone=ce.none=ce.Linear.easeIn;Kr("Elastic",Gl("in"),Gl("out"),Gl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Kr("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Kr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Kr("Circ",function(r){return-(Jd(1-r*r)-1)});Kr("Sine",function(r){return r===1?1:-__(r*p_)+1});Kr("Back",Wl("in"),Wl("out"),Wl());ce.SteppedEase=ce.steps=Wn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-Ee;return function(o){return((i*Ya(0,a,o)|0)+s)*n}}};Ua.ease=ce["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return oh+=r+","+r+"Params,"});var Ap=function(t,e){this.id=m_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:ap,this.set=e?e.getSetter:dh},za=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Bs(this,+e.duration,1,1),this.data=e.data,Pe&&(this._ctx=Pe,Pe.data.push(this)),Ba||zn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Bs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(zs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Rl(this,n),!s._dp||s.parent||hp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ee||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),op(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jh(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jh(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ee?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?cl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ee?0:this._rts,this.totalTime(Ya(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Al(this),A_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(zs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ee&&(this._tTime-=Ee)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=De(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&gi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Tn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?cl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=E_);var i=nn;return nn=n,ch(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),nn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Zh(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Zh(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime($n(this,n),Tn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Tn(i)),this._dur||(this._zTime=-Ee),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ee:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ee,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ee)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ue(n)?n:cp,l=function(){var u=i.then;i.then=null,s&&s(),Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){da(this)},r}();Xn(za.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ee,_prom:0,_ps:!1,_rts:1});var Sn=function(r){Zd(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Tn(n.sortChildren),Le&&gi(n.parent||Le,Di(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&fp(Di(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Sa(0,arguments,this),this},e.from=function(i,s,a){return Sa(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Sa(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ge(i,s,$n(this,a),1),this},e.call=function(i,s,a){return gi(this,Ge.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Ge(i,a,$n(this,l)),this},e.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ma(a).immediateRender=Tn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},e.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Ma(o).immediateRender=Tn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},e.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:De(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,_,g,p,m,y,x,M,A,w,S;if(this!==Le&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,M=this._start,x=this._ts,m=!x,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=De(u%p),u===l?(g=this._repeat,d=c):(A=De(u/p),g=~~A,g&&g===A&&(d=c,g--),d>c&&(d=c)),A=Fs(this._tTime,p),!o&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),w&&g&1&&(d=c-d,S=1),g!==A&&!this._lock){var R=w&&A&1,L=R===(w&&g&1);if(g<A&&(R=!R),o=R?0:u%c?c:u,this._lock=1,this.render(o||(S?0:De(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Vn(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,A=g),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,L&&(this._lock=2,o=R?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=D_(this,De(o),De(d)),y&&(u-=d-(d=y._start))),this._tTime=u,this._time=d,this._act=!!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!A&&(Vn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(_=h._next,(h._act||d>=h._start)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=-Ee);break}}h=_}else{h=this._last;for(var v=i<0?i:d;h;){if(_=h._prev,(h._act||v<=h._end)&&h._ts&&y!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(v-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(v-h._start)*h._ts,s,a||nn&&ch(h)),d!==this._time||!this._ts&&!m){y=0,_&&(u+=this._zTime=v?-Ee:Ee);break}}h=_}}if(y&&!s&&(this.pause(),y.render(d>=o?0:-Ee)._zTime=d>=o?1:-1,this._ts))return this._start=M,Al(this),this.render(i,s,a);this._onUpdate&&!s&&Vn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&lr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Vn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(Bi(s)||(s=$n(this,s,i)),!(i instanceof za)){if(un(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Qe(i))return this.addLabel(i,s);if(Ue(i))i=Ge.delayedCall(0,i);else return this}return this!==i?gi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Jn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Ge?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return Qe(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&wl(this,i),i===this._recent&&(this._recent=this._last),Fr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=De(zn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=$n(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=Ge.delayedCall(0,s||Oa,a);return o.data="isPause",this._hasPause=1,gi(this,o,$n(this,i))},e.removePause=function(i){var s=this._first;for(i=$n(this,i);s;)s._start===i&&s.data==="isPause"&&lr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Zi!==o[l]&&o[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=Qn(i),l=this._first,c=Bi(s),u;l;)l instanceof Ge?T_(l._targets,o)&&(c?(!Zi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=$n(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,_=Ge.to(a,Xn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Ee,onStart:function(){if(a.pause(),!h){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());_._dur!==p&&Bs(_,p,0,1).render(_._time,!0,!0),h=1}u&&u.apply(_,f||[])}},s));return d?_.render(0):_},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,Xn({startAt:{time:$n(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Jh(this,$n(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Jh(this,$n(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ee)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=De(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Fr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Fr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,l=Jn,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,gi(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=De(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Bs(a,a===Le&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(Le._ts&&(op(Le,cl(i,Le)),sp=zn.frame),zn.frame>=$h){$h+=Gn.autoSleep||120;var s=Le._first;if((!s||!s._ts)&&Gn.autoSleep&&zn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||zn.sleep()}}},t}(za);Xn(Sn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $_=function(t,e,n,i,s,a,o){var l=new wn(this._pt,t,e,0,1,Ip,null,s),c=0,u=0,f,d,h,_,g,p,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Fa(i)),a&&(y=[n,i],a(y,t,e),n=y[0],i=y[1]),d=n.match(kl)||[];f=kl.exec(i);)_=f[0],g=i.substring(c,f.index),h?h=(h+1)%5:g.substr(-5)==="rgba("&&(h=1),_!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?bs(p,_)-p:parseFloat(_)-p,m:h&&h<4?Math.round:0},c=kl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(ep.test(i)||m)&&(l.e=0),this._pt=l,l},uh=function(t,e,n,i,s,a,o,l,c,u){Ue(i)&&(i=i(s||0,t,a));var f=t[e],d=n!=="get"?n:Ue(f)?c?t[e.indexOf("set")||!Ue(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():f,h=Ue(f)?c?Q_:Dp:fh,_;if(Qe(i)&&(~i.indexOf("random(")&&(i=Fa(i)),i.charAt(1)==="="&&(_=bs(d,i)+(ln(d)||0),(_||_===0)&&(i=_))),!u||d!==i||Kc)return!isNaN(d*i)&&i!==""?(_=new wn(this._pt,t,e,+d||0,i-(d||0),typeof f=="boolean"?eg:Lp,0,h),c&&(_.fp=c),o&&_.modifier(o,this,t),this._pt=_):(!f&&!(e in t)&&sh(e,i),$_.call(this,t,e,d,i,h,l||Gn.stringFilter,c))},K_=function(t,e,n,i,s){if(Ue(t)&&(t=Ea(t,s,e,n,i)),!Mi(t)||t.style&&t.nodeType||un(t)||Qd(t))return Qe(t)?Ea(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ea(t[o],s,e,n,i);return a},Rp=function(t,e,n,i,s,a){var o,l,c,u;if(On[t]&&(o=new On[t]).init(s,o.rawVars?e[t]:K_(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new wn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ms))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Zi,Kc,hh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,y=m&&m.data==="nested"?m.vars.targets:p,x=t._overwrite==="auto"&&!eh,M=t.timeline,A=i.easeReverse||f,w,S,R,L,v,T,I,z,k,K,V,$,X;if(M&&(!d||!s)&&(s="none"),t._ease=Br(s,Ua.ease),t._rEase=A&&(Br(A)||t._ease),t._from=!M&&!!i.runBackwards,t._from&&(t.ratio=1),!M||d&&!i.stagger){if(z=p[0]?Or(p[0]).harness:0,$=z&&i[z.prop],w=ll(i,ah),g&&(g._zTime<0&&g.progress(1),e<0&&u&&o&&!h?g.render(-1,!0):g.revert(u&&_?Wo:S_),g._lazy=0),a){if(lr(t._startAt=Ge.set(p,Xn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Tn(l),startAt:null,delay:0,onUpdate:c&&function(){return Vn(t,"onUpdate")},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn||!o&&!h)&&t._startAt.revert(Wo),o&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(o=!1),R=Xn({overwrite:!1,data:"isFromStart",lazy:o&&!g&&Tn(l),immediateRender:o,stagger:0,parent:m},w),$&&(R[z.prop]=$),lr(t._startAt=Ge.set(p,R)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(nn?t._startAt.revert(Wo):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,Ee,Ee);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Tn(l)||l&&!_,S=0;S<p.length;S++){if(v=p[S],I=v._gsap||lh(p)[S]._gsap,t._ptLookup[S]=K={},Gc[I.id]&&ir.length&&ol(),V=y===p?S:y.indexOf(v),z&&(k=new z).init(v,$||w,t,V,y)!==!1&&(t._pt=L=new wn(t._pt,v,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(rt){K[rt]=L}),k.priority&&(T=1)),!z||$)for(R in w)On[R]&&(k=Rp(R,w,t,V,v,y))?k.priority&&(T=1):K[R]=L=uh.call(t,v,R,"get",w[R],V,y,0,i.stringFilter);t._op&&t._op[S]&&t.kill(v,t._op[S]),x&&t._pt&&(Zi=t,Le.killTweensOf(v,K,t.globalTime(e)),X=!t.parent,Zi=0),t._pt&&l&&(Gc[I.id]=1)}T&&Up(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!X,d&&e<=0&&M.render(Jn,!0,!0)},j_=function(t,e,n,i,s,a,o,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,f,d,h;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,h=t._targets.length;h--;){if(u=d[h][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Kc=1,t.vars[e]="+=0",hh(t,o),Kc=0,l?Na(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Be(n)+ln(f.e)),f.b&&(f.b=u.s+ln(f.b))},Z_=function(t,e){var n=t[0]?Or(t[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return e;s=Os({},e);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},J_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",a,o;if(un(e))o=n[t]||(n[t]=[]),e.forEach(function(l,c){return o.push({t:c/(e.length-1)*100,v:l,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(t),v:e[a],e:s})},Ea=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):Qe(t)&&~t.indexOf("random(")?Fa(t):t},Cp=oh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Pp={};bn(Cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Pp[r]=1});var Ge=function(r){Zd(t,r);function t(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ma(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Le,y=(un(n)||Qd(n)?Bi(n[0]):"length"in i)?[n]:Qn(n),x,M,A,w,S,R,L,v;if(o._targets=y.length?lh(y):Na("GSAP target "+n+" not found. https://gsap.com",!Gn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,_||d||Za(c)||Za(u)){i=o.vars;var T=i.easeReverse||i.yoyoEase;if(x=o.timeline=new Sn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:y}),x.kill(),x.parent=x._dp=Di(o),x._start=0,d||Za(c)||Za(u)){if(w=y.length,L=d&&_p(d),Mi(d))for(S in d)~Cp.indexOf(S)&&(v||(v={}),v[S]=d[S]);for(M=0;M<w;M++)A=ll(i,Pp),A.stagger=0,T&&(A.easeReverse=T),v&&Os(A,v),R=y[M],A.duration=+Ea(c,Di(o),M,R,y),A.delay=(+Ea(u,Di(o),M,R,y)||0)-o._delay,!d&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),x.to(R,A,L?L(M,R,y):0),x._ease=ce.none;x.duration()?c=u=0:o.timeline=0}else if(_){Ma(Xn(x.vars.defaults,{ease:"none"})),x._ease=Br(_.ease||i.ease||"none");var I=0,z,k,K;if(un(_))_.forEach(function(V){return x.to(y,V,">")}),x.duration();else{A={};for(S in _)S==="ease"||S==="easeEach"||J_(S,_[S],A,_.easeEach);for(S in A)for(z=A[S].sort(function(V,$){return V.t-$.t}),I=0,M=0;M<z.length;M++)k=z[M],K={ease:k.e,duration:(k.t-(M?z[M-1].t:0))/100*c},K[S]=k.v,x.to(y,K,I),I+=K.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||o.duration(c=x.duration())}else o.timeline=0;return h===!0&&!eh&&(Zi=Di(o),Le.killTweensOf(y),Zi=0),gi(m,Di(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!_&&o._start===De(m._time)&&Tn(f)&&R_(Di(o))&&m.data!=="nested")&&(o._tTime=-Ee,o.render(Math.max(0,-u)||0)),p&&fp(Di(o),p),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Ee&&!u?l:i<Ee?0:i,d,h,_,g,p,m,y,x;if(!c)P_(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,x=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(d=De(f%g),f===l?(_=this._repeat,d=c):(p=De(f/g),_=~~p,_&&_===p?(d=c,_--):d>c&&(d=c)),m=this._yoyo&&_&1,m&&(d=c-d),p=Fs(this._tTime,g),d===o&&!a&&this._initted&&_===p)return this._tTime=f,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&d!==g&&this._initted&&(this._lock=a=1,this.render(De(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(dp(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var M=d<o;if(M!==this._inv){var A=M?o:c-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=A?(M?-1:1)/A:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=y=this._invRatio+this._invScale*this._invEase((d-this._invTime)*this._invRecip)}else this.ratio=y=this._ease(d/c);if(this._from&&(this.ratio=y=1-y),this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!p&&(Vn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(y,h.d),h=h._next;x&&x.render(i<0?i:x._dur*x._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Wc(this,i,s,a),Vn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&Vn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Wc(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&lr(this,1),!s&&!(u&&!o)&&(f||o||m)&&(Vn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,l){Ba||zn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||hh(this,c),u=this._ease(c/this._dur),j_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Rl(this,0),this.parent||up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?da(this):this.scrollTrigger&&this.scrollTrigger.kill(!!nn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Zi&&Zi.vars.overwrite!==!0)._first||da(this),this.parent&&a!==this.timeline.totalDuration()&&Bs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Qn(i):o,c=this._ptLookup,u=this._pt,f,d,h,_,g,p,m;if((!s||s==="all")&&w_(o,l))return s==="all"&&(this._pt=0),da(this);for(f=this._op=this._op||[],s!=="all"&&(Qe(s)&&(g={},bn(s,function(y){return g[y]=1}),s=g),s=Z_(o,s)),m=o.length;m--;)if(~l.indexOf(o[m])){d=c[m],s==="all"?(f[m]=s,_=d,h={}):(h=f[m]=f[m]||{},_=s);for(g in _)p=d&&d[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&wl(this,p,"_pt"),delete d[g]),h!=="all"&&(h[g]=1)}return this._initted&&!this._pt&&u&&da(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Sa(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Sa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return Le.killTweensOf(i,s,a)},t}(za);Xn(Ge.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Ge[r]=function(){var t=new Sn,e=Yc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var fh=function(t,e,n){return t[e]=n},Dp=function(t,e,n){return t[e](n)},Q_=function(t,e,n,i){return t[e](i.fp,n)},tg=function(t,e,n){return t.setAttribute(e,n)},dh=function(t,e){return Ue(t[e])?Dp:nh(t[e])&&t.setAttribute?tg:fh},Lp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},eg=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Ip=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},ph=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},ng=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a},ig=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?wl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},rg=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Up=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s},wn=function(){function r(e,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Lp,this.d=l||this,this.set=c||fh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=rg,this.m=n,this.mt=s,this.tween=i},r}();bn(oh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ah[r]=1});Wn.TweenMax=Wn.TweenLite=Ge;Wn.TimelineLite=Wn.TimelineMax=Sn;Le=new Sn({sortChildren:!1,defaults:Ua,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Gn.stringFilter=bp;var zr=[],Yo={},sg=[],tf=0,ag=0,Xl=function(t){return(Yo[t]||sg).map(function(e){return e()})},jc=function(){var t=Date.now(),e=[];t-tf>2&&(Xl("matchMediaInit"),zr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=di.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&e.push(n))}),Xl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),tf=t,Xl("matchMedia"))},Np=function(){function r(e,n){this.selector=n&&qc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ag++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var a=this,o=function(){var c=Pe,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=qc(s)),Pe=a,f=i.apply(a,arguments),Ue(f)&&a._r.push(f),Pe=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ue?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},t.ignore=function(n){var i=Pe;Pe=null,n(this),Pe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ge&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Sn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ge)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=zr.length;a--;)zr[a].id===this.id&&zr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r}(),og=function(){function r(e){this.contexts=[],this.scope=e,Pe&&Pe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Mi(n)||(n={matches:n});var a=new Np(0,s||this.scope),o=a.conditions={},l,c,u;Pe&&!a.selector&&(a.selector=Pe.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=di.matchMedia(n[c]),l&&(zr.indexOf(a)<0&&zr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(jc):l.addEventListener("change",jc)));return u&&i(a,function(f){return a.add(null,f)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ul={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Sp(i)})},timeline:function(t){return new Sn(t)},getTweensOf:function(t,e){return Le.getTweensOf(t,e)},getProperty:function(t,e,n,i){Qe(t)&&(t=Qn(t)[0]);var s=Or(t||{}).get,a=n?cp:lp;return n==="native"&&(n=""),t&&(e?a((On[e]&&On[e].get||s)(t,e,n,i)):function(o,l,c){return a((On[o]&&On[o].get||s)(t,o,l,c))})},quickSetter:function(t,e,n){if(t=Qn(t),t.length>1){var i=t.map(function(u){return Cn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}t=t[0]||{};var a=On[e],o=Or(t),l=o.harness&&(o.harness.aliases||{})[e]||e,c=a?function(u){var f=new a;Ms._pt=0,f.init(t,n?u+n:u,Ms,0,[t]),f.render(1,f),Ms._pt&&ph(1,Ms)}:o.set(t,l);return a?c:function(u){return c(t,l,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=Cn.to(t,Xn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(e,l,c,u)};return a.tween=s,a},isTweening:function(t){return Le.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Br(t.ease,Ua.ease)),Kh(Ua,t||{})},config:function(t){return Kh(Gn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!On[o]&&!Wn[o]&&Na(e+" effect requires "+o+" plugin.")}),Vl[e]=function(o,l,c){return n(Qn(o),Xn(l||{},s),c)},a&&(Sn.prototype[e]=function(o,l,c){return this.add(Vl[e](o,Mi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ce[t]=Br(e)},parseEase:function(t,e){return arguments.length?Br(t,e):ce},getById:function(t){return Le.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Sn(t),i,s;for(n.smoothChildTiming=Tn(t.smoothChildTiming),Le.remove(n),n._dp=0,n._time=n._tTime=Le._time,i=Le._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Ge&&i.vars.onComplete===i._targets[0]))&&gi(n,i,i._start-i._delay),i=s;return gi(Le,n,0),n},context:function(t,e){return t?new Np(t,e):Pe},matchMedia:function(t){return new og(t)},matchMediaRefresh:function(){return zr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||jc()},addEventListener:function(t,e){var n=Yo[t]||(Yo[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Yo[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:B_,wrapYoyo:z_,distribute:_p,random:vp,snap:gp,normalize:F_,getUnit:ln,clamp:I_,splitColor:Ep,toArray:Qn,selector:qc,mapRange:yp,pipe:N_,unitize:O_,interpolate:k_,shuffle:mp},install:ip,effects:Vl,ticker:zn,updateRoot:Sn.updateRoot,plugins:On,globalTimeline:Le,core:{PropTween:wn,globals:rp,Tween:Ge,Timeline:Sn,Animation:za,getCache:Or,_removeLinkedListItem:wl,reverting:function(){return nn},context:function(t){return t&&Pe&&(Pe.data.push(t),t._ctx=Pe),Pe},suppressOverwrites:function(t){return eh=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ul[r]=Ge[r]});zn.add(Sn.updateRoot);Ms=ul.to({},{duration:0});var lg=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},cg=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=lg(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))},Yl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Qe(s)&&(l={},bn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}cg(o,s)}}}},Cn=ul.registerPlugin({name:"attr",init:function(t,e,n,i,s){var a,o,l;this.tween=n;for(a in e)l=t.getAttribute(a)||"",o=this.add(t,"setAttribute",(l||0)+"",e[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)nn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Yl("roundProps",$c),Yl("modifiers"),Yl("snap",gp))||ul;Ge.version=Sn.version=Cn.version="3.15.0";np=1;ih()&&zs();ce.Power0;ce.Power1;ce.Power2;ce.Power3;ce.Power4;ce.Linear;ce.Quad;ce.Cubic;ce.Quart;ce.Quint;ce.Strong;ce.Elastic;ce.Back;ce.SteppedEase;ce.Bounce;ce.Sine;ce.Expo;ce.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ef,Ji,ws,mh,Lr,nf,_h,ug=function(){return typeof window<"u"},zi={},br=180/Math.PI,As=Math.PI/180,Qr=Math.atan2,rf=1e8,gh=/([A-Z])/g,hg=/(left|right|width|margin|padding|x)/i,fg=/[\s,\(]\S/,vi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Zc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},dg=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},pg=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},mg=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},_g=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Op=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Fp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},gg=function(t,e,n){return t.style[e]=n},vg=function(t,e,n){return t.style.setProperty(e,n)},xg=function(t,e,n){return t._gsap[e]=n},yg=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Mg=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Sg=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)},Ie="transform",An=Ie+"Origin",Eg=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in zi&&s){if(this.tfm=this.tfm||{},t!=="transform")t=vi[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return n.tfm[o]=Li(i,o)}):this.tfm[t]=a.x?a[t]:Li(i,t),t===An&&(this.tfm.zOrigin=a.zOrigin);else return vi.transform.split(",").forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Ie)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(An,e,"")),t=Ie}(s||e)&&this.props.push(t,e,s[t])},Bp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Tg=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(gh,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=_h(),(!s||!s.isStart)&&!n[Ie]&&(Bp(n),i.zOrigin&&n[An]&&(n[An]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},zp=function(t,e){var n={target:t,props:[],revert:Tg,save:Eg};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},kp,Jc=function(t,e){var n=Ji.createElementNS?Ji.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ji.createElement(t);return n&&n.style?n:Ji.createElement(t)},Hn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(gh,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,ks(e)||e,1)||""},sf="O,Moz,ms,Ms,Webkit".split(","),ks=function(t,e,n){var i=e||Lr,s=i.style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(sf[a]+t in s););return a<0?null:(a===3?"ms":a>=0?sf[a]:"")+t},Qc=function(){ug()&&window.document&&(ef=window,Ji=ef.document,ws=Ji.documentElement,Lr=Jc("div")||{style:{}},Jc("div"),Ie=ks(Ie),An=Ie+"Origin",Lr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kp=!!ks("perspective"),_h=Cn.core.reverting,mh=1)},af=function(t){var e=t.ownerSVGElement,n=Jc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ws.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ws.removeChild(n),s},of=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Vp=function(t){var e,n;try{e=t.getBBox()}catch{e=af(t),n=1}return e&&(e.width||e.height)||n||(e=af(t)),e&&!e.width&&!e.x&&!e.y?{x:+of(t,["x","cx","x1"])||0,y:+of(t,["y","cy","y1"])||0,width:0,height:0}:e},Hp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Vp(t))},cr=function(t,e){if(e){var n=t.style,i;e in zi&&e!==An&&(e=Ie),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(gh,"-$1").toLowerCase())):n.removeAttribute(e)}},Qi=function(t,e,n,i,s,a){var o=new wn(t._pt,e,n,0,1,a?Fp:Op);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o},lf={deg:1,rad:1,turn:1},bg={grid:1,flex:1},ur=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Lr.style,l=hg.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",_,g,p,m;if(i===a||!s||lf[i]||lf[a])return s;if(a!=="px"&&!d&&(s=r(t,e,n,"px")),m=t.getCTM&&Hp(t),(h||a==="%")&&(zi[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Be(h?s/_*f:s/100*_);if(o[l?"width":"height"]=f+(d?a:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ji||!g.appendChild)&&(g=Ji.body),p=g._gsap,p&&h&&p.width&&l&&p.time===zn.time&&!p.uncache)return Be(s/p.width*f);if(h&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=f+i,_=t[u],y?t.style[e]=y:cr(t,e)}else(h||a==="%")&&!bg[Hn(g,"display")]&&(o.position=Hn(t,"position")),g===t&&(o.position="static"),g.appendChild(Lr),_=Lr[u],g.removeChild(Lr),o.position="absolute";return l&&h&&(p=Or(g),p.time=zn.time,p.width=g[u]),Be(d?_*s/f:_&&s?f/_*s:0)},Li=function(t,e,n,i){var s;return mh||Qc(),e in vi&&e!=="transform"&&(e=vi[e],~e.indexOf(",")&&(e=e.split(",")[0])),zi[e]&&e!=="transform"?(s=Va(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fl(Hn(t,An))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=hl[e]&&hl[e](t,e,n)||Hn(t,e)||ap(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ur(t,e,s,n)+n:s},wg=function(t,e,n,i){if(!n||n==="none"){var s=ks(e,t,1),a=s&&Hn(t,s,1);a&&a!==n?(e=s,n=a):e==="borderColor"&&(n=Hn(t,"borderTopColor"))}var o=new wn(this._pt,t.style,e,0,1,Ip),l=0,c=0,u,f,d,h,_,g,p,m,y,x,M,A;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Hn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=Hn(t,e)||i,g?t.style[e]=g:cr(t,e)),u=[n,i],bp(u),n=u[0],i=u[1],d=n.match(ys)||[],A=i.match(ys)||[],A.length){for(;f=ys.exec(i);)p=f[0],y=i.substring(l,f.index),_?_=(_+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(_=1),p!==(g=d[c++]||"")&&(h=parseFloat(g)||0,M=g.substr((h+"").length),p.charAt(1)==="="&&(p=bs(h,p)+M),m=parseFloat(p),x=p.substr((m+"").length),l=ys.lastIndex-x.length,x||(x=x||Gn.units[e]||M,l===i.length&&(i+=x,o.e+=x)),M!==x&&(h=ur(t,e,g,x)||0),o._pt={_next:o._pt,p:y||c===1?y:",",s:h,c:m-h,m:_&&_<4||e==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=e==="display"&&i==="none"?Fp:Op;return ep.test(i)&&(o.e=0),this._pt=o,o},cf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ag=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=cf[n]||n,e[1]=cf[i]||i,e.join(" ")},Rg=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],zi[o]&&(l=1,o=o==="transformOrigin"?An:Ie),cr(n,o);l&&(cr(n,Ie),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Va(n,1),a.uncache=1,Bp(i)))}},hl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var a=t._pt=new wn(t._pt,e,n,0,0,Rg);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}},ka=[1,0,0,1,0,0],Gp={},Wp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},uf=function(t){var e=Hn(t,Ie);return Wp(e)?ka:e.substr(7).match(tp).map(Be)},vh=function(t,e){var n=t._gsap||Or(t),i=t.style,s=uf(t),a,o,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ka:s):(s===ka&&!t.offsetParent&&t!==ws&&!n.svg&&(l=i.display,i.display="block",a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,o=t.nextElementSibling,ws.appendChild(t)),s=uf(t),l?i.display=l:cr(t,"display"),c&&(o?a.insertBefore(t,o):a?a.appendChild(t):ws.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},tu=function(t,e,n,i,s,a){var o=t._gsap,l=s||vh(t,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],_=l[1],g=l[2],p=l[3],m=l[4],y=l[5],x=e.split(" "),M=parseFloat(x[0])||0,A=parseFloat(x[1])||0,w,S,R,L;n?l!==ka&&(S=h*p-_*g)&&(R=M*(p/S)+A*(-g/S)+(g*y-p*m)/S,L=M*(-_/S)+A*(h/S)-(h*y-_*m)/S,M=R,A=L):(w=Vp(t),M=w.x+(~x[0].indexOf("%")?M/100*w.width:M),A=w.y+(~(x[1]||x[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&o.smooth?(m=M-c,y=A-u,o.xOffset=f+(m*h+y*g)-m,o.yOffset=d+(m*_+y*p)-y):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=A,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[An]="0px 0px",a&&(Qi(a,o,"xOrigin",c,M),Qi(a,o,"yOrigin",u,A),Qi(a,o,"xOffset",f,o.xOffset),Qi(a,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",M+" "+A)},Va=function(t,e){var n=t._gsap||new Ap(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(t),c=Hn(t,An)||"0",u,f,d,h,_,g,p,m,y,x,M,A,w,S,R,L,v,T,I,z,k,K,V,$,X,rt,P,ot,Ft,Gt,Y,Q;return u=f=d=g=p=m=y=x=M=0,h=_=1,n.svg=!!(t.getCTM&&Hp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ie]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ie]!=="none"?l[Ie]:"")),i.scale=i.rotate=i.translate="none"),S=vh(t,n.svg),n.svg&&(n.uncache?(X=t.getBBox(),c=n.xOrigin-X.x+"px "+(n.yOrigin-X.y)+"px",$=""):$=!e&&t.getAttribute("data-svg-origin"),tu(t,$||c,!!$||n.originIsAbsolute,n.smooth!==!1,S)),A=n.xOrigin||0,w=n.yOrigin||0,S!==ka&&(T=S[0],I=S[1],z=S[2],k=S[3],u=K=S[4],f=V=S[5],S.length===6?(h=Math.sqrt(T*T+I*I),_=Math.sqrt(k*k+z*z),g=T||I?Qr(I,T)*br:0,y=z||k?Qr(z,k)*br+g:0,y&&(_*=Math.abs(Math.cos(y*As))),n.svg&&(u-=A-(A*T+w*z),f-=w-(A*I+w*k))):(Q=S[6],Gt=S[7],P=S[8],ot=S[9],Ft=S[10],Y=S[11],u=S[12],f=S[13],d=S[14],R=Qr(Q,Ft),p=R*br,R&&(L=Math.cos(-R),v=Math.sin(-R),$=K*L+P*v,X=V*L+ot*v,rt=Q*L+Ft*v,P=K*-v+P*L,ot=V*-v+ot*L,Ft=Q*-v+Ft*L,Y=Gt*-v+Y*L,K=$,V=X,Q=rt),R=Qr(-z,Ft),m=R*br,R&&(L=Math.cos(-R),v=Math.sin(-R),$=T*L-P*v,X=I*L-ot*v,rt=z*L-Ft*v,Y=k*v+Y*L,T=$,I=X,z=rt),R=Qr(I,T),g=R*br,R&&(L=Math.cos(R),v=Math.sin(R),$=T*L+I*v,X=K*L+V*v,I=I*L-T*v,V=V*L-K*v,T=$,K=X),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),h=Be(Math.sqrt(T*T+I*I+z*z)),_=Be(Math.sqrt(V*V+Q*Q)),R=Qr(K,V),y=Math.abs(R)>2e-4?R*br:0,M=Y?1/(Y<0?-Y:Y):0),n.svg&&($=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Wp(Hn(t,Ie)),$&&t.setAttribute("transform",$))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(h*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Be(h),n.scaleY=Be(_),n.rotation=Be(g)+o,n.rotationX=Be(p)+o,n.rotationY=Be(m)+o,n.skewX=y+o,n.skewY=x+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[An]=fl(c)),n.xOffset=n.yOffset=0,n.force3D=Gn.force3D,n.renderTransform=n.svg?Pg:kp?Xp:Cg,n.uncache=0,n},fl=function(t){return(t=t.split(" "))[0]+" "+t[1]},ql=function(t,e,n){var i=ln(e);return Be(parseFloat(e)+parseFloat(ur(t,"x",n+"px",i)))+i},Cg=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Xp(t,e)},gr="0deg",ea="0px",vr=") ",Xp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,M="",A=m==="auto"&&t&&t!==1||m===!0;if(x&&(f!==gr||u!==gr)){var w=parseFloat(u)*As,S=Math.sin(w),R=Math.cos(w),L;w=parseFloat(f)*As,L=Math.cos(w),a=ql(y,a,S*L*-x),o=ql(y,o,-Math.sin(w)*-x),l=ql(y,l,R*L*-x+x)}p!==ea&&(M+="perspective("+p+vr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(A||a!==ea||o!==ea||l!==ea)&&(M+=l!==ea||A?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+vr),c!==gr&&(M+="rotate("+c+vr),u!==gr&&(M+="rotateY("+u+vr),f!==gr&&(M+="rotateX("+f+vr),(d!==gr||h!==gr)&&(M+="skew("+d+", "+h+vr),(_!==1||g!==1)&&(M+="scale("+_+", "+g+vr),y.style[Ie]=M||"translate(0, 0)"},Pg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(a),M=parseFloat(o),A,w,S,R,L;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=As,c*=As,A=Math.cos(l)*f,w=Math.sin(l)*f,S=Math.sin(l-c)*-d,R=Math.cos(l-c)*d,c&&(u*=As,L=Math.tan(c-u),L=Math.sqrt(1+L*L),S*=L,R*=L,u&&(L=Math.tan(u),L=Math.sqrt(1+L*L),A*=L,w*=L)),A=Be(A),w=Be(w),S=Be(S),R=Be(R)):(A=f,R=d,w=S=0),(x&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(x=ur(h,"x",a,"px"),M=ur(h,"y",o,"px")),(_||g||p||m)&&(x=Be(x+_-(_*A+g*S)+p),M=Be(M+g-(_*w+g*R)+m)),(i||s)&&(L=h.getBBox(),x=Be(x+i/100*L.width),M=Be(M+s/100*L.height)),L="matrix("+A+","+w+","+S+","+R+","+x+","+M+")",h.setAttribute("transform",L),y&&(h.style[Ie]=L)},Dg=function(t,e,n,i,s){var a=360,o=Qe(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?br:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*rf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*rf)%a-~~(c/a)*a)),t._pt=d=new wn(t._pt,e,n,i,c,dg),d.e=u,d.u="deg",t._props.push(n),d},hf=function(t,e){for(var n in e)t[n]=e[n];return t},Lg=function(t,e,n){var i=hf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Ie]=e,o=Va(n,1),cr(n,Ie),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ie],a[Ie]=e,o=Va(n,1),a[Ie]=c);for(l in zi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=ln(c),_=ln(u),f=h!==_?ur(n,l,c,_):parseFloat(c),d=parseFloat(u),t._pt=new wn(t._pt,o,l,f,d-f,Zc),t._pt.u=_||0,t._props.push(l));hf(o,i)};bn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:"border"+o+r});hl[t>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(_){return Li(o,_,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(_,g){return h[_]=d[g]=d[g]||d[(g-1)/2|0]}),o.init(l,h,f)}});var Yp={name:"css",register:Qc,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,l=n.vars.startAt,c,u,f,d,h,_,g,p,m,y,x,M,A,w,S,R,L;mh||Qc(),this.styles=this.styles||zp(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(On[g]&&Rp(g,e,n,i,t,s)))){if(h=typeof u,_=hl[g],h==="function"&&(u=u.call(n,i,t,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Fa(u)),_)_(this,t,g,u,n)&&(S=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",rr.lastIndex=0,rr.test(c)||(p=ln(c),m=ln(u),m?p!==m&&(c=ur(t,g,c,m)+m):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),R.push(g,0,o[g]);else if(h!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Qe(c)&&~c.indexOf("random(")&&(c=Fa(c)),ln(c+"")||c==="auto"||(c+=Gn.units[g]||ln(Li(t,g))||""),(c+"").charAt(1)==="="&&(c=Li(t,g))):c=Li(t,g),d=parseFloat(c),y=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),f=parseFloat(u),g in vi&&(g==="autoAlpha"&&(d===1&&Li(t,"visibility")==="hidden"&&f&&(d=0),R.push("visibility",0,o.visibility),Qi(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=vi[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in zi,x){if(this.styles.save(g),L=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Hn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=t.style.perspective;t.style.perspective=u,u=Hn(t,"perspective"),v?t.style.perspective=v:cr(t,"perspective")}f=parseFloat(u)}if(M||(A=t._gsap,A.renderTransform&&!e.parseTransform||Va(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,M=this._pt=new wn(this._pt,o,Ie,0,1,A.renderTransform,A,0,-1),M.dep=1),g==="scale")this._pt=new wn(this._pt,A,"scaleY",A.scaleY,(y?bs(A.scaleY,y+f):f)-A.scaleY||0,Zc),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(An,0,o[An]),u=Ag(u),A.svg?tu(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&Qi(this,A,"zOrigin",A.zOrigin,m),Qi(this,o,g,fl(c),fl(u)));continue}else if(g==="svgOrigin"){tu(t,u,1,w,0,this);continue}else if(g in Gp){Dg(this,A,g,d,y?bs(d,y+u):u);continue}else if(g==="smoothOrigin"){Qi(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){Lg(this,u,t);continue}}else g in o||(g=ks(g)||g);if(x||(f||f===0)&&(d||d===0)&&!fg.test(u)&&g in o)p=(c+"").substr((d+"").length),f||(f=0),m=ln(u)||(g in Gn.units?Gn.units[g]:p),p!==m&&(d=ur(t,g,c,m)),this._pt=new wn(this._pt,x?A:o,g,d,(y?bs(d,y+f):f)-d,!x&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?_g:Zc),this._pt.u=m||0,x&&L!==u?(this._pt.b=c,this._pt.e=L,this._pt.r=mg):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=pg);else if(g in o)wg.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){sh(g,u);continue}x||(g in o?R.push(g,0,o[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),a.push(g)}}S&&Up(this)},render:function(t,e){if(e.tween._time||!_h())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Li,aliases:vi,getSetter:function(t,e,n){var i=vi[e];return i&&i.indexOf(",")<0&&(e=i),e in zi&&e!==An&&(t._gsap.x||Li(t,"x"))?n&&nf===n?e==="scale"?yg:xg:(nf=n||{})&&(e==="scale"?Mg:Sg):t.style&&!nh(t.style[e])?gg:~e.indexOf("-")?vg:dh(t,e)},core:{_removeProperty:cr,_getMatrix:vh}};Cn.utils.checkPrefix=ks;Cn.core.getStyleSaver=zp;(function(r,t,e,n){var i=bn(r+","+t+","+e,function(s){zi[s]=1});bn(t,function(s){Gn.units[s]="deg",Gp[s]=1}),vi[i[13]]=r+","+t,bn(n,function(s){var a=s.split(":");vi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Gn.units[r]="px"});Cn.registerPlugin(Yp);var Gr=Cn.registerPlugin(Yp)||Cn;Gr.core.Tween;const jr=document.createElement("div");jr.className="cursor-ring";document.body.append(jr);let qp=-100,$p=-100,$l=-100,Kl=-100;window.addEventListener("mousemove",r=>{qp=r.clientX,$p=r.clientY});Gr.ticker.add(()=>{$l+=(qp-$l)*.1,Kl+=($p-Kl)*.1,Gr.set(jr,{x:$l,y:Kl})});document.addEventListener("mouseleave",()=>Gr.to(jr,{opacity:0,duration:.3}));document.addEventListener("mouseenter",()=>Gr.to(jr,{opacity:1,duration:.3}));document.addEventListener("mouseover",r=>{r.target.closest("a, button")&&Gr.to(jr,{scale:1.25,duration:.3,ease:"power2.out"})});document.addEventListener("mouseout",r=>{r.target.closest("a, button")&&Gr.to(jr,{scale:1,duration:.3,ease:"power2.out"})});function Ig(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Ug(r,t,e){return t&&Ig(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var en,qo,kn,tr,er,Rs,Kp,wr,Cs,jp,Ni,li,Zp,Jp=function(){return en||typeof window<"u"&&(en=window.gsap)&&en.registerPlugin&&en},Qp=1,Ss=[],te=[],yi=[],Ta=Date.now,eu=function(t,e){return e},Ng=function(){var t=Cs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,te),i.push.apply(i,yi),te=n,yi=i,eu=function(a,o){return e[a](o)}},sr=function(t,e){return~yi.indexOf(t)&&yi[yi.indexOf(t)+1][e]},ba=function(t){return!!~jp.indexOf(t)},pn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},fn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ja="scrollLeft",Qa="scrollTop",nu=function(){return Ni&&Ni.isPressed||te.cache++},dl=function(t,e){var n=function i(s){if(s||s===0){Qp&&(kn.history.scrollRestoration="manual");var a=Ni&&Ni.isPressed;s=i.v=Math.round(s)||(Ni&&Ni.iOS?1:0),t(s),i.cacheID=te.cache,a&&eu("ss",s)}else(e||te.cache!==i.cacheID||eu("ref"))&&(i.cacheID=te.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},xn={s:Ja,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:dl(function(r){return arguments.length?kn.scrollTo(r,Xe.sc()):kn.pageXOffset||tr[Ja]||er[Ja]||Rs[Ja]||0})},Xe={s:Qa,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:xn,sc:dl(function(r){return arguments.length?kn.scrollTo(xn.sc(),r):kn.pageYOffset||tr[Qa]||er[Qa]||Rs[Qa]||0})},Mn=function(t,e){return(e&&e._ctx&&e._ctx.selector||en.utils.toArray)(t)[0]||(typeof t=="string"&&en.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Og=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},hr=function(t,e){var n=e.s,i=e.sc;ba(t)&&(t=tr.scrollingElement||er);var s=te.indexOf(t),a=i===Xe.sc?1:2;!~s&&(s=te.push(t)-1),te[s+a]||pn(t,"scroll",nu);var o=te[s+a],l=o||(te[s+a]=dl(sr(t,n),!0)||(ba(t)?i:dl(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,o||(l.smooth=en.getProperty(t,"scrollBehavior")==="smooth"),l},iu=function(t,e,n){var i=t,s=t,a=Ta(),o=a,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=Ta();g||p-a>l?(s=i,i=_,o=a,a=p):n?i+=_:i=s+(_-s)/(p-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(_){var g=o,p=s,m=Ta();return(_||_===0)&&_!==i&&u(_),a===o||m-o>c?0:(i+(n?p:-p))/((n?m:a)-g)*1e3};return{update:u,reset:f,getVelocity:d}},na=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},ff=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},tm=function(){Cs=en.core.globals().ScrollTrigger,Cs&&Cs.core&&Ng()},em=function(t){return en=t||Jp(),!qo&&en&&typeof document<"u"&&document.body&&(kn=window,tr=document,er=tr.documentElement,Rs=tr.body,jp=[kn,tr,er,Rs],en.utils.clamp,Zp=en.core.context||function(){},wr="onpointerenter"in Rs?"pointer":"mouse",Kp=ze.isTouch=kn.matchMedia&&kn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in kn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,li=ze.eventTypes=("ontouchstart"in er?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in er?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Qp=0},500),qo=1),Cs||tm(),qo};xn.op=Xe;te.cache=0;var ze=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){qo||em(en)||console.warn("Please gsap.registerPlugin(Observer)"),Cs||tm();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,M=n.onRelease,A=n.onRight,w=n.onLeft,S=n.onUp,R=n.onDown,L=n.onChangeX,v=n.onChangeY,T=n.onChange,I=n.onToggleX,z=n.onToggleY,k=n.onHover,K=n.onHoverEnd,V=n.onMove,$=n.ignoreCheck,X=n.isNormalizer,rt=n.onGestureStart,P=n.onGestureEnd,ot=n.onWheel,Ft=n.onEnable,Gt=n.onDisable,Y=n.onClick,Q=n.scrollSpeed,ft=n.capture,at=n.allowClicks,bt=n.lockAxis,St=n.onLockAxis;this.target=o=Mn(o)||er,this.vars=n,h&&(h=en.utils.toArray(h)),i=i||1e-9,s=s||0,_=_||1,Q=Q||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(kn.getComputedStyle(Rs).lineHeight)||22);var Ht,Vt,Ut,D,ae,Nt,Bt,B=this,Kt=0,Pt=0,C=n.passive||!u&&n.passive!==!1,E=hr(o,xn),W=hr(o,Xe),Z=E(),et=W(),j=~a.indexOf("touch")&&!~a.indexOf("pointer")&&li[0]==="pointerdown",yt=ba(o),it=o.ownerDocument||tr,dt=[0,0,0],kt=[0,0,0],nt=0,vt=function(){return nt=Ta()},xt=function(Et,ue){return(B.event=Et)&&h&&Og(Et.target,h)||ue&&j&&Et.pointerType!=="touch"||$&&$(Et,ue)},Lt=function(){B._vx.reset(),B._vy.reset(),Vt.pause(),f&&f(B)},gt=function(){var Et=B.deltaX=ff(dt),ue=B.deltaY=ff(kt),pt=Math.abs(Et)>=i,Dt=Math.abs(ue)>=i;T&&(pt||Dt)&&T(B,Et,ue,dt,kt),pt&&(A&&B.deltaX>0&&A(B),w&&B.deltaX<0&&w(B),L&&L(B),I&&B.deltaX<0!=Kt<0&&I(B),Kt=B.deltaX,dt[0]=dt[1]=dt[2]=0),Dt&&(R&&B.deltaY>0&&R(B),S&&B.deltaY<0&&S(B),v&&v(B),z&&B.deltaY<0!=Pt<0&&z(B),Pt=B.deltaY,kt[0]=kt[1]=kt[2]=0),(D||Ut)&&(V&&V(B),Ut&&(p&&Ut===1&&p(B),y&&y(B),Ut=0),D=!1),Nt&&!(Nt=!1)&&St&&St(B),ae&&(ot(B),ae=!1),Ht=0},Wt=function(Et,ue,pt){dt[pt]+=Et,kt[pt]+=ue,B._vx.update(Et),B._vy.update(ue),c?Ht||(Ht=requestAnimationFrame(gt)):gt()},Ot=function(Et,ue){bt&&!Bt&&(B.axis=Bt=Math.abs(Et)>Math.abs(ue)?"x":"y",Nt=!0),Bt!=="y"&&(dt[2]+=Et,B._vx.update(Et,!0)),Bt!=="x"&&(kt[2]+=ue,B._vy.update(ue,!0)),c?Ht||(Ht=requestAnimationFrame(gt)):gt()},oe=function(Et){if(!xt(Et,1)){Et=na(Et,u);var ue=Et.clientX,pt=Et.clientY,Dt=ue-B.x,Rt=pt-B.y,zt=B.isDragging;B.x=ue,B.y=pt,(zt||(Dt||Rt)&&(Math.abs(B.startX-ue)>=s||Math.abs(B.startY-pt)>=s))&&(Ut||(Ut=zt?2:1),zt||(B.isDragging=!0),Ot(Dt,Rt))}},N=B.onPress=function(At){xt(At,1)||At&&At.button||(B.axis=Bt=null,Vt.pause(),B.isPressed=!0,At=na(At),Kt=Pt=0,B.startX=B.x=At.clientX,B.startY=B.y=At.clientY,B._vx.reset(),B._vy.reset(),pn(X?o:it,li[1],oe,C,!0),B.deltaX=B.deltaY=0,x&&x(B))},tt=B.onRelease=function(At){if(!xt(At,1)){fn(X?o:it,li[1],oe,!0);var Et=!isNaN(B.y-B.startY),ue=B.isDragging,pt=ue&&(Math.abs(B.x-B.startX)>3||Math.abs(B.y-B.startY)>3),Dt=na(At);!pt&&Et&&(B._vx.reset(),B._vy.reset(),u&&at&&en.delayedCall(.08,function(){if(Ta()-nt>300&&!At.defaultPrevented){if(At.target.click)At.target.click();else if(it.createEvent){var Rt=it.createEvent("MouseEvents");Rt.initMouseEvent("click",!0,!0,kn,1,Dt.screenX,Dt.screenY,Dt.clientX,Dt.clientY,!1,!1,!1,!1,0,null),At.target.dispatchEvent(Rt)}}})),B.isDragging=B.isGesturing=B.isPressed=!1,f&&ue&&!X&&Vt.restart(!0),Ut&&gt(),m&&ue&&m(B),M&&M(B,pt)}},q=function(Et){return Et.touches&&Et.touches.length>1&&(B.isGesturing=!0)&&rt(Et,B.isDragging)},J=function(){return(B.isGesturing=!1)||P(B)},lt=function(Et){if(!xt(Et)){var ue=E(),pt=W();Wt((ue-Z)*Q,(pt-et)*Q,1),Z=ue,et=pt,f&&Vt.restart(!0)}},ct=function(Et){if(!xt(Et)){Et=na(Et,u),ot&&(ae=!0);var ue=(Et.deltaMode===1?l:Et.deltaMode===2?kn.innerHeight:1)*_;Wt(Et.deltaX*ue,Et.deltaY*ue,0),f&&!X&&Vt.restart(!0)}},Xt=function(Et){if(!xt(Et)){var ue=Et.clientX,pt=Et.clientY,Dt=ue-B.x,Rt=pt-B.y;B.x=ue,B.y=pt,D=!0,f&&Vt.restart(!0),(Dt||Rt)&&Ot(Dt,Rt)}},ye=function(Et){B.event=Et,k(B)},Re=function(Et){B.event=Et,K(B)},ee=function(Et){return xt(Et)||na(Et,u)&&Y(B)};Vt=B._dc=en.delayedCall(d||.25,Lt).pause(),B.deltaX=B.deltaY=0,B._vx=iu(0,50,!0),B._vy=iu(0,50,!0),B.scrollX=E,B.scrollY=W,B.isDragging=B.isGesturing=B.isPressed=!1,Zp(this),B.enable=function(At){return B.isEnabled||(pn(yt?it:o,"scroll",nu),a.indexOf("scroll")>=0&&pn(yt?it:o,"scroll",lt,C,ft),a.indexOf("wheel")>=0&&pn(o,"wheel",ct,C,ft),(a.indexOf("touch")>=0&&Kp||a.indexOf("pointer")>=0)&&(pn(o,li[0],N,C,ft),pn(it,li[2],tt),pn(it,li[3],tt),at&&pn(o,"click",vt,!0,!0),Y&&pn(o,"click",ee),rt&&pn(it,"gesturestart",q),P&&pn(it,"gestureend",J),k&&pn(o,wr+"enter",ye),K&&pn(o,wr+"leave",Re),V&&pn(o,wr+"move",Xt)),B.isEnabled=!0,B.isDragging=B.isGesturing=B.isPressed=D=Ut=!1,B._vx.reset(),B._vy.reset(),Z=E(),et=W(),At&&At.type&&N(At),Ft&&Ft(B)),B},B.disable=function(){B.isEnabled&&(Ss.filter(function(At){return At!==B&&ba(At.target)}).length||fn(yt?it:o,"scroll",nu),B.isPressed&&(B._vx.reset(),B._vy.reset(),fn(X?o:it,li[1],oe,!0)),fn(yt?it:o,"scroll",lt,ft),fn(o,"wheel",ct,ft),fn(o,li[0],N,ft),fn(it,li[2],tt),fn(it,li[3],tt),fn(o,"click",vt,!0),fn(o,"click",ee),fn(it,"gesturestart",q),fn(it,"gestureend",J),fn(o,wr+"enter",ye),fn(o,wr+"leave",Re),fn(o,wr+"move",Xt),B.isEnabled=B.isPressed=B.isDragging=!1,Gt&&Gt(B))},B.kill=B.revert=function(){B.disable();var At=Ss.indexOf(B);At>=0&&Ss.splice(At,1),Ni===B&&(Ni=0)},Ss.push(B),X&&ba(o)&&(Ni=B),B.enable(g)},Ug(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();ze.version="3.15.0";ze.create=function(r){return new ze(r)};ze.register=em;ze.getAll=function(){return Ss.slice()};ze.getById=function(r){return Ss.filter(function(t){return t.vars.id===r})[0]};Jp()&&en.registerPlugin(ze);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mt,vs,Qt,_e,Fn,de,xh,pl,Ha,wa,ma,to,an,Cl,ru,gn,df,pf,xs,nm,jl,im,_n,su,rm,sm,Ki,au,yh,Ps,Mh,Aa,ou,Zl,eo=1,on=Date.now,Jl=on(),ni=0,_a=0,mf=function(t,e,n){var i=Nn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},_f=function(t,e){return e&&(!Nn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Fg=function r(){return _a&&requestAnimationFrame(r)},gf=function(){return Cl=1},vf=function(){return Cl=0},pi=function(t){return t},ga=function(t){return Math.round(t*1e5)/1e5||0},am=function(){return typeof window<"u"},om=function(){return Mt||am()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},Wr=function(t){return!!~xh.indexOf(t)},lm=function(t){return(t==="Height"?Mh:Qt["inner"+t])||Fn["client"+t]||de["client"+t]},cm=function(t){return sr(t,"getBoundingClientRect")||(Wr(t)?function(){return Jo.width=Qt.innerWidth,Jo.height=Mh,Jo}:function(){return Ii(t)})},Bg=function(t,e,n){var i=n.d,s=n.d2,a=n.a;return(a=sr(t,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(e?lm(s):t["client"+s])||0}},zg=function(t,e){return!e||~yi.indexOf(t)?cm(t):function(){return Jo}},xi=function(t,e){var n=e.s,i=e.d2,s=e.d,a=e.a;return Math.max(0,(n="scroll"+i)&&(a=sr(t,n))?a()-cm(t)()[s]:Wr(t)?(Fn[n]||de[n])-lm(i):t[n]-t["offset"+i])},no=function(t,e){for(var n=0;n<xs.length;n+=3)(!e||~e.indexOf(xs[n+1]))&&t(xs[n],xs[n+1],xs[n+2])},Nn=function(t){return typeof t=="string"},cn=function(t){return typeof t=="function"},va=function(t){return typeof t=="number"},Ar=function(t){return typeof t=="object"},ia=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ts=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},es=Math.abs,um="left",hm="top",Sh="right",Eh="bottom",kr="width",Vr="height",Ra="Right",Ca="Left",Pa="Top",Da="Bottom",He="padding",Kn="margin",Vs="Width",Th="Height",We="px",jn=function(t){return Qt.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},kg=function(t){var e=jn(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},xf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ii=function(t,e){var n=e&&jn(t)[ru]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},ml=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},fm=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Vg=function(t){return function(e){return Mt.utils.snap(fm(t),e)}},bh=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return e(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=e(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:e(s<0?i-t:i+t)}},Hg=function(t){return function(e,n){return bh(fm(t))(e,n.direction)}},io=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Ze=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},je=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ro=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},yf={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},so={toggleActions:"play",anticipatePin:0},_l={top:0,left:0,center:.5,bottom:1,right:1},$o=function(t,e){if(Nn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in _l?_l[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ao=function(t,e,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,_=_e.createElement("div"),g=Wr(n)||sr(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?de:n.tagName==="IFRAME"?n.contentDocument.body:n,y=t.indexOf("start")!==-1,x=y?c:u,M="border-color:"+x+";font-size:"+f+";color:"+x+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(M+=(i===Xe?Sh:Eh)+":"+(a+parseFloat(d))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=y,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=M,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Ko(_,0,i,y),_},Ko=function(t,e,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Vs]=1,s["border"+o+Vs]=0,s[n.p]=e+"px",Mt.set(t,s)},Zt=[],lu={},Ga,Mf=function(){return on()-ni>34&&(Ga||(Ga=requestAnimationFrame(Fi)))},ns=function(){(!_n||!_n.isPressed||_n.startX>de.clientWidth)&&(te.cache++,_n?Ga||(Ga=requestAnimationFrame(Fi)):Fi(),ni||Yr("scrollStart"),ni=on())},Ql=function(){sm=Qt.innerWidth,rm=Qt.innerHeight},xa=function(t){te.cache++,(t===!0||!an&&!im&&!_e.fullscreenElement&&!_e.webkitFullscreenElement&&(!su||sm!==Qt.innerWidth||Math.abs(Qt.innerHeight-rm)>Qt.innerHeight*.25))&&pl.restart(!0)},Xr={},Gg=[],dm=function r(){return je(se,"scrollEnd",r)||Ir(!0)},Yr=function(t){return Xr[t]&&Xr[t].map(function(e){return e()})||Gg},Un=[],pm=function(t){for(var e=0;e<Un.length;e+=5)(!t||Un[e+4]&&Un[e+4].query===t)&&(Un[e].style.cssText=Un[e+1],Un[e].getBBox&&Un[e].setAttribute("transform",Un[e+2]||""),Un[e+3].uncache=1)},mm=function(){return te.forEach(function(t){return cn(t)&&++t.cacheID&&(t.rec=t())})},wh=function(t,e){var n;for(gn=0;gn<Zt.length;gn++)n=Zt[gn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Aa=!0,e&&pm(e),e||Yr("revert")},_m=function(t,e){te.cache++,(e||!vn)&&te.forEach(function(n){return cn(n)&&n.cacheID++&&(n.rec=0)}),Nn(t)&&(Qt.history.scrollRestoration=yh=t)},vn,Hr=0,Sf,Wg=function(){if(Sf!==Hr){var t=Sf=Hr;requestAnimationFrame(function(){return t===Hr&&Ir(!0)})}},gm=function(){de.appendChild(Ps),Mh=!_n&&Ps.offsetHeight||Qt.innerHeight,de.removeChild(Ps)},Ef=function(t){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Ir=function(t,e){if(Fn=_e.documentElement,de=_e.body,xh=[Qt,_e,Fn,de],ni&&!t&&!Aa){Ze(se,"scrollEnd",dm);return}gm(),vn=se.isRefreshing=!0,Aa||mm();var n=Yr("refreshInit");nm&&se.sort(),e||wh(),te.forEach(function(i){cn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Zt.slice(0).forEach(function(i){return i.refresh()}),Aa=!1,Zt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),ou=1,Ef(!0),Zt.forEach(function(i){var s=xi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Ef(!1),ou=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),te.forEach(function(i){cn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),_m(yh,1),pl.pause(),Hr++,vn=2,Fi(2),Zt.forEach(function(i){return cn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),vn=se.isRefreshing=!1,Yr("refresh")},cu=0,jo=1,La,Fi=function(t){if(t===2||!vn&&!Aa){se.isUpdating=!0,La&&La.update(0);var e=Zt.length,n=on(),i=n-Jl>=50,s=e&&Zt[0].scroll();if(jo=cu>s?-1:1,vn||(cu=s),i&&(ni&&!Cl&&n-ni>200&&(ni=0,Yr("scrollEnd")),ma=Jl,Jl=n),jo<0){for(gn=e;gn-- >0;)Zt[gn]&&Zt[gn].update(0,i);jo=1}else for(gn=0;gn<e;gn++)Zt[gn]&&Zt[gn].update(0,i);se.isUpdating=!1}Ga=0},uu=[um,hm,Eh,Sh,Kn+Da,Kn+Ra,Kn+Pa,Kn+Ca,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Zo=uu.concat([kr,Vr,"boxSizing","max"+Vs,"max"+Th,"position",Kn,He,He+Pa,He+Ra,He+Da,He+Ca]),Xg=function(t,e,n){Ds(n);var i=t._gsap;if(i.spacerIsNative)Ds(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},tc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=uu.length,a=e.style,o=t.style,l;s--;)l=uu[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Eh]=o[Sh]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[kr]=ml(t,xn)+We,a[Vr]=ml(t,Xe)+We,a[He]=o[Kn]=o[hm]=o[um]="0",Ds(i),o[kr]=o["max"+Vs]=n[kr],o[Vr]=o["max"+Th]=n[Vr],o[He]=n[He],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Yg=/([A-Z])/g,Ds=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,a;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)a=t[i+1],s=t[i],a?e[s]=a:e[s]&&e.removeProperty(s.replace(Yg,"-$1").toLowerCase())}},oo=function(t){for(var e=Zo.length,n=t.style,i=[],s=0;s<e;s++)i.push(Zo[s],n[Zo[s]]);return i.t=t,i},qg=function(t,e,n){for(var i=[],s=t.length,a=n?8:0,o;a<s;a+=2)o=t[a],i.push(o,o in e?e[o]:t[a+1]);return i.t=t.t,i},Jo={left:0,top:0},Tf=function(t,e,n,i,s,a,o,l,c,u,f,d,h,_){cn(t)&&(t=t(l)),Nn(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?$o("0"+t.substr(3),n):0));var g=h?h.time():0,p,m,y;if(h&&h.seek(0),isNaN(t)||(t=+t),va(t))h&&(t=Mt.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,t)),o&&Ko(o,n,i,!0);else{cn(e)&&(e=e(l));var x=(t||"0").split(" "),M,A,w,S;y=Mn(e,l)||de,M=Ii(y)||{},(!M||!M.left&&!M.top)&&jn(y).display==="none"&&(S=y.style.display,y.style.display="block",M=Ii(y),S?y.style.display=S:y.style.removeProperty("display")),A=$o(x[0],M[i.d]),w=$o(x[1]||"0",n),t=M[i.p]-c[i.p]-u+A+s-w,o&&Ko(o,w,i,n-w<20||o._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),a){var R=t+n,L=a._isStart;p="scroll"+i.d2,Ko(a,R,i,L&&R>20||!L&&(f?Math.max(de[p],Fn[p]):a.parentNode[p])<=R+1),f&&(c=Ii(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+We))}return h&&y&&(p=Ii(y),h.seek(d),m=Ii(y),h._caScrollDist=p[i.p]-m[i.p],t=t/h._caScrollDist*d),h&&h.seek(g),h?t:Math.round(t)},$g=/(webkit|moz|length|cssText|inset)/i,bf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,a,o;if(e===de){t._stOrig=s.cssText,o=jn(t);for(a in o)!+a&&!$g.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},vm=function(t,e,n){var i=e,s=i;return function(a){var o=Math.round(t());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},lo=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},wf=function(t,e){var n=hr(t,e),i="_scroll"+e.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,_={};c=c||n();var g=vm(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){te.cache++,a.tween&&Fi()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Mt.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Ze(t,"wheel",n.wheelHandler),se.isTouch&&Ze(t,"touchmove",n.wheelHandler),s},se=function(){function r(e,n){vs||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=pi;return}n=xf(Nn(n)||va(n)||n.nodeType?{trigger:n}:n,so);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,M=s.snap,A=s.pinReparent,w=s.pinSpacer,S=s.containerAnimation,R=s.fastScrollEnd,L=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?xn:Xe,T=!f&&f!==0,I=Mn(n.scroller||Qt),z=Mt.core.getCache(I),k=Wr(I),K=("pinType"in n?n.pinType:sr(I,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],$=T&&n.toggleActions.split(" "),X="markers"in n?n.markers:so.markers,rt=k?0:parseFloat(jn(I)["border"+v.p2+Vs])||0,P=this,ot=n.onRefreshInit&&function(){return n.onRefreshInit(P)},Ft=Bg(I,k,v),Gt=zg(I,k),Y=0,Q=0,ft=0,at=hr(I,v),bt,St,Ht,Vt,Ut,D,ae,Nt,Bt,B,Kt,Pt,C,E,W,Z,et,j,yt,it,dt,kt,nt,vt,xt,Lt,gt,Wt,Ot,oe,N,tt,q,J,lt,ct,Xt,ye,Re;if(P._startClamp=P._endClamp=!1,P._dir=v,p*=45,P.scroller=I,P.scroll=S?S.time.bind(S):at,Vt=at(),P.vars=n,i=i||n.animation,"refreshPriority"in n&&(nm=1,n.refreshPriority===-9999&&(La=P)),z.tweenScroll=z.tweenScroll||{top:wf(I,Xe),left:wf(I,xn)},P.tweenTo=bt=z.tweenScroll[v.p],P.scrubDuration=function(pt){q=va(pt)&&pt,q?tt?tt.duration(pt):tt=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:q,paused:!0,onComplete:function(){return m&&m(P)}}):(tt&&tt.progress(1).kill(),tt=0)},i&&(i.vars.lazy=!1,i._initted&&!P.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),P.animation=i.pause(),i.scrollTrigger=P,P.scrubDuration(f),oe=0,l||(l=i.vars.id)),M&&((!Ar(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in de.style&&Mt.set(k?[de,Fn]:I,{scrollBehavior:"auto"}),te.forEach(function(pt){return cn(pt)&&pt.target===(k?_e.scrollingElement||Fn:I)&&(pt.smooth=!1)}),Ht=cn(M.snapTo)?M.snapTo:M.snapTo==="labels"?Vg(i):M.snapTo==="labelsDirectional"?Hg(i):M.directional!==!1?function(pt,Dt){return bh(M.snapTo)(pt,on()-Q<500?0:Dt.direction)}:Mt.utils.snap(M.snapTo),J=M.duration||{min:.1,max:2},J=Ar(J)?wa(J.min,J.max):wa(J,J),lt=Mt.delayedCall(M.delay||q/2||.1,function(){var pt=at(),Dt=on()-Q<500,Rt=bt.tween;if((Dt||Math.abs(P.getVelocity())<10)&&!Rt&&!Cl&&Y!==pt){var zt=(pt-D)/E,Ne=i&&!T?i.totalProgress():zt,Yt=Dt?0:(Ne-N)/(on()-ma)*1e3||0,Ce=Mt.utils.clamp(-zt,1-zt,es(Yt/2)*Yt/.185),Oe=zt+(M.inertia===!1?0:Ce),Te,Me,me=M,Pn=me.onStart,be=me.onInterrupt,b=me.onComplete;if(Te=Ht(Oe,P),va(Te)||(Te=Oe),Me=Math.max(0,Math.round(D+Te*E)),pt<=ae&&pt>=D&&Me!==pt){if(Rt&&!Rt._initted&&Rt.data<=es(Me-pt))return;M.inertia===!1&&(Ce=Te-zt),bt(Me,{duration:J(es(Math.max(es(Oe-Ne),es(Te-Ne))*.185/Yt/.05||0)),ease:M.ease||"power3",data:es(Me-pt),onInterrupt:function(){return lt.restart(!0)&&be&&ts(P,be)},onComplete:function(){P.update(),Y=at(),i&&!T&&(tt?tt.resetTo("totalProgress",Te,i._tTime/i._tDur):i.progress(Te)),oe=N=i&&!T?i.totalProgress():P.progress,y&&y(P),b&&ts(P,b)}},pt,Ce*E,Me-pt-Ce*E),Pn&&ts(P,Pn,bt.tween)}}else P.isActive&&Y!==pt&&lt.restart(!0)}).pause()),l&&(lu[l]=P),d=P.trigger=Mn(d||h!==!0&&h),Re=d&&d._gsap&&d._gsap.stRevert,Re&&(Re=Re(P)),h=h===!0?d:Mn(h),Nn(o)&&(o={targets:d,className:o}),h&&(_===!1||_===Kn||(_=!_&&h.parentNode&&h.parentNode.style&&jn(h.parentNode).display==="flex"?!1:He),P.pin=h,St=Mt.core.getCache(h),St.spacer?W=St.pinState:(w&&(w=Mn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),St.spacerIsNative=!!w,w&&(St.spacerState=oo(w))),St.spacer=j=w||_e.createElement("div"),j.classList.add("pin-spacer"),l&&j.classList.add("pin-spacer-"+l),St.pinState=W=oo(h)),n.force3D!==!1&&Mt.set(h,{force3D:!0}),P.spacer=j=St.spacer,Ot=jn(h),vt=Ot[_+v.os2],it=Mt.getProperty(h),dt=Mt.quickSetter(h,v.a,We),tc(h,j,Ot),et=oo(h)),X){Pt=Ar(X)?xf(X,yf):yf,B=ao("scroller-start",l,I,v,Pt,0),Kt=ao("scroller-end",l,I,v,Pt,0,B),yt=B["offset"+v.op.d2];var ee=Mn(sr(I,"content")||I);Nt=this.markerStart=ao("start",l,ee,v,Pt,yt,0,S),Bt=this.markerEnd=ao("end",l,ee,v,Pt,yt,0,S),S&&(ye=Mt.quickSetter([Nt,Bt],v.a,We)),!K&&!(yi.length&&sr(I,"fixedMarkers")===!0)&&(kg(k?de:I),Mt.set([B,Kt],{force3D:!0}),Lt=Mt.quickSetter(B,v.a,We),Wt=Mt.quickSetter(Kt,v.a,We))}if(S){var At=S.vars.onUpdate,Et=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){P.update(0,0,1),At&&At.apply(S,Et||[])})}if(P.previous=function(){return Zt[Zt.indexOf(P)-1]},P.next=function(){return Zt[Zt.indexOf(P)+1]},P.revert=function(pt,Dt){if(!Dt)return P.kill(!0);var Rt=pt!==!1||!P.enabled,zt=an;Rt!==P.isReverted&&(Rt&&(ct=Math.max(at(),P.scroll.rec||0),ft=P.progress,Xt=i&&i.progress()),Nt&&[Nt,Bt,B,Kt].forEach(function(Ne){return Ne.style.display=Rt?"none":"block"}),Rt&&(an=P,P.update(Rt)),h&&(!A||!P.isActive)&&(Rt?Xg(h,j,W):tc(h,j,jn(h),xt)),Rt||P.update(Rt),an=zt,P.isReverted=Rt)},P.refresh=function(pt,Dt,Rt,zt){if(!((an||!P.enabled)&&!Dt)){if(h&&pt&&ni){Ze(r,"scrollEnd",dm);return}!vn&&ot&&ot(P),an=P,bt.tween&&!Rt&&(bt.tween.kill(),bt.tween=0),tt&&tt.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(jt){return jt.vars.immediateRender&&jt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),P.isReverted||P.revert(!0,!0),P._subPinOffset=!1;var Ne=Ft(),Yt=Gt(),Ce=S?S.duration():xi(I,v),Oe=E<=.01||!E,Te=0,Me=zt||0,me=Ar(Rt)?Rt.end:n.end,Pn=n.endTrigger||d,be=Ar(Rt)?Rt.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),b=P.pinnedContainer=n.pinnedContainer&&Mn(n.pinnedContainer,P),F=d&&Math.max(0,Zt.indexOf(P))||0,H=F,G,O,st,_t,ht,ut,wt,It,Tt,le,ie,ve,$e;for(X&&Ar(Rt)&&(ve=Mt.getProperty(B,v.p),$e=Mt.getProperty(Kt,v.p));H-- >0;)ut=Zt[H],ut.end||ut.refresh(0,1)||(an=P),wt=ut.pin,wt&&(wt===d||wt===h||wt===b)&&!ut.isReverted&&(le||(le=[]),le.unshift(ut),ut.revert(!0,!0)),ut!==Zt[H]&&(F--,H--);for(cn(be)&&(be=be(P)),be=mf(be,"start",P),D=Tf(be,d,Ne,v,at(),Nt,B,P,Yt,rt,K,Ce,S,P._startClamp&&"_startClamp")||(h?-.001:0),cn(me)&&(me=me(P)),Nn(me)&&!me.indexOf("+=")&&(~me.indexOf(" ")?me=(Nn(be)?be.split(" ")[0]:"")+me:(Te=$o(me.substr(2),Ne),me=Nn(be)?be:(S?Mt.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,D):D)+Te,Pn=d)),me=mf(me,"end",P),ae=Math.max(D,Tf(me||(Pn?"100% 0":Ce),Pn,Ne,v,at()+Te,Bt,Kt,P,Yt,rt,K,Ce,S,P._endClamp&&"_endClamp"))||-.001,Te=0,H=F;H--;)ut=Zt[H]||{},wt=ut.pin,wt&&ut.start-ut._pinPush<=D&&!S&&ut.end>0&&(G=ut.end-(P._startClamp?Math.max(0,ut.start):ut.start),(wt===d&&ut.start-ut._pinPush<D||wt===b)&&isNaN(be)&&(Te+=G*(1-ut.progress)),wt===h&&(Me+=G));if(D+=Te,ae+=Te,P._startClamp&&(P._startClamp+=Te),P._endClamp&&!vn&&(P._endClamp=ae||-.001,ae=Math.min(ae,xi(I,v))),E=ae-D||(D-=.01)&&.001,Oe&&(ft=Mt.utils.clamp(0,1,Mt.utils.normalize(D,ae,ct))),P._pinPush=Me,Nt&&Te&&(G={},G[v.a]="+="+Te,b&&(G[v.p]="-="+at()),Mt.set([Nt,Bt],G)),h&&!(ou&&P.end>=xi(I,v)))G=jn(h),_t=v===Xe,st=at(),kt=parseFloat(it(v.a))+Me,!Ce&&ae>1&&(ie=(k?_e.scrollingElement||Fn:I).style,ie={style:ie,value:ie["overflow"+v.a.toUpperCase()]},k&&jn(de)["overflow"+v.a.toUpperCase()]!=="scroll"&&(ie.style["overflow"+v.a.toUpperCase()]="scroll")),tc(h,j,G),et=oo(h),O=Ii(h,!0),It=K&&hr(I,_t?xn:Xe)(),_?(xt=[_+v.os2,E+Me+We],xt.t=j,H=_===He?ml(h,v)+E+Me:0,H&&(xt.push(v.d,H+We),j.style.flexBasis!=="auto"&&(j.style.flexBasis=H+We)),Ds(xt),b&&Zt.forEach(function(jt){jt.pin===b&&jt.vars.pinSpacing!==!1&&(jt._subPinOffset=!0)}),K&&at(ct)):(H=ml(h,v),H&&j.style.flexBasis!=="auto"&&(j.style.flexBasis=H+We)),K&&(ht={top:O.top+(_t?st-D:It)+We,left:O.left+(_t?It:st-D)+We,boxSizing:"border-box",position:"fixed"},ht[kr]=ht["max"+Vs]=Math.ceil(O.width)+We,ht[Vr]=ht["max"+Th]=Math.ceil(O.height)+We,ht[Kn]=ht[Kn+Pa]=ht[Kn+Ra]=ht[Kn+Da]=ht[Kn+Ca]="0",ht[He]=G[He],ht[He+Pa]=G[He+Pa],ht[He+Ra]=G[He+Ra],ht[He+Da]=G[He+Da],ht[He+Ca]=G[He+Ca],Z=qg(W,ht,A),vn&&at(0)),i?(Tt=i._initted,jl(1),i.render(i.duration(),!0,!0),nt=it(v.a)-kt+E+Me,gt=Math.abs(E-nt)>1,K&&gt&&Z.splice(Z.length-2,2),i.render(0,!0,!0),Tt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),jl(0)):nt=E,ie&&(ie.value?ie.style["overflow"+v.a.toUpperCase()]=ie.value:ie.style.removeProperty("overflow-"+v.a));else if(d&&at()&&!S)for(O=d.parentNode;O&&O!==de;)O._pinOffset&&(D-=O._pinOffset,ae-=O._pinOffset),O=O.parentNode;le&&le.forEach(function(jt){return jt.revert(!1,!0)}),P.start=D,P.end=ae,Vt=Ut=vn?ct:at(),!S&&!vn&&(Vt<ct&&at(ct),P.scroll.rec=0),P.revert(!1,!0),Q=on(),lt&&(Y=-1,lt.restart(!0)),an=0,i&&T&&(i._initted||Xt)&&i.progress()!==Xt&&i.progress(Xt||0,!0).render(i.time(),!0,!0),(Oe||ft!==P.progress||S||g||i&&!i._initted)&&(i&&!T&&(i._initted||ft||i.vars.immediateRender!==!1)&&i.totalProgress(S&&D<-.001&&!ft?Mt.utils.normalize(D,ae,0):ft,!0),P.progress=Oe||(Vt-D)/E===ft?0:ft),h&&_&&(j._pinOffset=Math.round(P.progress*nt)),tt&&tt.invalidate(),isNaN(ve)||(ve-=Mt.getProperty(B,v.p),$e-=Mt.getProperty(Kt,v.p),lo(B,v,ve),lo(Nt,v,ve-(zt||0)),lo(Kt,v,$e),lo(Bt,v,$e-(zt||0))),Oe&&!vn&&P.update(),u&&!vn&&!C&&(C=!0,u(P),C=!1)}},P.getVelocity=function(){return(at()-Ut)/(on()-ma)*1e3||0},P.endAnimation=function(){ia(P.callbackAnimation),i&&(tt?tt.progress(1):i.paused()?T||ia(i,P.direction<0,1):ia(i,i.reversed()))},P.labelToScroll=function(pt){return i&&i.labels&&(D||P.refresh()||D)+i.labels[pt]/i.duration()*E||0},P.getTrailing=function(pt){var Dt=Zt.indexOf(P),Rt=P.direction>0?Zt.slice(0,Dt).reverse():Zt.slice(Dt+1);return(Nn(pt)?Rt.filter(function(zt){return zt.vars.preventOverlaps===pt}):Rt).filter(function(zt){return P.direction>0?zt.end<=D:zt.start>=ae})},P.update=function(pt,Dt,Rt){if(!(S&&!Rt&&!pt)){var zt=vn===!0?ct:P.scroll(),Ne=pt?0:(zt-D)/E,Yt=Ne<0?0:Ne>1?1:Ne||0,Ce=P.progress,Oe,Te,Me,me,Pn,be,b,F;if(Dt&&(Ut=Vt,Vt=S?at():zt,M&&(N=oe,oe=i&&!T?i.totalProgress():Yt)),p&&h&&!an&&!eo&&ni&&(!Yt&&D<zt+(zt-Ut)/(on()-ma)*p?Yt=1e-4:Yt===1&&ae>zt+(zt-Ut)/(on()-ma)*p&&(Yt=.9999)),Yt!==Ce&&P.enabled){if(Oe=P.isActive=!!Yt&&Yt<1,Te=!!Ce&&Ce<1,be=Oe!==Te,Pn=be||!!Yt!=!!Ce,P.direction=Yt>Ce?1:-1,P.progress=Yt,Pn&&!an&&(Me=Yt&&!Ce?0:Yt===1?1:Ce===1?2:3,T&&(me=!be&&$[Me+1]!=="none"&&$[Me+1]||$[Me],F=i&&(me==="complete"||me==="reset"||me in i))),L&&(be||F)&&(F||f||!i)&&(cn(L)?L(P):P.getTrailing(L).forEach(function(st){return st.endAnimation()})),T||(tt&&!an&&!eo?(tt._dp._time-tt._start!==tt._time&&tt.render(tt._dp._time-tt._start),tt.resetTo?tt.resetTo("totalProgress",Yt,i._tTime/i._tDur):(tt.vars.totalProgress=Yt,tt.invalidate().restart())):i&&i.totalProgress(Yt,!!(an&&(Q||pt)))),h){if(pt&&_&&(j.style[_+v.os2]=vt),!K)dt(ga(kt+nt*Yt));else if(Pn){if(b=!pt&&Yt>Ce&&ae+1>zt&&zt+1>=xi(I,v),A)if(!pt&&(Oe||b)){var H=Ii(h,!0),G=zt-D;bf(h,de,H.top+(v===Xe?G:0)+We,H.left+(v===Xe?0:G)+We)}else bf(h,j);Ds(Oe||b?Z:et),gt&&Yt<1&&Oe||dt(kt+(Yt===1&&!b?nt:0))}}M&&!bt.tween&&!an&&!eo&&lt.restart(!0),o&&(be||x&&Yt&&(Yt<1||!Zl))&&Ha(o.targets).forEach(function(st){return st.classList[Oe||x?"add":"remove"](o.className)}),a&&!T&&!pt&&a(P),Pn&&!an?(T&&(F&&(me==="complete"?i.pause().totalProgress(1):me==="reset"?i.restart(!0).pause():me==="restart"?i.restart(!0):i[me]()),a&&a(P)),(be||!Zl)&&(c&&be&&ts(P,c),V[Me]&&ts(P,V[Me]),x&&(Yt===1?P.kill(!1,1):V[Me]=0),be||(Me=Yt===1?1:3,V[Me]&&ts(P,V[Me]))),R&&!Oe&&Math.abs(P.getVelocity())>(va(R)?R:2500)&&(ia(P.callbackAnimation),tt?tt.progress(1):ia(i,me==="reverse"?1:!Yt,1))):T&&a&&!an&&a(P)}if(Wt){var O=S?zt/S.duration()*(S._caScrollDist||0):zt;Lt(O+(B._isFlipped?1:0)),Wt(O)}ye&&ye(-zt/S.duration()*(S._caScrollDist||0))}},P.enable=function(pt,Dt){P.enabled||(P.enabled=!0,Ze(I,"resize",xa),k||Ze(I,"scroll",ns),ot&&Ze(r,"refreshInit",ot),pt!==!1&&(P.progress=ft=0,Vt=Ut=Y=at()),Dt!==!1&&P.refresh())},P.getTween=function(pt){return pt&&bt?bt.tween:tt},P.setPositions=function(pt,Dt,Rt,zt){if(S){var Ne=S.scrollTrigger,Yt=S.duration(),Ce=Ne.end-Ne.start;pt=Ne.start+Ce*pt/Yt,Dt=Ne.start+Ce*Dt/Yt}P.refresh(!1,!1,{start:_f(pt,Rt&&!!P._startClamp),end:_f(Dt,Rt&&!!P._endClamp)},zt),P.update()},P.adjustPinSpacing=function(pt){if(xt&&pt){var Dt=xt.indexOf(v.d)+1;xt[Dt]=parseFloat(xt[Dt])+pt+We,xt[1]=parseFloat(xt[1])+pt+We,Ds(xt)}},P.disable=function(pt,Dt){if(pt!==!1&&P.revert(!0,!0),P.enabled&&(P.enabled=P.isActive=!1,Dt||tt&&tt.pause(),ct=0,St&&(St.uncache=1),ot&&je(r,"refreshInit",ot),lt&&(lt.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!k)){for(var Rt=Zt.length;Rt--;)if(Zt[Rt].scroller===I&&Zt[Rt]!==P)return;je(I,"resize",xa),k||je(I,"scroll",ns)}},P.kill=function(pt,Dt){P.disable(pt,Dt),tt&&!Dt&&tt.kill(),l&&delete lu[l];var Rt=Zt.indexOf(P);Rt>=0&&Zt.splice(Rt,1),Rt===gn&&jo>0&&gn--,Rt=0,Zt.forEach(function(zt){return zt.scroller===P.scroller&&(Rt=1)}),Rt||vn||(P.scroll.rec=0),i&&(i.scrollTrigger=null,pt&&i.revert({kill:!1}),Dt||i.kill()),Nt&&[Nt,Bt,B,Kt].forEach(function(zt){return zt.parentNode&&zt.parentNode.removeChild(zt)}),La===P&&(La=0),h&&(St&&(St.uncache=1),Rt=0,Zt.forEach(function(zt){return zt.pin===h&&Rt++}),Rt||(St.spacer=0)),n.onKill&&n.onKill(P)},Zt.push(P),P.enable(!1,!1),Re&&Re(P),i&&i.add&&!E){var ue=P.update;P.update=function(){P.update=ue,te.cache++,D||ae||P.refresh()},Mt.delayedCall(.01,P.update),E=.01,D=ae=0}else P.refresh();h&&Wg()},r.register=function(n){return vs||(Mt=n||om(),am()&&window.document&&r.enable(),vs=_a),vs},r.defaults=function(n){if(n)for(var i in n)so[i]=n[i];return so},r.disable=function(n,i){_a=0,Zt.forEach(function(a){return a[i?"kill":"disable"](n)}),je(Qt,"wheel",ns),je(_e,"scroll",ns),clearInterval(to),je(_e,"touchcancel",pi),je(de,"touchstart",pi),io(je,_e,"pointerdown,touchstart,mousedown",gf),io(je,_e,"pointerup,touchend,mouseup",vf),pl.kill(),no(je);for(var s=0;s<te.length;s+=3)ro(je,te[s],te[s+1]),ro(je,te[s],te[s+2])},r.enable=function(){if(Qt=window,_e=document,Fn=_e.documentElement,de=_e.body,Mt){if(Ha=Mt.utils.toArray,wa=Mt.utils.clamp,au=Mt.core.context||pi,jl=Mt.core.suppressOverwrites||pi,yh=Qt.history.scrollRestoration||"auto",cu=Qt.pageYOffset||0,Mt.core.globals("ScrollTrigger",r),de){_a=1,Ps=document.createElement("div"),Ps.style.height="100vh",Ps.style.position="absolute",gm(),Fg(),ze.register(Mt),r.isTouch=ze.isTouch,Ki=ze.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),su=ze.isTouch===1,Ze(Qt,"wheel",ns),xh=[Qt,_e,Fn,de],Mt.matchMedia?(r.matchMedia=function(u){var f=Mt.matchMedia(),d;for(d in u)f.add(d,u[d]);return f},Mt.addEventListener("matchMediaInit",function(){mm(),wh()}),Mt.addEventListener("matchMediaRevert",function(){return pm()}),Mt.addEventListener("matchMedia",function(){Ir(0,1),Yr("matchMedia")}),Mt.matchMedia().add("(orientation: portrait)",function(){return Ql(),Ql})):console.warn("Requires GSAP 3.11.0 or later"),Ql(),Ze(_e,"scroll",ns);var n=de.hasAttribute("style"),i=de.style,s=i.borderTopStyle,a=Mt.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ii(de),Xe.m=Math.round(o.top+Xe.sc())||0,xn.m=Math.round(o.left+xn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(de.setAttribute("style",""),de.removeAttribute("style")),to=setInterval(Mf,250),Mt.delayedCall(.5,function(){return eo=0}),Ze(_e,"touchcancel",pi),Ze(de,"touchstart",pi),io(Ze,_e,"pointerdown,touchstart,mousedown",gf),io(Ze,_e,"pointerup,touchend,mouseup",vf),ru=Mt.utils.checkPrefix("transform"),Zo.push(ru),vs=on(),pl=Mt.delayedCall(.2,Ir).pause(),xs=[_e,"visibilitychange",function(){var u=Qt.innerWidth,f=Qt.innerHeight;_e.hidden?(df=u,pf=f):(df!==u||pf!==f)&&xa()},_e,"DOMContentLoaded",Ir,Qt,"load",Ir,Qt,"resize",xa],no(Ze),Zt.forEach(function(u){return u.enable(0,1)}),l=0;l<te.length;l+=3)ro(je,te[l],te[l+1]),ro(je,te[l],te[l+2])}else if(_e){var c=function u(){r.enable(),_e.removeEventListener("DOMContentLoaded",u)};_e.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Zl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(to)||(to=i)&&setInterval(Mf,i),"ignoreMobileResize"in n&&(su=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(no(je)||no(Ze,n.autoRefreshEvents||"none"),im=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mn(n),a=te.indexOf(s),o=Wr(s);~a&&te.splice(a,o?6:2),i&&(o?yi.unshift(Qt,i,de,i,Fn,i):yi.unshift(s,i))},r.clearMatchMedia=function(n){Zt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Nn(n)?Mn(n):n).getBoundingClientRect(),o=a[s?kr:Vr]*i||0;return s?a.right-o>0&&a.left+o<Qt.innerWidth:a.bottom-o>0&&a.top+o<Qt.innerHeight},r.positionInViewport=function(n,i,s){Nn(n)&&(n=Mn(n));var a=n.getBoundingClientRect(),o=a[s?kr:Vr],l=i==null?o/2:i in _l?_l[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/Qt.innerWidth:(a.top+l)/Qt.innerHeight},r.killAll=function(n){if(Zt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Xr.killAll||[];Xr={},i.forEach(function(s){return s()})}},r}();se.version="3.15.0";se.saveStyles=function(r){return r?Ha(r).forEach(function(t){if(t&&t.style){var e=Un.indexOf(t);e>=0&&Un.splice(e,5),Un.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),au())}}):Un};se.revert=function(r,t){return wh(!r,t)};se.create=function(r,t){return new se(r,t)};se.refresh=function(r){return r?xa(!0):(vs||se.register())&&Ir(!0)};se.update=function(r){return++te.cache&&Fi(r===!0?2:0)};se.clearScrollMemory=_m;se.maxScroll=function(r,t){return xi(r,t?xn:Xe)};se.getScrollFunc=function(r,t){return hr(Mn(r),t?xn:Xe)};se.getById=function(r){return lu[r]};se.getAll=function(){return Zt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};se.isScrolling=function(){return!!ni};se.snapDirectional=bh;se.addEventListener=function(r,t){var e=Xr[r]||(Xr[r]=[]);~e.indexOf(t)||e.push(t)};se.removeEventListener=function(r,t){var e=Xr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};se.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,a=function(c,u){var f=[],d=[],h=Mt.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(_){f.length||h.restart(!0),f.push(_.trigger),d.push(_),s<=f.length&&h.progress(1)}},o;for(o in t)n[o]=o.substr(0,2)==="on"&&cn(t[o])&&o!=="onRefreshInit"?a(o,t[o]):t[o];return cn(s)&&(s=s(),Ze(se,"refresh",function(){return s=t.batchMax()})),Ha(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,e.push(se.create(c))}),e};var Af=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},ec=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(ze.isTouch?" pinch-zoom":""):"none",t===Fn&&r(de,e)},co={auto:1,scroll:1},Kg=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,a=s._gsap||Mt.core.getCache(s),o=on(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==de&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(co[(l=jn(s)).overflowY]||co[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Wr(s)&&(co[(l=jn(s)).overflowY]||co[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},xm=function(t,e,n,i){return ze.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Kg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Ze(_e,ze.eventTypes[0],Cf,!1,!0)},onDisable:function(){return je(_e,ze.eventTypes[0],Cf,!0)}})},jg=/(input|label|select|textarea)/i,Rf,Cf=function(t){var e=jg.test(t.target.tagName);(e||Rf)&&(t._gsapAllow=!0,Rf=e)},Zg=function(t){Ar(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,a=e.onRelease,o,l,c=Mn(t.target)||Fn,u=Mt.core.globals().ScrollSmoother,f=u&&u.get(),d=Ki&&(t.content&&Mn(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),h=hr(c,Xe),_=hr(c,xn),g=1,p=(ze.isTouch&&Qt.visualViewport?Qt.visualViewport.scale*Qt.visualViewport.width:Qt.outerWidth)/Qt.innerWidth,m=0,y=cn(i)?function(){return i(o)}:function(){return i||2.8},x,M,A=xm(c,t.type,!0,s),w=function(){return M=!1},S=pi,R=pi,L=function(){l=xi(c,Xe),R=wa(Ki?1:0,l),n&&(S=wa(0,xi(c,xn))),x=Hr},v=function(){d._gsap.y=ga(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},T=function(){if(M){requestAnimationFrame(w);var X=ga(o.deltaY/2),rt=R(h.v-X);if(d&&rt!==h.v+h.offset){h.offset=rt-h.v;var P=ga((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+P+", 0, 1)",d._gsap.y=P+"px",h.cacheID=te.cache,Fi()}return!0}h.offset&&v(),M=!0},I,z,k,K,V=function(){L(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&Mt.set(d,{y:"+=0"}),t.ignoreCheck=function($){return Ki&&$.type==="touchmove"&&T()||g>1.05&&$.type!=="touchstart"||o.isGesturing||$.touches&&$.touches.length>1},t.onPress=function(){M=!1;var $=g;g=ga((Qt.visualViewport&&Qt.visualViewport.scale||1)/p),I.pause(),$!==g&&ec(c,g>1.01?!0:n?!1:"x"),z=_(),k=h(),L(),x=Hr},t.onRelease=t.onGestureStart=function($,X){if(h.offset&&v(),!X)K.restart(!0);else{te.cache++;var rt=y(),P,ot;n&&(P=_(),ot=P+rt*.05*-$.velocityX/.227,rt*=Af(_,P,ot,xi(c,xn)),I.vars.scrollX=S(ot)),P=h(),ot=P+rt*.05*-$.velocityY/.227,rt*=Af(h,P,ot,xi(c,Xe)),I.vars.scrollY=R(ot),I.invalidate().duration(rt).play(.01),(Ki&&I.vars.scrollY>=l||P>=l-1)&&Mt.to({},{onUpdate:V,duration:rt})}a&&a($)},t.onWheel=function(){I._ts&&I.pause(),on()-m>1e3&&(x=0,m=on())},t.onChange=function($,X,rt,P,ot){if(Hr!==x&&L(),X&&n&&_(S(P[2]===X?z+($.startX-$.x):_()+X-P[1])),rt){h.offset&&v();var Ft=ot[2]===rt,Gt=Ft?k+$.startY-$.y:h()+rt-ot[1],Y=R(Gt);Ft&&Gt!==Y&&(k+=Y-Gt),h(Y)}(rt||X)&&Fi()},t.onEnable=function(){ec(c,n?!1:"x"),se.addEventListener("refresh",V),Ze(Qt,"resize",V),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){ec(c,!0),je(Qt,"resize",V),se.removeEventListener("refresh",V),A.kill()},t.lockAxis=t.lockAxis!==!1,o=new ze(t),o.iOS=Ki,Ki&&!h()&&h(1),Ki&&Mt.ticker.add(pi),K=o._dc,I=Mt.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:vm(h,h(),function(){return I.pause()})},onUpdate:Fi,onComplete:K.vars.onComplete}),o};se.sort=function(r){if(cn(r))return Zt.sort(r);var t=Qt.pageYOffset||0;return se.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+Qt.innerHeight}),Zt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};se.observe=function(r){return new ze(r)};se.normalizeScroll=function(r){if(typeof r>"u")return _n;if(r===!0&&_n)return _n.enable();if(r===!1){_n&&_n.kill(),_n=r;return}var t=r instanceof ze?r:Zg(r);return _n&&_n.target===t.target&&_n.kill(),Wr(t.target)&&(_n=t),t};se.core={_getVelocityProp:iu,_inputObserver:xm,_scrollers:te,_proxies:yi,bridge:{ss:function(){ni||Yr("scrollStart"),ni=on()},ref:function(){return an}}};om()&&Mt.registerPlugin(se);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ah="169",Jg=0,Pf=1,Qg=2,ym=1,t0=2,Pi=3,fr=0,Rn=1,Ui=2,ar=0,Ls=1,Df=2,Lf=3,If=4,e0=5,Pr=100,n0=101,i0=102,r0=103,s0=104,a0=200,o0=201,l0=202,c0=203,hu=204,fu=205,u0=206,h0=207,f0=208,d0=209,p0=210,m0=211,_0=212,g0=213,v0=214,du=0,pu=1,mu=2,Hs=3,_u=4,gu=5,vu=6,xu=7,Mm=0,x0=1,y0=2,or=0,M0=1,S0=2,E0=3,T0=4,b0=5,w0=6,A0=7,Uf="attached",R0="detached",Sm=300,Gs=301,Ws=302,yu=303,Mu=304,Pl=306,Su=1e3,Ur=1001,Eu=1002,En=1003,C0=1004,uo=1005,ci=1006,nc=1007,Nr=1008,ki=1009,Em=1010,Tm=1011,Wa=1012,Rh=1013,qr=1014,hi=1015,qa=1016,Ch=1017,Ph=1018,Xs=1020,bm=35902,wm=1021,Am=1022,ti=1023,Rm=1024,Cm=1025,Is=1026,Ys=1027,Dh=1028,Lh=1029,Pm=1030,Ih=1031,Uh=1033,Qo=33776,tl=33777,el=33778,nl=33779,Tu=35840,bu=35841,wu=35842,Au=35843,Ru=36196,Cu=37492,Pu=37496,Du=37808,Lu=37809,Iu=37810,Uu=37811,Nu=37812,Ou=37813,Fu=37814,Bu=37815,zu=37816,ku=37817,Vu=37818,Hu=37819,Gu=37820,Wu=37821,il=36492,Xu=36494,Yu=36495,Dm=36283,qu=36284,$u=36285,Ku=36286,gl=2300,ju=2301,ic=2302,Nf=2400,Of=2401,Ff=2402,P0=2500,oT=0,lT=1,cT=2,D0=3200,L0=3201,Lm=0,I0=1,ji="",mi="srgb",mr="srgb-linear",Nh="display-p3",Dl="display-p3-linear",vl="linear",we="srgb",xl="rec709",yl="p3",is=7680,Bf=519,U0=512,N0=513,O0=514,Im=515,F0=516,B0=517,z0=518,k0=519,Zu=35044,zf="300 es",Oi=2e3,Ml=2001;class Ks{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}}const rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const Us=Math.PI/180,qs=180/Math.PI;function fi(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(rn[r&255]+rn[r>>8&255]+rn[r>>16&255]+rn[r>>24&255]+"-"+rn[t&255]+rn[t>>8&255]+"-"+rn[t>>16&15|64]+rn[t>>24&255]+"-"+rn[e&63|128]+rn[e>>8&255]+"-"+rn[e>>16&255]+rn[e>>24&255]+rn[n&255]+rn[n>>8&255]+rn[n>>16&255]+rn[n>>24&255]).toLowerCase()}function Je(r,t,e){return Math.max(t,Math.min(e,r))}function Oh(r,t){return(r%t+t)%t}function V0(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function H0(r,t,e){return r!==t?(e-r)/(t-r):0}function Ia(r,t,e){return(1-e)*r+e*t}function G0(r,t,e,n){return Ia(r,t,1-Math.exp(-e*n))}function W0(r,t=1){return t-Math.abs(Oh(r,t*2)-t)}function X0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Y0(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function q0(r,t){return r+Math.floor(Math.random()*(t-r+1))}function $0(r,t){return r+Math.random()*(t-r)}function K0(r){return r*(.5-Math.random())}function j0(r){r!==void 0&&(kf=r);let t=kf+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Z0(r){return r*Us}function J0(r){return r*qs}function Q0(r){return(r&r-1)===0&&r!==0}function tv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ev(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function nv(r,t,e,n,i){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),u=a((t+n)/2),f=s((t-n)/2),d=a((t-n)/2),h=s((n-t)/2),_=a((n-t)/2);switch(i){case"XYX":r.set(o*u,l*f,l*d,o*c);break;case"YZY":r.set(l*d,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*d,o*u,o*c);break;case"XZX":r.set(o*u,l*_,l*h,o*c);break;case"YXY":r.set(l*h,o*u,l*_,o*c);break;case"ZYZ":r.set(l*_,l*h,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ui(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const uT={DEG2RAD:Us,RAD2DEG:qs,generateUUID:fi,clamp:Je,euclideanModulo:Oh,mapLinear:V0,inverseLerp:H0,lerp:Ia,damp:G0,pingpong:W0,smoothstep:X0,smootherstep:Y0,randInt:q0,randFloat:$0,randFloatSpread:K0,seededRandom:j0,degToRad:Z0,radToDeg:J0,isPowerOfTwo:Q0,ceilPowerOfTwo:tv,floorPowerOfTwo:ev,setQuaternionFromProperEuler:nv,normalize:ge,denormalize:ui};class ne{constructor(t=0,e=0){ne.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,i,s,a,o,l,c){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c)}set(t,e,n,i,s,a,o,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],_=n[8],g=i[0],p=i[3],m=i[6],y=i[1],x=i[4],M=i[7],A=i[2],w=i[5],S=i[8];return s[0]=a*g+o*y+l*A,s[3]=a*p+o*x+l*w,s[6]=a*m+o*M+l*S,s[1]=c*g+u*y+f*A,s[4]=c*p+u*x+f*w,s[7]=c*m+u*M+f*S,s[2]=d*g+h*y+_*A,s[5]=d*p+h*x+_*w,s[8]=d*m+h*M+_*S,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8];return e*a*u-e*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,_=e*f+n*d+i*h;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=f*g,t[1]=(i*c-u*n)*g,t[2]=(o*n-i*a)*g,t[3]=d*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-o*e)*g,t[6]=h*g,t[7]=(n*l-c*e)*g,t[8]=(a*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-i*c,i*l,-i*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(rc.makeScale(t,e)),this}rotate(t){return this.premultiply(rc.makeRotation(-t)),this}translate(t,e){return this.premultiply(rc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new $t;function Um(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function iv(){const r=Xa("canvas");return r.style.display="block",r}const Vf={};function rl(r){r in Vf||(Vf[r]=!0,console.warn(r))}function rv(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function sv(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function av(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hf=new $t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gf=new $t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ra={[mr]:{transfer:vl,primaries:xl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[mi]:{transfer:we,primaries:xl,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Dl]:{transfer:vl,primaries:yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(Gf),fromReference:r=>r.applyMatrix3(Hf)},[Nh]:{transfer:we,primaries:yl,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(Gf),fromReference:r=>r.applyMatrix3(Hf).convertLinearToSRGB()}},ov=new Set([mr,Dl]),pe={enabled:!0,_workingColorSpace:mr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!ov.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=ra[t].toReference,i=ra[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return ra[r].primaries},getTransfer:function(r){return r===ji?vl:ra[r].transfer},getLuminanceCoefficients:function(r,t=this._workingColorSpace){return r.fromArray(ra[t].luminanceCoefficients)}};function Ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let rs;class lv{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{rs===void 0&&(rs=Xa("canvas")),rs.width=t.width,rs.height=t.height;const n=rs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=rs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Xa("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ns(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ns(e[n]/255)*255):e[n]=Ns(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cv=0;class Nm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=fi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ac(i[a].image)):s.push(ac(i[a]))}else s=ac(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function ac(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uv=0;class hn extends Ks{constructor(t=hn.DEFAULT_IMAGE,e=hn.DEFAULT_MAPPING,n=Ur,i=Ur,s=ci,a=Nr,o=ti,l=ki,c=hn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=fi(),this.name="",this.source=new Nm(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ne(0,0),this.repeat=new ne(1,1),this.center=new ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Sm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Su:t.x=t.x-Math.floor(t.x);break;case Ur:t.x=t.x<0?0:1;break;case Eu:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Su:t.y=t.y-Math.floor(t.y);break;case Ur:t.y=t.y<0?0:1;break;case Eu:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Sm;hn.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,i=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,M=(h+1)/2,A=(m+1)/2,w=(u+d)/4,S=(f+g)/4,R=(_+p)/4;return x>M&&x>A?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=w/n,s=S/n):M>A?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=w/i,s=R/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=S/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(p-_)/y,this.y=(f-g)/y,this.z=(d-u)/y,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hv extends Ks{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Nm(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $r extends hv{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Om extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fv extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=En,this.minFilter=En,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3];const d=s[a+0],h=s[a+1],_=s[a+2],g=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=h,t[e+2]=_,t[e+3]=g;return}if(f!==g||l!==d||c!==h||u!==_){let p=1-o;const m=l*d+c*h+u*_+f*g,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const A=Math.sqrt(x),w=Math.atan2(A,m*y);p=Math.sin(p*w)/A,o=Math.sin(o*w)/A}const M=o*y;if(l=l*p+d*M,c=c*p+h*M,u=u*p+_*M,f=f*p+g*M,p===1-o){const A=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=A,c*=A,u*=A,f*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],_=s[a+3];return t[e]=o*_+u*f+l*h-c*d,t[e+1]=l*_+u*d+c*f-o*h,t[e+2]=c*_+u*h+o*d-l*f,t[e+3]=u*_-o*f-l*d-c*h,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),_=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"YXZ":this._x=d*u*f+c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"ZXY":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f-d*h*_;break;case"ZYX":this._x=d*u*f-c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f+d*h*_;break;case"YZX":this._x=d*u*f+c*h*_,this._y=c*h*f+d*u*_,this._z=c*u*_-d*h*f,this._w=c*u*f-d*h*_;break;case"XZY":this._x=d*u*f-c*h*_,this._y=c*h*f-d*u*_,this._z=c*u*_+d*h*f,this._w=c*u*f+d*h*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],u=e[6],f=e[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Je(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+i*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=i,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const h=1-e;return this._w=h*a+e*this._w,this._x=h*n+e*this._x,this._y=h*i+e*this._y,this._z=h*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wf.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wf.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*i-o*n),u=2*(o*e-s*i),f=2*(s*n-a*e);return this.x=e+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oc.copy(this).projectOnVector(t),this.sub(oc)}reflect(t){return this.sub(oc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Je(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oc=new U,Wf=new js;class _r{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(si.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(si.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=si.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(t.matrixWorld),this.expandByPoint(si);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ho.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(t.matrixWorld),this.union(ho)}const i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,si),si.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(sa),fo.subVectors(this.max,sa),ss.subVectors(t.a,sa),as.subVectors(t.b,sa),os.subVectors(t.c,sa),Gi.subVectors(as,ss),Wi.subVectors(os,as),xr.subVectors(ss,os);let e=[0,-Gi.z,Gi.y,0,-Wi.z,Wi.y,0,-xr.z,xr.y,Gi.z,0,-Gi.x,Wi.z,0,-Wi.x,xr.z,0,-xr.x,-Gi.y,Gi.x,0,-Wi.y,Wi.x,0,-xr.y,xr.x,0];return!lc(e,ss,as,os,fo)||(e=[1,0,0,0,1,0,0,0,1],!lc(e,ss,as,os,fo))?!1:(po.crossVectors(Gi,Wi),e=[po.x,po.y,po.z],lc(e,ss,as,os,fo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,si).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(si).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ti),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ti=[new U,new U,new U,new U,new U,new U,new U,new U],si=new U,ho=new _r,ss=new U,as=new U,os=new U,Gi=new U,Wi=new U,xr=new U,sa=new U,fo=new U,po=new U,yr=new U;function lc(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){yr.fromArray(r,s);const o=i.x*Math.abs(yr.x)+i.y*Math.abs(yr.y)+i.z*Math.abs(yr.z),l=t.dot(yr),c=e.dot(yr),u=n.dot(yr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const dv=new _r,aa=new U,cc=new U;class Vi{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):dv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;aa.subVectors(t,this.center);const e=aa.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(aa,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(cc.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(aa.copy(t.center).add(cc)),this.expandByPoint(aa.copy(t.center).sub(cc))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new U,uc=new U,mo=new U,Xi=new U,hc=new U,_o=new U,fc=new U;class $a{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bi.copy(this.origin).addScaledVector(this.direction,e),bi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){uc.copy(t).add(e).multiplyScalar(.5),mo.copy(e).sub(t).normalize(),Xi.copy(this.origin).sub(uc);const s=t.distanceTo(e)*.5,a=-this.direction.dot(mo),o=Xi.dot(this.direction),l=-Xi.dot(mo),c=Xi.lengthSq(),u=Math.abs(1-a*a);let f,d,h,_;if(u>0)if(f=a*l-o,d=a*o-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const g=1/u;f*=g,d*=g,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(uc).addScaledVector(mo,d),h}intersectSphere(t,e){bi.subVectors(t.center,this.origin);const n=bi.dot(this.direction),i=bi.dot(bi)-n*n,s=t.radius*t.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),u>=0?(s=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(s=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(t.min.z-d.z)*f,l=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,l=(t.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bi)!==null}intersectTriangle(t,e,n,i,s){hc.subVectors(e,t),_o.subVectors(n,t),fc.crossVectors(hc,_o);let a=this.direction.dot(fc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xi.subVectors(this.origin,t);const l=o*this.direction.dot(_o.crossVectors(Xi,_o));if(l<0)return null;const c=o*this.direction.dot(hc.cross(Xi));if(c<0||l+c>a)return null;const u=-o*Xi.dot(fc);return u<0?null:this.at(u/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(t,e,n,i,s,a,o,l,c,u,f,d,h,_,g,p){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,l,c,u,f,d,h,_,g,p)}set(t,e,n,i,s,a,o,l,c,u,f,d,h,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),a=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const d=a*u,h=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=-l*f,e[8]=c,e[1]=h+_*c,e[5]=d-g*c,e[9]=-o*l,e[2]=g-d*c,e[6]=_+h*c,e[10]=a*l}else if(t.order==="YXZ"){const d=l*u,h=l*f,_=c*u,g=c*f;e[0]=d+g*o,e[4]=_*o-h,e[8]=a*c,e[1]=a*f,e[5]=a*u,e[9]=-o,e[2]=h*o-_,e[6]=g+d*o,e[10]=a*l}else if(t.order==="ZXY"){const d=l*u,h=l*f,_=c*u,g=c*f;e[0]=d-g*o,e[4]=-a*f,e[8]=_+h*o,e[1]=h+_*o,e[5]=a*u,e[9]=g-d*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const d=a*u,h=a*f,_=o*u,g=o*f;e[0]=l*u,e[4]=_*c-h,e[8]=d*c+g,e[1]=l*f,e[5]=g*c+d,e[9]=h*c-_,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const d=a*l,h=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=g-d*f,e[8]=_*f+h,e[1]=f,e[5]=a*u,e[9]=-o*u,e[2]=-c*u,e[6]=h*f+_,e[10]=d-g*f}else if(t.order==="XZY"){const d=a*l,h=a*c,_=o*l,g=o*c;e[0]=l*u,e[4]=-f,e[8]=c*u,e[1]=d*f+g,e[5]=a*u,e[9]=h*f-_,e[2]=_*f-h,e[6]=o*u,e[10]=g*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pv,t,mv)}lookAt(t,e,n){const i=this.elements;return Ln.subVectors(t,e),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),Yi.crossVectors(n,Ln),Yi.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),Yi.crossVectors(n,Ln)),Yi.normalize(),go.crossVectors(Ln,Yi),i[0]=Yi.x,i[4]=go.x,i[8]=Ln.x,i[1]=Yi.y,i[5]=go.y,i[9]=Ln.y,i[2]=Yi.z,i[6]=go.z,i[10]=Ln.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],_=n[2],g=n[6],p=n[10],m=n[14],y=n[3],x=n[7],M=n[11],A=n[15],w=i[0],S=i[4],R=i[8],L=i[12],v=i[1],T=i[5],I=i[9],z=i[13],k=i[2],K=i[6],V=i[10],$=i[14],X=i[3],rt=i[7],P=i[11],ot=i[15];return s[0]=a*w+o*v+l*k+c*X,s[4]=a*S+o*T+l*K+c*rt,s[8]=a*R+o*I+l*V+c*P,s[12]=a*L+o*z+l*$+c*ot,s[1]=u*w+f*v+d*k+h*X,s[5]=u*S+f*T+d*K+h*rt,s[9]=u*R+f*I+d*V+h*P,s[13]=u*L+f*z+d*$+h*ot,s[2]=_*w+g*v+p*k+m*X,s[6]=_*S+g*T+p*K+m*rt,s[10]=_*R+g*I+p*V+m*P,s[14]=_*L+g*z+p*$+m*ot,s[3]=y*w+x*v+M*k+A*X,s[7]=y*S+x*T+M*K+A*rt,s[11]=y*R+x*I+M*V+A*P,s[15]=y*L+x*z+M*$+A*ot,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],u=t[2],f=t[6],d=t[10],h=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*f-i*c*f-s*o*d+n*c*d+i*o*h-n*l*h)+g*(+e*l*h-e*c*d+s*a*d-i*a*h+i*c*u-s*l*u)+p*(+e*c*f-e*o*h-s*a*f+n*a*h+s*o*u-n*c*u)+m*(-i*o*u-e*l*f+e*o*d+i*a*f-n*a*d+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],u=t[8],f=t[9],d=t[10],h=t[11],_=t[12],g=t[13],p=t[14],m=t[15],y=f*p*c-g*d*c+g*l*h-o*p*h-f*l*m+o*d*m,x=_*d*c-u*p*c-_*l*h+a*p*h+u*l*m-a*d*m,M=u*g*c-_*f*c+_*o*h-a*g*h-u*o*m+a*f*m,A=_*f*l-u*g*l-_*o*d+a*g*d+u*o*p-a*f*p,w=e*y+n*x+i*M+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const S=1/w;return t[0]=y*S,t[1]=(g*d*s-f*p*s-g*i*h+n*p*h+f*i*m-n*d*m)*S,t[2]=(o*p*s-g*l*s+g*i*c-n*p*c-o*i*m+n*l*m)*S,t[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*h-n*l*h)*S,t[4]=x*S,t[5]=(u*p*s-_*d*s+_*i*h-e*p*h-u*i*m+e*d*m)*S,t[6]=(_*l*s-a*p*s-_*i*c+e*p*c+a*i*m-e*l*m)*S,t[7]=(a*d*s-u*l*s+u*i*c-e*d*c-a*i*h+e*l*h)*S,t[8]=M*S,t[9]=(_*f*s-u*g*s-_*n*h+e*g*h+u*n*m-e*f*m)*S,t[10]=(a*g*s-_*o*s+_*n*c-e*g*c-a*n*m+e*o*m)*S,t[11]=(u*o*s-a*f*s-u*n*c+e*f*c+a*n*h-e*o*h)*S,t[12]=A*S,t[13]=(u*g*i-_*f*i+_*n*d-e*g*d-u*n*p+e*f*p)*S,t[14]=(_*o*i-a*g*i-_*n*l+e*g*l+a*n*p-e*o*p)*S,t[15]=(a*f*i-u*o*i+u*n*l-e*f*l-a*n*d+e*o*d)*S,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,_=s*f,g=a*u,p=a*f,m=o*f,y=l*c,x=l*u,M=l*f,A=n.x,w=n.y,S=n.z;return i[0]=(1-(g+m))*A,i[1]=(h+M)*A,i[2]=(_-x)*A,i[3]=0,i[4]=(h-M)*w,i[5]=(1-(d+m))*w,i[6]=(p+y)*w,i[7]=0,i[8]=(_+x)*S,i[9]=(p-y)*S,i[10]=(1-(d+g))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=ls.set(i[0],i[1],i[2]).length();const a=ls.set(i[4],i[5],i[6]).length(),o=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ai.copy(this);const c=1/s,u=1/a,f=1/o;return ai.elements[0]*=c,ai.elements[1]*=c,ai.elements[2]*=c,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=f,ai.elements[9]*=f,ai.elements[10]*=f,e.setFromRotationMatrix(ai),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,i,s,a,o=Oi){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i);let h,_;if(o===Oi)h=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ml)h=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=Oi){const l=this.elements,c=1/(e-t),u=1/(n-i),f=1/(a-s),d=(e+t)*c,h=(n+i)*u;let _,g;if(o===Oi)_=(a+s)*f,g=-2*f;else if(o===Ml)_=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ls=new U,ai=new Jt,pv=new U(0,0,0),mv=new U(1,1,1),Yi=new U,go=new U,Ln=new U,Xf=new Jt,Yf=new js;class Si{constructor(t=0,e=0,n=0,i=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(e){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xf,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Yf.setFromEuler(this),this.setFromQuaternion(Yf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class Fh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _v=0;const qf=new U,cs=new js,wi=new Jt,vo=new U,oa=new U,gv=new U,vv=new js,$f=new U(1,0,0),Kf=new U(0,1,0),jf=new U(0,0,1),Zf={type:"added"},xv={type:"removed"},us={type:"childadded",child:null},dc={type:"childremoved",child:null};class ke extends Ks{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=fi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const t=new U,e=new Si,n=new js,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new $t}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis($f,t)}rotateY(t){return this.rotateOnAxis(Kf,t)}rotateZ(t){return this.rotateOnAxis(jf,t)}translateOnAxis(t,e){return qf.copy(t).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($f,t)}translateY(t){return this.translateOnAxis(Kf,t)}translateZ(t){return this.translateOnAxis(jf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vo.copy(t):vo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(oa,vo,this.up):wi.lookAt(vo,oa,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(wi),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Zf),us.child=t,this.dispatchEvent(us),us.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xv),dc.child=t,this.dispatchEvent(dc),dc.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wi.multiply(t.parent.matrixWorld)),t.applyMatrix4(wi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Zf),us.child=t,this.dispatchEvent(us),us.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,t,gv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,vv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(t.shapes,f)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));i.material=o}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),u=a(t.images),f=a(t.shapes),d=a(t.skeletons),h=a(t.animations),_=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new U(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new U,Ai=new U,pc=new U,Ri=new U,hs=new U,fs=new U,Jf=new U,mc=new U,_c=new U,gc=new U,vc=new he,xc=new he,yc=new he;class Zn{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),oi.subVectors(t,e),i.cross(oi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){oi.subVectors(i,e),Ai.subVectors(n,e),pc.subVectors(t,e);const a=oi.dot(oi),o=oi.dot(Ai),l=oi.dot(pc),c=Ai.dot(Ai),u=Ai.dot(pc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,_=(a*u-o*l)*d;return s.set(1-h-_,_,h)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(t,e,n,i,s,a,o,l){return this.getBarycoord(t,e,n,i,Ri)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ri.x),l.addScaledVector(a,Ri.y),l.addScaledVector(o,Ri.z),l)}static getInterpolatedAttribute(t,e,n,i,s,a){return vc.setScalar(0),xc.setScalar(0),yc.setScalar(0),vc.fromBufferAttribute(t,e),xc.fromBufferAttribute(t,n),yc.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(vc,s.x),a.addScaledVector(xc,s.y),a.addScaledVector(yc,s.z),a}static isFrontFacing(t,e,n,i){return oi.subVectors(n,e),Ai.subVectors(t,e),oi.cross(Ai).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),oi.cross(Ai).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Zn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Zn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return Zn.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return Zn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Zn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let a,o;hs.subVectors(i,n),fs.subVectors(s,n),mc.subVectors(t,n);const l=hs.dot(mc),c=fs.dot(mc);if(l<=0&&c<=0)return e.copy(n);_c.subVectors(t,i);const u=hs.dot(_c),f=fs.dot(_c);if(u>=0&&f<=u)return e.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),e.copy(n).addScaledVector(hs,a);gc.subVectors(t,s);const h=hs.dot(gc),_=fs.dot(gc);if(_>=0&&h<=_)return e.copy(s);const g=h*c-l*_;if(g<=0&&c>=0&&_<=0)return o=c/(c-_),e.copy(n).addScaledVector(fs,o);const p=u*_-h*f;if(p<=0&&f-u>=0&&h-_>=0)return Jf.subVectors(s,i),o=(f-u)/(f-u+(h-_)),e.copy(i).addScaledVector(Jf,o);const m=1/(p+g+d);return a=g*m,o=d*m,e.copy(n).addScaledVector(hs,a).addScaledVector(fs,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Mc(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class re{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=Oh(t,1),e=Je(e,0,1),n=Je(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Mc(a,s,t+1/3),this.g=Mc(a,s,t),this.b=Mc(a,s,t-1/3)}return pe.toWorkingColorSpace(this,i),this}setStyle(t,e=mi){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=mi){const n=Fm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ns(t.r),this.g=Ns(t.g),this.b=Ns(t.b),this}copyLinearToSRGB(t){return this.r=sc(t.r),this.g=sc(t.g),this.b=sc(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return pe.fromWorkingColorSpace(sn.copy(this),t),Math.round(Je(sn.r*255,0,255))*65536+Math.round(Je(sn.g*255,0,255))*256+Math.round(Je(sn.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(sn.copy(this),e);const n=sn.r,i=sn.g,s=sn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=mi){pe.fromWorkingColorSpace(sn.copy(this),t);const e=sn.r,n=sn.g,i=sn.b;return t!==mi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(qi),this.setHSL(qi.h+t,qi.s+e,qi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qi),t.getHSL(xo);const n=Ia(qi.h,xo.h,e),i=Ia(qi.s,xo.s,e),s=Ia(qi.l,xo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const sn=new re;re.NAMES=Fm;let yv=0;class Zr extends Ks{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yv++}),this.uuid=fi(),this.name="",this.type="Material",this.blending=Ls,this.side=fr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=fu,this.blendEquation=Pr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new re(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ls&&(n.blending=this.blending),this.side!==fr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==fu&&(n.blendDst=this.blendDst),this.blendEquation!==Pr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Bm extends Zr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new re(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=Mm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ve=new U,yo=new ne;class ii{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zu,this.updateRanges=[],this.gpuType=hi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix3(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ui(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ui(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ui(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ui(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zu&&(t.usage=this.usage),t}}class zm extends ii{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class km extends ii{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ae extends ii{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Mv=0;const qn=new Jt,Sc=new ke,ds=new U,In=new _r,la=new _r,Ke=new U;class yn extends Ks{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=fi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Um(t)?km:zm)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new $t().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qn.makeRotationFromQuaternion(t),this.applyMatrix4(qn),this}rotateX(t){return qn.makeRotationX(t),this.applyMatrix4(qn),this}rotateY(t){return qn.makeRotationY(t),this.applyMatrix4(qn),this}rotateZ(t){return qn.makeRotationZ(t),this.applyMatrix4(qn),this}translate(t,e,n){return qn.makeTranslation(t,e,n),this.applyMatrix4(qn),this}scale(t,e,n){return qn.makeScale(t,e,n),this.applyMatrix4(qn),this}lookAt(t){return Sc.lookAt(t),Sc.updateMatrix(),this.applyMatrix4(Sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ae(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _r);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(Ke.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(Ke),Ke.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(Ke)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(Ke.addVectors(In.min,la.min),In.expandByPoint(Ke),Ke.addVectors(In.max,la.max),In.expandByPoint(Ke)):(In.expandByPoint(la.min),In.expandByPoint(la.max))}In.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)Ke.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ke));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ke.fromBufferAttribute(o,c),l&&(ds.fromBufferAttribute(t,c),Ke.add(ds)),i=Math.max(i,n.distanceToSquared(Ke))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ii(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new U,l[R]=new U;const c=new U,u=new U,f=new U,d=new ne,h=new ne,_=new ne,g=new U,p=new U;function m(R,L,v){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,L),f.fromBufferAttribute(n,v),d.fromBufferAttribute(s,R),h.fromBufferAttribute(s,L),_.fromBufferAttribute(s,v),u.sub(c),f.sub(c),h.sub(d),_.sub(d);const T=1/(h.x*_.y-_.x*h.y);isFinite(T)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(f,-h.y).multiplyScalar(T),p.copy(f).multiplyScalar(h.x).addScaledVector(u,-_.x).multiplyScalar(T),o[R].add(g),o[L].add(g),o[v].add(g),l[R].add(p),l[L].add(p),l[v].add(p))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,L=y.length;R<L;++R){const v=y[R],T=v.start,I=v.count;for(let z=T,k=T+I;z<k;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new U,M=new U,A=new U,w=new U;function S(R){A.fromBufferAttribute(i,R),w.copy(A);const L=o[R];x.copy(L),x.sub(A.multiplyScalar(A.dot(L))).normalize(),M.crossVectors(w,L);const T=M.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,T)}for(let R=0,L=y.length;R<L;++R){const v=y[R],T=v.start,I=v.count;for(let z=T,k=T+I;z<k;z+=3)S(t.getX(z+0)),S(t.getX(z+1)),S(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ii(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(t)for(let d=0,h=t.count;d<h;d+=3){const _=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),a.fromBufferAttribute(e,p),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=e.count;d<h;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ke.fromBufferAttribute(t,e),Ke.normalize(),t.setXYZ(e,Ke.x,Ke.y,Ke.z)}toNonIndexed(){function t(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,_=0;for(let g=0,p=l.length;g<p;g++){o.isInterleavedBufferAttribute?h=l[g]*o.data.stride+o.offset:h=l[g]*u;for(let m=0;m<u;m++)d[_++]=c[h++]}return new ii(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new yn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=t(d,n);l.push(h)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qf=new Jt,Mr=new $a,Mo=new Vi,td=new U,So=new U,Eo=new U,To=new U,Ec=new U,bo=new U,ed=new U,wo=new U;class ei extends ke{constructor(t=new yn,e=new Bm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Ec.fromBufferAttribute(f,t),a?bo.addScaledVector(Ec,u):bo.addScaledVector(Ec.sub(e),u))}e.add(bo)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Mo.copy(n.boundingSphere),Mo.applyMatrix4(s),Mr.copy(t.ray).recast(t.near),!(Mo.containsPoint(Mr.origin)===!1&&(Mr.intersectSphere(Mo,td)===null||Mr.origin.distanceToSquared(td)>(t.far-t.near)**2))&&(Qf.copy(s).invert(),Mr.copy(t.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&Mr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=a[p.materialIndex],y=Math.max(p.start,h.start),x=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let M=y,A=x;M<A;M+=3){const w=o.getX(M),S=o.getX(M+1),R=o.getX(M+2);i=Ao(this,m,t,n,c,u,f,w,S,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const y=o.getX(p),x=o.getX(p+1),M=o.getX(p+2);i=Ao(this,a,t,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,g=d.length;_<g;_++){const p=d[_],m=a[p.materialIndex],y=Math.max(p.start,h.start),x=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let M=y,A=x;M<A;M+=3){const w=M,S=M+1,R=M+2;i=Ao(this,m,t,n,c,u,f,w,S,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=_,m=g;p<m;p+=3){const y=p,x=p+1,M=p+2;i=Ao(this,a,t,n,c,u,f,y,x,M),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Sv(r,t,e,n,i,s,a,o){let l;if(t.side===Rn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,t.side===fr,o),l===null)return null;wo.copy(o),wo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(wo);return c<e.near||c>e.far?null:{distance:c,point:wo.clone(),object:r}}function Ao(r,t,e,n,i,s,a,o,l,c){r.getVertexPosition(o,So),r.getVertexPosition(l,Eo),r.getVertexPosition(c,To);const u=Sv(r,t,e,n,So,Eo,To,ed);if(u){const f=new U;Zn.getBarycoord(ed,So,Eo,To,f),i&&(u.uv=Zn.getInterpolatedAttribute(i,o,l,c,f,new ne)),s&&(u.uv1=Zn.getInterpolatedAttribute(s,o,l,c,f,new ne)),a&&(u.normal=Zn.getInterpolatedAttribute(a,o,l,c,f,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new U,materialIndex:0};Zn.getNormal(So,Eo,To,d.normal),u.face=d,u.barycoord=f}return u}class Ka extends yn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;_("z","y","x",-1,-1,n,e,t,a,s,0),_("z","y","x",1,-1,n,e,-t,a,s,1),_("x","z","y",1,1,t,n,e,i,a,2),_("x","z","y",1,-1,t,n,-e,i,a,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(f,2));function _(g,p,m,y,x,M,A,w,S,R,L){const v=M/S,T=A/R,I=M/2,z=A/2,k=w/2,K=S+1,V=R+1;let $=0,X=0;const rt=new U;for(let P=0;P<V;P++){const ot=P*T-z;for(let Ft=0;Ft<K;Ft++){const Gt=Ft*v-I;rt[g]=Gt*y,rt[p]=ot*x,rt[m]=k,c.push(rt.x,rt.y,rt.z),rt[g]=0,rt[p]=0,rt[m]=w>0?1:-1,u.push(rt.x,rt.y,rt.z),f.push(Ft/S),f.push(1-P/R),$+=1}}for(let P=0;P<R;P++)for(let ot=0;ot<S;ot++){const Ft=d+ot+K*P,Gt=d+ot+K*(P+1),Y=d+(ot+1)+K*(P+1),Q=d+(ot+1)+K*P;l.push(Ft,Gt,Q),l.push(Gt,Y,Q),X+=6}o.addGroup(h,X,L),h+=X,d+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ka(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function $s(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function mn(r){const t={};for(let e=0;e<r.length;e++){const n=$s(r[e]);for(const i in n)t[i]=n[i]}return t}function Ev(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vm(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Tv={clone:$s,merge:mn};var bv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends Zr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bv,this.fragmentShader=wv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=$s(t.uniforms),this.uniformsGroups=Ev(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:"m4",value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Hm extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new U,nd=new ne,id=new ne;class Bn extends Hm{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=qs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($i.x,$i.y).multiplyScalar(-t/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-t/$i.z)}getViewSize(t,e){return this.getViewBounds(t,nd,id),e.subVectors(id,nd)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,e-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ps=-90,ms=1;class Av extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bn(ps,ms,t,e);i.layers=this.layers,this.add(i);const s=new Bn(ps,ms,t,e);s.layers=this.layers,this.add(s);const a=new Bn(ps,ms,t,e);a.layers=this.layers,this.add(a);const o=new Bn(ps,ms,t,e);o.layers=this.layers,this.add(o);const l=new Bn(ps,ms,t,e);l.layers=this.layers,this.add(l);const c=new Bn(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===Oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ml)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),h=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,a),t.setRenderTarget(n,2,i),t.render(e,o),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(f,d,h),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Gm extends hn{constructor(t,e,n,i,s,a,o,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rv extends $r{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Gm(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ci}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ka(5,5,5),s=new dr({name:"CubemapFromEquirect",uniforms:$s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:ar});s.uniforms.tEquirect.value=e;const a=new ei(i,s),o=e.minFilter;return e.minFilter===Nr&&(e.minFilter=ci),new Av(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}}const Tc=new U,Cv=new U,Pv=new $t;class Rr{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Tc.subVectors(n,e).cross(Cv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Tc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pv.getNormalMatrix(t),i=this.coplanarPoint(Tc).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Sr=new Vi,Ro=new U;class Bh{constructor(t=new Rr,e=new Rr,n=new Rr,i=new Rr,s=new Rr,a=new Rr){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Oi){const n=this.planes,i=t.elements,s=i[0],a=i[1],o=i[2],l=i[3],c=i[4],u=i[5],f=i[6],d=i[7],h=i[8],_=i[9],g=i[10],p=i[11],m=i[12],y=i[13],x=i[14],M=i[15];if(n[0].setComponents(l-s,d-c,p-h,M-m).normalize(),n[1].setComponents(l+s,d+c,p+h,M+m).normalize(),n[2].setComponents(l+a,d+u,p+_,M+y).normalize(),n[3].setComponents(l-a,d-u,p-_,M-y).normalize(),n[4].setComponents(l-o,d-f,p-g,M-x).normalize(),e===Oi)n[5].setComponents(l+o,d+f,p+g,M+x).normalize();else if(e===Ml)n[5].setComponents(o,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Sr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Sr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Sr)}intersectsSprite(t){return Sr.center.set(0,0,0),Sr.radius=.7071067811865476,Sr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Sr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ro.x=i.normal.x>0?t.max.x:t.min.x,Ro.y=i.normal.y>0?t.max.y:t.min.y,Ro.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Wm(){let r=null,t=!1,e=null,n=null;function i(s,a){e(s,a),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Dv(r){const t=new WeakMap;function e(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,_)=>h.start-_.start);let d=0;for(let h=1;h<f.length;h++){const _=f[d],g=f[h];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,f[d]=g)}f.length=d+1;for(let h=0,_=f.length;h<_;h++){const g=f[h];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(r.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}class Ll extends yn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=t/o,d=e/l,h=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const y=m*d-a;for(let x=0;x<c;x++){const M=x*f-s;_.push(M,-y,0),g.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,M=y+c*(m+1),A=y+1+c*(m+1),w=y+1+c*m;h.push(x,M,w),h.push(M,A,w)}this.setIndex(h),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ll(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ex=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ix=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ax=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ox=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lx="gl_FragColor = linearToOutputTexel( gl_FragColor );",cx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ux=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,px=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ex=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Tx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ax=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Px=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ux=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ox=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ey=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ry=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,oy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ly=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,my=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_y=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ty=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,by=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Py=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,By=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zy=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ky=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xy=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$y=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ky=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Jy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Qy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,nM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,aM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qt={alphahash_fragment:Lv,alphahash_pars_fragment:Iv,alphamap_fragment:Uv,alphamap_pars_fragment:Nv,alphatest_fragment:Ov,alphatest_pars_fragment:Fv,aomap_fragment:Bv,aomap_pars_fragment:zv,batching_pars_vertex:kv,batching_vertex:Vv,begin_vertex:Hv,beginnormal_vertex:Gv,bsdfs:Wv,iridescence_fragment:Xv,bumpmap_pars_fragment:Yv,clipping_planes_fragment:qv,clipping_planes_pars_fragment:$v,clipping_planes_pars_vertex:Kv,clipping_planes_vertex:jv,color_fragment:Zv,color_pars_fragment:Jv,color_pars_vertex:Qv,color_vertex:tx,common:ex,cube_uv_reflection_fragment:nx,defaultnormal_vertex:ix,displacementmap_pars_vertex:rx,displacementmap_vertex:sx,emissivemap_fragment:ax,emissivemap_pars_fragment:ox,colorspace_fragment:lx,colorspace_pars_fragment:cx,envmap_fragment:ux,envmap_common_pars_fragment:hx,envmap_pars_fragment:fx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Tx,envmap_vertex:px,fog_vertex:mx,fog_pars_vertex:_x,fog_fragment:gx,fog_pars_fragment:vx,gradientmap_pars_fragment:xx,lightmap_pars_fragment:yx,lights_lambert_fragment:Mx,lights_lambert_pars_fragment:Sx,lights_pars_begin:Ex,lights_toon_fragment:bx,lights_toon_pars_fragment:wx,lights_phong_fragment:Ax,lights_phong_pars_fragment:Rx,lights_physical_fragment:Cx,lights_physical_pars_fragment:Px,lights_fragment_begin:Dx,lights_fragment_maps:Lx,lights_fragment_end:Ix,logdepthbuf_fragment:Ux,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ox,logdepthbuf_vertex:Fx,map_fragment:Bx,map_pars_fragment:zx,map_particle_fragment:kx,map_particle_pars_fragment:Vx,metalnessmap_fragment:Hx,metalnessmap_pars_fragment:Gx,morphinstance_vertex:Wx,morphcolor_vertex:Xx,morphnormal_vertex:Yx,morphtarget_pars_vertex:qx,morphtarget_vertex:$x,normal_fragment_begin:Kx,normal_fragment_maps:jx,normal_pars_fragment:Zx,normal_pars_vertex:Jx,normal_vertex:Qx,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ey,clearcoat_normal_fragment_maps:ny,clearcoat_pars_fragment:iy,iridescence_pars_fragment:ry,opaque_fragment:sy,packing:ay,premultiplied_alpha_fragment:oy,project_vertex:ly,dithering_fragment:cy,dithering_pars_fragment:uy,roughnessmap_fragment:hy,roughnessmap_pars_fragment:fy,shadowmap_pars_fragment:dy,shadowmap_pars_vertex:py,shadowmap_vertex:my,shadowmask_pars_fragment:_y,skinbase_vertex:gy,skinning_pars_vertex:vy,skinning_vertex:xy,skinnormal_vertex:yy,specularmap_fragment:My,specularmap_pars_fragment:Sy,tonemapping_fragment:Ey,tonemapping_pars_fragment:Ty,transmission_fragment:by,transmission_pars_fragment:wy,uv_pars_fragment:Ay,uv_pars_vertex:Ry,uv_vertex:Cy,worldpos_vertex:Py,background_vert:Dy,background_frag:Ly,backgroundCube_vert:Iy,backgroundCube_frag:Uy,cube_vert:Ny,cube_frag:Oy,depth_vert:Fy,depth_frag:By,distanceRGBA_vert:zy,distanceRGBA_frag:ky,equirect_vert:Vy,equirect_frag:Hy,linedashed_vert:Gy,linedashed_frag:Wy,meshbasic_vert:Xy,meshbasic_frag:Yy,meshlambert_vert:qy,meshlambert_frag:$y,meshmatcap_vert:Ky,meshmatcap_frag:jy,meshnormal_vert:Zy,meshnormal_frag:Jy,meshphong_vert:Qy,meshphong_frag:tM,meshphysical_vert:eM,meshphysical_frag:nM,meshtoon_vert:iM,meshtoon_frag:rM,points_vert:sM,points_frag:aM,shadow_vert:oM,shadow_frag:lM,sprite_vert:cM,sprite_frag:uM},mt={common:{diffuse:{value:new re(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new re(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new re(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new re(16777215)},opacity:{value:1},center:{value:new ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},_i={basic:{uniforms:mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new re(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:mn([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new re(0)},specular:{value:new re(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:mn([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new re(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:mn([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new re(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:mn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:mn([mt.points,mt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:mn([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:mn([mt.common,mt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:mn([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:mn([mt.sprite,mt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:mn([mt.common,mt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:mn([mt.lights,mt.fog,{color:{value:new re(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};_i.physical={uniforms:mn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new re(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new re(0)},specularColor:{value:new re(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};const Co={r:0,b:0,g:0},Er=new Si,hM=new Jt;function fM(r,t,e,n,i,s,a){const o=new re(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function _(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function g(y){let x=!1;const M=_(y);M===null?m(o,l):M&&M.isColor&&(m(M,1),x=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(y,x){const M=_(x);M&&(M.isCubeTexture||M.mapping===Pl)?(u===void 0&&(u=new ei(new Ka(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:$s(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Er.copy(x.backgroundRotation),Er.x*=-1,Er.y*=-1,Er.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Er.y*=-1,Er.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(hM.makeRotationFromEuler(Er)),u.material.toneMapped=pe.getTransfer(M.colorSpace)!==we,(f!==M||d!==M.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=M,d=M.version,h=r.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new ei(new Ll(2,2),new dr({name:"BackgroundMaterial",uniforms:$s(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:fr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=pe.getTransfer(M.colorSpace)!==we,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||d!==M.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=M,d=M.version,h=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(Co,Vm(r)),n.buffers.color.setClear(Co.r,Co.g,Co.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:g,addToRenderList:p}}function dM(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(v,T,I,z,k){let K=!1;const V=f(z,I,T);s!==V&&(s=V,c(s.object)),K=h(v,z,I,k),K&&_(v,z,I,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,M(v,T,I,z),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function u(v){return r.deleteVertexArray(v)}function f(v,T,I){const z=I.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let K=k[T.id];K===void 0&&(K={},k[T.id]=K);let V=K[z];return V===void 0&&(V=d(l()),K[z]=V),V}function d(v){const T=[],I=[],z=[];for(let k=0;k<e;k++)T[k]=0,I[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:I,attributeDivisors:z,object:v,attributes:{},index:null}}function h(v,T,I,z){const k=s.attributes,K=T.attributes;let V=0;const $=I.getAttributes();for(const X in $)if($[X].location>=0){const P=k[X];let ot=K[X];if(ot===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(ot=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(ot=v.instanceColor)),P===void 0||P.attribute!==ot||ot&&P.data!==ot.data)return!0;V++}return s.attributesNum!==V||s.index!==z}function _(v,T,I,z){const k={},K=T.attributes;let V=0;const $=I.getAttributes();for(const X in $)if($[X].location>=0){let P=K[X];P===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(P=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(P=v.instanceColor));const ot={};ot.attribute=P,P&&P.data&&(ot.data=P.data),k[X]=ot,V++}s.attributes=k,s.attributesNum=V,s.index=z}function g(){const v=s.newAttributes;for(let T=0,I=v.length;T<I;T++)v[T]=0}function p(v){m(v,0)}function m(v,T){const I=s.newAttributes,z=s.enabledAttributes,k=s.attributeDivisors;I[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),k[v]!==T&&(r.vertexAttribDivisor(v,T),k[v]=T)}function y(){const v=s.newAttributes,T=s.enabledAttributes;for(let I=0,z=T.length;I<z;I++)T[I]!==v[I]&&(r.disableVertexAttribArray(I),T[I]=0)}function x(v,T,I,z,k,K,V){V===!0?r.vertexAttribIPointer(v,T,I,k,K):r.vertexAttribPointer(v,T,I,z,k,K)}function M(v,T,I,z){g();const k=z.attributes,K=I.getAttributes(),V=T.defaultAttributeValues;for(const $ in K){const X=K[$];if(X.location>=0){let rt=k[$];if(rt===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor)),rt!==void 0){const P=rt.normalized,ot=rt.itemSize,Ft=t.get(rt);if(Ft===void 0)continue;const Gt=Ft.buffer,Y=Ft.type,Q=Ft.bytesPerElement,ft=Y===r.INT||Y===r.UNSIGNED_INT||rt.gpuType===Rh;if(rt.isInterleavedBufferAttribute){const at=rt.data,bt=at.stride,St=rt.offset;if(at.isInstancedInterleavedBuffer){for(let Ht=0;Ht<X.locationSize;Ht++)m(X.location+Ht,at.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Ht=0;Ht<X.locationSize;Ht++)p(X.location+Ht);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let Ht=0;Ht<X.locationSize;Ht++)x(X.location+Ht,ot/X.locationSize,Y,P,bt*Q,(St+ot/X.locationSize*Ht)*Q,ft)}else{if(rt.isInstancedBufferAttribute){for(let at=0;at<X.locationSize;at++)m(X.location+at,rt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let at=0;at<X.locationSize;at++)p(X.location+at);r.bindBuffer(r.ARRAY_BUFFER,Gt);for(let at=0;at<X.locationSize;at++)x(X.location+at,ot/X.locationSize,Y,P,ot*Q,ot/X.locationSize*at*Q,ft)}}else if(V!==void 0){const P=V[$];if(P!==void 0)switch(P.length){case 2:r.vertexAttrib2fv(X.location,P);break;case 3:r.vertexAttrib3fv(X.location,P);break;case 4:r.vertexAttrib4fv(X.location,P);break;default:r.vertexAttrib1fv(X.location,P)}}}}y()}function A(){R();for(const v in n){const T=n[v];for(const I in T){const z=T[I];for(const k in z)u(z[k].object),delete z[k];delete T[I]}delete n[v]}}function w(v){if(n[v.id]===void 0)return;const T=n[v.id];for(const I in T){const z=T[I];for(const k in z)u(z[k].object),delete z[k];delete T[I]}delete n[v.id]}function S(v){for(const T in n){const I=n[T];if(I[v.id]===void 0)continue;const z=I[v.id];for(const k in z)u(z[k].object),delete z[k];delete I[v.id]}}function R(){L(),a=!0,s!==i&&(s=i,c(s.object))}function L(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:R,resetDefaultState:L,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:g,enableAttribute:p,disableUnusedAttributes:y}}function pM(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),e.update(u,n,f))}function o(c,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let _=0;_<f;_++)h+=u[_];e.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=t.get("WEBGL_multi_draw");if(h===null)for(let _=0;_<c.length;_++)a(c[_],u[_],d[_]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let _=0;for(let g=0;g<f;g++)_+=u[g];for(let g=0;g<d.length;g++)e.update(_,n,d[g])}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function mM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(S){return!(S!==ti&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(S){const R=S===qa&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==ki&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==hi&&!R)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const S=t.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}const h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=_>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:h,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:M,vertexTextures:A,maxSamples:w}}function _M(r){const t=this;let e=null,n=0,i=!1,s=!1;const a=new Rr,o=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){e=u(f,d,0)},this.setState=function(f,d,h){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,m=r.get(f);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const y=s?0:n,x=y*4;let M=m.clippingState||null;l.value=M,M=u(_,d,x,h);for(let A=0;A!==x;++A)M[A]=e[A];m.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,d,h,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=h+g*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,M=h;x!==g;++x,M+=4)a.copy(f[x]).applyMatrix4(y,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function gM(r){let t=new WeakMap;function e(a,o){return o===yu?a.mapping=Gs:o===Mu&&(a.mapping=Ws),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yu||o===Mu)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Rv(l.height);return c.fromEquirectangularTexture(r,a),t.set(a,c),a.addEventListener("dispose",i),e(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Xm extends Hm{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Es=4,rd=[.125,.215,.35,.446,.526,.582],Dr=20,bc=new Xm,sd=new re;let wc=null,Ac=0,Rc=0,Cc=!1;const Cr=(1+Math.sqrt(5))/2,_s=1/Cr,ad=[new U(-Cr,_s,0),new U(Cr,_s,0),new U(-_s,0,Cr),new U(_s,0,Cr),new U(0,Cr,-_s),new U(0,Cr,_s),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class od{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ud(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wc,Ac,Rc),this._renderer.xr.enabled=Cc,t.scissorTest=!1,Po(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wc=this._renderer.getRenderTarget(),Ac=this._renderer.getActiveCubeFace(),Rc=this._renderer.getActiveMipmapLevel(),Cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ci,minFilter:ci,generateMipmaps:!1,type:qa,format:ti,colorSpace:mr,depthBuffer:!1},i=ld(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ld(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vM(s)),this._blurMaterial=xM(s,t,e)}return i}_compileMaterial(t){const e=new ei(this._lodPlanes[0],t);this._renderer.compile(e,bc)}_sceneToCubeUV(t,e,n,i){const o=new Bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(sd),u.toneMapping=or,u.autoClear=!1;const h=new Bm({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1}),_=new ei(new Ka,h);let g=!1;const p=t.background;p?p.isColor&&(h.color.copy(p),t.background=null,g=!0):(h.color.copy(sd),g=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;Po(i,y*x,m>2?x:0,x,x),u.setRenderTarget(i),g&&u.render(_,o),u.render(t,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Gs||t.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ud()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cd());const s=i?this._cubemapMaterial:this._equirectMaterial,a=new ei(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;Po(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,bc)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ad[(i-s-1)%ad.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,i,"latitudinal",s),this._halfBlur(a,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ei(this._lodPlanes[i],c),d=c.uniforms,h=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Dr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Dr;p>Dr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Dr}`);const m=[];let y=0;for(let S=0;S<Dr;++S){const R=S/g,L=Math.exp(-R*R/2);m.push(L),S===0?y+=L:S<p&&(y+=2*L)}for(let S=0;S<m.length;S++)m[S]=m[S]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const M=this._sizeLods[i],A=3*M*(i>x-Es?i-x+Es:0),w=4*(this._cubeSize-M);Po(e,A,w,3*M,2*M),l.setRenderTarget(e),l.render(f,bc)}}function vM(r){const t=[],e=[],n=[];let i=r;const s=r-Es+1+rd.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-Es?l=rd[a-r+Es-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,_=6,g=3,p=2,m=1,y=new Float32Array(g*_*h),x=new Float32Array(p*_*h),M=new Float32Array(m*_*h);for(let w=0;w<h;w++){const S=w%3*2/3-1,R=w>2?0:-1,L=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];y.set(L,g*_*w),x.set(d,p*_*w);const v=[w,w,w,w,w,w];M.set(v,m*_*w)}const A=new yn;A.setAttribute("position",new ii(y,g)),A.setAttribute("uv",new ii(x,p)),A.setAttribute("faceIndex",new ii(M,m)),t.push(A),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ld(r,t,e){const n=new $r(r,t,e);return n.texture.mapping=Pl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Po(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function xM(r,t,e){const n=new Float32Array(Dr),i=new U(0,1,0);return new dr({name:"SphericalGaussianBlur",defines:{n:Dr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function cd(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function ud(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ar,depthTest:!1,depthWrite:!1})}function zh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yM(r){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===yu||l===Mu,u=l===Gs||l===Ws;if(c||u){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new od(r)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(e===null&&(e=new od(r)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function MM(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&rl("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function SM(r,t,e,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const _ in d.attributes)t.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(t.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,e.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)t.update(d[_],r.ARRAY_BUFFER);const h=f.morphAttributes;for(const _ in h){const g=h[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,_=f.attributes.position;let g=0;if(h!==null){const y=h.array;g=h.version;for(let x=0,M=y.length;x<M;x+=3){const A=y[x+0],w=y[x+1],S=y[x+2];d.push(A,w,w,S,S,A)}}else if(_!==void 0){const y=_.array;g=_.version;for(let x=0,M=y.length/3-1;x<M;x+=3){const A=x+0,w=x+1,S=x+2;d.push(A,w,w,S,S,A)}}else return;const p=new(Um(d)?km:zm)(d,1);p.version=g;const m=s.get(f);m&&t.remove(m),s.set(f,p)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function EM(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),e.update(h,n,1)}function c(d,h,_){_!==0&&(r.drawElementsInstanced(n,h,s,d*a,_),e.update(h,n,_))}function u(d,h,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,_);let p=0;for(let m=0;m<_;m++)p+=h[m];e.update(p,n,1)}function f(d,h,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,h[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,g,0,_);let m=0;for(let y=0;y<_;y++)m+=h[y];for(let y=0;y<g.length;y++)e.update(m,n,g[y])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function TM(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function bM(r,t,e){const n=new WeakMap,i=new he;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let L=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",L)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;h===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let M=o.attributes.position.count*x,A=1;M>t.maxTextureSize&&(A=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);const w=new Float32Array(M*A*4*f),S=new Om(w,M,A,f);S.type=hi,S.needsUpdate=!0;const R=x*4;for(let v=0;v<f;v++){const T=p[v],I=m[v],z=y[v],k=M*A*4*v;for(let K=0;K<T.count;K++){const V=K*R;h===!0&&(i.fromBufferAttribute(T,K),w[k+V+0]=i.x,w[k+V+1]=i.y,w[k+V+2]=i.z,w[k+V+3]=0),_===!0&&(i.fromBufferAttribute(I,K),w[k+V+4]=i.x,w[k+V+5]=i.y,w[k+V+6]=i.z,w[k+V+7]=0),g===!0&&(i.fromBufferAttribute(z,K),w[k+V+8]=i.x,w[k+V+9]=i.y,w[k+V+10]=i.z,w[k+V+11]=z.itemSize===4?i.w:1)}}d={count:f,texture:S,size:new ne(M,A)},n.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,e);else{let h=0;for(let g=0;g<c.length;g++)h+=c[g];const _=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function wM(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=t.get(l,u);if(i.get(f)!==c&&(t.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}class Ym extends hn{constructor(t,e,n,i,s,a,o,l,c,u=Is){if(u!==Is&&u!==Ys)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Is&&(n=qr),n===void 0&&u===Ys&&(n=Xs),super(null,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:En,this.minFilter=l!==void 0?l:En,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const qm=new hn,hd=new Ym(1,1),$m=new Om,Km=new fv,jm=new Gm,fd=[],dd=[],pd=new Float32Array(16),md=new Float32Array(9),_d=new Float32Array(4);function Zs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=fd[i];if(s===void 0&&(s=new Float32Array(i),fd[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Il(r,t){let e=dd[t];e===void 0&&(e=new Int32Array(t),dd[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function AM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function RM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),qe(e,t)}}function CM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),qe(e,t)}}function PM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),qe(e,t)}}function DM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;_d.set(n),r.uniformMatrix2fv(this.addr,!1,_d),qe(e,n)}}function LM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;md.set(n),r.uniformMatrix3fv(this.addr,!1,md),qe(e,n)}}function IM(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Ye(e,n))return;pd.set(n),r.uniformMatrix4fv(this.addr,!1,pd),qe(e,n)}}function UM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function NM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),qe(e,t)}}function OM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),qe(e,t)}}function FM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),qe(e,t)}}function BM(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function zM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),qe(e,t)}}function kM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),qe(e,t)}}function VM(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),qe(e,t)}}function HM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hd.compareFunction=Im,s=hd):s=qm,e.setTexture2D(t||s,i)}function GM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Km,i)}function WM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||jm,i)}function XM(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||$m,i)}function YM(r){switch(r){case 5126:return AM;case 35664:return RM;case 35665:return CM;case 35666:return PM;case 35674:return DM;case 35675:return LM;case 35676:return IM;case 5124:case 35670:return UM;case 35667:case 35671:return NM;case 35668:case 35672:return OM;case 35669:case 35673:return FM;case 5125:return BM;case 36294:return zM;case 36295:return kM;case 36296:return VM;case 35678:case 36198:case 36298:case 36306:case 35682:return HM;case 35679:case 36299:case 36307:return GM;case 35680:case 36300:case 36308:case 36293:return WM;case 36289:case 36303:case 36311:case 36292:return XM}}function qM(r,t){r.uniform1fv(this.addr,t)}function $M(r,t){const e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function KM(r,t){const e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function jM(r,t){const e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function ZM(r,t){const e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function JM(r,t){const e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function QM(r,t){const e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function tS(r,t){r.uniform1iv(this.addr,t)}function eS(r,t){r.uniform2iv(this.addr,t)}function nS(r,t){r.uniform3iv(this.addr,t)}function iS(r,t){r.uniform4iv(this.addr,t)}function rS(r,t){r.uniform1uiv(this.addr,t)}function sS(r,t){r.uniform2uiv(this.addr,t)}function aS(r,t){r.uniform3uiv(this.addr,t)}function oS(r,t){r.uniform4uiv(this.addr,t)}function lS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTexture2D(t[a]||qm,s[a])}function cS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Km,s[a])}function uS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||jm,s[a])}function hS(r,t,e){const n=this.cache,i=t.length,s=Il(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||$m,s[a])}function fS(r){switch(r){case 5126:return qM;case 35664:return $M;case 35665:return KM;case 35666:return jM;case 35674:return ZM;case 35675:return JM;case 35676:return QM;case 5124:case 35670:return tS;case 35667:case 35671:return eS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return rS;case 36294:return sS;case 36295:return aS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return lS;case 35679:case 36299:case 36307:return cS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}class dS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=YM(e.type)}}class pS{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fS(e.type)}}class mS{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(t,e[o.id],n)}}}const Pc=/(\w+)(\])?(\[|\.)?/g;function gd(r,t){r.seq.push(t),r.map[t.id]=t}function _S(r,t,e){const n=r.name,i=n.length;for(Pc.lastIndex=0;;){const s=Pc.exec(n),a=Pc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){gd(e,c===void 0?new dS(o,r,t):new pS(o,r,t));break}else{let f=e.map[o];f===void 0&&(f=new mS(o),gd(e,f)),e=f}}}class sl{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),a=t.getUniformLocation(e,s.name);_S(s,a,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const a=t[i];a.id in e&&n.push(a)}return n}}function vd(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const gS=37297;let vS=0;function xS(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function yS(r){const t=pe.getPrimaries(pe.workingColorSpace),e=pe.getPrimaries(r);let n;switch(t===e?n="":t===yl&&e===xl?n="LinearDisplayP3ToLinearSRGB":t===xl&&e===yl&&(n="LinearSRGBToLinearDisplayP3"),r){case mr:case Dl:return[n,"LinearTransferOETF"];case mi:case Nh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function xd(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+xS(r.getShaderSource(t),a)}else return i}function MS(r,t){const e=yS(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function SS(r,t){let e;switch(t){case M0:e="Linear";break;case S0:e="Reinhard";break;case E0:e="Cineon";break;case T0:e="ACESFilmic";break;case w0:e="AgX";break;case A0:e="Neutral";break;case b0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Do=new U;function ES(){pe.getLuminanceCoefficients(Do);const r=Do.x.toFixed(4),t=Do.y.toFixed(4),e=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function bS(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function wS(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function ya(r){return r!==""}function yd(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Md(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ju(r){return r.replace(AS,CS)}const RS=new Map;function CS(r,t){let e=qt[t];if(e===void 0){const n=RS.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ju(e)}const PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(r){return r.replace(PS,DS)}function DS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ed(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function LS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===ym?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===t0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Pi&&(t="SHADOWMAP_TYPE_VSM"),t}function IS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gs:case Ws:t="ENVMAP_TYPE_CUBE";break;case Pl:t="ENVMAP_TYPE_CUBE_UV";break}return t}function US(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function NS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Mm:t="ENVMAP_BLENDING_MULTIPLY";break;case x0:t="ENVMAP_BLENDING_MIX";break;case y0:t="ENVMAP_BLENDING_ADD";break}return t}function OS(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function FS(r,t,e,n){const i=r.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=LS(e),c=IS(e),u=US(e),f=NS(e),d=OS(e),h=TS(e),_=bS(s),g=i.createProgram();let p,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ya).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ya).join(`
`),m.length>0&&(m+=`
`)):(p=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),m=[Ed(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==or?"#define TONE_MAPPING":"",e.toneMapping!==or?qt.tonemapping_pars_fragment:"",e.toneMapping!==or?SS("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,MS("linearToOutputTexel",e.outputColorSpace),ES(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ya).join(`
`)),a=Ju(a),a=yd(a,e),a=Md(a,e),o=Ju(o),o=yd(o,e),o=Md(o,e),a=Sd(a),o=Sd(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+p+a,M=y+m+o,A=vd(i,i.VERTEX_SHADER,x),w=vd(i,i.FRAGMENT_SHADER,M);i.attachShader(g,A),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function S(T){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(A).trim(),k=i.getShaderInfoLog(w).trim();let K=!0,V=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const $=xd(i,A,"vertex"),X=xd(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+I+`
`+$+`
`+X)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(z===""||k==="")&&(V=!1);V&&(T.diagnostics={runnable:K,programLog:I,vertexShader:{log:z,prefix:p},fragmentShader:{log:k,prefix:m}})}i.deleteShader(A),i.deleteShader(w),R=new sl(i,g),L=wS(i,g)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let L;this.getAttributes=function(){return L===void 0&&S(this),L};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,gS)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vS++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let BS=0;class zS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new kS(t),e.set(t,n)),n}}class kS{constructor(t){this.id=BS++,this.code=t,this.usedTimes=0}}function VS(r,t,e,n,i,s,a){const o=new Fh,l=new zS,c=new Set,u=[],f=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,h=i.vertexTextures;let _=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,T,I,z,k){const K=z.fog,V=k.geometry,$=v.isMeshStandardMaterial?z.environment:null,X=(v.isMeshStandardMaterial?e:t).get(v.envMap||$),rt=X&&X.mapping===Pl?X.image.height:null,P=g[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ot=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ft=ot!==void 0?ot.length:0;let Gt=0;V.morphAttributes.position!==void 0&&(Gt=1),V.morphAttributes.normal!==void 0&&(Gt=2),V.morphAttributes.color!==void 0&&(Gt=3);let Y,Q,ft,at;if(P){const At=_i[P];Y=At.vertexShader,Q=At.fragmentShader}else Y=v.vertexShader,Q=v.fragmentShader,l.update(v),ft=l.getVertexShaderID(v),at=l.getFragmentShaderID(v);const bt=r.getRenderTarget(),St=k.isInstancedMesh===!0,Ht=k.isBatchedMesh===!0,Vt=!!v.map,Ut=!!v.matcap,D=!!X,ae=!!v.aoMap,Nt=!!v.lightMap,Bt=!!v.bumpMap,B=!!v.normalMap,Kt=!!v.displacementMap,Pt=!!v.emissiveMap,C=!!v.metalnessMap,E=!!v.roughnessMap,W=v.anisotropy>0,Z=v.clearcoat>0,et=v.dispersion>0,j=v.iridescence>0,yt=v.sheen>0,it=v.transmission>0,dt=W&&!!v.anisotropyMap,kt=Z&&!!v.clearcoatMap,nt=Z&&!!v.clearcoatNormalMap,vt=Z&&!!v.clearcoatRoughnessMap,xt=j&&!!v.iridescenceMap,Lt=j&&!!v.iridescenceThicknessMap,gt=yt&&!!v.sheenColorMap,Wt=yt&&!!v.sheenRoughnessMap,Ot=!!v.specularMap,oe=!!v.specularColorMap,N=!!v.specularIntensityMap,tt=it&&!!v.transmissionMap,q=it&&!!v.thicknessMap,J=!!v.gradientMap,lt=!!v.alphaMap,ct=v.alphaTest>0,Xt=!!v.alphaHash,ye=!!v.extensions;let Re=or;v.toneMapped&&(bt===null||bt.isXRRenderTarget===!0)&&(Re=r.toneMapping);const ee={shaderID:P,shaderType:v.type,shaderName:v.name,vertexShader:Y,fragmentShader:Q,defines:v.defines,customVertexShaderID:ft,customFragmentShaderID:at,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Ht,batchingColor:Ht&&k._colorsTexture!==null,instancing:St,instancingColor:St&&k.instanceColor!==null,instancingMorph:St&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:bt===null?r.outputColorSpace:bt.isXRRenderTarget===!0?bt.texture.colorSpace:mr,alphaToCoverage:!!v.alphaToCoverage,map:Vt,matcap:Ut,envMap:D,envMapMode:D&&X.mapping,envMapCubeUVHeight:rt,aoMap:ae,lightMap:Nt,bumpMap:Bt,normalMap:B,displacementMap:h&&Kt,emissiveMap:Pt,normalMapObjectSpace:B&&v.normalMapType===I0,normalMapTangentSpace:B&&v.normalMapType===Lm,metalnessMap:C,roughnessMap:E,anisotropy:W,anisotropyMap:dt,clearcoat:Z,clearcoatMap:kt,clearcoatNormalMap:nt,clearcoatRoughnessMap:vt,dispersion:et,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Lt,sheen:yt,sheenColorMap:gt,sheenRoughnessMap:Wt,specularMap:Ot,specularColorMap:oe,specularIntensityMap:N,transmission:it,transmissionMap:tt,thicknessMap:q,gradientMap:J,opaque:v.transparent===!1&&v.blending===Ls&&v.alphaToCoverage===!1,alphaMap:lt,alphaTest:ct,alphaHash:Xt,combine:v.combine,mapUv:Vt&&p(v.map.channel),aoMapUv:ae&&p(v.aoMap.channel),lightMapUv:Nt&&p(v.lightMap.channel),bumpMapUv:Bt&&p(v.bumpMap.channel),normalMapUv:B&&p(v.normalMap.channel),displacementMapUv:Kt&&p(v.displacementMap.channel),emissiveMapUv:Pt&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:E&&p(v.roughnessMap.channel),anisotropyMapUv:dt&&p(v.anisotropyMap.channel),clearcoatMapUv:kt&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:nt&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&p(v.sheenRoughnessMap.channel),specularMapUv:Ot&&p(v.specularMap.channel),specularColorMapUv:oe&&p(v.specularColorMap.channel),specularIntensityMapUv:N&&p(v.specularIntensityMap.channel),transmissionMapUv:tt&&p(v.transmissionMap.channel),thicknessMapUv:q&&p(v.thicknessMap.channel),alphaMapUv:lt&&p(v.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(B||W),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!V.attributes.uv&&(Vt||lt),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:k.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:Gt,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&I.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:Vt&&v.map.isVideoTexture===!0&&pe.getTransfer(v.map.colorSpace)===we,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ui,flipSided:v.side===Rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ye&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&v.extensions.multiDraw===!0||Ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ee.vertexUv1s=c.has(1),ee.vertexUv2s=c.has(2),ee.vertexUv3s=c.has(3),c.clear(),ee}function y(v){const T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(const I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(x(T,v),M(T,v),T.push(r.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function x(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function M(v,T){o.disableAll(),T.supportsVertexTextures&&o.enable(0),T.instancing&&o.enable(1),T.instancingColor&&o.enable(2),T.instancingMorph&&o.enable(3),T.matcap&&o.enable(4),T.envMap&&o.enable(5),T.normalMapObjectSpace&&o.enable(6),T.normalMapTangentSpace&&o.enable(7),T.clearcoat&&o.enable(8),T.iridescence&&o.enable(9),T.alphaTest&&o.enable(10),T.vertexColors&&o.enable(11),T.vertexAlphas&&o.enable(12),T.vertexUv1s&&o.enable(13),T.vertexUv2s&&o.enable(14),T.vertexUv3s&&o.enable(15),T.vertexTangents&&o.enable(16),T.anisotropy&&o.enable(17),T.alphaHash&&o.enable(18),T.batching&&o.enable(19),T.dispersion&&o.enable(20),T.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reverseDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.alphaToCoverage&&o.enable(20),v.push(o.mask)}function A(v){const T=g[v.type];let I;if(T){const z=_i[T];I=Tv.clone(z.uniforms)}else I=v.uniforms;return I}function w(v,T){let I;for(let z=0,k=u.length;z<k;z++){const K=u[z];if(K.cacheKey===T){I=K,++I.usedTimes;break}}return I===void 0&&(I=new FS(r,T,v,s),u.push(I)),I}function S(v){if(--v.usedTimes===0){const T=u.indexOf(v);u[T]=u[u.length-1],u.pop(),v.destroy()}}function R(v){l.remove(v)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:A,acquireProgram:w,releaseProgram:S,releaseShaderCache:R,programs:u,dispose:L}}function HS(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function GS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Td(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function bd(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(f,d,h,_,g,p){let m=r[t];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},r[t]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=_,m.renderOrder=f.renderOrder,m.z=g,m.group=p),t++,m}function o(f,d,h,_,g,p){const m=a(f,d,h,_,g,p);h.transmission>0?n.push(m):h.transparent===!0?i.push(m):e.push(m)}function l(f,d,h,_,g,p){const m=a(f,d,h,_,g,p);h.transmission>0?n.unshift(m):h.transparent===!0?i.unshift(m):e.unshift(m)}function c(f,d){e.length>1&&e.sort(f||GS),n.length>1&&n.sort(d||Td),i.length>1&&i.sort(d||Td)}function u(){for(let f=t,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function WS(){let r=new WeakMap;function t(n,i){const s=r.get(n);let a;return s===void 0?(a=new bd,r.set(n,[a])):i>=s.length?(a=new bd,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function XS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new re};break;case"SpotLight":e={position:new U,direction:new U,color:new re,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new re,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new re,groundColor:new re};break;case"RectAreaLight":e={color:new re,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function YS(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let qS=0;function $S(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function KS(r){const t=new XS,e=YS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const i=new U,s=new Jt,a=new Jt;function o(c){let u=0,f=0,d=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let h=0,_=0,g=0,p=0,m=0,y=0,x=0,M=0,A=0,w=0,S=0;c.sort($S);for(let L=0,v=c.length;L<v;L++){const T=c[L],I=T.color,z=T.intensity,k=T.distance,K=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)u+=I.r*z,f+=I.g*z,d+=I.b*z;else if(T.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(T.sh.coefficients[V],z);S++}else if(T.isDirectionalLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){const $=T.shadow,X=e.get(T);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.directionalShadow[h]=X,n.directionalShadowMap[h]=K,n.directionalShadowMatrix[h]=T.shadow.matrix,y++}n.directional[h]=V,h++}else if(T.isSpotLight){const V=t.get(T);V.position.setFromMatrixPosition(T.matrixWorld),V.color.copy(I).multiplyScalar(z),V.distance=k,V.coneCos=Math.cos(T.angle),V.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),V.decay=T.decay,n.spot[g]=V;const $=T.shadow;if(T.map&&(n.spotLightMap[A]=T.map,A++,$.updateMatrices(T),T.castShadow&&w++),n.spotLightMatrix[g]=$.matrix,T.castShadow){const X=e.get(T);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,n.spotShadow[g]=X,n.spotShadowMap[g]=K,M++}g++}else if(T.isRectAreaLight){const V=t.get(T);V.color.copy(I).multiplyScalar(z),V.halfWidth.set(T.width*.5,0,0),V.halfHeight.set(0,T.height*.5,0),n.rectArea[p]=V,p++}else if(T.isPointLight){const V=t.get(T);if(V.color.copy(T.color).multiplyScalar(T.intensity),V.distance=T.distance,V.decay=T.decay,T.castShadow){const $=T.shadow,X=e.get(T);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,n.pointShadow[_]=X,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=T.shadow.matrix,x++}n.point[_]=V,_++}else if(T.isHemisphereLight){const V=t.get(T);V.skyColor.copy(T.color).multiplyScalar(z),V.groundColor.copy(T.groundColor).multiplyScalar(z),n.hemi[m]=V,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const R=n.hash;(R.directionalLength!==h||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==p||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==M||R.numSpotMaps!==A||R.numLightProbes!==S)&&(n.directional.length=h,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=M+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,R.directionalLength=h,R.pointLength=_,R.spotLength=g,R.rectAreaLength=p,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=M,R.numSpotMaps=A,R.numLightProbes=S,n.version=qS++)}function l(c,u){let f=0,d=0,h=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),f++}else if(x.isSpotLight){const M=n.spot[h];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(x.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(x.width*.5,0,0),M.halfHeight.set(0,x.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(x.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(x.matrixWorld),M.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(x.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:l,state:n}}function wd(r){const t=new KS(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function a(u){n.push(u)}function o(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jS(r){let t=new WeakMap;function e(i,s=0){const a=t.get(i);let o;return a===void 0?(o=new wd(r),t.set(i,[o])):s>=a.length?(o=new wd(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class ZS extends Zr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class JS extends Zr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const QS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function eE(r,t,e){let n=new Bh;const i=new ne,s=new ne,a=new he,o=new ZS({depthPacking:L0}),l=new JS,c={},u=e.maxTextureSize,f={[fr]:Rn,[Rn]:fr,[Ui]:Ui},d=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ne},radius:{value:4}},vertexShader:QS,fragmentShader:tE}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const _=new yn;_.setAttribute("position",new ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ei(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ym;let m=this.type;this.render=function(w,S,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const L=r.getRenderTarget(),v=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),I=r.state;I.setBlending(ar),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const z=m!==Pi&&this.type===Pi,k=m===Pi&&this.type!==Pi;for(let K=0,V=w.length;K<V;K++){const $=w[K],X=$.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const rt=X.getFrameExtents();if(i.multiply(rt),s.copy(X.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,X.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,X.mapSize.y=s.y)),X.map===null||z===!0||k===!0){const ot=this.type!==Pi?{minFilter:En,magFilter:En}:{};X.map!==null&&X.map.dispose(),X.map=new $r(i.x,i.y,ot),X.map.texture.name=$.name+".shadowMap",X.camera.updateProjectionMatrix()}r.setRenderTarget(X.map),r.clear();const P=X.getViewportCount();for(let ot=0;ot<P;ot++){const Ft=X.getViewport(ot);a.set(s.x*Ft.x,s.y*Ft.y,s.x*Ft.z,s.y*Ft.w),I.viewport(a),X.updateMatrices($,ot),n=X.getFrustum(),M(S,R,X.camera,$,this.type)}X.isPointLightShadow!==!0&&this.type===Pi&&y(X,R),X.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(L,v,T)};function y(w,S){const R=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,h.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new $r(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,R,d,g,null),h.uniforms.shadow_pass.value=w.mapPass.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,R,h,g,null)}function x(w,S,R,L){let v=null;const T=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(T!==void 0)v=T;else if(v=R.isPointLight===!0?l:o,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){const I=v.uuid,z=S.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let K=k[z];K===void 0&&(K=v.clone(),k[z]=K,S.addEventListener("dispose",A)),v=K}if(v.visible=S.visible,v.wireframe=S.wireframe,L===Pi?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:f[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const I=r.properties.get(v);I.light=R}return v}function M(w,S,R,L,v){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&v===Pi)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const z=t.update(w),k=w.material;if(Array.isArray(k)){const K=z.groups;for(let V=0,$=K.length;V<$;V++){const X=K[V],rt=k[X.materialIndex];if(rt&&rt.visible){const P=x(w,rt,L,v);w.onBeforeShadow(r,w,S,R,z,P,X),r.renderBufferDirect(R,null,z,P,w,X),w.onAfterShadow(r,w,S,R,z,P,X)}}}else if(k.visible){const K=x(w,k,L,v);w.onBeforeShadow(r,w,S,R,z,K,null),r.renderBufferDirect(R,null,z,K,w,null),w.onAfterShadow(r,w,S,R,z,K,null)}}const I=w.children;for(let z=0,k=I.length;z<k;z++)M(I[z],S,R,L,v)}function A(w){w.target.removeEventListener("dispose",A);for(const R in c){const L=c[R],v=w.target.uuid;v in L&&(L[v].dispose(),delete L[v])}}}const nE={[du]:pu,[mu]:vu,[_u]:xu,[Hs]:gu,[pu]:du,[vu]:mu,[xu]:_u,[gu]:Hs};function iE(r){function t(){let N=!1;const tt=new he;let q=null;const J=new he(0,0,0,0);return{setMask:function(lt){q!==lt&&!N&&(r.colorMask(lt,lt,lt,lt),q=lt)},setLocked:function(lt){N=lt},setClear:function(lt,ct,Xt,ye,Re){Re===!0&&(lt*=ye,ct*=ye,Xt*=ye),tt.set(lt,ct,Xt,ye),J.equals(tt)===!1&&(r.clearColor(lt,ct,Xt,ye),J.copy(tt))},reset:function(){N=!1,q=null,J.set(-1,0,0,0)}}}function e(){let N=!1,tt=!1,q=null,J=null,lt=null;return{setReversed:function(ct){tt=ct},setTest:function(ct){ct?ft(r.DEPTH_TEST):at(r.DEPTH_TEST)},setMask:function(ct){q!==ct&&!N&&(r.depthMask(ct),q=ct)},setFunc:function(ct){if(tt&&(ct=nE[ct]),J!==ct){switch(ct){case du:r.depthFunc(r.NEVER);break;case pu:r.depthFunc(r.ALWAYS);break;case mu:r.depthFunc(r.LESS);break;case Hs:r.depthFunc(r.LEQUAL);break;case _u:r.depthFunc(r.EQUAL);break;case gu:r.depthFunc(r.GEQUAL);break;case vu:r.depthFunc(r.GREATER);break;case xu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}J=ct}},setLocked:function(ct){N=ct},setClear:function(ct){lt!==ct&&(r.clearDepth(ct),lt=ct)},reset:function(){N=!1,q=null,J=null,lt=null}}}function n(){let N=!1,tt=null,q=null,J=null,lt=null,ct=null,Xt=null,ye=null,Re=null;return{setTest:function(ee){N||(ee?ft(r.STENCIL_TEST):at(r.STENCIL_TEST))},setMask:function(ee){tt!==ee&&!N&&(r.stencilMask(ee),tt=ee)},setFunc:function(ee,At,Et){(q!==ee||J!==At||lt!==Et)&&(r.stencilFunc(ee,At,Et),q=ee,J=At,lt=Et)},setOp:function(ee,At,Et){(ct!==ee||Xt!==At||ye!==Et)&&(r.stencilOp(ee,At,Et),ct=ee,Xt=At,ye=Et)},setLocked:function(ee){N=ee},setClear:function(ee){Re!==ee&&(r.clearStencil(ee),Re=ee)},reset:function(){N=!1,tt=null,q=null,J=null,lt=null,ct=null,Xt=null,ye=null,Re=null}}}const i=new t,s=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,d=[],h=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,A=null,w=new re(0,0,0),S=0,R=!1,L=null,v=null,T=null,I=null,z=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,V=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec($)[1]),K=V>=1):$.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),K=V>=2);let X=null,rt={};const P=r.getParameter(r.SCISSOR_BOX),ot=r.getParameter(r.VIEWPORT),Ft=new he().fromArray(P),Gt=new he().fromArray(ot);function Y(N,tt,q,J){const lt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(N,ct),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Xt=0;Xt<q;Xt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(tt,0,r.RGBA,1,1,J,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(tt+Xt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ct}const Q={};Q[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ft(r.DEPTH_TEST),s.setFunc(Hs),Nt(!1),Bt(Pf),ft(r.CULL_FACE),D(ar);function ft(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function at(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function bt(N,tt){return u[N]!==tt?(r.bindFramebuffer(N,tt),u[N]=tt,N===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=tt),N===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=tt),!0):!1}function St(N,tt){let q=d,J=!1;if(N){q=f.get(tt),q===void 0&&(q=[],f.set(tt,q));const lt=N.textures;if(q.length!==lt.length||q[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,Xt=lt.length;ct<Xt;ct++)q[ct]=r.COLOR_ATTACHMENT0+ct;q.length=lt.length,J=!0}}else q[0]!==r.BACK&&(q[0]=r.BACK,J=!0);J&&r.drawBuffers(q)}function Ht(N){return h!==N?(r.useProgram(N),h=N,!0):!1}const Vt={[Pr]:r.FUNC_ADD,[n0]:r.FUNC_SUBTRACT,[i0]:r.FUNC_REVERSE_SUBTRACT};Vt[r0]=r.MIN,Vt[s0]=r.MAX;const Ut={[a0]:r.ZERO,[o0]:r.ONE,[l0]:r.SRC_COLOR,[hu]:r.SRC_ALPHA,[p0]:r.SRC_ALPHA_SATURATE,[f0]:r.DST_COLOR,[u0]:r.DST_ALPHA,[c0]:r.ONE_MINUS_SRC_COLOR,[fu]:r.ONE_MINUS_SRC_ALPHA,[d0]:r.ONE_MINUS_DST_COLOR,[h0]:r.ONE_MINUS_DST_ALPHA,[m0]:r.CONSTANT_COLOR,[_0]:r.ONE_MINUS_CONSTANT_COLOR,[g0]:r.CONSTANT_ALPHA,[v0]:r.ONE_MINUS_CONSTANT_ALPHA};function D(N,tt,q,J,lt,ct,Xt,ye,Re,ee){if(N===ar){_===!0&&(at(r.BLEND),_=!1);return}if(_===!1&&(ft(r.BLEND),_=!0),N!==e0){if(N!==g||ee!==R){if((p!==Pr||x!==Pr)&&(r.blendEquation(r.FUNC_ADD),p=Pr,x=Pr),ee)switch(N){case Ls:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Df:r.blendFunc(r.ONE,r.ONE);break;case Lf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case If:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Ls:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Df:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Lf:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case If:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,y=null,M=null,A=null,w.set(0,0,0),S=0,g=N,R=ee}return}lt=lt||tt,ct=ct||q,Xt=Xt||J,(tt!==p||lt!==x)&&(r.blendEquationSeparate(Vt[tt],Vt[lt]),p=tt,x=lt),(q!==m||J!==y||ct!==M||Xt!==A)&&(r.blendFuncSeparate(Ut[q],Ut[J],Ut[ct],Ut[Xt]),m=q,y=J,M=ct,A=Xt),(ye.equals(w)===!1||Re!==S)&&(r.blendColor(ye.r,ye.g,ye.b,Re),w.copy(ye),S=Re),g=N,R=!1}function ae(N,tt){N.side===Ui?at(r.CULL_FACE):ft(r.CULL_FACE);let q=N.side===Rn;tt&&(q=!q),Nt(q),N.blending===Ls&&N.transparent===!1?D(ar):D(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),i.setMask(N.colorWrite);const J=N.stencilWrite;a.setTest(J),J&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Kt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ft(r.SAMPLE_ALPHA_TO_COVERAGE):at(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(N){L!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),L=N)}function Bt(N){N!==Jg?(ft(r.CULL_FACE),N!==v&&(N===Pf?r.cullFace(r.BACK):N===Qg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):at(r.CULL_FACE),v=N}function B(N){N!==T&&(K&&r.lineWidth(N),T=N)}function Kt(N,tt,q){N?(ft(r.POLYGON_OFFSET_FILL),(I!==tt||z!==q)&&(r.polygonOffset(tt,q),I=tt,z=q)):at(r.POLYGON_OFFSET_FILL)}function Pt(N){N?ft(r.SCISSOR_TEST):at(r.SCISSOR_TEST)}function C(N){N===void 0&&(N=r.TEXTURE0+k-1),X!==N&&(r.activeTexture(N),X=N)}function E(N,tt,q){q===void 0&&(X===null?q=r.TEXTURE0+k-1:q=X);let J=rt[q];J===void 0&&(J={type:void 0,texture:void 0},rt[q]=J),(J.type!==N||J.texture!==tt)&&(X!==q&&(r.activeTexture(q),X=q),r.bindTexture(N,tt||Q[N]),J.type=N,J.texture=tt)}function W(){const N=rt[X];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Z(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function dt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function nt(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Lt(N){Ft.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ft.copy(N))}function gt(N){Gt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Gt.copy(N))}function Wt(N,tt){let q=l.get(tt);q===void 0&&(q=new WeakMap,l.set(tt,q));let J=q.get(N);J===void 0&&(J=r.getUniformBlockIndex(tt,N.name),q.set(N,J))}function Ot(N,tt){const J=l.get(tt).get(N);o.get(tt)!==J&&(r.uniformBlockBinding(tt,J,N.__bindingPointIndex),o.set(tt,J))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},X=null,rt={},u={},f=new WeakMap,d=[],h=null,_=!1,g=null,p=null,m=null,y=null,x=null,M=null,A=null,w=new re(0,0,0),S=0,R=!1,L=null,v=null,T=null,I=null,z=null,Ft.set(0,0,r.canvas.width,r.canvas.height),Gt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),a.reset()}return{buffers:{color:i,depth:s,stencil:a},enable:ft,disable:at,bindFramebuffer:bt,drawBuffers:St,useProgram:Ht,setBlending:D,setMaterial:ae,setFlipSided:Nt,setCullFace:Bt,setLineWidth:B,setPolygonOffset:Kt,setScissorTest:Pt,activeTexture:C,bindTexture:E,unbindTexture:W,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:vt,texImage3D:xt,updateUBOMapping:Wt,uniformBlockBinding:Ot,texStorage2D:kt,texStorage3D:nt,texSubImage2D:j,texSubImage3D:yt,compressedTexSubImage2D:it,compressedTexSubImage3D:dt,scissor:Lt,viewport:gt,reset:oe}}function Ad(r,t,e,n){const i=rE(n);switch(e){case wm:return r*t;case Rm:return r*t;case Cm:return r*t*2;case Dh:return r*t/i.components*i.byteLength;case Lh:return r*t/i.components*i.byteLength;case Pm:return r*t*2/i.components*i.byteLength;case Ih:return r*t*2/i.components*i.byteLength;case Am:return r*t*3/i.components*i.byteLength;case ti:return r*t*4/i.components*i.byteLength;case Uh:return r*t*4/i.components*i.byteLength;case Qo:case tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case el:case nl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case bu:case Au:return Math.max(r,16)*Math.max(t,8)/4;case Tu:case wu:return Math.max(r,8)*Math.max(t,8)/2;case Ru:case Cu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Pu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Du:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Lu:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Iu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Uu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Nu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Ou:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Fu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Bu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case zu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ku:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Hu:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Gu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Wu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case il:case Xu:case Yu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Dm:case qu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case $u:case Ku:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rE(r){switch(r){case ki:case Em:return{byteLength:1,components:1};case Wa:case Tm:case qa:return{byteLength:2,components:1};case Ch:case Ph:return{byteLength:2,components:4};case qr:case Rh:case hi:return{byteLength:4,components:1};case bm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function sE(r,t,e,n,i,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ne,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,E){return h?new OffscreenCanvas(C,E):Xa("canvas")}function g(C,E,W){let Z=1;const et=Pt(C);if((et.width>W||et.height>W)&&(Z=W/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const j=Math.floor(Z*et.width),yt=Math.floor(Z*et.height);f===void 0&&(f=_(j,yt));const it=E?_(j,yt):f;return it.width=j,it.height=yt,it.getContext("2d").drawImage(C,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+j+"x"+yt+")."),it}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==En&&C.minFilter!==ci}function m(C){r.generateMipmap(C)}function y(C,E,W,Z,et=!1){if(C!==null){if(r[C]!==void 0)return r[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let j=E;if(E===r.RED&&(W===r.FLOAT&&(j=r.R32F),W===r.HALF_FLOAT&&(j=r.R16F),W===r.UNSIGNED_BYTE&&(j=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.R8UI),W===r.UNSIGNED_SHORT&&(j=r.R16UI),W===r.UNSIGNED_INT&&(j=r.R32UI),W===r.BYTE&&(j=r.R8I),W===r.SHORT&&(j=r.R16I),W===r.INT&&(j=r.R32I)),E===r.RG&&(W===r.FLOAT&&(j=r.RG32F),W===r.HALF_FLOAT&&(j=r.RG16F),W===r.UNSIGNED_BYTE&&(j=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RG8UI),W===r.UNSIGNED_SHORT&&(j=r.RG16UI),W===r.UNSIGNED_INT&&(j=r.RG32UI),W===r.BYTE&&(j=r.RG8I),W===r.SHORT&&(j=r.RG16I),W===r.INT&&(j=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RGB8UI),W===r.UNSIGNED_SHORT&&(j=r.RGB16UI),W===r.UNSIGNED_INT&&(j=r.RGB32UI),W===r.BYTE&&(j=r.RGB8I),W===r.SHORT&&(j=r.RGB16I),W===r.INT&&(j=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),W===r.UNSIGNED_INT&&(j=r.RGBA32UI),W===r.BYTE&&(j=r.RGBA8I),W===r.SHORT&&(j=r.RGBA16I),W===r.INT&&(j=r.RGBA32I)),E===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),E===r.RGBA){const yt=et?vl:pe.getTransfer(Z);W===r.FLOAT&&(j=r.RGBA32F),W===r.HALF_FLOAT&&(j=r.RGBA16F),W===r.UNSIGNED_BYTE&&(j=yt===we?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(C,E){let W;return C?E===null||E===qr||E===Xs?W=r.DEPTH24_STENCIL8:E===hi?W=r.DEPTH32F_STENCIL8:E===Wa&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qr||E===Xs?W=r.DEPTH_COMPONENT24:E===hi?W=r.DEPTH_COMPONENT32F:E===Wa&&(W=r.DEPTH_COMPONENT16),W}function M(C,E){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==En&&C.minFilter!==ci?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),S(E),E.isVideoTexture&&u.delete(E)}function w(C){const E=C.target;E.removeEventListener("dispose",w),L(E)}function S(C){const E=n.get(C);if(E.__webglInit===void 0)return;const W=C.source,Z=d.get(W);if(Z){const et=Z[E.__cacheKey];et.usedTimes--,et.usedTimes===0&&R(C),Object.keys(Z).length===0&&d.delete(W)}n.remove(C)}function R(C){const E=n.get(C);r.deleteTexture(E.__webglTexture);const W=C.source,Z=d.get(W);delete Z[E.__cacheKey],a.memory.textures--}function L(C){const E=n.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(E.__webglFramebuffer[Z]))for(let et=0;et<E.__webglFramebuffer[Z].length;et++)r.deleteFramebuffer(E.__webglFramebuffer[Z][et]);else r.deleteFramebuffer(E.__webglFramebuffer[Z]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[Z])}else{if(Array.isArray(E.__webglFramebuffer))for(let Z=0;Z<E.__webglFramebuffer.length;Z++)r.deleteFramebuffer(E.__webglFramebuffer[Z]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Z=0;Z<E.__webglColorRenderbuffer.length;Z++)E.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[Z]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=C.textures;for(let Z=0,et=W.length;Z<et;Z++){const j=n.get(W[Z]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(W[Z])}n.remove(C)}let v=0;function T(){v=0}function I(){const C=v;return C>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),v+=1,C}function z(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function k(C,E){const W=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){const Z=C.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Gt(W,C,E);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function K(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Gt(W,C,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function V(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Gt(W,C,E);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function $(C,E){const W=n.get(C);if(C.version>0&&W.__version!==C.version){Y(W,C,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const X={[Su]:r.REPEAT,[Ur]:r.CLAMP_TO_EDGE,[Eu]:r.MIRRORED_REPEAT},rt={[En]:r.NEAREST,[C0]:r.NEAREST_MIPMAP_NEAREST,[uo]:r.NEAREST_MIPMAP_LINEAR,[ci]:r.LINEAR,[nc]:r.LINEAR_MIPMAP_NEAREST,[Nr]:r.LINEAR_MIPMAP_LINEAR},P={[U0]:r.NEVER,[k0]:r.ALWAYS,[N0]:r.LESS,[Im]:r.LEQUAL,[O0]:r.EQUAL,[z0]:r.GEQUAL,[F0]:r.GREATER,[B0]:r.NOTEQUAL};function ot(C,E){if(E.type===hi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===ci||E.magFilter===nc||E.magFilter===uo||E.magFilter===Nr||E.minFilter===ci||E.minFilter===nc||E.minFilter===uo||E.minFilter===Nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,X[E.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,X[E.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,X[E.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,rt[E.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,P[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===En||E.minFilter!==uo&&E.minFilter!==Nr||E.type===hi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Ft(C,E){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Z=E.source;let et=d.get(Z);et===void 0&&(et={},d.set(Z,et));const j=z(E);if(j!==C.__cacheKey){et[j]===void 0&&(et[j]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),et[j].usedTimes++;const yt=et[C.__cacheKey];yt!==void 0&&(et[C.__cacheKey].usedTimes--,yt.usedTimes===0&&R(E)),C.__cacheKey=j,C.__webglTexture=et[j].texture}return W}function Gt(C,E,W){let Z=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Z=r.TEXTURE_3D);const et=Ft(C,E),j=E.source;e.bindTexture(Z,C.__webglTexture,r.TEXTURE0+W);const yt=n.get(j);if(j.version!==yt.__version||et===!0){e.activeTexture(r.TEXTURE0+W);const it=pe.getPrimaries(pe.workingColorSpace),dt=E.colorSpace===ji?null:pe.getPrimaries(E.colorSpace),kt=E.colorSpace===ji||it===dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let nt=g(E.image,!1,i.maxTextureSize);nt=Kt(E,nt);const vt=s.convert(E.format,E.colorSpace),xt=s.convert(E.type);let Lt=y(E.internalFormat,vt,xt,E.colorSpace,E.isVideoTexture);ot(Z,E);let gt;const Wt=E.mipmaps,Ot=E.isVideoTexture!==!0,oe=yt.__version===void 0||et===!0,N=j.dataReady,tt=M(E,nt);if(E.isDepthTexture)Lt=x(E.format===Ys,E.type),oe&&(Ot?e.texStorage2D(r.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(r.TEXTURE_2D,0,Lt,nt.width,nt.height,0,vt,xt,null));else if(E.isDataTexture)if(Wt.length>0){Ot&&oe&&e.texStorage2D(r.TEXTURE_2D,tt,Lt,Wt[0].width,Wt[0].height);for(let q=0,J=Wt.length;q<J;q++)gt=Wt[q],Ot?N&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,gt.width,gt.height,0,vt,xt,gt.data);E.generateMipmaps=!1}else Ot?(oe&&e.texStorage2D(r.TEXTURE_2D,tt,Lt,nt.width,nt.height),N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,nt.width,nt.height,vt,xt,nt.data)):e.texImage2D(r.TEXTURE_2D,0,Lt,nt.width,nt.height,0,vt,xt,nt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ot&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Lt,Wt[0].width,Wt[0].height,nt.depth);for(let q=0,J=Wt.length;q<J;q++)if(gt=Wt[q],E.format!==ti)if(vt!==null)if(Ot){if(N)if(E.layerUpdates.size>0){const lt=Ad(gt.width,gt.height,E.format,E.type);for(const ct of E.layerUpdates){const Xt=gt.data.subarray(ct*lt/gt.data.BYTES_PER_ELEMENT,(ct+1)*lt/gt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,ct,gt.width,gt.height,1,vt,Xt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,nt.depth,vt,gt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,q,Lt,gt.width,gt.height,nt.depth,0,gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,q,0,0,0,gt.width,gt.height,nt.depth,vt,xt,gt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,q,Lt,gt.width,gt.height,nt.depth,0,vt,xt,gt.data)}else{Ot&&oe&&e.texStorage2D(r.TEXTURE_2D,tt,Lt,Wt[0].width,Wt[0].height);for(let q=0,J=Wt.length;q<J;q++)gt=Wt[q],E.format!==ti?vt!==null?Ot?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,q,0,0,gt.width,gt.height,vt,gt.data):e.compressedTexImage2D(r.TEXTURE_2D,q,Lt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?N&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,gt.width,gt.height,vt,xt,gt.data):e.texImage2D(r.TEXTURE_2D,q,Lt,gt.width,gt.height,0,vt,xt,gt.data)}else if(E.isDataArrayTexture)if(Ot){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,tt,Lt,nt.width,nt.height,nt.depth),N)if(E.layerUpdates.size>0){const q=Ad(nt.width,nt.height,E.format,E.type);for(const J of E.layerUpdates){const lt=nt.data.subarray(J*q/nt.data.BYTES_PER_ELEMENT,(J+1)*q/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,vt,xt,lt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(E.isData3DTexture)Ot?(oe&&e.texStorage3D(r.TEXTURE_3D,tt,Lt,nt.width,nt.height,nt.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,vt,xt,nt.data)):e.texImage3D(r.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,vt,xt,nt.data);else if(E.isFramebufferTexture){if(oe)if(Ot)e.texStorage2D(r.TEXTURE_2D,tt,Lt,nt.width,nt.height);else{let q=nt.width,J=nt.height;for(let lt=0;lt<tt;lt++)e.texImage2D(r.TEXTURE_2D,lt,Lt,q,J,0,vt,xt,null),q>>=1,J>>=1}}else if(Wt.length>0){if(Ot&&oe){const q=Pt(Wt[0]);e.texStorage2D(r.TEXTURE_2D,tt,Lt,q.width,q.height)}for(let q=0,J=Wt.length;q<J;q++)gt=Wt[q],Ot?N&&e.texSubImage2D(r.TEXTURE_2D,q,0,0,vt,xt,gt):e.texImage2D(r.TEXTURE_2D,q,Lt,vt,xt,gt);E.generateMipmaps=!1}else if(Ot){if(oe){const q=Pt(nt);e.texStorage2D(r.TEXTURE_2D,tt,Lt,q.width,q.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt,xt,nt)}else e.texImage2D(r.TEXTURE_2D,0,Lt,vt,xt,nt);p(E)&&m(Z),yt.__version=j.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Y(C,E,W){if(E.image.length!==6)return;const Z=Ft(C,E),et=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+W);const j=n.get(et);if(et.version!==j.__version||Z===!0){e.activeTexture(r.TEXTURE0+W);const yt=pe.getPrimaries(pe.workingColorSpace),it=E.colorSpace===ji?null:pe.getPrimaries(E.colorSpace),dt=E.colorSpace===ji||yt===it?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,dt);const kt=E.isCompressedTexture||E.image[0].isCompressedTexture,nt=E.image[0]&&E.image[0].isDataTexture,vt=[];for(let J=0;J<6;J++)!kt&&!nt?vt[J]=g(E.image[J],!0,i.maxCubemapSize):vt[J]=nt?E.image[J].image:E.image[J],vt[J]=Kt(E,vt[J]);const xt=vt[0],Lt=s.convert(E.format,E.colorSpace),gt=s.convert(E.type),Wt=y(E.internalFormat,Lt,gt,E.colorSpace),Ot=E.isVideoTexture!==!0,oe=j.__version===void 0||Z===!0,N=et.dataReady;let tt=M(E,xt);ot(r.TEXTURE_CUBE_MAP,E);let q;if(kt){Ot&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Wt,xt.width,xt.height);for(let J=0;J<6;J++){q=vt[J].mipmaps;for(let lt=0;lt<q.length;lt++){const ct=q[lt];E.format!==ti?Lt!==null?Ot?N&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,Lt,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Wt,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,0,0,ct.width,ct.height,Lt,gt,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt,Wt,ct.width,ct.height,0,Lt,gt,ct.data)}}}else{if(q=E.mipmaps,Ot&&oe){q.length>0&&tt++;const J=Pt(vt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,tt,Wt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ot?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,vt[J].width,vt[J].height,Lt,gt,vt[J].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,vt[J].width,vt[J].height,0,Lt,gt,vt[J].data);for(let lt=0;lt<q.length;lt++){const Xt=q[lt].image[J].image;Ot?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,Xt.width,Xt.height,Lt,gt,Xt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Wt,Xt.width,Xt.height,0,Lt,gt,Xt.data)}}else{Ot?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,gt,vt[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Wt,Lt,gt,vt[J]);for(let lt=0;lt<q.length;lt++){const ct=q[lt];Ot?N&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,0,0,Lt,gt,ct.image[J]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+J,lt+1,Wt,Lt,gt,ct.image[J])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),j.__version=et.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Q(C,E,W,Z,et,j){const yt=s.convert(W.format,W.colorSpace),it=s.convert(W.type),dt=y(W.internalFormat,yt,it,W.colorSpace);if(!n.get(E).__hasExternalTextures){const nt=Math.max(1,E.width>>j),vt=Math.max(1,E.height>>j);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,j,dt,nt,vt,E.depth,0,yt,it,null):e.texImage2D(et,j,dt,nt,vt,0,yt,it,null)}e.bindFramebuffer(r.FRAMEBUFFER,C),Bt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,et,n.get(W).__webglTexture,0,Nt(E)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,et,n.get(W).__webglTexture,j),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(C,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,C),E.depthBuffer){const Z=E.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,j=x(E.stencilBuffer,et),yt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,it=Nt(E);Bt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,it,j,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,it,j,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,j,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,yt,r.RENDERBUFFER,C)}else{const Z=E.textures;for(let et=0;et<Z.length;et++){const j=Z[et],yt=s.convert(j.format,j.colorSpace),it=s.convert(j.type),dt=y(j.internalFormat,yt,it,j.colorSpace),kt=Nt(E);W&&Bt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,kt,dt,E.width,E.height):Bt(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,kt,dt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,dt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function at(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),k(E.depthTexture,0);const Z=n.get(E.depthTexture).__webglTexture,et=Nt(E);if(E.depthTexture.format===Is)Bt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Z,0);else if(E.depthTexture.format===Ys)Bt(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function bt(C){const E=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Z){const et=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),E.__depthDisposeCallback=et}E.__boundDepthTexture=Z}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");at(E.__webglFramebuffer,C)}else if(W){E.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[Z]),E.__webglDepthbuffer[Z]===void 0)E.__webglDepthbuffer[Z]=r.createRenderbuffer(),ft(E.__webglDepthbuffer[Z],C,!1);else{const et=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=E.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,j)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),ft(E.__webglDepthbuffer,C,!1);else{const Z=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,Z,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function St(C,E,W){const Z=n.get(C);E!==void 0&&Q(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&bt(C)}function Ht(C){const E=C.texture,W=n.get(C),Z=n.get(E);C.addEventListener("dispose",w);const et=C.textures,j=C.isWebGLCubeRenderTarget===!0,yt=et.length>1;if(yt||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=E.version,a.memory.textures++),j){W.__webglFramebuffer=[];for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[it]=[];for(let dt=0;dt<E.mipmaps.length;dt++)W.__webglFramebuffer[it][dt]=r.createFramebuffer()}else W.__webglFramebuffer[it]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let it=0;it<E.mipmaps.length;it++)W.__webglFramebuffer[it]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(yt)for(let it=0,dt=et.length;it<dt;it++){const kt=n.get(et[it]);kt.__webglTexture===void 0&&(kt.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&Bt(C)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){const dt=et[it];W.__webglColorRenderbuffer[it]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[it]);const kt=s.convert(dt.format,dt.colorSpace),nt=s.convert(dt.type),vt=y(dt.internalFormat,kt,nt,dt.colorSpace,C.isXRRenderTarget===!0),xt=Nt(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,xt,vt,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+it,r.RENDERBUFFER,W.__webglColorRenderbuffer[it])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ft(W.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),ot(r.TEXTURE_CUBE_MAP,E);for(let it=0;it<6;it++)if(E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Q(W.__webglFramebuffer[it][dt],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,dt);else Q(W.__webglFramebuffer[it],C,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);p(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let it=0,dt=et.length;it<dt;it++){const kt=et[it],nt=n.get(kt);e.bindTexture(r.TEXTURE_2D,nt.__webglTexture),ot(r.TEXTURE_2D,kt),Q(W.__webglFramebuffer,C,kt,r.COLOR_ATTACHMENT0+it,r.TEXTURE_2D,0),p(kt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let it=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(it=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(it,Z.__webglTexture),ot(it,E),E.mipmaps&&E.mipmaps.length>0)for(let dt=0;dt<E.mipmaps.length;dt++)Q(W.__webglFramebuffer[dt],C,E,r.COLOR_ATTACHMENT0,it,dt);else Q(W.__webglFramebuffer,C,E,r.COLOR_ATTACHMENT0,it,0);p(E)&&m(it),e.unbindTexture()}C.depthBuffer&&bt(C)}function Vt(C){const E=C.textures;for(let W=0,Z=E.length;W<Z;W++){const et=E[W];if(p(et)){const j=C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,yt=n.get(et).__webglTexture;e.bindTexture(j,yt),m(j),e.unbindTexture()}}}const Ut=[],D=[];function ae(C){if(C.samples>0){if(Bt(C)===!1){const E=C.textures,W=C.width,Z=C.height;let et=r.COLOR_BUFFER_BIT;const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,yt=n.get(C),it=E.length>1;if(it)for(let dt=0;dt<E.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let dt=0;dt<E.length;dt++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),it){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const kt=n.get(E[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,kt,0)}r.blitFramebuffer(0,0,W,Z,0,0,W,Z,et,r.NEAREST),l===!0&&(Ut.length=0,D.length=0,Ut.push(r.COLOR_ATTACHMENT0+dt),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ut.push(j),D.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ut))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),it)for(let dt=0;dt<E.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,yt.__webglColorRenderbuffer[dt]);const kt=n.get(E[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,yt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,kt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Nt(C){return Math.min(i.maxSamples,C.samples)}function Bt(C){const E=n.get(C);return C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(C){const E=a.render.frame;u.get(C)!==E&&(u.set(C,E),C.update())}function Kt(C,E){const W=C.colorSpace,Z=C.format,et=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==mr&&W!==ji&&(pe.getTransfer(W)===we?(Z!==ti||et!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Pt(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=T,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=V,this.setTextureCube=$,this.rebindTextures=St,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Bt}function aE(r,t){function e(n,i=ji){let s;const a=pe.getTransfer(i);if(n===ki)return r.UNSIGNED_BYTE;if(n===Ch)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ph)return r.UNSIGNED_SHORT_5_5_5_1;if(n===bm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Em)return r.BYTE;if(n===Tm)return r.SHORT;if(n===Wa)return r.UNSIGNED_SHORT;if(n===Rh)return r.INT;if(n===qr)return r.UNSIGNED_INT;if(n===hi)return r.FLOAT;if(n===qa)return r.HALF_FLOAT;if(n===wm)return r.ALPHA;if(n===Am)return r.RGB;if(n===ti)return r.RGBA;if(n===Rm)return r.LUMINANCE;if(n===Cm)return r.LUMINANCE_ALPHA;if(n===Is)return r.DEPTH_COMPONENT;if(n===Ys)return r.DEPTH_STENCIL;if(n===Dh)return r.RED;if(n===Lh)return r.RED_INTEGER;if(n===Pm)return r.RG;if(n===Ih)return r.RG_INTEGER;if(n===Uh)return r.RGBA_INTEGER;if(n===Qo||n===tl||n===el||n===nl)if(a===we)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===nl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===nl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Tu||n===bu||n===wu||n===Au)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Tu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===bu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===wu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Au)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ru||n===Cu||n===Pu)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ru||n===Cu)return a===we?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Pu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Du||n===Lu||n===Iu||n===Uu||n===Nu||n===Ou||n===Fu||n===Bu||n===zu||n===ku||n===Vu||n===Hu||n===Gu||n===Wu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Du)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Iu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ou)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Bu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ku)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wu)return a===we?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===il||n===Xu||n===Yu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===il)return a===we?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Dm||n===qu||n===$u||n===Ku)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===il)return s.COMPRESSED_RED_RGTC1_EXT;if(n===qu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$u)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class oE extends Bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Lo extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lE={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,_=.005;c.inputState.pinching&&d>h+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=h-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lE)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Lo;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const cE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new hn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new dr({vertexShader:cE,fragmentShader:uE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ei(new Ll(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fE extends Ks{constructor(t,e){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,_=null;const g=new hE,p=e.getContextAttributes();let m=null,y=null;const x=[],M=[],A=new ne;let w=null;const S=new Bn;S.layers.enable(1),S.viewport=new he;const R=new Bn;R.layers.enable(2),R.viewport=new he;const L=[S,R],v=new oE;v.layers.enable(1),v.layers.enable(2);let T=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Dc,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Dc,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new Dc,x[Y]=Q),Q.getHandSpace()};function z(Y){const Q=M.indexOf(Y.inputSource);if(Q===-1)return;const ft=x[Q];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||a),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function k(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",K);for(let Y=0;Y<x.length;Y++){const Q=M[Y];Q!==null&&(M[Y]=null,x[Y].disconnect(Q))}T=null,I=null,g.reset(),t.setRenderTarget(m),h=null,d=null,f=null,i=null,y=null,Gt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",k),i.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:h}),t.setPixelRatio(1),t.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new $r(h.framebufferWidth,h.framebufferHeight,{format:ti,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,ft=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=p.stencil?Ys:Is,ft=p.stencil?Xs:qr);const bt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:s};f=new XRWebGLBinding(i,e),d=f.createProjectionLayer(bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new $r(d.textureWidth,d.textureHeight,{format:ti,type:ki,depthTexture:new Ym(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Gt.setContext(i),Gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(Y){for(let Q=0;Q<Y.removed.length;Q++){const ft=Y.removed[Q],at=M.indexOf(ft);at>=0&&(M[at]=null,x[at].disconnect(ft))}for(let Q=0;Q<Y.added.length;Q++){const ft=Y.added[Q];let at=M.indexOf(ft);if(at===-1){for(let St=0;St<x.length;St++)if(St>=M.length){M.push(ft),at=St;break}else if(M[St]===null){M[St]=ft,at=St;break}if(at===-1)break}const bt=x[at];bt&&bt.connect(ft)}}const V=new U,$=new U;function X(Y,Q,ft){V.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);const at=V.distanceTo($),bt=Q.projectionMatrix.elements,St=ft.projectionMatrix.elements,Ht=bt[14]/(bt[10]-1),Vt=bt[14]/(bt[10]+1),Ut=(bt[9]+1)/bt[5],D=(bt[9]-1)/bt[5],ae=(bt[8]-1)/bt[0],Nt=(St[8]+1)/St[0],Bt=Ht*ae,B=Ht*Nt,Kt=at/(-ae+Nt),Pt=Kt*-ae;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Pt),Y.translateZ(Kt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),bt[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const C=Ht+Kt,E=Vt+Kt,W=Bt-Pt,Z=B+(at-Pt),et=Ut*Vt/E*C,j=D*Vt/E*C;Y.projectionMatrix.makePerspective(W,Z,et,j,C,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function rt(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ft=Y.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(ft=g.depthFar)),v.near=R.near=S.near=Q,v.far=R.far=S.far=ft,(T!==v.near||I!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),T=v.near,I=v.far);const at=Y.parent,bt=v.cameras;rt(v,at);for(let St=0;St<bt.length;St++)rt(bt[St],at);bt.length===2?X(v,S,R):v.projectionMatrix.copy(S.projectionMatrix),P(Y,v,at)};function P(Y,Q,ft){ft===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=qs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ot=null;function Ft(Y,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const ft=u.views;h!==null&&(t.setRenderTargetFramebuffer(y,h.framebuffer),t.setRenderTarget(y));let at=!1;ft.length!==v.cameras.length&&(v.cameras.length=0,at=!0);for(let St=0;St<ft.length;St++){const Ht=ft[St];let Vt=null;if(h!==null)Vt=h.getViewport(Ht);else{const D=f.getViewSubImage(d,Ht);Vt=D.viewport,St===0&&(t.setRenderTargetTextures(y,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(y))}let Ut=L[St];Ut===void 0&&(Ut=new Bn,Ut.layers.enable(St),Ut.viewport=new he,L[St]=Ut),Ut.matrix.fromArray(Ht.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ht.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),St===0&&(v.matrix.copy(Ut.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),at===!0&&v.cameras.push(Ut)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const St=f.getDepthInformation(ft[0]);St&&St.isValid&&St.texture&&g.init(t,St,i.renderState)}}for(let ft=0;ft<x.length;ft++){const at=M[ft],bt=x[ft];at!==null&&bt!==void 0&&bt.update(at,Q,c||a)}ot&&ot(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Gt=new Wm;Gt.setAnimationLoop(Ft),this.setAnimationLoop=function(Y){ot=Y},this.dispose=function(){}}}const Tr=new Si,dE=new Jt;function pE(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Vm(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,y,x,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,M)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,y,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Rn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Rn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,M=y.envMapRotation;x&&(p.envMap.value=x,Tr.copy(M),Tr.x*=-1,Tr.y*=-1,Tr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Tr.y*=-1,Tr.z*=-1),p.envMapRotation.value.setFromMatrix4(dE.makeRotationFromEuler(Tr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,y,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*y,p.scale.value=x*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,y){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Rn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const y=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mE(r,t,e,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const M=x.program;n.uniformBlockBinding(y,M)}function c(y,x){let M=i[y.id];M===void 0&&(_(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",p));const A=x.program;n.updateUBOMapping(y,A);const w=t.render.frame;s[y.id]!==w&&(d(y),s[y.id]=w)}function u(y){const x=f();y.__bindingPointIndex=x;const M=r.createBuffer(),A=y.__size,w=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,M),M}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=i[y.id],M=y.uniforms,A=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let w=0,S=M.length;w<S;w++){const R=Array.isArray(M[w])?M[w]:[M[w]];for(let L=0,v=R.length;L<v;L++){const T=R[L];if(h(T,w,L,A)===!0){const I=T.__offset,z=Array.isArray(T.value)?T.value:[T.value];let k=0;for(let K=0;K<z.length;K++){const V=z[K],$=g(V);typeof V=="number"||typeof V=="boolean"?(T.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,I+k,T.__data)):V.isMatrix3?(T.__data[0]=V.elements[0],T.__data[1]=V.elements[1],T.__data[2]=V.elements[2],T.__data[3]=0,T.__data[4]=V.elements[3],T.__data[5]=V.elements[4],T.__data[6]=V.elements[5],T.__data[7]=0,T.__data[8]=V.elements[6],T.__data[9]=V.elements[7],T.__data[10]=V.elements[8],T.__data[11]=0):(V.toArray(T.__data,k),k+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(y,x,M,A){const w=y.value,S=x+"_"+M;if(A[S]===void 0)return typeof w=="number"||typeof w=="boolean"?A[S]=w:A[S]=w.clone(),!0;{const R=A[S];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return A[S]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function _(y){const x=y.uniforms;let M=0;const A=16;for(let S=0,R=x.length;S<R;S++){const L=Array.isArray(x[S])?x[S]:[x[S]];for(let v=0,T=L.length;v<T;v++){const I=L[v],z=Array.isArray(I.value)?I.value:[I.value];for(let k=0,K=z.length;k<K;k++){const V=z[k],$=g(V),X=M%A,rt=X%$.boundary,P=X+rt;M+=rt,P!==0&&A-P<$.storage&&(M+=A-P),I.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=$.storage}}}const w=M%A;return w>0&&(M+=A-w),y.__size=M,y.__cache={},this}function g(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){const x=y.target;x.removeEventListener("dispose",p);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(const y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:l,update:c,dispose:m}}class hT{constructor(t={}){const{canvas:e=iv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const h=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=mi,this.toneMapping=or,this.toneMappingExposure=1;const x=this;let M=!1,A=0,w=0,S=null,R=-1,L=null;const v=new he,T=new he;let I=null;const z=new re(0);let k=0,K=e.width,V=e.height,$=1,X=null,rt=null;const P=new he(0,0,K,V),ot=new he(0,0,K,V);let Ft=!1;const Gt=new Bh;let Y=!1,Q=!1;const ft=new Jt,at=new Jt,bt=new U,St=new he,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function Ut(){return S===null?$:1}let D=n;function ae(b,F){return e.getContext(b,F)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ah}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){const F="webgl2";if(D=ae(F,b),D===null)throw ae(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Nt,Bt,B,Kt,Pt,C,E,W,Z,et,j,yt,it,dt,kt,nt,vt,xt,Lt,gt,Wt,Ot,oe,N;function tt(){Nt=new MM(D),Nt.init(),Ot=new aE(D,Nt),Bt=new mM(D,Nt,t,Ot),B=new iE(D),Bt.reverseDepthBuffer&&B.buffers.depth.setReversed(!0),Kt=new TM(D),Pt=new HS,C=new sE(D,Nt,B,Pt,Bt,Ot,Kt),E=new gM(x),W=new yM(x),Z=new Dv(D),oe=new dM(D,Z),et=new SM(D,Z,Kt,oe),j=new wM(D,et,Z,Kt),Lt=new bM(D,Bt,C),nt=new _M(Pt),yt=new VS(x,E,W,Nt,Bt,oe,nt),it=new pE(x,Pt),dt=new WS,kt=new jS(Nt),xt=new fM(x,E,W,B,j,d,l),vt=new eE(x,j,Bt),N=new mE(D,Kt,Bt,B),gt=new pM(D,Nt,Kt),Wt=new EM(D,Nt,Kt),Kt.programs=yt.programs,x.capabilities=Bt,x.extensions=Nt,x.properties=Pt,x.renderLists=dt,x.shadowMap=vt,x.state=B,x.info=Kt}tt();const q=new fE(x,D);this.xr=q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Nt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Nt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(K,V,!1))},this.getSize=function(b){return b.set(K,V)},this.setSize=function(b,F,H=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,V=F,e.width=Math.floor(b*$),e.height=Math.floor(F*$),H===!0&&(e.style.width=b+"px",e.style.height=F+"px"),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(K*$,V*$).floor()},this.setDrawingBufferSize=function(b,F,H){K=b,V=F,$=H,e.width=Math.floor(b*H),e.height=Math.floor(F*H),this.setViewport(0,0,b,F)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(P)},this.setViewport=function(b,F,H,G){b.isVector4?P.set(b.x,b.y,b.z,b.w):P.set(b,F,H,G),B.viewport(v.copy(P).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,F,H,G){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,F,H,G),B.scissor(T.copy(ot).multiplyScalar($).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(b){B.setScissorTest(Ft=b)},this.setOpaqueSort=function(b){X=b},this.setTransparentSort=function(b){rt=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(b=!0,F=!0,H=!0){let G=0;if(b){let O=!1;if(S!==null){const st=S.texture.format;O=st===Uh||st===Ih||st===Lh}if(O){const st=S.texture.type,_t=st===ki||st===qr||st===Wa||st===Xs||st===Ch||st===Ph,ht=xt.getClearColor(),ut=xt.getClearAlpha(),wt=ht.r,It=ht.g,Tt=ht.b;_t?(h[0]=wt,h[1]=It,h[2]=Tt,h[3]=ut,D.clearBufferuiv(D.COLOR,0,h)):(_[0]=wt,_[1]=It,_[2]=Tt,_[3]=ut,D.clearBufferiv(D.COLOR,0,_))}else G|=D.COLOR_BUFFER_BIT}F&&(G|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),dt.dispose(),kt.dispose(),Pt.dispose(),E.dispose(),W.dispose(),j.dispose(),oe.dispose(),N.dispose(),yt.dispose(),q.dispose(),q.removeEventListener("sessionstart",ue),q.removeEventListener("sessionend",pt),Dt.stop()};function J(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=Kt.autoReset,F=vt.enabled,H=vt.autoUpdate,G=vt.needsUpdate,O=vt.type;tt(),Kt.autoReset=b,vt.enabled=F,vt.autoUpdate=H,vt.needsUpdate=G,vt.type=O}function ct(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const F=b.target;F.removeEventListener("dispose",Xt),ye(F)}function ye(b){Re(b),Pt.remove(b)}function Re(b){const F=Pt.get(b).programs;F!==void 0&&(F.forEach(function(H){yt.releaseProgram(H)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,H,G,O,st){F===null&&(F=Ht);const _t=O.isMesh&&O.matrixWorld.determinant()<0,ht=me(b,F,H,G,O);B.setMaterial(G,_t);let ut=H.index,wt=1;if(G.wireframe===!0){if(ut=et.getWireframeAttribute(H),ut===void 0)return;wt=2}const It=H.drawRange,Tt=H.attributes.position;let le=It.start*wt,ie=(It.start+It.count)*wt;st!==null&&(le=Math.max(le,st.start*wt),ie=Math.min(ie,(st.start+st.count)*wt)),ut!==null?(le=Math.max(le,0),ie=Math.min(ie,ut.count)):Tt!=null&&(le=Math.max(le,0),ie=Math.min(ie,Tt.count));const ve=ie-le;if(ve<0||ve===1/0)return;oe.setup(O,G,ht,H,ut);let $e,jt=gt;if(ut!==null&&($e=Z.get(ut),jt=Wt,jt.setIndex($e)),O.isMesh)G.wireframe===!0?(B.setLineWidth(G.wireframeLinewidth*Ut()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(O.isLine){let Ct=G.linewidth;Ct===void 0&&(Ct=1),B.setLineWidth(Ct*Ut()),O.isLineSegments?jt.setMode(D.LINES):O.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else O.isPoints?jt.setMode(D.POINTS):O.isSprite&&jt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)jt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))jt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ct=O._multiDrawStarts,tn=O._multiDrawCounts,fe=O._multiDrawCount,ri=ut?Z.get(ut).bytesPerElement:1,Jr=Pt.get(G).currentProgram.getUniforms();for(let Dn=0;Dn<fe;Dn++)Jr.setValue(D,"_gl_DrawID",Dn),jt.render(Ct[Dn]/ri,tn[Dn])}else if(O.isInstancedMesh)jt.renderInstances(le,ve,O.count);else if(H.isInstancedBufferGeometry){const Ct=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,tn=Math.min(H.instanceCount,Ct);jt.renderInstances(le,ve,tn)}else jt.render(le,ve)};function ee(b,F,H){b.transparent===!0&&b.side===Ui&&b.forceSinglePass===!1?(b.side=Rn,b.needsUpdate=!0,Oe(b,F,H),b.side=fr,b.needsUpdate=!0,Oe(b,F,H),b.side=Ui):Oe(b,F,H)}this.compile=function(b,F,H=null){H===null&&(H=b),p=kt.get(H),p.init(F),y.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),b!==H&&b.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const G=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const st=O.material;if(st)if(Array.isArray(st))for(let _t=0;_t<st.length;_t++){const ht=st[_t];ee(ht,H,O),G.add(ht)}else ee(st,H,O),G.add(st)}),y.pop(),p=null,G},this.compileAsync=function(b,F,H=null){const G=this.compile(b,F,H);return new Promise(O=>{function st(){if(G.forEach(function(_t){Pt.get(_t).currentProgram.isReady()&&G.delete(_t)}),G.size===0){O(b);return}setTimeout(st,10)}Nt.get("KHR_parallel_shader_compile")!==null?st():setTimeout(st,10)})};let At=null;function Et(b){At&&At(b)}function ue(){Dt.stop()}function pt(){Dt.start()}const Dt=new Wm;Dt.setAnimationLoop(Et),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(b){At=b,q.setAnimationLoop(b),b===null?Dt.stop():Dt.start()},q.addEventListener("sessionstart",ue),q.addEventListener("sessionend",pt),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(F),F=q.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,F,S),p=kt.get(b,y.length),p.init(F),y.push(p),at.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Gt.setFromProjectionMatrix(at),Q=this.localClippingEnabled,Y=nt.init(this.clippingPlanes,Q),g=dt.get(b,m.length),g.init(),m.push(g),q.enabled===!0&&q.isPresenting===!0){const st=x.xr.getDepthSensingMesh();st!==null&&Rt(st,F,-1/0,x.sortObjects)}Rt(b,F,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,rt),Vt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Vt&&xt.addToRenderList(g,b),this.info.render.frame++,Y===!0&&nt.beginShadows();const H=p.state.shadowsArray;vt.render(H,b,F),Y===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=g.opaque,O=g.transmissive;if(p.setupLights(),F.isArrayCamera){const st=F.cameras;if(O.length>0)for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];Ne(G,O,b,ut)}Vt&&xt.render(b);for(let _t=0,ht=st.length;_t<ht;_t++){const ut=st[_t];zt(g,b,ut,ut.viewport)}}else O.length>0&&Ne(G,O,b,F),Vt&&xt.render(b),zt(g,b,F);S!==null&&(C.updateMultisampleRenderTarget(S),C.updateRenderTargetMipmap(S)),b.isScene===!0&&b.onAfterRender(x,b,F),oe.resetDefaultState(),R=-1,L=null,y.pop(),y.length>0?(p=y[y.length-1],Y===!0&&nt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Rt(b,F,H,G){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)H=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Gt.intersectsSprite(b)){G&&St.setFromMatrixPosition(b.matrixWorld).applyMatrix4(at);const _t=j.update(b),ht=b.material;ht.visible&&g.push(b,_t,ht,H,St.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Gt.intersectsObject(b))){const _t=j.update(b),ht=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),St.copy(b.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),St.copy(_t.boundingSphere.center)),St.applyMatrix4(b.matrixWorld).applyMatrix4(at)),Array.isArray(ht)){const ut=_t.groups;for(let wt=0,It=ut.length;wt<It;wt++){const Tt=ut[wt],le=ht[Tt.materialIndex];le&&le.visible&&g.push(b,_t,le,H,St.z,Tt)}}else ht.visible&&g.push(b,_t,ht,H,St.z,null)}}const st=b.children;for(let _t=0,ht=st.length;_t<ht;_t++)Rt(st[_t],F,H,G)}function zt(b,F,H,G){const O=b.opaque,st=b.transmissive,_t=b.transparent;p.setupLightsView(H),Y===!0&&nt.setGlobalState(x.clippingPlanes,H),G&&B.viewport(v.copy(G)),O.length>0&&Yt(O,F,H),st.length>0&&Yt(st,F,H),_t.length>0&&Yt(_t,F,H),B.buffers.depth.setTest(!0),B.buffers.depth.setMask(!0),B.buffers.color.setMask(!0),B.setPolygonOffset(!1)}function Ne(b,F,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new $r(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?qa:ki,minFilter:Nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const st=p.state.transmissionRenderTarget[G.id],_t=G.viewport||v;st.setSize(_t.z,_t.w);const ht=x.getRenderTarget();x.setRenderTarget(st),x.getClearColor(z),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&xt.render(H);const ut=x.toneMapping;x.toneMapping=or;const wt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),Y===!0&&nt.setGlobalState(x.clippingPlanes,G),Yt(b,H,G),C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Tt=0,le=F.length;Tt<le;Tt++){const ie=F[Tt],ve=ie.object,$e=ie.geometry,jt=ie.material,Ct=ie.group;if(jt.side===Ui&&ve.layers.test(G.layers)){const tn=jt.side;jt.side=Rn,jt.needsUpdate=!0,Ce(ve,H,G,$e,jt,Ct),jt.side=tn,jt.needsUpdate=!0,It=!0}}It===!0&&(C.updateMultisampleRenderTarget(st),C.updateRenderTargetMipmap(st))}x.setRenderTarget(ht),x.setClearColor(z,k),wt!==void 0&&(G.viewport=wt),x.toneMapping=ut}function Yt(b,F,H){const G=F.isScene===!0?F.overrideMaterial:null;for(let O=0,st=b.length;O<st;O++){const _t=b[O],ht=_t.object,ut=_t.geometry,wt=G===null?_t.material:G,It=_t.group;ht.layers.test(H.layers)&&Ce(ht,F,H,ut,wt,It)}}function Ce(b,F,H,G,O,st){b.onBeforeRender(x,F,H,G,O,st),b.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(x,F,H,G,b,st),O.transparent===!0&&O.side===Ui&&O.forceSinglePass===!1?(O.side=Rn,O.needsUpdate=!0,x.renderBufferDirect(H,F,G,O,b,st),O.side=fr,O.needsUpdate=!0,x.renderBufferDirect(H,F,G,O,b,st),O.side=Ui):x.renderBufferDirect(H,F,G,O,b,st),b.onAfterRender(x,F,H,G,O,st)}function Oe(b,F,H){F.isScene!==!0&&(F=Ht);const G=Pt.get(b),O=p.state.lights,st=p.state.shadowsArray,_t=O.state.version,ht=yt.getParameters(b,O.state,st,F,H),ut=yt.getProgramCacheKey(ht);let wt=G.programs;G.environment=b.isMeshStandardMaterial?F.environment:null,G.fog=F.fog,G.envMap=(b.isMeshStandardMaterial?W:E).get(b.envMap||G.environment),G.envMapRotation=G.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,wt===void 0&&(b.addEventListener("dispose",Xt),wt=new Map,G.programs=wt);let It=wt.get(ut);if(It!==void 0){if(G.currentProgram===It&&G.lightsStateVersion===_t)return Me(b,ht),It}else ht.uniforms=yt.getUniforms(b),b.onBeforeCompile(ht,x),It=yt.acquireProgram(ht,ut),wt.set(ut,It),G.uniforms=ht.uniforms;const Tt=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Tt.clippingPlanes=nt.uniform),Me(b,ht),G.needsLights=be(b),G.lightsStateVersion=_t,G.needsLights&&(Tt.ambientLightColor.value=O.state.ambient,Tt.lightProbe.value=O.state.probe,Tt.directionalLights.value=O.state.directional,Tt.directionalLightShadows.value=O.state.directionalShadow,Tt.spotLights.value=O.state.spot,Tt.spotLightShadows.value=O.state.spotShadow,Tt.rectAreaLights.value=O.state.rectArea,Tt.ltc_1.value=O.state.rectAreaLTC1,Tt.ltc_2.value=O.state.rectAreaLTC2,Tt.pointLights.value=O.state.point,Tt.pointLightShadows.value=O.state.pointShadow,Tt.hemisphereLights.value=O.state.hemi,Tt.directionalShadowMap.value=O.state.directionalShadowMap,Tt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Tt.spotShadowMap.value=O.state.spotShadowMap,Tt.spotLightMatrix.value=O.state.spotLightMatrix,Tt.spotLightMap.value=O.state.spotLightMap,Tt.pointShadowMap.value=O.state.pointShadowMap,Tt.pointShadowMatrix.value=O.state.pointShadowMatrix),G.currentProgram=It,G.uniformsList=null,It}function Te(b){if(b.uniformsList===null){const F=b.currentProgram.getUniforms();b.uniformsList=sl.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Me(b,F){const H=Pt.get(b);H.outputColorSpace=F.outputColorSpace,H.batching=F.batching,H.batchingColor=F.batchingColor,H.instancing=F.instancing,H.instancingColor=F.instancingColor,H.instancingMorph=F.instancingMorph,H.skinning=F.skinning,H.morphTargets=F.morphTargets,H.morphNormals=F.morphNormals,H.morphColors=F.morphColors,H.morphTargetsCount=F.morphTargetsCount,H.numClippingPlanes=F.numClippingPlanes,H.numIntersection=F.numClipIntersection,H.vertexAlphas=F.vertexAlphas,H.vertexTangents=F.vertexTangents,H.toneMapping=F.toneMapping}function me(b,F,H,G,O){F.isScene!==!0&&(F=Ht),C.resetTextureUnits();const st=F.fog,_t=G.isMeshStandardMaterial?F.environment:null,ht=S===null?x.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:mr,ut=(G.isMeshStandardMaterial?W:E).get(G.envMap||_t),wt=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,It=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Tt=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,ie=!!H.morphAttributes.color;let ve=or;G.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(ve=x.toneMapping);const $e=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,jt=$e!==void 0?$e.length:0,Ct=Pt.get(G),tn=p.state.lights;if(Y===!0&&(Q===!0||b!==L)){const Yn=b===L&&G.id===R;nt.setState(G,b,Yn)}let fe=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==tn.state.version||Ct.outputColorSpace!==ht||O.isBatchedMesh&&Ct.batching===!1||!O.isBatchedMesh&&Ct.batching===!0||O.isBatchedMesh&&Ct.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ct.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ct.instancing===!1||!O.isInstancedMesh&&Ct.instancing===!0||O.isSkinnedMesh&&Ct.skinning===!1||!O.isSkinnedMesh&&Ct.skinning===!0||O.isInstancedMesh&&Ct.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ct.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ct.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ct.instancingMorph===!1&&O.morphTexture!==null||Ct.envMap!==ut||G.fog===!0&&Ct.fog!==st||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==nt.numPlanes||Ct.numIntersection!==nt.numIntersection)||Ct.vertexAlphas!==wt||Ct.vertexTangents!==It||Ct.morphTargets!==Tt||Ct.morphNormals!==le||Ct.morphColors!==ie||Ct.toneMapping!==ve||Ct.morphTargetsCount!==jt)&&(fe=!0):(fe=!0,Ct.__version=G.version);let ri=Ct.currentProgram;fe===!0&&(ri=Oe(G,F,O));let Jr=!1,Dn=!1,Fl=!1;const Fe=ri.getUniforms(),Hi=Ct.uniforms;if(B.useProgram(ri.program)&&(Jr=!0,Dn=!0,Fl=!0),G.id!==R&&(R=G.id,Dn=!0),Jr||L!==b){Bt.reverseDepthBuffer?(ft.copy(b.projectionMatrix),sv(ft),av(ft),Fe.setValue(D,"projectionMatrix",ft)):Fe.setValue(D,"projectionMatrix",b.projectionMatrix),Fe.setValue(D,"viewMatrix",b.matrixWorldInverse);const Yn=Fe.map.cameraPosition;Yn!==void 0&&Yn.setValue(D,bt.setFromMatrixPosition(b.matrixWorld)),Bt.logarithmicDepthBuffer&&Fe.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Fe.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),L!==b&&(L=b,Dn=!0,Fl=!0)}if(O.isSkinnedMesh){Fe.setOptional(D,O,"bindMatrix"),Fe.setOptional(D,O,"bindMatrixInverse");const Yn=O.skeleton;Yn&&(Yn.boneTexture===null&&Yn.computeBoneTexture(),Fe.setValue(D,"boneTexture",Yn.boneTexture,C))}O.isBatchedMesh&&(Fe.setOptional(D,O,"batchingTexture"),Fe.setValue(D,"batchingTexture",O._matricesTexture,C),Fe.setOptional(D,O,"batchingIdTexture"),Fe.setValue(D,"batchingIdTexture",O._indirectTexture,C),Fe.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&Fe.setValue(D,"batchingColorTexture",O._colorsTexture,C));const Bl=H.morphAttributes;if((Bl.position!==void 0||Bl.normal!==void 0||Bl.color!==void 0)&&Lt.update(O,H,ri),(Dn||Ct.receiveShadow!==O.receiveShadow)&&(Ct.receiveShadow=O.receiveShadow,Fe.setValue(D,"receiveShadow",O.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Hi.envMap.value=ut,Hi.flipEnvMap.value=ut.isCubeTexture&&ut.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&F.environment!==null&&(Hi.envMapIntensity.value=F.environmentIntensity),Dn&&(Fe.setValue(D,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Pn(Hi,Fl),st&&G.fog===!0&&it.refreshFogUniforms(Hi,st),it.refreshMaterialUniforms(Hi,G,$,V,p.state.transmissionRenderTarget[b.id]),sl.upload(D,Te(Ct),Hi,C)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(sl.upload(D,Te(Ct),Hi,C),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Fe.setValue(D,"center",O.center),Fe.setValue(D,"modelViewMatrix",O.modelViewMatrix),Fe.setValue(D,"normalMatrix",O.normalMatrix),Fe.setValue(D,"modelMatrix",O.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Yn=G.uniformsGroups;for(let zl=0,d_=Yn.length;zl<d_;zl++){const Yh=Yn[zl];N.update(Yh,ri),N.bind(Yh,ri)}}return ri}function Pn(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function be(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(b,F,H){Pt.get(b.texture).__webglTexture=F,Pt.get(b.depthTexture).__webglTexture=H;const G=Pt.get(b);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,F){const H=Pt.get(b);H.__webglFramebuffer=F,H.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,H=0){S=b,A=F,w=H;let G=!0,O=null,st=!1,_t=!1;if(b){const ut=Pt.get(b);if(ut.__useDefaultFramebuffer!==void 0)B.bindFramebuffer(D.FRAMEBUFFER,null),G=!1;else if(ut.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(ut.__hasExternalTextures)C.rebindTextures(b,Pt.get(b.texture).__webglTexture,Pt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Tt=b.depthTexture;if(ut.__boundDepthTexture!==Tt){if(Tt!==null&&Pt.has(Tt)&&(b.width!==Tt.image.width||b.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const wt=b.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(_t=!0);const It=Pt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(It[F])?O=It[F][H]:O=It[F],st=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?O=Pt.get(b).__webglMultisampledFramebuffer:Array.isArray(It)?O=It[H]:O=It,v.copy(b.viewport),T.copy(b.scissor),I=b.scissorTest}else v.copy(P).multiplyScalar($).floor(),T.copy(ot).multiplyScalar($).floor(),I=Ft;if(B.bindFramebuffer(D.FRAMEBUFFER,O)&&G&&B.drawBuffers(b,O),B.viewport(v),B.scissor(T),B.setScissorTest(I),st){const ut=Pt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,ut.__webglTexture,H)}else if(_t){const ut=Pt.get(b.texture),wt=F||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,ut.__webglTexture,H||0,wt)}R=-1},this.readRenderTargetPixels=function(b,F,H,G,O,st,_t){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){B.bindFramebuffer(D.FRAMEBUFFER,ht);try{const ut=b.texture,wt=ut.format,It=ut.type;if(!Bt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-G&&H>=0&&H<=b.height-O&&D.readPixels(F,H,G,O,Ot.convert(wt),Ot.convert(It),st)}finally{const ut=S!==null?Pt.get(S).__webglFramebuffer:null;B.bindFramebuffer(D.FRAMEBUFFER,ut)}}},this.readRenderTargetPixelsAsync=async function(b,F,H,G,O,st,_t){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=Pt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&_t!==void 0&&(ht=ht[_t]),ht){const ut=b.texture,wt=ut.format,It=ut.type;if(!Bt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=b.width-G&&H>=0&&H<=b.height-O){B.bindFramebuffer(D.FRAMEBUFFER,ht);const Tt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.bufferData(D.PIXEL_PACK_BUFFER,st.byteLength,D.STREAM_READ),D.readPixels(F,H,G,O,Ot.convert(wt),Ot.convert(It),0);const le=S!==null?Pt.get(S).__webglFramebuffer:null;B.bindFramebuffer(D.FRAMEBUFFER,le);const ie=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await rv(D,ie,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Tt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,st),D.deleteBuffer(Tt),D.deleteSync(ie),st}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,F=null,H=0){b.isTexture!==!0&&(rl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1]);const G=Math.pow(2,-H),O=Math.floor(b.image.width*G),st=Math.floor(b.image.height*G),_t=F!==null?F.x:0,ht=F!==null?F.y:0;C.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,_t,ht,O,st),B.unbindTexture()},this.copyTextureToTexture=function(b,F,H=null,G=null,O=0){b.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1],F=arguments[2],O=arguments[3]||0,H=null);let st,_t,ht,ut,wt,It;H!==null?(st=H.max.x-H.min.x,_t=H.max.y-H.min.y,ht=H.min.x,ut=H.min.y):(st=b.image.width,_t=b.image.height,ht=0,ut=0),G!==null?(wt=G.x,It=G.y):(wt=0,It=0);const Tt=Ot.convert(F.format),le=Ot.convert(F.type);C.setTexture2D(F,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ie=D.getParameter(D.UNPACK_ROW_LENGTH),ve=D.getParameter(D.UNPACK_IMAGE_HEIGHT),$e=D.getParameter(D.UNPACK_SKIP_PIXELS),jt=D.getParameter(D.UNPACK_SKIP_ROWS),Ct=D.getParameter(D.UNPACK_SKIP_IMAGES),tn=b.isCompressedTexture?b.mipmaps[O]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,tn.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tn.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ht),D.pixelStorei(D.UNPACK_SKIP_ROWS,ut),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,wt,It,st,_t,Tt,le,tn.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,wt,It,tn.width,tn.height,Tt,tn.data):D.texSubImage2D(D.TEXTURE_2D,O,wt,It,st,_t,Tt,le,tn),D.pixelStorei(D.UNPACK_ROW_LENGTH,ie),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),D.pixelStorei(D.UNPACK_SKIP_ROWS,jt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct),O===0&&F.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),B.unbindTexture()},this.copyTextureToTexture3D=function(b,F,H=null,G=null,O=0){b.isTexture!==!0&&(rl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,b=arguments[2],F=arguments[3],O=arguments[4]||0);let st,_t,ht,ut,wt,It,Tt,le,ie;const ve=b.isCompressedTexture?b.mipmaps[O]:b.image;H!==null?(st=H.max.x-H.min.x,_t=H.max.y-H.min.y,ht=H.max.z-H.min.z,ut=H.min.x,wt=H.min.y,It=H.min.z):(st=ve.width,_t=ve.height,ht=ve.depth,ut=0,wt=0,It=0),G!==null?(Tt=G.x,le=G.y,ie=G.z):(Tt=0,le=0,ie=0);const $e=Ot.convert(F.format),jt=Ot.convert(F.type);let Ct;if(F.isData3DTexture)C.setTexture3D(F,0),Ct=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)C.setTexture2DArray(F,0),Ct=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const tn=D.getParameter(D.UNPACK_ROW_LENGTH),fe=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),Jr=D.getParameter(D.UNPACK_SKIP_ROWS),Dn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ve.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ve.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ut),D.pixelStorei(D.UNPACK_SKIP_ROWS,wt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,It),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Ct,O,Tt,le,ie,st,_t,ht,$e,jt,ve.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,O,Tt,le,ie,st,_t,ht,$e,ve.data):D.texSubImage3D(Ct,O,Tt,le,ie,st,_t,ht,$e,jt,ve),D.pixelStorei(D.UNPACK_ROW_LENGTH,tn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,fe),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dn),O===0&&F.generateMipmaps&&D.generateMipmap(Ct),B.unbindTexture()},this.initRenderTarget=function(b){Pt.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),B.unbindTexture()},this.resetState=function(){A=0,w=0,S=null,B.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Nh?"display-p3":"srgb",e.unpackColorSpace=pe.workingColorSpace===Dl?"display-p3":"srgb"}}class fT extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class dT{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zu,this.updateRanges=[],this.version=0,this.uuid=fi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=fi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const dn=new U;class Zm{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyMatrix4(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.applyNormalMatrix(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)dn.fromBufferAttribute(this,e),dn.transformDirection(t),this.setXYZ(e,dn.x,dn.y,dn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ui(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ui(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ui(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ui(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ui(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ii(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zm(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Rd=new U,Cd=new he,Pd=new he,_E=new U,Dd=new Jt,Io=new U,Lc=new Vi,Ld=new Jt,Ic=new $a;class pT extends ei{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Uf,this.bindMatrix=new Jt,this.bindMatrixInverse=new Jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new _r),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Io),this.boundingBox.expandByPoint(Io)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vi),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Io),this.boundingSphere.expandByPoint(Io)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Lc.copy(this.boundingSphere),Lc.applyMatrix4(i),t.ray.intersectsSphere(Lc)!==!1&&(Ld.copy(i).invert(),Ic.copy(t.ray).applyMatrix4(Ld),!(this.boundingBox!==null&&Ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Ic)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new he,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Uf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,i=this.geometry;Cd.fromBufferAttribute(i.attributes.skinIndex,t),Pd.fromBufferAttribute(i.attributes.skinWeight,t),Rd.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const a=Pd.getComponent(s);if(a!==0){const o=Cd.getComponent(s);Dd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(_E.copy(Rd).applyMatrix4(Dd),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class gE extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Jm extends hn{constructor(t=null,e=1,n=1,i,s,a,o,l,c=En,u=En,f,d){super(null,a,o,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Id=new Jt,vE=new Jt;class Qm{constructor(t=[],e=[]){this.uuid=fi(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=t.length;s<a;s++){const o=t[s]?t[s].matrixWorld:vE;Id.multiplyMatrices(o,e[s]),Id.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Qm(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new Jm(e,t,t,ti,hi);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const i=this.bones[e];if(i.name===t)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,i=t.bones.length;n<i;n++){const s=t.bones[n];let a=e[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new gE),this.bones.push(a),this.boneInverses.push(new Jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let i=0,s=e.length;i<s;i++){const a=e[i];t.bones.push(a.uuid);const o=n[i];t.boneInverses.push(o.toArray())}return t}}class Ud extends ii{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const gs=new Jt,Nd=new Jt,Uo=[],Od=new _r,xE=new Jt,ca=new ei,ua=new Vi;class mT extends ei{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ud(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,xE)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _r),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),Od.copy(t.boundingBox).applyMatrix4(gs),this.boundingBox.union(Od)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,gs),ua.copy(t.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(ua)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),t.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,gs),Nd.multiplyMatrices(n,gs),ca.matrixWorld=Nd,ca.raycast(t,Uo);for(let a=0,o=Uo.length;a<o;a++){const l=Uo[a];l.instanceId=s,l.object=this,e.push(l)}Uo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ud(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Jm(new Float32Array(i*this.count),i,this.count,Dh,hi));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yE extends Zr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new re(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Sl=new U,El=new U,Fd=new Jt,ha=new $a,No=new Vi,Uc=new U,Bd=new U;class t_ extends ke{constructor(t=new yn,e=new yE){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Sl.fromBufferAttribute(e,i-1),El.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Sl.distanceTo(El);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(i),No.radius+=s,t.ray.intersectsSphere(No)===!1)return;Fd.copy(i).invert(),ha.copy(t.ray).applyMatrix4(Fd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const h=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=u.getX(g),y=u.getX(g+1),x=Oo(this,t,ha,l,m,y);x&&e.push(x)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(h),m=Oo(this,t,ha,l,g,p);m&&e.push(m)}}else{const h=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let g=h,p=_-1;g<p;g+=c){const m=Oo(this,t,ha,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=Oo(this,t,ha,l,_-1,h);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Oo(r,t,e,n,i,s){const a=r.geometry.attributes.position;if(Sl.fromBufferAttribute(a,i),El.fromBufferAttribute(a,s),e.distanceSqToSegment(Sl,El,Uc,Bd)>n)return;Uc.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Uc);if(!(l<t.near||l>t.far))return{distance:l,point:Bd.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}const zd=new U,kd=new U;class _T extends t_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)zd.fromBufferAttribute(e,i),kd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+zd.distanceTo(kd);t.setAttribute("lineDistance",new Ae(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gT extends t_{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ME extends Zr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new re(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vd=new Jt,Qu=new $a,Fo=new Vi,Bo=new U;class vT extends ke{constructor(t=new yn,e=new ME){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(i),Fo.radius+=s,t.ray.intersectsSphere(Fo)===!1)return;Vd.copy(i).invert(),Qu.copy(t.ray).applyMatrix4(Vd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let _=d,g=h;_<g;_++){const p=c.getX(_);Bo.fromBufferAttribute(f,p),Hd(Bo,p,l,i,t,e,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let _=d,g=h;_<g;_++)Bo.fromBufferAttribute(f,_),Hd(Bo,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Hd(r,t,e,n,i,s,a){const o=Qu.distanceSqToPoint(r);if(o<e){const l=new U;Qu.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class SE{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(i=Math.floor(o+(l-o)/2),c=n[i]-a,c<0)o=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===a)return i/(s-1);const u=n[i],d=n[i+1]-u,h=(a-u)/d;return(i+h)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const a=this.getPoint(i),o=this.getPoint(s),l=e||(a.isVector2?new ne:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new U,i=[],s=[],a=[],o=new U,l=new Jt;for(let h=0;h<=t;h++){const _=h/t;i[h]=this.getTangentAt(_,new U)}s[0]=new U,a[0]=new U;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),f=Math.abs(i[0].y),d=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],o),a[0].crossVectors(i[0],s[0]);for(let h=1;h<=t;h++){if(s[h]=s[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(i[h-1],i[h]),o.length()>Number.EPSILON){o.normalize();const _=Math.acos(Je(i[h-1].dot(i[h]),-1,1));s[h].applyMatrix4(l.makeRotationAxis(o,_))}a[h].crossVectors(i[h],s[h])}if(e===!0){let h=Math.acos(Je(s[0].dot(s[t]),-1,1));h/=t,i[0].dot(o.crossVectors(s[0],s[t]))>0&&(h=-h);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],h*_)),a[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function kh(){let r=0,t=0,e=0,n=0;function i(s,a,o,l){r=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){i(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,f){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,h=(o-a)/u-(l-a)/(u+f)+(l-o)/f;d*=u,h*=u,i(a,o,d,h)},calc:function(s){const a=s*s,o=a*s;return r+t*s+e*a+n*o}}}const zo=new U,Nc=new kh,Oc=new kh,Fc=new kh;class xT extends SE{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){const n=e,i=this.points,s=i.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=i[(o-1)%s]:(zo.subVectors(i[0],i[1]).add(i[0]),c=zo);const f=i[o%s],d=i[(o+1)%s];if(this.closed||o+2<s?u=i[(o+2)%s]:(zo.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const h=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(f),h),g=Math.pow(f.distanceToSquared(d),h),p=Math.pow(d.distanceToSquared(u),h);g<1e-4&&(g=1),_<1e-4&&(_=g),p<1e-4&&(p=g),Nc.initNonuniformCatmullRom(c.x,f.x,d.x,u.x,_,g,p),Oc.initNonuniformCatmullRom(c.y,f.y,d.y,u.y,_,g,p),Fc.initNonuniformCatmullRom(c.z,f.z,d.z,u.z,_,g,p)}else this.curveType==="catmullrom"&&(Nc.initCatmullRom(c.x,f.x,d.x,u.x,this.tension),Oc.initCatmullRom(c.y,f.y,d.y,u.y,this.tension),Fc.initCatmullRom(c.z,f.z,d.z,u.z,this.tension));return n.set(Nc.calc(l),Oc.calc(l),Fc.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class Vh extends yn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],f=[],d=[],h=[];let _=0;const g=[],p=n/2;let m=0;y(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Ae(f,3)),this.setAttribute("normal",new Ae(d,3)),this.setAttribute("uv",new Ae(h,2));function y(){const M=new U,A=new U;let w=0;const S=(e-t)/n;for(let R=0;R<=s;R++){const L=[],v=R/s,T=v*(e-t)+t;for(let I=0;I<=i;I++){const z=I/i,k=z*l+o,K=Math.sin(k),V=Math.cos(k);A.x=T*K,A.y=-v*n+p,A.z=T*V,f.push(A.x,A.y,A.z),M.set(K,S,V).normalize(),d.push(M.x,M.y,M.z),h.push(z,1-v),L.push(_++)}g.push(L)}for(let R=0;R<i;R++)for(let L=0;L<s;L++){const v=g[L][R],T=g[L+1][R],I=g[L+1][R+1],z=g[L][R+1];t>0&&(u.push(v,T,z),w+=3),e>0&&(u.push(T,I,z),w+=3)}c.addGroup(m,w,0),m+=w}function x(M){const A=_,w=new ne,S=new U;let R=0;const L=M===!0?t:e,v=M===!0?1:-1;for(let I=1;I<=i;I++)f.push(0,p*v,0),d.push(0,v,0),h.push(.5,.5),_++;const T=_;for(let I=0;I<=i;I++){const k=I/i*l+o,K=Math.cos(k),V=Math.sin(k);S.x=L*V,S.y=p*v,S.z=L*K,f.push(S.x,S.y,S.z),d.push(0,v,0),w.x=K*.5+.5,w.y=V*.5*v+.5,h.push(w.x,w.y),_++}for(let I=0;I<i;I++){const z=A+I,k=T+I;M===!0?u.push(k,k+1,z):u.push(k+1,k,z),R+=3}c.addGroup(m,R,M===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class e_ extends Vh{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e_(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends yn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],a=[];o(i),c(n),u(),this.setAttribute("position",new Ae(s,3)),this.setAttribute("normal",new Ae(s.slice(),3)),this.setAttribute("uv",new Ae(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new U,M=new U,A=new U;for(let w=0;w<e.length;w+=3)h(e[w+0],x),h(e[w+1],M),h(e[w+2],A),l(x,M,A,y)}function l(y,x,M,A){const w=A+1,S=[];for(let R=0;R<=w;R++){S[R]=[];const L=y.clone().lerp(M,R/w),v=x.clone().lerp(M,R/w),T=w-R;for(let I=0;I<=T;I++)I===0&&R===w?S[R][I]=L:S[R][I]=L.clone().lerp(v,I/T)}for(let R=0;R<w;R++)for(let L=0;L<2*(w-R)-1;L++){const v=Math.floor(L/2);L%2===0?(d(S[R][v+1]),d(S[R+1][v]),d(S[R][v])):(d(S[R][v+1]),d(S[R+1][v+1]),d(S[R+1][v]))}}function c(y){const x=new U;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(y),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function u(){const y=new U;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const M=p(y)/2/Math.PI+.5,A=m(y)/Math.PI+.5;a.push(M,1-A)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){const x=a[y+0],M=a[y+2],A=a[y+4],w=Math.max(x,M,A),S=Math.min(x,M,A);w>.9&&S<.1&&(x<.2&&(a[y+0]+=1),M<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function h(y,x){const M=y*3;x.x=t[M+0],x.y=t[M+1],x.z=t[M+2]}function _(){const y=new U,x=new U,M=new U,A=new U,w=new ne,S=new ne,R=new ne;for(let L=0,v=0;L<s.length;L+=9,v+=6){y.set(s[L+0],s[L+1],s[L+2]),x.set(s[L+3],s[L+4],s[L+5]),M.set(s[L+6],s[L+7],s[L+8]),w.set(a[v+0],a[v+1]),S.set(a[v+2],a[v+3]),R.set(a[v+4],a[v+5]),A.copy(y).add(x).add(M).divideScalar(3);const T=p(A);g(w,v+0,y,T),g(S,v+2,x,T),g(R,v+4,M,T)}}function g(y,x,M,A){A<0&&y.x===1&&(a[x]=y.x-1),M.x===0&&M.z===0&&(a[x]=A/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.vertices,t.indices,t.radius,t.details)}}class n_ extends Js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n_(t.radius,t.detail)}}const ko=new U,Vo=new U,Bc=new U,Ho=new Zn;class yT extends yn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const i=Math.pow(10,4),s=Math.cos(Us*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],f=new Array(3),d={},h=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:g,b:p,c:m}=Ho;if(g.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Ho.getNormal(Bc),f[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,f[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,f[2]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let y=0;y<3;y++){const x=(y+1)%3,M=f[y],A=f[x],w=Ho[u[y]],S=Ho[u[x]],R=`${M}_${A}`,L=`${A}_${M}`;L in d&&d[L]?(Bc.dot(d[L].normal)<=s&&(h.push(w.x,w.y,w.z),h.push(S.x,S.y,S.z)),d[L]=null):R in d||(d[R]={index0:c[y],index1:c[x],normal:Bc.clone()})}}for(const _ in d)if(d[_]){const{index0:g,index1:p}=d[_];ko.fromBufferAttribute(o,g),Vo.fromBufferAttribute(o,p),h.push(ko.x,ko.y,ko.z),h.push(Vo.x,Vo.y,Vo.z)}this.setAttribute("position",new Ae(h,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class i_ extends Js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i_(t.radius,t.detail)}}class r_ extends Js{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r_(t.radius,t.detail)}}class s_ extends yn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new U,d=new U,h=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let M=0;m===0&&a===0?M=.5/e:m===n&&l===Math.PI&&(M=-.5/e);for(let A=0;A<=e;A++){const w=A/e;f.x=-t*Math.cos(i+w*s)*Math.sin(a+x*o),f.y=t*Math.cos(a+x*o),f.z=t*Math.sin(i+w*s)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(w+M,1-x),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=u[m][y+1],M=u[m][y],A=u[m+1][y],w=u[m+1][y+1];(m!==0||a>0)&&h.push(x,M,w),(m!==n-1||l<Math.PI)&&h.push(M,A,w)}this.setIndex(h),this.setAttribute("position",new Ae(_,3)),this.setAttribute("normal",new Ae(g,3)),this.setAttribute("uv",new Ae(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s_(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class a_ extends Js{constructor(t=1,e=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],i=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,i,t,e),this.type="TetrahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new a_(t.radius,t.detail)}}class o_ extends yn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],l=[],c=[],u=new U,f=new U,d=new U;for(let h=0;h<=n;h++)for(let _=0;_<=i;_++){const g=_/i*s,p=h/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(g),f.y=(t+e*Math.cos(p))*Math.sin(g),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),d.subVectors(f,u).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(h/n)}for(let h=1;h<=n;h++)for(let _=1;_<=i;_++){const g=(i+1)*h+_-1,p=(i+1)*(h-1)+_-1,m=(i+1)*(h-1)+_,y=(i+1)*h+_;a.push(g,p,y),a.push(p,m,y)}this.setIndex(a),this.setAttribute("position",new Ae(o,3)),this.setAttribute("normal",new Ae(l,3)),this.setAttribute("uv",new Ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new o_(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class l_ extends yn{constructor(t=1,e=.4,n=64,i=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:a},n=Math.floor(n),i=Math.floor(i);const o=[],l=[],c=[],u=[],f=new U,d=new U,h=new U,_=new U,g=new U,p=new U,m=new U;for(let x=0;x<=n;++x){const M=x/n*s*Math.PI*2;y(M,s,a,t,h),y(M+.01,s,a,t,_),p.subVectors(_,h),m.addVectors(_,h),g.crossVectors(p,m),m.crossVectors(g,p),g.normalize(),m.normalize();for(let A=0;A<=i;++A){const w=A/i*Math.PI*2,S=-e*Math.cos(w),R=e*Math.sin(w);f.x=h.x+(S*m.x+R*g.x),f.y=h.y+(S*m.y+R*g.y),f.z=h.z+(S*m.z+R*g.z),l.push(f.x,f.y,f.z),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),u.push(x/n),u.push(A/i)}}for(let x=1;x<=n;x++)for(let M=1;M<=i;M++){const A=(i+1)*(x-1)+(M-1),w=(i+1)*x+(M-1),S=(i+1)*x+M,R=(i+1)*(x-1)+M;o.push(A,w,R),o.push(w,S,R)}this.setIndex(o),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(c,3)),this.setAttribute("uv",new Ae(u,2));function y(x,M,A,w,S){const R=Math.cos(x),L=Math.sin(x),v=A/M*x,T=Math.cos(v);S.x=w*(2+T)*.5*R,S.y=w*(2+T)*L*.5,S.z=w*Math.sin(v)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new l_(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}}class EE extends Zr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new re(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new re(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lm,this.normalScale=new ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class MT extends EE{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new re(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new re(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new re(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}function Go(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function TE(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function bE(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n}function Gd(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=e[s]*t;for(let l=0;l!==t;++l)i[a++]=r[o+l]}return i}function c_(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(t.push(s.time),e.push.apply(e,a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(t.push(s.time),a.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(t.push(s.time),e.push(a)),s=r[i++];while(s!==void 0)}class Ul{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){const o=e[1];t<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class wE extends Ul{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nf,endingEnd:Nf}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,a=t+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Of:s=t,o=2*e-n;break;case Ff:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Of:a=t,l=2*n-e;break;case Ff:a=1,l=n+i[1]-i[0];break;default:a=t-1,l=e}const c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,h=this._weightNext,_=(n-e)/(i-e),g=_*_,p=g*_,m=-d*p+2*d*g-d*_,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*_+1,x=(-1-h)*p+(1.5+h)*g+.5*_,M=h*p-h*g;for(let A=0;A!==o;++A)s[A]=m*a[u+A]+y*a[c+A]+x*a[l+A]+M*a[f+A];return s}}class AE extends Ul{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,u=(n-e)/(i-e),f=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*f+a[l+d]*u;return s}}class RE extends Ul{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class Ei{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Go(e,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Go(t.times,Array),values:Go(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new RE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new AE(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new wE(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case gl:e=this.InterpolantFactoryMethodDiscrete;break;case ju:e=this.InterpolantFactoryMethodLinear;break;case ic:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return gl;case this.InterpolantFactoryMethodLinear:return ju;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(i!==void 0&&TE(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ic,s=t.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=t[o],u=t[o+1];if(c!==u&&(o!==1||c!==t[0]))if(i)l=!0;else{const f=o*n,d=f-n,h=f+n;for(let _=0;_!==n;++_){const g=e[f+_];if(g!==e[d+_]||g!==e[h+_]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const f=o*n,d=a*n;for(let h=0;h!==n;++h)e[d+h]=e[f+h]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=ju;class Qs extends Ei{constructor(t,e,n){super(t,e,n)}}Qs.prototype.ValueTypeName="bool";Qs.prototype.ValueBufferType=Array;Qs.prototype.DefaultInterpolation=gl;Qs.prototype.InterpolantFactoryMethodLinear=void 0;Qs.prototype.InterpolantFactoryMethodSmooth=void 0;class u_ extends Ei{}u_.prototype.ValueTypeName="color";class Tl extends Ei{}Tl.prototype.ValueTypeName="number";class CE extends Ul{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(i-e);let c=t*o;for(let u=c+o;c!==u;c+=4)js.slerpFlat(s,0,a,c-o,a,c,l);return s}}class Nl extends Ei{InterpolantFactoryMethodLinear(t){return new CE(this.times,this.values,this.getValueSize(),t)}}Nl.prototype.ValueTypeName="quaternion";Nl.prototype.InterpolantFactoryMethodSmooth=void 0;class ta extends Ei{constructor(t,e,n){super(t,e,n)}}ta.prototype.ValueTypeName="string";ta.prototype.ValueBufferType=Array;ta.prototype.DefaultInterpolation=gl;ta.prototype.InterpolantFactoryMethodLinear=void 0;ta.prototype.InterpolantFactoryMethodSmooth=void 0;class bl extends Ei{}bl.prototype.ValueTypeName="vector";class ST{constructor(t="",e=-1,n=[],i=P0){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=fi(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(DE(n[a]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,a=n.length;s!==a;++s)e.push(Ei.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=bE(l);l=Gd(l,1,u),c=Gd(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Tl(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=i[f];d||(i[f]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,h,_,g){if(h.length!==0){const p=[],m=[];c_(h,p,m,_),p.length!==0&&g.push(new f(d,p,m))}},i=[],s=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const h={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)h[d[_].morphTargets[g]]=-1;for(const g in h){const p=[],m=[];for(let y=0;y!==d[_].morphTargets.length;++y){const x=d[_];p.push(x.time),m.push(x.morphTarget===g?1:0)}i.push(new Tl(".morphTargetInfluence["+g+"]",p,m))}l=h.length*a}else{const h=".bones["+e[f].name+"]";n(bl,h+".position",d,"pos",i),n(Nl,h+".quaternion",d,"rot",i),n(bl,h+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function PE(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Tl;case"vector":case"vector2":case"vector3":case"vector4":return bl;case"color":return u_;case"quaternion":return Nl;case"bool":case"boolean":return Qs;case"string":return ta}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function DE(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=PE(r.type);if(r.times===void 0){const e=[],n=[];c_(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const nr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class LE{constructor(t,e,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],_=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return _}return null}}}const IE=new LE;class ja{constructor(t){this.manager=t!==void 0?t:IE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ja.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class UE extends Error{constructor(t,e){super(t),this.response=e}}class ET extends ja{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=nr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Ci[t]!==void 0){Ci[t].push({onLoad:e,onProgress:n,onError:i});return}Ci[t]=[],Ci[t].push({onLoad:e,onProgress:n,onError:i});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ci[t],f=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=d?parseInt(d):0,_=h!==0;let g=0;const p=new ReadableStream({start(m){y();function y(){f.read().then(({done:x,value:M})=>{if(x)m.close();else{g+=M.byteLength;const A=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:h});for(let w=0,S=u.length;w<S;w++){const R=u[w];R.onProgress&&R.onProgress(A)}m.enqueue(M),y()}},x=>{m.error(x)})}}});return new Response(p)}else throw new UE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(_=>h.decode(_))}}}).then(c=>{nr.add(t,c);const u=Ci[t];delete Ci[t];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Ci[t];if(u===void 0)throw this.manager.itemError(t),c;delete Ci[t];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class NE extends ja{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=nr.get(t);if(a!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a;const o=Xa("img");function l(){u(),nr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(f){u(),i&&i(f),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(t),o.src=t,o}}class TT extends ja{constructor(t){super(t)}load(t,e,n,i){const s=new hn,a=new NE(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){s.image=o,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Ol extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new re(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const zc=new Jt,Wd=new U,Xd=new U;class Hh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new ne(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wd),Xd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xd),e.updateMatrixWorld(),zc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zc)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class OE extends Hh{constructor(){super(new Bn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=qs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class bT extends Ol{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new OE}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Yd=new Jt,fa=new U,kc=new U;class FE extends Hh{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ne(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),fa.setFromMatrixPosition(t.matrixWorld),n.position.copy(fa),kc.copy(n.position),kc.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(kc),n.updateMatrixWorld(),i.makeTranslation(-fa.x,-fa.y,-fa.z),Yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Yd)}}class wT extends Ol{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new FE}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class BE extends Hh{constructor(){super(new Xm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class AT extends Ol{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new BE}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class RT extends Ol{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class CT{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class PT extends ja{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,a=nr.get(t);if(a!==void 0){if(s.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),s.manager.itemEnd(t)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){e&&e(a),s.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return nr.add(t,c),e&&e(c),s.manager.itemEnd(t),c}).catch(function(c){i&&i(c),nr.remove(t),s.manager.itemError(t),s.manager.itemEnd(t)});nr.add(t,l),s.manager.itemStart(t)}}class DT{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=qd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function qd(){return performance.now()}const Gh="\\[\\]\\.:\\/",zE=new RegExp("["+Gh+"]","g"),Wh="[^"+Gh+"]",kE="[^"+Gh.replace("\\.","")+"]",VE=/((?:WC+[\/:])*)/.source.replace("WC",Wh),HE=/(WCOD+)?/.source.replace("WCOD",kE),GE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wh),WE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wh),XE=new RegExp("^"+VE+HE+GE+WE+"$"),YE=["material","materials","bones","map"];class qE{constructor(t,e,n){const i=n||xe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class xe{constructor(t,e,n){this.path=e,this.parsedPath=n||xe.parseTrackName(e),this.node=xe.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new xe.Composite(t,e,n):new xe(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(zE,"")}static parseTrackName(t){const e=XE.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);YE.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=xe.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[i];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}xe.Composite=qE;xe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};xe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};xe.prototype.GetterByBindingType=[xe.prototype._getValue_direct,xe.prototype._getValue_array,xe.prototype._getValue_arrayElement,xe.prototype._getValue_toArray];xe.prototype.SetterByBindingTypeAndVersioning=[[xe.prototype._setValue_direct,xe.prototype._setValue_direct_setNeedsUpdate,xe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_array,xe.prototype._setValue_array_setNeedsUpdate,xe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_arrayElement,xe.prototype._setValue_arrayElement_setNeedsUpdate,xe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[xe.prototype._setValue_fromArray,xe.prototype._setValue_fromArray_setNeedsUpdate,xe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const $d=new Jt;class LT{constructor(t,e,n=0,i=1/0){this.ray=new $a(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Fh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return $d.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4($d),this}intersectObject(t,e=!0,n=[]){return th(t,this,n,e),n.sort(Kd),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)th(t[i],this,n,e);return n.sort(Kd),n}}function Kd(r,t){return r.distance-t.distance}function th(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)th(s[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ah}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ah);var $E=()=>{window.va||(window.va=function(...t){window.vaq||(window.vaq=[]),window.vaq.push(t)})},KE="@vercel/analytics",jE="2.0.1";function h_(){return typeof window<"u"}function f_(){try{const r="production"}catch{}return"production"}function ZE(r="auto"){if(r==="auto"){window.vam=f_();return}window.vam=r}function JE(){return(h_()?window.vam:f_())||"production"}function Xh(){return JE()==="development"}function QE(r,t){if(!r||!t)return r;let e=r;try{const n=Object.entries(t);for(const[i,s]of n)if(!Array.isArray(s)){const a=jd(s);a.test(e)&&(e=e.replace(a,`/[${i}]`))}for(const[i,s]of n)if(Array.isArray(s)){const a=jd(s.join("/"));a.test(e)&&(e=e.replace(a,`/[...${i}]`))}return e}catch{return r}}function jd(r){return new RegExp(`/${tT(r)}(?=[/?#]|$)`)}function tT(r){return r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function eT(r){return r.scriptSrc?Ts(r.scriptSrc):Xh()?"https://va.vercel-scripts.com/v1/script.debug.js":r.basePath?Ts(`${r.basePath}/insights/script.js`):"/_vercel/insights/script.js"}function nT(r,t){var e;let n=r;if(t)try{n={...(e=JSON.parse(t))==null?void 0:e.analytics,...r}}catch{}ZE(n.mode);const i={sdkn:KE+(n.framework?`/${n.framework}`:""),sdkv:jE};return n.disableAutoTrack&&(i.disableAutoTrack="1"),n.viewEndpoint&&(i.viewEndpoint=Ts(n.viewEndpoint)),n.eventEndpoint&&(i.eventEndpoint=Ts(n.eventEndpoint)),n.sessionEndpoint&&(i.sessionEndpoint=Ts(n.sessionEndpoint)),Xh()&&n.debug===!1&&(i.debug="false"),n.dsn&&(i.dsn=n.dsn),n.endpoint?i.endpoint=n.endpoint:n.basePath&&(i.endpoint=Ts(`${n.basePath}/insights`)),{beforeSend:n.beforeSend,src:eT(n),dataset:i}}function Ts(r){return r.startsWith("http://")||r.startsWith("https://")||r.startsWith("/")?r:`/${r}`}function iT(r={debug:!0},t){var e;if(!h_())return;const{beforeSend:n,src:i,dataset:s}=nT(r,t);if($E(),n&&((e=window.va)==null||e.call(window,"beforeSend",n)),document.head.querySelector(`script[src*="${i}"]`))return;const a=document.createElement("script");a.src=i;for(const[o,l]of Object.entries(s))a.dataset[o]=l;a.defer=!0,a.onerror=()=>{const o=Xh()?"Please check if any ad blockers are enabled and try again.":"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";console.log(`[Vercel Web Analytics] Failed to load script from ${i}. ${o}`)},document.head.appendChild(a)}function rT({route:r,path:t}){var e;(e=window.va)==null||e.call(window,"pageview",{route:r,path:t})}function sT(){try{return}catch{}}function aT(){try{return}catch{}}customElements.define("vercel-analytics",class extends HTMLElement{constructor(){super();try{const t=JSON.parse(this.dataset.props??"{}"),e=JSON.parse(this.dataset.params??"{}");iT({...t,disableAutoTrack:!0,framework:"astro",basePath:sT(),beforeSend:window.webAnalyticsBeforeSend},aT());const n=this.dataset.pathname;rT({route:QE(n??"",e),path:n})}catch(t){throw new Error(`Failed to parse WebAnalytics properties: ${t}`)}}});export{r_ as $,RT as A,gE as B,xT as C,AT as D,yT as E,ET as F,Lo as G,Nr as H,i_ as I,nc as J,mr as K,t_ as L,ja as M,CT as N,Zr as O,uT as P,Jt as Q,ei as R,Bm as S,MT as T,EE as U,Eu as V,En as W,uo as X,C0 as Y,Tl as Z,ke as _,ST as a,Xm as a0,Bn as a1,Ll as a2,wT as a3,vT as a4,ME as a5,xe as a6,js as a7,Nl as a8,LT as a9,Su as aa,mi as ab,fT as ac,se as ad,dr as ae,Qm as af,pT as ag,Vi as ah,s_ as ai,bT as aj,a_ as ak,hn as al,TT as am,o_ as an,l_ as ao,cT as ap,lT as aq,oT as ar,ne as as,U as at,bl as au,hT as av,Gr as aw,_r as b,Ka as c,ii as d,yn as e,Ur as f,DT as g,re as h,pe as i,e_ as j,Vh as k,n_ as l,Ui as m,fr as n,PT as o,Ud as p,mT as q,dT as r,Zm as s,Ul as t,gl as u,ju as v,yE as w,gT as x,_T as y,ci as z};
