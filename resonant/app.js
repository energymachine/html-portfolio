var Gu=0,Cc=1,Wu=2;var Qr=1,Xu=2,Ys=3,Qn=0,Gt=1,Tn=2,is=0,$s=1,Pc=2,Ic=3,Lc=4,qu=5;var ss=100,Yu=101,$u=102,Zu=103,Ju=104,Ku=200,Qu=201,ju=202,ed=203,Dc=204,Nc=205,td=206,nd=207,id=208,sd=209,rd=210,ad=211,od=212,ld=213,cd=214,ja=0,eo=1,to=2,Ls=3,no=4,io=5,so=6,ro=7,No=0,hd=1,ud=2,wn=0,Uc=1,Fc=2,Oc=3,Bc=4,zc=5,kc=6,Hc=7;var Vc=300,rs=301,Zs=302,Uo=303,Fo=304,Ds=1e3,xn=1001,On=1002,Ot=1003,dd=1004;var jr=1005;var an=1006,Oo=1007;var yi=1008;var dn=1009,Gc=1010,Wc=1011,Js=1012,Bo=1013,Bn=1014,An=1015,zn=1016,zo=1017,ko=1018,as=1020,Xc=35902,qc=35899,Yc=1021,$c=1022,kn=1023,mi=1026,Mi=1027,Ho=1028,Vo=1029,Fi=1030,Go=1031;var Wo=1033,ea=33776,ta=33777,na=33778,ia=33779,Xo=35840,qo=35841,Yo=35842,$o=35843,Zo=36196,Jo=37492,Ko=37496,Qo=37488,jo=37489,sa=37490,el=37491,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,al=37813,ol=37814,ll=37815,cl=37816,hl=37817,ul=37818,dl=37819,fl=37820,pl=37821,ml=36492,gl=36494,_l=36495,xl=36283,vl=36284,ra=36285,yl=36286;var vr=2300,ao=2301,Ja=2302,_c=2303,xc=2400,vc=2401,yc=2402;var fd=3200;var aa=0,pd=1,Hn="",Ht="srgb",yr="srgb-linear",Mr="linear",dt="srgb";var Ka=7680;var md=519,gd=512,_d=513,xd=514,Zc=515,vd=516,yd=517,Jc=518,Kc=519,Md=35044;var Qc="300 es",En=2e3,Ns=2001;function np(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ip(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sd(){let n=Us("canvas");return n.style.display="block",n}var au={},Fs=null;function jc(...n){let e="THREE."+n.shift();Fs?Fs("log",e,...n):console.log(e,...n)}function bd(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Oe(...n){n=bd(n);let e="THREE."+n.shift();if(Fs)Fs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function ke(...n){n=bd(n);let e="THREE."+n.shift();if(Fs)Fs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ki(...n){let e=n.join(" ");e in au||(au[e]=!0,Oe(...n))}function Ed(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Td={[ja]:ja,[to]:so,[no]:no,[Ls]:io,[eo]:eo,[so]:to,[ro]:ro,[io]:Ls},Yn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ou=1234567,Ps=Math.PI/180,Os=180/Math.PI;function os(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]).toLowerCase()}function Je(n,e,t){return Math.max(e,Math.min(t,n))}function eh(n,e){return(n%e+e)%e}function sp(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function rp(n,e,t){return n!==e?(t-n)/(e-n):0}function gr(n,e,t){return(1-t)*n+t*e}function ap(n,e,t,i){return gr(n,e,1-Math.exp(-t*i))}function op(n,e=1){return e-Math.abs(eh(n,e*2)-e)}function lp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function cp(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function hp(n,e){return n+Math.floor(Math.random()*(e-n+1))}function up(n,e){return n+Math.random()*(e-n)}function dp(n){return n*(.5-Math.random())}function fp(n){n!==void 0&&(ou=n);let e=ou+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function pp(n){return n*Ps}function mp(n){return n*Os}function gp(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function _p(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function th(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function xp(n,e,t,i,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+i)/2),h=a((e+i)/2),f=r((e-i)/2),d=a((e-i)/2),u=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":n.set(o*h,l*f,l*d,o*c);break;case"YZY":n.set(l*d,o*h,l*f,o*c);break;case"ZXZ":n.set(l*f,l*d,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*u,o*c);break;case"YXY":n.set(l*u,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*u,o*h,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nh(n){switch(n.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function wd(n,e){if(e.constructor===Float32Array)return n;let t=nh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(n/t,-1)}function Ad(n,e){if(e.constructor===Float32Array)return n;let t=nh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(n*t)}var Sn={DEG2RAD:Ps,RAD2DEG:Os,generateUUID:os,clamp:Je,euclideanModulo:eh,mapLinear:sp,inverseLerp:rp,lerp:gr,damp:ap,pingpong:op,smoothstep:lp,smootherstep:cp,randInt:hp,randFloat:up,randFloatSpread:dp,seededRandom:fp,degToRad:pp,radToDeg:mp,isPowerOfTwo:gp,ceilPowerOfTwo:_p,floorPowerOfTwo:th,setQuaternionFromProperEuler:xp,normalize:Ad,denormalize:wd},lh=class lh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lh.prototype.isVector2=!0;var ae=lh,Qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],f=i[s+3],d=r[a+0],u=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==d||c!==u||h!==g){let p=l*d+c*u+h*g+f*y;p<0&&(d=-d,u=-u,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),T=Math.sin(S);m=Math.sin(m*S)/T,o=Math.sin(o*S)/T,l=l*m+d*o,c=c*m+u*o,h=h*m+g*o,f=f*m+y*o}else{l=l*m+d*o,c=c*m+u*o,h=h*m+g*o,f=f*m+y*o;let S=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=S,c*=S,h*=S,f*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],f=r[a],d=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*f+l*u-c*d,e[t+1]=l*g+h*d+c*f-o*u,e[t+2]=c*g+h*u+o*d-l*f,e[t+3]=h*g-o*f-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),f=o(r/2),d=l(i/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"YXZ":this._x=d*h*f+c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"ZXY":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f-d*u*g;break;case"ZYX":this._x=d*h*f-c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f+d*u*g;break;case"YZX":this._x=d*h*f+c*u*g,this._y=c*u*f+d*h*g,this._z=c*h*g-d*u*f,this._w=c*h*f-d*u*g;break;case"XZY":this._x=d*h*f-c*u*g,this._y=c*u*f-d*h*g,this._z=c*h*g+d*u*f,this._w=c*h*f+d*u*g;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(i>o&&i>f){let u=2*Math.sqrt(1+i-o-f);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>f){let u=2*Math.sqrt(1+o-i-f);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+f-i-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ch=class ch{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*h,this.y=i+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ch.prototype.isVector3=!0;var D=ch,ql=new D,lu=new Qt,hh=class hh{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],u=i[5],g=i[8],y=s[0],p=s[3],m=s[6],S=s[1],T=s[4],M=s[7],w=s[2],A=s[5],_=s[8];return r[0]=a*y+o*S+l*w,r[3]=a*p+o*T+l*A,r[6]=a*m+o*M+l*_,r[1]=c*y+h*S+f*w,r[4]=c*p+h*T+f*A,r[7]=c*m+h*M+f*_,r[2]=d*y+u*S+g*w,r[5]=d*p+u*T+g*A,r[8]=d*m+u*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,d=o*l-h*r,u=c*r-a*l,g=t*f+i*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=u*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ki("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Yl.makeScale(e,t)),this}rotate(e){return Ki("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Yl.makeRotation(-e)),this}translate(e,t){return Ki("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;var Ve=hh,Yl=new Ve,cu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vp(){let n={enabled:!0,workingColorSpace:yr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===dt&&(s.r=pi(s.r),s.g=pi(s.g),s.b=pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(s.r=Is(s.r),s.g=Is(s.g),s.b=Is(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hn?Mr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[yr]:{primaries:e,whitePoint:i,transfer:Mr,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var at=vp();function pi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Is(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ms,oo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ms===void 0&&(ms=Us("canvas")),ms.width=e.width,ms.height=e.height;let s=ms.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ms}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pi(t[i]/255)*255):t[i]=pi(t[i]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yp=0,Bs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:yp++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($l(s[a].image)):r.push($l(s[a]))}else r=$l(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function $l(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Mp=0,Zl=new D,jt=class n extends Yn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=xn,s=xn,r=an,a=yi,o=kn,l=dn,c=n.DEFAULT_ANISOTROPY,h=Hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=os(),this.name="",this.source=new Bs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ds:e.x=e.x-Math.floor(e.x);break;case xn:e.x=e.x<0?0:1;break;case On:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ds:e.y=e.y-Math.floor(e.y);break;case xn:e.y=e.y<0?0:1;break;case On:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Vc;jt.DEFAULT_ANISOTROPY=1;var uh=class uh{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],u=l[5],g=l[9],y=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,M=(u+1)/2,w=(m+1)/2,A=(h+d)/4,_=(f+y)/4,b=(g+p)/4;return T>M&&T>w?T<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(T),s=A/i,r=_/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=b/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=b/r),this.set(i,s,r,t),this}let S=Math.sqrt((p-g)*(p-g)+(f-y)*(f-y)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(f-y)/S,this.z=(d-h)/S,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};uh.prototype.isVector4=!0;var mt=uh,lo=class extends Yn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new mt(0,0,e,t),this.scissorTest=!1,this.viewport=new mt(0,0,e,t),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new jt({width:e,height:t,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends lo{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Sr=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var co=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ot,this.minFilter=Ot,this.wrapR=xn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Do=class Do{constructor(e,t,i,s,r,a,o,l,c,h,f,d,u,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,f,d,u,g,y,p)}set(e,t,i,s,r,a,o,l,c,h,f,d,u,g,y,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=d,m[3]=u,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Do().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=u+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+u*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,u=l*f,g=c*h,y=c*f;t[0]=d+y*o,t[4]=g*o-u,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,u=l*f,g=c*h,y=c*f;t[0]=d-y*o,t[4]=-a*f,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,u=a*f,g=o*h,y=o*f;t[0]=l*h,t[4]=g*c-u,t[8]=d*c+y,t[1]=l*f,t[5]=y*c+d,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,u=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*f,t[8]=g*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*f+g,t[10]=d-y*f}else if(e.order==="XZY"){let d=a*l,u=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+y,t[5]=a*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=o*h,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sp,e,bp)}lookAt(e,t,i){let s=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Ti.crossVectors(i,gn),Ti.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Ti.crossVectors(i,gn)),Ti.normalize(),Sa.crossVectors(gn,Ti),s[0]=Ti.x,s[4]=Sa.x,s[8]=gn.x,s[1]=Ti.y,s[5]=Sa.y,s[9]=gn.y,s[2]=Ti.z,s[6]=Sa.z,s[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],u=i[13],g=i[2],y=i[6],p=i[10],m=i[14],S=i[3],T=i[7],M=i[11],w=i[15],A=s[0],_=s[4],b=s[8],B=s[12],I=s[1],N=s[5],H=s[9],X=s[13],P=s[2],V=s[6],q=s[10],z=s[14],ne=s[3],G=s[7],Q=s[11],ee=s[15];return r[0]=a*A+o*I+l*P+c*ne,r[4]=a*_+o*N+l*V+c*G,r[8]=a*b+o*H+l*q+c*Q,r[12]=a*B+o*X+l*z+c*ee,r[1]=h*A+f*I+d*P+u*ne,r[5]=h*_+f*N+d*V+u*G,r[9]=h*b+f*H+d*q+u*Q,r[13]=h*B+f*X+d*z+u*ee,r[2]=g*A+y*I+p*P+m*ne,r[6]=g*_+y*N+p*V+m*G,r[10]=g*b+y*H+p*q+m*Q,r[14]=g*B+y*X+p*z+m*ee,r[3]=S*A+T*I+M*P+w*ne,r[7]=S*_+T*N+M*V+w*G,r[11]=S*b+T*H+M*q+w*Q,r[15]=S*B+T*X+M*z+w*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],u=e[14],g=e[3],y=e[7],p=e[11],m=e[15],S=l*u-c*d,T=o*u-c*f,M=o*d-l*f,w=a*u-c*h,A=a*d-l*h,_=a*f-o*h;return t*(y*S-p*T+m*M)-i*(g*S-p*w+m*A)+s*(g*T-y*w+m*_)-r*(g*M-y*A+p*_)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],u=e[11],g=e[12],y=e[13],p=e[14],m=e[15],S=t*o-i*a,T=t*l-s*a,M=t*c-r*a,w=i*l-s*o,A=i*c-r*o,_=s*c-r*l,b=h*y-f*g,B=h*p-d*g,I=h*m-u*g,N=f*p-d*y,H=f*m-u*y,X=d*m-u*p,P=S*X-T*H+M*N+w*I-A*B+_*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/P;return e[0]=(o*X-l*H+c*N)*V,e[1]=(s*H-i*X-r*N)*V,e[2]=(y*_-p*A+m*w)*V,e[3]=(d*A-f*_-u*w)*V,e[4]=(l*I-a*X-c*B)*V,e[5]=(t*X-s*I+r*B)*V,e[6]=(p*M-g*_-m*T)*V,e[7]=(h*_-d*M+u*T)*V,e[8]=(a*H-o*I+c*b)*V,e[9]=(i*I-t*H-r*b)*V,e[10]=(g*A-y*M+m*S)*V,e[11]=(f*M-h*A-u*S)*V,e[12]=(o*B-a*N-l*b)*V,e[13]=(t*N-i*B+s*b)*V,e[14]=(y*T-g*w-p*S)*V,e[15]=(h*w-f*T+d*S)*V,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,d=r*c,u=r*h,g=r*f,y=a*h,p=a*f,m=o*f,S=l*c,T=l*h,M=l*f,w=i.x,A=i.y,_=i.z;return s[0]=(1-(y+m))*w,s[1]=(u+M)*w,s[2]=(g-T)*w,s[3]=0,s[4]=(u-M)*A,s[5]=(1-(d+m))*A,s[6]=(p+S)*A,s[7]=0,s[8]=(g+T)*_,s[9]=(p-S)*_,s[10]=(1-(d+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=gs.set(s[0],s[1],s[2]).length(),o=gs.set(s[4],s[5],s[6]).length(),l=gs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,h=1/o,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,t.setFromRotationMatrix(Dn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=En,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===En)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ns)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=En,l=!1){let c=this.elements,h=2/(t-e),f=2/(i-s),d=-(t+e)/(t-e),u=-(i+s)/(i-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===En)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ns)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=u,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Do.prototype.isMatrix4=!0;var ut=Do,gs=new D,Dn=new ut,Sp=new D(0,0,0),bp=new D(1,1,1),Ti=new D,Sa=new D,gn=new D,uu=new ut,du=new Qt,on=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return uu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(uu,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return du.setFromEuler(this),this.setFromQuaternion(du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};on.DEFAULT_ORDER="XYZ";var br=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ep=0,fu=new D,_s=new Qt,li=new ut,ba=new D,lr=new D,Tp=new D,wp=new Qt,pu=new D(1,0,0),mu=new D(0,1,0),gu=new D(0,0,1),_u={type:"added"},Ap={type:"removed"},xs={type:"childadded",child:null},Jl={type:"childremoved",child:null},Bt=class n extends Yn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new D,t=new on,i=new Qt,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new Ve}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new br,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(pu,e)}rotateY(e){return this.rotateOnAxis(mu,e)}rotateZ(e){return this.rotateOnAxis(gu,e)}translateOnAxis(e,t){return fu.copy(e).applyQuaternion(this.quaternion),this.position.add(fu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pu,e)}translateY(e){return this.translateOnAxis(mu,e)}translateZ(e){return this.translateOnAxis(gu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ba.copy(e):ba.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(lr,ba,this.up):li.lookAt(ba,lr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(li),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_u),xs.child=e,this.dispatchEvent(xs),xs.child=null):ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ap),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_u),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,e,Tp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(lr,wp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new D(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var hn=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Rp={type:"move"},zs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let p=t.getJointPose(y,i),m=this._getHandJoint(c,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Rp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wi={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function Kl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=at.workingColorSpace){return this.r=e,this.g=t,this.b=i,at.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=at.workingColorSpace){if(e=eh(e,1),t=Je(t,0,1),i=Je(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Kl(a,r,e+1/3),this.g=Kl(a,r,e),this.b=Kl(a,r,e-1/3)}return at.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=Rd[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return at.workingToColorSpace(Jt.copy(this),e),Math.round(Je(Jt.r*255,0,255))*65536+Math.round(Je(Jt.g*255,0,255))*256+Math.round(Je(Jt.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.workingToColorSpace(Jt.copy(this),t);let i=Jt.r,s=Jt.g,r=Jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=at.workingColorSpace){return at.workingToColorSpace(Jt.copy(this),t),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ht){at.workingToColorSpace(Jt.copy(this),e);let t=Jt.r,i=Jt.g,s=Jt.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(wi),this.setHSL(wi.h+e,wi.s+t,wi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(wi),e.getHSL(Ea);let i=gr(wi.h,Ea.h,t),s=gr(wi.s,Ea.s,t),r=gr(wi.l,Ea.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Jt=new Ge;Ge.NAMES=Rd;var Qi=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Nn=new D,ci=new D,Ql=new D,hi=new D,vs=new D,ys=new D,xu=new D,jl=new D,ec=new D,tc=new D,nc=new mt,ic=new mt,sc=new mt,fi=class n{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Nn.subVectors(e,t),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Nn.subVectors(s,t),ci.subVectors(i,t),Ql.subVectors(e,t);let a=Nn.dot(Nn),o=Nn.dot(ci),l=Nn.dot(Ql),c=ci.dot(ci),h=ci.dot(Ql),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-u-g,g,u)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hi.x),l.addScaledVector(a,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return nc.setScalar(0),ic.setScalar(0),sc.setScalar(0),nc.fromBufferAttribute(e,t),ic.fromBufferAttribute(e,i),sc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(nc,r.x),a.addScaledVector(ic,r.y),a.addScaledVector(sc,r.z),a}static isFrontFacing(e,t,i,s){return Nn.subVectors(i,t),ci.subVectors(e,t),Nn.cross(ci).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Nn.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;vs.subVectors(s,i),ys.subVectors(r,i),jl.subVectors(e,i);let l=vs.dot(jl),c=ys.dot(jl);if(l<=0&&c<=0)return t.copy(i);ec.subVectors(e,s);let h=vs.dot(ec),f=ys.dot(ec);if(h>=0&&f<=h)return t.copy(s);let d=l*f-h*c;if(d<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(i).addScaledVector(vs,a);tc.subVectors(e,r);let u=vs.dot(tc),g=ys.dot(tc);if(g>=0&&u<=g)return t.copy(r);let y=u*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(ys,o);let p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return xu.subVectors(r,s),o=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(xu,o);let m=1/(p+y+d);return a=y*m,o=d*m,t.copy(i).addScaledVector(vs,a).addScaledVector(ys,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Un.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Un.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Un.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(e.matrixWorld),this.expandByPoint(Un);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Un),Un.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),wa.subVectors(this.max,cr),Ms.subVectors(e.a,cr),Ss.subVectors(e.b,cr),bs.subVectors(e.c,cr),Ai.subVectors(Ss,Ms),Ri.subVectors(bs,Ss),Yi.subVectors(Ms,bs);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-Yi.z,Yi.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,Yi.z,0,-Yi.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-Yi.y,Yi.x,0];return!rc(t,Ms,Ss,bs,wa)||(t=[1,0,0,0,1,0,0,0,1],!rc(t,Ms,Ss,bs,wa))?!1:(Aa.crossVectors(Ai,Ri),t=[Aa.x,Aa.y,Aa.z],rc(t,Ms,Ss,bs,wa))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Un).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Un).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ui=[new D,new D,new D,new D,new D,new D,new D,new D],Un=new D,Ta=new $n,Ms=new D,Ss=new D,bs=new D,Ai=new D,Ri=new D,Yi=new D,cr=new D,wa=new D,Aa=new D,$i=new D;function rc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){$i.fromArray(n,r);let o=s.x*Math.abs($i.x)+s.y*Math.abs($i.y)+s.z*Math.abs($i.z),l=e.dot($i),c=t.dot($i),h=i.dot($i);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Pt=new D,Ra=new ae,Cp=0,Kt=class extends Yn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Md,this.updateRanges=[],this.gpuType=An,this.version=0,this._normalizationScale=e!==void 0?nh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,t,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):wd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ad(e,this.array)}};var Er=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Tr=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var It=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},Pp=new $n,hr=new D,ac=new D,gi=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Pp.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hr.subVectors(e,this.center);let t=hr.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(hr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ac.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hr.copy(e.center).add(ac)),this.expandByPoint(hr.copy(e.center).sub(ac))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ip=0,bn=new ut,oc=new Bt,Es=new D,_n=new $n,ur=new $n,Ft=new D,un=class n extends Yn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ip++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(np(e)?Tr:Er)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ve().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,i){return bn.makeTranslation(e,t,i),this.applyMatrix4(bn),this}scale(e,t,i){return bn.makeScale(e,t,i),this.applyMatrix4(bn),this}lookAt(e){return oc.lookAt(e),oc.updateMatrix(),this.applyMatrix4(oc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Es).negate(),this.translate(Es.x,Es.y,Es.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new It(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ur.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(_n.min,ur.min),_n.expandByPoint(Ft),Ft.addVectors(_n.max,ur.max),_n.expandByPoint(Ft)):(_n.expandByPoint(ur.min),_n.expandByPoint(ur.max))}_n.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ft.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Es.fromBufferAttribute(e,c),Ft.add(Es)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(i.count);for(let B=0;B<i.count;B++)o[B]=new D,l[B]=new D;let h=new D,f=new D,d=new D,u=new ae,g=new ae,y=new ae,p=new D,m=new D;function S(B,I,N){c[B]=c[I]=c[N]=1,h.fromBufferAttribute(i,B),f.fromBufferAttribute(i,I),d.fromBufferAttribute(i,N),u.fromBufferAttribute(r,B),g.fromBufferAttribute(r,I),y.fromBufferAttribute(r,N),f.sub(h),d.sub(h),g.sub(u),y.sub(u);let H=1/(g.x*y.y-y.x*g.y);isFinite(H)&&(p.copy(f).multiplyScalar(y.y).addScaledVector(d,-g.y).multiplyScalar(H),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(H),o[B].add(p),o[I].add(p),o[N].add(p),l[B].add(m),l[I].add(m),l[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,I=T.length;B<I;++B){let N=T[B],H=N.start,X=N.count;for(let P=H,V=H+X;P<V;P+=3)S(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let M=new D,w=new D,A=new D,_=new D;function b(B){A.fromBufferAttribute(s,B),_.copy(A);let I=o[B];M.copy(I),M.sub(A.multiplyScalar(A.dot(I))).normalize(),w.crossVectors(_,I);let H=w.dot(l[B])<0?-1:1;a.setXYZW(B,M.x,M.y,M.z,H)}for(let B=0,I=i.count;B<I;++B)c[B]&&b(B);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let d=0,u=e.count;d<u;d+=3){let g=e.getX(d+0),y=e.getX(d+1),p=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,d=new c.constructor(l.length*h),u=0,g=0;for(let y=0,p=l.length;y<p;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*h;for(let m=0;m<h;m++)d[g++]=c[u++]}return new Kt(d,h,f)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let d=c[h],u=e(d,i);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){let u=c[f];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var lc=new D,Lp=new D,Dp=new Ve,Fn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=lc.subVectors(i,t).cross(Lp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(lc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Dp.getNormalMatrix(e),s=this.coplanarPoint(lc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Np=0,Zn=class extends Yn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=os(),this.name="",this.type="Material",this.blending=$s,this.side=Qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dc,this.blendDst=Nc,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=md,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ka,this.stencilZFail=Ka,this.stencilZPass=Ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ae().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ae().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var di=new D,cc=new D,Ca=new D,Pa=new D,wr=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,t),di.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){cc.copy(e).add(t).multiplyScalar(.5),Ca.copy(t).sub(e).normalize(),Pa.copy(this.origin).sub(cc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ca),o=Pa.dot(this.direction),l=-Pa.dot(Ca),c=Pa.lengthSq(),h=Math.abs(1-a*a),f,d,u,g;if(h>0)if(f=a*l-o,d=a*o-l,g=r*h,f>=0)if(d>=-g)if(d<=g){let y=1/h;f*=y,d*=y,u=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-r,-l),r),u=d*(d+2*l)+c):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-l),r),u=-f*f+d*(d+2*l)+c);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(cc).addScaledVector(Ca,d),u}intersectSphere(e,t){if(e.radius<0)return null;di.subVectors(e.center,this.origin);let i=di.dot(this.direction),s=di.dot(di)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,u=e.z-a.z,g=t.x-a.x,y=t.y-a.y,p=t.z-a.z,m=i.x-a.x,S=i.y-a.y,T=i.z-a.z,M=Math.abs(l),w=Math.abs(c),A=Math.abs(h),_,b,B,I,N,H,X,P,V,q,z,ne;if(M>=w&&M>=A?(B=l,H=f,V=g,ne=m,l>=0?(_=c,b=h,I=d,N=u,X=y,P=p,q=S,z=T):(_=h,b=c,I=u,N=d,X=p,P=y,q=T,z=S)):w>=A?(B=c,H=d,V=y,ne=S,c>=0?(_=h,b=l,I=u,N=f,X=p,P=g,q=T,z=m):(_=l,b=h,I=f,N=u,X=g,P=p,q=m,z=T)):(B=h,H=u,V=p,ne=T,h>=0?(_=l,b=c,I=f,N=d,X=g,P=y,q=m,z=S):(_=c,b=l,I=d,N=f,X=y,P=g,q=S,z=m)),B===0)return null;let G=_/B,Q=b/B,ee=1/B,Ee=I-G*H,Be=N-Q*H,Y=X-G*V,xe=P-Q*V,Te=q-G*ne,Ne=z-Q*ne,ve=Te*xe-Ne*Y,Ue=Ee*Ne-Be*Te,Mt=Y*Be-xe*Ee;if(s){if(ve<0||Ue<0||Mt<0)return null}else if((ve<0||Ue<0||Mt<0)&&(ve>0||Ue>0||Mt>0))return null;let ze=ve+Ue+Mt;if(ze===0)return null;let Ze=ee*(ve*H+Ue*V+Mt*ne);return(ze>0?Ze<0:Ze>0)?null:this.at(Ze/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ji=class extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=No,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},vu=new ut,Zi=new wr,Ia=new gi,yu=new D,La=new D,Da=new D,Na=new D,hc=new D,Ua=new D,Mu=new D,Fa=new D,gt=class extends Bt{constructor(e=new un,t=new ji){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ua.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(hc.fromBufferAttribute(f,e),a?Ua.addScaledVector(hc,h):Ua.addScaledVector(hc.sub(t),h))}t.add(Ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ia.copy(i.boundingSphere),Ia.applyMatrix4(r),Zi.copy(e.ray).recast(e.near),!(Ia.containsPoint(Zi.origin)===!1&&(Zi.intersectSphere(Ia,yu)===null||Zi.origin.distanceToSquared(yu)>(e.far-e.near)**2))&&(vu.copy(r).invert(),Zi.copy(e.ray).applyMatrix4(vu),!(i.boundingBox!==null&&Zi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,u.start),T=Math.min(o.count,Math.min(p.start+p.count,u.start+u.count));for(let M=S,w=T;M<w;M+=3){let A=o.getX(M),_=o.getX(M+1),b=o.getX(M+2);s=Oa(this,m,e,i,c,h,f,A,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let p=g,m=y;p<m;p+=3){let S=o.getX(p),T=o.getX(p+1),M=o.getX(p+2);s=Oa(this,a,e,i,c,h,f,S,T,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let p=d[g],m=a[p.materialIndex],S=Math.max(p.start,u.start),T=Math.min(l.count,Math.min(p.start+p.count,u.start+u.count));for(let M=S,w=T;M<w;M+=3){let A=M,_=M+1,b=M+2;s=Oa(this,m,e,i,c,h,f,A,_,b),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let p=g,m=y;p<m;p+=3){let S=p,T=p+1,M=p+2;s=Oa(this,a,e,i,c,h,f,S,T,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Up(n,e,t,i,s,r,a,o){let l;if(e.side===Gt?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Qn,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:n}}function Oa(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,La),n.getVertexPosition(l,Da),n.getVertexPosition(c,Na);let h=Up(n,e,t,i,La,Da,Na,Mu);if(h){let f=new D;fi.getBarycoord(Mu,La,Da,Na,f),s&&(h.uv=fi.getInterpolatedAttribute(s,o,l,c,f,new ae)),r&&(h.uv1=fi.getInterpolatedAttribute(r,o,l,c,f,new ae)),a&&(h.normal=fi.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new D,materialIndex:0};fi.getNormal(La,Da,Na,d.normal),h.face=d,h.barycoord=f}return h}var Ar=class extends jt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ot,h=Ot,f,d){super(null,a,o,l,c,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends Kt{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ts=new ut,Su=new ut,Ba=[],bu=new $n,Fp=new ut,dr=new gt,fr=new gi,Cr=class extends gt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,Fp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new $n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),bu.copy(e.boundingBox).applyMatrix4(Ts),this.boundingBox.union(bu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ts),fr.copy(e.boundingSphere).applyMatrix4(Ts),this.boundingSphere.union(fr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,t){let i=this.matrixWorld,s=this.count;if(dr.geometry=this.geometry,dr.material=this.material,dr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fr.copy(this.boundingSphere),fr.applyMatrix4(i),e.ray.intersectsSphere(fr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ts),Su.multiplyMatrices(i,Ts),dr.matrixWorld=Su,dr.raycast(e,Ba);for(let a=0,o=Ba.length;a<o;a++){let l=Ba[a];l.instanceId=r,l.object=this,t.push(l)}Ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Ar(new Float32Array(s*this.count),s,this.count,Ho,An));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ji=new gi,Op=new ae(.5,.5),za=new D,Pi=class{constructor(e=new Fn,t=new Fn,i=new Fn,s=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=En,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],d=r[6],u=r[7],g=r[8],y=r[9],p=r[10],m=r[11],S=r[12],T=r[13],M=r[14],w=r[15];if(s[0].setComponents(c-a,u-h,m-g,w-S).normalize(),s[1].setComponents(c+a,u+h,m+g,w+S).normalize(),s[2].setComponents(c+o,u+f,m+y,w+T).normalize(),s[3].setComponents(c-o,u-f,m-y,w-T).normalize(),i)s[4].setComponents(l,d,p,M).normalize(),s[5].setComponents(c-l,u-d,m-p,w-M).normalize();else if(s[4].setComponents(c-l,u-d,m-p,w-M).normalize(),t===En)s[5].setComponents(c+l,u+d,m+p,w+M).normalize();else if(t===Ns)s[5].setComponents(l,d,p,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ji.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);let t=Op.distanceTo(e.center);return Ji.radius=.7071067811865476+t,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(za.x=s.normal.x>0?e.max.x:e.min.x,za.y=s.normal.y>0?e.max.y:e.min.y,za.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Eu=new ut,ho=class n{constructor(){this.coordinateSystem=En,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,i=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Eu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new Pi),i[s].setFromProjectionMatrix(Eu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let i=0;i<this._count;i++)if(t[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Pi),t[s].copy(i[s]);return this._count=e._count,this}clone(){return new n().copy(this)}};var ks=class extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},uo=new D,fo=new D,Tu=new ut,pr=new wr,ka=new gi,uc=new D,wu=new D,po=class extends Bt{constructor(e=new un,t=new ks){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)uo.fromBufferAttribute(t,s-1),fo.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=uo.distanceTo(fo);e.setAttribute("lineDistance",new It(i,1))}else Oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),ka.radius+=r,e.ray.intersectsSphere(ka)===!1)return;Tu.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Tu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=u,p=g-1;y<p;y+=c){let m=h.getX(y),S=h.getX(y+1),T=Ha(this,e,pr,l,m,S,y);T&&t.push(T)}if(this.isLineLoop){let y=h.getX(g-1),p=h.getX(u),m=Ha(this,e,pr,l,y,p,g-1);m&&t.push(m)}}else{let u=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let y=u,p=g-1;y<p;y+=c){let m=Ha(this,e,pr,l,y,y+1,y);m&&t.push(m)}if(this.isLineLoop){let y=Ha(this,e,pr,l,g-1,u,g-1);y&&t.push(y)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Ha(n,e,t,i,s,r,a){let o=n.geometry.attributes.position;if(uo.fromBufferAttribute(o,s),fo.fromBufferAttribute(o,r),t.distanceSqToSegment(uo,fo,uc,wu)>i)return;uc.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(uc);if(!(c<e.near||c>e.far))return{distance:c,point:wu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}var Au=new D,Ru=new D,Pr=class extends po{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)Au.fromBufferAttribute(t,s),Ru.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Au.distanceTo(Ru);e.setAttribute("lineDistance",new It(i,1))}else Oe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ir=class extends jt{constructor(e=[],t=rs,i,s,r,a,o,l,c,h){super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Lr=class extends jt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends jt{constructor(e,t,i=Bn,s,r,a,o=Ot,l=Ot,c,h=mi,f=1){if(h!==mi&&h!==Mi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Dr=class extends _i{constructor(e,t=Bn,i=rs,s,r,a=Ot,o=Ot,l,c=mi){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Nr=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Jn=class n extends un{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],d=0,u=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new It(c,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(f,2));function g(y,p,m,S,T,M,w,A,_,b,B){let I=M/_,N=w/b,H=M/2,X=w/2,P=A/2,V=_+1,q=b+1,z=0,ne=0,G=new D;for(let Q=0;Q<q;Q++){let ee=Q*N-X;for(let Ee=0;Ee<V;Ee++){let Be=Ee*I-H;G[y]=Be*S,G[p]=ee*T,G[m]=P,c.push(G.x,G.y,G.z),G[y]=0,G[p]=0,G[m]=A>0?1:-1,h.push(G.x,G.y,G.z),f.push(Ee/_),f.push(1-Q/b),z+=1}}for(let Q=0;Q<b;Q++)for(let ee=0;ee<_;ee++){let Ee=d+ee+V*Q,Be=d+ee+V*(Q+1),Y=d+(ee+1)+V*(Q+1),xe=d+(ee+1)+V*Q;l.push(Ee,Be,xe),l.push(Be,Y,xe),ne+=6}o.addGroup(u,ne,B),u+=ne,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Va=new D,Ga=new D,dc=new D,Wa=new fi,Ur=class extends un{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){let s=Math.pow(10,4),r=Math.cos(Ps*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],f=new Array(3),d=new Map,u=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);let{a:y,b:p,c:m}=Wa;if(y.fromBufferAttribute(o,c[0]),p.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),Wa.getNormal(dc),f[0]=`${Math.round(y.x*s)},${Math.round(y.y*s)},${Math.round(y.z*s)}`,f[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,f[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(f[0]===f[1]||f[1]===f[2]||f[2]===f[0]))for(let S=0;S<3;S++){let T=(S+1)%3,M=f[S],w=f[T],A=Wa[h[S]],_=Wa[h[T]],b=`${M}_${w}`,B=`${w}_${M}`,I=d.get(B);I?(dc.dot(I.normal)<=r&&(u.push(A.x,A.y,A.z),u.push(_.x,_.y,_.z)),d.set(B,null)):d.has(b)||d.set(b,{index0:c[S],index1:c[T],normal:dc.clone()})}}for(let g of d.values())if(g){let{index0:y,index1:p}=g;Va.fromBufferAttribute(o,y),Ga.fromBufferAttribute(o,p),u.push(Va.x,Va.y,Va.z),u.push(Ga.x,Ga.y,Ga.z)}this.setAttribute("position",new It(u,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}},vn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ae:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new D,s=[],r=[],a=[],o=new D,l=new ut;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Je(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Je(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Hs=class extends vn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=l-this.aX,u=c-this.aY;l=d*h-u*f+this.aX,c=d*f+u*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mo=class extends Hs{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ih(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+f)+(l-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Cu=new D,Pu=new D,fc=new ih,pc=new ih,mc=new ih,go=class extends vn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new D){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Pu.subVectors(s[0],s[1]).add(s[0]),c=Pu);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Cu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Cu),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),u),y=Math.pow(f.distanceToSquared(d),u),p=Math.pow(d.distanceToSquared(h),u);y<1e-4&&(y=1),g<1e-4&&(g=y),p<1e-4&&(p=y),fc.initNonuniformCatmullRom(c.x,f.x,d.x,h.x,g,y,p),pc.initNonuniformCatmullRom(c.y,f.y,d.y,h.y,g,y,p),mc.initNonuniformCatmullRom(c.z,f.z,d.z,h.z,g,y,p)}else this.curveType==="catmullrom"&&(fc.initCatmullRom(c.x,f.x,d.x,h.x,this.tension),pc.initCatmullRom(c.y,f.y,d.y,h.y,this.tension),mc.initCatmullRom(c.z,f.z,d.z,h.z,this.tension));return i.set(fc.calc(l),pc.calc(l),mc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Iu(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function Bp(n,e){let t=1-n;return t*t*e}function zp(n,e){return 2*(1-n)*n*e}function kp(n,e){return n*n*e}function _r(n,e,t,i){return Bp(n,e)+zp(n,t)+kp(n,i)}function Hp(n,e){let t=1-n;return t*t*t*e}function Vp(n,e){let t=1-n;return 3*t*t*n*e}function Gp(n,e){return 3*(1-n)*n*n*e}function Wp(n,e){return n*n*n*e}function xr(n,e,t,i,s){return Hp(n,e)+Vp(n,t)+Gp(n,i)+Wp(n,s)}var Fr=class extends vn{constructor(e=new ae,t=new ae,i=new ae,s=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},_o=class extends vn{constructor(e=new D,t=new D,i=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xr(e,s.x,r.x,a.x,o.x),xr(e,s.y,r.y,a.y,o.y),xr(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends vn{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xo=class extends vn{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Br=class extends vn{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends vn{constructor(e=new D,t=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new D){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(_r(e,s.x,r.x,a.x),_r(e,s.y,r.y,a.y),_r(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zr=class extends vn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return i.set(Iu(o,l.x,c.x,h.x,f.x),Iu(o,l.y,c.y,h.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ae().fromArray(s))}return this}},Mc=Object.freeze({__proto__:null,ArcCurve:mo,CatmullRomCurve3:go,CubicBezierCurve:Fr,CubicBezierCurve3:_o,EllipseCurve:Hs,LineCurve:Or,LineCurve3:xo,QuadraticBezierCurve:Br,QuadraticBezierCurve3:vo,SplineCurve:zr}),yo=class extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new Mc[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},kr=class extends yo{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Or(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new Br(this.currentPoint.clone(),new ae(e,t),new ae(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new Fr(this.currentPoint.clone(),new ae(e,t),new ae(i,s),new ae(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new zr(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Hs(e,t,i,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ii=class extends kr{constructor(e){super(e),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new kr().fromJSON(s))}return this}};function Xp(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=Cd(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Jp(n,e,r,t)),n.length>80*t){o=n[0],l=n[1];let h=o,f=l;for(let d=t;d<s;d+=t){let u=n[d],g=n[d+1];u<o&&(o=u),g<l&&(l=g),u>h&&(h=u),g>f&&(f=g)}c=Math.max(h-o,f-l),c=c!==0?32767/c:0}return Hr(r,a,t,o,l,c,0),a}function Cd(n,e,t,i,s){let r;if(s===om(n,e,t,i)>0)for(let a=e;a<t;a+=i)r=Lu(a/i|0,n[a],n[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Lu(a/i|0,n[a],n[a+1],r);return r&&Vs(r,r.next)&&(Gr(r),r=r.next),r}function es(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Vs(t,t.next)||Tt(t.prev,t,t.next)===0)){if(Gr(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Hr(n,e,t,i,s,r,a){if(!n)return;!a&&r&&tm(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Yp(n,i,s,r):qp(n)){e.push(l.i,n.i,c.i),Gr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=$p(es(n),e),Hr(n,e,t,i,s,r,2)):a===2&&Zp(n,e,t,i,s,r):Hr(es(n),e,t,i,s,r,1);break}}}function qp(n){let e=n.prev,t=n,i=n.next;if(Tt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=Math.min(s,r,a),f=Math.min(o,l,c),d=Math.max(s,r,a),u=Math.max(o,l,c),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=f&&g.y<=u&&mr(s,o,r,l,a,c,g.x,g.y)&&Tt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Yp(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Tt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,d=a.y,u=Math.min(o,l,c),g=Math.min(h,f,d),y=Math.max(o,l,c),p=Math.max(h,f,d),m=Sc(u,g,e,t,i),S=Sc(y,p,e,t,i),T=n.prevZ,M=n.nextZ;for(;T&&T.z>=m&&M&&M.z<=S;){if(T.x>=u&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&mr(o,h,l,f,c,d,T.x,T.y)&&Tt(T.prev,T,T.next)>=0||(T=T.prevZ,M.x>=u&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&mr(o,h,l,f,c,d,M.x,M.y)&&Tt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;T&&T.z>=m;){if(T.x>=u&&T.x<=y&&T.y>=g&&T.y<=p&&T!==s&&T!==a&&mr(o,h,l,f,c,d,T.x,T.y)&&Tt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;M&&M.z<=S;){if(M.x>=u&&M.x<=y&&M.y>=g&&M.y<=p&&M!==s&&M!==a&&mr(o,h,l,f,c,d,M.x,M.y)&&Tt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function $p(n,e){let t=n;do{let i=t.prev,s=t.next.next;!Vs(i,s)&&Id(i,t,t.next,s)&&Vr(i,s)&&Vr(s,i)&&(e.push(i.i,t.i,s.i),Gr(t),Gr(t.next),t=n=s),t=t.next}while(t!==n);return es(t)}function Zp(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&sm(a,o)){let l=Ld(a,o);a=es(a,a.next),l=es(l,l.next),Hr(a,e,t,i,s,r,0),Hr(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Jp(n,e,t,i){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=Cd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(im(c))}s.sort(Kp);for(let r=0;r<s.length;r++)t=Qp(s[r],t);return t}function Kp(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=i-s}return t}function Qp(n,e){let t=jp(n,e);if(!t)return e;let i=Ld(t,n);return es(i,i.next),es(t,t.next)}function jp(n,e){let t=e,i=n.x,s=n.y,r=-1/0,a;if(Vs(n,t))return t;do{if(Vs(n,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=i&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=l&&i!==t.x&&Pd(s<c?i:r,s,l,c,s<c?r:i,s,t.x,t.y)){let f=Math.abs(s-t.y)/(i-t.x);Vr(t,n)&&(f<h||f===h&&(t.x>a.x||t.x===a.x&&em(a,t)))&&(a=t,h=f)}t=t.next}while(t!==o);return a}function em(n,e){return Tt(n.prev,n,e.prev)<0&&Tt(e.next,n,n.next)<0}function tm(n,e,t,i){let s=n;do s.z===0&&(s.z=Sc(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,nm(s)}function nm(n){let e,t=1;do{let i=n,s;n=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,t*=2}while(e>1);return n}function Sc(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function im(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Pd(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function mr(n,e,t,i,s,r,a,o){return!(n===a&&e===o)&&Pd(n,e,t,i,s,r,a,o)}function sm(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!rm(n,e)&&(Vr(n,e)&&Vr(e,n)&&am(n,e)&&(Tt(n.prev,n,e.prev)||Tt(n,e.prev,e))||Vs(n,e)&&Tt(n.prev,n,n.next)>0&&Tt(e.prev,e,e.next)>0)}function Tt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Vs(n,e){return n.x===e.x&&n.y===e.y}function Id(n,e,t,i){let s=qa(Tt(n,e,t)),r=qa(Tt(n,e,i)),a=qa(Tt(t,i,n)),o=qa(Tt(t,i,e));return!!(s!==r&&a!==o||s===0&&Xa(n,t,e)||r===0&&Xa(n,i,e)||a===0&&Xa(t,n,i)||o===0&&Xa(t,e,i))}function Xa(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function qa(n){return n>0?1:n<0?-1:0}function rm(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Id(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Vr(n,e){return Tt(n.prev,n,n.next)<0?Tt(n,e,n.next)>=0&&Tt(n,n.prev,e)>=0:Tt(n,e,n.prev)<0||Tt(n,n.next,e)<0}function am(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function Ld(n,e){let t=bc(n.i,n.x,n.y),i=bc(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Lu(n,e,t,i){let s=bc(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Gr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function bc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function om(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ec=class{static triangulate(e,t,i=2){return Xp(e,t,i)}},qn=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Du(e),Nu(i,e);let a=e.length;t.forEach(Du);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Nu(i,t[l]);let o=Ec.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Du(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Nu(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Wr=class n extends un{constructor(e=new Ii([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new It(s,3)),this.setAttribute("uv",new It(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:lm,T,M=!1,w,A,_,b;if(m){T=m.getSpacedPoints(h),M=!0,d=!1;let j=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,j),A=new D,_=new D,b=new D}d||(p=0,u=0,g=0,y=0);let B=o.extractPoints(c),I=B.shape,N=B.holes;if(!qn.isClockWise(I)){I=I.reverse();for(let j=0,he=N.length;j<he;j++){let oe=N[j];qn.isClockWise(oe)&&(N[j]=oe.reverse())}}function X(j){let oe=10000000000000001e-36,be=j[0];for(let _e=1;_e<=j.length;_e++){let Xe=_e%j.length,Ie=j[Xe],tt=Ie.x-be.x,it=Ie.y-be.y,ct=tt*tt+it*it,L=Math.max(Math.abs(Ie.x),Math.abs(Ie.y),Math.abs(be.x),Math.abs(be.y)),Rt=oe*L*L;if(ct<=Rt){j.splice(Xe,1),_e--;continue}be=Ie}}X(I),N.forEach(X);let P=N.length,V=I;for(let j=0;j<P;j++){let he=N[j];I=I.concat(he)}function q(j,he,oe){return he||ke("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(he,oe)}let z=I.length;function ne(j,he,oe){let be,_e,Xe,Ie=j.x-he.x,tt=j.y-he.y,it=oe.x-j.x,ct=oe.y-j.y,L=Ie*Ie+tt*tt,Rt=Ie*ct-tt*it;if(Math.abs(Rt)>Number.EPSILON){let Qe=Math.sqrt(L),_t=Math.sqrt(it*it+ct*ct),pe=he.x-tt/Qe,At=he.y+Ie/Qe,Fe=oe.x-ct/_t,He=oe.y+it/_t,E=((Fe-pe)*ct-(He-At)*it)/(Ie*ct-tt*it);be=pe+Ie*E-j.x,_e=At+tt*E-j.y;let x=be*be+_e*_e;if(x<=2)return new ae(be,_e);Xe=Math.sqrt(x/2)}else{let Qe=!1;Ie>Number.EPSILON?it>Number.EPSILON&&(Qe=!0):Ie<-Number.EPSILON?it<-Number.EPSILON&&(Qe=!0):Math.sign(tt)===Math.sign(ct)&&(Qe=!0),Qe?(be=-tt,_e=Ie,Xe=Math.sqrt(L)):(be=Ie,_e=tt,Xe=Math.sqrt(L/2))}return new ae(be/Xe,_e/Xe)}let G=[];for(let j=0,he=V.length,oe=he-1,be=j+1;j<he;j++,oe++,be++)oe===he&&(oe=0),be===he&&(be=0),G[j]=ne(V[j],V[oe],V[be]);let Q=[],ee,Ee=G.concat();for(let j=0,he=P;j<he;j++){let oe=N[j];ee=[];for(let be=0,_e=oe.length,Xe=_e-1,Ie=be+1;be<_e;be++,Xe++,Ie++)Xe===_e&&(Xe=0),Ie===_e&&(Ie=0),ee[be]=ne(oe[be],oe[Xe],oe[Ie]);Q.push(ee),Ee=Ee.concat(ee)}let Be;if(p===0)Be=qn.triangulateShape(V,N);else{let j=[],he=[];for(let oe=0;oe<p;oe++){let be=oe/p,_e=u*Math.cos(be*Math.PI/2),Xe=g*Math.sin(be*Math.PI/2)+y;for(let Ie=0,tt=V.length;Ie<tt;Ie++){let it=q(V[Ie],G[Ie],Xe);Ue(it.x,it.y,-_e),be===0&&j.push(it)}for(let Ie=0,tt=P;Ie<tt;Ie++){let it=N[Ie];ee=Q[Ie];let ct=[];for(let L=0,Rt=it.length;L<Rt;L++){let Qe=q(it[L],ee[L],Xe);Ue(Qe.x,Qe.y,-_e),be===0&&ct.push(Qe)}be===0&&he.push(ct)}}Be=qn.triangulateShape(j,he)}let Y=Be.length,xe=g+y;for(let j=0;j<z;j++){let he=d?q(I[j],Ee[j],xe):I[j];M?(_.copy(w.normals[0]).multiplyScalar(he.x),A.copy(w.binormals[0]).multiplyScalar(he.y),b.copy(T[0]).add(_).add(A),Ue(b.x,b.y,b.z)):Ue(he.x,he.y,0)}for(let j=1;j<=h;j++)for(let he=0;he<z;he++){let oe=d?q(I[he],Ee[he],xe):I[he];M?(_.copy(w.normals[j]).multiplyScalar(oe.x),A.copy(w.binormals[j]).multiplyScalar(oe.y),b.copy(T[j]).add(_).add(A),Ue(b.x,b.y,b.z)):Ue(oe.x,oe.y,f/h*j)}for(let j=p-1;j>=0;j--){let he=j/p,oe=u*Math.cos(he*Math.PI/2),be=g*Math.sin(he*Math.PI/2)+y;for(let _e=0,Xe=V.length;_e<Xe;_e++){let Ie=q(V[_e],G[_e],be);Ue(Ie.x,Ie.y,f+oe)}for(let _e=0,Xe=N.length;_e<Xe;_e++){let Ie=N[_e];ee=Q[_e];for(let tt=0,it=Ie.length;tt<it;tt++){let ct=q(Ie[tt],ee[tt],be);M?Ue(ct.x,ct.y+T[h-1].y,T[h-1].x+oe):Ue(ct.x,ct.y,f+oe)}}}Te(),Ne();function Te(){let j=s.length/3;if(d){let he=0,oe=z*he;for(let be=0;be<Y;be++){let _e=Be[be];Mt(_e[2]+oe,_e[1]+oe,_e[0]+oe)}he=h+p*2,oe=z*he;for(let be=0;be<Y;be++){let _e=Be[be];Mt(_e[0]+oe,_e[1]+oe,_e[2]+oe)}}else{for(let he=0;he<Y;he++){let oe=Be[he];Mt(oe[2],oe[1],oe[0])}for(let he=0;he<Y;he++){let oe=Be[he];Mt(oe[0]+z*h,oe[1]+z*h,oe[2]+z*h)}}i.addGroup(j,s.length/3-j,0)}function Ne(){let j=s.length/3,he=0;ve(V,he),he+=V.length;for(let oe=0,be=N.length;oe<be;oe++){let _e=N[oe];ve(_e,he),he+=_e.length}i.addGroup(j,s.length/3-j,1)}function ve(j,he){let oe=j.length;for(;--oe>=0;){let be=oe,_e=oe-1;_e<0&&(_e=j.length-1);for(let Xe=0,Ie=h+p*2;Xe<Ie;Xe++){let tt=z*Xe,it=z*(Xe+1),ct=he+be+tt,L=he+_e+tt,Rt=he+_e+it,Qe=he+be+it;ze(ct,L,Rt,Qe)}}}function Ue(j,he,oe){l.push(j),l.push(he),l.push(oe)}function Mt(j,he,oe){Ze(j),Ze(he),Ze(oe);let be=s.length/3,_e=S.generateTopUV(i,s,be-3,be-2,be-1);et(_e[0]),et(_e[1]),et(_e[2])}function ze(j,he,oe,be){Ze(j),Ze(he),Ze(be),Ze(he),Ze(oe),Ze(be);let _e=s.length/3,Xe=S.generateSideWallUV(i,s,_e-6,_e-3,_e-2,_e-1);et(Xe[0]),et(Xe[1]),et(Xe[3]),et(Xe[1]),et(Xe[2]),et(Xe[3])}function Ze(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function et(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return cm(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mc[s.type]().fromJSON(s)),new n(i,e.options)}},lm={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ae(r,a),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],f=e[i*3+2],d=e[s*3],u=e[s*3+1],g=e[s*3+2],y=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ae(a,1-l),new ae(c,1-f),new ae(d,1-g),new ae(y,1-m)]:[new ae(o,1-l),new ae(h,1-f),new ae(u,1-g),new ae(p,1-m)]}};function cm(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Li=class n extends un{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,f=e/o,d=t/l,u=[],g=[],y=[],p=[];for(let m=0;m<h;m++){let S=m*d-a;for(let T=0;T<c;T++){let M=T*f-r;g.push(M,-S,0),y.push(0,0,1),p.push(T/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let T=S+c*m,M=S+c*(m+1),w=S+1+c*(m+1),A=S+1+c*m;u.push(T,M,A),u.push(M,w,A)}this.setIndex(u),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(y,3)),this.setAttribute("uv",new It(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}};var ts=class n extends un{constructor(e=new Ii([new ae(0,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new It(s,3)),this.setAttribute("normal",new It(r,3)),this.setAttribute("uv",new It(a,2));function c(h){let f=s.length/3,d=h.extractPoints(t),u=d.shape,g=d.holes;qn.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,m=g.length;p<m;p++){let S=g[p];qn.isClockWise(S)===!0&&(g[p]=S.reverse())}let y=qn.triangulateShape(u,g);for(let p=0,m=g.length;p<m;p++){let S=g[p];u=u.concat(S)}for(let p=0,m=u.length;p<m;p++){let S=u[p];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let p=0,m=y.length;p<m;p++){let S=y[p],T=S[0]+f,M=S[1]+f,w=S[2]+f;i.push(T,M,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return hm(t,e)}static fromJSON(e,t){let i=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];i.push(a)}return new n(i,e.curveSegments)}};function hm(n,e){if(e.shapes=[],Array.isArray(n))for(let t=0,i=n.length;t<i;t++){let s=n[t];e.shapes.push(s.uuid)}else e.shapes.push(n.uuid);return e}function ls(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Uu(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Uu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=ls(n[t]);for(let s in i)e[s]=i[s]}return e}function Uu(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function um(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function sh(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}var Dd={clone:ls,merge:tn},dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yn=class extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dm,this.fragmentShader=fm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ls(e.uniforms),this.uniformsGroups=um(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ge().setHex(s.value);break;case"v2":this.uniforms[i].value=new ae().fromArray(s.value);break;case"v3":this.uniforms[i].value=new D().fromArray(s.value);break;case"v4":this.uniforms[i].value=new mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ut().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Mo=class extends yn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Kn=class extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xi=class extends Kn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ae(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ki('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ki('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Xr=class extends Zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=aa,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=No,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gs=class extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},So=class extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ws(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Ya(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Di=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},bo=class extends Di{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xc,endingEnd:xc}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vc:r=e,o=2*t-i;break;case yc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case vc:a=e,l=2*i-t;break;case yc:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,g=(i-t)/(s-t),y=g*g,p=y*g,m=-d*p+2*d*y-d*g,S=(1+d)*p+(-1.5-2*d)*y+(-.5+d)*g+1,T=(-1-u)*p+(1.5+u)*y+.5*g,M=u*p-u*y;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+S*a[c+w]+T*a[l+w]+M*a[f+w];return r}},Eo=class extends Di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*f+a[l+d]*h;return r}},To=class extends Di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wo=class extends Di{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-t)/(s-t),y=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*y+a[l+p]*g;return r}let d=o*2,u=e-1;for(let g=0;g!==o;++g){let y=a[c+g],p=a[l+g],m=u*d+g*2,S=f[m],T=f[m+1],M=e*d+g*2,w=h[M],A=h[M+1],_=mm(i,t,S,w,s);r[g]=Nd(_,y,T,A,p)}return r}};function Nd(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function pm(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function mm(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=Nd(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=pm(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Mn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ws(t,this.TimeBufferType),this.values=ws(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ws(e.times,Array),values:ws(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Ya(e.settings)&&(i.settings={inTangents:ws(e.settings.inTangents,Array),outTangents:ws(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new bo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new wo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case vr:t=this.InterpolantFactoryMethodDiscrete;break;case ao:t=this.InterpolantFactoryMethodLinear;break;case Ja:t=this.InterpolantFactoryMethodSmooth;break;case _c:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Oe("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vr;case this.InterpolantFactoryMethodLinear:return ao;case this.InterpolantFactoryMethodSmooth:return Ja;case this.InterpolantFactoryMethodBezier:return _c}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e;Ya(this.settings)&&(Fu(this.settings.inTangents,e),Fu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Ya(this.settings)&&(Ou(this.settings.inTangents,e),Ou(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ip(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ja,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,d=f-i,u=f+i;for(let g=0;g!==i;++g){let y=t[f+g];if(y!==t[d+g]||y!==t[u+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,d=a*i;for(let u=0;u!==i;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ya(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fu(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]+=e}function Ou(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}Mn.prototype.ValueTypeName="";Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=ao;var Ni=class extends Mn{constructor(e,t,i){super(e,t,i)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=vr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}};Ao.prototype.ValueTypeName="color";var Ro=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}};Ro.prototype.ValueTypeName="number";var Co=class extends Di{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Qt.slerpFlat(r,0,a,c-o,a,c,l);return r}},qr=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new Co(this.times,this.values,this.getValueSize(),e)}};qr.prototype.ValueTypeName="quaternion";qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ui=class extends Mn{constructor(e,t,i){super(e,t,i)}};Ui.prototype.ValueTypeName="string";Ui.prototype.ValueBufferType=Array;Ui.prototype.DefaultInterpolation=vr;Ui.prototype.InterpolantFactoryMethodLinear=void 0;Ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Po=class extends Mn{constructor(e,t,i,s){super(e,t,i,s)}};Po.prototype.ValueTypeName="vector";var Qa={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(Bu(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!Bu(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function Bu(n){try{let e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ws=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=c.length;f<d;f+=2){let u=c[f],g=c[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ud=new Ws,Xs=class{constructor(e){this.manager=e!==void 0?e:Ud,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Xs.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=new WeakMap,Io=class extends Xs{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Qa.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=As.get(a);f===void 0&&(f=[],As.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Us("img");function l(){h(),t&&t(this);let f=As.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}As.delete(this),r.manager.itemEnd(e)}function c(f){h(),s&&s(f),Qa.remove(`image:${e}`);let d=As.get(this)||[];for(let u=0;u<d.length;u++){let g=d[u];g.onError&&g.onError(f)}As.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Qa.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Yr=class extends Xs{constructor(e){super(e)}load(e,t,i,s){let r=new jt,a=new Io(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}},$r=class extends Bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var gc=new ut,zu=new D,ku=new D,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pi,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zu.setFromMatrixPosition(e.matrixWorld),t.position.copy(zu),ku.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ku),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){gc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(gc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ns||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(gc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$a=new D,Za=new Qt,Xn=new D,Jr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,Za,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Za,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose($a,Za,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,Za,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ci=new D,Hu=new ae,Vu=new ae,Vt=class extends Jr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ps*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,t){return this.getViewBounds(e,Hu,Vu),t.subVectors(Vu,Hu)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ps*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Tc=class extends Zr{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0}},Kr=class extends $r{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Tc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vi=class extends Jr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wc=class extends Zr{constructor(){super(new vi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends $r{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new wc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Rs=-90,Cs=1,qs=class extends Bt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Vt(Rs,Cs,e,t);s.layers=this.layers,this.add(s);let r=new Vt(Rs,Cs,e,t);r.layers=this.layers,this.add(r);let a=new Vt(Rs,Cs,e,t);a.layers=this.layers,this.add(a);let o=new Vt(Rs,Cs,e,t);o.layers=this.layers,this.add(o);let l=new Vt(Rs,Cs,e,t);l.layers=this.layers,this.add(l);let c=new Vt(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ns)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Lo=class extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var rh="\\[\\]\\.:\\/",gm=new RegExp("["+rh+"]","g"),ah="[^"+rh+"]",_m="[^"+rh.replace("\\.","")+"]",xm=/((?:WC+[\/:])*)/.source.replace("WC",ah),vm=/(WCOD+)?/.source.replace("WCOD",_m),ym=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ah),Mm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ah),Sm=new RegExp("^"+xm+vm+ym+Mm+"$"),bm=["material","materials","bones","map"],Ac=class{constructor(e,t,i){let s=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(gm,"")}static parseTrackName(e){let t=Sm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);bm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=Ac;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Zv=new Float32Array(1);var dh=class dh{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};dh.prototype.isMatrix2=!0;var Rc=dh;function oh(n,e,t,i){let s=Em(i);switch(t){case Yc:return n*e;case Ho:return n*e/s.components*s.byteLength;case Vo:return n*e/s.components*s.byteLength;case Fi:return n*e*2/s.components*s.byteLength;case Go:return n*e*2/s.components*s.byteLength;case $c:return n*e*3/s.components*s.byteLength;case kn:return n*e*4/s.components*s.byteLength;case Wo:return n*e*4/s.components*s.byteLength;case ea:case ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case na:case ia:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qo:case $o:return Math.max(n,16)*Math.max(e,8)/4;case Xo:case Yo:return Math.max(n,8)*Math.max(e,8)/2;case Zo:case Jo:case Qo:case jo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Ko:case sa:case el:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case al:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ol:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ll:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case cl:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ul:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ml:case gl:case _l:return Math.ceil(n/4)*Math.ceil(e/4)*16;case xl:case vl:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ra:case yl:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Em(n){switch(n){case dn:case Gc:return{byteLength:1,components:1};case Js:case Wc:case zn:return{byteLength:2,components:1};case zo:case ko:return{byteLength:2,components:4};case Bn:case Bo:case An:return{byteLength:4,components:1};case Xc:case qc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function sf(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function wm(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)u=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=n.SHORT;else if(c instanceof Uint32Array)u=n.UNSIGNED_INT;else if(c instanceof Int32Array)u=n.INT;else if(c instanceof Int8Array)u=n.BYTE;else if(c instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let h=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,h);else{f.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<f.length;u++){let g=f[d],y=f[u];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,f[d]=y)}f.length=d+1;for(let u=0,g=f.length;u<g;u++){let y=f[u];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Am=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rm=`#ifdef USE_ALPHAHASH
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
#endif`,Cm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Im=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dm=`#ifdef USE_AOMAP
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
#endif`,Nm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Um=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Fm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Om=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,Hm=`#ifdef USE_BUMPMAP
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
#endif`,Vm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ym=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$m=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,Km=`vec3 transformedNormal = objectNormal;
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
#endif`,Qm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ag=`#ifdef USE_ENVMAP
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
#endif`,og=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ug=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_g=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,xg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,vg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Eg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Tg=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Cg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ig=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ng=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fg=`#if defined( USE_POINTS_UV )
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
#endif`,Og=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Xg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Zg=`#ifdef USE_NORMALMAP
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
#endif`,Jg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,n0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,c0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,h0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,u0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,d0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,f0=`#ifdef USE_SKINNING
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
#endif`,p0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m0=`#ifdef USE_SKINNING
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
#endif`,g0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,y0=`#ifdef USE_TRANSMISSION
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,M0=`#ifdef USE_TRANSMISSION
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
#endif`,S0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,b0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#endif`,E0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
#endif`,T0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,w0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
}`,R0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L0=`#include <common>
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
}`,D0=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,N0=`#define DISTANCE
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
}`,U0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,F0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,O0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B0=`uniform float scale;
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
}`,z0=`uniform vec3 diffuse;
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
}`,k0=`#include <common>
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
}`,H0=`uniform vec3 diffuse;
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
}`,V0=`#define LAMBERT
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
}`,G0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,W0=`#define MATCAP
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
}`,X0=`#define MATCAP
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
}`,q0=`#define NORMAL
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
}`,Y0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$0=`#define PHONG
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
}`,Z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,J0=`#define STANDARD
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
}`,K0=`#define STANDARD
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,Q0=`#define TOON
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
}`,j0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,e_=`uniform float size;
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
}`,t_=`uniform vec3 diffuse;
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
}`,n_=`#include <common>
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
}`,i_=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,s_=`uniform float rotation;
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
}`,r_=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Am,alphahash_pars_fragment:Rm,alphamap_fragment:Cm,alphamap_pars_fragment:Pm,alphatest_fragment:Im,alphatest_pars_fragment:Lm,aomap_fragment:Dm,aomap_pars_fragment:Nm,batching_pars_vertex:Um,batching_vertex:Fm,begin_vertex:Om,beginnormal_vertex:Bm,bsdfs:zm,iridescence_fragment:km,bumpmap_pars_fragment:Hm,clipping_planes_fragment:Vm,clipping_planes_pars_fragment:Gm,clipping_planes_pars_vertex:Wm,clipping_planes_vertex:Xm,color_fragment:qm,color_pars_fragment:Ym,color_pars_vertex:$m,color_vertex:Zm,common:Jm,defaultnormal_vertex:Km,displacementmap_pars_vertex:Qm,displacementmap_vertex:jm,emissivemap_fragment:eg,emissivemap_pars_fragment:tg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:ag,envmap_pars_vertex:og,envmap_physical_pars_fragment:xg,envmap_vertex:lg,fog_vertex:cg,fog_pars_vertex:hg,fog_fragment:ug,fog_pars_fragment:dg,gradientmap_pars_fragment:fg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:gg,lights_pars_begin:_g,lights_toon_fragment:vg,lights_toon_pars_fragment:yg,lights_phong_fragment:Mg,lights_phong_pars_fragment:Sg,lights_physical_fragment:bg,lights_physical_pars_fragment:Eg,lights_fragment_begin:Tg,lights_fragment_maps:wg,lights_fragment_end:Ag,lightprobes_pars_fragment:Rg,logdepthbuf_fragment:Cg,logdepthbuf_pars_fragment:Pg,logdepthbuf_pars_vertex:Ig,logdepthbuf_vertex:Lg,map_fragment:Dg,map_pars_fragment:Ng,map_particle_fragment:Ug,map_particle_pars_fragment:Fg,metalnessmap_fragment:Og,metalnessmap_pars_fragment:Bg,morphinstance_vertex:zg,morphcolor_vertex:kg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Gg,normal_fragment_begin:Wg,normal_fragment_maps:Xg,normal_pars_fragment:qg,normal_pars_vertex:Yg,normal_vertex:$g,normalmap_pars_fragment:Zg,clearcoat_normal_fragment_begin:Jg,clearcoat_normal_fragment_maps:Kg,clearcoat_pars_fragment:Qg,iridescence_pars_fragment:jg,opaque_fragment:e0,packing:t0,premultiplied_alpha_fragment:n0,project_vertex:i0,dithering_fragment:s0,dithering_pars_fragment:r0,roughnessmap_fragment:a0,roughnessmap_pars_fragment:o0,shadowmap_pars_fragment:l0,shadowmap_pars_vertex:c0,shadowmap_vertex:h0,shadowmask_pars_fragment:u0,skinbase_vertex:d0,skinning_pars_vertex:f0,skinning_vertex:p0,skinnormal_vertex:m0,specularmap_fragment:g0,specularmap_pars_fragment:_0,tonemapping_fragment:x0,tonemapping_pars_fragment:v0,transmission_fragment:y0,transmission_pars_fragment:M0,uv_pars_fragment:S0,uv_pars_vertex:b0,uv_vertex:E0,worldpos_vertex:T0,background_vert:w0,background_frag:A0,backgroundCube_vert:R0,backgroundCube_frag:C0,cube_vert:P0,cube_frag:I0,depth_vert:L0,depth_frag:D0,distance_vert:N0,distance_frag:U0,equirect_vert:F0,equirect_frag:O0,linedashed_vert:B0,linedashed_frag:z0,meshbasic_vert:k0,meshbasic_frag:H0,meshlambert_vert:V0,meshlambert_frag:G0,meshmatcap_vert:W0,meshmatcap_frag:X0,meshnormal_vert:q0,meshnormal_frag:Y0,meshphong_vert:$0,meshphong_frag:Z0,meshphysical_vert:J0,meshphysical_frag:K0,meshtoon_vert:Q0,meshtoon_frag:j0,points_vert:e_,points_frag:t_,shadow_vert:n_,shadow_frag:i_,sprite_vert:s_,sprite_frag:r_},Me={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ei={basic:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:tn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:tn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:tn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ge(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:tn([Me.points,Me.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:tn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:tn([Me.common,Me.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:tn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:tn([Me.sprite,Me.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:tn([Me.common,Me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:tn([Me.lights,Me.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};ei.physical={uniforms:tn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var Ml={r:0,b:0,g:0},a_=new ut,rf=new Ve;rf.set(-1,0,0,0,1,0,0,0,1);function o_(n,e,t,i,s,r){let a=new Ge(0),o=s===!0?0:1,l,c,h=null,f=0,d=null;function u(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let M=S.backgroundBlurriness>0;T=e.get(T,M)}return T}function g(S){let T=!1,M=u(S);M===null?p(a,o):M&&M.isColor&&(p(M,1),T=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,T){let M=u(T);M&&M.isCubeTexture?(c===void 0&&(c=new gt(new Jn(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:ls(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:Gt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(a_.makeRotationFromEuler(T.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(rf),c.material.toneMapped=at.getTransfer(M.colorSpace)!==dt,(h!==M||f!==M.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new gt(new Li(2,2),new yn({name:"BackgroundMaterial",uniforms:ls(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=at.getTransfer(M.colorSpace)!==dt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,T){S.getRGB(Ml,sh(n)),t.buffers.color.setClear(Ml.r,Ml.g,Ml.b,T,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:y,dispose:m}}function l_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(N,H,X,P,V){let q=!1,z=f(N,P,X,H);r!==z&&(r=z,c(r.object)),q=u(N,P,X,V),q&&g(N,P,X,V),V!==null&&e.update(V,n.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(N,H,X,P),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,H,X,P){let V=P.wireframe===!0,q=i[H.id];q===void 0&&(q={},i[H.id]=q);let z=N.isInstancedMesh===!0?N.id:0,ne=q[z];ne===void 0&&(ne={},q[z]=ne);let G=ne[X.id];G===void 0&&(G={},ne[X.id]=G);let Q=G[V];return Q===void 0&&(Q=d(l()),G[V]=Q),Q}function d(N){let H=[],X=[],P=[];for(let V=0;V<t;V++)H[V]=0,X[V]=0,P[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:P,object:N,attributes:{},index:null}}function u(N,H,X,P){let V=r.attributes,q=H.attributes,z=0,ne=X.getAttributes();for(let G in ne)if(ne[G].location>=0){let ee=V[G],Ee=q[G];if(Ee===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(Ee=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(Ee=N.instanceColor)),ee===void 0||ee.attribute!==Ee||Ee&&ee.data!==Ee.data)return!0;z++}return r.attributesNum!==z||r.index!==P}function g(N,H,X,P){let V={},q=H.attributes,z=0,ne=X.getAttributes();for(let G in ne)if(ne[G].location>=0){let ee=q[G];ee===void 0&&(G==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),G==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let Ee={};Ee.attribute=ee,ee&&ee.data&&(Ee.data=ee.data),V[G]=Ee,z++}r.attributes=V,r.attributesNum=z,r.index=P}function y(){let N=r.newAttributes;for(let H=0,X=N.length;H<X;H++)N[H]=0}function p(N){m(N,0)}function m(N,H){let X=r.newAttributes,P=r.enabledAttributes,V=r.attributeDivisors;X[N]=1,P[N]===0&&(n.enableVertexAttribArray(N),P[N]=1),V[N]!==H&&(n.vertexAttribDivisor(N,H),V[N]=H)}function S(){let N=r.newAttributes,H=r.enabledAttributes;for(let X=0,P=H.length;X<P;X++)H[X]!==N[X]&&(n.disableVertexAttribArray(X),H[X]=0)}function T(N,H,X,P,V,q,z){z===!0?n.vertexAttribIPointer(N,H,X,V,q):n.vertexAttribPointer(N,H,X,P,V,q)}function M(N,H,X,P){y();let V=P.attributes,q=X.getAttributes(),z=H.defaultAttributeValues;for(let ne in q){let G=q[ne];if(G.location>=0){let Q=V[ne];if(Q===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let ee=Q.normalized,Ee=Q.itemSize,Be=e.get(Q);if(Be===void 0)continue;let Y=Be.buffer,xe=Be.type,Te=Be.bytesPerElement,Ne=xe===n.INT||xe===n.UNSIGNED_INT||Q.gpuType===Bo;if(Q.isInterleavedBufferAttribute){let ve=Q.data,Ue=ve.isInterleavedBuffer===!0?ve.stride:ve.itemSize,Mt=Q.offset;if(ve.isInstancedInterleavedBuffer||ve.isInstancedBufferAttribute){for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze,ve.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ze=0;ze<G.locationSize;ze++)T(G.location+ze,Ee/G.locationSize,xe,ee,Ue*Te,(Mt+Ee/G.locationSize*ze)*Te,Ne)}else{if(Q.isInstancedBufferAttribute){for(let ve=0;ve<G.locationSize;ve++)m(G.location+ve,Q.meshPerAttribute);N.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<G.locationSize;ve++)p(G.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Y);for(let ve=0;ve<G.locationSize;ve++)T(G.location+ve,Ee/G.locationSize,xe,ee,Ee*Te,Ee/G.locationSize*ve*Te,Ne)}}else if(z!==void 0){let ee=z[ne];if(ee!==void 0)switch(ee.length){case 2:n.vertexAttrib2fv(G.location,ee);break;case 3:n.vertexAttrib3fv(G.location,ee);break;case 4:n.vertexAttrib4fv(G.location,ee);break;default:n.vertexAttrib1fv(G.location,ee)}}}}S()}function w(){B();for(let N in i){let H=i[N];for(let X in H){let P=H[X];for(let V in P){let q=P[V];for(let z in q)h(q[z].object),delete q[z];delete P[V]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;let H=i[N.id];for(let X in H){let P=H[X];for(let V in P){let q=P[V];for(let z in q)h(q[z].object),delete q[z];delete P[V]}}delete i[N.id]}function _(N){for(let H in i){let X=i[H];for(let P in X){let V=X[P];if(V[N.id]===void 0)continue;let q=V[N.id];for(let z in q)h(q[z].object),delete q[z];delete V[N.id]}}}function b(N){for(let H in i){let X=i[H],P=N.isInstancedMesh===!0?N.id:0,V=X[P];if(V!==void 0){for(let q in V){let z=V[q];for(let ne in z)h(z[ne].object),delete z[ne];delete V[q]}delete X[P],Object.keys(X).length===0&&delete i[H]}}}function B(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:B,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:S}}function c_(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),t.update(c,i,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let d=0;for(let u=0;u<h;u++)d+=c[u];t.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function h_(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==kn&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==dn&&_!==An&&!b&&i.convert(_)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Oe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:M,maxSamples:w,samples:A}}function u_(n){let e=this,t=null,i=0,s=!1,r=!1,a=new Fn,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||i!==0||s;return s=d,i=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let g=f.clippingPlanes,y=f.clipIntersection,p=f.clipShadows,m=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let S=r?0:i,T=S*4,M=m.clippingState||null;l.value=M,M=h(g,d,T,u);for(let w=0;w!==T;++w)M[w]=t[w];m.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,u,g){let y=f!==null?f.length:0,p=null;if(y!==0){if(p=l.value,g!==!0||p===null){let m=u+y*4,S=d.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,M=u;T!==y;++T,M+=4)a.copy(f[T]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}var ca=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ir(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jn(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:ls(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Gt,blending:is});r.uniforms.tEquirect.value=t;let a=new gt(s,r),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=an),new qs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Fd=256,d_=3,f_=20,af=256,of=16,p_=3,m_=new D,g_=new Ge,Qs=class n{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new qs(1,10,null),this._boxMesh=new gt(new Jn(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=m_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,d=l.autoClearColor,u=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(g_));let p=new qs(i,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=u,l.autoClearStencil=g,e.background=y,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Fd,th(e))}_fromTexture(e,t){e.mapping===rs||e.mapping===Zs?this._setSize(e.image.length===0?Fd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,t=Od(e,!1,!1),i=Math.log2(e)-d_;for(let s=0;s<=i;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==t||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Od(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===rs||e.mapping===Zs?(this._cubemapMaterial===null&&(this._cubemapMaterial=zd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Bd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=__(),this._integrationMaterial=x_());let t=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/of);for(let a=0;a<=i;a++){let o=n.lodToRoughness(a,i);if(a>i-p_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(af*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=v_());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};function Od(n,e,t){return new ca(n,{minFilter:yi,generateMipmaps:e,type:zn,colorSpace:yr,depthBuffer:t})}function ha(n,e,t){return new yn({name:n,uniforms:e,vertexShader:$e.cube_vert,fragmentShader:t,side:Gt,blending:is,depthTest:!1,depthWrite:!1})}function __(){return ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${af}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function x_(){return ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:of}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function v_(){return ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${f_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Bd(){return ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function zd(){return ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function y_(n){let e=new WeakMap,t=new WeakMap,i=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Uo||u===Fo)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let y=new ca(g.height);return y.fromEquirectangularTexture(n,d),e.set(d,y),d.addEventListener("dispose",c),o(y.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let u=d.mapping,g=u===Uo||u===Fo,y=u===rs||u===Zs;if(g||y){let p=t.get(d),m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new Qs(n)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{let S=d.image;return g&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new Qs(n)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",h),p.texture):null}}}return d}function o(d,u){return u===Uo?d.mapping=rs:u===Fo&&(d.mapping=Zs),d}function l(d){let u=0,g=6;for(let y=0;y<g;y++)d[y]!==void 0&&u++;return u===g}function c(d){let u=d.target;u.removeEventListener("dispose",c);let g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function M_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ki("WebGLRenderer: "+i+" extension not supported."),s}}}function S_(n,e,t,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function h(g){let y=g.attributes;for(let p in y)e.update(y[p],n.ARRAY_BUFFER)}function f(g){let y=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let S=y!==null?y.array.length:p.array.length/3-1,T=p.count>=65535?Tr:Er,M=new T(Math.ceil(S/3)*6,1),w=M.array;if(y!==null){let _=y.array;m=y.version;for(let b=0,B=0;b<S;b+=3){let I=_[b+0],N=_[b+1],H=_[b+2];w[B++]=I,w[B++]=N,w[B++]=N,w[B++]=H,w[B++]=H,w[B++]=I}}else{m=p.version;for(let _=0,b=0;_<S;_+=3){let B=_+0,I=_+1,N=_+2;w[b++]=B,w[b++]=I,w[b++]=I,w[b++]=N,w[b++]=N,w[b++]=B}}M.version=m;let A=r.get(g);A&&e.remove(A),r.set(g,M)}function d(g){let y=r.get(g);if(y){let p=g.index;p!==null&&y.version<p.version&&f(g)}else f(g);return r.get(g)}function u(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:h,getWireframeAttribute:d,dispose:u}}function b_(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,d){n.drawElements(i,d,r,f*a),t.update(d,i,1)}function c(f,d,u){u!==0&&(n.drawElementsInstanced(i,d,r,f*a,u),t.update(d,i,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,f,0,u);let y=0;for(let p=0;p<u;p++)y+=d[p];t.update(y,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function E_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function T_(n,e,t){let i=new WeakMap,s=new mt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==f){let B=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",B)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;u===!0&&(T=1),g===!0&&(T=2),y===!0&&(T=3);let M=o.attributes.position.count*T,w=1;M>e.maxTextureSize&&(w=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*w*4*f),_=new Sr(A,M,w,f);_.type=An,_.needsUpdate=!0;let b=T*4;for(let I=0;I<f;I++){let N=p[I],H=m[I],X=S[I],P=M*w*4*I;for(let V=0;V<N.count;V++){let q=V*b;u===!0&&(s.fromBufferAttribute(N,V),A[P+q+0]=s.x,A[P+q+1]=s.y,A[P+q+2]=s.z,A[P+q+3]=0),g===!0&&(s.fromBufferAttribute(H,V),A[P+q+4]=s.x,A[P+q+5]=s.y,A[P+q+6]=s.z,A[P+q+7]=0),y===!0&&(s.fromBufferAttribute(X,V),A[P+q+8]=s.x,A[P+q+9]=s.y,A[P+q+10]=s.z,A[P+q+11]=X.itemSize===4?s.w:1)}}d={count:f,texture:_,size:new ae(M,w)},i.set(o,d),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function w_(n,e,t,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,d=e.get(c,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let u=c.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var A_={[Uc]:"LINEAR_TONE_MAPPING",[Fc]:"REINHARD_TONE_MAPPING",[Oc]:"CINEON_TONE_MAPPING",[Bc]:"ACES_FILMIC_TONE_MAPPING",[kc]:"AGX_TONE_MAPPING",[Hc]:"NEUTRAL_TONE_MAPPING",[zc]:"CUSTOM_TONE_MAPPING"};function R_(n,e,t,i,s,r){let a=new en(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new un;h.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new It([0,2,0,0,2,0],2));let f=new Mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new gt(h,f),u=new vi(-1,1,1,-1,0,1),g=null,y=null,p=!1,m,S=null,T=[],M=!1;this.setSize=function(w,A){a.setSize(w,A),o!==null&&o.setSize(w,A),l!==null&&l.setSize(w,A);for(let _=0;_<T.length;_++){let b=T[_];b.setSize&&b.setSize(w,A)}},this.setEffects=function(w){T=w,M=T.length>0&&T[0].isRenderPass===!0;let A=a.width,_=a.height;T.length>0&&o===null&&(o=new en(A,_,{type:zn,depthBuffer:!1,stencilBuffer:!1}),l=new en(A,_,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(B=>B.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new _i(A,_),r===!0&&(c.format=Mi,c.type=as)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let B=0;B<T.length;B++){let I=T[B];I.setSize&&I.setSize(A,_),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(w,A){if(p||w.toneMapping===wn&&T.length===0)return!1;if(S=A,A!==null){let _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return M===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=wn,!0},this.hasRenderPass=function(){return M},this.end=function(w,A){w.toneMapping=m,p=!0;let _=a,b=o;for(let B=0;B<T.length;B++){let I=T[B];I.enabled!==!1&&(I.render(w,b,_,A),I.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==w.outputColorSpace||y!==w.toneMapping){g=w.outputColorSpace,y=w.toneMapping,f.defines={},at.getTransfer(g)===dt&&(f.defines.SRGB_TRANSFER="");let B=A_[y];B&&(f.defines[B]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(S),w.render(d,u),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}var lf=new jt,cf=new _i(1,1),hf=new Dr(1),uf=new Sr,df=new co,ff=new Ir,kd=[],Hd=[],Vd=new Float32Array(16),Gd=new Float32Array(9),Wd=new Float32Array(4);function js(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=kd[s];if(r===void 0&&(r=new Float32Array(s),kd[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function El(n,e){let t=Hd[e];t===void 0&&(t=new Int32Array(e),Hd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function P_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function I_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function L_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function D_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Wd.set(i),n.uniformMatrix2fv(this.addr,!1,Wd),Dt(t,i)}}function N_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Gd.set(i),n.uniformMatrix3fv(this.addr,!1,Gd),Dt(t,i)}}function U_(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;Vd.set(i),n.uniformMatrix4fv(this.addr,!1,Vd),Dt(t,i)}}function F_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function O_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function B_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function z_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function k_(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function H_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function V_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function G_(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function Tl(n){return n.version===0&&(n.compareFunction=Kc,n.needsUpdate=!0),n}function W_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?r=Tl(cf):r=lf,t.setTexture2D(e||r,s)}function X_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||df,s)}function q_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_CUBE_SHADOW?r=Tl(hf):r=ff,t.setTextureCube(e||r,s)}function Y_(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||uf,s)}function $_(n){switch(n){case 5126:return C_;case 35664:return P_;case 35665:return I_;case 35666:return L_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return F_;case 35667:case 35671:return O_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return k_;case 36294:return H_;case 36295:return V_;case 36296:return G_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return q_;case 36289:case 36303:case 36311:case 36292:return Y_}}function Z_(n,e){n.uniform1fv(this.addr,e)}function J_(n,e){let t=js(e,this.size,2);n.uniform2fv(this.addr,t)}function K_(n,e){let t=js(e,this.size,3);n.uniform3fv(this.addr,t)}function Q_(n,e){let t=js(e,this.size,4);n.uniform4fv(this.addr,t)}function j_(n,e){let t=js(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function ex(n,e){let t=js(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function tx(n,e){let t=js(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function nx(n,e){n.uniform1iv(this.addr,e)}function ix(n,e){n.uniform2iv(this.addr,e)}function sx(n,e){n.uniform3iv(this.addr,e)}function rx(n,e){n.uniform4iv(this.addr,e)}function ax(n,e){n.uniform1uiv(this.addr,e)}function ox(n,e){n.uniform2uiv(this.addr,e)}function lx(n,e){n.uniform3uiv(this.addr,e)}function cx(n,e){n.uniform4uiv(this.addr,e)}function hx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Tl(cf):a=lf;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ux(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||df,r[a])}function dx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));let a;this.type===n.SAMPLER_CUBE_SHADOW?a=Tl(hf):a=ff;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function fx(n,e,t){let i=this.cache,s=e.length,r=El(t,s);Lt(i,r)||(n.uniform1iv(this.addr,r),Dt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uf,r[a])}function px(n){switch(n){case 5126:return Z_;case 35664:return J_;case 35665:return K_;case 35666:return Q_;case 35674:return j_;case 35675:return ex;case 35676:return tx;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return sx;case 35669:case 35673:return rx;case 5125:return ax;case 36294:return ox;case 36295:return lx;case 36296:return cx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return ux;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}var mh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$_(t.type)}},gh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=px(t.type)}},_h=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},fh=/(\w+)(\])?(\[|\.)?/g;function Xd(n,e){n.seq.push(e),n.map[e.id]=e}function mx(n,e,t){let i=n.name,s=i.length;for(fh.lastIndex=0;;){let r=fh.exec(i),a=fh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Xd(t,c===void 0?new mh(o,n,e):new gh(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new _h(o),Xd(t,f)),t=f}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);mx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function qd(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var gx=37297,_x=0;function xx(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var Yd=new Ve;function vx(n){at._getMatrix(Yd,at.workingColorSpace,n);let e=`mat3( ${Yd.elements.map(t=>t.toFixed(4))} )`;switch(at.getTransfer(n)){case Mr:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function $d(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+xx(n.getShaderSource(e),o)}else return r}function yx(n,e){let t=vx(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Mx={[Uc]:"Linear",[Fc]:"Reinhard",[Oc]:"Cineon",[Bc]:"ACESFilmic",[kc]:"AgX",[Hc]:"Neutral",[zc]:"Custom"};function Sx(n,e){let t=Mx[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sl=new D;function bx(){at.getLuminanceCoefficients(Sl);let n=Sl.x.toFixed(4),e=Sl.y.toFixed(4),t=Sl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(la).join(`
`)}function Tx(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function wx(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function la(n){return n!==""}function Zd(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Jd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Ax=/^[ \t]*#include +<([\w\d./]+)>/gm;function xh(n){return n.replace(Ax,Rx)}function Rx(n,e){let t=$e[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return xh(t)}var Cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Kd(n){return n.replace(Cx,Px)}function Px(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Qd(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ix={[Qr]:"SHADOWMAP_TYPE_PCF",[Ys]:"SHADOWMAP_TYPE_VSM"};function Lx(n){return Ix[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Dx={[Zs]:"ENVMAP_MODE_REFRACTION"};function Nx(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Dx[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ux={[No]:"ENVMAP_BLENDING_MULTIPLY",[hd]:"ENVMAP_BLENDING_MIX",[ud]:"ENVMAP_BLENDING_ADD"};function Fx(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":Ux[n.combine]||"ENVMAP_BLENDING_NONE"}function Ox(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Lx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Nx(t),f=Fx(t),d=Ex(t),u=Tx(r),g=s.createProgram(),y,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(la).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u].filter(la).join(`
`),p.length>0&&(p+=`
`)):(y=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),p=[Qd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,u,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?$e.tonemapping_pars_fragment:"",t.toneMapping!==wn?Sx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,yx("linearToOutputTexel",t.outputColorSpace),bx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),a=xh(a),a=Zd(a,t),a=Jd(a,t),o=xh(o),o=Zd(o,t),o=Jd(o,t),a=Kd(a),o=Kd(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",t.glslVersion===Qc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=m+y+a,T=m+p+o,M=qd(s,s.VERTEX_SHADER,S),w=qd(s,s.FRAGMENT_SHADER,T);s.attachShader(g,M),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(I){if(n.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(M)||"",X=s.getShaderInfoLog(w)||"",P=N.trim(),V=H.trim(),q=X.trim(),z=!0,ne=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,M,w);else{let G=$d(s,M,"vertex"),Q=$d(s,w,"fragment");ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+P+`
`+G+`
`+Q)}else P!==""?Oe("WebGLProgram: Program Info Log:",P):(V===""||q==="")&&(ne=!1);ne&&(I.diagnostics={runnable:z,programLog:P,vertexShader:{log:V,prefix:y},fragmentShader:{log:q,prefix:p}})}s.deleteShader(M),s.deleteShader(w),_=new Ks(s,g),b=wx(s,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let B=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=s.getProgramParameter(g,gx)),B},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_x++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=w,this}var Bx=0,vh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new yh(e),t.set(e,i)),i}},yh=class{constructor(e){this.id=Bx++,this.code=e,this.usedTimes=0}};function zx(n){return n===Fi||n===sa||n===ra}function kx(n,e,t,i,s,r){let a=new br,o=new vh,l=new Set,c=[],h=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,B,I,N,H){let X=I.fog,P=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,q=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||V,q),ne=d[_.type],G=i.precision;_.precision!==null&&(G=i.getMaxPrecision(_.precision),G!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",G,"instead."));let Q=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,ee=Q!==void 0?Q.length:0,Ee=0;P.morphAttributes.position!==void 0&&(Ee=1),P.morphAttributes.normal!==void 0&&(Ee=2),P.morphAttributes.color!==void 0&&(Ee=3);let Be,Y,xe,Te;if(ne){let ye=ei[ne];Be=ye.vertexShader,Y=ye.fragmentShader}else{Be=_.vertexShader,Y=_.fragmentShader;let ye=o.getVertexShaderStage(_),ft=o.getFragmentShaderStage(_);o.update(_,ye,ft),xe=ye.id,Te=ft.id}let Ne=n.getRenderTarget(),ve=n.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,ze=!!_.map,Ze=!!_.matcap,et=!!z,j=et&&z.isPMREMTexture===!0,he=!!_.aoMap,oe=!!_.lightMap,be=!!_.bumpMap&&_.wireframe===!1,_e=!!_.normalMap,Xe=!!_.displacementMap,Ie=!!_.emissiveMap,tt=!!_.metalnessMap,it=!!_.roughnessMap,ct=_.anisotropy>0,L=_.clearcoat>0,Rt=_.diffuseRoughness>0,Qe=_.dispersion>0,_t=_.retroreflectivity>0,pe=_.iridescence>0,At=_.sheen>0,Fe=_.transmission>0,He=ct&&!!_.anisotropyMap,E=L&&!!_.clearcoatMap,x=L&&!!_.clearcoatNormalMap,F=L&&!!_.clearcoatRoughnessMap,ie=Rt&&!!_.diffuseRoughnessMap,K=pe&&!!_.iridescenceMap,le=pe&&!!_.iridescenceThicknessMap,me=At&&!!_.sheenColorMap,$=At&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ue=!!_.specularColorMap,R=!!_.specularIntensityMap,J=Fe&&!!_.transmissionMap,W=Fe&&!!_.thicknessMap,de=!!_.gradientMap,re=!!_.alphaMap,ce=_.alphaTest>0,Le=!!_.alphaHash,Ye=!!_.extensions,se=wn;_.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(se=n.toneMapping);let De=j?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,qe={shaderID:ne,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:Y,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:Te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:G,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:Ne===null?n.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:at.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:Ze,envMap:et,envMapMode:et&&z.mapping,envMapPMREM:j,envMapMaxLod:j?De.length-1:null,envMapSize:j?De[0].width:null,aoMap:he,lightMap:oe,bumpMap:be,normalMap:_e,displacementMap:Xe,emissiveMap:Ie,normalMapObjectSpace:_e&&_.normalMapType===pd,normalMapTangentSpace:_e&&_.normalMapType===aa,packedNormalMap:_e&&_.normalMapType===aa&&zx(_.normalMap.format),metalnessMap:tt,roughnessMap:it,anisotropy:ct,anisotropyMap:He,clearcoat:L,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:F,diffuseRoughness:Rt,diffuseRoughnessMap:ie,dispersion:Qe,retroreflection:_t,iridescence:pe,iridescenceMap:K,iridescenceThicknessMap:le,sheen:At,sheenColorMap:me,sheenRoughnessMap:$,specularMap:Z,specularColorMap:ue,specularIntensityMap:R,transmission:Fe,transmissionMap:J,thicknessMap:W,gradientMap:de,opaque:_.transparent===!1&&_.blending===$s&&_.alphaToCoverage===!1,alphaMap:re,alphaTest:ce,alphaHash:Le,combine:_.combine,mapUv:ze&&u(_.map.channel),aoMapUv:he&&u(_.aoMap.channel),lightMapUv:oe&&u(_.lightMap.channel),bumpMapUv:be&&u(_.bumpMap.channel),normalMapUv:_e&&u(_.normalMap.channel),displacementMapUv:Xe&&u(_.displacementMap.channel),emissiveMapUv:Ie&&u(_.emissiveMap.channel),metalnessMapUv:tt&&u(_.metalnessMap.channel),roughnessMapUv:it&&u(_.roughnessMap.channel),anisotropyMapUv:He&&u(_.anisotropyMap.channel),clearcoatMapUv:E&&u(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&u(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&u(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&u(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&u(_.iridescenceMap.channel),iridescenceThicknessMapUv:le&&u(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&u(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&u(_.sheenRoughnessMap.channel),specularMapUv:Z&&u(_.specularMap.channel),specularColorMapUv:ue&&u(_.specularColorMap.channel),specularIntensityMapUv:R&&u(_.specularIntensityMap.channel),transmissionMapUv:J&&u(_.transmissionMap.channel),thicknessMapUv:W&&u(_.thicknessMap.channel),alphaMapUv:re&&u(_.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(_e||ct),vertexNormals:!!P.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!P.attributes.uv&&(ze||re),fog:!!X,useFog:_.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||P.attributes.normal===void 0&&_e===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ve,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(ye=>ye.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&B.length>0,shadowMapType:n.shadowMap.type,toneMapping:se,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&at.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Ie&&_.emissiveMap.isVideoTexture===!0&&at.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===Gt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ye&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&_.extensions.multiDraw===!0||Mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function y(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)b.push(B),b.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(n.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let b=d[_.type],B;if(b){let I=ei[b];B=Dd.clone(I.uniforms)}else B=_.uniforms;return B}function T(_,b){let B=h.get(b);return B!==void 0?++B.usedTimes:(B=new Ox(n,b,_,s),c.push(B),h.set(b,B)),B}function M(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:S,acquireProgram:T,releaseProgram:M,releaseShaderCache:w,programs:c,dispose:A}}function Hx(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Vx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ef(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,g,y,p,m){let S=n[e];return S===void 0?(S={id:d.id,object:d,geometry:u,material:g,materialVariant:a(d),groupOrder:y,renderOrder:d.renderOrder,z:p,group:m},n[e]=S):(S.id=d.id,S.object=d,S.geometry=u,S.material=g,S.materialVariant=a(d),S.groupOrder=y,S.renderOrder=d.renderOrder,S.z=p,S.group=m),e++,S}function l(d,u,g,y,p,m,S){S.reversedDepth===!0&&(p=-p);let T=o(d,u,g,y,p,m);g.transmission>0?i.push(T):g.transparent===!0?s.push(T):t.push(T)}function c(d,u,g,y,p,m){let S=o(d,u,g,y,p,m);g.transmission>0?i.unshift(S):g.transparent===!0?s.unshift(S):t.unshift(S)}function h(d,u){t.length>1&&t.sort(d||Vx),i.length>1&&i.sort(u||jd),s.length>1&&s.sort(u||jd)}function f(){for(let d=e,u=n.length;d<u;d++){let g=n[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Gx(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ef,n.set(i,[a])):s>=r.length?(a=new ef,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Wx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new Ge};break;case"SpotLight":t={position:new D,direction:new D,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function Xx(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var qx=0;function Yx(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $x(n){let e=new Wx,t=Xx(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);let s=new D,r=new ut,a=new ut;function o(c){let h=0,f=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let u=0,g=0,y=0,p=0,m=0,S=0,T=0,M=0,w=0,A=0,_=0,b=0,B=0,I=0;c.sort(Yx);for(let H=0,X=c.length;H<X;H++){let P=c[H],V=P.color,q=P.intensity,z=P.distance,ne=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Fi?ne=P.shadow.map.texture:ne=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=V.r*q,f+=V.g*q,d+=V.b*q;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],q);I++}else if(P.isSunLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=ne;let Ee=Q.getViewportCount();for(let Be=0;Be<Ee;Be++)i.sunShadowMatrix[y+Be]=Q.getMatrix(Be),i.sunShadowCascade[y+Be]=Q._cascadeData[Be];y+=Ee,g++}i.sun[u]=G,u++}else if(P.isDirectionalLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.directionalShadow[p]=ee,i.directionalShadowMap[p]=ne,i.directionalShadowMatrix[p]=P.shadow.matrix,w++}i.directional[p]=G,p++}else if(P.isSpotLight){let G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(V).multiplyScalar(q),G.distance=z,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[S]=G;let Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[S]=Q.matrix,P.castShadow){let ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,i.spotShadow[S]=ee,i.spotShadowMap[S]=ne,_++}S++}else if(P.isRectAreaLight){let G=e.get(P);G.color.copy(V).multiplyScalar(q),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[T]=G,T++}else if(P.isPointLight){let G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){let Q=P.shadow,ee=t.get(P);ee.shadowIntensity=Q.intensity,ee.shadowBias=Q.bias,ee.shadowNormalBias=Q.normalBias,ee.shadowRadius=Q.radius,ee.shadowMapSize=Q.mapSize,ee.shadowCameraNear=Q.camera.near,ee.shadowCameraFar=Q.camera.far,i.pointShadow[m]=ee,i.pointShadowMap[m]=ne,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=G,m++}else if(P.isHemisphereLight){let G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(q),G.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[M]=G,M++}}T>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=d;let N=i.hash;(N.sunLength!==u||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==S||N.rectAreaLength!==T||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==w||N.numPointShadows!==A||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==I)&&(i.sun.length=u,i.directional.length=p,i.spot.length=S,i.rectArea.length=T,i.point.length=m,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-B,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=I,N.sunLength=u,N.directionalLength=p,N.pointLength=m,N.spotLength=S,N.rectAreaLength=T,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=w,N.numPointShadows=A,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=I,i.version=qx++)}function l(c,h){let f=0,d=0,u=0,g=0,y=0,p=0,m=h.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let M=c[S];if(M.isSunLight){let w=i.sun[f];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),f++}else if(M.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(M.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(M.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(M.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let w=i.point[u];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(m),u++}else if(M.isHemisphereLight){let w=i.hemi[p];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function tf(n){let e=new $x(n),t=[],i=[],s=[];function r(f){h.camera=f,t.length=0,i.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){i.push(f)}function l(){e.setup(t),s.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Zx(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new tf(n),e.set(s,[o])):r>=a.length?(o=new tf(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var Jx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],jx=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],nf=new ut,oa=new D,ph=new D;function ev(n,e,t){let i=new Pi,s=new ae,r=new ae,a=new mt,o=new Gs,l=new So,c={},h=t.maxTextureSize,f={[Qn]:Gt,[Gt]:Qn,[Tn]:Tn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:Jx,fragmentShader:Kx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let g=new un;g.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new gt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qr;let m=this.type;this.render=function(A,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Xu&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Qr);let B=n.getRenderTarget(),I=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),H=n.state;H.setBlending(is),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let X=m!==this.type;X&&_.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(V=>V.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,V=A.length;P<V;P++){let q=A[P],z=q.shadow;if(z===void 0){Oe("WebGLShadowMap:",q,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let ne=z.getFrameExtents();s.multiply(ne),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,z.mapSize.y=r.y));let G=n.state.buffers.depth.getReversed();if(z.camera._reversedDepth=G,z.map===null||X===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===Ys){if(q.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new en(s.x,s.y,{format:Fi,type:zn,minFilter:an,magFilter:an,generateMipmaps:!1}),z.map.texture.name=q.name+".shadowMap",z.map.depthTexture=new _i(s.x,s.y,An),z.map.depthTexture.name=q.name+".shadowMapDepth",z.map.depthTexture.format=mi,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot}else q.isPointLight?(z.map=new ca(s.x),z.map.depthTexture=new Dr(s.x,Bn)):(z.map=new en(s.x,s.y),z.map.depthTexture=new _i(s.x,s.y,Bn)),z.map.depthTexture.name=q.name+".shadowMap",z.map.depthTexture.format=mi,this.type===Qr?(z.map.depthTexture.compareFunction=G?Jc:Zc,z.map.depthTexture.minFilter=an,z.map.depthTexture.magFilter=an):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Ot,z.map.depthTexture.magFilter=Ot);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();q.isPointLight!==!0&&z.updateMatrices(q,b);let ee=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:b.layers;for(let Ee=0;Ee<Q;Ee++){let Be=z.getCamera(Ee);if(q.isPointLight){let Y=z.camera,xe=z.matrix,Te=q.distance||Y.far;Te!==Y.far&&(Y.far=Te,Y.updateProjectionMatrix()),oa.setFromMatrixPosition(q.matrixWorld),Y.position.copy(oa),ph.copy(Y.position),ph.add(Qx[Ee]),Y.up.copy(jx[Ee]),Y.lookAt(ph),Y.updateMatrixWorld(),xe.makeTranslation(-oa.x,-oa.y,-oa.z),nf.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),z._frustum.setFromProjectionMatrix(nf,Y.coordinateSystem,Y.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)n.setRenderTarget(z.map,Ee),n.clear();else{Ee===0&&(n.setRenderTarget(z.map),n.clear());let Y=z.getViewport(Ee);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),H.viewport(a)}i=z.getFrustum(Ee),M(_,b,Be,q,ee,this.type)}z.isPointLightShadow!==!0&&this.type===Ys&&S(z,b),z.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(B,I,N)};function S(A,_){let b=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null?A.mapPass=new en(s.x,s.y,{format:Fi,type:zn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(_,null,b,d,y,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(_,null,b,u,y,null)}function T(A,_,b,B){let I=null,N=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)I=N;else if(I=b.isPointLight===!0?l:o,n.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let H=I.uuid,X=_.uuid,P=c[H];P===void 0&&(P={},c[H]=P);let V=P[X];V===void 0&&(V=I.clone(),P[X]=V,_.addEventListener("dispose",w)),I=V}if(I.visible=_.visible,I.wireframe=_.wireframe,B===Ys?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:f[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let H=n.properties.get(I);H.light=b}return I}function M(A,_,b,B,I,N){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===Ys)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);let P=e.update(A),V=A.material;if(Array.isArray(V)){let q=P.groups;for(let z=0,ne=q.length;z<ne;z++){let G=q[z],Q=V[G.materialIndex];if(Q&&Q.visible){let ee=T(A,Q,B,N);A.onBeforeShadow(n,A,_,b,P,ee,G),n.renderBufferDirect(b,null,P,ee,A,G),A.onAfterShadow(n,A,_,b,P,ee,G)}}}else if(V.visible){let q=T(A,V,B,N);A.onBeforeShadow(n,A,_,b,P,q,null),n.renderBufferDirect(b,null,P,q,A,null),A.onAfterShadow(n,A,_,b,P,q,null)}}let X=A.children;for(let P=0,V=X.length;P<V;P++)M(X[P],_,b,B,I,N)}function w(A){A.target.removeEventListener("dispose",w);for(let b in c){let B=c[b],I=A.target.uuid;I in B&&(B[I].dispose(),delete B[I])}}}function tv(n,e){function t(){let R=!1,J=new mt,W=null,de=new mt(0,0,0,0);return{setMask:function(re){W!==re&&!R&&(n.colorMask(re,re,re,re),W=re)},setLocked:function(re){R=re},setClear:function(re,ce,Le,Ye,se){se===!0&&(re*=Ye,ce*=Ye,Le*=Ye),J.set(re,ce,Le,Ye),de.equals(J)===!1&&(n.clearColor(re,ce,Le,Ye),de.copy(J))},reset:function(){R=!1,W=null,de.set(-1,0,0,0)}}}function i(){let R=!1,J=!1,W=null,de=null,re=null;return{setReversed:function(ce){if(J!==ce){let Le=e.get("EXT_clip_control");ce?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),J=ce;let Ye=re;re=null,this.setClear(Ye)}},getReversed:function(){return J},setTest:function(ce){ce?ve(n.DEPTH_TEST):Ue(n.DEPTH_TEST)},setMask:function(ce){W!==ce&&!R&&(n.depthMask(ce),W=ce)},setFunc:function(ce){if(J&&(ce=Td[ce]),de!==ce){switch(ce){case ja:n.depthFunc(n.NEVER);break;case eo:n.depthFunc(n.ALWAYS);break;case to:n.depthFunc(n.LESS);break;case Ls:n.depthFunc(n.LEQUAL);break;case no:n.depthFunc(n.EQUAL);break;case io:n.depthFunc(n.GEQUAL);break;case so:n.depthFunc(n.GREATER);break;case ro:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=ce}},setLocked:function(ce){R=ce},setClear:function(ce){re!==ce&&(re=ce,J&&(ce=1-ce),n.clearDepth(ce))},reset:function(){R=!1,W=null,de=null,re=null,J=!1}}}function s(){let R=!1,J=null,W=null,de=null,re=null,ce=null,Le=null,Ye=null,se=null;return{setTest:function(De){R||(De?ve(n.STENCIL_TEST):Ue(n.STENCIL_TEST))},setMask:function(De){J!==De&&!R&&(n.stencilMask(De),J=De)},setFunc:function(De,qe,ye){(W!==De||de!==qe||re!==ye)&&(n.stencilFunc(De,qe,ye),W=De,de=qe,re=ye)},setOp:function(De,qe,ye){(ce!==De||Le!==qe||Ye!==ye)&&(n.stencilOp(De,qe,ye),ce=De,Le=qe,Ye=ye)},setLocked:function(De){R=De},setClear:function(De){se!==De&&(n.clearStencil(De),se=De)},reset:function(){R=!1,J=null,W=null,de=null,re=null,ce=null,Le=null,Ye=null,se=null}}}let r=new t,a=new i,o=new s,l={},c=new WeakMap,h={},f={},d={},u=new WeakMap,g=[],y=null,p=!1,m=null,S=null,T=null,M=null,w=null,A=null,_=null,b=new Ge(0,0,0),B=0,I=!1,N=null,H=null,X=null,P=null,V=null,q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,ne=0,G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(G)[1]),z=ne>=1):G.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),z=ne>=2);let Q=null,ee={},Ee=n.getParameter(n.SCISSOR_BOX),Be=n.getParameter(n.VIEWPORT),Y=new mt().fromArray(Ee),xe=new mt().fromArray(Be);function Te(R,J,W,de){let re=new Uint8Array(4),ce=n.createTexture();n.bindTexture(R,ce),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Le=0;Le<W;Le++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(J,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(J+Le,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return ce}let Ne={};Ne[n.TEXTURE_2D]=Te(n.TEXTURE_2D,n.TEXTURE_2D,1),Ne[n.TEXTURE_CUBE_MAP]=Te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[n.TEXTURE_2D_ARRAY]=Te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Ne[n.TEXTURE_3D]=Te(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ve(n.DEPTH_TEST),a.setFunc(Ls),be(!1),_e(Cc),ve(n.CULL_FACE),he(is);function ve(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function Ue(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Mt(R,J){return d[R]!==J?(n.bindFramebuffer(R,J),d[R]=J,R===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=J),R===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=J),!0):!1}function ze(R,J){let W=g,de=!1;if(R){W=u.get(J),W===void 0&&(W=[],u.set(J,W));let re=R.textures;if(W.length!==re.length||W[0]!==n.COLOR_ATTACHMENT0){for(let ce=0,Le=re.length;ce<Le;ce++)W[ce]=n.COLOR_ATTACHMENT0+ce;W.length=re.length,de=!0}}else W[0]!==n.BACK&&(W[0]=n.BACK,de=!0);de&&n.drawBuffers(W)}function Ze(R){return y!==R?(n.useProgram(R),y=R,!0):!1}let et={[ss]:n.FUNC_ADD,[Yu]:n.FUNC_SUBTRACT,[$u]:n.FUNC_REVERSE_SUBTRACT};et[Zu]=n.MIN,et[Ju]=n.MAX;let j={[Ku]:n.ZERO,[Qu]:n.ONE,[ju]:n.SRC_COLOR,[Dc]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[id]:n.DST_COLOR,[td]:n.DST_ALPHA,[ed]:n.ONE_MINUS_SRC_COLOR,[Nc]:n.ONE_MINUS_SRC_ALPHA,[sd]:n.ONE_MINUS_DST_COLOR,[nd]:n.ONE_MINUS_DST_ALPHA,[ad]:n.CONSTANT_COLOR,[od]:n.ONE_MINUS_CONSTANT_COLOR,[ld]:n.CONSTANT_ALPHA,[cd]:n.ONE_MINUS_CONSTANT_ALPHA};function he(R,J,W,de,re,ce,Le,Ye,se,De){if(R===is){p===!0&&(Ue(n.BLEND),p=!1);return}if(p===!1&&(ve(n.BLEND),p=!0),R!==qu){if(R!==m||De!==I){if((S!==ss||w!==ss)&&(n.blendEquation(n.FUNC_ADD),S=ss,w=ss),De)switch(R){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFunc(n.ONE,n.ONE);break;case Ic:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Lc:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ke("WebGLState: Invalid blending: ",R);break}else switch(R){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Pc:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ic:ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ke("WebGLState: Invalid blending: ",R);break}T=null,M=null,A=null,_=null,b.set(0,0,0),B=0,m=R,I=De}return}re=re||J,ce=ce||W,Le=Le||de,(J!==S||re!==w)&&(n.blendEquationSeparate(et[J],et[re]),S=J,w=re),(W!==T||de!==M||ce!==A||Le!==_)&&(n.blendFuncSeparate(j[W],j[de],j[ce],j[Le]),T=W,M=de,A=ce,_=Le),(Ye.equals(b)===!1||se!==B)&&(n.blendColor(Ye.r,Ye.g,Ye.b,se),b.copy(Ye),B=se),m=R,I=!1}function oe(R,J){R.side===Tn?Ue(n.CULL_FACE):ve(n.CULL_FACE);let W=R.side===Gt;J&&(W=!W),be(W),R.blending===$s&&R.transparent===!1?he(is):he(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let de=R.stencilWrite;o.setTest(de),de&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Ie(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ue(n.SAMPLE_ALPHA_TO_COVERAGE)}function be(R){N!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),N=R)}function _e(R){R!==Gu?(ve(n.CULL_FACE),R!==H&&(R===Cc?n.cullFace(n.BACK):R===Wu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ue(n.CULL_FACE),H=R}function Xe(R){R!==X&&(z&&n.lineWidth(R),X=R)}function Ie(R,J,W){R?(ve(n.POLYGON_OFFSET_FILL),(P!==J||V!==W)&&(P=J,V=W,a.getReversed()&&(J=-J,W=-W),n.polygonOffset(J,W))):Ue(n.POLYGON_OFFSET_FILL)}function tt(R){R?ve(n.SCISSOR_TEST):Ue(n.SCISSOR_TEST)}function it(R){R===void 0&&(R=n.TEXTURE0+q-1),Q!==R&&(n.activeTexture(R),Q=R)}function ct(R,J,W){W===void 0&&(Q===null?W=n.TEXTURE0+q-1:W=Q);let de=ee[W];de===void 0&&(de={type:void 0,texture:void 0},ee[W]=de),(de.type!==R||de.texture!==J)&&(Q!==W&&(n.activeTexture(W),Q=W),n.bindTexture(R,J||Ne[R]),de.type=R,de.texture=J)}function L(){let R=ee[Q];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Rt(){try{n.compressedTexImage2D(...arguments)}catch(R){ke("WebGLState:",R)}}function Qe(){try{n.compressedTexImage3D(...arguments)}catch(R){ke("WebGLState:",R)}}function _t(){try{n.texSubImage2D(...arguments)}catch(R){ke("WebGLState:",R)}}function pe(){try{n.texSubImage3D(...arguments)}catch(R){ke("WebGLState:",R)}}function At(){try{n.compressedTexSubImage2D(...arguments)}catch(R){ke("WebGLState:",R)}}function Fe(){try{n.compressedTexSubImage3D(...arguments)}catch(R){ke("WebGLState:",R)}}function He(){try{n.texStorage2D(...arguments)}catch(R){ke("WebGLState:",R)}}function E(){try{n.texStorage3D(...arguments)}catch(R){ke("WebGLState:",R)}}function x(){try{n.texImage2D(...arguments)}catch(R){ke("WebGLState:",R)}}function F(){try{n.texImage3D(...arguments)}catch(R){ke("WebGLState:",R)}}function ie(R){return f[R]!==void 0?f[R]:n.getParameter(R)}function K(R,J){f[R]!==J&&(n.pixelStorei(R,J),f[R]=J)}function le(R){Y.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function me(R){xe.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),xe.copy(R))}function $(R,J){let W=c.get(J);W===void 0&&(W=new WeakMap,c.set(J,W));let de=W.get(R);de===void 0&&(de=n.getUniformBlockIndex(J,R.name),n.uniformBlockBinding(J,de,de),W.set(R,de))}function Z(R,J,W){let re=c.get(J).get(R);l[re]!==W&&(n.bindBufferBase(n.UNIFORM_BUFFER,re,W),l[re]=W)}function ue(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,ee={},d={},l={},u=new WeakMap,g=[],y=null,p=!1,m=null,S=null,T=null,M=null,w=null,A=null,_=null,b=new Ge(0,0,0),B=0,I=!1,N=null,H=null,X=null,P=null,V=null,Y.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ve,disable:Ue,bindFramebuffer:Mt,drawBuffers:ze,useProgram:Ze,setBlending:he,setMaterial:oe,setFlipSided:be,setCullFace:_e,setLineWidth:Xe,setPolygonOffset:Ie,setScissorTest:tt,activeTexture:it,bindTexture:ct,unbindTexture:L,compressedTexImage2D:Rt,compressedTexImage3D:Qe,texImage2D:x,texImage3D:F,pixelStorei:K,getParameter:ie,updateUBOMapping:$,uniformBlockBinding:Z,texStorage2D:He,texStorage3D:E,texSubImage2D:_t,texSubImage3D:pe,compressedTexSubImage2D:At,compressedTexSubImage3D:Fe,scissor:le,viewport:me,reset:ue}}function nv(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap,f=new Set,d,u=new WeakMap,g=new Set,y=new FinalizationRegistry(E=>g.delete(E)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,x){return p?new OffscreenCanvas(E,x):Us("canvas")}function S(E,x,F){let ie=1,K=He(E);if((K.width>F||K.height>F)&&(ie=F/Math.max(K.width,K.height)),ie<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let le=Math.floor(ie*K.width),me=Math.floor(ie*K.height);d===void 0&&(d=m(le,me));let $=x?m(le,me):d;return $.width=le,$.height=me,$.getContext("2d").drawImage(E,0,0,le,me),Oe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+le+"x"+me+")."),$}else return"data"in E&&Oe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),E;return E}function T(E){return E.generateMipmaps}function M(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(E,x,F,ie,K,le=!1){if(E!==null){if(n[E]!==void 0)return n[E];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let me;ie&&(me=e.get("EXT_texture_norm16"),me||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===n.RED&&(F===n.FLOAT&&($=n.R32F),F===n.HALF_FLOAT&&($=n.R16F),F===n.UNSIGNED_BYTE&&($=n.R8),F===n.UNSIGNED_SHORT&&me&&($=me.R16_EXT),F===n.SHORT&&me&&($=me.R16_SNORM_EXT)),x===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.R8UI),F===n.UNSIGNED_SHORT&&($=n.R16UI),F===n.UNSIGNED_INT&&($=n.R32UI),F===n.BYTE&&($=n.R8I),F===n.SHORT&&($=n.R16I),F===n.INT&&($=n.R32I)),x===n.RG&&(F===n.FLOAT&&($=n.RG32F),F===n.HALF_FLOAT&&($=n.RG16F),F===n.UNSIGNED_BYTE&&($=n.RG8),F===n.UNSIGNED_SHORT&&me&&($=me.RG16_EXT),F===n.SHORT&&me&&($=me.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RG8UI),F===n.UNSIGNED_SHORT&&($=n.RG16UI),F===n.UNSIGNED_INT&&($=n.RG32UI),F===n.BYTE&&($=n.RG8I),F===n.SHORT&&($=n.RG16I),F===n.INT&&($=n.RG32I)),x===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGB8UI),F===n.UNSIGNED_SHORT&&($=n.RGB16UI),F===n.UNSIGNED_INT&&($=n.RGB32UI),F===n.BYTE&&($=n.RGB8I),F===n.SHORT&&($=n.RGB16I),F===n.INT&&($=n.RGB32I)),x===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&($=n.RGBA8UI),F===n.UNSIGNED_SHORT&&($=n.RGBA16UI),F===n.UNSIGNED_INT&&($=n.RGBA32UI),F===n.BYTE&&($=n.RGBA8I),F===n.SHORT&&($=n.RGBA16I),F===n.INT&&($=n.RGBA32I)),x===n.RGB&&(F===n.UNSIGNED_SHORT&&me&&($=me.RGB16_EXT),F===n.SHORT&&me&&($=me.RGB16_SNORM_EXT),F===n.UNSIGNED_INT_5_9_9_9_REV&&($=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&($=n.R11F_G11F_B10F)),x===n.RGBA){let Z=le?Mr:at.getTransfer(K);F===n.FLOAT&&($=n.RGBA32F),F===n.HALF_FLOAT&&($=n.RGBA16F),F===n.UNSIGNED_BYTE&&($=Z===dt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT&&me&&($=me.RGBA16_EXT),F===n.SHORT&&me&&($=me.RGBA16_SNORM_EXT),F===n.UNSIGNED_SHORT_4_4_4_4&&($=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&($=n.RGB5_A1)}return($===n.R16F||$===n.R32F||$===n.RG16F||$===n.RG32F||$===n.RGBA16F||$===n.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(E,x){let F;return E?x===null||x===Bn||x===as?F=n.DEPTH24_STENCIL8:x===An?F=n.DEPTH32F_STENCIL8:x===Js&&(F=n.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Bn||x===as?F=n.DEPTH_COMPONENT24:x===An?F=n.DEPTH_COMPONENT32F:x===Js&&(F=n.DEPTH_COMPONENT16),F}function b(E,x){return T(E)===!0||E.isFramebufferTexture&&E.minFilter!==Ot&&E.minFilter!==an?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function B(E){let x=new WeakRef(E);i.get(E).__ref=x,g.add(x),y.register(E,x,x)}function I(E){let x=i.get(E).__ref;x!==void 0&&(g.delete(x),y.unregister(x))}function N(E){X(E.target)}function H(E){P(E.target)}function X(E){E.removeEventListener("dispose",N),I(E),q(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function P(E){E.removeEventListener("dispose",H),I(E),ne(E)}function V(){for(let E of g){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?P(x):X(x))}g.clear(),f.clear()}function q(E){let x=i.get(E);if(x.__webglInit===void 0)return;let F=E.source,ie=u.get(F);if(ie){let K=ie[x.__cacheKey];K.usedTimes--,K.usedTimes===0&&z(E),Object.keys(ie).length===0&&u.delete(F)}i.remove(E)}function z(E){let x=i.get(E);n.deleteTexture(x.__webglTexture);let F=E.source,ie=u.get(F);delete ie[x.__cacheKey],a.memory.textures--}function ne(E){let x=i.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let F=E.depthTexture;if(F&&F.renderTarget===E&&X(F),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let le=0;le<x.__webglFramebuffer[K].length;le++)n.deleteFramebuffer(x.__webglFramebuffer[K][le]);else n.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)n.deleteFramebuffer(x.__webglFramebuffer[K]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ie=E.textures;for(let K=0,le=ie.length;K<le;K++){let me=i.get(ie[K]);me.__webglTexture&&(n.deleteTexture(me.__webglTexture),a.memory.textures--),i.remove(ie[K])}i.remove(E)}let G=0;function Q(){G=0}function ee(){return G}function Ee(E){G=E}function Be(){let E=G;return E>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),G+=1,E}function Y(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function xe(E,x){let F=i.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){let ie=E.image;if(ie===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(F,E,x);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+x)}function Te(E,x){let F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){oe(F,E,x);return}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+x)}function Ne(E,x){let F=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){oe(F,E,x);return}t.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+x)}function ve(E,x){let F=i.get(E);if(E.version>0&&F.__version!==E.version){be(F,E,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+x)}let Ue={[Ds]:n.REPEAT,[xn]:n.CLAMP_TO_EDGE,[On]:n.MIRRORED_REPEAT},Mt={[Ot]:n.NEAREST,[dd]:n.NEAREST_MIPMAP_NEAREST,[jr]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Oo]:n.LINEAR_MIPMAP_NEAREST,[yi]:n.LINEAR_MIPMAP_LINEAR},ze={[gd]:n.NEVER,[Kc]:n.ALWAYS,[_d]:n.LESS,[Zc]:n.LEQUAL,[xd]:n.EQUAL,[Jc]:n.GEQUAL,[vd]:n.GREATER,[yd]:n.NOTEQUAL};function Ze(E,x){if(x.type===An&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===an||x.magFilter===Oo||x.magFilter===jr||x.magFilter===yi||x.minFilter===an||x.minFilter===Oo||x.minFilter===jr||x.minFilter===yi)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,Ue[x.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Ue[x.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Ue[x.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,Mt[x.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,Mt[x.minFilter]),x.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ot||x.minFilter!==jr&&x.minFilter!==yi||x.type===An&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function et(E,x){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",N),B(x));let ie=x.source,K=u.get(ie);K===void 0&&(K={},u.set(ie,K));let le=Y(x);if(le!==E.__cacheKey){K[le]===void 0&&(K[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,F=!0),K[le].usedTimes++;let me=K[E.__cacheKey];me!==void 0&&(K[E.__cacheKey].usedTimes--,me.usedTimes===0&&z(x)),E.__cacheKey=le,E.__webglTexture=K[le].texture}return F}function j(E,x,F){return Math.floor(Math.floor(E/F)/x)}function he(E,x,F,ie){let le=E.updateRanges;if(le.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,F,ie,x.data);else{le.sort((R,J)=>R.start-J.start);let me=0;for(let R=1;R<le.length;R++){let J=le[me],W=le[R],de=J.start+J.count,re=j(W.start,x.width,4),ce=j(J.start,x.width,4);W.start<=de+1&&re===ce&&j(W.start+W.count-1,x.width,4)===re?J.count=Math.max(J.count,W.start+W.count-J.start):(++me,le[me]=W)}le.length=me+1;let $=t.getParameter(n.UNPACK_ROW_LENGTH),Z=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let R=0,J=le.length;R<J;R++){let W=le[R],de=Math.floor(W.start/4),re=Math.ceil(W.count/4),ce=de%x.width,Le=Math.floor(de/x.width),Ye=re,se=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ce),t.pixelStorei(n.UNPACK_SKIP_ROWS,Le),t.texSubImage2D(n.TEXTURE_2D,0,ce,Le,Ye,se,F,ie,x.data)}E.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,$),t.pixelStorei(n.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function oe(E,x,F){let ie=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ie=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ie=n.TEXTURE_3D);let K=et(E,x),le=x.source;t.bindTexture(ie,E.__webglTexture,n.TEXTURE0+F);let me=i.get(le);if(le.version!==me.__version||K===!0){if(t.activeTexture(n.TEXTURE0+F),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let se=at.getPrimaries(at.workingColorSpace),De=x.colorSpace===Hn?null:at.getPrimaries(x.colorSpace),qe=x.colorSpace===Hn||se===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe)}t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=S(x.image,!1,s.maxTextureSize);Z=Fe(x,Z);let ue=r.convert(x.format,x.colorSpace),R=r.convert(x.type),J=A(x.internalFormat,ue,R,x.normalized,x.colorSpace,x.isVideoTexture);Ze(ie,x);let W,de=x.mipmaps,re=x.isVideoTexture!==!0,ce=me.__version===void 0||K===!0,Le=le.dataReady,Ye=b(x,Z);if(x.isDepthTexture)J=_(x.format===Mi,x.type),ce&&(re?t.texStorage2D(n.TEXTURE_2D,1,J,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,ue,R,null));else if(x.isDataTexture)if(de.length>0){re&&ce&&t.texStorage2D(n.TEXTURE_2D,Ye,J,de[0].width,de[0].height);for(let se=0,De=de.length;se<De;se++)W=de[se],re?Le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,W.width,W.height,ue,R,W.data):t.texImage2D(n.TEXTURE_2D,se,J,W.width,W.height,0,ue,R,W.data);x.generateMipmaps=!1}else re?(ce&&t.texStorage2D(n.TEXTURE_2D,Ye,J,Z.width,Z.height),Le&&he(x,Z,ue,R)):t.texImage2D(n.TEXTURE_2D,0,J,Z.width,Z.height,0,ue,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){re&&ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,J,de[0].width,de[0].height,Z.depth);for(let se=0,De=de.length;se<De;se++)if(W=de[se],x.format!==kn)if(ue!==null)if(re){if(Le)if(x.layerUpdates.size>0){let qe=oh(W.width,W.height,x.format,x.type);for(let ye of x.layerUpdates){let ft=W.data.subarray(ye*qe/W.data.BYTES_PER_ELEMENT,(ye+1)*qe/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,ye,W.width,W.height,1,ue,ft)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,Z.depth,ue,W.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,J,W.width,W.height,Z.depth,0,W.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else re?Le&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,W.width,W.height,Z.depth,ue,R,W.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,J,W.width,W.height,Z.depth,0,ue,R,W.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{re&&ce&&t.texStorage2D(n.TEXTURE_2D,Ye,J,de[0].width,de[0].height);for(let se=0,De=de.length;se<De;se++)W=de[se],x.format!==kn?ue!==null?re?Le&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,W.width,W.height,ue,W.data):t.compressedTexImage2D(n.TEXTURE_2D,se,J,W.width,W.height,0,W.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):re?Le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,W.width,W.height,ue,R,W.data):t.texImage2D(n.TEXTURE_2D,se,J,W.width,W.height,0,ue,R,W.data)}else if(x.isDataArrayTexture)if(re){if(ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ye,J,Z.width,Z.height,Z.depth),Le)if(x.layerUpdates.size>0){let se=oh(Z.width,Z.height,x.format,x.type);for(let De of x.layerUpdates){let qe=Z.data.subarray(De*se/Z.data.BYTES_PER_ELEMENT,(De+1)*se/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,De,Z.width,Z.height,1,ue,R,qe)}x.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ue,R,Z.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,J,Z.width,Z.height,Z.depth,0,ue,R,Z.data);else if(x.isData3DTexture)re?(ce&&t.texStorage3D(n.TEXTURE_3D,Ye,J,Z.width,Z.height,Z.depth),Le&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ue,R,Z.data)):t.texImage3D(n.TEXTURE_3D,0,J,Z.width,Z.height,Z.depth,0,ue,R,Z.data);else if(x.isFramebufferTexture){if(ce)if(re)t.texStorage2D(n.TEXTURE_2D,Ye,J,Z.width,Z.height);else{let se=Z.width,De=Z.height;for(let qe=0;qe<Ye;qe++)t.texImage2D(n.TEXTURE_2D,qe,J,se,De,0,ue,R,null),se>>=1,De>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let se=n.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),Z.parentNode!==se){se.appendChild(Z),f.add(x),se.onpaint=De=>{let qe=De.changedElements;for(let ye of f)qe.includes(ye.image)&&(ye.needsUpdate=!0)},se.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,Z);else{let qe=n.RGBA,ye=n.RGBA,ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,qe,ye,ft,Z)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(de.length>0){if(re&&ce){let se=He(de[0]);t.texStorage2D(n.TEXTURE_2D,Ye,J,se.width,se.height)}for(let se=0,De=de.length;se<De;se++)W=de[se],re?Le&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ue,R,W):t.texImage2D(n.TEXTURE_2D,se,J,ue,R,W);x.generateMipmaps=!1}else if(re){if(ce){let se=He(Z);t.texStorage2D(n.TEXTURE_2D,Ye,J,se.width,se.height)}Le&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,R,Z)}else t.texImage2D(n.TEXTURE_2D,0,J,ue,R,Z);T(x)&&x.mipmapsAutoUpdate===!0&&M(ie),me.__version=le.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function be(E,x,F){if(x.image.length!==6)return;let ie=et(E,x),K=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let le=i.get(K);if(K.version!==le.__version||ie===!0){t.activeTexture(n.TEXTURE0+F);let me=at.getPrimaries(at.workingColorSpace),$=x.colorSpace===Hn?null:at.getPrimaries(x.colorSpace),Z=x.colorSpace===Hn||me===$?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let ue=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,J=[];for(let ye=0;ye<6;ye++)!ue&&!R?J[ye]=S(x.image[ye],!0,s.maxCubemapSize):J[ye]=R?x.image[ye].image:x.image[ye],J[ye]=Fe(x,J[ye]);let W=J[0],de=r.convert(x.format,x.colorSpace),re=r.convert(x.type),ce=A(x.internalFormat,de,re,x.normalized,x.colorSpace),Le=x.isVideoTexture!==!0,Ye=le.__version===void 0||ie===!0,se=K.dataReady,De=b(x,W);Ze(n.TEXTURE_CUBE_MAP,x);let qe;if(x.isDepthTexture){if(ce=_(x.format===Mi,x.type),Ye)if(Le)t.texStorage2D(n.TEXTURE_CUBE_MAP,1,ce,W.width,W.height);else for(let ye=0;ye<6;ye++)t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,W.width,W.height,0,de,re,null)}else if(ue){Le&&Ye&&t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ce,W.width,W.height);for(let ye=0;ye<6;ye++){qe=J[ye].mipmaps;for(let ft=0;ft<qe.length;ft++){let Nt=qe[ft];x.format!==kn?de!==null?Le?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft,0,0,Nt.width,Nt.height,de,Nt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft,ce,Nt.width,Nt.height,0,Nt.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft,0,0,Nt.width,Nt.height,de,re,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft,ce,Nt.width,Nt.height,0,de,re,Nt.data)}}}else{if(qe=x.mipmaps,Le&&Ye){qe.length>0&&De++;let ye=He(J[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,De,ce,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(R){Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,J[ye].width,J[ye].height,de,re,J[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,J[ye].width,J[ye].height,0,de,re,J[ye].data);for(let ft=0;ft<qe.length;ft++){let bi=qe[ft].image[ye].image;Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft+1,0,0,bi.width,bi.height,de,re,bi.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft+1,ce,bi.width,bi.height,0,de,re,bi.data)}}else{Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,de,re,J[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ce,de,re,J[ye]);for(let ft=0;ft<qe.length;ft++){let Nt=qe[ft];Le?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft+1,0,0,de,re,Nt.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,ft+1,ce,de,re,Nt.image[ye])}}}T(x)&&x.mipmapsAutoUpdate===!0&&M(n.TEXTURE_CUBE_MAP),le.__version=K.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function _e(E,x,F,ie,K,le){let me=r.convert(F.format,F.colorSpace),$=r.convert(F.type),Z=A(F.internalFormat,me,$,F.normalized,F.colorSpace),ue=i.get(x),R=i.get(F);if(R.__renderTarget=x,!ue.__hasExternalTextures){let J=Math.max(1,x.width>>le),W=Math.max(1,x.height>>le);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?t.texImage3D(K,le,Z,J,W,x.depth,0,me,$,null):t.texImage2D(K,le,Z,J,W,0,me,$,null)}t.bindFramebuffer(n.FRAMEBUFFER,E),pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ie,K,R.__webglTexture,0,_t(x)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ie,K,R.__webglTexture,le),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Xe(E,x,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),x.depthBuffer){let ie=x.depthTexture,K=ie&&ie.isDepthTexture?ie.type:null,le=_(x.stencilBuffer,K),me=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(x),le,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(x),le,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,le,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,E)}else{let ie=x.textures;for(let K=0;K<ie.length;K++){let le=ie[K],me=r.convert(le.format,le.colorSpace),$=r.convert(le.type),Z=A(le.internalFormat,me,$,le.normalized,le.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t(x),Z,x.width,x.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t(x),Z,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,Z,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(E,x,F){let ie=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(x.depthTexture);K.__renderTarget=x;let le=ie?x.depthTexture.image[0]:x.depthTexture.image;(!K.__webglTexture||le.width!==x.width||le.height!==x.height)&&(le.width=x.width,le.height=x.height,x.depthTexture.needsUpdate=!0),ie?ve(x.depthTexture,0):xe(x.depthTexture,0);let me=K.__webglTexture,$=_t(x),Z=ie?n.TEXTURE_CUBE_MAP_POSITIVE_X+F:n.TEXTURE_2D,ue=x.depthTexture.format===Mi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===mi)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,Z,me,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,ue,Z,me,0);else if(x.depthTexture.format===Mi)pe(x)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ue,Z,me,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,ue,Z,me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tt(E){let x=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let ie=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ie){let K=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ie.removeEventListener("dispose",K)};ie.addEventListener("dispose",K),x.__depthDisposeCallback=K}x.__boundDepthTexture=ie}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)Ie(x.__webglFramebuffer[ie],E,ie);else E.texture.mipmaps.length>0?Ie(x.__webglFramebuffer[0],E,0):Ie(x.__webglFramebuffer,E,0);else if(F){x.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[ie]),x.__webglDepthbuffer[ie]===void 0)x.__webglDepthbuffer[ie]=n.createRenderbuffer(),Xe(x.__webglDepthbuffer[ie],E,!1);else{let K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer[ie];n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,le)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Xe(x.__webglDepthbuffer,E,!1);else{let K=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function it(E,x,F){let ie=i.get(E);x!==void 0&&_e(ie.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&tt(E)}function ct(E){let x=E.texture,F=i.get(E),ie=i.get(x);E.addEventListener("dispose",H),B(E);let K=E.textures,le=E.isWebGLCubeRenderTarget===!0,me=K.length>1;if(me||(ie.__webglTexture===void 0&&(ie.__webglTexture=n.createTexture()),ie.__version=x.version,a.memory.textures++),le){F.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps.length>0){F.__webglFramebuffer[$]=[];for(let Z=0;Z<x.mipmaps.length;Z++)F.__webglFramebuffer[$][Z]=n.createFramebuffer()}else F.__webglFramebuffer[$]=n.createFramebuffer()}else{if(x.mipmaps.length>0){F.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)F.__webglFramebuffer[$]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(me)for(let $=0,Z=K.length;$<Z;$++){let ue=i.get(K[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(E.samples>0&&pe(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let $=0;$<K.length;$++){let Z=K[$];F.__webglColorRenderbuffer[$]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[$]);let ue=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),J=A(Z.internalFormat,ue,R,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),W=_t(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,W,J,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+$,n.RENDERBUFFER,F.__webglColorRenderbuffer[$])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Xe(F.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(le){t.bindTexture(n.TEXTURE_CUBE_MAP,ie.__webglTexture),Ze(n.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)_e(F.__webglFramebuffer[$][Z],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,Z);else _e(F.__webglFramebuffer[$],E,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);T(x)?M(n.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&n.texParameteri(n.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(me){for(let $=0,Z=K.length;$<Z;$++){let ue=K[$],R=i.get(ue),J=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(J,R.__webglTexture),Ze(J,ue),_e(F.__webglFramebuffer,E,ue,n.COLOR_ATTACHMENT0+$,J,0),T(ue)&&M(J)}t.unbindTexture()}else{let $=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture($,ie.__webglTexture),Ze($,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)_e(F.__webglFramebuffer[Z],E,x,n.COLOR_ATTACHMENT0,$,Z);else _e(F.__webglFramebuffer,E,x,n.COLOR_ATTACHMENT0,$,0);T(x)?M($):x.mipmaps.length>0&&n.texParameteri($,n.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&tt(E)}function L(E){let x=E.textures;for(let F=0,ie=x.length;F<ie;F++){let K=x[F];if(T(K)&&K.mipmapsAutoUpdate===!0){let le=w(E),me=i.get(K).__webglTexture;t.bindTexture(le,me),M(le),t.unbindTexture()}}}let Rt=[];function Qe(E){if(E.samples>0){if(pe(E)===!1){let x=E.textures,F=E.width,ie=E.height,K=n.COLOR_BUFFER_BIT,le=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,me=i.get(E),$=x.length>1;if($)for(let ue=0;ue<x.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,me.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglFramebuffer);for(let ue=0;ue<x.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),$){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);let R=i.get(x[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,R,0)}n.blitFramebuffer(0,0,F,ie,0,0,F,ie,K,n.NEAREST),l===!0&&(Rt.length=0,Rt.push(n.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&Rt.push(le),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<x.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,me.__webglColorRenderbuffer[ue]);let R=i.get(x[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,R,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,me.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){let x=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function _t(E){return Math.min(s.maxSamples,E.samples)}function pe(E){let x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function At(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Fe(E,x){let F=E.colorSpace,ie=E.format,K=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==yr&&F!==Hn&&(at.getTransfer(F)===dt?(ie!==kn||K!==dn)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ke("WebGLTextures: Unsupported texture color space:",F)),x}function He(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=Q,this.getTextureUnits=ee,this.setTextureUnits=Ee,this.setTexture2D=xe,this.setTexture2DArray=Te,this.setTexture3D=Ne,this.setTextureCube=ve,this.rebindTextures=it,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=pe,this.dispose=V}function iv(n,e){function t(i,s=Hn){let r,a=at.getTransfer(s);if(i===dn)return n.UNSIGNED_BYTE;if(i===zo)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ko)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Xc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qc)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Gc)return n.BYTE;if(i===Wc)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Bo)return n.INT;if(i===Bn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===zn)return n.HALF_FLOAT;if(i===Yc)return n.ALPHA;if(i===$c)return n.RGB;if(i===kn)return n.RGBA;if(i===mi)return n.DEPTH_COMPONENT;if(i===Mi)return n.DEPTH_STENCIL;if(i===Ho)return n.RED;if(i===Vo)return n.RED_INTEGER;if(i===Fi)return n.RG;if(i===Go)return n.RG_INTEGER;if(i===Wo)return n.RGBA_INTEGER;if(i===ea||i===ta||i===na||i===ia)if(a===dt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ta)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===na)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ia)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xo||i===qo||i===Yo||i===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Xo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===qo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Zo||i===Jo||i===Ko||i===Qo||i===jo||i===sa||i===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Zo||i===Jo)return a===dt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Ko)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qo)return r.COMPRESSED_R11_EAC;if(i===jo)return r.COMPRESSED_SIGNED_R11_EAC;if(i===sa)return r.COMPRESSED_RG11_EAC;if(i===el)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===tl||i===nl||i===il||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl||i===ul||i===dl||i===fl||i===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===tl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===nl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===il)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===rl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===al)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ol)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ll)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ul)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pl)return a===dt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ml||i===gl||i===_l)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ml)return a===dt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===_l)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===xl||i===vl||i===ra||i===yl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===xl)return r.COMPRESSED_RED_RGTC1_EXT;if(i===vl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ra)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===as?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,Mh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Nr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new yn({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new gt(new Li(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sh=class extends Yn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,d=null,u=null,g=null,y=typeof XRWebGLBinding<"u",p=new Mh,m={},S=t.getContextAttributes(),T=null,M=null,w=[],A=[],_=new ae,b=null,B=null,I=new Vt;I.viewport=new mt;let N=new Vt;N.viewport=new mt;let H=[I,N],X=new Lo,P=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let xe=w[Y];return xe===void 0&&(xe=new zs,w[Y]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(Y){let xe=w[Y];return xe===void 0&&(xe=new zs,w[Y]=xe),xe.getGripSpace()},this.getHand=function(Y){let xe=w[Y];return xe===void 0&&(xe=new zs,w[Y]=xe),xe.getHandSpace()};function q(Y){let xe=A.indexOf(Y.inputSource);if(xe===-1)return;let Te=w[xe];Te!==void 0&&(Te.update(Y.inputSource,Y.frame,c||a),Te.dispatchEvent({type:Y.type,data:Y.inputSource}))}function z(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ne);for(let Y=0;Y<w.length;Y++){let xe=A[Y];xe!==null&&(A[Y]=null,w[Y].disconnect(xe))}P=null,V=null,p.reset();for(let Y in m)delete m[Y];if(e.setRenderTarget(T),u=null,d=null,f=null,s=null,M=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),B!==null){let Y=B.camera;Y.fov=B.fov,Y.zoom=B.zoom,Y.updateProjectionMatrix(),B=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ne),S.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Ne=null,ve=null;S.depth&&(ve=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Te=S.stencil?Mi:mi,Ne=S.stencil?as:Bn);let Ue={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(Ue),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new en(d.textureWidth,d.textureHeight,{format:kn,type:dn,depthTexture:new _i(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,Te),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new en(u.framebufferWidth,u.framebufferHeight,{format:kn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Be.setContext(s),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ne(Y){for(let xe=0;xe<Y.removed.length;xe++){let Te=Y.removed[xe],Ne=A.indexOf(Te);Ne>=0&&(A[Ne]=null,w[Ne].disconnect(Te))}for(let xe=0;xe<Y.added.length;xe++){let Te=Y.added[xe],Ne=A.indexOf(Te);if(Ne===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=A.length){A.push(Te),Ne=Ue;break}else if(A[Ue]===null){A[Ue]=Te,Ne=Ue;break}if(Ne===-1)break}let ve=w[Ne];ve&&ve.connect(Te)}}function G(Y,xe){xe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(xe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let xe=Y.near,Te=Y.far;p.texture!==null&&(p.depthNear>0&&(xe=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),X.near=N.near=I.near=xe,X.far=N.far=I.far=Te,(P!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),P=X.near,V=X.far),X.layers.mask=Y.layers.mask|6,I.layers.mask=X.layers.mask&-5,N.layers.mask=X.layers.mask&-3;let Ne=Y.parent,ve=X.cameras;G(X,Ne);for(let Ue=0;Ue<ve.length;Ue++)G(ve[Ue],Ne);X.projectionMatrix.copy(I.projectionMatrix),X.projectionMatrixInverse.copy(I.projectionMatrixInverse),B===null&&Y.isPerspectiveCamera&&(B={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,X,Ne)};function Q(Y,xe,Te){Te===null?Y.matrix.copy(xe.matrixWorld):(Y.matrix.copy(Te.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(xe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(xe.projectionMatrix),Y.projectionMatrixInverse.copy(xe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Os*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Y)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(X)},this.getCameraTexture=function(Y){return m[Y]};let ee=null;function Ee(Y,xe){if(h=xe.getViewerPose(c||a),g=xe,h!==null){let Te=h.views;u!==null&&(e.setRenderTargetFramebuffer(M,u.framebuffer),e.setRenderTarget(M));let Ne=!1;Te.length!==X.cameras.length&&(X.cameras.length=0,Ne=!0);for(let ze=0;ze<Te.length;ze++){let Ze=Te[ze],et=null;if(u!==null)et=u.getViewport(Ze);else{let he=f.getViewSubImage(d,Ze);et=he.viewport,ze===0&&(e.setRenderTargetTextures(M,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(M))}let j=H[ze];j===void 0&&(j=new Vt,j.layers.enable(ze),j.viewport=new mt,H[ze]=j),j.matrix.fromArray(Ze.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Ze.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(et.x,et.y,et.width,et.height),ze===0&&(X.matrix.copy(j.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ne===!0&&X.cameras.push(j)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=i.getBinding();let ze=f.getDepthInformation(Te[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,s.renderState)}if(ve&&ve.includes("camera-access")&&y){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<Te.length;ze++){let Ze=Te[ze].camera;if(Ze){let et=m[Ze];et||(et=new Nr,m[Ze]=et);let j=f.getCameraImage(Ze);et.sourceTexture=j}}}}for(let Te=0;Te<w.length;Te++){let Ne=A[Te],ve=w[Te];Ne!==null&&ve!==void 0&&ve.update(Ne,xe,c||a)}ee&&ee(Y,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}let Be=new sf;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(Y){ee=Y},this.dispose=function(){}}},av=new ut,pf=new Ve;pf.set(-1,0,0,0,1,0,0,0,1);function ov(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,sh(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,S,T,M){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),d(p,m),m.isMeshPhysicalMaterial&&u(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),y(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,T):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Gt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Gt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),T=S.envMap,M=S.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(av.makeRotationFromEuler(M)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(pf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=T*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function u(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Gt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lv(n,e,t,i){let s={},r={};function a(S,T){let M=T.program;i.uniformBlockBinding(S,M,s[S.id])}function o(S,T){let M=s[S.id];M===void 0&&(g(S),M=l(S),s[S.id]=M,S.addEventListener("dispose",p));let w=T.program;i.updateUBOMapping(S,w);let A=e.render.frame;r[S.id]!==A&&(c(S),r[S.id]=A)}function l(S){let T=n.createBuffer(),M=S.__size,w=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,T),n.bufferData(n.UNIFORM_BUFFER,M,w),n.bindBuffer(n.UNIFORM_BUFFER,null),T}function c(S){let T=s[S.id],M=S.uniforms,w=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let A=0,_=M.length;A<_;A++){let b=M[A];if(Array.isArray(b))for(let B=0,I=b.length;B<I;B++)h(b[B],A,B,w);else h(b,A,0,w)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function h(S,T,M,w){if(d(S,T,M,w)===!0){let A=S.__offset,_=S.value;if(Array.isArray(_)){let b=0;for(let B=0;B<_.length;B++){let I=_[B],N=y(I,!0);f(I,S.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,S.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,S.__data)}}function f(S,T,M){typeof S=="number"||typeof S=="boolean"?T[M]=S:S.isMatrix3?(T[M]=S.elements[0],T[M+1]=S.elements[1],T[M+2]=S.elements[2],T[M+3]=0,T[M+4]=S.elements[3],T[M+5]=S.elements[4],T[M+6]=S.elements[5],T[M+7]=0,T[M+8]=S.elements[6],T[M+9]=S.elements[7],T[M+10]=S.elements[8],T[M+11]=0):ArrayBuffer.isView(S)?T.set(S.subarray(0,T.length-M),M):S.toArray(T,M)}function d(S,T,M,w){let A=S.value,_=T+"_"+M;if(Array.isArray(A)){w[_]===void 0&&(w[_]=[]);let b=w[_],B=!1;for(let I=0;I<A.length;I++)u(A[I],b,I)===!0&&(B=!0);return B}return u(A,w,_)}function u(S,T,M){if(T[M]===void 0)return typeof S=="number"||typeof S=="boolean"?T[M]=S:ArrayBuffer.isView(S)?T[M]=S.slice():T[M]=S.clone(),!0;{let w=T[M];if(typeof S=="number"||typeof S=="boolean"){if(w!==S)return T[M]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(w.equals(S)===!1)return w.copy(S),!0}}return!1}function g(S){let T=S.uniforms,M=0,w=16;for(let _=0,b=T.length;_<b;_++){let B=Array.isArray(T[_])?T[_]:[T[_]];for(let I=0,N=B.length;I<N;I++){let H=B[I],X=Array.isArray(H.value)?H.value:[H.value],P=Array.isArray(T[_])||Array.isArray(H.value),V=M;for(let z=0,ne=X.length;z<ne;z++){let G=X[z],Q=y(G,P),ee=M%w,Ee=ee%Q.boundary,Be=ee+Ee;M+=Ee,Be!==0&&w-Be<Q.storage&&(M+=w-Be),z===0&&(V=M),M+=Q.storage}let q=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new q((M-V)/Float32Array.BYTES_PER_ELEMENT),H.__offset=V}}let A=M%w;return A>0&&(M+=w-A),S.__size=M,S.__cache={},this}function y(S,T){let M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=16,M.storage=48):S.isMatrix4?(M.boundary=16,M.storage=64):S.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(M.boundary=16,M.storage=S.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",S),T===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function p(S){let T=S.target;T.removeEventListener("dispose",p),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function m(){for(let S in s)n.deleteBuffer(s[S]);s={},r={}}return{bind:a,update:o,dispose:m}}var cv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),jn=null;function hv(){return jn===null&&(jn=new Ar(cv,16,16,Fi,zn),jn.name="DFG_LUT",jn.minFilter=an,jn.magFilter=an,jn.wrapS=xn,jn.wrapT=xn,jn.generateMipmaps=!1,jn.needsUpdate=!0),jn}var bl=class{constructor(e={}){let{canvas:t=Sd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=dn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let y=u,p=new Set([Wo,Go,Vo]),m=new Set([dn,Bn,Js,as,zo,ko]),S=new Uint32Array(4),T=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},w=null,A=null,_=[],b=[],B=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,H=null,X=null,P=null,V=null;this._outputColorSpace=Ht;let q=0,z=0,ne=null,G=-1,Q=null,ee=new mt,Ee=new mt,Be=null,Y=new Ge(0),xe=0,Te=t.width,Ne=t.height,ve=1,Ue=null,Mt=null,ze=new mt(0,0,Te,Ne),Ze=new mt(0,0,Te,Ne),et=!1,j=new Pi,he=new ho,oe=!1,be=!1,_e=new ut,Xe=new D,Ie=new mt,tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function ct(){return ne===null?ve:1}let L=i;function Rt(v,C){return t.getContext(v,C)}let Qe,_t,pe,At,Fe,He,E,x,F,ie,K,le,me,$,Z,ue,R,J,W,de,re,ce,Le;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",De,!1),t.addEventListener("webglcontextrestored",qe,!1),t.addEventListener("webglcontextcreationerror",ye,!1),L===null){let C="webgl2";if(L=Rt(C,v),L===null)throw Rt(C)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ye()}catch(v){throw t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),ke("WebGLRenderer: "+v.message),v}function Ye(){Qe=new M_(L),Qe.init(),re=new iv(L,Qe),_t=new h_(L,Qe,e,re),pe=new tv(L,Qe),_t.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),X=L.createFramebuffer(),P=L.createFramebuffer(),V=L.createFramebuffer(),At=new E_(L),Fe=new Hx,He=new nv(L,Qe,pe,Fe,_t,re,At),E=new y_(I),x=new wm(L),ce=new l_(L,x),F=new S_(L,x,At,ce),ie=new w_(L,F,x,ce,At),J=new T_(L,_t,He),Z=new u_(Fe),K=new kx(I,E,Qe,_t,ce,Z),le=new ov(I,Fe),me=new Gx,$=new Zx(Qe),R=new o_(I,E,pe,ie,g,l),ue=new ev(I,ie,_t),Le=new lv(L,At,_t,pe),W=new c_(L,Qe,At),de=new b_(L,Qe,At),At.programs=K.programs,I.capabilities=_t,I.extensions=Qe,I.properties=Fe,I.renderLists=me,I.shadowMap=ue,I.state=pe,I.info=At}y!==dn&&(B=new R_(y,t.width,t.height,o,s,r));let se=new Sh(I,L);this.xr=se,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let v=Qe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Qe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(v){v!==void 0&&(ve=v,this.setSize(Te,Ne,!1))},this.getSize=function(v){return v.set(Te,Ne)},this.setSize=function(v,C,k=!0){if(se.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=v,Ne=C,t.width=Math.floor(v*ve),t.height=Math.floor(C*ve),k===!0&&(t.style.width=v+"px",t.style.height=C+"px"),B!==null&&B.setSize(t.width,t.height),this.setViewport(0,0,v,C)},this.getDrawingBufferSize=function(v){return v.set(Te*ve,Ne*ve).floor()},this.setDrawingBufferSize=function(v,C,k){Te=v,Ne=C,ve=k,t.width=Math.floor(v*k),t.height=Math.floor(C*k),this.setViewport(0,0,v,C)},this.setEffects=function(v){if(y===dn){ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let C=0;C<v.length;C++)if(v[C].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}B.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(ze)},this.setViewport=function(v,C,k,U){v.isVector4?ze.set(v.x,v.y,v.z,v.w):ze.set(v,C,k,U),pe.viewport(ee.copy(ze).multiplyScalar(ct()).round())},this.getScissor=function(v){return v.copy(Ze)},this.setScissor=function(v,C,k,U){v.isVector4?Ze.set(v.x,v.y,v.z,v.w):Ze.set(v,C,k,U),pe.scissor(Ee.copy(Ze).multiplyScalar(ct()).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(v){pe.setScissorTest(et=v)},this.setOpaqueSort=function(v){Ue=v},this.setTransparentSort=function(v){Mt=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,C=!0,k=!0){let U=0;if(v){let O=!1;if(ne!==null){let ge=ne.texture.format;O=p.has(ge)}if(O){let ge=ne.texture.type,Ae=m.has(ge),fe=R.getClearColor(),Se=R.getClearAlpha(),Pe=fe.r,We=fe.g,st=fe.b;Ae?(S[0]=Pe,S[1]=We,S[2]=st,S[3]=Se,L.clearBufferuiv(L.COLOR,0,S)):(T[0]=Pe,T[1]=We,T[2]=st,T[3]=Se,L.clearBufferiv(L.COLOR,0,T))}else U|=L.COLOR_BUFFER_BIT}C&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),H=v},this.dispose=function(){t.removeEventListener("webglcontextlost",De,!1),t.removeEventListener("webglcontextrestored",qe,!1),t.removeEventListener("webglcontextcreationerror",ye,!1),R.dispose(),me.dispose(),$.dispose(),He.dispose(),Fe.dispose(),E.dispose(),ie.dispose(),F.dispose(),ce.dispose(),Le.dispose(),K.dispose(),se.dispose(),se.removeEventListener("sessionstart",Jh),se.removeEventListener("sessionend",Kh),Wi.stop()};function De(v){v.preventDefault(),jc("WebGLRenderer: Context Lost."),N=!0}function qe(){jc("WebGLRenderer: Context Restored."),N=!1;let v=At.autoReset,C=ue.enabled,k=ue.autoUpdate,U=ue.needsUpdate,O=ue.type;Ye(),At.autoReset=v,ue.enabled=C,ue.autoUpdate=k,ue.needsUpdate=U,ue.type=O}function ye(v){ke("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ft(v){let C=v.target;C.removeEventListener("dispose",ft),Nt(C)}function Nt(v){bi(v),Fe.remove(v)}function bi(v){let C=Fe.get(v).programs;C!==void 0&&(C.forEach(function(k){K.releaseProgram(k)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,C,k,U,O,ge){C===null&&(C=tt);let Ae=O.isMesh&&O.matrixWorld.determinantAffine()<0,fe=jf(v,C,k,U,O);pe.setMaterial(U,Ae);let Se=k.index,Pe=1;if(U.wireframe===!0){if(Se=F.getWireframeAttribute(k),Se===void 0)return;Pe=2}let We=k.drawRange,st=k.attributes.position,Re=We.start*Pe,rt=(We.start+We.count)*Pe;ge!==null&&(Re=Math.max(Re,ge.start*Pe),rt=Math.min(rt,(ge.start+ge.count)*Pe)),Se!==null?(Re=Math.max(Re,0),rt=Math.min(rt,Se.count)):st!=null&&(Re=Math.max(Re,0),rt=Math.min(rt,st.count));let Ct=rt-Re;if(Ct<0||Ct===1/0)return;ce.setup(O,U,fe,k,Se);let yt,xt=W;if(Se!==null&&(yt=x.get(Se),xt=de,xt.setIndex(yt)),O.isMesh)U.wireframe===!0?(pe.setLineWidth(U.wireframeLinewidth*ct()),xt.setMode(L.LINES)):xt.setMode(L.TRIANGLES);else if(O.isLine){let Yt=U.linewidth;Yt===void 0&&(Yt=1),pe.setLineWidth(Yt*ct()),O.isLineSegments?xt.setMode(L.LINES):O.isLineLoop?xt.setMode(L.LINE_LOOP):xt.setMode(L.LINE_STRIP)}else O.isPoints?xt.setMode(L.POINTS):O.isSprite&&xt.setMode(L.TRIANGLES);if(O.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{let Yt=O._multiDrawStarts,Ce=O._multiDrawCounts,rn=O._multiDrawCount,ht=Se?x.get(Se).bytesPerElement:1,Xi=Fe.get(U).currentProgram.getUniforms();for(let $t=0;$t<rn;$t++)Xi.setValue(L,"_gl_DrawID",$t),xt.render(Yt[$t]/ht,Ce[$t])}else if(O.isInstancedMesh)xt.renderInstances(Re,Ct,O.count);else if(k.isInstancedBufferGeometry){let Yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Ce=Math.min(k.instanceCount,Yt);xt.renderInstances(Re,Ct,Ce)}else xt.render(Re,Ct)};function Zh(v,C,k,U){H!==null&&v.isNodeMaterial&&H.setObject(U,v),oe===!0&&Z.setState(v,k,!1),v.transparent===!0&&v.side===Tn&&v.forceSinglePass===!1?(v.side=Gt,v.needsUpdate=!0,or(v,C,U),v.side=Qn,v.needsUpdate=!0,or(v,C,U),v.side=Tn):or(v,C,U)}this.compile=function(v,C,k=null){k===null&&(k=v),H!==null&&H.renderStart(v,C,k),A=$.get(k),A.init(C),b.push(A),k.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),v!==k&&v.traverseVisible(function(O){O.isLight&&O.layers.test(C.layers)&&(A.pushLight(O),O.castShadow&&A.pushShadow(O))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),be=this.localClippingEnabled,oe=Z.init(this.clippingPlanes,be),oe===!0&&Z.setGlobalState(this.clippingPlanes,C),H!==null&&ue.render(A.state.shadowsArray,k,C);let U=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;let ge=O.material;if(ge)if(Array.isArray(ge))for(let Ae=0;Ae<ge.length;Ae++){let fe=ge[Ae];Zh(fe,k,C,O),U.add(fe)}else Zh(ge,k,C,O),U.add(ge)}),A=b.pop(),H!==null&&H.renderEnd(),U},this.compileAsync=function(v,C,k=null){let U=this.compile(v,C,k);return new Promise(O=>{function ge(){if(U.forEach(function(Ae){let Se=Fe.get(Ae).currentProgram;(Se===void 0||Se.isReady())&&U.delete(Ae)}),U.size===0){O(v);return}setTimeout(ge,10)}Qe.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Wl=null;function Kf(v){Wl&&Wl(v)}function Jh(){Wi.stop()}function Kh(){Wi.start()}let Wi=new sf;Wi.setAnimationLoop(Kf),typeof self<"u"&&Wi.setContext(self),this.setAnimationLoop=function(v){Wl=v,se.setAnimationLoop(v),v===null?Wi.stop():Wi.start()},se.addEventListener("sessionstart",Jh),se.addEventListener("sessionend",Kh),this.render=function(v,C){if(C!==void 0&&C.isCamera!==!0){ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;H!==null&&H.renderStart(v,C);let k=se.enabled===!0&&se.isPresenting===!0,U=B!==null&&(ne===null||k)&&B.begin(I,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),C.parent===null&&C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(B===null||B.isCompositing()===!1)&&(se.cameraAutoUpdate===!0&&se.updateCamera(C),C=se.getCamera()),v.isScene===!0&&v.onBeforeRender(I,v,C,ne),A=$.get(v,b.length),A.init(C),A.state.textureUnits=He.getTextureUnits(),b.push(A),_e.multiplyMatrices(C.projectionMatrix,C.matrixWorldInverse),C.isArrayCamera?he.setFromArrayCamera(C):j.setFromProjectionMatrix(_e,En,C.reversedDepth),be=this.localClippingEnabled,oe=Z.init(this.clippingPlanes,be),w=me.get(v,_.length),w.init(),_.push(w),this.info.render.frame++,se.enabled===!0&&se.isPresenting===!0){let Ae=I.xr.getDepthSensingMesh();Ae!==null&&Xl(Ae,C,-1/0,I.sortObjects)}Xl(v,C,0,I.sortObjects),w.finish(),H!==null&&H.updateLights(A.state.lightsArray),I.sortObjects===!0&&w.sort(Ue,Mt),it=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,it&&R.addToRenderList(w,v),this.info.autoReset===!0&&this.info.reset(),oe===!0&&Z.beginShadows();let O=A.state.shadowsArray;if(ue.render(O,v,C),oe===!0&&Z.endShadows(),(U&&B.hasRenderPass())===!1){let Ae=w.opaque,fe=w.transmissive;if(A.setupLights(),C.isArrayCamera){let Se=C.cameras;if(fe.length>0)for(let Pe=0,We=Se.length;Pe<We;Pe++){let st=Se[Pe];jh(Ae,fe,v,st)}it&&R.render(v);for(let Pe=0,We=Se.length;Pe<We;Pe++){let st=Se[Pe];Qh(w,v,st,st.viewport)}}else fe.length>0&&jh(Ae,fe,v,C),it&&R.render(v),Qh(w,v,C)}ne!==null&&z===0&&(He.updateMultisampleRenderTarget(ne),He.updateRenderTargetMipmap(ne)),U&&B.end(I),v.isScene===!0&&v.onAfterRender(I,v,C),ce.resetDefaultState(),G=-1,Q=null,b.pop(),b.length>0?(A=b[b.length-1],He.setTextureUnits(A.state.textureUnits),oe===!0&&Z.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,H!==null&&H.renderEnd()};function Xl(v,C,k,U){if(v.visible===!1)return;if(v.layers.test(C.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(C);else if(v.isLight)A.pushLight(v),v.castShadow&&A.pushShadow(v);else if(v.isSprite){let Ae=C.isArrayCamera?he:j;if(!v.frustumCulled||v.intersectsFrustum(Ae)){U&&Ie.setFromMatrixPosition(v.matrixWorld).applyMatrix4(_e);let fe=ie.update(v),Se=v.material;Se.visible&&w.push(v,fe,Se,k,Ie.z,null,C)}}else if(v.isMesh||v.isLine||v.isPoints){let Ae=C.isArrayCamera?he:j;if(!v.frustumCulled||v.intersectsFrustum(Ae)){let fe=ie.update(v),Se=v.material;if(U&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ie.copy(v.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ie.copy(fe.boundingSphere.center)),Ie.applyMatrix4(v.matrixWorld).applyMatrix4(_e)),Array.isArray(Se)){let Pe=fe.groups;for(let We=0,st=Pe.length;We<st;We++){let Re=Pe[We],rt=Se[Re.materialIndex];rt&&rt.visible&&w.push(v,fe,rt,k,Ie.z,Re,C)}}else Se.visible&&w.push(v,fe,Se,k,Ie.z,null,C)}}}let ge=v.children;for(let Ae=0,fe=ge.length;Ae<fe;Ae++)Xl(ge[Ae],C,k,U)}function Qh(v,C,k,U){let{opaque:O,transmissive:ge,transparent:Ae}=v;A.setupLightsView(k),oe===!0&&Z.setGlobalState(I.clippingPlanes,k),U&&pe.viewport(ee.copy(U)),O.length>0&&ya(O,C,k),ge.length>0&&ya(ge,C,k),Ae.length>0&&ya(Ae,C,k),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function jh(v,C,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[U.id]===void 0){let Re=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[U.id]=new en(1,1,{generateMipmaps:!0,type:Re?zn:dn,minFilter:yi,samples:Math.max(4,_t.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:at.workingColorSpace})}let ge=A.state.transmissionRenderTarget[U.id],Ae=U.viewport||ee;ge.setSize(Ae.z*I.transmissionResolutionScale,Ae.w*I.transmissionResolutionScale);let fe=I.getRenderTarget(),Se=I.getActiveCubeFace(),Pe=I.getActiveMipmapLevel();I.setRenderTarget(ge),I.getClearColor(Y),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),it&&R.render(k);let We=I.toneMapping;I.toneMapping=wn;let st=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),A.setupLightsView(U),oe===!0&&Z.setGlobalState(I.clippingPlanes,U),ya(v,k,U),He.updateMultisampleRenderTarget(ge),He.updateRenderTargetMipmap(ge),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Re=!1;for(let rt=0,Ct=C.length;rt<Ct;rt++){let yt=C[rt],{object:xt,geometry:Yt,material:Ce,group:rn}=yt;if(Ce.side===Tn&&xt.layers.test(U.layers)){let ht=Ce.side;Ce.side=Gt,Ce.needsUpdate=!0,eu(xt,k,U,Yt,Ce,rn),Ce.side=ht,Ce.needsUpdate=!0,Re=!0}}Re===!0&&(He.updateMultisampleRenderTarget(ge),He.updateRenderTargetMipmap(ge))}I.setRenderTarget(fe,Se,Pe),I.setClearColor(Y,xe),st!==void 0&&(U.viewport=st),I.toneMapping=We}function ya(v,C,k){let U=C.isScene===!0?C.overrideMaterial:null;for(let O=0,ge=v.length;O<ge;O++){let Ae=v[O],{object:fe,geometry:Se,group:Pe}=Ae,We=Ae.material;We.allowOverride===!0&&U!==null&&(We=U),fe.layers.test(k.layers)&&eu(fe,C,k,Se,We,Pe)}}function eu(v,C,k,U,O,ge){H!==null&&O.isNodeMaterial&&H.setObject(v,O),v.onBeforeRender(I,C,k,U,O,ge),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(I,C,k,U,v,ge),O.transparent===!0&&O.side===Tn&&O.forceSinglePass===!1?(O.side=Gt,O.needsUpdate=!0,I.renderBufferDirect(k,C,U,O,v,ge),O.side=Qn,O.needsUpdate=!0,I.renderBufferDirect(k,C,U,O,v,ge),O.side=Tn):I.renderBufferDirect(k,C,U,O,v,ge),v.onAfterRender(I,C,k,U,O,ge)}function tu(v){let C=0;for(let k of v)k.texture!==null&&C++;return C}function or(v,C,k){C.isScene!==!0&&(C=tt);let U=Fe.get(v),O=A.state.lights,ge=A.state.shadowsArray,Ae=O.state.version,fe=K.getParameters(v,O.state,ge,C,k,A.state.lightProbeGridArray),Se=K.getProgramCacheKey(fe),Pe=U.programs;U.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,U.fog=C.fog;let We=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;U.envMap=E.get(v.envMap||U.environment,We),U.envMapRotation=U.environment!==null&&v.envMap===null?C.environmentRotation:v.envMapRotation,Pe===void 0&&(v.addEventListener("dispose",ft),Pe=new Map,U.programs=Pe,U.programVariants=new Map);let st=Pe.get(Se);if(st!==void 0){if(U.currentProgram===st&&U.lightsStateVersion===Ae)return iu(v,fe),st}else fe.uniforms=K.getUniforms(v),H!==null&&v.isNodeMaterial&&H.build(v,k,fe),v.onBeforeCompile(fe,I),st=K.acquireProgram(fe,Se),Pe.set(Se,st),U.uniforms=fe.uniforms;let Re=U.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Re.clippingPlanes=Z.uniform),iu(v,fe),U.needsLights=tp(v),U.lightsStateVersion=Ae,U.needsLights&&(Re.ambientLightColor.value=O.state.ambient,Re.lightProbe.value=O.state.probe,Re.sunLights.value=O.state.sun,Re.sunLightShadows.value=O.state.sunShadow,Re.directionalLights.value=O.state.directional,Re.directionalLightShadows.value=O.state.directionalShadow,Re.spotLights.value=O.state.spot,Re.spotLightShadows.value=O.state.spotShadow,Re.rectAreaLights.value=O.state.rectArea,Re.ltc_1.value=O.state.rectAreaLTC1,Re.ltc_2.value=O.state.rectAreaLTC2,Re.pointLights.value=O.state.point,Re.pointLightShadows.value=O.state.pointShadow,Re.hemisphereLights.value=O.state.hemi,Re.sunShadowMatrix.value=O.state.sunShadowMatrix,Re.sunShadowCascade.value=O.state.sunShadowCascade,Re.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Re.spotLightMatrix.value=O.state.spotLightMatrix,Re.spotLightMap.value=O.state.spotLightMap,Re.pointShadowMatrix.value=O.state.pointShadowMatrix),U.numLightProbeGrids=tu(A.state.lightProbeGridArray),U.currentProgram=st,U.uniformsList=null,st}function Qf(v,C,k,U,O){let ge=Fe.get(v),Ae=ge.currentProgram.id+","+U+","+O,fe=ge.programVariants.get(Ae);return fe===void 0?(fe=or(v,C,k),ge.programVariants.set(Ae,fe)):(ge.currentProgram=fe,ge.uniformsList=null,ge.outputColorSpace=U,ge.toneMapping=O),fe}function nu(v){if(v.uniformsList===null){let C=v.currentProgram.getUniforms();v.uniformsList=Ks.seqWithValue(C.seq,v.uniforms)}return v.uniformsList}function iu(v,C){let k=Fe.get(v);k.outputColorSpace=C.outputColorSpace,k.batching=C.batching,k.batchingColor=C.batchingColor,k.instancing=C.instancing,k.instancingColor=C.instancingColor,k.instancingMorph=C.instancingMorph,k.skinning=C.skinning,k.morphTargets=C.morphTargets,k.morphNormals=C.morphNormals,k.morphColors=C.morphColors,k.morphTargetsCount=C.morphTargetsCount,k.numClippingPlanes=C.numClippingPlanes,k.numIntersection=C.numClipIntersection,k.vertexAlphas=C.vertexAlphas,k.vertexTangents=C.vertexTangents,k.toneMapping=C.toneMapping}function jf(v,C,k,U,O){C.isScene!==!0&&(C=tt),He.resetTextureUnits();let ge=C.fog,Ae=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?C.environment:null,fe=ne===null?I.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:at.workingColorSpace,Se=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,Pe=E.get(U.envMap||Ae,Se),We=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,st=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),Re=!!k.morphAttributes.position,rt=!!k.morphAttributes.normal,Ct=!!k.morphAttributes.color,yt=wn;U.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(yt=I.toneMapping);let xt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Yt=xt!==void 0?xt.length:0,Ce=Fe.get(U),rn=A.state.lights;if(oe===!0&&(be===!0||v!==Q)){let Et=v===Q&&U.id===G;Z.setState(U,v,Et)}let ht=!1,Xi=!1;U.version===Ce.__version?Ce.needsLights&&Ce.lightsStateVersion!==rn.state.version||O.isBatchedMesh&&Ce.batching===!1||!O.isBatchedMesh&&Ce.batching===!0||O.isBatchedMesh&&Ce.batchingColor===!0&&O._colorsTexture===null||O.isBatchedMesh&&Ce.batchingColor===!1&&O._colorsTexture!==null||O.isInstancedMesh&&Ce.instancing===!1||!O.isInstancedMesh&&Ce.instancing===!0||O.isSkinnedMesh&&Ce.skinning===!1||!O.isSkinnedMesh&&Ce.skinning===!0||O.isInstancedMesh&&Ce.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ce.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ce.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ce.instancingMorph===!1&&O.morphTexture!==null||Ce.envMap!==Pe||U.fog===!0&&Ce.fog!==ge||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Z.numPlanes||Ce.numIntersection!==Z.numIntersection)||Ce.vertexAlphas!==We||Ce.vertexTangents!==st||Ce.morphTargets!==Re||Ce.morphNormals!==rt||Ce.morphColors!==Ct||Ce.morphTargetsCount!==Yt||Ce.numLightProbeGrids!==tu(A.state.lightProbeGridArray)?ht=!0:(Ce.outputColorSpace!==fe||Ce.toneMapping!==yt)&&(Xi=!0):(ht=!0,Ce.__version=U.version);let $t=Ce.currentProgram;(ht===!0||Xi===!0)&&($t=Xi===!0?Qf(U,C,O,fe,yt):or(U,C,O),H&&U.isNodeMaterial&&H.onUpdateProgram(U,$t,Ce));let Ma=!1,Ei=!1,qi=!1,ot=$t.getUniforms(),kt=Ce.uniforms;if(pe.useProgram($t.program)&&(Ma=!0,Ei=!0,qi=!0),U.id!==G&&(G=U.id,Ei=!0),Ma||Q!==v){pe.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ot.setValue(L,"projectionMatrix",v.projectionMatrix),ot.setValue(L,"viewMatrix",v.matrixWorldInverse);let Ut=ot.map.cameraPosition;Ut!==void 0&&Ut.setValue(L,Xe.setFromMatrixPosition(v.matrixWorld)),_t.logarithmicDepthBuffer&&ot.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&ot.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),Q!==v&&(Q=v,Ei=!0,qi=!0)}if(Ce.needsLights&&(rn.state.sunShadowMap.length>0&&ot.setValue(L,"sunShadowMap",rn.state.sunShadowMap,He),rn.state.directionalShadowMap.length>0&&ot.setValue(L,"directionalShadowMap",rn.state.directionalShadowMap,He),rn.state.spotShadowMap.length>0&&ot.setValue(L,"spotShadowMap",rn.state.spotShadowMap,He),rn.state.pointShadowMap.length>0&&ot.setValue(L,"pointShadowMap",rn.state.pointShadowMap,He)),O.isSkinnedMesh){ot.setOptional(L,O,"bindMatrix"),ot.setOptional(L,O,"bindMatrixInverse");let Et=O.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),ot.setValue(L,"boneTexture",Et.boneTexture,He))}O.isBatchedMesh&&(ot.setOptional(L,O,"batchingTexture"),ot.setValue(L,"batchingTexture",O._matricesTexture,He),ot.setOptional(L,O,"batchingIdTexture"),ot.setValue(L,"batchingIdTexture",O._indirectTexture,He),ot.setOptional(L,O,"batchingColorTexture"),O._colorsTexture!==null&&ot.setValue(L,"batchingColorTexture",O._colorsTexture,He));let Ln=k.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&J.update(O,k,$t),(Ei||Ce.receiveShadow!==O.receiveShadow)&&(Ce.receiveShadow=O.receiveShadow,ot.setValue(L,"receiveShadow",O.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&C.environment!==null&&(kt.envMapIntensity.value=C.environmentIntensity),kt.dfgLUT!==void 0&&(kt.dfgLUT.value=hv()),Ei){if(ot.setValue(L,"toneMappingExposure",I.toneMappingExposure),Ce.needsLights&&ep(kt,qi),ge&&U.fog===!0&&le.refreshFogUniforms(kt,ge),le.refreshMaterialUniforms(kt,U,ve,Ne,A.state.transmissionRenderTarget[v.id]),Ce.needsLights&&Ce.numLightProbeGrids>0){let Et=M,Ut=0;for(let oi of A.state.lightProbeGridArray)oi.texture!==null&&(Et.textures[Ut]=oi.texture,Et.min[Ut]=oi.boundingBox.min,Et.max[Ut]=oi.boundingBox.max,Et.resolution[Ut]=oi.resolution,Ut++);for(let oi in Et)Et[oi].length=Ut;kt.probesSH.value=Et.textures,kt.probesMin.value=Et.min,kt.probesMax.value=Et.max,kt.probesResolution.value=Et.resolution}Ks.upload(L,nu(Ce),kt,He)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Ks.upload(L,nu(Ce),kt,He),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&ot.setValue(L,"center",O.center),ot.setValue(L,"modelViewMatrix",O.modelViewMatrix),ot.setValue(L,"normalMatrix",O.normalMatrix),ot.setValue(L,"modelMatrix",O.matrixWorld),U.uniformsGroups!==void 0){let Et=U.uniformsGroups;for(let Ut=0,oi=Et.length;Ut<oi;Ut++){let ru=Et[Ut];Le.update(ru,$t),Le.bind(ru,$t)}}return $t}function ep(v,C){v.ambientLightColor.needsUpdate=C,v.lightProbe.needsUpdate=C,v.sunLights.needsUpdate=C,v.sunLightShadows.needsUpdate=C,v.directionalLights.needsUpdate=C,v.directionalLightShadows.needsUpdate=C,v.pointLights.needsUpdate=C,v.pointLightShadows.needsUpdate=C,v.spotLights.needsUpdate=C,v.spotLightShadows.needsUpdate=C,v.rectAreaLights.needsUpdate=C,v.hemisphereLights.needsUpdate=C}function tp(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,C,k){let U=Fe.get(v);U.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Fe.get(v.texture).__webglTexture=C,Fe.get(v.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,C){let k=Fe.get(v);k.__webglFramebuffer=C,k.__useDefaultFramebuffer=C===void 0},this.setRenderTarget=function(v,C=0,k=0){ne=v,q=C,z=k;let U=null,O=!1,ge=!1;if(v){let fe=Fe.get(v);if(fe.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(L.FRAMEBUFFER,fe.__webglFramebuffer),ee.copy(v.viewport),Ee.copy(v.scissor),Be=v.scissorTest,pe.viewport(ee),pe.scissor(Ee),pe.setScissorTest(Be),G=-1;return}else if(fe.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(fe.__hasExternalTextures)He.rebindTextures(v,Fe.get(v.texture).__webglTexture,Fe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let We=v.depthTexture;if(fe.__boundDepthTexture!==We){if(We!==null&&Fe.has(We)&&(v.width!==We.image.width||v.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}let Se=v.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(ge=!0);let Pe=Fe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[C])?U=Pe[C][k]:U=Pe[C],O=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?U=Fe.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[k]:U=Pe,ee.copy(v.viewport),Ee.copy(v.scissor),Be=v.scissorTest}else ee.copy(ze).multiplyScalar(ve).floor(),Ee.copy(Ze).multiplyScalar(ve).floor(),Be=et;if(k!==0&&(U=X),pe.bindFramebuffer(L.FRAMEBUFFER,U)&&pe.drawBuffers(v,U),pe.viewport(ee),pe.scissor(Ee),pe.setScissorTest(Be),O){let fe=Fe.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+C,fe.__webglTexture,k)}else if(ge){let fe=C;for(let Se=0;Se<v.textures.length;Se++){let Pe=Fe.get(v.textures[Se]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Se,Pe.__webglTexture,k,fe)}}else if(v!==null&&k!==0){let fe=Fe.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,fe.__webglTexture,k)}G=-1};function su(v){let C=Fe.get(v);return(C.__readFormat!==v.format||C.__readType!==v.type)&&(C.__readFormat=v.format,C.__readType=v.type,C.__formatReadable=_t.textureFormatReadable(v.format),C.__typeReadable=_t.textureTypeReadable(v.type)),C}this.readRenderTargetPixels=function(v,C,k,U,O,ge,Ae,fe=0){if(!(v&&v.isWebGLRenderTarget)){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=Fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se){pe.bindFramebuffer(L.FRAMEBUFFER,Se);try{let Pe=v.textures[fe],We=Pe.format,st=Pe.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);let Re=su(Pe);if(Re.__formatReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Re.__typeReadable===!1){ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}C>=0&&C<=v.width-U&&k>=0&&k<=v.height-O&&L.readPixels(C,k,U,O,re.convert(We),re.convert(st),ge)}finally{let Pe=ne!==null?Fe.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(v,C,k,U,O,ge,Ae,fe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=Fe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Ae!==void 0&&(Se=Se[Ae],Array.isArray(Se)&&(Se=Se[0])),Se)if(C>=0&&C<=v.width-U&&k>=0&&k<=v.height-O){pe.bindFramebuffer(L.FRAMEBUFFER,Se);let Pe=v.textures[fe],We=Pe.format,st=Pe.type;v.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+fe);let Re=su(Pe);if(Re.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Re.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,rt),L.bufferData(L.PIXEL_PACK_BUFFER,ge.byteLength,L.STREAM_READ),L.readPixels(C,k,U,O,re.convert(We),re.convert(st),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Ct=ne!==null?Fe.get(ne).__webglFramebuffer:null;pe.bindFramebuffer(L.FRAMEBUFFER,Ct);let yt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Ed(L,yt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,rt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ge),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(rt),L.deleteSync(yt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,C=null,k=0){let U=Math.pow(2,-k),O=Math.floor(v.image.width*U),ge=Math.floor(v.image.height*U),Ae=C!==null?C.x:0,fe=C!==null?C.y:0;He.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,Ae,fe,O,ge),pe.unbindTexture()},this.copyTextureToTexture=function(v,C,k=null,U=null,O=0,ge=0){let Ae,fe,Se,Pe,We,st,Re,rt,Ct,yt=v.isCompressedTexture?v.mipmaps[ge]:v.image;if(k!==null)Ae=k.max.x-k.min.x,fe=k.max.y-k.min.y,Se=k.isBox3?k.max.z-k.min.z:1,Pe=k.min.x,We=k.min.y,st=k.isBox3?k.min.z:0;else{let ot=Math.pow(2,-O);Ae=Math.floor(yt.width*ot),fe=Math.floor(yt.height*ot),v.isDataArrayTexture?Se=yt.depth:v.isData3DTexture?Se=Math.floor(yt.depth*ot):Se=1,Pe=0,We=0,st=0}U!==null?(Re=U.x,rt=U.y,Ct=U.z):(Re=0,rt=0,Ct=0);let xt=re.convert(C.format),Yt=re.convert(C.type),Ce;C.isData3DTexture?(He.setTexture3D(C,0),Ce=L.TEXTURE_3D):C.isDataArrayTexture||C.isCompressedArrayTexture?(He.setTexture2DArray(C,0),Ce=L.TEXTURE_2D_ARRAY):(He.setTexture2D(C,0),Ce=L.TEXTURE_2D),pe.activeTexture(L.TEXTURE0),pe.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,C.flipY),pe.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),pe.pixelStorei(L.UNPACK_ALIGNMENT,C.unpackAlignment);let rn=pe.getParameter(L.UNPACK_ROW_LENGTH),ht=pe.getParameter(L.UNPACK_IMAGE_HEIGHT),Xi=pe.getParameter(L.UNPACK_SKIP_PIXELS),$t=pe.getParameter(L.UNPACK_SKIP_ROWS),Ma=pe.getParameter(L.UNPACK_SKIP_IMAGES);pe.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),pe.pixelStorei(L.UNPACK_SKIP_PIXELS,Pe),pe.pixelStorei(L.UNPACK_SKIP_ROWS,We),pe.pixelStorei(L.UNPACK_SKIP_IMAGES,st);let Ei=v.isDataArrayTexture||v.isData3DTexture,qi=C.isDataArrayTexture||C.isData3DTexture;if(v.isDepthTexture){let ot=Fe.get(v),kt=Fe.get(C),Ln=Fe.get(ot.__renderTarget),Et=Fe.get(kt.__renderTarget);pe.bindFramebuffer(L.READ_FRAMEBUFFER,Ln.__webglFramebuffer),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Ut=0;Ut<Se;Ut++)Ei&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(v).__webglTexture,O,st+Ut),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Fe.get(C).__webglTexture,ge,Ct+Ut)),L.blitFramebuffer(Pe,We,Pe+Ae,We+fe,Re,rt,Re+Ae,rt+fe,L.DEPTH_BUFFER_BIT,L.NEAREST);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Fe.has(v)){let ot=Fe.get(v),kt=Fe.get(C);pe.bindFramebuffer(L.READ_FRAMEBUFFER,P),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let Ln=0;Ln<Se;Ln++)Ei?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ot.__webglTexture,O,st+Ln):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ot.__webglTexture,O),qi?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,ge,Ct+Ln):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,kt.__webglTexture,ge),O!==0?L.blitFramebuffer(Pe,We,Pe+Ae,We+fe,Re,rt,Re+Ae,rt+fe,L.COLOR_BUFFER_BIT,L.NEAREST):qi?L.copyTexSubImage3D(Ce,ge,Re,rt,Ct+Ln,Pe,We,Ae,fe):L.copyTexSubImage2D(Ce,ge,Re,rt,Pe,We,Ae,fe);pe.bindFramebuffer(L.READ_FRAMEBUFFER,null),pe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else qi?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(Ce,ge,Re,rt,Ct,Ae,fe,Se,xt,Yt,yt.data):C.isCompressedArrayTexture?L.compressedTexSubImage3D(Ce,ge,Re,rt,Ct,Ae,fe,Se,xt,yt.data):L.texSubImage3D(Ce,ge,Re,rt,Ct,Ae,fe,Se,xt,Yt,yt):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ge,Re,rt,Ae,fe,xt,Yt,yt.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ge,Re,rt,yt.width,yt.height,xt,yt.data):L.texSubImage2D(L.TEXTURE_2D,ge,Re,rt,Ae,fe,xt,Yt,yt);pe.pixelStorei(L.UNPACK_ROW_LENGTH,rn),pe.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),pe.pixelStorei(L.UNPACK_SKIP_PIXELS,Xi),pe.pixelStorei(L.UNPACK_SKIP_ROWS,$t),pe.pixelStorei(L.UNPACK_SKIP_IMAGES,Ma),ge===0&&C.generateMipmaps===!0&&C.mipmapsAutoUpdate===!0&&L.generateMipmap(Ce),pe.unbindTexture()},this.initRenderTarget=function(v){Fe.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),pe.unbindTexture()},this.resetState=function(){q=0,z=0,ne=null,pe.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),t.unpackColorSpace=at._getUnpackColorSpace()}};var wl=class extends Qi{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new Jn;e.deleteAttribute("uv");let t=new Kn({side:Gt}),i=new Kn,s=new Kr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new gt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Cr(e,i,6),o=new Bt;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new gt(e,er(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new gt(e,er(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new gt(e,er(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let f=new gt(e,er(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);let d=new gt(e,er(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let u=new gt(e,er(100));u.position.set(0,20,0),u.scale.set(1,.1,1),this.add(u)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function er(n){return new Xr({color:0,emissive:16777215,emissiveIntensity:n})}var mf={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:.001953125}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`};var gf={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:.001953125}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};var pt={face:{x0:-78,x1:78,y0:-2,y1:262},handle:{x0:-20,x1:20,y0:-1,y1:104},butt:{x0:-18.6,x1:18.6,z0:-13.6,z1:13.6},edge:{len:17.2,h:6.34},label:[-4.35,3.5,15.95,57.8],flag:[-4.2,5.35,20.95,30.5],engr:{x:5.1,y:110.4,h:3.5},center:new D(0,129,0)},je={currency:"\u20AC",models:{"OPUS 1":{cls:"ALL+",size:"M",price:189,body:52,plies:7},PALIS:{cls:"OFF",size:"M",price:169,body:50,plies:7},"WAVE C":{cls:"OFF\u2212",size:"L",price:179,body:53.5,plies:5},"PULSE C":{cls:"OFF",size:"DEF",price:199,body:54,plies:7}},shapes:{Flared:{vol:40.4},Straight:{vol:39.1},Anatomical:{vol:41.8},Penhold:{vol:31}},designs:{h1:{name:"Palis original",sub:"Dark scales, blade plies visible on the sides",price:0,rho:.85},h2:{name:"Padauk \xB7 maple pinstripe",sub:"Three maple veneers \xB7 maple end cap",price:24,rho:.75}},core:{solid:{name:"Solid",sub:"heavy",price:0,slot:0,pocket:0},medium:{name:"Partly hollow",sub:"medium \xB7 your CAD cavity",price:12,slot:3.5,pocket:4.7},light:{name:"Max hollow",sub:"light",price:18,slot:5.2,pocket:8.3}},rhoCore:.4,finish:{untreated:{name:"Untreated",price:0,w:0},oiled:{name:"Oiled",price:6,w:.4}},flag:{price:8,w:.2},label:{price:12,w:.5},engr:{price:15,w:0},flags:{br:"Brazil",ch:"Switzerland",in:"India",de:"Germany",fr:"France",it:"Italy",jp:"Japan",se:"Sweden"},plies:[{n:"Face veneer \xB7 Rosewood",t:"0.6 mm",tex:"faceF"},{n:"Inner veneer",t:"",tex:"cream"},{n:"Cross veneer",t:"",tex:"cross"},{n:"Core",t:"2.6 mm",tex:"core"},{n:"Cross veneer",t:"",tex:"cross"},{n:"Inner veneer",t:"",tex:"cream"},{n:"Face veneer \xB7 Rosewood",t:"0.6 mm",tex:"faceB"}],rules:[{test:n=>n.design==="h2"&&n.core==="light",field:"core",fallback:"medium",why:"Max hollow is not offered with Handle 2: the maple pinstripes run through the hollowed zone."}]},te={model:"PALIS",shape:"Flared",design:"h1",core:"solid",finish:"untreated",label:!0,flag:!0,flagC:"br",engr:""},cn=document.getElementById("c"),Pn=document.getElementById("stage"),nt=new bl({canvas:cn,antialias:!0,alpha:!0,powerPreference:"high-performance"}),dv=matchMedia("(pointer:coarse)").matches;nt.setPixelRatio(Math.min(devicePixelRatio,dv?1.75:2));nt.outputColorSpace=Ht;nt.toneMapping=wn;nt.setClearColor(0,0);var Xt=new Qi,fv=new Qs(nt);Xt.environment=fv.fromScene(new wl,.03).texture;Xt.environmentIntensity=.42;var lt=new Vt(28,1,10,5e3),Ll=new ns(16777215,.9);Ll.position.set(-260,420,520);Xt.add(Ll);var Dl=new ns(15791359,.3);Dl.position.set(380,120,-420);Xt.add(Dl);var Ph=new ns(16774894,0);Ph.position.set(80,-500,300);Xt.add(Ph);var _a=new hn,bt=new hn,Vi=new hn,ir=new hn;Vi.position.copy(pt.center).multiplyScalar(-1);ir.position.copy(Vi.position);bt.add(Vi,ir);_a.add(bt);Xt.add(_a);var ua=new Ws,pv=new Yr(ua),mv=nt.capabilities.getMaxAnisotropy(),bh={};function sn(n,{srgb:e=!0,wrap:t=xn,wrapT:i}={}){let s=n+t+(i??"");if(bh[s])return bh[s];let r=pv.load(n,()=>qt());return r.colorSpace=e?Ht:Hn,r.wrapS=t,r.wrapT=i??t,r.anisotropy=Math.min(8,mv),bh[s]=r}function Ih(n,e,t,i,s){n.repeat.set(1/(t-e),1/(s-i)),n.offset.set(-e/(t-e),-i/(s-i))}var wf=`
#define WOOD_F0 0.0022
// handle footprint half-width along the handle (sampled from the STEP every 4 mm)
float hwFoot(float y){
  float a[27] = float[27](17.93,17.43,16.81,16.33,15.8,15.33,14.9,14.57,14.24,13.95,13.74,13.54,13.39,13.3,13.25,13.25,13.31,13.4,13.55,13.75,13.96,14.18,14.19,14.01,13.52,12.72,11.95);
  float f = clamp(y / 4.0, 0.0, 25.999); int i = int(floor(f));
  return mix(a[i], a[i + 1], f - float(i));
}
// soft contact occlusion on the blade face around the handle (handle is 10 mm proud of the face)
float faceAO(vec3 p){
  if (p.y > 112.0) return 1.0;
  float d = max(abs(p.x) - hwFoot(min(p.y, 103.9)), p.y - 102.0);
  return 1.0 - 0.38 * exp(-max(d, 0.0) / 2.2);
}
#define WOOD_F90 0.1
varying vec3 vOP; varying vec3 vON;
uniform float uOil;
vec3 oilGrade(vec3 c, float k){
  vec3 o = pow(max(c,0.0), vec3(1.12)) * vec3(1.13,0.95,0.90);
  float l = dot(o, vec3(0.2126,0.7152,0.0722));
  o = mix(vec3(l), o, 1.16);
  return mix(c, max(o,0.0), k);
}
vec3 pnArb(vec3 sp, vec3 sn, vec2 dH, float fd){
  vec3 sx = normalize(dFdx(sp)); vec3 sy = normalize(dFdy(sp));
  vec3 r1 = cross(sy, sn); vec3 r2 = cross(sn, sx);
  float det = dot(sx, r1) * fd;
  vec3 g = sign(det) * (dH.x * r1 + dH.y * r2);
  return normalize(abs(det) * sn - g);
}`;function Af(n){n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vOP; varying vec3 vON;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vOP = position; vON = normal;`)}function Lh(n=0){let e={uTop:{value:null},uBox:{value:new mt(pt.handle.x0,pt.handle.x1,pt.handle.y0,pt.handle.y1)},uDec:{value:null},uDecBox:{value:new mt},uDecOn:{value:0},uOil:{value:0},uBump:{value:n?.5:.9},uMode:{value:n}},t=new xi({roughness:.62,clearcoat:.001,clearcoatRoughness:.32});return t.userData.u=e,t.onBeforeCompile=i=>{Object.assign(i.uniforms,e),Af(i),i.fragmentShader=i.fragmentShader.replace("#include <common>",`#include <common>
${wf}
uniform sampler2D uTop; uniform vec4 uBox; uniform sampler2D uDec; uniform vec4 uDecBox; uniform float uDecOn;
uniform float uBump; uniform int uMode;`).replace("#include <map_fragment>",`
  vec3 nO = normalize(vON);
  vec2 uT, uS;
  if (uMode == 0) {
    uT = vec2((vOP.x-uBox.x)/(uBox.y-uBox.x), (vOP.y-uBox.z)/(uBox.w-uBox.z));
    float xs = sign(vOP.x) * (14.5 - (abs(vOP.z) - 3.0) * 0.95);
    uS = vec2((xs-uBox.x)/(uBox.y-uBox.x), uT.y);
  } else {
    uT = vec2(vOP.x/22.0 + 0.5, vOP.y/4.6 + 0.08);
    uS = vec2(vOP.z/22.0 + 0.5, vOP.y/4.6 + 0.08);
  }
  float wT = pow(abs(nO.z), 3.0) + pow(abs(nO.y), 3.0);
  float wS = pow(abs(nO.x), 3.0);
  float ws = max(wT + wS, 1e-4); wT /= ws; wS /= ws;
  vec4 tc = texture2D(uTop, uT) * wT + texture2D(uTop, uS) * wS;
  float decA = 0.0;
  if (uDecOn > 0.5) {
    vec2 dv = (vOP.xy - uDecBox.xz) / (uDecBox.yw - uDecBox.xz);
    if (all(greaterThan(dv, vec2(0.0))) && all(lessThan(dv, vec2(1.0)))) {
      vec4 d = texture2D(uDec, dv);
      decA = d.a * smoothstep(0.45, 0.75, abs(nO.z));
      tc.rgb = mix(tc.rgb, d.rgb, decA);
    }
  }
  tc.rgb = oilGrade(tc.rgb, uOil * (1.0 - decA) * (uMode == 1 ? 0.45 : 1.0));
  // contact occlusion where the scale meets the blade face (concave corner at the top of the handle)
  float az = abs(vOP.z) - 3.0;
  tc.rgb *= 1.0 - (0.10 + 0.22 * smoothstep(82.0, 96.0, vOP.y)) * exp(-az / 0.8) * (uMode == 0 ? 1.0 : 0.4);
  float hgt = dot(tc.rgb, vec3(0.33));
  diffuseColor *= tc;`).replace("#include <roughnessmap_fragment>","float roughnessFactor = mix(roughness, 0.13, decA);").replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
  material.specularColor = mix(vec3(WOOD_F0), vec3(0.03), decA); material.specularF90 = mix(WOOD_F90, 1.0, decA);
  material.specularColorBlended = material.specularColor;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  normal = pnArb(-vViewPosition, normal, vec2(dFdx(hgt), dFdy(hgt)) * uBump * (1.0 - decA), faceDirection);`)},t.customProgramCacheKey=()=>"handle"+n,t}function xa(n,{grade:e=!0,bump:t=0,engrave:i=!1}={}){let s={uOil:{value:0},uOilK:{value:1},uFaceAO:{value:0},uBumpS:{value:t},uEng:{value:null},uEngBox:{value:new mt(0,1,0,1)},uEngOn:{value:0}},r=new xi(Object.assign({roughness:.6,clearcoat:.001,clearcoatRoughness:.35},n));return r.userData.u=s,r.onBeforeCompile=a=>{Object.assign(a.uniforms,s),Af(a);let o=!!n.roughnessMap;a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
${wf}
uniform float uBumpS; uniform sampler2D uEng; uniform vec4 uEngBox; uniform float uEngOn; uniform float uFaceAO; uniform float uOilK;`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
  if (metalnessFactor < 0.5) { material.specularColor = mix(vec3(0.045), vec3(WOOD_F0), woodK); material.specularF90 = mix(1.0, WOOD_F90, woodK);
    material.specularColorBlended = mix(material.specularColor, diffuseColor.rgb, metalnessFactor); }`).replace("#include <map_fragment>",`#include <map_fragment>
  float woodK = 1.0; float engA = 0.0;
  ${o?"woodK = step(0.45, texture2D(roughnessMap, vRoughnessMapUv).g);":""}
  ${e?"diffuseColor.rgb = oilGrade(diffuseColor.rgb, uOil * uOilK * woodK);":""}
  ${i?`if (uEngOn > 0.5) {
    vec2 ev = (vOP.xy - uEngBox.xz) / (uEngBox.yw - uEngBox.xz);
    if (all(greaterThan(ev, vec2(0.0))) && all(lessThan(ev, vec2(1.0)))) {
      engA = texture2D(uEng, ev).a;
      diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.30, 0.24, 0.22), engA);
    }
  }`:""}
  if (uFaceAO > 0.5) diffuseColor.rgb *= faceAO(vOP);
  float hgt = dot(diffuseColor.rgb, vec3(0.33)) - engA * 0.25;`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
  normal = pnArb(-vViewPosition, normal, vec2(dFdx(hgt), dFdy(hgt)) * (uBumpS * woodK + engA * 1.6), faceDirection);`)},r.customProgramCacheKey=()=>"uv"+(e?1:0)+(n.roughnessMap?"r":"")+(i?"e":""),r}var Dh=sn("tex/face_front.jpg"),Nh=sn("tex/face_back.jpg");[Dh,Nh].forEach(n=>Ih(n,pt.face.x0,pt.face.x1,pt.face.y0,pt.face.y1));var Rf=n=>({map:n,roughness:.56}),Ul=xa(Rf(Dh),{grade:!1,bump:.7,engrave:!0}),Uh=xa(Rf(Nh),{grade:!1,bump:.7});Ul.userData.u.uFaceAO.value=1;Uh.userData.u.uFaceAO.value=1;var Fh=sn("tex/edge.jpg",{wrap:On,wrapT:xn});Fh.repeat.set(1/pt.edge.len,1/pt.edge.h);Fh.offset.set(0,.5);var Cf=xa({map:Fh,roughness:.72},{grade:!1,bump:.6}),Th=sn("tex/butt_rm.png",{srgb:!1});Ih(Th,pt.butt.x0,pt.butt.x1,pt.butt.z0,pt.butt.z1);var Oh=n=>{let e=sn(n);return Ih(e,pt.butt.x0,pt.butt.x1,pt.butt.z0,pt.butt.z1),e},fa=xa({map:Oh("tex/butt_h1.jpg"),roughnessMap:Th,metalnessMap:Th,roughness:1,metalness:1,clearcoat:.25,clearcoatRoughness:.08},{bump:.8}),zi=Lh(0),ki=Lh(0),fs=Lh(1);fs.userData.u.uTop.value=sn("tex/maple_side.jpg",{wrap:On});var Pf=sn("tex/maple_side.jpg",{wrap:Ds});Pf.repeat.set(1/22,1/4.6);var Al=xa({map:Pf,roughness:.62},{bump:.5}),gv=[zi,ki,fs,fa,Al],Bh={h1:{front:"tex/h1_front.jpg",back:"tex/h1_back.jpg",butt:"tex/butt_h1.jpg",cap:!1},h2:{front:"tex/h2_front.jpg",back:"tex/h2_back.jpg",butt:"tex/butt_h2.jpg",cap:!0}},_v=new xi({color:15327186,roughness:.2,clearcoat:.8,transparent:!0,opacity:.24,depthWrite:!1,side:Qn}),xv=new ks({color:2760987,transparent:!0,opacity:.55}),vv=new xi({color:14182942,emissive:5906176,emissiveIntensity:.6,roughness:.45,clearcoat:.4,side:Tn,transparent:!0,opacity:.92}),yv=sn("tex/decal_label.png"),Mv=sn("tex/decal_flag.png");function zh(n){let e=new Lr(n);return e.colorSpace=Ht,e.anisotropy=8,e}function Sv(n,e){let t=document.createElement("canvas");t.width=160,t.height=850;let i=t.getContext("2d");i.fillStyle="#0d0c0b",i.beginPath(),i.roundRect(6,6,148,838,74),i.fill();let s=i.createLinearGradient(0,0,160,0);s.addColorStop(0,"rgba(255,255,255,.10)"),s.addColorStop(.4,"rgba(255,255,255,0)"),s.addColorStop(1,"rgba(255,255,255,.06)"),i.fillStyle=s,i.fill(),i.textAlign="center",i.textBaseline="middle",i.font='700 74px Archivo, "Arial Narrow", sans-serif';let r=(a,o,l)=>{i.save(),i.translate(80,o),i.rotate(Math.PI/2),i.fillStyle=l,i.fillText(a.split("").join("\u200A"),0,3),i.restore()};return r(n,230,"#f2efe9"),r(e,690,"#ec7a1c"),t}function bv(n){let e=document.createElement("canvas");e.width=e.height=256;let t=e.getContext("2d");t.save(),t.beginPath(),t.arc(128,128,118,0,Math.PI*2),t.clip();let i=(r,a)=>r.forEach((o,l)=>{t.fillStyle=o,a?t.fillRect(l*256/r.length,0,256/r.length+1,256):t.fillRect(0,l*256/r.length,256,256/r.length+1)});if(n==="ch")t.fillStyle="#d52b1e",t.fillRect(0,0,256,256),t.fillStyle="#fff",t.fillRect(110,62,36,132),t.fillRect(62,110,132,36);else if(n==="in"){i(["#ff9933","#ffffff","#138808"]),t.strokeStyle="#000080",t.lineWidth=4,t.beginPath(),t.arc(128,128,30,0,Math.PI*2),t.stroke();for(let r=0;r<24;r++){let a=r*Math.PI/12;t.beginPath(),t.moveTo(128,128),t.lineTo(128+30*Math.cos(a),128+30*Math.sin(a)),t.lineWidth=1.5,t.stroke()}}else n==="de"?i(["#000","#dd0000","#ffce00"]):n==="fr"?i(["#0055a4","#fff","#ef4135"],!0):n==="it"?i(["#009246","#fff","#ce2b37"],!0):n==="jp"?(t.fillStyle="#fff",t.fillRect(0,0,256,256),t.fillStyle="#bc002d",t.beginPath(),t.arc(128,128,56,0,Math.PI*2),t.fill()):n==="se"&&(t.fillStyle="#006aa7",t.fillRect(0,0,256,256),t.fillStyle="#fecc00",t.fillRect(84,0,34,256),t.fillRect(0,111,256,34));t.restore();let s=t.createRadialGradient(96,84,6,128,128,122);return s.addColorStop(0,"rgba(255,255,255,.42)"),s.addColorStop(.32,"rgba(255,255,255,.06)"),s.addColorStop(.86,"rgba(0,0,0,.05)"),s.addColorStop(1,"rgba(0,0,0,.35)"),t.fillStyle=s,t.beginPath(),t.arc(128,128,118,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(25,25,25,.7)",t.lineWidth=7,t.beginPath(),t.arc(128,128,120,0,Math.PI*2),t.stroke(),e}var _f={},xf={};function Ev(n){return n==="br"?Mv:_f[n]||(_f[n]=zh(bv(n)))}function Tv(n){return n==="PALIS"?yv:xf[n]||(xf[n]=zh(Sv(n,je.models[n].cls)))}var cs=new Map;function wv(n){if(!n)return null;if(cs.has(n))return cs.get(n);let e=document.createElement("canvas");e.width=2048,e.height=256,Av(n,e);let t=zh(e);return cs.set(n,t),cs.size>24&&cs.delete(cs.keys().next().value),t}function Av(n,e){let t=e.getContext("2d");if(t.clearRect(0,0,e.width,e.height),!n)return 0;let i=250;t.font=`300 ${i}px "Barlow Condensed", "Arial Narrow", sans-serif`,t.textBaseline="alphabetic";let s=Math.min(2040,t.measureText(n).width+12);return t.lineJoin="round",t.strokeStyle="#000",t.lineWidth=15,t.strokeText(n,6,228),t.globalCompositeOperation="destination-out",t.fillStyle="rgba(0,0,0,.55)",t.fillText(n,6,228),t.globalCompositeOperation="source-over",s}var vt={},Fl=[];async function Rv(){let n=await(await fetch("blade.json")).json(),e=atob(n.data),t=new ArrayBuffer(e.length),i=new Uint8Array(t);for(let h=0;h<e.length;h++)i[h]=e.charCodeAt(h);let s=new DataView(t).getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s))),a=4+s,o={int16:Int16Array,int8:Int8Array,uint16:Uint16Array,uint32:Uint32Array},l=([h,f,d])=>new o[d](t,a+h,f);Fl=r._outline;for(let[h,f]of Object.entries(r)){if(h.startsWith("_"))continue;let d=l(f.pos),u=l(f.nrm),g=l(f.uv),y=d.length/3,p=new Float32Array(y*3),m=new Float32Array(y*3),S=new Float32Array(y*2);for(let w=0;w<y;w++)p[w*3]=d[w*3]/100,p[w*3+1]=d[w*3+1]/100,p[w*3+2]=d[w*3+2]/100,m[w*3]=u[w*4]/127,m[w*3+1]=u[w*4+1]/127,m[w*3+2]=u[w*4+2]/127,S[w*2]=g[w*2]/50,S[w*2+1]=g[w*2+1]/50;let T=new un;T.setAttribute("position",new Kt(p,3)),T.setAttribute("normal",new Kt(m,3)),T.setAttribute("uv",new Kt(S,2)),T.setIndex(new Kt(l(f.idx),1));let M=new gt(T,Cf);M.name=h,Vi.add(M),vt[h]=M}vt.bladeFront.material=Ul,vt.bladeBack.material=Uh,vt.butt.material=fa,vt.shellFront.material=zi,vt.shellBack.material=ki,Cv();let c=vt.cavity;c.material=vv,c.visible=!1,c.renderOrder=2,c.geometry.computeBoundingBox(),c.userData.c=c.geometry.boundingBox.getCenter(new D)}var us=null;function Cv(){let n={};for(let c of["shellFront","shellFrontCap"]){let h=vt[c].geometry.attributes.position;for(let f=0;f<h.count;f++){let d=h.getZ(f);if(Math.abs(d-3)>.3)continue;let u=Math.round(h.getY(f));n[u]=Math.max(n[u]||0,Math.abs(h.getX(f)))}}let e=Object.keys(n).map(Number).sort((c,h)=>c-h),t=e.map(c=>new ae(n[c]+.4,c)).concat(e.slice().reverse().map(c=>new ae(-n[c]-.4,c))),i=new Ii(t),s=new ts(i);s.translate(0,0,3);let r=new ts(i);r.rotateY(Math.PI),r.scale(-1,1,1),r.translate(0,0,-3);let a=new ts(i);a.translate(0,0,-3);let o=a.index.array;for(let c=0;c<o.length;c+=3){let h=o[c+1];o[c+1]=o[c+2],o[c+2]=h}let l=a.attributes.normal;for(let c=0;c<l.count;c++)l.setZ(c,-1);us=new hn,us.add(new gt(s,Ul),new gt(a,Uh));for(let c of["shellFront","shellBack","butt"])us.add(new Pr(new Ur(vt[c].geometry,35),xv));us.visible=!1,Vi.add(us)}function Pv(){let n=[];for(let e of je.rules)e.test(te)&&(n.push(e.why),te[e.field]=e.fallback);return n}function Iv(){let n=je.models[te.model],e=je.designs[te.design],t=je.core[te.core],i=je.finish[te.finish],s=je.shapes[te.shape].vol,r=[];return r.push({n:`${te.model} \xB7 ${n.cls} \xB7 size ${n.size}`,p:n.price,w:n.body-t.slot*je.rhoCore,info:"blade body"}),r.push({n:`Handle: ${te.shape} \xB7 ${e.name}`,p:e.price,w:(s-t.pocket)*e.rho,info:`${(s-t.pocket).toFixed(1)} cm\xB3 \xD7 ${e.rho} g/cm\xB3`}),r.push({n:`Inside: ${t.name}`,p:t.price,w:0}),r.push({n:`Finish: ${i.name}`,p:i.price,w:i.w}),te.label&&r.push({n:`Model label (${te.model} \xB7 ${n.cls})`,p:je.label.price,w:je.label.w}),te.flag&&r.push({n:`Flag: ${je.flags[te.flagC]}`,p:je.flag.price,w:je.flag.w}),te.engr&&r.push({n:`Engraving \u201C${te.engr}\u201D`,p:je.engr.price,w:0}),r}var nr=n=>je.currency+n.toLocaleString("en-US");function pa(){let n=Iv();return{L:n,P:n.reduce((e,t)=>e+t.p,0),W:n.reduce((e,t)=>e+t.w,0)}}function Lv(n){let e={...te};Object.assign(te,n);let t=pa();return Object.assign(te,e),t}var Eh={body:165.2,handle:42.2,cavity:43.5};function sr(n){let e=je.models[n.model],t=je.designs[n.design],i=je.core[n.core],s=je.shapes[n.shape].vol,r=e.body,a=i.slot*je.rhoCore,o=(s-i.pocket)*t.rho,l=(n.label?je.label.w:0)+(n.flag?je.flag.w:0),c=r-a+o+l;return(r*Eh.body-a*Eh.cavity+o*Eh.handle+l*35)/c}var Dv=()=>sr({...te,design:"h1",core:"solid",label:!0,flag:!0,finish:"untreated"}),da=!1,Cn=null,If=0,fn=0,Ol=!1;function Bl(n){let e=0;for(let[t,i]of Fl)Math.abs(i-n)<2&&(e=Math.max(e,Math.abs(t)));return e||20}function Nv(){let n=new Jn(1,.7,7.4);Cn=new gt(n,new ji({color:14836491,transparent:!0,opacity:.95,toneMapped:!1})),Cn.visible=!1,Cn.renderOrder=3,Vi.add(Cn)}function Uv(n){If=n,fn||(fn=n),qt()}function zl(n){Ol=n,document.querySelector("#balTag")?.classList.toggle("on",n),qt()}function Fv(n){if(!Cn)return!1;let e=fn;return fn+=(If-fn)*Math.min(1,n/160),Cn.position.set(0,fn,0),Cn.scale.x=Bl(fn)*2+1.2,Cn.visible=Ol&&zt<.01,Math.abs(e-fn)>.01}var ai=!1,Lf=!1;function wh(n){let e=Bh[n.design];zi.userData.u.uTop.value=sn(e.front),ki.userData.u.uTop.value=sn(e.back),fa.map=Oh(e.butt),vt.shellFrontCap&&!ai&&(vt.shellFrontCap.material=e.cap?fs:zi,vt.shellBackCap.material=e.cap?fs:ki,vt.bladeEdgeCap.material=e.cap?Al:Cf);let t=zi.userData.u,i=ki.userData.u;t.uDec.value=Tv(n.model),t.uDecBox.value.set(...pt.label),t.uDecOn.value=n.label?1:0,i.uDec.value=Ev(n.flagC),i.uDecBox.value.set(...pt.flag),i.uDecOn.value=n.flag?1:0;let s=n.finish==="oiled"?1:0;for(let o of gv)o.userData.u.uOil.value=s,o.clearcoat=s?.22:.001;zi.roughness=ki.roughness=s?.42:.6,fs.roughness=Al.roughness=s?.45:.62,fa.userData.u.uOilK.value=e.cap?.4:1,Al.userData.u.uOilK.value=.45;let r=Ul.userData.u;r.uEng.value=wv(n.engr),r.uEngOn.value=n.engr?1:0;let a=pt.engr.h*256/175;r.uEngBox.value.set(pt.engr.x,pt.engr.x+a*2048/256,pt.engr.y-a*.11,pt.engr.y-a*.11+a),Uv(sr(n))}function mn(n={}){let e=Pv();wh(te),In(ai),ni=!0,qt(),qv(e,n),Df()}function In(n){ai=n;let e=n&&te.core!=="solid";if(!vt.cavity)return;let t=Bh[te.design],i={shellFront:zi,shellBack:ki,shellFrontCap:t.cap?fs:zi,shellBackCap:t.cap?fs:ki,butt:fa};for(let[a,o]of Object.entries(i))vt[a].material=n?_v:o;us&&(us.visible=n),Lf=e,vt.cavity.visible=e&&zt<.001;let s=te.core==="light"?[1.32,1.06,1.28]:[1,1,1],r=vt.cavity.userData.c;vt.cavity.scale.set(...s),vt.cavity.position.set(r.x*(1-s[0]),r.y*(1-s[1]),r.z*(1-s[2])),document.querySelector('[data-view="xray"]')?.classList.toggle("on",n),ni=!0,qt()}var kl={"OPUS 1":"opus1",PALIS:"palis","WAVE C":"wavec","PULSE C":"pulsec"};function kh(){let n=[...new TextEncoder().encode(te.engr)].map(e=>e.toString(16).padStart(2,"0")).join("");return["cfg",kl[te.model],te.shape.toLowerCase(),te.design,te.core,te.finish,te.label?"l1":"l0",te.flag?"f"+te.flagC:"f0","e"+n].join("-")}function Df(){try{history.replaceState(null,"","#"+kh())}catch{}}function Nf(){let n=(location.hash||"").slice(1).split("-");if(n[0]!=="cfg"||n.length<9)return;let e=Object.entries(kl).find(([,i])=>i===n[1]);e&&(te.model=e[0]);let t=Object.keys(je.shapes).find(i=>i.toLowerCase()===n[2]);t&&(te.shape=t),je.designs[n[3]]&&(te.design=n[3]),je.core[n[4]]&&(te.core=n[4]),je.finish[n[5]]&&(te.finish=n[5]),te.label=n[6]==="l1",te.flag=n[7]!=="f0",te.flag&&je.flags[n[7].slice(1)]&&(te.flagC=n[7].slice(1));try{let i=n[8].slice(1);te.engr=new TextDecoder().decode(new Uint8Array((i.match(/../g)||[]).map(s=>parseInt(s,16)))).slice(0,18)}catch{te.engr=""}}var ln={w:420,h:420,cam:330,blur:2.8,dark:1.2,opacity:.5},ma=new en(512,512),Ah=new en(512,512);ma.texture.generateMipmaps=Ah.texture.generateMipmaps=!1;var va=new hn;va.position.y=-152;Xt.add(va);var ii=new gt(new Li(ln.w,ln.h).rotateX(Math.PI/2),new ji({map:ma.texture,opacity:ln.opacity,transparent:!0,depthWrite:!1,toneMapped:!1}));ii.scale.y=-1;ii.renderOrder=-1;va.add(ii);var Oi=new gt(new Li(ln.w,ln.h).rotateX(Math.PI/2));Oi.visible=!1;va.add(Oi);var ga=new vi(-ln.w/2,ln.w/2,ln.h/2,-ln.h/2,0,ln.cam);ga.rotation.x=Math.PI/2;va.add(ga);var rr=new Gs;rr.userData.dark={value:ln.dark};rr.onBeforeCompile=n=>{n.uniforms.darkness=rr.userData.dark,n.fragmentShader=`uniform float darkness;
`+n.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.07,0.05,0.04 ), pow(1.0 - fragCoordZ, 1.6) * darkness );")};rr.depthTest=rr.depthWrite=!1;var Rl=new yn(mf);Rl.depthTest=!1;var Cl=new yn(gf);Cl.depthTest=!1;function vf(n){Oi.visible=!0,Oi.material=Rl,Rl.uniforms.tDiffuse.value=ma.texture,Rl.uniforms.h.value=n/256,nt.setRenderTarget(Ah),nt.render(Oi,ga),Oi.material=Cl,Cl.uniforms.tDiffuse.value=Ah.texture,Cl.uniforms.v.value=n/256,nt.setRenderTarget(ma),nt.render(Oi,ga),Oi.visible=!1}var ni=!0;function Ov(){ii.visible=!1,Ll.visible=Dl.visible=!1,Xt.overrideMaterial=rr;let n=nt.getClearAlpha();nt.setClearAlpha(0),nt.setRenderTarget(ma),nt.clear(),nt.render(Xt,ga),Xt.overrideMaterial=null,vf(ln.blur),vf(ln.blur*.4),nt.setRenderTarget(null),nt.setClearAlpha(n),ii.visible=!0,Ll.visible=Dl.visible=!0,ni=!1}var si=null,zt=0,ri=0,Rh=900,Uf=document.getElementById("labs");function Ff(){si={plies:[],labels:[]};let n=new Ii(Fl.map(([s,r])=>new ae(s,r))),e={faceF:Dh,faceB:Nh,cream:sn("tex/ply_cream.jpg",{wrap:On}),cross:sn("tex/ply_cross.jpg",{wrap:On}),core:sn("tex/ply_core.jpg",{wrap:On})};["cream","cross","core"].forEach(s=>e[s].repeat.set(1/60,1/60));let t=je.plies.length,i=6/t;je.plies.forEach((s,r)=>{let a=new Wr(n,{depth:i,bevelEnabled:!1,curveSegments:1}),o=e[s.tex],l;s.tex==="faceF"||s.tex==="faceB"?l=new xi({map:o,roughness:.56,sheen:.3,sheenColor:new Ge(.32,.24,.22)}):l=new Kn({map:o,roughness:.8});let c=new Kn({map:e[s.tex==="faceF"||s.tex==="faceB"?"cream":s.tex],roughness:.85,color:s.tex.startsWith("face")?7031358:16777215}),h=new gt(a,[l,c]);h.userData.z0=3-(r+1)*i,h.userData.i=r,h.position.z=h.userData.z0,ir.add(h),si.plies.push(h);let f=document.createElement("div");f.className="lab",f.innerHTML=`<i>${r+1}</i><b>${s.n}</b>${s.t?`<span>${s.t}</span>`:""}`,Uf.appendChild(f),si.labels.push(f)}),ir.visible=!1}function ar(n){Fl.length&&(si||Ff(),ri=n?1:0,qt(),document.querySelector('[data-view="layers"]')?.classList.toggle("on",n))}function Hh(n){if(!si)return!1;let e=zt;zt+=Math.sign(ri-zt)*Math.min(Math.abs(ri-zt),n/Rh);let t=Pl(zt),i=zt>.001,s=o=>Pl(Sn.clamp(zt*1.4-o*.065,0,1));ir.visible=i;for(let o of["bladeFront","bladeBack","bladeEdge","bladeEdgeCap","cavity"])vt[o]&&(vt[o].visible=o==="cavity"?Lf&&!i:!i);let r=si.plies.length;si.plies.forEach((o,l)=>{let c=l-(r-1)/2,h=s(l);o.position.z=o.userData.z0-c*24*h,o.position.x=c*9*h});let a=Pl(Sn.clamp(zt*1.15,0,1));for(let o of["shellFront","shellFrontCap"])vt[o]&&vt[o].position.set(0,0,112*a);for(let o of["shellBack","shellBackCap"])vt[o]&&vt[o].position.set(0,0,-112*a);return vt.butt&&(vt.butt.visible=!i),Uf.classList.toggle("on",t>.85&&ri===1),e!==zt}function Bv(){if(!si||zt<.85||ri!==1)return;let n=cn.getBoundingClientRect(),e=-1e9;si.plies.forEach((t,i)=>{let s=new D(58+t.position.x,236,t.position.z+3);s.applyMatrix4(ir.matrixWorld).project(lt);let r=(1-s.y)/2*n.height;r=Math.max(r,e+27),e=r,si.labels[i].style.transform=`translate(${(s.x+1)/2*n.width}px, ${r}px)`})}var Ke={dist:600,pan:new ae,fz:0},Gn={x:0,y:0},Rn={x:0,y:0},Wt=null,ps=performance.now(),hs=!0,Vn=!1;function qt(){hs=!0}var Wn=new Map,ds=null;cn.addEventListener("pointerdown",n=>{cn.setPointerCapture(n.pointerId),Wn.set(n.pointerId,{x:n.clientX,y:n.clientY,btn:n.button,shift:n.shiftKey}),Wt=null,ps=performance.now(),Rn.x=Rn.y=0,Gh(),Vn&&(Vn=!1,document.querySelector('[data-view="spin"]')?.classList.remove("on")),Gi(),document.getElementById("hotCard")?.classList.remove("on"),Wn.size===2&&(ds=Bf())});cn.addEventListener("pointermove",n=>{let e=Wn.get(n.pointerId);if(!e)return;let t=n.clientX-e.x,i=n.clientY-e.y;if(e.x=n.clientX,e.y=n.clientY,ps=performance.now(),Wn.size===1)e.btn===2||e.shift?yf(t,i):(zf(t,i),Rn.x=t,Rn.y=i);else if(Wn.size===2&&ds){let s=Bf();Hf(s.cx,s.cy,ds.d/s.d),yf(s.cx-ds.cx,s.cy-ds.cy),ds=s}});var Of=n=>{Wn.delete(n.pointerId),Wn.size<2&&(ds=null)};cn.addEventListener("pointerup",Of);cn.addEventListener("pointercancel",Of);cn.addEventListener("contextmenu",n=>n.preventDefault());cn.addEventListener("wheel",n=>{n.preventDefault(),Wt=null,ps=performance.now(),Hf(n.clientX,n.clientY,Math.exp(n.deltaY*(n.deltaMode?.05:.0015)))},{passive:!1});cn.addEventListener("dblclick",()=>wt("hero"));function Bf(){let[n,e]=[...Wn.values()];return{d:Math.hypot(n.x-e.x,n.y-e.y),cx:(n.x+e.x)/2,cy:(n.y+e.y)/2}}var tr=new Qt,Ch=new D;function zf(n,e){tr.setFromAxisAngle(Ch.set(0,1,0),n*.0065),bt.quaternion.premultiply(tr),tr.setFromAxisAngle(Ch.set(1,0,0),e*.0065),bt.quaternion.premultiply(tr),ni=!0,qt()}function Vh(n,e){let t=n??Pn.clientWidth,i=e??Pn.clientHeight,s=Math.tan(Sn.degToRad(lt.fov/2)),r=330/780/(2*s*Math.max(1,i-Gn.y)/(i+Gn.y)),a=200/780/(2*s*Math.max(1,t-Gn.x)/(i+Gn.y));return Math.max(.85,r,a)}function kf(){return 2*(Ke.dist*Vh()-Ke.fz)*Math.tan(Sn.degToRad(lt.fov/2))/(Pn.clientHeight+Gn.y)}function yf(n,e){let t=kf();Ke.pan.x+=n*t,Ke.pan.y-=e*t,Ke.pan.clampLength(0,300),qt()}function Hf(n,e,t){let i=cn.getBoundingClientRect(),s=kf(),r=(n-i.left-(i.width-Gn.x)/2)*s,a=-(e-i.top-(i.height-Gn.y)/2)*s,o=Ke.dist-Ke.fz,l=Sn.clamp(o*t,32,1300),c=l/o;Ke.pan.x=r+(Ke.pan.x-r)*c,Ke.pan.y=a+(Ke.pan.y-a)*c,Ke.dist=Ke.fz+l,qt()}var nn=(n,e,t)=>new Qt().setFromEuler(new on(n,e,t,"YXZ")),Bi={hero:{q:nn(-.22,-.62,.1),d:780,f:[0,0,0]},front:{q:nn(0,0,0),d:760,f:[0,0,0]},back:{q:nn(0,Math.PI,0),d:760,f:[0,0,0]},edge:{q:nn(.05,Math.PI/2,0),d:740,f:[0,0,0]},handle:{q:nn(-.38,-.8,.22),d:300,f:[0,-84,0]},butt:{q:new Qt().setFromEuler(new on(-Math.PI/2+.42,.36,0,"XYZ")),d:120,f:[0,-129,0]},engr:{q:nn(-.12,-.18,0),d:150,f:[15,-16,0]},flag:{q:nn(-.25,Math.PI+.45,.1),d:210,f:[0,-100,0]},label:{q:nn(-.3,-.45,.12),d:230,f:[0,-92,0]},xray:{q:nn(-.15,-.35,.05),d:300,f:[0,-86,0]},xrayView:{q:nn(-.15,-.35,.05),d:300,f:[0,-86,0]},balance:{q:nn(-.1,-.3,.04),d:700,f:[0,-10,0]},layers:{q:nn(-.28,-1,.06),d:1e3,f:[0,0,0]}};function wt(n){if(n==="layers"){if(ar(ri<1),ri<1)return wt("hero")}else if(n==="xray"){if(In(!ai),!ai)return;te.core==="solid"&&Si("Choose \u201CPartly hollow\u201D or \u201CMax hollow\u201D in step 3 to see the cavity.")}else if(n==="ab"){Hl(!pn);return}else if(n==="tour"){Hi?Gi():Xh();return}else if(n==="spin"){Vn=!Vn,document.querySelector('[data-view="spin"]').classList.toggle("on",Vn),ps=0;return}else ri>0&&n!=="hero"&&ar(!1);let e=Bi[n];e&&(Vn&&(Vn=!1,document.querySelector('[data-view="spin"]')?.classList.remove("on")),Nl(e.q,e.d,e.f),Gh(),document.querySelector(`.views [data-view="${n}"]`)?.classList.add("on"))}function Nl(n,e,t,i=950){let s=n.clone(),r=new D(...t).applyQuaternion(s);Wt={t0:performance.now(),dur:i,q0:bt.quaternion.clone(),q1:s,d0:Ke.dist,d1:e+r.z,p0:Ke.pan.clone(),p1:new ae(-r.x,-r.y),z0:Ke.fz,z1:r.z},Rn.x=Rn.y=0,ps=performance.now(),qt()}function zv(n,e=[0,1,0],t=[-.22,.32,0]){let i=new D(...n).normalize(),s=new D(...e);Math.abs(s.dot(i))>.95&&(s=new D(0,0,1));let r=new D().crossVectors(s,i).normalize(),a=new D().crossVectors(i,r),o=new ut().makeBasis(r,a,i);return new Qt().setFromRotationMatrix(o).invert().premultiply(nn(t[0],t[1],t[2]))}function Gh(){document.querySelectorAll(".views button").forEach(n=>{["layers","xray","spin","ab"].includes(n.dataset.view)||n.classList.remove("on")})}var Pl=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2;function Vf(){let n=Pn.clientWidth,e=Pn.clientHeight,t=nt.getPixelRatio();(cn.width!==Math.round(n*t)||cn.height!==Math.round(e*t))&&nt.setSize(n,e,!1);let i=innerWidth<860,s=0,r=i?Math.round(e*.06):60;(s!==Gn.x||r!==Gn.y||lt.userData.w!==n||lt.userData.h!==e)&&(Gn.x=s,Gn.y=r,lt.userData.w=n,lt.userData.h=e,lt.aspect=(n+s)/(e+r),lt.setViewOffset(n+s,e+r,s,r,n,e),lt.updateProjectionMatrix(),qt())}var Mf=performance.now();function Gf(n){requestAnimationFrame(Gf);let e=Math.min(50,n-Mf);if(Mf=n,Vf(),Wt){let r=Math.min(1,(n-Wt.t0)/Wt.dur),a=Pl(r);bt.quaternion.slerpQuaternions(Wt.q0,Wt.q1,a),Ke.dist=Sn.lerp(Wt.d0,Wt.d1,a),Ke.pan.lerpVectors(Wt.p0,Wt.p1,a),Ke.fz=Sn.lerp(Wt.z0,Wt.z1,a),ni=!0,hs=!0,r>=1&&(Wt=null)}else Wn.size===0&&(Math.abs(Rn.x)>.05||Math.abs(Rn.y)>.05)?(zf(Rn.x,Rn.y),Rn.x*=.93,Rn.y*=.93):Vn&&Wn.size===0&&n-ps>1200&&(tr.setFromAxisAngle(Ch.set(0,1,0),.006),bt.quaternion.premultiply(tr),ni=!0,hs=!0);if(Hh(e)&&(ni=!0,hs=!0),Fv(e)&&(hs=!0),!hs)return;_a.position.set(Ke.pan.x,Ke.pan.y,0);let t=.15,i=Ke.dist*Vh();lt.position.set(0,Math.sin(t)*i,Math.cos(t)*i),lt.lookAt(0,0,0);let s=new D(0,-1,0).applyQuaternion(bt.quaternion);Ph.intensity=Sn.clamp(-s.y,0,1)*0+Sn.clamp(s.z,0,1)*.35,ii.material.opacity=ln.opacity*Sn.smoothstep(Ke.dist,160,380)*(1-.6*zt),ni&&ii.material.opacity>.01&&Ov(),pn?Hv():nt.render(Xt,lt),Bv(),Gv(),Wv(),hs=!1}var pn=null;function kv(){let n=Pn.clientWidth,e=Pn.clientHeight;return n<e*.9?[{x:0,y:e/2,w:n,h:e/2},{x:0,y:0,w:n,h:e/2}]:[{x:0,y:0,w:n/2,h:e},{x:n/2,y:0,w:n/2,h:e}]}function Hv(){let n=kv(),e=Pn.clientHeight;nt.setScissorTest(!0),[pn.A,te].forEach((t,i)=>{let s=n[i];wh(t),Cn&&(Cn.position.y=sr(t),Cn.scale.x=Bl(sr(t))*2+1.2),lt.clearViewOffset(),lt.aspect=s.w/s.h,lt.updateProjectionMatrix();let r=Ke.dist*Vh(s.w,s.h);lt.position.set(0,Math.sin(.15)*r,Math.cos(.15)*r),lt.lookAt(0,0,0),nt.setViewport(s.x,s.y,s.w,s.h),nt.setScissor(s.x,s.y,s.w,s.h),nt.render(Xt,lt)}),nt.setScissorTest(!1),nt.setViewport(0,0,Pn.clientWidth,e),wh(te),lt.userData.w=-1}function Sf(n){let e=Lv(n);return`<b>${je.designs[n.design].name}</b><span>${je.core[n.core].name} \xB7 ${n.finish}</span><em>${nr(e.P)} \xB7 ${Math.round(e.W)} g \xB7 balance ${(sr(n)/10).toFixed(1)} cm</em>`}function Hl(n){n&&!pn?(ai&&In(!1),ar(!1),zt=0,Hh(0),Gi(),document.getElementById("hotCard")?.classList.remove("on"),pn={A:{...te}},te.design=te.design==="h1"?"h2":"h1",te.finish=te.design==="h2"?"oiled":te.finish,mn({quiet:!0}),wt("hero"),Si("A is pinned on the left. Change anything in the panel: it updates B on the right.")):!n&&pn&&(pn=null,lt.userData.w=-1,mn({quiet:!0})),document.body.classList.toggle("ab",!!pn),document.querySelector('[data-view="ab"]')?.classList.toggle("on",!!pn),Wf(),qt()}function Wf(){if(!pn)return;let n=document.querySelector("#abA"),e=document.querySelector("#abB");n.innerHTML="<i>A</i>"+Sf(pn.A),e.innerHTML="<i>B</i>"+Sf(te);let t=Pn.clientWidth<Pn.clientHeight*.9;document.body.classList.toggle("ab-vert",t)}var Vl=[{id:"medal",p:[0,0,0],n:[0,-1,0],up:[0,0,1],d:150,t:"RESONANT medallion",x:"Enamel and metal, set into the end of the handle \u2014 taken from your close-up photo, so every detail matches."},{id:"serial",p:[15,117.5,3],n:[0,0,1],d:215,t:"Serial number & engraving",x:"The laser serial is from your photograph. A customer\u2019s name is engraved just below it, in the same narrow style."},{id:"plies",p:[-74.5,172,0],n:[-1,0,0],up:[0,1,0],d:125,t:"Ply construction",x:"The real ply sequence of PALIS, from your end-grain photo, runs all around the edge. Open \u201CLayers\u201D to see each ply."},{id:"flare",p:[0,93,9.6],n:[0,.5,.86],d:185,t:"Flared transition",x:"Handle and blade meet exactly as in your Fusion 360 model \u2014 nothing was remodelled."},{id:"label",p:[0,37,13.05],n:[0,0,1],d:205,t:"Model label",x:"Glossy epoxy plate over satin wood. Optional on every design and it follows the model name.",when:n=>n.label},{id:"stripes",p:[0,64,13.05],n:[0,0,1],d:190,t:"Maple pinstripes",x:"Three maple veneers inside padauk, positioned from your photo of the unfinished handle.",when:n=>n.design==="h2"},{id:"flag",p:[.6,25.7,-13.05],n:[0,0,-1],d:175,t:"Flag badge",x:"Epoxy dome on the back of the handle. Your Brazil badge is from the photo; 7 more countries are drawn.",when:n=>n.flag},{id:"balance",p:[60,0,3],n:[0,0,1],d:520,t:"Balance point",x:"Calculated from your CAD volumes and the wood densities. Hollowing the handle or changing the wood moves it \u2014 players feel the difference.",bal:!0}],Xf=document.getElementById("hots"),qf=!1,Yf={};Vl.forEach((n,e)=>{let t=document.createElement("button");t.className="hot",t.innerHTML=`<i>${e+1}</i><span>${n.t}</span>`,t.addEventListener("click",i=>{i.stopPropagation(),Gi(),Wh(n)}),Xf.appendChild(t),Yf[n.id]=t});var ti=new D,bf=new D;function Vv(n){return n.bal?[Bl(fn)+2,fn,3]:n.p}function Gv(){let n=qf&&!pn&&zt<.01&&!Wt;if(Xf.classList.toggle("on",n),!n)return;let e=cn.getBoundingClientRect();for(let t of Vl){let i=Yf[t.id];if(t.when&&!t.when(te)||t.bal&&!Ol){i.hidden=!0;continue}ti.set(...Vv(t)).applyMatrix4(Vi.matrixWorld),bf.set(...t.n).applyQuaternion(bt.quaternion);let s=lt.position.clone().sub(ti).normalize(),r=bf.dot(s);ti.project(lt),i.hidden=r<.18||Math.abs(ti.x)>.96||Math.abs(ti.y)>.96,i.style.transform=`translate(${(ti.x+1)/2*e.width}px, ${(1-ti.y)/2*e.height}px)`}}function Wh(n){if(ri>0&&ar(!1),zl(!!n.bal||da||document.querySelector(".step.on")?.dataset.s==="3"),n.bal)Nl(nn(-.12,-.25,0),560,[0,fn-129,0]);else{let t=n.p;Nl(zv(n.n,n.up),n.d,[t[0]-pt.center.x,t[1]-pt.center.y,t[2]-pt.center.z],1100)}let e=document.getElementById("hotCard");e.querySelector("b").textContent=n.t,e.querySelector("p").textContent=n.x,e.classList.add("on"),Gh()}var Hi=null;function Xh(){let n=Vl.filter(i=>!i.when||i.when(te));pn&&Hl(!1),Vn&&(Vn=!1,document.querySelector('[data-view="spin"]')?.classList.remove("on"));let e=0,t=()=>{if(!Hi)return;let i=n[e%n.length];if(Wh(i),document.querySelector("#hotCard small").textContent=`${e%n.length+1} / ${n.length}`,e++,e>n.length){Gi(),wt("hero");return}Hi.t=setTimeout(t,4600)};Hi={},document.body.classList.add("touring"),t()}function Gi(){Hi&&(clearTimeout(Hi.t),Hi=null,document.body.classList.remove("touring"))}function Wv(){let n=document.getElementById("balTag");if(!n)return;let e=Ol&&!pn&&zt<.01;if(n.classList.toggle("on",e),!e||!Cn)return;let t=cn.getBoundingClientRect();ti.set(-Bl(fn)-3,fn,0).applyMatrix4(Vi.matrixWorld).project(lt),n.style.transform=`translate(${(ti.x+1)/2*t.width}px, ${(1-ti.y)/2*t.height}px)`,n.querySelector("b").textContent=(fn/10).toFixed(1)+" cm"}function qh({w:n,h:e,cam:t,bg:i=null,scale:s=1}){let r=Xt.background,a=nt.getPixelRatio(),o=new ae;nt.getSize(o);let l=ii.visible;Xt.background=i?new Ge(i):null,t&&(ii.visible=!1),nt.setPixelRatio(s),nt.setSize(n,e,!1);let c=t||lt;t||(lt.aspect=n/e,lt.clearViewOffset(),lt.updateProjectionMatrix()),nt.render(Xt,c);let h=nt.domElement.toDataURL("image/png");return Xt.background=r,ii.visible=l,nt.setPixelRatio(a),nt.setSize(o.x,o.y,!1),lt.userData.w=-1,Vf(),qt(),h}function Xv(n){let e={q:bt.quaternion.clone(),pan:Ke.pan.clone()};_a.position.set(0,0,0);let t,i,s;if(n==="h2"){let l=Object.assign({yaw:0,roll:0,fov:30,dist:185,elev:.34,az:.72,tx:0,ty:0,ty0:40},window.__ph||{});bt.quaternion.setFromEuler(new on(-Math.PI/2,0,0)).premultiply(new Qt().setFromAxisAngle(new D(0,1,0),l.yaw)),bt.updateMatrixWorld(!0);let c=new D(0,-129+(l.ty0??60),0).applyQuaternion(bt.quaternion);t=new Vt(l.fov,2576/1932,1,3e3),i=1288,s=966,t.position.set(c.x+l.dist*Math.sin(l.az)*Math.cos(l.elev),c.y+l.dist*Math.sin(l.elev),c.z+l.dist*Math.cos(l.az)*Math.cos(l.elev)),t.lookAt(c.x+l.tx,c.y+l.ty,c.z),t.rotateZ(l.roll)}else n==="butt"?(bt.quaternion.setFromEuler(new on(-Math.PI/2,0,0)),t=new vi(-19,19,14,-14,1,2e3),i=1016,s=753,bt.position.set(0,0,0),t.position.set(0,0,600),t.lookAt(0,0,0)):(bt.quaternion.copy(n==="back"?nn(0,Math.PI,0):nn(0,0,0)),t=new vi(-80,80,134,-134,1,2e3),i=848,s=1430,t.position.set(0,0,600),t.lookAt(0,0,0));let r=ai;r&&In(!1);let a={label:te.label,flag:te.flag,flagC:te.flagC,design:te.design,engr:te.engr,finish:te.finish,model:te.model};Object.assign(te,n==="h2"?{label:!1,flag:!1,design:"h2",engr:"",finish:"oiled",model:"PALIS"}:{label:!0,flag:!0,flagC:"br",design:"h1",engr:"",finish:"untreated",model:"PALIS"}),mn({quiet:!0}),n==="butt"&&bt.updateMatrixWorld(!0);let o=qh({w:i,h:s,cam:t,bg:n==="h2"?7033922:16777215});return Object.assign(te,a),mn({quiet:!0}),r&&In(!0),bt.quaternion.copy(e.q),Ke.pan.copy(e.pan),ni=!0,qt(),o}var we=n=>document.querySelector(n),Ef=0;function Si(n){let e=we("#toast");e.textContent=n,e.classList.add("on"),clearTimeout(Ef),Ef=setTimeout(()=>e.classList.remove("on"),4200)}function qv(n=[],e={}){let{L:t,P:i,W:s}=pa();we("#ttl").textContent=`${te.model} ${te.shape}`;let r=je.models[te.model];we("#mNote").innerHTML=`${r.cls} \xB7 size ${r.size} \xB7 ${r.plies}-ply construction \xB7 <a href="#" data-go="layers">see the layers</a>`,document.querySelectorAll("[data-k]").forEach(u=>u.setAttribute("aria-pressed",String(te[u.dataset.k])===u.dataset.v)),document.querySelectorAll('[data-k="core"]').forEach(u=>{let g=je.rules.find(y=>y.field==="core"&&y.test({...te,core:u.dataset.v}));u.classList.toggle("off",!!g),u.title=g?g.why:""}),we("#tLabel").checked=te.label,we("#tFlag").checked=te.flag,we("#sFlag").value=te.flagC,we("#tEng").value!==te.engr&&(we("#tEng").value=te.engr),we("#vPrice").textContent=nr(i),we("#vW").textContent=Math.round(s)+" g",we("#bd").innerHTML=t.map(u=>`<tr><td>${u.n}${u.info?`<small>${u.info}</small>`:""}</td><td>${u.w?u.w.toFixed(1)+" g":""}</td><td>${u.p?"+"+nr(u.p):"\u2013"}</td></tr>`).join("")+`<tr class="tot"><td>Total</td><td>${Math.round(s)} g \xB15</td><td>${nr(i)}</td></tr>`,we("#s1v").textContent=te.model,we("#s2v").textContent=(te.design==="h1"?"Palis original":"Padauk")+", "+te.shape.toLowerCase(),we("#s3v").textContent=je.core[te.core].name+", "+te.finish;let a=[];te.label&&a.push("label"),te.flag&&a.push("flag"),te.engr&&a.push("engraving"),we("#s4v").textContent=a.join(" + ")||"none";let o=sr(te),l=Dv(),c=o-l;we("#vBal").textContent=(o/10).toFixed(1)+" cm";let h=c>1.5?"more head-heavy":c<-1.5?"more handle-heavy":"standard balance";we("#balFeel").textContent=Math.abs(c)<.5?"standard balance":`${h} (${c>0?"+":"\u2212"}${Math.abs(c).toFixed(1)} mm)`,we("#balDot").style.left=`${50+Sn.clamp(c/12,-1,1)*46}%`;let f=je.designs[te.design],d=je.shapes[te.shape].vol-je.core[te.core].pocket;we("#woodInfo").innerHTML=(Yv[te.design]||[]).map(u=>`<div class="w"><span class="sw" style="background:${u.c}"></span><div><b>${u.n}</b><small>${u.d}</small></div></div>`).join("")+`<p class="note">Handle wood: ${d.toFixed(1)} cm\xB3 \xD7 ${f.rho} g/cm\xB3 = <b>${(d*f.rho).toFixed(1)} g</b> \xB7 balance ${(o/10).toFixed(1)} cm from the butt</p>`,we("#wm").textContent=te.model,Wf(),n.length&&!e.quiet&&Si(n[0])}var Yv={h1:[{n:"Original Palis handle wood",d:"Dark, fine-grained scales as on your PALIS blade \xB7 \u22480.85 g/cm\xB3",c:"linear-gradient(90deg,#2a1f1d,#4a3631,#2b201d)"}],h2:[{n:"Padauk",d:"Pterocarpus \xB7 West Africa \xB7 warm red that deepens when oiled \xB7 \u22480.75 g/cm\xB3",c:"linear-gradient(90deg,#7a2433,#a33a3b,#6e2232)"},{n:"Maple veneers & end cap",d:"Acer \xB7 pale, tight grain \xB7 three pinstripes plus the cap \xB7 \u22480.70 g/cm\xB3",c:"linear-gradient(90deg,#e7d7bd,#f1e5cf,#ddcbae)"}]};function Yh(n){document.querySelectorAll("#steps button").forEach(e=>e.setAttribute("aria-selected",+e.dataset.s===n)),document.querySelectorAll(".step").forEach(e=>e.classList.toggle("on",+e.dataset.s===n)),we(".abody").scrollTop=0,n!==3&&ai&&In(!1),zl(n===3||da),n===1&&wt("hero"),n===2&&wt("handle"),n===3&&(te.core!=="solid"?(In(!0),wt("xrayView")):wt("balance")),n===4&&wt(te.flag?"flag":"label")}document.querySelectorAll("#steps button").forEach(n=>n.addEventListener("click",()=>Yh(+n.dataset.s)));document.querySelectorAll("[data-step]").forEach(n=>n.addEventListener("click",()=>Yh(+n.dataset.step)));document.querySelectorAll("[data-k]").forEach(n=>n.addEventListener("click",()=>{let e=n.dataset.k,t=n.dataset.v;if(n.classList.contains("off")){Si(n.title+" (rule set in the admin)");return}let i=Math.round(pa().W);te[e]=t,mn();let s=Math.round(pa().W);e==="model"&&(t!=="PALIS"&&Si(`${t}: price, weight, size and label update from the admin. Its own 3D comes from your Fusion file in milestone 1 \u2014 this demo shows the PALIS geometry.`),wt("hero")),e==="shape"&&(t!=="Flared"&&Si(`${t} handle: built from your Fusion 360 file in milestone 1. This demo shows the Flared shape; weight uses its sample volume.`),wt("handle")),e==="design"&&wt("handle"),e==="core"&&(t==="solid"?(In(!1),wt("butt")):(In(!0),wt("xrayView")),Si(`${je.core[t].name}: estimated weight ${i} g \u2192 ${s} g (\xB15 g)${t==="medium"?" \u2014 cavity taken from your Fusion file":""}.`)),e==="finish"&&wt("handle")}));we("#tLabel").addEventListener("change",n=>{te.label=n.target.checked,mn(),wt("label")});we("#tFlag").addEventListener("change",n=>{te.flag=n.target.checked,mn(),wt("flag")});we("#sFlag").addEventListener("change",n=>{te.flagC=n.target.value,te.flag=!0,mn(),wt("flag")});we("#tEng").addEventListener("input",n=>{let e=n.target.value.toUpperCase().replace(/[^A-Z0-9 .\-&']/g,"").slice(0,18);n.target.value=e,te.engr=e,mn()});we("#tEng").addEventListener("focus",()=>wt("engr"));document.querySelectorAll(".views button").forEach(n=>n.addEventListener("click",()=>wt(n.dataset.view)));document.addEventListener("click",n=>{let e=n.target.closest("[data-go]");e&&(n.preventDefault(),wt(e.dataset.go))});we("#bdBtn").addEventListener("click",()=>{let n=we("#bdBox").classList.toggle("on");we("#bdBtn").textContent=n?"Hide":"Details"});function Gl(n){we(n).classList.add("on")}document.querySelectorAll(".modal").forEach(n=>n.addEventListener("click",e=>{(e.target===n||e.target.closest("[data-close]"))&&n.classList.remove("on")}));addEventListener("keydown",n=>{n.key==="Escape"&&document.querySelectorAll(".modal.on").forEach(e=>e.classList.remove("on"))});we("#cart").addEventListener("click",()=>{let{L:n,P:e,W:t}=pa(),i={q:bt.quaternion.clone(),d:Ke.dist,p:Ke.pan.clone(),fz:Ke.fz,x:ai};ai&&In(!1),ar(!1),zt=0,Hh(0),bt.quaternion.copy(Bi.hero.q),Ke.dist=820,Ke.pan.set(0,0),Ke.fz=0,_a.position.set(0,0,0);let s=Ke.dist;lt.position.set(0,Math.sin(.15)*s,Math.cos(.15)*s),lt.lookAt(0,0,0),we("#cImg").src=qh({w:900,h:900,bg:15986923,scale:1}),bt.quaternion.copy(i.q),Ke.dist=i.d,Ke.pan.copy(i.p),Ke.fz=i.fz,i.x&&In(!0),qt(),we("#cTbl").innerHTML=n.map(a=>`<tr><td>${a.n}</td><td>${a.p?nr(a.p):"\u2013"}</td></tr>`).join("")+`<tr class="tot"><td>Total \xB7 est. ${Math.round(t)} g \xB15 g</td><td>${nr(e)}</td></tr>`;let r={product_id:"resonant-blade-"+kl[te.model],quantity:1,resonant_config:{code:kh(),...te,engr:te.engr||null},client_price_eur:e,client_weight_g:Math.round(t),note:"Server recomputes price & weight from admin data and rejects mismatches"};we("#cJson").textContent=JSON.stringify(r,null,2),Gl("#mCart")});we("#share").addEventListener("click",async()=>{Df();let n=kh();try{await navigator.clipboard.writeText(n),we("#share").textContent="Copied"}catch{we("#share").textContent="See code"}we("#shareCode").textContent=n,Gl("#mShare"),setTimeout(()=>we("#share").textContent="Share",1600)});we("#loadCode").addEventListener("click",()=>{let n=we("#codeIn").value.trim().replace(/^#/,"");if(!n.startsWith("cfg-"))return Si("Paste a code that starts with cfg-");location.hash=n,Nf(),mn(),Si("Configuration restored")});var Il="studio";function $f(){let n=Il==="transparent"?null:Il==="white"?16777215:15723493;we("#pImg").src=qh({w:1600,h:1600,bg:n,scale:2}),we("#pImg").style.background=Il==="transparent"?"repeating-conic-gradient(#ddd 0 25%, #fff 0 50%) 0 0/20px 20px":""}we("#png").addEventListener("click",()=>{$f(),Gl("#mPng")});document.querySelectorAll("[data-bg]").forEach(n=>n.addEventListener("click",()=>{Il=n.dataset.bg,document.querySelectorAll("[data-bg]").forEach(e=>e.setAttribute("aria-pressed",e===n)),$f()}));we("#dl").addEventListener("click",()=>{let n=document.createElement("a");n.href=we("#pImg").src,n.download=`resonant-${kl[te.model]}-${te.design}.png`,n.click()});we("#fs").addEventListener("click",()=>{try{document.fullscreenElement?document.exitFullscreen():Pn.requestFullscreen()}catch{}});var Zf="front",$v={front:"tex/cmp_front.jpg",back:"tex/cmp_back.jpg",butt:"tex/cmp_butt.jpg",h2:"tex/cmp_h2.jpg"};function $h(n){Zf=n,document.querySelectorAll("[data-cmp]").forEach(e=>e.setAttribute("aria-pressed",e.dataset.cmp===n)),we("#cmpPhoto").src=$v[n],we("#cmpRender").src=Xv(n),we("#cmpWrap").classList.toggle("wide",n==="butt"),we("#cmpWrap").classList.toggle("side",n==="h2"),we("#cmpSub").textContent=n==="h2"?"Handle 2 next to your photo of the finished padauk handle, from the same viewpoint. The blade wood differs: your photo shows another blade, the demo shows PALIS.":"Same framing, millimetre for millimetre. Drag the line: left of it is your photo, right of it is the 3D model built from your STEP file.",Jf(.5),Gl("#mCmp")}function Jf(n){if(we("#cmpWrap").classList.contains("side")){we("#cmpRenderBox").style.clipPath="";return}n=Math.min(1,Math.max(0,n)),we("#cmpRenderBox").style.clipPath=`inset(0 0 0 ${n*100}%)`,we("#cmpBar").style.left=n*100+"%"}document.querySelectorAll("[data-cmp]").forEach(n=>n.addEventListener("click",()=>$h(n.dataset.cmp)));we("#cmpBtn").addEventListener("click",()=>$h(Zf));{let n=we("#cmpWrap"),e=!1,t=i=>{let s=n.getBoundingClientRect();Jf((i.clientX-s.left)/s.width)};n.addEventListener("pointerdown",i=>{e=!0,n.setPointerCapture(i.pointerId),t(i)}),n.addEventListener("pointermove",i=>e&&t(i)),n.addEventListener("pointerup",()=>e=!1)}document.querySelectorAll("[data-page]").forEach(n=>n.addEventListener("click",()=>{document.querySelectorAll("[data-page]").forEach(e=>e.setAttribute("aria-current",e===n?"page":"false")),document.body.classList.toggle("show-proposal",n.dataset.page==="proposal")}));we("#sheetToggle")?.addEventListener("click",()=>{document.body.classList.toggle("collapsed"),lt.userData.w=-1});addEventListener("keydown",n=>{if(n.target.tagName==="INPUT")return;let e={1:"front",2:"back",3:"edge",4:"handle",5:"butt",6:"layers",7:"xray",0:"hero"};e[n.key]&&wt(e[n.key]),n.key==="h"&&(te.design=te.design==="h1"?"h2":"h1",mn())});document.querySelectorAll("[data-bgm]").forEach(n=>n.addEventListener("click",()=>{document.body.dataset.bg=n.dataset.bgm,document.querySelectorAll("[data-bgm]").forEach(e=>e.setAttribute("aria-pressed",e===n)),ln.opacity=n.dataset.bgm==="night"?.75:.5,ni=!0,qt()}));we("#tourBtn").addEventListener("click",()=>Hi?Gi():Xh());we("#hotCard .x2").addEventListener("click",()=>{Gi(),we("#hotCard").classList.remove("on")});we("#balShow").addEventListener("change",n=>{da=n.target.checked,zl(da),da&&Wh(Vl.find(e=>e.bal))});we("#abExit")?.addEventListener("click",()=>Hl(!1));ua.onProgress=(n,e,t)=>{we("#bar").style.width=`${Math.round(e/t*100)}%`};var Tf=()=>new Promise(n=>{ua.itemsLoaded>=ua.itemsTotal?n():ua.onLoad=n});(async()=>{Nf(),await Rv(),mn({quiet:!0}),bt.quaternion.copy(Bi.hero.q),Ke.dist=1e3,await Tf();for(let n of["h2","h1"]){let e=Bh[n];[e.front,e.back].forEach(t=>nt.initTexture(sn(t))),nt.initTexture(Oh(e.butt))}["tex/ply_cream.jpg","tex/ply_cross.jpg","tex/ply_core.jpg"].forEach(n=>sn(n,{wrap:On})),await Tf(),nt.compile(Xt,lt),document.fonts?.load('300 100px "Barlow Condensed"').then(()=>{cs.clear(),te.engr&&mn({quiet:!0})}),Nv(),document.body.classList.add("ready"),Ff(),zt=1,ri=0,Rh=2300,bt.quaternion.copy(Bi.layers.q),Ke.dist=Bi.layers.d,document.body.classList.add("intro"),setTimeout(()=>Nl(Bi.hero.q,Bi.hero.d,Bi.hero.f,2600),350),setTimeout(()=>{Rh=900,document.body.classList.remove("intro"),qf=!0,qt(),!Wt&&!Wn.size&&(Vn=!0,ps=performance.now(),document.querySelector('[data-view="spin"]')?.classList.add("on"))},3100),window.__ready=!0})();requestAnimationFrame(Gf);window.__cfg={setAB:Hl,startTour:Xh,stopTour:Gi,showBalance:zl,C:te,applyConfig:mn,goView:wt,setXray:In,setExploded:ar,openCompare:$h,goStep:Yh,view:Ke,model:bt};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
