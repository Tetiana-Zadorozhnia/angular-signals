import './polyfills.server.mjs';
import{B as b,C as S,D as I,E as F,F as P,G as A,J as j,P as k,a as m,b as d,c as l,d as f,e as h,f as r,g,h as v,i as u,j as x,k as C,l as _,m as a,n as p,o as y,p as M,q as c,r as s,s as w,z as O}from"./chunk-4JM563QO.mjs";var E=(()=>{let t=class t{constructor(i){this.http=i,this.apiKey="live_kMyj7VwZO2qddfrmZCe95Wu7MOkydLFm8UWhbX5dB220tqMmmq3hyIdyx6EYqtJu",this.apiUrl="https://api.thecatapi.com/v1",this.cats=h([])}fetchCats(){let i=`${this.apiUrl}/images/search?limit=10&api_key=${this.apiKey}`;this.http.get(i).subscribe(n=>{this.cats.set(n)})}};t.\u0275fac=function(n){return new(n||t)(d(S))},t.\u0275prov=m({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var W=(e,t)=>t.id;function D(e,t){if(e&1&&c(0),e&2){let o=M().$implicit;s(" Breed: ",o.breeds[0].name," ")}}function K(e,t){e&1&&c(0," Breed: - ")}function Z(e,t){if(e&1&&(a(0,"div",2),y(1,"img",3),a(2,"div",4)(3,"p"),c(4),p(),a(5,"p"),c(6),p(),a(7,"p"),v(8,D,1,1)(9,K,1,0),p()()()),e&2){let o=t.$implicit;r(),u("src",o.url,f),r(3),s("Width: ",o.width,""),r(2),s("Height: ",o.height,""),r(2),x(8,o.breeds&&o.breeds.length>0?8:9)}}var T=(()=>{let t=class t{constructor(i){this.catService=i,this.cats=this.catService.cats}ngOnInit(){this.catService.fetchCats()}};t.\u0275fac=function(n){return new(n||t)(g(E))},t.\u0275cmp=l({type:t,selectors:[["app-root"]],standalone:!0,features:[w],decls:4,vars:0,consts:[[1,"container"],[1,"cat-container"],[1,"cat-item"],["alt","cat.id",1,"cat-image",3,"src"],[1,"cat-details"],["class","cat-item"]],template:function(n,U){n&1&&(a(0,"div",0)(1,"div",1),C(2,Z,10,4,"div",5,W),p()()),n&2&&(r(2),_(U.cats()))},dependencies:[b],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;margin-top:30px;margin-left:70px}.cat-container[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.cat-item[_ngcontent-%COMP%]{width:200px;margin-right:20px}.cat-image[_ngcontent-%COMP%]{width:100%;height:auto}.cat-details[_ngcontent-%COMP%]{margin-top:10px}.cat-details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:5px 0}"]});let e=t;return e})();var $=[];var q={providers:[k($),A(),I(F())]};var z={providers:[j()]},H=O(q,z);var J=()=>P(T,H),dt=J;export{dt as a};