(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5895],{62053:(T,f,t)=>{"use strict";t.r(f),t.d(f,{SettingsPage:()=>At,default:()=>Fe});var e=t(53547),i=t(86597),g=t(16550),v=t(17034),r=t(86896),C=t(64593),p=t(95428),S=t(19631),P=t(15861),z=t(64687),O=t.n(z),W=t(88767),y=t(185),I=t(53979),x=t(29728),Z=t(49066),E=t(11047),h=t(75515),D=t(11276),A=t(74571),K=t(23620),G=t(85018),$=t(17772),q=t(87751),ot=t(45697),s=t.n(ot),U=t(41580);const H=750,J=100,Y=["image/jpeg","image/png","image/svg+xml"];var _=t(73987),at=t(17973),et=t(12028),st=t(59689),it=t(96315),V=t(30815),zt=t(42866),Zt=t(24969),lt=t(18172);const Ct={localImage:void 0},jt=(o=Ct,n)=>(0,lt.ZP)(o,a=>{switch(n.type){case"SET_LOCAL_IMAGE":{a.localImage=n.value;break}default:return a}}),rt=({onChangeLogo:o,customLogo:n,goTo:a,Component:l,modalTitle:d,next:L,prev:m,currentStep:M})=>{const[{localImage:u},c]=(0,e.useReducer)(jt,Ct),{formatMessage:B}=(0,r.Z)(),R=F=>{c({type:"SET_LOCAL_IMAGE",value:F})},j=()=>{a(null)};return M?e.createElement(zt.P,{labelledBy:"modal",onClose:j},e.createElement(Zt.x,null,e.createElement(h.Z,{fontWeight:"bold",as:"h2",id:"modal"},B(d))),e.createElement(l,{setLocalImage:R,goTo:a,next:L,prev:m,onClose:j,asset:u||n,onChangeLogo:o})):null};rt.defaultProps={Component:void 0,currentStep:void 0,customLogo:void 0,modalTitle:void 0,next:null,prev:null},rt.propTypes={Component:s().elementType,currentStep:s().string,customLogo:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}),goTo:s().func.isRequired,modalTitle:s().shape({id:s().string,defaultMessage:s().string}),next:s().string,onChangeLogo:s().func.isRequired,prev:s().string};const Ft=rt,Lt={currentStep:void 0},Wt=(o=Lt,n)=>(0,lt.ZP)(o,a=>{switch(n.type){case"GO_TO":{a.currentStep=n.to;break}default:return a}});var Kt=t(82777),dt=t(77296),$t=t(70004),ct=t(42761),Nt=t(88972),Gt=t(45377),Ht=t(54574),Vt=t(52624),Qt=t(96404),mt=t(36856),Xt=t(35957);const Jt={id:"Settings.application.customization.modal.upload.error-format",defaultMessage:"Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg)."},St={id:"Settings.application.customization.modal.upload.error-size",defaultMessage:"The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)"},Yt=o=>new Promise(n=>{const a=new FileReader;a.onload=()=>{const l=new Image;l.onload=function(){n({width:l.width,height:l.height})},l.src=a.result},a.readAsDataURL(o)}),bt=(o,n)=>({ext:o.name.split(".").pop(),size:o.size/1e3,name:o.name,url:URL.createObjectURL(o),rawFile:o,width:n.width,height:n.height}),yt=async o=>{let n;if(!Y.includes(o.type))throw n=new Error("File format"),n.displayMessage=Jt,n;const l=await Yt(o);if(!(l.width<=H&&l.height<=H))throw n=new Error("File sizing"),n.displayMessage=St,n;const L=bt(o,l);if(!(L.size<=J))throw n=new Error("File sizing"),n.displayMessage=St,n;return L},wt=(0,Nt.ZP)(Gt._)`
  opacity: 0;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`,ut=({setLocalImage:o,goTo:n,next:a,onClose:l})=>{const{formatMessage:d}=(0,r.Z)(),[L,m]=(0,e.useState)(!1),[M,u]=(0,e.useState)(void 0),c=(0,e.useRef)(null),B=()=>m(!0),R=()=>m(!1),j=Q=>{Q.preventDefault(),c.current.click()},F=async()=>{R();const Q=c.current.files[0];if(Q)try{const X=await yt(Q);o(X),n(a)}catch(X){if(X.displayMessage)u(d(X.displayMessage,{size:J,dimension:H})),c.current.focus();else throw X}},N=()=>L?"primary500":M?"danger600":"neutral300";return e.createElement(e.Fragment,null,e.createElement("form",null,e.createElement(U.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(Ht.g,{name:"logo-upload",error:M},e.createElement("label",{htmlFor:"logo-upload"},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:2},e.createElement(E.k,{paddingTop:9,paddingBottom:7,hasRadius:!0,justifyContent:"center",direction:"column",background:L?"primary100":"neutral100",borderColor:N(),borderStyle:"dashed",borderWidth:"1px",position:"relative",onDragEnter:B,onDragLeave:R},e.createElement(Vt.J,{color:"primary600",width:`${60/16}rem`,height:`${60/16}rem`,as:Xt.Z,"aria-hidden":!0}),e.createElement(U.x,{paddingTop:3,paddingBottom:5},e.createElement(h.Z,{variant:"delta",as:"span"},d({id:"Settings.application.customization.modal.upload.drag-drop",defaultMessage:"Drag and Drop here or"}))),e.createElement(wt,{accept:Y,cursor:"pointer",as:"input",type:"file",name:"files",tabIndex:-1,zIndex:1,onChange:F,ref:c,id:"logo-upload"}),e.createElement(x.z,{type:"button",onClick:j},d({id:"Settings.application.customization.modal.upload.cta.browse",defaultMessage:"Browse files"})),e.createElement(U.x,{paddingTop:6},e.createElement(h.Z,{variant:"pi",textColor:"neutral600"},d({id:"Settings.application.customization.modal.upload.file-validation",defaultMessage:"Max dimension: {dimension}x{dimension}, Max size: {size}KB"},{size:J,dimension:H})))),e.createElement(Qt.c,null)))))),e.createElement(mt.m,{startActions:e.createElement(x.z,{onClick:l,variant:"tertiary"},d({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"}))}))};ut.defaultProps={next:null},ut.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const kt=ut;var qt=t(16364);const _t=async o=>{try{const{get:n}=(0,i.tg)(),a=await n(o,{responseType:"blob",timeout:8e3});return new File([a.data],a.config.url,{type:a.headers["content-type"]})}catch(n){throw n.displayMessage={id:"Settings.application.customization.modal.upload.error-network",defaultMessage:"Network error"},n}},gt=({goTo:o,next:n,onClose:a,setLocalImage:l})=>{const{formatMessage:d}=(0,r.Z)(),[L,m]=(0,e.useState)(""),[M,u]=(0,e.useState)(null),c=R=>{m(R.target.value)},B=async()=>{try{const R=await _t(L),j=await yt(R);l(j),o(n)}catch(R){if(R.displayMessage)u(d(R.displayMessage,{size:J,dimension:H}));else throw R}};return e.createElement("form",{onSubmit:R=>{R.preventDefault(),B()}},e.createElement(U.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(qt.o,{label:d({id:"Settings.application.customization.modal.upload.from-url.input-label",defaultMessage:"URL"}),error:M,onChange:c,value:L,name:"logo-url"})),e.createElement(mt.m,{startActions:e.createElement(x.z,{onClick:a,variant:"tertiary"},d({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(x.z,{type:"submit"},d({id:"Settings.application.customization.modal.upload.next",defaultMessage:"Next"}))}))};gt.defaultProps={next:null},gt.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const te=gt,pt=({setLocalImage:o,goTo:n,next:a,onClose:l})=>{const{formatMessage:d}=(0,r.Z)();return e.createElement(Kt.v,{label:d({id:"Settings.application.customization.modal.tab.label",defaultMessage:"How do you want to upload your assets?"}),variant:"simple"},e.createElement(U.x,{paddingLeft:8,paddingRight:8},e.createElement(dt.m,null,e.createElement(dt.O,null,d({id:"Settings.application.customization.modal.upload.from-computer",defaultMessage:"From computer"})),e.createElement(dt.O,null,d({id:"Settings.application.customization.modal.upload.from-url",defaultMessage:"From url"}))),e.createElement($t.i,null)),e.createElement(ct.n,null,e.createElement(ct.x,null,e.createElement(kt,{onClose:l,setLocalImage:o,goTo:n,next:a})),e.createElement(ct.x,null,e.createElement(te,{onClose:l,setLocalImage:o,goTo:n,next:a}))))};pt.defaultProps={next:null},pt.propTypes={goTo:s().func.isRequired,next:s().string,onClose:s().func.isRequired,setLocalImage:s().func.isRequired};const ee=pt;var ne=t(99220),oe=t(19093),ae=t(87535),se=t(25001),ie=t(75517),Rt=t(20799),le=t(41384);const Tt=({asset:o})=>{const{formatMessage:n}=(0,r.Z)();return e.createElement(ne.Z,null,e.createElement(oe.O,null,e.createElement(ae.H,{size:"S",src:o.url})),e.createElement(se.e,null,e.createElement(ie.a,null,e.createElement(Rt.l,null,o.name),e.createElement(Rt._,null,`${o.ext.toUpperCase()} - ${o.width}\u2715${o.height}`)),e.createElement(le.E,null,n({id:"Settings.application.customization.modal.pending.card-badge",defaultMessage:"image"}))))};Tt.propTypes={asset:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}).isRequired};const re=Tt,ht=({onClose:o,asset:n,prev:a,next:l,goTo:d,setLocalImage:L,onChangeLogo:m})=>{const{formatMessage:M}=(0,r.Z)(),u=()=>{L(void 0),d(a)},c=()=>{m(n),d(l)};return e.createElement(e.Fragment,null,e.createElement(U.x,{paddingLeft:8,paddingRight:8,paddingTop:6,paddingBottom:6},e.createElement(E.k,{justifyContent:"space-between",paddingBottom:6},e.createElement(E.k,{direction:"column",alignItems:"flex-start"},e.createElement(h.Z,{variant:"pi",fontWeight:"bold"},M({id:"Settings.application.customization.modal.pending.title",defaultMessage:"Logo ready to upload"})),e.createElement(h.Z,{variant:"pi",textColor:"neutral500"},M({id:"Settings.application.customization.modal.pending.subtitle",defaultMessage:"Manage the chosen logo before uploading it"}))),e.createElement(x.z,{onClick:u,variant:"secondary"},M({id:"Settings.application.customization.modal.pending.choose-another",defaultMessage:"Choose another logo"}))),e.createElement(U.x,{maxWidth:(0,i.Q1)(180)},n.url?e.createElement(re,{asset:n}):null)),e.createElement(mt.m,{startActions:e.createElement(x.z,{onClick:o,variant:"tertiary"},M({id:"Settings.application.customization.modal.cancel",defaultMessage:"Cancel"})),endActions:e.createElement(x.z,{onClick:c},M({id:"Settings.application.customization.modal.pending.upload",defaultMessage:"Upload logo"}))}))};ht.defaultProps={next:null,prev:null},ht.propTypes={goTo:s().func.isRequired,asset:s().shape({name:s().string,url:s().string,width:s().number,height:s().number,ext:s().string}).isRequired,next:s().string,onClose:s().func.isRequired,onChangeLogo:s().func.isRequired,prev:s().string,setLocalImage:s().func.isRequired};const de={upload:{Component:ee,modalTitle:{id:"Settings.application.customization.modal.upload",defaultMessage:"Upload logo"},next:"pending",prev:null},pending:{Component:ht,modalTitle:{id:"Settings.application.customization.modal.pending",defaultMessage:"Pending logo"},next:null,prev:"upload"}},Et=({canUpdate:o,customLogo:n,defaultLogo:a,hint:l,label:d,onChangeLogo:L,onResetLogo:m})=>{const[{currentStep:M},u]=(0,e.useReducer)(Wt,Lt),{Component:c,next:B,prev:R,modalTitle:j}=de[M]||{},{formatMessage:F}=(0,r.Z)(),N=Q=>{u({type:"GO_TO",to:Q})};return e.createElement(e.Fragment,null,e.createElement(_.F,{label:d,selectedSlide:0,hint:l,previousLabel:"",nextLabel:"",onNext:()=>{},onPrevious:()=>{},secondaryLabel:n?.name||"logo.png",actions:e.createElement(at.b,null,e.createElement(et.h,{disabled:!o,onClick:()=>N(n?"pending":"upload"),label:F({id:"Settings.application.customization.carousel.change-action",defaultMessage:"Change logo"}),icon:e.createElement(it.Z,null)}),n&&e.createElement(et.h,{disabled:!o,onClick:m,label:F({id:"Settings.application.customization.carousel.reset-action",defaultMessage:"Reset logo"}),icon:e.createElement(V.Z,null)}))},e.createElement(st.q,{label:F({id:"Settings.application.customization.carousel-slide.label",defaultMessage:"Logo slide"})},e.createElement(U.x,{maxHeight:"40%",maxWidth:"40%",as:"img",src:n?.url||a,alt:F({id:"Settings.application.customization.carousel.title",defaultMessage:"Logo"})}))),e.createElement(Ft,{Component:c,currentStep:M,onChangeLogo:L,customLogo:n,goTo:N,next:B,prev:R,modalTitle:j}))};Et.defaultProps={canUpdate:!1,customLogo:null,hint:null},Et.propTypes={canUpdate:s().bool,customLogo:s().shape({url:s().string,name:s().string}),label:s().string.isRequired,hint:s().string,defaultLogo:s().string.isRequired,onChangeLogo:s().func.isRequired,onResetLogo:s().func.isRequired};const Pt=Et,ft={menuLogo:{display:null,submit:{rawFile:null,isReset:!1}},authLogo:{display:null,submit:{rawFile:null,isReset:!1}}},ce=(o=ft,n)=>(0,lt.ZP)(o,a=>{switch(n.type){case"SET_CUSTOM_MENU_LOGO":{a.menuLogo.display=n.value,a.menuLogo.submit.rawFile=n.value.rawFile;break}case"SET_CUSTOM_AUTH_LOGO":{a.authLogo.display=n.value,a.authLogo.submit.rawFile=n.value.rawFile;break}case"RESET_CUSTOM_MENU_LOGO":{a.menuLogo.display=null,a.menuLogo.submit={rawFile:null,isReset:!0};break}case"RESET_CUSTOM_AUTH_LOGO":{a.authLogo.display=null,a.authLogo.submit={rawFile:null,isReset:!0};break}default:return a}});var me=t(82492),ue=t.n(me);const ge=(o,n)=>ue()(o,{menuLogo:{display:n.menuLogo},authLogo:{display:n.authLogo}}),vt=(0,e.forwardRef)(({canUpdate:o,projectSettingsStored:n},a)=>{const{formatMessage:l}=(0,r.Z)(),{trackUsage:d}=(0,i.rS)(),{logos:{menu:L,auth:m}}=(0,p.um)(),[{menuLogo:M,authLogo:u},c]=(0,e.useReducer)(ce,ft,()=>ge(ft,n)),B=N=>{c({type:"SET_CUSTOM_MENU_LOGO",value:N})},R=()=>{d("didClickResetLogo",{logo:"menu"}),c({type:"RESET_CUSTOM_MENU_LOGO"})},j=N=>{c({type:"SET_CUSTOM_AUTH_LOGO",value:N})},F=()=>{d("didClickResetLogo",{logo:"auth"}),c({type:"RESET_CUSTOM_AUTH_LOGO"})};return(0,e.useImperativeHandle)(a,()=>({getValues:()=>({menuLogo:M.submit,authLogo:u.submit})})),e.createElement(U.x,{hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(h.Z,{variant:"delta",as:"h3"},l({id:"Settings.application.customization",defaultMessage:"Customization"})),e.createElement(h.Z,{variant:"pi",textColor:"neutral600"},l({id:"Settings.application.customization.size-details",defaultMessage:"Max dimension: {dimension}\xD7{dimension}, Max file size: {size}KB"},{dimension:H,size:J})),e.createElement(D.r,{paddingTop:4,gap:4},e.createElement(A.P,{col:6,s:12},e.createElement(Pt,{canUpdate:o,customLogo:M.display,defaultLogo:L.default,hint:l({id:"Settings.application.customization.menu-logo.carousel-hint",defaultMessage:"Replace the logo in the main navigation"}),label:l({id:"Settings.application.customization.carousel.menu-logo.title",defaultMessage:"Menu logo"}),onChangeLogo:B,onResetLogo:R})),e.createElement(A.P,{col:6,s:12},e.createElement(Pt,{canUpdate:o,customLogo:u.display,defaultLogo:m.default,hint:l({id:"Settings.application.customization.auth-logo.carousel-hint",defaultMessage:"Replace the logo in the authentication pages"}),label:l({id:"Settings.application.customization.carousel.auth-logo.title",defaultMessage:"Auth logo"}),onChangeLogo:j,onResetLogo:F}))))});vt.defaultProps={canUpdate:!1,projectSettingsStored:null},vt.propTypes={canUpdate:s().bool,projectSettingsStored:s().shape({menuLogo:s().shape({url:s().string,name:s().string})})};const pe=vt;var he=t(68718),Ee=t.n(he);const Ot=o=>Ee()(o,(n,a,l)=>{a&&a.url?n[l]={...a,url:(0,i.CR)(a.url)}:n[l]=a},{}),fe=async()=>{const{get:o}=(0,i.tg)(),{data:n}=await o("/admin/project-settings");return Ot(n)},ve=async o=>{const{post:n}=(0,i.tg)(),{data:a}=await n("/admin/project-settings",o,{headers:{"Content-Type":"multipart/form-data"}});return Ot(a)},xe=o=>{const n=new FormData;return Object.entries(o).forEach(([a,l])=>{l&&l.rawFile instanceof File&&n.append(a,l.rawFile),l&&l.isReset&&n.append(a,null)}),n};var Me=function(){return window&&window.strapi&&window.strapi.isEE?t(78413).Z:t(69767).Z}(),Ce=function(){var n=(0,e.useRef)(),a=(0,i.lm)(),l=(0,i.rS)(),d=l.trackUsage,L=(0,r.Z)(),m=L.formatMessage,M=(0,W.useQueryClient)();(0,i.go)();var u=(0,i.L7)(),c=u.latestStrapiReleaseTag,B=u.shouldUpdateStrapi,R=u.strapiVersion,j=(0,p.um)(),F=j.updateProjectSettings,N=(0,i.ss)(q.Z.settings["project-settings"]),Q=N.allowedActions,X=Q.canRead,xt=Q.canUpdate,We=X&&xt,Ke=(0,W.useQuery)("project-settings",fe,{enabled:X}),Ut=Ke.data,$e=(0,W.useMutation)(function(Mt){return ve(Mt)},{onSuccess:function(nt){return(0,P.Z)(O().mark(function tt(){var b,w;return O().wrap(function(k){for(;;)switch(k.prev=k.next){case 0:return b=nt.menuLogo,w=nt.authLogo,k.next=3,M.invalidateQueries("project-settings",{refetchActive:!0});case 3:F({menuLogo:b?.url,authLogo:w?.url});case 4:case"end":return k.stop()}},tt)}))()}}),Ne=function(nt){if(nt.preventDefault(),!!xt){var tt=n.current.getValues(),b=xe(tt);$e.mutate(b,{onSuccess:function(){var Bt=tt.menuLogo,k=tt.authLogo;Bt.rawFile&&d("didChangeLogo",{logo:"menu"}),k.rawFile&&d("didChangeLogo",{logo:"auth"}),a({type:"success",message:m({id:"app",defaultMessage:"Saved"})})},onError:function(){a({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}})}};return e.createElement(v.A,null,e.createElement(i.SL,{name:"Application"}),e.createElement(y.o,null,e.createElement("form",{onSubmit:Ne},e.createElement(I.T,{title:m({id:"Settings.application.title",defaultMessage:"Overview"}),subtitle:m({id:"Settings.application.description",defaultMessage:"Administration panel\u2019s global information"}),primaryAction:We&&e.createElement(x.z,{type:"submit",startIcon:e.createElement(G.Z,null)},m({id:"global.save",defaultMessage:"Save"}))}),e.createElement(Z.D,null,e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:6},e.createElement(E.k,{direction:"column",alignItems:"stretch",gap:4,hasRadius:!0,background:"neutral0",shadow:"tableShadow",paddingTop:6,paddingBottom:6,paddingRight:7,paddingLeft:7},e.createElement(h.Z,{variant:"delta",as:"h3"},m({id:"global.details",defaultMessage:"Details"})),e.createElement(D.r,{gap:5,as:"dl"},e.createElement(A.P,{col:6,s:12},e.createElement(h.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},m({id:"Settings.application.strapiVersion",defaultMessage:"strapi version"})),e.createElement(E.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(h.Z,null,"v",R),B&&e.createElement(K.r,{href:"https://github.com/strapi/strapi/releases/tag/".concat(c),isExternal:!0,endIcon:e.createElement($.Z,null)},m({id:"Settings.application.link-upgrade",defaultMessage:"Upgrade your admin panel"})))),e.createElement(A.P,{col:6,s:12},e.createElement(h.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},m({id:"Settings.application.edition-title",defaultMessage:"current plan"})),e.createElement(E.k,{gap:3,direction:"column",alignItems:"start",as:"dd"},e.createElement(h.Z,null,m({id:"Settings.application.ee-or-ce",defaultMessage:"{communityEdition, select, true {Community Edition} other {Enterprise Edition}}"},{communityEdition:u.communityEdition})),e.createElement(K.r,{href:"https://strapi.io/pricing-self-hosted",isExternal:!0,endIcon:e.createElement($.Z,null)},m({id:"Settings.application.link-pricing",defaultMessage:"See all pricing plans"})))),e.createElement(A.P,{col:6,s:12},e.createElement(h.Z,{variant:"sigma",textColor:"neutral600",as:"dt"},m({id:"Settings.application.node-version",defaultMessage:"node version"})),e.createElement(h.Z,{as:"dd"},u.nodeVersion)),e.createElement(Me,null))),X&&Ut&&e.createElement(pe,{canUpdate:xt,ref:n,projectSettingsStored:Ut}))))))};const Le=Ce;var Se=t(94654),ye=t.n(Se);const Re=o=>ye()(o,a=>a.links).map(a=>(0,S.ot)(a.Component,a.to,a.exact||!1)),Te=o=>o.filter(n=>!n.links.every(a=>a.isDisplayed===!1));var It=t(42982);const Pe=[{async Component(){return await t.e(3455).then(t.bind(t,98906))},to:"/settings/roles",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(2544)]).then(t.bind(t,23341))},to:"/settings/roles/duplicate/:id",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(2544)]).then(t.bind(t,23341))},to:"/settings/roles/new",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(2544)]).then(t.bind(t,92100))},to:"/settings/roles/:id",exact:!0},{async Component(){return await t.e(5199).then(t.bind(t,88587))},to:"/settings/users",exact:!0},{async Component(){return await t.e(4263).then(t.bind(t,22282))},to:"/settings/users/:id",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,3672))},to:"/settings/webhooks/create",exact:!0},{async Component(){return await t.e(5162).then(t.bind(t,42122))},to:"/settings/webhooks/:id",exact:!0},{async Component(){return await t.e(4121).then(t.bind(t,62872))},to:"/settings/webhooks",exact:!0},{async Component(){return await t.e(8056).then(t.bind(t,87427))},to:"/settings/api-tokens",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(9381),t.e(7692),t.e(4299)]).then(t.bind(t,9683))},to:"/settings/api-tokens/create",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(9381),t.e(7692),t.e(92)]).then(t.bind(t,28465))},to:"/settings/api-tokens/:id",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(9381),t.e(3219),t.e(4816)]).then(t.bind(t,39987))},to:"/settings/transfer-tokens/create",exact:!0},{async Component(){return await t.e(9600).then(t.bind(t,70798))},to:"/settings/transfer-tokens",exact:!0},{async Component(){return await Promise.all([t.e(4871),t.e(9381),t.e(3219),t.e(2492)]).then(t.bind(t,9452))},to:"/settings/transfer-tokens/:id",exact:!0}];var Oe=function(){return window&&window.strapi&&window.strapi.isEE?t(5420).Z:t(35301).Z}();const Ie=[].concat((0,It.Z)(Oe),(0,It.Z)(Pe));var De=t(73727),Ae=t(53192),Ue=t(60984),Be=t(34446),ze=t(29489),Ze=t(52305);const Dt=({menu:o})=>{const{formatMessage:n}=(0,r.Z)(),{trackUsage:a}=(0,i.rS)(),{pathname:l}=(0,g.TH)(),L=Te(o).map(u=>({...u,title:u.intlLabel,links:u.links.map(c=>({...c,title:c.intlLabel,name:c.id}))})),m=n({id:"global.settings",defaultMessage:"Settings"}),M=(u=null)=>{a("willNavigate",{from:l,to:u})};return e.createElement(Ae.m,{ariaLabel:m},e.createElement(Ue.p,{label:m}),e.createElement(Be.Z,null,L.map(u=>e.createElement(ze.D,{key:u.id,label:n(u.intlLabel)},u.links.map(c=>e.createElement(Ze.E,{as:De.OL,withBullet:c.hasNotification,to:c.to,onClick:()=>M(c.to),key:c.id},n(c.intlLabel)))))))};Dt.propTypes={menu:s().array.isRequired};const je=Dt;function At(){const{settingId:o}=(0,g.UO)(),{settings:n}=(0,i.j1)(),{formatMessage:a}=(0,r.Z)(),{isLoading:l,menu:d}=(0,p.Te)(),L=(0,e.useMemo)(()=>(0,S.WW)(Ie.map(({to:u,Component:c,exact:B})=>(0,S.ot)(c,u,B))),[]),m=Re(n);if(l)return e.createElement(i.dO,null);if(!o)return e.createElement(g.l_,{to:"/settings/application-infos"});const M=a({id:"global.settings",defaultMessage:"Settings"});return e.createElement(v.A,{sideNav:e.createElement(je,{menu:d})},e.createElement(C.q,{title:M}),e.createElement(g.rs,null,e.createElement(g.AW,{path:"/settings/application-infos",component:Le,exact:!0}),L,m))}const Fe=(0,e.memo)(At)},69767:(T,f,t)=>{"use strict";t.d(f,{Z:()=>i});const i=()=>null},35301:(T,f,t)=>{"use strict";t.d(f,{Z:()=>i});const i=[]},78413:(T,f,t)=>{"use strict";t.d(f,{Z:()=>Z});var e=t(53547),i=t(86896),g=t(74571),v=t(75515),r=t(11047),C=t(84495),p=t(52624),S=t(36182),P=t(51277),z=t(17772),O=t(86597),W=t(69483);const y="https://cloud.strapi.io/profile/billing",I="https://strapi.io/billing/request-seats",Z=()=>{const{formatMessage:E}=(0,i.Z)(),{license:h}=(0,W.q5)(),{licenseLimitStatus:D,enforcementUserCount:A,permittedSeats:K,isHostedOnStrapiCloud:G}=h?.data??{};return K?e.createElement(g.P,{col:6,s:12},e.createElement(v.Z,{variant:"sigma",textColor:"neutral600"},E({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(r.k,{gap:2},e.createElement(r.k,null,e.createElement(v.Z,{as:"p"},E({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:K,enforcementUserCount:A,text:$=>e.createElement(v.Z,{fontWeight:"semiBold",textColor:A>K?"danger500":null},$)}))),D==="OVER_LIMIT"&&e.createElement(C.u,{description:E({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(p.J,{width:`${(0,O.Q1)(14)}rem`,height:`${(0,O.Q1)(14)}rem`,color:"danger500",as:P.Z}))),e.createElement(S.r,{href:G?y:I,isExternal:!0,endIcon:e.createElement(z.Z,null)},E({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:G}))):null}},5420:(T,f,t)=>{"use strict";t.d(f,{Z:()=>i});const e=[];window.strapi.features.isEnabled(window.strapi.features.SSO)&&e.push({async Component(){return await t.e(302).then(t.bind(t,40316))},to:"/settings/single-sign-on",exact:!0}),window.strapi.features.isEnabled(window.strapi.features.REVIEW_WORKFLOWS)&&e.push({async Component(){return await Promise.all([t.e(5862),t.e(8155)]).then(t.bind(t,97259))},to:"/settings/review-workflows",exact:!0}),window.strapi.features.isEnabled(window.strapi.features.AUDIT_LOGS)&&e.push({async Component(){return await t.e(2812).then(t.bind(t,35915))},to:"/settings/audit-logs",exact:!0});const i=e},94654:(T,f,t)=>{var e=t(21078),i=t(35161);function g(v,r){return e(i(v,r),1)}T.exports=g},35161:(T,f,t)=>{var e=t(29932),i=t(67206),g=t(69199),v=t(1469);function r(C,p){var S=v(C)?e:g;return S(C,i(p,3))}T.exports=r},17034:(T,f,t)=>{"use strict";t.d(f,{A:()=>C});var e=t(85893),i=t(88972),g=t(41580);const v=(0,i.ZP)(g.x)`
  display: grid;
  grid-template-columns: ${({hasSideNav:p})=>p?"auto 1fr":"1fr"};
`,r=(0,i.ZP)(g.x)`
  overflow-x: hidden;
`,C=({sideNav:p,children:S})=>(0,e.jsxs)(v,{hasSideNav:!!p,children:[p,(0,e.jsx)(r,{paddingBottom:10,children:S})]})},53192:(T,f,t)=>{"use strict";t.d(f,{m:()=>C});var e=t(85893),i=t(88972),g=t(11276);const v=`${232/16}rem`,r=(0,i.ZP)(g.r)`
  width: ${v};
  background: ${({theme:p})=>p.colors.neutral100};
  position: sticky;
  top: 0;
  height: 100vh;
  overflow-y: auto;
  border-right: 1px solid ${({theme:p})=>p.colors.neutral200};
  z-index: 1;
`,C=({ariaLabel:p,...S})=>(0,e.jsx)(r,{"aria-label":p,as:"nav",...S})},60984:(T,f,t)=>{"use strict";t.d(f,{p:()=>Z});var e=t(85893),i=t(53547),g=t(97184),v=t(88972),r=t(7801),C=t(2504);const p=E=>{const h=(0,i.useRef)();return(0,i.useEffect)(()=>{h.current=E}),h.current};var S=t(70004),P=t(41580),z=t(8509),O=t(49123),W=t(11047),y=t(75515),I=t(12028);const x=(0,v.ZP)(S.i)`
  width: ${24/16}rem;
  background-color: ${({theme:E})=>E.colors.neutral200};
`,Z=({as:E="h2",label:h,searchLabel:D="",searchable:A=!1,onChange:K=()=>{},value:G="",onClear:$=()=>{},onSubmit:q=()=>{},id:ot})=>{const[s,U]=(0,i.useState)(!1),H=p(s),J=(0,C.M)(ot),Y=(0,i.useRef)(void 0),_=(0,i.useRef)(void 0);(0,i.useEffect)(()=>{s&&Y.current&&Y.current.focus(),H&&!s&&_.current&&_.current.focus()},[s,H]);const at=()=>{U(V=>!V)},et=V=>{$(V),Y.current.focus()},st=V=>{V.relatedTarget?.id!==J&&U(!1)},it=V=>{V.key===r.y.ESCAPE&&U(!1)};return s?(0,e.jsxs)(P.x,{paddingLeft:4,paddingTop:5,paddingBottom:2,paddingRight:4,children:[(0,e.jsx)(z.U,{children:(0,e.jsx)(O.w,{name:"searchbar",value:G,onChange:K,placeholder:"e.g: strapi-plugin-abcd",onKeyDown:it,ref:Y,onBlur:st,onClear:et,onSubmit:q,clearLabel:"Clear",size:"S",children:D})}),(0,e.jsx)(P.x,{paddingLeft:2,paddingTop:4,children:(0,e.jsx)(x,{})})]}):(0,e.jsxs)(P.x,{paddingLeft:6,paddingTop:6,paddingBottom:2,paddingRight:4,children:[(0,e.jsxs)(W.k,{justifyContent:"space-between",alignItems:"flex-start",children:[(0,e.jsx)(y.Z,{variant:"beta",as:E,children:h}),A&&(0,e.jsx)(I.h,{ref:_,onClick:at,label:D,icon:(0,e.jsx)(g.Z,{})})]}),(0,e.jsx)(P.x,{paddingTop:4,children:(0,e.jsx)(x,{})})]})}},52305:(T,f,t)=>{"use strict";t.d(f,{E:()=>W});var e=t(85893),i=t(53547),g=t(71818),v=t(88972),r=t(41580),C=t(75515),p=t(11047),S=t(63507);const P=(0,v.ZP)(r.x)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-decoration: none;
  color: ${({theme:y})=>y.colors.neutral800};
  svg > * {
    fill: ${({theme:y})=>y.colors.neutral600};
  }

  &.active {
    ${({theme:y})=>`
      background-color: ${y.colors.primary100};
      border-right: 2px solid ${y.colors.primary600};
      svg > * {
        fill: ${y.colors.primary700};
      }
      ${C.Z} {
        color: ${y.colors.primary700};
        font-weight: 500;
      }
      `}
  }

  &:focus-visible {
    outline-offset: -2px;
  }
`,z=(0,v.ZP)(g.Z)`
  width: ${12/16}rem;
  height: ${4/16}rem;
  * {
    fill: ${({theme:y,$active:I})=>I?y.colors.primary600:y.colors.neutral600};
  }
`,O=v.ZP.div`
  svg {
    height: ${12/16}rem;
    width: ${12/16}rem;
  }
`,W=i.forwardRef(({children:y,icon:I=null,withBullet:x=!1,as:Z=S.f,isSubSectionChild:E=!1,...h},D)=>(0,e.jsxs)(P,{as:Z,icon:I,background:"neutral100",paddingLeft:E?9:7,paddingBottom:2,paddingTop:2,ref:D,...h,children:[(0,e.jsxs)(p.k,{children:[I?(0,e.jsx)(O,{children:I}):(0,e.jsx)(z,{}),(0,e.jsx)(r.x,{paddingLeft:2,children:(0,e.jsx)(C.Z,{as:"span",children:y})})]}),x&&(0,e.jsx)(r.x,{as:p.k,paddingRight:4,children:(0,e.jsx)(z,{$active:!0})})]}))},29489:(T,f,t)=>{"use strict";t.d(f,{D:()=>I});var e=t(85893),i=t(53547),g=t(88972),v=t(12645),r=t(11047),C=t(41580),p=t(75515);const S=(0,g.ZP)(r.k)`
  border: none;
  padding: 0;
  background: transparent;
`,P=g.ZP.div`
  display: flex;
  align-items: center;
  transform: rotateX(${({rotated:x})=>x?"0deg":"180deg"});
`,z=({collapsable:x=!1,label:Z,onClick:E=()=>{},ariaExpanded:h,ariaControls:D})=>x?(0,e.jsxs)(S,{as:"button",onClick:E,"aria-expanded":h,"aria-controls":D,textAlign:"left",children:[(0,e.jsx)(C.x,{paddingRight:1,children:(0,e.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:Z})}),x&&(0,e.jsx)(P,{rotated:h,children:(0,e.jsx)(v.Z,{"aria-hidden":!0})})]}):(0,e.jsx)(S,{children:(0,e.jsx)(C.x,{paddingRight:1,children:(0,e.jsx)(p.Z,{variant:"sigma",textColor:"neutral600",children:Z})})});var O=t(2504),W=t(30190);const y=(0,g.ZP)(C.x)`
  svg {
    height: ${4/16}rem;
    path {
      fill: ${({theme:x})=>x.colors.neutral500};
    }
  }
`,I=({collapsable:x=!1,label:Z,badgeLabel:E,children:h,id:D})=>{const[A,K]=(0,i.useState)(!0),G=(0,O.M)(D);return(0,e.jsxs)(r.k,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(y,{paddingLeft:6,paddingTop:2,paddingBottom:2,paddingRight:4,children:(0,e.jsxs)(C.x,{position:"relative",paddingRight:E?6:0,children:[(0,e.jsx)(z,{onClick:()=>{K($=>!$)},ariaExpanded:A,ariaControls:G,collapsable:x,label:Z}),E&&(0,e.jsx)(W.C,{backgroundColor:"neutral150",textColor:"neutral600",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)",children:E})]})}),(!x||A)&&(0,e.jsx)("ol",{id:G,children:i.Children.map(h,($,q)=>(0,e.jsx)("li",{children:$},q))})]})}},34446:(T,f,t)=>{"use strict";t.d(f,{Z:()=>r});var e=t(85893),i=t(53547),g=t(41580),v=t(11047);const r=({children:C,spacing:p=2,horizontal:S=!1,...P})=>(0,e.jsx)(g.x,{paddingTop:2,paddingBottom:4,children:(0,e.jsx)(v.k,{as:"ol",gap:p,direction:S?"row":"column",alignItems:S?"center":"stretch",...P,children:i.Children.map(C,(z,O)=>(0,e.jsx)("li",{children:z},O))})})}}]);
