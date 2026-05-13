const weatherThemes = {
  "01d": {
    "background-gradient": "#217bc0, #4da8ff",
    "accent-color": "#8ebbf0",
    "border-color": "#cce3ff",
    "theme-description": "Clear light stretches across the Sound, sharpening every ridge and ripple.",
    "theme-quote": "Calm, open-air weather with bright visibility and cool shade."
  },
  "01n": {
    "background-gradient": "#000814, #041830",
    "accent-color": "#0c2f55",
    "border-color": "#1f4876",
    "theme-description": "A quiet night settles over the water, stars flickering between the evergreens.",
    "theme-quote": "Still and crisp, colder than it looks with excellent visibility."
  },
  "02d": {
    "background-gradient": "#ffb347, #ffcf71",
    "accent-color": "#87cefa",
    "border-color": "#bce0fd",
    "theme-description": "Soft clouds drift slowly, letting sunlight spill across the hills in warm bursts.",
    "theme-quote": "Bright with passing shade and a mild, steady breeze."
  },
  "02n": {
    "background-gradient": "#1e3c72, #2c3e50",
    "accent-color": "#4f7aa8",
    "border-color": "#6f8fb4",
    "theme-description": "Moonlight slips between scattered clouds, silvering the edges of the skyline.",
    "theme-quote": "Gentle and cool with shifting moonlight and light winds."
  },
  "03d": {
    "background-gradient": "#95a5a6, #b0bcbd",
    "accent-color": "#cfd3d6",
    "border-color": "#f7f7f7",
    "theme-description": "Gray layers drift overhead, softening the distance and quieting the landscape.",
    "theme-quote": "Muted daylight with cooler air and steady cloud cover."
  },
  "03n": {
    "background-gradient": "#20282e, #2c363d",
    "accent-color": "#34495e",
    "border-color": "#49627a",
    "theme-description": "Clouds settle low over the city, dimming the night into a calm hush.",
    "theme-quote": "Cozy and still with stable temperatures and low wind."
  },
  "04d": {
    "background-gradient": "#5b6166, #6e7377",
    "accent-color": "#9aa0a6",
    "border-color": "#b2bcc0",
    "theme-description": "A thick gray sky stretches from ridge to ridge, softening every shadow.",
    "theme-quote": "Brooding but steady with cooler air and diffused light."
  },
  "04n": {
    "background-gradient": "#1e2226, #2c3237",
    "accent-color": "#3a3a3a",
    "border-color": "#4d4d4d",
    "theme-description": "Low clouds mute the night, turning the Sound into a quiet silhouette.",
    "theme-quote": "Still and heavy with warmer air and low visibility."
  },
  "09d": {
    "background-gradient": "#2f5d73, #4b79a1",
    "accent-color": "#6c8ea0",
    "border-color": "#93b4c8",
    "theme-description": "Light rain drifts across the water, softening the edges of the world.",
    "theme-quote": "Gentle showers with damp roads and mild wind."
  },
  "09n": {
    "background-gradient": "#1c2833, #2a3d4c",
    "accent-color": "#3b4652",
    "border-color": "#5d6d7e",
    "theme-description": "Rain taps softly on rooftops, glowing under scattered streetlights.",
    "theme-quote": "Soothing drizzle with slick surfaces and quiet air."
  },
  "10d": {
    "background-gradient": "#1b4f72, #2f8f83",
    "accent-color": "#43cea2",
    "border-color": "#6fd1b8",
    "theme-description": "Steady rain washes the Sound in silver, blurring the hills into watercolor.",
    "theme-quote": "Persistent rainfall with reduced visibility and cooler temps."
  },
  "10n": {
    "background-gradient": "#0a2a43, #1a3f59",
    "accent-color": "#2b5876",
    "border-color": "#407699",
    "theme-description": "A cool rain settles over the night, softening the glow of the city.",
    "theme-quote": "Calm but damp with slick roads and steady showers."
  },
  "11d": {
    "background-gradient": "#1e3c72, #2a5298",
    "accent-color": "#3a6073",
    "border-color": "#5786a1",
    "theme-description": "Thunder rolls across the Sound, shaking the stillness with sudden energy.",
    "theme-quote": "Electric and unstable with gusts, lightning, and rapid changes."
  },
  "11n": {
    "background-gradient": "#000000, #111d33",
    "accent-color": "#1b335c",
    "border-color": "#36538a",
    "theme-description": "Lightning flickers behind low clouds, painting the night in brief flashes.",
    "theme-quote": "Charged atmosphere with sudden wind and thunder."
  },
  "13d": {
    "background-gradient": "#aed8f2, #bde0fe",
    "accent-color": "#d4ecff",
    "border-color": "#eaf6ff",
    "theme-description": "Snow drifts quietly across the landscape, softening every sound and shape.",
    "theme-quote": "Cold and bright with slippery surfaces and reduced traction."
  },
  "13n": {
    "background-gradient": "#4d5e56, #6d8079",
    "accent-color": "#8fae8f",
    "border-color": "#a7c0a9",
    "theme-description": "Snowfall glows under streetlights, turning the night into a quiet lantern.",
    "theme-quote": "Hushed and icy with freezing patches and low visibility."
  },
  "50d": {
    "background-gradient": "#8c8c8c, #9e9e9e",
    "accent-color": "#c8c8c8",
    "border-color": "#e0e0e0",
    "theme-description": "Fog drifts through the lowlands, softening the world into muted shapes.",
    "theme-quote": "Misty and cool with limited visibility and slower travel."
  },
  "50n": {
    "background-gradient": "#2b3034, #3c4247",
    "accent-color": "#5a5a5a",
    "border-color": "#7f8c95",
    "theme-description": "Dense fog turns the night into a soft blur of light and shadow.",
    "theme-quote": "Dreamlike but risky with very low visibility."
  }
};


function getWeatherTheme(code){return weatherThemes[code]||weatherThemes["01d"];}

function applyThemeToRoot(icon){
  const theme=getWeatherTheme(icon);if(!theme)return;
  const root=document.documentElement;
  const pair=String(theme["background-gradient"]||"#111, #222").split(",").map(s=>s.trim());
  root.style.setProperty("--background-gradient-1",pair[0]||"#111");
  root.style.setProperty("--background-gradient-2",pair[1]||"#222");
  root.style.setProperty("--background-gradient",`linear-gradient(160deg, ${pair[0]||"#111"} 0%, ${pair[1]||"#222"} 100%)`);
  root.style.setProperty("--accent-color",theme["accent-color"]||"#333");
  root.style.setProperty("--border-color",theme["border-color"]||"#444");
  
}

const CLOUD_VERTEX_SHADER = `#version 300 es
precision mediump float;
const vec2 positions[6] = vec2[6](
  vec2(-1.0,-1.0), vec2( 1.0,-1.0), vec2(-1.0, 1.0),
  vec2(-1.0, 1.0), vec2( 1.0,-1.0), vec2( 1.0, 1.0)
);
out vec2 vUv;
void main() {
  vUv = positions[gl_VertexID] * 0.5 + 0.5;
  gl_Position = vec4(positions[gl_VertexID], 0.0, 1.0);
}`;

const HIGH_CLOUD_FRAG = `#version 300 es
precision highp float;
uniform float time; uniform vec2 vp; uniform float coverage; uniform float nightFactor;
in vec2 vUv; out vec4 fragColor;
float hash(vec2 p){ p=fract(p*vec2(127.1,311.7)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p),f=fract(p); float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f); return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y; }
float fbmStreak(vec2 p){ float v=0.0,amp=0.65; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<6;i++){v+=amp*noise(p);p=m*p;amp*=0.50;} return v; }
void main(){
  vec2 p=vUv*2.0-1.0; p.x*=vp.x/vp.y;
  vec2 q=vec2(p.x*1.2+time*0.055,p.y*0.6-time*0.012)*2.2;
  vec2 warp=vec2(noise(q*0.4+vec2(1.3,7.8))-0.5,noise(q*0.4+vec2(5.2,2.1))-0.5);
  float n1=fbmStreak(q+warp*1.8),n2=fbmStreak(q*1.3+vec2(time*0.02,-time*0.015)+warp*0.9);
  float density=n1*0.85+n2*0.75;
  float threshold=mix(0.68,0.34,coverage);
  density=smoothstep(threshold,threshold+0.28,density)*smoothstep(-0.4,0.65,p.y)*smoothstep(1.1,0.5,p.y);
  vec3 col=mix(vec3(0.96,0.97,1.00),vec3(0.18,0.22,0.30),nightFactor);
  fragColor=vec4(col,clamp(density*mix(0.92,0.48,nightFactor),0.0,1.0));
}`;

const MID_CLOUD_FRAG = `#version 300 es
precision highp float;
uniform float time; uniform vec2 vp; uniform float coverage; uniform float nightFactor;
in vec2 vUv; out vec4 fragColor;
float hash(vec2 p){ p=fract(p*vec2(123.34,456.21)); p+=dot(p,p+45.32); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p),f=fract(p); float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f); return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y; }
float fbm(vec2 p){ float v=0.0,amp=0.55; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<7;i++){v+=amp*noise(p);p=m*p;amp*=0.50;} return v; }
float turb(vec2 p){ float t=0.0,amp=1.0; for(int i=0;i<4;i++){t+=abs(noise(p)-0.5)*amp;p*=2.2;amp*=0.5;} return t; }
void main(){
  vec2 p=vUv*2.0-1.0; p.x*=vp.x/vp.y;
  vec2 q=vec2(p.x*0.7-time*0.032,p.y-time*0.028)*1.6;
  vec2 warp=vec2(noise(q*0.35+vec2(2.4,0.7))-0.5,noise(q*0.35+vec2(0.3,6.1))-0.5);
  vec2 qw=q+warp*2.2;
  float n1=fbm(qw),n2=fbm(qw*1.4+vec2(time*0.018,-time*0.014)),n3=fbm(qw*0.65+vec2(-time*0.022,time*0.025)),tw=turb(qw*0.7+time*0.012);
  float density=n1*0.45+n2*0.30+n3*0.25; density=mix(density,tw,0.20); density=pow(density,0.72);
  density=smoothstep(mix(0.58,0.20,coverage),mix(0.84,0.74,coverage),density)*smoothstep(-0.85,-0.20,p.y)*smoothstep(1.0,0.45,p.y);
  vec3 col=mix(vec3(0.94,0.95,0.97),vec3(0.14,0.17,0.24),nightFactor);
  float cv=noise(qw*0.4)*0.08; col-=vec3(cv*0.4,cv*0.25,0.0)*(1.0-nightFactor);
  fragColor=vec4(col,clamp(density*mix(0.95,0.52,nightFactor),0.0,1.0));
}`;

const STORM_CLOUD_FRAG = `#version 300 es
precision highp float;
uniform float time; uniform vec2 vp; uniform float coverage; uniform float nightFactor;
in vec2 vUv; out vec4 fragColor;
float hash(vec2 p){ p=fract(p*vec2(251.832,389.154)); p+=dot(p,p+67.41); return fract(p.x*p.y); }
float noise(vec2 p){ vec2 i=floor(p),f=fract(p); float a=hash(i),b=hash(i+vec2(1.0,0.0)),c=hash(i+vec2(0.0,1.0)),d=hash(i+vec2(1.0,1.0)); vec2 u=f*f*(3.0-2.0*f); return mix(a,b,u.x)+(c-a)*u.y*(1.0-u.x)+(d-b)*u.x*u.y; }
float fbm(vec2 p){ float v=0.0,amp=0.6; mat2 m=mat2(1.6,1.2,-1.2,1.6); for(int i=0;i<8;i++){v+=amp*noise(p);p=m*p;amp*=0.52;} return v; }
float turb(vec2 p){ float t=0.0,amp=1.0; for(int i=0;i<5;i++){t+=abs(noise(p)-0.5)*amp;p*=2.3;amp*=0.48;} return t; }
void main(){
  vec2 p=vUv*2.0-1.0; p.x*=vp.x/vp.y;
  vec2 q=vec2(p.x*0.55+time*0.018,p.y-time*0.022)*1.4;
  vec2 warp=vec2(noise(q*0.3+vec2(3.1,1.4))-0.5,noise(q*0.3+vec2(6.7,4.2))-0.5);
  vec2 qw=q+warp*2.5;
  float n1=fbm(qw),n2=fbm(qw*1.3+vec2(time*0.012,-time*0.010)),n3=fbm(qw*0.6+vec2(-time*0.015,time*0.018)),tw=turb(qw*0.75+time*0.008);
  float density=n1*0.40+n2*0.30+n3*0.30; density=mix(density,tw,0.30); density=pow(density,0.65);
  density=smoothstep(mix(0.62,0.16,coverage),mix(0.88,0.60,coverage),density)*smoothstep(-1.0,-0.45,p.y)*smoothstep(1.0,mix(0.30,-0.10,coverage),p.y);
  vec3 col=mix(mix(vec3(0.88,0.89,0.91),vec3(0.52,0.54,0.58),coverage),vec3(0.08,0.09,0.13),nightFactor);
  col=mix(col,vec3(0.04,0.05,0.08),coverage*nightFactor*0.35);
  float maxAlpha=mix(mix(0.55,0.96,coverage),mix(0.42,0.88,coverage),nightFactor);
  fragColor=vec4(col,clamp(density*maxAlpha,0.0,1.0));
}`;

