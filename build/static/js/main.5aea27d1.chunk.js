(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/kta-logo.0d688806.jpeg"},31:function(e,t,n){e.exports=n(75)},36:function(e,t,n){},38:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},39:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(25),c=n.n(o),s=(n(36),n(6)),i=n(7),l=n(9),u=n(8),d=n(10),m=(n(38),n(39),n(76)),h=n(77),p=n(78),E=n(79),b=n(26),v=n.n(b),f=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"gradient"},r.a.createElement("center",null,r.a.createElement(m.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"yellowButton"},r.a.createElement(E.a,{to:"/call"},r.a.createElement("svg",{viewBox:"75 50 400 400"},r.a.createElement("path",{id:"curve",fill:"transparent",d:"M250,400 a150,150 0 0,1 0,-350a150",transform:"rotate(90,250,250)"}),r.a.createElement("text",{className:"ctx",width:"500"},r.a.createElement("textPath",{href:"#curve"},"TEKAN UNTUK KONSULTASI DOKTER UMUM"))))))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"whiteSpace"},r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("img",{src:v.a,alt:"logo"})),r.a.createElement(p.a,null,r.a.createElement(h.a,null,r.a.createElement("div",{className:"ktaFont kiri"},"KLINIK KTA")),r.a.createElement(h.a,null,r.a.createElement("div",{className:"ktaFont2 kiri2"},"SRENGSENG JUNCTION")))))),r.a.createElement(p.a,null,r.a.createElement("div",{className:"whiteSpace practech"},"PRACTECH"))))))}}]),t}(a.Component),g=n(14),S=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).onSessionError=function(e){n.setState({error:e})},n.onPublish=function(){console.log("Publish Success")},n.onPublishError=function(e){n.setState({error:e})},n.onSubscribe=function(){console.log("Subscribe Success")},n.onSubscribeError=function(e){n.setState({error:e})},n.toggleVideo=function(){n.setState({publishVideo:!n.state.publishVideo})},n.state={error:null,connection:"Connecting",publishVideo:!0},n.sessionEventHandlers={sessionConnected:function(){n.setState({connection:"Connected"})},sessionDisconnected:function(){n.setState({connection:"Disconnected"})},sessionReconnected:function(){n.setState({connection:"Reconnected"})},sessionReconnecting:function(){n.setState({connection:"Reconnecting"})}},n.publisherEventHandlers={accessDenied:function(){console.log("User denied access to media source")},streamCreated:function(){console.log("Publisher stream created")},streamDestroyed:function(e){var t=e.reason;console.log("Publisher stream destroyed because: ".concat(t))}},n.subscriberEventHandlers={videoEnabled:function(){console.log("Subscriber video enabled")},videoDisabled:function(){console.log("Subscriber video disabled")}},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.credentials,t=e.apiKey,n=e.sessionId,a=e.token,o=this.state,c=o.error,s=(o.connection,o.publishVideo);return r.a.createElement("div",null,c?r.a.createElement("div",{className:"error"},r.a.createElement("strong",null,"Error:")," ",c):null,r.a.createElement(g.OTSession,{apiKey:t,sessionId:n,token:a,onError:this.onSessionError,eventHandlers:this.sessionEventHandlers},r.a.createElement("div",{style:{display:"none !important",width:"0px",height:"0px",marginTop:"-70px",marginBottom:"20px"}},r.a.createElement(g.OTPublisher,{className:"layerMinus",style:{display:"none"},properties:{publishVideo:s,width:"100%",height:"100%",insertMode:"append"},onPublish:this.onPublish,onError:this.onPublishError,eventHandlers:this.publisherEventHandlers})),r.a.createElement("div",{style:{marginTop:"68.5px"}},r.a.createElement(g.OTStreams,null,r.a.createElement(g.OTSubscriber,{className:"layerPlus",properties:{publishVideo:s,width:786,height:386,insertMode:"append"},onSubscribe:this.onSubscribe,onError:this.onSubscribeError,eventHandlers:this.subscriberEventHandlers})))))}}]),t}(a.Component),O=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"gradient"},r.a.createElement("center",null,r.a.createElement(m.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"blueBorder"},r.a.createElement(S,{credentials:this.props.credentials})))),r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{to:"/"},r.a.createElement("div",{className:"whiteSpace ktaFont",style:{marginBottom:"80px",marginTop:"50px"}},"AKHIRI SESI")))))))}}]),t}(a.Component),j=n(80),y=n(82),N=n(81),w=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(j.a,null,r.a.createElement(y.a,null,r.a.createElement(N.a,{exact:!0,path:"/",component:f}),r.a.createElement(N.a,{exact:!0,path:"/call",component:function(t){return r.a.createElement(O,Object.assign({},t,{credentials:e.props.credentials}))}}))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(73);function k(e){c.a.render(r.a.createElement(w,{credentials:e}),document.getElementById("root"))}fetch("https://alangmahendra.com/api/room/session").then(function(e){return e.json()}).then(k).catch(function(e){console.error("Failed to get session credentials",e),alert("Failed to get opentok sessionId and token. Make sure you have updated the config.js file.")}),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,2,1]]]);
//# sourceMappingURL=main.5aea27d1.chunk.js.map