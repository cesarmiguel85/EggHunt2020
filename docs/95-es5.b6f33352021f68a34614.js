function _defineProperties(n,l){for(var u=0;u<l.length;u++){var e=l[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,u){return l&&_defineProperties(n.prototype,l),u&&_defineProperties(n,u),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{L6id:function(n,l,u){"use strict";u.r(l);var e=u("8Y7J"),t=function n(){_classCallCheck(this,n)},o=u("pMnS"),a=u("MKJQ"),i=u("sZkV"),r=u("s7LF"),c=u("SVse"),b=u("R7Hv"),s=u("mMyO"),g=function(){function n(l,u,e,t){_classCallCheck(this,n),this.router=l,this.mydata=u,this.http=e,this.googleAnalyticsService=t,this.accept=!1,this.email="",this.spinner=!1,this.lang="en"}return _createClass(n,[{key:"GoToAreaPage",value:function(){var n=this;this.spinner=!0;var l={dbname:this.mydata.allvariables.dbname,email:this.email};console.log("Launching http request"),this.mydata.allvariables.with_db?this.mydata.requestPostJQ(this.mydata.allvariables.db_emailCheck,l).then((function(l){var u=JSON.parse(l.toString());1==parseInt(u.ok)?(n.spinner=!1,n.mydata.email=n.email,n.mydata.timestart=new Date,n.router.navigate(["/areas"])):(n.mydata.presentToastBottom(u.error),n.spinner=!1)})).catch((function(l){console.log(l),n.mydata.presentToastBottom("Une erreur est survenu essayant de contacter la base de donn\xe9es... Votre score risque de ne pas \xeatre enregistr\xe9!"),n.spinner=!1,n.mydata.email=n.email,n.mydata.timestart=new Date,n.router.navigate(["/areas"])})):(this.spinner=!1,this.mydata.email=this.email,this.mydata.timestart=new Date,this.router.navigate(["/areas"]))}},{key:"GoToRanking",value:function(){this.router.navigate(["/ranking"])}},{key:"switchLang",value:function(n){this.mydata.switchLang(n)}},{key:"ionViewDidEnter",value:function(){this.googleAnalyticsService.trackPagesHandler("home")}}]),n}(),d=u("iInd"),p=u("IheW"),m=e.nb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;margin:auto;width:90%}#containerflex[_ngcontent-%COMP%]{text-align:center;margin:auto;display:flex;flex-direction:column;width:100%;height:100%;overflow:auto;background-image:url(BACKGROUND.d16770508f4f07398f1c.jpg);background-repeat:no-repeat;background-position:center;background-size:cover}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}.subtitlebutton[_ngcontent-%COMP%]{font-size:x-small;clear:both}.buttontext[_ngcontent-%COMP%]{width:100%}.labelaccept[_ngcontent-%COMP%]{font-size:14px}#footer[_ngcontent-%COMP%]{position:absolute;height:10%;width:100%;bottom:0;background-image:url(eggs_footer.eb248bb3c1aa224d38af.png);background-position:center;background-repeat:repeat-x;background-size:contain}.myform[_ngcontent-%COMP%]{width:100%;margin:auto}#ranking[_ngcontent-%COMP%]{margin-bottom:6em}ion-card[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.9);--color:black}ion-list[_ngcontent-%COMP%]{--ion-item-background:rgba(255, 255, 255, 0.6)}.cardform[_ngcontent-%COMP%]{width:80%;margin:auto;--ion-item-background:rgba(255, 255, 255, 0.95)}#homelogo[_ngcontent-%COMP%]{height:120px;margin-top:1em}#home_p[_ngcontent-%COMP%]{font-size:14px!important;color:#000!important;margin-top:1em!important}#switch[_ngcontent-%COMP%]{margin:1em 1em auto auto;--background:white}#margin[_ngcontent-%COMP%]{width:100%;height:5em}"]],data:{}});function h(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,"ion-button",[["fill","outline"],["id","switch"],["slot","end"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.switchLang("en")&&e),e}),a.x,a.c)),e.ob(1,49152,null,0,i.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Gb(-1,0,["Switch to English \ud83c\uddfa\ud83c\uddf8"]))],(function(n,l){n(l,1,0,"outline")}),null)}function f(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,2,"ion-button",[["fill","outline"],["id","switch"],["slot","end"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.switchLang("fr")&&e),e}),a.x,a.c)),e.ob(1,49152,null,0,i.j,[e.h,e.k,e.x],{fill:[0,"fill"]},null),(n()(),e.Gb(-1,0,["Changer au Fran\xe7ais \ud83c\uddeb\ud83c\uddf7"]))],(function(n,l){n(l,1,0,"outline")}),null)}function k(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,a.M,a.r)),e.ob(1,49152,null,0,i.ob,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"bubbles")}),null)}function C(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,43,"ion-card",[["class","cardform"]],null,null,null,a.C,a.e)),e.ob(1,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,41,"ion-card-content",[],null,null,null,a.z,a.f)),e.ob(3,49152,null,0,i.m,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,33,"ion-list",[["class","myform"],["lines","full"]],null,null,null,a.L,a.q)),e.ob(5,49152,null,0,i.N,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(n()(),e.pb(6,0,null,0,16,"ion-item",[],null,null,null,a.J,a.o)),e.ob(7,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(n()(),e.pb(8,0,null,0,5,"ion-label",[["position","stacked"]],null,null,null,a.K,a.p)),e.ob(9,49152,null,0,i.M,[e.h,e.k,e.x],{position:[0,"position"]},null),(n()(),e.Gb(10,0,["",""])),(n()(),e.pb(11,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.N,a.s)),e.ob(12,49152,null,0,i.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["*"])),(n()(),e.pb(14,0,null,0,8,"ion-input",[["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.Bb(n,17)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,17)._handleInputEvent(u.target)&&t),"ngModelChange"===l&&(t=!1!==(o.email=u)&&t),t}),a.I,a.n)),e.ob(15,16384,null,0,r.g,[],{required:[0,"required"]},null),e.Db(1024,null,r.b,(function(n){return[n]}),[r.g]),e.ob(17,16384,null,0,i.Gb,[e.k],null,null),e.Db(1024,null,r.c,(function(n){return[n]}),[i.Gb]),e.ob(19,671744,null,0,r.f,[[8,null],[6,r.b],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,r.d,null,[r.f]),e.ob(21,16384,null,0,r.e,[[4,r.d]],null,null),e.ob(22,49152,null,0,i.F,[e.h,e.k,e.x],{required:[0,"required"],type:[1,"type"]},null),(n()(),e.pb(23,0,null,0,14,"ion-item",[],null,null,null,a.J,a.o)),e.ob(24,49152,null,0,i.G,[e.h,e.k,e.x],null,null),(n()(),e.pb(25,0,null,0,5,"ion-label",[["class","labelaccept"],["text-wrap",""]],null,null,null,a.K,a.p)),e.ob(26,49152,null,0,i.M,[e.h,e.k,e.x],null,null),(n()(),e.Gb(27,0,["",""])),(n()(),e.pb(28,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,a.N,a.s)),e.ob(29,49152,null,0,i.tb,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Gb(-1,0,["*"])),(n()(),e.pb(31,0,null,0,6,"ion-checkbox",[["slot","start"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,u){var t=!0,o=n.component;return"ionBlur"===l&&(t=!1!==e.Bb(n,32)._handleBlurEvent(u.target)&&t),"ionChange"===l&&(t=!1!==e.Bb(n,32)._handleIonChange(u.target)&&t),"ngModelChange"===l&&(t=!1!==(o.accept=u)&&t),t}),a.D,a.i)),e.ob(32,16384,null,0,i.b,[e.k],null,null),e.Db(1024,null,r.c,(function(n){return[n]}),[i.b]),e.ob(34,671744,null,0,r.f,[[8,null],[8,null],[8,null],[6,r.c]],{model:[0,"model"]},{update:"ngModelChange"}),e.Db(2048,null,r.d,null,[r.f]),e.ob(36,16384,null,0,r.e,[[4,r.d]],null,null),e.ob(37,49152,null,0,i.q,[e.h,e.k,e.x],null,null),(n()(),e.pb(38,0,null,0,5,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),e.pb(39,0,null,null,4,"ion-button",[["class","ion-no-margin"],["expand","block"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.GoToAreaPage()&&e),e}),a.x,a.c)),e.ob(40,49152,null,0,i.j,[e.h,e.k,e.x],{disabled:[0,"disabled"],expand:[1,"expand"]},null),(n()(),e.Gb(41,0,[""," "])),(n()(),e.eb(16777216,null,0,1,null,k)),e.ob(43,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,5,0,"full"),n(l,9,0,"stacked"),n(l,12,0,"danger"),n(l,15,0,""),n(l,19,0,u.email),n(l,22,0,"","email"),n(l,29,0,"danger"),n(l,34,0,u.accept),n(l,40,0,e.tb(1,"",!u.accept||u.email.length<3,""),"block"),n(l,43,0,u.spinner)}),(function(n,l){var u=l.component;n(l,10,0,u.mydata.allmessages.home_type),n(l,14,0,e.Bb(l,15).required?"":null,e.Bb(l,21).ngClassUntouched,e.Bb(l,21).ngClassTouched,e.Bb(l,21).ngClassPristine,e.Bb(l,21).ngClassDirty,e.Bb(l,21).ngClassValid,e.Bb(l,21).ngClassInvalid,e.Bb(l,21).ngClassPending),n(l,27,0,u.mydata.allmessages.home_disclaimer),n(l,31,0,e.Bb(l,36).ngClassUntouched,e.Bb(l,36).ngClassTouched,e.Bb(l,36).ngClassPristine,e.Bb(l,36).ngClassDirty,e.Bb(l,36).ngClassValid,e.Bb(l,36).ngClassInvalid,e.Bb(l,36).ngClassPending),n(l,41,0,u.mydata.allmessages.home_start)}))}function v(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,a.M,a.r)),e.ob(1,49152,null,0,i.ob,[e.h,e.k,e.x],{name:[0,"name"]},null)],(function(n,l){n(l,1,0,"bubbles")}),null)}function x(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,9,"ion-card",[],null,null,null,a.C,a.e)),e.ob(1,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,7,"ion-card-content",[],null,null,null,a.z,a.f)),e.ob(3,49152,null,0,i.m,[e.h,e.k,e.x],null,null),(n()(),e.pb(4,0,null,0,5,"div",[["class","ion-padding"]],null,null,null,null,null)),(n()(),e.pb(5,0,null,null,4,"ion-button",[["class","ion-no-margin"],["expand","block"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.GoToAreaPage()&&e),e}),a.x,a.c)),e.ob(6,49152,null,0,i.j,[e.h,e.k,e.x],{expand:[0,"expand"]},null),(n()(),e.Gb(7,0,["",""])),(n()(),e.eb(16777216,null,0,1,null,v)),e.ob(9,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null)],(function(n,l){var u=l.component;n(l,6,0,"block"),n(l,9,0,u.spinner)}),(function(n,l){n(l,7,0,l.component.mydata.allmessages.home_start)}))}function y(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,3,"div",[["id","ranking"]],null,null,null,null,null)),(n()(),e.pb(1,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(n,l,u){var e=!0;return"click"===l&&(e=!1!==n.component.GoToRanking()&&e),e}),a.x,a.c)),e.ob(2,49152,null,0,i.j,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Gb(3,0,["",""]))],(function(n,l){n(l,2,0,"success")}),(function(n,l){n(l,3,0,l.component.mydata.allmessages.finish_ranking)}))}function _(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,25,"ion-content",[],null,null,null,a.E,a.j)),e.ob(1,49152,null,0,i.t,[e.h,e.k,e.x],{fullscreen:[0,"fullscreen"]},null),(n()(),e.pb(2,0,null,0,23,"div",[["id","containerflex"]],null,null,null,null,null)),(n()(),e.eb(16777216,null,null,1,null,h)),e.ob(4,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,f)),e.ob(6,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(7,0,null,null,17,"div",[["id","container"]],null,null,null,null,null)),(n()(),e.pb(8,0,null,null,9,"ion-card",[],null,null,null,a.C,a.e)),e.ob(9,49152,null,0,i.l,[e.h,e.k,e.x],null,null),(n()(),e.pb(10,0,null,0,0,"img",[["id","homelogo"],["src","assets/images/HOME_LOGO.png"]],null,null,null,null,null)),(n()(),e.pb(11,0,null,0,6,"ion-card-content",[],null,null,null,a.z,a.f)),e.ob(12,49152,null,0,i.m,[e.h,e.k,e.x],null,null),(n()(),e.pb(13,0,null,0,2,"ion-card-title",[],null,null,null,a.B,a.h)),e.ob(14,49152,null,0,i.p,[e.h,e.k,e.x],null,null),(n()(),e.Gb(15,0,["",""])),(n()(),e.pb(16,0,null,0,1,"p",[["id","home_p"]],null,null,null,null,null)),(n()(),e.Gb(17,null,["",""])),(n()(),e.eb(16777216,null,null,1,null,C)),e.ob(19,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,x)),e.ob(21,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.eb(16777216,null,null,1,null,y)),e.ob(23,16384,null,0,c.j,[e.M,e.J],{ngIf:[0,"ngIf"]},null),(n()(),e.pb(24,0,null,null,0,"div",[["id","margin"]],null,null,null,null,null)),(n()(),e.pb(25,0,null,null,0,"div",[["id","footer"]],null,null,null,null,null))],(function(n,l){var u=l.component;n(l,1,0,!0),n(l,4,0,"fr"==u.mydata.lang),n(l,6,0,"en"==u.mydata.lang),n(l,19,0,u.mydata.allvariables.with_db),n(l,21,0,!u.mydata.allvariables.with_db),n(l,23,0,u.mydata.allvariables.with_db)}),(function(n,l){var u=l.component;n(l,15,0,u.mydata.allmessages.home_title),n(l,17,0,u.mydata.allmessages.home_desc)}))}var M=e.lb("app-home",g,(function(n){return e.Hb(0,[(n()(),e.pb(0,0,null,null,1,"app-home",[],null,null,null,_,m)),e.ob(1,49152,null,0,g,[d.m,b.a,p.c,s.a],null,null)],null,null)}),{},{},[]);u.d(l,"HomePageModuleNgFactory",(function(){return P}));var P=e.mb(t,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[o.a,M]],[3,e.j],e.v]),e.zb(4608,c.l,c.k,[e.s,[2,c.t]]),e.zb(4608,r.i,r.i,[]),e.zb(4608,i.a,i.a,[e.x,e.g]),e.zb(4608,i.Cb,i.Cb,[i.a,e.j,e.p]),e.zb(4608,i.Fb,i.Fb,[i.a,e.j,e.p]),e.zb(1073742336,c.b,c.b,[]),e.zb(1073742336,r.h,r.h,[]),e.zb(1073742336,r.a,r.a,[]),e.zb(1073742336,i.Ab,i.Ab,[]),e.zb(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.zb(1073742336,t,t,[]),e.zb(1024,d.k,(function(){return[[{path:"",component:g}]]}),[])])}))}}]);