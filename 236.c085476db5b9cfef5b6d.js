(self.webpackChunkgoatzilla=self.webpackChunkgoatzilla||[]).push([[236],{6236:(e,t,i)=>{"use strict";i.r(t),i.d(t,{DataSharingModule:()=>B});var n=i(9171),r=i(665),a=i(4297),s=i(9645),c=i(784),o=i(7716),l=i(6231),p=i(6226),g=i(8583);let u=(()=>{class e{constructor(e){this.projectService=e,this.activeProject$=this.projectService.getActiveProject()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.ProjectsService))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-share-itinerary"]],decls:20,vars:3,consts:[[1,"centered-content","padded-container"],[1,"mb-2","mt-1"],["routerLink","../../../../","cta","tertiary"],[1,"ml-1","mr-1"],["routerLink","../../../","cta","tertiary"],["routerLink","../../","cta","tertiary"]],template:function(e,t){if(1&e&&(o.TgZ(0,"main",0),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",1),o.TgZ(3,"span"),o.TgZ(4,"a",2),o._uU(5," Dashboard "),o.qZA(),o.qZA(),o.TgZ(6,"span",3),o._uU(7," / "),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",4),o._uU(10),o.ALo(11,"async"),o.qZA(),o.qZA(),o.TgZ(12,"span",3),o._uU(13," / "),o.qZA(),o.TgZ(14,"span"),o.TgZ(15,"a",5),o._uU(16,"Sharing center"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"article"),o.TgZ(18,"p"),o._uU(19,"Send itinerary information to participants"),o.qZA(),o.qZA(),o.qZA()),2&e){let e;o.xp6(10),o.Oqu(null==(e=o.lcZ(11,1,t.activeProject$))?null:e.name)}},directives:[p.W,n.yS],pipes:[g.Ov],styles:[""],changeDetection:0}),e})(),h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-itinerary"]],decls:2,vars:0,template:function(e,t){1&e&&(o.TgZ(0,"p"),o._uU(1,"itinerary works!"),o.qZA())},styles:[""]}),e})(),d=(e=21)=>{let t="",i=crypto.getRandomValues(new Uint8Array(e));for(;e--;){let n=63&i[e];t+=n<36?n.toString(36):n<62?(n-26).toString(36).toUpperCase():n<63?"_":"-"}return t};var m=i(6215),Z=i(8002),A=i(2340);let f=(()=>{class e{constructor(e){this.appRouter=e,this._items$=new m.X({}),this._emails$=new m.X({}),this.items$=this._items$.pipe((0,Z.U)(e=>Object.values(e))),this.emails$=this._emails$.pipe((0,Z.U)(e=>Object.values(e)));const t=JSON.parse(localStorage.getItem("sharedItems")||"{}");this._items$.next(t);const i=JSON.parse(localStorage.getItem("emails")||"{}");this._emails$.next(i)}generatePriceReportLink(e){const t={id:d(),type:"price-report",emails:[],bookingIds:e,projectId:this.appRouter.getProjectId(),createdAt:(new Date).getTime()};return this._items$.next(Object.assign(Object.assign({},this._items$.getValue()),{[t.id]:t})),localStorage.setItem("sharedItems",JSON.stringify(this._items$.getValue())),this.getItemLink(t)}generateEmail(e,t,i){const n=this.appRouter.getProjectId(),r=(new Date).getTime(),a={id:d(),projectId:n,shareId:e,sendAt:i||r,createdAt:r,recipients:t};return this._emails$.next(Object.assign(Object.assign({},this._emails$.getValue()),{[a.id]:a})),localStorage.setItem("emails",JSON.stringify(this._emails$.getValue())),a}getItemLink(e){const t=A.N.currentHost,i=this.appRouter.getProjectId();return"price-report"===e.type?`${t}/projects/${i}/sharing/pricing/${e.id}`:""}getSharedItem(e){return this._items$.getValue()[e]}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(a.So))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac}),e})();function k(e,t){if(1&e&&(o.TgZ(0,"div",11),o.TgZ(1,"a",12),o._uU(2),o.qZA(),o.qZA()),2&e){const e=t.$implicit,i=o.oxw();o.xp6(1),o.Q6J("href",i.getItemLink(e),o.LSH),o.xp6(1),o.Oqu(i.getItemLink(e))}}function v(e,t){if(1&e&&(o.TgZ(0,"div",13),o.TgZ(1,"span",14),o._uU(2),o.qZA(),o.TgZ(3,"span"),o.TgZ(4,"span",15),o._uU(5,"Ships at: "),o.qZA(),o.TgZ(6,"span"),o._uU(7),o.ALo(8,"date"),o.qZA(),o.qZA(),o.qZA()),2&e){const e=t.$implicit;o.xp6(2),o.Oqu(e.id),o.xp6(5),o.Oqu(o.lcZ(8,2,e.sendAt))}}let T=(()=>{class e{constructor(e,t){this.projectService=e,this.sharingService=t,this.activeProject$=this.projectService.getActiveProject(),this.items$=this.sharingService.items$,this.emails$=this.sharingService.emails$}getItemLink(e){return this.sharingService.getItemLink(e)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.ProjectsService),o.Y36(f))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-sharing-dashboard"]],decls:27,vars:9,consts:[[1,"centered-content","padded-container"],[1,"mb-3","mt-1","flex","wrap","align-center"],["routerLink","../../","cta","tertiary"],[1,"ml-1","mr-1"],["routerLink","../","cta","tertiary"],[1,"h5"],[1,"flex","wrap","sections-container"],[1,"mr-4"],[1,"mb-2","h4"],["class","mb-1",4,"ngFor","ngForOf"],["class","mb-1 flex",4,"ngFor","ngForOf"],[1,"mb-1"],["target","_blank",3,"href"],[1,"mb-1","flex"],[1,"mr-3"],[1,"mr-1"]],template:function(e,t){if(1&e&&(o.TgZ(0,"main",0),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",1),o.TgZ(3,"span"),o.TgZ(4,"a",2),o._uU(5," Dashboard "),o.qZA(),o.qZA(),o.TgZ(6,"span",3),o._uU(7," / "),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",4),o._uU(10),o.ALo(11,"async"),o.qZA(),o.qZA(),o.TgZ(12,"span",3),o._uU(13," / "),o.qZA(),o.TgZ(14,"h1",5),o._uU(15,"Sharing center"),o.qZA(),o.qZA(),o.TgZ(16,"article",6),o.TgZ(17,"section",7),o.TgZ(18,"h2",8),o._uU(19,"Links"),o.qZA(),o.YNc(20,k,3,2,"div",9),o.ALo(21,"async"),o.qZA(),o.TgZ(22,"section"),o.TgZ(23,"h2",8),o._uU(24,"Emails"),o.qZA(),o.YNc(25,v,9,4,"div",10),o.ALo(26,"async"),o.qZA(),o.qZA(),o.qZA()),2&e){let e;o.xp6(10),o.Oqu(null==(e=o.lcZ(11,3,t.activeProject$))?null:e.name),o.xp6(10),o.Q6J("ngForOf",o.lcZ(21,5,t.items$)),o.xp6(5),o.Q6J("ngForOf",o.lcZ(26,7,t.emails$))}},directives:[p.W,n.yS,g.sg],pipes:[g.Ov,g.uU],styles:[".sections-container[_ngcontent-%COMP%]{grid-gap:var(--space-3);gap:var(--space-3)}"],changeDetection:0}),e})(),q=(()=>{class e{constructor(e){this.projectService=e,this.activeProject$=this.projectService.getActiveProject()}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.ProjectsService))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-share-booking"]],decls:20,vars:3,consts:[[1,"centered-content","padded-container"],[1,"mb-2","mt-1"],["routerLink","../../../../","cta","tertiary"],[1,"ml-1","mr-1"],["routerLink","../../../","cta","tertiary"],["routerLink","../../","cta","tertiary"]],template:function(e,t){if(1&e&&(o.TgZ(0,"main",0),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",1),o.TgZ(3,"span"),o.TgZ(4,"a",2),o._uU(5," Dashboard "),o.qZA(),o.qZA(),o.TgZ(6,"span",3),o._uU(7," / "),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",4),o._uU(10),o.ALo(11,"async"),o.qZA(),o.qZA(),o.TgZ(12,"span",3),o._uU(13," / "),o.qZA(),o.TgZ(14,"span"),o.TgZ(15,"a",5),o._uU(16,"Sharing center"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(17,"article"),o.TgZ(18,"p"),o._uU(19,"Send an email with detailed booking information"),o.qZA(),o.qZA(),o.qZA()),2&e){let e;o.xp6(10),o.Oqu(null==(e=o.lcZ(11,1,t.activeProject$))?null:e.name)}},directives:[p.W,n.yS],pipes:[g.Ov],styles:[""],changeDetection:0}),e})();var b=i(5917),y=i(7057),_=i(4762),x=i(9112),S=i(2608),U=i(4785),O=i(800),w=i(2458);function C(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"button",8),o.NdJ("click",function(){return o.CHM(e),o.oxw().makeLink.emit()}),o._UZ(1,"svg-icon",9),o.TgZ(2,"span"),o._uU(3,"Generate link"),o.qZA(),o.qZA()}}function L(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"button",10),o.NdJ("click",function(){return o.CHM(e),o.oxw().onCopy()}),o._UZ(1,"svg-icon",9),o.TgZ(2,"span"),o._uU(3,"Copy link"),o.qZA(),o.qZA()}if(2&e){const e=o.oxw();o.Q6J("cdkCopyToClipboard",e.link)}}function $(e,t){if(1&e&&(o.TgZ(0,"mat-option",22),o._uU(1),o.qZA()),2&e){const e=t.$implicit;o.Q6J("value",e),o.xp6(1),o.hij(" ",e," ")}}function P(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",23),o.TgZ(1,"span",24),o._uU(2),o.qZA(),o.TgZ(3,"button",25),o.NdJ("click",function(t){const i=o.CHM(e).$implicit;return o.oxw(2).removeRecipient(t,i)}),o._UZ(4,"svg-icon",26),o.qZA(),o.qZA()}if(2&e){const e=t.$implicit;o.xp6(2),o.Oqu(e)}}function j(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"div",11),o.TgZ(1,"div",0),o.TgZ(2,"input",12,13),o.NdJ("keyup.enter",function(){o.CHM(e);const t=o.MAs(3),i=o.oxw();return i.handleEnter(i.emailFilter),t.focus()})("ngModelChange",function(t){return o.CHM(e),o.oxw().emailFilter=t}),o.qZA(),o.TgZ(4,"mat-autocomplete",14,15),o.NdJ("optionSelected",function(t){return o.CHM(e),o.oxw().addRecipient(t.option.value)}),o.YNc(6,$,2,2,"mat-option",16),o.ALo(7,"async"),o.qZA(),o.TgZ(8,"div",17),o.YNc(9,P,5,1,"div",18),o.qZA(),o._UZ(10,"div",19),o.TgZ(11,"div",20),o.TgZ(12,"button",21),o.NdJ("click",function(){o.CHM(e);const t=o.oxw();return t.handleShare(t.displayedRecipients)}),o._uU(13," Done "),o.qZA(),o.qZA(),o.qZA(),o.qZA()}if(2&e){const e=o.MAs(5),t=o.oxw();o.xp6(2),o.Q6J("ngModel",t.emailFilter)("matAutocomplete",e),o.xp6(4),o.Q6J("ngForOf",o.lcZ(7,4,t.recipients$)),o.xp6(3),o.Q6J("ngForOf",t.displayedRecipients)}}class I{constructor(e){this.snackbar=e,this.makeLink=new o.vpe,this.shareLink=new o.vpe,this.link="",this.emails=[],this.emailFilter$=new m.X(""),this.showEmailSharing=!1,this._recipients$=new m.X([]),this.recipients$=(0,x.aj)([this._recipients$,this.emailFilter$]).pipe((0,Z.U)(([e,t])=>t?e.filter(e=>e&&e.toLowerCase().includes(t.toLowerCase())&&!this.displayedRecipients.includes(e)):[])),this.displayedRecipients=[],this.emailFilter=""}handleShare(e){this.shareLink.emit(e),this.showEmailSharing=!1}handleEnter(e){e&&(this.displayedRecipients=Array.from(new Set([...this.displayedRecipients,e])),this.emailFilter="")}removeRecipient(e,t){e.stopPropagation(),this.displayedRecipients=this.displayedRecipients.filter(e=>e!==t)}addRecipient(e){e&&(this.displayedRecipients.push(e),this.emailFilter="")}toggleEmailSharing(){this.showEmailSharing=!this.showEmailSharing}onCopy(){this.snackbar.open("Share link was copied!","",{duration:3e3})}ngOnInit(){this._recipients$.next(this.emails)}}I.\u0275fac=function(e){return new(e||I)(o.Y36(a.ux))},I.\u0275cmp=o.Xpm({type:I,selectors:[["app-share-settings"]],inputs:{link:"link",emails:"emails"},outputs:{makeLink:"makeLink",shareLink:"shareLink"},decls:10,vars:3,consts:[[1,"flex","wrap"],[1,"mr-3"],["cta","outlined","class","flex align-center justify-center mobile-mb-2",3,"click",4,"ngIf"],["cta","outlined","class","flex align-center justify-center mobile-mb-2",3,"cdkCopyToClipboard","click",4,"ngIf"],[1,"email-share"],["cta","outlined",1,"flex","align-center","justify-center",3,"click"],["key","share",1,"mr-1"],["class","email-share-toggable",4,"ngIf"],["cta","outlined",1,"flex","align-center","justify-center","mobile-mb-2",3,"click"],["key","link",1,"mr-1"],["cta","outlined",1,"flex","align-center","justify-center","mobile-mb-2",3,"cdkCopyToClipboard","click"],[1,"email-share-toggable"],["type","text","placeholder","Search recipients",1,"input",3,"ngModel","matAutocomplete","keyup.enter","ngModelChange"],["input",""],[3,"optionSelected"],["auto","matAutocomplete"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-2"],["class","flex align-center",4,"ngFor","ngForOf"],[1,"separator","mt-3"],[1,"mt-4"],["cta","outlined","secondary","",3,"click"],[3,"value"],[1,"flex","align-center"],[1,"mr-1"],[1,"ghost-button","remove-recipient",3,"click"],["key","remove"]],template:function(e,t){1&e&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.YNc(2,C,4,0,"button",2),o.YNc(3,L,4,1,"button",3),o.qZA(),o.TgZ(4,"div",4),o.TgZ(5,"button",5),o.NdJ("click",function(){return t.toggleEmailSharing()}),o._UZ(6,"svg-icon",6),o.TgZ(7,"span"),o._uU(8,"Share with"),o.qZA(),o.qZA(),o.YNc(9,j,14,6,"div",7),o.qZA(),o.qZA()),2&e&&(o.xp6(2),o.Q6J("ngIf",!t.link),o.xp6(1),o.Q6J("ngIf",t.link),o.xp6(6),o.Q6J("ngIf",t.showEmailSharing))},directives:[g.O5,S.bk,U.i3,r.Fj,O.ZL,r.JJ,r.On,O.XC,g.sg,w.ey],pipes:[g.Ov],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   .email-share[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:relative}[_nghost-%COMP%]   .email-share-toggable[_ngcontent-%COMP%]{position:absolute;top:50px;background-color:#fff;min-width:300px;padding:var(--space-3);box-shadow:0 4px 8px 0 #0003}@media (max-width:48em){[_nghost-%COMP%]   .email-share-toggable[_ngcontent-%COMP%]{min-width:100%}}[_nghost-%COMP%]   .clear-date[_ngcontent-%COMP%], [_nghost-%COMP%]   .remove-recipient[_ngcontent-%COMP%]{color:var(--secondary-color)}"]}),(0,_.gn)([(0,a.GU)((e,t)=>{!1===e&&(t.emailFilter="",t.displayedRecipients=[])})],I.prototype,"showEmailSharing",void 0),(0,_.gn)([(0,a.GU)((e,t)=>{t.emailFilter$.next(e)})],I.prototype,"emailFilter",void 0);const M=function(e){return["../../..","itinerary",e]};function F(e,t){if(1&e&&(o.TgZ(0,"tr"),o.TgZ(1,"td"),o.TgZ(2,"a",3),o._uU(3),o.qZA(),o.qZA(),o.TgZ(4,"td",4),o._uU(5),o.ALo(6,"currency"),o.qZA(),o.TgZ(7,"td",4),o._uU(8),o.qZA(),o.TgZ(9,"td",4),o._uU(10),o.ALo(11,"currency"),o.qZA(),o.qZA()),2&e){const e=t.$implicit,i=o.oxw();o.xp6(2),o.Q6J("routerLink",o.VKq(12,M,e.id)),o.xp6(1),o.AsE("",e.provider," / ",e.confirmationNumber,""),o.xp6(2),o.hij(" ",o.xi3(6,6,e.price,e.currencyCode)," "),o.xp6(3),o.Oqu(e.participants.length),o.xp6(2),o.hij(" ",o.xi3(11,9,i.getBookingTotal(e),e.currencyCode)," ")}}let J=(()=>{class e{constructor(){this.bookings=[]}getBookingTotal(e){return(e.participants.length*e.price).toFixed(2)}getAllBookingsTotal(e){return e.reduce((e,t)=>e+t.participants.length*t.price,0).toFixed(2)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-price-report-visualization"]],inputs:{bookings:"bookings"},decls:19,vars:5,consts:[[1,"mb-4","table"],[4,"ngFor","ngForOf"],[1,"bold","mr-2"],["cta","tertiary",3,"routerLink"],[1,"centered"]],template:function(e,t){1&e&&(o.TgZ(0,"table",0),o.TgZ(1,"thead"),o.TgZ(2,"tr"),o.TgZ(3,"th"),o._uU(4,"Booking"),o.qZA(),o.TgZ(5,"th"),o._uU(6,"Price"),o.qZA(),o.TgZ(7,"th"),o._uU(8,"Quantity"),o.qZA(),o.TgZ(9,"th"),o._uU(10,"Total"),o.qZA(),o.qZA(),o.qZA(),o.TgZ(11,"tbody"),o.YNc(12,F,12,14,"tr",1),o.qZA(),o.qZA(),o.TgZ(13,"div"),o.TgZ(14,"span",2),o._uU(15,"Total: "),o.qZA(),o.TgZ(16,"span"),o._uU(17),o.ALo(18,"currency"),o.qZA(),o.qZA()),2&e&&(o.xp6(12),o.Q6J("ngForOf",t.bookings),o.xp6(5),o.Oqu(o.xi3(18,2,t.getAllBookingsTotal(t.bookings),null==t.bookings[0]?null:t.bookings[0].currencyCode)))},directives:[g.sg,n.yS],pipes:[g.H9],styles:[".table[_ngcontent-%COMP%]{table-layout:auto;width:100%;border-collapse:collapse}.table[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid var(--secondary-color)}.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:var(--space-1)}.table[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]{text-align:center}"]}),e})();const N=function(){return[]};function E(e,t){if(1&e){const e=o.EpF();o.TgZ(0,"main",1),o._UZ(1,"app-authenticated-header"),o.TgZ(2,"header",2),o.TgZ(3,"span"),o.TgZ(4,"a",3),o._uU(5," Dashboard "),o.qZA(),o.qZA(),o.TgZ(6,"span",4),o._uU(7," / "),o.qZA(),o.TgZ(8,"span"),o.TgZ(9,"a",5),o._uU(10),o.ALo(11,"async"),o.qZA(),o.qZA(),o.TgZ(12,"span",4),o._uU(13," / "),o.qZA(),o.TgZ(14,"span"),o.TgZ(15,"a",6),o._uU(16,"Sharing center"),o.qZA(),o.qZA(),o.TgZ(17,"span",4),o._uU(18," / "),o.qZA(),o.TgZ(19,"h1",7),o._uU(20,"Price report"),o.qZA(),o.qZA(),o.TgZ(21,"article",8),o.TgZ(22,"app-share-settings",9),o.NdJ("makeLink",function(){const t=o.CHM(e).ngIf;return o.oxw().handleSave(t)})("shareLink",function(t){const i=o.CHM(e).ngIf;return o.oxw().handleShare(t,i)}),o.ALo(23,"async"),o.qZA(),o._UZ(24,"app-price-report-visualization",10),o.qZA(),o.qZA()}if(2&e){const e=t.ngIf,i=o.oxw();let n;o.xp6(10),o.Oqu(null==(n=o.lcZ(11,4,i.activeProject$))?null:n.name),o.xp6(12),o.Q6J("link",i.link)("emails",o.lcZ(23,6,i.participantEmails$)||o.DdM(8,N)),o.xp6(2),o.Q6J("bookings",e)}}let R=(()=>{class e{constructor(e,t,i,n){this.projectService=e,this.dataService=t,this.sharingService=i,this.snackbar=n,this.bookings$=(0,b.of)([]),this.participantEmails$=(0,b.of)([]),this.link="",this.activeProject$=this.projectService.getActiveProject(),this.bookings$=this.dataService.getFilteredBookings().pipe((0,Z.U)(this.dataService.sortBookings)),this.participantEmails$=this.dataService.getFilteredBookings().pipe((0,y.M)(this.dataService.getParticipants()),(0,Z.U)(([e,t])=>{const i=Array.from(new Set(e.reduce((e,t)=>[...e,...t.participants],[])));return t.filter(e=>i.includes(e.id)).map(e=>e.email)}))}handleSave(e){const t=this.sharingService.generatePriceReportLink(e.map(e=>e.id));this.link=t}handleShare(e,t){this.link||(this.link=this.sharingService.generatePriceReportLink(t.map(e=>e.id))),this.sharingService.generateEmail(this.link,e),this.snackbar.open("Email sent!","",{duration:3e3})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.ProjectsService),o.Y36(l.ProjectDataService),o.Y36(f),o.Y36(a.ux))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-share-price-report"]],decls:2,vars:3,consts:[["class","centered-content padded-container",4,"ngIf"],[1,"centered-content","padded-container"],[1,"mb-2","mt-1","flex","align-center","wrap","mobile-ml-1","mobile-mr-1"],["routerLink","../../../../","cta","tertiary"],[1,"ml-1","mr-1"],["routerLink","../../../","cta","tertiary"],["routerLink","../../","cta","tertiary"],[1,"h5"],[1,"mobile-ml-1","mobile-mr-1"],[1,"block","mb-3",3,"link","emails","makeLink","shareLink"],[3,"bookings"]],template:function(e,t){1&e&&(o.YNc(0,E,25,9,"main",0),o.ALo(1,"async")),2&e&&o.Q6J("ngIf",o.lcZ(1,1,t.bookings$))},directives:[g.O5,p.W,n.yS,I,J],pipes:[g.Ov],styles:[""]}),e})();var Y=i(8513);function Q(e,t){if(1&e&&(o.TgZ(0,"header",4),o.TgZ(1,"h1",5),o._uU(2,"Price report"),o.qZA(),o.TgZ(3,"span"),o._uU(4),o.ALo(5,"date"),o.qZA(),o.qZA()),2&e){const e=o.oxw(2);o.xp6(4),o.hij("Created at: ",o.lcZ(5,1,e.sharedItem.createdAt),"")}}function D(e,t){if(1&e&&(o.TgZ(0,"main",1),o._UZ(1,"app-public-header"),o.YNc(2,Q,6,3,"header",2),o._UZ(3,"app-price-report-visualization",3),o.qZA()),2&e){const e=t.ngIf,i=o.oxw();o.xp6(2),o.Q6J("ngIf",i.sharedItem),o.xp6(1),o.Q6J("bookings",e)}}const X=[{path:"",component:T,canActivate:[s.WithAuthGuard]},{path:"itinerary/send",component:u,canActivate:[s.WithAuthGuard]},{path:"itinerary/view/:token",component:h},{path:"booking/send",component:q,canActivate:[s.WithAuthGuard]},{path:"pricing/send",component:R,canActivate:[s.WithAuthGuard]},{path:"pricing/:shareId",component:(()=>{class e{constructor(e,t,i){this.dataService=e,this.sharingService=t,this.appRouter=i,this.bookings$=(0,b.of)([]),this.bookings$=this.dataService.getBookings().pipe((0,Z.U)(e=>{const t=this.appRouter.getShareId(),i=this.sharingService.getSharedItem(t);return this.sharedItem=i,e.filter(e=>i.bookingIds.includes(e.id))}))}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(l.ProjectDataService),o.Y36(f),o.Y36(a.So))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-price-report"]],decls:2,vars:3,consts:[["class","centered-content padded-container",4,"ngIf"],[1,"centered-content","padded-container"],["class","mb-3 mt-3",4,"ngIf"],[1,"mobile-ml-1","mobile-mr-1","block",3,"bookings"],[1,"mb-3","mt-3"],[1,"h3"]],template:function(e,t){1&e&&(o.YNc(0,D,4,2,"main",0),o.ALo(1,"async")),2&e&&o.Q6J("ngIf",o.lcZ(1,1,t.bookings$))},directives:[g.O5,Y.E,J],pipes:[g.Ov,g.uU],styles:[""]}),e})()},{path:"**",redirectTo:""}];let B=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({providers:[f],imports:[[a.m8,n.Bz.forChild(X),c.p,r.u5],n.Bz]}),e})()}}]);