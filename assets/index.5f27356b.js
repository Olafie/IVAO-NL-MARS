(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function l(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=l(n);fetch(n.href,r)}})();function c(){}function R(e){return e()}function S(){return Object.create(null)}function y(e){e.forEach(R)}function E(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function q(e){return Object.keys(e).length===0}function b(e,t,l){e.insertBefore(t,l||null)}function m(e){e.parentNode.removeChild(e)}function C(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function I(){return N(" ")}function D(e){return Array.from(e.childNodes)}let $;function f(e){$=e}const u=[],w=[],h=[],O=[],F=Promise.resolve();let g=!1;function B(){g||(g=!0,F.then(L))}function x(e){h.push(e)}const _=new Set;let p=0;function L(){const e=$;do{for(;p<u.length;){const t=u[p];p++,f(t),P(t.$$)}for(f(null),u.length=0,p=0;w.length;)w.pop()();for(let t=0;t<h.length;t+=1){const l=h[t];_.has(l)||(_.add(l),l())}h.length=0}while(u.length);for(;O.length;)O.pop()();g=!1,_.clear(),f(e)}function P(e){if(e.fragment!==null){e.update(),y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(x)}}const U=new Set;function V(e,t){e&&e.i&&(U.delete(e),e.i(t))}function H(e,t,l,o){const{fragment:n,after_update:r}=e.$$;n&&n.m(t,l),o||x(()=>{const a=e.$$.on_mount.map(R).filter(E);e.$$.on_destroy?e.$$.on_destroy.push(...a):y(a),e.$$.on_mount=[]}),r.forEach(x)}function K(e,t){const l=e.$$;l.fragment!==null&&(y(l.on_destroy),l.fragment&&l.fragment.d(t),l.on_destroy=l.fragment=null,l.ctx=[])}function z(e,t){e.$$.dirty[0]===-1&&(u.push(e),B(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,l,o,n,r,a,T=[-1]){const d=$;f(e);const s=e.$$={fragment:null,ctx:[],props:r,update:c,not_equal:n,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:S(),dirty:T,skip_bound:!1,root:t.target||d.$$.root};a&&a(s.root);let v=!1;if(s.ctx=l?l(e,t.props||{},(i,k,...j)=>{const A=j.length?j[0]:k;return s.ctx&&n(s.ctx[i],s.ctx[i]=A)&&(!s.skip_bound&&s.bound[i]&&s.bound[i](A),v&&z(e,i)),k}):[],s.update(),v=!0,y(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const i=D(t.target);s.fragment&&s.fragment.l(i),i.forEach(m)}else s.fragment&&s.fragment.c();t.intro&&V(e.$$.fragment),H(e,t.target,t.anchor,t.customElement),L()}f(d)}class J{$destroy(){K(this,1),this.$destroy=c}$on(t,l){if(!E(l))return c;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(l),()=>{const n=o.indexOf(l);n!==-1&&o.splice(n,1)}}$set(t){this.$$set&&!q(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(e){let t,l,o;return{c(){t=C("title"),t.textContent="MARS",l=I(),o=C("main"),o.innerHTML=`<h1 class="svelte-jm6upy">IVAO NL MARS</h1> 
  <h3>MilATCC Airspace Reservation System</h3> 
  <p>After loading in, press control + F5 to renew the page</p> 
  <div class="form"><form action="mailto:olafblom4@gmail.com?subject=MARS Reservation" target="_blank" method="POST" enctype="text/plain"><label for="vid">VID: </label><input type="text" id="vid" name="VID" placeholder="580894" class="svelte-jm6upy"/> 
        <label for="Callsign">Callsign(s): </label><input type="text" id="CS" name="Callsign" placeholder="FIST01" class="svelte-jm6upy"/><br/> 
        <label for="date">Date: </label><input type="text" id="date" name="Date" placeholder="18 Oct 2022" class="svelte-jm6upy"/> 
        <label for="utcstart">UTC Start: </label><input type="text" id="utcs" name="UTC Start" placeholder="0900" class="svelte-jm6upy"/> 
        <label for="utcend">UTC Start: </label><input type="text" id="utce" name="UTC End" placeholder="1200" class="svelte-jm6upy"/><br/> 
        <label for="airspace">Requested Airspaces: </label><input type="text" id="dptra" name="Requested Airspace" placeholder="EHD-9" class="svelte-jm6upy"/> 
        <label for="Altitude">Requested Block: </label><input type="text" id="block" name="Requested Block" placeholder="FL055-FL245" class="svelte-jm6upy"/><br/> 
        <label for="on">Other notes: </label><input style="width: 300px;" type="text" id="notes" name="Other notes" placeholder="Mission name, requested targets, etc" class="svelte-jm6upy"/><br/> 
        <label for="email">Reply to: </label><input type="email" name="Reply to" placeholder="your@email.com" class="svelte-jm6upy"/> 
        <br/><input style="background-color: #004e83; border: 1px #00386a solid;" type="submit" value="Request Airspace" class="svelte-jm6upy"/></form></div>`},m(n,r){b(n,t,r),b(n,l,r),b(n,o,r)},p:c,i:c,o:c,d(n){n&&m(t),n&&m(l),n&&m(o)}}}class W extends J{constructor(t){super(),G(this,t,null,Q,M,{})}}new W({target:document.getElementById("app")});
