import{aA as m,ah as q,j as H,ag as P,a5 as X,az as W,af as K,A as J,D as z,c as Q,ax as F,f as Z,e as $,a8 as ee,a9 as te,i as Y,a4 as ne,aw as O,ai as ie,U,a6 as oe,I as ae,as as se,a3 as re,V as ce,ad as le}from"./index.astro_astro_type_script_index_0_lang.Djxr6AHo.js";import{G as de}from"./GLTFLoader.DjGnPmi_.js";import"./hoisted.DUVjWKjl.js";import"./party-egg.CMa5clQ5.js";m.registerPlugin(q);{const e=document.getElementById("three-canvas"),t=e.dataset.model,n=new H(e.dataset.primary),r=new P,i=new X(60,window.innerWidth/window.innerHeight,.1,500);i.position.z=8;const c=new W({canvas:e,alpha:!0,antialias:!0});c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2)),c.outputColorSpace=K,r.add(new J(16777215,1));const v=new z(16766720,2);v.position.set(5,8,6),r.add(v);const f=new z(n,.6);f.position.set(-5,-3,-4),r.add(f);let o=null;new de().load(t,a=>{o=a.scene;const l=new Q().setFromObject(o),M=l.getCenter(new F);o.position.sub(M);const y=Math.max(...l.getSize(new F).toArray());o.scale.setScalar(5/y),r.add(o)});const w=1800,u=new Float32Array(w*3);for(let a=0;a<w;a++){const l=4+Math.random()*8,M=Math.random()*Math.PI*2,y=Math.acos(2*Math.random()-1);u[a*3]=l*Math.sin(y)*Math.cos(M),u[a*3+1]=l*Math.sin(y)*Math.sin(M),u[a*3+2]=l*Math.cos(y)}const T=new Z;T.setAttribute("position",new $(u,3));const d=new ee(T,new te({size:.035,color:n,transparent:!0,opacity:.4}));r.add(d);let A=0,B=0;window.addEventListener("mousemove",a=>{A=(a.clientX/window.innerWidth-.5)*1.5,B=-(a.clientY/window.innerHeight-.5)*1.5});const _=new Y;(function a(){requestAnimationFrame(a);const l=_.getElapsedTime();o&&(o.rotation.y=l*.25,o.rotation.z=Math.sin(l*.4)*.08),d.rotation.y=l*.04,i.position.x+=(A-i.position.x)*.05,i.position.y+=(B-i.position.y)*.05,i.lookAt(0,0,0),c.render(r,i)})(),window.addEventListener("resize",()=>{i.aspect=window.innerWidth/window.innerHeight,i.updateProjectionMatrix(),c.setSize(window.innerWidth,window.innerHeight),c.setPixelRatio(Math.min(window.devicePixelRatio,2))})}{let e=function(d,A){v[o].set(d,A),f[o]=w.uniforms.uTime.value,o=(o+1)%c};const t=document.getElementById("water-canvas");document.body.insertBefore(t,document.getElementById("three-canvas"));const n=new P,r=new ne(-1,1,1,-1,0,1),i=new W({canvas:t,alpha:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(Math.min(window.devicePixelRatio,1.5));const c=12,v=Array.from({length:c},()=>new O(-2,-2)),f=new Float32Array(c).fill(-10);let o=0;const w=new ie({transparent:!0,uniforms:{uTime:{value:0},uRipples:{value:v},uRippleTimes:{value:f},uAspect:{value:window.innerWidth/window.innerHeight}},vertexShader:`
      varying vec2 vUv;
      void main() { vUv = uv; gl_Position = vec4(position, 1.0); }
    `,fragmentShader:`
      precision mediump float;
      uniform float uTime;
      uniform vec2  uRipples[12];
      uniform float uRippleTimes[12];
      uniform float uAspect;
      varying vec2  vUv;

      void main() {
        vec2 uv = vec2(vUv.x * uAspect, vUv.y);
        float w = 0.0;

        // Ambient river motion
        w += sin(uv.x * 4.0 + uTime * 0.40) * sin(uv.y * 3.2 + uTime * 0.30) * 0.040;
        w += sin(uv.x * 7.5 - uTime * 0.55 + uv.y * 5.0)                     * 0.025;
        w += cos(uv.x * 5.2 + uv.y * 8.1  - uTime * 0.38)                    * 0.018;

        // Interactive ripples
        for (int i = 0; i < 12; i++) {
          float age = uTime - uRippleTimes[i];
          if (age < 0.0 || age > 3.5) continue;
          vec2  rp   = vec2(uRipples[i].x * uAspect, uRipples[i].y);
          float d    = distance(uv, rp);
          float r    = age * 0.38;
          float hw   = 0.07;
          float ring = 1.0 - smoothstep(0.0, hw, abs(d - r));
          float fade = exp(-age * 1.3);
          w += sin((d - r) / hw * 3.14159) * ring * fade * 0.22;
        }

        vec3 deep    = vec3(0.10, 0.38, 0.50);
        vec3 shallow = vec3(0.52, 0.82, 0.88);
        vec3 crest   = vec3(1.00, 0.95, 0.85);
        vec3 col     = mix(deep, shallow, clamp(0.4 + w * 2.5, 0.0, 1.0));
        col          = mix(col, crest,   clamp((w - 0.06) * 5.0, 0.0, 1.0));

        gl_FragColor = vec4(col, 0.55);
      }
    `});n.add(new U(new oe(2,2),w));let u=0;window.addEventListener("scroll",()=>{const d=performance.now();d-u<350||(u=d,e(Math.random(),.2+Math.random()*.6))},{passive:!0}),window.addEventListener("resize",()=>{i.setSize(window.innerWidth,window.innerHeight),w.uniforms.uAspect.value=window.innerWidth/window.innerHeight});const T=new Y;(function d(){requestAnimationFrame(d),w.uniforms.uTime.value=T.getElapsedTime(),i.render(n,r)})()}const g=document.getElementById("interact-canvas"),S=420,D=g.offsetWidth||window.innerWidth,j=new P,x=new X(55,D/S,.1,100);x.position.z=5.5;const E=new W({canvas:g,alpha:!0,antialias:!0});E.setSize(D,S);E.setPixelRatio(Math.min(window.devicePixelRatio,2));const we=new H("#FF6B35"),ue=[{geo:new ae(1.5,0),x:-2.8,y:0},{geo:new se(1,.32,80,12),x:0,y:0},{geo:new re(1.5),x:2.8,y:0}],V=ue.map(({geo:e,x:t,y:n})=>{const r=new ce({color:we,wireframe:!0,transparent:!0,opacity:.75}),i=new U(e,r);return i.position.set(t,n,0),j.add(i),i}),k=new le,L=new O;let s=null,p=0,h=0;function me(e,t){const n=g.getBoundingClientRect();L.x=(e-n.left)/n.width*2-1,L.y=-((t-n.top)/n.height)*2+1}function N(e,t){me(e,t),k.setFromCamera(L,x);const n=k.intersectObjects(V);return n.length?n[0].object:null}g.addEventListener("mousedown",e=>{const t=N(e.clientX,e.clientY);t&&(s=t,p=e.clientX,h=e.clientY)});window.addEventListener("mousemove",e=>{s&&(s.rotation.y+=(e.clientX-p)*.013,s.rotation.x+=(e.clientY-h)*.013,p=e.clientX,h=e.clientY)});window.addEventListener("mouseup",()=>{s=null});g.addEventListener("touchstart",e=>{const t=e.touches[0],n=N(t.clientX,t.clientY);n&&(s=n,p=t.clientX,h=t.clientY)},{passive:!0});window.addEventListener("touchmove",e=>{if(!s)return;const t=e.touches[0];s.rotation.y+=(t.clientX-p)*.013,s.rotation.x+=(t.clientY-h)*.013,p=t.clientX,h=t.clientY},{passive:!0});window.addEventListener("touchend",()=>{s=null});(function e(){requestAnimationFrame(e),V.forEach((t,n)=>{t!==s&&(t.rotation.y+=.004+n*.0015,t.rotation.x+=.002)}),E.render(j,x)})();window.addEventListener("resize",()=>{const e=g.offsetWidth||window.innerWidth;E.setSize(e,S),x.aspect=e/S,x.updateProjectionMatrix()});const C=document.querySelector(".draw-text");C&&document.fonts.ready.then(()=>{const e=C.getComputedTextLength();m.set(C,{strokeDasharray:e,strokeDashoffset:e}),m.to(C,{strokeDashoffset:0,duration:4,ease:"power2.inOut",scrollTrigger:{trigger:".draw-svg-wrapper",start:"top 80%",toggleActions:"play none none none"}})});const R=document.getElementById("typing-text"),b='We also learnt how to animate text, such as this "typing" animation, move, and make elements appear and disappear, among other things. This knowledge will allow us to create more attractive web pages like this one.',I={n:0};R.style.color="#FF6B35";m.timeline({scrollTrigger:{trigger:R,start:"top 80%",toggleActions:"play none none none"}}).to(I,{n:b.length,duration:4,ease:"none",onUpdate(){R.textContent=b.slice(0,Math.round(I.n))},onComplete(){m.to(R,{color:"#FF6B35",duration:.6})}});const G=document.getElementById("temperature");m.to(G,{scale:1.2,color:"#ff0000",duration:.8,ease:"power2.inOut",scrollTrigger:{trigger:G,start:"top 80%",toggleActions:"play none none none"}});
