import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.9bc09dc8.js";const b=JSON.parse('{"title":"对象的toString()和valueOf()方法","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/对象的toString()和valueOf()方法.md","filePath":"JavaScript/对象的toString()和valueOf()方法.md"}'),l={name:"JavaScript/对象的toString()和valueOf()方法.md"},p=n(`<h1 id="对象的tostring-和valueof-方法" tabindex="-1">对象的toString()和valueOf()方法 <a class="header-anchor" href="#对象的tostring-和valueof-方法" aria-label="Permalink to &quot;对象的toString()和valueOf()方法&quot;">​</a></h1><h2 id="对象的tostring-方法" tabindex="-1">对象的toString()方法 <a class="header-anchor" href="#对象的tostring-方法" aria-label="Permalink to &quot;对象的toString()方法&quot;">​</a></h2><p>所有对象实例的toString()方法会返回一个固定的字符串<code>[object Object]</code>，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">({}.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">())  </span><span style="color:#6A737D;">// [object Object]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">({a:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, b:</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}.</span><span style="color:#B392F0;">toString</span><span style="color:#E1E4E8;">())  </span><span style="color:#6A737D;">// [object Object]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">({}.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">())  </span><span style="color:#6A737D;">// [object Object]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">({a:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, b:</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}.</span><span style="color:#6F42C1;">toString</span><span style="color:#24292E;">())  </span><span style="color:#6A737D;">// [object Object]</span></span></code></pre></div><p>当对象与对象相加，对象与字符串相加时，会隐式调用toString()，如下：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">({}</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">{})  </span><span style="color:#6A737D;">//   [object Object][object Object]</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(({}</span><span style="color:#F97583;">+</span><span style="color:#E1E4E8;">{}).</span><span style="color:#79B8FF;">length</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">({}</span><span style="color:#F97583;">+</span><span style="color:#9ECBFF;">&#39;Hello&#39;</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// [object Object]Hello</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">({}</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">{})  </span><span style="color:#6A737D;">//   [object Object][object Object]</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(({}</span><span style="color:#D73A49;">+</span><span style="color:#24292E;">{}).</span><span style="color:#005CC5;">length</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// 30</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">({}</span><span style="color:#D73A49;">+</span><span style="color:#032F62;">&#39;Hello&#39;</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// [object Object]Hello</span></span></code></pre></div><h2 id="对象的valueof-方法" tabindex="-1">对象的valueOf()方法 <a class="header-anchor" href="#对象的valueof-方法" aria-label="Permalink to &quot;对象的valueOf()方法&quot;">​</a></h2><p>对象示例的valueOf()返回对象本身，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">({}.</span><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">())  </span><span style="color:#6A737D;">//  {}</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">({a:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">, b:</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}.</span><span style="color:#B392F0;">valueOf</span><span style="color:#E1E4E8;">())  </span><span style="color:#6A737D;">//  { a: 1, b: 2 }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">({}.</span><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">())  </span><span style="color:#6A737D;">//  {}</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">({a:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">, b:</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}.</span><span style="color:#6F42C1;">valueOf</span><span style="color:#24292E;">())  </span><span style="color:#6A737D;">//  { a: 1, b: 2 }</span></span></code></pre></div>`,9),e=[p];function t(c,r,y,E,i,d){return a(),o("div",null,e)}const h=s(l,[["render",t]]);export{b as __pageData,h as default};