class WebGL2CloudLayer {
  constructor(canvasId,fragmentShaderSrc){this.canvasId=canvasId;this.fragSrc=fragmentShaderSrc;this.canvas=null;this.gl=null;this.program=null;this.startTime=Date.now();this.vao=null;this.uTime=null;this.uVp=null;this.uCoverage=null;this.uNightFactor=null;this.coverage=0;this.nightFactor=0;this.running=false;this._resizeQueued=false;}
  _compile(src,type){const s=this.gl.createShader(type);this.gl.shaderSource(s,src);this.gl.compileShader(s);if(!this.gl.getShaderParameter(s,this.gl.COMPILE_STATUS))console.error(`[CloudLayer ${this.canvasId}]`,this.gl.getShaderInfoLog(s));return s;}
  _link(){const g=this.gl;this.program=g.createProgram();g.attachShader(this.program,this._compile(CLOUD_VERTEX_SHADER,g.VERTEX_SHADER));g.attachShader(this.program,this._compile(this.fragSrc,g.FRAGMENT_SHADER));g.linkProgram(this.program);if(!g.getProgramParameter(this.program,g.LINK_STATUS))console.error(`[CloudLayer ${this.canvasId}]`,g.getProgramInfoLog(this.program));this.uTime=g.getUniformLocation(this.program,"time");this.uVp=g.getUniformLocation(this.program,"vp");this.uCoverage=g.getUniformLocation(this.program,"coverage");this.uNightFactor=g.getUniformLocation(this.program,"nightFactor");}
  _queueResize(){if(this._resizeQueued)return;this._resizeQueued=true;requestAnimationFrame(()=>{this._resizeQueued=false;this._resize();});}
  _resize(){if(!this.canvas||!this.gl)return;const cw=this.canvas.clientWidth||0,ch=this.canvas.clientHeight||0;if(cw<=0||ch<=0)return;const dpr=Math.min(window.devicePixelRatio||1,2);this.canvas.width=Math.floor(cw*dpr);this.canvas.height=Math.floor(ch*dpr);this.gl.viewport(0,0,this.canvas.width,this.canvas.height);}
  init(){this.canvas=document.getElementById(this.canvasId);if(!this.canvas){console.warn(`[CloudLayer] #${this.canvasId} not found`);return false;}this.gl=this.canvas.getContext("webgl2");if(!this.gl){console.warn(`[CloudLayer] WebGL2 unavailable on #${this.canvasId}`);return false;}this.vao=this.gl.createVertexArray();this.gl.bindVertexArray(this.vao);this._resize();window.addEventListener("resize",()=>this._queueResize());this.gl.enable(this.gl.BLEND);this.gl.blendFunc(this.gl.SRC_ALPHA,this.gl.ONE_MINUS_SRC_ALPHA);this._link();this.running=true;this._loop();return true;}
  _loop(){if(!this.running)return;const g=this.gl;const cssOpacity=this.canvas?parseFloat(getComputedStyle(this.canvas).opacity||"1"):1;this._queueResize();if(cssOpacity>0.001){g.clearColor(0,0,0,0);g.clear(g.COLOR_BUFFER_BIT);g.useProgram(this.program);if(this.vao)g.bindVertexArray(this.vao);g.uniform1f(this.uTime,(Date.now()-this.startTime)/1000);g.uniform2fv(this.uVp,new Float32Array([this.canvas.width,this.canvas.height]));g.uniform1f(this.uCoverage,this.coverage);g.uniform1f(this.uNightFactor,this.nightFactor);g.drawArrays(g.TRIANGLES,0,6);}requestAnimationFrame(()=>this._loop());}
  setCoverage(c){this.coverage=Math.max(0,Math.min(1,c));}
  setNightFactor(n){this.nightFactor=Math.max(0,Math.min(1,n));}
}

const multiCloudController = (() => {
  const high=new WebGL2CloudLayer("cloud-high-canvas",HIGH_CLOUD_FRAG);
  const mid=new WebGL2CloudLayer("cloud-mid-canvas",MID_CLOUD_FRAG);
  const storm=new WebGL2CloudLayer("cloud-storm-canvas",STORM_CLOUD_FRAG);
  const ICON_COVERAGE={"01d":{high:0.00,mid:0.00,storm:0.00},"01n":{high:0.00,mid:0.00,storm:0.00},"02d":{high:0.80,mid:0.15,storm:0.00},"02n":{high:0.65,mid:0.12,storm:0.00},"03d":{high:0.60,mid:0.75,storm:0.00},"03n":{high:0.35,mid:0.70,storm:0.00},"04d":{high:0.35,mid:0.90,storm:0.00},"04n":{high:0.30,mid:0.85,storm:0.00},"09d":{high:0.25,mid:0.45,storm:0.78},"09n":{high:0.20,mid:0.40,storm:0.75},"10d":{high:0.30,mid:0.55,storm:0.85},"10n":{high:0.25,mid:0.50,storm:0.80},"11d":{high:0.15,mid:0.35,storm:0.95},"11n":{high:0.10,mid:0.30,storm:0.92},"13d":{high:0.18,mid:0.82,storm:0.75},"13n":{high:0.15,mid:0.78,storm:0.70},"50d":{high:0.55,mid:0.40,storm:0.12},"50n":{high:0.40,mid:0.30,storm:0.18}};
  const ICON_OPACITY={"01d":{high:0.00,mid:0.00,storm:0.00},"01n":{high:0.00,mid:0.00,storm:0.00},"02d":{high:0.75,mid:0.30,storm:0.00},"02n":{high:0.65,mid:0.25,storm:0.00},"03d":{high:0.60,mid:0.85,storm:0.00},"03n":{high:0.50,mid:0.75,storm:0.00},"04d":{high:0.55,mid:0.95,storm:0.00},"04n":{high:0.45,mid:0.85,storm:0.00},"09d":{high:0.40,mid:0.60,storm:0.82},"09n":{high:0.30,mid:0.50,storm:0.78},"10d":{high:0.45,mid:0.70,storm:0.88},"10n":{high:0.35,mid:0.60,storm:0.85},"11d":{high:0.25,mid:0.50,storm:0.95},"11n":{high:0.20,mid:0.45,storm:0.92},"13d":{high:0.25,mid:0.88,storm:0.80},"13n":{high:0.15,mid:0.78,storm:0.70},"50d":{high:0.55,mid:0.40,storm:0.12},"50n":{high:0.40,mid:0.30,storm:0.18}};
  let currentNight=0;
  const EASE=0.08;
  const opState={current:{high:0,mid:0,storm:0},target:{high:0,mid:0,storm:0}};
  let animating=false;
  function _lerp(a,b,t){return a+(b-a)*t;}
  function _applyOpacity(){const c=opState.current;if(high.canvas)high.canvas.style.opacity=c.high.toFixed(3);if(mid.canvas)mid.canvas.style.opacity=c.mid.toFixed(3);if(storm.canvas)storm.canvas.style.opacity=c.storm.toFixed(3);}
  function _tick(){const c=opState.current,t=opState.target;c.high=_lerp(c.high,t.high,EASE);c.mid=_lerp(c.mid,t.mid,EASE);c.storm=_lerp(c.storm,t.storm,EASE);if(c.high<0.002)c.high=0;if(c.mid<0.002)c.mid=0;if(c.storm<0.002)c.storm=0;_applyOpacity();const done=(c.high===t.high&&c.mid===t.mid&&c.storm===t.storm);if(!done)requestAnimationFrame(_tick);else animating=false;}
  function _startAnim(){if(!animating){animating=true;requestAnimationFrame(_tick);}}
  function init(){high.init();mid.init();storm.init();setByIcon("01d");}
  function setByIcon(icon){const s=String(icon||"01d");const cov=ICON_COVERAGE[s]||ICON_COVERAGE["01d"];const opa=ICON_OPACITY[s]||ICON_OPACITY["01d"];high.setCoverage(cov.high);mid.setCoverage(cov.mid);storm.setCoverage(cov.storm);opState.target.high=opa.high;opState.target.mid=opa.mid;opState.target.storm=opa.storm;_startAnim();high.setNightFactor(currentNight);mid.setNightFactor(currentNight);storm.setNightFactor(currentNight);}
  function setNightFactor(v){currentNight=Math.max(0,Math.min(1,v));high.setNightFactor(currentNight);mid.setNightFactor(currentNight);storm.setNightFactor(currentNight);}
  return {init,setByIcon,setNightFactor};
})();

const fogController = (() => {
  let canvas,gl,program,isVisible=false,startTime=Date.now(),timeLocation,resolutionLocation,vao=null,resizeQueued=false;
  const vertSrc=`#version 300 es\nprecision mediump float;\nconst vec2 positions[6]=vec2[6](vec2(-1.0,-1.0),vec2(1.0,-1.0),vec2(-1.0,1.0),vec2(-1.0,1.0),vec2(1.0,-1.0),vec2(1.0,1.0));\nout vec2 vUv;\nvoid main(){ vUv=positions[gl_VertexID]*0.5+0.5; gl_Position=vec4(positions[gl_VertexID],0.0,1.0); }`;
  const fragSrc=`#version 300 es\nprecision highp float;\nuniform float time; uniform vec2 vp;\nin vec2 vUv; out vec4 fragColor;\nfloat fbmHash(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }\nfloat fbm(vec2 p){ float v=0.,a=0.5; for(int i=0;i<6;i++){v+=a*fbmHash(p);p*=2.;a*=0.45;} return v; }\nvoid main(){\n  vec2 p=vUv*2.-1.; p.x*=vp.x/vp.y;\n  float gradient=mix(p.y*.5+.2,p.y*1.1+.8,fbm(p*0.6));\n  vec2 fast=vec2(p.x*0.9,p.y-time*0.12)*4.5;\n  float ns_a=fbm(fast), ns_b=.8*fbm(fast+ns_a+time*0.8)-.25;\n  float ins=fbm(vec2(ns_b,ns_a)*1.3);\n  float fogDensity=clamp(ins+0.6,0.,1.);\n  float opacity=clamp(fogDensity*(ins-gradient+0.7)*0.65,0.,0.8);\n  fragColor=vec4(0.65,0.67,0.7,opacity);\n}`;
  function compileProgram(vs,fs){const p=gl.createProgram(),v=gl.createShader(gl.VERTEX_SHADER),f=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(v,vs);gl.compileShader(v);gl.attachShader(p,v);gl.shaderSource(f,fs);gl.compileShader(f);gl.attachShader(p,f);gl.linkProgram(p);return p;}
  function queueResize(){if(resizeQueued)return;resizeQueued=true;requestAnimationFrame(()=>{resizeQueued=false;resize();});}
  function resize(){if(!canvas||!gl)return;const cw=canvas.clientWidth||0,ch=canvas.clientHeight||0;if(cw<=0||ch<=0)return;const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.floor(cw*dpr);canvas.height=Math.floor(ch*dpr);gl.viewport(0,0,canvas.width,canvas.height);}
  function render(){if(!gl){requestAnimationFrame(render);return;}queueResize();gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);if(isVisible){gl.useProgram(program);if(vao)gl.bindVertexArray(vao);gl.uniform1f(timeLocation,(Date.now()-startTime)/1000);gl.uniform2fv(resolutionLocation,new Float32Array([canvas.width,canvas.height]));gl.drawArrays(gl.TRIANGLES,0,6);}requestAnimationFrame(render);}
  function init(){canvas=document.getElementById("fog-canvas");if(!canvas)return;gl=canvas.getContext("webgl2");if(!gl)return;vao=gl.createVertexArray();gl.bindVertexArray(vao);resize();window.addEventListener("resize",queueResize);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);program=compileProgram(vertSrc,fragSrc);timeLocation=gl.getUniformLocation(program,"time");resolutionLocation=gl.getUniformLocation(program,"vp");render();}
  function setByIcon(icon){if(!gl)init();if(!canvas)return;isVisible=String(icon).startsWith("50");canvas.style.opacity=isVisible?"0.8":"0";}
  return {init,setByIcon};
})();

