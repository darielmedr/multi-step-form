"use strict";(self.webpackChunkmulti_step_form=self.webpackChunkmulti_step_form||[]).push([[657],{4657:(S,r,d)=>{d.r(r),d.d(r,{AddonsModule:()=>x});var s=d(6895),p=d(3698),l=d(9751),n=d(8274),u=d(4591),m=d(85),g=d(4235),h=d(2821),y=d(6690);const f=function(e){return{selected:e}};let A=(()=>{class e{constructor(){this.addon=h.R,this.paymentFrequency="monthly",this.changed=new n.vpe}change(o){const t=!!(0,g.a)(o)&&o.checked;this.addon={...this.addon,isSelected:t},this.changed.emit(this.addon)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-addon"]],inputs:{addon:"addon",paymentFrequency:"paymentFrequency"},outputs:{changed:"changed"},decls:11,vars:10,consts:[[1,"addon",3,"ngClass"],["type","checkbox",3,"checked","change"],[1,"info"],[1,"text"],[1,"name"],[1,"description"],[1,"price"]],template:function(o,t){1&o&&(n.TgZ(0,"label",0)(1,"input",1),n.NdJ("change",function(i){return t.change(i.target)}),n.qZA(),n.TgZ(2,"div",2)(3,"div",3)(4,"p",4),n._uU(5),n.qZA(),n.TgZ(6,"p",5),n._uU(7),n.qZA()(),n.TgZ(8,"p",6),n._uU(9),n.ALo(10,"price"),n.qZA()()()),2&o&&(n.Q6J("ngClass",n.VKq(8,f,t.addon.isSelected)),n.xp6(1),n.Q6J("checked",t.addon.isSelected),n.xp6(4),n.Oqu(t.addon.name),n.xp6(2),n.Oqu(t.addon.description),n.xp6(2),n.hij("+",n.xi3(10,5,t.addon.price,t.paymentFrequency),""))},dependencies:[s.mk,y.d],styles:[".addon[_ngcontent-%COMP%]{display:flex;gap:2rem;padding:2rem;border:solid var(--color-neutral-cool-gray) 2px;border-radius:8px;color:var(--color-neutral-cool-gray)}.addon.selected[_ngcontent-%COMP%]{border-color:var(--color-primary-marine-blue)}.addon[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{transform:scale(1.8);padding:10px}.addon[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;gap:2rem}.addon[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.4rem}.addon[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.2em;font-weight:var(--font-weight-medium);color:var(--color-primary-marine-blue)}.addon[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{color:var(--color-neutral-cool-gray)}.addon[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:var(--color-primary-purplish-blue)}"],changeDetection:0}),e})();var C=d(5476);function v(e,a){if(1&e){const o=n.EpF();n.TgZ(0,"app-addon",3),n.NdJ("changed",function(c){n.CHM(o);const i=n.oxw();return n.KtG(i.updateAddonsState(c))}),n.ALo(1,"async"),n.qZA()}if(2&e){const o=a.$implicit,t=n.oxw();let c;n.Q6J("addon",o)("paymentFrequency",null!==(c=n.lcZ(1,2,t.paymentFrequency$))&&void 0!==c?c:"monthly")}}const M=[{path:"",component:(()=>{class e{constructor(o,t){this.addonService=o,this.planSelectionService=t,this.addons$=new l.y,this.paymentFrequency$=new l.y,this.title="Pick add-ons",this.description="Add-ons help enhance your gaming experience."}ngOnInit(){this.addons$=this.addonService.getAddons(),this.paymentFrequency$=this.planSelectionService.getPaymentFrequency(),this.addonService.fetchAddons().subscribe()}trackByFn(o,t){return t.id}updateAddonsState(o){this.addonService.updateAddonsState(o)}}return e.\u0275fac=function(o){return new(o||e)(n.Y36(u.a),n.Y36(m.G))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-addons"]],decls:4,vars:6,consts:[[3,"title","description"],[1,"addons"],[3,"addon","paymentFrequency","changed",4,"ngFor","ngForOf","ngForTrackBy"],[3,"addon","paymentFrequency","changed"]],template:function(o,t){1&o&&(n._UZ(0,"app-heading",0),n.TgZ(1,"section",1),n.YNc(2,v,2,4,"app-addon",2),n.ALo(3,"async"),n.qZA()),2&o&&(n.Q6J("title",t.title)("description",t.description),n.xp6(2),n.Q6J("ngForOf",n.lcZ(3,4,t.addons$))("ngForTrackBy",t.trackByFn))},dependencies:[s.sg,A,C.B,s.Ov],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:var(--heading-bottom-spacing)}.addons[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem}"]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[p.Bz.forChild(M),p.Bz]}),e})(),F=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({}),e})();var P=d(1401);let x=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.ez,O,F,P.g]}),e})()}}]);