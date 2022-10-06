function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},s=t.parcelRequire4141;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequire4141=s),s.register("2xTO9",(function(e,t){e.exports=(e,t)=>function(e){t.position.add(e)}})),s.register("2w5cf",(function(e,t){var n,o,s,i,a;n=e.exports,o="get",s=()=>a,i=e=>a=e,Object.defineProperty(n,o,{get:s,set:i,enumerable:!0,configurable:!0}),a=(e,t)=>{const n=new Map,o=new EventTarget;function s(e,t){const n=new CustomEvent(e,{detail:t}),s={type:e};Object.assign(s,t);const i=new CustomEvent("gamepadInteraction",{detail:s});o.dispatchEvent(n),o.dispatchEvent(i)}return t.add(((t,o)=>{const i=e.xr.getSession();let a=0;if(i)for(const t of i.inputSources){if(!t.gamepad)continue;const o=e.xr.getController(a++),i=n.get(t),r={buttons:t.gamepad.buttons.map((e=>e.value)),axes:t.gamepad.axes.slice(0)};i&&(r.buttons.forEach(((e,n)=>{e!==i.buttons[n]&&s(1===e?`button${n}Down`:`button${n}Up`,{value:e,source:t,controller:o,data:r})})),r.axes.forEach(((e,n)=>{e!==i.axes[n]&&(s(`axes${n}Move`,{value:e,source:t,controller:o,data:r}),0===i.axes[n]&&s(`axes${n}MoveStart`,{value:e,source:t,controller:o,data:r}),Math.abs(i.axes[n])<.5&&Math.abs(e)>.5&&s(`axes${n}MoveMiddle`,{value:e,source:t,controller:o,data:r}),0===e&&s(`axes${n}MoveEnd`,{value:e,source:t,controller:o,data:r}))}))),n.set(t,r)}})),o}}));var i=s("3NNSQ"),a=s("33SoD"),r=s("ilwiq"),l=s("7lx9d");class d{static createButton(e){const t=document.createElement("button");function n(){t.style.display="",t.style.cursor="auto",t.style.left="calc(50% - 75px)",t.style.width="150px",t.onmouseenter=null,t.onmouseleave=null,t.onclick=null}function o(e){e.style.position="absolute",e.style.bottom="20px",e.style.padding="12px 6px",e.style.border="1px solid #fff",e.style.borderRadius="4px",e.style.background="rgba(0,0,0,0.1)",e.style.color="#fff",e.style.font="normal 13px sans-serif",e.style.textAlign="center",e.style.opacity="0.5",e.style.outline="none",e.style.zIndex="999"}if("xr"in navigator)return t.id="VRButton",t.style.display="none",o(t),navigator.xr.isSessionSupported("immersive-vr").then((function(o){o?function(){let n=null;async function o(o){o.addEventListener("end",s),await e.xr.setSession(o),t.textContent="EXIT VR",n=o}function s(){n.removeEventListener("end",s),t.textContent="ENTER VR",n=null}t.style.display="",t.style.cursor="pointer",t.style.left="calc(50% - 50px)",t.style.width="100px",t.textContent="ENTER VR",t.onmouseenter=function(){t.style.opacity="1.0"},t.onmouseleave=function(){t.style.opacity="0.5"},t.onclick=function(){if(null===n){const e={optionalFeatures:["local-floor","bounded-floor","hand-tracking","layers"]};navigator.xr.requestSession("immersive-vr",e).then(o)}else n.end()}}():(n(),t.textContent="VR NOT SUPPORTED"),o&&d.xrSessionIsGranted&&t.click()})).catch((function(e){n(),console.warn("Exception when trying to call xr.isSessionSupported",e),t.textContent="VR NOT ALLOWED"})),t;{const e=document.createElement("a");return!1===window.isSecureContext?(e.href=document.location.href.replace(/^http:/,"https:"),e.innerHTML="WEBXR NEEDS HTTPS"):(e.href="https://immersiveweb.dev/",e.innerHTML="WEBXR NOT AVAILABLE"),e.style.left="calc(50% - 90px)",e.style.width="180px",e.style.textDecoration="none",o(e),e}}static xrSessionIsGranted=!1;static registerSessionGrantedListener(){if("xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",(()=>{d.xrSessionIsGranted=!0}))}}}d.registerSessionGrantedListener(),s("8vghX").config();var c=s("hXJAl"),p=s("fZ8NE");r=s("ilwiq"),l=s("7lx9d");const h={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function u(e){const t=await fetch(e);if(t.ok)return t.json();throw new Error(t.statusText)}async function m(e,t,n=null,o=!0){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No basePath supplied");const s=await async function(e){if(!e)throw new Error("No basePath supplied");return await u(`${e}/profilesList.json`)}(t);let i;if(e.profiles.some((e=>{const n=s[e];return n&&(i={profileId:e,profilePath:`${t}/${n.path}`,deprecated:!!n.deprecated}),!!i})),!i){if(!n)throw new Error("No matching profile name found");const e=s[n];if(!e)throw new Error(`No matching profile name found and default profile "${n}" missing.`);i={profileId:n,profilePath:`${t}/${e.path}`,deprecated:!!e.deprecated}}const a=await u(i.profilePath);let r;if(o){let t;if(t="any"===e.handedness?a.layouts[Object.keys(a.layouts)[0]]:a.layouts[e.handedness],!t)throw new Error(`No matching handedness, ${e.handedness}, in profile ${i.profileId}`);t.assetPath&&(r=i.profilePath.replace("profile.json",t.assetPath))}return{profile:a,assetPath:r}}const f={xAxis:0,yAxis:0,button:0,state:h.ComponentState.DEFAULT};class x{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===h.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(f)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:o}){const{normalizedXAxis:s,normalizedYAxis:i}=function(e=0,t=0){let n=e,o=t;if(Math.sqrt(e*e+t*t)>1){const s=Math.atan2(t,e);n=Math.cos(s),o=Math.sin(s)}return{normalizedXAxis:.5*n+.5,normalizedYAxis:.5*o+.5}}(e,t);switch(this.componentProperty){case h.ComponentProperty.X_AXIS:this.value=this.states.includes(o)?s:.5;break;case h.ComponentProperty.Y_AXIS:this.value=this.states.includes(o)?i:.5;break;case h.ComponentProperty.BUTTON:this.value=this.states.includes(o)?n:0;break;case h.ComponentProperty.STATE:this.valueNodeProperty===h.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(o):this.value=this.states.includes(o)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class g{constructor(e,t){if(!(e&&t&&t.visualResponses&&t.gamepadIndices&&0!==Object.keys(t.gamepadIndices).length))throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach((e=>{const n=new x(t.visualResponses[e]);this.visualResponses[e]=n})),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:h.ComponentState.DEFAULT,button:void 0!==this.gamepadIndices.button?0:void 0,xAxis:void 0!==this.gamepadIndices.xAxis?0:void 0,yAxis:void 0!==this.gamepadIndices.yAxis?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=h.ComponentState.DEFAULT,void 0!==this.gamepadIndices.button&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||1===this.values.button?this.values.state=h.ComponentState.PRESSED:(t.touched||this.values.button>h.ButtonTouchThreshold)&&(this.values.state=h.ComponentState.TOUCHED)}void 0!==this.gamepadIndices.xAxis&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===h.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>h.AxisTouchThreshold&&(this.values.state=h.ComponentState.TOUCHED)),void 0!==this.gamepadIndices.yAxis&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===h.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>h.AxisTouchThreshold&&(this.values.state=h.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach((e=>{e.updateFromComponent(this.values)}))}}class v{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach((e=>{const t=this.layoutDescription.components[e];this.components[e]=new g(e,t)})),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach((t=>{e.push(t.data)})),e}updateFromGamepad(){Object.values(this.components).forEach((e=>{e.updateFromGamepad(this.xrInputSource.gamepad)}))}}class y extends r.Object3D{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e||(this.envMap=e,this.traverse((e=>{e.isMesh&&(e.material.envMap=this.envMap,e.material.needsUpdate=!0)}))),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach((e=>{Object.values(e.visualResponses).forEach((e=>{const{valueNode:t,minNode:n,maxNode:o,value:s,valueNodeProperty:i}=e;t&&(i===h.VisualResponseProperty.VISIBILITY?t.visible=s:i===h.VisualResponseProperty.TRANSFORM&&(t.quaternion.slerpQuaternions(n.quaternion,o.quaternion,s),t.position.lerpVectors(n.position,o.position,s)))}))})))}}function w(e,t){!function(e,t){Object.values(e.components).forEach((e=>{const{type:n,touchPointNodeName:o,visualResponses:s}=e;if(n===h.ComponentType.TOUCHPAD)if(e.touchPointNode=t.getObjectByName(o),e.touchPointNode){const t=new(0,r.SphereGeometry)(.001),n=new(0,r.MeshBasicMaterial)({color:255}),o=new(0,r.Mesh)(t,n);e.touchPointNode.add(o)}else console.warn(`Could not find touch dot, ${e.touchPointNodeName}, in touchpad component ${e.id}`);Object.values(s).forEach((e=>{const{valueNodeName:n,minNodeName:o,maxNodeName:s,valueNodeProperty:i}=e;if(i===h.VisualResponseProperty.TRANSFORM){if(e.minNode=t.getObjectByName(o),e.maxNode=t.getObjectByName(s),!e.minNode)return void console.warn(`Could not find ${o} in the model`);if(!e.maxNode)return void console.warn(`Could not find ${s} in the model`)}e.valueNode=t.getObjectByName(n),e.valueNode||console.warn(`Could not find ${n} in the model`)}))}))}(e.motionController,t),e.envMap&&t.traverse((t=>{t.isMesh&&(t.material.envMap=e.envMap,t.material.needsUpdate=!0)})),e.add(t)}r=s("ilwiq");const b=new(0,(r=s("ilwiq")).Matrix4),E=new(0,r.Vector3);class M{constructor(e,t,n,o,s){let i;this.controller=t,this.handModel=e,this.envMap=null,s&&s.primitive&&"sphere"!==s.primitive?"box"===s.primitive&&(i=new(0,r.BoxGeometry)(1,1,1)):i=new(0,r.SphereGeometry)(1,10,10);const a=new(0,r.MeshStandardMaterial);this.handMesh=new(0,r.InstancedMesh)(i,a,30),this.handMesh.instanceMatrix.setUsage(r.DynamicDrawUsage),this.handMesh.castShadow=!0,this.handMesh.receiveShadow=!0,this.handModel.add(this.handMesh),this.joints=["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"]}updateMesh(){const e=this.controller.joints;let t=0;for(let n=0;n<this.joints.length;n++){const o=e[this.joints[n]];o.visible&&(E.setScalar(o.jointRadius||.008),b.compose(o.position,o.quaternion,E),this.handMesh.setMatrixAt(n,b),t++)}this.handMesh.count=t,this.handMesh.instanceMatrix.needsUpdate=!0}}l=s("7lx9d");class N{constructor(e,t,n,o){this.controller=t,this.handModel=e,this.bones=[];const s=new(0,l.GLTFLoader);s.setPath(n||"https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/"),s.load(`${o}.glb`,(e=>{const t=e.scene.children[0];this.handModel.add(t);const n=t.getObjectByProperty("type","SkinnedMesh");n.frustumCulled=!1,n.castShadow=!0,n.receiveShadow=!0;["wrist","thumb-metacarpal","thumb-phalanx-proximal","thumb-phalanx-distal","thumb-tip","index-finger-metacarpal","index-finger-phalanx-proximal","index-finger-phalanx-intermediate","index-finger-phalanx-distal","index-finger-tip","middle-finger-metacarpal","middle-finger-phalanx-proximal","middle-finger-phalanx-intermediate","middle-finger-phalanx-distal","middle-finger-tip","ring-finger-metacarpal","ring-finger-phalanx-proximal","ring-finger-phalanx-intermediate","ring-finger-phalanx-distal","ring-finger-tip","pinky-finger-metacarpal","pinky-finger-phalanx-proximal","pinky-finger-phalanx-intermediate","pinky-finger-phalanx-distal","pinky-finger-tip"].forEach((e=>{const n=t.getObjectByName(e);void 0!==n?n.jointName=e:console.warn(`Couldn't find ${e} in ${o} hand mesh`),this.bones.push(n)}))}))}updateMesh(){const e=this.controller.joints;for(let t=0;t<this.bones.length;t++){const n=this.bones[t];if(n){const t=e[n.jointName];if(t.visible){const e=t.position;n.position.copy(e),n.quaternion.copy(t.quaternion)}}}}}class C extends r.Object3D{constructor(e){super(),this.controller=e,this.motionController=null,this.envMap=null,this.mesh=null}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&this.motionController.updateMesh()}}var S;const A=new class{constructor(e=null){this.gltfLoader=e,this.path="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",this._assetCache={},this.gltfLoader||(this.gltfLoader=new(0,l.GLTFLoader))}createControllerModel(e){const t=new y;let n=null;return e.addEventListener("connected",(e=>{const o=e.data;"tracked-pointer"===o.targetRayMode&&o.gamepad&&m(o,this.path,"generic-trigger").then((({profile:e,assetPath:s})=>{t.motionController=new v(o,e,s);const i=this._assetCache[t.motionController.assetUrl];if(i)n=i.scene.clone(),w(t,n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,(e=>{this._assetCache[t.motionController.assetUrl]=e,n=e.scene.clone(),w(t,n)}),null,(()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)}))}})).catch((e=>{console.warn(e)}))})),e.addEventListener("disconnected",(()=>{t.motionController=null,t.remove(n),n=null})),t}},P=new class{constructor(){this.path=null}setPath(e){return this.path=e,this}createHandModel(e,t){const n=new C(e);return e.addEventListener("connected",(o=>{const s=o.data;s.hand&&!n.motionController&&(n.xrInputSource=s,void 0===t||"spheres"===t?n.motionController=new M(n,e,this.path,s.handedness,{primitive:"sphere"}):"boxes"===t?n.motionController=new M(n,e,this.path,s.handedness,{primitive:"box"}):"mesh"===t&&(n.motionController=new N(n,e,this.path,s.handedness))),e.visible=!0})),e.addEventListener("disconnected",(()=>{e.visible=!1})),n}};S=(e,t)=>{const n=[0,1].map((function(n){const o=e.xr.getController(n);t.add(o);const s=e.xr.getControllerGrip(n),i=A.createControllerModel(s);s.add(i),t.add(s);const a=e.xr.getHand(n);return a.add(P.createHandModel(a,"mesh")),t.add(a),{hand:a,grip:s,controller:o}})),o=n[0].controller,s=n[1].controller,i=n[0].hand,a=n[1].hand;return{controller1:o,controller2:s,controllerGrip1:n[0].grip,controllerGrip2:n[1].grip,hand1:i,hand2:a}};var T;r=s("ilwiq");T=(e,t,n,o,i,a,l)=>{const d=s("2xTO9")(n,o),c=new(0,r.Vector3)(0,-9.8,0),p=new(0,r.Vector3),h=new(0,r.Vector3),u=new(0,r.Vector3),m=new(0,r.Vector3);function f(e,t,n,o,s){return e.copy(n),e.addScaledVector(o,t),e.addScaledVector(s,.5*t**2),e}const x=new(0,r.BufferGeometry),g=new Float32Array(63);g.fill(0);const v=new Float32Array(63);v.fill(.5),x.setAttribute("position",new(0,r.BufferAttribute)(g,3)),x.setAttribute("color",new(0,r.BufferAttribute)(v,3));const y=new(0,r.LineBasicMaterial)({vertexColors:!0,blending:r.AdditiveBlending}),w=new(0,r.Line)(x,y),b=new(0,r.PointLight)(16772778,0,2),E=(new(0,r.TextureLoader)).load("/assets/img/target.png"),M=new(0,r.Mesh)(new(0,r.PlaneGeometry)(.3,.3,1,1),new(0,r.MeshBasicMaterial)({map:E,blending:r.AdditiveBlending,color:5592405,transparent:!0}));M.rotation.x=-Math.PI/2;let N=null;function C(t){if(t&&t.data&&t.data.hand)return;const n=this;console.log("startGuide",n),N=n,b.intensity=1,n.add(w),e.add(M)}new(0,r.Raycaster);function S(){if(N===this){console.log("onSelectEnd",this);const o=t.xr.getCamera(n).getWorldPosition(p);o.y=0;const s=N.getWorldPosition(u),i=N.getWorldDirection(m);i.multiplyScalar(6);const a=(-i.y+Math.sqrt(i.y**2-2*s.y*c.y))/c.y,r=f(h,a,s,i,c).addScaledVector(o,-1);d(r),N=null,b.intensity=0,this.remove(w),e.remove(M)}}function A({detail:e}){e.value>0&&(o.rotation.y-=Math.PI/4),e.value<0&&(o.rotation.y+=Math.PI/4)}function P({detail:e}){e.value<0&&C.bind(e.controller)()}function T({detail:e}){S.bind(e.controller)()}const I=s("2w5cf").get(t,i);I.addEventListener("axes0MoveMiddle",A,!0),I.addEventListener("axes2MoveMiddle",A,!0),I.addEventListener("axes1MoveMiddle",P,!0),I.addEventListener("axes3MoveMiddle",P,!0),I.addEventListener("axes1MoveEnd",T,!0),I.addEventListener("axes3MoveEnd",T,!0),a.addEventListener("selectstart",C),a.addEventListener("selectend",S),l.addEventListener("selectstart",C),l.addEventListener("selectend",S),i.add((()=>{if(N){const e=N.getWorldPosition(u),t=N.getWorldDirection(m);t.multiplyScalar(6);const n=(-t.y+Math.sqrt(t.y**2-2*e.y*c.y))/c.y,o=p.set(0,0,0);for(let s=1;s<=20;s++)f(o,s*n/20,e,t,c),N.worldToLocal(o),o.toArray(g,3*s);w.geometry.attributes.position.needsUpdate=!0,f(b.position,.98*n,e,t,c),f(M.position,.98*n,e,t,c)}}))};var I=s("6Awmu"),L=I.displayPainting;I.clearPaintings;let R,O,j;const D=new RegExp("^0x[a-fA-F0-9]{40}$"),U=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)}),B=new(0,l.GLTFLoader),F=new r.Scene;let G=new r.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3);const k=new r.Group;k.add(G);const V=new r.WebGLRenderer({antialias:!0});function $(){G.aspect=window.innerWidth/window.innerHeight,G.updateProjectionMatrix(),V.setSize(window.innerWidth,window.innerHeight)}V.shadowMap.enabled=!0,F.background=new r.Color(135,206,235),V.setSize(window.innerWidth,window.innerHeight),V.xr.enabled=!0,window.init3d=e=>new Promise(((t,n)=>{const o=p.findById(e);console.log("Gallery Preset",o),B.load(o.location,(async function(e){R=e.scene,R.scale.set(o.scene.scale,o.scene.scale,o.scene.scale),R.position.set(o.scene.position.x,o.scene.position.y,o.scene.position.z),R.rotation.set(o.scene.rotation.x,o.scene.rotation.y,o.scene.rotation.z),G.fov=o.camera.fov,G.updateProjectionMatrix(),G.position.set(o.camera.position.x,o.camera.position.y,o.camera.position.z),"function"==typeof o.postRenderModifier&&await o.postRenderModifier(R),F.add(R),F.add(k);const n=new Set;V.xr.addEventListener("sessionstart",(function(){k.position.x=o.camera.position.x,k.position.z=o.camera.position.z,console.log(k);const{controller1:e,controller2:t}=S(V,k);T(F,V,G,k,n,e,t)})),window.addEventListener("resize",$,!1),$(),V.setAnimationLoop((function(e,t){n.forEach((n=>n(e,t))),V.render(F,G)})),t()}),(()=>{}),(e=>{console.log(e),n()})),document.body.appendChild(V.domElement),document.body.appendChild(d.createButton(V))})),window.loadGallery=async()=>{if(!D.test(U.g)&&"example1"!==U.g&&"example2"!==U.g)return alert("Invalid Gallery Address!");O=new(e(i))("https://testnet-rpc.coinex.net"),j=new O.eth.Contract(e(a),"example1"===U.g?"0x1cF90b43Cb52478C4a066F57a1DFB1849C191048":"example2"===U.g?"0xDDC814f0572bD7C5635E75C223FecE657Ff7f298":U.g),c.show();const t=parseInt(await j.methods.getGalleryIndex().call()),n=await j.methods.getPaintings().call();console.log("Paintings",n),await init3d(t);const o=p.findById(t);for(const e in n)L(R,n[e].posX,n[e].posY,n[e].posZ,n[e].rotX,n[e].rotY,n[e].rotZ,n[e].width,n[e].aspect,o.textSize,n[e].url);c.hide()},loadGallery();
//# sourceMappingURL=gallery.34177bc5.js.map