const mistController = (() => {
  let canvas,gl,program,isVisible=false,startTime=Date.now(),timeLocation,resolutionLocation,vao=null,resizeQueued=false;
  const vertSrc=`#version 300 es\nprecision mediump float;\nconst vec2 positions[6]=vec2[6](vec2(-1.0,-1.0),vec2(1.0,-1.0),vec2(-1.0,1.0),vec2(-1.0,1.0),vec2(1.0,-1.0),vec2(1.0,1.0));\nout vec2 vUv;\nvoid main(){ vUv=positions[gl_VertexID]*0.5+0.5; gl_Position=vec4(positions[gl_VertexID],0.0,1.0); }`;
  const fragSrc=`#version 300 es\nprecision highp float;\nuniform float time; uniform vec2 vp;\nin vec2 vUv; out vec4 fragColor;\nfloat rand(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }\nfloat noise(vec2 p){\n  vec2 i=floor(p),f=fract(p);\n  float a=rand(i),b=rand(i+vec2(1.0,0.0)),c=rand(i+vec2(0.0,1.0)),d=rand(i+vec2(1.0,1.0));\n  vec2 u=f*f*(3.-2.*f);\n  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;\n}\nvoid main(){\n  vec2 p=vUv; p.x*=vp.x/vp.y;\n  float m1=noise(vec2(p.x+time*0.02,p.y-time*0.01)*8.);\n  float m2=noise(vec2(p.x-time*0.015,p.y+time*0.008)*12.);\n  float alpha=smoothstep(0.3,0.7,m1*0.6+m2*0.4)*0.25;\n  fragColor=vec4(0.85,0.88,0.9,alpha);\n}`;
  function compileProgram(vs,fs){const p=gl.createProgram(),v=gl.createShader(gl.VERTEX_SHADER),f=gl.createShader(gl.FRAGMENT_SHADER);gl.shaderSource(v,vs);gl.compileShader(v);gl.attachShader(p,v);gl.shaderSource(f,fs);gl.compileShader(f);gl.attachShader(p,f);gl.linkProgram(p);return p;}
  function queueResize(){if(resizeQueued)return;resizeQueued=true;requestAnimationFrame(()=>{resizeQueued=false;resize();});}
  function resize(){if(!canvas||!gl)return;const cw=canvas.clientWidth||0,ch=canvas.clientHeight||0;if(cw<=0||ch<=0)return;const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.floor(cw*dpr);canvas.height=Math.floor(ch*dpr);gl.viewport(0,0,canvas.width,canvas.height);}
  function render(){if(!gl){requestAnimationFrame(render);return;}queueResize();gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);if(isVisible){gl.useProgram(program);if(vao)gl.bindVertexArray(vao);gl.uniform1f(timeLocation,(Date.now()-startTime)/1000);gl.uniform2fv(resolutionLocation,new Float32Array([canvas.width,canvas.height]));gl.drawArrays(gl.TRIANGLES,0,6);}requestAnimationFrame(render);}
  function init(){canvas=document.getElementById("mist-canvas");if(!canvas)return;gl=canvas.getContext("webgl2");if(!gl)return;vao=gl.createVertexArray();gl.bindVertexArray(vao);resize();window.addEventListener("resize",queueResize);gl.enable(gl.BLEND);gl.blendFunc(gl.SRC_ALPHA,gl.ONE_MINUS_SRC_ALPHA);program=compileProgram(vertSrc,fragSrc);timeLocation=gl.getUniformLocation(program,"time");resolutionLocation=gl.getUniformLocation(program,"vp");render();}
  function setByIcon(icon){if(!gl)init();if(!canvas)return;const s=String(icon);isVisible=s.startsWith("50")||s.startsWith("09")||s.startsWith("10")||s.startsWith("04");canvas.style.opacity=isVisible?"1":"0";}
  return {init,setByIcon};
})();

const canvasRainController = (() => {
  let canvas,ctx,particles=[],splashes=[],isVisible=false;
  class RainParticle{constructor(w){this.x=Math.random()*w;this.y=-10-Math.random()*100;this.len=6+Math.random()*3;this.speed=5+Math.random()*3;this.opacity=0.25+Math.random()*0.35;this.width=0.8+Math.random()*0.4;this.depth=Math.random();}update(){this.y+=this.speed*(0.7+this.depth*0.6);}draw(c){c.beginPath();c.strokeStyle=`rgba(174,194,224,${this.opacity*(0.6+this.depth*0.4)})`;c.lineWidth=this.width*(0.5+this.depth*0.5);c.lineCap="round";c.moveTo(this.x,this.y);c.lineTo(this.x,this.y+this.len*(0.7+this.depth*0.6));c.stroke();}isOut(h){return this.y>h+20;}}
  class Splash{constructor(x,y){this.x=x;this.y=y;this.radius=0.8+Math.random()*1.2;this.life=0;this.opacity=0.4+Math.random()*0.15;}update(){this.life++;this.radius+=0.4;this.opacity*=0.95;}draw(c){c.beginPath();c.strokeStyle=`rgba(255,255,255,${this.opacity})`;c.lineWidth=0.8;c.arc(this.x,this.y,this.radius,0,Math.PI*2);c.stroke();}isDead(){return this.opacity<0.05;}}
  function resize(){if(!canvas)return;canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight;}
  function render(){if(!ctx){requestAnimationFrame(render);return;}ctx.clearRect(0,0,canvas.width,canvas.height);if(isVisible){for(let i=0;i<4;i++)particles.push(new RainParticle(canvas.width));particles.forEach(p=>{p.update();p.draw(ctx);if(p.y>canvas.height-20&&Math.random()<0.15)splashes.push(new Splash(p.x,canvas.height-5-Math.random()*15));});splashes.forEach(s=>{s.update();s.draw(ctx);});particles=particles.filter(p=>!p.isOut(canvas.height));splashes=splashes.filter(s=>!s.isDead());}requestAnimationFrame(render);}
  function init(){canvas=document.getElementById("rain-canvas");if(!canvas)return;ctx=canvas.getContext("2d");resize();window.addEventListener("resize",resize);render();}
  function setByIcon(icon){if(!ctx)init();if(!canvas)return;const s=String(icon);isVisible=s.startsWith("09")||s.startsWith("10");canvas.classList.toggle("active",isVisible);canvas.style.opacity=isVisible?"1":"0";if(!isVisible){particles=[];splashes=[];}}
  return {init,setByIcon};
})();

const snowController = (() => {
  let canvas,ctx,flakes=[],isVisible=false;
  class Snowflake{constructor(w,h){this.reset(w,h);}reset(w,h){this.radius=2+Math.random()*5;this.x=Math.random()*(w+400)-200;this.y=-30-Math.random()*100;this.speed=0.3+(this.radius/7)*0.8+Math.random()*0.5;this.opacity=0.3+(this.radius/7)*0.6;}update(h){this.y+=this.speed;this.x-=0.5;return this.y<h+10;}draw(c){c.fillStyle=`rgba(255,255,255,${this.opacity})`;c.beginPath();c.arc(this.x,this.y,this.radius,0,Math.PI*2);c.fill();}}
  function resize(){if(!canvas)return;canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight;}
  function animate(){if(isVisible&&ctx){flakes.push(new Snowflake(canvas.width,canvas.height));ctx.clearRect(0,0,canvas.width,canvas.height);for(let i=flakes.length-1;i>=0;i--){if(!flakes[i].update(canvas.height))flakes.splice(i,1);else flakes[i].draw(ctx);}}requestAnimationFrame(animate);}
  function init(){canvas=document.getElementById("snow-canvas");if(!canvas)return;ctx=canvas.getContext("2d");resize();window.addEventListener("resize",resize);animate();}
  function setByIcon(icon){if(!ctx)init();if(!canvas)return;isVisible=String(icon).startsWith("13");canvas.style.opacity=isVisible?"1":"0";if(!isVisible)flakes=[];}
  return {init,setByIcon};
})();

const lightningController = (() => {
  let canvas,ctx,bolts=[],isVisible=false,nextStrikeTime=0;
  class LightningBolt{constructor(w,h){this.x=Math.random()*w;this.points=[[this.x,0]];let cy=0,cx=this.x;while(cy<h){cy+=12+Math.random()*16;cx+=(Math.random()-0.5)*35;this.points.push([cx,cy]);}this.alpha=1;this.life=0;}update(){this.life++;this.alpha-=0.15;}draw(c){c.strokeStyle=`rgba(200,220,255,${this.alpha})`;c.lineWidth=2.5;c.shadowBlur=12;c.shadowColor="rgba(255,255,255,0.9)";c.beginPath();c.moveTo(this.points[0][0],this.points[0][1]);for(let i=1;i<this.points.length;i++)c.lineTo(this.points[i][0],this.points[i][1]);c.stroke();c.shadowBlur=0;}isDead(){return this.alpha<=0;}}
  function resize(){if(!canvas)return;canvas.width=canvas.clientWidth;canvas.height=canvas.clientHeight;}
  function render(){if(!ctx){requestAnimationFrame(render);return;}ctx.clearRect(0,0,canvas.width,canvas.height);if(isVisible){const now=Date.now();if(now>nextStrikeTime){bolts.push(new LightningBolt(canvas.width,canvas.height));nextStrikeTime=now+2000+Math.random()*4000;}bolts.forEach(b=>{b.update();b.draw(ctx);});bolts=bolts.filter(b=>!b.isDead());}requestAnimationFrame(render);}
  function init(){canvas=document.getElementById("lightning-canvas");if(!canvas)return;ctx=canvas.getContext("2d");resize();window.addEventListener("resize",resize);render();}
  function setByIcon(icon){if(!ctx)init();if(!canvas)return;isVisible=String(icon).startsWith("11");canvas.style.opacity=isVisible?"1":"0";if(!isVisible)bolts=[];}
  return {init,setByIcon};
})();

const birdsController = (() => {
  let canvas,ctx,flock=[],isVisible=false;
  const FLOCK_SIZE={"01d":6,"01n":3,"02d":5,"02n":7,"03d":5,"03n":4,"04d":3,"04n":2,"09d":2,"09n":2,"10d":2,"10n":2,"11d":2,"11n":2,"13d":3,"13n":7,"50d":2,"50n":2};
  let targetCount=4;
  class CanvasBird{constructor(w,h){this.reset(w,h);}reset(w,h){this.depth=0.1+Math.random()*0.9;this.scale=0.4+this.depth*0.7;this.speed=(0.3+this.depth*1.2)*0.8;this.opacity=0.25+this.depth*0.65;this.x=-60;this.y=h*0.05+Math.random()*(h*0.55);this.yDrift=(Math.random()-0.5)*0.25;this.yBound=this.y;this.wingPhase=Math.random()*Math.PI*2;this.wingSpeed=0.07+Math.random()*0.06;this.soarTimer=0;this.soarChance=0.002;}update(w,h){this.x+=this.speed;if(this.soarTimer>0){this.soarTimer--;}else{this.wingPhase+=this.wingSpeed;if(Math.random()<this.soarChance)this.soarTimer=40+Math.random()*80;}this.y+=this.yDrift;if(Math.abs(this.y-this.yBound)>30)this.yDrift*=-1;return this.x<w+80;}draw(c){const s=this.scale*14,wh=s*0.55,flapFactor=this.soarTimer>0?0:Math.sin(this.wingPhase),lift=flapFactor*wh;c.save();c.globalAlpha=this.opacity;c.strokeStyle="rgba(20,22,28,0.85)";c.lineWidth=Math.max(0.8,this.scale*1.1);c.lineCap="round";c.beginPath();c.moveTo(this.x,this.y);c.quadraticCurveTo(this.x-s*0.5,this.y-lift*0.6,this.x-s,this.y-lift);c.stroke();c.beginPath();c.moveTo(this.x,this.y);c.quadraticCurveTo(this.x+s*0.5,this.y-lift*0.6,this.x+s,this.y-lift);c.stroke();c.restore();}}
  function resize(){if(!canvas)return;canvas.width=canvas.clientWidth||window.innerWidth;canvas.height=canvas.clientHeight||window.innerHeight;}
  function render(){if(!ctx){requestAnimationFrame(render);return;}ctx.clearRect(0,0,canvas.width,canvas.height);if(isVisible){if(flock.length<targetCount&&Math.random()<0.012)flock.push(new CanvasBird(canvas.width,canvas.height));flock=flock.filter(b=>{const alive=b.update(canvas.width,canvas.height);if(alive)b.draw(ctx);return alive;});}else{flock=[];}requestAnimationFrame(render);}
  function init(){canvas=document.getElementById("birds-canvas");if(!canvas)return;ctx=canvas.getContext("2d");resize();window.addEventListener("resize",resize);render();}
  function setByIcon(icon){if(!ctx)init();if(!canvas)return;const s=String(icon||"01d");targetCount=FLOCK_SIZE[s]??3;isVisible=targetCount>0;if(flock.length>targetCount)flock.length=targetCount;}
  return {init,setByIcon};
})();

