(self.webpackChunkgoatzilla=self.webpackChunkgoatzilla||[]).push([[850],{4850:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ParticipantsModule:()=>F});var n=i(2863),a=i(5894),r=i(5917),c=i(8002),o=i(8186),s=i(5317),p=i(8583),g=i(2167),u=i(2608);function Z(t,e){1&t&&o._UZ(0,"svg-icon",14)}const d=function(t){return[t]};function l(t,e){if(1&t&&(o.TgZ(0,"div",10),o.TgZ(1,"div",11),o.YNc(2,Z,1,0,"svg-icon",12),o.ALo(3,"async"),o.TgZ(4,"h5"),o._uU(5),o.qZA(),o.qZA(),o.TgZ(6,"a",13),o._uU(7,"Check details"),o.qZA(),o.qZA()),2&t){const t=e.$implicit,i=o.oxw(2);o.xp6(2),o.Q6J("ngIf",o.lcZ(3,4,i.isFavorite(t.id))),o.xp6(3),o.AsE("",t.firstName," ",t.lastName,""),o.xp6(1),o.Q6J("routerLink",o.VKq(6,d,t.id))}}function v(t,e){if(1&t&&(o.TgZ(0,"main",1),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",2),o.TgZ(3,"span"),o.TgZ(4,"a",3),o._UZ(5,"svg-icon",4),o.TgZ(6,"span"),o._uU(7,"Projects"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"span",5),o._uU(9," / "),o.qZA(),o.TgZ(10,"span"),o.TgZ(11,"a",6),o._uU(12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(13,"h1",7),o._uU(14,"Participants"),o.qZA(),o.TgZ(15,"div",8),o.YNc(16,l,8,8,"div",9),o.ALo(17,"async"),o.qZA(),o.qZA()),2&t){const t=e.ngIf,i=o.oxw();o.xp6(12),o.Oqu(t.name),o.xp6(4),o.Q6J("ngForOf",o.lcZ(17,2,i.participants$))}}let f=(()=>{class t{constructor(t,e){this.dataService=t,this.projectService=e,this.participants$=(0,r.of)([]),this.participants$=this.dataService.getParticipants(),this.activeProject$=this.projectService.getActiveProject()}isFavorite(t){return this.dataService.favoriteParticipants$.pipe((0,c.U)(e=>e.includes(t)))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService),o.Y36(s.ProjectsService))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-participants-dashboard"]],decls:2,vars:3,consts:[["class","centered-content padded-content",4,"ngIf"],[1,"centered-content","padded-content"],[1,"mb-2","flex","align-center"],["routerLink","../..","cta","tertiary",1,"align-center"],["key","back",1,"mr-1"],[1,"ml-1","mr-1"],["routerLink","../","cta","tertiary"],[1,"mb-2","h2"],[1,"mt-2","card-container"],["class","card",4,"ngFor","ngForOf"],[1,"card"],[1,"flex","mb-1"],["key","star","size","md","class","mr-1 star",4,"ngIf"],["cta","tertiary",1,"block",3,"routerLink"],["key","star","size","md",1,"mr-1","star"]],template:function(t,e){1&t&&(o.YNc(0,v,18,4,"main",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.activeProject$))},directives:[p.O5,g.W,n.yS,u.bk,p.sg],pipes:[p.Ov],styles:[""],changeDetection:0}),t})();var h=i(5257),m=i(3190);function A(t,e){1&t&&(o.TgZ(0,"span"),o._uU(1,"Add to favorites"),o.qZA())}function q(t,e){1&t&&(o.TgZ(0,"span"),o._uU(1,"Remove favorite"),o.qZA())}const y=function(){return["../..","sharing","itinerary","send"]},T=function(t){return{participant:t}},k=function(){return["./"]},x=function(){return["itinerary"]};function P(t,e){if(1&t){const t=o.EpF();o.TgZ(0,"article"),o.ynx(1),o.TgZ(2,"header",7),o.TgZ(3,"div",8),o._UZ(4,"img",9),o.qZA(),o.TgZ(5,"div",10),o.TgZ(6,"h1",11),o._uU(7),o.qZA(),o.TgZ(8,"div",12),o.TgZ(9,"svg-icon",13),o.ALo(10,"async"),o.qZA(),o.TgZ(11,"button",14),o.NdJ("click",function(){const e=o.CHM(t).ngIf;return o.oxw().toggleFavorite(e.id)}),o.YNc(12,A,2,0,"span",6),o.ALo(13,"async"),o.YNc(14,q,2,0,"span",6),o.ALo(15,"async"),o.qZA(),o.qZA(),o.TgZ(16,"div",15),o._UZ(17,"svg-icon",16),o.TgZ(18,"span",17),o.TgZ(19,"a",18),o._uU(20,"Send itinerary"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.BQk(),o.TgZ(21,"div",19),o.TgZ(22,"div",20),o.TgZ(23,"a",21),o._uU(24,"Contact"),o.qZA(),o.TgZ(25,"a",21),o._uU(26,"Itinerary"),o.qZA(),o.qZA(),o._UZ(27,"div",22),o._UZ(28,"router-outlet"),o.qZA(),o.qZA()}if(2&t){const t=e.ngIf,i=o.oxw();o.xp6(7),o.AsE(" ",t.firstName," ",t.lastName," "),o.xp6(2),o.ekj("active",o.lcZ(10,14,i.isFavorite(t.id))),o.xp6(3),o.Q6J("ngIf",!o.lcZ(13,16,i.isFavorite(t.id))),o.xp6(2),o.Q6J("ngIf",o.lcZ(15,18,i.isFavorite(t.id))),o.xp6(5),o.Q6J("routerLink",o.DdM(20,y))("queryParams",o.VKq(21,T,t.id)),o.xp6(4),o.ekj("active",i.appRouter.isRouteActive("contact")),o.Q6J("routerLink",o.DdM(23,k)),o.xp6(2),o.ekj("active",i.appRouter.isRouteActive("itinerary")),o.Q6J("routerLink",o.DdM(24,x))}}let _=(()=>{class t{constructor(t,e,i){this.dataService=t,this.projectService=e,this.appRouter=i,this.participant$=this.dataService.getActiveParticipant(),this.activeProject$=this.projectService.getActiveProject()}isFavorite(t){return this.dataService.favoriteParticipants$.pipe((0,c.U)(e=>e.includes(t)))}toggleFavorite(t){this.dataService.favoriteParticipants$.pipe((0,h.q)(1),(0,m.w)(e=>e.includes(t)?this.dataService.removeFromFavorites(t):this.dataService.addToFavorites(t))).subscribe()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService),o.Y36(s.ProjectsService),o.Y36(a.So))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-participant-details"]],decls:19,vars:6,consts:[[1,"centered-content","padded-content"],[1,"mb-2"],["routerLink","../../..","cta","tertiary"],[1,"ml-1","mr-1"],["routerLink","../../","cta","tertiary"],["routerLink","../","cta","tertiary"],[4,"ngIf"],[1,"hero-header","mb-3"],[1,"img-container"],["src","/assets/avatar.jpg"],[1,"ml-1","mb-2"],[1,"mb-2","h3"],[1,"flex","align-center"],["key","star","size","lg",1,"favorite-star"],["cta","outlined",1,"ml-2",3,"click"],[1,"mt-3","flex","align-center"],["key","share","size","lg"],[1,"flex"],["cta","outlined",1,"ml-2",3,"routerLink","queryParams"],[1,"mt-4"],[1,"tab-controls"],["cta","tertiary",3,"routerLink"],[1,"separator","secondary","mt-3","mb-2"]],template:function(t,e){if(1&t&&(o.TgZ(0,"main",0),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"nav",1),o.TgZ(3,"span"),o.TgZ(4,"a",2),o._uU(5," Dashboard "),o.qZA(),o.qZA(),o.TgZ(6,"span",3),o._uU(7," / "),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",4),o._uU(10),o.ALo(11,"async"),o.qZA(),o.qZA(),o.TgZ(12,"span",3),o._uU(13," / "),o.qZA(),o.TgZ(14,"span"),o.TgZ(15,"a",5),o._uU(16,"Participants"),o.qZA(),o.qZA(),o.qZA(),o.YNc(17,P,29,25,"article",6),o.ALo(18,"async"),o.qZA()),2&t){let t;o.xp6(10),o.Oqu(null==(t=o.lcZ(11,2,e.activeProject$))?null:t.name),o.xp6(7),o.Q6J("ngIf",o.lcZ(18,4,e.participant$))}},directives:[g.W,n.yS,p.O5,u.bk,n.lC],pipes:[p.Ov],styles:[".hero-header[_ngcontent-%COMP%]{display:flex}.img-container[_ngcontent-%COMP%]{max-height:200px;overflow:hidden;border-radius:50%;display:flex;flex-direction:column;justify-content:center;align-items:center}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-height:100%}.favorite-star.active[_ngcontent-%COMP%]{color:var(--secondary-color)}"]}),t})();function U(t,e){if(1&t&&(o.TgZ(0,"div"),o.TgZ(1,"span"),o._uU(2,"Phone:"),o.qZA(),o.TgZ(3,"span",2),o._uU(4),o.qZA(),o.qZA()),2&t){const t=o.oxw().ngIf;o.xp6(4),o.Oqu(t.phone)}}function b(t,e){if(1&t&&(o.ynx(0),o.TgZ(1,"div",1),o.TgZ(2,"span"),o._uU(3,"Email:"),o.qZA(),o.TgZ(4,"span",2),o._uU(5),o.qZA(),o.qZA(),o.YNc(6,U,5,1,"div",0),o.BQk()),2&t){const t=e.ngIf;o.xp6(5),o.Oqu(t.email),o.xp6(1),o.Q6J("ngIf",t.phone)}}let j=(()=>{class t{constructor(t){this.dataService=t,this.participant$=t.getActiveParticipant()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-participant-contact"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"mb-2"],[1,"ml-2"]],template:function(t,e){1&t&&(o.YNc(0,b,7,2,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.participant$))},directives:[p.O5],pipes:[p.Ov],styles:[""],changeDetection:0}),t})();var S=i(6095);const L=function(){return[]},I=function(t){return["/projects",t,"itinerary"]};function $(t,e){if(1&t&&(o.ynx(0),o._UZ(1,"app-booking-list",1),o.ALo(2,"async"),o.BQk()),2&t){const t=e.ngIf,i=o.oxw();o.xp6(1),o.Q6J("bookings",o.lcZ(2,2,i.bookingGroups$)||o.DdM(4,L))("baseUrl",o.VKq(5,I,t.id))}}let O=(()=>{class t{constructor(t,e){this.dataService=t,this.projectService=e,this.bookingGroups$=(0,r.of)([]),this.bookingGroups$=this.dataService.getBookingGroupsForParticipant(),this.activeProject$=this.projectService.getActiveProject()}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService),o.Y36(s.ProjectsService))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-participant-itinerary"]],decls:2,vars:3,consts:[[4,"ngIf"],[3,"bookings","baseUrl"]],template:function(t,e){1&t&&(o.YNc(0,$,3,7,"ng-container",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.activeProject$))},directives:[p.O5,S.h],pipes:[p.Ov],styles:[""],changeDetection:0}),t})();var Q=i(9133);const Y=[{path:"",component:f},{path:":participantId",component:_,children:[{path:"",component:j,data:{key:"contact"}},{path:"itinerary",component:O,data:{key:"itinerary"}},{path:"**",redirectTo:""}]},{path:"**",redirectTo:""}];let F=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[a.m8,n.Bz.forChild(Y),Q.p],n.Bz]}),t})()}}]);