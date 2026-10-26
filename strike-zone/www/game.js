(()=>{var Bl="170";var ud=0,Uc=1,dd=2;var qh=1,kl=2,Nn=3,li=0,Oe=1,zn=2,ri=0,oi=1,wn=2,Nc=3,Fc=4,fd=5,Ei=100,pd=101,md=102,gd=103,xd=104,yd=200,_d=201,vd=202,Md=203,va=204,Ma=205,bd=206,Sd=207,wd=208,Td=209,Ed=210,Ad=211,Rd=212,Cd=213,Pd=214,ba=0,Sa=1,wa=2,as=3,Ta=4,Ea=5,Aa=6,Ra=7,Ol=0,Id=1,Ld=2,ai=0,Dd=1,Ud=2,Nd=3,Fd=4,zd=5,Bd=6,kd=7;var Yh=300,ls=301,cs=302,Ca=303,Pa=304,_o=306,Zs=1e3,Ri=1001,Ia=1002,tn=1003,Od=1004;var fr=1005;var bn=1006,Vo=1007;var Bn=1008;var Vn=1009,$h=1010,Zh=1011,Ks=1012,Hl=1013,Ci=1014,Sn=1015,rr=1016,Vl=1017,Gl=1018,hs=1020,Kh=35902,Jh=1021,jh=1022,xn=1023,Qh=1024,tu=1025,ss=1026,us=1027,Wl=1028,Xl=1029,eu=1030,ql=1031;var Yl=1033,Gr=33776,Wr=33777,Xr=33778,qr=33779,La=35840,Da=35841,Ua=35842,Na=35843,Fa=36196,za=37492,Ba=37496,ka=37808,Oa=37809,Ha=37810,Va=37811,Ga=37812,Wa=37813,Xa=37814,qa=37815,Ya=37816,$a=37817,Za=37818,Ka=37819,Ja=37820,ja=37821,Yr=36492,Qa=36494,tl=36495,nu=36283,el=36284,nl=36285,il=36286;var $r=2300,sl=2301,Go=2302,zc=2400,Bc=2401,kc=2402;var Hd=3200,Vd=3201;var iu=0,Gd=1,ii="",De="srgb",_s="srgb-linear",vo="linear",ae="srgb";var Bi=7680;var Oc=519,Wd=512,Xd=513,qd=514,su=515,Yd=516,$d=517,Zd=518,Kd=519,rl=35044,vs=35048;var Hc="300 es",kn=2e3,Zr=2001,ci=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vc=1234567,qs=Math.PI/180,Js=180/Math.PI;function On(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[s&255]+Be[s>>8&255]+Be[s>>16&255]+Be[s>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function We(s,t,e){return Math.max(t,Math.min(e,s))}function $l(s,t){return(s%t+t)%t}function Jd(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function jd(s,t,e){return s!==t?(e-s)/(t-s):0}function Ys(s,t,e){return(1-e)*s+e*t}function Qd(s,t,e,n){return Ys(s,t,1-Math.exp(-e*n))}function tf(s,t=1){return t-Math.abs($l(s,t*2)-t)}function ef(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nf(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function sf(s,t){return s+Math.floor(Math.random()*(t-s+1))}function rf(s,t){return s+Math.random()*(t-s)}function of(s){return s*(.5-Math.random())}function af(s){s!==void 0&&(Vc=s);let t=Vc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lf(s){return s*qs}function cf(s){return s*Js}function hf(s){return(s&s-1)===0&&s!==0}function uf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function df(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ff(s,t,e,n,i){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),c=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*h,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function gn(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var Mo={DEG2RAD:qs,RAD2DEG:Js,generateUUID:On,clamp:We,euclideanModulo:$l,mapLinear:Jd,inverseLerp:jd,lerp:Ys,damp:Qd,pingpong:tf,smoothstep:ef,smootherstep:nf,randInt:sf,randFloat:rf,randFloatSpread:of,seededRandom:af,degToRad:lf,radToDeg:cf,isPowerOfTwo:hf,ceilPowerOfTwo:uf,floorPowerOfTwo:df,setQuaternionFromProperEuler:ff,normalize:re,denormalize:gn},Vt=class s{constructor(t=0,e=0){s.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kt=class s{constructor(t,e,n,i,r,o,a,l,c){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],S=i[1],w=i[4],v=i[7],P=i[2],T=i[5],C=i[8];return r[0]=o*x+a*S+l*P,r[3]=o*m+a*w+l*T,r[6]=o*f+a*v+l*C,r[1]=c*x+h*S+u*P,r[4]=c*m+h*w+u*T,r[7]=c*f+h*v+u*C,r[2]=d*x+p*S+g*P,r[5]=d*m+p*w+g*T,r[8]=d*f+p*v+g*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=e*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(i*c-h*n)*x,t[2]=(a*n-i*o)*x,t[3]=d*x,t[4]=(h*e-i*l)*x,t[5]=(i*r-a*e)*x,t[6]=p*x,t[7]=(n*l-c*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Wo.makeScale(t,e)),this}rotate(t){return this.premultiply(Wo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Wo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wo=new kt;function ru(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pf(){let s=Kr("canvas");return s.style.display="block",s}var Gc={};function Ws(s){s in Gc||(Gc[s]=!0,console.warn(s))}function mf(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gf(s){let t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function xf(s){let t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var jt={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(s.r=rs(s.r),s.g=rs(s.g),s.b=rs(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?vo:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Hn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Wc=[.64,.33,.3,.6,.15,.06],Xc=[.2126,.7152,.0722],qc=[.3127,.329],Yc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$c=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);jt.define({[_s]:{primaries:Wc,whitePoint:qc,transfer:vo,toXYZ:Yc,fromXYZ:$c,luminanceCoefficients:Xc,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Wc,whitePoint:qc,transfer:ae,toXYZ:Yc,fromXYZ:$c,luminanceCoefficients:Xc,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});var ki,ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ki===void 0&&(ki=Kr("canvas")),ki.width=t.width,ki.height=t.height;let n=ki.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ki}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){let e=Kr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Hn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},yf=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=On(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Xo(i[o].image)):r.push(Xo(i[o]))}else r=Xo(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function Xo(s){return typeof HTMLImageElement!="undefined"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&s instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&s instanceof ImageBitmap?ol.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var _f=0,Ye=class s extends ci{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=Ri,i=Ri,r=bn,o=Bn,a=xn,l=Vn,c=s.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=On(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Zs:t.x=t.x-Math.floor(t.x);break;case Ri:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Zs:t.y=t.y-Math.floor(t.y);break;case Ri:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Yh;Ye.DEFAULT_ANISOTROPY=1;var le=class s{constructor(t=0,e=0,n=0,i=1){s.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,v=(p+1)/2,P=(f+1)/2,T=(h+d)/4,C=(u+x)/4,R=(g+m)/4;return w>v&&w>P?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=T/n,r=C/n):v>P?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=T/i,r=R/i):P<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),n=C/r,i=R/r),this.set(n,i,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(d-h)/S,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},al=class extends ci{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new le(0,0,t,e),this.scissorTest=!1,this.viewport=new le(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends al{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},jr=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ll=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=tn,this.minFilter=tn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=r[o+0],p=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=g,t[e+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-a,f=l*d+c*p+h*g+u*x,S=f>=0?1:-1,w=1-f*f;if(w>Number.EPSILON){let P=Math.sqrt(w),T=Math.atan2(P,f*S);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let v=a*S;if(l=l*m+d*v,c=c*m+p*v,h=h*m+g*v,u=u*m+x*v,m===1-a){let P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*d,t[e+1]=l*g+h*d+c*u-a*p,t[e+2]=c*g+h*p+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let l=1-a*a;if(l<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class s{constructor(t=0,e=0,n=0){s.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return qo.copy(this).projectOnVector(t),this.sub(qo)}reflect(t){return this.sub(qo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qo=new I,Zc=new yn,Wn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,fn):fn.fromBufferAttribute(r,o),fn.applyMatrix4(t.matrixWorld),this.expandByPoint(fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),pr.copy(n.boundingBox)),pr.applyMatrix4(t.matrixWorld),this.union(pr)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,fn),fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ds),mr.subVectors(this.max,Ds),Oi.subVectors(t.a,Ds),Hi.subVectors(t.b,Ds),Vi.subVectors(t.c,Ds),Jn.subVectors(Hi,Oi),jn.subVectors(Vi,Hi),_i.subVectors(Oi,Vi);let e=[0,-Jn.z,Jn.y,0,-jn.z,jn.y,0,-_i.z,_i.y,Jn.z,0,-Jn.x,jn.z,0,-jn.x,_i.z,0,-_i.x,-Jn.y,Jn.x,0,-jn.y,jn.x,0,-_i.y,_i.x,0];return!Yo(e,Oi,Hi,Vi,mr)||(e=[1,0,0,0,1,0,0,0,1],!Yo(e,Oi,Hi,Vi,mr))?!1:(gr.crossVectors(Jn,jn),e=[gr.x,gr.y,gr.z],Yo(e,Oi,Hi,Vi,mr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Pn=[new I,new I,new I,new I,new I,new I,new I,new I],fn=new I,pr=new Wn,Oi=new I,Hi=new I,Vi=new I,Jn=new I,jn=new I,_i=new I,Ds=new I,mr=new I,gr=new I,vi=new I;function Yo(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){vi.fromArray(s,r);let a=i.x*Math.abs(vi.x)+i.y*Math.abs(vi.y)+i.z*Math.abs(vi.z),l=t.dot(vi),c=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var vf=new Wn,Us=new I,$o=new I,Xn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):vf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Us.subVectors(t,this.center);let e=Us.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Us,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($o.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Us.copy(t.center).add($o)),this.expandByPoint(Us.copy(t.center).sub($o))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},In=new I,Zo=new I,xr=new I,Qn=new I,Ko=new I,yr=new I,Jo=new I,js=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zo.copy(t).add(e).multiplyScalar(.5),xr.copy(e).sub(t).normalize(),Qn.copy(this.origin).sub(Zo);let r=t.distanceTo(e)*.5,o=-this.direction.dot(xr),a=Qn.dot(this.direction),l=-Qn.dot(xr),c=Qn.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Zo).addScaledVector(xr,d),p}intersectSphere(t,e){In.subVectors(t.center,this.origin);let n=In.dot(this.direction),i=In.dot(In)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,i,r){Ko.subVectors(e,t),yr.subVectors(n,t),Jo.crossVectors(Ko,yr);let o=this.direction.dot(Jo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Qn.subVectors(this.origin,t);let l=a*this.direction.dot(yr.crossVectors(Qn,yr));if(l<0)return null;let c=a*this.direction.dot(Ko.cross(Qn));if(c<0||l+c>o)return null;let h=-a*Qn.dot(Jo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class s{constructor(t,e,n,i,r,o,a,l,c,h,u,d,p,g,x,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,x,m)}set(t,e,n,i,r,o,a,l,c,h,u,d,p,g,x,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Gi.setFromMatrixColumn(t,0).length(),r=1/Gi.setFromMatrixColumn(t,1).length(),o=1/Gi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=d-x*c,e[9]=-a*l,e[2]=x-d*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d+x*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=x+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,p=l*u,g=c*h,x=c*u;e[0]=d-x*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=x-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,p=o*u,g=a*h,x=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=d*c+x,e[1]=l*u,e[5]=x*c+d,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=x-d*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=d-x*u}else if(t.order==="XZY"){let d=o*l,p=o*c,g=a*l,x=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+x,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=x*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mf,t,bf)}lookAt(t,e,n){let i=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),ti.crossVectors(n,je),ti.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),ti.crossVectors(n,je)),ti.normalize(),_r.crossVectors(je,ti),i[0]=ti.x,i[4]=_r.x,i[8]=je.x,i[1]=ti.y,i[5]=_r.y,i[9]=je.y,i[2]=ti.z,i[6]=_r.z,i[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],S=n[3],w=n[7],v=n[11],P=n[15],T=i[0],C=i[4],R=i[8],M=i[12],y=i[1],A=i[5],B=i[9],F=i[13],W=i[2],X=i[6],V=i[10],J=i[14],k=i[3],it=i[7],st=i[11],mt=i[15];return r[0]=o*T+a*y+l*W+c*k,r[4]=o*C+a*A+l*X+c*it,r[8]=o*R+a*B+l*V+c*st,r[12]=o*M+a*F+l*J+c*mt,r[1]=h*T+u*y+d*W+p*k,r[5]=h*C+u*A+d*X+p*it,r[9]=h*R+u*B+d*V+p*st,r[13]=h*M+u*F+d*J+p*mt,r[2]=g*T+x*y+m*W+f*k,r[6]=g*C+x*A+m*X+f*it,r[10]=g*R+x*B+m*V+f*st,r[14]=g*M+x*F+m*J+f*mt,r[3]=S*T+w*y+v*W+P*k,r[7]=S*C+w*A+v*X+P*it,r[11]=S*R+w*B+v*V+P*st,r[15]=S*M+w*F+v*J+P*mt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],p=t[14],g=t[3],x=t[7],m=t[11],f=t[15];return g*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*p-n*l*p)+x*(+e*l*p-e*c*d+r*o*d-i*o*p+i*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],p=t[11],g=t[12],x=t[13],m=t[14],f=t[15],S=u*m*c-x*d*c+x*l*p-a*m*p-u*l*f+a*d*f,w=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,v=h*x*c-g*u*c+g*a*p-o*x*p-h*a*f+o*u*f,P=g*u*l-h*x*l-g*a*d+o*x*d+h*a*m-o*u*m,T=e*S+n*w+i*v+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return t[0]=S*C,t[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*C,t[2]=(a*m*r-x*l*r+x*i*c-n*m*c-a*i*f+n*l*f)*C,t[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*p-n*l*p)*C,t[4]=w*C,t[5]=(h*m*r-g*d*r+g*i*p-e*m*p-h*i*f+e*d*f)*C,t[6]=(g*l*r-o*m*r-g*i*c+e*m*c+o*i*f-e*l*f)*C,t[7]=(o*d*r-h*l*r+h*i*c-e*d*c-o*i*p+e*l*p)*C,t[8]=v*C,t[9]=(g*u*r-h*x*r-g*n*p+e*x*p+h*n*f-e*u*f)*C,t[10]=(o*x*r-g*a*r+g*n*c-e*x*c-o*n*f+e*a*f)*C,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*C,t[12]=P*C,t[13]=(h*x*i-g*u*i+g*n*d-e*x*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*x*i-g*n*l+e*x*l+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*C,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,x=o*h,m=o*u,f=a*u,S=l*c,w=l*h,v=l*u,P=n.x,T=n.y,C=n.z;return i[0]=(1-(x+f))*P,i[1]=(p+v)*P,i[2]=(g-w)*P,i[3]=0,i[4]=(p-v)*T,i[5]=(1-(d+f))*T,i[6]=(m+S)*T,i[7]=0,i[8]=(g+w)*C,i[9]=(m-S)*C,i[10]=(1-(d+x))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,r=Gi.set(i[0],i[1],i[2]).length(),o=Gi.set(i[4],i[5],i[6]).length(),a=Gi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],pn.copy(this);let c=1/r,h=1/o,u=1/a;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=kn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,g;if(a===kn)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Zr)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=kn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*c,p=(n+i)*h,g,x;if(a===kn)g=(o+r)*u,x=-2*u;else if(a===Zr)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Gi=new I,pn=new Zt,Mf=new I(0,0,0),bf=new I(1,1,1),ti=new I,_r=new I,je=new I,Kc=new Zt,Jc=new yn,en=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-We(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-We(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(We(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Sf=0,jc=new I,Wi=new yn,Ln=new Zt,vr=new I,Ns=new I,wf=new I,Tf=new yn,Qc=new I(1,0,0),th=new I(0,1,0),eh=new I(0,0,1),nh={type:"added"},Ef={type:"removed"},Xi={type:"childadded",child:null},jo={type:"childremoved",child:null},Ue=class s extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=On(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new I,e=new en,n=new yn,i=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Zt},normalMatrix:{value:new kt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(Qc,t)}rotateY(t){return this.rotateOnAxis(th,t)}rotateZ(t){return this.rotateOnAxis(eh,t)}translateOnAxis(t,e){return jc.copy(t).applyQuaternion(this.quaternion),this.position.add(jc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qc,t)}translateY(t){return this.translateOnAxis(th,t)}translateZ(t){return this.translateOnAxis(eh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?vr.copy(t):vr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(Ns,vr,this.up):Ln.lookAt(vr,Ns,this.up),this.quaternion.setFromRotationMatrix(Ln),i&&(Ln.extractRotation(i.matrixWorld),Wi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ef),jo.child=t,this.dispatchEvent(jo),jo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,t,wf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Tf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ue.DEFAULT_UP=new I(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=new I,Dn=new I,Qo=new I,Un=new I,qi=new I,Yi=new I,ih=new I,ta=new I,ea=new I,na=new I,ia=new le,sa=new le,ra=new le,si=class s{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),mn.subVectors(t,e),i.cross(mn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){mn.subVectors(i,e),Dn.subVectors(n,e),Qo.subVectors(t,e);let o=mn.dot(mn),a=mn.dot(Dn),l=mn.dot(Qo),c=Dn.dot(Dn),h=Dn.dot(Qo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,Un)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Un.x),l.addScaledVector(o,Un.y),l.addScaledVector(a,Un.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return ia.setScalar(0),sa.setScalar(0),ra.setScalar(0),ia.fromBufferAttribute(t,e),sa.fromBufferAttribute(t,n),ra.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ia,r.x),o.addScaledVector(sa,r.y),o.addScaledVector(ra,r.z),o}static isFrontFacing(t,e,n,i){return mn.subVectors(n,e),Dn.subVectors(t,e),mn.cross(Dn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Dn.subVectors(this.a,this.b),mn.cross(Dn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;qi.subVectors(i,n),Yi.subVectors(r,n),ta.subVectors(t,n);let l=qi.dot(ta),c=Yi.dot(ta);if(l<=0&&c<=0)return e.copy(n);ea.subVectors(t,i);let h=qi.dot(ea),u=Yi.dot(ea);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(qi,o);na.subVectors(t,r);let p=qi.dot(na),g=Yi.dot(na);if(g>=0&&p<=g)return e.copy(r);let x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Yi,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return ih.subVectors(r,i),a=(u-h)/(u-h+(p-g)),e.copy(i).addScaledVector(ih,a);let f=1/(m+x+d);return o=x*f,a=d*f,e.copy(n).addScaledVector(qi,o).addScaledVector(Yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ou={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function oa(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var It=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=jt.workingColorSpace){if(t=$l(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=oa(o,r,t+1/3),this.g=oa(o,r,t),this.b=oa(o,r,t-1/3)}return jt.toWorkingColorSpace(this,i),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){let n=ou[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=rs(t.r),this.g=rs(t.g),this.b=rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return jt.fromWorkingColorSpace(ke.copy(this),t),Math.round(We(ke.r*255,0,255))*65536+Math.round(We(ke.g*255,0,255))*256+Math.round(We(ke.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(ke.copy(this),e);let n=ke.r,i=ke.g,r=ke.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=De){jt.fromWorkingColorSpace(ke.copy(this),t);let e=ke.r,n=ke.g,i=ke.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(Mr);let n=Ys(ei.h,Mr.h,e),i=Ys(ei.s,Mr.s,e),r=Ys(ei.l,Mr.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ke=new It;It.NAMES=ou;var Af=0,Tn=class extends ci{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=On(),this.name="",this.blending=oi,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=va,this.blendDst=Ma,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new It(0,0,0),this.blendAlpha=0,this.depthFunc=as,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==oi&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==va&&(n.blendSrc=this.blendSrc),this.blendDst!==Ma&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==as&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Oc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qn=class extends Tn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ee=new I,br=new Vt,xe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=rl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==rl&&(t.usage=this.usage),t}};var to=class extends xe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var eo=class extends xe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var _e=class extends xe{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rf=0,an=new Zt,aa=new Ue,$i=new I,Qe=new Wn,Fs=new Wn,Le=new I,Ce=class s extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rf++}),this.uuid=On(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ru(t)?eo:to)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return an.makeRotationFromQuaternion(t),this.applyMatrix4(an),this}rotateX(t){return an.makeRotationX(t),this.applyMatrix4(an),this}rotateY(t){return an.makeRotationY(t),this.applyMatrix4(an),this}rotateZ(t){return an.makeRotationZ(t),this.applyMatrix4(an),this}translate(t,e,n){return an.makeTranslation(t,e,n),this.applyMatrix4(an),this}scale(t,e,n){return an.makeScale(t,e,n),this.applyMatrix4(an),this}lookAt(t){return aa.lookAt(t),aa.updateMatrix(),this.applyMatrix4(aa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new _e(n,3))}else{for(let n=0,i=e.count;n<i;n++){let r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];Qe.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Qe.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Qe.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Qe.min),this.boundingBox.expandByPoint(Qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];Fs.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Qe.min,Fs.min),Qe.expandByPoint(Le),Le.addVectors(Qe.max,Fs.max),Qe.expandByPoint(Le)):(Qe.expandByPoint(Fs.min),Qe.expandByPoint(Fs.max))}Qe.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Le.fromBufferAttribute(a,c),l&&($i.fromBufferAttribute(t,c),Le.add($i)),i=Math.max(i,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new I,l[R]=new I;let c=new I,h=new I,u=new I,d=new Vt,p=new Vt,g=new Vt,x=new I,m=new I;function f(R,M,y){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,y),d.fromBufferAttribute(r,R),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,y),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let A=1/(p.x*g.y-g.x*p.y);isFinite(A)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(A),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(A),a[R].add(x),a[M].add(x),a[y].add(x),l[R].add(m),l[M].add(m),l[y].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let R=0,M=S.length;R<M;++R){let y=S[R],A=y.start,B=y.count;for(let F=A,W=A+B;F<W;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let w=new I,v=new I,P=new I,T=new I;function C(R){P.fromBufferAttribute(i,R),T.copy(P);let M=a[R];w.copy(M),w.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(T,M);let A=v.dot(l[R])<0?-1:1;o.setXYZW(R,w.x,w.y,w.z,A)}for(let R=0,M=S.length;R<M;++R){let y=S[R],A=y.start,B=y.count;for(let F=A,W=A+B;F<W;F+=3)C(t.getX(F+0)),C(t.getX(F+1)),C(t.getX(F+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new xe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new I,r=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new xe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=t(d,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},sh=new Zt,Mi=new js,Sr=new Xn,rh=new I,wr=new I,Tr=new I,Er=new I,la=new I,Ar=new I,oh=new I,Rr=new I,Ae=class extends Ue{constructor(t=new Ce,e=new qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Ar.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(la.fromBufferAttribute(u,t),o?Ar.addScaledVector(la,h):Ar.addScaledVector(la.sub(e),h))}e.add(Ar)}return e}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Sr.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Sr,rh)===null||Mi.origin.distanceToSquared(rh)>(t.far-t.near)**2))&&(sh.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(sh),!(n.boundingBox!==null&&Mi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,P=w;v<P;v+=3){let T=a.getX(v),C=a.getX(v+1),R=a.getX(v+2);i=Cr(this,f,t,n,c,h,u,T,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let S=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);i=Cr(this,o,t,n,c,h,u,S,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){let m=d[g],f=o[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,P=w;v<P;v+=3){let T=v,C=v+1,R=v+2;i=Cr(this,f,t,n,c,h,u,T,C,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){let S=m,w=m+1,v=m+2;i=Cr(this,o,t,n,c,h,u,S,w,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Cf(s,t,e,n,i,r,o,a){let l;if(t.side===Oe?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===li,a),l===null)return null;Rr.copy(a),Rr.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Rr);return c<e.near||c>e.far?null:{distance:c,point:Rr.clone(),object:s}}function Cr(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,wr),s.getVertexPosition(l,Tr),s.getVertexPosition(c,Er);let h=Cf(s,t,e,n,wr,Tr,Er,oh);if(h){let u=new I;si.getBarycoord(oh,wr,Tr,Er,u),i&&(h.uv=si.getInterpolatedAttribute(i,a,l,c,u,new Vt)),r&&(h.uv1=si.getInterpolatedAttribute(r,a,l,c,u,new Vt)),o&&(h.normal=si.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};si.getNormal(wr,Tr,Er,d.normal),h.face=d,h.barycoord=u}return h}var Pi=class s extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new _e(c,3)),this.setAttribute("normal",new _e(h,3)),this.setAttribute("uv",new _e(u,2));function g(x,m,f,S,w,v,P,T,C,R,M){let y=v/C,A=P/R,B=v/2,F=P/2,W=T/2,X=C+1,V=R+1,J=0,k=0,it=new I;for(let st=0;st<V;st++){let mt=st*A-F;for(let Ct=0;Ct<X;Ct++){let Xt=Ct*y-B;it[x]=Xt*S,it[m]=mt*w,it[f]=W,c.push(it.x,it.y,it.z),it[x]=0,it[m]=0,it[f]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(Ct/C),u.push(1-st/R),J+=1}}for(let st=0;st<R;st++)for(let mt=0;mt<C;mt++){let Ct=d+mt+X*st,Xt=d+mt+X*(st+1),Y=d+(mt+1)+X*(st+1),Q=d+(mt+1)+X*st;l.push(Ct,Xt,Q),l.push(Xt,Y,Q),k+=6}a.addGroup(p,k,M),p+=k,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ds(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ge(s){let t={};for(let e=0;e<s.length;e++){let n=ds(s[e]);for(let i in n)t[i]=n[i]}return t}function Pf(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function au(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}var If={clone:ds,merge:Ge},Lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Df=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$e=class extends Tn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lf,this.fragmentShader=Df,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ds(t.uniforms),this.uniformsGroups=Pf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},no=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=kn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new I,ah=new Vt,lh=new Vt,Fe=class extends no{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,ah,lh),e.subVectors(lh,ah)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Zi=-90,Ki=1,cl=class extends Ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Fe(Zi,Ki,t,e);i.layers=this.layers,this.add(i);let r=new Fe(Zi,Ki,t,e);r.layers=this.layers,this.add(r);let o=new Fe(Zi,Ki,t,e);o.layers=this.layers,this.add(o);let a=new Fe(Zi,Ki,t,e);a.layers=this.layers,this.add(a);let l=new Fe(Zi,Ki,t,e);l.layers=this.layers,this.add(l);let c=new Fe(Zi,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},io=class extends Ye{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},hl=class extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new io(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pi(5,5,5),r=new $e({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:ri});r.uniforms.tEquirect.value=e;let o=new Ae(i,r),a=e.minFilter;return e.minFilter===Bn&&(e.minFilter=bn),new cl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},ca=new I,Uf=new I,Nf=new kt,Fn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ca.subVectors(n,e).cross(Uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ca),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Nf.getNormalMatrix(t),i=this.coplanarPoint(ca).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},bi=new Xn,Pr=new I,Qs=class{constructor(t=new Fn,e=new Fn,n=new Fn,i=new Fn,r=new Fn,o=new Fn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=kn){let n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],S=i[13],w=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-p,v-f).normalize(),n[1].setComponents(l+r,d+c,m+p,v+f).normalize(),n[2].setComponents(l+o,d+h,m+g,v+S).normalize(),n[3].setComponents(l-o,d-h,m-g,v-S).normalize(),n[4].setComponents(l-a,d-u,m-x,v-w).normalize(),e===kn)n[5].setComponents(l+a,d+u,m+x,v+w).normalize();else if(e===Zr)n[5].setComponents(a,u,x,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(t){return bi.center.set(0,0,0),bi.radius=.7071067811865476,bi.applyMatrix4(t.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Pr.x=i.normal.x>0?t.max.x:t.min.x,Pr.y=i.normal.y>0?t.max.y:t.min.y,Pr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Pr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ff(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let x=u[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var hi=class s extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){let S=f*d-o;for(let w=0;w<c;w++){let v=w*u-r;g.push(v,-S,0),x.push(0,0,1),m.push(w/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let S=0;S<a;S++){let w=S+c*f,v=S+c*(f+1),P=S+1+c*(f+1),T=S+1+c*f;p.push(w,v,T),p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}},zf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bf=`#ifdef USE_ALPHAHASH
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
#endif`,kf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Wf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xf=`#ifdef USE_BATCHING
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
#endif`,qf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$f=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Kf=`#ifdef USE_IRIDESCENCE
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
#endif`,Jf=`#ifdef USE_BUMPMAP
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,sp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,op=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lp=`vec3 transformedNormal = objectNormal;
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
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fp="gl_FragColor = linearToOutputTexel( gl_FragColor );",pp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
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
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xp=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,vp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wp=`#ifdef USE_GRADIENTMAP
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
}`,Tp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ep=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
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
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Up=`PhysicalMaterial material;
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
#endif`,Np=`struct PhysicalMaterial {
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
}`,Fp=`
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
#endif`,zp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Op=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Zp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,em=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,om=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,am=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,bm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Rm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Pm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zm=`uniform sampler2D t2D;
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,km=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`#include <common>
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
}`,Gm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,Jm=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,t0=`#define MATCAP
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
}`,e0=`#define MATCAP
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
}`,n0=`#define NORMAL
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
}`,i0=`#define NORMAL
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
}`,s0=`#define PHONG
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
}`,r0=`#define PHONG
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
}`,o0=`#define STANDARD
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
}`,a0=`#define STANDARD
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
}`,l0=`#define TOON
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
}`,c0=`#define TOON
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
}`,h0=`uniform float size;
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
}`,u0=`uniform vec3 diffuse;
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
}`,d0=`#include <common>
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
}`,f0=`uniform vec3 color;
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
}`,p0=`uniform float rotation;
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
}`,m0=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:zf,alphahash_pars_fragment:Bf,alphamap_fragment:kf,alphamap_pars_fragment:Of,alphatest_fragment:Hf,alphatest_pars_fragment:Vf,aomap_fragment:Gf,aomap_pars_fragment:Wf,batching_pars_vertex:Xf,batching_vertex:qf,begin_vertex:Yf,beginnormal_vertex:$f,bsdfs:Zf,iridescence_fragment:Kf,bumpmap_pars_fragment:Jf,clipping_planes_fragment:jf,clipping_planes_pars_fragment:Qf,clipping_planes_pars_vertex:tp,clipping_planes_vertex:ep,color_fragment:np,color_pars_fragment:ip,color_pars_vertex:sp,color_vertex:rp,common:op,cube_uv_reflection_fragment:ap,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:fp,colorspace_pars_fragment:pp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:xp,envmap_pars_vertex:yp,envmap_physical_pars_fragment:Cp,envmap_vertex:_p,fog_vertex:vp,fog_pars_vertex:Mp,fog_fragment:bp,fog_pars_fragment:Sp,gradientmap_pars_fragment:wp,lightmap_pars_fragment:Tp,lights_lambert_fragment:Ep,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Ip,lights_phong_fragment:Lp,lights_phong_pars_fragment:Dp,lights_physical_fragment:Up,lights_physical_pars_fragment:Np,lights_fragment_begin:Fp,lights_fragment_maps:zp,lights_fragment_end:Bp,logdepthbuf_fragment:kp,logdepthbuf_pars_fragment:Op,logdepthbuf_pars_vertex:Hp,logdepthbuf_vertex:Vp,map_fragment:Gp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:$p,morphinstance_vertex:Zp,morphcolor_vertex:Kp,morphnormal_vertex:Jp,morphtarget_pars_vertex:jp,morphtarget_vertex:Qp,normal_fragment_begin:tm,normal_fragment_maps:em,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:om,clearcoat_normal_fragment_maps:am,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:ym,shadowmap_pars_vertex:_m,shadowmap_vertex:vm,shadowmask_pars_fragment:Mm,skinbase_vertex:bm,skinning_pars_vertex:Sm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Em,specularmap_pars_fragment:Am,tonemapping_fragment:Rm,tonemapping_pars_fragment:Cm,transmission_fragment:Pm,transmission_pars_fragment:Im,uv_pars_fragment:Lm,uv_pars_vertex:Dm,uv_vertex:Um,worldpos_vertex:Nm,background_vert:Fm,background_frag:zm,backgroundCube_vert:Bm,backgroundCube_frag:km,cube_vert:Om,cube_frag:Hm,depth_vert:Vm,depth_frag:Gm,distanceRGBA_vert:Wm,distanceRGBA_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:$m,linedashed_frag:Zm,meshbasic_vert:Km,meshbasic_frag:Jm,meshlambert_vert:jm,meshlambert_frag:Qm,meshmatcap_vert:t0,meshmatcap_frag:e0,meshnormal_vert:n0,meshnormal_frag:i0,meshphong_vert:s0,meshphong_frag:r0,meshphysical_vert:o0,meshphysical_frag:a0,meshtoon_vert:l0,meshtoon_frag:c0,points_vert:h0,points_frag:u0,shadow_vert:d0,shadow_frag:f0,sprite_vert:p0,sprite_frag:m0},at={common:{diffuse:{value:new It(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new It(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new It(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new It(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new It(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Ge([at.common,at.specularmap,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.fog,at.lights,{emissive:{value:new It(0)},specular:{value:new It(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Ge([at.common,at.envmap,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.roughnessmap,at.metalnessmap,at.fog,at.lights,{emissive:{value:new It(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Ge([at.common,at.aomap,at.lightmap,at.emissivemap,at.bumpmap,at.normalmap,at.displacementmap,at.gradientmap,at.fog,at.lights,{emissive:{value:new It(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,at.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Ge([at.points,at.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Ge([at.common,at.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Ge([at.common,at.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Ge([at.common,at.bumpmap,at.normalmap,at.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Ge([at.sprite,at.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Ge([at.common,at.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Ge([at.lights,at.fog,{color:{value:new It(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};Mn.physical={uniforms:Ge([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new It(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new It(0)},specularColor:{value:new It(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};var Ir={r:0,b:0,g:0},Si=new en,g0=new Zt;function x0(s,t,e,n,i,r,o){let a=new It(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function x(S){let w=!1,v=g(S);v===null?f(a,l):v&&v.isColor&&(f(v,1),w=!0);let P=s.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,w){let v=g(w);v&&(v.isCubeTexture||v.mapping===_o)?(h===void 0&&(h=new Ae(new Pi(1,1,1),new $e({name:"BackgroundCubeMaterial",uniforms:ds(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Si.copy(w.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(g0.makeRotationFromEuler(Si)),h.material.toneMapped=jt.getTransfer(v.colorSpace)!==ae,(u!==v||d!==v.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ae(new hi(2,2),new $e({name:"BackgroundMaterial",uniforms:ds(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=jt.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,p=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,w){S.getRGB(Ir,au(s)),n.buffers.color.setClear(Ir.r,Ir.g,Ir.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),l=w,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(a,l)},render:x,addToRenderList:m}}function y0(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null),r=i,o=!1;function a(y,A,B,F,W){let X=!1,V=u(F,B,A);r!==V&&(r=V,c(r.object)),X=p(y,F,B,W),X&&g(y,F,B,W),W!==null&&t.update(W,s.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,v(y,A,B,F),W!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function l(){return s.createVertexArray()}function c(y){return s.bindVertexArray(y)}function h(y){return s.deleteVertexArray(y)}function u(y,A,B){let F=B.wireframe===!0,W=n[y.id];W===void 0&&(W={},n[y.id]=W);let X=W[A.id];X===void 0&&(X={},W[A.id]=X);let V=X[F];return V===void 0&&(V=d(l()),X[F]=V),V}function d(y){let A=[],B=[],F=[];for(let W=0;W<e;W++)A[W]=0,B[W]=0,F[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:B,attributeDivisors:F,object:y,attributes:{},index:null}}function p(y,A,B,F){let W=r.attributes,X=A.attributes,V=0,J=B.getAttributes();for(let k in J)if(J[k].location>=0){let st=W[k],mt=X[k];if(mt===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(mt=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(mt=y.instanceColor)),st===void 0||st.attribute!==mt||mt&&st.data!==mt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(y,A,B,F){let W={},X=A.attributes,V=0,J=B.getAttributes();for(let k in J)if(J[k].location>=0){let st=X[k];st===void 0&&(k==="instanceMatrix"&&y.instanceMatrix&&(st=y.instanceMatrix),k==="instanceColor"&&y.instanceColor&&(st=y.instanceColor));let mt={};mt.attribute=st,st&&st.data&&(mt.data=st.data),W[k]=mt,V++}r.attributes=W,r.attributesNum=V,r.index=F}function x(){let y=r.newAttributes;for(let A=0,B=y.length;A<B;A++)y[A]=0}function m(y){f(y,0)}function f(y,A){let B=r.newAttributes,F=r.enabledAttributes,W=r.attributeDivisors;B[y]=1,F[y]===0&&(s.enableVertexAttribArray(y),F[y]=1),W[y]!==A&&(s.vertexAttribDivisor(y,A),W[y]=A)}function S(){let y=r.newAttributes,A=r.enabledAttributes;for(let B=0,F=A.length;B<F;B++)A[B]!==y[B]&&(s.disableVertexAttribArray(B),A[B]=0)}function w(y,A,B,F,W,X,V){V===!0?s.vertexAttribIPointer(y,A,B,W,X):s.vertexAttribPointer(y,A,B,F,W,X)}function v(y,A,B,F){x();let W=F.attributes,X=B.getAttributes(),V=A.defaultAttributeValues;for(let J in X){let k=X[J];if(k.location>=0){let it=W[J];if(it===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&(it=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&(it=y.instanceColor)),it!==void 0){let st=it.normalized,mt=it.itemSize,Ct=t.get(it);if(Ct===void 0)continue;let Xt=Ct.buffer,Y=Ct.type,Q=Ct.bytesPerElement,ft=Y===s.INT||Y===s.UNSIGNED_INT||it.gpuType===Hl;if(it.isInterleavedBufferAttribute){let rt=it.data,At=rt.stride,Nt=it.offset;if(rt.isInstancedInterleavedBuffer){for(let Wt=0;Wt<k.locationSize;Wt++)f(k.location+Wt,rt.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Wt=0;Wt<k.locationSize;Wt++)m(k.location+Wt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let Wt=0;Wt<k.locationSize;Wt++)w(k.location+Wt,mt/k.locationSize,Y,st,At*Q,(Nt+mt/k.locationSize*Wt)*Q,ft)}else{if(it.isInstancedBufferAttribute){for(let rt=0;rt<k.locationSize;rt++)f(k.location+rt,it.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let rt=0;rt<k.locationSize;rt++)m(k.location+rt);s.bindBuffer(s.ARRAY_BUFFER,Xt);for(let rt=0;rt<k.locationSize;rt++)w(k.location+rt,mt/k.locationSize,Y,st,mt*Q,mt/k.locationSize*rt*Q,ft)}}else if(V!==void 0){let st=V[J];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(k.location,st);break;case 3:s.vertexAttrib3fv(k.location,st);break;case 4:s.vertexAttrib4fv(k.location,st);break;default:s.vertexAttrib1fv(k.location,st)}}}}S()}function P(){R();for(let y in n){let A=n[y];for(let B in A){let F=A[B];for(let W in F)h(F[W].object),delete F[W];delete A[B]}delete n[y]}}function T(y){if(n[y.id]===void 0)return;let A=n[y.id];for(let B in A){let F=A[B];for(let W in F)h(F[W].object),delete F[W];delete A[B]}delete n[y.id]}function C(y){for(let A in n){let B=n[A];if(B[y.id]===void 0)continue;let F=B[y.id];for(let W in F)h(F[W].object),delete F[W];delete B[y.id]}}function R(){M(),o=!0,r!==i&&(r=i,c(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function _0(s,t,e){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x]*d[x];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v0(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==xn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let R=C===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Vn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Sn&&!R)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),w=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function M0(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Fn,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:n,w=S*4,v=f.clippingState||null;l.value=v,v=h(g,d,w,p);for(let P=0;P!==w;++P)v[P]=e[P];f.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=l.value,g!==!0||m===null){let f=p+x*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<f)&&(m=new Float32Array(f));for(let w=0,v=p;w!==x;++w,v+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function b0(s){let t=new WeakMap;function e(o,a){return a===Ca?o.mapping=ls:a===Pa&&(o.mapping=cs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ca||a===Pa)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new hl(l.height);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var so=class extends no{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,ch=[.125,.215,.35,.446,.526,.582],Ai=20,ha=new so,hh=new It,ua=null,da=0,fa=0,pa=!1,Ti=(1+Math.sqrt(5))/2,Ji=1/Ti,uh=[new I(-Ti,Ji,0),new I(Ti,Ji,0),new I(-Ji,0,Ti),new I(Ji,0,Ti),new I(0,Ti,-Ji),new I(0,Ti,Ji),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ro=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,da,fa),this._renderer.xr.enabled=pa,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),da=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:rr,format:xn,colorSpace:_s,depthBuffer:!1},i=dh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dh(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=S0(r)),this._blurMaterial=w0(r,t,e)}return i}_compileMaterial(t){let e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,ha)}_sceneToCubeUV(t,e,n,i){let a=new Fe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hh),h.toneMapping=ai,h.autoClear=!1;let p=new qn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new Ae(new Pi,p),x=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,x=!0):(p.color.copy(hh),x=!0);for(let f=0;f<6;f++){let S=f%3;S===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):S===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let w=this._cubeSize;Lr(i,S*w,f>2?w:0,w,w),h.setRenderTarget(i),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ls||t.mapping===cs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ha)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let r=1;r<i;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uh[(i-r-1)%uh.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ae(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);let f=[],S=0;for(let C=0;C<Ai;++C){let R=C/x,M=Math.exp(-R*R/2);f.push(M),C===0?S+=M:C<m&&(S+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/S;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:w}=this;d.dTheta.value=g,d.mipInt.value=w-n;let v=this._sizeLods[i],P=3*v*(i>w-is?i-w+is:0),T=4*(this._cubeSize-v);Lr(e,P,T,3*v,2*v),l.setRenderTarget(e),l.render(u,ha)}};function S0(s){let t=[],e=[],n=[],i=s,r=s-is+1+ch.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>s-is?l=ch[o-s+is-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,S=new Float32Array(x*g*p),w=new Float32Array(m*g*p),v=new Float32Array(f*g*p);for(let T=0;T<p;T++){let C=T%3*2/3-1,R=T>2?0:-1,M=[C,R,0,C+2/3,R,0,C+2/3,R+1,0,C,R,0,C+2/3,R+1,0,C,R+1,0];S.set(M,x*g*T),w.set(d,m*g*T);let y=[T,T,T,T,T,T];v.set(y,f*g*T)}let P=new Ce;P.setAttribute("position",new xe(S,x)),P.setAttribute("uv",new xe(w,m)),P.setAttribute("faceIndex",new xe(v,f)),t.push(P),i>is&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function dh(s,t,e){let n=new Gn(s,t,e);return n.texture.mapping=_o,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function w0(s,t,e){let n=new Float32Array(Ai),i=new I(0,1,0);return new $e({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function fh(){return new $e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ph(){return new $e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Zl(){return`

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
	`}function T0(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ca||l===Pa,h=l===ls||l===cs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ro(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new ro(s)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function E0(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Ws("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function A0(s,t,e,n){let i={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)t.remove(x[m])}d.removeEventListener("dispose",o),delete i[d.id];let p=r.get(d);p&&(t.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],s.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let x=p[g];for(let m=0,f=x.length;m<f;m++)t.update(x[m],s.ARRAY_BUFFER)}}function c(u){let d=[],p=u.index,g=u.attributes.position,x=0;if(p!==null){let S=p.array;x=p.version;for(let w=0,v=S.length;w<v;w+=3){let P=S[w+0],T=S[w+1],C=S[w+2];d.push(P,T,T,C,C,P)}}else if(g!==void 0){let S=g.array;x=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){let P=w+0,T=w+1,C=w+2;d.push(P,T,T,C,C,P)}}else return;let m=new(ru(d)?eo:to)(d,1);m.version=x;let f=r.get(u);f&&t.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function R0(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),e.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),e.update(p,n,g))}function h(d,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];e.update(m,n,1)}function u(d,p,g,x){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let S=0;S<g;S++)f+=p[S]*x[S];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C0(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function P0(s,t,e){let n=new WeakMap,i=new le;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],w=0;p===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let v=a.attributes.position.count*w,P=1;v>t.maxTextureSize&&(P=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let T=new Float32Array(v*P*4*u),C=new jr(T,v,P,u);C.type=Sn,C.needsUpdate=!0;let R=w*4;for(let y=0;y<u;y++){let A=m[y],B=f[y],F=S[y],W=v*P*4*y;for(let X=0;X<A.count;X++){let V=X*R;p===!0&&(i.fromBufferAttribute(A,X),T[W+V+0]=i.x,T[W+V+1]=i.y,T[W+V+2]=i.z,T[W+V+3]=0),g===!0&&(i.fromBufferAttribute(B,X),T[W+V+4]=i.x,T[W+V+5]=i.y,T[W+V+6]=i.z,T[W+V+7]=0),x===!0&&(i.fromBufferAttribute(F,X),T[W+V+8]=i.x,T[W+V+9]=i.y,T[W+V+10]=i.z,T[W+V+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Vt(v,P)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function I0(s,t,e,n){let i=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}var oo=class extends Ye{constructor(t,e,n,i,r,o,a,l,c,h=ss){if(h!==ss&&h!==us)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ss&&(n=Ci),n===void 0&&h===us&&(n=hs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},cu=new Ye,mh=new oo(1,1),hu=new jr,uu=new ll,du=new io,gh=[],xh=[],yh=new Float32Array(16),_h=new Float32Array(9),vh=new Float32Array(4);function Ms(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=gh[i];if(r===void 0&&(r=new Float32Array(i),gh[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function Pe(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Ie(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function bo(s,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function L0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function D0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2fv(this.addr,t),Ie(e,t)}}function U0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;s.uniform3fv(this.addr,t),Ie(e,t)}}function N0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4fv(this.addr,t),Ie(e,t)}}function F0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;vh.set(n),s.uniformMatrix2fv(this.addr,!1,vh),Ie(e,n)}}function z0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;_h.set(n),s.uniformMatrix3fv(this.addr,!1,_h),Ie(e,n)}}function B0(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;yh.set(n),s.uniformMatrix4fv(this.addr,!1,yh),Ie(e,n)}}function k0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function O0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2iv(this.addr,t),Ie(e,t)}}function H0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3iv(this.addr,t),Ie(e,t)}}function V0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4iv(this.addr,t),Ie(e,t)}}function G0(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function W0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;s.uniform2uiv(this.addr,t),Ie(e,t)}}function X0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;s.uniform3uiv(this.addr,t),Ie(e,t)}}function q0(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;s.uniform4uiv(this.addr,t),Ie(e,t)}}function Y0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(mh.compareFunction=su,r=mh):r=cu,e.setTexture2D(t||r,i)}function $0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||uu,i)}function Z0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||du,i)}function K0(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||hu,i)}function J0(s){switch(s){case 5126:return L0;case 35664:return D0;case 35665:return U0;case 35666:return N0;case 35674:return F0;case 35675:return z0;case 35676:return B0;case 5124:case 35670:return k0;case 35667:case 35671:return O0;case 35668:case 35672:return H0;case 35669:case 35673:return V0;case 5125:return G0;case 36294:return W0;case 36295:return X0;case 36296:return q0;case 35678:case 36198:case 36298:case 36306:case 35682:return Y0;case 35679:case 36299:case 36307:return $0;case 35680:case 36300:case 36308:case 36293:return Z0;case 36289:case 36303:case 36311:case 36292:return K0}}function j0(s,t){s.uniform1fv(this.addr,t)}function Q0(s,t){let e=Ms(t,this.size,2);s.uniform2fv(this.addr,e)}function tg(s,t){let e=Ms(t,this.size,3);s.uniform3fv(this.addr,e)}function eg(s,t){let e=Ms(t,this.size,4);s.uniform4fv(this.addr,e)}function ng(s,t){let e=Ms(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function ig(s,t){let e=Ms(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function sg(s,t){let e=Ms(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function rg(s,t){s.uniform1iv(this.addr,t)}function og(s,t){s.uniform2iv(this.addr,t)}function ag(s,t){s.uniform3iv(this.addr,t)}function lg(s,t){s.uniform4iv(this.addr,t)}function cg(s,t){s.uniform1uiv(this.addr,t)}function hg(s,t){s.uniform2uiv(this.addr,t)}function ug(s,t){s.uniform3uiv(this.addr,t)}function dg(s,t){s.uniform4uiv(this.addr,t)}function fg(s,t,e){let n=this.cache,i=t.length,r=bo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||cu,r[o])}function pg(s,t,e){let n=this.cache,i=t.length,r=bo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||uu,r[o])}function mg(s,t,e){let n=this.cache,i=t.length,r=bo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||du,r[o])}function gg(s,t,e){let n=this.cache,i=t.length,r=bo(e,i);Pe(n,r)||(s.uniform1iv(this.addr,r),Ie(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||hu,r[o])}function xg(s){switch(s){case 5126:return j0;case 35664:return Q0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return og;case 35668:case 35672:return ag;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return dg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}var ul=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=J0(e.type)}},dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=xg(e.type)}},fl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},ma=/(\w+)(\])?(\[|\.)?/g;function Mh(s,t){s.seq.push(t),s.map[t.id]=t}function yg(s,t,e){let n=s.name,i=n.length;for(ma.lastIndex=0;;){let r=ma.exec(n),o=ma.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Mh(e,c===void 0?new ul(a,s,t):new dl(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new fl(a),Mh(e,u)),e=u}}}var os=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);yg(r,o,this)}}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function bh(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var _g=37297,vg=0;function Mg(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Sh=new kt;function bg(s){jt._getMatrix(Sh,jt.workingColorSpace,s);let t=`mat3( ${Sh.elements.map(e=>e.toFixed(4))} )`;switch(jt.getTransfer(s)){case vo:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function wh(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Mg(s.getShaderSource(t),o)}else return i}function Sg(s,t){let e=bg(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wg(s,t){let e;switch(t){case Dd:e="Linear";break;case Ud:e="Reinhard";break;case Nd:e="Cineon";break;case Fd:e="ACESFilmic";break;case Bd:e="AgX";break;case kd:e="Neutral";break;case zd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Dr=new I;function Tg(){jt.getLuminanceCoefficients(Dr);let s=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Eg(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xs).join(`
`)}function Ag(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Rg(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function Xs(s){return s!==""}function Th(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Eh(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Cg=/^[ \t]*#include +<([\w\d./]+)>/gm;function pl(s){return s.replace(Cg,Ig)}var Pg=new Map;function Ig(s,t){let e=Ht[t];if(e===void 0){let n=Pg.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return pl(e)}var Lg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ah(s){return s.replace(Lg,Dg)}function Dg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Rh(s){let t=`precision ${s.precision} float;
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
#define LOW_PRECISION`),t}function Ug(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===qh?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ng(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case _o:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Fg(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function zg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ol:t="ENVMAP_BLENDING_MULTIPLY";break;case Id:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function Bg(s){let t=s.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function kg(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Ug(e),c=Ng(e),h=Fg(e),u=zg(e),d=Bg(e),p=Eg(e),g=Ag(r),x=i.createProgram(),m,f,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Xs).join(`
`),f.length>0&&(f+=`
`)):(m=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xs).join(`
`),f=[Rh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ai?wg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,Sg("linearToOutputTexel",e.outputColorSpace),Tg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Xs).join(`
`)),o=pl(o),o=Th(o,e),o=Eh(o,e),a=pl(a),a=Th(a,e),a=Eh(a,e),o=Ah(o),a=Ah(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let w=S+m+o,v=S+f+a,P=bh(i,i.VERTEX_SHADER,w),T=bh(i,i.FRAGMENT_SHADER,v);i.attachShader(x,P),i.attachShader(x,T),e.index0AttributeName!==void 0?i.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function C(A){if(s.debug.checkShaderErrors){let B=i.getProgramInfoLog(x).trim(),F=i.getShaderInfoLog(P).trim(),W=i.getShaderInfoLog(T).trim(),X=!0,V=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,P,T);else{let J=wh(i,P,"vertex"),k=wh(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+B+`
`+J+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||W==="")&&(V=!1);V&&(A.diagnostics={runnable:X,programLog:B,vertexShader:{log:F,prefix:m},fragmentShader:{log:W,prefix:f}})}i.deleteShader(P),i.deleteShader(T),R=new os(i,x),M=Rg(i,x)}let R;this.getUniforms=function(){return R===void 0&&C(this),R};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=i.getProgramParameter(x,_g)),y},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vg++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var Og=0,ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new gl(t),e.set(t,n)),n}},gl=class{constructor(t){this.id=Og++,this.code=t,this.usedTimes=0}};function Hg(s,t,e,n,i,r,o){let a=new Qr,l=new ml,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,A,B,F){let W=B.fog,X=F.geometry,V=M.isMeshStandardMaterial?B.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),k=J&&J.mapping===_o?J.image.height:null,it=g[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let st=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,mt=st!==void 0?st.length:0,Ct=0;X.morphAttributes.position!==void 0&&(Ct=1),X.morphAttributes.normal!==void 0&&(Ct=2),X.morphAttributes.color!==void 0&&(Ct=3);let Xt,Y,Q,ft;if(it){let se=Mn[it];Xt=se.vertexShader,Y=se.fragmentShader}else Xt=M.vertexShader,Y=M.fragmentShader,l.update(M),Q=l.getVertexShaderID(M),ft=l.getFragmentShaderID(M);let rt=s.getRenderTarget(),At=s.state.buffers.depth.getReversed(),Nt=F.isInstancedMesh===!0,Wt=F.isBatchedMesh===!0,ye=!!M.map,Kt=!!M.matcap,we=!!J,N=!!M.aoMap,rn=!!M.lightMap,qt=!!M.bumpMap,Yt=!!M.normalMap,Pt=!!M.displacementMap,de=!!M.emissiveMap,Rt=!!M.metalnessMap,E=!!M.roughnessMap,_=M.anisotropy>0,z=M.clearcoat>0,Z=M.dispersion>0,j=M.iridescence>0,$=M.sheen>0,wt=M.transmission>0,ct=_&&!!M.anisotropyMap,gt=z&&!!M.clearcoatMap,Jt=z&&!!M.clearcoatNormalMap,et=z&&!!M.clearcoatRoughnessMap,yt=j&&!!M.iridescenceMap,Dt=j&&!!M.iridescenceThicknessMap,Ut=$&&!!M.sheenColorMap,_t=$&&!!M.sheenRoughnessMap,$t=!!M.specularMap,Ot=!!M.specularColorMap,he=!!M.specularIntensityMap,L=wt&&!!M.transmissionMap,lt=wt&&!!M.thicknessMap,q=!!M.gradientMap,K=!!M.alphaMap,dt=M.alphaTest>0,ht=!!M.alphaHash,zt=!!M.extensions,be=ai;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(be=s.toneMapping);let ze={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:Xt,fragmentShader:Y,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Wt,batchingColor:Wt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?s.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:_s,alphaToCoverage:!!M.alphaToCoverage,map:ye,matcap:Kt,envMap:we,envMapMode:we&&J.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:rn,bumpMap:qt,normalMap:Yt,displacementMap:d&&Pt,emissiveMap:de,normalMapObjectSpace:Yt&&M.normalMapType===Gd,normalMapTangentSpace:Yt&&M.normalMapType===iu,metalnessMap:Rt,roughnessMap:E,anisotropy:_,anisotropyMap:ct,clearcoat:z,clearcoatMap:gt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:et,dispersion:Z,iridescence:j,iridescenceMap:yt,iridescenceThicknessMap:Dt,sheen:$,sheenColorMap:Ut,sheenRoughnessMap:_t,specularMap:$t,specularColorMap:Ot,specularIntensityMap:he,transmission:wt,transmissionMap:L,thicknessMap:lt,gradientMap:q,opaque:M.transparent===!1&&M.blending===oi&&M.alphaToCoverage===!1,alphaMap:K,alphaTest:dt,alphaHash:ht,combine:M.combine,mapUv:ye&&x(M.map.channel),aoMapUv:N&&x(M.aoMap.channel),lightMapUv:rn&&x(M.lightMap.channel),bumpMapUv:qt&&x(M.bumpMap.channel),normalMapUv:Yt&&x(M.normalMap.channel),displacementMapUv:Pt&&x(M.displacementMap.channel),emissiveMapUv:de&&x(M.emissiveMap.channel),metalnessMapUv:Rt&&x(M.metalnessMap.channel),roughnessMapUv:E&&x(M.roughnessMap.channel),anisotropyMapUv:ct&&x(M.anisotropyMap.channel),clearcoatMapUv:gt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ut&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:_t&&x(M.sheenRoughnessMap.channel),specularMapUv:$t&&x(M.specularMap.channel),specularColorMapUv:Ot&&x(M.specularColorMap.channel),specularIntensityMapUv:he&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:lt&&x(M.thicknessMap.channel),alphaMapUv:K&&x(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Yt||_),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!X.attributes.uv&&(ye||K),fog:!!W,useFog:M.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:F.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:Ct,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&A.length>0,shadowMapType:s.shadowMap.type,toneMapping:be,decodeVideoTexture:ye&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===ae,decodeVideoTextureEmissive:de&&M.emissiveMap.isVideoTexture===!0&&jt.getTransfer(M.emissiveMap.colorSpace)===ae,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===zn,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:zt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(zt&&M.extensions.multiDraw===!0||Wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function f(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)y.push(A),y.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(S(y,M),w(y,M),y.push(s.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let y=g[M.type],A;if(y){let B=Mn[y];A=If.clone(B.uniforms)}else A=M.uniforms;return A}function P(M,y){let A;for(let B=0,F=h.length;B<F;B++){let W=h[B];if(W.cacheKey===y){A=W,++A.usedTimes;break}}return A===void 0&&(A=new kg(s,y,M,r),h.push(A)),A}function T(M){if(--M.usedTimes===0){let y=h.indexOf(M);h[y]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:R}}function Vg(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Gg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ch(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Ph(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,g,x,m){let f=s[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),t++,f}function a(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):e.push(f)}function l(u,d,p,g,x,m){let f=o(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||Gg),n.length>1&&n.sort(d||Ch),i.length>1&&i.sort(d||Ch)}function h(){for(let u=t,d=s.length;u<d;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function Wg(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new Ph,s.set(n,[o])):i>=r.length?(o=new Ph,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Xg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new It};break;case"SpotLight":e={position:new I,direction:new I,color:new It,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new It,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new It,groundColor:new It};break;case"RectAreaLight":e={color:new It,position:new I,halfWidth:new I,halfHeight:new I};break}return s[t.id]=e,e}}}function qg(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Yg=0;function $g(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Zg(s){let t=new Xg,e=qg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,r=new Zt,o=new Zt;function a(c){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,S=0,w=0,v=0,P=0,T=0,C=0;c.sort($g);for(let M=0,y=c.length;M<y;M++){let A=c[M],B=A.color,F=A.intensity,W=A.distance,X=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=B.r*F,u+=B.g*F,d+=B.b*F;else if(A.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(A.sh.coefficients[V],F);C++}else if(A.isDirectionalLight){let V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,k=e.get(A);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=X,n.directionalShadowMatrix[p]=A.shadow.matrix,S++}n.directional[p]=V,p++}else if(A.isSpotLight){let V=t.get(A);V.position.setFromMatrixPosition(A.matrixWorld),V.color.copy(B).multiplyScalar(F),V.distance=W,V.coneCos=Math.cos(A.angle),V.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),V.decay=A.decay,n.spot[x]=V;let J=A.shadow;if(A.map&&(n.spotLightMap[P]=A.map,P++,J.updateMatrices(A),A.castShadow&&T++),n.spotLightMatrix[x]=J.matrix,A.castShadow){let k=e.get(A);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=X,v++}x++}else if(A.isRectAreaLight){let V=t.get(A);V.color.copy(B).multiplyScalar(F),V.halfWidth.set(A.width*.5,0,0),V.halfHeight.set(0,A.height*.5,0),n.rectArea[m]=V,m++}else if(A.isPointLight){let V=t.get(A);if(V.color.copy(A.color).multiplyScalar(A.intensity),V.distance=A.distance,V.decay=A.decay,A.castShadow){let J=A.shadow,k=e.get(A);k.shadowIntensity=J.intensity,k.shadowBias=J.bias,k.shadowNormalBias=J.normalBias,k.shadowRadius=J.radius,k.shadowMapSize=J.mapSize,k.shadowCameraNear=J.camera.near,k.shadowCameraFar=J.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=X,n.pointShadowMatrix[g]=A.shadow.matrix,w++}n.point[g]=V,g++}else if(A.isHemisphereLight){let V=t.get(A);V.skyColor.copy(A.color).multiplyScalar(F),V.groundColor.copy(A.groundColor).multiplyScalar(F),n.hemi[f]=V,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=at.LTC_FLOAT_1,n.rectAreaLTC2=at.LTC_FLOAT_2):(n.rectAreaLTC1=at.LTC_HALF_1,n.rectAreaLTC2=at.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==S||R.numPointShadows!==w||R.numSpotShadows!==v||R.numSpotMaps!==P||R.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=S,R.numPointShadows=w,R.numSpotShadows=v,R.numSpotMaps=P,R.numLightProbes=C,n.version=Yg++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0,m=h.matrixWorldInverse;for(let f=0,S=c.length;f<S;f++){let w=c[f];if(w.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(w.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),p++}else if(w.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(w.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(w.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){let v=n.hemi[x];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:n}}function Ih(s){let t=new Zg(s),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Kg(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new Ih(s),t.set(i,[a])):r>=o.length?(a=new Ih(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var xl=class extends Tn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yl=class extends Tn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Jg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(s,t,e){let n=new Qs,i=new Vt,r=new Vt,o=new le,a=new xl({depthPacking:Vd}),l=new yl,c={},h=e.maxTextureSize,u={[li]:Oe,[Oe]:li,[zn]:zn},d=new $e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:Jg,fragmentShader:jg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new Ce;g.setAttribute("position",new xe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qh;let f=this.type;this.render=function(T,C,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=s.getRenderTarget(),y=s.getActiveCubeFace(),A=s.getActiveMipmapLevel(),B=s.state;B.setBlending(ri),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let F=f!==Nn&&this.type===Nn,W=f===Nn&&this.type!==Nn;for(let X=0,V=T.length;X<V;X++){let J=T[X],k=J.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let it=k.getFrameExtents();if(i.multiply(it),r.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/it.x),i.x=r.x*it.x,k.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/it.y),i.y=r.y*it.y,k.mapSize.y=r.y)),k.map===null||F===!0||W===!0){let mt=this.type!==Nn?{minFilter:tn,magFilter:tn}:{};k.map!==null&&k.map.dispose(),k.map=new Gn(i.x,i.y,mt),k.map.texture.name=J.name+".shadowMap",k.camera.updateProjectionMatrix()}s.setRenderTarget(k.map),s.clear();let st=k.getViewportCount();for(let mt=0;mt<st;mt++){let Ct=k.getViewport(mt);o.set(r.x*Ct.x,r.y*Ct.y,r.x*Ct.z,r.y*Ct.w),B.viewport(o),k.updateMatrices(J,mt),n=k.getFrustum(),v(C,R,k.camera,J,this.type)}k.isPointLightShadow!==!0&&this.type===Nn&&S(k,R),k.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(M,y,A)};function S(T,C){let R=t.update(x);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gn(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,s.setRenderTarget(T.mapPass),s.clear(),s.renderBufferDirect(C,null,R,d,x,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,s.setRenderTarget(T.map),s.clear(),s.renderBufferDirect(C,null,R,p,x,null)}function w(T,C,R,M){let y=null,A=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(A!==void 0)y=A;else if(y=R.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let B=y.uuid,F=C.uuid,W=c[B];W===void 0&&(W={},c[B]=W);let X=W[F];X===void 0&&(X=y.clone(),W[F]=X,C.addEventListener("dispose",P)),y=X}if(y.visible=C.visible,y.wireframe=C.wireframe,M===Nn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:u[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let B=s.properties.get(y);B.light=R}return y}function v(T,C,R,M,y){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let F=t.update(T),W=T.material;if(Array.isArray(W)){let X=F.groups;for(let V=0,J=X.length;V<J;V++){let k=X[V],it=W[k.materialIndex];if(it&&it.visible){let st=w(T,it,M,y);T.onBeforeShadow(s,T,C,R,F,st,k),s.renderBufferDirect(R,null,F,st,T,k),T.onAfterShadow(s,T,C,R,F,st,k)}}}else if(W.visible){let X=w(T,W,M,y);T.onBeforeShadow(s,T,C,R,F,X,null),s.renderBufferDirect(R,null,F,X,T,null),T.onAfterShadow(s,T,C,R,F,X,null)}}let B=T.children;for(let F=0,W=B.length;F<W;F++)v(B[F],C,R,M,y)}function P(T){T.target.removeEventListener("dispose",P);for(let R in c){let M=c[R],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}var tx={[ba]:Sa,[wa]:Aa,[Ta]:Ra,[as]:Ea,[Sa]:ba,[Aa]:wa,[Ra]:Ta,[Ea]:as};function ex(s,t){function e(){let L=!1,lt=new le,q=null,K=new le(0,0,0,0);return{setMask:function(dt){q!==dt&&!L&&(s.colorMask(dt,dt,dt,dt),q=dt)},setLocked:function(dt){L=dt},setClear:function(dt,ht,zt,be,ze){ze===!0&&(dt*=be,ht*=be,zt*=be),lt.set(dt,ht,zt,be),K.equals(lt)===!1&&(s.clearColor(dt,ht,zt,be),K.copy(lt))},reset:function(){L=!1,q=null,K.set(-1,0,0,0)}}}function n(){let L=!1,lt=!1,q=null,K=null,dt=null;return{setReversed:function(ht){if(lt!==ht){let zt=t.get("EXT_clip_control");lt?zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.ZERO_TO_ONE_EXT):zt.clipControlEXT(zt.LOWER_LEFT_EXT,zt.NEGATIVE_ONE_TO_ONE_EXT);let be=dt;dt=null,this.setClear(be)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?rt(s.DEPTH_TEST):At(s.DEPTH_TEST)},setMask:function(ht){q!==ht&&!L&&(s.depthMask(ht),q=ht)},setFunc:function(ht){if(lt&&(ht=tx[ht]),K!==ht){switch(ht){case ba:s.depthFunc(s.NEVER);break;case Sa:s.depthFunc(s.ALWAYS);break;case wa:s.depthFunc(s.LESS);break;case as:s.depthFunc(s.LEQUAL);break;case Ta:s.depthFunc(s.EQUAL);break;case Ea:s.depthFunc(s.GEQUAL);break;case Aa:s.depthFunc(s.GREATER);break;case Ra:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}K=ht}},setLocked:function(ht){L=ht},setClear:function(ht){dt!==ht&&(lt&&(ht=1-ht),s.clearDepth(ht),dt=ht)},reset:function(){L=!1,q=null,K=null,dt=null,lt=!1}}}function i(){let L=!1,lt=null,q=null,K=null,dt=null,ht=null,zt=null,be=null,ze=null;return{setTest:function(se){L||(se?rt(s.STENCIL_TEST):At(s.STENCIL_TEST))},setMask:function(se){lt!==se&&!L&&(s.stencilMask(se),lt=se)},setFunc:function(se,un,Rn){(q!==se||K!==un||dt!==Rn)&&(s.stencilFunc(se,un,Rn),q=se,K=un,dt=Rn)},setOp:function(se,un,Rn){(ht!==se||zt!==un||be!==Rn)&&(s.stencilOp(se,un,Rn),ht=se,zt=un,be=Rn)},setLocked:function(se){L=se},setClear:function(se){ze!==se&&(s.clearStencil(se),ze=se)},reset:function(){L=!1,lt=null,q=null,K=null,dt=null,ht=null,zt=null,be=null,ze=null}}}let r=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,w=null,v=null,P=null,T=null,C=new It(0,0,0),R=0,M=!1,y=null,A=null,B=null,F=null,W=null,X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,J=0,k=s.getParameter(s.VERSION);k.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(k)[1]),V=J>=1):k.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),V=J>=2);let it=null,st={},mt=s.getParameter(s.SCISSOR_BOX),Ct=s.getParameter(s.VIEWPORT),Xt=new le().fromArray(mt),Y=new le().fromArray(Ct);function Q(L,lt,q,K){let dt=new Uint8Array(4),ht=s.createTexture();s.bindTexture(L,ht),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let zt=0;zt<q;zt++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(lt,0,s.RGBA,1,1,K,0,s.RGBA,s.UNSIGNED_BYTE,dt):s.texImage2D(lt+zt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,dt);return ht}let ft={};ft[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ft[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ft[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(s.DEPTH_TEST),o.setFunc(as),qt(!1),Yt(Uc),rt(s.CULL_FACE),N(ri);function rt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function At(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Nt(L,lt){return u[L]!==lt?(s.bindFramebuffer(L,lt),u[L]=lt,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=lt),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=lt),!0):!1}function Wt(L,lt){let q=p,K=!1;if(L){q=d.get(lt),q===void 0&&(q=[],d.set(lt,q));let dt=L.textures;if(q.length!==dt.length||q[0]!==s.COLOR_ATTACHMENT0){for(let ht=0,zt=dt.length;ht<zt;ht++)q[ht]=s.COLOR_ATTACHMENT0+ht;q.length=dt.length,K=!0}}else q[0]!==s.BACK&&(q[0]=s.BACK,K=!0);K&&s.drawBuffers(q)}function ye(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let Kt={[Ei]:s.FUNC_ADD,[pd]:s.FUNC_SUBTRACT,[md]:s.FUNC_REVERSE_SUBTRACT};Kt[gd]=s.MIN,Kt[xd]=s.MAX;let we={[yd]:s.ZERO,[_d]:s.ONE,[vd]:s.SRC_COLOR,[va]:s.SRC_ALPHA,[Ed]:s.SRC_ALPHA_SATURATE,[wd]:s.DST_COLOR,[bd]:s.DST_ALPHA,[Md]:s.ONE_MINUS_SRC_COLOR,[Ma]:s.ONE_MINUS_SRC_ALPHA,[Td]:s.ONE_MINUS_DST_COLOR,[Sd]:s.ONE_MINUS_DST_ALPHA,[Ad]:s.CONSTANT_COLOR,[Rd]:s.ONE_MINUS_CONSTANT_COLOR,[Cd]:s.CONSTANT_ALPHA,[Pd]:s.ONE_MINUS_CONSTANT_ALPHA};function N(L,lt,q,K,dt,ht,zt,be,ze,se){if(L===ri){x===!0&&(At(s.BLEND),x=!1);return}if(x===!1&&(rt(s.BLEND),x=!0),L!==fd){if(L!==m||se!==M){if((f!==Ei||v!==Ei)&&(s.blendEquation(s.FUNC_ADD),f=Ei,v=Ei),se)switch(L){case oi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wn:s.blendFunc(s.ONE,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fc:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case oi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case wn:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Nc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Fc:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}S=null,w=null,P=null,T=null,C.set(0,0,0),R=0,m=L,M=se}return}dt=dt||lt,ht=ht||q,zt=zt||K,(lt!==f||dt!==v)&&(s.blendEquationSeparate(Kt[lt],Kt[dt]),f=lt,v=dt),(q!==S||K!==w||ht!==P||zt!==T)&&(s.blendFuncSeparate(we[q],we[K],we[ht],we[zt]),S=q,w=K,P=ht,T=zt),(be.equals(C)===!1||ze!==R)&&(s.blendColor(be.r,be.g,be.b,ze),C.copy(be),R=ze),m=L,M=!1}function rn(L,lt){L.side===zn?At(s.CULL_FACE):rt(s.CULL_FACE);let q=L.side===Oe;lt&&(q=!q),qt(q),L.blending===oi&&L.transparent===!1?N(ri):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let K=L.stencilWrite;a.setTest(K),K&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),de(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?rt(s.SAMPLE_ALPHA_TO_COVERAGE):At(s.SAMPLE_ALPHA_TO_COVERAGE)}function qt(L){y!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),y=L)}function Yt(L){L!==ud?(rt(s.CULL_FACE),L!==A&&(L===Uc?s.cullFace(s.BACK):L===dd?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):At(s.CULL_FACE),A=L}function Pt(L){L!==B&&(V&&s.lineWidth(L),B=L)}function de(L,lt,q){L?(rt(s.POLYGON_OFFSET_FILL),(F!==lt||W!==q)&&(s.polygonOffset(lt,q),F=lt,W=q)):At(s.POLYGON_OFFSET_FILL)}function Rt(L){L?rt(s.SCISSOR_TEST):At(s.SCISSOR_TEST)}function E(L){L===void 0&&(L=s.TEXTURE0+X-1),it!==L&&(s.activeTexture(L),it=L)}function _(L,lt,q){q===void 0&&(it===null?q=s.TEXTURE0+X-1:q=it);let K=st[q];K===void 0&&(K={type:void 0,texture:void 0},st[q]=K),(K.type!==L||K.texture!==lt)&&(it!==q&&(s.activeTexture(q),it=q),s.bindTexture(L,lt||ft[L]),K.type=L,K.texture=lt)}function z(){let L=st[it];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function j(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ct(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Jt(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(L){Xt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Xt.copy(L))}function _t(L){Y.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Y.copy(L))}function $t(L,lt){let q=c.get(lt);q===void 0&&(q=new WeakMap,c.set(lt,q));let K=q.get(L);K===void 0&&(K=s.getUniformBlockIndex(lt,L.name),q.set(L,K))}function Ot(L,lt){let K=c.get(lt).get(L);l.get(lt)!==K&&(s.uniformBlockBinding(lt,K,L.__bindingPointIndex),l.set(lt,K))}function he(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},it=null,st={},u={},d=new WeakMap,p=[],g=null,x=!1,m=null,f=null,S=null,w=null,v=null,P=null,T=null,C=new It(0,0,0),R=0,M=!1,y=null,A=null,B=null,F=null,W=null,Xt.set(0,0,s.canvas.width,s.canvas.height),Y.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:At,bindFramebuffer:Nt,drawBuffers:Wt,useProgram:ye,setBlending:N,setMaterial:rn,setFlipSided:qt,setCullFace:Yt,setLineWidth:Pt,setPolygonOffset:de,setScissorTest:Rt,activeTexture:E,bindTexture:_,unbindTexture:z,compressedTexImage2D:Z,compressedTexImage3D:j,texImage2D:yt,texImage3D:Dt,updateUBOMapping:$t,uniformBlockBinding:Ot,texStorage2D:Jt,texStorage3D:et,texSubImage2D:$,texSubImage3D:wt,compressedTexSubImage2D:ct,compressedTexSubImage3D:gt,scissor:Ut,viewport:_t,reset:he}}function Lh(s,t,e,n){let i=nx(n);switch(e){case Jh:return s*t;case Qh:return s*t;case tu:return s*t*2;case Wl:return s*t/i.components*i.byteLength;case Xl:return s*t/i.components*i.byteLength;case eu:return s*t*2/i.components*i.byteLength;case ql:return s*t*2/i.components*i.byteLength;case jh:return s*t*3/i.components*i.byteLength;case xn:return s*t*4/i.components*i.byteLength;case Yl:return s*t*4/i.components*i.byteLength;case Gr:case Wr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Da:case Na:return Math.max(s,16)*Math.max(t,8)/4;case La:case Ua:return Math.max(s,8)*Math.max(t,8)/2;case Fa:case za:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ba:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case ka:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Ha:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Va:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Xa:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case qa:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case Ya:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case $a:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case Za:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ja:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case Yr:case Qa:case tl:return Math.ceil(s/4)*Math.ceil(t/4)*16;case nu:case el:return Math.ceil(s/4)*Math.ceil(t/4)*8;case nl:case il:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function nx(s){switch(s){case Vn:case $h:return{byteLength:1,components:1};case Ks:case Zh:case rr:return{byteLength:2,components:1};case Vl:case Gl:return{byteLength:2,components:4};case Ci:case Hl:case Sn:return{byteLength:4,components:1};case Kh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ix(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator=="undefined"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Vt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return p?new OffscreenCanvas(E,_):Kr("canvas")}function x(E,_,z){let Z=1,j=Rt(E);if((j.width>z||j.height>z)&&(Z=z/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&E instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&E instanceof ImageBitmap||typeof VideoFrame!="undefined"&&E instanceof VideoFrame){let $=Math.floor(Z*j.width),wt=Math.floor(Z*j.height);u===void 0&&(u=g($,wt));let ct=_?g($,wt):u;return ct.width=$,ct.height=wt,ct.getContext("2d").drawImage(E,0,0,$,wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+wt+")."),ct}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function m(E){return E.generateMipmaps}function f(E){s.generateMipmap(E)}function S(E){return E.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?s.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function w(E,_,z,Z,j=!1){if(E!==null){if(s[E]!==void 0)return s[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let $=_;if(_===s.RED&&(z===s.FLOAT&&($=s.R32F),z===s.HALF_FLOAT&&($=s.R16F),z===s.UNSIGNED_BYTE&&($=s.R8)),_===s.RED_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.R8UI),z===s.UNSIGNED_SHORT&&($=s.R16UI),z===s.UNSIGNED_INT&&($=s.R32UI),z===s.BYTE&&($=s.R8I),z===s.SHORT&&($=s.R16I),z===s.INT&&($=s.R32I)),_===s.RG&&(z===s.FLOAT&&($=s.RG32F),z===s.HALF_FLOAT&&($=s.RG16F),z===s.UNSIGNED_BYTE&&($=s.RG8)),_===s.RG_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RG8UI),z===s.UNSIGNED_SHORT&&($=s.RG16UI),z===s.UNSIGNED_INT&&($=s.RG32UI),z===s.BYTE&&($=s.RG8I),z===s.SHORT&&($=s.RG16I),z===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGB8UI),z===s.UNSIGNED_SHORT&&($=s.RGB16UI),z===s.UNSIGNED_INT&&($=s.RGB32UI),z===s.BYTE&&($=s.RGB8I),z===s.SHORT&&($=s.RGB16I),z===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(z===s.UNSIGNED_BYTE&&($=s.RGBA8UI),z===s.UNSIGNED_SHORT&&($=s.RGBA16UI),z===s.UNSIGNED_INT&&($=s.RGBA32UI),z===s.BYTE&&($=s.RGBA8I),z===s.SHORT&&($=s.RGBA16I),z===s.INT&&($=s.RGBA32I)),_===s.RGB&&z===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),_===s.RGBA){let wt=j?vo:jt.getTransfer(Z);z===s.FLOAT&&($=s.RGBA32F),z===s.HALF_FLOAT&&($=s.RGBA16F),z===s.UNSIGNED_BYTE&&($=wt===ae?s.SRGB8_ALPHA8:s.RGBA8),z===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),z===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function v(E,_){let z;return E?_===null||_===Ci||_===hs?z=s.DEPTH24_STENCIL8:_===Sn?z=s.DEPTH32F_STENCIL8:_===Ks&&(z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ci||_===hs?z=s.DEPTH_COMPONENT24:_===Sn?z=s.DEPTH_COMPONENT32F:_===Ks&&(z=s.DEPTH_COMPONENT16),z}function P(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==tn&&E.minFilter!==bn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function T(E){let _=E.target;_.removeEventListener("dispose",T),R(_),_.isVideoTexture&&h.delete(_)}function C(E){let _=E.target;_.removeEventListener("dispose",C),y(_)}function R(E){let _=n.get(E);if(_.__webglInit===void 0)return;let z=E.source,Z=d.get(z);if(Z){let j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(E),Object.keys(Z).length===0&&d.delete(z)}n.remove(E)}function M(E){let _=n.get(E);s.deleteTexture(_.__webglTexture);let z=E.source,Z=d.get(z);delete Z[_.__cacheKey],o.memory.textures--}function y(E){let _=n.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),n.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(_.__webglFramebuffer[Z]))for(let j=0;j<_.__webglFramebuffer[Z].length;j++)s.deleteFramebuffer(_.__webglFramebuffer[Z][j]);else s.deleteFramebuffer(_.__webglFramebuffer[Z]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[Z])}else{if(Array.isArray(_.__webglFramebuffer))for(let Z=0;Z<_.__webglFramebuffer.length;Z++)s.deleteFramebuffer(_.__webglFramebuffer[Z]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Z=0;Z<_.__webglColorRenderbuffer.length;Z++)_.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[Z]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=E.textures;for(let Z=0,j=z.length;Z<j;Z++){let $=n.get(z[Z]);$.__webglTexture&&(s.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(z[Z])}n.remove(E)}let A=0;function B(){A=0}function F(){let E=A;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),A+=1,E}function W(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){let z=n.get(E);if(E.isVideoTexture&&Pt(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let Z=E.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(z,E,_);return}}e.bindTexture(s.TEXTURE_2D,z.__webglTexture,s.TEXTURE0+_)}function V(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,z.__webglTexture,s.TEXTURE0+_)}function J(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Y(z,E,_);return}e.bindTexture(s.TEXTURE_3D,z.__webglTexture,s.TEXTURE0+_)}function k(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Q(z,E,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,z.__webglTexture,s.TEXTURE0+_)}let it={[Zs]:s.REPEAT,[Ri]:s.CLAMP_TO_EDGE,[Ia]:s.MIRRORED_REPEAT},st={[tn]:s.NEAREST,[Od]:s.NEAREST_MIPMAP_NEAREST,[fr]:s.NEAREST_MIPMAP_LINEAR,[bn]:s.LINEAR,[Vo]:s.LINEAR_MIPMAP_NEAREST,[Bn]:s.LINEAR_MIPMAP_LINEAR},mt={[Wd]:s.NEVER,[Kd]:s.ALWAYS,[Xd]:s.LESS,[su]:s.LEQUAL,[qd]:s.EQUAL,[Zd]:s.GEQUAL,[Yd]:s.GREATER,[$d]:s.NOTEQUAL};function Ct(E,_){if(_.type===Sn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===bn||_.magFilter===Vo||_.magFilter===fr||_.magFilter===Bn||_.minFilter===bn||_.minFilter===Vo||_.minFilter===fr||_.minFilter===Bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(E,s.TEXTURE_WRAP_S,it[_.wrapS]),s.texParameteri(E,s.TEXTURE_WRAP_T,it[_.wrapT]),(E===s.TEXTURE_3D||E===s.TEXTURE_2D_ARRAY)&&s.texParameteri(E,s.TEXTURE_WRAP_R,it[_.wrapR]),s.texParameteri(E,s.TEXTURE_MAG_FILTER,st[_.magFilter]),s.texParameteri(E,s.TEXTURE_MIN_FILTER,st[_.minFilter]),_.compareFunction&&(s.texParameteri(E,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(E,s.TEXTURE_COMPARE_FUNC,mt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===tn||_.minFilter!==fr&&_.minFilter!==Bn||_.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");s.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Xt(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",T));let Z=_.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let $=W(_);if($!==E.__cacheKey){j[$]===void 0&&(j[$]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,z=!0),j[$].usedTimes++;let wt=j[E.__cacheKey];wt!==void 0&&(j[E.__cacheKey].usedTimes--,wt.usedTimes===0&&M(_)),E.__cacheKey=$,E.__webglTexture=j[$].texture}return z}function Y(E,_,z){let Z=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=s.TEXTURE_3D);let j=Xt(E,_),$=_.source;e.bindTexture(Z,E.__webglTexture,s.TEXTURE0+z);let wt=n.get($);if($.version!==wt.__version||j===!0){e.activeTexture(s.TEXTURE0+z);let ct=jt.getPrimaries(jt.workingColorSpace),gt=_.colorSpace===ii?null:jt.getPrimaries(_.colorSpace),Jt=_.colorSpace===ii||ct===gt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let et=x(_.image,!1,i.maxTextureSize);et=de(_,et);let yt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),Ut=w(_.internalFormat,yt,Dt,_.colorSpace,_.isVideoTexture);Ct(Z,_);let _t,$t=_.mipmaps,Ot=_.isVideoTexture!==!0,he=wt.__version===void 0||j===!0,L=$.dataReady,lt=P(_,et);if(_.isDepthTexture)Ut=v(_.format===us,_.type),he&&(Ot?e.texStorage2D(s.TEXTURE_2D,1,Ut,et.width,et.height):e.texImage2D(s.TEXTURE_2D,0,Ut,et.width,et.height,0,yt,Dt,null));else if(_.isDataTexture)if($t.length>0){Ot&&he&&e.texStorage2D(s.TEXTURE_2D,lt,Ut,$t[0].width,$t[0].height);for(let q=0,K=$t.length;q<K;q++)_t=$t[q],Ot?L&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,yt,Dt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ut,_t.width,_t.height,0,yt,Dt,_t.data);_.generateMipmaps=!1}else Ot?(he&&e.texStorage2D(s.TEXTURE_2D,lt,Ut,et.width,et.height),L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,et.width,et.height,yt,Dt,et.data)):e.texImage2D(s.TEXTURE_2D,0,Ut,et.width,et.height,0,yt,Dt,et.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ot&&he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ut,$t[0].width,$t[0].height,et.depth);for(let q=0,K=$t.length;q<K;q++)if(_t=$t[q],_.format!==xn)if(yt!==null)if(Ot){if(L)if(_.layerUpdates.size>0){let dt=Lh(_t.width,_t.height,_.format,_.type);for(let ht of _.layerUpdates){let zt=_t.data.subarray(ht*dt/_t.data.BYTES_PER_ELEMENT,(ht+1)*dt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,ht,_t.width,_t.height,1,yt,zt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,et.depth,yt,_t.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,q,Ut,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ot?L&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,q,0,0,0,_t.width,_t.height,et.depth,yt,Dt,_t.data):e.texImage3D(s.TEXTURE_2D_ARRAY,q,Ut,_t.width,_t.height,et.depth,0,yt,Dt,_t.data)}else{Ot&&he&&e.texStorage2D(s.TEXTURE_2D,lt,Ut,$t[0].width,$t[0].height);for(let q=0,K=$t.length;q<K;q++)_t=$t[q],_.format!==xn?yt!==null?Ot?L&&e.compressedTexSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,yt,_t.data):e.compressedTexImage2D(s.TEXTURE_2D,q,Ut,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ot?L&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,_t.width,_t.height,yt,Dt,_t.data):e.texImage2D(s.TEXTURE_2D,q,Ut,_t.width,_t.height,0,yt,Dt,_t.data)}else if(_.isDataArrayTexture)if(Ot){if(he&&e.texStorage3D(s.TEXTURE_2D_ARRAY,lt,Ut,et.width,et.height,et.depth),L)if(_.layerUpdates.size>0){let q=Lh(et.width,et.height,_.format,_.type);for(let K of _.layerUpdates){let dt=et.data.subarray(K*q/et.data.BYTES_PER_ELEMENT,(K+1)*q/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,K,et.width,et.height,1,yt,Dt,dt)}_.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,yt,Dt,et.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Ut,et.width,et.height,et.depth,0,yt,Dt,et.data);else if(_.isData3DTexture)Ot?(he&&e.texStorage3D(s.TEXTURE_3D,lt,Ut,et.width,et.height,et.depth),L&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,yt,Dt,et.data)):e.texImage3D(s.TEXTURE_3D,0,Ut,et.width,et.height,et.depth,0,yt,Dt,et.data);else if(_.isFramebufferTexture){if(he)if(Ot)e.texStorage2D(s.TEXTURE_2D,lt,Ut,et.width,et.height);else{let q=et.width,K=et.height;for(let dt=0;dt<lt;dt++)e.texImage2D(s.TEXTURE_2D,dt,Ut,q,K,0,yt,Dt,null),q>>=1,K>>=1}}else if($t.length>0){if(Ot&&he){let q=Rt($t[0]);e.texStorage2D(s.TEXTURE_2D,lt,Ut,q.width,q.height)}for(let q=0,K=$t.length;q<K;q++)_t=$t[q],Ot?L&&e.texSubImage2D(s.TEXTURE_2D,q,0,0,yt,Dt,_t):e.texImage2D(s.TEXTURE_2D,q,Ut,yt,Dt,_t);_.generateMipmaps=!1}else if(Ot){if(he){let q=Rt(et);e.texStorage2D(s.TEXTURE_2D,lt,Ut,q.width,q.height)}L&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,Dt,et)}else e.texImage2D(s.TEXTURE_2D,0,Ut,yt,Dt,et);m(_)&&f(Z),wt.__version=$.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function Q(E,_,z){if(_.image.length!==6)return;let Z=Xt(E,_),j=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,E.__webglTexture,s.TEXTURE0+z);let $=n.get(j);if(j.version!==$.__version||Z===!0){e.activeTexture(s.TEXTURE0+z);let wt=jt.getPrimaries(jt.workingColorSpace),ct=_.colorSpace===ii?null:jt.getPrimaries(_.colorSpace),gt=_.colorSpace===ii||wt===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Jt=_.isCompressedTexture||_.image[0].isCompressedTexture,et=_.image[0]&&_.image[0].isDataTexture,yt=[];for(let K=0;K<6;K++)!Jt&&!et?yt[K]=x(_.image[K],!0,i.maxCubemapSize):yt[K]=et?_.image[K].image:_.image[K],yt[K]=de(_,yt[K]);let Dt=yt[0],Ut=r.convert(_.format,_.colorSpace),_t=r.convert(_.type),$t=w(_.internalFormat,Ut,_t,_.colorSpace),Ot=_.isVideoTexture!==!0,he=$.__version===void 0||Z===!0,L=j.dataReady,lt=P(_,Dt);Ct(s.TEXTURE_CUBE_MAP,_);let q;if(Jt){Ot&&he&&e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,$t,Dt.width,Dt.height);for(let K=0;K<6;K++){q=yt[K].mipmaps;for(let dt=0;dt<q.length;dt++){let ht=q[dt];_.format!==xn?Ut!==null?Ot?L&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ut,ht.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,$t,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,0,0,ht.width,ht.height,Ut,_t,ht.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt,$t,ht.width,ht.height,0,Ut,_t,ht.data)}}}else{if(q=_.mipmaps,Ot&&he){q.length>0&&lt++;let K=Rt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,lt,$t,K.width,K.height)}for(let K=0;K<6;K++)if(et){Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,yt[K].width,yt[K].height,Ut,_t,yt[K].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,yt[K].width,yt[K].height,0,Ut,_t,yt[K].data);for(let dt=0;dt<q.length;dt++){let zt=q[dt].image[K].image;Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,zt.width,zt.height,Ut,_t,zt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,$t,zt.width,zt.height,0,Ut,_t,zt.data)}}else{Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ut,_t,yt[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,$t,Ut,_t,yt[K]);for(let dt=0;dt<q.length;dt++){let ht=q[dt];Ot?L&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,0,0,Ut,_t,ht.image[K]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+K,dt+1,$t,Ut,_t,ht.image[K])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),$.__version=j.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ft(E,_,z,Z,j,$){let wt=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),gt=w(z.internalFormat,wt,ct,z.colorSpace),Jt=n.get(_),et=n.get(z);if(et.__renderTarget=_,!Jt.__hasExternalTextures){let yt=Math.max(1,_.width>>$),Dt=Math.max(1,_.height>>$);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,$,gt,yt,Dt,_.depth,0,wt,ct,null):e.texImage2D(j,$,gt,yt,Dt,0,wt,ct,null)}e.bindFramebuffer(s.FRAMEBUFFER,E),Yt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,j,et.__webglTexture,0,qt(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,j,et.__webglTexture,$),e.bindFramebuffer(s.FRAMEBUFFER,null)}function rt(E,_,z){if(s.bindRenderbuffer(s.RENDERBUFFER,E),_.depthBuffer){let Z=_.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=v(_.stencilBuffer,j),wt=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ct=qt(_);Yt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,$,_.width,_.height):z?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,$,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,$,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,wt,s.RENDERBUFFER,E)}else{let Z=_.textures;for(let j=0;j<Z.length;j++){let $=Z[j],wt=r.convert($.format,$.colorSpace),ct=r.convert($.type),gt=w($.internalFormat,wt,ct,$.colorSpace),Jt=qt(_);z&&Yt(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Jt,gt,_.width,_.height):Yt(_)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Jt,gt,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,gt,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function At(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let Z=n.get(_.depthTexture);Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let j=Z.__webglTexture,$=qt(_);if(_.depthTexture.format===ss)Yt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,j,0);else if(_.depthTexture.format===us)Yt(_)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0,$):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Nt(E){let _=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let Z=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Z){let j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=Z}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");At(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]===void 0)_.__webglDepthbuffer[Z]=s.createRenderbuffer(),rt(_.__webglDepthbuffer[Z],E,!1);else{let j=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$=_.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,$),s.framebufferRenderbuffer(s.FRAMEBUFFER,j,s.RENDERBUFFER,$)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),rt(_.__webglDepthbuffer,E,!1);else{let Z=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,j=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,j),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,j)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function Wt(E,_,z){let Z=n.get(E);_!==void 0&&ft(Z.__webglFramebuffer,E,E.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),z!==void 0&&Nt(E)}function ye(E){let _=E.texture,z=n.get(E),Z=n.get(_);E.addEventListener("dispose",C);let j=E.textures,$=E.isWebGLCubeRenderTarget===!0,wt=j.length>1;if(wt||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=_.version,o.memory.textures++),$){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let gt=0;gt<_.mipmaps.length;gt++)z.__webglFramebuffer[ct][gt]=s.createFramebuffer()}else z.__webglFramebuffer[ct]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)z.__webglFramebuffer[ct]=s.createFramebuffer()}else z.__webglFramebuffer=s.createFramebuffer();if(wt)for(let ct=0,gt=j.length;ct<gt;ct++){let Jt=n.get(j[ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=s.createTexture(),o.memory.textures++)}if(E.samples>0&&Yt(E)===!1){z.__webglMultisampledFramebuffer=s.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<j.length;ct++){let gt=j[ct];z.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);let Jt=r.convert(gt.format,gt.colorSpace),et=r.convert(gt.type),yt=w(gt.internalFormat,Jt,et,gt.colorSpace,E.isXRRenderTarget===!0),Dt=qt(E);s.renderbufferStorageMultisample(s.RENDERBUFFER,Dt,yt,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=s.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if($){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Ct(s.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)ft(z.__webglFramebuffer[ct][gt],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,gt);else ft(z.__webglFramebuffer[ct],E,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&f(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(wt){for(let ct=0,gt=j.length;ct<gt;ct++){let Jt=j[ct],et=n.get(Jt);e.bindTexture(s.TEXTURE_2D,et.__webglTexture),Ct(s.TEXTURE_2D,Jt),ft(z.__webglFramebuffer,E,Jt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),m(Jt)&&f(s.TEXTURE_2D)}e.unbindTexture()}else{let ct=s.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ct=E.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),Ct(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let gt=0;gt<_.mipmaps.length;gt++)ft(z.__webglFramebuffer[gt],E,_,s.COLOR_ATTACHMENT0,ct,gt);else ft(z.__webglFramebuffer,E,_,s.COLOR_ATTACHMENT0,ct,0);m(_)&&f(ct),e.unbindTexture()}E.depthBuffer&&Nt(E)}function Kt(E){let _=E.textures;for(let z=0,Z=_.length;z<Z;z++){let j=_[z];if(m(j)){let $=S(E),wt=n.get(j).__webglTexture;e.bindTexture($,wt),f($),e.unbindTexture()}}}let we=[],N=[];function rn(E){if(E.samples>0){if(Yt(E)===!1){let _=E.textures,z=E.width,Z=E.height,j=s.COLOR_BUFFER_BIT,$=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,wt=n.get(E),ct=_.length>1;if(ct)for(let gt=0;gt<_.length;gt++)e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,wt.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let gt=0;gt<_.length;gt++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ct){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let Jt=n.get(_[gt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Jt,0)}s.blitFramebuffer(0,0,z,Z,0,0,z,Z,j,s.NEAREST),l===!0&&(we.length=0,N.length=0,we.push(s.COLOR_ATTACHMENT0+gt),E.depthBuffer&&E.resolveDepthBuffer===!1&&(we.push($),N.push($),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,we))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let gt=0;gt<_.length;gt++){e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.RENDERBUFFER,wt.__webglColorRenderbuffer[gt]);let Jt=n.get(_[gt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,wt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+gt,s.TEXTURE_2D,Jt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,wt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function qt(E){return Math.min(i.maxSamples,E.samples)}function Yt(E){let _=n.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Pt(E){let _=o.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function de(E,_){let z=E.colorSpace,Z=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==_s&&z!==ii&&(jt.getTransfer(z)===ae?(Z!==xn||j!==Vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function Rt(E){return typeof HTMLImageElement!="undefined"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame!="undefined"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=B,this.setTexture2D=X,this.setTexture2DArray=V,this.setTexture3D=J,this.setTextureCube=k,this.rebindTextures=Wt,this.setupRenderTarget=ye,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=rn,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Yt}function sx(s,t){function e(n,i=ii){let r,o=jt.getTransfer(i);if(n===Vn)return s.UNSIGNED_BYTE;if(n===Vl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Gl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Kh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===$h)return s.BYTE;if(n===Zh)return s.SHORT;if(n===Ks)return s.UNSIGNED_SHORT;if(n===Hl)return s.INT;if(n===Ci)return s.UNSIGNED_INT;if(n===Sn)return s.FLOAT;if(n===rr)return s.HALF_FLOAT;if(n===Jh)return s.ALPHA;if(n===jh)return s.RGB;if(n===xn)return s.RGBA;if(n===Qh)return s.LUMINANCE;if(n===tu)return s.LUMINANCE_ALPHA;if(n===ss)return s.DEPTH_COMPONENT;if(n===us)return s.DEPTH_STENCIL;if(n===Wl)return s.RED;if(n===Xl)return s.RED_INTEGER;if(n===eu)return s.RG;if(n===ql)return s.RG_INTEGER;if(n===Yl)return s.RGBA_INTEGER;if(n===Gr||n===Wr||n===Xr||n===qr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Ua||n===Na)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===za||n===Ba)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===za)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ba)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ka||n===Oa||n===Ha||n===Va||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ka||n===Ja||n===ja)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ha)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Va)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Wa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Xa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$a)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Za)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ka)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yr||n===Qa||n===tl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Yr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nu||n===el||n===nl||n===il)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===el)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===il)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var _l=class extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},me=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},rx={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},ox=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ax=`
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

}`,vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ye,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new $e({vertexShader:ox,fragmentShader:ax,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new hi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ml=class extends ci{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,x=new vl,m=e.getContextAttributes(),f=null,S=null,w=[],v=[],P=new Vt,T=null,C=new Fe;C.viewport=new le;let R=new Fe;R.viewport=new le;let M=[C,R],y=new _l,A=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=w[Y];return Q===void 0&&(Q=new $s,w[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=w[Y];return Q===void 0&&(Q=new $s,w[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=w[Y];return Q===void 0&&(Q=new $s,w[Y]=Q),Q.getHandSpace()};function F(Y){let Q=v.indexOf(Y.inputSource);if(Q===-1)return;let ft=w[Q];ft!==void 0&&(ft.update(Y.inputSource,Y.frame,c||o),ft.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){i.removeEventListener("select",F),i.removeEventListener("selectstart",F),i.removeEventListener("selectend",F),i.removeEventListener("squeeze",F),i.removeEventListener("squeezestart",F),i.removeEventListener("squeezeend",F),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let Y=0;Y<w.length;Y++){let Q=v[Y];Q!==null&&(v[Y]=null,w[Y].disconnect(Q))}A=null,B=null,x.reset(),t.setRenderTarget(f),p=null,d=null,u=null,i=null,S=null,Xt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",F),i.addEventListener("selectstart",F),i.addEventListener("selectend",F),i.addEventListener("squeeze",F),i.addEventListener("squeezestart",F),i.addEventListener("squeezeend",F),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){let Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Gn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Vn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ft=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?us:ss,ft=m.stencil?hs:Ci);let At={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(At),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Gn(d.textureWidth,d.textureHeight,{format:xn,type:Vn,depthTexture:new oo(d.textureWidth,d.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Xt.setContext(i),Xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function X(Y){for(let Q=0;Q<Y.removed.length;Q++){let ft=Y.removed[Q],rt=v.indexOf(ft);rt>=0&&(v[rt]=null,w[rt].disconnect(ft))}for(let Q=0;Q<Y.added.length;Q++){let ft=Y.added[Q],rt=v.indexOf(ft);if(rt===-1){for(let Nt=0;Nt<w.length;Nt++)if(Nt>=v.length){v.push(ft),rt=Nt;break}else if(v[Nt]===null){v[Nt]=ft,rt=Nt;break}if(rt===-1)break}let At=w[rt];At&&At.connect(ft)}}let V=new I,J=new I;function k(Y,Q,ft){V.setFromMatrixPosition(Q.matrixWorld),J.setFromMatrixPosition(ft.matrixWorld);let rt=V.distanceTo(J),At=Q.projectionMatrix.elements,Nt=ft.projectionMatrix.elements,Wt=At[14]/(At[10]-1),ye=At[14]/(At[10]+1),Kt=(At[9]+1)/At[5],we=(At[9]-1)/At[5],N=(At[8]-1)/At[0],rn=(Nt[8]+1)/Nt[0],qt=Wt*N,Yt=Wt*rn,Pt=rt/(-N+rn),de=Pt*-N;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(de),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),At[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Rt=Wt+Pt,E=ye+Pt,_=qt-de,z=Yt+(rt-de),Z=Kt*ye/E*Rt,j=we*ye/E*Rt;Y.projectionMatrix.makePerspective(_,z,Z,j,Rt,E),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function it(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let Q=Y.near,ft=Y.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(ft=x.depthFar)),y.near=R.near=C.near=Q,y.far=R.far=C.far=ft,(A!==y.near||B!==y.far)&&(i.updateRenderState({depthNear:y.near,depthFar:y.far}),A=y.near,B=y.far),C.layers.mask=Y.layers.mask|2,R.layers.mask=Y.layers.mask|4,y.layers.mask=C.layers.mask|R.layers.mask;let rt=Y.parent,At=y.cameras;it(y,rt);for(let Nt=0;Nt<At.length;Nt++)it(At[Nt],rt);At.length===2?k(y,C,R):y.projectionMatrix.copy(C.projectionMatrix),st(Y,y,rt)};function st(Y,Q,ft){ft===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ft.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Js*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(y)};let mt=null;function Ct(Y,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){let ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let rt=!1;ft.length!==y.cameras.length&&(y.cameras.length=0,rt=!0);for(let Nt=0;Nt<ft.length;Nt++){let Wt=ft[Nt],ye=null;if(p!==null)ye=p.getViewport(Wt);else{let we=u.getViewSubImage(d,Wt);ye=we.viewport,Nt===0&&(t.setRenderTargetTextures(S,we.colorTexture,d.ignoreDepthValues?void 0:we.depthStencilTexture),t.setRenderTarget(S))}let Kt=M[Nt];Kt===void 0&&(Kt=new Fe,Kt.layers.enable(Nt),Kt.viewport=new le,M[Nt]=Kt),Kt.matrix.fromArray(Wt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Wt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(ye.x,ye.y,ye.width,ye.height),Nt===0&&(y.matrix.copy(Kt.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),rt===!0&&y.cameras.push(Kt)}let At=i.enabledFeatures;if(At&&At.includes("depth-sensing")){let Nt=u.getDepthInformation(ft[0]);Nt&&Nt.isValid&&Nt.texture&&x.init(t,Nt,i.renderState)}}for(let ft=0;ft<w.length;ft++){let rt=v[ft],At=w[ft];rt!==null&&At!==void 0&&At.update(rt,Q,c||o)}mt&&mt(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let Xt=new lu;Xt.setAnimationLoop(Ct),this.setAnimationLoop=function(Y){mt=Y},this.dispose=function(){}}},wi=new en,lx=new Zt;function cx(s,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,au(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,S,w,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,v)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,S,w):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let S=t.get(f),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,wi.copy(v),wi.x*=-1,wi.y*=-1,wi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),m.envMapRotation.value.setFromMatrix4(lx.makeRotationFromEuler(wi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,S,w){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*S,m.scale.value=w*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,S){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){let S=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function hx(s,t,e,n){let i={},r={},o=[],a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(S,w){let v=w.program;n.uniformBlockBinding(S,v)}function c(S,w){let v=i[S.id];v===void 0&&(g(S),v=h(S),i[S.id]=v,S.addEventListener("dispose",m));let P=w.program;n.updateUBOMapping(S,P);let T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){let w=u();S.__bindingPointIndex=w;let v=s.createBuffer(),P=S.__size,T=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,P,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,w,v),v}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let w=i[S.id],v=S.uniforms,P=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,w);for(let T=0,C=v.length;T<C;T++){let R=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,y=R.length;M<y;M++){let A=R[M];if(p(A,T,M,P)===!0){let B=A.__offset,F=Array.isArray(A.value)?A.value:[A.value],W=0;for(let X=0;X<F.length;X++){let V=F[X],J=x(V);typeof V=="number"||typeof V=="boolean"?(A.__data[0]=V,s.bufferSubData(s.UNIFORM_BUFFER,B+W,A.__data)):V.isMatrix3?(A.__data[0]=V.elements[0],A.__data[1]=V.elements[1],A.__data[2]=V.elements[2],A.__data[3]=0,A.__data[4]=V.elements[3],A.__data[5]=V.elements[4],A.__data[6]=V.elements[5],A.__data[7]=0,A.__data[8]=V.elements[6],A.__data[9]=V.elements[7],A.__data[10]=V.elements[8],A.__data[11]=0):(V.toArray(A.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,B,A.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(S,w,v,P){let T=S.value,C=w+"_"+v;if(P[C]===void 0)return typeof T=="number"||typeof T=="boolean"?P[C]=T:P[C]=T.clone(),!0;{let R=P[C];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return P[C]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(S){let w=S.uniforms,v=0,P=16;for(let C=0,R=w.length;C<R;C++){let M=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,A=M.length;y<A;y++){let B=M[y],F=Array.isArray(B.value)?B.value:[B.value];for(let W=0,X=F.length;W<X;W++){let V=F[W],J=x(V),k=v%P,it=k%J.boundary,st=k+it;v+=it,st!==0&&P-st<J.storage&&(v+=P-st),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=J.storage}}}let T=v%P;return T>0&&(v+=P-T),S.__size=v,S.__cache={},this}function x(S){let w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){let w=S.target;w.removeEventListener("dispose",m);let v=o.indexOf(w.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function f(){for(let S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}var ao=class{constructor(t={}){let{canvas:e=pf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext!="undefined"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),x=new Int32Array(4),m=null,f=null,S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=ai,this.toneMappingExposure=1;let v=this,P=!1,T=0,C=0,R=null,M=-1,y=null,A=new le,B=new le,F=null,W=new It(0),X=0,V=e.width,J=e.height,k=1,it=null,st=null,mt=new le(0,0,V,J),Ct=new le(0,0,V,J),Xt=!1,Y=new Qs,Q=!1,ft=!1,rt=new Zt,At=new Zt,Nt=new I,Wt=new le,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Kt=!1;function we(){return R===null?k:1}let N=n;function rn(b,D){return e.getContext(b,D)}try{let b={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bl}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",dt,!1),e.addEventListener("webglcontextcreationerror",ht,!1),N===null){let D="webgl2";if(N=rn(D,b),N===null)throw rn(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let qt,Yt,Pt,de,Rt,E,_,z,Z,j,$,wt,ct,gt,Jt,et,yt,Dt,Ut,_t,$t,Ot,he,L;function lt(){qt=new E0(N),qt.init(),Ot=new sx(N,qt),Yt=new v0(N,qt,t,Ot),Pt=new ex(N,qt),Yt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),de=new C0(N),Rt=new Vg,E=new ix(N,qt,Pt,Rt,Yt,Ot,de),_=new b0(v),z=new T0(v),Z=new Ff(N),he=new y0(N,Z),j=new A0(N,Z,de,he),$=new I0(N,j,Z,de),Ut=new P0(N,Yt,E),et=new M0(Rt),wt=new Hg(v,_,z,qt,Yt,he,et),ct=new cx(v,Rt),gt=new Wg,Jt=new Kg(qt),Dt=new x0(v,_,z,Pt,$,p,l),yt=new Qg(v,$,Yt),L=new hx(N,de,Yt,Pt),_t=new _0(N,qt,de),$t=new R0(N,qt,de),de.programs=wt.programs,v.capabilities=Yt,v.extensions=qt,v.properties=Rt,v.renderLists=gt,v.shadowMap=yt,v.state=Pt,v.info=de}lt();let q=new Ml(v,N);this.xr=q,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let b=qt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=qt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(V,J,!1))},this.getSize=function(b){return b.set(V,J)},this.setSize=function(b,D,O=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=b,J=D,e.width=Math.floor(b*k),e.height=Math.floor(D*k),O===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(V*k,J*k).floor()},this.setDrawingBufferSize=function(b,D,O){V=b,J=D,k=O,e.width=Math.floor(b*O),e.height=Math.floor(D*O),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(A)},this.getViewport=function(b){return b.copy(mt)},this.setViewport=function(b,D,O,H){b.isVector4?mt.set(b.x,b.y,b.z,b.w):mt.set(b,D,O,H),Pt.viewport(A.copy(mt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Ct)},this.setScissor=function(b,D,O,H){b.isVector4?Ct.set(b.x,b.y,b.z,b.w):Ct.set(b,D,O,H),Pt.scissor(B.copy(Ct).multiplyScalar(k).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(b){Pt.setScissorTest(Xt=b)},this.setOpaqueSort=function(b){it=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(b=!0,D=!0,O=!0){let H=0;if(b){let U=!1;if(R!==null){let nt=R.texture.format;U=nt===Yl||nt===ql||nt===Xl}if(U){let nt=R.texture.type,ut=nt===Vn||nt===Ci||nt===Ks||nt===hs||nt===Vl||nt===Gl,Mt=Dt.getClearColor(),bt=Dt.getClearAlpha(),Ft=Mt.r,Bt=Mt.g,St=Mt.b;ut?(g[0]=Ft,g[1]=Bt,g[2]=St,g[3]=bt,N.clearBufferuiv(N.COLOR,0,g)):(x[0]=Ft,x[1]=Bt,x[2]=St,x[3]=bt,N.clearBufferiv(N.COLOR,0,x))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT),O&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",dt,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),gt.dispose(),Jt.dispose(),Rt.dispose(),_.dispose(),z.dispose(),$.dispose(),he.dispose(),L.dispose(),wt.dispose(),q.dispose(),q.removeEventListener("sessionstart",Ec),q.removeEventListener("sessionend",Ac),yi.stop()};function K(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function dt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;let b=de.autoReset,D=yt.enabled,O=yt.autoUpdate,H=yt.needsUpdate,U=yt.type;lt(),de.autoReset=b,yt.enabled=D,yt.autoUpdate=O,yt.needsUpdate=H,yt.type=U}function ht(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zt(b){let D=b.target;D.removeEventListener("dispose",zt),be(D)}function be(b){ze(b),Rt.remove(b)}function ze(b){let D=Rt.get(b).programs;D!==void 0&&(D.forEach(function(O){wt.releaseProgram(O)}),b.isShaderMaterial&&wt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,O,H,U,nt){D===null&&(D=ye);let ut=U.isMesh&&U.matrixWorld.determinant()<0,Mt=ld(b,D,O,H,U);Pt.setMaterial(H,ut);let bt=O.index,Ft=1;if(H.wireframe===!0){if(bt=j.getWireframeAttribute(O),bt===void 0)return;Ft=2}let Bt=O.drawRange,St=O.attributes.position,te=Bt.start*Ft,ue=(Bt.start+Bt.count)*Ft;nt!==null&&(te=Math.max(te,nt.start*Ft),ue=Math.min(ue,(nt.start+nt.count)*Ft)),bt!==null?(te=Math.max(te,0),ue=Math.min(ue,bt.count)):St!=null&&(te=Math.max(te,0),ue=Math.min(ue,St.count));let fe=ue-te;if(fe<0||fe===1/0)return;he.setup(U,H,Mt,O,bt);let qe,ne=_t;if(bt!==null&&(qe=Z.get(bt),ne=$t,ne.setIndex(qe)),U.isMesh)H.wireframe===!0?(Pt.setLineWidth(H.wireframeLinewidth*we()),ne.setMode(N.LINES)):ne.setMode(N.TRIANGLES);else if(U.isLine){let Tt=H.linewidth;Tt===void 0&&(Tt=1),Pt.setLineWidth(Tt*we()),U.isLineSegments?ne.setMode(N.LINES):U.isLineLoop?ne.setMode(N.LINE_LOOP):ne.setMode(N.LINE_STRIP)}else U.isPoints?ne.setMode(N.POINTS):U.isSprite&&ne.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)ne.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))ne.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{let Tt=U._multiDrawStarts,Cn=U._multiDrawCounts,ie=U._multiDrawCount,dn=bt?Z.get(bt).bytesPerElement:1,zi=Rt.get(H).currentProgram.getUniforms();for(let Je=0;Je<ie;Je++)zi.setValue(N,"_gl_DrawID",Je),ne.render(Tt[Je]/dn,Cn[Je])}else if(U.isInstancedMesh)ne.renderInstances(te,fe,U.count);else if(O.isInstancedBufferGeometry){let Tt=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Cn=Math.min(O.instanceCount,Tt);ne.renderInstances(te,fe,Cn)}else ne.render(te,fe)};function se(b,D,O){b.transparent===!0&&b.side===zn&&b.forceSinglePass===!1?(b.side=Oe,b.needsUpdate=!0,dr(b,D,O),b.side=li,b.needsUpdate=!0,dr(b,D,O),b.side=zn):dr(b,D,O)}this.compile=function(b,D,O=null){O===null&&(O=b),f=Jt.get(O),f.init(D),w.push(f),O.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),b!==O&&b.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(f.pushLight(U),U.castShadow&&f.pushShadow(U))}),f.setupLights();let H=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;let nt=U.material;if(nt)if(Array.isArray(nt))for(let ut=0;ut<nt.length;ut++){let Mt=nt[ut];se(Mt,O,U),H.add(Mt)}else se(nt,O,U),H.add(nt)}),w.pop(),f=null,H},this.compileAsync=function(b,D,O=null){let H=this.compile(b,D,O);return new Promise(U=>{function nt(){if(H.forEach(function(ut){Rt.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){U(b);return}setTimeout(nt,10)}qt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let un=null;function Rn(b){un&&un(b)}function Ec(){yi.stop()}function Ac(){yi.start()}let yi=new lu;yi.setAnimationLoop(Rn),typeof self!="undefined"&&yi.setContext(self),this.setAnimationLoop=function(b){un=b,q.setAnimationLoop(b),b===null?yi.stop():yi.start()},q.addEventListener("sessionstart",Ec),q.addEventListener("sessionend",Ac),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(D),D=q.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,D,R),f=Jt.get(b,w.length),f.init(D),w.push(f),At.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Y.setFromProjectionMatrix(At),ft=this.localClippingEnabled,Q=et.init(this.clippingPlanes,ft),m=gt.get(b,S.length),m.init(),S.push(m),q.enabled===!0&&q.isPresenting===!0){let nt=v.xr.getDepthSensingMesh();nt!==null&&Ho(nt,D,-1/0,v.sortObjects)}Ho(b,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,st),Kt=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Kt&&Dt.addToRenderList(m,b),this.info.render.frame++,Q===!0&&et.beginShadows();let O=f.state.shadowsArray;yt.render(O,b,D),Q===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();let H=m.opaque,U=m.transmissive;if(f.setupLights(),D.isArrayCamera){let nt=D.cameras;if(U.length>0)for(let ut=0,Mt=nt.length;ut<Mt;ut++){let bt=nt[ut];Cc(H,U,b,bt)}Kt&&Dt.render(b);for(let ut=0,Mt=nt.length;ut<Mt;ut++){let bt=nt[ut];Rc(m,b,bt,bt.viewport)}}else U.length>0&&Cc(H,U,b,D),Kt&&Dt.render(b),Rc(m,b,D);R!==null&&(E.updateMultisampleRenderTarget(R),E.updateRenderTargetMipmap(R)),b.isScene===!0&&b.onAfterRender(v,b,D),he.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(f=w[w.length-1],Q===!0&&et.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function Ho(b,D,O,H){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)f.pushLight(b),b.castShadow&&f.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Y.intersectsSprite(b)){H&&Wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(At);let ut=$.update(b),Mt=b.material;Mt.visible&&m.push(b,ut,Mt,O,Wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Y.intersectsObject(b))){let ut=$.update(b),Mt=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Wt.copy(b.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),Wt.copy(ut.boundingSphere.center)),Wt.applyMatrix4(b.matrixWorld).applyMatrix4(At)),Array.isArray(Mt)){let bt=ut.groups;for(let Ft=0,Bt=bt.length;Ft<Bt;Ft++){let St=bt[Ft],te=Mt[St.materialIndex];te&&te.visible&&m.push(b,ut,te,O,Wt.z,St)}}else Mt.visible&&m.push(b,ut,Mt,O,Wt.z,null)}}let nt=b.children;for(let ut=0,Mt=nt.length;ut<Mt;ut++)Ho(nt[ut],D,O,H)}function Rc(b,D,O,H){let U=b.opaque,nt=b.transmissive,ut=b.transparent;f.setupLightsView(O),Q===!0&&et.setGlobalState(v.clippingPlanes,O),H&&Pt.viewport(A.copy(H)),U.length>0&&ur(U,D,O),nt.length>0&&ur(nt,D,O),ut.length>0&&ur(ut,D,O),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Cc(b,D,O,H){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[H.id]===void 0&&(f.state.transmissionRenderTarget[H.id]=new Gn(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?rr:Vn,minFilter:Bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));let nt=f.state.transmissionRenderTarget[H.id],ut=H.viewport||A;nt.setSize(ut.z,ut.w);let Mt=v.getRenderTarget();v.setRenderTarget(nt),v.getClearColor(W),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Dt.render(O);let bt=v.toneMapping;v.toneMapping=ai;let Ft=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),f.setupLightsView(H),Q===!0&&et.setGlobalState(v.clippingPlanes,H),ur(b,O,H),E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let St=0,te=D.length;St<te;St++){let ue=D[St],fe=ue.object,qe=ue.geometry,ne=ue.material,Tt=ue.group;if(ne.side===zn&&fe.layers.test(H.layers)){let Cn=ne.side;ne.side=Oe,ne.needsUpdate=!0,Pc(fe,O,H,qe,ne,Tt),ne.side=Cn,ne.needsUpdate=!0,Bt=!0}}Bt===!0&&(E.updateMultisampleRenderTarget(nt),E.updateRenderTargetMipmap(nt))}v.setRenderTarget(Mt),v.setClearColor(W,X),Ft!==void 0&&(H.viewport=Ft),v.toneMapping=bt}function ur(b,D,O){let H=D.isScene===!0?D.overrideMaterial:null;for(let U=0,nt=b.length;U<nt;U++){let ut=b[U],Mt=ut.object,bt=ut.geometry,Ft=H===null?ut.material:H,Bt=ut.group;Mt.layers.test(O.layers)&&Pc(Mt,D,O,bt,Ft,Bt)}}function Pc(b,D,O,H,U,nt){b.onBeforeRender(v,D,O,H,U,nt),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(v,D,O,H,b,nt),U.transparent===!0&&U.side===zn&&U.forceSinglePass===!1?(U.side=Oe,U.needsUpdate=!0,v.renderBufferDirect(O,D,H,U,b,nt),U.side=li,U.needsUpdate=!0,v.renderBufferDirect(O,D,H,U,b,nt),U.side=zn):v.renderBufferDirect(O,D,H,U,b,nt),b.onAfterRender(v,D,O,H,U,nt)}function dr(b,D,O){D.isScene!==!0&&(D=ye);let H=Rt.get(b),U=f.state.lights,nt=f.state.shadowsArray,ut=U.state.version,Mt=wt.getParameters(b,U.state,nt,D,O),bt=wt.getProgramCacheKey(Mt),Ft=H.programs;H.environment=b.isMeshStandardMaterial?D.environment:null,H.fog=D.fog,H.envMap=(b.isMeshStandardMaterial?z:_).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Ft===void 0&&(b.addEventListener("dispose",zt),Ft=new Map,H.programs=Ft);let Bt=Ft.get(bt);if(Bt!==void 0){if(H.currentProgram===Bt&&H.lightsStateVersion===ut)return Lc(b,Mt),Bt}else Mt.uniforms=wt.getUniforms(b),b.onBeforeCompile(Mt,v),Bt=wt.acquireProgram(Mt,bt),Ft.set(bt,Bt),H.uniforms=Mt.uniforms;let St=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(St.clippingPlanes=et.uniform),Lc(b,Mt),H.needsLights=hd(b),H.lightsStateVersion=ut,H.needsLights&&(St.ambientLightColor.value=U.state.ambient,St.lightProbe.value=U.state.probe,St.directionalLights.value=U.state.directional,St.directionalLightShadows.value=U.state.directionalShadow,St.spotLights.value=U.state.spot,St.spotLightShadows.value=U.state.spotShadow,St.rectAreaLights.value=U.state.rectArea,St.ltc_1.value=U.state.rectAreaLTC1,St.ltc_2.value=U.state.rectAreaLTC2,St.pointLights.value=U.state.point,St.pointLightShadows.value=U.state.pointShadow,St.hemisphereLights.value=U.state.hemi,St.directionalShadowMap.value=U.state.directionalShadowMap,St.directionalShadowMatrix.value=U.state.directionalShadowMatrix,St.spotShadowMap.value=U.state.spotShadowMap,St.spotLightMatrix.value=U.state.spotLightMatrix,St.spotLightMap.value=U.state.spotLightMap,St.pointShadowMap.value=U.state.pointShadowMap,St.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Bt,H.uniformsList=null,Bt}function Ic(b){if(b.uniformsList===null){let D=b.currentProgram.getUniforms();b.uniformsList=os.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Lc(b,D){let O=Rt.get(b);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function ld(b,D,O,H,U){D.isScene!==!0&&(D=ye),E.resetTextureUnits();let nt=D.fog,ut=H.isMeshStandardMaterial?D.environment:null,Mt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:_s,bt=(H.isMeshStandardMaterial?z:_).get(H.envMap||ut),Ft=H.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Bt=!!O.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),St=!!O.morphAttributes.position,te=!!O.morphAttributes.normal,ue=!!O.morphAttributes.color,fe=ai;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(fe=v.toneMapping);let qe=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,ne=qe!==void 0?qe.length:0,Tt=Rt.get(H),Cn=f.state.lights;if(Q===!0&&(ft===!0||b!==y)){let on=b===y&&H.id===M;et.setState(H,b,on)}let ie=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Cn.state.version||Tt.outputColorSpace!==Mt||U.isBatchedMesh&&Tt.batching===!1||!U.isBatchedMesh&&Tt.batching===!0||U.isBatchedMesh&&Tt.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Tt.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Tt.instancing===!1||!U.isInstancedMesh&&Tt.instancing===!0||U.isSkinnedMesh&&Tt.skinning===!1||!U.isSkinnedMesh&&Tt.skinning===!0||U.isInstancedMesh&&Tt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Tt.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Tt.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Tt.instancingMorph===!1&&U.morphTexture!==null||Tt.envMap!==bt||H.fog===!0&&Tt.fog!==nt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==et.numPlanes||Tt.numIntersection!==et.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==Bt||Tt.morphTargets!==St||Tt.morphNormals!==te||Tt.morphColors!==ue||Tt.toneMapping!==fe||Tt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Tt.__version=H.version);let dn=Tt.currentProgram;ie===!0&&(dn=dr(H,D,U));let zi=!1,Je=!1,Is=!1,pe=dn.getUniforms(),vn=Tt.uniforms;if(Pt.useProgram(dn.program)&&(zi=!0,Je=!0,Is=!0),H.id!==M&&(M=H.id,Je=!0),zi||y!==b){Pt.buffers.depth.getReversed()?(rt.copy(b.projectionMatrix),gf(rt),xf(rt),pe.setValue(N,"projectionMatrix",rt)):pe.setValue(N,"projectionMatrix",b.projectionMatrix),pe.setValue(N,"viewMatrix",b.matrixWorldInverse);let Zn=pe.map.cameraPosition;Zn!==void 0&&Zn.setValue(N,Nt.setFromMatrixPosition(b.matrixWorld)),Yt.logarithmicDepthBuffer&&pe.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Je=!0,Is=!0)}if(U.isSkinnedMesh){pe.setOptional(N,U,"bindMatrix"),pe.setOptional(N,U,"bindMatrixInverse");let on=U.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),pe.setValue(N,"boneTexture",on.boneTexture,E))}U.isBatchedMesh&&(pe.setOptional(N,U,"batchingTexture"),pe.setValue(N,"batchingTexture",U._matricesTexture,E),pe.setOptional(N,U,"batchingIdTexture"),pe.setValue(N,"batchingIdTexture",U._indirectTexture,E),pe.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&pe.setValue(N,"batchingColorTexture",U._colorsTexture,E));let Ls=O.morphAttributes;if((Ls.position!==void 0||Ls.normal!==void 0||Ls.color!==void 0)&&Ut.update(U,O,dn),(Je||Tt.receiveShadow!==U.receiveShadow)&&(Tt.receiveShadow=U.receiveShadow,pe.setValue(N,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(vn.envMap.value=bt,vn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&D.environment!==null&&(vn.envMapIntensity.value=D.environmentIntensity),Je&&(pe.setValue(N,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&cd(vn,Is),nt&&H.fog===!0&&ct.refreshFogUniforms(vn,nt),ct.refreshMaterialUniforms(vn,H,k,J,f.state.transmissionRenderTarget[b.id]),os.upload(N,Ic(Tt),vn,E)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(os.upload(N,Ic(Tt),vn,E),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(N,"center",U.center),pe.setValue(N,"modelViewMatrix",U.modelViewMatrix),pe.setValue(N,"normalMatrix",U.normalMatrix),pe.setValue(N,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){let on=H.uniformsGroups;for(let Zn=0,Kn=on.length;Zn<Kn;Zn++){let Dc=on[Zn];L.update(Dc,dn),L.bind(Dc,dn)}}return dn}function cd(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function hd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(b,D,O){Rt.get(b.texture).__webglTexture=D,Rt.get(b.depthTexture).__webglTexture=O;let H=Rt.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=O===void 0,H.__autoAllocateDepthBuffer||qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){let O=Rt.get(b);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,O=0){R=b,T=D,C=O;let H=!0,U=null,nt=!1,ut=!1;if(b){let bt=Rt.get(b);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(N.FRAMEBUFFER,null),H=!1;else if(bt.__webglFramebuffer===void 0)E.setupRenderTarget(b);else if(bt.__hasExternalTextures)E.rebindTextures(b,Rt.get(b.texture).__webglTexture,Rt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let St=b.depthTexture;if(bt.__boundDepthTexture!==St){if(St!==null&&Rt.has(St)&&(b.width!==St.image.width||b.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(b)}}let Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(ut=!0);let Bt=Rt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Bt[D])?U=Bt[D][O]:U=Bt[D],nt=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?U=Rt.get(b).__webglMultisampledFramebuffer:Array.isArray(Bt)?U=Bt[O]:U=Bt,A.copy(b.viewport),B.copy(b.scissor),F=b.scissorTest}else A.copy(mt).multiplyScalar(k).floor(),B.copy(Ct).multiplyScalar(k).floor(),F=Xt;if(Pt.bindFramebuffer(N.FRAMEBUFFER,U)&&H&&Pt.drawBuffers(b,U),Pt.viewport(A),Pt.scissor(B),Pt.setScissorTest(F),nt){let bt=Rt.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,bt.__webglTexture,O)}else if(ut){let bt=Rt.get(b.texture),Ft=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,bt.__webglTexture,O||0,Ft)}M=-1},this.readRenderTargetPixels=function(b,D,O,H,U,nt,ut){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){Pt.bindFramebuffer(N.FRAMEBUFFER,Mt);try{let bt=b.texture,Ft=bt.format,Bt=bt.type;if(!Yt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Yt.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-H&&O>=0&&O<=b.height-U&&N.readPixels(D,O,H,U,Ot.convert(Ft),Ot.convert(Bt),nt)}finally{let bt=R!==null?Rt.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(b,D,O,H,U,nt,ut){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ut!==void 0&&(Mt=Mt[ut]),Mt){let bt=b.texture,Ft=bt.format,Bt=bt.type;if(!Yt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Yt.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-H&&O>=0&&O<=b.height-U){Pt.bindFramebuffer(N.FRAMEBUFFER,Mt);let St=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.bufferData(N.PIXEL_PACK_BUFFER,nt.byteLength,N.STREAM_READ),N.readPixels(D,O,H,U,Ot.convert(Ft),Ot.convert(Bt),0);let te=R!==null?Rt.get(R).__webglFramebuffer:null;Pt.bindFramebuffer(N.FRAMEBUFFER,te);let ue=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await mf(N,ue,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,nt),N.deleteBuffer(St),N.deleteSync(ue),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,O=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);let H=Math.pow(2,-O),U=Math.floor(b.image.width*H),nt=Math.floor(b.image.height*H),ut=D!==null?D.x:0,Mt=D!==null?D.y:0;E.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,O,0,0,ut,Mt,U,nt),Pt.unbindTexture()},this.copyTextureToTexture=function(b,D,O=null,H=null,U=0){b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],D=arguments[2],U=arguments[3]||0,O=null);let nt,ut,Mt,bt,Ft,Bt,St,te,ue,fe=b.isCompressedTexture?b.mipmaps[U]:b.image;O!==null?(nt=O.max.x-O.min.x,ut=O.max.y-O.min.y,Mt=O.isBox3?O.max.z-O.min.z:1,bt=O.min.x,Ft=O.min.y,Bt=O.isBox3?O.min.z:0):(nt=fe.width,ut=fe.height,Mt=fe.depth||1,bt=0,Ft=0,Bt=0),H!==null?(St=H.x,te=H.y,ue=H.z):(St=0,te=0,ue=0);let qe=Ot.convert(D.format),ne=Ot.convert(D.type),Tt;D.isData3DTexture?(E.setTexture3D(D,0),Tt=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(E.setTexture2DArray(D,0),Tt=N.TEXTURE_2D_ARRAY):(E.setTexture2D(D,0),Tt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);let Cn=N.getParameter(N.UNPACK_ROW_LENGTH),ie=N.getParameter(N.UNPACK_IMAGE_HEIGHT),dn=N.getParameter(N.UNPACK_SKIP_PIXELS),zi=N.getParameter(N.UNPACK_SKIP_ROWS),Je=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,fe.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,fe.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,bt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Bt);let Is=b.isDataArrayTexture||b.isData3DTexture,pe=D.isDataArrayTexture||D.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){let vn=Rt.get(b),Ls=Rt.get(D),on=Rt.get(vn.__renderTarget),Zn=Rt.get(Ls.__renderTarget);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,on.__webglFramebuffer),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Kn=0;Kn<Mt;Kn++)Is&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(b).__webglTexture,U,Bt+Kn),b.isDepthTexture?(pe&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(D).__webglTexture,U,ue+Kn),N.blitFramebuffer(bt,Ft,nt,ut,St,te,nt,ut,N.DEPTH_BUFFER_BIT,N.NEAREST)):pe?N.copyTexSubImage3D(Tt,U,St,te,ue+Kn,bt,Ft,nt,ut):N.copyTexSubImage2D(Tt,U,St,te,ue+Kn,bt,Ft,nt,ut);Pt.bindFramebuffer(N.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else pe?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Tt,U,St,te,ue,nt,ut,Mt,qe,ne,fe.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,U,St,te,ue,nt,ut,Mt,qe,fe.data):N.texSubImage3D(Tt,U,St,te,ue,nt,ut,Mt,qe,ne,fe):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,St,te,nt,ut,qe,ne,fe.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,St,te,fe.width,fe.height,qe,fe.data):N.texSubImage2D(N.TEXTURE_2D,U,St,te,nt,ut,qe,ne,fe);N.pixelStorei(N.UNPACK_ROW_LENGTH,Cn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ie),N.pixelStorei(N.UNPACK_SKIP_PIXELS,dn),N.pixelStorei(N.UNPACK_SKIP_ROWS,zi),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Je),U===0&&D.generateMipmaps&&N.generateMipmap(Tt),Pt.unbindTexture()},this.copyTextureToTexture3D=function(b,D,O=null,H=null,U=0){return b.isTexture!==!0&&(Ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,H=arguments[1]||null,b=arguments[2],D=arguments[3],U=arguments[4]||0),Ws('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,D,O,H,U)},this.initRenderTarget=function(b){Rt.get(b).__webglFramebuffer===void 0&&E.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),Pt.unbindTexture()},this.resetState=function(){T=0,C=0,R=null,Pt.reset(),he.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=jt._getDrawingBufferColorSpace(t),e.unpackColorSpace=jt._getUnpackColorSpace()}};var lo=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new It(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},tr=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=rl,this.updateRanges=[],this.version=0,this.uuid=On()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=On()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Ve=new I,er=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyMatrix4(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.applyNormalMatrix(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ve.fromBufferAttribute(this,e),Ve.transformDirection(t),this.setXYZ(e,Ve.x,Ve.y,Ve.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=re(e,this.array),n=re(n,this.array),i=re(i,this.array),r=re(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new xe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ui=class extends Tn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ji,zs=new I,Qi=new I,ts=new I,es=new Vt,Bs=new Vt,fu=new Zt,Ur=new I,ks=new I,Nr=new I,Dh=new Vt,ga=new Vt,Uh=new Vt,Ii=class extends Ue{constructor(t=new ui){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Ce;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new co(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new er(n,3,0,!1)),ji.setAttribute("uv",new er(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new Vt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qi.setFromMatrixScale(this.matrixWorld),fu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qi.multiplyScalar(-ts.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Fr(Ur.set(-.5,-.5,0),ts,o,Qi,i,r),Fr(ks.set(.5,-.5,0),ts,o,Qi,i,r),Fr(Nr.set(.5,.5,0),ts,o,Qi,i,r),Dh.set(0,0),ga.set(1,0),Uh.set(1,1);let a=t.ray.intersectTriangle(Ur,ks,Nr,!1,zs);if(a===null&&(Fr(ks.set(-.5,.5,0),ts,o,Qi,i,r),ga.set(0,1),a=t.ray.intersectTriangle(Ur,Nr,ks,!1,zs),a===null))return;let l=t.ray.origin.distanceTo(zs);l<t.near||l>t.far||e.push({distance:l,point:zs.clone(),uv:si.getInterpolation(zs,Ur,ks,Nr,Dh,ga,Uh,new Vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Fr(s,t,e,n,i,r){es.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Bs.x=r*es.x-i*es.y,Bs.y=i*es.x+r*es.y):Bs.copy(es),s.copy(t),s.x+=Bs.x,s.y+=Bs.y,s.applyMatrix4(fu)}var bl=class extends Ye{constructor(t=null,e=1,n=1,i,r,o,a,l,c=tn,h=tn,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class extends xe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new Zt,Nh=new Zt,zr=[],Fh=new Wn,ux=new Zt,Os=new Ae,Hs=new Xn,fs=class extends Ae{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ux)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Fh.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Fh)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Hs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(Hs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Os.geometry=this.geometry,Os.material=this.material,Os.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Hs.copy(this.boundingSphere),Hs.applyMatrix4(n),t.ray.intersectsSphere(Hs)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,ns),Nh.multiplyMatrices(n,ns),Os.matrixWorld=Nh,Os.raycast(t,zr);for(let o=0,a=zr.length;o<a;o++){let l=zr[o];l.instanceId=r,l.object=this,e.push(l)}zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new bl(new Float32Array(i*this.count),i,this.count,Wl,Sn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var ir=class extends Tn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new It(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},ho=new I,uo=new I,zh=new Zt,Vs=new js,Br=new Xn,xa=new I,Bh=new I,Sl=class extends Ue{constructor(t=new Ce,e=new ir){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)ho.fromBufferAttribute(e,i-1),uo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=ho.distanceTo(uo);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(i),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;zh.copy(i).invert(),Vs.copy(t.ray).applyMatrix4(zh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=h.getX(x),S=h.getX(x+1),w=kr(this,t,Vs,l,f,S);w&&e.push(w)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(p),f=kr(this,t,Vs,l,x,m);f&&e.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let x=p,m=g-1;x<m;x+=c){let f=kr(this,t,Vs,l,x,x+1);f&&e.push(f)}if(this.isLineLoop){let x=kr(this,t,Vs,l,g-1,p);x&&e.push(x)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function kr(s,t,e,n,i,r){let o=s.geometry.attributes.position;if(ho.fromBufferAttribute(o,i),uo.fromBufferAttribute(o,r),e.distanceSqToSegment(ho,uo,xa,Bh)>n)return;xa.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(xa);if(!(l<t.near||l>t.far))return{distance:l,point:Bh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}var kh=new I,Oh=new I,fo=class extends Sl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)kh.fromBufferAttribute(e,i),Oh.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kh.distanceTo(Oh);t.setAttribute("lineDistance",new _e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wl=class extends Tn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new It(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Hh=new Zt,Tl=new js,Or=new Xn,Hr=new I,po=class extends Ue{constructor(t=new Ce,e=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(i),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Hh.copy(i).invert(),Tl.copy(t.ray).applyMatrix4(Hh);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,x=p;g<x;g++){let m=c.getX(g);Hr.fromBufferAttribute(u,m),Vh(Hr,m,l,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,x=p;g<x;g++)Hr.fromBufferAttribute(u,g),Vh(Hr,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Vh(s,t,e,n,i,r,o){let a=Tl.distanceSqToPoint(s);if(a<e){let l=new I;Tl.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ps=class extends Ye{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Yn=class s extends Ce{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),r=Math.floor(r);let h=[],u=[],d=[],p=[],g=0,x=[],m=n/2,f=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new _e(u,3)),this.setAttribute("normal",new _e(d,3)),this.setAttribute("uv",new _e(p,2));function S(){let v=new I,P=new I,T=0,C=(e-t)/n;for(let R=0;R<=r;R++){let M=[],y=R/r,A=y*(e-t)+t;for(let B=0;B<=i;B++){let F=B/i,W=F*l+a,X=Math.sin(W),V=Math.cos(W);P.x=A*X,P.y=-y*n+m,P.z=A*V,u.push(P.x,P.y,P.z),v.set(X,C,V).normalize(),d.push(v.x,v.y,v.z),p.push(F,1-y),M.push(g++)}x.push(M)}for(let R=0;R<i;R++)for(let M=0;M<r;M++){let y=x[M][R],A=x[M+1][R],B=x[M+1][R+1],F=x[M][R+1];(t>0||M!==0)&&(h.push(y,A,F),T+=3),(e>0||M!==r-1)&&(h.push(A,B,F),T+=3)}c.addGroup(f,T,0),f+=T}function w(v){let P=g,T=new Vt,C=new I,R=0,M=v===!0?t:e,y=v===!0?1:-1;for(let B=1;B<=i;B++)u.push(0,m*y,0),d.push(0,y,0),p.push(.5,.5),g++;let A=g;for(let B=0;B<=i;B++){let W=B/i*l+a,X=Math.cos(W),V=Math.sin(W);C.x=M*V,C.y=m*y,C.z=M*X,u.push(C.x,C.y,C.z),d.push(0,y,0),T.x=X*.5+.5,T.y=V*.5*y+.5,p.push(T.x,T.y),g++}for(let B=0;B<i;B++){let F=P+B,W=A+B;v===!0?h.push(W,W+1,F):h.push(W+1,W,F),R+=3}c.addGroup(f,R,v===!0?1:2),f+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},mo=class s extends Yn{constructor(t=1,e=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new s(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ms=class s extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,p=[],g=[],x=[],m=[];for(let f=0;f<=n;f++){let S=[],w=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){let T=P/e;u.x=-t*Math.cos(i+T*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(i+T*r)*Math.sin(o+w*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+v,1-w),S.push(c++)}h.push(S)}for(let f=0;f<n;f++)for(let S=0;S<e;S++){let w=h[f][S+1],v=h[f][S],P=h[f+1][S],T=h[f+1][S+1];(f!==0||o>0)&&p.push(w,v,T),(f!==n-1||l<Math.PI)&&p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new _e(g,3)),this.setAttribute("normal",new _e(x,3)),this.setAttribute("uv",new _e(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Li=class extends Tn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new It(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new It(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=iu,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=Ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function Vr(s,t,e){return!s||!e&&s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function dx(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}var gs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},El=class extends gs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zc,endingEnd:zc}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bc:r=t,a=2*e-n;break;case kc:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bc:o=t,l=2*n-e;break;case kc:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-e)/(i-e),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,S=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,w=(-1-p)*m+(1.5+p)*x+.5*g,v=p*m-p*x;for(let P=0;P!==a;++P)r[P]=f*o[h+P]+S*o[c+P]+w*o[l+P]+v*o[u+P];return r}},Al=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Rl=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},_n=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Vr(e,this.TimeBufferType),this.values=Vr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Vr(t.times,Array),values:Vr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Al(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new El(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $r:e=this.InterpolantFactoryMethodDiscrete;break;case sl:e=this.InterpolantFactoryMethodLinear;break;case Go:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $r;case this.InterpolantFactoryMethodLinear:return sl;case this.InterpolantFactoryMethodSmooth:return Go}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Go,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[d+g]||x!==e[p+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=sl;var Di=class extends _n{constructor(t,e,n){super(t,e,n)}};Di.prototype.ValueTypeName="bool";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=$r;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;var Cl=class extends _n{};Cl.prototype.ValueTypeName="color";var Pl=class extends _n{};Pl.prototype.ValueTypeName="number";var Il=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)yn.slerpFlat(r,0,o,c-a,o,c,l);return r}},go=class extends _n{InterpolantFactoryMethodLinear(t){return new Il(this.times,this.values,this.getValueSize(),t)}};go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends _n{constructor(t,e,n){super(t,e,n)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=$r;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ll=class extends _n{};Ll.prototype.ValueTypeName="vector";var Dl=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},fx=new Dl,Ul=class{constructor(t){this.manager=t!==void 0?t:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var sr=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new It(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xs=class extends sr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new It(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ya=new Zt,Gh=new I,Wh=new I,xo=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Gh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Gh),Wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wh),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Xh=new Zt,Gs=new I,_a=new I,Nl=class extends xo{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Vt(4,2),this._viewportCount=6,this._viewports=[new le(2,1,1,1),new le(0,1,1,1),new le(3,1,1,1),new le(1,1,1,1),new le(3,0,1,1),new le(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Gs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Gs),_a.copy(n.position),_a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_a),n.updateMatrixWorld(),i.makeTranslation(-Gs.x,-Gs.y,-Gs.z),Xh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xh)}},yo=class extends sr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Fl=class extends xo{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ys=class extends sr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new Fl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Kl="\\[\\]\\.:\\/",px=new RegExp("["+Kl+"]","g"),Jl="[^"+Kl+"]",mx="[^"+Kl.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",Jl),xx=/(WCOD+)?/.source.replace("WCOD",mx),yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),vx=new RegExp("^"+gx+xx+yx+_x+"$"),Mx=["material","materials","bones","map"],zl=class{constructor(t,e,n){let i=n||ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(px,"")}static parseTrackName(t){let e=vx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Mx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ge.Composite=zl;ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ge.prototype.GetterByBindingType=[ge.prototype._getValue_direct,ge.prototype._getValue_array,ge.prototype._getValue_arrayElement,ge.prototype._getValue_toArray];ge.prototype.SetterByBindingTypeAndVersioning=[[ge.prototype._setValue_direct,ge.prototype._setValue_direct_setNeedsUpdate,ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_array,ge.prototype._setValue_array_setNeedsUpdate,ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_arrayElement,ge.prototype._setValue_arrayElement_setNeedsUpdate,ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ge.prototype._setValue_fromArray,ge.prototype._setValue_fromArray_setNeedsUpdate,ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bl}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bl);var Et={T:0,CT:1},di=["t","ct"],oe={gravity:20,jumpSpeed:6.6,stepHeight:.55,radius:.36,height:1.8,crouchHeight:1.25,eye:1.64,crouchEye:1.12,accel:42,airAccel:9,friction:9,walkMul:.52,crouchMul:.36},Gt={startMoney:800,maxMoney:16e3,freezeTime:5,buyTime:25,roundTime:115,bombTime:40,plantTime:3.2,defuseTime:10,defuseKitTime:5,roundEndTime:5,killReward:300,plantReward:800,winElim:3250,winBomb:3500,winTime:3250,lossBase:1400,lossStep:500,lossMax:3400,bombRadius:17,bombDamage:500,dmRespawn:2.5,dmTime:600,dmFragLimit:40},ce={knife:{name:"\u041D\u043E\u0436",slot:2,kind:"knife",price:0,dmg:34,dmg2:65,rate:.42,rate2:1,reach:1.7,speed:6.4,kill:300,team:-1},glock:{name:"Glock-18",slot:1,kind:"pistol",price:400,dmg:25,rate:.15,clip:20,reserve:120,reload:2.2,spread:.01,moveSpread:.05,airSpread:.15,recoil:.018,recoilX:.006,spray:.004,pen:.47,range:.8,speed:6.2,team:-1,auto:!1},usp:{name:"USP",slot:1,kind:"pistol",price:500,dmg:34,rate:.15,clip:12,reserve:100,reload:2.7,spread:.008,moveSpread:.045,airSpread:.15,recoil:.022,recoilX:.006,spray:.004,pen:.5,range:.82,speed:6.2,team:-1,auto:!1},deagle:{name:"Desert Eagle",slot:1,kind:"pistol",price:650,dmg:54,rate:.24,clip:7,reserve:35,reload:2.2,spread:.01,moveSpread:.07,airSpread:.2,recoil:.055,recoilX:.012,spray:.01,pen:.93,range:.88,speed:6.2,team:-1,auto:!1},m3:{name:"M3 Super 90",slot:0,kind:"shotgun",price:1700,dmg:22,pellets:9,rate:.88,clip:8,reserve:32,reload:.5,shellReload:!0,spread:.065,moveSpread:.02,airSpread:.08,recoil:.06,recoilX:.01,spray:0,pen:.5,range:.55,speed:5.8,team:-1,auto:!1,kill:300},mp5:{name:"MP5 Navy",slot:0,kind:"smg",price:1500,dmg:26,rate:.08,clip:30,reserve:120,reload:2.6,spread:.012,moveSpread:.025,airSpread:.12,recoil:.011,recoilX:.006,spray:.0018,pen:.5,range:.84,speed:6.2,team:-1,auto:!0},p90:{name:"P90",slot:0,kind:"smg",price:2350,dmg:21,rate:.066,clip:50,reserve:100,reload:3.3,spread:.014,moveSpread:.025,airSpread:.12,recoil:.009,recoilX:.006,spray:.0016,pen:.75,range:.86,speed:6,team:-1,auto:!0},galil:{name:"Galil",slot:0,kind:"rifle",price:2e3,dmg:30,rate:.09,clip:35,reserve:90,reload:2.9,spread:.006,moveSpread:.09,airSpread:.25,recoil:.016,recoilX:.008,spray:.0028,pen:.77,range:.98,speed:5.6,team:0,auto:!0},famas:{name:"FAMAS",slot:0,kind:"rifle",price:2250,dmg:30,rate:.09,clip:25,reserve:90,reload:3.3,spread:.005,moveSpread:.09,airSpread:.25,recoil:.015,recoilX:.007,spray:.0026,pen:.7,range:.96,speed:5.6,team:1,auto:!0},ak47:{name:"AK-47",slot:0,kind:"rifle",price:2500,dmg:36,rate:.1,clip:30,reserve:90,reload:2.5,spread:.005,moveSpread:.11,airSpread:.3,recoil:.021,recoilX:.01,spray:.0032,pen:.78,range:.98,speed:5.5,team:0,auto:!0},m4a1:{name:"M4A1",slot:0,kind:"rifle",price:3100,dmg:33,rate:.09,clip:30,reserve:90,reload:3.1,spread:.0045,moveSpread:.1,airSpread:.28,recoil:.017,recoilX:.008,spray:.0026,pen:.7,range:.97,speed:5.6,team:1,auto:!0},scout:{name:"Scout",slot:0,kind:"sniper",price:2750,dmg:75,rate:1.25,clip:10,reserve:90,reload:2,spread:.003,unscoped:.05,moveSpread:.06,airSpread:.04,recoil:.04,recoilX:.004,spray:0,pen:.85,range:.99,speed:6.2,zoom:2.6,team:-1,auto:!1},awp:{name:"AWP",slot:0,kind:"sniper",price:4750,dmg:115,rate:1.45,clip:10,reserve:30,reload:3,spread:.002,unscoped:.09,moveSpread:.2,airSpread:.4,recoil:.09,recoilX:.006,spray:0,pen:.97,range:.99,speed:5,zoom:4,team:-1,auto:!1,kill:100},he:{name:"HE \u0433\u0440\u0430\u043D\u0430\u0442\u0430",slot:3,kind:"grenade",nade:"he",price:300,speed:6.2,team:-1},flash:{name:"\u0421\u0432\u0435\u0442\u043E\u0432\u0430\u044F",slot:3,kind:"grenade",nade:"flash",price:200,speed:6.2,team:-1,max:2},smoke:{name:"\u0414\u044B\u043C\u043E\u0432\u0430\u044F",slot:3,kind:"grenade",nade:"smoke",price:300,speed:6.2,team:-1},bomb:{name:"C4",slot:4,kind:"bomb",price:0,speed:6.2,team:0}},or={vest:{price:650},vesthelm:{price:1e3},kit:{price:200,team:1}},pu=[{cat:"pistols",items:["glock","usp","deagle"]},{cat:"heavy",items:["m3","mp5","p90"]},{cat:"rifles",items:["galil","famas","ak47","m4a1","scout","awp"]},{cat:"gear",items:["vest","vesthelm","kit"]},{cat:"nades",items:["he","flash","smoke"]}],fi=["glock","usp","deagle","m3","mp5","p90","galil","famas","ak47","m4a1","scout","awp","knife"],mu={head:4,chest:1,stomach:1.25,legs:.75},jl={easy:{react:.75,aimErr:.11,turn:3.2,burst:4,spot:.55,recoilComp:.2,strafe:0},normal:{react:.45,aimErr:.065,turn:5.5,burst:6,spot:.75,recoilComp:.45,strafe:.3},hard:{react:.28,aimErr:.038,turn:8.5,burst:9,spot:.9,recoilComp:.7,strafe:.6},expert:{react:.17,aimErr:.022,turn:12,burst:12,spot:1,recoilComp:.85,strafe:.85}},gu=["\u0421\u043E\u043A\u043E\u043B","\u0413\u0440\u043E\u043C","\u0412\u0438\u0445\u0440\u044C","\u0411\u0430\u0440\u0445\u0430\u043D","\u041A\u043E\u0431\u0440\u0430","\u0428\u0442\u043E\u0440\u043C","\u0411\u0430\u0440\u0441","\u0422\u0430\u0439\u0444\u0443\u043D","\u042F\u0441\u0442\u0440\u0435\u0431","\u041A\u0435\u0434\u0440","\u041C\u0435\u0434\u0432\u0435\u0434\u044C","\u0424\u0438\u043B\u0438\u043D","\u0421\u043A\u0438\u0444","\u0412\u043E\u043B\u043A","\u0420\u044B\u0441\u044C","\u0411\u0443\u0440\u0430\u043D","\u0421\u0430\u043C\u0443\u043C","\u0423\u0442\u0451\u0441","\u041F\u0443\u043C\u0430","\u0412\u043E\u0440\u043E\u043D"],Ql={low:{pixelRatio:.65,shadows:!1,particles:.4,drawDist:80,aa:!1},medium:{pixelRatio:.9,shadows:!1,particles:.7,drawDist:120,aa:!1},high:{pixelRatio:1.25,shadows:!0,particles:1,drawDist:160,aa:!0}};var $n=[{id:"sands",name:{ru:"\u041F\u0435\u0441\u043A\u0438",en:"Sands"},desc:{ru:"\u041F\u0443\u0441\u0442\u044B\u043D\u043D\u044B\u0439 \u0433\u043E\u0440\u043E\u0434\u043E\u043A: \u0434\u043B\u0438\u043D\u043D\u0430\u044F, \u043C\u0438\u0434, \u0442\u0443\u043D\u043D\u0435\u043B\u0438",en:"Desert town: long, mid, tunnels"},w:40,h:40,modes:["bomb","dm","gg"],theme:"desert",ops:[[",",17,2,23,8],[".",12,3,16,7],[".",2,2,11,11],[".",24,3,27,7],[".",28,2,37,11],[".",18,9,21,14],[".",12,9,17,10],[".",18,15,21,31],["#",19,19,21,19],["#",18,22,20,22],[".",14,32,25,37],[".",26,33,33,36],[".",34,12,37,36],["#",34,26,35,26],["1",22,15,22,17],["2",23,15,23,17],["3",24,15,29,17],["3",28,12,29,14],["2",28,11,29,11],["1",28,10,29,10],[",",3,31,13,35],[",",3,12,6,30],[",",7,27,17,28],["W",26,2,27,2],["W",12,3,12,3],["X",31,5,32,6],["x",33,6,33,6],["x",29,3,29,3],["x",36,9,36,9],["X",37,9,37,9],["o",35,3,35,3],["w",30,9,31,9],["X",4,4,5,5],["x",8,7,9,7],["X",10,3,10,3],["x",2,9,2,9],["x",6,2,6,2],["o",9,10,9,10],["x",20,12,20,12],["x",19,24,19,24],["o",21,30,21,30],["x",17,8,17,8],["x",23,2,23,2],["x",16,33,16,33],["x",23,36,23,36],["o",25,32,25,32],["X",34,14,34,14],["x",37,20,37,20],["x",36,31,36,31],["o",34,22,34,22],["x",5,20,5,20],["o",3,26,3,26],["x",10,33,10,33]],spawnT:[15,34,24,37],spawnCT:[18,3,22,6],sites:{A:[29,3,36,8],B:[3,3,10,9]}},{id:"depot",name:{ru:"\u0421\u043A\u043B\u0430\u0434",en:"Depot"},desc:{ru:"\u041F\u043E\u0440\u0442\u043E\u0432\u044B\u0439 \u0441\u043A\u043B\u0430\u0434: \u0441\u0442\u0435\u043B\u043B\u0430\u0436\u0438 \u0438 \u043A\u043E\u043D\u0442\u0435\u0439\u043D\u0435\u0440\u044B",en:"Harbor depot: racks and containers"},w:32,h:28,modes:["bomb","dm","gg"],theme:"industrial",ops:[[".",1,1,30,26],[",",18,1,30,7],[",",18,20,30,26],["W",7,4,7,10],["W",7,17,7,23],["W",13,1,13,4],["W",13,23,13,26],["#",12,11,17,16],["W",23,10,24,10],["W",23,17,24,17],["3",26,12,29,15],["2",25,12,25,15],["1",24,12,24,15],["X",21,3,22,3],["x",25,5,25,5],["x",19,6,19,6],["X",28,2,28,2],["o",23,1,23,1],["X",21,24,22,24],["x",25,22,25,22],["x",19,21,19,21],["X",28,25,28,25],["o",23,26,23,26],["x",10,7,10,7],["x",10,20,10,20],["X",3,3,3,3],["X",3,24,3,24],["o",15,8,15,8],["o",15,19,15,19],["x",20,13,20,14],["w",4,9,5,9],["w",4,18,5,18]],spawnT:[1,11,4,16],spawnCT:[26,12,29,15],sites:{A:[19,2,27,7],B:[19,20,27,25]}},{id:"arena",name:{ru:"\u0410\u0440\u0435\u043D\u0430",en:"Arena"},desc:{ru:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u0430\u044F \u0430\u0440\u0435\u043D\u0430 \u0434\u043B\u044F \u0434\u0435\u0437\u043C\u0430\u0442\u0447\u0430",en:"Compact deathmatch arena"},w:26,h:26,modes:["dm","gg"],theme:"night",ops:[[",",1,1,24,24],[".",3,3,22,22],["3",11,11,14,14],["2",10,12,10,13],["1",9,12,9,13],["2",15,12,15,13],["1",16,12,16,13],["2",12,10,13,10],["1",12,9,13,9],["2",12,15,13,15],["1",12,16,13,16],["W",5,5,6,6],["W",19,5,20,6],["W",5,19,6,20],["W",19,19,20,20],["x",9,4,9,4],["x",16,21,16,21],["X",3,12,3,13],["X",22,12,22,13],["x",12,3,13,3],["x",12,22,13,22],["o",8,17,8,17],["o",17,8,17,8],["w",9,7,10,7],["w",15,18,16,18]],spawnT:[2,2,5,23],spawnCT:[20,2,23,23],sites:{}}],tc={desert:{skyTop:4884168,skyBottom:15259312,fog:14272931,sun:16773590,sunI:1.25,amb:10137800,ambGround:9071168,ambI:.95,sunDir:[.45,.8,.3],mats:{"#":"sandstone",W:"plaster",".":"sand",",":"paving"}},industrial:{skyTop:7308185,skyBottom:13225425,fog:11844546,sun:15986922,sunI:1.05,amb:11056322,ambGround:5922144,ambI:1,sunDir:[-.4,.85,.35],mats:{"#":"concrete",W:"container",".":"asphalt",",":"concreteFloor"}},night:{skyTop:1713488,skyBottom:9075352,fog:5592686,sun:16765608,sunI:1.15,amb:10134232,ambGround:5589082,ambI:1.45,sunDir:[.55,.45,-.35],mats:{"#":"brick",W:"metal",".":"asphalt",",":"concreteFloor"}}};var xt=2,bx=60,Sx={".":0,",":0,x:1,X:2,o:1.1,1:.5,2:1,3:1.5,4:2,W:3.4,w:1.2},xu={x:.55,X:.45,o:.6,w:.4};function Ss(s){let t=s>>>0;return function(){t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function wx(s,t){let e=Math.imul(s*374761393+t*668265263,1274126177);return e=(e^e>>>13)>>>0,e%1e3/1e3}var pi=class{constructor(t){this.def=t,this.w=t.w,this.d=t.h,this.cell=xt;let e=this.w*this.d;this.chars=new Array(e).fill("#");for(let[n,i,r,o,a]of t.ops)for(let l=Math.max(0,r);l<=Math.min(this.d-1,a);l++)for(let c=Math.max(0,i);c<=Math.min(this.w-1,o);c++)this.chars[l*this.w+c]=n;for(let n=0;n<this.w;n++)this.chars[n]="#",this.chars[(this.d-1)*this.w+n]="#";for(let n=0;n<this.d;n++)this.chars[n*this.w]="#",this.chars[n*this.w+this.w-1]="#";this.heights=new Float32Array(e),this.maxH=0;for(let n=0;n<e;n++){let i=this.chars[n],r=Sx[i];r===void 0&&(r=6+Math.round(wx(n%this.w,n/this.w|0)*6)*.5),this.heights[n]=r,r>this.maxH&&(this.maxH=r)}this.buildNav()}inside(t,e){return t>=0&&e>=0&&t<this.w&&e<this.d}idx(t,e){return e*this.w+t}h(t,e){return this.inside(t,e)?this.heights[e*this.w+t]:bx}charAt(t,e){return this.inside(t,e)?this.chars[e*this.w+t]:"#"}cellX(t){return Math.floor(t/xt)}topAt(t,e){return this.h(Math.floor(t/xt),Math.floor(e/xt))}center(t,e){return{x:(t+.5)*xt,y:this.h(t,e),z:(e+.5)*xt}}isWall(t,e){return this.h(t,e)>=3}groundUnder(t,e,n){let i=Math.floor((t-n)/xt),r=Math.floor((t+n)/xt),o=Math.floor((e-n)/xt),a=Math.floor((e+n)/xt),l=-1/0;for(let c=o;c<=a;c++)for(let h=i;h<=r;h++){let u=this.h(h,c);u>l&&(l=u)}return l}blockedAt(t,e,n,i,r){let o=Math.floor((t-n)/xt),a=Math.floor((t+n)/xt),l=Math.floor((e-n)/xt),c=Math.floor((e+n)/xt);for(let h=l;h<=c;h++)for(let u=o;u<=a;u++)if(this.h(u,h)>i+oe.stepHeight&&i<r)return!0;return!1}move(t,e,n=oe.radius){let i=!1,r=Math.max(1,Math.ceil(Math.max(Math.abs(t.vx),Math.abs(t.vz))*e/.3)),o=e/r;for(let a=0;a<r;a++){let l=t.x+t.vx*o;this.blockedAt(l,t.z,n,t.y,t.y+1)?(t.vx>0?t.x=Math.floor((l+n)/xt)*xt-n-.001:t.vx<0&&(t.x=Math.ceil((l-n)/xt)*xt+n+.001),t.vx=0,t.hitWall=!0):t.x=l;let c=t.z+t.vz*o;this.blockedAt(t.x,c,n,t.y,t.y+1)?(t.vz>0?t.z=Math.floor((c+n)/xt)*xt-n-.001:t.vz<0&&(t.z=Math.ceil((c-n)/xt)*xt+n+.001),t.vz=0,t.hitWall=!0):t.z=c;let h=this.groundUnder(t.x,t.z,n-.02);t.onGround&&(h>t.y?(t.stepUp=(t.stepUp||0)+(h-t.y),t.y=h):t.y-h<=oe.stepHeight+.01&&t.vy<=0?t.y=h:t.onGround=!1),t.onGround||(t.vy-=oe.gravity*o,t.y+=t.vy*o,t.y<=h&&(h-t.y>1e-4&&t.vy>0,t.fallSpeed=-t.vy,t.y=h,t.vy=0,t.onGround=!0,i=!0))}return i}raycast(t,e,n,i,r,o,a){let l=Math.floor(t/xt),c=Math.floor(n/xt),h=i>0?1:-1,u=o>0?1:-1,d=i!==0?xt/Math.abs(i):1/0,p=o!==0?xt/Math.abs(o):1/0,g=i>0?((l+1)*xt-t)/i:i<0?(l*xt-t)/i:1/0,x=o>0?((c+1)*xt-n)/o:o<0?(c*xt-n)/o:1/0,m=0,f=0,S=0;for(let w=0;w<512;w++){let v=this.h(l,c),P=Math.min(g,x,a),T=e+r*m,C=e+r*P;if(T<v)return{t:m,nx:f,ny:0,nz:S,cx:l,cz:c};if(C<v)return{t:(v-e)/r,nx:0,ny:1,nz:0,cx:l,cz:c};if(P>=a||r>=0&&C>this.maxH)return null;g<x?(l+=h,m=g,g+=d,f=-h,S=0):(c+=u,m=x,x+=p,f=0,S=-u)}return null}exitDistance(t,e,n,i,r,o,a,l,c){let h=this.h(l,c),u=1/0,d=l*xt,p=d+xt,g=c*xt,x=g+xt;return i>0?u=Math.min(u,(p-t)/i):i<0&&(u=Math.min(u,(d-t)/i)),o>0?u=Math.min(u,(x-n)/o):o<0&&(u=Math.min(u,(g-n)/o)),r>0&&(u=Math.min(u,(h-e)/r)),Math.max(0,u-a)}los(t,e,n,i,r,o){let a=i-t,l=r-e,c=o-n,h=Math.hypot(a,l,c);return h<1e-4?!0:!this.raycast(t,e,n,a/h,l/h,c/h,h)}buildNav(){let t=this.w*this.d;this.walk=new Uint8Array(t);for(let a=0;a<t;a++)this.walk[a]=this.heights[a]<3?1:0;this.adj=[];let e=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]];for(let a=0;a<this.d;a++)for(let l=0;l<this.w;l++){let c=this.idx(l,a),h=[];if(this.adj.push(h),!this.walk[c])continue;let u=this.heights[c];for(let[d,p]of e){let g=l+d,x=a+p;if(!this.inside(g,x))continue;let m=this.idx(g,x);if(!this.walk[m])continue;let f=this.heights[m],S=f-u;if(S>1.05)continue;if(d&&p){let v=Math.max(u,f)+.01;if(this.h(l+d,a)>v||this.h(l,a+p)>v||Math.abs(S)>.01)continue}let w=d&&p?1.4142:1;S>oe.stepHeight&&(w+=1.5),h.push(m,w,S>oe.stepHeight?1:0)}}let n=this.def.spawnT,i=this.nearestWalkable(n[0]+n[2]>>1,n[1]+n[3]>>1),r=new Uint8Array(t),o=[i];for(r[i]=1;o.length;){let a=o.pop(),l=this.adj[a];for(let c=0;c<l.length;c+=3)r[l[c]]||(r[l[c]]=1,o.push(l[c]))}for(let a=0;a<t;a++)r[a]||(this.walk[a]=0,this.adj[a]=[]);for(let a=0;a<t;a++){let l=this.adj[a];if(!l.length)continue;let c=[];for(let h=0;h<l.length;h+=3)this.walk[l[h]]&&c.push(l[h],l[h+1],l[h+2]);this.adj[a]=c}}nearestWalkable(t,e){if(this.inside(t,e)&&this.walk[this.idx(t,e)])return this.idx(t,e);for(let n=1;n<6;n++)for(let i=-n;i<=n;i++)for(let r=-n;r<=n;r++){let o=t+r,a=e+i;if(this.inside(o,a)&&this.walk[this.idx(o,a)])return this.idx(o,a)}return-1}findPath(t,e,n,i){let r=this.nearestWalkable(Math.floor(t/xt),Math.floor(e/xt)),o=this.nearestWalkable(Math.floor(n/xt),Math.floor(i/xt));if(r<0||o<0)return null;if(r===o)return[{x:n,y:this.heights[o],z:i,jump:0}];let a=this.w*this.d;(!this._gs||this._gs.length!==a)&&(this._gs=new Float32Array(a),this._from=new Int32Array(a),this._stamp=new Uint32Array(a),this._closed=new Uint32Array(a),this._jump=new Uint8Array(a),this._run=0);let l=this._gs,c=this._from,h=this._stamp,u=this._closed,d=this._jump,p=++this._run,g=o%this.w,x=o/this.w|0,m=T=>{let C=T%this.w,R=T/this.w|0,M=Math.abs(C-g),y=Math.abs(R-x);return Math.max(M,y)+.4142*Math.min(M,y)},f=[],S=(T,C)=>{f.push([C,T]);let R=f.length-1;for(;R>0;){let M=R-1>>1;if(f[M][0]<=f[R][0])break;[f[M],f[R]]=[f[R],f[M]],R=M}},w=()=>{let T=f[0],C=f.pop();if(f.length){f[0]=C;let R=0;for(;;){let M=2*R+1,y=M+1,A=R;if(M<f.length&&f[M][0]<f[A][0]&&(A=M),y<f.length&&f[y][0]<f[A][0]&&(A=y),A===R)break;[f[A],f[R]]=[f[R],f[A]],R=A}}return T[1]};h[r]=p,l[r]=0,c[r]=-1,d[r]=0,S(r,m(r));let v=!1;for(;f.length;){let T=w();if(u[T]===p)continue;if(u[T]=p,T===o){v=!0;break}let C=this.adj[T];for(let R=0;R<C.length;R+=3){let M=C[R];if(u[M]===p)continue;let y=l[T]+C[R+1];(h[M]!==p||y<l[M])&&(h[M]=p,l[M]=y,c[M]=T,d[M]=C[R+2],S(M,y+m(M)))}}if(!v)return null;let P=[];for(let T=o;T!==-1;T=c[T])P.push(T);return P.reverse(),this.smooth(P,n,i)}flatLine(t,e,n,i,r){let o=n-t,a=i-e,l=Math.hypot(o,a),c=Math.ceil(l/.5),h=oe.radius+.15;for(let u=1;u<=c;u++){let d=t+o*u/c,p=e+a*u/c;for(let[g,x]of[[h,h],[-h,h],[h,-h],[-h,-h]])if(Math.abs(this.topAt(d+g,p+x)-r)>.01)return!1}return!0}smooth(t,e,n){let i=t.map(l=>({x:(l%this.w+.5)*xt,y:this.heights[l],z:((l/this.w|0)+.5)*xt,jump:this._jump[l]})),r=i[i.length-1];Math.abs(this.topAt(e,n)-r.y)<.01&&this.groundUnder(e,n,oe.radius)-r.y<.01&&(r.x=e,r.z=n);let o=[],a=0;for(;a<i.length-1;){let l=i.length-1;for(;l>a+1;l--){let c=!0;for(let h=a+1;h<=l;h++)if(i[h].jump||Math.abs(i[h].y-i[a].y)>.01){c=!1;break}if(c&&this.flatLine(i[a].x,i[a].z,i[l].x,i[l].z,i[a].y))break}o.push(i[l]),a=l}return o.length||o.push(r),o}randomCellIn(t,e,n){let[i,r,o,a]=t;for(let c=0;c<60;c++){let h=i+Math.floor(e()*(o-i+1)),u=r+Math.floor(e()*(a-r+1)),d=this.idx(h,u);if(!(!this.walk[d]||this.heights[d]>2)&&!(n&&n(h,u)))return this.center(h,u)}let l=this.nearestWalkable(i+o>>1,r+a>>1);return this.center(l%this.w,l/this.w|0)}inRect(t,e,n){let i=Math.floor(t/xt),r=Math.floor(e/xt);return i>=n[0]&&i<=n[2]&&r>=n[1]&&r<=n[3]}floorCells(){if(this._floor)return this._floor;this._floor=[];for(let t=0;t<this.walk.length;t++){if(!this.walk[t]||this.heights[t]>1.6)continue;let e=t%this.w,n=t/this.w|0,i=0;for(let[r,o]of[[1,0],[-1,0],[0,1],[0,-1]])this.walk[this.idx(e+r,n+o)]&&i++;i>=2&&this._floor.push(t)}return this._floor}};var _u=256;function ec(s=_u){let t=document.createElement("canvas");return t.width=t.height=s,t}function nn(s,t,e,n,i=1){let r=s.getImageData(0,0,t,t),o=r.data;for(let a=0;a<o.length;a+=4){let l=(e()-.5)*n;o[a]=Math.max(0,Math.min(255,o[a]+l)),o[a+1]=Math.max(0,Math.min(255,o[a+1]+l)),o[a+2]=Math.max(0,Math.min(255,o[a+2]+l*.9)),o[a+3]=o[a+3]*i}s.putImageData(r,0,0)}function Ze(s,t,e,n,i,r,o,a){for(let l=0;l<i;l++){let c=e()*t,h=e()*t,u=r+e()*(o-r),d=s.createRadialGradient(c,h,0,c,h,u);d.addColorStop(0,n.replace("A",String(a))),d.addColorStop(1,n.replace("A","0")),s.fillStyle=d;for(let p of[-t,0,t])for(let g of[-t,0,t])s.save(),s.translate(p,g),s.fillRect(c-u,h-u,u*2,u*2),s.restore()}}function So(s,t,e,n,i,r,o,a,l=3){s.fillStyle=o,s.fillRect(0,0,t,t);let c=t/n,h=t/i;for(let u=0;u<n;u++){let d=u%2*h/2;for(let p=-1;p<=i;p++){let g=(e()-.5)*a,[x,m,f]=r;s.fillStyle=`rgb(${x+g},${m+g*.9},${f+g*.8})`,s.fillRect(p*h+d+l/2,u*c+l/2,h-l,c-l)}}}var yu={sandstone(s,t,e){So(s,t,e,4,2,[196,160,112],"#a98a5e",26,4),Ze(s,t,e,"rgba(120,90,50,A)",18,10,50,.18),nn(s,t,e,26)},plaster(s,t,e){s.fillStyle="#d8c39b",s.fillRect(0,0,t,t),Ze(s,t,e,"rgba(160,125,80,A)",30,10,60,.25),Ze(s,t,e,"rgba(255,245,220,A)",14,10,40,.25),s.fillStyle="rgba(110,80,50,0.35)",s.fillRect(0,t-18,t,18),nn(s,t,e,18)},sand(s,t,e){s.fillStyle="#cdb184",s.fillRect(0,0,t,t),Ze(s,t,e,"rgba(150,115,70,A)",40,8,40,.22),Ze(s,t,e,"rgba(235,215,170,A)",25,8,30,.25),nn(s,t,e,34)},paving(s,t,e){So(s,t,e,4,4,[170,150,120],"#7d6c55",30,4),Ze(s,t,e,"rgba(90,70,40,A)",20,10,40,.18),nn(s,t,e,22)},stone(s,t,e){So(s,t,e,2,2,[160,150,135],"#6f665a",24,5),nn(s,t,e,28)},crate(s,t,e){s.fillStyle="#9b6b35",s.fillRect(0,0,t,t);for(let n=0;n<8;n++){let i=(e()-.5)*30;s.fillStyle=`rgb(${150+i},${104+i},${56+i*.6})`,s.fillRect(0,n*t/8+1,t,t/8-2)}s.strokeStyle="#5a3a18",s.lineWidth=18,s.strokeRect(9,9,t-18,t-18),s.lineWidth=16,s.beginPath(),s.moveTo(18,18),s.lineTo(t-18,t-18),s.stroke(),s.fillStyle="#3a2610";for(let[n,i]of[[18,18],[t-18,18],[18,t-18],[t-18,t-18]])s.beginPath(),s.arc(n,i,4,0,7),s.fill();nn(s,t,e,26)},concrete(s,t,e){s.fillStyle="#9a9a96",s.fillRect(0,0,t,t),Ze(s,t,e,"rgba(70,70,70,A)",30,10,60,.18),s.fillStyle="rgba(40,40,40,0.35)",s.fillRect(0,t/2-1,t,2),s.fillRect(t/2-1,0,2,t);for(let[n,i]of[[t/4,t/4],[3*t/4,t/4],[t/4,3*t/4],[3*t/4,3*t/4]])s.beginPath(),s.arc(n,i,3,0,7),s.fill();nn(s,t,e,24)},concreteFloor(s,t,e){s.fillStyle="#86888a",s.fillRect(0,0,t,t),Ze(s,t,e,"rgba(50,50,55,A)",40,10,50,.2),s.fillStyle="rgba(30,30,30,0.4)",s.fillRect(0,0,t,2),s.fillRect(0,0,2,t),s.fillStyle="rgba(220,180,40,0.55)",s.fillRect(0,t*.82,t,10),nn(s,t,e,22)},asphalt(s,t,e){s.fillStyle="#4a4a4c",s.fillRect(0,0,t,t),Ze(s,t,e,"rgba(20,20,20,A)",40,8,40,.25),Ze(s,t,e,"rgba(120,120,120,A)",20,4,18,.2),nn(s,t,e,40)},container(s,t,e){let n=e()<.5?[150,50,40]:[40,90,140];s.fillStyle=`rgb(${n})`,s.fillRect(0,0,t,t);for(let i=0;i<t;i+=16)s.fillStyle="rgba(0,0,0,0.25)",s.fillRect(i,0,4,t),s.fillStyle="rgba(255,255,255,0.12)",s.fillRect(i+8,0,3,t);Ze(s,t,e,"rgba(90,50,20,A)",18,6,26,.35),nn(s,t,e,20)},brick(s,t,e){So(s,t,e,8,4,[128,58,44],"#4e4842",34,4),Ze(s,t,e,"rgba(30,20,20,A)",18,10,50,.25),nn(s,t,e,24)},metal(s,t,e){s.fillStyle="#5c646e",s.fillRect(0,0,t,t),s.strokeStyle="rgba(20,24,30,0.6)",s.lineWidth=3;for(let n=0;n<=4;n++)s.strokeRect(n*t/4,0,t/4,t);for(let n=0;n<4;n++)for(let i=0;i<8;i++)s.fillStyle="rgba(200,210,220,0.4)",s.beginPath(),s.arc(n*t/4+8,i*t/8+8,2,0,7),s.fill();Ze(s,t,e,"rgba(110,70,40,A)",10,8,30,.3),nn(s,t,e,18)},barrel(s,t,e){s.fillStyle="#3f6a3a",s.fillRect(0,0,t,t),s.fillStyle="rgba(0,0,0,0.3)";for(let n of[.18,.5,.82])s.fillRect(0,n*t-5,t,10);s.fillStyle="#e8c420",s.fillRect(t*.35,t*.28,t*.3,t*.12),Ze(s,t,e,"rgba(120,60,20,A)",14,6,26,.4),nn(s,t,e,22)}},ws=new Map;function nc(s,t=4){if(ws.has(s))return ws.get(s);let e=ec(),n=e.getContext("2d",{willReadFrequently:!0}),i=Ss(s.length*7919+s.charCodeAt(0)*31);(yu[s]||yu.concrete)(n,_u,i);let r=new ps(e);return r.wrapS=r.wrapT=Zs,r.colorSpace=De,r.anisotropy=t,r.generateMipmaps=!0,r.minFilter=Bn,ws.set(s,r),r}function vu(s){let t=ec(256),e=t.getContext("2d");e.strokeStyle="rgba(200,30,20,0.75)",e.lineWidth=14,e.beginPath(),e.arc(128,128,104,0,Math.PI*2),e.stroke(),e.fillStyle="rgba(200,30,20,0.8)",e.font="bold 170px Arial, sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(s,128,136);let n=new ps(t);return n.colorSpace=De,n}function En(s="smoke"){let t="sprite_"+s;if(ws.has(t))return ws.get(t);let e=ec(64),n=e.getContext("2d");if(s==="flash"){let r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,230,1)"),r.addColorStop(.25,"rgba(255,220,120,0.95)"),r.addColorStop(.6,"rgba(255,140,30,0.35)"),r.addColorStop(1,"rgba(255,100,0,0)"),n.fillStyle=r,n.fillRect(0,0,64,64),n.fillStyle="rgba(255,240,200,0.9)";for(let o=0;o<6;o++)n.save(),n.translate(32,32),n.rotate(o*Math.PI/3),n.beginPath(),n.moveTo(0,-3),n.lineTo(30,0),n.lineTo(0,3),n.fill(),n.restore()}else if(s==="spark"){let r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.3,"rgba(255,230,160,0.8)"),r.addColorStop(1,"rgba(255,160,40,0)"),n.fillStyle=r,n.fillRect(0,0,64,64)}else if(s==="hole"){let r=n.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,"rgba(10,8,6,1)"),r.addColorStop(.35,"rgba(25,20,15,0.95)"),r.addColorStop(.55,"rgba(60,50,40,0.4)"),r.addColorStop(1,"rgba(60,50,40,0)"),n.fillStyle=r,n.fillRect(0,0,64,64)}else if(s==="blood"){let r=Ss(99);for(let o=0;o<9;o++){let a=32+(r()-.5)*30,l=32+(r()-.5)*30,c=4+r()*12;n.fillStyle="rgba(120,8,8,0.85)",n.beginPath(),n.arc(a,l,c,0,7),n.fill()}}else{let r=Ss(5);for(let o=0;o<14;o++){let a=32+(r()-.5)*24,l=32+(r()-.5)*24,c=10+r()*14,h=n.createRadialGradient(a,l,0,a,l,c);h.addColorStop(0,"rgba(255,255,255,0.35)"),h.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=h,n.fillRect(0,0,64,64)}}let i=new ps(e);return i.colorSpace=De,ws.set(t,i),i}var Tx={x:"crate",X:"crate",o:".",1:"stone",2:"stone",3:"stone",4:"stone",w:"#"},Ex={crate:1,stone:2,sand:4,paving:4,sandstone:4,plaster:4,concrete:4,concreteFloor:4,asphalt:4,container:4,brick:3,metal:4};function Ax(s,t){let e=s.mats[t]||Tx[t];return e&&s.mats[e]&&(e=s.mats[e]),e||s.mats["#"]}function Mu(s,t,e,n){let i=tc[t.theme],r=new me,o=new Map,a=f=>(o.has(f)||o.set(f,{p:[],n:[],uv:[],c:[],i:[]}),o.get(f)),l=(f,S,w,v,P)=>{let T=f.p.length/3;for(let C=0;C<4;C++){f.p.push(S[C][0],S[C][1],S[C][2]),f.n.push(w[0],w[1],w[2]),f.uv.push(v[C][0],v[C][1]);let R=P[C];f.c.push(R,R,R*.98)}f.i.push(T,T+1,T+2,T,T+2,T+3)},c=(f,S)=>s.h(f,S),h=[];for(let f=0;f<s.d;f++)for(let S=0;S<s.w;S++){let w=s.charAt(S,f),v=c(S,f),P=Ax(i,w);w==="o"&&(h.push([S,f]),v=0);let T=Ex[P]||4,C=a(P),R=S*xt,M=R+xt,y=f*xt,A=y+xt,B=(X,V)=>{let J=0;for(let[k,it]of[[-1,-1],[0,-1],[-1,0],[0,0]]){let st=X+k,mt=V+it;if(st===S&&mt===f)continue;(s.charAt(st,mt)==="o"?1.1:c(st,mt))>v+.2&&J++}return 1-.17*J},F=X=>X/T;if(l(C,[[R,v,y],[R,v,A],[M,v,A],[M,v,y]],[0,1,0],[[F(R),F(y)],[F(R),F(A)],[F(M),F(A)],[F(M),F(y)]],[B(S,f),B(S,f+1),B(S+1,f+1),B(S+1,f)]),v<=0)continue;let W=[[1,0,[M,A],[M,y],[1,0,0]],[-1,0,[R,y],[R,A],[-1,0,0]],[0,1,[R,A],[M,A],[0,0,1]],[0,-1,[M,y],[R,y],[0,0,-1]]];for(let[X,V,J,k,it]of W){let st=S+X,mt=f+V;if(!s.inside(st,mt))continue;let Ct=s.charAt(st,mt)==="o"?0:c(st,mt);if(Ct>=v)continue;let Xt=X!==0?J[1]:J[0],Y=X!==0?k[1]:k[0],Q=X>0||V<0?-1:1,ft=Nt=>Q*Nt/T,rt=Math.min(v,Ct+1.4),At=Ct<=.01?.58:.8;l(C,[[J[0],rt,J[1]],[J[0],Ct,J[1]],[k[0],Ct,k[1]],[k[0],rt,k[1]]],it,[[ft(Xt),rt/T],[ft(Xt),Ct/T],[ft(Y),Ct/T],[ft(Y),rt/T]],[.92,At,At,.92]),v>rt&&l(C,[[J[0],v,J[1]],[J[0],rt,J[1]],[k[0],rt,k[1]],[k[0],v,k[1]]],it,[[ft(Xt),v/T],[ft(Xt),rt/T],[ft(Y),rt/T],[ft(Y),v/T]],[1,.92,.92,1])}}let u=[];for(let[f,S]of o){let w=new Ce;w.setAttribute("position",new _e(S.p,3)),w.setAttribute("normal",new _e(S.n,3)),w.setAttribute("uv",new _e(S.uv,2)),w.setAttribute("color",new _e(S.c,3)),w.setIndex(S.i),w.computeBoundingSphere();let v=new Li({map:nc(f,n),vertexColors:!0}),P=new Ae(w,v);P.receiveShadow=e.shadows,P.castShadow=e.shadows,P.matrixAutoUpdate=!1,r.add(P),u.push(P)}if(h.length){let f=new Yn(.62,.62,1.1,14);f.translate(0,.55,0);let S=new Li({map:nc("barrel",n)}),w=new fs(f,S,h.length*2),v=new Zt,P=0;for(let[T,C]of h)for(let[R,M]of[[-.42,-.35],[.45,.4]])v.makeRotationY(T*1.7+M),v.setPosition((T+.5)*xt+R,0,(C+.5)*xt+M),w.setMatrixAt(P++,v);w.castShadow=e.shadows,w.receiveShadow=e.shadows,r.add(w)}for(let[f,S]of Object.entries(t.sites)){let w=(S[0]+S[2]+1)/2*xt,v=(S[1]+S[3]+1)/2*xt,P=null;for(let R=S[1];R<=S[3];R++)for(let M=S[0];M<=S[2];M++){if(s.h(M,R)!==0||s.charAt(M,R)==="o")continue;let y=s.center(M,R),A=Math.hypot(y.x-w,y.z-v);(!P||A<P.d)&&(P={d:A,c:y})}if(!P)continue;let T=new qn({map:vu(f),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),C=new Ae(new hi(3.4,3.4),T);C.rotation.x=-Math.PI/2,C.position.set(P.c.x,.02,P.c.z),r.add(C)}let d=new Ae(new ms(450,24,12),new $e({side:Oe,depthWrite:!1,fog:!1,uniforms:{top:{value:new It(i.skyTop)},bottom:{value:new It(i.skyBottom)},sunDir:{value:new I(...i.sunDir).normalize()},sunCol:{value:new It(i.sun)}},vertexShader:"varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vDir; void main(){ float h = clamp(vDir.y*1.6+0.15,0.0,1.0); vec3 c = mix(bottom, top, h); float s = max(dot(normalize(vDir), sunDir), 0.0); c += sunCol * (pow(s, 600.0)*1.5 + pow(s, 12.0)*0.18); gl_FragColor = vec4(c,1.0); }"}));d.renderOrder=-10,d.frustumCulled=!1,r.add(d);let p=new me,g=new qn({color:new It(i.fog).multiplyScalar(.82),fog:!1}),x=s.w*xt/2,m=s.d*xt/2;for(let f=0;f<26;f++){let S=f/26*Math.PI*2,w=230+f*37%50,v=new Ae(new mo(40+f*13%30,30+f*29%40,5),g);v.position.set(x+Math.cos(S)*w,8,m+Math.sin(S)*w),v.rotation.y=f,p.add(v)}return r.add(p),{group:r,meshes:u,theme:i,sky:d}}function bu(s,t,e,n){let i=new xs(t.amb,t.ambGround,t.ambI);s.add(i);let r=new ys(t.sun,t.sunI),o=new I(...t.sunDir).normalize(),a=e.w*xt/2,l=e.d*xt/2;if(r.position.set(a+o.x*80,o.y*80,l+o.z*80),r.target.position.set(a,0,l),s.add(r,r.target),n.shadows){r.castShadow=!0;let c=Math.max(e.w,e.d)*xt*.62,h=r.shadow.camera;h.left=-c,h.right=c,h.top=c,h.bottom=-c,h.near=1,h.far=220,r.shadow.mapSize.set(2048,2048),r.shadow.bias=-8e-4,r.shadow.normalBias=.04}return s.fog=new lo(t.fog,30,n.drawDist),{hemi:i,sun:r}}function wu(s,t=!1){let e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,l=new Ce,c=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,u=[];for(let d=0;d<s.length;++d){let p=s[d].index;for(let g=0;g<p.count;++g)u.push(p.getX(g)+h);h+=s[d].attributes.position.count}l.setIndex(u)}for(let h in r){let u=Su(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let x=0;x<o[h].length;++x)p.push(o[h][x][d]);let g=Su(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Su(s){let t,e,n,i=-1,r=0;for(let c=0;c<s.length;++c){let h=s[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let o=new t(r),a=new xe(o,e,n),l=0;for(let c=0;c<s.length;++c){let h=s[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,p=h.count;d<p;d++)for(let g=0;g<e;g++){let x=h.getComponent(d,g);a.setComponent(d+u,g,x)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}var Rx=new Li({vertexColors:!0}),wo=new It,Cx=new en,ic=new Zt;function lc(s,t,e,n,i,r,o,a,l){let c=t.clone();ic.makeRotationFromEuler(Cx.set(o,a,l)),ic.setPosition(n,i,r),c.applyMatrix4(ic),wo.setHex(e).convertSRGBToLinear();let h=c.attributes.position.count,u=new Float32Array(h*3);for(let d=0;d<h;d++)u[d*3]=wo.r,u[d*3+1]=wo.g,u[d*3+2]=wo.b;c.setAttribute("color",new xe(u,3)),(s.userData.parts||(s.userData.parts=[])).push(c)}var sc=new Map;function Px(s,t,e){let n=s+","+t+","+e;return sc.has(n)||sc.set(n,new Pi(s,t,e)),sc.get(n)}function tt(s,t,e,n,i,r,o,a,l=0,c=0,h=0){lc(s,Px(t,e,n),i,r,o,a,l,c,h)}function Xe(s,t,e,n,i,r,o,a=8){lc(s,new Yn(t,t,e,a),n,i,r,o,Math.PI/2,0,0)}function rc(s,t,e,n=0,i=0,r=0){lc(s,t,e,n,i,r,0,0,0)}function cc(s,t=!1){return s.traverse(e=>{let n=e.userData.parts;if(!n)return;let i=wu(n.map(o=>o.index?o.toNonIndexed():o),!1),r=new Ae(i,Rx);r.castShadow=t,e.add(r),delete e.userData.parts}),s}var Ke=3816770,sn=5725026,Tu=9065512,Ix=6963232,oc=11843773,ve=2895409,Eu={knife(s){return tt(s,.026,.032,.11,ve,0,0,0),tt(s,.05,.014,.016,sn,0,.004,-.058),tt(s,.006,.034,.17,oc,0,.006,-.15),tt(s,.006,.018,.05,oc,0,0,-.245,.5,0,0),{muzzle:[0,0,-.26],fore:null}},glock(s){return tt(s,.03,.034,.185,ve,0,.055,-.055),tt(s,.028,.024,.15,2763566,0,.028,-.045),tt(s,.029,.11,.046,ve,0,-.03,.02,.28),tt(s,.012,.02,.03,ve,0,.012,-.02),{muzzle:[0,.056,-.15],fore:null}},usp(s){return tt(s,.031,.036,.205,3421754,0,.056,-.06),tt(s,.029,.026,.16,ve,0,.028,-.05),tt(s,.03,.115,.048,ve,0,-.032,.022,.25),Xe(s,.016,.12,ve,0,.056,-.22),{muzzle:[0,.056,-.28],fore:null}},deagle(s){return tt(s,.038,.046,.26,oc,0,.06,-.08),tt(s,.034,.028,.2,8093572,0,.026,-.06),tt(s,.034,.12,.052,ve,0,-.035,.025,.22),{muzzle:[0,.062,-.21],fore:null}},m3(s){return tt(s,.05,.07,.3,Ke,0,.04,-.05),Xe(s,.013,.5,sn,0,.062,-.44),Xe(s,.015,.4,Ke,0,.028,-.38),tt(s,.054,.048,.17,ve,0,.026,-.38),tt(s,.042,.085,.3,ve,0,0,.24,.1),tt(s,.035,.1,.045,ve,0,-.04,.07,.3),{muzzle:[0,.062,-.7],fore:[0,0,-.38]}},mp5(s){return tt(s,.05,.07,.3,Ke,0,.045,-.08),tt(s,.056,.05,.14,ve,0,.03,-.25),Xe(s,.012,.12,sn,0,.055,-.36),tt(s,.03,.17,.04,sn,0,-.06,-.16,-.28),tt(s,.03,.05,.22,Ke,0,.035,.17),tt(s,.034,.1,.044,ve,0,-.035,.03,.3),tt(s,.012,.03,.02,Ke,0,.09,-.02),{muzzle:[0,.055,-.43],fore:[0,0,-.25]}},p90(s){return tt(s,.065,.11,.44,2830632,0,.03,-.06),tt(s,.048,.03,.3,7299136,0,.1,-.1),Xe(s,.011,.08,Ke,0,.05,-.31),tt(s,.04,.05,.05,1776922,0,.13,-.05),{muzzle:[0,.05,-.35],fore:[0,-.01,-.2]}},ak47(s){return tt(s,.05,.07,.36,Ke,0,.04,-.06),tt(s,.056,.06,.2,Tu,0,.035,-.33),Xe(s,.011,.32,sn,0,.06,-.55),Xe(s,.009,.2,Ke,0,.085,-.36),tt(s,.036,.12,.062,3812124,0,-.04,-.13,-.2),tt(s,.034,.1,.06,3812124,0,-.135,-.09,-.55),tt(s,.045,.09,.32,Tu,0,-.005,.27,.12),tt(s,.035,.1,.045,Ix,0,-.04,.06,.3),tt(s,.01,.035,.012,Ke,0,.09,-.66),{muzzle:[0,.06,-.72],fore:[0,.005,-.33]}},galil(s){return tt(s,.05,.075,.36,3092521,0,.04,-.06),tt(s,.056,.06,.2,4999738,0,.035,-.33),Xe(s,.011,.3,sn,0,.06,-.55),tt(s,.036,.15,.06,Ke,0,-.06,-.12,-.25),tt(s,.03,.06,.3,sn,0,0,.25),tt(s,.035,.1,.045,ve,0,-.04,.06,.3),{muzzle:[0,.06,-.7],fore:[0,.005,-.33]}},famas(s){return tt(s,.055,.1,.5,2895667,0,.03,0),tt(s,.02,.05,.36,ve,0,.11,-.06),Xe(s,.011,.18,sn,0,.04,-.33),tt(s,.03,.12,.05,Ke,0,-.06,.12,-.1),tt(s,.035,.1,.045,ve,0,-.045,-.08,.3),{muzzle:[0,.04,-.43],fore:[0,-.01,-.2]}},m4a1(s){return tt(s,.05,.08,.34,1842463,0,.04,-.05),tt(s,.02,.03,.14,1842463,0,.1,-.06),Xe(s,.026,.25,ve,0,.045,-.33,10),Xe(s,.018,.22,2829358,0,.05,-.56,10),tt(s,.03,.15,.06,sn,0,-.07,-.1,-.1),tt(s,.042,.07,.28,ve,0,.02,.25),tt(s,.035,.1,.045,ve,0,-.04,.06,.3),{muzzle:[0,.05,-.68],fore:[0,0,-.33]}},scout(s){return tt(s,.045,.065,.5,3356218,0,.035,-.08),Xe(s,.01,.45,Ke,0,.05,-.55),Xe(s,.022,.28,ve,0,.115,-.06,10),tt(s,.04,.09,.26,3356218,0,0,.26,.1),tt(s,.03,.08,.04,Ke,0,-.03,-.08),tt(s,.034,.1,.045,ve,0,-.045,.08,.3),{muzzle:[0,.05,-.78],fore:[0,0,-.3],scope:!0}},awp(s){return tt(s,.065,.09,.6,4020794,0,.03,-.1),Xe(s,.014,.55,Ke,0,.05,-.68),Xe(s,.03,.34,ve,0,.13,-.06,12),tt(s,.062,.13,.32,4020794,0,-.005,.32,.08),tt(s,.04,.1,.06,ve,0,-.05,-.05),tt(s,.036,.1,.045,3031852,0,-.06,.12,.3),{muzzle:[0,.05,-.96],fore:[0,-.01,-.36],scope:!0}},he(s){return rc(s,new ms(.036,10,8),4938284),tt(s,.02,.03,.02,sn,0,.04,0),tt(s,.012,.06,.012,sn,.016,.02,0,0,0,.2),{muzzle:[0,0,0],fore:null}},flash(s){return rc(s,new Yn(.028,.028,.1,10),9212310),tt(s,.02,.025,.02,sn,0,.06,0),{muzzle:[0,0,0],fore:null}},smoke(s){return rc(s,new Yn(.03,.03,.11,10),5333082),tt(s,.062,.02,.062,13684944,0,0,0),tt(s,.02,.025,.02,sn,0,.065,0),{muzzle:[0,0,0],fore:null}},bomb(s){tt(s,.2,.08,.12,10191960,0,0,0);for(let t=0;t<4;t++)tt(s,.042,.082,.124,12755562,-.075+t*.05,0,0);return tt(s,.08,.02,.07,2236962,0,.05,0),tt(s,.05,.004,.02,3211104,0,.061,-.015),tt(s,.006,.006,.13,12591136,.06,.045,0),tt(s,.006,.006,.13,2113728,.07,.045,0),{muzzle:[0,0,0],fore:null}}},ac=new Map;function Ts(s){if(!ac.has(s)){let n=new me,i=(Eu[s]||Eu.glock)(n);cc(n),n.userData={key:s,muzzle:new I(...i.muzzle),fore:i.fore?new I(...i.fore):null,scope:!!i.scope},ac.set(s,n)}let t=ac.get(s),e=t.clone();return e.userData={...t.userData,muzzle:t.userData.muzzle.clone(),fore:t.userData.fore&&t.userData.fore.clone()},e}var Ru=[{cloth:9141080,cloth2:6642242,vest:4931634,skin:13081203,head:2828324,head2:3880237,boots:2761760,glove:3813672},{cloth:3425117,cloth2:2436930,vest:1909811,skin:13804156,head:2634308,head2:1119256,boots:1382170,glove:1711136}];function Cu(s){let t=Ru[s],e=new me,n=new me;e.add(n);let i=new me;i.position.y=.92,n.add(i);let r=[];for(let u of[-1,1]){let d=new me;d.position.set(u*.11,0,0),i.add(d),tt(d,.17,.48,.2,t.cloth2,0,-.24,0);let p=new me;p.position.y=-.47,d.add(p),tt(p,.155,.4,.18,t.cloth2,0,-.2,0),tt(p,.17,.11,.28,t.boots,0,-.4,-.045),r.push({thigh:d,shin:p})}let o=new me;o.position.y=.92,n.add(o),tt(o,.4,.26,.24,t.cloth,0,.13,0),tt(o,.47,.36,.29,t.vest,0,.43,0),tt(o,.36,.16,.06,t.cloth,0,.38,-.16),tt(o,.18,.08,.05,t.cloth2,-.08,.2,-.13);let a=new me;a.position.y=.66,o.add(a),tt(a,.12,.08,.12,t.skin,0,.02,0),tt(a,.22,.26,.24,t.head,0,.15,0),tt(a,.16,.05,.02,t.skin,0,.17,-.121),tt(a,.03,.02,.01,1052688,-.04,.17,-.132),tt(a,.03,.02,.01,1052688,.04,.17,-.132),s===Et.CT?(tt(a,.27,.12,.29,t.head2,0,.29,0),tt(a,.25,.04,.06,t.head2,0,.24,-.14)):tt(a,.24,.07,.25,t.head2,0,.29,0);let l=[];for(let u of[-1,1]){let d=new me;d.position.set(u*.27,.54,0),o.add(d),tt(d,.12,.3,.13,t.cloth,0,-.14,0);let p=new me;p.position.y=-.28,d.add(p),tt(p,.1,.28,.11,t.cloth,0,-.13,0),tt(p,.09,.09,.1,t.glove,0,-.3,0),l.push({sh:d,fore:p,side:u})}let c=new me;c.position.set(.07,.42,-.36),o.add(c);let h=new Ii(new ui({map:En("flash"),color:16767392,blending:wn,depthWrite:!1,transparent:!0}));return h.scale.set(.45,.45,1),h.visible=!1,e.add(h),cc(e,!0),e.userData={body:n,hips:i,legs:r,torso:o,headG:a,arms:l,gunMount:c,flash:h,gun:null,gunKey:null,phase:0},e}function Pu(s,t){let e=s.userData;e.gunKey!==t&&(e.gun&&e.gunMount.remove(e.gun),e.gun=t?Ts(t):null,e.gunKey=t,e.gun&&(e.gun.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e.gunMount.add(e.gun)))}var To=new I;function Iu(s,t){let e=s.userData;e.phase+=t.speed*t.dt*2.6;let n=Math.min(1,t.speed/4.5)*(t.air?.3:1),i=t.crouch;for(let l=0;l<2;l++){let c=e.legs[l],h=e.phase+l*Math.PI,u=Math.sin(h)*.6*n;c.thigh.rotation.x=u*(1-i*.5)-i*1.2-(t.air?.35:0),c.shin.rotation.x=Math.max(0,Math.sin(h+1.3))*.8*n+i*1.65+(t.air?.6:0)}let r=.92-i*.31+Math.abs(Math.sin(e.phase))*.025*n;e.hips.position.y=r,e.torso.position.y=r,e.torso.position.z=i*.06;let o=t.pitch;e.torso.rotation.x=o*.55+i*.12,e.headG.rotation.x=o*.45-i*.12;let a=t.fireT>0?t.fireT*1.5:0;for(let l of e.arms)l.side>0?(l.sh.rotation.set(-1.25+a*.2,0,.06),l.fore.rotation.set(-.35,0,0)):(l.sh.rotation.set(-1.15,0,-.55),l.fore.rotation.set(-.5,0,.75));if(e.gunMount.rotation.x=a*.12,t.dead){let l=Math.min(1,t.deathT/.55),c=l*l*(3-2*l);e.body.rotation.x=c*(Math.PI/2-.05)*t.deathDir,e.body.rotation.z=c*.25*t.deathDir,e.body.position.y=c*.12;for(let h of e.legs)h.thigh.rotation.x*=1-c,h.shin.rotation.x=.2*c}else e.body.rotation.set(0,0,0),e.body.position.y=0;e.flash.visible&&e.gun&&(To.copy(e.gun.userData.muzzle),e.gun.localToWorld(To),s.worldToLocal(To),e.flash.position.copy(To))}var Au={knife:[.17,-.19,-.36,1],pistol:[.15,-.165,-.36,1],grenade:[.16,-.18,-.36,1],bomb:[0,-.24,-.42,1.2],sniper:[.19,-.2,-.42,1],default:[.19,-.19,-.4,1]};function Lu(s,t,e){let n=Ru[e],i=new me,r=new me;i.add(r);let o=Ts(s);r.add(o);let a=n.cloth,l=n.glove,c=new me;o.add(c),t==="bomb"?c.position.set(.14,-.02,.05):c.position.set(0,-.045,.035),tt(c,.05,.075,.085,l,0,0,0),tt(c,.075,.075,.34,a,.035,-.035,.2,.18,.12,0);let h=o.userData.fore;if(h||t==="pistol"||t==="bomb"){let g=new me;o.add(g),t==="bomb"?g.position.set(-.14,-.02,.05):h?g.position.copy(h).add(new I(-.012,-.03,0)):g.position.set(-.02,-.05,.04),tt(g,.06,.07,.09,l,0,0,0),tt(g,.075,.075,.36,a,-.07,-.06,.2,.3,-.45,0)}cc(o);let u=Au[t]||Au.default;r.position.set(u[0],u[1],u[2]),r.scale.setScalar(u[3]);let d=new en(t==="bomb"?.5:.02,t==="bomb"?0:.05,0);r.rotation.copy(d);let p=new Ii(new ui({map:En("flash"),color:16769200,blending:wn,depthWrite:!1,depthTest:!1,transparent:!0}));return p.scale.set(.16,.16,1),p.position.copy(o.userData.muzzle),p.visible=!1,p.renderOrder=5,o.add(p),i.userData={holder:r,gun:o,flash:p,base:r.position.clone(),baseRot:d,kind:t,key:s},i}var Eo=class{constructor(t,e,n,i){this.max=e,this.n=0,this.pos=new Float32Array(e*3),this.col=new Float32Array(e*4),this.size=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.maxLife=new Float32Array(e),this.grav=new Float32Array(e),this.grow=new Float32Array(e),this.drag=new Float32Array(e),this.alpha0=new Float32Array(e);let r=new Ce;this.aPos=new xe(this.pos,3).setUsage(vs),this.aCol=new xe(this.col,4).setUsage(vs),this.aSize=new xe(this.size,1).setUsage(vs),r.setAttribute("position",this.aPos),r.setAttribute("color",this.aCol),r.setAttribute("size",this.aSize),r.setDrawRange(0,0),this.uniforms={map:{value:i},scale:{value:400},fogColor:{value:new It},fogNear:{value:30},fogFar:{value:120}},this.mat=new $e({uniforms:this.uniforms,transparent:!0,depthWrite:!1,blending:n,vertexShader:`attribute float size; attribute vec4 color; varying vec4 vColor; varying float vDepth; uniform float scale;
        void main(){ vColor = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vDepth = -mv.z; gl_PointSize = min(size * scale / max(0.1, -mv.z), 2048.0); gl_Position = projectionMatrix * mv; }`,fragmentShader:`uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear; uniform float fogFar; varying vec4 vColor; varying float vDepth;
        void main(){ vec4 t = texture2D(map, gl_PointCoord); vec4 c = t * vColor; float f = smoothstep(fogNear, fogFar, vDepth); c.rgb = mix(c.rgb, fogColor, f * 0.8); if (c.a < 0.01) discard; gl_FragColor = c; }`}),this.points=new po(r,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=3,t.add(this.points)}emit(t,e,n,i,r,o,a,l,c,h,u,d,p=0,g=0,x=0){let m;this.n<this.max?m=this.n++:m=Math.random()*this.max|0,this.pos[m*3]=t,this.pos[m*3+1]=e,this.pos[m*3+2]=n,this.vel[m*3]=i,this.vel[m*3+1]=r,this.vel[m*3+2]=o,this.col[m*4]=c,this.col[m*4+1]=h,this.col[m*4+2]=u,this.col[m*4+3]=d,this.alpha0[m]=d,this.size[m]=l,this.life[m]=a,this.maxLife[m]=a,this.grav[m]=p,this.grow[m]=g,this.drag[m]=x}update(t){let e=this.n;for(let n=0;n<e;n++){if(this.life[n]-=t,this.life[n]<=0){e--,n!==e&&this.copy(e,n),n--;continue}let i=Math.max(0,1-this.drag[n]*t);this.vel[n*3]*=i,this.vel[n*3+2]*=i,this.vel[n*3+1]=this.vel[n*3+1]*i-this.grav[n]*t,this.pos[n*3]+=this.vel[n*3]*t,this.pos[n*3+1]+=this.vel[n*3+1]*t,this.pos[n*3+2]+=this.vel[n*3+2]*t,this.size[n]+=this.grow[n]*t;let r=this.life[n]/this.maxLife[n];this.col[n*4+3]=this.alpha0[n]*Math.min(1,r*2.5)*Math.min(1,(1-r)*12+.2)}this.n=e,this.points.geometry.setDrawRange(0,e),this.aPos.needsUpdate=!0,this.aCol.needsUpdate=!0,this.aSize.needsUpdate=!0}copy(t,e){for(let n=0;n<3;n++)this.pos[e*3+n]=this.pos[t*3+n],this.vel[e*3+n]=this.vel[t*3+n];for(let n=0;n<4;n++)this.col[e*4+n]=this.col[t*4+n];this.size[e]=this.size[t],this.life[e]=this.life[t],this.maxLife[e]=this.maxLife[t],this.grav[e]=this.grav[t],this.grow[e]=this.grow[t],this.drag[e]=this.drag[t],this.alpha0[e]=this.alpha0[t]}clear(){this.n=0,this.points.geometry.setDrawRange(0,0)}},Du=new Zt,hc=new yn,Uu=new I,Nu=new I,Lx=new I(0,0,1),uc=new I,Ao=class{constructor(t,e,n,i){this.max=e,this.i=0;let r=new qn({map:n,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4});this.mesh=new fs(new hi(i,i),r,e),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.renderOrder=1,t.add(this.mesh)}add(t,e,n,i,r,o,a=1){uc.set(i,r,o),hc.setFromUnitVectors(Lx,uc);let l=new yn().setFromAxisAngle(uc,Math.random()*6.28);hc.premultiply(l),Nu.set(t+i*.012,e+r*.012,n+o*.012),Uu.set(a,a,a),Du.compose(Nu,hc,Uu),this.mesh.setMatrixAt(this.i,Du),this.i=(this.i+1)%this.max,this.mesh.count=Math.min(this.max,this.mesh.count+1),this.mesh.instanceMatrix.needsUpdate=!0}clear(){this.mesh.count=0,this.i=0}},Ro=class{constructor(t,e){this.scene=t,this.q=e.particles,this.add=new Eo(t,600,wn,En("spark")),this.norm=new Eo(t,900,oi,En("smoke")),this.holes=new Ao(t,160,En("hole"),.11),this.blood=new Ao(t,50,En("blood"),.55);let n=48;this.trPos=new Float32Array(n*6),this.trCol=new Float32Array(n*6),this.trLife=new Float32Array(n),this.trI=0;let i=new Ce;i.setAttribute("position",new xe(this.trPos,3).setUsage(vs)),i.setAttribute("color",new xe(this.trCol,3).setUsage(vs)),this.tracers=new fo(i,new ir({vertexColors:!0,blending:wn,transparent:!0,depthWrite:!1})),this.tracers.frustumCulled=!1,t.add(this.tracers),this.light=new yo(16763008,0,9,2),t.add(this.light),this.lightT=0,this.smokes=[]}setCamera(t,e,n){let i=e/(2*Math.tan(Mo.degToRad(t.fov)/2));for(let r of[this.add,this.norm])r.uniforms.scale.value=i,n&&(r.uniforms.fogColor.value.copy(n.color),r.uniforms.fogNear.value=n.near,r.uniforms.fogFar.value=n.far)}flashLight(t,e,n,i=3,r=16763008,o=.05){this.light.position.set(t,e,n),this.light.color.setHex(r),this.light.intensity=i,this.light.distance=i>10?30:9,this.lightT=o,this.lightI=i,this.lightDur=o}tracer(t,e,n,i,r,o){let a=this.trI;this.trI=(a+1)%this.trLife.length;let l=i-t,c=r-e,h=o-n,u=Math.hypot(l,c,h)||1,d=Math.min(.6,u*.3)/u;this.trPos.set([t+l*d,e+c*d,n+h*d,i,r,o],a*6),this.trLife[a]=.06}impact(t,e,n,i,r,o,a,l=!0){l&&this.holes.add(t,e,n,i,r,o,.8+Math.random()*.5);let c=Math.ceil(5*this.q),h=a==="crate"?[.5,.36,.2]:a==="metal"?[.5,.5,.5]:[.75,.66,.5];for(let u=0;u<c;u++)this.norm.emit(t+i*.05,e+r*.05,n+o*.05,i*(1+Math.random()*2)+(Math.random()-.5)*1.5,r*(1+Math.random()*2)+Math.random()*1.2,o*(1+Math.random()*2)+(Math.random()-.5)*1.5,.5+Math.random()*.4,.14+Math.random()*.12,h[0],h[1],h[2],.55,2.5,.5,2.5);if(Math.random()<.6)for(let u=0;u<Math.ceil(3*this.q);u++)this.add.emit(t,e,n,i*3+(Math.random()-.5)*5,r*3+Math.random()*3,o*3+(Math.random()-.5)*5,.18+Math.random()*.15,.05,1,.8,.45,1,14,0,.5)}bloodHit(t,e,n,i,r,o,a,l){let c=Math.ceil((a?14:7)*this.q);for(let h=0;h<c;h++)this.norm.emit(t,e,n,i*1.5+(Math.random()-.5)*2,r*1.5+Math.random()*1.5,o*1.5+(Math.random()-.5)*2,.4+Math.random()*.4,.12+Math.random()*.14,.55,.04,.03,.85,6,.3,1.5);if(l){let h=l.raycast(t,e,n,i,r-.3,o,2.5);h?this.blood.add(t+i*h.t,e+(r-.3)*h.t,n+o*h.t,h.nx,h.ny,h.nz,.6+Math.random()*.6):this.blood.add(t,l.topAt(t,n)+.01,n,0,1,0,.5+Math.random()*.5)}}explosion(t,e,n,i=!1){let r=i?2.4:1;this.flashLight(t,e+1,n,i?40:18,16752704,i?.6:.3);for(let o=0;o<26*this.q*r;o++){let a=Math.random()*6.28,l=Math.random()*1.4,c=(3+Math.random()*7)*r;this.add.emit(t,e+.3,n,Math.cos(a)*Math.cos(l)*c,Math.sin(l)*c,Math.sin(a)*Math.cos(l)*c,.3+Math.random()*.35,.9*r,1,.55+Math.random()*.3,.2,1,3,1.5*r,3)}for(let o=0;o<18*this.q*r;o++){let a=Math.random()*6.28,l=(1+Math.random()*3)*r;this.norm.emit(t,e+.5,n,Math.cos(a)*l,1+Math.random()*2.5,Math.sin(a)*l,1.6+Math.random()*1.6*r,1.4*r,.22,.2,.18,.75,-.3,1.2*r,1.2)}}smoke(t,e,n,i=16){let r={x:t,y:e+1.2,z:n,r:0,maxR:4.6,t:0,dur:i};return this.smokes.push(r),r}smokeBlocks(t,e,n,i,r,o){for(let a of this.smokes){if(a.r<1)continue;let l=i-t,c=r-e,h=o-n,u=l*l+c*c+h*h,d=((a.x-t)*l+(a.y-e)*c+(a.z-n)*h)/(u||1);d=Math.max(0,Math.min(1,d));let p=t+l*d-a.x,g=e+c*d-a.y,x=n+h*d-a.z;if(p*p+g*g*.6+x*x<a.r*a.r*.8)return!0}return!1}smokeAt(t,e,n){let i=0;for(let r of this.smokes){if(r.r<.5)continue;let o=Math.hypot(t-r.x,(e-r.y)*.8,n-r.z);i=Math.max(i,1-o/(r.r*.95))}return Math.max(0,Math.min(1,i*1.6))}update(t){this.add.update(t),this.norm.update(t);for(let e=0;e<this.trLife.length;e++)if(this.trLife[e]>0){this.trLife[e]-=t;let n=Math.max(0,this.trLife[e]/.06);this.trCol.set([.9*n,.75*n,.4*n,.4*n,.3*n,.15*n],e*6)}else this.trLife[e]>-1&&(this.trLife[e]=-2,this.trCol.fill(0,e*6,e*6+6));this.tracers.geometry.attributes.position.needsUpdate=!0,this.tracers.geometry.attributes.color.needsUpdate=!0,this.lightT>0?(this.lightT-=t,this.light.intensity=Math.max(0,this.lightI*(this.lightT/this.lightDur))):this.light.intensity=0;for(let e=this.smokes.length-1;e>=0;e--){let n=this.smokes[e];n.t+=t;let i=n.t>n.dur-3?(n.dur-n.t)/3:1;if(n.r=Math.min(n.maxR,n.t*3.2)*Math.max(.3,i),n.t>n.dur){this.smokes.splice(e,1);continue}n.acc=(n.acc||0)+t;let r=.05/this.q;for(;n.acc>r;){n.acc-=r;let o=Math.random()*6.28,a=Math.random()*n.r*.75;this.norm.emit(n.x+Math.cos(o)*a,n.y-.6+Math.random()*1.8,n.z+Math.sin(o)*a,(Math.random()-.5)*.4,.05,(Math.random()-.5)*.4,2.6,3.4+Math.random()*1.2,.72,.74,.76,.62*Math.max(0,i),-.02,.4,.5)}}}clear(){this.add.clear(),this.norm.clear(),this.holes.clear(),this.blood.clear(),this.smokes.length=0,this.trLife.fill(0),this.trCol.fill(0)}};var Dx=1;function mi(s){let t=ce[s];return{key:s,def:t,clip:t.clip||0,reserve:t.reserve||0}}var ar=class{constructor(t,e,n){this.id=Dx++,this.name=t,this.team=e,this.isBot=n,this.model=null,this.brain=null,this.money=0,this.kills=0,this.deaths=0,this.score=0,this.hsKills=0,this.dmgDealt=0,this.roundKills=0,this.mvps=0,this.ggLevel=0,this.resetBody(),this.clearInventory(),this.alive=!1}resetBody(){this.x=0,this.y=0,this.z=0,this.vx=0,this.vy=0,this.vz=0,this.onGround=!0,this.yaw=0,this.pitch=0,this.hp=100,this.crouch=0,this.crouching=!1,this.alive=!0,this.deathT=0,this.deathDir=1,this.punchP=0,this.punchY=0,this.viewPunch=0,this.shotsFired=0,this.nextFire=0,this.reloadT=0,this.switchT=0,this.scope=0,this.flashT=0,this.flashMax=0,this.plantT=0,this.defuseT=0,this.stamina=1,this.stepAcc=0,this.spotted=-100,this.protectT=0,this.fireAnim=0,this.throwT=0,this.speed2d=0,this.stepUp=0,this.lastHurt=-100,this.lastAttacker=null,this.respawnT=0}clearInventory(){this.slots=[null,null,mi("knife"),null,null],this.nades={he:0,flash:0,smoke:0},this.nadeKey=null,this.hasBomb=!1,this.armor=0,this.helmet=!1,this.kit=!1,this.slot=2,this.lastSlot=2}get w(){return this.slot===3?this.nadeKey?{key:this.nadeKey,def:ce[this.nadeKey],clip:1,reserve:0}:this.slots[2]:this.slot===4?this.hasBomb?{key:"bomb",def:ce.bomb,clip:1,reserve:0}:this.slots[2]:this.slots[this.slot]||this.slots[2]}has(t){return t===3?this.nades.he+this.nades.flash+this.nades.smoke>0:t===4?this.hasBomb:!!this.slots[t]}firstNade(){for(let t of["he","flash","smoke"])if(this.nades[t]>0)return t;return null}select(t){if(!this.has(t))return!1;if(t===3)if(this.slot===3){let n=["he","flash","smoke"],i=n.indexOf(this.nadeKey);for(let r=1;r<=3;r++){let o=n[(i+r)%3];if(this.nades[o]>0){this.nadeKey=o;break}}}else(!this.nadeKey||!this.nades[this.nadeKey])&&(this.nadeKey=this.firstNade());else if(t===this.slot)return!1;t!==this.slot&&(this.lastSlot=this.slot),this.slot=t;let e=this.w.def;return this.switchT=e.kind==="knife"?.35:e.kind==="sniper"?.9:e.kind==="rifle"?.75:.55,this.reloadT=0,this.scope=0,this.shotsFired=0,this.throwT=0,this.plantT=0,!0}bestSlot(){return this.slots[0]?0:this.slots[1]?1:2}eyeHeight(){return oe.eye-(oe.eye-oe.crouchEye)*this.crouch}bodyHeight(){return oe.height-(oe.height-oe.crouchHeight)*this.crouch}maxSpeed(){let t=this.w.def.speed||6;return this.scope&&this.w.def.kind==="sniper"&&(t*=.7),t}forward(t){let e=Math.cos(this.pitch);return t.x=-Math.sin(this.yaw)*e,t.y=Math.sin(this.pitch),t.z=-Math.cos(this.yaw)*e,t}hitboxes(){let t=this.bodyHeight()/oe.height,e=this.eyeHeight();return[["head",-.15,e-.15,-.16,.15,e+.17,.15],["chest",-.27,1.12*t,-.17,.27,1.48*t,.17],["stomach",-.23,.86*t,-.15,.23,1.12*t,.15],["legs",-.24,0,-.15,.24,.86*t,.15],["arms",-.12,1.1*t,-.62,.22,1.42*t,-.17]]}isT(){return this.team===Et.T}};var dc=Math.PI*2,lr=s=>(s=(s+Math.PI)%dc,s<0&&(s+=dc),s-Math.PI),cr=class{constructor(t,e,n){this.a=t,this.G=e,this.setDifficulty(n),this.reset()}setDifficulty(t){this.D=jl[t]||jl.normal,this.diff=t}reset(){this.path=null,this.pathI=0,this.goal=null,this.repathT=0,this.target=null,this.visible=!1,this.seenFor=0,this.reactT=0,this.lastSeen=null,this.err={y:0,p:0},this.scanT=Math.random()*.2,this.burst=0,this.burstPause=0,this.strafe=0,this.strafeT=0,this.stuckT=0,this.stuckN=0,this.lastX=this.a.x,this.lastZ=this.a.z,this.task=null,this.spot=null,this.look=null,this.lookT=0,this.heard=null,this.nadeDone=!1,this.throwing=null,this.engageCrouch=!1,this.aimHead=!1,this.sideStep=0,this.idleLookT=0,this.wantYaw=this.a.yaw,this.wantPitch=0,this.scopeHold=0}scan(){let t=this.G,e=this.a;if(e.flashT>.6){this.visible=!1;return}let n=e.x,i=e.y+e.eyeHeight(),r=e.z,o=e.yaw,a=null,l=1/0;for(let c of t.actors){if(!c.alive||!t.isEnemy(e,c))continue;let h=c.x-n,u=c.z-r,d=Math.hypot(h,u);if(d>95)continue;let p=Math.abs(lr(Math.atan2(-h,-u)-o)),g=e.lastAttacker===c&&t.time-e.lastHurt<2,x=c===this.target&&this.visible;if(p>1.15&&d>2.5&&!g&&!x||p>.7&&!x&&!g&&Math.random()>this.D.spot)continue;let m=c.y+c.eyeHeight(),f=c.y+c.bodyHeight()*.6,S=t.grid.los(n,i,r,c.x,m,c.z)||t.grid.los(n,i,r,c.x,f,c.z);if(S&&t.fx.smokeBlocks(n,i,r,c.x,f,c.z)&&(S=!1),!S)continue;let w=d+p*8-(x?6:0)-(g?10:0);w<l&&(l=w,a=c)}if(a){if(a!==this.target||!this.visible){let c=Math.abs(lr(Math.atan2(-(a.x-n),-(a.z-r))-o))>.8;this.reactT=this.D.react*(.7+Math.random()*.6)*(c?1.4:1)+(a===this.target?0:.05);let h=Math.hypot(a.x-n,a.z-r),u=this.D.aimErr*(1+h/30);this.err.y=(Math.random()-.5)*2*u,this.err.p=(Math.random()-.5)*1.2*u,this.aimHead=Math.random()<(this.diff==="expert"?.6:this.diff==="hard"?.4:this.diff==="normal"?.2:.08),this.engageCrouch=h>18&&Math.random()<.35,this.strafe=Math.random()<this.D.strafe?Math.random()<.5?1:-1:0,this.strafeT=.3+Math.random()*.5,!this.visible&&Math.random()<.3&&t.radio(e,"r_enemy")}this.target=a,this.visible=!0,a.spotted=t.time,this.lastSeen={x:a.x,y:a.y,z:a.z,t:t.time},t.callout(e.team,a.x,a.z)}else this.visible=!1,this.target&&!this.target.alive&&(this.target=null);for(let c of t.noises)t.time-c.t>.5||!c.src||!t.isEnemy(e,c.src)||Math.hypot(c.x-e.x,c.z-e.z)<c.r&&(this.heard={x:c.x,y:c.y,z:c.z,t:c.t})}goTo(t,e,n){let i=this.a,r=this.G;if((!this.goal||Math.hypot(this.goal.x-t,this.goal.z-e)>1.2||this.repathT<=0||!this.path)&&(this.goal={x:t,z:e},this.path=r.grid.findPath(i.x,i.z,t,e),this.pathI=0,this.repathT=3+Math.random()*2),!this.path||this.pathI>=this.path.length)return!0;let o=this.path[this.pathI],a=Math.hypot(o.x-i.x,o.z-i.z),l=this.pathI===this.path.length-1;if(a<(l?.45:.8)&&Math.abs(o.y-i.y)<.6){if(this.pathI++,this.pathI>=this.path.length)return!0;o=this.path[this.pathI],a=Math.hypot(o.x-i.x,o.z-i.z)}let c=(o.x-i.x)/(a||1),h=(o.z-i.z)/(a||1);return n.wx=c,n.wz=h,o.y-i.y>.5&&a<2.4&&i.onGround&&(n.jump=!0),this.moveYaw=Math.atan2(-c,-h),!1}remaining(){if(!this.path)return 0;let t=0,e=this.a.x,n=this.a.z;for(let i=this.pathI;i<this.path.length;i++)t+=Math.hypot(this.path[i].x-e,this.path[i].z-n),e=this.path[i].x,n=this.path[i].z;return t}checkStuck(t,e){let n=this.a;if(this.stuckT+=t,this.sideStep>0&&(this.sideStep-=t,e.wx=this.sideX,e.wz=this.sideZ),this.stuckT<.7)return;let i=Math.hypot(n.x-this.lastX,n.z-this.lastZ);if(Math.hypot(e.wx,e.wz)>.3&&i<.35){if(this.stuckN++,e.jump=!0,this.stuckN>=2){this.path=null;let o=Math.random()*dc;this.sideX=Math.cos(o),this.sideZ=Math.sin(o),this.sideStep=.45}}else this.stuckN=0;this.stuckT=0,this.lastX=n.x,this.lastZ=n.z}aimAt(t,e,n,i,r=1,o=!0){let a=this.a,l=a.x,c=a.y+a.eyeHeight(),h=a.z,u=t-l,d=e-c,p=n-h,g=Math.atan2(-u,-p),x=Math.atan2(d,Math.hypot(u,p));return o&&(g+=this.err.y-a.punchY*this.D.recoilComp,x+=this.err.p-a.punchP*this.D.recoilComp),this.turnTo(g,x,i,r),{yaw:g,pitch:x,dist:Math.hypot(u,d,p)}}turnTo(t,e,n,i=1){let r=this.a,o=lr(t-r.yaw),a=this.D.turn*i,l=Math.min(Math.abs(o),(a*.35+Math.abs(o)*a)*n);r.yaw=lr(r.yaw+Math.sign(o)*l);let c=e-r.pitch;r.pitch+=Math.sign(c)*Math.min(Math.abs(c),(a*.3+Math.abs(c)*a)*n),r.pitch=Math.max(-1.45,Math.min(1.45,r.pitch))}think(t){let e=this.G,n=this.a,i={wx:0,wz:0,walk:!1,crouch:!1,jump:!1,fire:!1,alt:!1,use:!1,reload:!1,slot:null};if(!n.alive)return i;if(this.repathT-=t,this.scanT-=t,this.scanT<=0&&(this.scanT=.12+Math.random()*.1,this.scan()),e.phase==="freeze")return n.slot!==n.bestSlot()&&(i.slot=n.bestSlot()),this.idleLook(t),i;if(this.throwing)return this.doThrow(t,i),i;if(this.visible&&this.target&&this.target.alive)this.engage(t,i);else{this.seenFor=0,this.burst=0,this.objective(t,i);let r=n.w;r.def.clip&&r.clip<r.def.clip*.5&&r.reserve>0&&n.reloadT<=0&&(!this.lastSeen||e.time-this.lastSeen.t>1.5)&&(i.reload=!0),i.slot===null&&!n.hasBomb&&n.slot!==n.bestSlot()&&n.slot!==3&&(i.slot=n.bestSlot()),n.slot===4&&!i.use&&(i.slot=n.bestSlot())}return this.checkStuck(t,i),i}engage(t,e){let n=this.G,i=this.a,r=this.target;this.seenFor+=t,this.reactT-=t;let o=Math.exp(-t*(1.6+(this.diff==="expert"?2:this.diff==="hard"?1.2:.4)));this.err.y*=o,this.err.p*=o;let a=this.D.aimErr*.25*t*8;this.err.y+=(Math.random()-.5)*a,this.err.p+=(Math.random()-.5)*a*.6;let l=r.y+(this.aimHead?r.eyeHeight()+.02:r.bodyHeight()*.68),c=.06,h=this.aimAt(r.x+r.vx*c,l,r.z+r.vz*c,t,1),u=h.dist,d=i.w;(i.slot===3||i.slot===4)&&(e.slot=i.bestSlot()),d.def.clip&&d.clip===0&&(i.slot===0&&i.slots[1]&&i.slots[1].clip>0&&u<18?e.slot=1:d.reserve>0?e.reload=!0:i.slots[1]&&i.slot!==1?e.slot=1:e.slot=2),i.slot===2&&(i.slots[0]||i.slots[1])&&u>3&&(e.slot=i.bestSlot()),d=i.w;let p=d.def;if(p.kind==="knife")e.wx=(r.x-i.x)/(u||1),e.wz=(r.z-i.z)/(u||1),Math.random()<.02&&(e.jump=!0);else{let w=Math.cos(i.yaw),v=-Math.sin(i.yaw);this.strafeT-=t,this.strafeT<=0&&(this.strafeT=.35+Math.random()*.55,this.strafe&&(this.strafe=-this.strafe));let P=u>14&&(p.kind==="rifle"||p.kind==="sniper");if(this.strafe&&!P&&p.kind!=="sniper"&&(e.wx=w*this.strafe,e.wz=v*this.strafe),this.engageCrouch&&p.kind!=="sniper"&&(e.crouch=!0),p.kind==="shotgun"&&u>9){let T=1/(u||1);e.wx=(r.x-i.x)*T,e.wz=(r.z-i.z)*T}}let g={yaw:i.yaw,pitch:i.pitch},x=Math.abs(lr(h.yaw-this.err.y-g.yaw)),m=Math.abs(h.pitch-this.err.p-g.pitch),f=Math.atan2(.4,u)+.015,S=x<f*1.6&&m<f*2;if(!(this.reactT>0||!S||i.switchT>0)){if(p.kind==="sniper"){if(i.scope===0&&u>5&&n.time>=i.nextFire&&i.scopeRestore===void 0){e.alt=!0,this.scopeHold=0;return}this.scopeHold+=t,this.scopeHold>.18+(this.diff==="easy"?.4:.1)&&!i.prevFire&&(e.fire=!0);return}if(p.kind==="knife"){u<1.9&&(e.fire=!0),u<1.6&&Math.random()<.3&&(e.alt=!0);return}if(p.auto){if(this.burstPause>0){this.burstPause-=t;return}let w=u<8?30:u<20?this.D.burst:Math.max(2,this.D.burst>>1);if(i.shotsFired>=w){this.burstPause=.18+Math.random()*.3+u*.006;return}e.fire=!0}else!i.prevFire&&n.time>=i.nextFire+(u>20?.12:.02)&&(e.fire=!0)}}idleLook(t){let e=this.a;this.idleLookT-=t,this.idleLookT<=0&&(this.idleLookT=1+Math.random()*2.5,this.look?this.wantYaw=Math.atan2(-(this.look.x-e.x),-(this.look.z-e.z))+(Math.random()-.5)*.7:this.wantYaw=e.yaw+(Math.random()-.5)*1.8,this.wantPitch=(Math.random()-.5)*.12),this.turnTo(this.wantYaw,this.wantPitch,t,.35)}lookAlongPath(t){if(this.moveYaw===void 0)return;let e=this.moveYaw,n=0,i=this.G;if(this.heard&&i.time-this.heard.t<2){let r=this.a;e=Math.atan2(-(this.heard.x-r.x),-(this.heard.z-r.z))}this.turnTo(e,n,t,.45)}objective(t,e){var r;let n=this.G,i=this.a;if(this.lastSeen&&n.time-this.lastSeen.t<3.5&&this.target&&this.target.alive&&!(i.hasBomb&&n.phase==="live")){let o=this.goTo(this.lastSeen.x,this.lastSeen.z,e);this.aimAt(this.lastSeen.x,this.lastSeen.y+1.4,this.lastSeen.z,t,.6,!1),o&&(this.lastSeen=null),i.nades.he>0&&n.time-((r=this.lastSeen)==null?void 0:r.t)>.8&&Math.random()<.01&&this.startThrow("he",this.lastSeen);return}if(n.mode!=="bomb"){this.roam(t,e);return}i.team===Et.T?this.playT(t,e):this.playCT(t,e)}roam(t,e){let n=this.G,i=this.a;this.heard&&n.time-this.heard.t<4&&(!this.task||this.task.kind!=="heard")&&(this.task={kind:"heard",x:this.heard.x,z:this.heard.z});let r=n.calls[i.team];if((!this.task||this.task.done)&&r&&n.time-r.t<5&&Math.random()<.5&&(this.task={kind:"call",x:r.x,z:r.z}),!this.task||this.task.done){let o=n.grid.floorCells(),a=o[Math.random()*o.length|0],l=n.grid.center(a%n.grid.w,a/n.grid.w|0);this.task={kind:"roam",x:l.x,z:l.z}}this.goTo(this.task.x,this.task.z,e)&&(this.task.done=!0),this.lookAlongPath(t)}playT(t,e){let n=this.G,i=this.a,r=n.bomb;if(r.planted){if(!this.task||this.task.kind!=="guard"){let d=n.grid.randomCellIn([Math.floor(r.x/2)-4,Math.floor(r.z/2)-4,Math.floor(r.x/2)+4,Math.floor(r.z/2)+4],Math.random);this.task={kind:"guard",x:d.x,z:d.z}}this.goTo(this.task.x,this.task.z,e)?(this.look=this.look||{x:r.x,z:r.z},this.idleLook(t),e.crouch=Math.random()<.002?!e.crouch:this.task.crouch):this.lookAlongPath(t);return}if(r.dropped&&!i.hasBomb){let d=n.actors.filter(p=>p.alive&&p.team===Et.T);if(d.sort((p,g)=>Math.hypot(p.x-r.x,p.z-r.z)-Math.hypot(g.x-r.x,g.z-r.z)),d[0]===i){this.goTo(r.x,r.z,e),this.lookAlongPath(t);return}}let o=n.tPlan,a=n.def.sites[o];if(i.hasBomb){if(!this.task||this.task.kind!=="plant"||this.task.site!==o){let p=n.grid.randomCellIn(a,Math.random,(g,x)=>n.grid.h(g,x)>.01);this.task={kind:"plant",site:o,x:p.x,z:p.z}}let d=n.grid.inRect(i.x,i.z,a);this.goTo(this.task.x,this.task.z,e)||d&&i.plantT>0?d?(e.use=!0,e.wx=e.wz=0,e.crouch=!0):this.task=null:this.lookAlongPath(t);return}if(!this.task||this.task.kind!=="push"||this.task.site!==o){let d=n.grid.randomCellIn(a,Math.random);this.task={kind:"push",site:o,x:d.x,z:d.z},this.nadeDone=!1}let l=a[0]+a[2]+1,c=a[1]+a[3]+1,h=Math.hypot(i.x-l,i.z-c);if(!this.nadeDone&&h<22&&h>9){this.nadeDone=!0;let d=i.nades.smoke&&Math.random()<.6?"smoke":i.nades.flash?"flash":null;if(d&&Math.random()<.65){this.startThrow(d,{x:l+(Math.random()-.5)*6,y:1,z:c+(Math.random()-.5)*6});return}}let u=n.actors.find(d=>d.alive&&d.hasBomb);if(u&&u!==i&&h<18&&Math.hypot(u.x-l,u.z-c)>h+14){this.idleLook(t);return}this.goTo(this.task.x,this.task.z,e)?(this.look=this.look||{x:n.spawnCenter(Et.CT).x,z:n.spawnCenter(Et.CT).z},this.idleLook(t)):this.lookAlongPath(t),n.time-n.roundStart>8&&this.remaining()>20&&Math.random()<.001&&(e.walk=!1)}playCT(t,e){let n=this.G,i=this.a,r=n.bomb;if(r.planted){let a=Math.hypot(i.x-r.x,i.z-r.z),l=r.defuser;if(a<1.3&&(!l||l===i)){e.use=!0,e.wx=e.wz=0,e.crouch=!0,this.aimAt(r.x,r.y,r.z,t,.8,!1);return}if(l&&l!==i&&a<10){this.look={x:i.x*2-r.x,z:i.z*2-r.z},this.idleLook(t);return}this.goTo(r.x,r.z,e),this.lookAlongPath(t);return}let o=n.calls[i.team];if(this.task&&this.task.kind==="hold"&&this.task.arrived&&o&&n.time-o.t<2&&!this.task.rotated&&Math.hypot(o.x-i.x,o.z-i.z)>12&&Math.random()<.45&&(this.task={kind:"rotate",x:o.x,z:o.z}),!this.task||this.task.kind==="rotate"&&this.task.done){let a=Object.keys(n.def.sites),l=n.actors.filter(u=>u.team===Et.CT).indexOf(i),c=a[l%a.length],h=n.grid.randomCellIn(n.def.sites[c],Math.random);this.task={kind:"hold",site:c,x:h.x,z:h.z,crouch:Math.random()<.3,rotated:!1},this.look=n.siteEntry(c,Math.random)}this.goTo(this.task.x,this.task.z,e)?(this.task.arrived=!0,this.task.kind==="rotate"&&(this.task.done=!0,this.task.rotated=!0),this.task.crouch&&(e.crouch=!0),this.idleLook(t)):this.lookAlongPath(t)}startThrow(t,e){!this.a.nades[t]||!e||(this.throwing={key:t,x:e.x,y:e.y||0,z:e.z,t:0})}doThrow(t,e){let n=this.a,i=this.throwing;if(i.t+=t,n.slot!==3||n.nadeKey!==i.key){n.slot!==3?e.slot=3:n.nades[i.key]>0&&(n.nadeKey=i.key),i.t>2&&(this.throwing=null);return}let r=Math.hypot(i.x-n.x,i.z-n.z),o=Math.max(.1,Math.min(.75,.08+r*.022));this.turnTo(Math.atan2(-(i.x-n.x),-(i.z-n.z)),o,t,1.4),i.t>.6&&n.switchT<=0&&n.throwT<=0&&(e.fire=!n.prevFire),(i.t>1.8||n.slot!==3)&&(this.throwing=null)}buy(){let t=this.G,e=this.a;if(t.mode!=="bomb")return;let n=e.team===Et.T,i=n?"ak47":"m4a1",r=n?"galil":"famas",o=Math.random(),l=t.actors.filter(u=>u.team===e.team).some(u=>u.slots[0]&&u.slots[0].key==="awp"),c=t.round>1&&e.money<2300&&!e.slots[0],h=u=>t.buy(e,u,!0);!e.slots[0]&&!c&&(e.money>=6e3&&o<.22&&!l?h("awp"):e.money>=ce[i].price+1e3?h(i):e.money>=3e3&&o<.6?h(r):e.money>=2500&&o<.4?h(o<.2?"p90":"mp5"):e.money>=2900&&o<.15&&h("scout")),(t.round===1||c)&&(e.money>=650&&o<.45?h("vest"):e.money>=650&&o<.7&&h("deagle")),e.money>=1e3&&(!e.helmet||e.armor<70)?h("vesthelm"):e.money>=650&&e.armor<50&&!c&&h("vest"),!n&&e.money>=400&&Math.random()<.65&&h("kit"),e.money>=500&&Math.random()<.6&&h("he"),e.money>=400&&Math.random()<.55&&h("flash"),e.money>=500&&Math.random()<.45&&h("smoke")}};function Fu(s,t){return Math.pow(s.range||1,t/10)}function zu(s,t,e,n){let i=t,r=s.armor>0&&(e==="chest"||e==="stomach"||e==="head"&&s.helmet||e==="blast");if(r){i=t*n;let o=(t-i)*.5;o>s.armor?(i+=o-s.armor,s.armor=0):s.armor=Math.max(0,Math.round(s.armor-o)),s.armor<=0&&(s.helmet=!1)}return i=Math.max(1,Math.round(i)),s.hp-=i,{hp:i,armorHit:r}}function Bu(s){return Math.min(Gt.lossMax,Gt.lossBase+Gt.lossStep*(Math.max(1,s)-1))}var Ux={knife:null,pistol:{lp:3600,dur:.16,thump:150,vol:.55,crack:.5},deagle:{lp:2600,dur:.3,thump:95,vol:.85,crack:.7},shotgun:{lp:1700,dur:.42,thump:70,vol:1,crack:.5},smg:{lp:4200,dur:.12,thump:160,vol:.45,crack:.45},rifle:{lp:2900,dur:.2,thump:110,vol:.7,crack:.65},m4a1:{lp:2e3,dur:.16,thump:120,vol:.5,crack:.3},sniper:{lp:2100,dur:.55,thump:70,vol:1,crack:1}},fc=class{constructor(){this.ctx=null,this.volume=.8,this.voice=!0,this.lang="ru",this.active=0,this.listener={x:0,y:0,z:0}}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t,this.master=this.ctx.createGain(),this.master.gain.value=this.volume;let e=this.ctx.createDynamicsCompressor();e.threshold.value=-14,e.ratio.value=6,e.attack.value=.002,e.release.value=.2,this.master.connect(e).connect(this.ctx.destination);let n=this.ctx.sampleRate;this.noise=this.ctx.createBuffer(1,n,this.ctx.sampleRate);let i=this.noise.getChannelData(0);for(let a=0;a<n;a++)i[a]=Math.random()*2-1;this.brown=this.ctx.createBuffer(1,n*2,this.ctx.sampleRate);let r=this.brown.getChannelData(0),o=0;for(let a=0;a<r.length;a++)o=(o+.02*(Math.random()*2-1))/1.02,r[a]=o*3.5}setVolume(t){this.volume=t,this.master&&(this.master.gain.value=t)}suspend(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setListener(t,e,n,i){if(this.listener.x=t,this.listener.y=e,this.listener.z=n,!this.ctx)return;let r=this.ctx.listener,o=-Math.sin(i),a=-Math.cos(i);if(r.positionX){let l=this.ctx.currentTime;r.positionX.setValueAtTime(t,l),r.positionY.setValueAtTime(e,l),r.positionZ.setValueAtTime(n,l),r.forwardX.setValueAtTime(o,l),r.forwardY.setValueAtTime(0,l),r.forwardZ.setValueAtTime(a,l),r.upX.setValueAtTime(0,l),r.upY.setValueAtTime(1,l),r.upZ.setValueAtTime(0,l)}else r.setPosition(t,e,n),r.setOrientation(o,0,a,0,1,0)}out(t,e,n=90){let i=this.ctx.createGain();if(i.gain.value=e,t){if(Math.hypot(t.x-this.listener.x,t.y-this.listener.y,t.z-this.listener.z)>n)return null;let o=this.ctx.createPanner();o.panningModel="equalpower",o.distanceModel="inverse",o.refDistance=4,o.rolloffFactor=1.1,o.maxDistance=n,o.positionX?(o.positionX.value=t.x,o.positionY.value=t.y,o.positionZ.value=t.z):o.setPosition(t.x,t.y,t.z),i.connect(o).connect(this.master)}else i.connect(this.master);return i}busy(t=36){return!this.ctx||this.active>t}track(t,e){this.active++,setTimeout(()=>{this.active--;try{t.disconnect()}catch{}},e*1e3+100)}noiseBurst(t,e,n,i,r,o,a,l=1,c){a=Math.max(2e-4,a);let h=this.ctx.createBufferSource();h.buffer=c||this.noise,h.playbackRate.value=l;let u=this.ctx.createBiquadFilter();u.type=i,u.frequency.value=r,u.Q.value=o;let d=this.ctx.createGain();return d.gain.setValueAtTime(1e-4,e),d.gain.exponentialRampToValueAtTime(a,e+.004),d.gain.exponentialRampToValueAtTime(1e-4,e+n),h.connect(u).connect(d).connect(t),h.start(e,Math.random()*.5),h.stop(e+n+.05),u}tone(t,e,n,i,r,o,a="sine"){o=Math.max(2e-4,o);let l=this.ctx.createOscillator();l.type=a,l.frequency.setValueAtTime(n,e),i!==n&&l.frequency.exponentialRampToValueAtTime(Math.max(1,i),e+r);let c=this.ctx.createGain();c.gain.setValueAtTime(1e-4,e),c.gain.exponentialRampToValueAtTime(o,e+.005),c.gain.exponentialRampToValueAtTime(1e-4,e+r),l.connect(c).connect(t),l.start(e),l.stop(e+r+.05)}shot(t,e,n){if(this.busy())return;let i=e==="pistol"?t==="deagle"?"deagle":"pistol":e;t==="m4a1"&&(i="m4a1");let r=Ux[i];if(!r)return;let o=n?Math.hypot(n.x-this.listener.x,n.z-this.listener.z):0,a=Math.min(1,o/60),l=this.out(n,r.vol*(n?1.4:1),140);if(!l)return;let c=this.ctx.currentTime,h=r.lp*(1-a*.6);this.noiseBurst(l,c,r.dur,"lowpass",h,.7,.9,.9+Math.random()*.2),this.noiseBurst(l,c,.04,"highpass",2500,.5,r.crack*(1-a),1),this.tone(l,c,r.thump*1.6,r.thump*.45,.12+r.dur*.3,.7),o>30&&this.noiseBurst(l,c+.05+o/900,r.dur*2.2,"lowpass",600,.4,.25,.6),this.track(l,r.dur*3)}play(t,e=null,n=1){if(!this.ctx||t!=="beep"&&t!=="explode"&&this.busy(44))return;let i=this.out(e,n,t==="explode"?200:t==="step"?32:70);if(!i)return;let r=this.ctx.currentTime,o=.3;switch(t){case"step":this.noiseBurst(i,r,.07,"bandpass",700+Math.random()*500,1.2,.5,.8),this.noiseBurst(i,r,.05,"lowpass",220,1,.5),o=.1;break;case"land":this.noiseBurst(i,r,.12,"lowpass",400,1,.8),o=.15;break;case"jump":this.noiseBurst(i,r,.06,"bandpass",900,1,.25),o=.1;break;case"empty":this.tone(i,r,1800,1500,.03,.3,"square"),o=.05;break;case"reload":{this.noiseBurst(i,r,.05,"bandpass",2400,3,.5),this.tone(i,r+.02,900,600,.05,.2,"square"),this.noiseBurst(i,r+.45,.06,"bandpass",1800,3,.6),this.tone(i,r+.47,700,400,.06,.25,"square"),o=.6;break}case"bolt":this.noiseBurst(i,r+.25,.08,"bandpass",1500,2,.6),this.noiseBurst(i,r+.45,.06,"bandpass",2200,2,.6),o=.6;break;case"shell":this.noiseBurst(i,r,.06,"bandpass",1300,2,.5),this.tone(i,r,500,300,.06,.2,"triangle"),o=.1;break;case"draw":this.noiseBurst(i,r,.08,"highpass",3e3,1,.25),o=.1;break;case"knife":this.noiseBurst(i,r,.18,"bandpass",3200,.8,.45,1.3),o=.2;break;case"knifeHit":this.noiseBurst(i,r,.12,"lowpass",900,1,.8),this.tone(i,r,300,120,.1,.4),o=.15;break;case"knifeWall":this.tone(i,r,2600,2400,.12,.25,"square"),this.noiseBurst(i,r,.06,"highpass",4e3,1,.4),o=.15;break;case"hit":this.noiseBurst(i,r,.08,"lowpass",700,1,.7),this.tone(i,r,220,110,.07,.5),o=.1;break;case"headshot":this.tone(i,r,2300,2e3,.25,.5,"triangle"),this.tone(i,r,4600,4e3,.18,.18,"sine"),this.noiseBurst(i,r,.05,"highpass",3500,1,.5),o=.3;break;case"kevlar":this.noiseBurst(i,r,.06,"bandpass",1600,2,.6),this.tone(i,r,500,300,.05,.3,"square"),o=.1;break;case"impact":this.noiseBurst(i,r,.05,"bandpass",1800+Math.random()*1500,1.5,.25),o=.08;break;case"ricochet":this.tone(i,r,3500+Math.random()*1500,1200,.25,.12,"sine"),o=.3;break;case"bounce":this.tone(i,r,800,500,.05,.35,"triangle"),this.noiseBurst(i,r,.04,"bandpass",1500,2,.3),o=.1;break;case"pin":this.tone(i,r,2800,2500,.05,.25,"square"),this.noiseBurst(i,r+.1,.05,"highpass",4e3,1,.3),o=.2;break;case"throw":this.noiseBurst(i,r,.15,"bandpass",1100,.8,.3),o=.2;break;case"explode":{this.noiseBurst(i,r,1.6,"lowpass",900,.7,1,.7,this.brown),this.noiseBurst(i,r,.35,"lowpass",3e3,.5,.8,1),this.tone(i,r,90,30,1,1),o=1.8;break}case"bombExplode":{this.noiseBurst(i,r,3.2,"lowpass",700,.7,1,.5,this.brown),this.noiseBurst(i,r,.6,"lowpass",2500,.5,1,.8),this.tone(i,r,70,22,2.4,1),o=3.5;break}case"flashbang":this.noiseBurst(i,r,.5,"highpass",1500,.6,1),this.tone(i,r,160,60,.3,.7),o=.6;break;case"ring":this.tone(i,r,3400,3300,2.6*n+.4,.12*n+.02),o=3;break;case"smoke":this.noiseBurst(i,r,1.4,"bandpass",1400,.4,.5,.6),o=1.5;break;case"beep":this.tone(i,r,2350,2350,.09,.35,"sine"),o=.12;break;case"plant":for(let a=0;a<7;a++)this.tone(i,r+a*.32,1300+a%3*180,1300+a%3*180,.06,.25,"square");o=2.4;break;case"planted":this.tone(i,r,1900,1900,.12,.4),this.tone(i,r+.18,1900,1900,.12,.4),o=.4;break;case"defuse":for(let a=0;a<5;a++)this.noiseBurst(i,r+a*.4,.06,"bandpass",2600,4,.35);o=2.2;break;case"defused":this.tone(i,r,900,1800,.3,.35,"triangle"),o=.4;break;case"buy":this.tone(i,r,1400,1400,.06,.25,"square"),this.tone(i,r+.07,2100,2100,.1,.25,"square"),o=.2;break;case"deny":this.tone(i,r,300,200,.18,.3,"square"),o=.2;break;case"pickup":this.noiseBurst(i,r,.07,"bandpass",2e3,2,.5),this.tone(i,r+.05,600,900,.06,.2,"triangle"),o=.15;break;case"click":this.tone(i,r,1200,900,.04,.2,"triangle"),o=.05;break;case"roundStart":this.tone(i,r,660,660,.12,.25,"square"),this.tone(i,r+.14,880,880,.2,.25,"square"),o=.4;break;case"win":[523,659,784,1046].forEach((a,l)=>this.tone(i,r+l*.12,a,a,.3,.22,"triangle")),o=.8;break;case"lose":[440,370,311,262].forEach((a,l)=>this.tone(i,r+l*.16,a,a,.35,.22,"triangle")),o=1;break;case"levelUp":[660,880,1320].forEach((a,l)=>this.tone(i,r+l*.07,a,a,.12,.25,"square")),o=.4;break;case"hurt":this.noiseBurst(i,r,.12,"lowpass",500,1,.9),o=.15;break;default:o=.05}this.track(i,o)}startAmbience(t){if(!this.ctx)return;this.stopAmbience();let e=this.ctx.createBufferSource();e.buffer=this.brown,e.loop=!0;let n=this.ctx.createBiquadFilter();n.type="bandpass",n.frequency.value=t==="industrial"?220:420,n.Q.value=.6;let i=this.ctx.createGain();i.gain.value=t==="night"?.05:.08;let r=this.ctx.createOscillator();r.frequency.value=.07;let o=this.ctx.createGain();o.gain.value=.04,r.connect(o).connect(i.gain),e.connect(n).connect(i).connect(this.master),e.start(),r.start(),this.amb={src:e,lfo:r,g:i}}stopAmbience(){if(this.amb){try{this.amb.src.stop(),this.amb.lfo.stop(),this.amb.g.disconnect()}catch{}this.amb=null}}say(t){if(!(!this.voice||!t||typeof speechSynthesis=="undefined"))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.lang=this.lang==="ru"?"ru-RU":"en-US",e.rate=1.15,e.pitch=.8,e.volume=Math.min(1,this.volume*1.1),speechSynthesis.speak(e)}catch{}}},ot=new fc;var pc={x:0,y:0,z:0};function Co(s,t,e,n,i,r,o,a){let l=s.x-t,c=s.z-n,h=i*i+o*o,u=h>1e-8?(l*i+c*o)/h:0;if(u<-1||u>a+1)return null;let d=t+i*u-s.x,p=n+o*u-s.z;if(h>1e-8&&d*d+p*p>.9*.9)return null;let g=Math.cos(-s.yaw),x=Math.sin(-s.yaw),m=t-s.x,f=n-s.z,S=m*g+f*x,w=-m*x+f*g,v=e-s.y,P=i*g+o*x,T=-i*x+o*g,C=r,R=null;for(let[M,y,A,B,F,W,X]of s.hitboxes()){let V=0,J=a,k=[[S,P,y,F],[v,C,A,W],[w,T,B,X]],it=!0;for(let[st,mt,Ct,Xt]of k){if(Math.abs(mt)<1e-9){if(st<Ct||st>Xt){it=!1;break}continue}let Y=(Ct-st)/mt,Q=(Xt-st)/mt;if(Y>Q){let ft=Y;Y=Q,Q=ft}if(Y>V&&(V=Y),Q<J&&(J=Q),V>J){it=!1;break}}it&&(!R||V<R.t)&&(R={t:V,zone:M})}return R}function mc(s,t){if(!t.spread&&t.kind!=="sniper")return 0;let e=Math.min(1.2,s.speed2d/6.2),n=t.kind==="sniper"?s.scope?t.spread:t.unscoped:t.spread;return n+=t.moveSpread*Math.max(0,e-.3)*1.4,s.onGround||(n+=t.airSpread),s.crouch>.6&&s.onGround&&(n*=.72),n+=Math.min(s.shotsFired,14)*(t.spray||0),n}function Nx(s,t,e,n,i){if(n<=0)return[s,t,e];let r=-e,o=0,a=s,l=Math.hypot(r,a);l<1e-6&&(r=1,a=0,l=1),r/=l,a/=l;let c=t*a-e*o,h=e*r-s*a,u=s*o-t*r,d=n*(i()+i())*.5,p=i()*Math.PI*2,g=Math.cos(p)*d,x=Math.sin(p)*d,m=s+r*g+c*x,f=t+o*g+h*x,S=e+a*g+u*x,w=Math.hypot(m,f,S);return[m/w,f/w,S/w]}function Fx(s,t,e){let n=s.grid.charAt(t,e);return n==="x"||n==="X"?"crate":n==="o"||n==="W"?"metal":"stone"}function zx(s,t,e,n,i,r,o,a,l,c){let h=e.def,u=h.kind==="rifle"||h.kind==="sniper"||e.key==="deagle"?1:0,d=c,p=0,g=!1,x=220,m=n,f=i,S=r,w=new Set;for(let v=0;v<3;v++){let P=x-p,T=s.grid.raycast(m,f,S,o,a,l,P),C=T?T.t:P,R=null;for(let X of s.actors){if(X===t||!X.alive||w.has(X)||!s.ff&&!s.isEnemy(t,X))continue;let V=Co(X,m,f,S,o,a,l,C);V&&(!R||V.t<R.t)&&(R={a:X,t:V.t,zone:V.zone})}if(R){let X=p+R.t,V=R.zone==="arms"?1:mu[R.zone],J=d*V*Fu(h,X),k=m+o*R.t,it=f+a*R.t,st=S+l*R.t;if(s.fx.bloodHit(k,it,st,o,a,l,R.zone==="head",s.grid),Es(s,R.a,t,J,R.zone,h.pen,e.key,{wallbang:g,dir:[o,l]}),w.add(R.a),h.kind==="sniper"&&u>0){d*=.6,m=k+o*.05,f=it+a*.05,S=st+l*.05,p=X;continue}return[k,it,st]}if(!T)return[m+o*P,f+a*P,S+l*P];let M=m+o*T.t,y=f+a*T.t,A=S+l*T.t,B=Fx(s,T.cx,T.cz);s.fx.impact(M,y,A,T.nx,T.ny,T.nz,B),s.rng()<.3&&ot.play(s.rng()<.2?"ricochet":"impact",{x:M,y,z:A},.6),s.noise(M,y,A,6,t);let F=s.grid.charAt(T.cx,T.cz),W=xu[F];if(u>0&&W&&T.ny===0){let X=s.grid.exitDistance(m,f,S,o,a,l,T.t,T.cx,T.cz);if(X<2.3){u--,d*=W*(h.pen+.2),g=!0,p+=T.t+X+.02,m=M+o*(X+.02),f=y+a*(X+.02),S=A+l*(X+.02),s.fx.impact(m-o*.03,f-a*.03,S-l*.03,o,a,l,B,!1);continue}}return[M,y,A]}return[m,f,S]}function Es(s,t,e,n,i,r,o,a={}){if(!t.alive||s.over||t.protectT>0)return;if(e&&e!==t&&!s.isEnemy(e,t)){if(!s.ff)return;n*=.35}let l=i==="arms"?"chest":i==="legs"?"legs":i,c=t.helmet,h=zu(t,n,l,r);t.lastHurt=s.time,t.lastAttacker=e,t.punchP+=Math.min(.09,h.hp*.0025),e&&e!==t&&(e.dmgDealt+=Math.min(h.hp,h.hp+Math.min(0,t.hp))),s.onDamage(t,e,h.hp,i,a.dir,h.armorHit&&i==="head"&&c),t.hp<=0&&s.kill(t,e,o,{hs:i==="head",wallbang:!!a.wallbang})}function ku(s,t,e){let n=ce.knife,i=t.forward(pc),r=t.x,o=t.y+t.eyeHeight(),a=t.z,l=null;for(let h of s.actors){if(h===t||!h.alive||!s.isEnemy(t,h))continue;let u=Co(h,r,o,a,i.x,i.y,i.z,n.reach);u&&(!l||u.t<l.t)&&(l={v:h,...u})}if(!l)for(let h of s.actors){if(h===t||!h.alive||!s.isEnemy(t,h))continue;let u=h.x-t.x,d=h.z-t.z,p=Math.hypot(u,d);if(p>n.reach+.3||Math.abs(h.y-t.y)>1.2)continue;if((u*i.x+d*i.z)/(p*Math.hypot(i.x,i.z)||1)>.8){l={v:h,t:p,zone:"chest"};break}}if(ot.play("knife",t.isBot?{x:t.x,y:t.y+1.5,z:t.z}:null,.7),t.fireAnim=e?.6:.4,l){let h=-Math.sin(l.v.yaw),u=-Math.cos(l.v.yaw),d=(l.v.x-t.x)*h+(l.v.z-t.z)*u>0,p=e?n.dmg2:n.dmg;d&&(p*=e?3:1.5),l.zone==="head"&&(p*=1.2),ot.play("knifeHit",{x:l.v.x,y:l.v.y+1.3,z:l.v.z},.9),s.fx.bloodHit(l.v.x,l.v.y+1.2,l.v.z,i.x,0,i.z,!1,s.grid),Es(s,l.v,t,p,l.zone==="head"?"head":"chest",.85,"knife",{dir:[i.x,i.z]});return}let c=s.grid.raycast(r,o,a,i.x,i.y,i.z,n.reach);c&&(ot.play("knifeWall",{x:r+i.x*c.t,y:o+i.y*c.t,z:a+i.z*c.t},.6),s.fx.impact(r+i.x*c.t,o+i.y*c.t,a+i.z*c.t,c.nx,c.ny,c.nz,"stone"))}function Bx(s,t,e){let n=e.def;e.clip--,t.shotsFired++,t.fireAnim=1,t.lastShot=s.time;let i=t.y+t.eyeHeight(),r=mc(t,n),o=t.yaw+t.punchY,a=t.pitch+t.punchP,l=Math.cos(a),c=-Math.sin(o)*l,h=Math.sin(a),u=-Math.cos(o)*l,d=n.pellets||1,p=s.muzzleOf(t);for(let f=0;f<d;f++){let[S,w,v]=Nx(c,h,u,r,s.rng),P=zx(s,t,e,t.x,i,t.z,S,w,v,n.dmg);(f===0||f%3===0)&&(!t.isBot||s.rng()<.5)&&s.fx.tracer(p.x,p.y,p.z,P[0],P[1],P[2])}t===s.player&&s.stat("shots",1);let g=t.shotsFired,x=n.recoil*(g<3?.9:g<10?1.15:.5)*(t.crouch>.6?.8:1);t.punchP=Math.min(.24,t.punchP+x),g===1&&(t.sprayPhase=s.rng()*6.28);let m=g<4?0:Math.sin(g*.5+t.sprayPhase)*n.recoilX*2.2;t.punchY=Math.max(-.13,Math.min(.13,t.punchY+m+(s.rng()-.5)*n.recoilX)),t.viewPunch=Math.min(1,t.viewPunch+x*8),ot.shot(e.key,n.kind,t===s.listenerActor?null:{x:t.x,y:i,z:t.z}),s.noise(t.x,i,t.z,n.kind==="pistol"?35:55,t),s.onShot(t,p),t.protectT>0&&(t.protectT=0),n.kind==="sniper"&&(t.scopeRestore=t.scope,t.scope=0)}function kx(s,t){let e=t.nadeKey;if(!e||t.nades[e]<=0)return;t.nades[e]--;let n=t.forward(pc),i=Math.min(1.3,t.pitch+.12),r=Math.cos(i),o=16+(t.speed2d>1?2:0),a=t.x+n.x*.4,l=t.y+t.eyeHeight()-.1,c=t.z+n.z*.4,h=a,u=c;s.grid.topAt(h,u)>l&&(h=t.x,u=t.z),s.grenades.push({type:e,owner:t,x:h,y:l,z:u,vx:-Math.sin(t.yaw)*r*o+t.vx*.5,vy:Math.sin(i)*o+1.5,vz:-Math.cos(t.yaw)*r*o+t.vz*.5,t:0,fuse:e==="smoke"?2.2:1.6,still:0,model:s.makeNadeModel(e)}),ot.play("throw",t.isBot?{x:t.x,y:t.y+1.5,z:t.z}:null,.8),(t!==s.player||s.autopilot)&&s.radio(t,e==="flash"?"r_flash":e==="smoke"?"r_smoke":"r_he"),t.fireAnim=.6;let d=t.firstNade();d?(t.nadeKey=d,t.switchT=.5):(t.nadeKey=null,t.slot=t.lastSlot!==3&&t.has(t.lastSlot)?t.lastSlot:t.bestSlot(),t.switchT=.5)}function Hu(s,t,e,n){t.switchT>0&&(t.switchT-=n),t.fireAnim>0&&(t.fireAnim=Math.max(0,t.fireAnim-n*4)),t.viewPunch=Math.max(0,t.viewPunch-n*6);let i=Math.min(1,n*(s.time-(t.lastShot||0)>.12?7:2.5));t.punchP-=t.punchP*i,t.punchY-=t.punchY*i;let r=t.w,o=r.def;s.time-(t.lastShot||0)>(o.rate||.1)+.12&&(t.shotsFired=Math.max(0,t.shotsFired-n*14)),t.scopeRestore!==void 0&&s.time>=t.nextFire&&o.kind==="sniper"&&(t.scope=t.scopeRestore,t.scopeRestore=void 0);let a=e.fire&&!t.prevFire;if(t.prevFire=e.fire,t.reloadT>0&&(t.reloadT-=n,t.reloadT<=0))if(o.shellReload)r.reserve>0&&r.clip<o.clip&&(r.clip++,r.reserve--,ot.play("shell",t.isBot?{x:t.x,y:t.y+1.4,z:t.z}:null,.6)),r.reserve>0&&r.clip<o.clip&&(t.reloadT=o.reload);else{let c=o.clip-r.clip,h=Math.min(c,r.reserve);r.clip+=h,r.reserve-=h}let l=o.clip&&r.clip<o.clip&&r.reserve>0&&t.reloadT<=0&&t.switchT<=0;if(e.reload&&l&&Ou(t,o),e.alt&&(o.kind==="sniper"&&t.switchT<=0&&t.reloadT<=0?(t.scope=(t.scope+1)%3,ot.play("click",null,.4)):o.kind==="knife"&&s.time>=t.nextFire&&t.switchT<=0&&(ku(s,t,!0),t.nextFire=s.time+o.rate2)),!(t.switchT>0)){switch(o.kind){case"knife":e.fire&&s.time>=t.nextFire&&(ku(s,t,!1),t.nextFire=s.time+o.rate);return;case"grenade":a&&t.throwT<=0&&(t.throwT=.38,ot.play("pin",t.isBot?{x:t.x,y:t.y+1.4,z:t.z}:null,.6)),t.throwT>0&&(t.throwT-=n,t.throwT<=0&&kx(s,t));return;case"bomb":return;default:break}if(!(!e.fire||s.time<t.nextFire)&&!(!o.auto&&!a)&&!(t.reloadT>0&&!(o.shellReload&&r.clip>0))){if(r.clip<=0){(a||o.auto)&&(s.time>=(t.emptyT||0)&&(ot.play("empty",t.isBot?{x:t.x,y:t.y+1.4,z:t.z}:null,.6),t.emptyT=s.time+.3),r.reserve>0&&t.reloadT<=0&&Ou(t,o));return}t.reloadT=0,Bx(s,t,r),t.nextFire=s.time+o.rate,(o.kind==="sniper"||r.key==="m3")&&ot.play(o.kind==="sniper"?"bolt":"shell",t.isBot?{x:t.x,y:t.y+1.4,z:t.z}:null,.5)}}}function Ou(s,t){s.reloadT=t.reload,s.scope=0,s.scopeRestore=void 0,s.reloadStart=(t.shellReload,t.reload),ot.play("reload",s.isBot?{x:s.x,y:s.y+1.4,z:s.z}:null,s.isBot?.5:.7)}function Vu(s,t){let e=s.grid;for(let n=s.grenades.length-1;n>=0;n--){let i=s.grenades[n];i.t+=t;let r=4,o=t/r;for(let c=0;c<r;c++){i.vy-=20*o;let h=i.x+i.vx*o,u=i.y+i.vy*o,d=i.z+i.vz*o,p=!1;e.topAt(h,i.z)>i.y?(i.vx=-i.vx*.45,p=!0):i.x=h,e.topAt(i.x,d)>i.y?(i.vz=-i.vz*.45,p=!0):i.z=d;let g=e.topAt(i.x,i.z)+.05;u<g?(i.y=g,Math.abs(i.vy)>2&&(p=!0),i.vy=-i.vy*.35,i.vx*=.65,i.vz*=.65,Math.abs(i.vy)<.8&&(i.vy=0)):i.y=u,p&&i.t-(i.lastBounce||0)>.08&&(i.lastBounce=i.t,ot.play("bounce",{x:i.x,y:i.y,z:i.z},.6))}let a=Math.hypot(i.vx,i.vy,i.vz);a<.5&&(i.still+=t),i.model&&(i.model.position.set(i.x,i.y,i.z),i.model.rotation.x+=a*t*2,i.model.rotation.z+=a*t),(i.type==="smoke"?i.t>i.fuse&&i.still>.15||i.t>5:i.t>i.fuse)&&(s.grenades.splice(n,1),i.model&&s.scene.remove(i.model),Ox(s,i))}}function Ox(s,t){let e={x:t.x,y:t.y,z:t.z};if(t.type==="he"){ot.play("explode",e,1.2),s.fx.explosion(t.x,t.y,t.z,!1),s.noise(t.x,t.y,t.z,60,t.owner),s.shake(t.x,t.z,14,.6);for(let n of s.actors){if(!n.alive)continue;let i=Math.hypot(n.x-t.x,n.y+1-t.y,n.z-t.z);if(i>10||!s.grid.los(t.x,t.y+.3,t.z,n.x,n.y+1.2,n.z)&&!s.grid.los(t.x,t.y+.3,t.z,n.x,n.y+.4,n.z))continue;let r=100*Math.pow(1-i/10,1.3);r<1||Es(s,n,t.owner,r,"blast",.5,"he",{dir:[n.x-t.x,n.z-t.z]})}}else if(t.type==="flash"){ot.play("flashbang",e,1.1),s.fx.flashLight(t.x,t.y+.5,t.z,60,16777215,.25);for(let n=0;n<10;n++)s.fx.add.emit(t.x,t.y+.2,t.z,(s.rng()-.5)*8,s.rng()*6,(s.rng()-.5)*8,.4,.25,1,1,1,1,10);for(let n of s.actors){if(!n.alive)continue;let i=n.x,r=n.y+n.eyeHeight(),o=n.z,a=Math.hypot(i-t.x,r-t.y,o-t.z);if(a>30||!s.grid.los(t.x,t.y+.2,t.z,i,r,o)||s.fx.smokeBlocks(t.x,t.y+.2,t.z,i,r,o))continue;let l=n.forward(pc),c=((t.x-i)*l.x+(t.y-r)*l.y+(t.z-o)*l.z)/(a||1),h=c>.6?1:c>0?.6:.22,u=Math.max(0,4.8*h*(1-a/32));u<.25||(u>n.flashT&&(n.flashT=u,n.flashMax=u),n===s.player&&s.onFlashed(u))}}else t.type==="smoke"&&(ot.play("smoke",e,1),s.fx.smoke(t.x,t.y,t.z,18))}var Po={ru:{play:"\u0418\u0433\u0440\u0430\u0442\u044C",settings:"\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",stats:"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043A\u0430",help:"\u041A\u0430\u043A \u0438\u0433\u0440\u0430\u0442\u044C",back:"\u041D\u0430\u0437\u0430\u0434",start:"\u0412 \u0431\u043E\u0439",resume:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C",leave:"\u0412\u044B\u0439\u0442\u0438 \u0432 \u043C\u0435\u043D\u044E",rematch:"\u0415\u0449\u0451 \u043C\u0430\u0442\u0447",menu:"\u041C\u0435\u043D\u044E",map:"\u041A\u0430\u0440\u0442\u0430",mode:"\u0420\u0435\u0436\u0438\u043C",team:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",bots:"\u0411\u043E\u0442\u043E\u0432 \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0435",difficulty:"\u0421\u043B\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u0431\u043E\u0442\u043E\u0432",rounds:"\u0420\u0430\u0443\u043D\u0434\u043E\u0432 \u0434\u043E \u043F\u043E\u0431\u0435\u0434\u044B",ff:"\u041E\u0433\u043E\u043D\u044C \u043F\u043E \u0441\u0432\u043E\u0438\u043C",mode_bomb:"\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u043E\u043C\u0431\u044B",mode_dm:"\u0414\u0435\u0437\u043C\u0430\u0442\u0447",mode_gg:"\u0413\u043E\u043D\u043A\u0430 \u0432\u043E\u043E\u0440\u0443\u0436\u0435\u043D\u0438\u0439",mode_bomb_d:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u0437\u0430\u043A\u043B\u0430\u0434\u044B\u0432\u0430\u044E\u0442 C4, \u0441\u043F\u0435\u0446\u043D\u0430\u0437 \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0442\u043E\u0447\u043A\u0438 A \u0438 B",mode_dm_d:"\u041C\u0433\u043D\u043E\u0432\u0435\u043D\u043D\u043E\u0435 \u0432\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435, \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0439 \u0432\u044B\u0431\u043E\u0440 \u043E\u0440\u0443\u0436\u0438\u044F",mode_gg_d:"\u041A\u0430\u0436\u0434\u043E\u0435 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E \u0434\u0430\u0451\u0442 \u043D\u043E\u0432\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435. \u041F\u043E\u0431\u0435\u0434\u0430 \u0437\u0430 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E \u043D\u043E\u0436\u043E\u043C",team_auto:"\u0410\u0432\u0442\u043E",team_t:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B",team_ct:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437",t:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B",ct:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437",t_short:"\u0422",ct_short:"\u0421\u041D",easy:"\u041B\u0451\u0433\u043A\u0438\u0435",normal:"\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u044B\u0435",hard:"\u0421\u043B\u043E\u0436\u043D\u044B\u0435",expert:"\u042D\u043A\u0441\u043F\u0435\u0440\u0442\u044B",on:"\u0412\u043A\u043B",off:"\u0412\u044B\u043A\u043B",lang:"\u042F\u0437\u044B\u043A",volume:"\u0413\u0440\u043E\u043C\u043A\u043E\u0441\u0442\u044C",voice:"\u0413\u043E\u043B\u043E\u0441 \u0440\u0430\u0434\u0438\u043E",sens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C (\u044D\u043A\u0440\u0430\u043D)",mouseSens:"\u0427\u0443\u0432\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C (\u043C\u044B\u0448\u044C)",fov:"\u041F\u043E\u043B\u0435 \u0437\u0440\u0435\u043D\u0438\u044F",quality:"\u0413\u0440\u0430\u0444\u0438\u043A\u0430",q_auto:"\u0410\u0432\u0442\u043E",q_low:"\u041D\u0438\u0437\u043A\u0430\u044F",q_medium:"\u0421\u0440\u0435\u0434\u043D\u044F\u044F",q_high:"\u0412\u044B\u0441\u043E\u043A\u0430\u044F",showFps:"\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C FPS",aimAssist:"\u041F\u043E\u043C\u043E\u0449\u044C \u0432 \u043F\u0440\u0438\u0446\u0435\u043B\u0438\u0432\u0430\u043D\u0438\u0438",autoFire:"\u0410\u0432\u0442\u043E\u043E\u0433\u043E\u043D\u044C \u043F\u043E \u0446\u0435\u043B\u0438",invertY:"\u0418\u043D\u0432\u0435\u0440\u0441\u0438\u044F \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438",btnScale:"\u0420\u0430\u0437\u043C\u0435\u0440 \u043A\u043D\u043E\u043F\u043E\u043A",btnAlpha:"\u041F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C \u043A\u043D\u043E\u043F\u043E\u043A",crosshair:"\u0426\u0432\u0435\u0442 \u043F\u0440\u0438\u0446\u0435\u043B\u0430",vibrate:"\u0412\u0438\u0431\u0440\u0430\u0446\u0438\u044F",leftFire:"\u041B\u0435\u0432\u0430\u044F \u043A\u043D\u043E\u043F\u043A\u0430 \u043E\u0433\u043D\u044F",buy:"\u0417\u0430\u043A\u0443\u043F\u043A\u0430",buy_pistols:"\u041F\u0438\u0441\u0442\u043E\u043B\u0435\u0442\u044B",buy_heavy:"\u0414\u0440\u043E\u0431\u043E\u0432\u0438\u043A \u0438 \u041F\u041F",buy_rifles:"\u0412\u0438\u043D\u0442\u043E\u0432\u043A\u0438",buy_gear:"\u0421\u043D\u0430\u0440\u044F\u0436\u0435\u043D\u0438\u0435",buy_nades:"\u0413\u0440\u0430\u043D\u0430\u0442\u044B",vest:"\u0411\u0440\u043E\u043D\u0435\u0436\u0438\u043B\u0435\u0442",vesthelm:"\u0411\u0440\u043E\u043D\u0435\u0436\u0438\u043B\u0435\u0442 + \u0448\u043B\u0435\u043C",kit:"\u041D\u0430\u0431\u043E\u0440 \u0441\u0430\u043F\u0451\u0440\u0430",rebuy:"\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C",autobuy:"\u0410\u0432\u0442\u043E\u0437\u0430\u043A\u0443\u043F\u043A\u0430",close:"\u0417\u0430\u043A\u0440\u044B\u0442\u044C",buy_closed:"\u0412\u0440\u0435\u043C\u044F \u0437\u0430\u043A\u0443\u043F\u043A\u0438 \u0438\u0441\u0442\u0435\u043A\u043B\u043E",buy_zone:"\u0417\u0430\u043A\u0443\u043F\u043A\u0430 \u0442\u043E\u043B\u044C\u043A\u043E \u0432 \u0437\u043E\u043D\u0435 \u0432\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F",no_money:"\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0434\u0435\u043D\u0435\u0433",team_only:"\u041D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E \u0432\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u0430\u043D\u0434\u0435",have_it:"\u0423\u0436\u0435 \u0435\u0441\u0442\u044C",money:"\u0414\u0435\u043D\u044C\u0433\u0438",hp:"\u0417\u0434\u043E\u0440\u043E\u0432\u044C\u0435",armor:"\u0411\u0440\u043E\u043D\u044F",kills:"\u0423\u0431\u0438\u0439\u0441\u0442\u0432\u0430",deaths:"\u0421\u043C\u0435\u0440\u0442\u0438",score:"\u0421\u0447\u0451\u0442",name:"\u0418\u0433\u0440\u043E\u043A",alive:"\u0432 \u0436\u0438\u0432\u044B\u0445",dead:"\u0443\u0431\u0438\u0442",you:"\u0412\u044B",round:"\u0420\u0430\u0443\u043D\u0434",freeze:"\u0417\u0430\u043A\u0443\u043F\u043A\u0430",bomb_planted:"\u0411\u043E\u043C\u0431\u0430 \u0437\u0430\u043B\u043E\u0436\u0435\u043D\u0430!",bomb_defused:"\u0411\u043E\u043C\u0431\u0430 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0435\u043D\u0430",bomb_exploded:"\u0426\u0435\u043B\u044C \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0435\u043D\u0430",t_win:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438",ct_win:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437 \u043F\u043E\u0431\u0435\u0434\u0438\u043B",draw:"\u041D\u0438\u0447\u044C\u044F",plant_hint:"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \xAB\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\xBB, \u0447\u0442\u043E\u0431\u044B \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0431\u043E\u043C\u0431\u0443",defuse_hint:"\u0423\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \xAB\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435\xBB, \u0447\u0442\u043E\u0431\u044B \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C",have_bomb:"\u0423 \u0432\u0430\u0441 \u0431\u043E\u043C\u0431\u0430 \u2014 \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u0435 \u0435\u0451 \u043D\u0430 \u0442\u043E\u0447\u043A\u0435 A \u0438\u043B\u0438 B",bomb_dropped:"\u0411\u043E\u043C\u0431\u0430 \u0432\u044B\u043F\u0430\u043B\u0430!",bomb_picked:"\u0412\u044B \u043F\u043E\u0434\u043E\u0431\u0440\u0430\u043B\u0438 \u0431\u043E\u043C\u0431\u0443",planting:"\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430\u2026",defusing:"\u041E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0438\u0432\u0430\u043D\u0438\u0435\u2026",site:"\u0422\u043E\u0447\u043A\u0430",must_site:"\u0411\u043E\u043C\u0431\u0443 \u043C\u043E\u0436\u043D\u043E \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043D\u0430 \u0442\u043E\u0447\u043A\u0435",spectating:"\u041D\u0430\u0431\u043B\u044E\u0434\u0435\u043D\u0438\u0435",you_died:"\u0412\u044B \u0443\u0431\u0438\u0442\u044B",killed_by:"\u0412\u0430\u0441 \u0443\u0431\u0438\u043B",respawn_in:"\u0412\u043E\u0437\u0440\u043E\u0436\u0434\u0435\u043D\u0438\u0435 \u0447\u0435\u0440\u0435\u0437",match_over:"\u041C\u0430\u0442\u0447 \u043E\u043A\u043E\u043D\u0447\u0435\u043D",victory:"\u041F\u043E\u0431\u0435\u0434\u0430!",defeat:"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0435",mvp:"\u041B\u0443\u0447\u0448\u0438\u0439 \u0438\u0433\u0440\u043E\u043A",your_stats:"\u0412\u0430\u0448 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442",accuracy:"\u0422\u043E\u0447\u043D\u043E\u0441\u0442\u044C",headshots:"\u0412 \u0433\u043E\u043B\u043E\u0432\u0443",wins:"\u041F\u043E\u0431\u0435\u0434",losses:"\u041F\u043E\u0440\u0430\u0436\u0435\u043D\u0438\u0439",matches:"\u041C\u0430\u0442\u0447\u0435\u0439",plants:"\u0417\u0430\u043A\u043B\u0430\u0434\u043E\u043A",defuses:"\u0420\u0430\u0437\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0439",playtime:"\u0412\u0440\u0435\u043C\u044F \u0432 \u0438\u0433\u0440\u0435",kd:"\u0423/\u0421",reset_stats:"\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",pick_weapon:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043E\u0440\u0443\u0436\u0438\u0435",level:"\u0423\u0440\u043E\u0432\u0435\u043D\u044C",leader:"\u041B\u0438\u0434\u0435\u0440",time_left:"\u041E\u0441\u0442\u0430\u043B\u043E\u0441\u044C",frag_limit:"\u041B\u0438\u043C\u0438\u0442 \u0443\u0431\u0438\u0439\u0441\u0442\u0432",reload:"\u041F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430",jump:"\u041F\u0440\u044B\u0436\u043E\u043A",crouch:"\u041F\u0440\u0438\u0441\u0435\u0441\u0442\u044C",use:"\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435",scope:"\u041F\u0440\u0438\u0446\u0435\u043B",drop:"\u0411\u0440\u043E\u0441\u0438\u0442\u044C",go:"\u0412\u043F\u0435\u0440\u0451\u0434, \u0432\u043F\u0435\u0440\u0451\u0434, \u0432\u043F\u0435\u0440\u0451\u0434!",r_planted:"\u0411\u043E\u043C\u0431\u0430 \u0437\u0430\u043B\u043E\u0436\u0435\u043D\u0430",r_twin:"\u0422\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u043F\u043E\u0431\u0435\u0434\u0438\u043B\u0438",r_ctwin:"\u0421\u043F\u0435\u0446\u043D\u0430\u0437 \u043F\u043E\u0431\u0435\u0434\u0438\u043B",r_defused:"\u0411\u043E\u043C\u0431\u0430 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0436\u0435\u043D\u0430",r_cover:"\u041F\u0440\u0438\u043A\u0440\u043E\u0439\u0442\u0435 \u043C\u0435\u043D\u044F",r_enemy:"\u041F\u0440\u043E\u0442\u0438\u0432\u043D\u0438\u043A \u0437\u0430\u043C\u0435\u0447\u0435\u043D",r_flash:"\u0411\u0440\u043E\u0441\u0430\u044E \u0441\u0432\u0435\u0442\u043E\u0432\u0443\u044E!",r_smoke:"\u0421\u0442\u0430\u0432\u043B\u044E \u0434\u044B\u043C!",r_he:"\u0413\u0440\u0430\u043D\u0430\u0442\u0430!",tutorial_title:"\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435",help_text:"<b>\u0422\u0435\u043B\u0435\u0444\u043E\u043D:</b> \u043B\u0435\u0432\u0430\u044F \u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0430 \u044D\u043A\u0440\u0430\u043D\u0430 \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435 (\u0434\u0436\u043E\u0439\u0441\u0442\u0438\u043A), \u043F\u0440\u0430\u0432\u0430\u044F \u2014 \u043E\u0431\u0437\u043E\u0440. \u041A\u043D\u043E\u043F\u043A\u0443 \u043E\u0433\u043D\u044F \u043C\u043E\u0436\u043D\u043E \u0432\u0435\u0441\u0442\u0438 \u043F\u0430\u043B\u044C\u0446\u0435\u043C, \u0447\u0442\u043E\u0431\u044B \u0446\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0432\u043E \u0432\u0440\u0435\u043C\u044F \u0441\u0442\u0440\u0435\u043B\u044C\u0431\u044B. \u041A\u043D\u043E\u043F\u043A\u0438 \u0441\u043F\u0440\u0430\u0432\u0430: \u043F\u0440\u044B\u0436\u043E\u043A, \u043F\u0440\u0438\u0441\u0435\u0441\u0442\u044C, \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u043F\u0440\u0438\u0446\u0435\u043B. \u0421\u043D\u0438\u0437\u0443 \u2014 \u0432\u044B\u0431\u043E\u0440 \u043E\u0440\u0443\u0436\u0438\u044F, \u0441\u043B\u0435\u0432\u0430 \u0441\u0432\u0435\u0440\u0445\u0443 \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430 ($) \u0438 \u0441\u0447\u0451\u0442.<br><br><b>\u041F\u041A:</b> WASD \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u043C\u044B\u0448\u044C \u2014 \u043E\u0431\u0437\u043E\u0440, \u041B\u041A\u041C \u2014 \u043E\u0433\u043E\u043D\u044C, \u041F\u041A\u041C \u2014 \u043F\u0440\u0438\u0446\u0435\u043B/\u0443\u0434\u0430\u0440 \u043D\u043E\u0436\u043E\u043C, R \u2014 \u043F\u0435\u0440\u0435\u0437\u0430\u0440\u044F\u0434\u043A\u0430, \u041F\u0440\u043E\u0431\u0435\u043B \u2014 \u043F\u0440\u044B\u0436\u043E\u043A, Ctrl \u2014 \u043F\u0440\u0438\u0441\u0435\u0441\u0442\u044C, Shift \u2014 \u0442\u0438\u0445\u0438\u0439 \u0448\u0430\u0433, E \u2014 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 (\u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C/\u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C/\u043F\u043E\u0434\u043E\u0431\u0440\u0430\u0442\u044C), 1\u20135 \u2014 \u043E\u0440\u0443\u0436\u0438\u0435, Q \u2014 \u043F\u0440\u043E\u0448\u043B\u043E\u0435 \u043E\u0440\u0443\u0436\u0438\u0435, G \u2014 \u0431\u0440\u043E\u0441\u0438\u0442\u044C, B \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430, Tab \u2014 \u0441\u0447\u0451\u0442, Esc \u2014 \u043F\u0430\u0443\u0437\u0430.<br><br><b>\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u043E\u043C\u0431\u044B:</b> \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430\u043B\u043E\u0436\u0438\u0442\u044C C4 \u043D\u0430 \u0442\u043E\u0447\u043A\u0435 A \u0438\u043B\u0438 B \u0438 \u043D\u0435 \u0434\u0430\u0442\u044C \u0435\u0451 \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442\u044C. \u0421\u043F\u0435\u0446\u043D\u0430\u0437 \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0435\u0442, \u0435\u0441\u043B\u0438 \u0443\u043D\u0438\u0447\u0442\u043E\u0436\u0438\u0442 \u0442\u0435\u0440\u0440\u043E\u0440\u0438\u0441\u0442\u043E\u0432, \u043E\u0431\u0435\u0437\u0432\u0440\u0435\u0434\u0438\u0442 \u0431\u043E\u043C\u0431\u0443 \u0438\u043B\u0438 \u043F\u0440\u043E\u0434\u0435\u0440\u0436\u0438\u0442\u0441\u044F \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u0440\u0430\u0443\u043D\u0434\u0430. \u0417\u0430 \u043F\u043E\u0431\u0435\u0434\u044B, \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u0430 \u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443 \u043D\u0430\u0447\u0438\u0441\u043B\u044F\u044E\u0442\u0441\u044F \u0434\u0435\u043D\u044C\u0433\u0438. \u0411\u0440\u043E\u043D\u044F \u0441\u043D\u0438\u0436\u0430\u0435\u0442 \u0443\u0440\u043E\u043D, \u0448\u043B\u0435\u043C \u0437\u0430\u0449\u0438\u0449\u0430\u0435\u0442 \u0433\u043E\u043B\u043E\u0432\u0443, \u043D\u0430\u0431\u043E\u0440 \u0441\u0430\u043F\u0451\u0440\u0430 \u0443\u0441\u043A\u043E\u0440\u044F\u0435\u0442 \u0440\u0430\u0437\u043C\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0432\u0434\u0432\u043E\u0435.",loading:"\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430\u2026",paused:"\u041F\u0430\u0443\u0437\u0430",fps:"FPS",first_to:"\u0434\u043E {0} \u043F\u043E\u0431\u0435\u0434",bots_count:"{0} \u043D\u0430 {0}",kill_reward:"+${0} \u0437\u0430 \u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E",round_reward:"+${0}",hs:"\u0432 \u0433\u043E\u043B\u043E\u0432\u0443",wallbang:"\u0441\u043A\u0432\u043E\u0437\u044C \u0441\u0442\u0435\u043D\u0443",grenade:"\u0433\u0440\u0430\u043D\u0430\u0442\u0430",bomb:"\u0431\u043E\u043C\u0431\u0430",fall:"\u043F\u0430\u0434\u0435\u043D\u0438\u0435",suicide:"\u0441\u0430\u043C\u043E\u0443\u0431\u0438\u0439\u0441\u0442\u0432\u043E"},en:{play:"Play",settings:"Settings",stats:"Stats",help:"How to play",back:"Back",start:"Deploy",resume:"Resume",leave:"Quit to menu",rematch:"Rematch",menu:"Menu",map:"Map",mode:"Mode",team:"Team",bots:"Bots per team",difficulty:"Bot skill",rounds:"Rounds to win",ff:"Friendly fire",mode_bomb:"Bomb defusal",mode_dm:"Deathmatch",mode_gg:"Arms race",mode_bomb_d:"Terrorists plant C4, counter-terrorists defend sites A and B",mode_dm_d:"Instant respawn, free weapon choice",mode_gg_d:"Every kill upgrades your weapon. Win with a knife kill",team_auto:"Auto",team_t:"Terrorists",team_ct:"Counter-Terrorists",t:"Terrorists",ct:"Counter-Terrorists",t_short:"T",ct_short:"CT",easy:"Easy",normal:"Normal",hard:"Hard",expert:"Expert",on:"On",off:"Off",lang:"Language",volume:"Volume",voice:"Radio voice",sens:"Touch sensitivity",mouseSens:"Mouse sensitivity",fov:"Field of view",quality:"Graphics",q_auto:"Auto",q_low:"Low",q_medium:"Medium",q_high:"High",showFps:"Show FPS",aimAssist:"Aim assist",autoFire:"Auto-fire on target",invertY:"Invert Y",btnScale:"Button size",btnAlpha:"Button opacity",crosshair:"Crosshair color",vibrate:"Vibration",leftFire:"Left fire button",buy:"Buy",buy_pistols:"Pistols",buy_heavy:"Shotgun & SMG",buy_rifles:"Rifles",buy_gear:"Equipment",buy_nades:"Grenades",vest:"Kevlar",vesthelm:"Kevlar + helmet",kit:"Defuse kit",rebuy:"Rebuy",autobuy:"Autobuy",close:"Close",buy_closed:"Buy time is over",buy_zone:"You can only buy in the spawn zone",no_money:"Not enough money",team_only:"Not available for your team",have_it:"Already owned",money:"Money",hp:"Health",armor:"Armor",kills:"Kills",deaths:"Deaths",score:"Score",name:"Player",alive:"alive",dead:"dead",you:"You",round:"Round",freeze:"Buy time",bomb_planted:"Bomb has been planted!",bomb_defused:"Bomb defused",bomb_exploded:"Target destroyed",t_win:"Terrorists win",ct_win:"Counter-Terrorists win",draw:"Round draw",plant_hint:"Hold \u201CUse\u201D to plant the bomb",defuse_hint:"Hold \u201CUse\u201D to defuse",have_bomb:"You have the bomb: plant it at site A or B",bomb_dropped:"The bomb has been dropped!",bomb_picked:"You picked up the bomb",planting:"Planting\u2026",defusing:"Defusing\u2026",site:"Site",must_site:"The bomb must be planted at a bomb site",spectating:"Spectating",you_died:"You were killed",killed_by:"Killed by",respawn_in:"Respawn in",match_over:"Match over",victory:"Victory!",defeat:"Defeat",mvp:"MVP",your_stats:"Your result",accuracy:"Accuracy",headshots:"Headshots",wins:"Wins",losses:"Losses",matches:"Matches",plants:"Plants",defuses:"Defuses",playtime:"Time played",kd:"K/D",reset_stats:"Reset",pick_weapon:"Choose a weapon",level:"Level",leader:"Leader",time_left:"Time left",frag_limit:"Frag limit",reload:"Reload",jump:"Jump",crouch:"Crouch",use:"Use",scope:"Scope",drop:"Drop",go:"Go, go, go!",r_planted:"Bomb has been planted",r_twin:"Terrorists win",r_ctwin:"Counter-terrorists win",r_defused:"Bomb has been defused",r_cover:"Cover me",r_enemy:"Enemy spotted",r_flash:"Flashbang out!",r_smoke:"Smoke out!",r_he:"Fire in the hole!",tutorial_title:"Controls",help_text:"<b>Phone:</b> left half of the screen moves (joystick), right half looks around. Drag the fire button to aim while shooting. Right-side buttons: jump, crouch, reload, scope. Weapons are at the bottom, buy ($) and score at the top left.<br><br><b>PC:</b> WASD move, mouse look, LMB fire, RMB scope / knife stab, R reload, Space jump, Ctrl crouch, Shift walk quietly, E use (plant/defuse/pick up), 1\u20135 weapons, Q last weapon, G drop, B buy, Tab score, Esc pause.<br><br><b>Bomb defusal:</b> terrorists plant C4 at site A or B and protect it. Counter-terrorists win by eliminating the terrorists, defusing the bomb or running out the clock. Wins, kills and plants earn money. Kevlar reduces damage, a helmet protects the head, the defuse kit halves defuse time.",loading:"Loading\u2026",paused:"Paused",fps:"FPS",first_to:"first to {0}",bots_count:"{0} vs {0}",kill_reward:"+${0} for the kill",round_reward:"+${0}",hs:"headshot",wallbang:"wallbang",grenade:"grenade",bomb:"bomb",fall:"fall",suicide:"suicide"}},Io="ru";function Gu(s){Io=Po[s]?s:"ru"}function ln(){return Io}function G(s,...t){var n,i;let e=(i=(n=Po[Io]&&Po[Io][s])!=null?n:Po.ru[s])!=null?i:s;return t.forEach((r,o)=>{e=e.split("{"+o+"}").join(r)}),e}var Wu=["ak47","m4a1","awp","mp5","p90","m3","galil","famas","scout","deagle"],Lo=class{constructor({def:t,scene:e,fx:n,ui:i,setup:r,playerName:o,autopilot:a=!1,seed:l=Date.now()}){this.def=t,this.grid=new pi(t),this.scene=e,this.fx=n,this.ui=i,this.setup=r,this.mode=r.mode,this.ffa=this.mode==="gg",this.ff=!!r.ff&&!this.ffa,this.rng=Ss(l),this.time=0,this.phase="freeze",this.phaseT=0,this.round=0,this.score=[0,0],this.lossStreak=[0,0],this.actors=[],this.grenades=[],this.drops=[],this.noises=[],this.calls=[null,null],this.bomb={planted:!1,dropped:!1},this.over=!1,this.autopilot=a,this.radioT=new Map,this.shakeAmt=0,this.matchTime=0,this.createActors(o),this.siteEntries={}}createActors(t){let e=this.setup,n=e.team==="t"?Et.T:e.team==="ct"?Et.CT:this.rng()<.5?Et.T:Et.CT;this.player=new ar(t||G("you"),n,!1),this.listenerActor=this.player,this.viewActor=this.player,this.autopilot&&(this.player.brain=new cr(this.player,this,e.diff)),this.actors.push(this.player);let i=gu.slice().sort(()=>this.rng()-.5),r=0,o=Math.max(1,Math.min(6,e.bots|0));for(let a of[Et.T,Et.CT]){let l=a===n?o-1:o;for(let c=0;c<l;c++){let h=new ar(i[r++%i.length],a,!0);h.brain=new cr(h,this,e.diff),this.actors.push(h)}}for(let a of this.actors)a.money=Gt.startMoney,a.model=Cu(a.team),a.model.visible=!1,this.scene.add(a.model)}isEnemy(t,e){return!t||!e||t===e?!1:this.ffa?!0:t.team!==e.team}spawnCenter(t){let e=t===Et.T?this.def.spawnT:this.def.spawnCT;return this.grid.center(e[0]+e[2]>>1,e[1]+e[3]>>1)}siteEntry(t,e){if(!this.siteEntries[t]){let i=this.def.sites[t],r=this.grid.center(i[0]+i[2]>>1,i[1]+i[3]>>1),o=this.spawnCenter(Et.T),a=this.grid.findPath(r.x,r.z,o.x,o.z)||[],l=[],c=0,h=r.x,u=r.z;for(let d of a)c+=Math.hypot(d.x-h,d.z-u),h=d.x,u=d.z,c>8&&c<30&&l.push(d);this.siteEntries[t]=l.length?l:[o]}let n=this.siteEntries[t];return n[e()*n.length|0]}siteAt(t,e){for(let[n,i]of Object.entries(this.def.sites))if(this.grid.inRect(t,e,i))return n;return null}inBuyZone(t){if(this.mode!=="bomb")return!0;let e=t.team===Et.T?this.def.spawnT:this.def.spawnCT;return this.grid.inRect(t.x,t.z,[e[0]-3,e[1]-3,e[2]+3,e[3]+3])}canBuy(t){return!t.alive||this.mode==="gg"?!1:this.mode==="dm"?!0:(this.phase==="freeze"||this.phase==="live"&&this.time-this.liveStart<Gt.buyTime)&&this.inBuyZone(t)}buyError(t,e){if(this.mode==="gg")return"buy_closed";if(this.mode==="bomb"){if(!(this.phase==="freeze"||this.phase==="live"&&this.time-this.liveStart<Gt.buyTime))return"buy_closed";if(!this.inBuyZone(t))return"buy_zone"}let n=ce[e],i=or[e],r=n||i;if(!r)return"no_money";if(r.team!==void 0&&r.team>=0&&r.team!==t.team&&this.mode==="bomb")return"team_only";let o=this.mode==="dm"?0:r.price;if(e==="vest"&&t.armor>=100||e==="vesthelm"&&t.armor>=100&&t.helmet||e==="kit"&&t.kit||n&&n.kind==="grenade"&&t.nades[n.nade]>=(n.max||1)||n&&n.slot<=1&&t.slots[n.slot]&&t.slots[n.slot].key===e)return"have_it";let a=o;return e==="vesthelm"&&t.armor>=100&&!t.helmet&&(a=350),t.money<a?"no_money":null}buy(t,e,n=!1){let i=this.buyError(t,e);if(i)return!n&&t===this.player&&(this.ui.message(G(i),1.5,"warn"),ot.play("deny")),!1;let r=ce[e],o=this.mode==="dm"?0:(r||or[e]).price;return e==="vesthelm"&&t.armor>=100&&!t.helmet&&this.mode!=="dm"&&(o=350),t.money-=o,e==="vest"?t.armor=100:e==="vesthelm"?(t.armor=100,t.helmet=!0):e==="kit"?t.kit=!0:r.kind==="grenade"?(t.nades[r.nade]++,t.nadeKey||(t.nadeKey=r.nade)):(t.slots[r.slot]&&this.dropWeapon(t,r.slot,!0),t.slots[r.slot]=mi(e),t.slot===r.slot?t.switchT=.6:t.select(r.slot),this.mode==="dm"&&r.slot===0&&t===this.player&&(this.dmChoice=e)),t===this.player&&(ot.play("buy"),this.lastBuys=this.lastBuys||[],this.buyingRebuy||this.recordBuy(e)),!0}recordBuy(t){this.roundBuys||(this.roundBuys=[]),this.roundBuys.push(t),this.lastBuys=this.roundBuys.slice()}rebuy(){if(this.lastBuys){this.buyingRebuy=!0;for(let t of this.lastBuys)this.buy(this.player,t,!0);this.buyingRebuy=!1}}autobuy(){let t=this.player,e=t.team===Et.T?"ak47":"m4a1",n=[e,"vesthelm",t.team===Et.CT?"kit":null,"he","flash","smoke"];!t.slots[0]&&t.money<ce[e].price&&n.unshift(t.team===Et.T?"galil":"famas","mp5");for(let i of n)i&&(i===e||i==="galil"||i==="famas"||i==="mp5"?t.slots[0]||this.buy(t,i,!0):this.buy(t,i,!0));this.mode==="bomb"&&t.money<650&&!t.armor&&this.buy(t,"vest",!0)}start(){this.round=0,this.score=[0,0];for(let t of this.actors)t.kills=t.deaths=t.score=t.hsKills=t.dmgDealt=0,t.money=Gt.startMoney,t.clearInventory(),t.ggLevel=0;if(this.mode==="bomb")this.startRound();else{this.phase="live",this.phaseT=this.mode==="dm"?Gt.dmTime:1/0,this.liveStart=this.time;for(let t of this.actors)this.respawn(t);ot.say(G("go")),this.ui.message(G(this.mode==="dm"?"mode_dm":"mode_gg"),2.5,"big")}}defaultPistol(t){return t.team===Et.T?"glock":"usp"}startRound(){this.round++,this.roundBuys=[],this.phase="freeze",this.phaseT=Gt.freezeTime,this.roundStart=this.time,this.liveStart=this.time+Gt.freezeTime,this.bomb.model&&this.scene.remove(this.bomb.model),this.bomb={planted:!1,dropped:!1},this.pendingEnd=!1,this.clearDrops();for(let n of this.grenades)n.model&&this.scene.remove(n.model);this.grenades.length=0,this.fx.clear(),this.calls=[null,null],this.tPlan=Object.keys(this.def.sites)[this.rng()*Object.keys(this.def.sites).length|0];let t=new Set;for(let n of this.actors){let i=n.alive&&this.round>1;if(!i){let d=n.money;n.clearInventory(),n.money=d,n.slots[1]=mi(this.defaultPistol(n))}n.hasBomb=!1;let r=100,o=i?n.armor:0,a=i?n.helmet:!1,l=i?n.kit:!1;n.resetBody(),n.hp=r,n.armor=o,n.helmet=a,n.kit=l,(!this.round||this.round===1)&&(n.armor=0,n.helmet=!1,n.kit=!1);for(let d of[0,1])n.slots[d]&&(n.slots[d].reserve=Math.max(n.slots[d].reserve,n.slots[d].def.reserve));let c=n.team===Et.T?this.def.spawnT:this.def.spawnCT,h=this.grid.randomCellIn(c,this.rng,(d,p)=>t.has(d+","+p));t.add(Math.floor(h.x/xt)+","+Math.floor(h.z/xt)),n.x=h.x+(this.rng()-.5)*.6,n.z=h.z+(this.rng()-.5)*.6,n.y=this.grid.groundUnder(n.x,n.z,oe.radius);let u=this.spawnCenter(n.team===Et.T?Et.CT:Et.T);n.yaw=Math.atan2(-(u.x-n.x),-(u.z-n.z))+(this.rng()-.5)*.6,n.pitch=0,n.slot=n.bestSlot(),n.lastSlot=2,n.roundKills=0,n.brain&&n.brain.reset()}let e=this.actors.filter(n=>n.team===Et.T);if(e.length&&this.mode==="bomb"){let n=e[this.rng()*e.length|0];n.hasBomb=!0,n===this.player&&!this.autopilot&&this.ui.message(G("have_bomb"),4,"info")}for(let n of this.actors)n.brain&&n!==this.player&&n.brain.buy();this.autopilot&&this.player.brain.buy(),this.ui.roundStart(this.round),ot.play("roundStart")}endRound(t,e){if(this.phase==="post")return;this.phase="post",this.phaseT=Gt.roundEndTime,this.score[t]++;let n=1-t;this.lossStreak[t]=0,this.lossStreak[n]++;let i=e==="bomb"||e==="defuse"?Gt.winBomb:e==="time"?Gt.winTime:Gt.winElim,r=Bu(this.lossStreak[n]);for(let h of this.actors)this.addMoney(h,h.team===t?i:r);let o=this.player;o.team===t?this.stat("wins",1):this.stat("losses",1);let a=this.actors.filter(h=>h.team===t).sort((h,u)=>u.roundKills-h.roundKills)[0];a&&a.roundKills>0&&a.mvps++;let l=t===Et.T?"t_win":"ct_win";this.lastWinner=t,this.ui.roundEnd(t,e,a&&a.roundKills>0?a:null),ot.play(o.team===t?"win":"lose"),ot.say(G(t===Et.T?"r_twin":"r_ctwin"));let c=this.setup.rounds;return(this.score[t]>=c||this.round>=c*2-1)&&(this.pendingEnd=!0),l}endMatch(t,e){if(this.over)return;this.over=!0,this.phase="over";let n=this.player,i=this.ffa?e===n:t===n.team;this.stat("matches",1);let r=this.actors.slice().sort((o,a)=>a.kills-o.kills||o.deaths-a.deaths);r[0]===n&&this.stat("mvp",1),this.ui.matchEnd({won:i,winnerTeam:t,winnerActor:e,score:this.score.slice(),actors:r,mvp:r[0]}),ot.play(i?"win":"lose")}addMoney(t,e){t.money=Math.max(0,Math.min(Gt.maxMoney,t.money+e)),t===this.player&&e&&this.ui.money(e)}respawn(t){t.resetBody(),t.clearInventory();let e=this.grid.floorCells(),n=null,i=-1;for(let r=0;r<16;r++){let o=e[this.rng()*e.length|0],a=this.grid.center(o%this.grid.w,o/this.grid.w|0),l=1/0;for(let c of this.actors)c!==t&&c.alive&&this.isEnemy(t,c)&&(l=Math.min(l,Math.hypot(c.x-a.x,c.z-a.z)));l>i&&(i=l,n=a)}if(t.x=n.x,t.z=n.z,t.y=this.grid.groundUnder(t.x,t.z,oe.radius),t.yaw=this.rng()*Math.PI*2,t.protectT=2,this.mode==="gg")this.giveGG(t);else{t.slots[1]=mi("deagle"),t.armor=100,t.helmet=!0;let r=t===this.player&&this.dmChoice?this.dmChoice:t.brain?t.dmPick||(t.dmPick=Wu[this.rng()*Wu.length|0]):"ak47";ce[r].slot===0&&(t.slots[0]=mi(r)),t.nades.he=1,t.slot=t.bestSlot()}t.switchT=.4,t.brain&&t.brain.reset()}giveGG(t){let e=fi[Math.min(t.ggLevel,fi.length-1)];if(t.slots[0]=null,t.slots[1]=null,e!=="knife"){let n=mi(e);n.reserve=999,t.slots[ce[e].slot]=n}t.slot=t.bestSlot(),t.switchT=.4}noise(t,e,n,i,r){this.noises.push({x:t,y:e,z:n,r:i,src:r,t:this.time}),this.noises.length>60&&this.noises.splice(0,this.noises.length-60)}callout(t,e,n){this.calls[t]={x:e,z:n,t:this.time}}radio(t,e){if(!t||t.team!==this.player.team||this.ffa)return;let n=this.radioT.get(t.id)||-10;this.time-n<6||(this.radioT.set(t.id,this.time),this.ui.chat(t,G(e)))}stat(t,e){this.autopilot||this.ui.stat(t,e)}muzzleOf(t){let e=Math.cos(t.pitch),n=-Math.sin(t.yaw)*e,i=Math.sin(t.pitch),r=-Math.cos(t.yaw)*e,o=Math.cos(t.yaw),a=-Math.sin(t.yaw),l=t===this.player&&!this.thirdPerson?.55:.75;return{x:t.x+n*l+o*.12,y:t.y+t.eyeHeight()+i*l-.12,z:t.z+r*l+a*.12}}onShot(t,e){t.model&&t.model.visible&&(t.model.userData.flash.visible=!0,t.flashOff=this.time+.05,t.model.userData.flash.material.rotation=this.rng()*6),(t!==this.player||this.autopilot)&&this.fx.flashLight(e.x,e.y,e.z,2.5,16760944,.05),this.ui.shot(t)}onDamage(t,e,n,i,r,o){if(e===this.player&&(this.ui.hitmarker(i==="head",t.hp<=0),this.stat("hits",1)),t===this.player){if(e&&e!==t){let l=Math.atan2(e.x-t.x,e.z-t.z);this.ui.damageDir(l,n)}this.ui.hurt(n),ot.play("hurt",null,.5)}let a={x:t.x,y:t.y+1.3,z:t.z};i==="head"?ot.play("headshot",t===this.player?null:a,o?.7:1):i!=="blast"&&ot.play(t.armor>0&&i!=="legs"?"kevlar":"hit",t===this.player?null:a,.8),t.brain&&e&&(t.brain.heard={x:e.x,y:e.y,z:e.z,t:this.time})}kill(t,e,n,{hs:i=!1,wallbang:r=!1}={}){if(!t.alive)return;t.alive=!1,t.hp=0,t.deaths++,t.deathT=0,t.deathDir=this.rng()<.5?1:-1,t.plantT=0,t.defuseT=0,t.respawnT=Gt.dmRespawn,this.bomb.defuser===t&&(this.bomb.defuser=null);let o=e&&e!==t&&!this.isEnemy(e,t);if(e&&e!==t?o?(e.kills--,this.addMoney(e,-Gt.killReward)):(e.kills++,e.roundKills++,i&&e.hsKills++,this.mode==="bomb"&&this.addMoney(e,ce[n]&&ce[n].kill||Gt.killReward),e===this.player&&(this.stat("kills",1),i&&this.stat("hs",1))):(!e||e===t)&&(t.kills=Math.max(0,t.kills-(this.mode==="bomb"?0:1))),t===this.player&&(this.stat("deaths",1),this.ui.died(e,n)),this.ui.killfeed(e,t,n,i,r),this.mode==="bomb"){let a=t.slots[0]?0:t.slots[1]?1:-1;a>=0&&this.dropWeapon(t,a,!1),t.hasBomb&&this.dropBomb(t);let l=t.firstNade();l&&this.rng()<.5&&this.spawnDrop(l,t,null)}this.mode==="gg"&&e&&e!==t&&!o&&this.ggProgress(e,t,n),this.mode==="dm"&&e&&e!==t&&!o&&(this.score[e.team]++,this.score[e.team]>=Gt.dmFragLimit&&this.endMatch(e.team,null))}ggProgress(t,e,n){if(n==="knife"&&e.ggLevel>0&&t.ggLevel!==fi.length-1&&e.ggLevel--,t.ggLevel>=fi.length-1){this.endMatch(t.team,t);return}t.ggLevel++,t===this.player&&ot.play("levelUp"),t.alive&&this.giveGG(t)}spawnDrop(t,e,n){let i=Ts(t);i.scale.setScalar(1.25),this.scene.add(i);let r={x:-Math.sin(e.yaw),z:-Math.cos(e.yaw)},o={key:t,w:n,model:i,x:e.x+r.x*.3,y:e.y+1.1,z:e.z+r.z*.3,vx:r.x*3+e.vx*.4,vy:1.5,vz:r.z*3+e.vz*.4,rest:!1,by:e,t:this.time};return this.drops.push(o),o}dropWeapon(t,e,n){let i=t.slots[e];if(!i||i.key==="knife")return null;t.slots[e]=null;let r=this.spawnDrop(i.key,t,i);return!n&&t.slot===e&&t.select(t.bestSlot()),n&&(r.vx*=.5),r}dropBomb(t){if(!t.hasBomb)return;t.hasBomb=!1,t.slot===4&&t.select(t.bestSlot());let e=this.spawnDrop("bomb",t,null);e.isBomb=!0,this.bomb.dropped=!0,this.bomb.dropRef=e,this.bomb.x=e.x,this.bomb.z=e.z,this.bomb.y=e.y,this.player.team===Et.T&&this.ui.message(G("bomb_dropped"),2,"warn")}clearDrops(){for(let t of this.drops)this.scene.remove(t.model);this.drops.length=0}updateDrops(t){for(let e=this.drops.length-1;e>=0;e--){let n=this.drops[e];if(!n.rest){n.vy-=20*t;let i=n.x+n.vx*t,r=n.z+n.vz*t;this.grid.topAt(i,n.z)>n.y?n.vx=-n.vx*.3:n.x=i,this.grid.topAt(n.x,r)>n.y?n.vz=-n.vz*.3:n.z=r,n.y+=n.vy*t;let o=this.grid.topAt(n.x,n.z)+.04;n.y<=o&&(n.y=o,n.vy=0,n.vx*=.5,n.vz*=.5,Math.hypot(n.vx,n.vz)<.2&&(n.rest=!0)),n.model.position.set(n.x,n.y,n.z),n.model.rotation.set(0,n.t*7%6.28,Math.PI/2*(n.isBomb?0:1)),n.isBomb&&(this.bomb.x=n.x,this.bomb.y=n.y,this.bomb.z=n.z)}for(let i of this.actors)if(!(!i.alive||Math.hypot(i.x-n.x,i.z-n.z)>1||Math.abs(i.y-n.y)>1.3)&&!(n.by===i&&this.time-n.t<1.2)&&this.tryPickup(i,n,!1)){this.drops.splice(e,1),this.scene.remove(n.model);break}}}tryPickup(t,e,n){if(e.isBomb)return t.team!==Et.T||this.mode!=="bomb"?!1:(t.hasBomb=!0,this.bomb.dropped=!1,this.bomb.dropRef=null,t===this.player&&(this.ui.message(G("bomb_picked"),2,"info"),ot.play("pickup")),!0);let i=ce[e.key];if(i.kind==="grenade")return t.nades[i.nade]>=(i.max||1)?!1:(t.nades[i.nade]++,t.nadeKey||(t.nadeKey=i.nade),t===this.player&&ot.play("pickup"),!0);if(this.mode==="gg")return!1;let r=i.slot;if(t.slots[r]){if(!n)return!1;this.dropWeapon(t,r,!0)}return t.slots[r]=e.w||mi(e.key),t===this.player&&ot.play("pickup"),(t.slot===r||n||r===0&&t.slot!==3&&t.slot!==4)&&(t.slot=-1,t.select(r)),!0}nearestDrop(t){let e=null,n=1.8;for(let i of this.drops){if(i.isBomb)continue;let r=Math.hypot(t.x-i.x,t.z-i.z);r<n&&Math.abs(t.y-i.y)<1.3&&(n=r,e=i)}return e}plant(t,e){t.hasBomb=!1,t.plantT=0,t.select(t.bestSlot());let n=Ts("bomb");n.scale.setScalar(1.7),n.position.set(t.x,this.grid.topAt(t.x,t.z)+.07,t.z),n.rotation.y=t.yaw;let i=new Ii(new ui({map:En("spark"),color:16719904,blending:wn,depthWrite:!1,transparent:!0}));i.scale.set(.35,.35,1),i.position.set(0,.08,0),n.add(i),this.scene.add(n),this.bomb={planted:!0,dropped:!1,x:t.x,y:n.position.y,z:t.z,site:e,timer:Gt.bombTime,defuser:null,model:n,led:i,beepT:0,planter:t};for(let r of this.actors)r.team===Et.T&&this.addMoney(r,Gt.plantReward);t===this.player&&this.stat("plants",1),t.score+=2,ot.play("planted",{x:t.x,y:t.y,z:t.z},1),ot.say(G("r_planted")),this.ui.message(G("bomb_planted"),3,"big"),this.noise(t.x,t.y,t.z,100,t),this.ui.bombPlanted(e)}updateBomb(t){let e=this.bomb;if(!e.planted||this.phase!=="live")return;e.timer-=t;let i=.12+Math.max(0,e.timer/Gt.bombTime)*.95;if(e.beepT-=t,e.beepT<=0&&(e.beepT=i,ot.play("beep",{x:e.x,y:e.y+.2,z:e.z},1.2),e.led.visible=!0,e.ledOff=this.time+.08),e.ledOff&&this.time>e.ledOff&&(e.led.visible=!1),e.defuser){let r=e.defuser;r.alive||(e.defuser=null,r.defuseT=0)}e.timer<=0&&this.explodeBomb()}explodeBomb(){let t=this.bomb;t.planted=!1,t.exploded=!0,this.scene.remove(t.model),ot.play("bombExplode",{x:t.x,y:t.y+1,z:t.z},2),this.fx.explosion(t.x,t.y,t.z,!0),this.shake(t.x,t.z,60,1.6);for(let e of this.actors){if(!e.alive)continue;let n=Math.hypot(e.x-t.x,e.z-t.z,(e.y-t.y)*.5);if(n>Gt.bombRadius)continue;let i=Gt.bombDamage*Math.pow(1-n/Gt.bombRadius,2);i>=1&&Es(this,e,null,i,"blast",.75,"bomb")}this.ui.message(G("bomb_exploded"),3,"big"),this.endRound(Et.T,"bomb")}defuse(t){let e=this.bomb;e.planted=!1,e.defused=!0,t.defuseT=0,e.led.visible=!1,t===this.player&&this.stat("defuses",1),t.score+=2,ot.play("defused",{x:e.x,y:e.y,z:e.z},1),ot.say(G("r_defused")),this.ui.message(G("bomb_defused"),3,"big"),this.endRound(Et.CT,"defuse")}shake(t,e,n,i){let r=this.listenerActor,o=Math.hypot(r.x-t,r.z-e);o<n&&(this.shakeAmt=Math.max(this.shakeAmt,i*(1-o/n)))}onFlashed(t){this.ui.flash(t),ot.play("ring",null,Math.min(1,t/4))}makeNadeModel(t){let e=Ts(t);return e.scale.setScalar(1.3),this.scene.add(e),e}applyMove(t,e,n){let i=t.maxSpeed();t.crouching=!!e.crouch;let r=t.crouching?1:0;t.crouch+=Math.sign(r-t.crouch)*Math.min(Math.abs(r-t.crouch),n*7),e.walk&&(i*=oe.walkMul),t.crouch>.5&&(i*=oe.crouchMul),(t.plantT>0||t.defuseT>0||this.phase==="freeze")&&(i=0),t.stamina=Math.min(1,t.stamina+n*1.6),i*=t.stamina;let o=e.wx||0,a=e.wz||0,l=Math.hypot(o,a);l>1&&(o/=l,a/=l);let c=Math.min(1,l);if(t.onGround){let u=Math.hypot(t.vx,t.vz);if(u>0){let d=Math.max(u,2)*oe.friction*n,p=Math.max(0,u-d)/u;t.vx*=p,t.vz*=p}if(c>0){let d=o/(l||1),p=a/(l||1),g=i*c,x=t.vx*d+t.vz*p,m=g-x;if(m>0){let f=Math.min(m,oe.accel*n*Math.max(1,g/4));t.vx+=d*f,t.vz+=p*f}}e.jump&&t.alive&&this.phase!=="freeze"&&t.plantT<=0&&t.defuseT<=0&&(t.vy=oe.jumpSpeed*(t.crouch>.5?.9:1),t.onGround=!1,t===this.listenerActor&&ot.play("jump",null,.5))}else if(c>0){let u=o/(l||1),d=a/(l||1),p=t.vx*u+t.vz*d,g=Math.min(1.2,i*c)-p;if(g>0){let x=Math.min(g,oe.airAccel*n*i);t.vx+=u*x,t.vz+=d*x}}t.fallSpeed=0,this.grid.move(t,n)&&(t.stamina=Math.min(t.stamina,.72),t.fallSpeed>11&&Es(this,t,null,(t.fallSpeed-11)*10,"legs",1,"fall"),t.fallSpeed>4&&(ot.play("land",t===this.listenerActor?null:{x:t.x,y:t.y,z:t.z},.7),this.noise(t.x,t.y,t.z,14,t))),t.speed2d=Math.hypot(t.vx,t.vz),t.onGround&&t.speed2d>3.3&&!e.walk&&t.crouch<.5&&(t.stepAcc+=t.speed2d*n,t.stepAcc>2.3&&(t.stepAcc=0,ot.play("step",t===this.listenerActor?null:{x:t.x,y:t.y,z:t.z},t===this.listenerActor?.25:.9),this.noise(t.x,t.y,t.z,20,t)))}separate(){let t=this.actors;for(let e=0;e<t.length;e++){let n=t[e];if(n.alive)for(let i=e+1;i<t.length;i++){let r=t[i];if(!r.alive||Math.abs(n.y-r.y)>1.6)continue;let o=r.x-n.x,a=r.z-n.z,l=Math.hypot(o,a),c=oe.radius*2;if(l>=c||l<1e-5)continue;let h=(c-l)/2,u=o/l,d=a/l;this.grid.blockedAt(n.x-u*h,n.z-d*h,oe.radius,n.y,n.y+1)||(n.x-=u*h,n.z-=d*h),this.grid.blockedAt(r.x+u*h,r.z+d*h,oe.radius,r.y,r.y+1)||(r.x+=u*h,r.z+=d*h)}}}objectives(t,e,n){if(this.mode!=="bomb"||this.phase!=="live"||!t.alive)return;let i=this.bomb;if(t.hasBomb&&!i.planted){let r=e.use||t.slot===4&&e.fire,o=this.siteAt(t.x,t.z);r&&o&&t.onGround?(t.slot!==4&&(t.select(4),t.switchT=0),t.plantT===0&&ot.play("plant",t===this.listenerActor?null:{x:t.x,y:t.y+1,z:t.z},.8),t.plantT+=n,t.plantT>=Gt.plantTime&&this.plant(t,o)):(r&&!o&&t===this.player&&this.time-(this.siteHintT||-9)>2&&(this.siteHintT=this.time,this.ui.message(G("must_site"),1.5,"warn")),t.plantT=0)}if(i.planted&&t.team===Et.CT){let r=Math.hypot(t.x-i.x,t.z-i.z)<1.6&&Math.abs(t.y-i.y)<1.4;e.use&&r&&(!i.defuser||i.defuser===t)?(i.defuser||ot.play("defuse",{x:i.x,y:i.y,z:i.z},.8),i.defuser=t,t.defuseT+=n,t.defuseT>=(t.kit?Gt.defuseKitTime:Gt.defuseTime)&&this.defuse(t)):i.defuser===t&&(i.defuser=null,t.defuseT=0)}}checkRoundEnd(){if(this.mode!=="bomb"||this.phase!=="live")return;let t=this.actors.some(n=>n.alive&&n.team===Et.T);if(!this.actors.some(n=>n.alive&&n.team===Et.CT)){this.endRound(Et.T,"elim");return}if(!t&&!this.bomb.planted){this.endRound(Et.CT,"elim");return}!this.bomb.planted&&this.phaseT<=0&&this.endRound(Et.CT,"time")}update(t,e){if(this.over){this.animate(t);return}if(this.time+=t,this.matchTime+=t,this.shakeAmt=Math.max(0,this.shakeAmt-t*1.8),this.phase==="freeze")this.phaseT-=t,this.phaseT<=0&&(this.phase="live",this.phaseT=Gt.roundTime,this.liveStart=this.time,ot.say(G("go")),this.ui.message(G("go"),1.5,"big"));else if(this.phase==="live"){if(this.bomb.planted||(this.phaseT-=t),this.mode==="dm"&&this.phaseT<=0){let n=this.score[0]===this.score[1]?-1:this.score[0]>this.score[1]?0:1;this.endMatch(n,null)}}else if(this.phase==="post"&&(this.phaseT-=t,this.phaseT<=0)){if(this.pendingEnd){let n=this.score[0]===this.score[1]?-1:this.score[0]>this.score[1]?0:1;this.endMatch(n,null);return}this.startRound()}for(let n of this.actors){if(!n.alive){n.deathT+=t,this.mode!=="bomb"&&!this.over&&(n.respawnT-=t,n.respawnT<=0&&this.respawn(n));continue}n.protectT>0&&(n.protectT-=t),n.flashT>0&&(n.flashT-=t);let i;if(n.brain?i=n.brain.think(t):i=e||{wx:0,wz:0},i.slot!==null&&i.slot!==void 0&&n.select(i.slot),this.applyMove(n,i,t),this.objectives(n,i,t),n.plantT<=0&&n.defuseT<=0&&Hu(this,n,i,t),i.usePressed&&n.plantT<=0&&n.defuseT<=0){let r=this.nearestDrop(n);r&&this.tryPickup(n,r,!0)&&(this.drops.splice(this.drops.indexOf(r),1),this.scene.remove(r.model))}i.drop&&(n.slot===4&&n.hasBomb?this.dropBomb(n):n.slot<=1&&this.dropWeapon(n,n.slot,!1))}this.separate(),Vu(this,t),this.updateDrops(t),this.updateBomb(t),this.checkRoundEnd(),this.noises.length&&this.time-this.noises[0].t>2&&this.noises.shift(),this.animate(t)}animate(t){for(let e of this.actors){let n=e.model,i=e===this.viewActor&&!this.thirdPerson&&e.alive;if(n.visible=!i&&(e.alive||e.deathT<12)&&this.phase!=="none",!n.visible)continue;n.position.set(e.x,e.y,e.z),n.rotation.y=e.yaw;let r=e.alive?e.w.key:n.userData.gunKey;Pu(n,e.alive?r:null),e.flashOff&&this.time>e.flashOff&&(n.userData.flash.visible=!1,e.flashOff=0),Iu(n,{speed:e.alive?e.speed2d:0,crouch:e.crouch,air:!e.onGround,pitch:e.pitch,dead:!e.alive,deathT:e.deathT,deathDir:e.deathDir,dt:t,fireT:e.fireAnim})}}dispose(){for(let t of this.actors)t.model&&this.scene.remove(t.model);this.clearDrops();for(let t of this.grenades)t.model&&this.scene.remove(t.model);this.bomb.model&&this.scene.remove(this.bomb.model)}};var Xu="strikezone.v1",Hx={lang:typeof navigator!="undefined"&&navigator.language&&!navigator.language.startsWith("ru")?"en":"ru",volume:.8,voice:!0,sens:1,mouseSens:1,fov:90,quality:"auto",showFps:!1,aimAssist:!0,autoFire:!1,invertY:!1,btnScale:1,btnAlpha:.6,crosshair:"green",vibrate:!0,leftFire:!0},Vx={map:"sands",mode:"bomb",team:"auto",bots:4,diff:"normal",rounds:8,ff:!1},gc={kills:0,deaths:0,hs:0,shots:0,hits:0,wins:0,losses:0,matches:0,plants:0,defuses:0,mvp:0,time:0};function Gx(){try{return JSON.parse(localStorage.getItem(Xu))||{}}catch{return{}}}var Do=Gx(),ee={settings:{...Hx,...Do.settings||{}},setup:{...Vx,...Do.setup||{}},stats:{...gc,...Do.stats||{}},tutorialSeen:!!Do.tutorialSeen,save(){try{localStorage.setItem(Xu,JSON.stringify({settings:this.settings,setup:this.setup,stats:this.stats,tutorialSeen:this.tutorialSeen}))}catch{}}};var pt=s=>document.getElementById(s),Te=s=>String(s).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),qu={knife:"\u{1F52A}",bomb:"C4",he:"HE",fall:"\u2193",flash:"FB",smoke:"SG"},Uo={green:"#4dff6a",white:"#ffffff",yellow:"#ffe14a",cyan:"#4af0ff",red:"#ff4a4a"};function Yu(s){return qu[s]&&s!=="he"?qu[s]:ce[s]?ce[s].name:s}var $u={ru:{he:"\u041E\u0441\u043A\u043E\u043B\u043E\u0447\u043D\u0430\u044F",flash:"\u0421\u0432\u0435\u0442\u043E\u0432\u0430\u044F",smoke:"\u0414\u044B\u043C\u043E\u0432\u0430\u044F"},en:{he:"HE grenade",flash:"Flashbang",smoke:"Smoke"}},Zu=s=>($u[ln()]||$u.ru)[s];function Ku(s,t,e){let n=e||new pi(t),i=s.getContext("2d"),r=Math.min(s.width/n.w,s.height/n.d),o=(s.width-n.w*r)/2,a=(s.height-n.d*r)/2;i.fillStyle="#000",i.fillRect(0,0,s.width,s.height);for(let c=0;c<n.d;c++)for(let h=0;h<n.w;h++){let u=n.h(h,c),d;u>=3?d="#15171b":u<=.01?d=n.charAt(h,c)==="o"?"#5b5f52":"#7a7466":"xX".includes(n.charAt(h,c))?d="#8a6a3c":d="#9c9584",i.fillStyle=d,i.fillRect(o+h*r,a+c*r,Math.ceil(r),Math.ceil(r))}let l=(c,h)=>{i.fillStyle=h,i.fillRect(o+c[0]*r,a+c[1]*r,(c[2]-c[0]+1)*r,(c[3]-c[1]+1)*r)};l(t.spawnT,"rgba(224,160,64,0.35)"),l(t.spawnCT,"rgba(106,168,255,0.35)"),i.font=`bold ${Math.max(10,r*3)}px Arial`,i.textAlign="center",i.textBaseline="middle";for(let[c,h]of Object.entries(t.sites))l(h,"rgba(255,60,40,0.22)"),i.fillStyle="#ff6a50",i.fillText(c,o+(h[0]+h[2]+1)/2*r,a+(h[1]+h[3]+1)/2*r);return{s:r,ox:o,oy:a}}var No=class{constructor(t){this.h=t,this.msgs=[],this.feed=[],this.chatLines=[],this.hurtT=0,this.flashT=0,this.flashMax=0,this.hitT=0,this.dirs=[],this.slotSig="",this.radarT=0,this.screen="menu",this.buyOpen=!1,this.applySettings(),this.bindMenu(),this.refreshTexts()}show(t){for(let e of["menu","setup","settings","stats","help","pause","matchEnd","loading"])pt(e).classList.toggle("hidden",e!==t);this.screen=t,t==="setup"&&this.buildSetup(),t==="settings"&&this.buildSettings(),t==="stats"&&this.buildStats(),t==="help"&&this.buildHelp(),t==="pause"&&this.buildPause()}hideScreens(){for(let t of["menu","setup","settings","stats","help","pause","matchEnd","loading"])pt(t).classList.add("hidden");this.screen=null}bindMenu(){document.querySelectorAll("[data-go]").forEach(t=>t.addEventListener("click",()=>{ot.init(),ot.play("click"),this.settingsBack="menu",this.show(t.dataset.go)}))}refreshTexts(){document.querySelectorAll("[data-t]").forEach(t=>{t.textContent=G(t.dataset.t)}),pt("menuTag").textContent=ln()==="ru"?"\u0442\u0430\u043A\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0448\u0443\u0442\u0435\u0440 \xB7 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0430 \u0431\u043E\u043C\u0431\u044B \xB7 \u0431\u043E\u0442\u044B":"tactical shooter \xB7 bomb defusal \xB7 bots",document.documentElement.lang=ln()}seg(t,e,n,i,r=""){let o=document.createElement("div");o.className="field "+r,o.innerHTML=`<label>${Te(t)}</label><div class="seg"></div>`;let a=o.querySelector(".seg");for(let[l,c,h]of e){let u=document.createElement("button");u.textContent=c,u.disabled=!!h,l===n&&u.classList.add("on"),u.addEventListener("click",()=>{ot.play("click"),a.querySelectorAll("button").forEach(d=>d.classList.remove("on")),u.classList.add("on"),i(l)}),a.appendChild(u)}return o}range(t,e,n,i,r,o,a=l=>l){let l=document.createElement("div");l.className="field",l.innerHTML=`<label>${Te(t)}: <span>${a(r)}</span></label><input type="range" min="${e}" max="${n}" step="${i}" value="${r}">`;let c=l.querySelector("input"),h=l.querySelector("span");return c.addEventListener("input",()=>{let u=parseFloat(c.value);h.textContent=a(u),o(u)}),l}buildSetup(){let t=ee.setup,e=pt("setup");e.innerHTML=`<h1>${G("play")}</h1><div class="form"></div><div class="actions"><button data-a="back">${G("back")}</button><button class="prim" data-a="start">${G("start")}</button></div>`;let n=e.querySelector(".form"),i=document.createElement("div");i.className="field full",i.innerHTML=`<label>${G("map")}</label><div class="maps"></div>`;let r=i.querySelector(".maps");for(let c of $n){let h=document.createElement("div");h.className="mapc"+(c.id===t.map?" on":""),h.innerHTML=`<canvas width="240" height="150"></canvas><b>${Te(c.name[ln()]||c.name.ru)}</b><small>${Te(c.desc[ln()]||c.desc.ru)}</small>`,Ku(h.querySelector("canvas"),c),h.addEventListener("click",()=>{ot.play("click"),t.map=c.id,c.modes.includes(t.mode)||(t.mode=c.modes[0]),this.buildSetup()}),r.appendChild(h)}n.appendChild(i);let o=$n.find(c=>c.id===t.map)||$n[0],a=this.seg(G("mode"),["bomb","dm","gg"].map(c=>[c,G("mode_"+c),!o.modes.includes(c)]),t.mode,c=>{t.mode=c,this.buildSetup()},"full"),l=document.createElement("div");l.className="modeDesc",l.textContent=G("mode_"+t.mode+"_d"),a.appendChild(l),n.appendChild(a),n.appendChild(this.seg(G("team"),[["auto",G("team_auto")],["t",G("team_t"),t.mode==="gg"],["ct",G("team_ct"),t.mode==="gg"]],t.team,c=>{t.team=c})),n.appendChild(this.seg(G("difficulty"),["easy","normal","hard","expert"].map(c=>[c,G(c)]),t.diff,c=>{t.diff=c})),n.appendChild(this.seg(G("bots"),[1,2,3,4,5,6].map(c=>[c,c+"\xD7"+c]),t.bots,c=>{t.bots=c})),t.mode==="bomb"&&(n.appendChild(this.seg(G("rounds"),[3,5,8,10,16].map(c=>[c,String(c)]),t.rounds,c=>{t.rounds=c})),n.appendChild(this.seg(G("ff"),[[!1,G("off")],[!0,G("on")]],t.ff,c=>{t.ff=c}))),e.querySelector("[data-a=back]").addEventListener("click",()=>{ot.play("click"),ee.save(),this.show("menu")}),e.querySelector("[data-a=start]").addEventListener("click",()=>{ot.init(),ot.play("click"),ee.save(),this.h.onStart({...t})})}buildSettings(){let t=ee.settings,e=pt("settings");e.innerHTML=`<h1>${G("settings")}</h1><div class="form"></div><div class="actions"><button class="prim" data-a="back">${G("back")}</button></div>`;let n=e.querySelector(".form"),i=()=>{ee.save(),this.applySettings(),this.h.onSettings()},r=[[!0,G("on")],[!1,G("off")]];n.appendChild(this.seg(G("lang"),[["ru","\u0420\u0443\u0441\u0441\u043A\u0438\u0439"],["en","English"]],t.lang,o=>{t.lang=o,i(),this.refreshTexts(),this.buildSettings()})),n.appendChild(this.seg(G("quality"),["auto","low","medium","high"].map(o=>[o,G("q_"+o)]),t.quality,o=>{t.quality=o,i()})),n.appendChild(this.range(G("volume"),0,1,.05,t.volume,o=>{t.volume=o,i()},o=>Math.round(o*100)+"%")),n.appendChild(this.range(G("fov"),70,110,1,t.fov,o=>{t.fov=o,i()},o=>o+"\xB0")),n.appendChild(this.range(G("sens"),.3,2.5,.05,t.sens,o=>{t.sens=o,i()},o=>o.toFixed(2))),n.appendChild(this.range(G("mouseSens"),.2,3,.05,t.mouseSens,o=>{t.mouseSens=o,i()},o=>o.toFixed(2))),n.appendChild(this.range(G("btnScale"),.7,1.4,.05,t.btnScale,o=>{t.btnScale=o,i()},o=>Math.round(o*100)+"%")),n.appendChild(this.range(G("btnAlpha"),.2,1,.05,t.btnAlpha,o=>{t.btnAlpha=o,i()},o=>Math.round(o*100)+"%")),n.appendChild(this.seg(G("crosshair"),Object.keys(Uo).map(o=>[o,"\u25A0"]),t.crosshair,o=>{t.crosshair=o,i()})),e.querySelectorAll(".seg").forEach(o=>{o.children.length===5&&o.children[0].textContent==="\u25A0"&&[...o.children].forEach((a,l)=>{a.style.color=Object.values(Uo)[l]})}),n.appendChild(this.seg(G("aimAssist"),r,t.aimAssist,o=>{t.aimAssist=o,i()})),n.appendChild(this.seg(G("autoFire"),r,t.autoFire,o=>{t.autoFire=o,i()})),n.appendChild(this.seg(G("leftFire"),r,t.leftFire,o=>{t.leftFire=o,i()})),n.appendChild(this.seg(G("invertY"),r,t.invertY,o=>{t.invertY=o,i()})),n.appendChild(this.seg(G("voice"),r,t.voice,o=>{t.voice=o,i()})),n.appendChild(this.seg(G("vibrate"),r,t.vibrate,o=>{t.vibrate=o,i()})),n.appendChild(this.seg(G("showFps"),r,t.showFps,o=>{t.showFps=o,i()})),e.querySelector("[data-a=back]").addEventListener("click",()=>{ot.play("click"),this.show(this.settingsBack||"menu")})}buildStats(){let t=ee.stats,e=pt("stats"),n=t.deaths?(t.kills/t.deaths).toFixed(2):t.kills.toFixed(2),i=t.shots?Math.round(t.hits/t.shots*100)+"%":"\u2014",r=t.kills?Math.round(t.hs/t.kills*100)+"%":"\u2014",o=Math.round(t.time/60)+(ln()==="ru"?" \u043C\u0438\u043D":" min"),a=[[G("kills"),t.kills],[G("deaths"),t.deaths],[G("kd"),n],[G("headshots"),r],[G("accuracy"),i],[G("wins"),t.wins],[G("losses"),t.losses],[G("matches"),t.matches],[G("mvp"),t.mvp],[G("plants"),t.plants],[G("defuses"),t.defuses],[G("playtime"),o]];e.innerHTML=`<h1>${G("stats")}</h1><div class="statsGrid">${a.map(([l,c])=>`<div><b>${Te(c)}</b><span>${Te(l)}</span></div>`).join("")}</div><div class="actions"><button data-a="reset">${G("reset_stats")}</button><button class="prim" data-a="back">${G("back")}</button></div>`,e.querySelector("[data-a=back]").addEventListener("click",()=>{ot.play("click"),this.show("menu")}),e.querySelector("[data-a=reset]").addEventListener("click",()=>{confirm(G("reset_stats")+"?")&&(ee.stats={...gc},ee.save(),this.buildStats())})}buildHelp(){let t=pt("help");t.innerHTML=`<h1>${G("help")}</h1><div class="helpText">${G("help_text")}</div><div class="actions"><button class="prim" data-a="back">${G("back")}</button></div>`,t.querySelector("[data-a=back]").addEventListener("click",()=>{ot.play("click"),this.show(this.helpBack||"menu"),this.helpBack=null})}buildPause(){let t=pt("pause");t.innerHTML=`<h1>${G("paused")}</h1><div class="menuBtns"><button class="big" data-a="resume">${G("resume")}</button><button data-a="settings">${G("settings")}</button><button data-a="help">${G("help")}</button><button data-a="leave">${G("leave")}</button></div>`,t.querySelector("[data-a=resume]").addEventListener("click",()=>{ot.play("click"),this.h.onResume()}),t.querySelector("[data-a=settings]").addEventListener("click",()=>{ot.play("click"),this.settingsBack="pause",this.show("settings")}),t.querySelector("[data-a=help]").addEventListener("click",()=>{ot.play("click"),this.helpBack="pause",this.show("help")}),t.querySelector("[data-a=leave]").addEventListener("click",()=>{ot.play("click"),this.h.onLeave()})}applySettings(){let t=ee.settings;Gu(t.lang),ot.setVolume(t.volume),ot.voice=t.voice,ot.lang=t.lang;let e=document.documentElement.style;e.setProperty("--btn-scale",t.btnScale),e.setProperty("--btn-alpha",t.btnAlpha),e.setProperty("--cross",Uo[t.crosshair]||Uo.green),pt("fps").classList.toggle("on",t.showFps),pt("bFire2").classList.toggle("off",!t.leftFire)}enterGame(t){this.G=t,this.hideScreens(),pt("hud").classList.remove("hidden"),document.body.classList.add("ingame"),this.feed=[],this.msgs=[],this.chatLines=[],pt("killfeed").innerHTML="",pt("msg").innerHTML="",pt("chat").innerHTML="",this.slotSig="",this.radarBase=document.createElement("canvas"),this.radarBase.width=t.grid.w*8,this.radarBase.height=t.grid.d*8,Ku(this.radarBase,t.def,t.grid);let e=t.mode!=="gg";document.querySelectorAll("#top .team").forEach(n=>{n.style.visibility=e?"visible":"hidden"}),pt("bBuy").style.display=t.mode==="gg"?"none":""}exitGame(){pt("hud").classList.add("hidden"),document.body.classList.remove("ingame"),this.closeBuy(),pt("board").classList.add("hidden"),this.G=null}message(t,e=2,n=""){this.msgs.push({text:t,until:performance.now()+e*1e3,cls:n}),this.msgs.length>3&&this.msgs.shift(),this.renderMsgs()}renderMsgs(){pt("msg").innerHTML=this.msgs.map(t=>`<div class="${t.cls}">${Te(t.text)}</div>`).join("")}chat(t,e){let n=di[t.team];this.chatLines.push({html:`<span class="${n}" style="color:var(--${n})">${Te(t.name)}</span> <i>(${ln()==="ru"?"\u0440\u0430\u0434\u0438\u043E":"radio"})</i>: ${Te(e)}`,until:performance.now()+6e3}),this.chatLines.length>4&&this.chatLines.shift(),pt("chat").innerHTML=this.chatLines.map(i=>`<div>${i.html}</div>`).join("")}killfeed(t,e,n,i,r){let o=this.G,a=o&&(t===o.player||e===o.player),l=u=>u?`<span class="${di[u.team]}">${Te(u.name)}</span>`:"",c=n==="bomb"?"C4":n==="fall"?G("fall"):Yu(n),h=`${t&&t!==e?l(t):""}<span class="w">${i?'<span class="hs">\u25CE</span>':""}${r?"\u27FF ":""}${Te(c)}</span>${l(e)}`;this.feed.push({html:h,me:a,until:performance.now()+6e3}),this.feed.length>5&&this.feed.shift(),pt("killfeed").innerHTML=this.feed.map(u=>`<div class="${u.me?"me":""}">${u.html}</div>`).join("")}hitmarker(t,e){let n=pt("hitmark");n.className="on"+(e?" kill":t?" hs":""),this.hitT=.12}damageDir(t,e){this.dirs.push({ang:t,until:performance.now()+900,s:Math.min(1,.4+e/50)}),this.dirs.length>4&&this.dirs.shift()}hurt(t){this.hurtT=Math.min(1,this.hurtT+.25+t/80),ee.settings.vibrate&&this.h.vibrate(Math.min(80,20+t))}flash(t){this.flashT=t,this.flashMax=t}money(t){let e=pt("moneyDelta");e.textContent=(t>0?"+$":"-$")+Math.abs(t),e.className="on"+(t<0?" neg":""),clearTimeout(this.moneyTO),this.moneyTO=setTimeout(()=>{e.className=t<0?"neg":""},60)}died(t,e){this.deathInfo=t&&t!==this.G.player?{name:t.name,w:e,hp:t.hp,team:t.team}:null,this.closeBuy()}stat(t,e){ee.stats[t]=(ee.stats[t]||0)+e}shot(){}roundStart(t){let e=this.G;this.message(G("round")+" "+t+" \xB7 "+G("freeze"),2.5,"info"),this.deathInfo=null,e&&e.player.alive&&!e.autopilot&&t===1&&!ee.tutorialSeen&&(ee.tutorialSeen=!0,ee.save(),this.message(Wx(),6,"info"))}roundEnd(t,e,n){let i=t===Et.T?"t_win":"ct_win";this.message(G(i),4,t===Et.T?"win-t":"win-ct"),n&&this.message(G("mvp")+": "+n.name+" ("+n.roundKills+")",4,"info"),this.closeBuy()}bombPlanted(){}matchEnd(t){let e=this.G,n=pt("matchEnd"),i=e.mode==="gg",r=t.won?G("victory"):G("defeat");!i&&t.winnerTeam===-1&&(r=G("draw"));let o=t.actors.map(l=>`<tr class="${l===e.player?"me":""}"><td style="color:var(--${di[l.team]})">${Te(l.name)}</td><td>${l.kills}</td><td>${l.deaths}</td><td>${l.hsKills}</td><td>${Math.round(l.dmgDealt)}</td>${e.mode==="bomb"?`<td>${l.mvps}</td>`:""}</tr>`).join(""),a=i?`${G("leader")}: ${Te(t.winnerActor?t.winnerActor.name:"")}`:`<span class="t">${t.score[0]}</span> : <span class="ct">${t.score[1]}</span>`;n.innerHTML=`<div class="res ${t.won?"win":"lose"}">${r}</div><div class="sc">${a}</div>
      <table><tr><th>${G("name")}</th><th>${G("kills")}</th><th>${G("deaths")}</th><th>${G("headshots")}</th><th>DMG</th>${e.mode==="bomb"?"<th>MVP</th>":""}</tr>${o}</table>
      <div class="actions"><button data-a="menu">${G("menu")}</button><button class="prim" data-a="again">${G("rematch")}</button></div>`,n.querySelector("[data-a=menu]").addEventListener("click",()=>{ot.play("click"),this.h.onLeave()}),n.querySelector("[data-a=again]").addEventListener("click",()=>{ot.play("click"),this.h.onRematch()}),setTimeout(()=>{this.G===e&&(this.closeBuy(),pt("board").classList.add("hidden"),this.show("matchEnd"),this.h.onMatchScreen())},2500),ee.save()}toggleBuy(){this.buyOpen?this.closeBuy():this.openBuy()}openBuy(){let t=this.G;if(!(!t||t.mode==="gg"||!t.player.alive)){if(!t.canBuy(t.player)){this.message(G(t.buyError(t.player,"vest")==="buy_zone"?"buy_zone":"buy_closed"),1.5,"warn"),ot.play("deny");return}this.buyOpen=!0,this.renderBuy(),pt("buy").classList.remove("hidden"),this.h.onBuyOpen(!0)}}closeBuy(){this.buyOpen&&(this.buyOpen=!1,pt("buy").classList.add("hidden"),this.h.onBuyOpen(!1))}renderBuy(){let t=this.G,e=t.player,n=pt("buy"),i=t.mode==="dm",r=pu.map(c=>{let h=c.items.map(u=>{let d=ce[u]||or[u];if(i&&(u==="kit"||d.team!==void 0&&d.team>=0&&!1)||!i&&d.team!==void 0&&d.team>=0&&d.team!==e.team)return"";let p=t.buyError(e,u),g=p==="have_it",x=i?0:u==="vesthelm"&&e.armor>=100&&!e.helmet?350:d.price,m=ce[u]?ce[u].kind==="grenade"?Zu(ce[u].nade):ce[u].name:G(u);return`<button class="item ${p&&!g?"no":""} ${g?"owned":""}" data-k="${u}">${Te(m)}<small>$${x}</small></button>`}).join("");return`<div class="cat"><h3>${G("buy_"+c.cat)}</h3>${h}</div>`}).join(""),o=t.mode==="bomb"?Math.max(0,Math.ceil(Gt.buyTime-(t.time-t.liveStart))):0;n.innerHTML=`<h2><span>${G("buy")}${t.mode==="bomb"&&t.phase==="live"?" \xB7 "+o+"s":""}</span><span class="m">$${e.money}</span></h2><div class="cats">${r}</div>
      <div class="row">${i?"":`<button data-a="rebuy">${G("rebuy")}</button><button data-a="auto">${G("autobuy")}</button>`}<button class="prim" data-a="close">${G("close")}</button></div>`,n.querySelectorAll("[data-k]").forEach(c=>c.addEventListener("pointerup",h=>{h.stopPropagation(),this.h.onBuy(c.dataset.k),this.renderBuy()}));let a=n.querySelector("[data-a=rebuy]");a&&a.addEventListener("pointerup",()=>{this.h.onRebuy(),this.renderBuy()});let l=n.querySelector("[data-a=auto]");l&&l.addEventListener("pointerup",()=>{this.h.onAutobuy(),this.renderBuy()}),n.querySelector("[data-a=close]").addEventListener("pointerup",()=>this.closeBuy())}renderBoard(){let t=this.G,e=t.player,n=o=>{let l=t.actors.filter(h=>t.ffa||h.team===o).sort((h,u)=>u.kills-h.kills||h.deaths-u.deaths).map(h=>{let u=h.team===e.team&&!t.ffa,d=(h.hasBomb&&u?" \u{1F4A3}":"")+(h.kit&&u?" \u2702":""),p=t.mode==="gg"?`<td class="n">${h.ggLevel+1}/${fi.length}</td>`:`<td class="n">${u&&t.mode==="bomb"?"$"+h.money:""}</td>`;return`<tr class="${h===e?"me":""} ${h.alive?"":"dead"}"><td style="color:var(--${di[h.team]})">${Te(h.name)}${d}</td><td class="n">${h.kills}</td><td class="n">${h.deaths}</td>${p}<td class="n">${h.alive?"":G("dead")}</td></tr>`}).join(""),c=t.ffa?ln()==="ru"?"\u0412\u0441\u0435 \u0438\u0433\u0440\u043E\u043A\u0438":"All players":G(di[o])+" \u2014 "+t.score[o];return`<div class="hdr ${t.ffa?"":di[o]}">${c}</div><table><tr><th>${G("name")}</th><th>${G("kills")}</th><th>${G("deaths")}</th><th>${t.mode==="gg"?G("level"):G("money")}</th><th></th></tr>${l}</table>`},i=t.def.name[ln()]||t.def.name.ru,r=t.mode==="bomb"?`${G("round")} ${t.round} \xB7 ${G("first_to",t.setup.rounds)}`:t.mode==="dm"?`${G("frag_limit")}: ${Gt.dmFragLimit}`:G("mode_gg");pt("board").innerHTML=`<div style="opacity:.7;margin-bottom:6px">${Te(i)} \xB7 ${Te(r)}</div>`+(t.ffa?n(0):n(Et.CT)+n(Et.T))}update(t,e,n){let i=performance.now();this.msgs.length&&this.msgs[0].until<i&&(this.msgs=this.msgs.filter(A=>A.until>=i),this.renderMsgs()),this.feed.length&&this.feed[0].until<i&&(this.feed=this.feed.filter(A=>A.until>=i),pt("killfeed").innerHTML=this.feed.map(A=>`<div class="${A.me?"me":""}">${A.html}</div>`).join("")),this.chatLines.length&&this.chatLines[0].until<i&&(this.chatLines=this.chatLines.filter(A=>A.until>=i),pt("chat").innerHTML=this.chatLines.map(A=>`<div>${A.html}</div>`).join(""));let r=t.player,o=e.target;pt("scoreT").textContent=t.score[0],pt("scoreCT").textContent=t.score[1];let a=A=>t.actors.filter(B=>B.team===A&&B.alive).length;pt("aliveT").textContent=t.mode==="bomb"?a(0)+" "+G("t_short"):G("t_short"),pt("aliveCT").textContent=t.mode==="bomb"?a(1)+" "+G("ct_short"):G("ct_short");let l,c=pt("timer");if(t.mode==="bomb"&&t.bomb.planted?(l=t.bomb.timer,c.classList.add("bomb")):(l=t.phase==="live"&&t.mode==="gg"?t.matchTime:t.phaseT,c.classList.remove("bomb")),t.mode==="bomb"&&t.bomb.planted)c.textContent="\u{1F4A3} "+Math.ceil(Math.max(0,l));else{let A=Math.max(0,Math.ceil(l));c.textContent=isFinite(A)?Math.floor(A/60)+":"+String(A%60).padStart(2,"0"):"\u221E"}pt("roundInfo").textContent=t.mode==="bomb"?t.phase==="freeze"?G("freeze"):G("round")+" "+t.round:t.mode==="dm"?G("frag_limit")+" "+Gt.dmFragLimit:G("level")+" "+(r.ggLevel+1)+"/"+fi.length;let h=o||r,u=pt("hp");u.textContent=Math.max(0,Math.ceil(h.hp)),u.classList.toggle("low",h.hp<=25),pt("armor").textContent=Math.ceil(h.armor),pt("gearIcons").textContent=(h.helmet?"\u26D1":"")+(h.kit?"\u2702":"")+(h.hasBomb?"\u{1F4A3}":"");let d=h.w;pt("wname").textContent=d.def.kind==="grenade"?Zu(d.def.nade)+" \xD7"+h.nades[d.def.nade]:d.def.name;let p=pt("clip");d.def.clip?(p.textContent=d.clip,pt("reserve").textContent=d.reserve>900?"\u221E":d.reserve,p.classList.toggle("empty",d.clip<=Math.ceil(d.def.clip*.2)),pt("ammobox").style.visibility="visible"):pt("ammobox").style.visibility=(d.def.kind,"hidden"),pt("money").textContent=r.money,pt("moneybox").style.display=t.mode==="bomb"?"":"none";let g=pt("spec");if(r.alive)g.classList.remove("on");else{g.classList.add("on");let A="";this.deathInfo&&(A+=`${G("killed_by")}: <b style="color:var(--${di[this.deathInfo.team]})">${Te(this.deathInfo.name)}</b> (${Te(Yu(this.deathInfo.w))}, ${Math.max(0,Math.ceil(this.deathInfo.hp))} HP)`),t.mode!=="bomb"?A+=`<small>${G("respawn_in")} ${Math.max(0,r.respawnT).toFixed(1)}</small>`:o&&o!==r&&(A+=`<small>${G("spectating")}: ${Te(o.name)}</small>`),g.innerHTML=A}let x=pt("progress"),m=o||r;if(m.alive&&(m.plantT>0||m.defuseT>0)){x.classList.add("on");let A=m.plantT>0?Gt.plantTime:m.kit?Gt.defuseKitTime:Gt.defuseTime,B=m.plantT>0?m.plantT:m.defuseT;pt("progText").textContent=G(m.plantT>0?"planting":"defusing"),pt("progFill").style.width=Math.min(100,B/A*100)+"%"}else x.classList.remove("on");let f="",S=!1;r.alive&&t.mode==="bomb"&&t.phase==="live"&&(r.hasBomb&&t.siteAt(r.x,r.z)?(f=G("plant_hint"),S=!0):t.bomb.planted&&r.team===Et.CT&&Math.hypot(r.x-t.bomb.x,r.z-t.bomb.z)<1.6&&(f=G("defuse_hint"),S=!0)),r.alive&&!S&&t.nearestDrop(r)&&(S=!0),pt("hint").textContent=r.plantT>0||r.defuseT>0?"":f,pt("bUse").classList.toggle("on",S||r.plantT>0||r.defuseT>0),pt("bCrouch").classList.toggle("active",!!e.crouchHeld),pt("bBuy").classList.toggle("off",!t.canBuy(r));let w=pt("cross"),v=e.scoped;w.classList.toggle("hide",v||!r.alive||d.def.kind==="sniper"),document.documentElement.style.setProperty("--gap",e.gap.toFixed(1)+"px"),pt("scope").classList.toggle("on",v),this.hitT>0&&(this.hitT-=n,this.hitT<=0&&(pt("hitmark").className="")),this.hurtT=Math.max(0,this.hurtT-n*.9);let P=r.alive&&r.hp<30?.35+Math.sin(i/250)*.1:0;pt("hurtOv").style.opacity=Math.max(this.hurtT,P),this.flashT>0&&(this.flashT-=n);let T=this.flashT>0?Math.min(1,this.flashT/Math.max(.5,this.flashMax*.55)):0;pt("flashOv").style.opacity=T,pt("smokeOv").style.opacity=e.smoke*.92;let C=pt("dmgdirs");this.dirs=this.dirs.filter(A=>A.until>i);let R="";for(let A of this.dirs){let B=Math.PI+e.yaw-A.ang;R+=`<div style="transform:rotate(${(B*180/Math.PI).toFixed(1)}deg);opacity:${((A.until-i)/900*A.s).toFixed(2)}"></div>`}if(C.innerHTML=R,this.updateSlots(h),e.fps!==void 0&&(pt("fps").textContent=e.fps+" FPS"),this.radarT-=n,this.radarT<=0&&(this.radarT=1/15,this.drawRadar(t,e)),this.buyOpen){if(!t.canBuy(r))this.closeBuy();else if((this.buyRefresh=(this.buyRefresh||0)-n)<=0){this.buyRefresh=1;let A=pt("buy").querySelector("h2 span");A&&t.mode==="bomb"&&t.phase==="live"&&(A.textContent=G("buy")+" \xB7 "+Math.max(0,Math.ceil(Gt.buyTime-(t.time-t.liveStart)))+"s")}}let M=pt("board"),y=e.score||t.phase==="post"&&t.pendingEnd;M.classList.toggle("hidden",!y),y&&(this.boardT=(this.boardT||0)-n)<=0&&(this.boardT=.5,this.renderBoard())}updateSlots(t){let e=[],n=(o,a,l)=>e.push({slot:o,label:a,sub:l});t.slots[0]&&n(0,t.slots[0].def.name,"1"),t.slots[1]&&n(1,t.slots[1].def.name,"2"),n(2,ce.knife.name==="\u041D\u043E\u0436"&&ln()==="ru"?"\u041D\u043E\u0436":"Knife","3");let i=t.nades;i.he+i.flash+i.smoke>0&&n(3,[i.he?"HE":"",i.flash?"FB"+(i.flash>1?"\xD72":""):"",i.smoke?"SG":""].filter(Boolean).join(" "),"4"),t.hasBomb&&n(4,"C4","5");let r=e.map(o=>o.slot+o.label).join("|")+"#"+t.slot;r!==this.slotSig&&(this.slotSig=r,pt("slots").innerHTML=e.map(o=>`<div data-act="slot${o.slot+1}" class="${t.slot===o.slot?"cur":""}"><small>${o.sub}</small>${Te(o.label)}</div>`).join(""))}drawRadar(t,e){let n=pt("radar"),i=n.getContext("2d"),r=n.width,o=n.height;i.clearRect(0,0,r,o),i.save(),i.beginPath(),i.arc(r/2,o/2,r/2-1,0,Math.PI*2),i.clip(),i.fillStyle="rgba(0,0,0,0.55)",i.fillRect(0,0,r,o);let a=e.x,l=e.z,c=2.6,h=c/(8/xt);i.translate(r/2,o/2),i.rotate(e.yaw),i.globalAlpha=.85,i.drawImage(this.radarBase,-a*c,-l*c,this.radarBase.width*h,this.radarBase.height*h),i.globalAlpha=1;let u=(p,g,x,m=4)=>{i.fillStyle=x,i.beginPath(),i.arc((p-a)*c,(g-l)*c,m,0,Math.PI*2),i.fill()},d=t.player;for(let p of t.actors){if(!p.alive||p===e.target)continue;!t.ffa&&p.team===d.team?u(p.x,p.z,p.team===Et.T?"#ffcf7a":"#a8cbff",4):t.time-p.spotted<1.2&&t.mode==="bomb"&&u(p.x,p.z,"#ff3b30",4.5)}if(t.mode==="bomb"&&(d.team===Et.T||t.bomb.planted)){let p=t.bomb,g=t.actors.find(x=>x.alive&&x.hasBomb);p.planted||p.dropped?(Math.floor(t.time*4)%2||p.dropped)&&u(p.x,p.z,"#ff2a1a",5):g&&g!==e.target&&(i.strokeStyle="#ff6a40",i.lineWidth=2,i.beginPath(),i.arc((g.x-a)*c,(g.z-l)*c,6.5,0,Math.PI*2),i.stroke())}i.restore(),i.fillStyle="#fff",i.beginPath(),i.moveTo(r/2,o/2-8),i.lineTo(r/2-5,o/2+5),i.lineTo(r/2+5,o/2+5),i.closePath(),i.fill(),i.strokeStyle="rgba(255,255,255,0.25)",i.lineWidth=1,i.beginPath(),i.moveTo(r/2,o/2),i.lineTo(r/2-r*.32,4),i.moveTo(r/2,o/2),i.lineTo(r/2+r*.32,4),i.stroke()}};function Wx(){let s=!document.body.classList.contains("desktop");return ln()==="ru"?s?"\u0421\u043B\u0435\u0432\u0430 \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u0441\u043F\u0440\u0430\u0432\u0430 \u2014 \u043E\u0431\u0437\u043E\u0440. $ \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430":"WASD \u2014 \u0434\u0432\u0438\u0436\u0435\u043D\u0438\u0435, \u043C\u044B\u0448\u044C \u2014 \u043E\u0431\u0437\u043E\u0440, B \u2014 \u0437\u0430\u043A\u0443\u043F\u043A\u0430":s?"Left side moves, right side looks. $ opens the buy menu":"WASD move, mouse look, B buy menu"}var As={KeyW:"fwd",ArrowUp:"fwd",KeyS:"back",ArrowDown:"back",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",Space:"jump",ControlLeft:"crouch",ControlRight:"crouch",KeyC:"crouch",ShiftLeft:"walk",ShiftRight:"walk",KeyE:"use",Tab:"score"},Xx={KeyR:"reload",Digit1:"slot1",Digit2:"slot2",Digit3:"slot3",Digit4:"slot4",Digit5:"slot5",KeyQ:"last",KeyG:"drop",KeyB:"buy",Escape:"menu",KeyP:"menu",Space:"jump",KeyF:"scope",KeyV:"radio"},xc=class{constructor(){this.move={x:0,y:0},this.lookDX=0,this.lookDY=0,this.held={fire:!1,fire2:!1,jump:!1,crouch:!1,walk:!1,use:!1,score:!1},this.keys={},this.pressed=new Set,this.touches=new Map,this.touchMode="ontouchstart"in window||navigator.maxTouchPoints>0,this.crouchToggle=!1,this.enabled=!1,this.sens=1,this.mouseSens=1,this.invertY=!1,this.onAnyPress=null,this.joy=null}attach(t,e){this.canvas=t,this.layer=e,this.joyEl=document.getElementById("joy"),this.joyKnob=document.getElementById("joyKnob"),window.addEventListener("keydown",i=>{if(i.repeat){(As[i.code]||i.code==="Tab")&&i.preventDefault();return}(i.code==="Tab"||i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),this.keys[i.code]=!0;let r=Xx[i.code];r&&this.pressed.add(r),As[i.code]==="crouch"&&(this.crouchToggle=!1),this.updateKeys(),this.onAnyPress&&this.onAnyPress(i.code)}),window.addEventListener("keyup",i=>{this.keys[i.code]=!1,this.updateKeys()}),window.addEventListener("blur",()=>{this.keys={},this.updateKeys(),this.held.fire=this.held.fire2=!1}),e.addEventListener("mousedown",i=>{if(!(!this.enabled||i.target.closest("[data-act]"))){if(document.pointerLockElement!==t){this.lock();return}i.button===0&&(this.held.fire=!0),i.button===2&&(this.held.fire2=!0,this.pressed.add("scope"))}}),window.addEventListener("mouseup",i=>{i.button===0&&(this.held.fire=!1),i.button===2&&(this.held.fire2=!1)}),window.addEventListener("contextmenu",i=>i.preventDefault()),window.addEventListener("mousemove",i=>{document.pointerLockElement===t&&(this.lookDX+=i.movementX*.0022*this.mouseSens,this.lookDY+=i.movementY*.0022*this.mouseSens*(this.invertY?-1:1))}),window.addEventListener("wheel",i=>{this.enabled&&this.pressed.add(i.deltaY>0?"next":"prev")},{passive:!0}),document.addEventListener("pointerlockchange",()=>{document.pointerLockElement!==t&&this.enabled&&!this.touchMode&&this.pressed.add("unlocked")});let n={passive:!1};e.addEventListener("pointerdown",i=>this.pDown(i),n),window.addEventListener("pointermove",i=>this.pMove(i),n),window.addEventListener("pointerup",i=>this.pUp(i),n),window.addEventListener("pointercancel",i=>this.pUp(i),n)}lock(){if(!(this.touchMode||!this.canvas.requestPointerLock))try{let t=this.canvas.requestPointerLock();t&&t.catch&&t.catch(()=>{})}catch{}}unlock(){document.pointerLockElement&&document.exitPointerLock()}updateKeys(){let t=e=>Object.keys(As).some(n=>As[n]===e&&this.keys[n]);this.joy||(this.move.x=(t("right")?1:0)-(t("left")?1:0),this.move.y=(t("fwd")?1:0)-(t("back")?1:0)),this.held.jump=t("jump"),this.held.walk=t("walk"),this.held.use=t("use")||this.touchUse,this.held.score=t("score")||this.touchScore,this.crouchToggle||(this.held.crouch=t("crouch"))}pDown(t){if(t.pointerType==="mouse")return;this.touchMode=!0,t.preventDefault();let e=t.target.closest("[data-act]"),n=t.clientX,i=t.clientY;if(e){let r=e.dataset.act;this.touches.set(t.pointerId,{type:"btn",act:r,x:n,y:i,el:e}),e.classList.add("down"),this.buttonDown(r);return}this.enabled&&(n<window.innerWidth*.42&&!this.joy?(this.joy={id:t.pointerId,ox:n,oy:i},this.touches.set(t.pointerId,{type:"joy",x:n,y:i}),this.joyEl&&(this.joyEl.style.left=n+"px",this.joyEl.style.top=i+"px",this.joyEl.classList.add("on")),this.setJoy(n,i)):this.touches.set(t.pointerId,{type:"look",x:n,y:i}))}setJoy(t,e){let n=55*(this.btnScale||1),i=(t-this.joy.ox)/n,r=(e-this.joy.oy)/n,o=Math.hypot(i,r);o>1&&(i/=o,r/=o),o>1.6&&(this.joy.ox=t-i*n*1.6,this.joy.oy=e-r*n*1.6,this.joyEl&&(this.joyEl.style.left=this.joy.ox+"px",this.joyEl.style.top=this.joy.oy+"px"));let a=.12,l=Math.hypot(i,r),c=l<a?0:(l-a)/(1-a)/(l||1);this.move.x=i*c,this.move.y=-r*c,this.held.walk=l<.55&&l>=a,this.joyKnob&&(this.joyKnob.style.transform=`translate(${i*n}px, ${r*n}px)`)}pMove(t){let e=this.touches.get(t.pointerId);if(!e)return;t.preventDefault();let n=t.clientX,i=t.clientY;if(e.type==="joy"){this.setJoy(n,i);return}if(e.type==="look"||e.type==="btn"&&(e.act==="fire"||e.act==="fire2")){let r=.0048*this.sens;this.lookDX+=(n-e.x)*r,this.lookDY+=(i-e.y)*r*(this.invertY?-1:1)}e.x=n,e.y=i}pUp(t){let e=this.touches.get(t.pointerId);e&&(this.touches.delete(t.pointerId),e.type==="joy"?(this.joy=null,this.move.x=this.move.y=0,this.held.walk=!1,this.joyEl&&this.joyEl.classList.remove("on"),this.joyKnob&&(this.joyKnob.style.transform=""),this.updateKeys()):e.type==="btn"&&(e.el.classList.remove("down"),this.buttonUp(e.act)))}buttonDown(t){switch(t){case"fire":case"fire2":this.held.fire=!0;break;case"jump":this.held.jump=!0,this.pressed.add("jump");break;case"crouch":this.crouchToggle=!0,this.held.crouch=!this.held.crouch;break;case"use":this.touchUse=!0,this.held.use=!0;break;case"score":this.touchScore=!this.touchScore,this.held.score=this.touchScore;break;default:this.pressed.add(t)}}buttonUp(t){switch(t){case"fire":case"fire2":{let e=!1;for(let n of this.touches.values())n.type==="btn"&&(n.act==="fire"||n.act==="fire2")&&(e=!0);this.held.fire=e;break}case"jump":this.held.jump=!1,this.updateKeys();break;case"use":this.touchUse=!1,this.updateKeys();break;default:break}}pollGamepad(t){let e=navigator.getGamepads?navigator.getGamepads():[],n=e&&Array.from(e).find(d=>d&&d.connected);if(!n){this.padActive&&(this.padActive=!1,this.held.fire=!1);return}let i=d=>Math.abs(d)<.15?0:d,r=i(n.axes[0]),o=i(n.axes[1]),a=i(n.axes[2]),l=i(n.axes[3]);if((r||o||a||l||n.buttons.some(d=>d.pressed))&&(this.padActive=!0),!this.padActive)return;!this.joy&&!Object.values(this.keys).some(Boolean)&&(this.move.x=r,this.move.y=-o),this.lookDX+=Math.sign(a)*a*a*t*3.2*this.sens,this.lookDY+=Math.sign(l)*l*l*t*2.4*this.sens*(this.invertY?-1:1);let c=d=>n.buttons[d]&&n.buttons[d].pressed,h=this.padPrev||[],u=(d,p)=>{c(d)&&!h[d]&&this.pressed.add(p)};this.held.fire=c(7)||this.held.fire&&this.touches.size>0,u(6,"scope"),u(0,"jump"),u(2,"reload"),u(3,"next"),u(4,"prev"),u(5,"next"),u(9,"menu"),u(8,"buy"),u(12,"slot1"),u(13,"slot3"),this.held.jump=c(0),this.held.crouch=c(1)||c(11),this.held.use=c(14)||this.touchUse||Object.keys(As).some(d=>As[d]==="use"&&this.keys[d]),this.padPrev=n.buttons.map(d=>d.pressed)}consume(t){return this.pressed.has(t)?(this.pressed.delete(t),!0):!1}takeLook(){let t=[this.lookDX,this.lookDY];return this.lookDX=this.lookDY=0,t}reset(){this.pressed.clear(),this.lookDX=this.lookDY=0,this.held.fire=this.held.fire2=!1,this.held.crouch=!1,this.crouchToggle=!1,this.touchUse=!1,this.touchScore=!1,this.held.use=!1,this.held.score=!1;for(let t of this.touches.values())t.el&&t.el.classList.remove("down");this.touches.clear(),this.joy=null,this.move.x=this.move.y=0,this.joyEl&&this.joyEl.classList.remove("on")}},Lt=new xc;var gi=new URLSearchParams(location.search),Ps=gi.has("autotest"),nd=document.getElementById("c"),yc=window.AndroidBridge,Ne;try{Ne=new ao({canvas:nd,antialias:!1,powerPreference:"high-performance",stencil:!1})}catch(s){throw document.body.innerHTML='<div style="color:#fff;font:20px sans-serif;padding:40px">WebGL is not available on this device.</div>',s}Ne.outputColorSpace=De;Ne.autoClear=!1;Ne.info.autoReset=!1;Ne.shadowMap.type=kl;var qx=Math.min(4,Ne.capabilities.getMaxAnisotropy()),Qt=new Fe(90,1,.05,500);Qt.rotation.order="YXZ";var Bo=new tr,Fi=new Fe(62,1,.01,10);Bo.add(Fi);Bo.add(new xs(15133941,6969928,2.3));var id=new ys(16777215,1.5);id.position.set(.5,1,.3);Bo.add(id);var hn=null,Fo=null,xi=null,vt=null,Cs=null,Tc=null,zo="medium",Ni=1,He="menu",An=!1,cn=null,_c="",Ju=-1,Re={bobPhase:0,swayX:0,swayY:0,flashT:0,lastSlot:-1,switchMax:.5,landKick:0},vc=0,bc=0,ju=!1,Rs=0,Se={frames:0,acc:0,fps:60,lowT:0,highT:0};function Yx(){let s=ee.settings.quality;return s!=="auto"?s:/Android|iPhone|iPad|Mobile/i.test(navigator.userAgent)?"medium":"high"}function hr(){let s=window.innerWidth,t=window.innerHeight,e=Ql[zo],n=Math.min(window.devicePixelRatio||1,2);Ne.setPixelRatio(n*e.pixelRatio*Ni/Math.max(1,n*.75)),Ne.setSize(s,t,!1),Qt.aspect=s/t,Qt.updateProjectionMatrix(),Fi.aspect=s/t,Fi.updateProjectionMatrix(),xi&&xi.setCamera(Qt,t*Ne.getPixelRatio(),hn.fog)}window.addEventListener("resize",hr);function ko(s){hn&&hn.traverse(e=>{e.geometry&&e.isMesh&&!e.userData.shared&&e.geometry.dispose()}),zo=Yx(),hn=new tr,Tc=s,Cs=new pi(s);let t=Ql[zo];Ne.shadowMap.enabled=t.shadows,Fo=Mu(Cs,s,t,qx),hn.add(Fo.group),bu(hn,Fo.theme,Cs,t),hn.background=new It(Fo.theme.skyBottom),xi=new Ro(hn,t),Qt.far=t.drawDist+400,hr()}var Me=new No({onStart(s){Sc(s)},onResume(){Oo(!1)},onLeave(){rd()},onRematch(){let s=vt?vt.setup:ee.setup;Sc({...s})},onSettings(){sd(),ee.settings.quality!=="auto"&&ee.settings.quality!==zo&&He==="menu"&&ko(Tc),hr()},onBuy(s){vt&&vt.buy(vt.player,s)},onRebuy(){vt&&vt.rebuy()},onAutobuy(){vt&&vt.autobuy()},onBuyOpen(s){s?Lt.unlock():He==="game"&&!An&&Lt.lock()},onMatchScreen(){He="over",Lt.enabled=!1,Lt.unlock()},vibrate(s){yc&&yc.vibrate?yc.vibrate(s):navigator.vibrate&&(!navigator.userActivation||navigator.userActivation.hasBeenActive)&&navigator.vibrate(s)}});function sd(){Lt.sens=ee.settings.sens,Lt.mouseSens=ee.settings.mouseSens,Lt.invertY=ee.settings.invertY,Lt.btnScale=ee.settings.btnScale}function Sc(s){Me.show("loading"),setTimeout(()=>{vt&&(vt.dispose(),vt=null);let t=$n.find(e=>e.id===s.map)||$n[0];t.modes.includes(s.mode)||(s.mode=t.modes[0]),ko(t),vt=new Lo({def:t,scene:hn,fx:xi,ui:Me,setup:s,playerName:G("you"),autopilot:Ps}),vt.start(),Me.enterGame(vt),He="game",An=!1,Lt.reset(),Lt.enabled=!0,Lt.lock(),ot.startAmbience(t.theme),bc=0,Rs=vt.player.y},30)}function rd(){vt&&(vt.dispose(),vt=null),ot.stopAmbience(),Me.exitGame(),He="menu",An=!1,Lt.enabled=!1,Lt.unlock(),od(null),ee.save(),ko($n[0]),Me.show("menu")}function Oo(s){He==="game"&&(An=s,s?(Me.closeBuy(),Me.show("pause"),Lt.unlock(),Lt.reset(),ot.stopAmbience()):(Me.hideScreens(),Lt.lock(),ot.startAmbience(Tc.theme)))}window.onAndroidBack=()=>He==="game"?Me.buyOpen?(Me.closeBuy(),"handled"):(Oo(!An),"handled"):He==="over"?(rd(),"handled"):Me.screen&&Me.screen!=="menu"?(Me.show(Me.screen==="settings"&&Me.settingsBack==="pause"?"pause":"menu"),"handled"):"exit";window.onAndroidPause=()=>{He==="game"&&!An&&!Ps&&Oo(!0),ot.suspend()};window.onAndroidResume=()=>{ot.resume()};document.addEventListener("visibilitychange",()=>{document.hidden?window.onAndroidPause():ot.resume()});function od(s){if(!s||!s.alive){cn&&(Fi.remove(cn),cn=null,_c="");return}let t=s.w,e=t.key;e===_c&&s.team===Ju&&cn||(cn&&Fi.remove(cn),cn=Lu(e,t.def.kind,s.team),Fi.add(cn),_c=e,Ju=s.team,Re.switchMax=Math.max(.3,s.switchT))}function $x(s,t,e,n){if(!cn)return;let i=cn.userData,r=s.w.def,o=i.holder,a=Math.min(1,s.speed2d/6);s.onGround&&(Re.bobPhase+=t*(4+a*7)*(a>.05?1:.3));let l=a*(s.onGround?1:.2);Re.swayX+=(-e*.6-Re.swayX)*Math.min(1,t*10),Re.swayY+=(n*.6-Re.swayY)*Math.min(1,t*10);let c=i.base.x+Math.sin(Re.bobPhase)*.012*l+Re.swayX*.04,h=i.base.y-Math.abs(Math.cos(Re.bobPhase))*.012*l+Re.swayY*.04-s.crouch*.01,u=i.base.z,d=i.baseRot.x,p=i.baseRot.y+Re.swayX*.3,g=0;if(s.onGround||(h-=.015,d+=.05),Re.landKick=Math.max(0,Re.landKick-t*4),h-=Re.landKick*.03,s.switchT>0){let x=s.switchT/Re.switchMax;h-=.22*x*x,d-=.6*x}if(s.reloadT>0&&r.reload){let x=1-s.reloadT/r.reload,m=r.shellReload?Math.sin(Math.min(1,x)*Math.PI)*.4:Math.sin(Math.min(1,x)*Math.PI);h-=.08*m,d-=.5*m,g+=.35*m,c-=.02*m}if(r.kind==="knife"){let x=s.fireAnim;if(x>0){let m=Math.sin((1-x)*Math.PI);p+=.9*m,d-=.5*m,c-=.08*m,u-=.06*m}}else if(r.kind==="grenade"){if(s.throwT>0&&(h+=.03,u+=.08,d+=.5),s.fireAnim>0){let x=Math.sin(s.fireAnim*Math.PI);u-=.15*x,d-=.8*x}}else if(r.kind==="bomb")s.plantT>0&&(h-=.05,d+=.25,c+=Math.sin(s.plantT*22)*.003);else{let x=s.fireAnim,m=r.kind==="sniper"||s.w.key==="deagle"||r.kind==="shotgun"?1.8:1;u+=x*.035*m,d+=x*.06*m,h+=x*.006}o.position.set(c,h,u),o.rotation.set(d,p,g),Re.flashT-=t,i.flash.visible=Re.flashT>0,i.flash.visible&&(i.flash.material.rotation=Math.random()*6),cn.visible=!(s.scope>0&&r.kind==="sniper")}Me.shot=s=>{vt&&s===vt.viewActor&&(Re.flashT=.045)};var Zx=["slot1","slot2","slot3","slot4","slot5"];function Kx(s,t){let e=s.x,n=s.y+s.eyeHeight(),i=s.z,r=null,o=t;for(let a of vt.actors)if(!(!a.alive||!vt.isEnemy(s,a)))for(let l of[a.eyeHeight(),a.bodyHeight()*.65]){let c=a.x-e,h=a.y+l-n,u=a.z-i,d=Math.hypot(c,h,u);if(d>70)continue;let p=Math.atan2(-c,-u),g=Math.atan2(h,Math.hypot(c,u)),x=p-s.yaw;x=Math.atan2(Math.sin(x),Math.cos(x));let m=g-s.pitch,f=Math.hypot(x,m)*d/Math.max(4,d);f<o&&vt.grid.los(e,n,i,a.x,a.y+l,a.z)&&!xi.smokeBlocks(e,n,i,a.x,a.y+l,a.z)&&(o=f,r={e:a,dyaw:x,dp:m,d})}return r}function Jx(s){let t=vt.player,[e,n]=Lt.takeLook(),i=e,r=n,o=Qt.fov/ee.settings.fov;i*=o,r*=o;let a=ee.settings,l=Lt.touchMode,c=null;if(t.alive&&a.aimAssist&&l&&t.w.def.kind!=="knife"&&t.w.def.kind!=="grenade"&&(c=Kx(t,.12),c)){i*=.6,r*=.6;let f=(Lt.held.fire?3.2:Math.abs(e)+Math.abs(n)>0?1.2:0)*s;t.yaw+=c.dyaw*Math.min(1,f),t.pitch+=c.dp*Math.min(1,f)}t.alive&&(t.yaw-=i,t.pitch=Math.max(-1.5,Math.min(1.5,t.pitch-r)));let h={wx:0,wz:0,walk:Lt.held.walk,crouch:Lt.held.crouch,jump:Lt.held.jump||Lt.consume("jump"),fire:Lt.held.fire,alt:Lt.consume("scope"),use:Lt.held.use,usePressed:!1,reload:Lt.consume("reload"),slot:null,drop:Lt.consume("drop")};h.usePressed=h.use&&!ju,ju=h.use;let u=Lt.move,d=-Math.sin(t.yaw),p=-Math.cos(t.yaw),g=Math.cos(t.yaw),x=-Math.sin(t.yaw);h.wx=d*u.y+g*u.x,h.wz=p*u.y+x*u.x,Zx.forEach((f,S)=>{Lt.consume(f)&&(h.slot=S)}),Lt.consume("last")&&(h.slot=t.has(t.lastSlot)?t.lastSlot:t.bestSlot());let m=Lt.consume("next")?1:Lt.consume("prev")?-1:0;if(m)for(let f=1;f<=5;f++){let S=(t.slot+m*f+10)%5;if(t.has(S)){h.slot=S;break}}if(a.autoFire&&t.alive&&t.w.def.clip&&!h.fire){let f=t.x,S=t.y+t.eyeHeight(),w=t.z,v=t.forward({x:0,y:0,z:0});for(let P of vt.actors){if(!P.alive||!vt.isEnemy(t,P))continue;let T=Co(P,f,S,w,v.x,v.y,v.z,80);if(T&&vt.grid.los(f,S,w,f+v.x*T.t*.98,S+v.y*T.t*.98,w+v.z*T.t*.98)){h.fire=!0;break}}}return Me.buyOpen&&(h.fire=!1,h.alt=!1),{cmd:h,lookDX:i,lookDY:r}}function jx(){(Lt.consume("menu")||Lt.consume("unlocked"))&&(Me.buyOpen?Me.closeBuy():Ps||Oo(!An)),Lt.consume("buy")&&Me.toggleBuy()}function Qx(){let s=vt.player;if(s.alive)return s;if(vt.mode!=="bomb")return null;let t=vt.actors.filter(n=>n.alive&&n.team===s.team),e=t.length?t:vt.actors.filter(n=>n.alive);return e.length?(Lt.consume("fire_tap")&&bc++,e[bc%e.length]):null}var Qu=!1;function ty(s,t){let e=vt.player,i=ee.settings.fov;if(t){Rs+=(t.y-Rs)*Math.min(1,s*14),Math.abs(t.y-Rs)>1.2&&(Rs=t.y);let r=Rs+t.eyeHeight();Qt.position.set(t.x,r,t.z);let o=vt.shakeAmt+vc;Qt.rotation.set(t.pitch+t.punchP*.55+(Math.random()-.5)*o*.03,t.yaw+t.punchY*.55+(Math.random()-.5)*o*.03,(Math.random()-.5)*o*.01),t.scope&&t.w.def.kind==="sniper"&&(i=t.scope===1?40:t.w.def.zoom>=4?15:25)}else{let r=e.lastAttacker&&e.lastAttacker.alive?e.lastAttacker:null,o=Math.min(1,e.deathT/1.2),a=e.x,l=e.y+1.6+o*2.4,c=e.z;Qt.position.set(a+Math.sin(e.yaw)*o*2.5,l,c+Math.cos(e.yaw)*o*2.5),r?Qt.lookAt(r.x,r.y+1.2,r.z):Qt.lookAt(e.x,e.y+.3,e.z)}Math.abs(Qt.fov-i)>.01&&(Qt.fov=i>Qt.fov?Math.min(i,Qt.fov+s*220):i<50?i:Math.max(i,Qt.fov-s*220),Qt.updateProjectionMatrix(),xi.setCamera(Qt,window.innerHeight*Ne.getPixelRatio(),hn.fog)),vc=Math.max(0,vc-s*3)}var td=performance.now(),Mc=0;function ad(s){requestAnimationFrame(ad);let t=Math.min(.05,(s-td)/1e3);if(td=s,Se.frames++,Se.acc+=t,Se.acc>=1&&(Se.fps=Math.round(Se.frames/Se.acc),Se.frames=0,Se.acc=0,ee.settings.quality==="auto"&&He==="game"&&!An&&(Se.fps<38?(Se.lowT++,Se.highT=0):Se.fps>57?(Se.highT++,Se.lowT=0):Se.lowT=Se.highT=0,Se.lowT>=2&&Ni>.55&&(Ni=Math.max(.55,Ni-.15),Se.lowT=0,hr()),Se.highT>=4&&Ni<1&&(Ni=Math.min(1,Ni+.1),Se.highT=0,hr()))),Lt.pollGamepad(t),He==="menu"||!vt){if(Mc+=t*.05,Cs){let e=Cs.w*xt/2,n=Cs.d*xt/2,i=Math.max(e,n)*.9;Qt.position.set(e+Math.cos(Mc)*i,26,n+Math.sin(Mc)*i),Qt.lookAt(e,0,n),Qt.fov!==60&&(Qt.fov=60,Qt.updateProjectionMatrix())}ed();return}if((He==="game"||He==="over")&&(jx(),!An)){let e=wc.speed,n={cmd:null,lookDX:0,lookDY:0};He==="game"&&(n=Jx(t)),!vt.player.alive&&Lt.held.fire&&!Qu&&Lt.pressed.add("fire_tap"),Qu=Lt.held.fire;let i=Math.ceil(e);for(let h=0;h<i;h++)vt.update(t*e/i,n.cmd),h===0&&n.cmd&&(n.cmd.reload=!1,n.cmd.alt=!1,n.cmd.slot=null,n.cmd.drop=!1,n.cmd.usePressed=!1);xi.update(t*e);let r=Qx();vt.viewActor=r||vt.player,vt.listenerActor=vt.viewActor,od(r),r&&(r.slot!==Re.lastSlot&&(Re.lastSlot=r.slot),$x(r,t,n.lookDX,n.lookDY)),ty(t,r);let o=vt.viewActor;ot.setListener(Qt.position.x,Qt.position.y,Qt.position.z,o.alive?o.yaw:vt.player.yaw);let a=r?mc(r,r.w.def)+Math.min(.06,r.punchP*.3):0,l=4+Math.tan(a)/Math.tan(Mo.degToRad(Qt.fov)/2)*window.innerHeight*.5,c=xi.smokeAt(Qt.position.x,Qt.position.y,Qt.position.z);Me.update(vt,{target:r,x:Qt.position.x,z:Qt.position.z,yaw:r?r.yaw:vt.player.yaw,scoped:!!(r&&r.scope&&r.w.def.kind==="sniper"),gap:Math.min(60,l),smoke:c,score:Lt.held.score||vt.phase==="post"&&!1,fps:Se.fps,crouchHeld:Lt.held.crouch},t),He==="game"&&!Ps&&(ee.stats.time+=t),Ps&&wc.tick(t*e)}ed()}function ed(){hn&&(Ne.info.reset(),Ne.clear(),Ne.render(hn,Qt),cn&&He==="game"&&!An&&(Ne.clearDepth(),Ne.render(Bo,Fi)))}var wc={speed:parseFloat(gi.get("speed")||"1"),time:0,errors:[],tick(s){this.time+=s;let t=vt.player;window.__report={time:this.time,round:vt.round,score:vt.score.slice(),phase:vt.phase,over:vt.over,kills:vt.actors.reduce((e,n)=>e+n.kills,0),deaths:vt.actors.reduce((e,n)=>e+n.deaths,0),player:{alive:t.alive,hp:t.hp,x:t.x,z:t.z,money:t.money,kills:t.kills,weapon:t.w.key},bomb:{planted:vt.bomb.planted,exploded:!!vt.bomb.exploded,defused:!!vt.bomb.defused},fps:Se.fps,errors:this.errors,ggTop:Math.max(...vt.actors.map(e=>e.ggLevel)),stuck:vt.actors.filter(e=>e.alive&&e.brain&&e.brain.stuckN>3).length,calls:Ne.info.render.calls,tris:Ne.info.render.triangles}}};window.addEventListener("error",s=>wc.errors.push(String(s.message)));window.__game=()=>vt;window.__ui=Me;window.__input=Lt;document.body.classList.toggle("desktop",!Lt.touchMode);Lt.attach(nd,document.getElementById("touch"));Lt.onAnyPress=()=>ot.init();window.addEventListener("pointerdown",()=>{ot.init(),Lt.touchMode&&document.body.classList.remove("desktop")},{capture:!0});window.addEventListener("pointerdown",s=>{s.pointerType==="mouse"&&!("ontouchstart"in window)&&document.body.classList.add("desktop")},{capture:!0});sd();ko($n[0]);requestAnimationFrame(ad);if(Ps){let s={map:gi.get("map")||"sands",mode:gi.get("mode")||"bomb",team:gi.get("team")||"auto",bots:parseInt(gi.get("bots")||"4",10),diff:gi.get("diff")||"normal",rounds:parseInt(gi.get("rounds")||"3",10),ff:!1};Sc(s)}else Me.show("menu");})();