const hailController = (() => {
  let canvas,ctx,pellets=[],impacts=[],isVisible=false;
  class HailPellet{constructor(w){this.x=Math.random()*w;this.y=-8-Math.random()*60;this.radius=2+Math.random()*3;this.speedY=8+Math.random()*6;this.speedX=-1.5+Math.random()*1.5;this.opacity=0.65+Math.random()*0.30;}update(){this.y+=this.speedY;this.x+=this.speedX;}draw(c){c.beginPath();c.ellipse(this.x,this.y,this.radius,this.radius*1.2,0,0,Math.PI*2);c.fillStyle=`rgba(210,220,235,${this.opacity})`;c.fill();c.beginPath();c.arc(this.x-this.radius*0.25,this.y-this.radius*0.3,this.radius*0.28,0,Math.PI*2);c.fillStyle=`rgba(255,255,255,${this.opacity*0.7})`;c.fill();}isOut(h){return this.y>h+10;}}
  class HailImpact{constructor(x,y,radius){this.x=x;this.y=y;this.chips=Array.from({length:4},()=>({dx:(Math.random()-0.5)*radius*3,dy:-(Math.random()*radius*2),r:radius*0.25,life:0}));this.opacity=0.7;}update(){this.opacity-=0.08;this.chips.forEach(c=>{c.life++;});}draw(c){this.chips.forEach(chip=>{c.beginPath();c.arc(this.x+chip.dx,this.y+chip.dy-chip.life*0.5,chip.r,0,Math.PI*2);c.fillStyle=`rgba(200,215,230,${this.opacity})`;c.fill();});}isDead(){return this.opacity<=0;}}
  function resize(){if(!canvas)return;canvas.width=canvas.clientWidth||window.innerWidth;canvas.height=canvas.clientHeight||window.innerHeight;}
  function render(){if(!ctx){requestAnimationFrame(render);return;}ctx.clearRect(0,0,canvas.width,canvas.height);if(isVisible){const burst=1+Math.round(Math.random());for(let i=0;i<burst;i++)pellets.push(new HailPellet(canvas.width));pellets.forEach(p=>{p.update();p.draw(ctx);if(p.isOut(canvas.height)&&Math.random()<0.35)impacts.push(new HailImpact(p.x,canvas.height-4,p.radius));});impacts.forEach(imp=>{imp.update();imp.draw(ctx);});pellets=pellets.filter(p=>!p.isOut(canvas.height));impacts=impacts.filter(i=>!i.isDead());}requestAnimationFrame(render);}
  function init(){canvas=document.getElementById("hail-canvas");if(!canvas)return;ctx=canvas.getContext("2d");resize();window.addEventListener("resize",resize);render();}
  function setByIcon(icon){if(!ctx)init();if(!canvas)return;isVisible=String(icon||"").startsWith("11");canvas.style.opacity=isVisible?"1":"0";if(!isVisible){pellets=[];impacts=[];}}
  return {init,setByIcon};
})();

class PNWWarningSystem {
  constructor({current,hourly,minutely,locationMeta={}}){this.current=current;this.hourly=hourly||[];this.minutely=minutely||[];this.locationMeta=locationMeta;}
  evaluate(){const road=this.scoreRoadRisk(),severe=this.scoreSevereRisk(),flood=this.scoreFloodRisk(),fire=this.scoreFireRisk();const alerts=[];if(road.score>=30)alerts.push(this.buildAlert("road",road));if(severe.score>=30)alerts.push(this.buildAlert("severe",severe));if(flood.score>=30)alerts.push(this.buildAlert("flood",flood));if(fire.score>=30)alerts.push(this.buildAlert("fire",fire));return alerts;}
  scoreRoadRisk(){const {temp,humidity,visibility,weather}=this.current,icon=weather?.[0]?.icon||"";let score=0;if(temp<=34&&(icon.includes("13")||icon.includes("09")||icon.includes("10")))score+=35;if(temp<=30&&humidity>80)score+=25;if(visibility<5000)score+=20;if(visibility<2000)score+=20;if(temp<=32&&humidity>85)score+=10;if(this.minutely.length>0){const suddenRain=this.minutely.slice(0,5).some(m=>m.precipitation>0.5);if(suddenRain&&temp<=34)score+=15;}return {score:Math.min(score,100),details:{temp,humidity,visibility}};}
  scoreSevereRisk(){const {wind_speed,weather}=this.current,icon=weather?.[0]?.icon||"";let score=0;if(icon.includes("11"))score+=40;if(wind_speed>=25)score+=25;if(wind_speed>=35)score+=20;if(this.hourly.some(h=>h.wind_speed>=35))score+=15;if(this.minutely.length>10){const precipSpike=this.minutely.slice(0,10).filter(m=>m.precipitation>1).length;if(precipSpike>=5)score+=20;}return {score:Math.min(score,100),details:{wind_speed}};}
  scoreFloodRisk(){const {humidity,weather}=this.current,icon=weather?.[0]?.icon||"",pop=this.current.pop||0;const heavyNow=pop>0.7&&icon.includes("10"),heavyHours=this.hourly.filter(h=>(h.pop||0)>0.7).length;let score=0;if(heavyNow)score+=30;if(heavyHours>=3)score+=30;if(humidity>90)score+=10;if(this.minutely.length>0){const nextHourPrecip=this.minutely.reduce((sum,m)=>sum+(m.precipitation||0),0);if(nextHourPrecip>10)score+=25;if(nextHourPrecip>20)score+=15;}if(this.locationMeta.coastal||this.locationMeta.riverValley)score+=10;return {score:Math.min(score,100),details:{heavyHours}};}
  scoreFireRisk(){const {temp,humidity,wind_speed,uvi}=this.current;let score=0;if(temp>=80&&humidity<30)score+=30;if(temp>=90&&humidity<25)score+=20;if(wind_speed>=15)score+=20;if(uvi>=8)score+=15;const recentDryHours=this.hourly.slice(0,24).filter(h=>(h.pop||0)<0.1).length;if(recentDryHours>=20&&temp>75)score+=15;if(this.locationMeta.lateSummer)score+=10;return {score:Math.min(score,100),details:{temp,humidity,wind_speed,uvi}};}
  buildAlert(type,result){return {type,level:this.classifyLevel(result.score),message:this.buildMessage(type,this.classifyLevel(result.score),result.details),score:result.score,details:result.details};}
  classifyLevel(score){if(score>=70)return "danger";if(score>=45)return "warning";if(score>=30)return "advisory";return "none";}
  buildMessage(type,level,details){switch(type){case "road":if(level==="danger")return "High risk of icy or slick roads. Slow down and watch for black ice.";if(level==="warning")return "Roads may be slick or foggy. Use extra caution on bridges and overpasses.";return "Minor road impacts possible. Stay alert for changing conditions.";case "severe":if(level==="danger")return "Severe storm conditions likely. Strong winds or lightning may impact travel and power.";if(level==="warning")return "Gusty winds or storms expected. Secure loose items and check the forecast.";return "Some unsettled weather nearby. Keep an eye on the sky.";case "flood":if(level==="danger")return "Heavy rain may cause flooding in low-lying or poor drainage areas.";if(level==="warning")return "Periods of heavy rain could lead to ponding on roads and minor flooding.";return "Rain may cause minor water buildup in usual trouble spots.";case "fire":if(level==="danger")return "Very high fire danger. Avoid open flames and report any smoke immediately.";if(level==="warning")return "Elevated fire risk. Use caution with anything that could spark.";return "Dry conditions present. Be mindful of fire safety outdoors.";default:return "Conditions may impact your area. Stay aware and check for updates.";}}
}

function evaluateAndDisplayAlerts(weatherData,locationMeta={}){
  if(!weatherData?.current)return [];
  const lat=locationMeta.lat||47.2529,isCoastal=lat>46&&lat<49,currentMonth=new Date().getMonth();
  const meta={coastal:isCoastal,riverValley:locationMeta.riverValley||false,lateSummer:currentMonth>=6&&currentMonth<=8,...locationMeta};
  const system=new PNWWarningSystem({current:weatherData.current,hourly:weatherData.hourly||[],minutely:weatherData.minutely||[],locationMeta:meta});
  const alerts=system.evaluate();
  const noAlerts=document.getElementById("no-alerts"),localAlerts=document.getElementById("local-alerts"),natAlerts=document.getElementById("national-alerts");
  if(!alerts.length){if(noAlerts)noAlerts.style.display="block";if(localAlerts)localAlerts.style.display="none";if(natAlerts)natAlerts.style.display="none";return alerts;}
  if(noAlerts)noAlerts.style.display="none";if(natAlerts)natAlerts.style.display="none";
  if(localAlerts){localAlerts.style.display="";const iconMap={road:"traffic",severe:"thunderstorm",flood:"water",fire:"local_fire_department"};localAlerts.innerHTML=`<h2>Local Alerts</h2>`+alerts.map(a=>`<div class="alert-card alert-${a.level}"><div class="alert-header"><span class="alert-icon material-symbols-outlined">${iconMap[a.type]||"warning"}</span><span class="alert-type">${a.type.toUpperCase()}</span><span class="alert-level">${a.level.toUpperCase()}</span></div><p class="alert-message">${a.message}</p></div>`).join("");}
  return alerts;
}

function safeSetText(id,text){const el=document.getElementById(id);if(el)el.textContent=text;}

function updateUV(uvi) {
  const levels = [
    { max: 2,        label: "Low",       summary: "No protection needed. Safe to be outside." },
    { max: 5,        label: "Moderate",  summary: "Some protection recommended. Wear sunscreen." },
    { max: 7,        label: "High",      summary: "Protection needed. Reduce time in midday sun." },
    { max: 10,       label: "Very High", summary: "Extra protection needed. Avoid midday sun." },
    { max: Infinity, label: "Extreme",   summary: "Stay indoors during midday hours." }
  ];
  const level = levels.find(l => uvi <= l.max) || levels[levels.length - 1];
  const pct = Math.min((uvi / 11) * 100, 100);
  safeSetText("uvIndex", uvi);
  safeSetText("uv-level", level.label);
  safeSetText("uv-summary", level.summary);
  const fill = document.getElementById("uvMeterFill");
  if (fill) fill.style.width = pct + "%";
}

const AQI_LABELS = ["Good", "Fair", "Moderate", "Poor", "Very Poor"];
const POLLUTANT_THRESHOLDS = {
  pm2_5: [12,   35,    55,    150],
  pm10:  [54,   154,   254,   354],
  no2:   [53,   100,   360,   649],
  o3:    [70,   120,   180,   240],
  co:    [4400, 9400,  12400, 15400],
  so2:   [35,   75,    185,   304],
  nh3:   [200,  400,   800,   1200]
};

function getWorstPollutant(comp) {
  return [
    { label: "PM2.5", value: comp.pm2_5, type: "pm2_5" },
    { label: "PM10",  value: comp.pm10,  type: "pm10"  },
    { label: "NO2",   value: comp.no2,   type: "no2"   },
    { label: "O3",    value: comp.o3,    type: "o3"    },
    { label: "CO",    value: comp.co,    type: "co"    },
    { label: "SO2",   value: comp.so2,   type: "so2"   }
  ].sort((a, b) => (b.value / POLLUTANT_THRESHOLDS[b.type][3]) - (a.value / POLLUTANT_THRESHOLDS[a.type][3]))[0];
}

