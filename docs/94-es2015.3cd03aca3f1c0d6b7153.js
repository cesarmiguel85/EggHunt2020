(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{qfe4:function(l,n,t){"use strict";t.r(n);var u=t("8Y7J");class e{}var a=t("pMnS"),i=t("MKJQ"),o=t("sZkV"),s=t("SVse"),r=t("R7Hv");class c{constructor(l,n,t){this.mydata=l,this.router=n,this.http=t,this.mytime_min=0,this.mytime_sec=0,this.spinner=!0,this.mydata.timeend=new Date,this.mytime_min=Math.trunc((this.mydata.timeend-this.mydata.timestart)/1e3/60),this.mytime_sec=Math.trunc((this.mydata.timeend-this.mydata.timestart)/1e3-60*this.mytime_min),this.mydata.allvariables.with_db&&this.sendInfoToDB()}ngOnInit(){}exitPage(){window.location.replace(this.mydata.allvariables.root),this.router.navigate(["/home"])}sendInfoToDB(){let l={email:this.mydata.email,starttime:this.formatDate(this.mydata.timestart),endtime:this.formatDate(this.mydata.timeend),duration:Math.round((this.mydata.timeend-this.mydata.timestart)/1e3),dbname:this.mydata.allvariables.dbname};console.log("Launching hhtp request"),this.mydata.requestPostJQ(this.mydata.allvariables.db_addParticpants,l).then(l=>{console.log(l),console.log("DATA PARSED");var n=JSON.parse(l.toString());console.log(n),this.mydata.presentToastBottom(1==n.ok?n.message:n.error),this.spinner=!1}).catch(l=>{console.log(l),this.mydata.presentToastBottom("On n'arrive pas \xe0 enregistrer votre score... d\xe9sol\xe9..."),this.spinner=!1})}formatDate(l){null==l&&(l=new Date);let n=l.getFullYear().toString(),t=(l.getMonth()+1).toString(),u=l.getDate().toString(),e=l.getHours().toString(),a=l.getMinutes().toString(),i=l.getSeconds().toString();return n+"-"+(t[1]?t:"0"+t[0])+"-"+(u[1]?u:"0"+u[0])+" "+(e[1]?e:"0"+e[0])+":"+(a[1]?a:"0"+a[0])+":"+(i[1]?i:"0"+i[0])}GoToRanking(){this.router.navigate(["/ranking"])}ionViewDidEnter(){}}var b=t("iInd"),g=t("IheW"),m=u.nb({encapsulation:0,styles:[["#container[_ngcontent-%COMP%]{text-align:center;margin:auto;width:90%;white-space:pre-wrap}#containerflex[_ngcontent-%COMP%]{text-align:center;margin:auto;display:flex;flex-direction:column;width:100%;height:100%;background-image:url(BACKGROUND.16c99ba2b33aa36cb0df.jpg);background-repeat:no-repeat;background-position:center;background-size:cover;overflow:auto}#container[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:20px;line-height:26px}#container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;line-height:22px;color:#8c8c8c;margin:0}#container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}ion-content[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--background:translucent}#footer[_ngcontent-%COMP%]{position:absolute;height:10%;width:100%;bottom:0;background-image:url(eggs_footer.eb248bb3c1aa224d38af.png);background-position:center;background-repeat:repeat-x;background-size:contain}#ranking[_ngcontent-%COMP%]{margin-bottom:6em}#finishimg[_ngcontent-%COMP%]{max-width:400px;max-height:15%;margin-top:1em}ion-card[_ngcontent-%COMP%]{--ion-background-color:rgba(255, 255, 255, 0.9);--color:black}#headlogo[_ngcontent-%COMP%]{max-width:100px;max-height:40vh}.egg[_ngcontent-%COMP%]{max-width:100px}ion-card[_ngcontent-%COMP%], ion-card-content[_ngcontent-%COMP%]{--color:black}.score[_ngcontent-%COMP%]{color:#000}.saving[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin:auto;display:block}.saving[_ngcontent-%COMP%]{margin-top:1em!important}#margin[_ngcontent-%COMP%]{width:100%;height:5em}"]],data:{}});function d(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,4,"p",[["class","saving"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,1,"ion-spinner",[["name","bubbles"]],null,null,null,i.M,i.r)),u.ob(2,49152,null,0,o.ob,[u.h,u.k,u.x],{name:[0,"name"]},null),(l()(),u.pb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Gb(4,null,["",""]))],(function(l,n){l(n,2,0,"bubbles")}),(function(l,n){l(n,4,0,n.component.mydata.allmessages.finish_cardtime_saving)}))}function h(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,3,"div",[["id","ranking"]],null,null,null,null,null)),(l()(),u.pb(1,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.GoToRanking()&&u),u}),i.x,i.c)),u.ob(2,49152,null,0,o.j,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Gb(3,0,["",""]))],(function(l,n){l(n,2,0,"success")}),(function(l,n){l(n,3,0,n.component.mydata.allmessages.finish_ranking)}))}function p(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,15,"ion-header",[],null,null,null,i.F,i.k)),u.ob(1,49152,null,0,o.A,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,13,"ion-toolbar",[],null,null,null,i.P,i.u)),u.ob(3,49152,null,0,o.yb,[u.h,u.k,u.x],null,null),(l()(),u.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.y,i.d)),u.ob(5,49152,null,0,o.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,1,"ion-img",[["id","headlogo"],["src","assets/images/HEAD_LOGO.png"]],null,null,null,i.H,i.m)),u.ob(7,49152,null,0,o.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.pb(8,0,null,0,2,"ion-title",[],null,null,null,i.O,i.t)),u.ob(9,49152,null,0,o.wb,[u.h,u.k,u.x],null,null),(l()(),u.Gb(10,0,["",""])),(l()(),u.pb(11,0,null,0,4,"ion-buttons",[["slot","end"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.exitPage()&&u),u}),i.y,i.d)),u.ob(12,49152,null,0,o.k,[u.h,u.k,u.x],null,null),(l()(),u.pb(13,0,null,0,2,"ion-button",[],null,null,null,i.x,i.c)),u.ob(14,49152,null,0,o.j,[u.h,u.k,u.x],null,null),(l()(),u.Gb(-1,0,[" Quitter "])),(l()(),u.pb(16,0,null,null,39,"ion-content",[],null,null,null,i.E,i.j)),u.ob(17,49152,null,0,o.t,[u.h,u.k,u.x],{fullscreen:[0,"fullscreen"]},null),(l()(),u.pb(18,0,null,0,37,"div",[["id","containerflex"]],null,null,null,null,null)),(l()(),u.pb(19,0,null,null,35,"div",[["id","container"]],null,null,null,null,null)),(l()(),u.pb(20,0,null,null,18,"ion-card",[],null,null,null,i.C,i.e)),u.ob(21,49152,null,0,o.l,[u.h,u.k,u.x],null,null),(l()(),u.pb(22,0,null,0,16,"ion-card-content",[],null,null,null,i.z,i.f)),u.ob(23,49152,null,0,o.m,[u.h,u.k,u.x],null,null),(l()(),u.pb(24,0,null,0,12,"table",[["style","width:100%"]],null,null,null,null,null)),(l()(),u.pb(25,0,null,null,11,"tr",[],null,null,null,null,null)),(l()(),u.pb(26,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.pb(27,0,null,null,1,"ion-img",[["class","egg"],["src","assets/images/Easter-Egg-left2.png"]],null,null,null,i.H,i.m)),u.ob(28,49152,null,0,o.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.pb(29,0,null,null,4,"td",[],null,null,null,null,null)),(l()(),u.pb(30,0,null,null,2,"ion-card-title",[],null,null,null,i.B,i.h)),u.ob(31,49152,null,0,o.p,[u.h,u.k,u.x],null,null),(l()(),u.Gb(32,0,["",""])),(l()(),u.Gb(33,null,[" "," "])),(l()(),u.pb(34,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),u.pb(35,0,null,null,1,"ion-img",[["class","egg"],["src","assets/images/Easter-Egg-right2.png"]],null,null,null,i.H,i.m)),u.ob(36,49152,null,0,o.C,[u.h,u.k,u.x],{src:[0,"src"]},null),(l()(),u.pb(37,0,null,0,0,"br",[],null,null,null,null,null)),(l()(),u.pb(38,0,null,0,0,"img",[["alt",""],["id","finishimg"],["src","assets/images/FINISH.png"]],null,null,null,null,null)),(l()(),u.pb(39,0,null,null,12,"ion-card",[],null,null,null,i.C,i.e)),u.ob(40,49152,null,0,o.l,[u.h,u.k,u.x],null,null),(l()(),u.pb(41,0,null,0,4,"ion-card-header",[],null,null,null,i.A,i.g)),u.ob(42,49152,null,0,o.n,[u.h,u.k,u.x],null,null),(l()(),u.pb(43,0,null,0,2,"ion-card-title",[],null,null,null,i.B,i.h)),u.ob(44,49152,null,0,o.p,[u.h,u.k,u.x],null,null),(l()(),u.Gb(45,0,["",""])),(l()(),u.pb(46,0,null,0,5,"ion-card-content",[],null,null,null,i.z,i.f)),u.ob(47,49152,null,0,o.m,[u.h,u.k,u.x],null,null),(l()(),u.pb(48,0,null,0,1,"p",[["class","score"]],null,null,null,null,null)),(l()(),u.Gb(49,null,[""," "," min. "," sec."])),(l()(),u.eb(16777216,null,0,1,null,d)),u.ob(51,16384,null,0,s.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.eb(16777216,null,null,1,null,h)),u.ob(53,16384,null,0,s.j,[u.M,u.J],{ngIf:[0,"ngIf"]},null),(l()(),u.pb(54,0,null,null,0,"div",[["id","margin"]],null,null,null,null,null)),(l()(),u.pb(55,0,null,null,0,"div",[["id","footer"]],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,7,0,"assets/images/HEAD_LOGO.png"),l(n,17,0,!0),l(n,28,0,"assets/images/Easter-Egg-left2.png"),l(n,36,0,"assets/images/Easter-Egg-right2.png"),l(n,51,0,t.spinner&&t.mydata.allvariables.with_db),l(n,53,0,t.mydata.allvariables.with_db)}),(function(l,n){var t=n.component;l(n,10,0,t.mydata.allmessages.finish_title),l(n,32,0,t.mydata.allmessages.finish_card_title),l(n,33,0,t.mydata.allmessages.finish_card_content),l(n,45,0,t.mydata.allmessages.finish_cardtime_title),l(n,49,0,t.mydata.allmessages.finish_cardtime_content,t.mytime_min,t.mytime_sec)}))}function f(l){return u.Hb(0,[(l()(),u.pb(0,0,null,null,1,"app-finish",[],null,null,null,p,m)),u.ob(1,114688,null,0,c,[r.a,b.m,g.c],null,null)],(function(l,n){l(n,1,0)}),null)}var k=u.lb("app-finish",c,f,{},{},[]),_=t("s7LF");class x{}t.d(n,"FinishPageModuleNgFactory",(function(){return y}));var y=u.mb(e,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[a.a,k]],[3,u.j],u.v]),u.zb(4608,s.l,s.k,[u.s,[2,s.t]]),u.zb(4608,_.i,_.i,[]),u.zb(4608,o.a,o.a,[u.x,u.g]),u.zb(4608,o.Cb,o.Cb,[o.a,u.j,u.p]),u.zb(4608,o.Fb,o.Fb,[o.a,u.j,u.p]),u.zb(1073742336,s.b,s.b,[]),u.zb(1073742336,_.h,_.h,[]),u.zb(1073742336,_.a,_.a,[]),u.zb(1073742336,o.Ab,o.Ab,[]),u.zb(1073742336,b.n,b.n,[[2,b.s],[2,b.m]]),u.zb(1073742336,x,x,[]),u.zb(1073742336,e,e,[]),u.zb(1024,b.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);