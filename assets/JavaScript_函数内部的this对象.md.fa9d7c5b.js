import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.3afb20c3.js";const F=JSON.parse('{"title":"函数内部的this对象","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/函数内部的this对象.md","filePath":"JavaScript/函数内部的this对象.md"}'),l={name:"JavaScript/函数内部的this对象.md"},o=p(`<h1 id="函数内部的this对象" tabindex="-1">函数内部的this对象 <a class="header-anchor" href="#函数内部的this对象" aria-label="Permalink to &quot;函数内部的this对象&quot;">​</a></h1><p>this，顾名思义，就是“这个”。</p><p>this被用在对象的方法中，表示“这个对象”。</p><p>函数可以被用作对象的方法。同一个函数，被不同对象调用时，上下文是不一样的，this指代调用的上下文对象。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">sayName</span><span style="color:#E1E4E8;">(){</span></span>
<span class="line"><span style="color:#E1E4E8;">	console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">\`I am \${</span><span style="color:#79B8FF;">this</span><span style="color:#9ECBFF;">.</span><span style="color:#E1E4E8;">name</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">)   </span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">zhangsan</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	name: </span><span style="color:#9ECBFF;">&#39;Zhang San&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	sayName: sayName</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">lisi</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	name : </span><span style="color:#9ECBFF;">&#39;Li Si&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">	sayName : sayName</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">zhangsan.</span><span style="color:#B392F0;">sayName</span><span style="color:#E1E4E8;">()   </span><span style="color:#6A737D;">// I am Zhang San  </span></span>
<span class="line"><span style="color:#E1E4E8;">lisi.</span><span style="color:#B392F0;">sayName</span><span style="color:#E1E4E8;">()   </span><span style="color:#6A737D;">// I am Li Si</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">sayName</span><span style="color:#24292E;">(){</span></span>
<span class="line"><span style="color:#24292E;">	console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">\`I am \${</span><span style="color:#005CC5;">this</span><span style="color:#032F62;">.</span><span style="color:#24292E;">name</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">)   </span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">zhangsan</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	name: </span><span style="color:#032F62;">&#39;Zhang San&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	sayName: sayName</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">lisi</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	name : </span><span style="color:#032F62;">&#39;Li Si&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">	sayName : sayName</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">zhangsan.</span><span style="color:#6F42C1;">sayName</span><span style="color:#24292E;">()   </span><span style="color:#6A737D;">// I am Zhang San  </span></span>
<span class="line"><span style="color:#24292E;">lisi.</span><span style="color:#6F42C1;">sayName</span><span style="color:#24292E;">()   </span><span style="color:#6A737D;">// I am Li Si</span></span></code></pre></div>`,5),e=[o];function t(c,r,E,y,i,h){return a(),n("div",null,e)}const _=s(l,[["render",t]]);export{F as __pageData,_ as default};
