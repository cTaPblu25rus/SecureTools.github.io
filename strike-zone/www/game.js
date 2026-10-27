(()=>{var nc="170";var Wd=0,oh=1,Xd=2;var xu=1,ic=2,On=3,fi=0,We=1,Vn=2,hi=0,ui=1,Cn=2,ah=3,lh=4,qd=5,Di=100,Yd=101,$d=102,Zd=103,Kd=104,Jd=200,jd=201,Qd=202,tf=203,za=204,Ba=205,ef=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,cf=213,hf=214,Oa=0,Ha=1,Va=2,gs=3,Ga=4,Wa=5,Xa=6,qa=7,sc=0,uf=1,df=2,di=0,ff=1,pf=2,mf=3,gf=4,yf=5,xf=6,_f=7;var _u=300,ys=301,xs=302,Ya=303,$a=304,Io=306,ir=1e3,Ni=1001,Za=1002,on=1003,vf=1004;var wr=1005;var An=1006,oa=1007;var Gn=1008;var Yn=1009,vu=1010,bu=1011,sr=1012,rc=1013,ki=1014,Rn=1015,fr=1016,oc=1017,ac=1018,_s=1020,Mu=35902,Su=1021,wu=1022,bn=1023,Tu=1024,Eu=1025,fs=1026,vs=1027,lc=1028,cc=1029,Au=1030,hc=1031;var uc=1033,to=33776,eo=33777,no=33778,io=33779,Ka=35840,Ja=35841,ja=35842,Qa=35843,tl=36196,el=37492,nl=37496,il=37808,sl=37809,rl=37810,ol=37811,al=37812,ll=37813,cl=37814,hl=37815,ul=37816,dl=37817,fl=37818,pl=37819,ml=37820,gl=37821,so=36492,yl=36494,xl=36495,Ru=36283,_l=36284,vl=36285,bl=36286;var ro=2300,Ml=2301,aa=2302,ch=2400,hh=2401,uh=2402;var bf=3200,Mf=3201;var Cu=0,Sf=1,li="",ke="srgb",Rs="srgb-linear",Po="linear",ue="srgb";var Yi=7680;var dh=519,wf=512,Tf=513,Ef=514,Iu=515,Af=516,Rf=517,Cf=518,If=519,Sl=35044,Cs=35048;var fh="300 es",Wn=2e3,oo=2001,pi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ph=1234567,tr=Math.PI/180,rr=180/Math.PI;function Xn(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[s&255]+Ve[s>>8&255]+Ve[s>>16&255]+Ve[s>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function $e(s,t,e){return Math.max(t,Math.min(e,s))}function dc(s,t){return(s%t+t)%t}function Pf(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Lf(s,t,e){return s!==t?(e-s)/(t-s):0}function er(s,t,e){return(1-e)*s+e*t}function Df(s,t,e,n){return er(s,t,1-Math.exp(-e*n))}function Uf(s,t=1){return t-Math.abs(dc(s,t*2)-t)}function Nf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function kf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function Ff(s,t){return s+Math.floor(Math.random()*(t-s+1))}function zf(s,t){return s+Math.random()*(t-s)}function Bf(s){return s*(.5-Math.random())}function Of(s){s!==void 0&&(ph=s);let t=ph+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Hf(s){return s*tr}function Vf(s){return s*rr}function Gf(s){return(s&s-1)===0&&s!==0}function Wf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Xf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function qf(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ce(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Lo={DEG2RAD:tr,RAD2DEG:rr,generateUUID:Xn,clamp:$e,euclideanModulo:dc,mapLinear:Pf,inverseLerp:Lf,lerp:er,damp:Df,pingpong:Uf,smoothstep:Nf,smootherstep:kf,randInt:Ff,randFloat:zf,randFloatSpread:Bf,seededRandom:Of,degToRad:Hf,radToDeg:Vf,isPowerOfTwo:Gf,ceilPowerOfTwo:Wf,floorPowerOfTwo:Xf,setQuaternionFromProperEuler:qf,normalize:ce,denormalize:vn},qt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ht=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],y=i[0],m=i[3],f=i[6],S=i[1],w=i[4],v=i[7],I=i[2],T=i[5],C=i[8];return r[0]=o*y+a*S+l*I,r[3]=o*m+a*w+l*T,r[6]=o*f+a*v+l*C,r[1]=c*y+h*S+u*I,r[4]=c*m+h*w+u*T,r[7]=c*f+h*v+u*C,r[2]=d*y+p*S+g*I,r[5]=d*m+p*w+g*T,r[8]=d*f+p*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=u*y,t[1]=(i*c-h*n)*y,t[2]=(a*n-i*o)*y,t[3]=d*y,t[4]=(h*e-i*l)*y,t[5]=(i*r-a*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(la.makeScale(t,e)),this}rotate(t){return this.premultiply(la.makeRotation(-t)),this}translate(t,e){return this.premultiply(la.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},la=new Ht;function Pu(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Yf(){let s=ao("canvas");return s.style.display="block",s}var mh={};function js(s){s in mh||(mh[s]=!0,console.warn(s))}function $f(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Zf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:Rs,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(s.r=ps(s.r),s.g=ps(s.g),s.b=ps(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===li?Po:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function qn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ps(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var gh=[.64,.33,.3,.6,.15,.06],yh=[.2126,.7152,.0722],xh=[.3127,.329],_h=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vh=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Rs]:{primaries:gh,whitePoint:xh,transfer:Po,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:yh,workingColorSpaceConfig:{unpackColorSpace:ke},outputColorSpaceConfig:{drawingBufferColorSpace:ke}},[ke]:{primaries:gh,whitePoint:xh,transfer:ue,toXYZ:_h,fromXYZ:vh,luminanceCoefficients:yh,outputColorSpaceConfig:{drawingBufferColorSpace:ke}}});var $i,wl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=ao("canvas")),$i.width=t.width,$i.height=t.height;let n=$i.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=qn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(qn(e[n]/255)*255):e[n]=qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Jf=0,lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=Xn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(ca(i[o].image)):r.push(ca(i[o]))}else r=ca(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function ca(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?wl.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var jf=0,Je=class s extends pi{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ni,i=Ni,r=An,o=Gn,a=bn,l=Yn,c=s.DEFAULT_ANISOTROPY,h=li){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=Xn(),this.name="",this.source=new lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_u)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ir:t.x=t.x-Math.floor(t.x);break;case Ni:t.x=t.x<0?0:1;break;case Za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ir:t.y=t.y-Math.floor(t.y);break;case Ni:t.y=t.y<0?0:1;break;case Za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=_u;Je.DEFAULT_ANISOTROPY=1;var de=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(p+1)/2,I=(f+1)/2,T=(h+d)/4,C=(u+y)/4,R=(g+m)/4;return w>v&&w>I?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=C/n):v>I?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=R/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=C/r,i=R/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-y)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Tl=class extends pi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Je(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$n=class extends Tl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},co=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var El=class extends Je{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=on,this.minFilter=on,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(u!==y||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*y,S=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let I=Math.sqrt(w),T=Math.atan2(I,f*S);m=Math.sin(m*T)/I,a=Math.sin(a*T)/I}let v=a*S;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+y*v,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs($e(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ha.copy(this).projectOnVector(t),this.sub(ha)}reflect(t){return this.sub(ha.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos($e(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ha=new P,bh=new Mn,Zn=class{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(r,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hs),Er.subVectors(this.max,Hs),Zi.subVectors(t.a,Hs),Ki.subVectors(t.b,Hs),Ji.subVectors(t.c,Hs),ni.subVectors(Ki,Zi),ii.subVectors(Ji,Ki),Ei.subVectors(Zi,Ji);let e=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-Ei.z,Ei.y,ni.z,0,-ni.x,ii.z,0,-ii.x,Ei.z,0,-Ei.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-Ei.y,Ei.x,0];return!ua(e,Zi,Ki,Ji,Er)||(e=[1,0,0,0,1,0,0,0,1],!ua(e,Zi,Ki,Ji,Er))?!1:(Ar.crossVectors(ni,ii),e=[Ar.x,Ar.y,Ar.z],ua(e,Zi,Ki,Ji,Er))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Nn=[new P,new P,new P,new P,new P,new P,new P,new P],yn=new P,Tr=new Zn,Zi=new P,Ki=new P,Ji=new P,ni=new P,ii=new P,Ei=new P,Hs=new P,Er=new P,Ar=new P,Ai=new P;function ua(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ai.fromArray(s,r);let a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Qf=new Zn,Vs=new P,da=new P,Kn=class{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Qf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vs.subVectors(t,this.center);let e=Vs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Vs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vs.copy(t.center).add(da)),this.expandByPoint(Vs.copy(t.center).sub(da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new P,fa=new P,Rr=new P,si=new P,pa=new P,Cr=new P,ma=new P,or=class{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fa.copy(t).add(e).multiplyScalar(.5),Rr.copy(e).sub(t).normalize(),si.copy(this.origin).sub(fa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Rr),a=si.dot(this.direction),l=-si.dot(Rr),c=si.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fa).addScaledVector(Rr,d),p}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,r){pa.subVectors(e,t),Cr.subVectors(n,t),ma.crossVectors(pa,Cr);let o=this.direction.dot(ma),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;si.subVectors(this.origin,t);let l=a*this.direction.dot(Cr.crossVectors(si,Cr));if(l<0)return null;let c=a*this.direction.dot(pa.cross(si));if(c<0||l+c>o)return null;let h=-a*si.dot(ma);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,y,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,y,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,y,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-y*c,e[9]=-a*l,e[2]=y-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d+y*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,y=c*u;e[0]=d-y*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,y=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+y,e[1]=l*u,e[5]=y*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=y-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-y*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,y=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+y,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=y*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){let i=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),ri.crossVectors(n,sn),ri.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),ri.crossVectors(n,sn)),ri.normalize(),Ir.crossVectors(sn,ri),i[0]=ri.x,i[4]=Ir.x,i[8]=sn.x,i[1]=ri.y,i[5]=Ir.y,i[9]=sn.y,i[2]=ri.z,i[6]=Ir.z,i[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],y=n[6],m=n[10],f=n[14],S=n[3],w=n[7],v=n[11],I=n[15],T=i[0],C=i[4],R=i[8],b=i[12],x=i[1],A=i[5],O=i[9],F=i[13],W=i[2],Y=i[6],B=i[10],Z=i[14],V=i[3],it=i[7],st=i[11],ft=i[15];return r[0]=o*T+a*x+l*W+c*V,r[4]=o*C+a*A+l*Y+c*it,r[8]=o*R+a*O+l*B+c*st,r[12]=o*b+a*F+l*Z+c*ft,r[1]=h*T+u*x+d*W+p*V,r[5]=h*C+u*A+d*Y+p*it,r[9]=h*R+u*O+d*B+p*st,r[13]=h*b+u*F+d*Z+p*ft,r[2]=g*T+y*x+m*W+f*V,r[6]=g*C+y*A+m*Y+f*it,r[10]=g*R+y*O+m*B+f*st,r[14]=g*b+y*F+m*Z+f*ft,r[3]=S*T+w*x+v*W+I*V,r[7]=S*C+w*A+v*Y+I*it,r[11]=S*R+w*O+v*B+I*st,r[15]=S*b+w*F+v*Z+I*ft,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],y=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+y*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],y=t[13],m=t[14],f=t[15],S=u*m*c-y*d*c+y*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*y*c-g*u*c+g*a*p-o*y*p-h*a*f+o*u*f,I=g*u*l-h*y*l-g*a*d+o*y*d+h*a*m-o*u*m,T=e*S+n*w+i*v+r*I;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=S*C,t[1]=(y*d*r-u*m*r-y*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(a*m*r-y*l*r+y*i*c-n*m*c-a*i*f+n*l*f)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*C,t[4]=w*C,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*C,t[8]=v*C,t[9]=(g*u*r-h*y*r-g*n*p+e*y*p+h*n*f-e*u*f)*C,t[10]=(o*y*r-g*a*r+g*n*c-e*y*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*C,t[12]=I*C,t[13]=(h*y*i-g*u*i+g*n*d-e*y*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*y*i-g*n*l+e*y*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,y=o*h,m=o*u,f=a*u,S=l*c,w=l*h,v=l*u,I=n.x,T=n.y,C=n.z;return i[0]=(1-(y+f))*I,i[1]=(p+v)*I,i[2]=(g-w)*I,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(g+w)*C,i[9]=(m-S)*C,i[10]=(1-(d+y))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=ji.set(i[0],i[1],i[2]).length(),o=ji.set(i[4],i[5],i[6]).length(),a=ji.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);let c=1/r,h=1/o,u=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Wn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(a===Wn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===oo)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Wn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h,g,y;if(a===Wn)g=(o+r)*u,y=-2*u;else if(a===oo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ji=new P,xn=new jt,tp=new P(0,0,0),ep=new P(1,1,1),ri=new P,Ir=new P,sn=new P,Mh=new jt,Sh=new Mn,an=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin($e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-$e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Mh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Mh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};an.DEFAULT_ORDER="XYZ";var ho=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},np=0,wh=new P,Qi=new Mn,Fn=new jt,Pr=new P,Gs=new P,ip=new P,sp=new Mn,Th=new P(1,0,0),Eh=new P(0,1,0),Ah=new P(0,0,1),Rh={type:"added"},rp={type:"removed"},ts={type:"childadded",child:null},ga={type:"childremoved",child:null},Fe=class s extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Xn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new P,e=new an,n=new Mn,i=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new Ht}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Th,t)}rotateY(t){return this.rotateOnAxis(Eh,t)}rotateZ(t){return this.rotateOnAxis(Ah,t)}translateOnAxis(t,e){return wh.copy(t).applyQuaternion(this.quaternion),this.position.add(wh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Th,t)}translateY(t){return this.translateOnAxis(Eh,t)}translateZ(t){return this.translateOnAxis(Ah,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pr.copy(t):Pr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Gs,Pr,this.up):Fn.lookAt(Pr,Gs,this.up),this.quaternion.setFromRotationMatrix(Fn),i&&(Fn.extractRotation(i.matrixWorld),Qi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rh),ts.child=t,this.dispatchEvent(ts),ts.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),ga.child=t,this.dispatchEvent(ga),ga.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rh),ts.child=t,this.dispatchEvent(ts),ts.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Fe.DEFAULT_UP=new P(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new P,zn=new P,ya=new P,Bn=new P,es=new P,ns=new P,Ch=new P,xa=new P,_a=new P,va=new P,ba=new de,Ma=new de,Sa=new de,ci=class s{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){_n.subVectors(i,e),zn.subVectors(n,e),ya.subVectors(t,e);let o=_n.dot(_n),a=_n.dot(zn),l=_n.dot(ya),c=zn.dot(zn),h=zn.dot(ya),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(o,Bn.y),l.addScaledVector(a,Bn.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ba.setScalar(0),Ma.setScalar(0),Sa.setScalar(0),ba.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),Sa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ba,r.x),o.addScaledVector(Ma,r.y),o.addScaledVector(Sa,r.z),o}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),zn.subVectors(t,e),_n.cross(zn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),_n.cross(zn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;es.subVectors(i,n),ns.subVectors(r,n),xa.subVectors(t,n);let l=es.dot(xa),c=ns.dot(xa);if(l<=0&&c<=0)return e.copy(n);_a.subVectors(t,i);let h=es.dot(_a),u=ns.dot(_a);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(es,o);va.subVectors(t,r);let p=es.dot(va),g=ns.dot(va);if(g>=0&&p<=g)return e.copy(r);let y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ns,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Ch.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(Ch,a);let f=1/(m+y+d);return o=y*f,a=d*f,e.copy(n).addScaledVector(es,o).addScaledVector(ns,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},oi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function wa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Dt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=dc(t,1),e=$e(e,0,1),n=$e(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=wa(o,r,t+1/3),this.g=wa(o,r,t),this.b=wa(o,r,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ke){let n=Lu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ke){return ne.fromWorkingColorSpace(Ge.copy(this),t),Math.round($e(Ge.r*255,0,255))*65536+Math.round($e(Ge.g*255,0,255))*256+Math.round($e(Ge.b*255,0,255))}getHexString(t=ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,i=Ge.g,r=Ge.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ke){ne.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,i=Ge.b;return t!==ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(oi),this.setHSL(oi.h+t,oi.s+e,oi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(oi),t.getHSL(Lr);let n=er(oi.h,Lr.h,e),i=er(oi.s,Lr.s,e),r=er(oi.l,Lr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Dt;Dt.NAMES=Lu;var op=0,In=class extends pi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Xn(),this.name="",this.blending=ui,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=za,this.blendDst=Ba,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ui&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jn=class extends In{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ce=new P,Dr=new qt,Me=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Sl,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dr.fromBufferAttribute(this,e),Dr.applyMatrix3(t),this.setXY(e,Dr.x,Dr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sl&&(t.usage=this.usage),t}};var uo=class extends Me{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var fo=class extends Me{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var we=class extends Me{constructor(t,e,n){super(new Float32Array(t),e,n)}},ap=0,un=new jt,Ta=new Fe,is=new P,rn=new Zn,Ws=new Zn,Ne=new P,Le=class s extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Xn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Pu(t)?fo:uo)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Ta.lookAt(t),Ta.updateMatrix(),this.applyMatrix4(Ta.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new we(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Kn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Ws.setFromBufferAttribute(a),this.morphTargetsRelative?(Ne.addVectors(rn.min,Ws.min),rn.expandByPoint(Ne),Ne.addVectors(rn.max,Ws.max),rn.expandByPoint(Ne)):(rn.expandByPoint(Ws.min),rn.expandByPoint(Ws.max))}rn.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Ne.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Ne));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ne.fromBufferAttribute(a,c),l&&(is.fromBufferAttribute(t,c),Ne.add(is)),i=Math.max(i,n.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Me(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new P,l[R]=new P;let c=new P,h=new P,u=new P,d=new qt,p=new qt,g=new qt,y=new P,m=new P;function f(R,b,x){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[R].add(y),a[b].add(y),a[x].add(y),l[R].add(m),l[b].add(m),l[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,b=S.length;R<b;++R){let x=S[R],A=x.start,O=x.count;for(let F=A,W=A+O;F<W;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let w=new P,v=new P,I=new P,T=new P;function C(R){I.fromBufferAttribute(i,R),T.copy(I);let b=a[R];w.copy(b),w.sub(I.multiplyScalar(I.dot(b))).normalize(),v.crossVectors(T,b);let A=v.dot(l[R])<0?-1:1;o.setXYZW(R,w.x,w.y,w.z,A)}for(let R=0,b=S.length;R<b;++R){let x=S[R],A=x.start,O=x.count;for(let F=A,W=A+O;F<W;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Me(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),y=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Me(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ih=new jt,Ri=new or,Ur=new Kn,Ph=new P,Nr=new P,kr=new P,Fr=new P,Ea=new P,zr=new P,Lh=new P,Br=new P,Ie=class extends Fe{constructor(t=new Le,e=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Ea.fromBufferAttribute(u,t),o?zr.addScaledVector(Ea,h):zr.addScaledVector(Ea.sub(e),h))}e.add(zr)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Ur.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ur,Ph)===null||Ri.origin.distanceToSquared(Ph)>(t.far-t.near)**2))&&(Ih.copy(r).invert(),Ri.copy(t.ray).applyMatrix4(Ih),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,I=w;v<I;v+=3){let T=a.getX(v),C=a.getX(v+1),R=a.getX(v+2);i=Or(this,f,t,n,c,h,u,T,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);i=Or(this,o,t,n,c,h,u,S,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=d.length;g<y;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,I=w;v<I;v+=3){let T=v,C=v+1,R=v+2;i=Or(this,f,t,n,c,h,u,T,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,f=y;m<f;m+=3){let S=m,w=m+1,v=m+2;i=Or(this,o,t,n,c,h,u,S,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function lp(s,t,e,n,i,r,o,a){let l;if(t.side===We?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===fi,a),l===null)return null;Br.copy(a),Br.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Br);return c<e.near||c>e.far?null:{distance:c,point:Br.clone(),object:s}}function Or(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Nr),s.getVertexPosition(l,kr),s.getVertexPosition(c,Fr);let h=lp(s,t,e,n,Nr,kr,Fr,Lh);if(h){let u=new P;ci.getBarycoord(Lh,Nr,kr,Fr,u),i&&(h.uv=ci.getInterpolatedAttribute(i,a,l,c,u,new qt)),r&&(h.uv1=ci.getInterpolatedAttribute(r,a,l,c,u,new qt)),o&&(h.normal=ci.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new P,materialIndex:0};ci.getNormal(Nr,kr,Fr,d.normal),h.face=d,h.barycoord=u}return h}var Fi=class s extends Le{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(u,2));function g(y,m,f,S,w,v,I,T,C,R,b){let x=v/C,A=I/R,O=v/2,F=I/2,W=T/2,Y=C+1,B=R+1,Z=0,V=0,it=new P;for(let st=0;st<B;st++){let ft=st*A-F;for(let Pt=0;Pt<Y;Pt++){let $t=Pt*x-O;it[y]=$t*S,it[m]=ft*w,it[f]=W,c.push(it.x,it.y,it.z),it[y]=0,it[m]=0,it[f]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Pt/C),u.push(1-st/R),Z+=1}}for(let st=0;st<R;st++)for(let ft=0;ft<C;ft++){let Pt=d+ft+Y*st,$t=d+ft+Y*(st+1),q=d+(ft+1)+Y*(st+1),Q=d+(ft+1)+Y*st;l.push(Pt,$t,Q),l.push($t,q,Q),V+=6}a.addGroup(p,V,b),p+=V,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function bs(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ye(s){let t={};for(let e=0;e<s.length;e++){let n=bs(s[e]);for(let i in n)t[i]=n[i]}return t}function cp(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Du(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var hp={clone:bs,merge:Ye},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends In{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=bs(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},po=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ai=new P,Dh=new qt,Uh=new qt,Be=class extends po{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rr*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ai.x,ai.y).multiplyScalar(-t/ai.z),ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ai.x,ai.y).multiplyScalar(-t/ai.z)}getViewSize(t,e){return this.getViewBounds(t,Dh,Uh),e.subVectors(Uh,Dh)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ss=-90,rs=1,Al=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Be(ss,rs,t,e);i.layers=this.layers,this.add(i);let r=new Be(ss,rs,t,e);r.layers=this.layers,this.add(r);let o=new Be(ss,rs,t,e);o.layers=this.layers,this.add(o);let a=new Be(ss,rs,t,e);a.layers=this.layers,this.add(a);let l=new Be(ss,rs,t,e);l.layers=this.layers,this.add(l);let c=new Be(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Wn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},mo=class extends Je{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ys,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Rl=class extends $n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new mo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Fi(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:hi});r.uniforms.tEquirect.value=e;let o=new Ie(i,r),a=e.minFilter;return e.minFilter===Gn&&(e.minFilter=An),new Al(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},Aa=new P,fp=new P,pp=new Ht,Hn=class{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Aa.subVectors(n,e).cross(fp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Aa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pp.getNormalMatrix(t),i=this.coplanarPoint(Aa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Kn,Hr=new P,ar=class{constructor(t=new Hn,e=new Hn,n=new Hn,i=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Wn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],y=i[10],m=i[11],f=i[12],S=i[13],w=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+S).normalize(),n[3].setComponents(l-o,d-h,m-g,v-S).normalize(),n[4].setComponents(l-a,d-u,m-y,v-w).normalize(),e===Wn)n[5].setComponents(l+a,d+u,m+y,v+w).normalize();else if(e===oo)n[5].setComponents(a,u,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Hr.x=i.normal.x>0?t.max.x:t.min.x,Hr.y=i.normal.y>0?t.max.y:t.min.y,Hr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Uu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function mp(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],y=u[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let y=u[p];s.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var mi=class s extends Le{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],y=[],m=[];for(let f=0;f<h;f++){let S=f*d-o;for(let w=0;w<c;w++){let v=w*u-r;g.push(v,-S,0),y.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let w=S+c*f,v=S+c*(f+1),I=S+1+c*(f+1),T=S+1+c*f;p.push(w,v,T),p.push(v,I,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mp=`#ifdef USE_AOMAP
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
#endif`,Sp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ep=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Pp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Bp=`#define PI 3.141592653589793
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
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,em=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,nm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,im=`#ifdef USE_GRADIENTMAP
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
}`,sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,am=`uniform bool receiveShadow;
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
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,cm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,um=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fm=`PhysicalMaterial material;
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
#endif`,pm=`struct PhysicalMaterial {
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
}`,mm=`
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
#endif`,gm=`#if defined( RE_IndirectDiffuse )
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
#endif`,ym=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Tm=`#if defined( USE_POINTS_UV )
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
#endif`,Em=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Im=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pm=`#ifdef USE_MORPHTARGETS
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
#endif`,Lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Um=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zm=`#ifdef USE_NORMALMAP
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
#endif`,Bm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Hm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Xm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ym=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$m=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Zm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Km=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t0=`float getShadowMask() {
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
}`,e0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n0=`#ifdef USE_SKINNING
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
#endif`,i0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,s0=`#ifdef USE_SKINNING
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
#endif`,r0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,m0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g0=`uniform sampler2D t2D;
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
}`,y0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`#include <common>
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
}`,M0=`#if DEPTH_PACKING == 3200
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
}`,S0=`#define DISTANCE
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
}`,w0=`#define DISTANCE
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
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`uniform float scale;
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
}`,R0=`uniform vec3 diffuse;
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
}`,C0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,P0=`#define LAMBERT
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define MATCAP
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
}`,U0=`#define MATCAP
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
}`,N0=`#define NORMAL
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
}`,k0=`#define NORMAL
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
}`,F0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,B0=`#define STANDARD
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
}`,O0=`#define STANDARD
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
}`,H0=`#define TOON
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
}`,V0=`#define TOON
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
}`,G0=`uniform float size;
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
}`,W0=`uniform vec3 diffuse;
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
}`,X0=`#include <common>
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
}`,q0=`uniform vec3 color;
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
}`,Y0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,Wt={alphahash_fragment:gp,alphahash_pars_fragment:yp,alphamap_fragment:xp,alphamap_pars_fragment:_p,alphatest_fragment:vp,alphatest_pars_fragment:bp,aomap_fragment:Mp,aomap_pars_fragment:Sp,batching_pars_vertex:wp,batching_vertex:Tp,begin_vertex:Ep,beginnormal_vertex:Ap,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Pp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:Np,color_pars_fragment:kp,color_pars_vertex:Fp,color_vertex:zp,common:Bp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Hp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:Yp,envmap_fragment:$p,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Kp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:lm,envmap_vertex:jp,fog_vertex:Qp,fog_pars_vertex:tm,fog_fragment:em,fog_pars_fragment:nm,gradientmap_pars_fragment:im,lightmap_pars_fragment:sm,lights_lambert_fragment:rm,lights_lambert_pars_fragment:om,lights_pars_begin:am,lights_toon_fragment:cm,lights_toon_pars_fragment:hm,lights_phong_fragment:um,lights_phong_pars_fragment:dm,lights_physical_fragment:fm,lights_physical_pars_fragment:pm,lights_fragment_begin:mm,lights_fragment_maps:gm,lights_fragment_end:ym,logdepthbuf_fragment:xm,logdepthbuf_pars_fragment:_m,logdepthbuf_pars_vertex:vm,logdepthbuf_vertex:bm,map_fragment:Mm,map_pars_fragment:Sm,map_particle_fragment:wm,map_particle_pars_fragment:Tm,metalnessmap_fragment:Em,metalnessmap_pars_fragment:Am,morphinstance_vertex:Rm,morphcolor_vertex:Cm,morphnormal_vertex:Im,morphtarget_pars_vertex:Pm,morphtarget_vertex:Lm,normal_fragment_begin:Dm,normal_fragment_maps:Um,normal_pars_fragment:Nm,normal_pars_vertex:km,normal_vertex:Fm,normalmap_pars_fragment:zm,clearcoat_normal_fragment_begin:Bm,clearcoat_normal_fragment_maps:Om,clearcoat_pars_fragment:Hm,iridescence_pars_fragment:Vm,opaque_fragment:Gm,packing:Wm,premultiplied_alpha_fragment:Xm,project_vertex:qm,dithering_fragment:Ym,dithering_pars_fragment:$m,roughnessmap_fragment:Zm,roughnessmap_pars_fragment:Km,shadowmap_pars_fragment:Jm,shadowmap_pars_vertex:jm,shadowmap_vertex:Qm,shadowmask_pars_fragment:t0,skinbase_vertex:e0,skinning_pars_vertex:n0,skinning_vertex:i0,skinnormal_vertex:s0,specularmap_fragment:r0,specularmap_pars_fragment:o0,tonemapping_fragment:a0,tonemapping_pars_fragment:l0,transmission_fragment:c0,transmission_pars_fragment:h0,uv_pars_fragment:u0,uv_pars_vertex:d0,uv_vertex:f0,worldpos_vertex:p0,background_vert:m0,background_frag:g0,backgroundCube_vert:y0,backgroundCube_frag:x0,cube_vert:_0,cube_frag:v0,depth_vert:b0,depth_frag:M0,distanceRGBA_vert:S0,distanceRGBA_frag:w0,equirect_vert:T0,equirect_frag:E0,linedashed_vert:A0,linedashed_frag:R0,meshbasic_vert:C0,meshbasic_frag:I0,meshlambert_vert:P0,meshlambert_frag:L0,meshmatcap_vert:D0,meshmatcap_frag:U0,meshnormal_vert:N0,meshnormal_frag:k0,meshphong_vert:F0,meshphong_frag:z0,meshphysical_vert:B0,meshphysical_frag:O0,meshtoon_vert:H0,meshtoon_frag:V0,points_vert:G0,points_frag:W0,shadow_vert:X0,shadow_frag:q0,sprite_vert:Y0,sprite_frag:$0},ot={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},En={basic:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Wt.meshbasic_vert,fragmentShader:Wt.meshbasic_frag},lambert:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Wt.meshlambert_vert,fragmentShader:Wt.meshlambert_frag},phong:{uniforms:Ye([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:Wt.meshphong_vert,fragmentShader:Wt.meshphong_frag},standard:{uniforms:Ye([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag},toon:{uniforms:Ye([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Dt(0)}}]),vertexShader:Wt.meshtoon_vert,fragmentShader:Wt.meshtoon_frag},matcap:{uniforms:Ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Wt.meshmatcap_vert,fragmentShader:Wt.meshmatcap_frag},points:{uniforms:Ye([ot.points,ot.fog]),vertexShader:Wt.points_vert,fragmentShader:Wt.points_frag},dashed:{uniforms:Ye([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wt.linedashed_vert,fragmentShader:Wt.linedashed_frag},depth:{uniforms:Ye([ot.common,ot.displacementmap]),vertexShader:Wt.depth_vert,fragmentShader:Wt.depth_frag},normal:{uniforms:Ye([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Wt.meshnormal_vert,fragmentShader:Wt.meshnormal_frag},sprite:{uniforms:Ye([ot.sprite,ot.fog]),vertexShader:Wt.sprite_vert,fragmentShader:Wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wt.background_vert,fragmentShader:Wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Wt.backgroundCube_vert,fragmentShader:Wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wt.cube_vert,fragmentShader:Wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wt.equirect_vert,fragmentShader:Wt.equirect_frag},distanceRGBA:{uniforms:Ye([ot.common,ot.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wt.distanceRGBA_vert,fragmentShader:Wt.distanceRGBA_frag},shadow:{uniforms:Ye([ot.lights,ot.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:Wt.shadow_vert,fragmentShader:Wt.shadow_frag}};En.physical={uniforms:Ye([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Wt.meshphysical_vert,fragmentShader:Wt.meshphysical_frag};var Vr={r:0,b:0,g:0},Ii=new an,Z0=new jt;function K0(s,t,e,n,i,r,o){let a=new Dt(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function y(S){let w=!1,v=g(S);v===null?f(a,l):v&&v.isColor&&(f(v,1),w=!0);let I=s.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,w){let v=g(w);v&&(v.isCubeTexture||v.mapping===Io)?(h===void 0&&(h=new Ie(new Fi(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:bs(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ii.copy(w.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Z0.makeRotationFromEuler(Ii)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ie(new mi(2,2),new je({name:"BackgroundMaterial",uniforms:bs(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,w){S.getRGB(Vr,Du(s)),n.buffers.color.setClear(Vr.r,Vr.g,Vr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:y,addToRenderList:m}}function J0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(x,A,O,F,W){let Y=!1,B=u(F,O,A);r!==B&&(r=B,c(r.object)),Y=p(x,F,O,W),Y&&g(x,F,O,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,v(x,A,O,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(x){return s.bindVertexArray(x)}function h(x){return s.deleteVertexArray(x)}function u(x,A,O){let F=O.wireframe===!0,W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Y=W[A.id];Y===void 0&&(Y={},W[A.id]=Y);let B=Y[F];return B===void 0&&(B=d(l()),Y[F]=B),B}function d(x){let A=[],O=[],F=[];for(let W=0;W<e;W++)A[W]=0,O[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:O,attributeDivisors:F,object:x,attributes:{},index:null}}function p(x,A,O,F){let W=r.attributes,Y=A.attributes,B=0,Z=O.getAttributes();for(let V in Z)if(Z[V].location>=0){let st=W[V],ft=Y[V];if(ft===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(ft=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(ft=x.instanceColor)),st===void 0||st.attribute!==ft||ft&&st.data!==ft.data)return!0;B++}return r.attributesNum!==B||r.index!==F}function g(x,A,O,F){let W={},Y=A.attributes,B=0,Z=O.getAttributes();for(let V in Z)if(Z[V].location>=0){let st=Y[V];st===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));let ft={};ft.attribute=st,st&&st.data&&(ft.data=st.data),W[V]=ft,B++}r.attributes=W,r.attributesNum=B,r.index=F}function y(){let x=r.newAttributes;for(let A=0,O=x.length;A<O;A++)x[A]=0}function m(x){f(x,0)}function f(x,A){let O=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;O[x]=1,F[x]===0&&(s.enableVertexAttribArray(x),F[x]=1),W[x]!==A&&(s.vertexAttribDivisor(x,A),W[x]=A)}function S(){let x=r.newAttributes,A=r.enabledAttributes;for(let O=0,F=A.length;O<F;O++)A[O]!==x[O]&&(s.disableVertexAttribArray(O),A[O]=0)}function w(x,A,O,F,W,Y,B){B===!0?s.vertexAttribIPointer(x,A,O,W,Y):s.vertexAttribPointer(x,A,O,F,W,Y)}function v(x,A,O,F){y();let W=F.attributes,Y=O.getAttributes(),B=A.defaultAttributeValues;for(let Z in Y){let V=Y[Z];if(V.location>=0){let it=W[Z];if(it===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){let st=it.normalized,ft=it.itemSize,Pt=t.get(it);if(Pt===void 0)continue;let $t=Pt.buffer,q=Pt.type,Q=Pt.bytesPerElement,mt=q===s.INT||q===s.UNSIGNED_INT||it.gpuType===rc;if(it.isInterleavedBufferAttribute){let rt=it.data,Rt=rt.stride,kt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Yt=0;Yt<V.locationSize;Yt++)f(V.location+Yt,rt.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Yt=0;Yt<V.locationSize;Yt++)m(V.location+Yt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let Yt=0;Yt<V.locationSize;Yt++)w(V.location+Yt,ft/V.locationSize,q,st,Rt*Q,(kt+ft/V.locationSize*Yt)*Q,mt)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<V.locationSize;rt++)f(V.location+rt,it.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<V.locationSize;rt++)m(V.location+rt);s.bindBuffer(s.ARRAY_BUFFER,$t);for(let rt=0;rt<V.locationSize;rt++)w(V.location+rt,ft/V.locationSize,q,st,ft*Q,ft/V.locationSize*rt*Q,mt)}}else if(B!==void 0){let st=B[Z];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(V.location,st);break;case 3:s.vertexAttrib3fv(V.location,st);break;case 4:s.vertexAttrib4fv(V.location,st);break;default:s.vertexAttrib1fv(V.location,st)}}}}S()}function I(){R();for(let x in n){let A=n[x];for(let O in A){let F=A[O];for(let W in F)h(F[W].object),delete F[W];delete A[O]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let A=n[x.id];for(let O in A){let F=A[O];for(let W in F)h(F[W].object),delete F[W];delete A[O]}delete n[x.id]}function C(x){for(let A in n){let O=n[A];if(O[x.id]===void 0)continue;let F=O[x.id];for(let W in F)h(F[W].object),delete F[W];delete O[x.id]}}function R(){b(),o=!0,r!==i&&(r=i,c(r.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:I,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:S}}function j0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y]*d[y];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Q0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==bn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let R=C===fr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Yn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Rn&&!R)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:I,maxSamples:T}}function tg(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Hn,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,w=S*4,v=f.clippingState||null;l.value=v,v=h(g,d,w,p);for(let I=0;I!==w;++I)v[I]=e[I];f.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let f=p+y*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,v=p;w!==y;++w,v+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function eg(s){let t=new WeakMap;function e(o,a){return a===Ya?o.mapping=ys:a===$a&&(o.mapping=xs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ya||a===$a)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Rl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var go=class extends po{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ds=4,Nh=[.125,.215,.35,.446,.526,.582],Ui=20,Ra=new go,kh=new Dt,Ca=null,Ia=0,Pa=0,La=!1,Li=(1+Math.sqrt(5))/2,os=1/Li,Fh=[new P(-Li,os,0),new P(Li,os,0),new P(-os,0,Li),new P(os,0,Li),new P(0,Li,-os),new P(0,Li,os),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],yo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ca=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Oh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ca,Ia,Pa),this._renderer.xr.enabled=La,t.scissorTest=!1,Gr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ys||t.mapping===xs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ca=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Pa=this._renderer.getActiveMipmapLevel(),La=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:fr,format:bn,colorSpace:Rs,depthBuffer:!1},i=zh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ng(r)),this._blurMaterial=ig(r,t,e)}return i}_compileMaterial(t){let e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,Ra)}_sceneToCubeUV(t,e,n,i){let a=new Be(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kh),h.toneMapping=di,h.autoClear=!1;let p=new Jn({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new Ie(new Fi,p),y=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,y=!0):(p.color.copy(kh),y=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let w=this._cubeSize;Gr(i,S*w,f>2?w:0,w,w),h.setRenderTarget(i),y&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ys||t.mapping===xs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Oh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ie(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Gr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ra)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fh[(i-r-1)%Fh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ie(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ui-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ui;m>Ui&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ui}`);let f=[],S=0;for(let C=0;C<Ui;++C){let R=C/y,b=Math.exp(-R*R/2);f.push(b),C===0?S+=b:C<m&&(S+=2*b)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let v=this._sizeLods[i],I=3*v*(i>w-ds?i-w+ds:0),T=4*(this._cubeSize-v);Gr(e,I,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Ra)}};function ng(s){let t=[],e=[],n=[],i=s,r=s-ds+1+Nh.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-ds?l=Nh[o-s+ds-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,y=3,m=2,f=1,S=new Float32Array(y*g*p),w=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,R=T>2?0:-1,b=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(b,y*g*T),w.set(d,m*g*T);let x=[T,T,T,T,T,T];v.set(x,f*g*T)}let I=new Le;I.setAttribute("position",new Me(S,y)),I.setAttribute("uv",new Me(w,m)),I.setAttribute("faceIndex",new Me(v,f)),t.push(I),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zh(s,t,e){let n=new $n(s,t,e);return n.texture.mapping=Io,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Gr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function ig(s,t,e){let n=new Float32Array(Ui),i=new P(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:Ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Bh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function Oh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function sg(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ya||l===$a,h=l===ys||l===xs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new yo(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new yo(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rg(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function og(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,f=y.length;m<f;m++)t.remove(y[m])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let y=p[g];for(let m=0,f=y.length;m<f;m++)t.update(y[m],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,y=0;if(p!==null){let S=p.array;y=p.version;for(let w=0,v=S.length;w<v;w+=3){let I=S[w+0],T=S[w+1],C=S[w+2];d.push(I,T,T,C,C,I)}}else if(g!==void 0){let S=g.array;y=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let I=w+0,T=w+1,C=w+2;d.push(I,T,T,C,C,I)}}else return;let m=new(Pu(d)?fo:uo)(d,1);m.version=y;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ag(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,y,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*y[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lg(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cg(s,t,e){let n=new WeakMap,i=new de;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let b=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),y===!0&&(w=3);let v=a.attributes.position.count*w,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*I*4*u),C=new co(T,v,I,u);C.type=Rn,C.needsUpdate=!0;let R=w*4;for(let x=0;x<u;x++){let A=m[x],O=f[x],F=S[x],W=v*I*4*x;for(let Y=0;Y<A.count;Y++){let B=Y*R;p===!0&&(i.fromBufferAttribute(A,Y),T[W+B+0]=i.x,T[W+B+1]=i.y,T[W+B+2]=i.z,T[W+B+3]=0),g===!0&&(i.fromBufferAttribute(O,Y),T[W+B+4]=i.x,T[W+B+5]=i.y,T[W+B+6]=i.z,T[W+B+7]=0),y===!0&&(i.fromBufferAttribute(F,Y),T[W+B+8]=i.x,T[W+B+9]=i.y,T[W+B+10]=i.z,T[W+B+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new qt(v,I)},n.set(a,d),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<c.length;y++)p+=c[y];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function hg(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var xo=class extends Je{constructor(t,e,n,i,r,o,a,l,c,h=fs){if(h!==fs&&h!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===fs&&(n=ki),n===void 0&&h===vs&&(n=_s),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Nu=new Je,Hh=new xo(1,1),ku=new co,Fu=new El,zu=new mo,Vh=[],Gh=[],Wh=new Float32Array(16),Xh=new Float32Array(9),qh=new Float32Array(4);function Is(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=Vh[i];if(r===void 0&&(r=new Float32Array(i),Vh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function De(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ue(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Do(s,t){let e=Gh[t];e===void 0&&(e=new Int32Array(t),Gh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ug(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function dg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2fv(this.addr,t),Ue(e,t)}}function fg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(De(e,t))return;s.uniform3fv(this.addr,t),Ue(e,t)}}function pg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4fv(this.addr,t),Ue(e,t)}}function mg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;qh.set(n),s.uniformMatrix2fv(this.addr,!1,qh),Ue(e,n)}}function gg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Xh.set(n),s.uniformMatrix3fv(this.addr,!1,Xh),Ue(e,n)}}function yg(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(De(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(De(e,n))return;Wh.set(n),s.uniformMatrix4fv(this.addr,!1,Wh),Ue(e,n)}}function xg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function _g(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2iv(this.addr,t),Ue(e,t)}}function vg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3iv(this.addr,t),Ue(e,t)}}function bg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4iv(this.addr,t),Ue(e,t)}}function Mg(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Sg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(De(e,t))return;s.uniform2uiv(this.addr,t),Ue(e,t)}}function wg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(De(e,t))return;s.uniform3uiv(this.addr,t),Ue(e,t)}}function Tg(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(De(e,t))return;s.uniform4uiv(this.addr,t),Ue(e,t)}}function Eg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hh.compareFunction=Iu,r=Hh):r=Nu,e.setTexture2D(t||r,i)}function Ag(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Fu,i)}function Rg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zu,i)}function Cg(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ku,i)}function Ig(s){switch(s){case 5126:return ug;case 35664:return dg;case 35665:return fg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return yg;case 5124:case 35670:return xg;case 35667:case 35671:return _g;case 35668:case 35672:return vg;case 35669:case 35673:return bg;case 5125:return Mg;case 36294:return Sg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Eg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Pg(s,t){s.uniform1fv(this.addr,t)}function Lg(s,t){let e=Is(t,this.size,2);s.uniform2fv(this.addr,e)}function Dg(s,t){let e=Is(t,this.size,3);s.uniform3fv(this.addr,e)}function Ug(s,t){let e=Is(t,this.size,4);s.uniform4fv(this.addr,e)}function Ng(s,t){let e=Is(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function kg(s,t){let e=Is(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Fg(s,t){let e=Is(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function zg(s,t){s.uniform1iv(this.addr,t)}function Bg(s,t){s.uniform2iv(this.addr,t)}function Og(s,t){s.uniform3iv(this.addr,t)}function Hg(s,t){s.uniform4iv(this.addr,t)}function Vg(s,t){s.uniform1uiv(this.addr,t)}function Gg(s,t){s.uniform2uiv(this.addr,t)}function Wg(s,t){s.uniform3uiv(this.addr,t)}function Xg(s,t){s.uniform4uiv(this.addr,t)}function qg(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Nu,r[o])}function Yg(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Fu,r[o])}function $g(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||zu,r[o])}function Zg(s,t,e){let n=this.cache,i=t.length,r=Do(e,i);De(n,r)||(s.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ku,r[o])}function Kg(s){switch(s){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return Ng;case 35675:return kg;case 35676:return Fg;case 5124:case 35670:return zg;case 35667:case 35671:return Bg;case 35668:case 35672:return Og;case 35669:case 35673:return Hg;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return Zg}}var Cl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}},Il=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kg(e.type)}},Pl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Da=/(\w+)(\])?(\[|\.)?/g;function Yh(s,t){s.seq.push(t),s.map[t.id]=t}function Jg(s,t,e){let n=s.name,i=n.length;for(Da.lastIndex=0;;){let r=Da.exec(n),o=Da.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Yh(e,c===void 0?new Cl(a,s,t):new Il(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Pl(a),Yh(e,u)),e=u}}}var ms=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Jg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function $h(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var jg=37297,Qg=0;function ty(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Zh=new Ht;function ey(s){ne._getMatrix(Zh,ne.workingColorSpace,s);let t=`mat3( ${Zh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(s)){case Po:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function Kh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+ty(s.getShaderSource(t),o)}else return i}function ny(s,t){let e=ey(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function iy(s,t){let e;switch(t){case ff:e="Linear";break;case pf:e="Reinhard";break;case mf:e="Cineon";break;case gf:e="ACESFilmic";break;case xf:e="AgX";break;case _f:e="Neutral";break;case yf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Wr=new P;function sy(){ne.getLuminanceCoefficients(Wr);let s=Wr.x.toFixed(4),t=Wr.y.toFixed(4),e=Wr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ry(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function oy(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ay(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Qs(s){return s!==""}function Jh(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ll(s){return s.replace(ly,hy)}var cy=new Map;function hy(s,t){let e=Wt[t];if(e===void 0){let n=cy.get(t);if(n!==void 0)e=Wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ll(e)}var uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qh(s){return s.replace(uy,dy)}function dy(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function tu(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function fy(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===ic?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function py(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ys:case xs:t="ENVMAP_TYPE_CUBE";break;case Io:t="ENVMAP_TYPE_CUBE_UV";break}return t}function my(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case xs:t="ENVMAP_MODE_REFRACTION";break}return t}function gy(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case sc:t="ENVMAP_BLENDING_MULTIPLY";break;case uf:t="ENVMAP_BLENDING_MIX";break;case df:t="ENVMAP_BLENDING_ADD";break}return t}function yy(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xy(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=fy(e),c=py(e),h=my(e),u=gy(e),d=yy(e),p=ry(e),g=oy(r),y=i.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),f.length>0&&(f+=`
`)):(m=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),f=[tu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?Wt.tonemapping_pars_fragment:"",e.toneMapping!==di?iy("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Wt.colorspace_pars_fragment,ny("linearToOutputTexel",e.outputColorSpace),sy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Ll(o),o=Jh(o,e),o=jh(o,e),a=Ll(a),a=Jh(a,e),a=jh(a,e),o=Qh(o),a=Qh(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===fh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=S+m+o,v=S+f+a,I=$h(i,i.VERTEX_SHADER,w),T=$h(i,i.FRAGMENT_SHADER,v);i.attachShader(y,I),i.attachShader(y,T),e.index0AttributeName!==void 0?i.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y);function C(A){if(s.debug.checkShaderErrors){let O=i.getProgramInfoLog(y).trim(),F=i.getShaderInfoLog(I).trim(),W=i.getShaderInfoLog(T).trim(),Y=!0,B=!0;if(i.getProgramParameter(y,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,y,I,T);else{let Z=Kh(i,I,"vertex"),V=Kh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+O+`
`+Z+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(F===""||W==="")&&(B=!1);B&&(A.diagnostics={runnable:Y,programLog:O,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(I),i.deleteShader(T),R=new ms(i,y),b=ay(i,y)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(y,jg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=I,this.fragmentShader=T,this}var _y=0,Dl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Ul(t),e.set(t,n)),n}},Ul=class{constructor(t){this.id=_y++,this.code=t,this.usedTimes=0}};function vy(s,t,e,n,i,r,o){let a=new ho,l=new Dl,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,x,A,O,F){let W=O.fog,Y=F.geometry,B=b.isMeshStandardMaterial?O.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||B),V=Z&&Z.mapping===Io?Z.image.height:null,it=g[b.type];b.precision!==null&&(p=i.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let st=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ft=st!==void 0?st.length:0,Pt=0;Y.morphAttributes.position!==void 0&&(Pt=1),Y.morphAttributes.normal!==void 0&&(Pt=2),Y.morphAttributes.color!==void 0&&(Pt=3);let $t,q,Q,mt;if(it){let le=En[it];$t=le.vertexShader,q=le.fragmentShader}else $t=b.vertexShader,q=b.fragmentShader,l.update(b),Q=l.getVertexShaderID(b),mt=l.getFragmentShaderID(b);let rt=s.getRenderTarget(),Rt=s.state.buffers.depth.getReversed(),kt=F.isInstancedMesh===!0,Yt=F.isBatchedMesh===!0,Se=!!b.map,te=!!b.matcap,Re=!!Z,N=!!b.aoMap,cn=!!b.lightMap,Zt=!!b.bumpMap,Kt=!!b.normalMap,Lt=!!b.displacementMap,ye=!!b.emissiveMap,Ct=!!b.metalnessMap,E=!!b.roughnessMap,_=b.anisotropy>0,z=b.clearcoat>0,K=b.dispersion>0,j=b.iridescence>0,$=b.sheen>0,wt=b.transmission>0,ht=_&&!!b.anisotropyMap,gt=z&&!!b.clearcoatMap,ee=z&&!!b.clearcoatNormalMap,et=z&&!!b.clearcoatRoughnessMap,xt=j&&!!b.iridescenceMap,Ut=j&&!!b.iridescenceThicknessMap,Nt=$&&!!b.sheenColorMap,_t=$&&!!b.sheenRoughnessMap,Jt=!!b.specularMap,Gt=!!b.specularColorMap,me=!!b.specularIntensityMap,L=wt&&!!b.transmissionMap,lt=wt&&!!b.thicknessMap,X=!!b.gradientMap,J=!!b.alphaMap,pt=b.alphaTest>0,ut=!!b.alphaHash,Bt=!!b.extensions,Ee=di;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ee=s.toneMapping);let He={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:$t,fragmentShader:q,defines:b.defines,customVertexShaderID:Q,customFragmentShaderID:mt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Yt,batchingColor:Yt&&F._colorsTexture!==null,instancing:kt,instancingColor:kt&&F.instanceColor!==null,instancingMorph:kt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Rs,alphaToCoverage:!!b.alphaToCoverage,map:Se,matcap:te,envMap:Re,envMapMode:Re&&Z.mapping,envMapCubeUVHeight:V,aoMap:N,lightMap:cn,bumpMap:Zt,normalMap:Kt,displacementMap:d&&Lt,emissiveMap:ye,normalMapObjectSpace:Kt&&b.normalMapType===Sf,normalMapTangentSpace:Kt&&b.normalMapType===Cu,metalnessMap:Ct,roughnessMap:E,anisotropy:_,anisotropyMap:ht,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:ee,clearcoatRoughnessMap:et,dispersion:K,iridescence:j,iridescenceMap:xt,iridescenceThicknessMap:Ut,sheen:$,sheenColorMap:Nt,sheenRoughnessMap:_t,specularMap:Jt,specularColorMap:Gt,specularIntensityMap:me,transmission:wt,transmissionMap:L,thicknessMap:lt,gradientMap:X,opaque:b.transparent===!1&&b.blending===ui&&b.alphaToCoverage===!1,alphaMap:J,alphaTest:pt,alphaHash:ut,combine:b.combine,mapUv:Se&&y(b.map.channel),aoMapUv:N&&y(b.aoMap.channel),lightMapUv:cn&&y(b.lightMap.channel),bumpMapUv:Zt&&y(b.bumpMap.channel),normalMapUv:Kt&&y(b.normalMap.channel),displacementMapUv:Lt&&y(b.displacementMap.channel),emissiveMapUv:ye&&y(b.emissiveMap.channel),metalnessMapUv:Ct&&y(b.metalnessMap.channel),roughnessMapUv:E&&y(b.roughnessMap.channel),anisotropyMapUv:ht&&y(b.anisotropyMap.channel),clearcoatMapUv:gt&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ee&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ut&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:_t&&y(b.sheenRoughnessMap.channel),specularMapUv:Jt&&y(b.specularMap.channel),specularColorMapUv:Gt&&y(b.specularColorMap.channel),specularIntensityMapUv:me&&y(b.specularIntensityMap.channel),transmissionMapUv:L&&y(b.transmissionMap.channel),thicknessMapUv:lt&&y(b.thicknessMap.channel),alphaMapUv:J&&y(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Kt||_),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!Y.attributes.uv&&(Se||J),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Rt,skinning:F.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ft,morphTextureStride:Pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Se&&b.map.isVideoTexture===!0&&ne.getTransfer(b.map.colorSpace)===ue,decodeVideoTextureEmissive:ye&&b.emissiveMap.isVideoTexture===!0&&ne.getTransfer(b.emissiveMap.colorSpace)===ue,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Vn,flipSided:b.side===We,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Bt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&b.extensions.multiDraw===!0||Yt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return He.vertexUv1s=c.has(1),He.vertexUv2s=c.has(2),He.vertexUv3s=c.has(3),c.clear(),He}function f(b){let x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)x.push(A),x.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(S(x,b),w(x,b),x.push(s.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function S(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function w(b,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),b.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let x=g[b.type],A;if(x){let O=En[x];A=hp.clone(O.uniforms)}else A=b.uniforms;return A}function I(b,x){let A;for(let O=0,F=h.length;O<F;O++){let W=h[O];if(W.cacheKey===x){A=W,++A.usedTimes;break}}return A===void 0&&(A=new xy(s,x,b,r),h.push(A)),A}function T(b){if(--b.usedTimes===0){let x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function C(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:I,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:R}}function by(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function My(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function eu(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function nu(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,y,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=y,f.group=m),t++,f}function a(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,y,m){let f=o(u,d,p,g,y,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||My),n.length>1&&n.sort(d||eu),i.length>1&&i.sort(d||eu)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Sy(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new nu,s.set(n,[o])):i>=r.length?(o=new nu,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function wy(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Dt};break;case"SpotLight":e={position:new P,direction:new P,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":e={color:new Dt,position:new P,halfWidth:new P,halfHeight:new P};break}return s[t.id]=e,e}}}function Ty(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Ey=0;function Ay(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Ry(s){let t=new wy,e=Ty(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,r=new jt,o=new jt;function a(c){let h=0,u=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,f=0,S=0,w=0,v=0,I=0,T=0,C=0;c.sort(Ay);for(let b=0,x=c.length;b<x;b++){let A=c[b],O=A.color,F=A.intensity,W=A.distance,Y=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=O.r*F,u+=O.g*F,d+=O.b*F;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],F);C++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=A.shadow.matrix,S++}n.directional[p]=B,p++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(O).multiplyScalar(F),B.distance=W,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[y]=B;let Z=A.shadow;if(A.map&&(n.spotLightMap[I]=A.map,I++,Z.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[y]=Z.matrix,A.castShadow){let V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,n.spotShadow[y]=V,n.spotShadowMap[y]=Y,v++}y++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(O).multiplyScalar(F),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=B,m++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let Z=A.shadow,V=e.get(A);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=B,g++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(F),B.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=B,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+I-T,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=C,n.version=Ey++)}function l(c,h){let u=0,d=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let w=c[f];if(w.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(w.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let v=n.hemi[y];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:n}}function iu(s){let t=new Ry(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Cy(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new iu(s),t.set(i,[a])):r>=o.length?(a=new iu(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Nl=class extends In{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},kl=class extends In{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Iy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Py=`uniform sampler2D shadow_pass;
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
}`;function Ly(s,t,e){let n=new ar,i=new qt,r=new qt,o=new de,a=new Nl({depthPacking:Mf}),l=new kl,c={},h=e.maxTextureSize,u={[fi]:We,[We]:fi,[Vn]:Vn},d=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Iy,fragmentShader:Py}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Le;g.setAttribute("position",new Me(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ie(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let f=this.type;this.render=function(T,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let b=s.getRenderTarget(),x=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),O=s.state;O.setBlending(hi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let F=f!==On&&this.type===On,W=f===On&&this.type!==On;for(let Y=0,B=T.length;Y<B;Y++){let Z=T[Y],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let it=V.getFrameExtents();if(i.multiply(it),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||F===!0||W===!0){let ft=this.type!==On?{minFilter:on,magFilter:on}:{};V.map!==null&&V.map.dispose(),V.map=new $n(i.x,i.y,ft),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();let st=V.getViewportCount();for(let ft=0;ft<st;ft++){let Pt=V.getViewport(ft);o.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),O.viewport(o),V.updateMatrices(Z,ft),n=V.getFrustum(),v(C,R,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===On&&S(V,R),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(b,x,A)};function S(T,C){let R=t.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new $n(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,R,d,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,R,p,y,null)}function w(T,C,R,b){let x=null,A=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)x=A;else if(x=R.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let O=x.uuid,F=C.uuid,W=c[O];W===void 0&&(W={},c[O]=W);let Y=W[F];Y===void 0&&(Y=x.clone(),W[F]=Y,C.addEventListener("dispose",I)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,b===On?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let O=s.properties.get(x);O.light=R}return x}function v(T,C,R,b,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===On)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let F=t.update(T),W=T.material;if(Array.isArray(W)){let Y=F.groups;for(let B=0,Z=Y.length;B<Z;B++){let V=Y[B],it=W[V.materialIndex];if(it&&it.visible){let st=w(T,it,b,x);T.onBeforeShadow(s,T,C,R,F,st,V),s.renderBufferDirect(R,null,F,st,T,V),T.onAfterShadow(s,T,C,R,F,st,V)}}}else if(W.visible){let Y=w(T,W,b,x);T.onBeforeShadow(s,T,C,R,F,Y,null),s.renderBufferDirect(R,null,F,Y,T,null),T.onAfterShadow(s,T,C,R,F,Y,null)}}let O=T.children;for(let F=0,W=O.length;F<W;F++)v(O[F],C,R,b,x)}function I(T){T.target.removeEventListener("dispose",I);for(let R in c){let b=c[R],x=T.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}var Dy={[Oa]:Ha,[Va]:Xa,[Ga]:qa,[gs]:Wa,[Ha]:Oa,[Xa]:Va,[qa]:Ga,[Wa]:gs};function Uy(s,t){function e(){let L=!1,lt=new de,X=null,J=new de(0,0,0,0);return{setMask:function(pt){X!==pt&&!L&&(s.colorMask(pt,pt,pt,pt),X=pt)},setLocked:function(pt){L=pt},setClear:function(pt,ut,Bt,Ee,He){He===!0&&(pt*=Ee,ut*=Ee,Bt*=Ee),lt.set(pt,ut,Bt,Ee),J.equals(lt)===!1&&(s.clearColor(pt,ut,Bt,Ee),J.copy(lt))},reset:function(){L=!1,X=null,J.set(-1,0,0,0)}}}function n(){let L=!1,lt=!1,X=null,J=null,pt=null;return{setReversed:function(ut){if(lt!==ut){let Bt=t.get("EXT_clip_control");lt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);let Ee=pt;pt=null,this.setClear(Ee)}lt=ut},getReversed:function(){return lt},setTest:function(ut){ut?rt(s.DEPTH_TEST):Rt(s.DEPTH_TEST)},setMask:function(ut){X!==ut&&!L&&(s.depthMask(ut),X=ut)},setFunc:function(ut){if(lt&&(ut=Dy[ut]),J!==ut){switch(ut){case Oa:s.depthFunc(s.NEVER);break;case Ha:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case gs:s.depthFunc(s.LEQUAL);break;case Ga:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case qa:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}J=ut}},setLocked:function(ut){L=ut},setClear:function(ut){pt!==ut&&(lt&&(ut=1-ut),s.clearDepth(ut),pt=ut)},reset:function(){L=!1,X=null,J=null,pt=null,lt=!1}}}function i(){let L=!1,lt=null,X=null,J=null,pt=null,ut=null,Bt=null,Ee=null,He=null;return{setTest:function(le){L||(le?rt(s.STENCIL_TEST):Rt(s.STENCIL_TEST))},setMask:function(le){lt!==le&&!L&&(s.stencilMask(le),lt=le)},setFunc:function(le,mn,Dn){(X!==le||J!==mn||pt!==Dn)&&(s.stencilFunc(le,mn,Dn),X=le,J=mn,pt=Dn)},setOp:function(le,mn,Dn){(ut!==le||Bt!==mn||Ee!==Dn)&&(s.stencilOp(le,mn,Dn),ut=le,Bt=mn,Ee=Dn)},setLocked:function(le){L=le},setClear:function(le){He!==le&&(s.clearStencil(le),He=le)},reset:function(){L=!1,lt=null,X=null,J=null,pt=null,ut=null,Bt=null,Ee=null,He=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,w=null,v=null,I=null,T=null,C=new Dt(0,0,0),R=0,b=!1,x=null,A=null,O=null,F=null,W=null,Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),B=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),B=Z>=2);let it=null,st={},ft=s.getParameter(s.SCISSOR_BOX),Pt=s.getParameter(s.VIEWPORT),$t=new de().fromArray(ft),q=new de().fromArray(Pt);function Q(L,lt,X,J){let pt=new Uint8Array(4),ut=s.createTexture();s.bindTexture(L,ut),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Bt=0;Bt<X;Bt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,J,0,s.RGBA,s.UNSIGNED_BYTE,pt):s.texImage2D(lt+Bt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,pt);return ut}let mt={};mt[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),mt[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),mt[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(gs),Zt(!1),Kt(oh),rt(s.CULL_FACE),N(hi);function rt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Rt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function kt(L,lt){return u[L]!==lt?(s.bindFramebuffer(L,lt),u[L]=lt,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Yt(L,lt){let X=p,J=!1;if(L){X=d.get(lt),X===void 0&&(X=[],d.set(lt,X));let pt=L.textures;if(X.length!==pt.length||X[0]!==s.COLOR_ATTACHMENT0){for(let ut=0,Bt=pt.length;ut<Bt;ut++)X[ut]=s.COLOR_ATTACHMENT0+ut;X.length=pt.length,J=!0}}else X[0]!==s.BACK&&(X[0]=s.BACK,J=!0);J&&s.drawBuffers(X)}function Se(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let te={[Di]:s.FUNC_ADD,[Yd]:s.FUNC_SUBTRACT,[$d]:s.FUNC_REVERSE_SUBTRACT};te[Zd]=s.MIN,te[Kd]=s.MAX;let Re={[Jd]:s.ZERO,[jd]:s.ONE,[Qd]:s.SRC_COLOR,[za]:s.SRC_ALPHA,[of]:s.SRC_ALPHA_SATURATE,[sf]:s.DST_COLOR,[ef]:s.DST_ALPHA,[tf]:s.ONE_MINUS_SRC_COLOR,[Ba]:s.ONE_MINUS_SRC_ALPHA,[rf]:s.ONE_MINUS_DST_COLOR,[nf]:s.ONE_MINUS_DST_ALPHA,[af]:s.CONSTANT_COLOR,[lf]:s.ONE_MINUS_CONSTANT_COLOR,[cf]:s.CONSTANT_ALPHA,[hf]:s.ONE_MINUS_CONSTANT_ALPHA};function N(L,lt,X,J,pt,ut,Bt,Ee,He,le){if(L===hi){y===!0&&(Rt(s.BLEND),y=!1);return}if(y===!1&&(rt(s.BLEND),y=!0),L!==qd){if(L!==m||le!==b){if((f!==Di||v!==Di)&&(s.blendEquation(s.FUNC_ADD),f=Di,v=Di),le)switch(L){case ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cn:s.blendFunc(s.ONE,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lh:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ah:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case lh:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,I=null,T=null,C.set(0,0,0),R=0,m=L,b=le}return}pt=pt||lt,ut=ut||X,Bt=Bt||J,(lt!==f||pt!==v)&&(s.blendEquationSeparate(te[lt],te[pt]),f=lt,v=pt),(X!==S||J!==w||ut!==I||Bt!==T)&&(s.blendFuncSeparate(Re[X],Re[J],Re[ut],Re[Bt]),S=X,w=J,I=ut,T=Bt),(Ee.equals(C)===!1||He!==R)&&(s.blendColor(Ee.r,Ee.g,Ee.b,He),C.copy(Ee),R=He),m=L,b=!1}function cn(L,lt){L.side===Vn?Rt(s.CULL_FACE):rt(s.CULL_FACE);let X=L.side===We;lt&&(X=!X),Zt(X),L.blending===ui&&L.transparent===!1?N(hi):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let J=L.stencilWrite;a.setTest(J),J&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),ye(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):Rt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(L){x!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),x=L)}function Kt(L){L!==Wd?(rt(s.CULL_FACE),L!==A&&(L===oh?s.cullFace(s.BACK):L===Xd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Rt(s.CULL_FACE),A=L}function Lt(L){L!==O&&(B&&s.lineWidth(L),O=L)}function ye(L,lt,X){L?(rt(s.POLYGON_OFFSET_FILL),(F!==lt||W!==X)&&(s.polygonOffset(lt,X),F=lt,W=X)):Rt(s.POLYGON_OFFSET_FILL)}function Ct(L){L?rt(s.SCISSOR_TEST):Rt(s.SCISSOR_TEST)}function E(L){L===void 0&&(L=s.TEXTURE0+Y-1),it!==L&&(s.activeTexture(L),it=L)}function _(L,lt,X){X===void 0&&(it===null?X=s.TEXTURE0+Y-1:X=it);let J=st[X];J===void 0&&(J={type:void 0,texture:void 0},st[X]=J),(J.type!==L||J.texture!==lt)&&(it!==X&&(s.activeTexture(X),it=X),s.bindTexture(L,lt||mt[L]),J.type=L,J.texture=lt)}function z(){let L=st[it];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function K(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ee(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(L){$t.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),$t.copy(L))}function _t(L){q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function Jt(L,lt){let X=c.get(lt);X===void 0&&(X=new WeakMap,c.set(lt,X));let J=X.get(L);J===void 0&&(J=s.getUniformBlockIndex(lt,L.name),X.set(L,J))}function Gt(L,lt){let J=c.get(lt).get(L);l.get(lt)!==J&&(s.uniformBlockBinding(lt,J,L.__bindingPointIndex),l.set(lt,J))}function me(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,st={},u={},d=new WeakMap,p=[],g=null,y=!1,m=null,f=null,S=null,w=null,v=null,I=null,T=null,C=new Dt(0,0,0),R=0,b=!1,x=null,A=null,O=null,F=null,W=null,$t.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Rt,bindFramebuffer:kt,drawBuffers:Yt,useProgram:Se,setBlending:N,setMaterial:cn,setFlipSided:Zt,setCullFace:Kt,setLineWidth:Lt,setPolygonOffset:ye,setScissorTest:Ct,activeTexture:E,bindTexture:_,unbindTexture:z,compressedTexImage2D:K,compressedTexImage3D:j,texImage2D:xt,texImage3D:Ut,updateUBOMapping:Jt,uniformBlockBinding:Gt,texStorage2D:ee,texStorage3D:et,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Nt,viewport:_t,reset:me}}function su(s,t,e,n){let i=Ny(n);switch(e){case Su:return s*t;case Tu:return s*t;case Eu:return s*t*2;case lc:return s*t/i.components*i.byteLength;case cc:return s*t/i.components*i.byteLength;case Au:return s*t*2/i.components*i.byteLength;case hc:return s*t*2/i.components*i.byteLength;case wu:return s*t*3/i.components*i.byteLength;case bn:return s*t*4/i.components*i.byteLength;case uc:return s*t*4/i.components*i.byteLength;case to:case eo:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case no:case io:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Ja:case Qa:return Math.max(s,16)*Math.max(t,8)/4;case Ka:case ja:return Math.max(s,8)*Math.max(t,8)/2;case tl:case el:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case nl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case sl:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case ol:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case al:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case ll:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case cl:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case hl:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case ul:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case dl:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case fl:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case pl:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ml:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case so:case yl:case xl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Ru:case _l:return Math.ceil(s/4)*Math.ceil(t/4)*8;case vl:case bl:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ny(s){switch(s){case Yn:case vu:return{byteLength:1,components:1};case sr:case bu:case fr:return{byteLength:2,components:1};case oc:case ac:return{byteLength:2,components:4};case ki:case rc:case Rn:return{byteLength:4,components:1};case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ky(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):ao("canvas")}function y(E,_,z){let K=1,j=Ct(E);if((j.width>z||j.height>z)&&(K=z/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let $=Math.floor(K*j.width),wt=Math.floor(K*j.height);u===void 0&&(u=g($,wt));let ht=_?g($,wt):u;return ht.width=$,ht.height=wt,ht.getContext("2d").drawImage(E,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+wt+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,_,z,K,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),_===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),_===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),_===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),_===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),_===s.RGBA){let wt=j?Po:ne.getTransfer(K);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=wt===ue?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(E,_){let z;return E?_===null||_===ki||_===_s?z=s.DEPTH24_STENCIL8:_===Rn?z=s.DEPTH32F_STENCIL8:_===sr&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ki||_===_s?z=s.DEPTH_COMPONENT24:_===Rn?z=s.DEPTH_COMPONENT32F:_===sr&&(z=s.DEPTH_COMPONENT16),z}function I(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==on&&E.minFilter!==An?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){let _=E.target;_.removeEventListener("dispose",T),R(_),_.isVideoTexture&&h.delete(_)}function C(E){let _=E.target;_.removeEventListener("dispose",C),x(_)}function R(E){let _=n.get(E);if(_.__webglInit===void 0)return;let z=E.source,K=d.get(z);if(K){let j=K[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&b(E),Object.keys(K).length===0&&d.delete(z)}n.remove(E)}function b(E){let _=n.get(E);s.deleteTexture(_.__webglTexture);let z=E.source,K=d.get(z);delete K[_.__cacheKey],o.memory.textures--}function x(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(_.__webglFramebuffer[K]))for(let j=0;j<_.__webglFramebuffer[K].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[K][j]);else s.deleteFramebuffer(_.__webglFramebuffer[K]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[K])}else{if(Array.isArray(_.__webglFramebuffer))for(let K=0;K<_.__webglFramebuffer.length;K++)s.deleteFramebuffer(_.__webglFramebuffer[K]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let K=0;K<_.__webglColorRenderbuffer.length;K++)_.__webglColorRenderbuffer[K]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[K]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=E.textures;for(let K=0,j=z.length;K<j;K++){let $=n.get(z[K]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[K])}n.remove(E)}let A=0;function O(){A=0}function F(){let E=A;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),A+=1,E}function W(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function Y(E,_){let z=n.get(E);if(E.isVideoTexture&&Lt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,E,_);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+_)}function B(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){q(z,E,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+_)}function Z(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){q(z,E,_);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+_)}function V(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Q(z,E,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+_)}let it={[ir]:s.REPEAT,[Ni]:s.CLAMP_TO_EDGE,[Za]:s.MIRRORED_REPEAT},st={[on]:s.NEAREST,[vf]:s.NEAREST_MIPMAP_NEAREST,[wr]:s.NEAREST_MIPMAP_LINEAR,[An]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[Gn]:s.LINEAR_MIPMAP_LINEAR},ft={[wf]:s.NEVER,[If]:s.ALWAYS,[Tf]:s.LESS,[Iu]:s.LEQUAL,[Ef]:s.EQUAL,[Cf]:s.GEQUAL,[Af]:s.GREATER,[Rf]:s.NOTEQUAL};function Pt(E,_){if(_.type===Rn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===An||_.magFilter===oa||_.magFilter===wr||_.magFilter===Gn||_.minFilter===An||_.minFilter===oa||_.minFilter===wr||_.minFilter===Gn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,it[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,it[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,it[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,st[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,ft[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===on||_.minFilter!==wr&&_.minFilter!==Gn||_.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function $t(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));let K=_.source,j=d.get(K);j===void 0&&(j={},d.set(K,j));let $=W(_);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[$].usedTimes++;let wt=j[E.__cacheKey];wt!==void 0&&(j[E.__cacheKey].usedTimes--,wt.usedTimes===0&&b(_)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return z}function q(E,_,z){let K=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(K=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(K=s.TEXTURE_3D);let j=$t(E,_),$=_.source;e.bindTexture(K,E.__webglTexture,s.TEXTURE0+z);let wt=n.get($);if($.version!==wt.__version||j===!0){e.activeTexture(s.TEXTURE0+z);let ht=ne.getPrimaries(ne.workingColorSpace),gt=_.colorSpace===li?null:ne.getPrimaries(_.colorSpace),ee=_.colorSpace===li||ht===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let et=y(_.image,!1,i.maxTextureSize);et=ye(_,et);let xt=r.convert(_.format,_.colorSpace),Ut=r.convert(_.type),Nt=w(_.internalFormat,xt,Ut,_.colorSpace,_.isVideoTexture);Pt(K,_);let _t,Jt=_.mipmaps,Gt=_.isVideoTexture!==!0,me=wt.__version===void 0||j===!0,L=$.dataReady,lt=I(_,et);if(_.isDepthTexture)Nt=v(_.format===vs,_.type),me&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,Nt,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,Ut,null));else if(_.isDataTexture)if(Jt.length>0){Gt&&me&&e.texStorage2D(s.TEXTURE_2D,lt,Nt,Jt[0].width,Jt[0].height);for(let X=0,J=Jt.length;X<J;X++)_t=Jt[X],Gt?L&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,Ut,_t.data):e.texImage2D(s.TEXTURE_2D,X,Nt,_t.width,_t.height,0,xt,Ut,_t.data);_.generateMipmaps=!1}else Gt?(me&&e.texStorage2D(s.TEXTURE_2D,lt,Nt,et.width,et.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,xt,Ut,et.data)):e.texImage2D(s.TEXTURE_2D,0,Nt,et.width,et.height,0,xt,Ut,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Gt&&me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Nt,Jt[0].width,Jt[0].height,et.depth);for(let X=0,J=Jt.length;X<J;X++)if(_t=Jt[X],_.format!==bn)if(xt!==null)if(Gt){if(L)if(_.layerUpdates.size>0){let pt=su(_t.width,_t.height,_.format,_.type);for(let ut of _.layerUpdates){let Bt=_t.data.subarray(ut*pt/_t.data.BYTES_PER_ELEMENT,(ut+1)*pt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,ut,_t.width,_t.height,1,xt,Bt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,xt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,X,Nt,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Gt?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,xt,Ut,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,X,Nt,_t.width,_t.height,et.depth,0,xt,Ut,_t.data)}else{Gt&&me&&e.texStorage2D(s.TEXTURE_2D,lt,Nt,Jt[0].width,Jt[0].height);for(let X=0,J=Jt.length;X<J;X++)_t=Jt[X],_.format!==bn?xt!==null?Gt?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,X,Nt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?L&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,_t.width,_t.height,xt,Ut,_t.data):e.texImage2D(s.TEXTURE_2D,X,Nt,_t.width,_t.height,0,xt,Ut,_t.data)}else if(_.isDataArrayTexture)if(Gt){if(me&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Nt,et.width,et.height,et.depth),L)if(_.layerUpdates.size>0){let X=su(et.width,et.height,_.format,_.type);for(let J of _.layerUpdates){let pt=et.data.subarray(J*X/et.data.BYTES_PER_ELEMENT,(J+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,J,et.width,et.height,1,xt,Ut,pt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Ut,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Nt,et.width,et.height,et.depth,0,xt,Ut,et.data);else if(_.isData3DTexture)Gt?(me&&e.texStorage3D(s.TEXTURE_3D,lt,Nt,et.width,et.height,et.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Ut,et.data)):e.texImage3D(s.TEXTURE_3D,0,Nt,et.width,et.height,et.depth,0,xt,Ut,et.data);else if(_.isFramebufferTexture){if(me)if(Gt)e.texStorage2D(s.TEXTURE_2D,lt,Nt,et.width,et.height);else{let X=et.width,J=et.height;for(let pt=0;pt<lt;pt++)e.texImage2D(s.TEXTURE_2D,pt,Nt,X,J,0,xt,Ut,null),X>>=1,J>>=1}}else if(Jt.length>0){if(Gt&&me){let X=Ct(Jt[0]);e.texStorage2D(s.TEXTURE_2D,lt,Nt,X.width,X.height)}for(let X=0,J=Jt.length;X<J;X++)_t=Jt[X],Gt?L&&e.texSubImage2D(s.TEXTURE_2D,X,0,0,xt,Ut,_t):e.texImage2D(s.TEXTURE_2D,X,Nt,xt,Ut,_t);_.generateMipmaps=!1}else if(Gt){if(me){let X=Ct(et);e.texStorage2D(s.TEXTURE_2D,lt,Nt,X.width,X.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,xt,Ut,et)}else e.texImage2D(s.TEXTURE_2D,0,Nt,xt,Ut,et);m(_)&&f(K),wt.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,z){if(_.image.length!==6)return;let K=$t(E,_),j=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);let $=n.get(j);if(j.version!==$.__version||K===!0){e.activeTexture(s.TEXTURE0+z);let wt=ne.getPrimaries(ne.workingColorSpace),ht=_.colorSpace===li?null:ne.getPrimaries(_.colorSpace),gt=_.colorSpace===li||wt===ht?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let ee=_.isCompressedTexture||_.image[0].isCompressedTexture,et=_.image[0]&&_.image[0].isDataTexture,xt=[];for(let J=0;J<6;J++)!ee&&!et?xt[J]=y(_.image[J],!0,i.maxCubemapSize):xt[J]=et?_.image[J].image:_.image[J],xt[J]=ye(_,xt[J]);let Ut=xt[0],Nt=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),Jt=w(_.internalFormat,Nt,_t,_.colorSpace),Gt=_.isVideoTexture!==!0,me=$.__version===void 0||K===!0,L=j.dataReady,lt=I(_,Ut);Pt(s.TEXTURE_CUBE_MAP,_);let X;if(ee){Gt&&me&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Jt,Ut.width,Ut.height);for(let J=0;J<6;J++){X=xt[J].mipmaps;for(let pt=0;pt<X.length;pt++){let ut=X[pt];_.format!==bn?Nt!==null?Gt?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,ut.width,ut.height,Nt,ut.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Jt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,0,0,ut.width,ut.height,Nt,_t,ut.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt,Jt,ut.width,ut.height,0,Nt,_t,ut.data)}}}else{if(X=_.mipmaps,Gt&&me){X.length>0&&lt++;let J=Ct(xt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,Jt,J.width,J.height)}for(let J=0;J<6;J++)if(et){Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,xt[J].width,xt[J].height,Nt,_t,xt[J].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,xt[J].width,xt[J].height,0,Nt,_t,xt[J].data);for(let pt=0;pt<X.length;pt++){let Bt=X[pt].image[J].image;Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Bt.width,Bt.height,Nt,_t,Bt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Jt,Bt.width,Bt.height,0,Nt,_t,Bt.data)}}else{Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Nt,_t,xt[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Jt,Nt,_t,xt[J]);for(let pt=0;pt<X.length;pt++){let ut=X[pt];Gt?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,0,0,Nt,_t,ut.image[J]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+J,pt+1,Jt,Nt,_t,ut.image[J])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),$.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function mt(E,_,z,K,j,$){let wt=r.convert(z.format,z.colorSpace),ht=r.convert(z.type),gt=w(z.internalFormat,wt,ht,z.colorSpace),ee=n.get(_),et=n.get(z);if(et.__renderTarget=_,!ee.__hasExternalTextures){let xt=Math.max(1,_.width>>$),Ut=Math.max(1,_.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,$,gt,xt,Ut,_.depth,0,wt,ht,null):e.texImage2D(j,$,gt,xt,Ut,0,wt,ht,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,K,j,et.__webglTexture,0,Zt(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,K,j,et.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(E,_,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){let K=_.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=v(_.stencilBuffer,j),wt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ht=Zt(_);Kt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ht,$,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ht,$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,E)}else{let K=_.textures;for(let j=0;j<K.length;j++){let $=K[j],wt=r.convert($.format,$.colorSpace),ht=r.convert($.type),gt=w($.internalFormat,wt,ht,$.colorSpace),ee=Zt(_);z&&Kt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ee,gt,_.width,_.height):Kt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ee,gt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,gt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(_.depthTexture);K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);let j=K.__webglTexture,$=Zt(_);if(_.depthTexture.format===fs)Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(_.depthTexture.format===vs)Kt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function kt(E){let _=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let K=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),K){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=K}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Rt(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[K]),_.__webglDepthbuffer[K]===void 0)_.__webglDepthbuffer[K]=s.createRenderbuffer(),rt(_.__webglDepthbuffer[K],E,!1);else{let j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[K];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),rt(_.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,K,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(E,_,z){let K=n.get(E);_!==void 0&&mt(K.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&kt(E)}function Se(E){let _=E.texture,z=n.get(E),K=n.get(_);E.addEventListener("dispose",C);let j=E.textures,$=E.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(K.__webglTexture===void 0&&(K.__webglTexture=s.createTexture()),K.__version=_.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ht]=[];for(let gt=0;gt<_.mipmaps.length;gt++)z.__webglFramebuffer[ht][gt]=s.createFramebuffer()}else z.__webglFramebuffer[ht]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ht=0;ht<_.mipmaps.length;ht++)z.__webglFramebuffer[ht]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ht=0,gt=j.length;ht<gt;ht++){let ee=n.get(j[ht]);ee.__webglTexture===void 0&&(ee.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Kt(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ht=0;ht<j.length;ht++){let gt=j[ht];z.__webglColorRenderbuffer[ht]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ht]);let ee=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),xt=w(gt.internalFormat,ee,et,gt.colorSpace,E.isXRRenderTarget===!0),Ut=Zt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ut,xt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ht,s.RENDERBUFFER,z.__webglColorRenderbuffer[ht])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture),Pt(s.TEXTURE_CUBE_MAP,_);for(let ht=0;ht<6;ht++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)mt(z.__webglFramebuffer[ht][gt],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else mt(z.__webglFramebuffer[ht],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(_)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ht=0,gt=j.length;ht<gt;ht++){let ee=j[ht],et=n.get(ee);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Pt(s.TEXTURE_2D,ee),mt(z.__webglFramebuffer,E,ee,s.COLOR_ATTACHMENT0+ht,s.TEXTURE_2D,0),m(ee)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ht=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ht=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ht,K.__webglTexture),Pt(ht,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)mt(z.__webglFramebuffer[gt],E,_,s.COLOR_ATTACHMENT0,ht,gt);else mt(z.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ht,0);m(_)&&f(ht),e.unbindTexture()}E.depthBuffer&&kt(E)}function te(E){let _=E.textures;for(let z=0,K=_.length;z<K;z++){let j=_[z];if(m(j)){let $=S(E),wt=n.get(j).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}let Re=[],N=[];function cn(E){if(E.samples>0){if(Kt(E)===!1){let _=E.textures,z=E.width,K=E.height,j=s.COLOR_BUFFER_BIT,$=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(E),ht=_.length>1;if(ht)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ht){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let ee=n.get(_[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,z,K,0,0,z,K,j,s.NEAREST),l===!0&&(Re.length=0,N.length=0,Re.push(s.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Re.push($),N.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Re))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let ee=n.get(_[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,ee,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Zt(E){return Math.min(i.maxSamples,E.samples)}function Kt(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Lt(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function ye(E,_){let z=E.colorSpace,K=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==Rs&&z!==li&&(ne.getTransfer(z)===ue?(K!==bn||j!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Ct(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=O,this.setTexture2D=Y,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=V,this.rebindTextures=Yt,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=cn,this.setupDepthRenderbuffer=kt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Kt}function Fy(s,t){function e(n,i=li){let r,o=ne.getTransfer(i);if(n===Yn)return s.UNSIGNED_BYTE;if(n===oc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===ac)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===vu)return s.BYTE;if(n===bu)return s.SHORT;if(n===sr)return s.UNSIGNED_SHORT;if(n===rc)return s.INT;if(n===ki)return s.UNSIGNED_INT;if(n===Rn)return s.FLOAT;if(n===fr)return s.HALF_FLOAT;if(n===Su)return s.ALPHA;if(n===wu)return s.RGB;if(n===bn)return s.RGBA;if(n===Tu)return s.LUMINANCE;if(n===Eu)return s.LUMINANCE_ALPHA;if(n===fs)return s.DEPTH_COMPONENT;if(n===vs)return s.DEPTH_STENCIL;if(n===lc)return s.RED;if(n===cc)return s.RED_INTEGER;if(n===Au)return s.RG;if(n===hc)return s.RG_INTEGER;if(n===uc)return s.RGBA_INTEGER;if(n===to||n===eo||n===no||n===io)if(o===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===eo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===io)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ka||n===Ja||n===ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===tl||n===el||n===nl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===tl||n===el)return o===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===nl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===ml||n===gl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===il)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===hl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ul)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===dl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===yl||n===xl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return o===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===xl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===_l||n===vl||n===bl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===so)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===bl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var Fl=class extends Be{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ve=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},zy={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ve;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},By=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Oy=`
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

}`,zl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Je,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:By,fragmentShader:Oy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new mi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Bl=class extends pi{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,y=new zl,m=e.getContextAttributes(),f=null,S=null,w=[],v=[],I=new qt,T=null,C=new Be;C.viewport=new de;let R=new Be;R.viewport=new de;let b=[C,R],x=new Fl,A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=w[q];return Q===void 0&&(Q=new nr,w[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=w[q];return Q===void 0&&(Q=new nr,w[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=w[q];return Q===void 0&&(Q=new nr,w[q]=Q),Q.getHandSpace()};function F(q){let Q=v.indexOf(q.inputSource);if(Q===-1)return;let mt=w[Q];mt!==void 0&&(mt.update(q.inputSource,q.frame,c||o),mt.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Y);for(let q=0;q<w.length;q++){let Q=v[q];Q!==null&&(v[q]=null,w[q].disconnect(Q))}A=null,O=null,y.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new $n(p.framebufferWidth,p.framebufferHeight,{format:bn,type:Yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,mt=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?vs:fs,mt=m.stencil?_s:ki);let Rt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(Rt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new $n(d.textureWidth,d.textureHeight,{format:bn,type:Yn,depthTexture:new xo(d.textureWidth,d.textureHeight,mt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(q){for(let Q=0;Q<q.removed.length;Q++){let mt=q.removed[Q],rt=v.indexOf(mt);rt>=0&&(v[rt]=null,w[rt].disconnect(mt))}for(let Q=0;Q<q.added.length;Q++){let mt=q.added[Q],rt=v.indexOf(mt);if(rt===-1){for(let kt=0;kt<w.length;kt++)if(kt>=v.length){v.push(mt),rt=kt;break}else if(v[kt]===null){v[kt]=mt,rt=kt;break}if(rt===-1)break}let Rt=w[rt];Rt&&Rt.connect(mt)}}let B=new P,Z=new P;function V(q,Q,mt){B.setFromMatrixPosition(Q.matrixWorld),Z.setFromMatrixPosition(mt.matrixWorld);let rt=B.distanceTo(Z),Rt=Q.projectionMatrix.elements,kt=mt.projectionMatrix.elements,Yt=Rt[14]/(Rt[10]-1),Se=Rt[14]/(Rt[10]+1),te=(Rt[9]+1)/Rt[5],Re=(Rt[9]-1)/Rt[5],N=(Rt[8]-1)/Rt[0],cn=(kt[8]+1)/kt[0],Zt=Yt*N,Kt=Yt*cn,Lt=rt/(-N+cn),ye=Lt*-N;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ye),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Rt[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Ct=Yt+Lt,E=Se+Lt,_=Zt-ye,z=Kt+(rt-ye),K=te*Se/E*Ct,j=Re*Se/E*Ct;q.projectionMatrix.makePerspective(_,z,K,j,Ct,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function it(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let Q=q.near,mt=q.far;y.texture!==null&&(y.depthNear>0&&(Q=y.depthNear),y.depthFar>0&&(mt=y.depthFar)),x.near=R.near=C.near=Q,x.far=R.far=C.far=mt,(A!==x.near||O!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),A=x.near,O=x.far),C.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,x.layers.mask=C.layers.mask|R.layers.mask;let rt=q.parent,Rt=x.cameras;it(x,rt);for(let kt=0;kt<Rt.length;kt++)it(Rt[kt],rt);Rt.length===2?V(x,C,R):x.projectionMatrix.copy(C.projectionMatrix),st(q,x,rt)};function st(q,Q,mt){mt===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(mt.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=rr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let ft=null;function Pt(q,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let mt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let rt=!1;mt.length!==x.cameras.length&&(x.cameras.length=0,rt=!0);for(let kt=0;kt<mt.length;kt++){let Yt=mt[kt],Se=null;if(p!==null)Se=p.getViewport(Yt);else{let Re=u.getViewSubImage(d,Yt);Se=Re.viewport,kt===0&&(t.setRenderTargetTextures(S,Re.colorTexture,d.ignoreDepthValues?void 0:Re.depthStencilTexture),t.setRenderTarget(S))}let te=b[kt];te===void 0&&(te=new Be,te.layers.enable(kt),te.viewport=new de,b[kt]=te),te.matrix.fromArray(Yt.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Yt.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(Se.x,Se.y,Se.width,Se.height),kt===0&&(x.matrix.copy(te.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),rt===!0&&x.cameras.push(te)}let Rt=i.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")){let kt=u.getDepthInformation(mt[0]);kt&&kt.isValid&&kt.texture&&y.init(t,kt,i.renderState)}}for(let mt=0;mt<w.length;mt++){let rt=v[mt],Rt=w[mt];rt!==null&&Rt!==void 0&&Rt.update(rt,Q,c||o)}ft&&ft(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let $t=new Uu;$t.setAnimationLoop(Pt),this.setAnimationLoop=function(q){ft=q},this.dispose=function(){}}},Pi=new an,Hy=new jt;function Vy(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Du(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,w,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===We&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===We&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,Pi.copy(v),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hy.makeRotationFromEuler(Pi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===We&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gy(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let v=w.program;n.uniformBlockBinding(S,v)}function c(S,w){let v=i[S.id];v===void 0&&(g(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));let I=w.program;n.updateUBOMapping(S,I);let T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){let w=u();S.__bindingPointIndex=w;let v=s.createBuffer(),I=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,I,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let w=i[S.id],v=S.uniforms,I=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let T=0,C=v.length;T<C;T++){let R=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,x=R.length;b<x;b++){let A=R[b];if(p(A,T,b,I)===!0){let O=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],W=0;for(let Y=0;Y<F.length;Y++){let B=F[Y],Z=y(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,O+W,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,W),W+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,v,I){let T=S.value,C=w+"_"+v;if(I[C]===void 0)return typeof T=="number"||typeof T=="boolean"?I[C]=T:I[C]=T.clone(),!0;{let R=I[C];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return I[C]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){let w=S.uniforms,v=0,I=16;for(let C=0,R=w.length;C<R;C++){let b=Array.isArray(w[C])?w[C]:[w[C]];for(let x=0,A=b.length;x<A;x++){let O=b[x],F=Array.isArray(O.value)?O.value:[O.value];for(let W=0,Y=F.length;W<Y;W++){let B=F[W],Z=y(B),V=v%I,it=V%Z.boundary,st=V+it;v+=it,st!==0&&I-st<Z.storage&&(v+=I-st),O.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Z.storage}}}let T=v%I;return T>0&&(v+=I-T),S.__size=v,S.__cache={},this}function y(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){let w=S.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function f(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}var _o=class{constructor(t={}){let{canvas:e=Yf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,f=null,S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ke,this.toneMapping=di,this.toneMappingExposure=1;let v=this,I=!1,T=0,C=0,R=null,b=-1,x=null,A=new de,O=new de,F=null,W=new Dt(0),Y=0,B=e.width,Z=e.height,V=1,it=null,st=null,ft=new de(0,0,B,Z),Pt=new de(0,0,B,Z),$t=!1,q=new ar,Q=!1,mt=!1,rt=new jt,Rt=new jt,kt=new P,Yt=new de,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},te=!1;function Re(){return R===null?V:1}let N=n;function cn(M,D){return e.getContext(M,D)}try{let M={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${nc}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ut,!1),N===null){let D="webgl2";if(N=cn(D,M),N===null)throw cn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Zt,Kt,Lt,ye,Ct,E,_,z,K,j,$,wt,ht,gt,ee,et,xt,Ut,Nt,_t,Jt,Gt,me,L;function lt(){Zt=new rg(N),Zt.init(),Gt=new Fy(N,Zt),Kt=new Q0(N,Zt,t,Gt),Lt=new Uy(N,Zt),Kt.reverseDepthBuffer&&d&&Lt.buffers.depth.setReversed(!0),ye=new lg(N),Ct=new by,E=new ky(N,Zt,Lt,Ct,Kt,Gt,ye),_=new eg(v),z=new sg(v),K=new mp(N),me=new J0(N,K),j=new og(N,K,ye,me),$=new hg(N,j,K,ye),Nt=new cg(N,Kt,E),et=new tg(Ct),wt=new vy(v,_,z,Zt,Kt,me,et),ht=new Vy(v,Ct),gt=new Sy,ee=new Cy(Zt),Ut=new K0(v,_,z,Lt,$,p,l),xt=new Ly(v,$,Kt),L=new Gy(N,ye,Kt,Lt),_t=new j0(N,Zt,ye),Jt=new ag(N,Zt,ye),ye.programs=wt.programs,v.capabilities=Kt,v.extensions=Zt,v.properties=Ct,v.renderLists=gt,v.shadowMap=xt,v.state=Lt,v.info=ye}lt();let X=new Bl(v,N);this.xr=X,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let M=Zt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Zt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(B,Z,!1))},this.getSize=function(M){return M.set(B,Z)},this.setSize=function(M,D,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,Z=D,e.width=Math.floor(M*V),e.height=Math.floor(D*V),H===!0&&(e.style.width=M+"px",e.style.height=D+"px"),this.setViewport(0,0,M,D)},this.getDrawingBufferSize=function(M){return M.set(B*V,Z*V).floor()},this.setDrawingBufferSize=function(M,D,H){B=M,Z=D,V=H,e.width=Math.floor(M*H),e.height=Math.floor(D*H),this.setViewport(0,0,M,D)},this.getCurrentViewport=function(M){return M.copy(A)},this.getViewport=function(M){return M.copy(ft)},this.setViewport=function(M,D,H,G){M.isVector4?ft.set(M.x,M.y,M.z,M.w):ft.set(M,D,H,G),Lt.viewport(A.copy(ft).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(Pt)},this.setScissor=function(M,D,H,G){M.isVector4?Pt.set(M.x,M.y,M.z,M.w):Pt.set(M,D,H,G),Lt.scissor(O.copy(Pt).multiplyScalar(V).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(M){Lt.setScissorTest($t=M)},this.setOpaqueSort=function(M){it=M},this.setTransparentSort=function(M){st=M},this.getClearColor=function(M){return M.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor.apply(Ut,arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha.apply(Ut,arguments)},this.clear=function(M=!0,D=!0,H=!0){let G=0;if(M){let U=!1;if(R!==null){let nt=R.texture.format;U=nt===uc||nt===hc||nt===cc}if(U){let nt=R.texture.type,dt=nt===Yn||nt===ki||nt===sr||nt===_s||nt===oc||nt===ac,bt=Ut.getClearColor(),Mt=Ut.getClearAlpha(),Ft=bt.r,Ot=bt.g,St=bt.b;dt?(g[0]=Ft,g[1]=Ot,g[2]=St,g[3]=Mt,N.clearBufferuiv(N.COLOR,0,g)):(y[0]=Ft,y[1]=Ot,y[2]=St,y[3]=Mt,N.clearBufferiv(N.COLOR,0,y))}else G|=N.COLOR_BUFFER_BIT}D&&(G|=N.DEPTH_BUFFER_BIT),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ut,!1),gt.dispose(),ee.dispose(),Ct.dispose(),_.dispose(),z.dispose(),$.dispose(),me.dispose(),L.dispose(),wt.dispose(),X.dispose(),X.removeEventListener("sessionstart",jc),X.removeEventListener("sessionend",Qc),Ti.stop()};function J(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let M=ye.autoReset,D=xt.enabled,H=xt.autoUpdate,G=xt.needsUpdate,U=xt.type;lt(),ye.autoReset=M,xt.enabled=D,xt.autoUpdate=H,xt.needsUpdate=G,xt.type=U}function ut(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Bt(M){let D=M.target;D.removeEventListener("dispose",Bt),Ee(D)}function Ee(M){He(M),Ct.remove(M)}function He(M){let D=Ct.get(M).programs;D!==void 0&&(D.forEach(function(H){wt.releaseProgram(H)}),M.isShaderMaterial&&wt.releaseShaderCache(M))}this.renderBufferDirect=function(M,D,H,G,U,nt){D===null&&(D=Se);let dt=U.isMesh&&U.matrixWorld.determinant()<0,bt=Hd(M,D,H,G,U);Lt.setMaterial(G,dt);let Mt=H.index,Ft=1;if(G.wireframe===!0){if(Mt=j.getWireframeAttribute(H),Mt===void 0)return;Ft=2}let Ot=H.drawRange,St=H.attributes.position,se=Ot.start*Ft,ge=(Ot.start+Ot.count)*Ft;nt!==null&&(se=Math.max(se,nt.start*Ft),ge=Math.min(ge,(nt.start+nt.count)*Ft)),Mt!==null?(se=Math.max(se,0),ge=Math.min(ge,Mt.count)):St!=null&&(se=Math.max(se,0),ge=Math.min(ge,St.count));let xe=ge-se;if(xe<0||xe===1/0)return;me.setup(U,G,bt,H,Mt);let Ke,oe=_t;if(Mt!==null&&(Ke=K.get(Mt),oe=Jt,oe.setIndex(Ke)),U.isMesh)G.wireframe===!0?(Lt.setLineWidth(G.wireframeLinewidth*Re()),oe.setMode(N.LINES)):oe.setMode(N.TRIANGLES);else if(U.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),Lt.setLineWidth(Tt*Re()),U.isLineSegments?oe.setMode(N.LINES):U.isLineLoop?oe.setMode(N.LINE_LOOP):oe.setMode(N.LINE_STRIP)}else U.isPoints?oe.setMode(N.POINTS):U.isSprite&&oe.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)oe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Zt.get("WEBGL_multi_draw"))oe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Tt=U._multiDrawStarts,Un=U._multiDrawCounts,ae=U._multiDrawCount,gn=Mt?K.get(Mt).bytesPerElement:1,qi=Ct.get(G).currentProgram.getUniforms();for(let nn=0;nn<ae;nn++)qi.setValue(N,"_gl_DrawID",nn),oe.render(Tt[nn]/gn,Un[nn])}else if(U.isInstancedMesh)oe.renderInstances(se,xe,U.count);else if(H.isInstancedBufferGeometry){let Tt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Un=Math.min(H.instanceCount,Tt);oe.renderInstances(se,xe,Un)}else oe.render(se,xe)};function le(M,D,H){M.transparent===!0&&M.side===Vn&&M.forceSinglePass===!1?(M.side=We,M.needsUpdate=!0,Sr(M,D,H),M.side=fi,M.needsUpdate=!0,Sr(M,D,H),M.side=Vn):Sr(M,D,H)}this.compile=function(M,D,H=null){H===null&&(H=M),f=ee.get(H),f.init(D),w.push(f),H.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),M!==H&&M.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let G=new Set;return M.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let dt=0;dt<nt.length;dt++){let bt=nt[dt];le(bt,H,U),G.add(bt)}else le(nt,H,U),G.add(nt)}),w.pop(),f=null,G},this.compileAsync=function(M,D,H=null){let G=this.compile(M,D,H);return new Promise(U=>{function nt(){if(G.forEach(function(dt){Ct.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){U(M);return}setTimeout(nt,10)}Zt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let mn=null;function Dn(M){mn&&mn(M)}function jc(){Ti.stop()}function Qc(){Ti.start()}let Ti=new Uu;Ti.setAnimationLoop(Dn),typeof self!="undefined"&&Ti.setContext(self),this.setAnimationLoop=function(M){mn=M,X.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},X.addEventListener("sessionstart",jc),X.addEventListener("sessionend",Qc),this.render=function(M,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),M.isScene===!0&&M.onBeforeRender(v,M,D,R),f=ee.get(M,w.length),f.init(D),w.push(f),Rt.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Rt),mt=this.localClippingEnabled,Q=et.init(this.clippingPlanes,mt),m=gt.get(M,S.length),m.init(),S.push(m),X.enabled===!0&&X.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&ra(nt,D,-1/0,v.sortObjects)}ra(M,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,st),te=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,te&&Ut.addToRenderList(m,M),this.info.render.frame++,Q===!0&&et.beginShadows();let H=f.state.shadowsArray;xt.render(H,M,D),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){let nt=D.cameras;if(U.length>0)for(let dt=0,bt=nt.length;dt<bt;dt++){let Mt=nt[dt];eh(G,U,M,Mt)}te&&Ut.render(M);for(let dt=0,bt=nt.length;dt<bt;dt++){let Mt=nt[dt];th(m,M,Mt,Mt.viewport)}}else U.length>0&&eh(G,U,M,D),te&&Ut.render(M),th(m,M,D);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(v,M,D),me.resetDefaultState(),b=-1,x=null,w.pop(),w.length>0?(f=w[w.length-1],Q===!0&&et.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function ra(M,D,H,G){if(M.visible===!1)return;if(M.layers.test(D.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(D);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||q.intersectsSprite(M)){G&&Yt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Rt);let dt=$.update(M),bt=M.material;bt.visible&&m.push(M,dt,bt,H,Yt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||q.intersectsObject(M))){let dt=$.update(M),bt=M.material;if(G&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Yt.copy(M.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Yt.copy(dt.boundingSphere.center)),Yt.applyMatrix4(M.matrixWorld).applyMatrix4(Rt)),Array.isArray(bt)){let Mt=dt.groups;for(let Ft=0,Ot=Mt.length;Ft<Ot;Ft++){let St=Mt[Ft],se=bt[St.materialIndex];se&&se.visible&&m.push(M,dt,se,H,Yt.z,St)}}else bt.visible&&m.push(M,dt,bt,H,Yt.z,null)}}let nt=M.children;for(let dt=0,bt=nt.length;dt<bt;dt++)ra(nt[dt],D,H,G)}function th(M,D,H,G){let U=M.opaque,nt=M.transmissive,dt=M.transparent;f.setupLightsView(H),Q===!0&&et.setGlobalState(v.clippingPlanes,H),G&&Lt.viewport(A.copy(G)),U.length>0&&Mr(U,D,H),nt.length>0&&Mr(nt,D,H),dt.length>0&&Mr(dt,D,H),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function eh(M,D,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[G.id]===void 0&&(f.state.transmissionRenderTarget[G.id]=new $n(1,1,{generateMipmaps:!0,type:Zt.has("EXT_color_buffer_half_float")||Zt.has("EXT_color_buffer_float")?fr:Yn,minFilter:Gn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let nt=f.state.transmissionRenderTarget[G.id],dt=G.viewport||A;nt.setSize(dt.z,dt.w);let bt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(W),Y=v.getClearAlpha(),Y<1&&v.setClearColor(16777215,.5),v.clear(),te&&Ut.render(H);let Mt=v.toneMapping;v.toneMapping=di;let Ft=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),f.setupLightsView(G),Q===!0&&et.setGlobalState(v.clippingPlanes,G),Mr(M,H,G),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),Zt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let St=0,se=D.length;St<se;St++){let ge=D[St],xe=ge.object,Ke=ge.geometry,oe=ge.material,Tt=ge.group;if(oe.side===Vn&&xe.layers.test(G.layers)){let Un=oe.side;oe.side=We,oe.needsUpdate=!0,nh(xe,H,G,Ke,oe,Tt),oe.side=Un,oe.needsUpdate=!0,Ot=!0}}Ot===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}v.setRenderTarget(bt),v.setClearColor(W,Y),Ft!==void 0&&(G.viewport=Ft),v.toneMapping=Mt}function Mr(M,D,H){let G=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=M.length;U<nt;U++){let dt=M[U],bt=dt.object,Mt=dt.geometry,Ft=G===null?dt.material:G,Ot=dt.group;bt.layers.test(H.layers)&&nh(bt,D,H,Mt,Ft,Ot)}}function nh(M,D,H,G,U,nt){M.onBeforeRender(v,D,H,G,U,nt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),U.onBeforeRender(v,D,H,G,M,nt),U.transparent===!0&&U.side===Vn&&U.forceSinglePass===!1?(U.side=We,U.needsUpdate=!0,v.renderBufferDirect(H,D,G,U,M,nt),U.side=fi,U.needsUpdate=!0,v.renderBufferDirect(H,D,G,U,M,nt),U.side=Vn):v.renderBufferDirect(H,D,G,U,M,nt),M.onAfterRender(v,D,H,G,U,nt)}function Sr(M,D,H){D.isScene!==!0&&(D=Se);let G=Ct.get(M),U=f.state.lights,nt=f.state.shadowsArray,dt=U.state.version,bt=wt.getParameters(M,U.state,nt,D,H),Mt=wt.getProgramCacheKey(bt),Ft=G.programs;G.environment=M.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(M.isMeshStandardMaterial?z:_).get(M.envMap||G.environment),G.envMapRotation=G.environment!==null&&M.envMap===null?D.environmentRotation:M.envMapRotation,Ft===void 0&&(M.addEventListener("dispose",Bt),Ft=new Map,G.programs=Ft);let Ot=Ft.get(Mt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===dt)return sh(M,bt),Ot}else bt.uniforms=wt.getUniforms(M),M.onBeforeCompile(bt,v),Ot=wt.acquireProgram(bt,Mt),Ft.set(Mt,Ot),G.uniforms=bt.uniforms;let St=G.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(St.clippingPlanes=et.uniform),sh(M,bt),G.needsLights=Gd(M),G.lightsStateVersion=dt,G.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function ih(M){if(M.uniformsList===null){let D=M.currentProgram.getUniforms();M.uniformsList=ms.seqWithValue(D.seq,M.uniforms)}return M.uniformsList}function sh(M,D){let H=Ct.get(M);H.outputColorSpace=D.outputColorSpace,H.batching=D.batching,H.batchingColor=D.batchingColor,H.instancing=D.instancing,H.instancingColor=D.instancingColor,H.instancingMorph=D.instancingMorph,H.skinning=D.skinning,H.morphTargets=D.morphTargets,H.morphNormals=D.morphNormals,H.morphColors=D.morphColors,H.morphTargetsCount=D.morphTargetsCount,H.numClippingPlanes=D.numClippingPlanes,H.numIntersection=D.numClipIntersection,H.vertexAlphas=D.vertexAlphas,H.vertexTangents=D.vertexTangents,H.toneMapping=D.toneMapping}function Hd(M,D,H,G,U){D.isScene!==!0&&(D=Se),E.resetTextureUnits();let nt=D.fog,dt=G.isMeshStandardMaterial?D.environment:null,bt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Rs,Mt=(G.isMeshStandardMaterial?z:_).get(G.envMap||dt),Ft=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ot=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!H.morphAttributes.position,se=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color,xe=di;G.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(xe=v.toneMapping);let Ke=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,oe=Ke!==void 0?Ke.length:0,Tt=Ct.get(G),Un=f.state.lights;if(Q===!0&&(mt===!0||M!==x)){let hn=M===x&&G.id===b;et.setState(G,M,hn)}let ae=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Un.state.version||Tt.outputColorSpace!==bt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==Mt||G.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==Ot||Tt.morphTargets!==St||Tt.morphNormals!==se||Tt.morphColors!==ge||Tt.toneMapping!==xe||Tt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Tt.__version=G.version);let gn=Tt.currentProgram;ae===!0&&(gn=Sr(G,D,U));let qi=!1,nn=!1,Bs=!1,_e=gn.getUniforms(),Tn=Tt.uniforms;if(Lt.useProgram(gn.program)&&(qi=!0,nn=!0,Bs=!0),G.id!==b&&(b=G.id,nn=!0),qi||x!==M){Lt.buffers.depth.getReversed()?(rt.copy(M.projectionMatrix),Zf(rt),Kf(rt),_e.setValue(N,"projectionMatrix",rt)):_e.setValue(N,"projectionMatrix",M.projectionMatrix),_e.setValue(N,"viewMatrix",M.matrixWorldInverse);let ti=_e.map.cameraPosition;ti!==void 0&&ti.setValue(N,kt.setFromMatrixPosition(M.matrixWorld)),Kt.logarithmicDepthBuffer&&_e.setValue(N,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&_e.setValue(N,"isOrthographic",M.isOrthographicCamera===!0),x!==M&&(x=M,nn=!0,Bs=!0)}if(U.isSkinnedMesh){_e.setOptional(N,U,"bindMatrix"),_e.setOptional(N,U,"bindMatrixInverse");let hn=U.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),_e.setValue(N,"boneTexture",hn.boneTexture,E))}U.isBatchedMesh&&(_e.setOptional(N,U,"batchingTexture"),_e.setValue(N,"batchingTexture",U._matricesTexture,E),_e.setOptional(N,U,"batchingIdTexture"),_e.setValue(N,"batchingIdTexture",U._indirectTexture,E),_e.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&_e.setValue(N,"batchingColorTexture",U._colorsTexture,E));let Os=H.morphAttributes;if((Os.position!==void 0||Os.normal!==void 0||Os.color!==void 0)&&Nt.update(U,H,gn),(nn||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,_e.setValue(N,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Tn.envMap.value=Mt,Tn.flipEnvMap.value=Mt.isCubeTexture&&Mt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&D.environment!==null&&(Tn.envMapIntensity.value=D.environmentIntensity),nn&&(_e.setValue(N,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Vd(Tn,Bs),nt&&G.fog===!0&&ht.refreshFogUniforms(Tn,nt),ht.refreshMaterialUniforms(Tn,G,V,Z,f.state.transmissionRenderTarget[M.id]),ms.upload(N,ih(Tt),Tn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ms.upload(N,ih(Tt),Tn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&_e.setValue(N,"center",U.center),_e.setValue(N,"modelViewMatrix",U.modelViewMatrix),_e.setValue(N,"normalMatrix",U.normalMatrix),_e.setValue(N,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let hn=G.uniformsGroups;for(let ti=0,ei=hn.length;ti<ei;ti++){let rh=hn[ti];L.update(rh,gn),L.bind(rh,gn)}}return gn}function Vd(M,D){M.ambientLightColor.needsUpdate=D,M.lightProbe.needsUpdate=D,M.directionalLights.needsUpdate=D,M.directionalLightShadows.needsUpdate=D,M.pointLights.needsUpdate=D,M.pointLightShadows.needsUpdate=D,M.spotLights.needsUpdate=D,M.spotLightShadows.needsUpdate=D,M.rectAreaLights.needsUpdate=D,M.hemisphereLights.needsUpdate=D}function Gd(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,D,H){Ct.get(M.texture).__webglTexture=D,Ct.get(M.depthTexture).__webglTexture=H;let G=Ct.get(M);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,D){let H=Ct.get(M);H.__webglFramebuffer=D,H.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(M,D=0,H=0){R=M,T=D,C=H;let G=!0,U=null,nt=!1,dt=!1;if(M){let Mt=Ct.get(M);if(Mt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(Mt.__webglFramebuffer===void 0)E.setupRenderTarget(M);else if(Mt.__hasExternalTextures)E.rebindTextures(M,Ct.get(M.texture).__webglTexture,Ct.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let St=M.depthTexture;if(Mt.__boundDepthTexture!==St){if(St!==null&&Ct.has(St)&&(M.width!==St.image.width||M.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(M)}}let Ft=M.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);let Ot=Ct.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ot[D])?U=Ot[D][H]:U=Ot[D],nt=!0):M.samples>0&&E.useMultisampledRTT(M)===!1?U=Ct.get(M).__webglMultisampledFramebuffer:Array.isArray(Ot)?U=Ot[H]:U=Ot,A.copy(M.viewport),O.copy(M.scissor),F=M.scissorTest}else A.copy(ft).multiplyScalar(V).floor(),O.copy(Pt).multiplyScalar(V).floor(),F=$t;if(Lt.bindFramebuffer(N.FRAMEBUFFER,U)&&G&&Lt.drawBuffers(M,U),Lt.viewport(A),Lt.scissor(O),Lt.setScissorTest(F),nt){let Mt=Ct.get(M.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,Mt.__webglTexture,H)}else if(dt){let Mt=Ct.get(M.texture),Ft=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,Mt.__webglTexture,H||0,Ft)}b=-1},this.readRenderTargetPixels=function(M,D,H,G,U,nt,dt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(bt=bt[dt]),bt){Lt.bindFramebuffer(N.FRAMEBUFFER,bt);try{let Mt=M.texture,Ft=Mt.format,Ot=Mt.type;if(!Kt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=M.width-G&&H>=0&&H<=M.height-U&&N.readPixels(D,H,G,U,Gt.convert(Ft),Gt.convert(Ot),nt)}finally{let Mt=R!==null?Ct.get(R).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,Mt)}}},this.readRenderTargetPixelsAsync=async function(M,D,H,G,U,nt,dt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ct.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&dt!==void 0&&(bt=bt[dt]),bt){let Mt=M.texture,Ft=Mt.format,Ot=Mt.type;if(!Kt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=M.width-G&&H>=0&&H<=M.height-U){Lt.bindFramebuffer(N.FRAMEBUFFER,bt);let St=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.bufferData(N.PIXEL_PACK_BUFFER,nt.byteLength,N.STREAM_READ),N.readPixels(D,H,G,U,Gt.convert(Ft),Gt.convert(Ot),0);let se=R!==null?Ct.get(R).__webglFramebuffer:null;Lt.bindFramebuffer(N.FRAMEBUFFER,se);let ge=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await $f(N,ge,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,nt),N.deleteBuffer(St),N.deleteSync(ge),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,D=null,H=0){M.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,M=arguments[1]);let G=Math.pow(2,-H),U=Math.floor(M.image.width*G),nt=Math.floor(M.image.height*G),dt=D!==null?D.x:0,bt=D!==null?D.y:0;E.setTexture2D(M,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,dt,bt,U,nt),Lt.unbindTexture()},this.copyTextureToTexture=function(M,D,H=null,G=null,U=0){M.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,M=arguments[1],D=arguments[2],U=arguments[3]||0,H=null);let nt,dt,bt,Mt,Ft,Ot,St,se,ge,xe=M.isCompressedTexture?M.mipmaps[U]:M.image;H!==null?(nt=H.max.x-H.min.x,dt=H.max.y-H.min.y,bt=H.isBox3?H.max.z-H.min.z:1,Mt=H.min.x,Ft=H.min.y,Ot=H.isBox3?H.min.z:0):(nt=xe.width,dt=xe.height,bt=xe.depth||1,Mt=0,Ft=0,Ot=0),G!==null?(St=G.x,se=G.y,ge=G.z):(St=0,se=0,ge=0);let Ke=Gt.convert(D.format),oe=Gt.convert(D.type),Tt;D.isData3DTexture?(E.setTexture3D(D,0),Tt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Tt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Tt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Un=N.getParameter(N.UNPACK_ROW_LENGTH),ae=N.getParameter(N.UNPACK_IMAGE_HEIGHT),gn=N.getParameter(N.UNPACK_SKIP_PIXELS),qi=N.getParameter(N.UNPACK_SKIP_ROWS),nn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Mt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Ot);let Bs=M.isDataArrayTexture||M.isData3DTexture,_e=D.isDataArrayTexture||D.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){let Tn=Ct.get(M),Os=Ct.get(D),hn=Ct.get(Tn.__renderTarget),ti=Ct.get(Os.__renderTarget);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,hn.__webglFramebuffer),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,ti.__webglFramebuffer);for(let ei=0;ei<bt;ei++)Bs&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(M).__webglTexture,U,Ot+ei),M.isDepthTexture?(_e&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ct.get(D).__webglTexture,U,ge+ei),N.blitFramebuffer(Mt,Ft,nt,dt,St,se,nt,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):_e?N.copyTexSubImage3D(Tt,U,St,se,ge+ei,Mt,Ft,nt,dt):N.copyTexSubImage2D(Tt,U,St,se,ge+ei,Mt,Ft,nt,dt);Lt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else _e?M.isDataTexture||M.isData3DTexture?N.texSubImage3D(Tt,U,St,se,ge,nt,dt,bt,Ke,oe,xe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,U,St,se,ge,nt,dt,bt,Ke,xe.data):N.texSubImage3D(Tt,U,St,se,ge,nt,dt,bt,Ke,oe,xe):M.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,St,se,nt,dt,Ke,oe,xe.data):M.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,St,se,xe.width,xe.height,Ke,xe.data):N.texSubImage2D(N.TEXTURE_2D,U,St,se,nt,dt,Ke,oe,xe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Un),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ae),N.pixelStorei(N.UNPACK_SKIP_PIXELS,gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,qi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,nn),U===0&&D.generateMipmaps&&N.generateMipmap(Tt),Lt.unbindTexture()},this.copyTextureToTexture3D=function(M,D,H=null,G=null,U=0){return M.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,M=arguments[2],D=arguments[3],U=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,D,H,G,U)},this.initRenderTarget=function(M){Ct.get(M).__webglFramebuffer===void 0&&E.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?E.setTextureCube(M,0):M.isData3DTexture?E.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?E.setTexture2DArray(M,0):E.setTexture2D(M,0),Lt.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,Lt.reset(),me.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var vo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Dt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},lr=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},bo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Sl,this.updateRanges=[],this.version=0,this.uuid=Xn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new P,cr=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ce(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ce(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ce(e,this.array),n=ce(n,this.array),i=ce(i,this.array),r=ce(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new Me(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},gi=class extends In{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},as,Xs=new P,ls=new P,cs=new P,hs=new qt,qs=new qt,Bu=new jt,Xr=new P,Ys=new P,qr=new P,ru=new qt,Ua=new qt,ou=new qt,zi=class extends Fe{constructor(t=new gi){if(super(),this.isSprite=!0,this.type="Sprite",as===void 0){as=new Le;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bo(e,5);as.setIndex([0,1,2,0,2,3]),as.setAttribute("position",new cr(n,3,0,!1)),as.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=as,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ls.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ls.multiplyScalar(-cs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Yr(Xr.set(-.5,-.5,0),cs,o,ls,i,r),Yr(Ys.set(.5,-.5,0),cs,o,ls,i,r),Yr(qr.set(.5,.5,0),cs,o,ls,i,r),ru.set(0,0),Ua.set(1,0),ou.set(1,1);let a=t.ray.intersectTriangle(Xr,Ys,qr,!1,Xs);if(a===null&&(Yr(Ys.set(-.5,.5,0),cs,o,ls,i,r),Ua.set(0,1),a=t.ray.intersectTriangle(Xr,qr,Ys,!1,Xs),a===null))return;let l=t.ray.origin.distanceTo(Xs);l<t.near||l>t.far||e.push({distance:l,point:Xs.clone(),uv:ci.getInterpolation(Xs,Xr,Ys,qr,ru,Ua,ou,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Yr(s,t,e,n,i,r){hs.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(qs.x=r*hs.x-i*hs.y,qs.y=i*hs.x+r*hs.y):qs.copy(hs),s.copy(t),s.x+=qs.x,s.y+=qs.y,s.applyMatrix4(Bu)}var Ol=class extends Je{constructor(t=null,e=1,n=1,i,r,o,a,l,c=on,h=on,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hr=class extends Me{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},us=new jt,au=new jt,$r=[],lu=new Zn,Wy=new jt,$s=new Ie,Zs=new Kn,Ms=class extends Ie{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wy)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),lu.copy(t.boundingBox).applyMatrix4(us),this.boundingBox.union(lu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Kn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,us),Zs.copy(t.boundingSphere).applyMatrix4(us),this.boundingSphere.union(Zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if($s.geometry=this.geometry,$s.material=this.material,$s.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zs.copy(this.boundingSphere),Zs.applyMatrix4(n),t.ray.intersectsSphere(Zs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,us),au.multiplyMatrices(n,us),$s.matrixWorld=au,$s.raycast(t,$r);for(let o=0,a=$r.length;o<a;o++){let l=$r[o];l.instanceId=r,l.object=this,e.push(l)}$r.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ol(new Float32Array(i*this.count),i,this.count,lc,Rn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ur=class extends In{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Mo=new P,So=new P,cu=new jt,Ks=new or,Zr=new Kn,Na=new P,hu=new P,Hl=class extends Fe{constructor(t=new Le,e=new ur){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Mo.fromBufferAttribute(e,i-1),So.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Mo.distanceTo(So);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere),Zr.applyMatrix4(i),Zr.radius+=r,t.ray.intersectsSphere(Zr)===!1)return;cu.copy(i).invert(),Ks.copy(t.ray).applyMatrix4(cu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=h.getX(y),S=h.getX(y+1),w=Kr(this,t,Ks,l,f,S);w&&e.push(w)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),f=Kr(this,t,Ks,l,y,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=c){let f=Kr(this,t,Ks,l,y,y+1);f&&e.push(f)}if(this.isLineLoop){let y=Kr(this,t,Ks,l,g-1,p);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Kr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(Mo.fromBufferAttribute(o,i),So.fromBufferAttribute(o,r),e.distanceSqToSegment(Mo,So,Na,hu)>n)return;Na.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Na);if(!(l<t.near||l>t.far))return{distance:l,point:hu.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var uu=new P,du=new P,wo=class extends Hl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)uu.fromBufferAttribute(e,i),du.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+uu.distanceTo(du);t.setAttribute("lineDistance",new we(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Vl=class extends In{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},fu=new jt,Gl=new or,Jr=new Kn,jr=new P,To=class extends Fe{constructor(t=new Le,e=new Vl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=r,t.ray.intersectsSphere(Jr)===!1)return;fu.copy(i).invert(),Gl.copy(t.ray).applyMatrix4(fu);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,y=p;g<y;g++){let m=c.getX(g);jr.fromBufferAttribute(u,m),pu(jr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,y=p;g<y;g++)jr.fromBufferAttribute(u,g),pu(jr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function pu(s,t,e,n,i,r,o){let a=Gl.distanceSqToPoint(s);if(a<e){let l=new P;Gl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ss=class extends Je{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var jn=class s extends Le{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,y=[],m=n/2,f=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new we(u,3)),this.setAttribute("normal",new we(d,3)),this.setAttribute("uv",new we(p,2));function S(){let v=new P,I=new P,T=0,C=(e-t)/n;for(let R=0;R<=r;R++){let b=[],x=R/r,A=x*(e-t)+t;for(let O=0;O<=i;O++){let F=O/i,W=F*l+a,Y=Math.sin(W),B=Math.cos(W);I.x=A*Y,I.y=-x*n+m,I.z=A*B,u.push(I.x,I.y,I.z),v.set(Y,C,B).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-x),b.push(g++)}y.push(b)}for(let R=0;R<i;R++)for(let b=0;b<r;b++){let x=y[b][R],A=y[b+1][R],O=y[b+1][R+1],F=y[b][R+1];(t>0||b!==0)&&(h.push(x,A,F),T+=3),(e>0||b!==r-1)&&(h.push(A,O,F),T+=3)}c.addGroup(f,T,0),f+=T}function w(v){let I=g,T=new qt,C=new P,R=0,b=v===!0?t:e,x=v===!0?1:-1;for(let O=1;O<=i;O++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;let A=g;for(let O=0;O<=i;O++){let W=O/i*l+a,Y=Math.cos(W),B=Math.sin(W);C.x=b*B,C.y=m*x,C.z=b*Y,u.push(C.x,C.y,C.z),d.push(0,x,0),T.x=Y*.5+.5,T.y=B*.5*x+.5,p.push(T.x,T.y),g++}for(let O=0;O<i;O++){let F=I+O,W=A+O;v===!0?h.push(W,W+1,F):h.push(W+1,W,F),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Eo=class s extends jn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ws=class s extends Le{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,d=new P,p=[],g=[],y=[],m=[];for(let f=0;f<=n;f++){let S=[],w=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let T=I/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+v,1-w),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let w=h[f][S+1],v=h[f][S],I=h[f+1][S],T=h[f+1][S+1];(f!==0||o>0)&&p.push(w,v,T),(f!==n-1||l<Math.PI)&&p.push(v,I,T)}this.setIndex(p),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(y,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Bi=class extends In{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Qr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function Xy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var Ts=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends Ts{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ch,endingEnd:ch}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hh:r=t,a=2*e-n;break;case uh:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hh:o=t,l=2*n-e;break;case uh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),y=g*g,m=y*g,f=-d*m+2*d*y-d*g,S=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*y+.5*g,v=p*m-p*y;for(let I=0;I!==a;++I)r[I]=f*o[h+I]+S*o[c+I]+w*o[l+I]+v*o[u+I];return r}},Xl=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},ql=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qr(e,this.TimeBufferType),this.values=Qr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Qr(t.times,Array),values:Qr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new ql(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Xl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Wl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ro:e=this.InterpolantFactoryMethodDiscrete;break;case Ml:e=this.InterpolantFactoryMethodLinear;break;case aa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ro;case this.InterpolantFactoryMethodLinear:return Ml;case this.InterpolantFactoryMethodSmooth:return aa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Xy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===aa,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let y=e[u+g];if(y!==e[d+g]||y!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Ml;var Oi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Oi.prototype.ValueTypeName="bool";Oi.prototype.ValueBufferType=Array;Oi.prototype.DefaultInterpolation=ro;Oi.prototype.InterpolantFactoryMethodLinear=void 0;Oi.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends Sn{};Yl.prototype.ValueTypeName="color";var $l=class extends Sn{};$l.prototype.ValueTypeName="number";var Zl=class extends Ts{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Mn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Ao=class extends Sn{InterpolantFactoryMethodLinear(t){return new Zl(this.times,this.values,this.getValueSize(),t)}};Ao.prototype.ValueTypeName="quaternion";Ao.prototype.InterpolantFactoryMethodSmooth=void 0;var Hi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="string";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ro;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends Sn{};Kl.prototype.ValueTypeName="vector";var Jl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},qy=new Jl,jl=class{constructor(t){this.manager=t!==void 0?t:qy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var dr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Es=class extends dr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Dt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ka=new jt,mu=new P,gu=new P,Ro=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;mu.setFromMatrixPosition(t.matrixWorld),e.position.copy(mu),gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gu),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var yu=new jt,Js=new P,Fa=new P,Ql=class extends Ro{constructor(){super(new Be(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new qt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Js.setFromMatrixPosition(t.matrixWorld),n.position.copy(Js),Fa.copy(n.position),Fa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fa),n.updateMatrixWorld(),i.makeTranslation(-Js.x,-Js.y,-Js.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}},Co=class extends dr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},tc=class extends Ro{constructor(){super(new go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},As=class extends dr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new tc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var pc="\\[\\]\\.:\\/",Yy=new RegExp("["+pc+"]","g"),mc="[^"+pc+"]",$y="[^"+pc.replace("\\.","")+"]",Zy=/((?:WC+[\/:])*)/.source.replace("WC",mc),Ky=/(WCOD+)?/.source.replace("WCOD",$y),Jy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mc),jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mc),Qy=new RegExp("^"+Zy+Ky+Jy+jy+"$"),tx=["material","materials","bones","map"],ec=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Yy,"")}static parseTrackName(t){let e=Qy.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);tx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=ec;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Fx=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var Et={T:0,CT:1},yi=["t","ct"],re={gravity:20,jumpSpeed:6.6,stepHeight:.55,radius:.36,height:1.8,crouchHeight:1.25,eye:1.64,crouchEye:1.12,accel:42,airAccel:9,friction:9,walkMul:.52,crouchMul:.36},Vt={startMoney:800,maxMoney:16e3,freezeTime:5,buyTime:25,roundTime:115,bombTime:40,plantTime:3.2,defuseTime:10,defuseKitTime:5,roundEndTime:5,killReward:300,plantReward:800,winElim:3250,winBomb:3500,winTime:3250,lossBase:1400,lossStep:500,lossMax:3400,bombRadius:17,bombDamage:500,dmRespawn:2.5,dmTime:600,dmFragLimit:40},fe={knife:{name:"\u041D\u043E\u0436",slot:2,kind:"knife",price:0,dmg:34,dmg2:65,rate:.42,rate2:1,reach:1.7,speed:6.4,kill:300,team:-1},glock:{name:"Glock-18",slot:1,kind:"pistol",price:400,dmg:25,rate:.15,clip:20,reserve:120,reload:2.2,spread:.01,moveSpread:.05,airSpread:.15,recoil:.018,recoilX:.006,spray:.004,pen:.47,range:.8,speed:6.2,team:-1,auto:!1},usp:{name:"USP",silencer:!0,slot:1,kind:"pistol",price:500,dmg:34,rate:.15,clip:12,reserve:100,reload:2.7,spread:.008,moveSpread:.045,airSpread:.15,recoil:.022,recoilX:.006,spray:.004,pen:.5,range:.82,speed:6.2,team:-1,auto:!1},deagle:{name:"Desert Eagle",slot:1,kind:"pistol",price:650,dmg:54,rate:.24,clip:7,reserve:35,reload:2.2,spread:.01,moveSpread:.07,airSpread:.2,recoil:.055,recoilX:.012,spray:.01,pen:.93,range:.88,speed:6.2,team:-1,auto:!1},m3:{name:"M3 Super 90",slot:0,kind:"shotgun",price:1700,dmg:22,pellets:9,rate:.88,clip:8,reserve:32,reload:.5,shellReload:!0,spread:.065,moveSpread:.02,airSpread:.08,recoil:.06,recoilX:.01,spray:0,pen:.5,range:.55,speed:5.8,team:-1,auto:!1,kill:300},mp5:{name:"MP5 Navy",slot:0,kind:"smg",price:1500,dmg:26,rate:.08,clip:30,reserve:120,reload:2.6,spread:.012,moveSpread:.025,airSpread:.12,recoil:.011,recoilX:.006,spray:.0018,pen:.5,range:.84,speed:6.2,team:-1,auto:!0},p90:{name:"P90",slot:0,kind:"smg",price:2350,dmg:21,rate:.066,clip:50,reserve:100,reload:3.3,spread:.014,moveSpread:.025,airSpread:.12,recoil:.009,recoilX:.006,spray:.0016,pen:.75,range:.86,speed:6,team:-1,auto:!0},galil:{name:"Galil",slot:0,kind:"rifle",price:2e3,dmg:30,rate:.09,clip:35,reserve:90,reload:2.9,spread:.006,moveSpread:.09,airSpread:.25,recoil:.016,recoilX:.008,spray:.0028,pen:.77,range:.98,speed:5.6,team:0,auto:!0},famas:{name:"FAMAS",slot:0,kind:"rifle",price:2250,dmg:30,rate:.09,clip:25,reserve:90,reload:3.3,spread:.005,moveSpread:.09,airSpread:.25,recoil:.015,recoilX:.007,spray:.0026,pen:.7,range:.96,speed:5.6,team:1,auto:!0},ak47:{name:"AK-47",slot:0,kind:"rifle",price:2500,dmg:36,rate:.1,clip:30,reserve:90,reload:2.5,spread:.005,moveSpread:.11,airSpread:.3,recoil:.021,recoilX:.01,spray:.0032,pen:.78,range:.98,speed:5.5,team:0,auto:!0},m4a1:{name:"M4A1",silencer:!0,slot:0,kind:"rifle",price:3100,dmg:33,rate:.09,clip:30,reserve:90,reload:3.1,spread:.0045,moveSpread:.1,airSpread:.28,recoil:.017,recoilX:.008,spray:.0026,pen:.7,range:.97,speed:5.6,team:1,auto:!0},scout:{name:"Scout",slot:0,kind:"sniper",price:2750,dmg:75,rate:1.25,clip:10,reserve:90,reload:2,spread:.003,unscoped:.05,moveSpread:.06,airSpread:.04,recoil:.04,recoilX:.004,spray:0,pen:.85,range:.99,speed:6.2,zoom:2.6,team:-1,auto:!1},awp:{name:"AWP",slot:0,kind:"sniper",price:4750,dmg:115,rate:1.45,clip:10,reserve:30,reload:3,spread:.002,unscoped:.09,moveSpread:.2,airSpread:.4,recoil:.09,recoilX:.006,spray:0,pen:.97,range:.99,speed:5,zoom:4,team:-1,auto:!1,kill:100},he:{name:"HE \u0433\u0440\u0430\u043D\u0430\u0442\u0430",slot:3,kind:"grenade",nade:"he",price:300,speed:6.2,team:-1},flash:{name:"\u0421\u0432\u0435\u0442\u043E\u0432\u0430\u044F",slot:3,kind:"grenade",nade:"flash",price:200,speed:6.2,team:-1,max:2},smoke:{name:"\u0414\u044B\u043C\u043E\u0432\u0430\u044F",slot:3,kind:"grenade",nade:"smoke",price:300,speed:6.2,team:-1},bomb:{name:"C4",slot:4,kind:"bomb",price:0,speed:6.2,team:0}},pr={vest:{price:650},vesthelm:{price:1e3},kit:{price:200,team:1}},Ou=[{cat:"pistols",items:["glock","usp","deagle"]},{cat:"heavy",items:["m3","mp5","p90"]},{cat:"rifles",items:["galil","famas","ak47","m4a1","scout","awp"]},{cat:"gear",items:["vest","vesthelm","kit"]},{cat:"nades",items:["he","flash","smoke"]}],xi=["glock","usp","deagle","m3","mp5","p90","galil","famas","ak47","m4a1","scout","awp","knife"],Hu={head:4,chest:1,stomach:1.25,legs:.75},gc={easy:{react:.75,aimErr:.11,turn:3.2,burst:4,spot:.55,recoilComp:.2,strafe:0},normal:{react:.45,aimErr:.065,turn:5.5,burst:6,spot:.75,recoilComp:.45,strafe:.3},hard:{react:.28,aimErr:.038,turn:8.5,burst:9,spot:.9,recoilComp:.7,strafe:.6},expert:{react:.17,aimErr:.022,turn:12,burst:12,spot:1,recoilComp:.85,strafe:.85}},Vu=["\u0421\u043E\u043A\u043E\u043B","\u0413\u0440\u043E\u043C","\u0412\u0438\u0445\u0440\u044C","\u0411\u0430\u0440\u0445\u0430\u043D","\u041A\u043E\u0431\u0440\u0430","\u0428\u0442\u043E\u0440\u043C","\u0411\u0430\u0440\u0441","\u0422\u0430\u0439\u0444\u0443\u043D","\u042F\u0441\u0442\u0440\u0435\u0431","\u041A\u0435\u0434\u0440","\u041C\u0435\u0434\u0432\u0435\u0434\u044C","\u0424\u0438\u043B\u0438\u043D","\u0421\u043A\u0438\u0444","\u0412\u043E\u043B\u043A","\u0420\u044B\u0441\u044C","\u0411\u0443\u0440\u0430\u043D","\u0421\u0430\u043C\u0443\u043C","\u0423\u0442\u0451\u0441","\u041F\u0443\u043C\u0430","\u0412\u043E\u0440\u043E\u043D"],yc={low:{pixelRatio:.65,shadows:!1,particles:.4,drawDist:80,aa:!1},medium:{pixelRatio:.9,shadows:!1,particles:.7,drawDist:120,aa:!1},high:{pixelRatio:1.25,shadows:!0,particles:1,drawDist:160,aa:!0}};var wn=[{id:"sands",name:{ru:"\u041F\u0435\u0441\u043A\u0438",en:"Sands"},desc:{ru:"\u041F\u0443\u0441\u0442\u044B\u043D\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0434\u043E\u043A: \u0434\u043B\u0438\u043D\u043D\u0430\u044F, \u043C\u0438\u0434, \u0442\u0443\u043D\u043D\u0435\u043B\u0438",en:"Desert town: long, mid, tunnels"},w:40,h:40,modes:["bomb","dm","gg"],theme:"desert",ops:[[",",17,2,23,8],[".",12,3,16,7],[".",2,2,11,11],[".",24,3,27,7],[".",28,2,37,11],[".",18,9,21,14],[".",12,9,17,10],[".",18,15,21,31],["#",19,19,21,19],["#",18,22,20,22],[".",14,32,25,37],[".",26,33,33,36],[".",34,12,37,36],["#",34,26,35,26],["1",22,15,22,17],["2",23,15,23,17],["3",24,15,29,17],["3",28,12,29,14],["2",28,11,29,11],["1",28,10,29,10],[",",3,31,13,35],[",",3,12,6,30],[",",7,27,17,28],["W",26,2,27,2],["W",12,3,12,3],["X",31,5,32,6],["x",33,6,33,6],["x",29,3,29,3],["x",36,9,36,9],["X",37,9,37,9],["o",35,3,35,3],["w",30,9,31,9],["X",4,4,5,5],["x",8,7,9,7],["X",10,3,10,3],["x",2,9,2,9],["x",6,2,6,2],["o",9,10,9,10],["x",20,12,20,12],["x",19,24,19,24],["o",21,30,21,30],["x",17,8,17,8],["x",23,2,23,2],["x",16,33,16,33],["x",23,36,23,36],["o",25,32,25,32],["X",34,14,34,14],["x",37,20,37,20],["x",36,31,36,31],["o",34,22,34,22],["x",5,20,5,20],["o",3,26,3,26],["x",10,33,10,33]],spawnT:[15,34,24,37],spawnCT:[18,3,22,6],sites:{A:[29,3,36,8],B:[3,3,10,9]}},{id:"depot",name:{ru:"\u0421\u043A\u043B\u0430\u0434",en:"Depot"},desc:{ru:"\u041F\u043E\u0440\u0442\u043E\u0432\u044B\u0439 \u0441\u043A\u043B\u0430\u0434: \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438 \u0438 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B",en:"Harbor depot: racks and containers"},w:32,h:28,modes:["bomb","dm","gg"],theme:"industrial",ops:[[".",1,1,30,26],[",",18,1,30,7],[",",18,20,30,26],["W",7,4,7,10],["W",7,17,7,23],["W",13,1,13,4],["W",13,23,13,26],["#",12,11,17,16],["W",23,10,24,10],["W",23,17,24,17],["3",26,12,29,15],["2",25,12,25,15],["1",24,12,24,15],["X",21,3,22,3],["x",25,5,25,5],["x",19,6,19,6],["X",28,2,28,2],["o",23,1,23,1],["X",21,24,22,24],["x",25,22,25,22],["x",19,21,19,21],["X",28,25,28,25],["o",23,26,23,26],["x",10,7,10,7],["x",10,20,10,20],["X",3,3,3,3],["X",3,24,3,24],["o",15,8,15,8],["o",15,19,15,19],["x",20,13,20,14],["w",4,9,5,9],["w",4,18,5,18]],spawnT:[1,11,4,16],spawnCT:[26,12,29,15],sites:{A:[19,2,27,7],B:[19,20,27,25]}},{id:"arena",name:{ru:"\u0410\u0440\u0435\u043D\u0430",en:"Arena"},desc:{ru:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430 \u0434\u043B\u044F \u0434\u0435\u0437\u043C\u0430\u0442\u0447\u0430",en:"Compact deathmatch arena"},w:26,h:26,modes:["dm","gg"],theme:"night",ops:[[",",1,1,24,24],[".",3,3,22,22],["3",11,11,14,14],["2",10,12,10,13],["1",9,12,9,13],["2",15,12,15,13],["1",16,12,16,13],["2",12,10,13,10],["1",12,9,13,9],["2",12,15,13,15],["1",12,16,13,16],["W",5,5,6,6],["W",19,5,20,6],["W",5,19,6,20],["W",19,19,20,20],["x",9,4,9,4],["x",16,21,16,21],["X",3,12,3,13],["X",22,12,22,13],["x",12,3,13,3],["x",12,22,13,22],["o",8,17,8,17],["o",17,8,17,8],["w",9,7,10,7],["w",15,18,16,18]],spawnT:[2,2,5,23],spawnCT:[20,2,23,23],sites:{}}],xc={desert:{skyTop:4884168,skyBottom:15259312,fog:14272931,sun:16773590,sunI:1.25,amb:10137800,ambGround:9071168,ambI:.95,sunDir:[.45,.8,.3],mats:{"#":"sandstone",W:"plaster",".":"sand",",":"paving"}},industrial:{skyTop:7308185,skyBottom:13225425,fog:11844546,sun:15986922,sunI:1.05,amb:11056322,ambGround:5922144,ambI:1,sunDir:[-.4,.85,.35],mats:{"#":"concrete",W:"container",".":"asphalt",",":"concreteFloor"}},night:{skyTop:1713488,skyBottom:9075352,fog:5592686,sun:16765608,sunI:1.15,amb:10134232,ambGround:5589082,ambI:1.45,sunDir:[.55,.45,-.35],mats:{"#":"brick",W:"metal",".":"asphalt",",":"concreteFloor"}}};var yt=2,ex=60,nx={".":0,",":0,x:1,X:2,o:1.1,1:.5,2:1,3:1.5,4:2,W:3.4,w:1.2},Gu={x:.55,X:.45,o:.6,w:.4};function Ls(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function ix(s,t){let e=Math.imul(s*374761393+t*668265263,1274126177);return e=(e^e>>>13)>>>0,e%1e3/1e3}var _i=class{constructor(t){this.def=t,this.w=t.w,this.d=t.h,this.cell=yt;let e=this.w*this.d;this.chars=new Array(e).fill("#");for(let[n,i,r,o,a]of t.ops)for(let l=Math.max(0,r);l<=Math.min(this.d-1,a);l++)for(let c=Math.max(0,i);c<=Math.min(this.w-1,o);c++)this.chars[l*this.w+c]=n;for(let n=0;n<this.w;n++)this.chars[n]="#",this.chars[(this.d-1)*this.w+n]="#";for(let n=0;n<this.d;n++)this.chars[n*this.w]="#",this.chars[n*this.w+this.w-1]="#";this.heights=new Float32Array(e),this.maxH=0;for(let n=0;n<e;n++){let i=this.chars[n],r=nx[i];r===void 0&&(r=6+Math.round(ix(n%this.w,n/this.w|0)*6)*.5),this.heights[n]=r,r>this.maxH&&(this.maxH=r)}this.buildNav()}inside(t,e){return t>=0&&e>=0&&t<this.w&&e<this.d}idx(t,e){return e*this.w+t}h(t,e){return this.inside(t,e)?this.heights[e*this.w+t]:ex}charAt(t,e){return this.inside(t,e)?this.chars[e*this.w+t]:"#"}cellX(t){return Math.floor(t/yt)}topAt(t,e){return this.h(Math.floor(t/yt),Math.floor(e/yt))}center(t,e){return{x:(t+.5)*yt,y:this.h(t,e),z:(e+.5)*yt}}isWall(t,e){return this.h(t,e)>=3}groundUnder(t,e,n){let i=Math.floor((t-n)/yt),r=Math.floor((t+n)/yt),o=Math.floor((e-n)/yt),a=Math.floor((e+n)/yt),l=-1/0;for(let c=o;c<=a;c++)for(let h=i;h<=r;h++){let u=this.h(h,c);u>l&&(l=u)}return l}blockedAt(t,e,n,i,r){let o=Math.floor((t-n)/yt),a=Math.floor((t+n)/yt),l=Math.floor((e-n)/yt),c=Math.floor((e+n)/yt);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++)if(this.h(u,h)>i+re.stepHeight&&i<r)return!0;return!1}move(t,e,n=re.radius){let i=!1,r=Math.max(1,Math.ceil(Math.max(Math.abs(t.vx),Math.abs(t.vz))*e/.3)),o=e/r;for(let a=0;a<r;a++){let l=t.x+t.vx*o;this.blockedAt(l,t.z,n,t.y,t.y+1)?(t.vx>0?t.x=Math.floor((l+n)/yt)*yt-n-.001:t.vx<0&&(t.x=Math.ceil((l-n)/yt)*yt+n+.001),t.vx=0,t.hitWall=!0):t.x=l;let c=t.z+t.vz*o;this.blockedAt(t.x,c,n,t.y,t.y+1)?(t.vz>0?t.z=Math.floor((c+n)/yt)*yt-n-.001:t.vz<0&&(t.z=Math.ceil((c-n)/yt)*yt+n+.001),t.vz=0,t.hitWall=!0):t.z=c;let h=this.groundUnder(t.x,t.z,n-.02);t.onGround&&(h>t.y?(t.stepUp=(t.stepUp||0)+(h-t.y),t.y=h):t.y-h<=re.stepHeight+.01&&t.vy<=0?t.y=h:t.onGround=!1),t.onGround||(t.vy-=re.gravity*o,t.y+=t.vy*o,t.y<=h&&(h-t.y>1e-4&&t.vy>0,t.fallSpeed=-t.vy,t.y=h,t.vy=0,t.onGround=!0,i=!0))}return i}raycast(t,e,n,i,r,o,a){let l=Math.floor(t/yt),c=Math.floor(n/yt),h=i>0?1:-1,u=o>0?1:-1,d=i!==0?yt/Math.abs(i):1/0,p=o!==0?yt/Math.abs(o):1/0,g=i>0?((l+1)*yt-t)/i:i<0?(l*yt-t)/i:1/0,y=o>0?((c+1)*yt-n)/o:o<0?(c*yt-n)/o:1/0,m=0,f=0,S=0;for(let w=0;w<512;w++){let v=this.h(l,c),I=Math.min(g,y,a),T=e+r*m,C=e+r*I;if(T<v)return{t:m,nx:f,ny:0,nz:S,cx:l,cz:c};if(C<v)return{t:(v-e)/r,nx:0,ny:1,nz:0,cx:l,cz:c};if(I>=a||r>=0&&C>this.maxH)return null;g<y?(l+=h,m=g,g+=d,f=-h,S=0):(c+=u,m=y,y+=p,f=0,S=-u)}return null}exitDistance(t,e,n,i,r,o,a,l,c){let h=this.h(l,c),u=1/0,d=l*yt,p=d+yt,g=c*yt,y=g+yt;return i>0?u=Math.min(u,(p-t)/i):i<0&&(u=Math.min(u,(d-t)/i)),o>0?u=Math.min(u,(y-n)/o):o<0&&(u=Math.min(u,(g-n)/o)),r>0&&(u=Math.min(u,(h-e)/r)),Math.max(0,u-a)}los(t,e,n,i,r,o){let a=i-t,l=r-e,c=o-n,h=Math.hypot(a,l,c);return h<1e-4?!0:!this.raycast(t,e,n,a/h,l/h,c/h,h)}buildNav(){let t=this.w*this.d;this.walk=new Uint8Array(t);for(let a=0;a<t;a++)this.walk[a]=this.heights[a]<3?1:0;this.adj=[];let e=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(let a=0;a<this.d;a++)for(let l=0;l<this.w;l++){let c=this.idx(l,a),h=[];if(this.adj.push(h),!this.walk[c])continue;let u=this.heights[c];for(let[d,p]of e){let g=l+d,y=a+p;if(!this.inside(g,y))continue;let m=this.idx(g,y);if(!this.walk[m])continue;let f=this.heights[m],S=f-u;if(S>1.05)continue;if(d&&p){let v=Math.max(u,f)+.01;if(this.h(l+d,a)>v||this.h(l,a+p)>v||Math.abs(S)>.01)continue}let w=d&&p?1.4142:1;S>re.stepHeight&&(w+=1.5),h.push(m,w,S>re.stepHeight?1:0)}}let n=this.def.spawnT,i=this.nearestWalkable(n[0]+n[2]>>1,n[1]+n[3]>>1),r=new Uint8Array(t),o=[i];for(r[i]=1;o.length;){let a=o.pop(),l=this.adj[a];for(let c=0;c<l.length;c+=3)r[l[c]]||(r[l[c]]=1,o.push(l[c]))}for(let a=0;a<t;a++)r[a]||(this.walk[a]=0,this.adj[a]=[]);for(let a=0;a<t;a++){let l=this.adj[a];if(!l.length)continue;let c=[];for(let h=0;h<l.length;h+=3)this.walk[l[h]]&&c.push(l[h],l[h+1],l[h+2]);this.adj[a]=c}}nearestWalkable(t,e){if(this.inside(t,e)&&this.walk[this.idx(t,e)])return this.idx(t,e);for(let n=1;n<6;n++)for(let i=-n;i<=n;i++)for(let r=-n;r<=n;r++){let o=t+r,a=e+i;if(this.inside(o,a)&&this.walk[this.idx(o,a)])return this.idx(o,a)}return-1}findPath(t,e,n,i){let r=this.nearestWalkable(Math.floor(t/yt),Math.floor(e/yt)),o=this.nearestWalkable(Math.floor(n/yt),Math.floor(i/yt));if(r<0||o<0)return null;if(r===o)return[{x:n,y:this.heights[o],z:i,jump:0}];let a=this.w*this.d;(!this._gs||this._gs.length!==a)&&(this._gs=new Float32Array(a),this._from=new Int32Array(a),this._stamp=new Uint32Array(a),this._closed=new Uint32Array(a),this._jump=new Uint8Array(a),this._run=0);let l=this._gs,c=this._from,h=this._stamp,u=this._closed,d=this._jump,p=++this._run,g=o%this.w,y=o/this.w|0,m=T=>{let C=T%this.w,R=T/this.w|0,b=Math.abs(C-g),x=Math.abs(R-y);return Math.max(b,x)+.4142*Math.min(b,x)},f=[],S=(T,C)=>{f.push([C,T]);let R=f.length-1;for(;R>0;){let b=R-1>>1;if(f[b][0]<=f[R][0])break;[f[b],f[R]]=[f[R],f[b]],R=b}},w=()=>{let T=f[0],C=f.pop();if(f.length){f[0]=C;let R=0;for(;;){let b=2*R+1,x=b+1,A=R;if(b<f.length&&f[b][0]<f[A][0]&&(A=b),x<f.length&&f[x][0]<f[A][0]&&(A=x),A===R)break;[f[A],f[R]]=[f[R],f[A]],R=A}}return T[1]};h[r]=p,l[r]=0,c[r]=-1,d[r]=0,S(r,m(r));let v=!1;for(;f.length;){let T=w();if(u[T]===p)continue;if(u[T]=p,T===o){v=!0;break}let C=this.adj[T];for(let R=0;R<C.length;R+=3){let b=C[R];if(u[b]===p)continue;let x=l[T]+C[R+1];(h[b]!==p||x<l[b])&&(h[b]=p,l[b]=x,c[b]=T,d[b]=C[R+2],S(b,x+m(b)))}}if(!v)return null;let I=[];for(let T=o;T!==-1;T=c[T])I.push(T);return I.reverse(),this.smooth(I,n,i)}flatLine(t,e,n,i,r){let o=n-t,a=i-e,l=Math.hypot(o,a),c=Math.ceil(l/.5),h=re.radius+.15;for(let u=1;u<=c;u++){let d=t+o*u/c,p=e+a*u/c;for(let[g,y]of[[h,h],[-h,h],[h,-h],[-h,-h]])if(Math.abs(this.topAt(d+g,p+y)-r)>.01)return!1}return!0}smooth(t,e,n){let i=t.map(l=>({x:(l%this.w+.5)*yt,y:this.heights[l],z:((l/this.w|0)+.5)*yt,jump:this._jump[l]})),r=i[i.length-1];Math.abs(this.topAt(e,n)-r.y)<.01&&this.groundUnder(e,n,re.radius)-r.y<.01&&(r.x=e,r.z=n);let o=[],a=0;for(;a<i.length-1;){let l=i.length-1;for(;l>a+1;l--){let c=!0;for(let h=a+1;h<=l;h++)if(i[h].jump||Math.abs(i[h].y-i[a].y)>.01){c=!1;break}if(c&&this.flatLine(i[a].x,i[a].z,i[l].x,i[l].z,i[a].y))break}o.push(i[l]),a=l}return o.length||o.push(r),o}randomCellIn(t,e,n){let[i,r,o,a]=t;for(let c=0;c<60;c++){let h=i+Math.floor(e()*(o-i+1)),u=r+Math.floor(e()*(a-r+1)),d=this.idx(h,u);if(!(!this.walk[d]||this.heights[d]>2)&&!(n&&n(h,u)))return this.center(h,u)}let l=this.nearestWalkable(i+o>>1,r+a>>1);return this.center(l%this.w,l/this.w|0)}inRect(t,e,n){let i=Math.floor(t/yt),r=Math.floor(e/yt);return i>=n[0]&&i<=n[2]&&r>=n[1]&&r<=n[3]}floorCells(){if(this._floor)return this._floor;this._floor=[];for(let t=0;t<this.walk.length;t++){if(!this.walk[t]||this.heights[t]>1.6)continue;let e=t%this.w,n=t/this.w|0,i=0;for(let[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])this.walk[this.idx(e+r,n+o)]&&i++;i>=2&&this._floor.push(t)}return this._floor}};var Xu=256;function _c(s=Xu){let t=document.createElement("canvas");return t.width=t.height=s,t}function ln(s,t,e,n,i=1){let r=s.getImageData(0,0,t,t),o=r.data;for(let a=0;a<o.length;a+=4){let l=(e()-.5)*n;o[a]=Math.max(0,Math.min(255,o[a]+l)),o[a+1]=Math.max(0,Math.min(255,o[a+1]+l)),o[a+2]=Math.max(0,Math.min(255,o[a+2]+l*.9)),o[a+3]=o[a+3]*i}s.putImageData(r,0,0)}function Qe(s,t,e,n,i,r,o,a){for(let l=0;l<i;l++){let c=e()*t,h=e()*t,u=r+e()*(o-r),d=s.createRadialGradient(c,h,0,c,h,u);d.addColorStop(0,n.replace("A",String(a))),d.addColorStop(1,n.replace("A","0")),s.fillStyle=d;for(let p of[-t,0,t])for(let g of[-t,0,t])s.save(),s.translate(p,g),s.fillRect(c-u,h-u,u*2,u*2),s.restore()}}function Uo(s,t,e,n,i,r,o,a,l=3){s.fillStyle=o,s.fillRect(0,0,t,t);let c=t/n,h=t/i;for(let u=0;u<n;u++){let d=u%2*h/2;for(let p=-1;p<=i;p++){let g=(e()-.5)*a,[y,m,f]=r;s.fillStyle=`rgb(${y+g},${m+g*.9},${f+g*.8})`,s.fillRect(p*h+d+l/2,u*c+l/2,h-l,c-l)}}}var Wu={sandstone(s,t,e){Uo(s,t,e,4,2,[196,160,112],"#a98a5e",26,4),Qe(s,t,e,"rgba(120,90,50,A)",18,10,50,.18),ln(s,t,e,26)},plaster(s,t,e){s.fillStyle="#d8c39b",s.fillRect(0,0,t,t),Qe(s,t,e,"rgba(160,125,80,A)",30,10,60,.25),Qe(s,t,e,"rgba(255,245,220,A)",14,10,40,.25),s.fillStyle="rgba(110,80,50,0.35)",s.fillRect(0,t-18,t,18),ln(s,t,e,18)},sand(s,t,e){s.fillStyle="#cdb184",s.fillRect(0,0,t,t),Qe(s,t,e,"rgba(150,115,70,A)",40,8,40,.22),Qe(s,t,e,"rgba(235,215,170,A)",25,8,30,.25),ln(s,t,e,34)},paving(s,t,e){Uo(s,t,e,4,4,[170,150,120],"#7d6c55",30,4),Qe(s,t,e,"rgba(90,70,40,A)",20,10,40,.18),ln(s,t,e,22)},stone(s,t,e){Uo(s,t,e,2,2,[160,150,135],"#6f665a",24,5),ln(s,t,e,28)},crate(s,t,e){s.fillStyle="#9b6b35",s.fillRect(0,0,t,t);for(let n=0;n<8;n++){let i=(e()-.5)*30;s.fillStyle=`rgb(${150+i},${104+i},${56+i*.6})`,s.fillRect(0,n*t/8+1,t,t/8-2)}s.strokeStyle="#5a3a18",s.lineWidth=18,s.strokeRect(9,9,t-18,t-18),s.lineWidth=16,s.beginPath(),s.moveTo(18,18),s.lineTo(t-18,t-18),s.stroke(),s.fillStyle="#3a2610";for(let[n,i]of[[18,18],[t-18,18],[18,t-18],[t-18,t-18]])s.beginPath(),s.arc(n,i,4,0,7),s.fill();ln(s,t,e,26)},concrete(s,t,e){s.fillStyle="#9a9a96",s.fillRect(0,0,t,t),Qe(s,t,e,"rgba(70,70,70,A)",30,10,60,.18),s.fillStyle="rgba(40,40,40,0.35)",s.fillRect(0,t/2-1,t,2),s.fillRect(t/2-1,0,2,t);for(let[n,i]of[[t/4,t/4],[3*t/4,t/4],[t/4,3*t/4],[3*t/4,3*t/4]])s.beginPath(),s.arc(n,i,3,0,7),s.fill();ln(s,t,e,24)},concreteFloor(s,t,e){s.fillStyle="#86888a",s.fillRect(0,0,t,t),Qe(s,t,e,"rgba(50,50,55,A)",40,10,50,.2),s.fillStyle="rgba(30,30,30,0.4)",s.fillRect(0,0,t,2),s.fillRect(0,0,2,t),s.fillStyle="rgba(220,180,40,0.55)",s.fillRect(0,t*.82,t,10),ln(s,t,e,22)},asphalt(s,t,e){s.fillStyle="#4a4a4c",s.fillRect(0,0,t,t),Qe(s,t,e,"rgba(20,20,20,A)",40,8,40,.25),Qe(s,t,e,"rgba(120,120,120,A)",20,4,18,.2),ln(s,t,e,40)},container(s,t,e){let n=e()<.5?[150,50,40]:[40,90,140];s.fillStyle=`rgb(${n})`,s.fillRect(0,0,t,t);for(let i=0;i<t;i+=16)s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(i,0,4,t),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(i+8,0,3,t);Qe(s,t,e,"rgba(90,50,20,A)",18,6,26,.35),ln(s,t,e,20)},brick(s,t,e){Uo(s,t,e,8,4,[128,58,44],"#4e4842",34,4),Qe(s,t,e,"rgba(30,20,20,A)",18,10,50,.25),ln(s,t,e,24)},metal(s,t,e){s.fillStyle="#5c646e",s.fillRect(0,0,t,t),s.strokeStyle="rgba(20,24,30,0.6)",s.lineWidth=3;for(let n=0;n<=4;n++)s.strokeRect(n*t/4,0,t/4,t);for(let n=0;n<4;n++)for(let i=0;i<8;i++)s.fillStyle="rgba(200,210,220,0.4)",s.beginPath(),s.arc(n*t/4+8,i*t/8+8,2,0,7),s.fill();Qe(s,t,e,"rgba(110,70,40,A)",10,8,30,.3),ln(s,t,e,18)},barrel(s,t,e){s.fillStyle="#3f6a3a",s.fillRect(0,0,t,t),s.fillStyle="rgba(0,0,0,0.3)";for(let n of[.18,.5,.82])s.fillRect(0,n*t-5,t,10);s.fillStyle="#e8c420",s.fillRect(t*.35,t*.28,t*.3,t*.12),Qe(s,t,e,"rgba(120,60,20,A)",14,6,26,.4),ln(s,t,e,22)}},Ds=new Map;function vc(s,t=4){if(Ds.has(s))return Ds.get(s);let e=_c(),n=e.getContext("2d",{willReadFrequently:!0}),i=Ls(s.length*7919+s.charCodeAt(0)*31);(Wu[s]||Wu.concrete)(n,Xu,i);let r=new Ss(e);return r.wrapS=r.wrapT=ir,r.colorSpace=ke,r.anisotropy=t,r.generateMipmaps=!0,r.minFilter=Gn,Ds.set(s,r),r}function qu(s){let t=_c(256),e=t.getContext("2d");e.strokeStyle="rgba(200,30,20,0.75)",e.lineWidth=14,e.beginPath(),e.arc(128,128,104,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(200,30,20,0.8)",e.font="bold 170px Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,136);let n=new Ss(t);return n.colorSpace=ke,n}function Pn(s="smoke"){let t="sprite_"+s;if(Ds.has(t))return Ds.get(t);let e=_c(64),n=e.getContext("2d");if(s==="flash"){let r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,230,1)"),r.addColorStop(.25,"rgba(255,220,120,0.95)"),r.addColorStop(.6,"rgba(255,140,30,0.35)"),r.addColorStop(1,"rgba(255,100,0,0)"),n.fillStyle=r,n.fillRect(0,0,64,64),n.fillStyle="rgba(255,240,200,0.9)";for(let o=0;o<6;o++)n.save(),n.translate(32,32),n.rotate(o*Math.PI/3),n.beginPath(),n.moveTo(0,-3),n.lineTo(30,0),n.lineTo(0,3),n.fill(),n.restore()}else if(s==="spark"){let r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.3,"rgba(255,230,160,0.8)"),r.addColorStop(1,"rgba(255,160,40,0)"),n.fillStyle=r,n.fillRect(0,0,64,64)}else if(s==="hole"){let r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(10,8,6,1)"),r.addColorStop(.35,"rgba(25,20,15,0.95)"),r.addColorStop(.55,"rgba(60,50,40,0.4)"),r.addColorStop(1,"rgba(60,50,40,0)"),n.fillStyle=r,n.fillRect(0,0,64,64)}else if(s==="blood"){let r=Ls(99);for(let o=0;o<9;o++){let a=32+(r()-.5)*30,l=32+(r()-.5)*30,c=4+r()*12;n.fillStyle="rgba(120,8,8,0.85)",n.beginPath(),n.arc(a,l,c,0,7),n.fill()}}else{let r=Ls(5);for(let o=0;o<14;o++){let a=32+(r()-.5)*24,l=32+(r()-.5)*24,c=10+r()*14,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,0.35)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,64,64)}}let i=new Ss(e);return i.colorSpace=ke,Ds.set(t,i),i}var sx={x:"crate",X:"crate",o:".",1:"stone",2:"stone",3:"stone",4:"stone",w:"#"},rx={crate:1,stone:2,sand:4,paving:4,sandstone:4,plaster:4,concrete:4,concreteFloor:4,asphalt:4,container:4,brick:3,metal:4};function ox(s,t){let e=s.mats[t]||sx[t];return e&&s.mats[e]&&(e=s.mats[e]),e||s.mats["#"]}function Yu(s,t,e,n){let i=xc[t.theme],r=new ve,o=new Map,a=f=>(o.has(f)||o.set(f,{p:[],n:[],uv:[],c:[],i:[]}),o.get(f)),l=(f,S,w,v,I)=>{let T=f.p.length/3;for(let C=0;C<4;C++){f.p.push(S[C][0],S[C][1],S[C][2]),f.n.push(w[0],w[1],w[2]),f.uv.push(v[C][0],v[C][1]);let R=I[C];f.c.push(R,R,R*.98)}f.i.push(T,T+1,T+2,T,T+2,T+3)},c=(f,S)=>s.h(f,S),h=[];for(let f=0;f<s.d;f++)for(let S=0;S<s.w;S++){let w=s.charAt(S,f),v=c(S,f),I=ox(i,w);w==="o"&&(h.push([S,f]),v=0);let T=rx[I]||4,C=a(I),R=S*yt,b=R+yt,x=f*yt,A=x+yt,O=(Y,B)=>{let Z=0;for(let[V,it]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let st=Y+V,ft=B+it;if(st===S&&ft===f)continue;(s.charAt(st,ft)==="o"?1.1:c(st,ft))>v+.2&&Z++}return 1-.17*Z},F=Y=>Y/T;if(l(C,[[R,v,x],[R,v,A],[b,v,A],[b,v,x]],[0,1,0],[[F(R),F(x)],[F(R),F(A)],[F(b),F(A)],[F(b),F(x)]],[O(S,f),O(S,f+1),O(S+1,f+1),O(S+1,f)]),v<=0)continue;let W=[[1,0,[b,A],[b,x],[1,0,0]],[-1,0,[R,x],[R,A],[-1,0,0]],[0,1,[R,A],[b,A],[0,0,1]],[0,-1,[b,x],[R,x],[0,0,-1]]];for(let[Y,B,Z,V,it]of W){let st=S+Y,ft=f+B;if(!s.inside(st,ft))continue;let Pt=s.charAt(st,ft)==="o"?0:c(st,ft);if(Pt>=v)continue;let $t=Y!==0?Z[1]:Z[0],q=Y!==0?V[1]:V[0],Q=Y>0||B<0?-1:1,mt=kt=>Q*kt/T,rt=Math.min(v,Pt+1.4),Rt=Pt<=.01?.58:.8;l(C,[[Z[0],rt,Z[1]],[Z[0],Pt,Z[1]],[V[0],Pt,V[1]],[V[0],rt,V[1]]],it,[[mt($t),rt/T],[mt($t),Pt/T],[mt(q),Pt/T],[mt(q),rt/T]],[.92,Rt,Rt,.92]),v>rt&&l(C,[[Z[0],v,Z[1]],[Z[0],rt,Z[1]],[V[0],rt,V[1]],[V[0],v,V[1]]],it,[[mt($t),v/T],[mt($t),rt/T],[mt(q),rt/T],[mt(q),v/T]],[1,.92,.92,1])}}let u=[];for(let[f,S]of o){let w=new Le;w.setAttribute("position",new we(S.p,3)),w.setAttribute("normal",new we(S.n,3)),w.setAttribute("uv",new we(S.uv,2)),w.setAttribute("color",new we(S.c,3)),w.setIndex(S.i),w.computeBoundingSphere();let v=new Bi({map:vc(f,n),vertexColors:!0}),I=new Ie(w,v);I.receiveShadow=e.shadows,I.castShadow=e.shadows,I.matrixAutoUpdate=!1,r.add(I),u.push(I)}if(h.length){let f=new jn(.62,.62,1.1,14);f.translate(0,.55,0);let S=new Bi({map:vc("barrel",n)}),w=new Ms(f,S,h.length*2),v=new jt,I=0;for(let[T,C]of h)for(let[R,b]of[[-.42,-.35],[.45,.4]])v.makeRotationY(T*1.7+b),v.setPosition((T+.5)*yt+R,0,(C+.5)*yt+b),w.setMatrixAt(I++,v);w.castShadow=e.shadows,w.receiveShadow=e.shadows,r.add(w)}for(let[f,S]of Object.entries(t.sites)){let w=(S[0]+S[2]+1)/2*yt,v=(S[1]+S[3]+1)/2*yt,I=null;for(let R=S[1];R<=S[3];R++)for(let b=S[0];b<=S[2];b++){if(s.h(b,R)!==0||s.charAt(b,R)==="o")continue;let x=s.center(b,R),A=Math.hypot(x.x-w,x.z-v);(!I||A<I.d)&&(I={d:A,c:x})}if(!I)continue;let T=new Jn({map:qu(f),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),C=new Ie(new mi(3.4,3.4),T);C.rotation.x=-Math.PI/2,C.position.set(I.c.x,.02,I.c.z),r.add(C)}let d=new Ie(new ws(450,24,12),new je({side:We,depthWrite:!1,fog:!1,uniforms:{top:{value:new Dt(i.skyTop)},bottom:{value:new Dt(i.skyBottom)},sunDir:{value:new P(...i.sunDir).normalize()},sunCol:{value:new Dt(i.sun)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vDir; void main(){ float h = clamp(vDir.y*1.6+0.15,0.0,1.0); vec3 c = mix(bottom, top, h); float s = max(dot(normalize(vDir), sunDir), 0.0); c += sunCol * (pow(s, 600.0)*1.5 + pow(s, 12.0)*0.18); gl_FragColor = vec4(c,1.0); }"}));d.renderOrder=-10,d.frustumCulled=!1,r.add(d);let p=new ve,g=new Jn({color:new Dt(i.fog).multiplyScalar(.82),fog:!1}),y=s.w*yt/2,m=s.d*yt/2;for(let f=0;f<26;f++){let S=f/26*Math.PI*2,w=230+f*37%50,v=new Ie(new Eo(40+f*13%30,30+f*29%40,5),g);v.position.set(y+Math.cos(S)*w,8,m+Math.sin(S)*w),v.rotation.y=f,p.add(v)}return r.add(p),{group:r,meshes:u,theme:i,sky:d}}function $u(s,t,e,n){let i=new Es(t.amb,t.ambGround,t.ambI);s.add(i);let r=new As(t.sun,t.sunI),o=new P(...t.sunDir).normalize(),a=e.w*yt/2,l=e.d*yt/2;if(r.position.set(a+o.x*80,o.y*80,l+o.z*80),r.target.position.set(a,0,l),s.add(r,r.target),n.shadows){r.castShadow=!0;let c=Math.max(e.w,e.d)*yt*.62,h=r.shadow.camera;h.left=-c,h.right=c,h.top=c,h.bottom=-c,h.near=1,h.far=220,r.shadow.mapSize.set(2048,2048),r.shadow.bias=-8e-4,r.shadow.normalBias=.04}return s.fog=new vo(t.fog,30,n.drawDist),{hemi:i,sun:r}}function Ku(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Le,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Zu(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let y=0;y<o[h].length;++y)p.push(o[h][y][d]);let g=Zu(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Zu(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new Me(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let y=h.getComponent(d,g);a.setComponent(d+u,g,y)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var ax=new Bi({vertexColors:!0}),No=new Dt,lx=new an,bc=new jt;function Ec(s,t,e,n,i,r,o,a,l){let c=t.clone();bc.makeRotationFromEuler(lx.set(o,a,l)),bc.setPosition(n,i,r),c.applyMatrix4(bc),No.setHex(e).convertSRGBToLinear();let h=c.attributes.position.count,u=new Float32Array(h*3);for(let d=0;d<h;d++)u[d*3]=No.r,u[d*3+1]=No.g,u[d*3+2]=No.b;c.setAttribute("color",new Me(u,3)),(s.userData.parts||(s.userData.parts=[])).push(c)}var Mc=new Map;function cx(s,t,e){let n=s+","+t+","+e;return Mc.has(n)||Mc.set(n,new Fi(s,t,e)),Mc.get(n)}function tt(s,t,e,n,i,r,o,a,l=0,c=0,h=0){Ec(s,cx(t,e,n),i,r,o,a,l,c,h)}function Xe(s,t,e,n,i,r,o,a=8){Ec(s,new jn(t,t,e,a),n,i,r,o,Math.PI/2,0,0)}function Sc(s,t,e,n=0,i=0,r=0){Ec(s,t,e,n,i,r,0,0,0)}function Ac(s,t=!1){return s.traverse(e=>{let n=e.userData.parts;if(!n)return;let i=Ku(n.map(o=>o.index?o.toNonIndexed():o),!1),r=new Ie(i,ax);r.castShadow=t,e.add(r),delete e.userData.parts}),s}var tn=3816770,en=5725026,Ju=9065512,hx=6963232,wc=11843773,Te=2895409,Fo={knife(s){return tt(s,.026,.032,.11,Te,0,0,0),tt(s,.05,.014,.016,en,0,.004,-.058),tt(s,.006,.034,.17,wc,0,.006,-.15),tt(s,.006,.018,.05,wc,0,0,-.245,.5,0,0),{muzzle:[0,0,-.26],fore:null}},glock(s){return tt(s,.03,.034,.185,Te,0,.055,-.055),tt(s,.028,.024,.15,2763566,0,.028,-.045),tt(s,.029,.11,.046,Te,0,-.03,.02,.28),tt(s,.012,.02,.03,Te,0,.012,-.02),{muzzle:[0,.056,-.15],fore:null}},usp(s){return tt(s,.031,.036,.205,3421754,0,.056,-.06),tt(s,.029,.026,.16,Te,0,.028,-.05),tt(s,.03,.115,.048,Te,0,-.032,.022,.25),{muzzle:[0,.056,-.165],fore:null}},usp_s(s){return Fo.usp(s),Xe(s,.016,.13,Te,0,.056,-.225,10),{muzzle:[0,.056,-.29],fore:null}},deagle(s){return tt(s,.038,.046,.26,wc,0,.06,-.08),tt(s,.034,.028,.2,8093572,0,.026,-.06),tt(s,.034,.12,.052,Te,0,-.035,.025,.22),{muzzle:[0,.062,-.21],fore:null}},m3(s){return tt(s,.05,.07,.3,tn,0,.04,-.05),Xe(s,.013,.5,en,0,.062,-.44),Xe(s,.015,.4,tn,0,.028,-.38),tt(s,.054,.048,.17,Te,0,.026,-.38),tt(s,.042,.085,.3,Te,0,0,.24,.1),tt(s,.035,.1,.045,Te,0,-.04,.07,.3),{muzzle:[0,.062,-.7],fore:[0,0,-.38]}},mp5(s){return tt(s,.05,.07,.3,tn,0,.045,-.08),tt(s,.056,.05,.14,Te,0,.03,-.25),Xe(s,.012,.12,en,0,.055,-.36),tt(s,.03,.17,.04,en,0,-.06,-.16,-.28),tt(s,.03,.05,.22,tn,0,.035,.17),tt(s,.034,.1,.044,Te,0,-.035,.03,.3),tt(s,.012,.03,.02,tn,0,.09,-.02),{muzzle:[0,.055,-.43],fore:[0,0,-.25]}},p90(s){return tt(s,.065,.11,.44,2830632,0,.03,-.06),tt(s,.048,.03,.3,7299136,0,.1,-.1),Xe(s,.011,.08,tn,0,.05,-.31),tt(s,.04,.05,.05,1776922,0,.13,-.05),{muzzle:[0,.05,-.35],fore:[0,-.01,-.2]}},ak47(s){return tt(s,.05,.07,.36,tn,0,.04,-.06),tt(s,.056,.06,.2,Ju,0,.035,-.33),Xe(s,.011,.32,en,0,.06,-.55),Xe(s,.009,.2,tn,0,.085,-.36),tt(s,.036,.12,.062,3812124,0,-.04,-.13,-.2),tt(s,.034,.1,.06,3812124,0,-.135,-.09,-.55),tt(s,.045,.09,.32,Ju,0,-.005,.27,.12),tt(s,.035,.1,.045,hx,0,-.04,.06,.3),tt(s,.01,.035,.012,tn,0,.09,-.66),{muzzle:[0,.06,-.72],fore:[0,.005,-.33]}},galil(s){return tt(s,.05,.075,.36,3092521,0,.04,-.06),tt(s,.056,.06,.2,4999738,0,.035,-.33),Xe(s,.011,.3,en,0,.06,-.55),tt(s,.036,.15,.06,tn,0,-.06,-.12,-.25),tt(s,.03,.06,.3,en,0,0,.25),tt(s,.035,.1,.045,Te,0,-.04,.06,.3),{muzzle:[0,.06,-.7],fore:[0,.005,-.33]}},famas(s){return tt(s,.055,.1,.5,2895667,0,.03,0),tt(s,.02,.05,.36,Te,0,.11,-.06),Xe(s,.011,.18,en,0,.04,-.33),tt(s,.03,.12,.05,tn,0,-.06,.12,-.1),tt(s,.035,.1,.045,Te,0,-.045,-.08,.3),{muzzle:[0,.04,-.43],fore:[0,-.01,-.2]}},m4a1(s){return tt(s,.05,.08,.34,1842463,0,.04,-.05),tt(s,.02,.03,.14,1842463,0,.1,-.06),Xe(s,.026,.25,Te,0,.045,-.33,10),Xe(s,.011,.14,en,0,.05,-.52),tt(s,.03,.15,.06,en,0,-.07,-.1,-.1),tt(s,.042,.07,.28,Te,0,.02,.25),tt(s,.035,.1,.045,Te,0,-.04,.06,.3),{muzzle:[0,.05,-.6],fore:[0,0,-.33]}},m4a1_s(s){return Fo.m4a1(s),Xe(s,.019,.22,2829358,0,.05,-.64,10),{muzzle:[0,.05,-.76],fore:[0,0,-.33]}},scout(s){return tt(s,.045,.065,.5,3356218,0,.035,-.08),Xe(s,.01,.45,tn,0,.05,-.55),Xe(s,.022,.28,Te,0,.115,-.06,10),tt(s,.04,.09,.26,3356218,0,0,.26,.1),tt(s,.03,.08,.04,tn,0,-.03,-.08),tt(s,.034,.1,.045,Te,0,-.045,.08,.3),{muzzle:[0,.05,-.78],fore:[0,0,-.3],scope:!0}},awp(s){return tt(s,.065,.09,.6,4020794,0,.03,-.1),Xe(s,.014,.55,tn,0,.05,-.68),Xe(s,.03,.34,Te,0,.13,-.06,12),tt(s,.062,.13,.32,4020794,0,-.005,.32,.08),tt(s,.04,.1,.06,Te,0,-.05,-.05),tt(s,.036,.1,.045,3031852,0,-.06,.12,.3),{muzzle:[0,.05,-.96],fore:[0,-.01,-.36],scope:!0}},he(s){return Sc(s,new ws(.036,10,8),4938284),tt(s,.02,.03,.02,en,0,.04,0),tt(s,.012,.06,.012,en,.016,.02,0,0,0,.2),{muzzle:[0,0,0],fore:null}},flash(s){return Sc(s,new jn(.028,.028,.1,10),9212310),tt(s,.02,.025,.02,en,0,.06,0),{muzzle:[0,0,0],fore:null}},smoke(s){return Sc(s,new jn(.03,.03,.11,10),5333082),tt(s,.062,.02,.062,13684944,0,0,0),tt(s,.02,.025,.02,en,0,.065,0),{muzzle:[0,0,0],fore:null}},bomb(s){tt(s,.2,.08,.12,10191960,0,0,0);for(let t=0;t<4;t++)tt(s,.042,.082,.124,12755562,-.075+t*.05,0,0);return tt(s,.08,.02,.07,2236962,0,.05,0),tt(s,.05,.004,.02,3211104,0,.061,-.015),tt(s,.006,.006,.13,12591136,.06,.045,0),tt(s,.006,.006,.13,2113728,.07,.045,0),{muzzle:[0,0,0],fore:null}}},Tc=new Map;function vi(s){if(!Tc.has(s)){let n=new ve,i=(Fo[s]||Fo.glock)(n);Ac(n),n.userData={key:s,muzzle:new P(...i.muzzle),fore:i.fore?new P(...i.fore):null,scope:!!i.scope},Tc.set(s,n)}let t=Tc.get(s),e=t.clone();return e.userData={...t.userData,muzzle:t.userData.muzzle.clone(),fore:t.userData.fore&&t.userData.fore.clone()},e}var Qu=[{cloth:9141080,cloth2:6642242,vest:4931634,skin:13081203,head:2828324,head2:3880237,boots:2761760,glove:3813672},{cloth:3425117,cloth2:2436930,vest:1909811,skin:13804156,head:2634308,head2:1119256,boots:1382170,glove:1711136}];function td(s){let t=Qu[s],e=new ve,n=new ve;e.add(n);let i=new ve;i.position.y=.92,n.add(i);let r=[];for(let u of[-1,1]){let d=new ve;d.position.set(u*.11,0,0),i.add(d),tt(d,.17,.48,.2,t.cloth2,0,-.24,0);let p=new ve;p.position.y=-.47,d.add(p),tt(p,.155,.4,.18,t.cloth2,0,-.2,0),tt(p,.17,.11,.28,t.boots,0,-.4,-.045),r.push({thigh:d,shin:p})}let o=new ve;o.position.y=.92,n.add(o),tt(o,.4,.26,.24,t.cloth,0,.13,0),tt(o,.47,.36,.29,t.vest,0,.43,0),tt(o,.36,.16,.06,t.cloth,0,.38,-.16),tt(o,.18,.08,.05,t.cloth2,-.08,.2,-.13);let a=new ve;a.position.y=.66,o.add(a),tt(a,.12,.08,.12,t.skin,0,.02,0),tt(a,.22,.26,.24,t.head,0,.15,0),tt(a,.16,.05,.02,t.skin,0,.17,-.121),tt(a,.03,.02,.01,1052688,-.04,.17,-.132),tt(a,.03,.02,.01,1052688,.04,.17,-.132),s===Et.CT?(tt(a,.27,.12,.29,t.head2,0,.29,0),tt(a,.25,.04,.06,t.head2,0,.24,-.14)):tt(a,.24,.07,.25,t.head2,0,.29,0);let l=[];for(let u of[-1,1]){let d=new ve;d.position.set(u*.27,.54,0),o.add(d),tt(d,.12,.3,.13,t.cloth,0,-.14,0);let p=new ve;p.position.y=-.28,d.add(p),tt(p,.1,.28,.11,t.cloth,0,-.13,0),tt(p,.09,.09,.1,t.glove,0,-.3,0),l.push({sh:d,fore:p,side:u})}let c=new ve;c.position.set(.07,.42,-.36),o.add(c);let h=new zi(new gi({map:Pn("flash"),color:16767392,blending:Cn,depthWrite:!1,transparent:!0}));return h.scale.set(.45,.45,1),h.visible=!1,e.add(h),Ac(e,!0),e.userData={body:n,hips:i,legs:r,torso:o,headG:a,arms:l,gunMount:c,flash:h,gun:null,gunKey:null,phase:0},e}function ed(s,t){let e=s.userData;e.gunKey!==t&&(e.gun&&e.gunMount.remove(e.gun),e.gun=t?vi(t):null,e.gunKey=t,e.gun&&(e.gun.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e.gunMount.add(e.gun)))}var ko=new P;function nd(s,t){let e=s.userData;e.phase+=t.speed*t.dt*2.6;let n=Math.min(1,t.speed/4.5)*(t.air?.3:1),i=t.crouch;for(let l=0;l<2;l++){let c=e.legs[l],h=e.phase+l*Math.PI,u=Math.sin(h)*.6*n;c.thigh.rotation.x=u*(1-i*.5)-i*1.2-(t.air?.35:0),c.shin.rotation.x=Math.max(0,Math.sin(h+1.3))*.8*n+i*1.65+(t.air?.6:0)}let r=.92-i*.31+Math.abs(Math.sin(e.phase))*.025*n;e.hips.position.y=r,e.torso.position.y=r,e.torso.position.z=i*.06;let o=t.pitch;e.torso.rotation.x=o*.55+i*.12,e.headG.rotation.x=o*.45-i*.12;let a=t.fireT>0?t.fireT*1.5:0;for(let l of e.arms)l.side>0?(l.sh.rotation.set(-1.25+a*.2,0,.06),l.fore.rotation.set(-.35,0,0)):(l.sh.rotation.set(-1.15,0,-.55),l.fore.rotation.set(-.5,0,.75));if(e.gunMount.rotation.x=a*.12,t.dead){let l=Math.min(1,t.deathT/.55),c=l*l*(3-2*l);e.body.rotation.x=c*(Math.PI/2-.05)*t.deathDir,e.body.rotation.z=c*.25*t.deathDir,e.body.position.y=c*.12;for(let h of e.legs)h.thigh.rotation.x*=1-c,h.shin.rotation.x=.2*c}else e.body.rotation.set(0,0,0),e.body.position.y=0;e.flash.visible&&e.gun&&(ko.copy(e.gun.userData.muzzle),e.gun.localToWorld(ko),s.worldToLocal(ko),e.flash.position.copy(ko))}var ju={knife:[.17,-.19,-.36,1],pistol:[.15,-.165,-.36,1],grenade:[.16,-.18,-.36,1],bomb:[0,-.24,-.42,1.2],sniper:[.19,-.2,-.42,1],default:[.19,-.19,-.4,1]};function id(s,t,e){let n=Qu[e],i=new ve,r=new ve;i.add(r);let o=vi(s);r.add(o);let a=n.cloth,l=n.glove,c=new ve;o.add(c),t==="bomb"?c.position.set(.14,-.02,.05):c.position.set(0,-.045,.035),tt(c,.05,.075,.085,l,0,0,0),tt(c,.075,.075,.34,a,.035,-.035,.2,.18,.12,0);let h=o.userData.fore;if(h||t==="pistol"||t==="bomb"){let g=new ve;o.add(g),t==="bomb"?g.position.set(-.14,-.02,.05):h?g.position.copy(h).add(new P(-.012,-.03,0)):g.position.set(-.02,-.05,.04),tt(g,.06,.07,.09,l,0,0,0),tt(g,.075,.075,.36,a,-.07,-.06,.2,.3,-.45,0)}Ac(o);let u=ju[t]||ju.default;r.position.set(u[0],u[1],u[2]),r.scale.setScalar(u[3]);let d=new an(t==="bomb"?.5:.02,t==="bomb"?0:.05,0);r.rotation.copy(d);let p=new zi(new gi({map:Pn("flash"),color:16769200,blending:Cn,depthWrite:!1,depthTest:!1,transparent:!0}));return p.scale.set(.16,.16,1),p.position.copy(o.userData.muzzle),p.visible=!1,p.renderOrder=5,o.add(p),i.userData={holder:r,gun:o,flash:p,base:r.position.clone(),baseRot:d,kind:t,key:s},i}var ux=1;function Ln(s){let t=fe[s];return{key:s,def:t,clip:t.clip||0,reserve:t.reserve||0,silenced:!1}}function zo(s){return s.silenced?s.key+"_s":s.key}var bi=class{constructor(t,e,n){this.id=ux++,this.name=t,this.team=e,this.isBot=n,this.model=null,this.brain=null,this.money=0,this.kills=0,this.deaths=0,this.score=0,this.hsKills=0,this.dmgDealt=0,this.roundKills=0,this.mvps=0,this.ggLevel=0,this.resetBody(),this.clearInventory(),this.alive=!1}resetBody(){this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.onGround=!0,this.yaw=0,this.pitch=0,this.hp=100,this.crouch=0,this.crouching=!1,this.alive=!0,this.deathT=0,this.deathDir=1,this.punchP=0,this.punchY=0,this.viewPunch=0,this.shotsFired=0,this.nextFire=0,this.reloadT=0,this.switchT=0,this.scope=0,this.flashT=0,this.flashMax=0,this.plantT=0,this.defuseT=0,this.stamina=1,this.stepAcc=0,this.spotted=-100,this.protectT=0,this.fireAnim=0,this.throwT=0,this.speed2d=0,this.stepUp=0,this.lastHurt=-100,this.lastAttacker=null,this.respawnT=0}clearInventory(){this.slots=[null,null,Ln("knife"),null,null],this.nades={he:0,flash:0,smoke:0},this.nadeKey=null,this.hasBomb=!1,this.armor=0,this.helmet=!1,this.kit=!1,this.slot=2,this.lastSlot=2}get w(){return this.slot===3?this.nadeKey?{key:this.nadeKey,def:fe[this.nadeKey],clip:1,reserve:0}:this.slots[2]:this.slot===4?this.hasBomb?{key:"bomb",def:fe.bomb,clip:1,reserve:0}:this.slots[2]:this.slots[this.slot]||this.slots[2]}has(t){return t===3?this.nades.he+this.nades.flash+this.nades.smoke>0:t===4?this.hasBomb:!!this.slots[t]}firstNade(){for(let t of["he","flash","smoke"])if(this.nades[t]>0)return t;return null}select(t){if(!this.has(t))return!1;if(t===3)if(this.slot===3){let n=["he","flash","smoke"],i=n.indexOf(this.nadeKey);for(let r=1;r<=3;r++){let o=n[(i+r)%3];if(this.nades[o]>0){this.nadeKey=o;break}}}else(!this.nadeKey||!this.nades[this.nadeKey])&&(this.nadeKey=this.firstNade());else if(t===this.slot)return!1;t!==this.slot&&(this.lastSlot=this.slot),this.slot=t;let e=this.w.def;return this.switchT=e.kind==="knife"?.35:e.kind==="sniper"?.9:e.kind==="rifle"?.75:.55,this.reloadT=0,this.scope=0,this.shotsFired=0,this.throwT=0,this.plantT=0,!0}bestSlot(){return this.slots[0]?0:this.slots[1]?1:2}eyeHeight(){return re.eye-(re.eye-re.crouchEye)*this.crouch}bodyHeight(){return re.height-(re.height-re.crouchHeight)*this.crouch}maxSpeed(){let t=this.w.def.speed||6;return this.scope&&this.w.def.kind==="sniper"&&(t*=.7),t}forward(t){let e=Math.cos(this.pitch);return t.x=-Math.sin(this.yaw)*e,t.y=Math.sin(this.pitch),t.z=-Math.cos(this.yaw)*e,t}hitboxes(){let t=this.bodyHeight()/re.height,e=this.eyeHeight();return[["head",-.15,e-.15,-.16,.15,e+.17,.15],["chest",-.27,1.12*t,-.17,.27,1.48*t,.17],["stomach",-.23,.86*t,-.15,.23,1.12*t,.15],["legs",-.24,0,-.15,.24,.86*t,.15],["arms",-.12,1.1*t,-.62,.22,1.42*t,-.17]]}isT(){return this.team===Et.T}};var Bo=class{constructor(t,e,n,i){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.grow=new Float32Array(e),this.drag=new Float32Array(e),this.alpha0=new Float32Array(e);let r=new Le;this.aPos=new Me(this.pos,3).setUsage(Cs),this.aCol=new Me(this.col,4).setUsage(Cs),this.aSize=new Me(this.size,1).setUsage(Cs),r.setAttribute("position",this.aPos),r.setAttribute("color",this.aCol),r.setAttribute("size",this.aSize),r.setDrawRange(0,0),this.uniforms={map:{value:i},scale:{value:400},fogColor:{value:new Dt},fogNear:{value:30},fogFar:{value:120}},this.mat=new je({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:n,vertexShader:`attribute float size; attribute vec4 color; varying vec4 vColor; varying float vDepth; uniform float scale;
        void main(){ vColor = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vDepth = -mv.z; gl_PointSize = min(size * scale / max(0.1, -mv.z), 2048.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear; uniform float fogFar; varying vec4 vColor; varying float vDepth;
        void main(){ vec4 t = texture2D(map, gl_PointCoord); vec4 c = t * vColor; float f = smoothstep(fogNear, fogFar, vDepth); c.rgb = mix(c.rgb, fogColor, f * 0.8); if (c.a < 0.01) discard; gl_FragColor = c; }`}),this.points=new To(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,t.add(this.points)}emit(t,e,n,i,r,o,a,l,c,h,u,d,p=0,g=0,y=0){let m;this.n<this.max?m=this.n++:m=Math.random()*this.max|0,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=r,this.vel[m*3+2]=o,this.col[m*4]=c,this.col[m*4+1]=h,this.col[m*4+2]=u,this.col[m*4+3]=d,this.alpha0[m]=d,this.size[m]=l,this.life[m]=a,this.maxLife[m]=a,this.grav[m]=p,this.grow[m]=g,this.drag[m]=y}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){e--,n!==e&&this.copy(e,n),n--;continue}let i=Math.max(0,1-this.drag[n]*t);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]=this.vel[n*3+1]*i-this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t;let r=this.life[n]/this.maxLife[n];this.col[n*4+3]=this.alpha0[n]*Math.min(1,r*2.5)*Math.min(1,(1-r)*12+.2)}this.n=e,this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}copy(t,e){for(let n=0;n<3;n++)this.pos[e*3+n]=this.pos[t*3+n],this.vel[e*3+n]=this.vel[t*3+n];for(let n=0;n<4;n++)this.col[e*4+n]=this.col[t*4+n];this.size[e]=this.size[t],this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.grav[e]=this.grav[t],this.grow[e]=this.grow[t],this.drag[e]=this.drag[t],this.alpha0[e]=this.alpha0[t]}clear(){this.n=0,this.points.geometry.setDrawRange(0,0)}},sd=new jt,Rc=new Mn,rd=new P,od=new P,dx=new P(0,0,1),Cc=new P,Oo=class{constructor(t,e,n,i){this.max=e,this.i=0;let r=new Jn({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});this.mesh=new Ms(new mi(i,i),r,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh)}add(t,e,n,i,r,o,a=1){Cc.set(i,r,o),Rc.setFromUnitVectors(dx,Cc);let l=new Mn().setFromAxisAngle(Cc,Math.random()*6.28);Rc.premultiply(l),od.set(t+i*.012,e+r*.012,n+o*.012),rd.set(a,a,a),sd.compose(od,Rc,rd),this.mesh.setMatrixAt(this.i,sd),this.i=(this.i+1)%this.max,this.mesh.count=Math.min(this.max,this.mesh.count+1),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.mesh.count=0,this.i=0}},Ho=class{constructor(t,e){this.scene=t,this.q=e.particles,this.add=new Bo(t,600,Cn,Pn("spark")),this.norm=new Bo(t,900,ui,Pn("smoke")),this.holes=new Oo(t,160,Pn("hole"),.11),this.blood=new Oo(t,50,Pn("blood"),.55);let n=48;this.trPos=new Float32Array(n*6),this.trCol=new Float32Array(n*6),this.trLife=new Float32Array(n),this.trI=0;let i=new Le;i.setAttribute("position",new Me(this.trPos,3).setUsage(Cs)),i.setAttribute("color",new Me(this.trCol,3).setUsage(Cs)),this.tracers=new wo(i,new ur({vertexColors:!0,blending:Cn,transparent:!0,depthWrite:!1})),this.tracers.frustumCulled=!1,t.add(this.tracers),this.light=new Co(16763008,0,9,2),t.add(this.light),this.lightT=0,this.smokes=[]}setCamera(t,e,n){let i=e/(2*Math.tan(Lo.degToRad(t.fov)/2));for(let r of[this.add,this.norm])r.uniforms.scale.value=i,n&&(r.uniforms.fogColor.value.copy(n.color),r.uniforms.fogNear.value=n.near,r.uniforms.fogFar.value=n.far)}flashLight(t,e,n,i=3,r=16763008,o=.05){this.light.position.set(t,e,n),this.light.color.setHex(r),this.light.intensity=i,this.light.distance=i>10?30:9,this.lightT=o,this.lightI=i,this.lightDur=o}tracer(t,e,n,i,r,o){let a=this.trI;this.trI=(a+1)%this.trLife.length;let l=i-t,c=r-e,h=o-n,u=Math.hypot(l,c,h)||1,d=Math.min(.6,u*.3)/u;this.trPos.set([t+l*d,e+c*d,n+h*d,i,r,o],a*6),this.trLife[a]=.06}impact(t,e,n,i,r,o,a,l=!0){l&&this.holes.add(t,e,n,i,r,o,.8+Math.random()*.5);let c=Math.ceil(5*this.q),h=a==="crate"?[.5,.36,.2]:a==="metal"?[.5,.5,.5]:[.75,.66,.5];for(let u=0;u<c;u++)this.norm.emit(t+i*.05,e+r*.05,n+o*.05,i*(1+Math.random()*2)+(Math.random()-.5)*1.5,r*(1+Math.random()*2)+Math.random()*1.2,o*(1+Math.random()*2)+(Math.random()-.5)*1.5,.5+Math.random()*.4,.14+Math.random()*.12,h[0],h[1],h[2],.55,2.5,.5,2.5);if(Math.random()<.6)for(let u=0;u<Math.ceil(3*this.q);u++)this.add.emit(t,e,n,i*3+(Math.random()-.5)*5,r*3+Math.random()*3,o*3+(Math.random()-.5)*5,.18+Math.random()*.15,.05,1,.8,.45,1,14,0,.5)}bloodHit(t,e,n,i,r,o,a,l){let c=Math.ceil((a?14:7)*this.q);for(let h=0;h<c;h++)this.norm.emit(t,e,n,i*1.5+(Math.random()-.5)*2,r*1.5+Math.random()*1.5,o*1.5+(Math.random()-.5)*2,.4+Math.random()*.4,.12+Math.random()*.14,.55,.04,.03,.85,6,.3,1.5);if(l){let h=l.raycast(t,e,n,i,r-.3,o,2.5);h?this.blood.add(t+i*h.t,e+(r-.3)*h.t,n+o*h.t,h.nx,h.ny,h.nz,.6+Math.random()*.6):this.blood.add(t,l.topAt(t,n)+.01,n,0,1,0,.5+Math.random()*.5)}}explosion(t,e,n,i=!1){let r=i?2.4:1;this.flashLight(t,e+1,n,i?40:18,16752704,i?.6:.3);for(let o=0;o<26*this.q*r;o++){let a=Math.random()*6.28,l=Math.random()*1.4,c=(3+Math.random()*7)*r;this.add.emit(t,e+.3,n,Math.cos(a)*Math.cos(l)*c,Math.sin(l)*c,Math.sin(a)*Math.cos(l)*c,.3+Math.random()*.35,.9*r,1,.55+Math.random()*.3,.2,1,3,1.5*r,3)}for(let o=0;o<18*this.q*r;o++){let a=Math.random()*6.28,l=(1+Math.random()*3)*r;this.norm.emit(t,e+.5,n,Math.cos(a)*l,1+Math.random()*2.5,Math.sin(a)*l,1.6+Math.random()*1.6*r,1.4*r,.22,.2,.18,.75,-.3,1.2*r,1.2)}}smoke(t,e,n,i=16){let r={x:t,y:e+1.2,z:n,r:0,maxR:4.6,t:0,dur:i};return this.smokes.push(r),r}smokeBlocks(t,e,n,i,r,o){for(let a of this.smokes){if(a.r<1)continue;let l=i-t,c=r-e,h=o-n,u=l*l+c*c+h*h,d=((a.x-t)*l+(a.y-e)*c+(a.z-n)*h)/(u||1);d=Math.max(0,Math.min(1,d));let p=t+l*d-a.x,g=e+c*d-a.y,y=n+h*d-a.z;if(p*p+g*g*.6+y*y<a.r*a.r*.8)return!0}return!1}smokeAt(t,e,n){let i=0;for(let r of this.smokes){if(r.r<.5)continue;let o=Math.hypot(t-r.x,(e-r.y)*.8,n-r.z);i=Math.max(i,1-o/(r.r*.95))}return Math.max(0,Math.min(1,i*1.6))}update(t){this.add.update(t),this.norm.update(t);for(let e=0;e<this.trLife.length;e++)if(this.trLife[e]>0){this.trLife[e]-=t;let n=Math.max(0,this.trLife[e]/.06);this.trCol.set([.9*n,.75*n,.4*n,.4*n,.3*n,.15*n],e*6)}else this.trLife[e]>-1&&(this.trLife[e]=-2,this.trCol.fill(0,e*6,e*6+6));this.tracers.geometry.attributes.position.needsUpdate=!0,this.tracers.geometry.attributes.color.needsUpdate=!0,this.lightT>0?(this.lightT-=t,this.light.intensity=Math.max(0,this.lightI*(this.lightT/this.lightDur))):this.light.intensity=0;for(let e=this.smokes.length-1;e>=0;e--){let n=this.smokes[e];n.t+=t;let i=n.t>n.dur-3?(n.dur-n.t)/3:1;if(n.r=Math.min(n.maxR,n.t*3.2)*Math.max(.3,i),n.t>n.dur){this.smokes.splice(e,1);continue}n.acc=(n.acc||0)+t;let r=.05/this.q;for(;n.acc>r;){n.acc-=r;let o=Math.random()*6.28,a=Math.random()*n.r*.75;this.norm.emit(n.x+Math.cos(o)*a,n.y-.6+Math.random()*1.8,n.z+Math.sin(o)*a,(Math.random()-.5)*.4,.05,(Math.random()-.5)*.4,2.6,3.4+Math.random()*1.2,.72,.74,.76,.62*Math.max(0,i),-.02,.4,.5)}}}clear(){this.add.clear(),this.norm.clear(),this.holes.clear(),this.blood.clear(),this.smokes.length=0,this.trLife.fill(0),this.trCol.fill(0)}};var Ic=Math.PI*2,mr=s=>(s=(s+Math.PI)%Ic,s<0&&(s+=Ic),s-Math.PI),Vi=class{constructor(t,e,n){this.a=t,this.G=e,this.setDifficulty(n),this.reset()}setDifficulty(t){this.D=gc[t]||gc.normal,this.diff=t}reset(){this.path=null,this.pathI=0,this.goal=null,this.repathT=0,this.target=null,this.visible=!1,this.seenFor=0,this.reactT=0,this.lastSeen=null,this.err={y:0,p:0},this.scanT=Math.random()*.2,this.burst=0,this.burstPause=0,this.strafe=0,this.strafeT=0,this.stuckT=0,this.stuckN=0,this.lastX=this.a.x,this.lastZ=this.a.z,this.task=null,this.spot=null,this.look=null,this.lookT=0,this.heard=null,this.nadeDone=!1,this.throwing=null,this.engageCrouch=!1,this.aimHead=!1,this.sideStep=0,this.idleLookT=0,this.wantYaw=this.a.yaw,this.wantPitch=0,this.scopeHold=0}scan(){let t=this.G,e=this.a;if(e.flashT>.6){this.visible=!1;return}let n=e.x,i=e.y+e.eyeHeight(),r=e.z,o=e.yaw,a=null,l=1/0;for(let c of t.actors){if(!c.alive||!t.isEnemy(e,c))continue;let h=c.x-n,u=c.z-r,d=Math.hypot(h,u);if(d>95)continue;let p=Math.abs(mr(Math.atan2(-h,-u)-o)),g=e.lastAttacker===c&&t.time-e.lastHurt<2,y=c===this.target&&this.visible;if(p>1.15&&d>2.5&&!g&&!y||p>.7&&!y&&!g&&Math.random()>this.D.spot)continue;let m=c.y+c.eyeHeight(),f=c.y+c.bodyHeight()*.6,S=t.grid.los(n,i,r,c.x,m,c.z)||t.grid.los(n,i,r,c.x,f,c.z);if(S&&t.fx.smokeBlocks(n,i,r,c.x,f,c.z)&&(S=!1),!S)continue;let w=d+p*8-(y?6:0)-(g?10:0);w<l&&(l=w,a=c)}if(a){if(a!==this.target||!this.visible){let c=Math.abs(mr(Math.atan2(-(a.x-n),-(a.z-r))-o))>.8;this.reactT=this.D.react*(.7+Math.random()*.6)*(c?1.4:1)+(a===this.target?0:.05);let h=Math.hypot(a.x-n,a.z-r),u=this.D.aimErr*(1+h/30);this.err.y=(Math.random()-.5)*2*u,this.err.p=(Math.random()-.5)*1.2*u,this.aimHead=Math.random()<(this.diff==="expert"?.6:this.diff==="hard"?.4:this.diff==="normal"?.2:.08),this.engageCrouch=h>18&&Math.random()<.35,this.strafe=Math.random()<this.D.strafe?Math.random()<.5?1:-1:0,this.strafeT=.3+Math.random()*.5,!this.visible&&Math.random()<.3&&t.radio(e,"r_enemy")}this.target=a,this.visible=!0,a.spotted=t.time,this.lastSeen={x:a.x,y:a.y,z:a.z,t:t.time},t.callout(e.team,a.x,a.z)}else this.visible=!1,this.target&&!this.target.alive&&(this.target=null);for(let c of t.noises)t.time-c.t>.5||!c.src||!t.isEnemy(e,c.src)||Math.hypot(c.x-e.x,c.z-e.z)<c.r&&(this.heard={x:c.x,y:c.y,z:c.z,t:c.t})}goTo(t,e,n){let i=this.a,r=this.G;if((!this.goal||Math.hypot(this.goal.x-t,this.goal.z-e)>1.2||this.repathT<=0||!this.path)&&(this.goal={x:t,z:e},this.path=r.grid.findPath(i.x,i.z,t,e),this.pathI=0,this.repathT=3+Math.random()*2),!this.path||this.pathI>=this.path.length)return!0;let o=this.path[this.pathI],a=Math.hypot(o.x-i.x,o.z-i.z),l=this.pathI===this.path.length-1;if(a<(l?.45:.8)&&Math.abs(o.y-i.y)<.6){if(this.pathI++,this.pathI>=this.path.length)return!0;o=this.path[this.pathI],a=Math.hypot(o.x-i.x,o.z-i.z)}let c=(o.x-i.x)/(a||1),h=(o.z-i.z)/(a||1);return n.wx=c,n.wz=h,o.y-i.y>.5&&a<2.4&&i.onGround&&(n.jump=!0),this.moveYaw=Math.atan2(-c,-h),!1}remaining(){if(!this.path)return 0;let t=0,e=this.a.x,n=this.a.z;for(let i=this.pathI;i<this.path.length;i++)t+=Math.hypot(this.path[i].x-e,this.path[i].z-n),e=this.path[i].x,n=this.path[i].z;return t}checkStuck(t,e){let n=this.a;if(this.stuckT+=t,this.sideStep>0&&(this.sideStep-=t,e.wx=this.sideX,e.wz=this.sideZ),this.stuckT<.7)return;let i=Math.hypot(n.x-this.lastX,n.z-this.lastZ);if(Math.hypot(e.wx,e.wz)>.3&&i<.35){if(this.stuckN++,e.jump=!0,this.stuckN>=2){this.path=null;let o=Math.random()*Ic;this.sideX=Math.cos(o),this.sideZ=Math.sin(o),this.sideStep=.45}}else this.stuckN=0;this.stuckT=0,this.lastX=n.x,this.lastZ=n.z}aimAt(t,e,n,i,r=1,o=!0){let a=this.a,l=a.x,c=a.y+a.eyeHeight(),h=a.z,u=t-l,d=e-c,p=n-h,g=Math.atan2(-u,-p),y=Math.atan2(d,Math.hypot(u,p));return o&&(g+=this.err.y-a.punchY*this.D.recoilComp,y+=this.err.p-a.punchP*this.D.recoilComp),this.turnTo(g,y,i,r),{yaw:g,pitch:y,dist:Math.hypot(u,d,p)}}turnTo(t,e,n,i=1){let r=this.a,o=mr(t-r.yaw),a=this.D.turn*i,l=Math.min(Math.abs(o),(a*.35+Math.abs(o)*a)*n);r.yaw=mr(r.yaw+Math.sign(o)*l);let c=e-r.pitch;r.pitch+=Math.sign(c)*Math.min(Math.abs(c),(a*.3+Math.abs(c)*a)*n),r.pitch=Math.max(-1.45,Math.min(1.45,r.pitch))}think(t){let e=this.G,n=this.a,i={wx:0,wz:0,walk:!1,crouch:!1,jump:!1,fire:!1,alt:!1,use:!1,reload:!1,slot:null};if(!n.alive)return i;if(this.repathT-=t,this.scanT-=t,this.scanT<=0&&(this.scanT=.12+Math.random()*.1,this.scan()),e.phase==="freeze")return n.slot!==n.bestSlot()&&(i.slot=n.bestSlot()),this.idleLook(t),i;if(this.throwing)return this.doThrow(t,i),i;if(this.visible&&this.target&&this.target.alive)this.engage(t,i);else{this.seenFor=0,this.burst=0,this.objective(t,i);let r=n.w;r.def.clip&&r.clip<r.def.clip*.5&&r.reserve>0&&n.reloadT<=0&&(!this.lastSeen||e.time-this.lastSeen.t>1.5)&&(i.reload=!0),i.slot===null&&!n.hasBomb&&n.slot!==n.bestSlot()&&n.slot!==3&&(i.slot=n.bestSlot()),n.slot===4&&!i.use&&(i.slot=n.bestSlot())}return this.checkStuck(t,i),i}engage(t,e){let n=this.G,i=this.a,r=this.target;this.seenFor+=t,this.reactT-=t;let o=Math.exp(-t*(1.6+(this.diff==="expert"?2:this.diff==="hard"?1.2:.4)));this.err.y*=o,this.err.p*=o;let a=this.D.aimErr*.25*t*8;this.err.y+=(Math.random()-.5)*a,this.err.p+=(Math.random()-.5)*a*.6;let l=r.y+(this.aimHead?r.eyeHeight()+.02:r.bodyHeight()*.68),c=.06,h=this.aimAt(r.x+r.vx*c,l,r.z+r.vz*c,t,1),u=h.dist,d=i.w;(i.slot===3||i.slot===4)&&(e.slot=i.bestSlot()),d.def.clip&&d.clip===0&&(i.slot===0&&i.slots[1]&&i.slots[1].clip>0&&u<18?e.slot=1:d.reserve>0?e.reload=!0:i.slots[1]&&i.slot!==1?e.slot=1:e.slot=2),i.slot===2&&(i.slots[0]||i.slots[1])&&u>3&&(e.slot=i.bestSlot()),d=i.w;let p=d.def;if(p.kind==="knife")e.wx=(r.x-i.x)/(u||1),e.wz=(r.z-i.z)/(u||1),Math.random()<.02&&(e.jump=!0);else{let w=Math.cos(i.yaw),v=-Math.sin(i.yaw);this.strafeT-=t,this.strafeT<=0&&(this.strafeT=.35+Math.random()*.55,this.strafe&&(this.strafe=-this.strafe));let I=u>14&&(p.kind==="rifle"||p.kind==="sniper");if(this.strafe&&!I&&p.kind!=="sniper"&&(e.wx=w*this.strafe,e.wz=v*this.strafe),this.engageCrouch&&p.kind!=="sniper"&&(e.crouch=!0),p.kind==="shotgun"&&u>9){let T=1/(u||1);e.wx=(r.x-i.x)*T,e.wz=(r.z-i.z)*T}}let g={yaw:i.yaw,pitch:i.pitch},y=Math.abs(mr(h.yaw-this.err.y-g.yaw)),m=Math.abs(h.pitch-this.err.p-g.pitch),f=Math.atan2(.4,u)+.015,S=y<f*1.6&&m<f*2;if(!(this.reactT>0||!S||i.switchT>0)){if(p.kind==="sniper"){if(i.scope===0&&u>5&&n.time>=i.nextFire&&i.scopeRestore===void 0){e.alt=!0,this.scopeHold=0;return}this.scopeHold+=t,this.scopeHold>.18+(this.diff==="easy"?.4:.1)&&!i.prevFire&&(e.fire=!0);return}if(p.kind==="knife"){u<1.9&&(e.fire=!0),u<1.6&&Math.random()<.3&&(e.alt=!0);return}if(p.auto){if(this.burstPause>0){this.burstPause-=t;return}let w=u<8?30:u<20?this.D.burst:Math.max(2,this.D.burst>>1);if(i.shotsFired>=w){this.burstPause=.18+Math.random()*.3+u*.006;return}e.fire=!0}else!i.prevFire&&n.time>=i.nextFire+(u>20?.12:.02)&&(e.fire=!0)}}idleLook(t){let e=this.a;this.idleLookT-=t,this.idleLookT<=0&&(this.idleLookT=1+Math.random()*2.5,this.look?this.wantYaw=Math.atan2(-(this.look.x-e.x),-(this.look.z-e.z))+(Math.random()-.5)*.7:this.wantYaw=e.yaw+(Math.random()-.5)*1.8,this.wantPitch=(Math.random()-.5)*.12),this.turnTo(this.wantYaw,this.wantPitch,t,.35)}lookAlongPath(t){if(this.moveYaw===void 0)return;let e=this.moveYaw,n=0,i=this.G;if(this.heard&&i.time-this.heard.t<2){let r=this.a;e=Math.atan2(-(this.heard.x-r.x),-(this.heard.z-r.z))}this.turnTo(e,n,t,.45)}objective(t,e){var r;let n=this.G,i=this.a;if(this.lastSeen&&n.time-this.lastSeen.t<3.5&&this.target&&this.target.alive&&!(i.hasBomb&&n.phase==="live")){let o=this.goTo(this.lastSeen.x,this.lastSeen.z,e);this.aimAt(this.lastSeen.x,this.lastSeen.y+1.4,this.lastSeen.z,t,.6,!1),o&&(this.lastSeen=null),i.nades.he>0&&n.time-((r=this.lastSeen)==null?void 0:r.t)>.8&&Math.random()<.01&&this.startThrow("he",this.lastSeen);return}if(n.mode!=="bomb"){this.roam(t,e);return}i.team===Et.T?this.playT(t,e):this.playCT(t,e)}roam(t,e){let n=this.G,i=this.a;this.heard&&n.time-this.heard.t<4&&(!this.task||this.task.kind!=="heard")&&(this.task={kind:"heard",x:this.heard.x,z:this.heard.z});let r=n.calls[i.team];if((!this.task||this.task.done)&&r&&n.time-r.t<5&&Math.random()<.5&&(this.task={kind:"call",x:r.x,z:r.z}),!this.task||this.task.done){let o=n.grid.floorCells(),a=o[Math.random()*o.length|0],l=n.grid.center(a%n.grid.w,a/n.grid.w|0);this.task={kind:"roam",x:l.x,z:l.z}}this.goTo(this.task.x,this.task.z,e)&&(this.task.done=!0),this.lookAlongPath(t)}playT(t,e){let n=this.G,i=this.a,r=n.bomb;if(r.planted){if(!this.task||this.task.kind!=="guard"){let d=n.grid.randomCellIn([Math.floor(r.x/2)-4,Math.floor(r.z/2)-4,Math.floor(r.x/2)+4,Math.floor(r.z/2)+4],Math.random);this.task={kind:"guard",x:d.x,z:d.z}}this.goTo(this.task.x,this.task.z,e)?(this.look=this.look||{x:r.x,z:r.z},this.idleLook(t),e.crouch=Math.random()<.002?!e.crouch:this.task.crouch):this.lookAlongPath(t);return}if(r.dropped&&!i.hasBomb){let d=n.actors.filter(p=>p.alive&&p.team===Et.T);if(d.sort((p,g)=>Math.hypot(p.x-r.x,p.z-r.z)-Math.hypot(g.x-r.x,g.z-r.z)),d[0]===i){this.goTo(r.x,r.z,e),this.lookAlongPath(t);return}}let o=n.tPlan,a=n.def.sites[o];if(i.hasBomb){if(!this.task||this.task.kind!=="plant"||this.task.site!==o){let p=n.grid.randomCellIn(a,Math.random,(g,y)=>n.grid.h(g,y)>.01);this.task={kind:"plant",site:o,x:p.x,z:p.z}}let d=n.grid.inRect(i.x,i.z,a);this.goTo(this.task.x,this.task.z,e)||d&&i.plantT>0?d?(e.use=!0,e.wx=e.wz=0,e.crouch=!0):this.task=null:this.lookAlongPath(t);return}if(!this.task||this.task.kind!=="push"||this.task.site!==o){let d=n.grid.randomCellIn(a,Math.random);this.task={kind:"push",site:o,x:d.x,z:d.z},this.nadeDone=!1}let l=a[0]+a[2]+1,c=a[1]+a[3]+1,h=Math.hypot(i.x-l,i.z-c);if(!this.nadeDone&&h<22&&h>9){this.nadeDone=!0;let d=i.nades.smoke&&Math.random()<.6?"smoke":i.nades.flash?"flash":null;if(d&&Math.random()<.65){this.startThrow(d,{x:l+(Math.random()-.5)*6,y:1,z:c+(Math.random()-.5)*6});return}}let u=n.actors.find(d=>d.alive&&d.hasBomb);if(u&&u!==i&&h<18&&Math.hypot(u.x-l,u.z-c)>h+14){this.idleLook(t);return}this.goTo(this.task.x,this.task.z,e)?(this.look=this.look||{x:n.spawnCenter(Et.CT).x,z:n.spawnCenter(Et.CT).z},this.idleLook(t)):this.lookAlongPath(t),n.time-n.roundStart>8&&this.remaining()>20&&Math.random()<.001&&(e.walk=!1)}playCT(t,e){let n=this.G,i=this.a,r=n.bomb;if(r.planted){let a=Math.hypot(i.x-r.x,i.z-r.z),l=r.defuser;if(a<1.3&&(!l||l===i)){e.use=!0,e.wx=e.wz=0,e.crouch=!0,this.aimAt(r.x,r.y,r.z,t,.8,!1);return}if(l&&l!==i&&a<10){this.look={x:i.x*2-r.x,z:i.z*2-r.z},this.idleLook(t);return}this.goTo(r.x,r.z,e),this.lookAlongPath(t);return}let o=n.calls[i.team];if(this.task&&this.task.kind==="hold"&&this.task.arrived&&o&&n.time-o.t<2&&!this.task.rotated&&Math.hypot(o.x-i.x,o.z-i.z)>12&&Math.random()<.45&&(this.task={kind:"rotate",x:o.x,z:o.z}),!this.task||this.task.kind==="rotate"&&this.task.done){let a=Object.keys(n.def.sites),l=n.actors.filter(u=>u.team===Et.CT).indexOf(i),c=a[l%a.length],h=n.grid.randomCellIn(n.def.sites[c],Math.random);this.task={kind:"hold",site:c,x:h.x,z:h.z,crouch:Math.random()<.3,rotated:!1},this.look=n.siteEntry(c,Math.random)}this.goTo(this.task.x,this.task.z,e)?(this.task.arrived=!0,this.task.kind==="rotate"&&(this.task.done=!0,this.task.rotated=!0),this.task.crouch&&(e.crouch=!0),this.idleLook(t)):this.lookAlongPath(t)}startThrow(t,e){!this.a.nades[t]||!e||(this.throwing={key:t,x:e.x,y:e.y||0,z:e.z,t:0})}doThrow(t,e){let n=this.a,i=this.throwing;if(i.t+=t,n.slot!==3||n.nadeKey!==i.key){n.slot!==3?e.slot=3:n.nades[i.key]>0&&(n.nadeKey=i.key),i.t>2&&(this.throwing=null);return}let r=Math.hypot(i.x-n.x,i.z-n.z),o=Math.max(.1,Math.min(.75,.08+r*.022));this.turnTo(Math.atan2(-(i.x-n.x),-(i.z-n.z)),o,t,1.4),i.t>.6&&n.switchT<=0&&n.throwT<=0&&(e.fire=!n.prevFire),(i.t>1.8||n.slot!==3)&&(this.throwing=null)}buy(){let t=this.G,e=this.a;if(t.mode!=="bomb")return;let n=e.team===Et.T,i=n?"ak47":"m4a1",r=n?"galil":"famas",o=Math.random(),l=t.actors.filter(u=>u.team===e.team).some(u=>u.slots[0]&&u.slots[0].key==="awp"),c=t.round>1&&e.money<2300&&!e.slots[0],h=u=>t.buy(e,u,!0);!e.slots[0]&&!c&&(e.money>=6e3&&o<.22&&!l?h("awp"):e.money>=fe[i].price+1e3?h(i):e.money>=3e3&&o<.6?h(r):e.money>=2500&&o<.4?h(o<.2?"p90":"mp5"):e.money>=2900&&o<.15&&h("scout")),(t.round===1||c)&&(e.money>=650&&o<.45?h("vest"):e.money>=650&&o<.7&&h("deagle")),e.money>=1e3&&(!e.helmet||e.armor<70)?h("vesthelm"):e.money>=650&&e.armor<50&&!c&&h("vest"),!n&&e.money>=400&&Math.random()<.65&&h("kit"),e.money>=500&&Math.random()<.6&&h("he"),e.money>=400&&Math.random()<.55&&h("flash"),e.money>=500&&Math.random()<.45&&h("smoke")}};function ad(s,t){return Math.pow(s.range||1,t/10)}function ld(s,t,e,n){let i=t,r=s.armor>0&&(e==="chest"||e==="stomach"||e==="head"&&s.helmet||e==="blast");if(r){i=t*n;let o=(t-i)*.5;o>s.armor?(i+=o-s.armor,s.armor=0):s.armor=Math.max(0,Math.round(s.armor-o)),s.armor<=0&&(s.helmet=!1)}return i=Math.max(1,Math.round(i)),s.hp-=i,{hp:i,armorHit:r}}function cd(s){return Math.min(Vt.lossMax,Vt.lossBase+Vt.lossStep*(Math.max(1,s)-1))}var Lc={x:0,y:0,z:0},Qt=s=>Math.round(s*1e4)/1e4;function Vo(s,t,e,n,i,r,o,a){let l=s.x-t,c=s.z-n,h=i*i+o*o,u=h>1e-8?(l*i+c*o)/h:0;if(u<-1||u>a+1)return null;let d=t+i*u-s.x,p=n+o*u-s.z;if(h>1e-8&&d*d+p*p>.9*.9)return null;let g=Math.cos(-s.yaw),y=Math.sin(-s.yaw),m=t-s.x,f=n-s.z,S=m*g+f*y,w=-m*y+f*g,v=e-s.y,I=i*g+o*y,T=-i*y+o*g,C=r,R=null;for(let[b,x,A,O,F,W,Y]of s.hitboxes()){let B=0,Z=a,V=[[S,I,x,F],[v,C,A,W],[w,T,O,Y]],it=!0;for(let[st,ft,Pt,$t]of V){if(Math.abs(ft)<1e-9){if(st<Pt||st>$t){it=!1;break}continue}let q=(Pt-st)/ft,Q=($t-st)/ft;if(q>Q){let mt=q;q=Q,Q=mt}if(q>B&&(B=q),Q<Z&&(Z=Q),B>Z){it=!1;break}}it&&(!R||B<R.t)&&(R={t:B,zone:b})}return R}function Dc(s,t){if(!t.spread&&t.kind!=="sniper")return 0;let e=Math.min(1.2,s.speed2d/6.2),n=t.kind==="sniper"?s.scope?t.spread:t.unscoped:t.spread;return n+=t.moveSpread*Math.max(0,e-.3)*1.4,s.onGround||(n+=t.airSpread),s.crouch>.6&&s.onGround&&(n*=.72),n+=Math.min(s.shotsFired,14)*(t.spray||0),n}function fx(s,t,e,n,i){if(n<=0)return[s,t,e];let r=-e,o=0,a=s,l=Math.hypot(r,a);l<1e-6&&(r=1,a=0,l=1),r/=l,a/=l;let c=t*a-e*o,h=e*r-s*a,u=s*o-t*r,d=n*(i()+i())*.5,p=i()*Math.PI*2,g=Math.cos(p)*d,y=Math.sin(p)*d,m=s+r*g+c*y,f=t+o*g+h*y,S=e+a*g+u*y,w=Math.hypot(m,f,S);return[m/w,f/w,S/w]}function px(s,t,e){let n=s.grid.charAt(t,e);return n==="x"||n==="X"?"crate":n==="o"||n==="W"?"metal":"stone"}function mx(s,t,e,n,i,r,o,a,l,c){let h=e.def,u=h.kind==="rifle"||h.kind==="sniper"||e.key==="deagle"?1:0,d=c,p=0,g=!1,y=220,m=n,f=i,S=r,w=new Set;for(let v=0;v<3;v++){let I=y-p,T=s.grid.raycast(m,f,S,o,a,l,I),C=T?T.t:I,R=null;for(let B of s.actors){if(B===t||!B.alive||w.has(B)||!s.ff&&!s.isEnemy(t,B))continue;let Z=Vo(B,m,f,S,o,a,l,C);Z&&(!R||Z.t<R.t)&&(R={a:B,t:Z.t,zone:Z.zone})}if(R&&s.role==="client")return[m+o*R.t,f+a*R.t,S+l*R.t];if(R){let B=p+R.t,Z=R.zone==="arms"?1:Hu[R.zone],V=d*Z*ad(h,B),it=m+o*R.t,st=f+a*R.t,ft=S+l*R.t;if(s.fire({e:"blood",p:[Qt(it),Qt(st),Qt(ft)],d:[Qt(o),Qt(a),Qt(l)],h:R.zone==="head"?1:0}),Gi(s,R.a,t,V,R.zone,h.pen,e.key,{wallbang:g,dir:[o,l]}),w.add(R.a),h.kind==="sniper"&&u>0){d*=.6,m=it+o*.05,f=st+a*.05,S=ft+l*.05,p=B;continue}return[it,st,ft]}if(!T)return[m+o*I,f+a*I,S+l*I];let b=m+o*T.t,x=f+a*T.t,A=S+l*T.t,O=px(s,T.cx,T.cz),F=Math.random()<.3?Math.random()<.2?"ricochet":"impact":0;s.fire({e:"imp",a:t.id,pr:1,p:[Qt(b),Qt(x),Qt(A)],n:[T.nx,T.ny,T.nz],s:O,r:F}),s.noise(b,x,A,6,t);let W=s.grid.charAt(T.cx,T.cz),Y=Gu[W];if(u>0&&Y&&T.ny===0){let B=s.grid.exitDistance(m,f,S,o,a,l,T.t,T.cx,T.cz);if(B<2.3){u--,d*=Y*(h.pen+.2),g=!0,p+=T.t+B+.02,m=b+o*(B+.02),f=x+a*(B+.02),S=A+l*(B+.02),s.fire({e:"imp",a:t.id,pr:1,p:[Qt(m-o*.03),Qt(f-a*.03),Qt(S-l*.03)],n:[Qt(o),Qt(a),Qt(l)],s:O,dc:0});continue}}return[b,x,A]}return[m,f,S]}function Gi(s,t,e,n,i,r,o,a={}){if(s.role==="client"||!t.alive||s.over||t.protectT>0)return;if(e&&e!==t&&!s.isEnemy(e,t)){if(!s.ff)return;n*=.35}let l=i==="arms"?"chest":i==="legs"?"legs":i,c=t.helmet,h=ld(t,n,l,r);t.lastHurt=s.time,t.lastAttacker=e,t.punchP+=Math.min(.09,h.hp*.0025),e&&e!==t&&(e.dmgDealt+=Math.min(h.hp,h.hp+Math.min(0,t.hp))),s.onDamage(t,e,h.hp,i,a.dir,h.armorHit&&i==="head"&&c),t.hp<=0&&s.kill(t,e,o,{hs:i==="head",wallbang:!!a.wallbang})}function Pc(s,t,e){let n=fe.knife;if(t.fireAnim=e?.6:.4,s.sound("knife",t,.7,{pred:!0}),s.role==="client"){t===s.player&&s.outAtk.push({k:"knife",h:e?1:0});return}let i=t.forward(Lc),r=t.x,o=t.y+t.eyeHeight(),a=t.z,l=null;for(let h of s.actors){if(h===t||!h.alive||!s.isEnemy(t,h))continue;let u=Vo(h,r,o,a,i.x,i.y,i.z,n.reach);u&&(!l||u.t<l.t)&&(l={v:h,...u})}if(!l)for(let h of s.actors){if(h===t||!h.alive||!s.isEnemy(t,h))continue;let u=h.x-t.x,d=h.z-t.z,p=Math.hypot(u,d);if(p>n.reach+.3||Math.abs(h.y-t.y)>1.2)continue;if((u*i.x+d*i.z)/(p*Math.hypot(i.x,i.z)||1)>.8){l={v:h,t:p,zone:"chest"};break}}if(l){let h=-Math.sin(l.v.yaw),u=-Math.cos(l.v.yaw),d=(l.v.x-t.x)*h+(l.v.z-t.z)*u>0,p=e?n.dmg2:n.dmg;d&&(p*=e?3:1.5),l.zone==="head"&&(p*=1.2),s.sound("knifeHit",{x:l.v.x,y:l.v.y+1.3,z:l.v.z},.9),s.fire({e:"blood",p:[Qt(l.v.x),Qt(l.v.y+1.2),Qt(l.v.z)],d:[Qt(i.x),0,Qt(i.z)],h:0}),Gi(s,l.v,t,p,l.zone==="head"?"head":"chest",.85,"knife",{dir:[i.x,i.z]});return}let c=s.grid.raycast(r,o,a,i.x,i.y,i.z,n.reach);c&&(s.sound("knifeWall",{x:r+i.x*c.t,y:o+i.y*c.t,z:a+i.z*c.t},.6),s.fire({e:"imp",a:t.id,p:[Qt(r+i.x*c.t),Qt(o+i.y*c.t),Qt(a+i.z*c.t)],n:[c.nx,c.ny,c.nz],s:"stone"}))}function gx(s,t,e){let n=e.def;e.clip--;let i=Dc(t,n)*(e.silenced?.85:1),r=t.yaw+t.punchY,o=t.pitch+t.punchP,a=Math.cos(o),l=-Math.sin(r)*a,c=Math.sin(o),h=-Math.cos(r)*a,u=[];for(let d=0;d<(n.pellets||1);d++)u.push(fx(l,c,h,i,s.rng).map(Qt));s.role==="client"&&t===s.player&&s.outAtk.push({k:"shot",w:e.key,d:u}),dd(s,t,e,u)}function dd(s,t,e,n){let i=e.def;t.shotsFired++,t.fireAnim=1,t.lastShot=s.time;let r=t.y+t.eyeHeight(),o=s.muzzleOf(t),a=[];n.forEach(([u,d,p],g)=>{let y=mx(s,t,e,t.x,r,t.z,u,d,p,i.dmg*(e.silenced?.9:1));(g===0||g%3===0)&&(!t.isBot||Math.random()<.5)&&a.push(y.map(Qt))}),s.stat("shots",1,t,!0);let l=t.shotsFired,c=i.recoil*(l<3?.9:l<10?1.15:.5)*(t.crouch>.6?.8:1);t.punchP=Math.min(.24,t.punchP+c),l===1&&(t.sprayPhase=s.rng()*6.28);let h=l<4?0:Math.sin(l*.5+t.sprayPhase)*i.recoilX*2.2;t.punchY=Math.max(-.13,Math.min(.13,t.punchY+h+(s.rng()-.5)*i.recoilX)),t.viewPunch=Math.min(1,t.viewPunch+c*8),s.fire({e:"shot",a:t.id,pr:1,k:e.silenced?"silenced":e.key,kind:i.kind,sil:e.silenced?1:0,m:[Qt(o.x),Qt(o.y),Qt(o.z)],ends:a,sh:i.kind!=="shotgun"&&i.kind!=="sniper"?1:0}),s.noise(t.x,r,t.z,e.silenced?14:i.kind==="pistol"?35:55,t),t.protectT>0&&(t.protectT=0),i.kind==="sniper"&&(t.scopeRestore=t.scope,t.scope=0),(i.kind==="sniper"||e.key==="m3")&&s.sound(i.kind==="sniper"?"bolt":"shell",t,.5,{pred:!0})}function fd(s,t,e){if(!(!t.alive||s.phase==="freeze")){if(e.k==="shot"){let n=[t.slots[0],t.slots[1]].find(r=>r&&r.key===e.w);if(!n||n.clip<=0||!Array.isArray(e.d)||s.time-(t.lastRemoteShot||-9)<n.def.rate*.55)return;let i=e.d.slice(0,n.def.pellets||1).filter(r=>Array.isArray(r)&&r.length===3&&r.every(Number.isFinite));if(!i.length)return;t.lastRemoteShot=s.time,n.clip--,dd(s,t,n,i)}else if(e.k==="knife"){if(s.time-(t.lastRemoteKnife||-9)<.3)return;t.lastRemoteKnife=s.time,Pc(s,t,!!e.h)}else if(e.k==="nade"){if(!t.nades[e.n])return;t.nadeKey=e.n,Number.isFinite(e.y)&&(t.yaw=e.y),Number.isFinite(e.p)&&(t.pitch=e.p),pd(s,t)}}}function pd(s,t){let e=t.nadeKey;if(!e||t.nades[e]<=0)return;if(t.nades[e]--,t.fireAnim=.6,s.sound("throw",t,.8,{pred:!0}),s.role==="client"){t===s.player&&s.outAtk.push({k:"nade",n:e,y:Qt(t.yaw),p:Qt(t.pitch)}),hd(t);return}let n=t.forward(Lc),i=Math.min(1.3,t.pitch+.12),r=Math.cos(i),o=16+(t.speed2d>1?2:0),a=t.x+n.x*.4,l=t.y+t.eyeHeight()-.1,c=t.z+n.z*.4,h=a,u=c;s.grid.topAt(h,u)>l&&(h=t.x,u=t.z),s.grenades.push({type:e,owner:t,x:h,y:l,z:u,vx:-Math.sin(t.yaw)*r*o+t.vx*.5,vy:Math.sin(i)*o+1.5,vz:-Math.cos(t.yaw)*r*o+t.vz*.5,t:0,fuse:e==="smoke"?2.2:1.6,still:0,model:s.makeNadeModel(e),id:s.nextObjId++}),(t!==s.player||s.autopilot)&&s.radio(t,e==="flash"?"r_flash":e==="smoke"?"r_smoke":"r_he"),hd(t)}function hd(s){let t=s.firstNade();t?(s.nadeKey=t,s.switchT=.5):(s.nadeKey=null,s.slot=s.lastSlot!==3&&s.has(s.lastSlot)?s.lastSlot:s.bestSlot(),s.switchT=.5)}function gr(s,t,e,n){t.switchT>0&&(t.switchT-=n),t.fireAnim>0&&(t.fireAnim=Math.max(0,t.fireAnim-n*4)),t.viewPunch=Math.max(0,t.viewPunch-n*6);let i=Math.min(1,n*(s.time-(t.lastShot||0)>.12?7:2.5));t.punchP-=t.punchP*i,t.punchY-=t.punchY*i;let r=t.w,o=r.def;s.time-(t.lastShot||0)>(o.rate||.1)+.12&&(t.shotsFired=Math.max(0,t.shotsFired-n*14)),t.scopeRestore!==void 0&&s.time>=t.nextFire&&o.kind==="sniper"&&(t.scope=t.scopeRestore,t.scopeRestore=void 0);let a=e.fire&&!t.prevFire;if(t.prevFire=e.fire,t.reloadT>0&&(t.reloadT-=n,t.reloadT<=0))if(o.shellReload)r.reserve>0&&r.clip<o.clip&&(r.clip++,r.reserve--,s.sound("shell",t,.6,{pred:!0})),r.reserve>0&&r.clip<o.clip&&(t.reloadT=o.reload);else{let c=o.clip-r.clip,h=Math.min(c,r.reserve);r.clip+=h,r.reserve-=h}let l=o.clip&&r.clip<o.clip&&r.reserve>0&&t.reloadT<=0&&t.switchT<=0;if(e.reload&&l&&ud(s,t,o),e.alt&&(o.kind==="sniper"&&t.switchT<=0&&t.reloadT<=0?(t.scope=(t.scope+1)%3,s.sound("click",t,.4,{owner:!0})):o.silencer&&t.switchT<=0&&t.reloadT<=0?(r.silenced=!r.silenced,t.switchT=1.6,s.sound("silencer",t,.7,{pred:!0})):o.kind==="knife"&&s.time>=t.nextFire&&t.switchT<=0&&(Pc(s,t,!0),t.nextFire=s.time+o.rate2)),!(t.switchT>0||s.phase==="freeze")){switch(o.kind){case"knife":e.fire&&s.time>=t.nextFire&&(Pc(s,t,!1),t.nextFire=s.time+o.rate);return;case"grenade":e.fire||(t.needRelease=!1),e.fire&&!t.needRelease&&t.throwT<=0&&(t.needRelease=!0,t.throwT=.38,s.sound("pin",t,.6,{pred:!0})),t.throwT>0&&(t.throwT-=n,t.throwT<=0&&pd(s,t));return;case"bomb":return;default:break}if(!(!e.fire||s.time<t.nextFire)&&!(!o.auto&&!a)&&!(t.reloadT>0&&!(o.shellReload&&r.clip>0))){if(r.clip<=0){(a||o.auto)&&(s.time>=(t.emptyT||0)&&(s.sound("empty",t,.6,{pred:!0}),t.emptyT=s.time+.3),r.reserve>0&&t.reloadT<=0&&ud(s,t,o));return}t.reloadT=0,gx(s,t,r),t.nextFire=s.time+o.rate}}}function ud(s,t,e){t.reloadT=e.reload,t.scope=0,t.scopeRestore=void 0,t.reloadSeq=(t.reloadSeq||0)+1,s.sound("reload",t,t.isBot?.5:.7,{pred:!0})}function md(s,t){let e=s.grid;for(let n=s.grenades.length-1;n>=0;n--){let i=s.grenades[n];i.t+=t;let r=4,o=t/r;for(let c=0;c<r;c++){i.vy-=20*o;let h=i.x+i.vx*o,u=i.y+i.vy*o,d=i.z+i.vz*o,p=!1;e.topAt(h,i.z)>i.y?(i.vx=-i.vx*.45,p=!0):i.x=h,e.topAt(i.x,d)>i.y?(i.vz=-i.vz*.45,p=!0):i.z=d;let g=e.topAt(i.x,i.z)+.05;u<g?(i.y=g,Math.abs(i.vy)>2&&(p=!0),i.vy=-i.vy*.35,i.vx*=.65,i.vz*=.65,Math.abs(i.vy)<.8&&(i.vy=0)):i.y=u,p&&i.t-(i.lastBounce||0)>.08&&(i.lastBounce=i.t,s.sound("bounce",{x:i.x,y:i.y,z:i.z},.6))}let a=Math.hypot(i.vx,i.vy,i.vz);a<.5&&(i.still+=t),i.model&&(i.model.position.set(i.x,i.y,i.z),i.model.rotation.x+=a*t*2,i.model.rotation.z+=a*t),(i.type==="smoke"?i.t>i.fuse&&i.still>.15||i.t>5:i.t>i.fuse)&&(s.grenades.splice(n,1),i.model&&s.scene.remove(i.model),yx(s,i))}}function yx(s,t){let e={x:t.x,y:t.y,z:t.z},n=[Qt(t.x),Qt(t.y),Qt(t.z)];if(t.type==="he"){s.sound("explode",e,1.2),s.fire({e:"expl",p:n}),s.noise(t.x,t.y,t.z,60,t.owner);for(let i of s.actors){if(!i.alive)continue;let r=Math.hypot(i.x-t.x,i.y+1-t.y,i.z-t.z);if(r>10||!s.grid.los(t.x,t.y+.3,t.z,i.x,i.y+1.2,i.z)&&!s.grid.los(t.x,t.y+.3,t.z,i.x,i.y+.4,i.z))continue;let o=100*Math.pow(1-r/10,1.3);o<1||Gi(s,i,t.owner,o,"blast",.5,"he",{dir:[i.x-t.x,i.z-t.z]})}}else if(t.type==="flash"){s.sound("flashbang",e,1.1),s.fire({e:"flashfx",p:n});for(let i of s.actors){if(!i.alive)continue;let r=i.x,o=i.y+i.eyeHeight(),a=i.z,l=Math.hypot(r-t.x,o-t.y,a-t.z);if(l>30||!s.grid.los(t.x,t.y+.2,t.z,r,o,a)||s.fx.smokeBlocks(t.x,t.y+.2,t.z,r,o,a))continue;let c=i.forward(Lc),h=((t.x-r)*c.x+(t.y-o)*c.y+(t.z-a)*c.z)/(l||1),u=h>.6?1:h>0?.6:.22,d=Math.max(0,4.8*u*(1-l/32));d<.25||(d>i.flashT&&(i.flashT=d,i.flashMax=d),i.isBot||s.fire({e:"flashed",o:i.id,d:Qt(d)}))}}else t.type==="smoke"&&(s.sound("smoke",e,1),s.fire({e:"smoke",p:n}))}var xx={knife:null,pistol:{lp:3600,dur:.16,thump:150,vol:.55,crack:.5},deagle:{lp:2600,dur:.3,thump:95,vol:.85,crack:.7},shotgun:{lp:1700,dur:.42,thump:70,vol:1,crack:.5},smg:{lp:4200,dur:.12,thump:160,vol:.45,crack:.45},rifle:{lp:2900,dur:.2,thump:110,vol:.7,crack:.65},m4a1:{lp:2e3,dur:.16,thump:120,vol:.5,crack:.3},sniper:{lp:2100,dur:.55,thump:70,vol:1,crack:1},silenced:{lp:1300,dur:.09,thump:260,vol:.32,crack:.12}},Uc=class{constructor(){this.ctx=null,this.volume=.8,this.voice=!0,this.lang="ru",this.active=0,this.listener={x:0,y:0,z:0}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6,e.attack.value=.002,e.release.value=.2,this.master.connect(e).connect(this.ctx.destination);let n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let a=0;a<n;a++)i[a]=Math.random()*2-1;this.brown=this.ctx.createBuffer(1,n*2,this.ctx.sampleRate);let r=this.brown.getChannelData(0),o=0;for(let a=0;a<r.length;a++)o=(o+.02*(Math.random()*2-1))/1.02,r[a]=o*3.5}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setListener(t,e,n,i){if(this.listener.x=t,this.listener.y=e,this.listener.z=n,!this.ctx)return;let r=this.ctx.listener,o=-Math.sin(i),a=-Math.cos(i);if(r.positionX){let l=this.ctx.currentTime;r.positionX.setValueAtTime(t,l),r.positionY.setValueAtTime(e,l),r.positionZ.setValueAtTime(n,l),r.forwardX.setValueAtTime(o,l),r.forwardY.setValueAtTime(0,l),r.forwardZ.setValueAtTime(a,l),r.upX.setValueAtTime(0,l),r.upY.setValueAtTime(1,l),r.upZ.setValueAtTime(0,l)}else r.setPosition(t,e,n),r.setOrientation(o,0,a,0,1,0)}out(t,e,n=90){let i=this.ctx.createGain();if(i.gain.value=e,t){if(Math.hypot(t.x-this.listener.x,t.y-this.listener.y,t.z-this.listener.z)>n)return null;let o=this.ctx.createPanner();o.panningModel="equalpower",o.distanceModel="inverse",o.refDistance=4,o.rolloffFactor=1.1,o.maxDistance=n,o.positionX?(o.positionX.value=t.x,o.positionY.value=t.y,o.positionZ.value=t.z):o.setPosition(t.x,t.y,t.z),i.connect(o).connect(this.master)}else i.connect(this.master);return i}busy(t=36){return!this.ctx||this.active>t}track(t,e){this.active++,setTimeout(()=>{this.active--;try{t.disconnect()}catch{}},e*1e3+100)}noiseBurst(t,e,n,i,r,o,a,l=1,c){a=Math.max(2e-4,a);let h=this.ctx.createBufferSource();h.buffer=c||this.noise,h.playbackRate.value=l;let u=this.ctx.createBiquadFilter();u.type=i,u.frequency.value=r,u.Q.value=o;let d=this.ctx.createGain();return d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(a,e+.004),d.gain.exponentialRampToValueAtTime(1e-4,e+n),h.connect(u).connect(d).connect(t),h.start(e,Math.random()*.5),h.stop(e+n+.05),u}tone(t,e,n,i,r,o,a="sine"){o=Math.max(2e-4,o);let l=this.ctx.createOscillator();l.type=a,l.frequency.setValueAtTime(n,e),i!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(1,i),e+r);let c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(o,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+r),l.connect(c).connect(t),l.start(e),l.stop(e+r+.05)}shot(t,e,n){if(this.busy())return;let i=e==="pistol"?t==="deagle"?"deagle":"pistol":e;t==="m4a1"&&(i="m4a1"),t==="silenced"&&(i="silenced");let r=xx[i];if(!r)return;let o=n?Math.hypot(n.x-this.listener.x,n.z-this.listener.z):0,a=Math.min(1,o/60),l=this.out(n,r.vol*(n?1.4:1),140);if(!l)return;let c=this.ctx.currentTime,h=r.lp*(1-a*.6);this.noiseBurst(l,c,r.dur,"lowpass",h,.7,.9,.9+Math.random()*.2),this.noiseBurst(l,c,.04,"highpass",2500,.5,r.crack*(1-a),1),this.tone(l,c,r.thump*1.6,r.thump*.45,.12+r.dur*.3,.7),o>30&&this.noiseBurst(l,c+.05+o/900,r.dur*2.2,"lowpass",600,.4,.25,.6),this.track(l,r.dur*3)}play(t,e=null,n=1){if(!this.ctx||t!=="beep"&&t!=="explode"&&this.busy(44))return;let i=this.out(e,n,t==="explode"?200:t==="step"?32:70);if(!i)return;let r=this.ctx.currentTime,o=.3;switch(t){case"step":this.noiseBurst(i,r,.07,"bandpass",700+Math.random()*500,1.2,.5,.8),this.noiseBurst(i,r,.05,"lowpass",220,1,.5),o=.1;break;case"land":this.noiseBurst(i,r,.12,"lowpass",400,1,.8),o=.15;break;case"jump":this.noiseBurst(i,r,.06,"bandpass",900,1,.25),o=.1;break;case"empty":this.tone(i,r,1800,1500,.03,.3,"square"),o=.05;break;case"reload":{this.noiseBurst(i,r,.05,"bandpass",2400,3,.5),this.tone(i,r+.02,900,600,.05,.2,"square"),this.noiseBurst(i,r+.45,.06,"bandpass",1800,3,.6),this.tone(i,r+.47,700,400,.06,.25,"square"),o=.6;break}case"bolt":this.noiseBurst(i,r+.25,.08,"bandpass",1500,2,.6),this.noiseBurst(i,r+.45,.06,"bandpass",2200,2,.6),o=.6;break;case"silencer":for(let a=0;a<4;a++)this.noiseBurst(i,r+a*.25,.05,"bandpass",3e3-a*300,4,.3);o=1.1;break;case"brass":this.tone(i,r,4200+Math.random()*800,3800,.05,.06,"triangle"),o=.08;break;case"shell":this.noiseBurst(i,r,.06,"bandpass",1300,2,.5),this.tone(i,r,500,300,.06,.2,"triangle"),o=.1;break;case"draw":this.noiseBurst(i,r,.08,"highpass",3e3,1,.25),o=.1;break;case"knife":this.noiseBurst(i,r,.18,"bandpass",3200,.8,.45,1.3),o=.2;break;case"knifeHit":this.noiseBurst(i,r,.12,"lowpass",900,1,.8),this.tone(i,r,300,120,.1,.4),o=.15;break;case"knifeWall":this.tone(i,r,2600,2400,.12,.25,"square"),this.noiseBurst(i,r,.06,"highpass",4e3,1,.4),o=.15;break;case"hit":this.noiseBurst(i,r,.08,"lowpass",700,1,.7),this.tone(i,r,220,110,.07,.5),o=.1;break;case"headshot":this.tone(i,r,2300,2e3,.25,.5,"triangle"),this.tone(i,r,4600,4e3,.18,.18,"sine"),this.noiseBurst(i,r,.05,"highpass",3500,1,.5),o=.3;break;case"kevlar":this.noiseBurst(i,r,.06,"bandpass",1600,2,.6),this.tone(i,r,500,300,.05,.3,"square"),o=.1;break;case"impact":this.noiseBurst(i,r,.05,"bandpass",1800+Math.random()*1500,1.5,.25),o=.08;break;case"ricochet":this.tone(i,r,3500+Math.random()*1500,1200,.25,.12,"sine"),o=.3;break;case"bounce":this.tone(i,r,800,500,.05,.35,"triangle"),this.noiseBurst(i,r,.04,"bandpass",1500,2,.3),o=.1;break;case"pin":this.tone(i,r,2800,2500,.05,.25,"square"),this.noiseBurst(i,r+.1,.05,"highpass",4e3,1,.3),o=.2;break;case"throw":this.noiseBurst(i,r,.15,"bandpass",1100,.8,.3),o=.2;break;case"explode":{this.noiseBurst(i,r,1.6,"lowpass",900,.7,1,.7,this.brown),this.noiseBurst(i,r,.35,"lowpass",3e3,.5,.8,1),this.tone(i,r,90,30,1,1),o=1.8;break}case"bombExplode":{this.noiseBurst(i,r,3.2,"lowpass",700,.7,1,.5,this.brown),this.noiseBurst(i,r,.6,"lowpass",2500,.5,1,.8),this.tone(i,r,70,22,2.4,1),o=3.5;break}case"flashbang":this.noiseBurst(i,r,.5,"highpass",1500,.6,1),this.tone(i,r,160,60,.3,.7),o=.6;break;case"ring":this.tone(i,r,3400,3300,2.6*n+.4,.12*n+.02),o=3;break;case"smoke":this.noiseBurst(i,r,1.4,"bandpass",1400,.4,.5,.6),o=1.5;break;case"beep":this.tone(i,r,2350,2350,.09,.35,"sine"),o=.12;break;case"plant":for(let a=0;a<7;a++)this.tone(i,r+a*.32,1300+a%3*180,1300+a%3*180,.06,.25,"square");o=2.4;break;case"planted":this.tone(i,r,1900,1900,.12,.4),this.tone(i,r+.18,1900,1900,.12,.4),o=.4;break;case"defuse":for(let a=0;a<5;a++)this.noiseBurst(i,r+a*.4,.06,"bandpass",2600,4,.35);o=2.2;break;case"defused":this.tone(i,r,900,1800,.3,.35,"triangle"),o=.4;break;case"buy":this.tone(i,r,1400,1400,.06,.25,"square"),this.tone(i,r+.07,2100,2100,.1,.25,"square"),o=.2;break;case"deny":this.tone(i,r,300,200,.18,.3,"square"),o=.2;break;case"pickup":this.noiseBurst(i,r,.07,"bandpass",2e3,2,.5),this.tone(i,r+.05,600,900,.06,.2,"triangle"),o=.15;break;case"click":this.tone(i,r,1200,900,.04,.2,"triangle"),o=.05;break;case"roundStart":this.tone(i,r,660,660,.12,.25,"square"),this.tone(i,r+.14,880,880,.2,.25,"square"),o=.4;break;case"win":[523,659,784,1046].forEach((a,l)=>this.tone(i,r+l*.12,a,a,.3,.22,"triangle")),o=.8;break;case"lose":[440,370,311,262].forEach((a,l)=>this.tone(i,r+l*.16,a,a,.35,.22,"triangle")),o=1;break;case"levelUp":[660,880,1320].forEach((a,l)=>this.tone(i,r+l*.07,a,a,.12,.25,"square")),o=.4;break;case"hurt":this.noiseBurst(i,r,.12,"lowpass",500,1,.9),o=.15;break;default:o=.05}this.track(i,o)}startAmbience(t){if(!this.ctx)return;this.stopAmbience();let e=this.ctx.createBufferSource();e.buffer=this.brown,e.loop=!0;let n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=t==="industrial"?220:420,n.Q.value=.6;let i=this.ctx.createGain();i.gain.value=t==="night"?.05:.08;let r=this.ctx.createOscillator();r.frequency.value=.07;let o=this.ctx.createGain();o.gain.value=.04,r.connect(o).connect(i.gain),e.connect(n).connect(i).connect(this.master),e.start(),r.start(),this.amb={src:e,lfo:r,g:i}}stopAmbience(){if(this.amb){try{this.amb.src.stop(),this.amb.lfo.stop(),this.amb.g.disconnect()}catch{}this.amb=null}}say(t){if(!(!this.voice||!t||typeof speechSynthesis=="undefined"))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.lang=this.lang==="ru"?"ru-RU":"en-US",e.rate=1.15,e.pitch=.8,e.volume=Math.min(1,this.volume*1.1),speechSynthesis.speak(e)}catch{}}},vt=new Uc;var Go={ru:{play:"\u0418\u0433\u0440\u0430\u0442\u044C",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",stats:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",help:"\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C",back:"\u041D\u0430\u0437\u0430\u0434",start:"\u0412 \u0431\u043E\u0439",resume:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",leave:"\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E",rematch:"\u0415\u0449\u0451 \u043C\u0430\u0442\u0447",menu:"\u041C\u0435\u043D\u044E",map:"\u041A\u0430\u0440\u0442\u0430",mode:"\u0420\u0435\u0436\u0438\u043C",team:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",bots:"\u0411\u043E\u0442\u043E\u0432 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435",difficulty:"\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u043E\u0442\u043E\u0432",rounds:"\u0420\u0430\u0443\u043D\u0434\u043E\u0432 \u0434\u043E \u043F\u043E\u0431\u0435\u0434\u044B",ff:"\u041E\u0433\u043E\u043D\u044C \u043F\u043E \u0441\u0432\u043E\u0438\u043C",mode_bomb:"\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u043E\u043C\u0431\u044B",mode_dm:"\u0414\u0435\u0437\u043C\u0430\u0442\u0447",mode_gg:"\u0413\u043E\u043D\u043A\u0430 \u0432\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439",mode_bomb_d:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u0437\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442 C4, \u0441\u043F\u0435\u0446\u043D\u0430\u0437 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0442\u043E\u0447\u043A\u0438 A \u0438 B",mode_dm_d:"\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435, \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u043E\u0440\u0443\u0436\u0438\u044F",mode_gg_d:"\u041A\u0430\u0436\u0434\u043E\u0435 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E \u0434\u0430\u0451\u0442 \u043D\u043E\u0432\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435. \u041F\u043E\u0431\u0435\u0434\u0430 \u0437\u0430 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E \u043D\u043E\u0436\u043E\u043C",team_auto:"\u0410\u0432\u0442\u043E",team_t:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B",team_ct:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437",t:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B",ct:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437",t_short:"\u0422",ct_short:"\u0421\u041D",easy:"\u041B\u0451\u0433\u043A\u0438\u0435",normal:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0435",hard:"\u0421\u043B\u043E\u0436\u043D\u044B\u0435",expert:"\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u044B",on:"\u0412\u043A\u043B",off:"\u0412\u044B\u043A\u043B",lang:"\u042F\u0437\u044B\u043A",volume:"\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C",voice:"\u0413\u043E\u043B\u043E\u0441 \u0440\u0430\u0434\u0438\u043E",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C (\u044D\u043A\u0440\u0430\u043D)",mouseSens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C (\u043C\u044B\u0448\u044C)",fov:"\u041F\u043E\u043B\u0435 \u0437\u0440\u0435\u043D\u0438\u044F",quality:"\u0413\u0440\u0430\u0444\u0438\u043A\u0430",q_auto:"\u0410\u0432\u0442\u043E",q_low:"\u041D\u0438\u0437\u043A\u0430\u044F",q_medium:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",q_high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",showFps:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C FPS",aimAssist:"\u041F\u043E\u043C\u043E\u0449\u044C \u0432 \u043F\u0440\u0438\u0446\u0435\u043B\u0438\u0432\u0430\u043D\u0438\u0438",autoFire:"\u0410\u0432\u0442\u043E\u043E\u0433\u043E\u043D\u044C \u043F\u043E \u0446\u0435\u043B\u0438",invertY:"\u0418\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438",btnScale:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A",btnAlpha:"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043E\u043A",crosshair:"\u0426\u0432\u0435\u0442 \u043F\u0440\u0438\u0446\u0435\u043B\u0430",vibrate:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F",leftFire:"\u041B\u0435\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043E\u0433\u043D\u044F",buy:"\u0417\u0430\u043A\u0443\u043F\u043A\u0430",buy_pistols:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",buy_heavy:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0438 \u041F\u041F",buy_rifles:"\u0412\u0438\u043D\u0442\u043E\u0432\u043A\u0438",buy_gear:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",buy_nades:"\u0413\u0440\u0430\u043D\u0430\u0442\u044B",vest:"\u0411\u0440\u043E\u043D\u0435\u0436\u0438\u043B\u0435\u0442",vesthelm:"\u0411\u0440\u043E\u043D\u0435\u0436\u0438\u043B\u0435\u0442 + \u0448\u043B\u0435\u043C",kit:"\u041D\u0430\u0431\u043E\u0440 \u0441\u0430\u043F\u0451\u0440\u0430",rebuy:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",autobuy:"\u0410\u0432\u0442\u043E\u0437\u0430\u043A\u0443\u043F\u043A\u0430",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",buy_closed:"\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0443\u043F\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u043B\u043E",buy_zone:"\u0417\u0430\u043A\u0443\u043F\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0437\u043E\u043D\u0435 \u0432\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",no_money:"\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u0435\u043D\u0435\u0433",team_only:"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435",have_it:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044C",money:"\u0414\u0435\u043D\u044C\u0433\u0438",hp:"\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",armor:"\u0411\u0440\u043E\u043D\u044F",kills:"\u0423\u0431\u0438\u0439\u0441\u0442\u0432\u0430",deaths:"\u0421\u043C\u0435\u0440\u0442\u0438",score:"\u0421\u0447\u0451\u0442",name:"\u0418\u0433\u0440\u043E\u043A",alive:"\u0432 \u0436\u0438\u0432\u044B\u0445",dead:"\u0443\u0431\u0438\u0442",you:"\u0412\u044B",round:"\u0420\u0430\u0443\u043D\u0434",freeze:"\u0417\u0430\u043A\u0443\u043F\u043A\u0430",bomb_planted:"\u0411\u043E\u043C\u0431\u0430 \u0437\u0430\u043B\u043E\u0436\u0435\u043D\u0430!",bomb_defused:"\u0411\u043E\u043C\u0431\u0430 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0435\u043D\u0430",bomb_exploded:"\u0426\u0435\u043B\u044C \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0430",t_win:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438",ct_win:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437 \u043F\u043E\u0431\u0435\u0434\u0438\u043B",draw:"\u041D\u0438\u0447\u044C\u044F",plant_hint:"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \xAB\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\xBB, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0431\u043E\u043C\u0431\u0443",defuse_hint:"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \xAB\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\xBB, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C",have_bomb:"\u0423 \u0432\u0430\u0441 \u0431\u043E\u043C\u0431\u0430 \u2014 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u0435 \u0435\u0451 \u043D\u0430 \u0442\u043E\u0447\u043A\u0435 A \u0438\u043B\u0438 B",bomb_dropped:"\u0411\u043E\u043C\u0431\u0430 \u0432\u044B\u043F\u0430\u043B\u0430!",bomb_picked:"\u0412\u044B \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043B\u0438 \u0431\u043E\u043C\u0431\u0443",planting:"\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u2026",defusing:"\u041E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u2026",site:"\u0422\u043E\u0447\u043A\u0430",must_site:"\u0411\u043E\u043C\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0442\u043E\u0447\u043A\u0435",spectating:"\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435",you_died:"\u0412\u044B \u0443\u0431\u0438\u0442\u044B",killed_by:"\u0412\u0430\u0441 \u0443\u0431\u0438\u043B",respawn_in:"\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437",match_over:"\u041C\u0430\u0442\u0447 \u043E\u043A\u043E\u043D\u0447\u0435\u043D",victory:"\u041F\u043E\u0431\u0435\u0434\u0430!",defeat:"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435",mvp:"\u041B\u0443\u0447\u0448\u0438\u0439 \u0438\u0433\u0440\u043E\u043A",your_stats:"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",accuracy:"\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C",headshots:"\u0412 \u0433\u043E\u043B\u043E\u0432\u0443",wins:"\u041F\u043E\u0431\u0435\u0434",losses:"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0439",matches:"\u041C\u0430\u0442\u0447\u0435\u0439",plants:"\u0417\u0430\u043A\u043B\u0430\u0434\u043E\u043A",defuses:"\u0420\u0430\u0437\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0439",playtime:"\u0412\u0440\u0435\u043C\u044F \u0432 \u0438\u0433\u0440\u0435",kd:"\u0423/\u0421",reset_stats:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",pick_weapon:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0440\u0443\u0436\u0438\u0435",level:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",leader:"\u041B\u0438\u0434\u0435\u0440",time_left:"\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",frag_limit:"\u041B\u0438\u043C\u0438\u0442 \u0443\u0431\u0438\u0439\u0441\u0442\u0432",reload:"\u041F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430",jump:"\u041F\u0440\u044B\u0436\u043E\u043A",crouch:"\u041F\u0440\u0438\u0441\u0435\u0441\u0442\u044C",use:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",scope:"\u041F\u0440\u0438\u0446\u0435\u043B",drop:"\u0411\u0440\u043E\u0441\u0438\u0442\u044C",go:"\u0412\u043F\u0435\u0440\u0451\u0434, \u0432\u043F\u0435\u0440\u0451\u0434, \u0432\u043F\u0435\u0440\u0451\u0434!",r_planted:"\u0411\u043E\u043C\u0431\u0430 \u0437\u0430\u043B\u043E\u0436\u0435\u043D\u0430",r_twin:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438",r_ctwin:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437 \u043F\u043E\u0431\u0435\u0434\u0438\u043B",r_defused:"\u0411\u043E\u043C\u0431\u0430 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0435\u043D\u0430",r_cover:"\u041F\u0440\u0438\u043A\u0440\u043E\u0439\u0442\u0435 \u043C\u0435\u043D\u044F",r_enemy:"\u041F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A \u0437\u0430\u043C\u0435\u0447\u0435\u043D",r_flash:"\u0411\u0440\u043E\u0441\u0430\u044E \u0441\u0432\u0435\u0442\u043E\u0432\u0443\u044E!",r_smoke:"\u0421\u0442\u0430\u0432\u043B\u044E \u0434\u044B\u043C!",r_he:"\u0413\u0440\u0430\u043D\u0430\u0442\u0430!",tutorial_title:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",help_text:"<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> \u043B\u0435\u0432\u0430\u044F \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 (\u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A), \u043F\u0440\u0430\u0432\u0430\u044F \u2014 \u043E\u0431\u0437\u043E\u0440. \u041A\u043D\u043E\u043F\u043A\u0443 \u043E\u0433\u043D\u044F \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u0446\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u0442\u0440\u0435\u043B\u044C\u0431\u044B. \u041A\u043D\u043E\u043F\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430: \u043F\u0440\u044B\u0436\u043E\u043A, \u043F\u0440\u0438\u0441\u0435\u0441\u0442\u044C, \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u043F\u0440\u0438\u0446\u0435\u043B. \u0421\u043D\u0438\u0437\u0443 \u2014 \u0432\u044B\u0431\u043E\u0440 \u043E\u0440\u0443\u0436\u0438\u044F, \u0441\u043B\u0435\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443 \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430 ($) \u0438 \u0441\u0447\u0451\u0442.<br><br><b>\u041F\u041A:</b> WASD \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u043C\u044B\u0448\u044C \u2014 \u043E\u0431\u0437\u043E\u0440, \u041B\u041A\u041C \u2014 \u043E\u0433\u043E\u043D\u044C, \u041F\u041A\u041C \u2014 \u043F\u0440\u0438\u0446\u0435\u043B/\u0443\u0434\u0430\u0440 \u043D\u043E\u0436\u043E\u043C, R \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u043F\u0440\u044B\u0436\u043E\u043A, Ctrl \u2014 \u043F\u0440\u0438\u0441\u0435\u0441\u0442\u044C, Shift \u2014 \u0442\u0438\u0445\u0438\u0439 \u0448\u0430\u0433, E \u2014 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 (\u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C/\u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C/\u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C), 1\u20135 \u2014 \u043E\u0440\u0443\u0436\u0438\u0435, Q \u2014 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435, G \u2014 \u0431\u0440\u043E\u0441\u0438\u0442\u044C, B \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430, Tab \u2014 \u0441\u0447\u0451\u0442, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.<br><br><b>\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u043E\u043C\u0431\u044B:</b> \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C C4 \u043D\u0430 \u0442\u043E\u0447\u043A\u0435 A \u0438\u043B\u0438 B \u0438 \u043D\u0435 \u0434\u0430\u0442\u044C \u0435\u0451 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C. \u0421\u043F\u0435\u0446\u043D\u0430\u0437 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442, \u0435\u0441\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0438\u0442 \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u043E\u0432, \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442 \u0431\u043E\u043C\u0431\u0443 \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0440\u0430\u0443\u043D\u0434\u0430. \u0417\u0430 \u043F\u043E\u0431\u0435\u0434\u044B, \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u0430 \u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0434\u0435\u043D\u044C\u0433\u0438. \u0411\u0440\u043E\u043D\u044F \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0443\u0440\u043E\u043D, \u0448\u043B\u0435\u043C \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0433\u043E\u043B\u043E\u0432\u0443, \u043D\u0430\u0431\u043E\u0440 \u0441\u0430\u043F\u0451\u0440\u0430 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u0440\u0430\u0437\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0434\u0432\u043E\u0435.",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",paused:"\u041F\u0430\u0443\u0437\u0430",fps:"FPS",first_to:"\u0434\u043E {0} \u043F\u043E\u0431\u0435\u0434",bots_count:"{0} \u043D\u0430 {0}",kill_reward:"+${0} \u0437\u0430 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E",round_reward:"+${0}",hs:"\u0432 \u0433\u043E\u043B\u043E\u0432\u0443",wallbang:"\u0441\u043A\u0432\u043E\u0437\u044C \u0441\u0442\u0435\u043D\u0443",grenade:"\u0433\u0440\u0430\u043D\u0430\u0442\u0430",bomb:"\u0431\u043E\u043C\u0431\u0430",fall:"\u043F\u0430\u0434\u0435\u043D\u0438\u0435",suicide:"\u0441\u0430\u043C\u043E\u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E",lan_menu:"\u041F\u043E \u0441\u0435\u0442\u0438 (Wi-Fi)",lan_title:"\u0421\u0435\u0442\u0435\u0432\u0430\u044F \u0438\u0433\u0440\u0430",your_name:"\u0412\u0430\u0448\u0435 \u0438\u043C\u044F",create_game:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0433\u0440\u0443",create_lobby:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043B\u043E\u0431\u0431\u0438",save:"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",found_games:"\u0418\u0433\u0440\u044B \u0432 \u0441\u0435\u0442\u0438",searching:"\u041F\u043E\u0438\u0441\u043A \u0438\u0433\u0440 \u0432 \u0432\u0430\u0448\u0435\u0439 \u0441\u0435\u0442\u0438\u2026",no_discovery:"\u0410\u0432\u0442\u043E\u043F\u043E\u0438\u0441\u043A \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442 \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0434\u043B\u044F Android. \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0445\u043E\u0441\u0442\u0430 \u043D\u0438\u0436\u0435.",join_ip:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F \u043F\u043E \u0430\u0434\u0440\u0435\u0441\u0443",join:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F",lan_hint:"\u0412\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 Wi-Fi \u0438\u043B\u0438 \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u044B \u043A \u0442\u043E\u0447\u043A\u0435 \u0434\u043E\u0441\u0442\u0443\u043F\u0430 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430, \u043A\u043E\u0442\u043E\u0440\u044B\u0439 \u0441\u043E\u0437\u0434\u0430\u043B \u0438\u0433\u0440\u0443. \u0410\u0434\u0440\u0435\u0441 \u0445\u043E\u0441\u0442\u0430 \u043F\u043E\u043A\u0430\u0437\u0430\u043D \u0432 \u0435\u0433\u043E \u043B\u043E\u0431\u0431\u0438.",lan_web_hint:"\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0433\u0440\u0443 \u043C\u043E\u0436\u043D\u043E \u0432 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0438 \u0434\u043B\u044F Android \u0438\u043B\u0438 \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u0440\u0432\u0435\u0440 \u0434\u043B\u044F \u041F\u041A (strikezone-lan.jar).",players_n:"\u0438\u0433\u0440\u043E\u043A\u043E\u0432: {0}",in_progress:"\u0438\u0434\u0451\u0442 \u043C\u0430\u0442\u0447",lobby:"\u041B\u043E\u0431\u0431\u0438",host:"\u0445\u043E\u0441\u0442",address:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043B\u044F \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u044F",players:"\u0418\u0433\u0440\u043E\u043A\u0438",joining_match:"\u041C\u0430\u0442\u0447 \u0443\u0436\u0435 \u0438\u0434\u0451\u0442 \u2014 \u0432\u044B \u0432\u043E\u0439\u0434\u0451\u0442\u0435 \u0432 \u043D\u0435\u0433\u043E \u0447\u0435\u0440\u0435\u0437 \u0441\u0435\u043A\u0443\u043D\u0434\u0443.",waiting_host:"\u0416\u0434\u0451\u043C \u0445\u043E\u0441\u0442\u0430\u2026",start_match:"\u041D\u0430\u0447\u0430\u0442\u044C \u043C\u0430\u0442\u0447",edit_setup:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",leave_lobby:"\u0412\u044B\u0439\u0442\u0438",connecting:"\u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026",net_joined:"{0} \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F",net_left:"{0} \u043E\u0442\u043A\u043B\u044E\u0447\u0438\u043B\u0441\u044F (\u0435\u0433\u043E \u0437\u0430\u043C\u0435\u043D\u0438\u043B \u0431\u043E\u0442)",net_host_left:"\u0425\u043E\u0441\u0442 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u043B \u0438\u0433\u0440\u0443",net_lost:"\u0421\u0432\u044F\u0437\u044C \u0441 \u0445\u043E\u0441\u0442\u043E\u043C \u043F\u043E\u0442\u0435\u0440\u044F\u043D\u0430",net_no_host:"\u041D\u0430 \u044D\u0442\u043E\u043C \u0430\u0434\u0440\u0435\u0441\u0435 \u043D\u0435\u0442 \u0438\u0433\u0440\u044B",net_version:"\u0423 \u0445\u043E\u0441\u0442\u0430 \u0434\u0440\u0443\u0433\u0430\u044F \u0432\u0435\u0440\u0441\u0438\u044F \u0438\u0433\u0440\u044B",net_full:"\u0412 \u0438\u0433\u0440\u0435 \u043D\u0435\u0442 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u043C\u0435\u0441\u0442",host_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u0441\u043E\u0437\u0434\u0430\u0442\u044C \u0438\u0433\u0440\u0443: \u043F\u043E\u0440\u0442 47778 \u0437\u0430\u043D\u044F\u0442 \u0438\u043B\u0438 \u0441\u0435\u0442\u044C \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u0430",conn_failed:"\u041D\u0435 \u0443\u0434\u0430\u043B\u043E\u0441\u044C \u043F\u043E\u0434\u043A\u043B\u044E\u0447\u0438\u0442\u044C\u0441\u044F. \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0438 \u0447\u0442\u043E \u0432\u044B \u0432 \u043E\u0434\u043D\u043E\u0439 \u0441\u0435\u0442\u0438 Wi-Fi"},en:{lan_menu:"LAN (Wi-Fi)",lan_title:"LAN game",your_name:"Your name",create_game:"Create game",create_lobby:"Create lobby",save:"Save",found_games:"Games on your network",searching:"Looking for games on your network\u2026",no_discovery:"Auto-discovery works in the Android app. Enter the host address below.",join_ip:"Join by address",join:"Join",lan_hint:"All players must be on the same Wi-Fi network or connected to the hotspot of the phone that created the game. The host address is shown in its lobby.",lan_web_hint:"Games can be created in the Android app or with the PC server (strikezone-lan.jar).",players_n:"{0} players",in_progress:"match in progress",lobby:"Lobby",host:"host",address:"Join address",players:"Players",joining_match:"A match is running: you will join it in a moment.",waiting_host:"Waiting for the host\u2026",start_match:"Start match",edit_setup:"Settings",leave_lobby:"Leave",connecting:"Connecting\u2026",net_joined:"{0} joined",net_left:"{0} left (a bot took over)",net_host_left:"The host ended the game",net_lost:"Lost connection to the host",net_no_host:"There is no game at this address",net_version:"The host runs a different game version",net_full:"The game is full",host_failed:"Could not create a game: port 47778 is busy or the network is unavailable",conn_failed:"Could not connect. Check the address and that you are on the same Wi-Fi",play:"Play",settings:"Settings",stats:"Stats",help:"How to play",back:"Back",start:"Deploy",resume:"Resume",leave:"Quit to menu",rematch:"Rematch",menu:"Menu",map:"Map",mode:"Mode",team:"Team",bots:"Bots per team",difficulty:"Bot skill",rounds:"Rounds to win",ff:"Friendly fire",mode_bomb:"Bomb defusal",mode_dm:"Deathmatch",mode_gg:"Arms race",mode_bomb_d:"Terrorists plant C4, counter-terrorists defend sites A and B",mode_dm_d:"Instant respawn, free weapon choice",mode_gg_d:"Every kill upgrades your weapon. Win with a knife kill",team_auto:"Auto",team_t:"Terrorists",team_ct:"Counter-Terrorists",t:"Terrorists",ct:"Counter-Terrorists",t_short:"T",ct_short:"CT",easy:"Easy",normal:"Normal",hard:"Hard",expert:"Expert",on:"On",off:"Off",lang:"Language",volume:"Volume",voice:"Radio voice",sens:"Touch sensitivity",mouseSens:"Mouse sensitivity",fov:"Field of view",quality:"Graphics",q_auto:"Auto",q_low:"Low",q_medium:"Medium",q_high:"High",showFps:"Show FPS",aimAssist:"Aim assist",autoFire:"Auto-fire on target",invertY:"Invert Y",btnScale:"Button size",btnAlpha:"Button opacity",crosshair:"Crosshair color",vibrate:"Vibration",leftFire:"Left fire button",buy:"Buy",buy_pistols:"Pistols",buy_heavy:"Shotgun & SMG",buy_rifles:"Rifles",buy_gear:"Equipment",buy_nades:"Grenades",vest:"Kevlar",vesthelm:"Kevlar + helmet",kit:"Defuse kit",rebuy:"Rebuy",autobuy:"Autobuy",close:"Close",buy_closed:"Buy time is over",buy_zone:"You can only buy in the spawn zone",no_money:"Not enough money",team_only:"Not available for your team",have_it:"Already owned",money:"Money",hp:"Health",armor:"Armor",kills:"Kills",deaths:"Deaths",score:"Score",name:"Player",alive:"alive",dead:"dead",you:"You",round:"Round",freeze:"Buy time",bomb_planted:"Bomb has been planted!",bomb_defused:"Bomb defused",bomb_exploded:"Target destroyed",t_win:"Terrorists win",ct_win:"Counter-Terrorists win",draw:"Round draw",plant_hint:"Hold \u201CUse\u201D to plant the bomb",defuse_hint:"Hold \u201CUse\u201D to defuse",have_bomb:"You have the bomb: plant it at site A or B",bomb_dropped:"The bomb has been dropped!",bomb_picked:"You picked up the bomb",planting:"Planting\u2026",defusing:"Defusing\u2026",site:"Site",must_site:"The bomb must be planted at a bomb site",spectating:"Spectating",you_died:"You were killed",killed_by:"Killed by",respawn_in:"Respawn in",match_over:"Match over",victory:"Victory!",defeat:"Defeat",mvp:"MVP",your_stats:"Your result",accuracy:"Accuracy",headshots:"Headshots",wins:"Wins",losses:"Losses",matches:"Matches",plants:"Plants",defuses:"Defuses",playtime:"Time played",kd:"K/D",reset_stats:"Reset",pick_weapon:"Choose a weapon",level:"Level",leader:"Leader",time_left:"Time left",frag_limit:"Frag limit",reload:"Reload",jump:"Jump",crouch:"Crouch",use:"Use",scope:"Scope",drop:"Drop",go:"Go, go, go!",r_planted:"Bomb has been planted",r_twin:"Terrorists win",r_ctwin:"Counter-terrorists win",r_defused:"Bomb has been defused",r_cover:"Cover me",r_enemy:"Enemy spotted",r_flash:"Flashbang out!",r_smoke:"Smoke out!",r_he:"Fire in the hole!",tutorial_title:"Controls",help_text:"<b>Phone:</b> left half of the screen moves (joystick), right half looks around. Drag the fire button to aim while shooting. Right-side buttons: jump, crouch, reload, scope. Weapons are at the bottom, buy ($) and score at the top left.<br><br><b>PC:</b> WASD move, mouse look, LMB fire, RMB scope / knife stab, R reload, Space jump, Ctrl crouch, Shift walk quietly, E use (plant/defuse/pick up), 1\u20135 weapons, Q last weapon, G drop, B buy, Tab score, Esc pause.<br><br><b>Bomb defusal:</b> terrorists plant C4 at site A or B and protect it. Counter-terrorists win by eliminating the terrorists, defusing the bomb or running out the clock. Wins, kills and plants earn money. Kevlar reduces damage, a helmet protects the head, the defuse kit halves defuse time.",loading:"Loading\u2026",paused:"Paused",fps:"FPS",first_to:"first to {0}",bots_count:"{0} vs {0}",kill_reward:"+${0} for the kill",round_reward:"+${0}",hs:"headshot",wallbang:"wallbang",grenade:"grenade",bomb:"bomb",fall:"fall",suicide:"suicide"}},Wo="ru";function gd(s){Wo=Go[s]?s:"ru"}function Ze(){return Wo}function k(s,...t){var n,i;let e=(i=(n=Go[Wo]&&Go[Wo][s])!=null?n:Go.ru[s])!=null?i:s;return t.forEach((r,o)=>{e=e.split("{"+o+"}").join(r)}),e}function _x(s,t,e=1.4){if(t.p)return{x:t.p[0],y:t.p[1],z:t.p[2]};if(t.a!==void 0){let n=s.byId.get(t.a);return!n||n===s.listenerActor?null:{x:n.x,y:n.y+e,z:n.z}}return null}var yr=(s,t)=>t.o===void 0||t.o===s.player.id;function Xo(s,t){let e=s.ui,n=s.fx;switch(t.e){case"snd":if(!yr(s,t))return;vt.play(t.n,_x(s,t),t.v);return;case"shot":{let i=s.byId.get(t.a);if(!i)return;let r=i===s.listenerActor?null:{x:i.x,y:i.y+i.eyeHeight(),z:i.z};vt.shot(t.k,t.kind,r),i.fireAnim=1,t.sil||(i.model&&i.model.visible&&(i.model.userData.flash.visible=!0,i.flashOff=s.time+.05,i.model.userData.flash.material.rotation=Math.random()*6),i!==s.viewActor&&n.flashLight(t.m[0],t.m[1],t.m[2],2.5,16760944,.05));for(let o of t.ends)n.tracer(t.m[0],t.m[1],t.m[2],o[0],o[1],o[2]);t.sh&&s.ejectShell(i),e.shot(i,!!t.sil);return}case"imp":n.impact(t.p[0],t.p[1],t.p[2],t.n[0],t.n[1],t.n[2],t.s,t.dc!==0),t.r&&vt.play(t.r,{x:t.p[0],y:t.p[1],z:t.p[2]},.6);return;case"blood":n.bloodHit(t.p[0],t.p[1],t.p[2],t.d[0],t.d[1],t.d[2],!!t.h,s.grid);return;case"dmg":{let i=s.byId.get(t.v);if(!i)return;t.a===s.player.id&&t.v!==t.a&&(e.hitmarker(t.z==="head",!!t.kl),s.autopilot||e.stat("hits",1)),i===s.player&&(t.a!==void 0&&t.a!==t.v&&t.ax!==void 0&&e.damageDir(Math.atan2(t.ax-i.x,t.az-i.z),t.hp),e.hurt(t.hp),vt.play("hurt",null,.5));let r=i===s.listenerActor?null:{x:i.x,y:i.y+1.3,z:i.z};t.z==="head"?vt.play("headshot",r,t.hd?.7:1):t.z!=="blast"&&vt.play(t.k?"kevlar":"hit",r,.8);return}case"kill":{let i=s.byId.get(t.v),r=t.a!==void 0?s.byId.get(t.a):null;if(!i)return;e.killfeed(r,i,t.w,!!t.hs,!!t.wb),s.autopilot||(i===s.player&&(e.stat("deaths",1),e.died(r,t.w)),r===s.player&&r!==i&&!t.tk&&(e.stat("kills",1),t.hs&&e.stat("hs",1)));return}case"msg":if(!yr(s,t)||t.tm!==void 0&&s.player.team!==t.tm)return;e.message(k(t.k,...t.x||[]),t.d,t.c);return;case"say":if(t.tm!==void 0&&s.player.team!==t.tm)return;vt.say(k(t.k));return;case"money":yr(s,t)&&e.money(t.n);return;case"stat":yr(s,t)&&!s.autopilot&&e.stat(t.k,t.n);return;case"rstart":e.roundStart(t.r),vt.play("roundStart");return;case"rend":{let i=t.mvp!==void 0?s.byId.get(t.mvp):null;e.roundEnd(t.w,t.r,i);let r=s.player.team===t.w;vt.play(r?"win":"lose"),vt.say(k(t.w===Et.T?"r_twin":"r_ctwin")),s.autopilot||e.stat(r?"wins":"losses",1);return}case"mend":{let i=t.wa!==void 0?s.byId.get(t.wa):null,r=s.ffa?i===s.player:t.wt===s.player.team,o=s.actors.slice().sort((a,l)=>l.kills-a.kills||a.deaths-l.deaths);s.autopilot||(e.stat("matches",1),o[0]===s.player&&e.stat("mvp",1)),e.matchEnd({won:r,winnerTeam:t.wt,winnerActor:i,score:s.score.slice(),actors:o,mvp:o[0]}),vt.play(r?"win":"lose");return}case"expl":n.explosion(t.p[0],t.p[1],t.p[2],!!t.big),s.shake(t.p[0],t.p[2],t.big?60:14,t.big?1.6:.6);return;case"flashfx":n.flashLight(t.p[0],t.p[1]+.5,t.p[2],60,16777215,.25);for(let i=0;i<10;i++)n.add.emit(t.p[0],t.p[1]+.2,t.p[2],(Math.random()-.5)*8,Math.random()*6,(Math.random()-.5)*8,.4,.25,1,1,1,1,10);return;case"flashed":if(!yr(s,t))return;e.flash(t.d),vt.play("ring",null,Math.min(1,t.d/4));return;case"smoke":n.smoke(t.p[0],t.p[1],t.p[2],18);return;case"chat":{let i=s.byId.get(t.a);if(!i||s.ffa||i.team!==s.player.team)return;e.chat(i,t.txt!==void 0?t.txt:k(t.k));return}default:}}var yd=["ak47","m4a1","awp","mp5","p90","m3","galil","famas","scout","deagle"],qo=class{constructor({def:t,scene:e,fx:n,ui:i,setup:r,playerName:o,autopilot:a=!1,seed:l=Date.now(),role:c="solo",humans:h=[],roster:u=null,youId:d=null}){this.role=c,this.net=null,this.outAtk=[],this.nextObjId=1,this.def=t,this.grid=new _i(t),this.scene=e,this.fx=n,this.ui=i,this.setup=r,this.mode=r.mode,this.ffa=this.mode==="gg",this.ff=!!r.ff&&!this.ffa,this.rng=Ls(l),this.time=0,this.phase="freeze",this.phaseT=0,this.round=0,this.score=[0,0],this.lossStreak=[0,0],this.actors=[],this.grenades=[],this.drops=[],this.noises=[],this.calls=[null,null],this.bomb={planted:!1,dropped:!1},this.over=!1,this.autopilot=a,this.radioT=new Map,this.shakeAmt=0,this.matchTime=0,this.byId=new Map,u?this.syncRoster(u,d):this.createActors(o,h),this.siteEntries={}}fire(t){Xo(this,t),this.net&&this.net.events.push(t)}sound(t,e,n=1,i={}){let r={e:"snd",n:t,v:n};e&&e.id!==void 0?r.a=e.id:e&&(r.p=[e.x,e.y,e.z]),i.owner&&(r.o=e.id),i.pred&&(r.pr=1),this.fire(r)}msg(t,e,n,i={}){let r={e:"msg",k:t,d:e,c:n};i.to&&(r.o=i.to.id),i.team!==void 0&&(r.tm=i.team),i.args&&(r.x=i.args),this.fire(r)}createActors(t,e){let n=this.setup,i=[{name:t||k("you"),team:n.team,local:!0},...e],r=[0,0],o=h=>h==="t"?Et.T:h==="ct"?Et.CT:-1;for(let h of i)h.tm=this.ffa?-1:o(h.team),h.tm>=0&&r[h.tm]++;for(let h of i)h.tm>=0||(h.tm=r[0]===r[1]?this.rng()<.5?Et.T:Et.CT:r[0]<r[1]?Et.T:Et.CT,r[h.tm]++);for(let h of i){let u=new bi(h.name,h.tm,!1);h.local?(this.player=u,this.autopilot&&(u.brain=new Vi(u,this,n.diff))):(u.remote=!0,u.netId=h.netId),this.actors.push(u)}this.listenerActor=this.player,this.viewActor=this.player;let a=Vu.slice().sort(()=>this.rng()-.5),l=0,c=Math.max(1,Math.min(6,n.bots|0));for(let h of[Et.T,Et.CT])for(let u=r[h];u<c;u++){let d=new bi(a[l++%a.length],h,!0);d.brain=new Vi(d,this,n.diff),this.actors.push(d)}for(let h of this.actors)h.money=Vt.startMoney,this.addModel(h)}addModel(t){t.model=td(t.team),t.model.visible=!1,t.modelTeam=t.team,this.scene.add(t.model),this.byId.set(t.id,t)}rosterList(){return this.actors.map(t=>[t.id,t.name,t.team,t.isBot?1:0,t.isBot?0:1])}syncRoster(t,e){let n=new Set(t.map(i=>i[0]));for(let i of this.actors.slice())n.has(i.id)||(i.model&&this.scene.remove(i.model),this.actors.splice(this.actors.indexOf(i),1),this.byId.delete(i.id));for(let[i,r,o,a]of t){let l=this.byId.get(i);l||(l=new bi(r,o,!!a),l.id=i,l.alive=!1,l.deathT=99,this.actors.push(l),this.addModel(l)),l.name=r,l.isBot=!!a,(l.team!==o||l.modelTeam!==o)&&(l.team=o,this.scene.remove(l.model),this.addModel(l))}e!=null&&(this.player=this.byId.get(e)),(!this.listenerActor||!n.has(this.listenerActor.id))&&(this.listenerActor=this.player),(!this.viewActor||!n.has(this.viewActor.id))&&(this.viewActor=this.player)}isEnemy(t,e){return!t||!e||t===e?!1:this.ffa?!0:t.team!==e.team}spawnCenter(t){let e=t===Et.T?this.def.spawnT:this.def.spawnCT;return this.grid.center(e[0]+e[2]>>1,e[1]+e[3]>>1)}siteEntry(t,e){if(!this.siteEntries[t]){let i=this.def.sites[t],r=this.grid.center(i[0]+i[2]>>1,i[1]+i[3]>>1),o=this.spawnCenter(Et.T),a=this.grid.findPath(r.x,r.z,o.x,o.z)||[],l=[],c=0,h=r.x,u=r.z;for(let d of a)c+=Math.hypot(d.x-h,d.z-u),h=d.x,u=d.z,c>8&&c<30&&l.push(d);this.siteEntries[t]=l.length?l:[o]}let n=this.siteEntries[t];return n[e()*n.length|0]}siteAt(t,e){for(let[n,i]of Object.entries(this.def.sites))if(this.grid.inRect(t,e,i))return n;return null}inBuyZone(t){if(this.mode!=="bomb")return!0;let e=t.team===Et.T?this.def.spawnT:this.def.spawnCT;return this.grid.inRect(t.x,t.z,[e[0]-3,e[1]-3,e[2]+3,e[3]+3])}canBuy(t){return!t.alive||this.mode==="gg"?!1:this.mode==="dm"?!0:(this.phase==="freeze"||this.phase==="live"&&this.time-this.liveStart<Vt.buyTime)&&this.inBuyZone(t)}buyError(t,e){if(this.mode==="gg")return"buy_closed";if(this.mode==="bomb"){if(!(this.phase==="freeze"||this.phase==="live"&&this.time-this.liveStart<Vt.buyTime))return"buy_closed";if(!this.inBuyZone(t))return"buy_zone"}let n=fe[e],i=pr[e],r=n||i;if(!r)return"no_money";if(r.team!==void 0&&r.team>=0&&r.team!==t.team&&this.mode==="bomb")return"team_only";let o=this.mode==="dm"?0:r.price;if(e==="vest"&&t.armor>=100||e==="vesthelm"&&t.armor>=100&&t.helmet||e==="kit"&&t.kit||n&&n.kind==="grenade"&&t.nades[n.nade]>=(n.max||1)||n&&n.slot<=1&&t.slots[n.slot]&&t.slots[n.slot].key===e)return"have_it";let a=o;return e==="vesthelm"&&t.armor>=100&&!t.helmet&&(a=350),t.money<a?"no_money":null}buy(t,e,n=!1){let i=this.buyError(t,e);if(i)return!n&&!t.isBot&&(this.msg(i,1.5,"warn",{to:t}),this.sound("deny",t,1,{owner:!0})),!1;let r=fe[e],o=this.mode==="dm"?0:(r||pr[e]).price;return e==="vesthelm"&&t.armor>=100&&!t.helmet&&this.mode!=="dm"&&(o=350),t.money-=o,e==="vest"?t.armor=100:e==="vesthelm"?(t.armor=100,t.helmet=!0):e==="kit"?t.kit=!0:r.kind==="grenade"?(t.nades[r.nade]++,t.nadeKey||(t.nadeKey=r.nade)):(t.slots[r.slot]&&this.dropWeapon(t,r.slot,!0),t.slots[r.slot]=Ln(e),t.brain&&fe[e].silencer&&this.rng()<.5&&(t.slots[r.slot].silenced=!0),t.slot===r.slot?t.switchT=.6:t.select(r.slot),this.mode==="dm"&&r.slot===0&&(t.dmChoice=e)),t.isBot||(this.sound("buy",t,1,{owner:!0}),t.buyingRebuy||(t.roundBuys=t.roundBuys||[],t.roundBuys.push(e),t.lastBuys=t.roundBuys.slice())),!0}rebuy(t=this.player){if(t.lastBuys){t.buyingRebuy=!0;for(let e of t.lastBuys)this.buy(t,e,!0);t.buyingRebuy=!1}}autobuy(t=this.player){let e=t.team===Et.T?"ak47":"m4a1",n=[e,"vesthelm",t.team===Et.CT?"kit":null,"he","flash","smoke"];!t.slots[0]&&t.money<fe[e].price&&n.unshift(t.team===Et.T?"galil":"famas","mp5");for(let i of n)i&&(i===e||i==="galil"||i==="famas"||i==="mp5"?t.slots[0]||this.buy(t,i,!0):this.buy(t,i,!0));this.mode==="bomb"&&t.money<650&&!t.armor&&this.buy(t,"vest",!0)}start(){this.round=0,this.score=[0,0];for(let t of this.actors)t.kills=t.deaths=t.score=t.hsKills=t.dmgDealt=0,t.money=Vt.startMoney,t.clearInventory(),t.ggLevel=0;if(this.mode==="bomb")this.startRound();else{this.phase="live",this.phaseT=this.mode==="dm"?Vt.dmTime:1/0,this.liveStart=this.time;for(let t of this.actors)this.respawn(t);this.fire({e:"say",k:"go"}),this.msg(this.mode==="dm"?"mode_dm":"mode_gg",2.5,"big")}}defaultPistol(t){return t.team===Et.T?"glock":"usp"}startRound(){this.round++;for(let n of this.actors)n.roundBuys=[];this.phase="freeze",this.phaseT=Vt.freezeTime,this.roundStart=this.time,this.liveStart=this.time+Vt.freezeTime,this.bomb.model&&this.scene.remove(this.bomb.model),this.bomb={planted:!1,dropped:!1},this.pendingEnd=!1,this.clearDrops();for(let n of this.grenades)n.model&&this.scene.remove(n.model);this.grenades.length=0,this.fx.clear(),this.calls=[null,null],this.tPlan=Object.keys(this.def.sites)[this.rng()*Object.keys(this.def.sites).length|0];let t=new Set;for(let n of this.actors){let i=n.alive&&this.round>1;if(!i){let d=n.money;n.clearInventory(),n.money=d,n.slots[1]=Ln(this.defaultPistol(n))}n.hasBomb=!1;let r=100,o=i?n.armor:0,a=i?n.helmet:!1,l=i?n.kit:!1;n.resetBody(),n.hp=r,n.armor=o,n.helmet=a,n.kit=l,(!this.round||this.round===1)&&(n.armor=0,n.helmet=!1,n.kit=!1);for(let d of[0,1])n.slots[d]&&(n.slots[d].reserve=Math.max(n.slots[d].reserve,n.slots[d].def.reserve));let c=n.team===Et.T?this.def.spawnT:this.def.spawnCT,h=this.grid.randomCellIn(c,this.rng,(d,p)=>t.has(d+","+p));t.add(Math.floor(h.x/yt)+","+Math.floor(h.z/yt)),n.x=h.x+(this.rng()-.5)*.6,n.z=h.z+(this.rng()-.5)*.6,n.y=this.grid.groundUnder(n.x,n.z,re.radius);let u=this.spawnCenter(n.team===Et.T?Et.CT:Et.T);n.yaw=Math.atan2(-(u.x-n.x),-(u.z-n.z))+(this.rng()-.5)*.6,n.pitch=0,n.slot=n.bestSlot(),n.lastSlot=2,n.roundKills=0,n.tp=(n.tp||0)+1,n.brain&&n.brain.reset()}let e=this.actors.filter(n=>n.team===Et.T);if(e.length&&this.mode==="bomb"){let n=e[this.rng()*e.length|0];n.hasBomb=!0,!n.isBot&&!(n===this.player&&this.autopilot)&&this.msg("have_bomb",4,"info",{to:n})}for(let n of this.actors)n.brain&&n.brain.buy();this.fire({e:"rstart",r:this.round})}endRound(t,e){if(this.phase==="post")return;this.phase="post",this.phaseT=Vt.roundEndTime,this.score[t]++;let n=1-t;this.lossStreak[t]=0,this.lossStreak[n]++;let i=e==="bomb"||e==="defuse"?Vt.winBomb:e==="time"?Vt.winTime:Vt.winElim,r=cd(this.lossStreak[n]);for(let h of this.actors)this.addMoney(h,h.team===t?i:r);let o=this.actors.filter(h=>h.team===t).sort((h,u)=>u.roundKills-h.roundKills)[0];o&&o.roundKills>0&&o.mvps++;let a=t===Et.T?"t_win":"ct_win";this.lastWinner=t;let l={e:"rend",w:t,r:e};o&&o.roundKills>0&&(l.mvp=o.id),this.fire(l);let c=this.setup.rounds;return(this.score[t]>=c||this.round>=c*2-1)&&(this.pendingEnd=!0),a}endMatch(t,e){if(this.over)return;this.over=!0,this.phase="over";let n={e:"mend",wt:t};e&&(n.wa=e.id),this.fire(n)}addMoney(t,e){let n=t.money;t.money=Math.max(0,Math.min(Vt.maxMoney,t.money+e)),!t.isBot&&t.money!==n&&this.fire({e:"money",o:t.id,n:t.money-n})}respawn(t){t.resetBody(),t.clearInventory();let e=this.grid.floorCells(),n=null,i=-1;for(let r=0;r<16;r++){let o=e[this.rng()*e.length|0],a=this.grid.center(o%this.grid.w,o/this.grid.w|0),l=1/0;for(let c of this.actors)c!==t&&c.alive&&this.isEnemy(t,c)&&(l=Math.min(l,Math.hypot(c.x-a.x,c.z-a.z)));l>i&&(i=l,n=a)}if(t.x=n.x,t.z=n.z,t.y=this.grid.groundUnder(t.x,t.z,re.radius),t.yaw=this.rng()*Math.PI*2,t.protectT=2,this.mode==="gg")this.giveGG(t);else{t.slots[1]=Ln("deagle"),t.armor=100,t.helmet=!0;let r=t.dmChoice?t.dmChoice:t.brain?t.dmPick||(t.dmPick=yd[this.rng()*yd.length|0]):"ak47";fe[r].slot===0&&(t.slots[0]=Ln(r)),t.nades.he=1,t.slot=t.bestSlot()}t.switchT=.4,t.tp=(t.tp||0)+1,t.brain&&t.brain.reset()}giveGG(t){let e=xi[Math.min(t.ggLevel,xi.length-1)];if(t.slots[0]=null,t.slots[1]=null,e!=="knife"){let n=Ln(e);n.reserve=999,t.slots[fe[e].slot]=n}t.slot=t.bestSlot(),t.switchT=.4}noise(t,e,n,i,r){this.noises.push({x:t,y:e,z:n,r:i,src:r,t:this.time}),this.noises.length>60&&this.noises.splice(0,this.noises.length-60)}callout(t,e,n){this.calls[t]={x:e,z:n,t:this.time}}radio(t,e){if(!t||this.ffa)return;let n=this.radioT.get(t.id)||-10;this.time-n<6||(this.radioT.set(t.id,this.time),this.fire({e:"chat",a:t.id,k:e}))}stat(t,e,n=this.player,i=!1){if(n.isBot)return;let r={e:"stat",o:n.id,k:t,n:e};i&&(r.pr=1,r.a=n.id),this.fire(r)}muzzleOf(t){let e=Math.cos(t.pitch),n=-Math.sin(t.yaw)*e,i=Math.sin(t.pitch),r=-Math.cos(t.yaw)*e,o=Math.cos(t.yaw),a=-Math.sin(t.yaw),l=t===this.player&&!this.thirdPerson?.55:.75;return{x:t.x+n*l+o*.12,y:t.y+t.eyeHeight()+i*l-.12,z:t.z+r*l+a*.12}}ejectShell(t){let e=this.listenerActor;if(Math.hypot(t.x-e.x,t.z-e.z)>18)return;let n=Math.cos(t.yaw),i=-Math.sin(t.yaw),r=-Math.sin(t.yaw),o=-Math.cos(t.yaw),a=t===this.viewActor,l=t.x+n*(a?.18:.15)+r*(a?.35:.5),c=t.y+t.eyeHeight()-(a?.12:.25),h=t.z+i*(a?.18:.15)+o*(a?.35:.5);this.fx.norm.emit(l,c,h,n*2.2+(this.rng()-.5),1.8+this.rng(),i*2.2+(this.rng()-.5),.6,.035,.85,.62,.22,1,9),a&&Math.random()<.4&&setTimeout(()=>vt.play("brass",null,.5),450)}onDamage(t,e,n,i,r,o){let a={e:"dmg",v:t.id,hp:n,z:i,hd:o?1:0,k:t.armor>0&&i!=="legs"?1:0,kl:t.hp<=0?1:0};e&&(a.a=e.id,a.ax=Math.round(e.x*100)/100,a.az=Math.round(e.z*100)/100),this.fire(a),t.brain&&e&&(t.brain.heard={x:e.x,y:e.y,z:e.z,t:this.time})}kill(t,e,n,{hs:i=!1,wallbang:r=!1}={}){if(!t.alive)return;t.alive=!1,t.hp=0,t.deaths++,t.deathT=0,t.deathDir=this.rng()<.5?1:-1,t.plantT=0,t.defuseT=0,t.respawnT=Vt.dmRespawn,this.bomb.defuser===t&&(this.bomb.defuser=null);let o=e&&e!==t&&!this.isEnemy(e,t);e&&e!==t?o?(e.kills--,this.addMoney(e,-Vt.killReward)):(e.kills++,e.roundKills++,i&&e.hsKills++,this.mode==="bomb"&&this.addMoney(e,fe[n]&&fe[n].kill||Vt.killReward)):(!e||e===t)&&(t.kills=Math.max(0,t.kills-(this.mode==="bomb"?0:1)));let a={e:"kill",v:t.id,w:n,hs:i?1:0,wb:r?1:0,tk:o?1:0};if(e&&(a.a=e.id),this.fire(a),this.mode==="bomb"){let l=t.slots[0]?0:t.slots[1]?1:-1;l>=0&&this.dropWeapon(t,l,!1),t.hasBomb&&this.dropBomb(t);let c=t.firstNade();c&&this.rng()<.5&&this.spawnDrop(c,t,null)}this.mode==="gg"&&e&&e!==t&&!o&&this.ggProgress(e,t,n),this.mode==="dm"&&e&&e!==t&&!o&&(this.score[e.team]++,this.score[e.team]>=Vt.dmFragLimit&&this.endMatch(e.team,null))}ggProgress(t,e,n){if(n==="knife"&&e.ggLevel>0&&t.ggLevel!==xi.length-1&&e.ggLevel--,t.ggLevel>=xi.length-1){this.endMatch(t.team,t);return}t.ggLevel++,this.sound("levelUp",t,1,{owner:!0}),t.alive&&this.giveGG(t)}spawnDrop(t,e,n){let i=vi(t);i.scale.setScalar(1.25),this.scene.add(i);let r={x:-Math.sin(e.yaw),z:-Math.cos(e.yaw)},o={id:this.nextObjId++,key:t,w:n,model:i,x:e.x+r.x*.3,y:e.y+1.1,z:e.z+r.z*.3,vx:r.x*3+e.vx*.4,vy:1.5,vz:r.z*3+e.vz*.4,rest:!1,by:e,t:this.time};return this.drops.push(o),o}dropWeapon(t,e,n){let i=t.slots[e];if(!i||i.key==="knife")return null;t.slots[e]=null;let r=this.spawnDrop(i.key,t,i);return!n&&t.slot===e&&t.select(t.bestSlot()),n&&(r.vx*=.5),r}dropBomb(t){if(!t.hasBomb)return;t.hasBomb=!1,t.slot===4&&t.select(t.bestSlot());let e=this.spawnDrop("bomb",t,null);e.isBomb=!0,this.bomb.dropped=!0,this.bomb.dropRef=e,this.bomb.x=e.x,this.bomb.z=e.z,this.bomb.y=e.y,this.msg("bomb_dropped",2,"warn",{team:Et.T})}clearDrops(){for(let t of this.drops)this.scene.remove(t.model);this.drops.length=0}updateDrops(t){for(let e=this.drops.length-1;e>=0;e--){let n=this.drops[e];if(!n.rest){n.vy-=20*t;let i=n.x+n.vx*t,r=n.z+n.vz*t;this.grid.topAt(i,n.z)>n.y?n.vx=-n.vx*.3:n.x=i,this.grid.topAt(n.x,r)>n.y?n.vz=-n.vz*.3:n.z=r,n.y+=n.vy*t;let o=this.grid.topAt(n.x,n.z)+.04;n.y<=o&&(n.y=o,n.vy=0,n.vx*=.5,n.vz*=.5,Math.hypot(n.vx,n.vz)<.2&&(n.rest=!0)),n.model.position.set(n.x,n.y,n.z),n.model.rotation.set(0,n.t*7%6.28,Math.PI/2*(n.isBomb?0:1)),n.isBomb&&(this.bomb.x=n.x,this.bomb.y=n.y,this.bomb.z=n.z)}for(let i of this.actors)if(!(!i.alive||Math.hypot(i.x-n.x,i.z-n.z)>1||Math.abs(i.y-n.y)>1.3)&&!(n.by===i&&this.time-n.t<1.2)&&this.tryPickup(i,n,!1)){this.drops.splice(e,1),this.scene.remove(n.model);break}}}tryPickup(t,e,n){if(e.isBomb)return t.team!==Et.T||this.mode!=="bomb"?!1:(t.hasBomb=!0,this.bomb.dropped=!1,this.bomb.dropRef=null,t.isBot||(this.msg("bomb_picked",2,"info",{to:t}),this.sound("pickup",t,1,{owner:!0})),!0);let i=fe[e.key];if(i.kind==="grenade")return t.nades[i.nade]>=(i.max||1)?!1:(t.nades[i.nade]++,t.nadeKey||(t.nadeKey=i.nade),this.sound("pickup",t,1,{owner:!0}),!0);if(this.mode==="gg")return!1;let r=i.slot;if(t.slots[r]){if(!n)return!1;this.dropWeapon(t,r,!0)}return t.slots[r]=e.w||Ln(e.key),this.sound("pickup",t,1,{owner:!0}),(t.slot===r||n||r===0&&t.slot!==3&&t.slot!==4)&&(t.slot=-1,t.select(r)),!0}nearestDrop(t){let e=null,n=1.8;for(let i of this.drops){if(i.isBomb)continue;let r=Math.hypot(t.x-i.x,t.z-i.z);r<n&&Math.abs(t.y-i.y)<1.3&&(n=r,e=i)}return e}plant(t,e){t.hasBomb=!1,t.plantT=0,t.select(t.bestSlot()),this.bomb={planted:!0,dropped:!1,x:t.x,y:this.grid.topAt(t.x,t.z)+.07,z:t.z,site:e,timer:Vt.bombTime,defuser:null,beepT:0,planter:t},this.makeBombModel(t.yaw);for(let n of this.actors)n.team===Et.T&&this.addMoney(n,Vt.plantReward);this.stat("plants",1,t),t.score+=2,this.sound("planted",{x:t.x,y:t.y,z:t.z},1),this.fire({e:"say",k:"r_planted"}),this.msg("bomb_planted",3,"big"),this.noise(t.x,t.y,t.z,100,t)}makeBombModel(t=0){let e=this.bomb,n=vi("bomb");n.scale.setScalar(1.7),n.position.set(e.x,e.y,e.z),n.rotation.y=t;let i=new zi(new gi({map:Pn("spark"),color:16719904,blending:Cn,depthWrite:!1,transparent:!0}));i.scale.set(.35,.35,1),i.position.set(0,.08,0),n.add(i),this.scene.add(n),e.model=n,e.led=i}bombBeep(t){let e=this.bomb;if(!e.planted||!e.led)return;let n=Math.max(0,e.timer/Vt.bombTime);e.beepT=(e.beepT||0)-t,e.beepT<=0&&(e.beepT=.12+n*.95,vt.play("beep",{x:e.x,y:e.y+.2,z:e.z},1.2),e.led.visible=!0,e.ledOff=this.time+.08),e.ledOff&&this.time>e.ledOff&&(e.led.visible=!1)}updateBomb(t){let e=this.bomb;if(!(!e.planted||this.phase!=="live")){if(e.timer-=t,this.bombBeep(t),e.defuser){let n=e.defuser;n.alive||(e.defuser=null,n.defuseT=0)}e.timer<=0&&this.explodeBomb()}}explodeBomb(){let t=this.bomb;t.planted=!1,t.exploded=!0,this.scene.remove(t.model),this.sound("bombExplode",{x:t.x,y:t.y+1,z:t.z},2),this.fire({e:"expl",p:[t.x,t.y,t.z],big:1});for(let e of this.actors){if(!e.alive)continue;let n=Math.hypot(e.x-t.x,e.z-t.z,(e.y-t.y)*.5);if(n>Vt.bombRadius)continue;let i=Vt.bombDamage*Math.pow(1-n/Vt.bombRadius,2);i>=1&&Gi(this,e,null,i,"blast",.75,"bomb")}this.msg("bomb_exploded",3,"big"),this.endRound(Et.T,"bomb")}defuse(t){let e=this.bomb;e.planted=!1,e.defused=!0,t.defuseT=0,e.led.visible=!1,this.stat("defuses",1,t),t.score+=2,this.sound("defused",{x:e.x,y:e.y,z:e.z},1),this.fire({e:"say",k:"r_defused"}),this.msg("bomb_defused",3,"big"),this.endRound(Et.CT,"defuse")}shake(t,e,n,i){let r=this.listenerActor,o=Math.hypot(r.x-t,r.z-e);o<n&&(this.shakeAmt=Math.max(this.shakeAmt,i*(1-o/n)))}makeNadeModel(t){let e=vi(t);return e.scale.setScalar(1.3),this.scene.add(e),e}applyMove(t,e,n){let i=t.maxSpeed();t.crouching=!!e.crouch;let r=t.crouching?1:0;t.crouch+=Math.sign(r-t.crouch)*Math.min(Math.abs(r-t.crouch),n*7),e.walk&&(i*=re.walkMul),t.crouch>.5&&(i*=re.crouchMul),(t.plantT>0||t.defuseT>0||this.phase==="freeze")&&(i=0),t.stamina=Math.min(1,t.stamina+n*1.6),i*=t.stamina;let o=e.wx||0,a=e.wz||0,l=Math.hypot(o,a);l>1&&(o/=l,a/=l);let c=Math.min(1,l);if(t.onGround){let u=Math.hypot(t.vx,t.vz);if(u>0){let d=Math.max(u,2)*re.friction*n,p=Math.max(0,u-d)/u;t.vx*=p,t.vz*=p}if(c>0){let d=o/(l||1),p=a/(l||1),g=i*c,y=t.vx*d+t.vz*p,m=g-y;if(m>0){let f=Math.min(m,re.accel*n*Math.max(1,g/4));t.vx+=d*f,t.vz+=p*f}}e.jump&&t.alive&&this.phase!=="freeze"&&t.plantT<=0&&t.defuseT<=0&&(t.vy=re.jumpSpeed*(t.crouch>.5?.9:1),t.onGround=!1,this.sound("jump",t,.5,{owner:!0,pred:!0}))}else if(c>0){let u=o/(l||1),d=a/(l||1),p=t.vx*u+t.vz*d,g=Math.min(1.2,i*c)-p;if(g>0){let y=Math.min(g,re.airAccel*n*i);t.vx+=u*y,t.vz+=d*y}}t.fallSpeed=0,this.grid.move(t,n)&&(t.stamina=Math.min(t.stamina,.72),t.fallSpeed>11&&(this.role==="client"?t.pendingFall=t.fallSpeed:Gi(this,t,null,(t.fallSpeed-11)*10,"legs",1,"fall")),t.fallSpeed>4&&(this.sound("land",t,.7,{pred:!0}),this.noise(t.x,t.y,t.z,14,t))),t.speed2d=Math.hypot(t.vx,t.vz),this.footsteps(t,n,e.walk)}footsteps(t,e,n){t.onGround&&t.speed2d>3.3&&!n&&t.crouch<.5&&(t.stepAcc+=t.speed2d*e,t.stepAcc>2.3&&(t.stepAcc=0,this.sound("step",t,t===this.listenerActor?.25:.9,{pred:!0}),this.noise(t.x,t.y,t.z,20,t)))}remoteInput(t,e){let n=t.net||(t.net={atk:[],slotSeq:-1,rl:0,ss:-1});Array.isArray(e.p)&&e.p.length===3&&e.p.every(Number.isFinite)&&(n.pos=e.p,n.vel=Array.isArray(e.v)?e.v:[0,0,0],n.og=!!e.g),Number.isFinite(e.y)&&(t.yaw=e.y),Number.isFinite(e.pt)&&(t.pitch=Math.max(-1.5,Math.min(1.5,e.pt))),n.cr=Number.isFinite(e.c)?Math.max(0,Math.min(1,e.c)):0,n.walk=!!e.w,n.use=!!e.u,e.up&&(n.usePressed=!0),e.dr&&(n.drop=!0),e.ss!==void 0&&e.ss!==n.ss&&(n.ss=e.ss,n.slot=e.s,n.nk=e.nk),e.rl!==void 0&&e.rl!==n.rl&&(n.rl=e.rl,n.reload=!0),n.sil=e.sl,n.scope=e.sc,Array.isArray(e.at)&&n.atk.push(...e.at.slice(0,20)),Number.isFinite(e.fall)&&(n.fall=Math.max(n.fall||0,e.fall))}remoteStep(t,e){var o;let n=t.net;if(!n)return;if(n.pos){let[a,l,c]=n.pos,h=Math.max(.05,this.time-((o=n.applied)!=null?o:this.time-.1)),d=this.phase==="freeze"||t.plantT>0||t.defuseT>0?.35:(t.maxSpeed()*1.6+2)*h+.8;Math.hypot(a-t.x,c-t.z)<=d&&!this.grid.blockedAt(a,c,re.radius*.8,l,l+1)&&l>=this.grid.groundUnder(a,c,re.radius*.5)-.6?(t.x=a,t.y=l,t.z=c,t.vx=n.vel[0]||0,t.vy=n.vel[1]||0,t.vz=n.vel[2]||0,t.onGround=n.og):(t.tp=(t.tp||0)+1,t.vx=t.vz=0),n.pos=null,n.applied=this.time}if(t.crouch=n.cr,t.speed2d=Math.hypot(t.vx,t.vz),this.footsteps(t,e,n.walk),n.fall>11&&Gi(this,t,null,(n.fall-11)*10,"legs",1,"fall"),n.fall=0,!t.alive)return;n.slot!==void 0&&n.slot!==null&&(n.slot===3&&n.nk&&t.nades[n.nk]>0&&(t.nadeKey=n.nk),t.slot!==n.slot&&t.select(n.slot),n.slot=null);let i=t.w;i.def.silencer&&n.sil!==void 0&&(i.silenced=!!n.sil),i.def.kind==="sniper"&&(t.scope=n.scope|0);let r={fire:!1,alt:!1,reload:!!n.reload,use:n.use,usePressed:!!n.usePressed,drop:!!n.drop};this.objectives(t,r,e),t.plantT<=0&&t.defuseT<=0&&gr(this,t,r,e);for(let a of n.atk)fd(this,t,a);n.atk.length=0,this.useAndDrop(t,r),n.reload=!1,n.usePressed=!1,n.drop=!1}useAndDrop(t,e){if(e.usePressed&&t.plantT<=0&&t.defuseT<=0){let n=this.nearestDrop(t);n&&this.tryPickup(t,n,!0)&&(this.drops.splice(this.drops.indexOf(n),1),this.scene.remove(n.model))}e.drop&&(t.slot===4&&t.hasBomb?this.dropBomb(t):t.slot<=1&&this.dropWeapon(t,t.slot,!1))}separate(){let t=this.actors;for(let e=0;e<t.length;e++){let n=t[e];if(n.alive)for(let i=e+1;i<t.length;i++){let r=t[i];if(!r.alive||Math.abs(n.y-r.y)>1.6)continue;let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a),c=re.radius*2;if(l>=c||l<1e-5)continue;let h=(c-l)/2,u=o/l,d=a/l;this.grid.blockedAt(n.x-u*h,n.z-d*h,re.radius,n.y,n.y+1)||(n.x-=u*h,n.z-=d*h),this.grid.blockedAt(r.x+u*h,r.z+d*h,re.radius,r.y,r.y+1)||(r.x+=u*h,r.z+=d*h)}}}objectives(t,e,n){if(this.mode!=="bomb"||this.phase!=="live"||!t.alive)return;let i=this.bomb;if(t.hasBomb&&!i.planted){let r=e.use||t.slot===4&&e.fire,o=this.siteAt(t.x,t.z);r&&o&&t.onGround?(t.slot!==4&&(t.select(4),t.switchT=0),t.plantT===0&&this.sound("plant",t,.8),t.plantT+=n,t.plantT>=Vt.plantTime&&this.plant(t,o)):(r&&!o&&!t.isBot&&this.time-(t.siteHintT||-9)>2&&(t.siteHintT=this.time,this.msg("must_site",1.5,"warn",{to:t})),t.plantT=0)}if(i.planted&&t.team===Et.CT){let r=Math.hypot(t.x-i.x,t.z-i.z)<1.6&&Math.abs(t.y-i.y)<1.4;e.use&&r&&(!i.defuser||i.defuser===t)?(i.defuser||this.sound("defuse",{x:i.x,y:i.y,z:i.z},.8),i.defuser=t,t.defuseT+=n,t.defuseT>=(t.kit?Vt.defuseKitTime:Vt.defuseTime)&&this.defuse(t)):i.defuser===t&&(i.defuser=null,t.defuseT=0)}}checkRoundEnd(){if(this.mode!=="bomb"||this.phase!=="live")return;let t=this.actors.some(n=>n.alive&&n.team===Et.T);if(!this.actors.some(n=>n.alive&&n.team===Et.CT)){this.endRound(Et.T,"elim");return}if(!t&&!this.bomb.planted){this.endRound(Et.CT,"elim");return}!this.bomb.planted&&this.phaseT<=0&&this.endRound(Et.CT,"time")}update(t,e){if(this.role==="client"){this.client&&this.client.step(t,e);return}if(this.over){this.animate(t);return}if(this.time+=t,this.matchTime+=t,this.shakeAmt=Math.max(0,this.shakeAmt-t*1.8),this.phase==="freeze")this.phaseT-=t,this.phaseT<=0&&(this.phase="live",this.phaseT=Vt.roundTime,this.liveStart=this.time,this.fire({e:"say",k:"go"}),this.msg("go",1.5,"big"));else if(this.phase==="live"){if(this.bomb.planted||(this.phaseT-=t),this.mode==="dm"&&this.phaseT<=0){let n=this.score[0]===this.score[1]?-1:this.score[0]>this.score[1]?0:1;this.endMatch(n,null)}}else if(this.phase==="post"&&(this.phaseT-=t,this.phaseT<=0)){if(this.pendingEnd){let n=this.score[0]===this.score[1]?-1:this.score[0]>this.score[1]?0:1;this.endMatch(n,null);return}this.startRound()}for(let n of this.actors){if(!n.alive){n.deathT+=t,this.mode!=="bomb"&&!this.over&&(n.respawnT-=t,n.respawnT<=0&&this.respawn(n));continue}if(n.protectT>0&&(n.protectT-=t),n.flashT>0&&(n.flashT-=t),n.remote){this.remoteStep(n,t);continue}let i;n.brain?i=n.brain.think(t):n===this.player?i=e||{wx:0,wz:0}:i={wx:0,wz:0},i.slot!==null&&i.slot!==void 0&&n.select(i.slot),this.applyMove(n,i,t),this.objectives(n,i,t),n.plantT<=0&&n.defuseT<=0&&gr(this,n,i,t),this.useAndDrop(n,i)}this.separate(),md(this,t),this.updateDrops(t),this.updateBomb(t),this.checkRoundEnd(),this.noises.length&&this.time-this.noises[0].t>2&&this.noises.shift(),this.animate(t)}animate(t){for(let e of this.actors){let n=e.model;e.modelTeam!==e.team&&(this.scene.remove(e.model),this.addModel(e));let i=e===this.viewActor&&!this.thirdPerson&&e.alive;if(n.visible=!i&&(e.alive||e.deathT<12)&&this.phase!=="none",!n.visible)continue;n.position.set(e.x,e.y,e.z),n.rotation.y=e.yaw;let r=e.alive?zo(e.w):n.userData.gunKey;ed(n,e.alive?r:null),e.flashOff&&this.time>e.flashOff&&(n.userData.flash.visible=!1,e.flashOff=0),nd(n,{speed:e.alive?e.speed2d:0,crouch:e.crouch,air:!e.onGround,pitch:e.pitch,dead:!e.alive,deathT:e.deathT,deathDir:e.deathDir,dt:t,fireT:e.fireAnim})}}dispose(){for(let t of this.actors)t.model&&this.scene.remove(t.model);this.clearDrops();for(let t of this.grenades)t.model&&this.scene.remove(t.model);this.bomb.model&&this.scene.remove(this.bomb.model)}};var xd="strikezone.v1",vx={lang:typeof navigator!="undefined"&&navigator.language&&!navigator.language.startsWith("ru")?"en":"ru",volume:.8,voice:!0,sens:1,mouseSens:1,fov:90,quality:"auto",showFps:!1,aimAssist:!0,autoFire:!1,name:"",lastIp:"",invertY:!1,btnScale:1,btnAlpha:.6,crosshair:"green",vibrate:!0,leftFire:!0},bx={map:"sands",mode:"bomb",team:"auto",bots:4,diff:"normal",rounds:8,ff:!1},Nc={kills:0,deaths:0,hs:0,shots:0,hits:0,wins:0,losses:0,matches:0,plants:0,defuses:0,mvp:0,time:0};function Mx(){try{return JSON.parse(localStorage.getItem(xd))||{}}catch{return{}}}var Yo=Mx(),Xt={settings:{...vx,...Yo.settings||{}},setup:{...bx,...Yo.setup||{}},stats:{...Nc,...Yo.stats||{}},tutorialSeen:!!Yo.tutorialSeen,save(){try{localStorage.setItem(xd,JSON.stringify({settings:this.settings,setup:this.setup,stats:this.stats,tutorialSeen:this.tutorialSeen}))}catch{}}};var at=s=>document.getElementById(s),he=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),_d={knife:"\u{1F52A}",bomb:"C4",he:"HE",fall:"\u2193",flash:"FB",smoke:"SG"},vd=["menu","setup","settings","stats","help","pause","matchEnd","loading","lan","lobby"],$o={green:"#4dff6a",white:"#ffffff",yellow:"#ffe14a",cyan:"#4af0ff",red:"#ff4a4a"};function bd(s){return _d[s]&&s!=="he"?_d[s]:fe[s]?fe[s].name:s}var Md={ru:{he:"\u041E\u0441\u043A\u043E\u043B\u043E\u0447\u043D\u0430\u044F",flash:"\u0421\u0432\u0435\u0442\u043E\u0432\u0430\u044F",smoke:"\u0414\u044B\u043C\u043E\u0432\u0430\u044F"},en:{he:"HE grenade",flash:"Flashbang",smoke:"Smoke"}},Sd=s=>(Md[Ze()]||Md.ru)[s];function wd(s,t,e){let n=e||new _i(t),i=s.getContext("2d"),r=Math.min(s.width/n.w,s.height/n.d),o=(s.width-n.w*r)/2,a=(s.height-n.d*r)/2;i.fillStyle="#000",i.fillRect(0,0,s.width,s.height);for(let c=0;c<n.d;c++)for(let h=0;h<n.w;h++){let u=n.h(h,c),d;u>=3?d="#15171b":u<=.01?d=n.charAt(h,c)==="o"?"#5b5f52":"#7a7466":"xX".includes(n.charAt(h,c))?d="#8a6a3c":d="#9c9584",i.fillStyle=d,i.fillRect(o+h*r,a+c*r,Math.ceil(r),Math.ceil(r))}let l=(c,h)=>{i.fillStyle=h,i.fillRect(o+c[0]*r,a+c[1]*r,(c[2]-c[0]+1)*r,(c[3]-c[1]+1)*r)};l(t.spawnT,"rgba(224,160,64,0.35)"),l(t.spawnCT,"rgba(106,168,255,0.35)"),i.font=`bold ${Math.max(10,r*3)}px Arial`,i.textAlign="center",i.textBaseline="middle";for(let[c,h]of Object.entries(t.sites))l(h,"rgba(255,60,40,0.22)"),i.fillStyle="#ff6a50",i.fillText(c,o+(h[0]+h[2]+1)/2*r,a+(h[1]+h[3]+1)/2*r);return{s:r,ox:o,oy:a}}var Zo=class{constructor(t){this.h=t,this.msgs=[],this.feed=[],this.chatLines=[],this.hurtT=0,this.flashT=0,this.flashMax=0,this.hitT=0,this.dirs=[],this.slotSig="",this.radarT=0,this.screen="menu",this.buyOpen=!1,this.applySettings(),this.bindMenu(),this.refreshTexts()}show(t){for(let e of vd)at(e).classList.toggle("hidden",e!==t);this.screen=t,t==="lan"&&this.buildLan(),t==="lobby"&&this.buildLobby(),t==="setup"&&this.buildSetup(),t==="settings"&&this.buildSettings(),t==="stats"&&this.buildStats(),t==="help"&&this.buildHelp(),t==="pause"&&this.buildPause()}hideScreens(){for(let t of vd)at(t).classList.add("hidden");this.screen=null}bindMenu(){document.querySelectorAll("[data-go]").forEach(t=>t.addEventListener("click",()=>{vt.init(),vt.play("click"),this.settingsBack="menu",this.show(t.dataset.go)}))}refreshTexts(){document.querySelectorAll("[data-t]").forEach(t=>{t.textContent=k(t.dataset.t)}),at("menuTag").textContent=Ze()==="ru"?"\u0442\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u0443\u0442\u0435\u0440 \xB7 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u043E\u043C\u0431\u044B \xB7 \u0431\u043E\u0442\u044B":"tactical shooter \xB7 bomb defusal \xB7 bots",document.documentElement.lang=Ze()}seg(t,e,n,i,r=""){let o=document.createElement("div");o.className="field "+r,o.innerHTML=`<label>${he(t)}</label><div class="seg"></div>`;let a=o.querySelector(".seg");for(let[l,c,h]of e){let u=document.createElement("button");u.textContent=c,u.disabled=!!h,l===n&&u.classList.add("on"),u.addEventListener("click",()=>{vt.play("click"),a.querySelectorAll("button").forEach(d=>d.classList.remove("on")),u.classList.add("on"),i(l)}),a.appendChild(u)}return o}range(t,e,n,i,r,o,a=l=>l){let l=document.createElement("div");l.className="field",l.innerHTML=`<label>${he(t)}: <span>${a(r)}</span></label><input type="range" min="${e}" max="${n}" step="${i}" value="${r}">`;let c=l.querySelector("input"),h=l.querySelector("span");return c.addEventListener("input",()=>{let u=parseFloat(c.value);h.textContent=a(u),o(u)}),l}buildSetup(){let t=Xt.setup,e=at("setup"),i=this.setupFor==="lan"||this.setupFor==="lanEdit"?k("lan_title"):k("play"),r=this.setupFor==="lan"?k("create_lobby"):this.setupFor==="lanEdit"?k("save"):k("start");e.innerHTML=`<h1>${i}</h1><div class="form"></div><div class="actions"><button data-a="back">${k("back")}</button><button class="prim" data-a="start">${r}</button></div>`;let o=e.querySelector(".form"),a=document.createElement("div");a.className="field full",a.innerHTML=`<label>${k("map")}</label><div class="maps"></div>`;let l=a.querySelector(".maps");for(let d of wn){let p=document.createElement("div");p.className="mapc"+(d.id===t.map?" on":""),p.innerHTML=`<canvas width="240" height="150"></canvas><b>${he(d.name[Ze()]||d.name.ru)}</b><small>${he(d.desc[Ze()]||d.desc.ru)}</small>`,wd(p.querySelector("canvas"),d),p.addEventListener("click",()=>{vt.play("click"),t.map=d.id,d.modes.includes(t.mode)||(t.mode=d.modes[0]),this.buildSetup()}),l.appendChild(p)}o.appendChild(a);let c=wn.find(d=>d.id===t.map)||wn[0],h=this.seg(k("mode"),["bomb","dm","gg"].map(d=>[d,k("mode_"+d),!c.modes.includes(d)]),t.mode,d=>{t.mode=d,this.buildSetup()},"full"),u=document.createElement("div");u.className="modeDesc",u.textContent=k("mode_"+t.mode+"_d"),h.appendChild(u),o.appendChild(h),o.appendChild(this.seg(k("team"),[["auto",k("team_auto")],["t",k("team_t"),t.mode==="gg"],["ct",k("team_ct"),t.mode==="gg"]],t.team,d=>{t.team=d})),o.appendChild(this.seg(k("difficulty"),["easy","normal","hard","expert"].map(d=>[d,k(d)]),t.diff,d=>{t.diff=d})),o.appendChild(this.seg(k("bots"),[1,2,3,4,5,6].map(d=>[d,d+"\xD7"+d]),t.bots,d=>{t.bots=d})),t.mode==="bomb"&&(o.appendChild(this.seg(k("rounds"),[3,5,8,10,16].map(d=>[d,String(d)]),t.rounds,d=>{t.rounds=d})),o.appendChild(this.seg(k("ff"),[[!1,k("off")],[!0,k("on")]],t.ff,d=>{t.ff=d}))),e.querySelector("[data-a=back]").addEventListener("click",()=>{vt.play("click"),Xt.save(),this.show(this.setupFor==="lan"?"lan":this.setupFor==="lanEdit"?"lobby":"menu")}),e.querySelector("[data-a=start]").addEventListener("click",()=>{vt.init(),vt.play("click"),Xt.save(),this.setupFor==="lan"?this.h.onLanCreate({...t}):this.setupFor==="lanEdit"?this.h.onLanSetup({...t}):this.h.onStart({...t})})}buildLan(){this.h.onLanOpen();let t=at("lan"),e=Xt.settings,n=this.h.canHost();t.innerHTML=`<h1>${k("lan_title")}</h1>
      <div class="lanBox">
        <div class="field"><label>${k("your_name")}</label><input id="lanName" maxlength="16" value="${he(e.name||"")}"></div>
        <button class="prim big" data-a="host" ${n?"":"disabled"}>${k("create_game")}</button>
        ${n?"":`<div class="note">${k("lan_web_hint")}</div>`}
        <div class="field"><label>${k("found_games")}</label><div id="lanFound" class="found"></div></div>
        <div class="field"><label>${k("join_ip")}</label><div class="joinRow"><input id="lanIp" placeholder="192.168.0.10" value="${he(e.lastIp||this.h.defaultIp()||"")}" inputmode="decimal"><button data-a="join">${k("join")}</button></div></div>
        <div class="note">${k("lan_hint")}</div>
        <div id="lanErr" class="err"></div>
      </div>
      <div class="actions"><button data-a="back">${k("back")}</button></div>`;let i=()=>{let r=at("lanName").value.trim();return e.name=r,Xt.save(),r||k("you")};t.querySelector("[data-a=back]").addEventListener("click",()=>{vt.play("click"),this.h.onLanBack()}),t.querySelector("[data-a=host]").addEventListener("click",()=>{vt.init(),vt.play("click"),i(),this.setupFor="lan",this.show("setup")}),t.querySelector("[data-a=join]").addEventListener("click",()=>{vt.init(),vt.play("click");let r=at("lanIp").value.trim();e.lastIp=r,Xt.save(),this.h.onLanJoin(r,i())}),this.renderFound()}setFound(t){this.found=t,this.screen==="lan"&&this.renderFound()}renderFound(){let t=at("lanFound");if(!t)return;let e=this.found||[];if(!e.length){t.innerHTML=`<div class="note">${this.h.canDiscover()?k("searching"):k("no_discovery")}</div>`;return}t.innerHTML=e.map((n,i)=>{let r=wn.find(a=>a.id===n.info.m),o=r?r.name[Ze()]||r.name.ru:"";return`<button class="game" data-i="${i}"><b>${he(n.info.n||n.ip)}</b><span>${he(o)} \xB7 ${he(k("mode_"+(n.info.md||"bomb")))} \xB7 ${k("players_n",n.info.p||1)}${n.info.g?" \xB7 "+k("in_progress"):""}</span></button>`}).join(""),t.querySelectorAll("[data-i]").forEach(n=>n.addEventListener("click",()=>{vt.init(),vt.play("click");let i=e[Number(n.dataset.i)],r=at("lanName").value.trim();Xt.settings.name=r,Xt.save(),this.h.onLanJoin(i.ip,r||k("you"))}))}lanError(t){this.screen!=="lan"&&this.show("lan");let e=at("lanErr");e&&(e.textContent=k(t))}setLobby(t,e){this.lobby=t,this.lobbyMe=e,this.screen==="lobby"&&this.buildLobby()}buildLobby(){let t=at("lobby"),e=this.lobby;if(!e){t.innerHTML=`<h1>${k("lobby")}</h1><div class="spinner"></div><div class="note">${k("connecting")}</div><div class="actions"><button data-a="leave">${k("leave_lobby")}</button></div>`,t.querySelector("[data-a=leave]").addEventListener("click",()=>this.h.onLobbyLeave());return}let n=this.lobbyMe===0,i=e.setup,r=wn.find(c=>c.id===i.map),o=c=>c==="t"?k("team_t"):c==="ct"?k("team_ct"):k("team_auto"),a=e.players.map(c=>`<tr class="${c.id===this.lobbyMe?"me":""}"><td>${he(c.name)}${c.host?' <span class="badge">'+k("host")+"</span>":""}</td><td class="${c.team==="t"?"t":c.team==="ct"?"ct":""}">${o(c.team)}</td></tr>`).join(""),l=e.players.find(c=>c.id===this.lobbyMe);t.innerHTML=`<h1>${k("lobby")}</h1>
      <div class="lobbyInfo">${he(r?r.name[Ze()]||r.name.ru:i.map)} \xB7 ${k("mode_"+i.mode)} \xB7 ${k(i.diff)} \xB7 ${k("bots")}: ${i.bots}\xD7${i.bots}${i.mode==="bomb"?" \xB7 "+k("first_to",i.rounds):""}</div>
      ${n&&e.ips&&e.ips.length?`<div class="addr">${k("address")}: <b>${e.ips.map(he).join(", ")}</b></div>`:""}
      <table class="lobbyTable"><tr><th>${k("players")}</th><th>${k("team")}</th></tr>${a}</table>
      <div id="lobbyTeam"></div>
      ${e.inGame&&!n?`<div class="note">${k("joining_match")}</div>`:""}
      <div class="actions"><button data-a="leave">${k("leave_lobby")}</button>${n?`<button data-a="edit">${k("edit_setup")}</button><button class="prim" data-a="start">${k("start_match")}</button>`:`<span class="note">${k("waiting_host")}</span>`}</div>`,i.mode!=="gg"&&at("lobbyTeam").appendChild(this.seg(k("team"),[["auto",k("team_auto")],["t",k("team_t")],["ct",k("team_ct")]],l?l.team:"auto",c=>this.h.onLobbyTeam(c))),t.querySelector("[data-a=leave]").addEventListener("click",()=>{vt.play("click"),this.h.onLobbyLeave()}),n&&(t.querySelector("[data-a=edit]").addEventListener("click",()=>{vt.play("click"),Object.assign(Xt.setup,i),this.setupFor="lanEdit",this.show("setup")}),t.querySelector("[data-a=start]").addEventListener("click",()=>{vt.init(),vt.play("click"),this.h.onLobbyStart()}))}buildSettings(){let t=Xt.settings,e=at("settings");e.innerHTML=`<h1>${k("settings")}</h1><div class="form"></div><div class="actions"><button class="prim" data-a="back">${k("back")}</button></div>`;let n=e.querySelector(".form"),i=()=>{Xt.save(),this.applySettings(),this.h.onSettings()},r=[[!0,k("on")],[!1,k("off")]];n.appendChild(this.seg(k("lang"),[["ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439"],["en","English"]],t.lang,o=>{t.lang=o,i(),this.refreshTexts(),this.buildSettings()})),n.appendChild(this.seg(k("quality"),["auto","low","medium","high"].map(o=>[o,k("q_"+o)]),t.quality,o=>{t.quality=o,i()})),n.appendChild(this.range(k("volume"),0,1,.05,t.volume,o=>{t.volume=o,i()},o=>Math.round(o*100)+"%")),n.appendChild(this.range(k("fov"),70,110,1,t.fov,o=>{t.fov=o,i()},o=>o+"\xB0")),n.appendChild(this.range(k("sens"),.3,2.5,.05,t.sens,o=>{t.sens=o,i()},o=>o.toFixed(2))),n.appendChild(this.range(k("mouseSens"),.2,3,.05,t.mouseSens,o=>{t.mouseSens=o,i()},o=>o.toFixed(2))),n.appendChild(this.range(k("btnScale"),.7,1.4,.05,t.btnScale,o=>{t.btnScale=o,i()},o=>Math.round(o*100)+"%")),n.appendChild(this.range(k("btnAlpha"),.2,1,.05,t.btnAlpha,o=>{t.btnAlpha=o,i()},o=>Math.round(o*100)+"%")),n.appendChild(this.seg(k("crosshair"),Object.keys($o).map(o=>[o,"\u25A0"]),t.crosshair,o=>{t.crosshair=o,i()})),e.querySelectorAll(".seg").forEach(o=>{o.children.length===5&&o.children[0].textContent==="\u25A0"&&[...o.children].forEach((a,l)=>{a.style.color=Object.values($o)[l]})}),n.appendChild(this.seg(k("aimAssist"),r,t.aimAssist,o=>{t.aimAssist=o,i()})),n.appendChild(this.seg(k("autoFire"),r,t.autoFire,o=>{t.autoFire=o,i()})),n.appendChild(this.seg(k("leftFire"),r,t.leftFire,o=>{t.leftFire=o,i()})),n.appendChild(this.seg(k("invertY"),r,t.invertY,o=>{t.invertY=o,i()})),n.appendChild(this.seg(k("voice"),r,t.voice,o=>{t.voice=o,i()})),n.appendChild(this.seg(k("vibrate"),r,t.vibrate,o=>{t.vibrate=o,i()})),n.appendChild(this.seg(k("showFps"),r,t.showFps,o=>{t.showFps=o,i()})),e.querySelector("[data-a=back]").addEventListener("click",()=>{vt.play("click"),this.show(this.settingsBack||"menu")})}buildStats(){let t=Xt.stats,e=at("stats"),n=t.deaths?(t.kills/t.deaths).toFixed(2):t.kills.toFixed(2),i=t.shots?Math.round(t.hits/t.shots*100)+"%":"\u2014",r=t.kills?Math.round(t.hs/t.kills*100)+"%":"\u2014",o=Math.round(t.time/60)+(Ze()==="ru"?" \u043C\u0438\u043D":" min"),a=[[k("kills"),t.kills],[k("deaths"),t.deaths],[k("kd"),n],[k("headshots"),r],[k("accuracy"),i],[k("wins"),t.wins],[k("losses"),t.losses],[k("matches"),t.matches],[k("mvp"),t.mvp],[k("plants"),t.plants],[k("defuses"),t.defuses],[k("playtime"),o]];e.innerHTML=`<h1>${k("stats")}</h1><div class="statsGrid">${a.map(([l,c])=>`<div><b>${he(c)}</b><span>${he(l)}</span></div>`).join("")}</div><div class="actions"><button data-a="reset">${k("reset_stats")}</button><button class="prim" data-a="back">${k("back")}</button></div>`,e.querySelector("[data-a=back]").addEventListener("click",()=>{vt.play("click"),this.show("menu")}),e.querySelector("[data-a=reset]").addEventListener("click",()=>{confirm(k("reset_stats")+"?")&&(Xt.stats={...Nc},Xt.save(),this.buildStats())})}buildHelp(){let t=at("help");t.innerHTML=`<h1>${k("help")}</h1><div class="helpText">${k("help_text")}</div><div class="actions"><button class="prim" data-a="back">${k("back")}</button></div>`,t.querySelector("[data-a=back]").addEventListener("click",()=>{vt.play("click"),this.show(this.helpBack||"menu"),this.helpBack=null})}buildPause(){let t=at("pause");t.innerHTML=`<h1>${k("paused")}</h1><div class="menuBtns"><button class="big" data-a="resume">${k("resume")}</button><button data-a="settings">${k("settings")}</button><button data-a="help">${k("help")}</button><button data-a="leave">${k("leave")}</button></div>`,t.querySelector("[data-a=resume]").addEventListener("click",()=>{vt.play("click"),this.h.onResume()}),t.querySelector("[data-a=settings]").addEventListener("click",()=>{vt.play("click"),this.settingsBack="pause",this.show("settings")}),t.querySelector("[data-a=help]").addEventListener("click",()=>{vt.play("click"),this.helpBack="pause",this.show("help")}),t.querySelector("[data-a=leave]").addEventListener("click",()=>{vt.play("click"),this.h.onLeave()})}applySettings(){let t=Xt.settings;gd(t.lang),vt.setVolume(t.volume),vt.voice=t.voice,vt.lang=t.lang;let e=document.documentElement.style;e.setProperty("--btn-scale",t.btnScale),e.setProperty("--btn-alpha",t.btnAlpha),e.setProperty("--cross",$o[t.crosshair]||$o.green),at("fps").classList.toggle("on",t.showFps),at("bFire2").classList.toggle("off",!t.leftFire)}enterGame(t){this.G=t,this.hideScreens(),at("hud").classList.remove("hidden"),document.body.classList.add("ingame"),this.feed=[],this.msgs=[],this.chatLines=[],at("killfeed").innerHTML="",at("msg").innerHTML="",at("chat").innerHTML="",this.slotSig="",this.radarBase=document.createElement("canvas"),this.radarBase.width=t.grid.w*8,this.radarBase.height=t.grid.d*8,wd(this.radarBase,t.def,t.grid);let e=t.mode!=="gg";document.querySelectorAll("#top .team").forEach(n=>{n.style.visibility=e?"visible":"hidden"}),at("bBuy").style.display=t.mode==="gg"?"none":""}exitGame(){at("hud").classList.add("hidden"),document.body.classList.remove("ingame"),this.closeBuy(),at("board").classList.add("hidden"),this.G=null}message(t,e=2,n=""){this.msgs.push({text:t,until:performance.now()+e*1e3,cls:n}),this.msgs.length>3&&this.msgs.shift(),this.renderMsgs()}renderMsgs(){at("msg").innerHTML=this.msgs.map(t=>`<div class="${t.cls}">${he(t.text)}</div>`).join("")}chat(t,e){let n=yi[t.team];this.chatLines.push({html:`<span class="${n}" style="color:var(--${n})">${he(t.name)}</span> <i>(${Ze()==="ru"?"\u0440\u0430\u0434\u0438\u043E":"radio"})</i>: ${he(e)}`,until:performance.now()+6e3}),this.chatLines.length>4&&this.chatLines.shift(),at("chat").innerHTML=this.chatLines.map(i=>`<div>${i.html}</div>`).join("")}killfeed(t,e,n,i,r){let o=this.G,a=o&&(t===o.player||e===o.player),l=u=>u?`<span class="${yi[u.team]}">${he(u.name)}</span>`:"",c=n==="bomb"?"C4":n==="fall"?k("fall"):bd(n),h=`${t&&t!==e?l(t):""}<span class="w">${i?'<span class="hs">\u25CE</span>':""}${r?"\u27FF ":""}${he(c)}</span>${l(e)}`;this.feed.push({html:h,me:a,until:performance.now()+6e3}),this.feed.length>5&&this.feed.shift(),at("killfeed").innerHTML=this.feed.map(u=>`<div class="${u.me?"me":""}">${u.html}</div>`).join("")}hitmarker(t,e){let n=at("hitmark");n.className="on"+(e?" kill":t?" hs":""),this.hitT=.12}damageDir(t,e){this.dirs.push({ang:t,until:performance.now()+900,s:Math.min(1,.4+e/50)}),this.dirs.length>4&&this.dirs.shift()}hurt(t){this.hurtT=Math.min(1,this.hurtT+.25+t/80),Xt.settings.vibrate&&this.h.vibrate(Math.min(80,20+t))}flash(t){this.flashT=t,this.flashMax=t}money(t){let e=at("moneyDelta");e.textContent=(t>0?"+$":"-$")+Math.abs(t),e.className="on"+(t<0?" neg":""),clearTimeout(this.moneyTO),this.moneyTO=setTimeout(()=>{e.className=t<0?"neg":""},60)}died(t,e){this.deathInfo=t&&t!==this.G.player?{name:t.name,w:e,hp:t.hp,team:t.team}:null,this.closeBuy()}stat(t,e){Xt.stats[t]=(Xt.stats[t]||0)+e}shot(){}roundStart(t){let e=this.G;this.message(k("round")+" "+t+" \xB7 "+k("freeze"),2.5,"info"),this.deathInfo=null,e&&e.player.alive&&!e.autopilot&&t===1&&!Xt.tutorialSeen&&(Xt.tutorialSeen=!0,Xt.save(),this.message(Sx(),6,"info"))}roundEnd(t,e,n){let i=t===Et.T?"t_win":"ct_win";this.message(k(i),4,t===Et.T?"win-t":"win-ct"),n&&this.message(k("mvp")+": "+n.name+" ("+n.roundKills+")",4,"info"),this.closeBuy()}bombPlanted(){}matchEnd(t){let e=this.G,n=at("matchEnd"),i=e.mode==="gg",r=t.won?k("victory"):k("defeat");!i&&t.winnerTeam===-1&&(r=k("draw"));let o=t.actors.map(h=>`<tr class="${h===e.player?"me":""}"><td style="color:var(--${yi[h.team]})">${he(h.name)}</td><td>${h.kills}</td><td>${h.deaths}</td><td>${h.hsKills}</td><td>${Math.round(h.dmgDealt)}</td>${e.mode==="bomb"?`<td>${h.mvps}</td>`:""}</tr>`).join(""),a=i?`${k("leader")}: ${he(t.winnerActor?t.winnerActor.name:"")}`:`<span class="t">${t.score[0]}</span> : <span class="ct">${t.score[1]}</span>`;n.innerHTML=`<div class="res ${t.won?"win":"lose"}">${r}</div><div class="sc">${a}</div>
      <table><tr><th>${k("name")}</th><th>${k("kills")}</th><th>${k("deaths")}</th><th>${k("headshots")}</th><th>DMG</th>${e.mode==="bomb"?"<th>MVP</th>":""}</tr>${o}</table>
      <div class="actions"><button data-a="menu">${k(e.role==="solo"?"menu":"leave_lobby")}</button>${e.role==="host"?`<button data-a="lobby">${k("lobby")}</button>`:""}${e.role==="client"?`<span class="note">${k("waiting_host")}</span>`:`<button class="prim" data-a="again">${k("rematch")}</button>`}</div>`,n.querySelector("[data-a=menu]").addEventListener("click",()=>{vt.play("click"),this.h.onLeave()});let l=n.querySelector("[data-a=again]");l&&l.addEventListener("click",()=>{vt.play("click"),this.h.onRematch()});let c=n.querySelector("[data-a=lobby]");c&&c.addEventListener("click",()=>{vt.play("click"),this.h.onToLobby()}),setTimeout(()=>{this.G===e&&(this.closeBuy(),at("board").classList.add("hidden"),this.show("matchEnd"),this.h.onMatchScreen())},2500),Xt.save()}toggleBuy(){this.buyOpen?this.closeBuy():this.openBuy()}openBuy(){let t=this.G;if(!(!t||t.mode==="gg"||!t.player.alive)){if(!t.canBuy(t.player)){this.message(k(t.buyError(t.player,"vest")==="buy_zone"?"buy_zone":"buy_closed"),1.5,"warn"),vt.play("deny");return}this.buyOpen=!0,this.renderBuy(),at("buy").classList.remove("hidden"),this.h.onBuyOpen(!0)}}closeBuy(){this.buyOpen&&(this.buyOpen=!1,at("buy").classList.add("hidden"),this.h.onBuyOpen(!1))}renderBuy(){let t=this.G,e=t.player,n=at("buy"),i=t.mode==="dm",r=Ou.map(c=>{let h=c.items.map(u=>{let d=fe[u]||pr[u];if(i&&(u==="kit"||d.team!==void 0&&d.team>=0&&!1)||!i&&d.team!==void 0&&d.team>=0&&d.team!==e.team)return"";let p=t.buyError(e,u),g=p==="have_it",y=i?0:u==="vesthelm"&&e.armor>=100&&!e.helmet?350:d.price,m=fe[u]?fe[u].kind==="grenade"?Sd(fe[u].nade):fe[u].name:k(u);return`<button class="item ${p&&!g?"no":""} ${g?"owned":""}" data-k="${u}">${he(m)}<small>$${y}</small></button>`}).join("");return`<div class="cat"><h3>${k("buy_"+c.cat)}</h3>${h}</div>`}).join(""),o=t.mode==="bomb"?Math.max(0,Math.ceil(Vt.buyTime-(t.time-t.liveStart))):0;n.innerHTML=`<h2><span>${k("buy")}${t.mode==="bomb"&&t.phase==="live"?" \xB7 "+o+"s":""}</span><span class="m">$${e.money}</span></h2><div class="cats">${r}</div>
      <div class="row">${i?"":`<button data-a="rebuy">${k("rebuy")}</button><button data-a="auto">${k("autobuy")}</button>`}<button class="prim" data-a="close">${k("close")}</button></div>`,n.querySelectorAll("[data-k]").forEach(c=>c.addEventListener("pointerup",h=>{h.stopPropagation(),this.h.onBuy(c.dataset.k),this.renderBuy()}));let a=n.querySelector("[data-a=rebuy]");a&&a.addEventListener("pointerup",()=>{this.h.onRebuy(),this.renderBuy()});let l=n.querySelector("[data-a=auto]");l&&l.addEventListener("pointerup",()=>{this.h.onAutobuy(),this.renderBuy()}),n.querySelector("[data-a=close]").addEventListener("pointerup",()=>this.closeBuy())}renderBoard(){let t=this.G,e=t.player,n=o=>{let l=t.actors.filter(h=>t.ffa||h.team===o).sort((h,u)=>u.kills-h.kills||h.deaths-u.deaths).map(h=>{let u=h.team===e.team&&!t.ffa,d=(h.hasBomb&&u?" \u{1F4A3}":"")+(h.kit&&u?" \u2702":""),p=t.mode==="gg"?`<td class="n">${h.ggLevel+1}/${xi.length}</td>`:`<td class="n">${u&&t.mode==="bomb"?"$"+h.money:""}</td>`;return`<tr class="${h===e?"me":""} ${h.alive?"":"dead"}"><td style="color:var(--${yi[h.team]})">${he(h.name)}${d}</td><td class="n">${h.kills}</td><td class="n">${h.deaths}</td>${p}<td class="n">${h.alive?"":k("dead")}</td></tr>`}).join(""),c=t.ffa?Ze()==="ru"?"\u0412\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438":"All players":k(yi[o])+" \u2014 "+t.score[o];return`<div class="hdr ${t.ffa?"":yi[o]}">${c}</div><table><tr><th>${k("name")}</th><th>${k("kills")}</th><th>${k("deaths")}</th><th>${t.mode==="gg"?k("level"):k("money")}</th><th></th></tr>${l}</table>`},i=t.def.name[Ze()]||t.def.name.ru,r=t.mode==="bomb"?`${k("round")} ${t.round} \xB7 ${k("first_to",t.setup.rounds)}`:t.mode==="dm"?`${k("frag_limit")}: ${Vt.dmFragLimit}`:k("mode_gg");at("board").innerHTML=`<div style="opacity:.7;margin-bottom:6px">${he(i)} \xB7 ${he(r)}</div>`+(t.ffa?n(0):n(Et.CT)+n(Et.T))}update(t,e,n){let i=performance.now();this.msgs.length&&this.msgs[0].until<i&&(this.msgs=this.msgs.filter(A=>A.until>=i),this.renderMsgs()),this.feed.length&&this.feed[0].until<i&&(this.feed=this.feed.filter(A=>A.until>=i),at("killfeed").innerHTML=this.feed.map(A=>`<div class="${A.me?"me":""}">${A.html}</div>`).join("")),this.chatLines.length&&this.chatLines[0].until<i&&(this.chatLines=this.chatLines.filter(A=>A.until>=i),at("chat").innerHTML=this.chatLines.map(A=>`<div>${A.html}</div>`).join(""));let r=t.player,o=e.target;at("scoreT").textContent=t.score[0],at("scoreCT").textContent=t.score[1];let a=A=>t.actors.filter(O=>O.team===A&&O.alive).length;at("aliveT").textContent=t.mode==="bomb"?a(0)+" "+k("t_short"):k("t_short"),at("aliveCT").textContent=t.mode==="bomb"?a(1)+" "+k("ct_short"):k("ct_short");let l,c=at("timer");if(t.mode==="bomb"&&t.bomb.planted?(l=t.bomb.timer,c.classList.add("bomb")):(l=t.phase==="live"&&t.mode==="gg"?t.matchTime:t.phaseT,c.classList.remove("bomb")),t.mode==="bomb"&&t.bomb.planted)c.textContent="\u{1F4A3} "+Math.ceil(Math.max(0,l));else{let A=Math.max(0,Math.ceil(l));c.textContent=isFinite(A)?Math.floor(A/60)+":"+String(A%60).padStart(2,"0"):"\u221E"}at("roundInfo").textContent=t.mode==="bomb"?t.phase==="freeze"?k("freeze"):k("round")+" "+t.round:t.mode==="dm"?k("frag_limit")+" "+Vt.dmFragLimit:k("level")+" "+(r.ggLevel+1)+"/"+xi.length;let h=o||r,u=at("hp");u.textContent=Math.max(0,Math.ceil(h.hp)),u.classList.toggle("low",h.hp<=25),at("armor").textContent=Math.ceil(h.armor),at("gearIcons").textContent=(h.helmet?"\u26D1":"")+(h.kit?"\u2702":"")+(h.hasBomb?"\u{1F4A3}":"");let d=h.w;at("wname").textContent=d.def.kind==="grenade"?Sd(d.def.nade)+" \xD7"+h.nades[d.def.nade]:d.def.name+(d.silenced?Ze()==="ru"?" \xB7 \u0433\u043B\u0443\u0448\u0438\u0442\u0435\u043B\u044C":" \xB7 silenced":"");let p=at("clip");d.def.clip?(p.textContent=d.clip,at("reserve").textContent=d.reserve>900?"\u221E":d.reserve,p.classList.toggle("empty",d.clip<=Math.ceil(d.def.clip*.2)),at("ammobox").style.visibility="visible"):at("ammobox").style.visibility=(d.def.kind,"hidden"),at("money").textContent=r.money,at("moneybox").style.display=t.mode==="bomb"?"":"none";let g=at("spec");if(r.alive)g.classList.remove("on");else{g.classList.add("on");let A="";this.deathInfo&&(A+=`${k("killed_by")}: <b style="color:var(--${yi[this.deathInfo.team]})">${he(this.deathInfo.name)}</b> (${he(bd(this.deathInfo.w))}, ${Math.max(0,Math.ceil(this.deathInfo.hp))} HP)`),t.mode!=="bomb"?A+=`<small>${k("respawn_in")} ${Math.max(0,r.respawnT).toFixed(1)}</small>`:o&&o!==r&&(A+=`<small>${k("spectating")}: ${he(o.name)}</small>`),g.innerHTML=A}let y=at("progress"),m=o||r;if(m.alive&&(m.plantT>0||m.defuseT>0)){y.classList.add("on");let A=m.plantT>0?Vt.plantTime:m.kit?Vt.defuseKitTime:Vt.defuseTime,O=m.plantT>0?m.plantT:m.defuseT;at("progText").textContent=k(m.plantT>0?"planting":"defusing"),at("progFill").style.width=Math.min(100,O/A*100)+"%"}else y.classList.remove("on");let f="",S=!1;r.alive&&t.mode==="bomb"&&t.phase==="live"&&(r.hasBomb&&t.siteAt(r.x,r.z)?(f=k("plant_hint"),S=!0):t.bomb.planted&&r.team===Et.CT&&Math.hypot(r.x-t.bomb.x,r.z-t.bomb.z)<1.6&&(f=k("defuse_hint"),S=!0)),r.alive&&!S&&t.nearestDrop(r)&&(S=!0),at("hint").textContent=r.plantT>0||r.defuseT>0?"":f,at("bUse").classList.toggle("on",S||r.plantT>0||r.defuseT>0),at("bCrouch").classList.toggle("active",!!e.crouchHeld),at("bBuy").classList.toggle("off",!t.canBuy(r));let w=at("cross"),v=e.scoped;w.classList.toggle("hide",v||!r.alive||d.def.kind==="sniper"),document.documentElement.style.setProperty("--gap",e.gap.toFixed(1)+"px"),at("scope").classList.toggle("on",v),this.hitT>0&&(this.hitT-=n,this.hitT<=0&&(at("hitmark").className="")),this.hurtT=Math.max(0,this.hurtT-n*.9);let I=r.alive&&r.hp<30?.35+Math.sin(i/250)*.1:0;at("hurtOv").style.opacity=Math.max(this.hurtT,I),this.flashT>0&&(this.flashT-=n);let T=this.flashT>0?Math.min(1,this.flashT/Math.max(.5,this.flashMax*.55)):0;at("flashOv").style.opacity=T,at("smokeOv").style.opacity=e.smoke*.92;let C=at("dmgdirs");this.dirs=this.dirs.filter(A=>A.until>i);let R="";for(let A of this.dirs){let O=Math.PI+e.yaw-A.ang;R+=`<div style="transform:rotate(${(O*180/Math.PI).toFixed(1)}deg);opacity:${((A.until-i)/900*A.s).toFixed(2)}"></div>`}if(C.innerHTML=R,this.updateSlots(h),e.fps!==void 0&&(at("fps").textContent=e.fps+" FPS"),this.radarT-=n,this.radarT<=0&&(this.radarT=1/15,this.drawRadar(t,e)),this.buyOpen){if(!t.canBuy(r))this.closeBuy();else if((this.buyRefresh=(this.buyRefresh||0)-n)<=0){this.buyRefresh=1;let A=at("buy").querySelector("h2 span");A&&t.mode==="bomb"&&t.phase==="live"&&(A.textContent=k("buy")+" \xB7 "+Math.max(0,Math.ceil(Vt.buyTime-(t.time-t.liveStart)))+"s")}}let b=at("board"),x=e.score||t.phase==="post"&&t.pendingEnd;b.classList.toggle("hidden",!x),x&&(this.boardT=(this.boardT||0)-n)<=0&&(this.boardT=.5,this.renderBoard())}updateSlots(t){let e=[],n=(o,a,l)=>e.push({slot:o,label:a,sub:l});t.slots[0]&&n(0,t.slots[0].def.name,"1"),t.slots[1]&&n(1,t.slots[1].def.name,"2"),n(2,fe.knife.name==="\u041D\u043E\u0436"&&Ze()==="ru"?"\u041D\u043E\u0436":"Knife","3");let i=t.nades;i.he+i.flash+i.smoke>0&&n(3,[i.he?"HE":"",i.flash?"FB"+(i.flash>1?"\xD72":""):"",i.smoke?"SG":""].filter(Boolean).join(" "),"4"),t.hasBomb&&n(4,"C4","5");let r=e.map(o=>o.slot+o.label).join("|")+"#"+t.slot;r!==this.slotSig&&(this.slotSig=r,at("slots").innerHTML=e.map(o=>`<div data-act="slot${o.slot+1}" class="${t.slot===o.slot?"cur":""}"><small>${o.sub}</small>${he(o.label)}</div>`).join(""))}drawRadar(t,e){let n=at("radar"),i=n.getContext("2d"),r=n.width,o=n.height;i.clearRect(0,0,r,o),i.save(),i.beginPath(),i.arc(r/2,o/2,r/2-1,0,Math.PI*2),i.clip(),i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(0,0,r,o);let a=e.x,l=e.z,c=2.6,h=c/(8/yt);i.translate(r/2,o/2),i.rotate(e.yaw),i.globalAlpha=.85,i.drawImage(this.radarBase,-a*c,-l*c,this.radarBase.width*h,this.radarBase.height*h),i.globalAlpha=1;let u=(p,g,y,m=4)=>{i.fillStyle=y,i.beginPath(),i.arc((p-a)*c,(g-l)*c,m,0,Math.PI*2),i.fill()},d=t.player;for(let p of t.actors){if(!p.alive||p===e.target)continue;!t.ffa&&p.team===d.team?u(p.x,p.z,p.team===Et.T?"#ffcf7a":"#a8cbff",4):t.time-p.spotted<1.2&&t.mode==="bomb"&&u(p.x,p.z,"#ff3b30",4.5)}if(t.mode==="bomb"&&(d.team===Et.T||t.bomb.planted)){let p=t.bomb,g=t.actors.find(y=>y.alive&&y.hasBomb);p.planted||p.dropped?(Math.floor(t.time*4)%2||p.dropped)&&u(p.x,p.z,"#ff2a1a",5):g&&g!==e.target&&(i.strokeStyle="#ff6a40",i.lineWidth=2,i.beginPath(),i.arc((g.x-a)*c,(g.z-l)*c,6.5,0,Math.PI*2),i.stroke())}i.restore(),i.fillStyle="#fff",i.beginPath(),i.moveTo(r/2,o/2-8),i.lineTo(r/2-5,o/2+5),i.lineTo(r/2+5,o/2+5),i.closePath(),i.fill(),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=1,i.beginPath(),i.moveTo(r/2,o/2),i.lineTo(r/2-r*.32,4),i.moveTo(r/2,o/2),i.lineTo(r/2+r*.32,4),i.stroke()}};function Sx(){let s=!document.body.classList.contains("desktop");return Ze()==="ru"?s?"\u0421\u043B\u0435\u0432\u0430 \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u0441\u043F\u0440\u0430\u0432\u0430 \u2014 \u043E\u0431\u0437\u043E\u0440. $ \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430":"WASD \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u043C\u044B\u0448\u044C \u2014 \u043E\u0431\u0437\u043E\u0440, B \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430":s?"Left side moves, right side looks. $ opens the buy menu":"WASD move, mouse look, B buy menu"}var Us={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ControlLeft:"crouch",ControlRight:"crouch",KeyC:"crouch",ShiftLeft:"walk",ShiftRight:"walk",KeyE:"use",Tab:"score"},wx={KeyR:"reload",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",Digit4:"slot4",Digit5:"slot5",KeyQ:"last",KeyG:"drop",KeyB:"buy",Escape:"menu",KeyP:"menu",Space:"jump",KeyF:"scope",KeyV:"radio"},kc=class{constructor(){this.move={x:0,y:0},this.lookDX=0,this.lookDY=0,this.held={fire:!1,fire2:!1,jump:!1,crouch:!1,walk:!1,use:!1,score:!1},this.keys={},this.pressed=new Set,this.touches=new Map,this.touchMode="ontouchstart"in window||navigator.maxTouchPoints>0,this.crouchToggle=!1,this.enabled=!1,this.sens=1,this.mouseSens=1,this.invertY=!1,this.onAnyPress=null,this.joy=null}attach(t,e){this.canvas=t,this.layer=e,this.joyEl=document.getElementById("joy"),this.joyKnob=document.getElementById("joyKnob"),window.addEventListener("keydown",i=>{if(i.repeat){(Us[i.code]||i.code==="Tab")&&i.preventDefault();return}(i.code==="Tab"||i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),this.keys[i.code]=!0;let r=wx[i.code];r&&this.pressed.add(r),Us[i.code]==="crouch"&&(this.crouchToggle=!1),this.updateKeys(),this.onAnyPress&&this.onAnyPress(i.code)}),window.addEventListener("keyup",i=>{this.keys[i.code]=!1,this.updateKeys()}),window.addEventListener("blur",()=>{this.keys={},this.updateKeys(),this.held.fire=this.held.fire2=!1}),e.addEventListener("mousedown",i=>{if(!(!this.enabled||i.target.closest("[data-act]"))){if(document.pointerLockElement!==t){this.lock();return}i.button===0&&(this.held.fire=!0),i.button===2&&(this.held.fire2=!0,this.pressed.add("scope"))}}),window.addEventListener("mouseup",i=>{i.button===0&&(this.held.fire=!1),i.button===2&&(this.held.fire2=!1)}),window.addEventListener("contextmenu",i=>i.preventDefault()),window.addEventListener("mousemove",i=>{document.pointerLockElement===t&&(this.lookDX+=i.movementX*.0022*this.mouseSens,this.lookDY+=i.movementY*.0022*this.mouseSens*(this.invertY?-1:1))}),window.addEventListener("wheel",i=>{this.enabled&&this.pressed.add(i.deltaY>0?"next":"prev")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==t&&this.enabled&&!this.touchMode&&this.pressed.add("unlocked")});let n={passive:!1};e.addEventListener("pointerdown",i=>this.pDown(i),n),window.addEventListener("pointermove",i=>this.pMove(i),n),window.addEventListener("pointerup",i=>this.pUp(i),n),window.addEventListener("pointercancel",i=>this.pUp(i),n)}lock(){if(!(this.touchMode||!this.canvas.requestPointerLock))try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}updateKeys(){let t=e=>Object.keys(Us).some(n=>Us[n]===e&&this.keys[n]);this.joy||(this.move.x=(t("right")?1:0)-(t("left")?1:0),this.move.y=(t("fwd")?1:0)-(t("back")?1:0)),this.held.jump=t("jump"),this.held.walk=t("walk"),this.held.use=t("use")||this.touchUse,this.held.score=t("score")||this.touchScore,this.crouchToggle||(this.held.crouch=t("crouch"))}pDown(t){if(t.pointerType==="mouse")return;this.touchMode=!0,t.preventDefault();let e=t.target.closest("[data-act]"),n=t.clientX,i=t.clientY;if(e){let r=e.dataset.act;this.touches.set(t.pointerId,{type:"btn",act:r,x:n,y:i,el:e}),e.classList.add("down"),this.buttonDown(r);return}this.enabled&&(n<window.innerWidth*.42&&!this.joy?(this.joy={id:t.pointerId,ox:n,oy:i},this.touches.set(t.pointerId,{type:"joy",x:n,y:i}),this.joyEl&&(this.joyEl.style.left=n+"px",this.joyEl.style.top=i+"px",this.joyEl.classList.add("on")),this.setJoy(n,i)):this.touches.set(t.pointerId,{type:"look",x:n,y:i}))}setJoy(t,e){let n=55*(this.btnScale||1),i=(t-this.joy.ox)/n,r=(e-this.joy.oy)/n,o=Math.hypot(i,r);o>1&&(i/=o,r/=o),o>1.6&&(this.joy.ox=t-i*n*1.6,this.joy.oy=e-r*n*1.6,this.joyEl&&(this.joyEl.style.left=this.joy.ox+"px",this.joyEl.style.top=this.joy.oy+"px"));let a=.12,l=Math.hypot(i,r),c=l<a?0:(l-a)/(1-a)/(l||1);this.move.x=i*c,this.move.y=-r*c,this.held.walk=l<.55&&l>=a,this.joyKnob&&(this.joyKnob.style.transform=`translate(${i*n}px, ${r*n}px)`)}pMove(t){let e=this.touches.get(t.pointerId);if(!e)return;t.preventDefault();let n=t.clientX,i=t.clientY;if(e.type==="joy"){this.setJoy(n,i);return}if(e.type==="look"||e.type==="btn"&&(e.act==="fire"||e.act==="fire2")){let r=.0048*this.sens;this.lookDX+=(n-e.x)*r,this.lookDY+=(i-e.y)*r*(this.invertY?-1:1)}e.x=n,e.y=i}pUp(t){let e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.type==="joy"?(this.joy=null,this.move.x=this.move.y=0,this.held.walk=!1,this.joyEl&&this.joyEl.classList.remove("on"),this.joyKnob&&(this.joyKnob.style.transform=""),this.updateKeys()):e.type==="btn"&&(e.el.classList.remove("down"),this.buttonUp(e.act)))}buttonDown(t){switch(t){case"fire":case"fire2":this.held.fire=!0;break;case"jump":this.held.jump=!0,this.pressed.add("jump");break;case"crouch":this.crouchToggle=!0,this.held.crouch=!this.held.crouch;break;case"use":this.touchUse=!0,this.held.use=!0;break;case"score":this.touchScore=!this.touchScore,this.held.score=this.touchScore;break;default:this.pressed.add(t)}}buttonUp(t){switch(t){case"fire":case"fire2":{let e=!1;for(let n of this.touches.values())n.type==="btn"&&(n.act==="fire"||n.act==="fire2")&&(e=!0);this.held.fire=e;break}case"jump":this.held.jump=!1,this.updateKeys();break;case"use":this.touchUse=!1,this.updateKeys();break;default:break}}pollGamepad(t){let e=navigator.getGamepads?navigator.getGamepads():[],n=e&&Array.from(e).find(d=>d&&d.connected);if(!n){this.padActive&&(this.padActive=!1,this.held.fire=!1);return}let i=d=>Math.abs(d)<.15?0:d,r=i(n.axes[0]),o=i(n.axes[1]),a=i(n.axes[2]),l=i(n.axes[3]);if((r||o||a||l||n.buttons.some(d=>d.pressed))&&(this.padActive=!0),!this.padActive)return;!this.joy&&!Object.values(this.keys).some(Boolean)&&(this.move.x=r,this.move.y=-o),this.lookDX+=Math.sign(a)*a*a*t*3.2*this.sens,this.lookDY+=Math.sign(l)*l*l*t*2.4*this.sens*(this.invertY?-1:1);let c=d=>n.buttons[d]&&n.buttons[d].pressed,h=this.padPrev||[],u=(d,p)=>{c(d)&&!h[d]&&this.pressed.add(p)};this.held.fire=c(7)||this.held.fire&&this.touches.size>0,u(6,"scope"),u(0,"jump"),u(2,"reload"),u(3,"next"),u(4,"prev"),u(5,"next"),u(9,"menu"),u(8,"buy"),u(12,"slot1"),u(13,"slot3"),this.held.jump=c(0),this.held.crouch=c(1)||c(11),this.held.use=c(14)||this.touchUse||Object.keys(Us).some(d=>Us[d]==="use"&&this.keys[d]),this.padPrev=n.buttons.map(d=>d.pressed)}consume(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}takeLook(){let t=[this.lookDX,this.lookDY];return this.lookDX=this.lookDY=0,t}reset(){this.pressed.clear(),this.lookDX=this.lookDY=0,this.held.fire=this.held.fire2=!1,this.held.crouch=!1,this.crouchToggle=!1,this.touchUse=!1,this.touchScore=!1,this.held.use=!1,this.held.score=!1;for(let t of this.touches.values())t.el&&t.el.classList.remove("down");this.touches.clear(),this.joy=null,this.move.x=this.move.y=0,this.joyEl&&this.joyEl.classList.remove("on")}},At=new kc;var Mi=()=>window.AndroidBridge;function Td(){let s=Mi();return!!(s&&s.netHost)||location.protocol==="http:"}function Tx(s){return s=String(s||"").trim().replace(/^wss?:\/\//,"").replace(/\/.*$/,""),s?"ws://"+(/:\d+$/.test(s)?s:s+":47778")+"/":null}var Ko=class{constructor(t){this.h=t,this.ws=null,this.android=!1}start(){let t=Mi();if(t&&t.netHost){let e=t.netHost(47778);return e==="ERR"?Promise.reject(new Error("host")):(this.android=!0,window.__lanEvent=n=>this.dispatch(n),Promise.resolve(String(e||"").split(",").filter(Boolean)))}return new Promise((e,n)=>{let i=new WebSocket(`ws://${location.host}/host`);this.ws=i,i.onopen=()=>e([location.hostname==="localhost"||location.hostname==="127.0.0.1"?"":location.host].filter(Boolean)),i.onmessage=r=>this.dispatch(r.data),i.onerror=()=>n(new Error("host")),i.onclose=()=>{this.h.onLost&&this.h.onLost()}})}dispatch(t){let e=t[0];if(e==="C"){this.h.onClose(Number(t.slice(1)));return}let n=t.indexOf("|"),i=Number(t.slice(1,n)),r=t.slice(n+1);if(e==="O")this.h.onOpen(i,r);else if(e==="M"){let o;try{o=JSON.parse(r)}catch{return}o&&typeof o=="object"&&this.h.onMessage(i,o)}}sendRaw(t,e){this.android?Mi().netSend(t,e):this.ws&&this.ws.readyState===1&&this.ws.send("S"+t+"|"+e)}send(t,e){this.sendRaw(t,JSON.stringify(e))}broadcast(t){let e=JSON.stringify(t);this.android?Mi().netBroadcast(e):this.ws&&this.ws.readyState===1&&this.ws.send("B"+e)}kick(t){this.android?Mi().netKick(t):this.ws&&this.ws.readyState===1&&this.ws.send("K"+t)}info(t){let e=JSON.stringify(t);this.android?Mi().netInfo(e):this.ws&&this.ws.readyState===1&&this.ws.send("I"+e)}stop(){this.android&&(Mi().netStop(),window.__lanEvent=null),this.ws&&(this.ws.onclose=null,this.ws.close(),this.ws=null)}},Jo=class{constructor(t){this.h=t,this.ws=null}connect(t){let e=Tx(t);return new Promise((n,i)=>{if(!e){i(new Error("address"));return}let r=!1,o=new WebSocket(e);this.ws=o;let a=setTimeout(()=>{r||(o.close(),i(new Error("timeout")))},6e3);o.onopen=()=>{r=!0,clearTimeout(a),n()},o.onmessage=l=>{let c;try{c=JSON.parse(l.data)}catch{return}this.h.onMessage(c)},o.onerror=()=>{r||(clearTimeout(a),i(new Error("connect")))},o.onclose=l=>{clearTimeout(a),r?this.h.onClose(l.code):i(new Error("closed "+l.code))}})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){this.ws&&(this.ws.onclose=null,this.ws.close(),this.ws=null)}};function xr(s,t){let e=Mi();return!e||!e.netDiscover?!1:(window.__lanFound=s?n=>{let i=n.indexOf("|"),r={};try{r=JSON.parse(n.slice(i+1)||"{}")}catch{}t(n.slice(0,i),r)}:null,e.netDiscover(!!s),!0)}var Ed=.05,Ad=1/30,Ex=.1,pe=s=>Math.round(s*100)/100,Qn=s=>Math.round(s*1e4)/1e4,Rd=()=>performance.now()/1e3;function Ax(s){let t=[];for(let e of[0,1]){let n=s.slots[e];t.push(n?n.key:"",n?n.clip:0,n?Math.min(999,n.reserve):0,n&&n.silenced?1:0)}return t.push(s.nades.he,s.nades.flash,s.nades.smoke),t}function Fc(s,t){for(let[e,n]of[[0,0],[4,1]]){let i=t[e];if(!i){s.slots[n]=null;continue}let r=s.slots[n];(!r||r.key!==i)&&(r=s.slots[n]=Ln(i)),r.clip=t[e+1],r.reserve=t[e+2],r.silenced=!!t[e+3]}s.nades.he=t[8],s.nades.flash=t[9],s.nades.smoke=t[10]}function Cd(s,t){let e=s.bomb;return{t:"s",tm:Qn(s.time),ph:s.phase,pt:pe(isFinite(s.phaseT)?s.phaseT:1e9),r:s.round,sc:s.score,mt:pe(s.matchTime),ls:Qn(s.liveStart||0),ov:s.over?1:0,b:[e.planted?1:0,e.dropped?1:0,pe(e.x||0),pe(e.y||0),pe(e.z||0),pe(e.timer||0),e.defuser?e.defuser.id:-1,e.exploded?1:0,e.defused?1:0],a:s.actors.map(n=>[n.id,pe(n.x),pe(n.y),pe(n.z),Qn(n.yaw),Qn(n.pitch),pe(n.crouch),n.alive?1:0,Math.ceil(Math.max(0,n.hp)),Math.round(n.armor),(n.helmet?1:0)|(n.kit?2:0)|(n.hasBomb?4:0)|(n.onGround?8:0)|(n.protectT>0?16:0)|(s.time-n.spotted<1.2?32:0),n.slot,n.nadeKey||"",Ax(n),n.money,n.kills,n.deaths,n.ggLevel,pe(n.plantT),pe(n.defuseT),pe(n.speed2d),n.tp||0,n.scope,pe(n.vx),pe(n.vz),n.hsKills,n.mvps,Math.round(n.dmgDealt),pe(Math.max(0,n.respawnT)),n.lastAttacker?n.lastAttacker.id:-1]),d:s.drops.map(n=>[n.id,n.key,pe(n.x),pe(n.y),pe(n.z),n.isBomb?1:0]),g:s.grenades.map(n=>[n.id,n.type,pe(n.x),pe(n.y),pe(n.z)]),ev:t}}var Bc=s=>String(s||"").replace(/[<>&"\u0000-\u001f]/g,"").trim().slice(0,16)||"Player",jo=class{constructor(t){this.app=t,this.role="host",this.players=new Map,this.G=null,this.snapT=0,this.hostTeam="auto",this.link=new Ko({onOpen:()=>{},onMessage:(e,n)=>this.onMessage(e,n),onClose:e=>this.onClose(e),onLost:()=>this.app.netEnded("host_failed")})}async start(t,e){return this.name=Bc(t),this.setup={...e},this.hostTeam=e.team||"auto",this.ips=await this.link.start(),this.updateInfo(),this.infoTimer=setInterval(()=>this.updateInfo(),2e3),this.ips}updateInfo(){this.link.info({n:this.name,m:this.setup.map,md:this.setup.mode,p:this.players.size+1,v:1,g:this.G&&!this.G.over?1:0})}lobbyState(){return{t:"lobby",host:this.name,setup:this.setup,inGame:!!(this.G&&!this.G.over),ips:this.ips,players:[{id:0,name:this.name,team:this.hostTeam,host:1},...[...this.players.values()].map(t=>({id:t.id,name:t.name,team:t.team}))]}}broadcastLobby(){let t=this.lobbyState();this.link.broadcast(t),this.app.onLobby(t),this.updateInfo()}setHostTeam(t){this.hostTeam=t,this.broadcastLobby()}setSetup(t){this.setup={...t},this.broadcastLobby()}actorOf(t){return this.G?this.G.actors.find(e=>e.remote&&e.netId===t):null}onMessage(t,e){let n=this.players.get(t);if(e.t==="hello"){if(e.v!==1){this.link.send(t,{t:"err",k:"net_version"}),setTimeout(()=>this.link.kick(t),300);return}if(this.players.size>=11){this.link.send(t,{t:"err",k:"net_full"}),setTimeout(()=>this.link.kick(t),300);return}this.players.set(t,{id:t,name:Bc(e.name),team:"auto"}),this.link.send(t,{t:"welcome",id:t}),this.broadcastLobby(),this.G&&!this.G.over&&this.joinMidGame(t);return}if(!n)return;let i=this.actorOf(t);switch(e.t){case"team":["auto","t","ct"].includes(e.team)&&(n.team=e.team,this.broadcastLobby());break;case"c":i&&e.c&&typeof e.c=="object"&&this.G.remoteInput(i,e.c);break;case"buy":i&&typeof e.k=="string"&&this.G.buy(i,e.k);break;case"rebuy":i&&this.G.rebuy(i);break;case"autobuy":i&&this.G.autobuy(i);break;case"ping":this.link.send(t,{t:"pong",ts:e.ts});break;default:}}onClose(t){let e=this.players.get(t);if(!e)return;this.players.delete(t);let n=this.actorOf(t);n&&(n.remote=!1,n.isBot=!0,n.net=null,n.netId=void 0,n.brain=new Vi(n,this.G,this.setup.diff),this.G.msg("net_left",3,"info",{args:[e.name]}),this.broadcastRoster()),this.broadcastLobby()}startMatch(){let t={...this.setup,team:this.hostTeam},e=[...this.players.values()].map(i=>({netId:i.id,name:i.name,team:i.team})),n=this.app.startGame(t,{role:"host",humans:e,session:this});this.G=n,n.net={events:[]},this.snapT=0;for(let i of this.players.values())this.sendStart(i.id);this.updateInfo()}sendStart(t){let e=this.actorOf(t);e&&this.link.send(t,{t:"start",setup:this.G.setup,roster:this.G.rosterList(),you:e.id,snap:Cd(this.G,[])})}joinMidGame(t){let e=this.players.get(t),n=this.G,i=[0,0];for(let l of n.actors)l.isBot||i[l.team]++;let r=e.team==="t"?0:e.team==="ct"?1:i[0]<=i[1]?0:1,o=n.actors.filter(l=>l.isBot&&!l.remote&&l!==n.player);o.sort((l,c)=>(l.team===r?0:1)-(c.team===r?0:1)||(l.alive?1:0)-(c.alive?1:0));let a=n.ffa?o[0]:o.find(l=>l.team===r)||null;a?(a.brain=null,a.isBot=!1,a.remote=!0,a.netId=t,a.net=null,a.name=e.name):(a=new bi(e.name,(n.ffa,r),!1),a.remote=!0,a.netId=t,a.money=Vt.startMoney,a.alive=!1,a.deathT=99,a.respawnT=1,n.actors.push(a),n.addModel(a)),n.msg("net_joined",3,"info",{args:[e.name]}),this.broadcastRoster(),this.sendStart(t)}broadcastRoster(){this.G&&this.link.broadcast({t:"roster",list:this.G.rosterList()})}tick(t){if(!this.G||(this.snapT-=t,this.snapT>0))return;this.snapT+=Ed,this.snapT<0&&(this.snapT=Ed);let e=this.G.net.events;this.G.net.events=[],this.players.size&&this.link.broadcast(Cd(this.G,e))}matchClosed(){this.G=null,this.updateInfo()}stop(){clearInterval(this.infoTimer),this.link.broadcast({t:"bye"}),setTimeout(()=>this.link.stop(),100),this.G=null}},Qo=class{constructor(t){this.app=t,this.role="client",this.G=null,this.sync=null,this.link=new Jo({onMessage:e=>this.onMessage(e),onClose:e=>this.app.netEnded(e===4e3?"net_no_host":"net_lost")})}async join(t,e){await this.link.connect(t),this.addr=t,this.link.send({t:"hello",v:1,name:Bc(e)})}send(t){this.link.send(t)}setTeam(t){this.send({t:"team",team:t})}onMessage(t){switch(t.t){case"welcome":this.myId=t.id;break;case"lobby":this.lobby=t,this.app.onLobby(t);break;case"start":{let e=this.app.startGame(t.setup,{role:"client",roster:t.roster,youId:t.you,session:this});this.G=e,this.sync=new Oc(e,this),e.client=this.sync,t.snap&&this.sync.apply(t.snap);break}case"s":this.sync&&this.sync.apply(t);break;case"roster":this.G&&this.G.syncRoster(t.list);break;case"err":this.app.netEnded(t.k);break;case"bye":this.app.netEnded("net_host_left");break;case"tolobby":this.app.toLobby();break;default:}}matchClosed(){this.sync&&this.sync.dispose(),this.G=null,this.sync=null}stop(){this.matchClosed(),this.link.close()}},Oc=class{constructor(t,e){this.G=t,this.s=e,this.started=!1,this.cmdT=0,this.slotSeq=0,this.lastAction=-9,this.acc={up:!1,dr:!1},this.drops=new Map,this.nades=new Map}apply(t){let e=this.G;if(!this.started)e.time=t.tm,this.started=!0;else{let n=t.tm-e.time;Math.abs(n)>1?e.time=t.tm:e.time+=n*.1}e.phase=t.ph,e.phaseT=t.pt>1e8?1/0:t.pt,e.round=t.r,e.score=t.sc,e.matchTime=t.mt,e.liveStart=t.ls,this.applyBomb(t.b),this.applyActors(t.a),this.applyObjects(t.d,this.drops,1.25,!0),this.applyObjects(t.g,this.nades,1.3,!1),e.drops=[...this.drops.values()];for(let n of t.ev||[])n.pr&&n.a===e.player.id||(n.e==="rstart"&&this.roundReset(),n.e==="mend"&&(e.over=!0),Xo(e,n));e.over=!!t.ov}roundReset(){let t=this.G;t.bomb.model&&t.scene.remove(t.bomb.model),t.bomb={planted:!1,dropped:!1},t.fx.clear()}applyBomb(t){let e=this.G,n=e.bomb,i=!!t[0];i&&!n.planted?(n.model&&e.scene.remove(n.model),e.bomb={planted:!0,dropped:!1,x:t[2],y:t[3],z:t[4],timer:t[5],beepT:0},e.makeBombModel()):!i&&n.planted&&(n.planted=!1,n.led&&(n.led.visible=!1),t[7]&&n.model&&(e.scene.remove(n.model),n.model=null));let r=e.bomb;r.timer=t[5],r.dropped=!!t[1],r.planted||(r.x=t[2],r.y=t[3],r.z=t[4]),r.defuser=t[6]>=0?e.byId.get(t[6]):null,r.exploded=!!t[7],r.defused=!!t[8]}applyActors(t){let e=this.G,n=Rd();for(let i of t){let r=e.byId.get(i[0]);if(!r)continue;let o=r.alive,a=!!i[7],l=r.tp!==i[21],c=i[10];if(r.hp=i[8],r.armor=i[9],r.helmet=!!(c&1),r.kit=!!(c&2),r.hasBomb=!!(c&4),r.protectT=c&16?1:0,c&32&&(r.spotted=e.time),r.money=i[14],r.kills=i[15],r.deaths=i[16],r.ggLevel=i[17],r.plantT=i[18],r.defuseT=i[19],r.hsKills=i[25],r.mvps=i[26],r.dmgDealt=i[27],r.respawnT=i[28],r.lastAttacker=i[29]>=0&&e.byId.get(i[29])||null,r.alive=a,!a&&o&&(r.deathT=0,r.deathDir=Math.random()<.5?1:-1),r.tp=i[21],r===e.player){let u=e.time-this.lastAction<.8||r.reloadT>0||r.throwT>0;l||a!==o?(r.x=i[1],r.y=i[2],r.z=i[3],r.vx=r.vy=r.vz=0,r.yaw=i[4],r.pitch=i[5],Fc(r,i[13]),r.nadeKey=i[12]||r.firstNade(),r.slot=i[11],r.reloadT=0,r.switchT=.3,r.scope=0,r.throwT=0,r.punchP=r.punchY=0,r.shotsFired=0,a&&(r.onGround=!0,r.stamina=1),this.lastAction=-9):u||(Fc(r,i[13]),i[12]&&i[12]!==r.nadeKey&&r.slot!==3&&(r.nadeKey=i[12]),i[11]!==r.slot&&r.has(i[11])&&(r.select(i[11]),i[11]===3&&i[12]&&(r.nadeKey=i[12])),r.has(r.slot)||r.select(r.bestSlot()));continue}let h=r.nb||(r.nb=[]);l&&(h.length=0),h.push([n,i[1],i[2],i[3],i[4],i[5]]),h.length>12&&h.shift(),(l||!o)&&(r.x=i[1],r.y=i[2],r.z=i[3],r.yaw=i[4],r.pitch=i[5]),r.crouch=i[6],Fc(r,i[13]),r.nadeKey=i[12]||null,r.slot=r.has(i[11])?i[11]:r.bestSlot(),r.speed2d=i[20],r.onGround=!!(c&8),r.scope=i[22],r.vx=i[23],r.vz=i[24]}}applyObjects(t,e,n,i){let r=this.G,o=new Set;for(let a of t||[]){o.add(a[0]);let l=e.get(a[0]);if(!l){let c=vi(a[1]);c.scale.setScalar(n),i&&c.rotation.set(0,a[0]*1.3%6.28,a[5]?0:Math.PI/2),r.scene.add(c),l={id:a[0],key:a[1],model:c,isBomb:i&&!!a[5]},e.set(a[0],l)}l.x=a[2],l.y=a[3],l.z=a[4],l.model.position.set(l.x,l.y,l.z)}for(let[a,l]of e)o.has(a)||(r.scene.remove(l.model),e.delete(a))}step(t,e){let n=this.G,i=n.player;if(n.time+=t,n.matchTime+=t,(n.phase==="freeze"||n.phase==="post"||n.phase==="live"&&!n.bomb.planted)&&(n.phaseT-=t),n.bomb.planted&&(n.bomb.timer-=t),n.shakeAmt=Math.max(0,n.shakeAmt-t*1.8),i.alive&&e&&!n.over){let o=i.slot,a=i.nadeKey;if(e.slot!==null&&e.slot!==void 0&&i.select(e.slot),n.applyMove(i,e,t),i.plantT<=0&&i.defuseT<=0){let l=n.outAtk.length,c=i.reloadSeq;gr(n,i,e,t),(n.outAtk.length>l||e.reload||e.alt||i.reloadSeq!==c)&&(this.lastAction=n.time)}(i.slot!==o||i.nadeKey!==a)&&(this.slotSeq++,this.lastAction=n.time),e.usePressed&&(this.acc.up=!0),e.drop&&(this.acc.dr=!0),i.flashT>0&&(i.flashT-=t)}let r=Rd()-Ex;for(let o of n.actors){if(!o.alive){o.deathT+=t;continue}if(o===i||!o.nb||!o.nb.length)continue;let a=o.nb,l=a.length-1;for(;l>0&&a[l-1][0]>r;)l--;let c=a[l-1]||a[l],h=a[l],u=h[0]-c[0],d=u>1e-4?Math.max(0,Math.min(1,(r-c[0])/u)):1;o.x=c[1]+(h[1]-c[1])*d,o.y=c[2]+(h[2]-c[2])*d,o.z=c[3]+(h[3]-c[3])*d;let p=h[4]-c[4];p=Math.atan2(Math.sin(p),Math.cos(p)),o.yaw=c[4]+p*d,o.pitch=c[5]+(h[5]-c[5])*d,o.fireAnim>0&&(o.fireAnim=Math.max(0,o.fireAnim-t*4))}for(let o of this.nades.values())o.model.rotation.x+=t*6,o.model.rotation.z+=t*3;n.bombBeep(t),n.animate(t),this.sendCmd(t,e)}sendCmd(t,e){let n=this.G,i=n.player;this.cmdT-=t;let r=n.outAtk.length>0&&this.cmdT<Ad/2;if(this.cmdT>0&&!r)return;this.cmdT=Ad;let o=i.w,a={p:[Qn(i.x),Qn(i.y),Qn(i.z)],v:[pe(i.vx),pe(i.vy),pe(i.vz)],g:i.onGround?1:0,y:Qn(i.yaw),pt:Qn(i.pitch),c:pe(i.crouch),w:e&&e.walk?1:0,u:e&&e.use?1:0,ss:this.slotSeq,s:i.slot,nk:i.nadeKey,rl:i.reloadSeq||0,sl:o.silenced?1:0,sc:i.scope};this.acc.up&&(a.up=1),this.acc.dr&&(a.dr=1),n.outAtk.length&&(a.at=n.outAtk.splice(0)),i.pendingFall&&(a.fall=pe(i.pendingFall),i.pendingFall=0),this.acc.up=this.acc.dr=!1,this.s.send({t:"c",c:a})}dispose(){for(let t of this.drops.values())this.G.scene.remove(t.model);for(let t of this.nades.values())this.G.scene.remove(t.model);this.drops.clear(),this.nades.clear()}};var Si=new URLSearchParams(location.search),zs=Si.has("autotest"),Nd=document.getElementById("c"),_r=window.AndroidBridge,ze;try{ze=new _o({canvas:Nd,antialias:!1,powerPreference:"high-performance",stencil:!1})}catch(s){throw document.body.innerHTML='<div style="color:#fff;font:20px sans-serif;padding:40px">WebGL is not available on this device.</div>',s}ze.outputColorSpace=ke;ze.autoClear=!1;ze.info.autoReset=!1;ze.shadowMap.type=ic;var Rx=Math.min(4,ze.capabilities.getMaxAnisotropy()),ie=new Be(90,1,.05,500);ie.rotation.order="YXZ";var na=new lr,Xi=new Be(62,1,.01,10);na.add(Xi);na.add(new Es(15133941,6969928,2.3));var kd=new As(16777215,1.5);kd.position.set(.5,1,.3);na.add(kd);var fn=null,ta=null,wi=null,ct=null,ks=null,$c=null,ea="medium",Wi=1,Oe="menu",pn=!1,dn=null,Hc="",Id=-1,Pe={bobPhase:0,swayX:0,swayY:0,flashT:0,lastSlot:-1,switchMax:.5,landKick:0},Vc=0,Xc=0,Pd=!1,Ns=0,zt=null,vr=new Map,Ae={frames:0,acc:0,fps:60,lowT:0,highT:0};function Cx(){let s=Xt.settings.quality;return s!=="auto"?s:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"medium":"high"}function br(){let s=window.innerWidth,t=window.innerHeight,e=yc[ea],n=Math.min(window.devicePixelRatio||1,2);ze.setPixelRatio(n*e.pixelRatio*Wi/Math.max(1,n*.75)),ze.setSize(s,t,!1),ie.aspect=s/t,ie.updateProjectionMatrix(),Xi.aspect=s/t,Xi.updateProjectionMatrix(),wi&&wi.setCamera(ie,t*ze.getPixelRatio(),fn.fog)}window.addEventListener("resize",br);function ia(s){fn&&fn.traverse(e=>{e.geometry&&e.isMesh&&!e.userData.shared&&e.geometry.dispose()}),ea=Cx(),fn=new lr,$c=s,ks=new _i(s);let t=yc[ea];ze.shadowMap.enabled=t.shadows,ta=Yu(ks,s,t,Rx),fn.add(ta.group),$u(fn,ta.theme,ks,t),fn.background=new Dt(ta.theme.skyBottom),wi=new Ho(fn,t),ie.far=t.drawDist+400,br()}var It=new Zo({onStart(s){qc(s)},onResume(){sa(!1)},onLeave(){Kc()},onRematch(){if(zt&&zt.role==="host"){zt.startMatch();return}let s=ct?ct.setup:Xt.setup;qc({...s})},canHost:()=>Td(),canDiscover:()=>!!(_r&&_r.netDiscover),defaultIp:()=>location.protocol==="http:"&&!/^(localhost|127\.)/.test(location.hostname)?location.host:"",onLanOpen(){vr=new Map,It.setFound([]),xr(!0,(s,t)=>{vr.set(s,{ip:s,info:t,seen:performance.now()});for(let[e,n]of vr)performance.now()-n.seen>5e3&&vr.delete(e);It.setFound([...vr.values()])})},onLanBack(){xr(!1),It.show("menu")},async onLanCreate(s){xr(!1);let t=new jo(Ld);zt=t,It.setLobby(null,0),It.show("lobby");try{await t.start(Xt.settings.name||k("you"),s),t.broadcastLobby()}catch{zt=null,t.link.stop(),It.lanError("host_failed")}},onLanSetup(s){zt&&zt.role==="host"&&zt.setSetup(s),It.show("lobby")},async onLanJoin(s,t){if(!s){It.lanError("conn_failed");return}xr(!1);let e=new Qo(Ld);zt=e,It.setLobby(null,-1),It.show("lobby");try{await e.join(s,t)}catch{zt===e&&(zt=null),It.lanError("conn_failed")}},onLobbyTeam(s){zt&&(zt.role==="host"?zt.setHostTeam(s):zt.setTeam(s))},onLobbyStart(){zt&&zt.role==="host"&&zt.startMatch()},onLobbyLeave(){Zc(),It.show("lan")},onToLobby(){!zt||zt.role!=="host"||(Bd(),zt.link.broadcast({t:"tolobby"}),zt.broadcastLobby(),It.show("lobby"))},onSettings(){Fd(),Xt.settings.quality!=="auto"&&Xt.settings.quality!==ea&&Oe==="menu"&&ia($c),br()},onBuy(s){ct&&(ct.role==="client"?(zt.send({t:"buy",k:s}),setTimeout(()=>It.buyOpen&&It.renderBuy(),250)):ct.buy(ct.player,s))},onRebuy(){ct&&(ct.role==="client"?(zt.send({t:"rebuy"}),setTimeout(()=>It.buyOpen&&It.renderBuy(),250)):ct.rebuy())},onAutobuy(){ct&&(ct.role==="client"?(zt.send({t:"autobuy"}),setTimeout(()=>It.buyOpen&&It.renderBuy(),250)):ct.autobuy())},onBuyOpen(s){s?At.unlock():Oe==="game"&&!pn&&At.lock()},onMatchScreen(){Oe="over",At.enabled=!1,At.unlock()},vibrate(s){_r&&_r.vibrate?_r.vibrate(s):navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(s)}});function Fd(){At.sens=Xt.settings.sens,At.mouseSens=Xt.settings.mouseSens,At.invertY=Xt.settings.invertY,At.btnScale=Xt.settings.btnScale}function qc(s){It.show("loading"),setTimeout(()=>zd(s),30)}function zd(s,t=null){ct&&(zt&&zt.matchClosed&&ct.role==="client"&&zt.matchClosed(),ct.dispose(),ct=null);let e=wn.find(i=>i.id===s.map)||wn[0];e.modes.includes(s.mode)||(s.mode=e.modes[0]),ia(e);let n={def:e,scene:fn,fx:wi,ui:It,setup:s,playerName:t?Xt.settings.name||k("you"):k("you"),autopilot:zs};return t&&(n.role=t.role,n.humans=t.humans||[],n.roster=t.roster||null,n.youId=t.youId),ct=new qo(n),(!t||t.role==="host")&&ct.start(),It.enterGame(ct),Oe="game",pn=!1,At.reset(),At.enabled=!0,At.lock(),vt.startAmbience(e.theme),Xc=0,Ns=ct.player.y,ct}var Ld={startGame:(s,t)=>zd(s,t),onLobby(s){let t=zt&&zt.role==="client"?zt.myId:0;It.setLobby(s,t)},toLobby(){zt&&zt.matchClosed&&zt.matchClosed(),Bd(),It.show("lobby")},netEnded(s){let t=!!ct;Zc(),t&&Kc(!0),It.lanError(s)}};function Zc(){if(!zt)return;let s=zt;zt=null,s.stop()}function Bd(){zt&&zt.matchClosed&&zt.matchClosed(),ct&&(ct.dispose(),ct=null),vt.stopAmbience(),It.exitGame(),Oe="menu",pn=!1,At.enabled=!1,At.unlock(),Jc(null)}function Kc(s=!1){s||Zc(),ct&&(ct.dispose(),ct=null),vt.stopAmbience(),It.exitGame(),Oe="menu",pn=!1,At.enabled=!1,At.unlock(),Jc(null),Xt.save(),ia(wn[0]),s||It.show("menu")}function sa(s){Oe==="game"&&(pn=s,s?(It.closeBuy(),It.show("pause"),At.unlock(),At.reset(),Fs()||vt.stopAmbience()):(It.hideScreens(),At.lock(),Fs()||vt.startAmbience($c.theme)))}var Fs=()=>!!(ct&&ct.role!=="solo");window.onAndroidBack=()=>Oe==="game"?It.buyOpen?(It.closeBuy(),"handled"):(sa(!pn),"handled"):Oe==="over"?(Kc(),"handled"):It.screen==="lobby"?(It.h.onLobbyLeave(),"handled"):It.screen==="lan"?(It.h.onLanBack(),"handled"):It.screen&&It.screen!=="menu"?(It.show(It.screen==="settings"&&It.settingsBack==="pause"?"pause":"menu"),"handled"):"exit";window.onAndroidPause=()=>{Oe==="game"&&!pn&&!zs&&sa(!0),Fs()||vt.suspend()};window.onAndroidResume=()=>{vt.resume()};document.addEventListener("visibilitychange",()=>{document.hidden?window.onAndroidPause():vt.resume()});function Jc(s){if(!s||!s.alive){dn&&(Xi.remove(dn),dn=null,Hc="");return}let t=s.w,e=zo(t);e===Hc&&s.team===Id&&dn||(dn&&Xi.remove(dn),dn=id(e,t.def.kind,s.team),Xi.add(dn),Hc=e,Id=s.team,Pe.switchMax=Math.max(.3,s.switchT))}function Ix(s,t,e,n){if(!dn)return;let i=dn.userData,r=s.w.def,o=i.holder,a=Math.min(1,s.speed2d/6);s.onGround&&(Pe.bobPhase+=t*(4+a*7)*(a>.05?1:.3));let l=a*(s.onGround?1:.2);Pe.swayX+=(-e*.6-Pe.swayX)*Math.min(1,t*10),Pe.swayY+=(n*.6-Pe.swayY)*Math.min(1,t*10);let c=i.base.x+Math.sin(Pe.bobPhase)*.012*l+Pe.swayX*.04,h=i.base.y-Math.abs(Math.cos(Pe.bobPhase))*.012*l+Pe.swayY*.04-s.crouch*.01,u=i.base.z,d=i.baseRot.x,p=i.baseRot.y+Pe.swayX*.3,g=0;if(s.onGround||(h-=.015,d+=.05),Pe.landKick=Math.max(0,Pe.landKick-t*4),h-=Pe.landKick*.03,s.switchT>0){let y=s.switchT/Pe.switchMax;h-=.22*y*y,d-=.6*y}if(s.reloadT>0&&r.reload){let y=1-s.reloadT/r.reload,m=r.shellReload?Math.sin(Math.min(1,y)*Math.PI)*.4:Math.sin(Math.min(1,y)*Math.PI);h-=.08*m,d-=.5*m,g+=.35*m,c-=.02*m}if(r.kind==="knife"){let y=s.fireAnim;if(y>0){let m=Math.sin((1-y)*Math.PI);p+=.9*m,d-=.5*m,c-=.08*m,u-=.06*m}}else if(r.kind==="grenade"){if(s.throwT>0&&(h+=.03,u+=.08,d+=.5),s.fireAnim>0){let y=Math.sin(s.fireAnim*Math.PI);u-=.15*y,d-=.8*y}}else if(r.kind==="bomb")s.plantT>0&&(h-=.05,d+=.25,c+=Math.sin(s.plantT*22)*.003);else{let y=s.fireAnim,m=r.kind==="sniper"||s.w.key==="deagle"||r.kind==="shotgun"?1.8:1;u+=y*.035*m,d+=y*.06*m,h+=y*.006}o.position.set(c,h,u),o.rotation.set(d,p,g),Pe.flashT-=t,i.flash.visible=Pe.flashT>0,i.flash.visible&&(i.flash.material.rotation=Math.random()*6),dn.visible=!(s.scope>0&&r.kind==="sniper")}It.shot=(s,t)=>{ct&&s===ct.viewActor&&!t&&(Pe.flashT=.045)};var Px=["slot1","slot2","slot3","slot4","slot5"];function Lx(s,t){let e=s.x,n=s.y+s.eyeHeight(),i=s.z,r=null,o=t;for(let a of ct.actors)if(!(!a.alive||!ct.isEnemy(s,a)))for(let l of[a.eyeHeight(),a.bodyHeight()*.65]){let c=a.x-e,h=a.y+l-n,u=a.z-i,d=Math.hypot(c,h,u);if(d>70)continue;let p=Math.atan2(-c,-u),g=Math.atan2(h,Math.hypot(c,u)),y=p-s.yaw;y=Math.atan2(Math.sin(y),Math.cos(y));let m=g-s.pitch,f=Math.hypot(y,m)*d/Math.max(4,d);f<o&&ct.grid.los(e,n,i,a.x,a.y+l,a.z)&&!wi.smokeBlocks(e,n,i,a.x,a.y+l,a.z)&&(o=f,r={e:a,dyaw:y,dp:m,d})}return r}function Dx(s){let t=ct.player,[e,n]=At.takeLook(),i=e,r=n,o=ie.fov/Xt.settings.fov;i*=o,r*=o;let a=Xt.settings,l=At.touchMode,c=null;if(t.alive&&a.aimAssist&&l&&t.w.def.kind!=="knife"&&t.w.def.kind!=="grenade"&&(c=Lx(t,.12),c)){i*=.6,r*=.6;let f=(At.held.fire?3.2:Math.abs(e)+Math.abs(n)>0?1.2:0)*s;t.yaw+=c.dyaw*Math.min(1,f),t.pitch+=c.dp*Math.min(1,f)}t.alive&&(t.yaw-=i,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-r)));let h={wx:0,wz:0,walk:At.held.walk,crouch:At.held.crouch,jump:At.held.jump||At.consume("jump"),fire:At.held.fire,alt:At.consume("scope"),use:At.held.use,usePressed:!1,reload:At.consume("reload"),slot:null,drop:At.consume("drop")};h.usePressed=h.use&&!Pd,Pd=h.use;let u=At.move,d=-Math.sin(t.yaw),p=-Math.cos(t.yaw),g=Math.cos(t.yaw),y=-Math.sin(t.yaw);h.wx=d*u.y+g*u.x,h.wz=p*u.y+y*u.x,Px.forEach((f,S)=>{At.consume(f)&&(h.slot=S)}),At.consume("last")&&(h.slot=t.has(t.lastSlot)?t.lastSlot:t.bestSlot());let m=At.consume("next")?1:At.consume("prev")?-1:0;if(m)for(let f=1;f<=5;f++){let S=(t.slot+m*f+10)%5;if(t.has(S)){h.slot=S;break}}if(a.autoFire&&t.alive&&t.w.def.clip&&!h.fire){let f=t.x,S=t.y+t.eyeHeight(),w=t.z,v=t.forward({x:0,y:0,z:0});for(let I of ct.actors){if(!I.alive||!ct.isEnemy(t,I))continue;let T=Vo(I,f,S,w,v.x,v.y,v.z,80);if(T&&ct.grid.los(f,S,w,f+v.x*T.t*.98,S+v.y*T.t*.98,w+v.z*T.t*.98)){h.fire=!0;break}}}return It.buyOpen&&(h.fire=!1,h.alt=!1),{cmd:h,lookDX:i,lookDY:r}}function Ux(){(At.consume("menu")||At.consume("unlocked"))&&(It.buyOpen?It.closeBuy():zs||sa(!pn)),At.consume("buy")&&It.toggleBuy()}function Nx(){let s=ct.player;if(s.alive)return s;if(ct.mode!=="bomb")return null;let t=ct.actors.filter(n=>n.alive&&n.team===s.team),e=t.length?t:ct.actors.filter(n=>n.alive);return e.length?(At.consume("fire_tap")&&Xc++,e[Xc%e.length]):null}var Dd=!1;function kx(s,t){let e=ct.player,i=Xt.settings.fov;if(t){Ns+=(t.y-Ns)*Math.min(1,s*14),Math.abs(t.y-Ns)>1.2&&(Ns=t.y);let r=Ns+t.eyeHeight();ie.position.set(t.x,r,t.z);let o=ct.shakeAmt+Vc;ie.rotation.set(t.pitch+t.punchP*.55+(Math.random()-.5)*o*.03,t.yaw+t.punchY*.55+(Math.random()-.5)*o*.03,(Math.random()-.5)*o*.01),t.scope&&t.w.def.kind==="sniper"&&(i=t.scope===1?40:t.w.def.zoom>=4?15:25)}else{let r=e.lastAttacker&&e.lastAttacker.alive?e.lastAttacker:null,o=Math.min(1,e.deathT/1.2),a=e.x,l=e.y+1.6+o*2.4,c=e.z;ie.position.set(a+Math.sin(e.yaw)*o*2.5,l,c+Math.cos(e.yaw)*o*2.5),r?ie.lookAt(r.x,r.y+1.2,r.z):ie.lookAt(e.x,e.y+.3,e.z)}Math.abs(ie.fov-i)>.01&&(ie.fov=i>ie.fov?Math.min(i,ie.fov+s*220):i<50?i:Math.max(i,ie.fov-s*220),ie.updateProjectionMatrix(),wi.setCamera(ie,window.innerHeight*ze.getPixelRatio(),fn.fog)),Vc=Math.max(0,Vc-s*3)}var Ud=performance.now(),Gc=0;function Od(s){requestAnimationFrame(Od);let t=Math.min(.05,(s-Ud)/1e3);if(Ud=s,Ae.frames++,Ae.acc+=t,Ae.acc>=1&&(Ae.fps=Math.round(Ae.frames/Ae.acc),Ae.frames=0,Ae.acc=0,Xt.settings.quality==="auto"&&Oe==="game"&&!pn&&(Ae.fps<38?(Ae.lowT++,Ae.highT=0):Ae.fps>57?(Ae.highT++,Ae.lowT=0):Ae.lowT=Ae.highT=0,Ae.lowT>=2&&Wi>.55&&(Wi=Math.max(.55,Wi-.15),Ae.lowT=0,br()),Ae.highT>=4&&Wi<1&&(Wi=Math.min(1,Wi+.1),Ae.highT=0,br()))),At.pollGamepad(t),Oe==="menu"||!ct){if(Gc+=t*.05,ks){let e=ks.w*yt/2,n=ks.d*yt/2,i=Math.max(e,n)*.9;ie.position.set(e+Math.cos(Gc)*i,26,n+Math.sin(Gc)*i),ie.lookAt(e,0,n),ie.fov!==60&&(ie.fov=60,ie.updateProjectionMatrix())}Wc();return}if((Oe==="game"||Oe==="over")&&(Ux(),!pn||Fs())){let e=Fs()?1:Yc.speed,n={cmd:null,lookDX:0,lookDY:0};Oe==="game"&&!pn?n=Dx(t):Fs()&&(n={cmd:{wx:0,wz:0},lookDX:0,lookDY:0}),!ct.player.alive&&At.held.fire&&!Dd&&At.pressed.add("fire_tap"),Dd=At.held.fire;let i=Math.ceil(e);for(let h=0;h<i;h++)ct.update(t*e/i,n.cmd),h===0&&n.cmd&&(n.cmd.reload=!1,n.cmd.alt=!1,n.cmd.slot=null,n.cmd.drop=!1,n.cmd.usePressed=!1);if(zt&&zt.role==="host"&&ct&&zt.tick(t),!ct){Wc();return}wi.update(t*e);let r=Nx();ct.viewActor=r||ct.player,ct.listenerActor=ct.viewActor,Jc(r),r&&(r.slot!==Pe.lastSlot&&(Pe.lastSlot=r.slot),Ix(r,t,n.lookDX,n.lookDY)),kx(t,r);let o=ct.viewActor;vt.setListener(ie.position.x,ie.position.y,ie.position.z,o.alive?o.yaw:ct.player.yaw);let a=r?Dc(r,r.w.def)+Math.min(.06,r.punchP*.3):0,l=4+Math.tan(a)/Math.tan(Lo.degToRad(ie.fov)/2)*window.innerHeight*.5,c=wi.smokeAt(ie.position.x,ie.position.y,ie.position.z);It.update(ct,{target:r,x:ie.position.x,z:ie.position.z,yaw:r?r.yaw:ct.player.yaw,scoped:!!(r&&r.scope&&r.w.def.kind==="sniper"),gap:Math.min(60,l),smoke:c,score:At.held.score||ct.phase==="post"&&!1,fps:Ae.fps,crouchHeld:At.held.crouch},t),Oe==="game"&&!zs&&(Xt.stats.time+=t),zs&&Yc.tick(t*e)}Wc()}function Wc(){fn&&(ze.info.reset(),ze.clear(),ze.render(fn,ie),dn&&Oe==="game"&&!pn&&(ze.clearDepth(),ze.render(na,Xi)))}var Yc={speed:parseFloat(Si.get("speed")||"1"),time:0,errors:[],tick(s){this.time+=s;let t=ct.player;window.__report={time:this.time,round:ct.round,score:ct.score.slice(),phase:ct.phase,over:ct.over,kills:ct.actors.reduce((e,n)=>e+n.kills,0),deaths:ct.actors.reduce((e,n)=>e+n.deaths,0),player:{alive:t.alive,hp:t.hp,x:t.x,z:t.z,money:t.money,kills:t.kills,weapon:t.w.key},bomb:{planted:ct.bomb.planted,exploded:!!ct.bomb.exploded,defused:!!ct.bomb.defused},fps:Ae.fps,errors:this.errors,ggTop:Math.max(...ct.actors.map(e=>e.ggLevel)),stuck:ct.actors.filter(e=>e.alive&&e.brain&&e.brain.stuckN>3).length,calls:ze.info.render.calls,tris:ze.info.render.triangles}}};window.addEventListener("error",s=>Yc.errors.push(String(s.message)));window.__game=()=>ct;window.__session=()=>zt;window.__ui=It;window.__input=At;document.body.classList.toggle("desktop",!At.touchMode);At.attach(Nd,document.getElementById("touch"));At.onAnyPress=()=>vt.init();window.addEventListener("pointerdown",()=>{vt.init(),At.touchMode&&document.body.classList.remove("desktop")},{capture:!0});window.addEventListener("pointerdown",s=>{s.pointerType==="mouse"&&!("ontouchstart"in window)&&document.body.classList.add("desktop")},{capture:!0});Fd();ia(wn[0]);requestAnimationFrame(Od);if(zs){let s={map:Si.get("map")||"sands",mode:Si.get("mode")||"bomb",team:Si.get("team")||"auto",bots:parseInt(Si.get("bots")||"4",10),diff:Si.get("diff")||"normal",rounds:parseInt(Si.get("rounds")||"3",10),ff:!1};qc(s)}else It.show("menu");})();