function getPollutionSummary(worst) {
  if (!worst) return "Pollution data unavailable.";
  const t = POLLUTANT_THRESHOLDS[worst.type];
  const v = worst.value;
  if (!t) return "Pollution levels detected. Monitor conditions.";
  let level;
  if (v <= t[0]) level = 0;
  else if (v <= t[1]) level = 1;
  else if (v <= t[2]) level = 2;
  else if (v <= t[3]) level = 3;
  else level = 4;
  if (worst.type === "pm2_5") {
    if (level <= 1) return "Fine particles are low. Air is clear and safe.";
    if (level === 2) return "Fine particles are building. Sensitive individuals should take caution.";
    if (level >= 3) return "Fine particle pollution is high. Limit outdoor exposure and keep windows closed.";
  }
  if (worst.type === "pm10") {
    if (level <= 1) return "Coarse particles are minimal. Conditions are stable.";
    if (level === 2) return "Dust levels are noticeable. Air may appear slightly hazy.";
    if (level >= 3) return "Heavy dust and particulates detected. Reduce outdoor activity.";
  }
  if (worst.type === "no2") {
    if (level <= 1) return "Nitrogen dioxide levels are low. Traffic impact is minimal.";
    if (level === 2) return "Moderate traffic pollution detected. Avoid prolonged roadside exposure.";
    if (level >= 3) return "High nitrogen dioxide levels. Limit time near traffic-heavy areas.";
  }
  if (worst.type === "o3") {
    if (level <= 1) return "Why did the smog go to school? To become a little more transparent... No worries air pollutants are stable.";
    if (level === 2) return "Ozone is increasing. Outdoor exertion should be moderate.";
    if (level >= 3) return "Elevated ozone levels. Avoid outdoor activity during peak sunlight hours and those with sensitivities should be cautious";
  }
  if (worst.type === "co") {
    if (level <= 1) return "Carbon monoxide levels are normal.";
    if (level === 2) return "CO levels are rising. Ensure proper ventilation indoors.";
    if (level >= 3) return "High carbon monoxide detected. Avoid enclosed or poorly ventilated areas.";
  }
  if (worst.type === "so2") {
    if (level <= 1) return "Sulfur dioxide levels are low.";
    if (level === 2) return "Moderate sulfur dioxide detected. Sensitive individuals take caution.";
    if (level >= 3) return "High sulfur dioxide levels. Stay indoors if possible.";
  }
  return "Pollution levels detected. Use caution outdoors.";
}

function setPollutantMeter(meterId, type, value) {
  const el = document.getElementById(meterId);
  if (!el) return;
  const t = POLLUTANT_THRESHOLDS[type];
  if (!t) return;
  const pct = Math.min((value / t[3]) * 100, 100);
  let color;
  if (value <= t[0])      color = "#00e400";
  else if (value <= t[1]) color = "#ffff00";
  else if (value <= t[2]) color = "#ff7e00";
  else                    color = "#ff0000";
  const fill = el.querySelector('.meter__fill');
  if(fill){ fill.style.width = pct + "%"; fill.style.background = color; }
}
function updateAirQuality(pollutionData) {
  const list = pollutionData?.list?.[0];
  if (!list) return;
  const aqi  = list.main.aqi;
  const comp = list.components;
  const pct  = (aqi / 5) * 100;
  const summaries = [
    "Excellent. Breathe deep!",
    "Good. Enjoy the outdoors!",
    "Moderate. Sensitive groups take caution.",
    "Poor. Limit outdoor activity.",
    "Unhealthy. Stay indoors if possible."
  ];
  safeSetText("air-quality-level",   `AQI ${aqi} - ${AQI_LABELS[aqi - 1]}`);
  safeSetText("air-quality-summary", summaries[aqi - 1] || "Unavailable.");
  const aqFill = document.getElementById("air-quality-meter-fill");
  if (aqFill) aqFill.style.width = pct + "%";
  const worst = getWorstPollutant(comp);
  safeSetText("pollution-level",   `${worst.label} - ${worst.value.toFixed(1)} ug/m3`);
  safeSetText("pollution-summary", getPollutionSummary(worst));
  const polFill = document.getElementById("pollution-meter-fill");
  if (polFill) polFill.style.width = pct + "%";
  safeSetText("co_level",    `${(comp.co / 1000).toFixed(2)} mg/m3`);
  safeSetText("ozone_level", `${comp.o3.toFixed(1)} ug/m3`);
  safeSetText("so2-level",   `${comp.so2.toFixed(1)} ug/m3`);
  safeSetText("nh3-level",   `${comp.nh3.toFixed(1)} ug/m3`);
  safeSetText("pm25-level",  `${comp.pm2_5.toFixed(1)} ug/m3`);
  safeSetText("pm10-level",  `${comp.pm10.toFixed(1)} ug/m3`);
  setPollutantMeter("co-meter",    "co",    comp.co);
  setPollutantMeter("ozone-meter", "o3",    comp.o3);
  setPollutantMeter("so2-meter",   "so2",   comp.so2);
  setPollutantMeter("nh3-meter",   "nh3",   comp.nh3);
  setPollutantMeter("pm25-meter",  "pm2_5", comp.pm2_5);
  setPollutantMeter("pm10-meter",  "pm10",  comp.pm10);
}

function updateVisibility(meters) {
  if (meters == null) return;
  let miles = (meters / 1609.34).toFixed(1);
  if (miles >= 6.2) miles = "6+";
  let level, summary;
  if (miles === "6+" || miles >= 5) {
    level   = "Good";
    summary = "Minimal driving risk. Conditions are perfectly clear for navigating. Tip: Enjoy the beautiful sights and drive safely.";
  } else if (miles >= 2) {
    level   = "Moderate";
    summary = "Low driving risk. There is a slight haze, but the horizon remains clear. Tip: Maintain standard following distances.";
  } else if (miles >= 0.5) {
    level   = "Poor";
    summary = "Elevated driving risk. Visibility is significantly reduced. Tip: Reduce your speed and drive with extra caution.";
  } else {
    level   = "Very Poor";
    summary = "Severe driving risk. Surroundings are heavily obscured. Tip: Use your low beams or fog lights and avoid driving if possible.";
  }
  safeSetText("visibility",       `${miles} mi`);
  safeSetText("visibility-level", level);
  safeSetText("visibility-summary", summary);
}

class PixelStarfield {
  constructor(canvas){
    this.canvas=canvas;
    this.ctx=canvas.getContext("2d");
    this.backgroundStars=[];
    this.orionStars=[];
    this.opacity=0;
    this.targetOpacity=0;
    this.logicalWidth=0;
    this.logicalHeight=0;
    this.animate=this.animate.bind(this);
    this.resize();
    window.addEventListener("resize",()=>this.resize());
    this.init();
  }

  resize(){
    const dpr=Math.min(window.devicePixelRatio||1,2);
    const w=window.innerWidth, h=window.innerHeight*0.5;
    this.canvas.width=Math.floor(w*dpr);
    this.canvas.height=Math.floor(h*dpr);
    this.canvas.style.width=w+"px";
    this.canvas.style.height=h+"px";
    this.ctx.scale(dpr,dpr);
    this.logicalWidth=w;
    this.logicalHeight=h;
    this.init();
  }

  init(){
    this.backgroundStars=[];
    this.orionStars=[];
    const w=this.logicalWidth, h=this.logicalHeight;
    for(let i=0;i<300;i++){
      this.backgroundStars.push({
        x:Math.random()*w, y:Math.random()*h,
        size:Math.random()<0.7?1:2,
        opacity:0.2+Math.random()*0.5,
        twinkleSpeed:0.01+Math.random()*0.02,
        twinklePhase:Math.random()*Math.PI*2
      });
    }
    const orionCenterX=w*0.65, orionCenterY=h*0.35;
    const scale=Math.min(w,h)/400; /* was /800 - doubles the spread on 50vh */
    const orionPattern=[
      {x:-60,y:-80,size:4,  name:"Betelgeuse",color:"#ff6b4a",brightness:0.95},
      {x: 60,y:-80,size:3.5,name:"Bellatrix", color:"#b8d4ff",brightness:0.8},
      {x:-30,y:  0,size:3,  name:"Alnitak",   color:"#cad8ff",brightness:0.85},
      {x:  0,y:  0,size:3.5,name:"Alnilam",   color:"#cad8ff",brightness:0.9},
      {x: 30,y:  0,size:3,  name:"Mintaka",   color:"#cad8ff",brightness:0.85},
      {x:-50,y: 90,size:3,  name:"Saiph",     color:"#b8d4ff",brightness:0.75},
      {x: 50,y: 90,size:4,  name:"Rigel",     color:"#9bb5ff",brightness:0.9},
      {x:  0,y: 35,size:2,  name:"Sword1",    color:"#d4e0ff",brightness:0.6},
      {x:  5,y: 50,size:2.5,name:"Sword2",    color:"#d4e0ff",brightness:0.65},
      {x: -5,y: 65,size:2,  name:"Sword3",    color:"#d4e0ff",brightness:0.55}
    ];
    orionPattern.forEach(star=>{
      this.orionStars.push({
        x:orionCenterX+star.x*scale, y:orionCenterY+star.y*scale,
        size:star.size*scale, name:star.name, color:star.color,
        baseOpacity:star.brightness, opacity:star.brightness,
        twinkleSpeed:0.005+Math.random()*0.01,
        twinklePhase:Math.random()*Math.PI*2
      });
    });
  }

  show(){this.targetOpacity=1;}
  hide(){this.targetOpacity=0;}

  animate(){
    this.opacity+=(this.targetOpacity-this.opacity)*0.05;
    this.ctx.clearRect(0,0,this.logicalWidth,this.logicalHeight);
    if(this.opacity<0.01){requestAnimationFrame(this.animate);return;}

    /* background stars - pixel-snapped for crispness */
    this.backgroundStars.forEach(star=>{
      star.twinklePhase+=star.twinkleSpeed;
      const alpha=star.opacity*(0.5+0.5*Math.sin(star.twinklePhase))*this.opacity;
      const px=Math.floor(star.x)+0.5, py=Math.floor(star.y)+0.5;
      this.ctx.fillStyle=`rgba(255,255,255,${alpha})`;
      if(star.size===1){this.ctx.fillRect(px,py,1,1);}
      else{this.ctx.beginPath();this.ctx.arc(px,py,1,0,Math.PI*2);this.ctx.fill();}
    });

    if(this.opacity>0.3&&this.orionStars.length>=10){

      /* belt only - just the 3 middle stars, barely visible */
      this.ctx.strokeStyle=`rgba(100,120,160,${0.07*this.opacity})`;
      this.ctx.lineWidth=0.5;
      this.ctx.beginPath();
      this.ctx.moveTo(this.orionStars[2].x,this.orionStars[2].y);
      this.ctx.lineTo(this.orionStars[3].x,this.orionStars[3].y);
      this.ctx.lineTo(this.orionStars[4].x,this.orionStars[4].y);
      this.ctx.stroke();

      this.orionStars.forEach(star=>{
        star.twinklePhase+=star.twinkleSpeed;
        const twinkle=0.85+0.15*Math.sin(star.twinklePhase);
        const alpha=star.baseOpacity*twinkle*this.opacity;
        const px=Math.floor(star.x)+0.5, py=Math.floor(star.y)+0.5;
        const isBug=star.name==="Betelgeuse";

        /* glow halo */
        const glowR=isBug?star.size*7:star.size*3;
        const g=this.ctx.createRadialGradient(px,py,0,px,py,glowR);
        g.addColorStop(0,`${star.color}${Math.floor(alpha*255).toString(16).padStart(2,"0")}`);
        g.addColorStop(0.4,`${star.color}${Math.floor(alpha*80).toString(16).padStart(2,"0")}`);
        g.addColorStop(1,`${star.color}00`);
        this.ctx.fillStyle=g;
        this.ctx.beginPath();
        this.ctx.arc(px,py,glowR,0,Math.PI*2);
        this.ctx.fill();

        /* sharp core */
        this.ctx.fillStyle=`rgba(255,255,255,${alpha})`;
        this.ctx.beginPath();
        this.ctx.arc(px,py,Math.max(0.5,star.size*0.6),0,Math.PI*2);
        this.ctx.fill();

        /* Betelgeuse - red nebula pulse + diffraction spikes */
        if(isBug){
          const pulse=0.5+0.5*Math.sin(star.twinklePhase*0.7);
          const rg=this.ctx.createRadialGradient(px,py,0,px,py,star.size*10);
          rg.addColorStop(0,  `rgba(255,107,74,${alpha*0.75})`);
          rg.addColorStop(0.3,`rgba(255,80,40,${alpha*pulse*0.4})`);
          rg.addColorStop(0.7,`rgba(200,50,20,${alpha*0.15})`);
          rg.addColorStop(1,  `rgba(180,30,0,0)`);
          this.ctx.fillStyle=rg;
          this.ctx.beginPath();
          this.ctx.arc(px,py,star.size*10,0,Math.PI*2);
          this.ctx.fill();
          /* cross spike */
          const spk=star.size*8;
          this.ctx.strokeStyle=`rgba(255,160,120,${alpha*0.35})`;
          this.ctx.lineWidth=0.5;
          this.ctx.beginPath();
          this.ctx.moveTo(px-spk,py);this.ctx.lineTo(px+spk,py);
          this.ctx.moveTo(px,py-spk);this.ctx.lineTo(px,py+spk);
          this.ctx.stroke();
        }
      });
    }
    requestAnimationFrame(this.animate);
  }
}

