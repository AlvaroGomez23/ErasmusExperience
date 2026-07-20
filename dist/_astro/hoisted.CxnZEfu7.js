import{aO as c,at as D,aN as _,ar as Z,A as J,as as O,ag as U,b as q,H as Q,D as I,G as F,f as $,aL as G,aK as ee,a1 as k,P as te,a5 as W,t as oe,l as ne,aF as ie,ah as ae,au as se,C as re}from"./index.astro_astro_type_script_index_0_lang.u_xVSIH_.js";import{G as V}from"./GLTFLoader.Bil95SEH.js";import"./three-week.Dy2Di5y8.js";import"./party-egg.CMa5clQ5.js";c.registerPlugin(D);const K=window.matchMedia("(prefers-reduced-motion: reduce)").matches,ce="/models/Barrel.glb",E=document.getElementById("three-canvas");if(E){let z=function(){const e=new F,f=[];for(let s=0;s<=14;s++){const a=-1+2*s/14;f.push(new ee(1-.28*a*a,a))}const M=new k(new te(f,24),new W({color:7031343,roughness:.85,side:oe}));e.add(M);for(const s of[-1,1]){const a=new k(new ne(.72,24),new W({color:8214582,roughness:.8}));a.rotation.x=s>0?-Math.PI/2:Math.PI/2,a.position.y=s,e.add(a)}const L=new W({color:4866104,roughness:.45,metalness:.75});for(const s of[-.62,-.2,.2,.62]){const a=new k(new ie(1-.28*s*s+.015,.035,8,40),L);a.rotation.x=Math.PI/2,a.position.y=s,e.add(a)}return e.scale.setScalar(1.7),e.rotation.z=Math.PI/2,e},C=function(e,f){const M=new $().setFromObject(e),L=M.getSize(new G),s=M.getCenter(new G),a=f/L.y;e.scale.multiplyScalar(a),e.position.set(-s.x*a,-s.y*a,-s.z*a)},P=function(){K||(c.to(x.rotation,{y:Math.PI*2,duration:30,ease:"none",repeat:-1}),c.to(n.position,{y:"+=0.16",duration:5.5,ease:"power1.inOut",repeat:-1,yoyo:!0})),c.set(E,{opacity:0}),c.set(i.scale,{x:.82,y:.82,z:.82}),c.timeline({scrollTrigger:{trigger:".hero",start:"top 85%",once:!0}}).to(E,{opacity:1,duration:1.5,ease:"power3.out"},0).to(i.scale,{x:1,y:1,z:1,duration:1.5,ease:"power3.out"},0)},T=function(e){r=(e.clientX/window.innerWidth-.5)*2*w,h=(e.clientY/window.innerHeight-.5)*2*w},b=function(){y.aspect=window.innerWidth/window.innerHeight,y.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2))};const u=new _({canvas:E,alpha:!0,antialias:!0});u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.setClearColor(0,0),u.outputColorSpace=Z,u.toneMapping=J,u.toneMappingExposure=1.05;const g=new O,y=new U(50,window.innerWidth/window.innerHeight,.1,100);y.position.set(0,.6,7.5),y.lookAt(0,0,0),g.add(new q(16777215,.75)),g.add(new Q(16773848,8293455,.55));const d=new I(16773328,2.1);d.position.set(4,7,5),g.add(d);const o=new I(14212288,.6);o.position.set(-5,1,4),g.add(o);const t=new F,i=new F,n=new F,x=new F;t.add(i),i.add(n),n.add(x),g.add(t),new V().load(ce,e=>{const f=e.scene;f.rotation.z=Math.PI/2,C(f,2.6),x.add(f),P()},void 0,()=>{const e=z();C(e,2.6),x.add(e),P()});const w=.055;let h=0,r=0;window.addEventListener("mousemove",T);let m=0;(function e(){m=requestAnimationFrame(e),t.rotation.x+=(h-t.rotation.x)*.05,t.rotation.y+=(r-t.rotation.y)*.05,u.render(g,y)})(),window.addEventListener("resize",b),document.addEventListener("astro:before-swap",()=>{cancelAnimationFrame(m),window.removeEventListener("mousemove",T),window.removeEventListener("resize",b),D.getAll().forEach(e=>e.kill()),u.dispose()},{once:!0})}const j=c.utils.toArray(".wine-card"),A=c.utils.toArray(".content-section");if(j.length)if(K)c.set(j,{"--stain":1}),c.set(A,{"--stain":1});else{let z=function(d,o){u.load(d,t=>{const i=t.scene,n=new $().setFromObject(i),x=n.getSize(new G),w=n.getCenter(new G),h=o.height/x.y;i.scale.setScalar(h),i.position.set(-w.x*h,-w.y*h,-w.z*h);const r=new F;r.add(i),b.push({obj:r,xFrac:o.xFrac,parkX:o.parkX,parkY:o.parkY,phase:o.phase,riding:!0})})},C=function(){const d=[],o=t=>{const i=7+Math.random()*5,n=document.createElement("span");n.style.cssText=`position:absolute;bottom:${(-i*.8).toFixed(1)}px;left:${(4+Math.random()*92).toFixed(1)}%;width:${i.toFixed(1)}px;height:${(i*1.3).toFixed(1)}px;pointer-events:none;transform:scale(0);transform-origin:top center;`,n.innerHTML='<svg width="100%" height="100%" viewBox="0 0 24 30"><path d="M12 0 C12 6 3 14 3 21 a9 9 0 0 0 18 0 C21 14 12 6 12 0 Z" fill="#5E2333"/><ellipse cx="8.5" cy="21" rx="2.2" ry="3.2" fill="#FBF9F3" opacity="0.35"/></svg>',t.appendChild(n),c.timeline({onComplete:()=>n.remove()}).to(n,{scale:1,duration:.55,ease:"power2.out"}).to(n,{y:70+Math.random()*60,scaleY:1.18,duration:.65,ease:"power2.in"}).to(n,{opacity:0,duration:.22},"-=0.22")};A.forEach((t,i)=>{getComputedStyle(t).position==="static"&&(t.style.position="relative");const n=()=>{o(t),d[i]=window.setTimeout(n,250+Math.random()*700)};d[i]=window.setTimeout(n,100+Math.random()*400)}),document.addEventListener("astro:before-swap",()=>d.forEach(t=>clearTimeout(t)),{once:!0})},P=function(){const d=document.createElement("canvas");d.style.cssText="position:fixed;inset:0;width:100%;height:100%;z-index:90;pointer-events:none;",document.body.appendChild(d);const o=new _({canvas:d,alpha:!0,antialias:!0});o.setSize(window.innerWidth,window.innerHeight),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.autoClear=!1;const t={uTime:{value:0},uLevel:{value:-.15},uAspect:{value:window.innerWidth/window.innerHeight}},i=new O,n=new k(new ae(2,2),new se({uniforms:t,vertexShader:g,fragmentShader:y,transparent:!0,depthTest:!1}));i.add(n);const x=new re,w=new O;w.add(new q(16777215,.8));const h=new I(16773328,1.8);h.position.set(3,6,5),w.add(h);const r=new U(50,window.innerWidth/window.innerHeight,.1,50);r.position.z=6;let m=Math.tan(r.fov*Math.PI/360)*r.position.z,e=m*r.aspect;const f=(l,v)=>{const S=(l/e+1)/2*t.uAspect.value,p=.02*Math.sin(S*5+v*1.3)+.012*Math.sin(S*11-v*2.1+1.7)+.006*Math.sin(S*23+v*3.4+4.2);return((t.uLevel.value+p)*2-1)*m};let M=!1;const L=l=>{l.riding=!1,c.to(l.obj.position,{x:l.parkX*e,y:l.parkY*m,duration:1.8,ease:"power2.inOut"}),c.to(l.obj.rotation,{z:0,duration:1.8,ease:"power2.out"}),c.to(l.obj.position,{y:`+=${m*.02}`,duration:2.6,ease:"sine.inOut",repeat:-1,yoyo:!0,delay:1.9+l.phase*.2})};let s=0;const a=performance.now();let Y=0;(function l(){s=requestAnimationFrame(l);const v=(performance.now()-a)/1e3,S=v-Y;Y=v,t.uTime.value=v;for(const p of b)if(p.obj.parent||w.add(p.obj),p.obj.rotation.y+=S*(p.riding?.5:.12),p.riding){if(M){L(p);continue}p.obj.position.x=p.xFrac*e,p.obj.position.y=f(p.obj.position.x,v),p.obj.rotation.z=.1*Math.sin(v*1.6+p.phase)}o.clear(),o.render(i,x),o.clearDepth(),o.render(w,r)})();const B=()=>{o.setSize(window.innerWidth,window.innerHeight),t.uAspect.value=window.innerWidth/window.innerHeight,r.aspect=t.uAspect.value,r.updateProjectionMatrix(),m=Math.tan(r.fov*Math.PI/360)*r.position.z,e=m*r.aspect};window.addEventListener("resize",B);let X=!1;const R=window.matchMedia("(max-width: 768px)"),H=()=>{d.style.zIndex=X&&R.matches?"2":"90"};R.addEventListener("change",H);const N=()=>{cancelAnimationFrame(s),window.removeEventListener("resize",B),R.removeEventListener("change",H),o.dispose(),d.remove()};document.addEventListener("astro:before-swap",N,{once:!0}),c.timeline({onComplete:()=>{n.visible=!1,X=!0,H(),C()}}).to(t.uLevel,{value:1.12,duration:2,ease:"power1.inOut"}).to(T,{"--stain":1,duration:1.6,ease:"power1.inOut"}).to(t.uLevel,{value:-.15,duration:1.7,ease:"power2.in",onStart:()=>{M=!0;for(const l of b)l.riding&&L(l)}},"-=1.0")};const T=[...j,...A],b=[],u=new V;z("/models/Grapes.glb",{xFrac:-.38,parkX:-.76,parkY:-.6,height:.9,phase:0}),z("/models/Wine_bottle.glb",{xFrac:.34,parkX:.76,parkY:-.52,height:1.7,phase:2.1});const g=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position.xy, 0.0, 1.0);
      }
    `,y=`
      precision highp float;
      uniform float uTime;
      uniform float uLevel;
      uniform float uAspect;
      varying vec2 vUv;

      float hash(float n) { return fract(sin(n) * 43758.5453123); }

      void main() {
        float x = vUv.x * uAspect;

        // Surface: three sine layers drifting at different speeds
        float w = 0.020 * sin(x * 5.0  + uTime * 1.3)
                + 0.012 * sin(x * 11.0 - uTime * 2.1 + 1.7)
                + 0.006 * sin(x * 23.0 + uTime * 3.4 + 4.2);
        float surface = uLevel + w;
        float depth = surface - vUv.y;
        if (depth < 0.0) discard;

        // Bordeaux, darker with depth
        vec3 col = mix(vec3(0.369, 0.137, 0.200),
                       vec3(0.180, 0.027, 0.082),
                       smoothstep(0.0, 0.9, depth));

        // Meniscus: pale glowing lip hugging the surface
        col = mix(col, vec3(0.790, 0.420, 0.500), exp(-depth * 55.0) * 0.85);

        // Bubbles, wobbling as they rise, capped below the surface
        for (int i = 0; i < 22; i++) {
          float fi = float(i);
          float sp = 0.05 + hash(fi * 3.17) * 0.10;
          float bx = hash(fi * 7.31) * uAspect + 0.012 * sin(uTime * 2.0 + fi * 1.7);
          float by = fract(hash(fi * 9.73) + uTime * sp) * max(surface - 0.05, 0.0);
          float r = 0.004 + hash(fi * 5.53) * 0.005;
          col += smoothstep(r, r * 0.35, length(vec2(x, vUv.y) - vec2(bx, by))) * 0.18;
        }

        // Slightly translucent lip, near-opaque body
        gl_FragColor = vec4(col, mix(0.82, 0.97, smoothstep(0.0, 0.30, depth)));
      }
    `;D.create({trigger:A[1]??".flight-section",start:"top 75%",once:!0,onEnter:P})}
