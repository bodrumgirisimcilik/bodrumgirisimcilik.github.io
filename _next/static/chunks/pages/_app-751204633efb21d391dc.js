_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[14],{2:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"8jHu":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return m}));var a=n("pVnL"),o=n.n(a),r=n("z627"),c=n("uA0P"),s=n("gkRw"),i=n("vAiY"),u=n("0I6U"),p=n("qJ9u"),d=n("wd/R"),l=n("LvDl"),f=function(t){var n=e._INTERNALS_.DEPRECATEDcontextCache[t];n?n.refreshData():r.default.warn("refreshData: Context with ContextID "+t+" does not exist!")},m=function(){var t=s.getAppVariable,n=s.setAppVariable,a=s.setPageVariable,m=s.getParameter,g=s.getResource,h=s.setResource,C=s.getComponentState,E=s.setComponentState,b=s.getInstanceStatesAsArray,I=s.getInstanceStatesAsObject,P=s.listPageDataReferences,O=s.listPageParameters,v=s.listPageComponents,R=s.getContext,x=s.setContextState,A=s.setSelfProperty,_={context:s,api:i.d,resource:c.a,init:function(){return e._INTERNALS_.DEPRECATEDcontextState.init()},setComponentState:E,setSelfProperty:A,setParameter:a,setResource:h,setStorage:n,getComponentState:C,getInstanceStatesAsArray:b,getInstanceStatesAsObject:I,listPageDataReferences:P,listPageParameters:O,listPageComponents:v,getParameter:m,getResource:g,refreshData:f,getStorage:t,current:function(e,t){return R(t).s[e]},setContextState:x,rtc:u.a,references:{resolve:function(){return{}}},event:{dispatch:function(t,n,a){var c=o()({},a,n);Object(r.logWarning)("DEPRECATED: supersonic.event.dispatch",t,new Error);var s=e.red.nodes.getNode(t);if(s){var i=s.z&&s.z.match(/^page:[0-9]+:component:(.*?)$/),u=i&&i[1];if(u){var p,d=null==(p=c.componentInstanceId.match(/\/(\d+)\/(\d+)$/))?void 0:p.splice(1,3);c.componentInstanceIdPath||(c.componentInstanceIdPath=[]),c.componentInstanceIdPath.push(c.componentInstanceId),c.eventOutComponentInstanceId=c.componentInstanceId,c.componentInstanceId=u,d&&d.length>=1&&(c.componentInstanceId+="/"+d[0]),"currentIndex"in c&&void 0!==c.currentIndex&&null!==c.currentIndex&&(c.componentInstanceId+="/"+c.currentIndex)}}e.red.emit(t,c)},triggerDirectEvent:p.a},auth:{users:{getCurrentUser:function(){return{then:function(){}}}}}};return e.moment=d,e._=l,_}}).call(this,n("3r9c"))},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("e81P")}])},RrFB:function(e,t,n){"use strict";(function(e){var a=n("pVnL"),o=n.n(a),r=n("J4zp"),c=n.n(r),s=n("q1tI"),i=n.n(s),u=n("17x9"),p=n.n(u),d=n("/MKj"),l=n("8jHu"),f=n("vAiY"),m=n("d7XD"),g=n("7lo0"),h=n("Z7rm"),C=n("OHa5"),E=n("zNpC"),b=n("hsWS"),I=n("nOHt"),P=n("6gcT"),O=n("qJ9u"),v=n("o3/o"),R=n("EgF3"),x=n("OnR0"),A=n("SOBC"),_=(n("Enq4"),n("ExIq"),n("X5Jd")),S=n("HQJC"),w=n("JpYW"),j=n("r5xH");e.LOCAL_DOLAN=n("/JH9"),e.PAGE_COMPONENT_MAP={PageDolan:w.a},e.supersonic=Object(l.a)(),"undefined"!==typeof document&&_.a.forEach((function(e){var t=e.fontFamily,n=e.weight,a=e.source;Object(h.c)({fontFamily:t,weight:n,source:a})}));var D=function(t){var n=t.isLoading,a=t.spinnerMessage,r=t.isAuthenticated,u=t.navConfig,p=t.Component,d=t.pageProps,l=Object(I.useRouter)(),h=Object(s.useState)(void 0!==e.DOLAN),x=c()(h,2),A=x[0],_=x[1];if(Object(s.useEffect)((function(){Object(g.k)(d,u),_(!0)}),[]),Object(s.useEffect)((function(){var e=l.asPath.replace("/","");A&&u.authenticationEnabled&&!r&&!j[e]&&m.a.replaceToStack({route:""})}),[l.asPath,A]),Object(s.useEffect)((function(){A&&(Object(b.b)(d.flows,e.supersonic).then((function(){e.STORE.dispatch({type:P.a})})),Object(f.f)(),Object(f.e)(),Object(O.c)())}),[A]),A){var S=l.asPath.replace("/",""),w=Object(v.b)(u.blueprint,u.authenticationEnabled&&!r&&!j[S],"landscape");return i.a.createElement(i.a.Fragment,null,i.a.createElement(w,o()({},d,{navConfig:u,Component:p,selector:!1}),n?i.a.createElement(R.a,{backgroundColor:Object(g.j)(C.P),text:a}):null,i.a.createElement(E.g,null),i.a.createElement(E.a,null)))}return null};D.propTypes={isLoading:p.a.bool.isRequired,isDolanReady:p.a.bool.isRequired,isAuthenticated:p.a.bool.isRequired,dispatch:p.a.func.isRequired};var y=Object(A.a)((function(e){return{isDolanReady:e.isDolanReady,isLoading:e.isLoading,spinnerMessage:e.spinnerText,spinnerBackgroundColor:e.spinnerBackgroundColor,isAuthenticated:e.isAuthenticated,navConfig:e.navConfig,timestamp:e.dolanTimestamp}}))(D);t.a=S.a.withRedux((function(t){return i.a.createElement(d.a,{store:e.STORE,context:x.a},i.a.createElement(y,t))}))}).call(this,n("3r9c"))},X5Jd:function(e,t,n){"use strict";t.a=[{fontFamily:"Campton",weight:"300",source:"/dynamicFonts/Campton_300.ttf"},{fontFamily:"Campton",weight:"500",source:"/dynamicFonts/Campton_500.ttf"},{fontFamily:"Campton",weight:"600",source:"/dynamicFonts/Campton_600.ttf"},{fontFamily:"Campton",weight:"bold",source:"/dynamicFonts/Campton_bold.ttf"}]},e81P:function(e,t,n){"use strict";n.r(t);var a=n("RrFB");t.default=a.a},r5xH:function(e){e.exports=JSON.parse("{}")}},[[2,0,1,9,8,3,6,7,10,2,4,5,18]]]);