class BridgeController {
  constructor(){this.scene=null;this.camera=null;this.renderer=null;this.deckGeo=null;this.cableGeo=null;this.deckMesh=null;this.cableMesh=null;this.windMph=5;this.clock=null;this.mode="day";this.dayURL="https://raw.githubusercontent.com/aaronlp1312/TOWNTHREEOWM/refs/heads/main/1778635584430.png";this.nightURL="https://raw.githubusercontent.com/aaronlp1312/TOWNTHREEOWM/main/narrowstwn.png";this.dayTex=null;this.nightTex=null;this.MAX_DPR=2.5;this.SEGMENTS=140;this.HEIGHT_BOOST=0.90;this._texAspect=null;}
  init(){const canvas=document.getElementById("bridge-canvas");if(!canvas||!window.THREE)return false;this.scene=new THREE.Scene();this.camera=new THREE.PerspectiveCamera(80,window.innerWidth/window.innerHeight,1.40,900);this.camera.position.z=3;this.renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:"high-performance"});const dpr=Math.min(window.devicePixelRatio||1,this.MAX_DPR);this.renderer.setPixelRatio(dpr);this.renderer.setSize(window.innerWidth,window.innerHeight);if(this.renderer.outputColorSpace!==undefined)this.renderer.outputColorSpace=THREE.SRGBColorSpace;else if(this.renderer.outputEncoding!==undefined)this.renderer.outputEncoding=THREE.sRGBEncoding;this._rebuildGeometry();const loader=new THREE.TextureLoader();loader.load(this.dayURL,dayTex=>{this.dayTex=dayTex;this._tuneTexture(this.dayTex);if(dayTex?.image?.width&&dayTex?.image?.height)this._texAspect=dayTex.image.width/dayTex.image.height;loader.load(this.nightURL,nightTex=>{this.nightTex=nightTex;this._tuneTexture(this.nightTex);const deckMat=new THREE.MeshBasicMaterial({map:this.dayTex,transparent:true,side:THREE.DoubleSide,depthWrite:true});const cableMat=new THREE.MeshBasicMaterial({map:this.dayTex,transparent:true,side:THREE.DoubleSide,opacity:0.7,depthWrite:false});this.deckMesh=new THREE.Mesh(this.deckGeo,deckMat);this.cableMesh=new THREE.Mesh(this.cableGeo,cableMat);this.cableMesh.position.z=0.01;this.scene.add(this.deckMesh);this.scene.add(this.cableMesh);this.clock=new THREE.Clock();this.clock.start();this._animate();});});return true;}
  _tuneTexture(tex){if(!tex)return;if(tex.colorSpace!==undefined)tex.colorSpace=THREE.SRGBColorSpace;else if(tex.encoding!==undefined)tex.encoding=THREE.sRGBEncoding;tex.wrapS=tex.wrapT=THREE.ClampToEdgeWrapping;tex.minFilter=THREE.LinearMipmapLinearFilter;tex.magFilter=THREE.LinearFilter;tex.generateMipmaps=true;if(this.renderer&&this.renderer.capabilities?.getMaxAnisotropy)tex.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy());tex.needsUpdate=true;}
  _computePlaneSize(){const z=this.camera.position.z,frustumH=2*Math.tan(THREE.MathUtils.degToRad(this.camera.fov)/2)*z,frustumW=frustumH*this.camera.aspect;return{width:frustumW,height:frustumH*this.HEIGHT_BOOST};}
  _rebuildGeometry(){const{width,height}=this._computePlaneSize();const newDeck=new THREE.PlaneGeometry(width,height,this.SEGMENTS,this.SEGMENTS);const newCable=new THREE.PlaneGeometry(width,height,this.SEGMENTS,this.SEGMENTS);newDeck.userData.original=new Float32Array(newDeck.attributes.position.array);newCable.userData.original=new Float32Array(newCable.attributes.position.array);if(this.deckMesh?.geometry)this.deckMesh.geometry.dispose();if(this.cableMesh?.geometry)this.cableMesh.geometry.dispose();this.deckGeo=newDeck;this.cableGeo=newCable;if(this.deckMesh)this.deckMesh.geometry=newDeck;if(this.cableMesh)this.cableMesh.geometry=newCable;}
  resize(){if(!this.renderer||!this.camera)return;this.camera.aspect=window.innerWidth/window.innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(window.innerWidth,window.innerHeight);this._rebuildGeometry();}
  _animate(){requestAnimationFrame(()=>this._animate());if(!this.clock||!this.deckGeo)return;const t=this.clock.elapsedTime;this._applyWindDeform(this.deckGeo,t);this._applyWindDeform(this.cableGeo,t);this.renderer?.render(this.scene,this.camera);}
  _applyWindDeform(geo,t){const wind=Math.max(0,Number(this.windMph)||0)*0.10,deckAmp=0.03,torsionAmp=0.02;const pos=geo.attributes.position,orig=geo.userData.original;for(let i=0;i<pos.count;i++){const x=orig[i*3+0],y=orig[i*3+1],z=orig[i*3+2],normY=y/5,normX=x/10;if(Math.abs(normY)<0.4){const spanWeight=Math.sin(Math.PI*(normX*0.5+0.5));let disp=Math.sin(t*0.9)*deckAmp*wind*spanWeight;disp+=normY*Math.sin(t*1.3+normX*2)*torsionAmp*wind*spanWeight;pos.array[i*3+2]=z+disp;}else{pos.array[i*3+2]=z;}}pos.needsUpdate=true;}
  setWind(mph){const v=Number(mph);this.windMph=Number.isFinite(v)?Math.max(0,v):0;}
  setMode(mode){const m=mode==="night"?"night":"day";if(this.mode===m)return;this.mode=m;const tex=(m==="night")?(this.nightTex||this.dayTex):this.dayTex;if(!tex)return;if(this.deckMesh?.material){this.deckMesh.material.map=tex;this.deckMesh.material.needsUpdate=true;}if(this.cableMesh?.material){this.cableMesh.material.map=tex;this.cableMesh.material.needsUpdate=true;}}
  updateDayNight(currentTime,sunrise,sunset){const now=Number(currentTime),sr=Number(sunrise),ss=Number(sunset);if(!Number.isFinite(now)||!Number.isFinite(sr)||!Number.isFinite(ss))return;this.setMode(now>=sr&&now<ss?"day":"night");}
}

function mod(a,b){return a-Math.floor(a/b)*b;}
function clamp01(x){return Math.max(0,Math.min(1,x));}
function hexToRgb(hex){hex=String(hex).trim().replace("#","");if(hex.length===3)hex=hex.split("").map(c=>c+c).join("");const n=parseInt(hex,16);return{r:(n>>16)&255,g:(n>>8)&255,b:n&255};}
function rgbToHex({r,g,b}){const toHex=v=>Math.max(0,Math.min(255,v)).toString(16).padStart(2,"0");return "#"+toHex(r)+toHex(g)+toHex(b);}
function mixHex(a,b,t){const A=hexToRgb(a),B=hexToRgb(b);return rgbToHex({r:Math.round(A.r+(B.r-A.r)*t),g:Math.round(A.g+(B.g-A.g)*t),b:Math.round(A.b+(B.b-A.b)*t)});}
function smoothstep(edge0,edge1,x){const t=clamp01((x-edge0)/(edge1-edge0));return t*t*(3-2*t);}
function getDaylight(nowMs,sunriseMs,sunsetMs){const fade=45*60*1000,dawnStart=sunriseMs-fade,dawnEnd=sunriseMs+fade,duskStart=sunsetMs-fade,duskEnd=sunsetMs+fade;if(nowMs<dawnStart)return 0;if(nowMs<dawnEnd)return smoothstep(dawnStart,dawnEnd,nowMs);if(nowMs<duskStart)return 1;if(nowMs<duskEnd)return 1-smoothstep(duskStart,duskEnd,nowMs);return 0;}
function getTwilight(nowMs,sunriseMs,sunsetMs){const fade=65*60*1000,d1=smoothstep(sunriseMs-fade,sunriseMs+fade,nowMs),d2=1-smoothstep(sunsetMs-fade,sunsetMs+fade,nowMs);return clamp01(Math.max(1-Math.abs(d1-0.5)*2,1-Math.abs(d2-0.5)*2));}


function getSkyPalette(iconCode){
  const daySky={
    "01d":"#A2CAFF","02d":"#D3D9DB","03d":"#909D9E","04d":"#ACC2D9",
    "09d":"#CACACA","10d":"#E6E6E6","11d":"#353349","13d":"#FFFAFA","50d":"#E0E7EA"
  };
  const nightSky={
    "01n":"#0a0e1a",
    "02n":"#0d0d14",
    "03n":"#0a0a10",
    "04n":"#070810",
    "09n":"#050508",
    "10n":"#060809",
    "11n":"#04040a",
    "13n":"#0c0c14",
    "50n":"#060606"
  };
  const s=String(iconCode||""),
    base=daySky[s]||nightSky[s]||(s.endsWith("d")?"#A2CAFF":"#070810"),
    isThunder=s.startsWith("11"),
    isRain=s.startsWith("09")||s.startsWith("10"),
    isFog=s.startsWith("50"),
    isOvercast=s.startsWith("04")||s.startsWith("03"),
    storminess=clamp01((isThunder?0.9:0)+(isRain?0.6:0)+(isOvercast?0.35:0)+(isFog?0.25:0));
  return{base,violetGlow:"#4a3a6a",violetDeep:"#1a1530",nightDeep:"#030508",stormSlate:"#1a1e22",fogMilk:"#C9D4D8",storminess};
}

function computeSkyGradient(iconCode,nowMs,sunriseMs,sunsetMs){
  const p=getSkyPalette(iconCode),
    daylight=getDaylight(nowMs,sunriseMs,sunsetMs),
    twilight=getTwilight(nowMs,sunriseMs,sunsetMs);
  let sky=p.base;
  sky=mixHex(sky,p.stormSlate,p.storminess*0.35);
  sky=mixHex(sky,p.nightDeep,(1-daylight)*0.88);
  const tw=clamp01(twilight*(1-p.storminess*0.85));
  sky=mixHex(sky,p.violetDeep,tw*0.12);
  if(String(iconCode).startsWith("50"))sky=mixHex(sky,p.fogMilk,0.35);
  return{top:mixHex(sky,"#000000",0.25),mid:sky,horizon:mixHex(sky,p.violetGlow,tw*0.30),daylight,twilight:tw,storminess:p.storminess};
}
class EnvironmentController {
  constructor(){this.now=new Date();this.sunrise=null;this.sunset=null;this.icon="01d";this.root=document.documentElement;this.sun=document.getElementById("sun");this.moon=document.getElementById("moon");this.HORIZONTAL_START=10;this.HORIZONTAL_END=90;this.VERTICAL_HORIZON=85;this.VERTICAL_PEAK=30;}
  setWeather({sunrise,sunset,icon}){this.sunrise=Number(sunrise)*1000;this.sunset=Number(sunset)*1000;this.icon=icon||"01d";}
  getSolarProgress(){const t=this.now.getTime();if(t>=this.sunrise&&t<=this.sunset)return(t-this.sunrise)/(this.sunset-this.sunrise);const dayLen=this.sunset-this.sunrise,nightLen=86400000-dayLen;if(t>this.sunset)return 1+(t-this.sunset)/nightLen;const midnightMs=new Date(this.now).setHours(0,0,0,0);return 1+(t-midnightMs+(86400000-this.sunset+midnightMs))/nightLen;}
  getPhase(){const t=this.now.getTime(),buffer=45*60*1000;if(t<this.sunrise-buffer)return"night";if(t<this.sunrise+buffer)return"dawn";if(t>this.sunset+buffer)return"night";if(t>this.sunset-buffer)return"dusk";return"day";}
  
updateCelestials(solarT){
  const phase = this.getPhase();
  const nowMs = this.now.getTime();
  const buffer = 45 * 60 * 1000;

  const sunProgress = Math.max(0, Math.min(1, solarT));
  const sunArc = Math.sin(sunProgress * Math.PI);
  const sunX = this.HORIZONTAL_START + sunProgress * (this.HORIZONTAL_END - this.HORIZONTAL_START);
  const sunY = this.VERTICAL_HORIZON - sunArc * (this.VERTICAL_HORIZON - this.VERTICAL_PEAK);

  const dawnFade  = Math.min(1, Math.max(0, (nowMs - (this.sunrise - buffer)) / (buffer * 2)));
  const duskFade  = Math.min(1, Math.max(0, ((this.sunset + buffer) - nowMs) / (buffer * 2)));
  const sunOpacity = Math.min(dawnFade, duskFade, Math.min(1, sunArc * 3));

  if(this.sun){
    this.sun.style.left = `${sunX}%`;
    this.sun.style.top  = `${sunY}%`;
    this.sun.style.transform = "translate(-50%,-50%)";
    if(sunOpacity > 0.01){
      this.sun.classList.add("active");
      this.sun.style.opacity = sunOpacity.toFixed(3);
    } else {
      this.sun.classList.remove("active");
      this.sun.style.opacity = "0";
    }
  }

  const moonT = mod(solarT + 0.5, 2);
  const moonProgress = Math.max(0, Math.min(1, moonT > 1 ? moonT - 1 : moonT));
  const moonArc = Math.sin(moonProgress * Math.PI);
  const moonX = this.HORIZONTAL_START + moonProgress * (this.HORIZONTAL_END - this.HORIZONTAL_START);
  const moonY = this.VERTICAL_HORIZON - moonArc * (this.VERTICAL_HORIZON - this.VERTICAL_PEAK);
  const moonOpacity = Math.min(1 - dawnFade + 0.1, 1 - duskFade + 0.1, Math.min(0.9, moonArc * 1.5));

  if(this.moon){
    this.moon.style.left = `${moonX}%`;
    this.moon.style.top  = `${moonY}%`;
    this.moon.style.transform = "translate(-50%,-50%)";
    if(moonOpacity > 0.01 && phase !== "day"){
      this.moon.classList.add("active");
      this.moon.style.opacity = moonOpacity.toFixed(3);
    } else {
      this.moon.classList.remove("active");
      this.moon.style.opacity = "0";
    }
  }
}
  
  
  updateSky(solarT,scene){if(!scene||!window.THREE)return;const nowMs=this.now.getTime(),g=computeSkyGradient(this.icon,nowMs,this.sunrise,this.sunset),rgb=hexToRgb(g.mid);scene.background=new THREE.Color(rgb.r/255,rgb.g/255,rgb.b/255);const sunArc=Math.sin(clamp01(solarT)*Math.PI);this.root.style.setProperty("--sun-intensity",Math.max(0.2,Math.min(1,sunArc*1.2)).toFixed(2));}
  updateClouds(phase){const nowMs=this.now.getTime(),daylight=getDaylight(nowMs,this.sunrise,this.sunset);multiCloudController.setNightFactor(1.0-daylight);const isNightish=(phase==="night"||phase==="dawn"||phase==="dusk"),icon=this.icon||"01d",cloudiness=({"01":0.00,"02":0.25,"03":0.55,"04":0.85,"09":0.90,"10":0.95,"11":1.00,"13":0.95,"50":1.00})[icon.slice(0,2)]??0.35;document.documentElement.style.setProperty("--stars-opacity",(!isNightish?0:Math.max(0,1-cloudiness*1.2)).toFixed(2));}
  update(scene){if(!this.sunrise||!this.sunset)return;this.now=new Date();const solarT=this.getSolarProgress(),phase=this.getPhase();this.updateCelestials(solarT);this.updateSky(solarT,scene);this.updateClouds(phase);}
}



