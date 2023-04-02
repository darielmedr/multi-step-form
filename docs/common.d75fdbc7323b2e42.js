"use strict";(self.webpackChunkmulti_step_form=self.webpackChunkmulti_step_form||[]).push([[592],{4591:(l,a,e)=>{e.d(a,{a:()=>p});var t=e(1135),c=e(9646),s=e(590),o=e(8505),n=e(3900),i=e(515),d=e(4004),m=e(8274);let p=(()=>{class u{constructor(){this.addons=[{id:1,name:"Online service",description:"Acces to multiplayer games",price:1,isSelected:!1},{id:2,name:"Larger storage",description:"Extra 1TB of cloud save",price:2,isSelected:!1},{id:3,name:"Customizable profile",description:"Custom theme on your profile",price:2,isSelected:!1}],this.addons$=new t.X([]),this.canFetch=!0,this.addonsState=new Map}getAddons(){return this.addons$.asObservable()}fetchAddons(){return this.canFetch?(0,c.of)(this.addons).pipe((0,s.P)(),(0,o.b)(()=>this.disableFetch()),(0,o.b)(r=>this.initAddonsState(r)),(0,o.b)(r=>this.emitAddons(r)),(0,n.w)(()=>i.E)):i.E}updateAddonsState(r){this.addonsState.get(r.id)?.isSelected!==r.isSelected&&(this.addonsState.set(r.id,r),this.emitAddons(this.getCurrentAddonsState()))}getSelectedAddons(){return this.addons$.asObservable().pipe((0,d.U)(r=>r.filter(_=>_.isSelected)))}disableFetch(){this.canFetch=!1}initAddonsState(r){this.addonsState=new Map(r.map(_=>[_.id,_]))}emitAddons(r){this.addons$.next(r)}getCurrentAddonsState(){return Array.from(this.addonsState.values())}}return u.\u0275fac=function(r){return new(r||u)},u.\u0275prov=m.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()},2821:(l,a,e)=>{e.d(a,{R:()=>t});const t={id:0,name:"",description:"",price:0,isSelected:!1}},85:(l,a,e)=>{e.d(a,{G:()=>o});var t=e(1135),c=e(9646),s=e(8274);let o=(()=>{class n{constructor(){this.plans=[{id:1,name:"Arcade",price:9,logo:"./assets/images/icon-arcade.svg",discountInfo:"2 months free"},{id:2,name:"Advanced",price:12,logo:"./assets/images/icon-advanced.svg",discountInfo:"2 months free"},{id:3,name:"Pro",price:15,logo:"./assets/images/icon-pro.svg",discountInfo:"2 months free"}],this.selectedPlan$=new t.X(this.plans[0]),this.paymentFrequency$=new t.X("monthly")}getPlans(){return(0,c.of)(this.plans)}getSelectedPlan(){return this.selectedPlan$.asObservable()}selectPlan(d){return this.selectedPlan$.next(d)}getPaymentFrequency(){return this.paymentFrequency$.asObservable()}selectPaymentFrequency(d){return this.paymentFrequency$.next(d)}}return n.\u0275fac=function(d){return new(d||n)},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},1391:(l,a,e)=>{e.d(a,{V:()=>t});const t={id:0,name:"",price:0,logo:"",discountInfo:""}},5476:(l,a,e)=>{e.d(a,{B:()=>c});var t=e(8274);let c=(()=>{class s{constructor(){this.title="",this.description=""}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-heading"]],inputs:{title:"title",description:"description"},decls:4,vars:2,consts:[[1,"title"],[1,"description"]],template:function(n,i){1&n&&(t.TgZ(0,"h1",0),t._uU(1),t.qZA(),t.TgZ(2,"p",1),t._uU(3),t.qZA()),2&n&&(t.xp6(1),t.Oqu(i.title),t.xp6(2),t.Oqu(i.description))},styles:[".title[_ngcontent-%COMP%]{color:var(--color-primary-marine-blue);font-size:var(--font-size-title);font-weight:var(--font-weight-bold);margin-bottom:.5em}.description[_ngcontent-%COMP%]{color:var(--color-neutral-cool-gray);font-size:calc(.6 * var(--font-size-title))}"],changeDetection:0}),s})()},1401:(l,a,e)=>{e.d(a,{g:()=>c});var t=e(8274);let c=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({}),s})()},6690:(l,a,e)=>{e.d(a,{d:()=>c});var t=e(8274);let c=(()=>{class s{constructor(){this.frequencyMap={monthly:"mo",yearly:"yr"},this.currencySymbol="$"}transform(n,i){const d=this.calculatePrice(n,i);return`${this.currencySymbol}${d}/${this.frequencyMap[i]}`}calculatePrice(n,i){return this.isYearlyPayment(i)?10*n:n}isYearlyPayment(n){return"yearly"===n}}return s.\u0275fac=function(n){return new(n||s)},s.\u0275pipe=t.Yjl({name:"price",type:s,pure:!0,standalone:!0}),s})()},4235:(l,a,e)=>{function t(c){return c instanceof HTMLInputElement}e.d(a,{a:()=>t})}}]);