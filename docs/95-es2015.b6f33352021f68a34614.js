(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{L6id:function(n,l,u){"use strict";u.r(l);var t=u("8Y7J");class e{}var o=u("pMnS"),a=u("MKJQ"),i=u("sZkV"),r=u("s7LF"),c=u("SVse"),b=u("R7Hv"),s=u("mMyO");class g{constructor(n,l,u,t){this.router=n,this.mydata=l,this.http=u,this.googleAnalyticsService=t,this.accept=!1,this.email="",this.spinner=!1,this.lang="en"}GoToAreaPage(){this.spinner=!0;let n={dbname:this.mydata.allvariables.dbname,email:this.email};console.log("Launching http request"),this.mydata.allvariables.with_db?this.mydata.requestPostJQ(this.mydata.allvariables.db_emailCheck,n).then(n=>{var l=JSON.parse(n.toString());1==parseInt(l.ok)?(this.spinner=!1,this.mydata.email=this.email,this.mydata.timestart=new Date,this.router.navigate(["/areas"])):(this.mydata.presentToastBottom(l.error),this.spinner=!1)}).catch(n=>{console.log(n),this.mydata.presentToastBottom("Une erreur est survenu essayant de contacter la base de donn\xe9es... Votre score risque de ne pas \xeatre enregistr\xe9!"),this.spinner=!1,this.mydata.email=this.email,this.mydata.timestart=new Date,this.router.navigate(["/areas"])}):(this.spinner=!1,this.mydata.email=this.email,this.mydata.timestart=new Date,this.router.navigate(["/areas"]))}GoToRanking(){this.router.navigate(["/ranking"])}switchLang(n){this.mydata.switchLang(n)}ionViewDidEnter(){this.googleAnalyticsService.trackPagesHandler("home")}}var d=u("iInd"),h=u("IheW"),m=t.nb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;margin:auto;width:90%}#containerflex[_ngcontent-%COMP%]{text-align:center;margin:auto;display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;background-image:url(BACKGROUND.d16770508f4f07398f1c.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}.subtitlebutton[_ngcontent-%COMP%]{font-size:x-small;clear:both}.buttontext[_ngcontent-%COMP%]{width:100%}.labelaccept[_ngcontent-%COMP%]{font-size:14px}#footer[_ngcontent-%COMP%]{position:absolute;height:10%;width:100%;bottom:0;background-image:url(eggs_footer.eb248bb3c1aa224d38af.png);background-position:center;background-repeat:repeat-x;background-size:contain}.myform[_ngcontent-%COMP%]{width:100%;margin:auto}#ranking[_ngcontent-%COMP%]{margin-bottom:6em}ion-card[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.9);--color:black}ion-list[_ngcontent-%COMP%]{--ion-item-background:rgba(255, 255, 255, 0.6)}.cardform[_ngcontent-%COMP%]{width:80%;margin:auto;--ion-item-background:rgba(255, 255, 255, 0.95)}#homelogo[_ngcontent-%COMP%]{height:120px;margin-top:1em}#home_p[_ngcontent-%COMP%]{font-size:14px!important;color:#000!important;margin-top:1em!important}#switch[_ngcontent-%COMP%]{margin:1em 1em auto auto;--background:white}#margin[_ngcontent-%COMP%]{width:100%;height:5em}"]],data:{}});function p(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,2,"ion-button",[["fill","outline"],["id","switch"],["slot","end"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.switchLang("en")&&t),t}),a.x,a.c)),t.ob(1,49152,null,0,i.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Gb(-1,0,["Switch to English \u{1f1fa}\u{1f1f8}"]))],(function(n,l){n(l,1,0,"outline")}),null)}function f(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,2,"ion-button",[["fill","outline"],["id","switch"],["slot","end"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.switchLang("fr")&&t),t}),a.x,a.c)),t.ob(1,49152,null,0,i.j,[t.h,t.k,t.x],{fill:[0,"fill"]},null),(n()(),t.Gb(-1,0,["Changer au Fran\xe7ais \u{1f1eb}\u{1f1f7}"]))],(function(n,l){n(l,1,0,"outline")}),null)}function k(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,a.M,a.r)),t.ob(1,49152,null,0,i.ob,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"bubbles")}),null)}function x(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,43,"ion-card",[["class","cardform"]],null,null,null,a.C,a.e)),t.ob(1,49152,null,0,i.l,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,41,"ion-card-content",[],null,null,null,a.z,a.f)),t.ob(3,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,33,"ion-list",[["class","myform"],["lines","full"]],null,null,null,a.L,a.q)),t.ob(5,49152,null,0,i.N,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(n()(),t.pb(6,0,null,0,16,"ion-item",[],null,null,null,a.J,a.o)),t.ob(7,49152,null,0,i.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,a.K,a.p)),t.ob(9,49152,null,0,i.M,[t.h,t.k,t.x],{position:[0,"position"]},null),(n()(),t.Gb(10,0,["",""])),(n()(),t.pb(11,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.N,a.s)),t.ob(12,49152,null,0,i.tb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Gb(-1,0,["*"])),(n()(),t.pb(14,0,null,0,8,"ion-input",[["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Bb(n,17)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Bb(n,17)._handleInputEvent(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.email=u)&&e),e}),a.I,a.n)),t.ob(15,16384,null,0,r.g,[],{required:[0,"required"]},null),t.Db(1024,null,r.b,(function(n){return[n]}),[r.g]),t.ob(17,16384,null,0,i.Gb,[t.k],null,null),t.Db(1024,null,r.c,(function(n){return[n]}),[i.Gb]),t.ob(19,671744,null,0,r.f,[[8,null],[6,r.b],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,r.d,null,[r.f]),t.ob(21,16384,null,0,r.e,[[4,r.d]],null,null),t.ob(22,49152,null,0,i.F,[t.h,t.k,t.x],{required:[0,"required"],type:[1,"type"]},null),(n()(),t.pb(23,0,null,0,14,"ion-item",[],null,null,null,a.J,a.o)),t.ob(24,49152,null,0,i.G,[t.h,t.k,t.x],null,null),(n()(),t.pb(25,0,null,0,5,"ion-label",[["class","labelaccept"],["text-wrap",""]],null,null,null,a.K,a.p)),t.ob(26,49152,null,0,i.M,[t.h,t.k,t.x],null,null),(n()(),t.Gb(27,0,["",""])),(n()(),t.pb(28,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.N,a.s)),t.ob(29,49152,null,0,i.tb,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Gb(-1,0,["*"])),(n()(),t.pb(31,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==t.Bb(n,32)._handleBlurEvent(u.target)&&e),"ionChange"===l&&(e=!1!==t.Bb(n,32)._handleIonChange(u.target)&&e),"ngModelChange"===l&&(e=!1!==(o.accept=u)&&e),e}),a.D,a.i)),t.ob(32,16384,null,0,i.b,[t.k],null,null),t.Db(1024,null,r.c,(function(n){return[n]}),[i.b]),t.ob(34,671744,null,0,r.f,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),t.Db(2048,null,r.d,null,[r.f]),t.ob(36,16384,null,0,r.e,[[4,r.d]],null,null),t.ob(37,49152,null,0,i.q,[t.h,t.k,t.x],null,null),(n()(),t.pb(38,0,null,0,5,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),t.pb(39,0,null,null,4,"ion-button",[["class","ion-no-margin"],["expand","block"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.GoToAreaPage()&&t),t}),a.x,a.c)),t.ob(40,49152,null,0,i.j,[t.h,t.k,t.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),t.Gb(41,0,[""," "])),(n()(),t.eb(16777216,null,0,1,null,k)),t.ob(43,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,5,0,"full"),n(l,9,0,"stacked"),n(l,12,0,"danger"),n(l,15,0,""),n(l,19,0,u.email),n(l,22,0,"","email"),n(l,29,0,"danger"),n(l,34,0,u.accept),n(l,40,0,t.tb(1,"",!u.accept||u.email.length<3,""),"block"),n(l,43,0,u.spinner)}),(function(n,l){var u=l.component;n(l,10,0,u.mydata.allmessages.home_type),n(l,14,0,t.Bb(l,15).required?"":null,t.Bb(l,21).ngClassUntouched,t.Bb(l,21).ngClassTouched,t.Bb(l,21).ngClassPristine,t.Bb(l,21).ngClassDirty,t.Bb(l,21).ngClassValid,t.Bb(l,21).ngClassInvalid,t.Bb(l,21).ngClassPending),n(l,27,0,u.mydata.allmessages.home_disclaimer),n(l,31,0,t.Bb(l,36).ngClassUntouched,t.Bb(l,36).ngClassTouched,t.Bb(l,36).ngClassPristine,t.Bb(l,36).ngClassDirty,t.Bb(l,36).ngClassValid,t.Bb(l,36).ngClassInvalid,t.Bb(l,36).ngClassPending),n(l,41,0,u.mydata.allmessages.home_start)}))}function C(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,a.M,a.r)),t.ob(1,49152,null,0,i.ob,[t.h,t.k,t.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"bubbles")}),null)}function v(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,9,"ion-card",[],null,null,null,a.C,a.e)),t.ob(1,49152,null,0,i.l,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,7,"ion-card-content",[],null,null,null,a.z,a.f)),t.ob(3,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,5,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),t.pb(5,0,null,null,4,"ion-button",[["class","ion-no-margin"],["expand","block"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.GoToAreaPage()&&t),t}),a.x,a.c)),t.ob(6,49152,null,0,i.j,[t.h,t.k,t.x],{expand:[0,"expand"]},null),(n()(),t.Gb(7,0,["",""])),(n()(),t.eb(16777216,null,0,1,null,C)),t.ob(9,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,6,0,"block"),n(l,9,0,u.spinner)}),(function(n,l){n(l,7,0,l.component.mydata.allmessages.home_start)}))}function M(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,3,"div",[["id","ranking"]],null,null,null,null,null)),(n()(),t.pb(1,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(n,l,u){var t=!0;return"click"===l&&(t=!1!==n.component.GoToRanking()&&t),t}),a.x,a.c)),t.ob(2,49152,null,0,i.j,[t.h,t.k,t.x],{color:[0,"color"]},null),(n()(),t.Gb(3,0,["",""]))],(function(n,l){n(l,2,0,"success")}),(function(n,l){n(l,3,0,l.component.mydata.allmessages.finish_ranking)}))}function y(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,25,"ion-content",[],null,null,null,a.E,a.j)),t.ob(1,49152,null,0,i.t,[t.h,t.k,t.x],{fullscreen:[0,"fullscreen"]},null),(n()(),t.pb(2,0,null,0,23,"div",[["id","containerflex"]],null,null,null,null,null)),(n()(),t.eb(16777216,null,null,1,null,p)),t.ob(4,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,f)),t.ob(6,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(7,0,null,null,17,"div",[["id","container"]],null,null,null,null,null)),(n()(),t.pb(8,0,null,null,9,"ion-card",[],null,null,null,a.C,a.e)),t.ob(9,49152,null,0,i.l,[t.h,t.k,t.x],null,null),(n()(),t.pb(10,0,null,0,0,"img",[["id","homelogo"],["src","assets/images/HOME_LOGO.png"]],null,null,null,null,null)),(n()(),t.pb(11,0,null,0,6,"ion-card-content",[],null,null,null,a.z,a.f)),t.ob(12,49152,null,0,i.m,[t.h,t.k,t.x],null,null),(n()(),t.pb(13,0,null,0,2,"ion-card-title",[],null,null,null,a.B,a.h)),t.ob(14,49152,null,0,i.p,[t.h,t.k,t.x],null,null),(n()(),t.Gb(15,0,["",""])),(n()(),t.pb(16,0,null,0,1,"p",[["id","home_p"]],null,null,null,null,null)),(n()(),t.Gb(17,null,["",""])),(n()(),t.eb(16777216,null,null,1,null,x)),t.ob(19,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,v)),t.ob(21,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.eb(16777216,null,null,1,null,M)),t.ob(23,16384,null,0,c.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(n()(),t.pb(24,0,null,null,0,"div",[["id","margin"]],null,null,null,null,null)),(n()(),t.pb(25,0,null,null,0,"div",[["id","footer"]],null,null,null,null,null))],(function(n,l){var u=l.component;n(l,1,0,!0),n(l,4,0,"fr"==u.mydata.lang),n(l,6,0,"en"==u.mydata.lang),n(l,19,0,u.mydata.allvariables.with_db),n(l,21,0,!u.mydata.allvariables.with_db),n(l,23,0,u.mydata.allvariables.with_db)}),(function(n,l){var u=l.component;n(l,15,0,u.mydata.allmessages.home_title),n(l,17,0,u.mydata.allmessages.home_desc)}))}function _(n){return t.Hb(0,[(n()(),t.pb(0,0,null,null,1,"app-home",[],null,null,null,y,m)),t.ob(1,49152,null,0,g,[d.m,b.a,h.c,s.a],null,null)],null,null)}var P=t.lb("app-home",g,_,{},{},[]);u.d(l,"HomePageModuleNgFactory",(function(){return w}));var w=t.mb(e,[],(function(n){return t.yb([t.zb(512,t.j,t.X,[[8,[o.a,P]],[3,t.j],t.v]),t.zb(4608,c.l,c.k,[t.s,[2,c.t]]),t.zb(4608,r.i,r.i,[]),t.zb(4608,i.a,i.a,[t.x,t.g]),t.zb(4608,i.Cb,i.Cb,[i.a,t.j,t.p]),t.zb(4608,i.Fb,i.Fb,[i.a,t.j,t.p]),t.zb(1073742336,c.b,c.b,[]),t.zb(1073742336,r.h,r.h,[]),t.zb(1073742336,r.a,r.a,[]),t.zb(1073742336,i.Ab,i.Ab,[]),t.zb(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),t.zb(1073742336,e,e,[]),t.zb(1024,d.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);