class TacomaWeatherScene {
  constructor(){
    this.lat=47.2529;this.lon=-122.4443;
    this.bridgeController=new BridgeController();
    this.env=new EnvironmentController();
    this.starfield=null;
    this.apiKey="3c511677984d2f330e332b9553c15ae7";
    this.currentData={};this.currentUnit="F";
    this.time=[];this.searchDebounceTimer=null;
    this.monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];
    this.dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    this.renderer=null;this.scene=null;this.camera=null;
    this.water=null;this.dirLight=null;this.ambLight=null;
    this.init();
  }

  init(){
    this.initWater();
    const starsCanvas=document.getElementById("stars-canvas");
    if(starsCanvas){this.starfield=new PixelStarfield(starsCanvas);this.starfield.animate();}
    fogController?.init?.();mistController?.init?.();canvasRainController?.init?.();
    snowController?.init?.();lightningController?.init?.();birdsController?.init?.();hailController?.init?.();
    this.bridgeController.init();multiCloudController.init();
    this.setupEventListeners();this.initializeCustomClock();this.getLocationAndFetch();
    window.addEventListener("resize",()=>this.onResize());
    setInterval(()=>{if(this.env&&this.scene)this.env.update(this.scene);},1000);
  }

  initWater(){
    const canvas=document.getElementById("bay-sky-canvas");
    if(!canvas||!window.THREE||!THREE.Water)return;
    this.renderer=new THREE.WebGLRenderer({canvas,antialias:true});
    this.renderer.outputColorSpace=THREE.SRGBColorSpace;
    this.renderer.toneMapping=THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure=1.0;
    this.renderer.setSize(window.innerWidth,window.innerHeight);
    this.scene=new THREE.Scene();
    this.camera=new THREE.PerspectiveCamera(55,window.innerWidth/window.innerHeight,1,20000);
    this.camera.position.set(0,55,150);
    const waterGeo=new THREE.PlaneGeometry(10000,10000);
    this.water=new THREE.Water(waterGeo,{textureWidth:520,textureHeight:520,waterNormals:new THREE.TextureLoader().load("https://assets.codepen.io/13168878/scene-bay.png",t=>{t.wrapS=t.wrapT=THREE.RepeatWrapping;}),sunDirection:new THREE.Vector3(),sunColor:0xffe484,waterColor:0x001e3c,distortionScale:12.4});
    this.water.rotation.x=-Math.PI/2;this.scene.add(this.water);
    this.dirLight=new THREE.DirectionalLight(0xffe484,0.8);this.scene.add(this.dirLight);
    this.ambLight=new THREE.AmbientLight(0xffe484,0.4);this.scene.add(this.ambLight);
    const animate=()=>{requestAnimationFrame(animate);if(this.water?.material?.uniforms?.time)this.water.material.uniforms.time.value+=1.0/60.0;if(this.env&&this.dirLight&&this.ambLight){const intensity=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--sun-intensity")||"0.5");this.dirLight.intensity=intensity*0.8;this.ambLight.intensity=intensity*0.4;}this.renderer?.render(this.scene,this.camera);};
    animate();
  }


  async reverseGeocode(lat,lon){try{const res=await fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${this.apiKey}`);const data=await res.json();if(data&&data.length)return{city:data[0].name,state:data[0].state||"",country:data[0].country||""};}catch(e){console.warn("reverseGeocode failed:",e);}return{city:"Unknown",state:"",country:""};}
  setLocationLabel({city,state,country}){const el=document.getElementById("location-name");if(!el)return;el.textContent=city||"Current Location";}
  async geocodeZip(zip){const res=await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${this.apiKey}`);const data=await res.json();if(data?.lat&&data?.lon)return{lat:data.lat,lon:data.lon};throw new Error("ZIP not found");}
  async geocodeCity(query){const res=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(query)}&limit=1&appid=${this.apiKey}`);const data=await res.json();if(data?.length)return{lat:data[0].lat,lon:data[0].lon};throw new Error("City not found");}
  debounce(func,delay){return(...args)=>{clearTimeout(this.searchDebounceTimer);this.searchDebounceTimer=setTimeout(()=>func.apply(this,args),delay);};}

  setupEventListeners(){
    const zipInput=document.getElementById("zipInput"),searchBtn=document.getElementById("searchBtn"),locationBtn=document.getElementById("locationBtn"),refreshBtn=document.getElementById("refreshBtn"),unitToggle=document.getElementById("unitToggle");const scrollDown = document.getElementById("scrollDown");
const searchClear = document.getElementById("searchClear");
    const debouncedSearch=this.debounce(q=>this.handleSearch(q),500);
    if(zipInput){zipInput.addEventListener("input",e=>{const q=e.target.value.trim();if(q.length>=3)debouncedSearch(q);});zipInput.addEventListener("keypress",e=>{if(e.key==="Enter"){e.preventDefault();clearTimeout(this.searchDebounceTimer);this.handleSearch(zipInput.value.trim());}});}
    if(searchBtn)searchBtn.addEventListener("click",()=>{if(!zipInput)return;clearTimeout(this.searchDebounceTimer);this.handleSearch(zipInput.value.trim());});
    if(locationBtn)locationBtn.addEventListener("click",()=>this.getLocationAndFetch());
    if(refreshBtn)refreshBtn.addEventListener("click",()=>this.refreshWeather());
    if(unitToggle)unitToggle.addEventListener("click",()=>this.toggleUnit());

if(scrollDown)scrollDown.addEventListener("click",()=>{const vp=document.querySelector(".viewport");if(vp)vp.scrollTo({top:vp.scrollHeight,behavior:"smooth"});});
if(searchClear)searchClear.addEventListener("click",()=>{if(zipInput)zipInput.value="";});
  }

  async handleSearch(query){if(!query)return;try{const isZip=/^\d{5}$/.test(query);const coords=isZip?await this.geocodeZip(query):await this.geocodeCity(query);await this.fetchWeatherData(coords.lat,coords.lon);}catch(e){console.error("Search error:",e);}}
  async getLocationAndFetch(){const lat=window.gl_lat?parseFloat(window.gl_lat):this.lat;const lon=window.gl_lon?parseFloat(window.gl_lon):this.lon;await this.fetchWeatherData(lat,lon);}

       
  async fetchWeatherData(lat,lon){
    if(lat&&lon){this.lat=lat;this.lon=lon;}
    try{
      const res=await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&units=imperial&appid=${this.apiKey}`);
      const data=await res.json();
      this.currentData=data;
      const place=await this.reverseGeocode(this.lat,this.lon);
      this.setLocationLabel(place);
      const iconCode=data?.current?.weather?.[0]?.icon||"01d";
      const sunriseMs=(data?.current?.sunrise||0)*1000;
      const sunsetMs=(data?.current?.sunset||0)*1000;
      this.env.setWeather({sunrise:data.current.sunrise,sunset:data.current.sunset,icon:iconCode});
      applyThemeToRoot(iconCode);
      const g=computeSkyGradient(iconCode,Date.now(),sunriseMs,sunsetMs);
      const rgb=hexToRgb(g.mid);
      if(this.scene)this.scene.background=new THREE.Color(rgb.r/255,rgb.g/255,rgb.b/255);
      this.env.update(this.scene);
      multiCloudController.setByIcon(iconCode);
      this.updateMainDisplay();
      this.updateUserMessage();
      this.updateHourlyForecast();
      this.updateDailyForecast();
      this.updateTiles();
if(data?.current?.visibility!=null) updateVisibility(data.current.visibility);
      if(data?.current?.uvi!=null)updateUV(data.current.uvi);
      try{const aqRes=await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${this.lat}&lon=${this.lon}&appid=${this.apiKey}`);updateAirQuality(await aqRes.json());}catch(e){console.warn("Air quality fetch failed:",e);}
      
      evaluateAndDisplayAlerts(data,{lat:this.lat});
      const windDir=(data.current.wind_deg>180)?1:-1;
      document.documentElement.style.setProperty("--wind-dir",String(windDir));
      this.bridgeController.setWind(data.current.wind_speed);
      this.updateTreeWind(data.current.wind_speed);
      canvasRainController?.setByIcon?.(iconCode);snowController?.setByIcon?.(iconCode);
      lightningController?.setByIcon?.(iconCode);hailController?.setByIcon?.(iconCode);
      birdsController?.setByIcon?.(iconCode);fogController?.setByIcon?.(iconCode);mistController?.setByIcon?.(iconCode);
      const phase=this.env.getPhase();
      if(this.starfield){if(phase==="night")this.starfield.show();else this.starfield.hide();}
    }catch(e){console.error("Weather fetch error:",e);}
  }

  updateMainDisplay() {
  const weather = this.currentData; 
  if(!weather?.current) return;
  
  const current = weather.current, daily = weather.daily?.[0];
  const tempF = Math.round(current.temp), tempC = Math.round((tempF - 32) * 5 / 9);
  const feelsLikeF = Math.round(current.feels_like), feelsLikeC = Math.round((feelsLikeF - 32) * 5 / 9);
  
  // FIX: Push the raw number to the huge "temp" ID
  this.safeSetText("temp", `${this.currentUnit === "F" ? tempF : tempC}`);
  
  // FIX: Push just the unit letter to the tiny "format" ID
  this.safeSetText("format", `${this.currentUnit === "F" ? "F" : "C"}`);
  
  this.safeSetText("description", current.weather?.[0]?.description || "");
  
  if(daily?.temp) {
    const highF = Math.round(daily.temp.max), highC = Math.round((highF - 32) * 5 / 9);
    const lowF = Math.round(daily.temp.min), lowC = Math.round((lowF - 32) * 5 / 9);
    this.safeSetText("temp-high", `H: ${this.currentUnit === "F" ? highF : highC}`);
    this.safeSetText("temp-low", `L: ${this.currentUnit === "F" ? lowF : lowC}`);
  }
  
  this.safeSetText("feels-like", `Feels like ${this.currentUnit === "F" ? feelsLikeF : feelsLikeC}`);
  
  const theme = getWeatherTheme(current.weather?.[0]?.icon || "01d");
  this.safeSetText("theme-description", theme["theme-description"] || "");
  this.safeSetText("theme-quote", theme["theme-quote"] || "");
}

  updateUserMessage(){
    const hour=new Date().getHours();
    let userName="",message="";
    if(hour<8){userName="Hi AA-Ron";message="get ready for bed!";}
    else if(hour<12){userName="Wake up AP!";message="Have the day you deserve!";}
    else if(hour<16){userName="Hi Lazy bones";message="All work no play!!!";}
    else if(hour<20){userName="Another day done dude";message="Get Weed Get Comatose";}
    else{userName="Good Night Aaron";message="Time to rest and recharge!";}
    this.safeSetText("user-name",userName);
    this.safeSetText("welcome-message",message);
  }

  updateHourlyForecast(){
    const weather=this.currentData;if(!weather?.hourly)return;
    const hourlyGrid=document.getElementById("hourly-forecast");if(!hourlyGrid)return;
    hourlyGrid.innerHTML=weather.hourly.slice(0,12).map(hour=>{
      const iconCode=hour.weather?.[0]?.icon||"01d";
      const displayTemp=Math.round(this.currentUnit==="F"?hour.temp:(hour.temp-32)*5/9);
      const pop=Math.round((hour.pop||0)*100);
      return `<div class="hourly-item"><div class="time">${new Date(hour.dt*1000).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}</div><i class="${this.getWiIconClass(iconCode)}"></i><p class="temp-main">${displayTemp}</p><p class="feels-like-small">${pop}% rain</p></div>`;
    }).join("");
  }

  updateDailyForecast(){
  const weather=this.currentData;if(!weather?.daily)return;
  const dailyList=document.getElementById("daily-forecast");if(!dailyList)return;
  const dailyData=weather.daily,tempUnit=this.currentUnit;
  const weekTemps=dailyData.slice(0,7).flatMap(d=>[d.temp.min,d.temp.max]);
  const range=Math.max(1,Math.max(...weekTemps)-Math.min(...weekTemps));
  dailyList.innerHTML=dailyData.slice(0,7).map(day=>{
    const dayMin=Math.round(tempUnit==="F"?day.temp.min:(day.temp.min-32)*5/9);
    const dayMax=Math.round(tempUnit==="F"?day.temp.max:(day.temp.max-32)*5/9);
    const widthPercent=((day.temp.max-day.temp.min)/range)*100;
    const theme=getWeatherTheme(day.weather?.[0]?.icon||"01d");
    return `<article class="forecast-tile"><h2>${new Date(day.dt*1000).toLocaleDateString(undefined,{weekday:"long"})}</h2><div class="forecast-day"><div class="forecast-left"><div class="forecast-date">${new Date(day.dt*1000).toLocaleDateString(undefined,{month:"short"})}</div><i class="${this.getWiIconClass(day.weather?.[0]?.icon)}"></i><div class="forecast-temp">${dayMax}</div></div><div class="forecast-info"><span class="forecast-desc">${day.weather?.[0]?.description||""}</span><div class="range"><div class="low">${dayMin}</div><div class="meter" data-state="neutral" style="--pct:${widthPercent}%"><span class="meter__fill"></span></div><div class="high">${dayMax}</div></div><div class="forecast-details"><p class="days-info">${theme["theme-description"]||""}</p></div><div class="forecast-sun"><span class="forecast-sun-rise"><i class="wi wi-sunrise"></i> ${this.formatTime(day.sunrise)}</span><span class="forecast-sun-set"><i class="wi wi-sunset"></i> ${this.formatTime(day.sunset)}</span></div></div></div></article>`;
  }).join("");
}
updateTiles(){
    const weather=this.currentData;if(!weather?.current)return;
    const current=weather.current,daily=weather.daily?.[0];
    const u=this.currentUnit;
    this.safeSetText("windSpeed",`${Math.round(current.wind_speed)} mph`);
    this.safeSetText("windGust",`${Math.round(current.wind_gust||0)} mph`);
    this.safeSetText("windDirection",`${current.wind_deg}°`);
    this.safeSetText("windCompass",this.getWindDirection(current.wind_deg));
    this.safeSetText("clouds",`${current.clouds}%`);
    this.safeSetText("humidity",`${current.humidity}%`);
    this.safeSetText("pressure",`${current.pressure} mb`);
    const dewPointF=Math.round(current.dew_point),dewPointC=Math.round((dewPointF-32)*5/9);
    this.safeSetText("dewPoint",`${u==="F"?dewPointF:dewPointC}°${u}`);
    this.safeSetText("sunrise",this.formatTime(current.sunrise));
    this.safeSetText("sunset",this.formatTime(current.sunset));
    this.safeSetText("dayLength",this.calculateDayLength(current.sunrise,current.sunset));
    this.safeSetText("season",this.getSeason());
    if(daily?.temp){
      this.safeSetText("rainChance",`${Math.round((daily.pop||0)*100)}%`);
      this.safeSetText("moonPhaseName",this.applyMoonPhase(daily.moon_phase));
      this.safeSetText("nightLength",this.calculateNightLength(current.sunrise,current.sunset));
      if(daily.moonrise&&daily.moonset){this.safeSetText("moonrise",this.formatTime(daily.moonrise));this.safeSetText("moonset",this.formatTime(daily.moonset));}
    }
  }


  calculateNightLength(sunrise,sunset){const dayMs=(sunset-sunrise)*1000,nightMs=86400000-dayMs;return `${Math.floor(nightMs/3600000)}h ${Math.floor(mod(nightMs,3600000)/60000)}m`;}
  calculateDayLength(sunrise,sunset){const diff=(sunset-sunrise)*1000;return `${Math.floor(diff/3600000)}h ${Math.floor(mod(diff,3600000)/60000)}m`;}
  initializeCustomClock(){this.updateCustomClock();}
  get timeAsObject(){const d=new Date();return{h:d.getHours(),m:d.getMinutes()};}
  get timeInWords(){let{h}=this.timeAsObject;const{m}=this.timeAsObject;if(h>12)h-=12;else if(h===0)h=12;const nums={_1:"one",_2:"two",_3:"three",_4:"four",_5:"five",_6:"six",_7:"seven",_8:"eight",_9:"nine",_10:"ten",_11:"eleven",_12:"twelve",_13:"thirteen",_14:"fourteen",_15:"fifteen",_16:"sixteen",_17:"seventeen",_18:"eighteen",_19:"nineteen",_20:"twenty",_30:"thirty",_40:"forty",_50:"fifty"};const hour=nums[`_${h}`];let nextH=h+1;if(nextH>12)nextH-=12;const nextHour=nums[`_${nextH}`];if(m===0)return `${hour} o'clock`;if(m===15)return `quarter past ${hour}`;if(m===30)return `half past ${hour}`;if(m===45)return `quarter to ${nextHour}`;if(m<30){let min=nums[`_${m}`];if(!min&&m>20){const d=`${m}`.padStart(2,"0");min=`${nums[`_${parseInt(d[0])}0`]}-${nums[`_${parseInt(d[1])}`]}`;}return `${min} minutes past ${hour}`;}const left=60-m;let min=nums[`_${left}`];if(!min&&left>20){const d=`${left}`.padStart(2,"0");min=`${nums[`_${parseInt(d[0])}0`]}-${nums[`_${parseInt(d[1])}`]}`;}return `${min} minutes to ${nextHour}`;}
  updateCustomClock(){try{const flyInClass="clock__word--fade-fly-in",time=this.timeInWords.split(" ");if(time.indexOf("half")>-1)time.splice(1,0,"");const timeWordEls=document.querySelectorAll(".clock__word");if(!timeWordEls||timeWordEls.length===0){setTimeout(()=>this.updateCustomClock(),1000);return;}for(let i=0;i<timeWordEls.length;++i){const wordEl=timeWordEls[i];if(!wordEl)continue;wordEl.innerText=time[i]||"";if(time[i]!==this.time[i])wordEl.classList.add(flyInClass);else wordEl.classList.remove(flyInClass);}this.time=time;const now=new Date();this.safeSetText("date",`${this.dayNames[now.getDay()]}, ${this.monthNames[now.getMonth()]} ${now.getDate()}`);clearTimeout(this.timeUpdateLoop);this.timeUpdateLoop=setTimeout(()=>this.updateCustomClock(),1000);}catch(error){console.error("Clock update error:",error);setTimeout(()=>this.updateCustomClock(),5000);}}
  getSeason(date=new Date()){const y=date.getFullYear(),s={spring:new Date(y,2,20),summer:new Date(y,5,21),autumn:new Date(y,8,22),winter:new Date(y,11,21)};if(date>=s.winter||date<s.spring)return"Winter";if(date>=s.spring&&date<s.summer)return"Spring";if(date>=s.summer&&date<s.autumn)return"Summer";return"Autumn";}
  applyMoonPhase(phase){const moonEl=document.getElementById('moon');if(moonEl){moonEl.classList.remove('moon-new','moon-waxing','moon-full','moon-waning');moonEl.style.setProperty('--moon-phase',phase);if(phase===0||phase===1)moonEl.classList.add('moon-new');else if(phase<0.5)moonEl.classList.add('moon-waxing');else if(phase===0.5)moonEl.classList.add('moon-full');else moonEl.classList.add('moon-waning');}if(phase===0||phase===1)return"New Moon";if(phase<0.25)return"Waxing Crescent";if(phase===0.25)return"First Quarter";if(phase<0.5)return"Waxing Gibbous";if(phase===0.5)return"Full Moon";if(phase<0.75)return"Waning Gibbous";if(phase===0.75)return"Last Quarter";return"Waning Crescent";}
  getWindDirection(deg){return["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"][mod(Math.round(deg/22.5),16)];}
  getWiIconClass(icon){const map={"01d":"wi-day-sunny","01n":"wi-night-clear","02d":"wi-day-cloudy","02n":"wi-night-alt-cloudy","03d":"wi-cloud","03n":"wi-cloud","04d":"wi-cloudy","04n":"wi-cloudy","09d":"wi-showers","09n":"wi-showers","10d":"wi-day-rain","10n":"wi-night-alt-rain","11d":"wi-thunderstorm","11n":"wi-thunderstorm","13d":"wi-snow","13n":"wi-snow","50d":"wi-fog","50n":"wi-fog"};return `wi ${map[String(icon)]||"wi-day-sunny"}`;}
  formatTime(timestamp){return new Date(timestamp*1000).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});}
  updateTreeWind(windSpeed){const root=document.documentElement,windFactor=Math.min((Number(windSpeed)||0)/30,2),swayLeft=-2*(1+windFactor),swayRight=2*(1+windFactor),swayDuration=Math.max(2,4-windFactor*1.5),branchDuration=Math.max(1.5,2.5-windFactor),branchX=-3*(1+windFactor*0.5),branchXRight=3*(1+windFactor*0.5),branchLeft=-1*(1+windFactor*0.8),branchRight=1*(1+windFactor*0.8);root.style.setProperty("--sway-left",swayLeft+"deg");root.style.setProperty("--sway-right",swayRight+"deg");root.style.setProperty("--sway-duration",swayDuration+"s");root.style.setProperty("--branch-duration",branchDuration+"s");root.style.setProperty("--branch-x",branchX+"px");root.style.setProperty("--branch-x-right",branchXRight+"px");root.style.setProperty("--branch-left",branchLeft+"deg");root.style.setProperty("--branch-right",branchRight+"deg");}
  toggleUnit(){this.currentUnit=this.currentUnit==="F"?"C":"F";this.updateMainDisplay();this.updateHourlyForecast();this.updateDailyForecast();this.updateTiles();}
  refreshWeather(){this.fetchWeatherData(this.lat,this.lon);}
  safeSetText(id,text){const el=document.getElementById(id);if(el)el.textContent=text;}
  onResize(){if(this.camera&&this.renderer){this.camera.aspect=window.innerWidth/window.innerHeight;this.camera.updateProjectionMatrix();this.renderer.setSize(window.innerWidth,window.innerHeight);}this.bridgeController?.resize?.();}
}



window.addEventListener("DOMContentLoaded",()=>{
  setTimeout(()=>{
    if(typeof THREE==="undefined"){console.error("Three.js failed to load");return;}
    window.TacomaWeatherScene=new TacomaWeatherScene();
  },300);
});
