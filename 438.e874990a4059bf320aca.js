(self.webpackChunkgoatzilla=self.webpackChunkgoatzilla||[]).push([[438],{438:(t,e,n)=>{"use strict";n.r(e),n.d(e,{ItineraryModule:()=>P});var i=n(2863),r=n(5894),a=n(9133),c=n(5917),o=n(8186),s=n(5317),p=n(8583),g=n(6226),u=n(2608),l=n(6095);const Z=function(){return[]};function d(t,e){if(1&t&&(o.TgZ(0,"main",1),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",2),o.TgZ(3,"span"),o.TgZ(4,"a",3),o._UZ(5,"svg-icon",4),o.TgZ(6,"span"),o._uU(7,"Projects"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"span",5),o._uU(9," / "),o.qZA(),o.TgZ(10,"span"),o.TgZ(11,"a",6),o._uU(12),o.qZA(),o.qZA(),o.qZA(),o.TgZ(13,"article"),o.TgZ(14,"h1",7),o._uU(15),o.qZA(),o._UZ(16,"app-booking-list",8),o.ALo(17,"async"),o.qZA(),o.qZA()),2&t){const t=e.ngIf,n=o.oxw();o.xp6(12),o.Oqu(t.name),o.xp6(3),o.hij("Itinerary for ",t.name,""),o.xp6(1),o.Q6J("bookings",o.lcZ(17,3,n.bookingGroups$)||o.DdM(5,Z))}}let f=(()=>{class t{constructor(t,e){this.dataService=t,this.projectService=e,this.bookingGroups$=(0,c.of)([]),this.bookings$=this.dataService.getBookings(),this.bookingGroups$=this.dataService.getBookingGroupsByDate(),this.activeProject$=this.projectService.getActiveProject()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService),o.Y36(s.ProjectsService))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-itinerary-dashboard"]],decls:2,vars:3,consts:[["class","centered-content padded-content",4,"ngIf"],[1,"centered-content","padded-content"],[1,"mb-2","flex","align-center"],["routerLink","../..","cta","tertiary",1,"align-center"],["key","back",1,"mr-1"],[1,"ml-1","mr-1"],["routerLink","../","cta","tertiary"],[1,"mb-2","h2"],[3,"bookings"]],template:function(t,e){1&t&&(o.YNc(0,d,18,6,"main",0),o.ALo(1,"async")),2&t&&o.Q6J("ngIf",o.lcZ(1,1,e.activeProject$))},directives:[p.O5,g.W,i.yS,u.bk,l.h],pipes:[p.Ov],styles:[""]}),t})();function m(t,e){if(1&t&&(o.TgZ(0,"div",17),o._UZ(1,"img",18),o.qZA()),2&t){const t=o.oxw().ngIf;o.xp6(1),o.Q6J("src",t.image,o.LSH)}}const v=function(){return["../..","sharing","booking","send"]},h=function(){return["./"]},A=function(){return["participants"]},k=function(){return["reminders"]};function q(t,e){if(1&t&&(o.TgZ(0,"article"),o.TgZ(1,"div",7),o.TgZ(2,"h1",8),o.TgZ(3,"div",9),o.TgZ(4,"span",10),o._uU(5),o.qZA(),o.TgZ(6,"span"),o._uU(7),o.qZA(),o.qZA(),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",11),o._uU(10," Share booking"),o.qZA(),o.qZA(),o.qZA(),o.YNc(11,m,2,1,"div",12),o.TgZ(12,"div",13),o.TgZ(13,"div",14),o.TgZ(14,"a",15),o._uU(15,"General info"),o.qZA(),o.TgZ(16,"a",15),o._uU(17,"Participants"),o.qZA(),o.TgZ(18,"a",15),o._uU(19,"Reminders"),o.qZA(),o.qZA(),o._UZ(20,"div",16),o._UZ(21,"router-outlet"),o.qZA(),o.qZA()),2&t){const t=e.ngIf,n=o.oxw();o.xp6(5),o.Oqu(t.type),o.xp6(2),o.Oqu(t.provider),o.xp6(2),o.Q6J("routerLink",o.DdM(13,v)),o.xp6(2),o.Q6J("ngIf",t.image),o.xp6(3),o.ekj("active",n.appRouter.isRouteActive("general")),o.Q6J("routerLink",o.DdM(14,h)),o.xp6(2),o.ekj("active",n.appRouter.isRouteActive("participants")),o.Q6J("routerLink",o.DdM(15,A)),o.xp6(2),o.ekj("active",n.appRouter.isRouteActive("reminders")),o.Q6J("routerLink",o.DdM(16,k))}}let y=(()=>{class t{constructor(t,e,n){this.dataService=t,this.projectService=e,this.appRouter=n,this.booking$=this.dataService.getActiveBooking(),this.activeProject$=this.projectService.getActiveProject()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService),o.Y36(s.ProjectsService),o.Y36(r.So))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking"]],decls:19,vars:6,consts:[[1,"centered-content","padded-content"],[1,"mb-2"],["routerLink","../../..","cta","tertiary"],[1,"ml-1","mr-1"],["routerLink","../../","cta","tertiary"],["routerLink","../","cta","tertiary"],[4,"ngIf"],[1,"flex","space-between","align-center","mb-2"],[1,"h2"],[1,"flex"],[1,"mr-2"],["cta","outlined",3,"routerLink"],["class","img-container",4,"ngIf"],[1,"mt-2"],[1,"tab-controls"],["cta","tertiary",3,"routerLink"],[1,"separator","secondary","mt-3","mb-2"],[1,"img-container"],[3,"src"]],template:function(t,e){if(1&t&&(o.TgZ(0,"main",0),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",1),o.TgZ(3,"span"),o.TgZ(4,"a",2),o._uU(5," Dashboard "),o.qZA(),o.qZA(),o.TgZ(6,"span",3),o._uU(7," / "),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",4),o._uU(10),o.ALo(11,"async"),o.qZA(),o.qZA(),o.TgZ(12,"span",3),o._uU(13," / "),o.qZA(),o.TgZ(14,"span"),o.TgZ(15,"a",5),o._uU(16,"Itinerary"),o.qZA(),o.qZA(),o.qZA(),o.YNc(17,q,22,17,"article",6),o.ALo(18,"async"),o.qZA()),2&t){let t;o.xp6(10),o.Oqu(null==(t=o.lcZ(11,2,e.activeProject$))?null:t.name),o.xp6(7),o.Q6J("ngIf",o.lcZ(18,4,e.booking$))}},directives:[g.W,i.yS,p.O5,i.lC],pipes:[p.Ov],styles:[".img-container[_ngcontent-%COMP%]{width:100%;max-height:300px;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:var(--space-2)}.img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:100%}"]}),t})(),T=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-general"]],decls:2,vars:0,template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1," Booking information with different content depending on the type of booking\n"),o.qZA())},styles:[""]}),t})();var b=n(3190),x=n(8002);function _(t,e){1&t&&o._UZ(0,"svg-icon",7)}const j=function(t,e){return["/projects",t,"participants",e]};function S(t,e){if(1&t&&(o.TgZ(0,"li",2),o.TgZ(1,"div",3),o.TgZ(2,"h2",4),o._uU(3),o.qZA(),o.YNc(4,_,1,0,"svg-icon",5),o.ALo(5,"async"),o.qZA(),o.TgZ(6,"span"),o.TgZ(7,"a",6),o.ALo(8,"async"),o._uU(9,"Profile"),o.qZA(),o.qZA(),o.qZA()),2&t){const t=e.$implicit,n=o.oxw();let i;o.xp6(3),o.AsE("",t.firstName," ",t.lastName,""),o.xp6(1),o.Q6J("ngIf",o.lcZ(5,4,n.isFavorite(t.id))),o.xp6(3),o.Q6J("routerLink",o.WLB(8,j,null==(i=o.lcZ(8,6,n.activeProject$))?null:i.id,t.id))}}const U=[{path:"",component:f},{path:":bookingId",component:y,children:[{path:"",component:T,data:{key:"general"}},{path:"participants",component:(()=>{class t{constructor(t,e){this.dataService=t,this.projectService=e,this.participants$=(0,c.of)([]),this.participants$=this.dataService.getActiveBooking().pipe((0,b.w)(t=>this.dataService.getBookingParticipants(t.id))),this.activeProject$=this.projectService.getActiveProject()}isFavorite(t){return this.dataService.favoriteParticipants$.pipe((0,x.U)(e=>e.includes(t)))}}return t.\u0275fac=function(e){return new(e||t)(o.Y36(s.ProjectDataService),o.Y36(s.ProjectsService))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-participants"]],decls:3,vars:3,consts:[[1,"list"],["class","participant",4,"ngFor","ngForOf"],[1,"participant"],[1,"flex"],[1,"h5"],["key","star","class","ml-1 star",4,"ngIf"],["cta","outlined",3,"routerLink"],["key","star",1,"ml-1","star"]],template:function(t,e){1&t&&(o.TgZ(0,"ul",0),o.YNc(1,S,10,11,"li",1),o.ALo(2,"async"),o.qZA()),2&t&&(o.xp6(1),o.Q6J("ngForOf",o.lcZ(2,1,e.participants$)))},directives:[p.sg,p.O5,i.yS,u.bk],pipes:[p.Ov],styles:[".participant[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;padding:var(--space-2)}"],changeDetection:0}),t})(),data:{key:"participants"}},{path:"reminders",component:(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-booking-reminders"]],decls:2,vars:0,template:function(t,e){1&t&&(o.TgZ(0,"p"),o._uU(1," Todo: Schedule automatic email reminders to all participants\n"),o.qZA())},styles:[""]}),t})(),data:{key:"reminders"}},{path:"**",redirectTo:""}]},{path:"**",redirectTo:""}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[r.m8,i.Bz.forChild(U),a.p],i.Bz]}),t})()}}]);