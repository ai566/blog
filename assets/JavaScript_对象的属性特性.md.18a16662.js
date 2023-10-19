import{_ as s,o as a,c as n,Q as l}from"./chunks/framework.9bc09dc8.js";const d=JSON.parse('{"title":"对象的属性特性","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/对象的属性特性.md","filePath":"JavaScript/对象的属性特性.md"}'),p={name:"JavaScript/对象的属性特性.md"},o=l(`<h1 id="对象的属性特性" tabindex="-1">对象的属性特性 <a class="header-anchor" href="#对象的属性特性" aria-label="Permalink to &quot;对象的属性特性&quot;">​</a></h1><p>对象的属性的特性属于比较复杂但不是很难的知识点。</p><p>对象的成员分为属性和方法，而对象的属性又分为：</p><ul><li>数据属性</li><li>访问器属性</li></ul><h2 id="对象的数据属性" tabindex="-1">对象的数据属性 <a class="header-anchor" href="#对象的数据属性" aria-label="Permalink to &quot;对象的数据属性&quot;">​</a></h2><p>一般情况下，对象的属性就是数据属性，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {a:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,b:</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {a:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,b:</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">}</span></span></code></pre></div><p>这里，a、b均为数据属性。</p><p>对象的数据属性有4个特性：</p><ul><li><strong>value</strong>：表示该属性的值</li><li><strong>writable</strong>：表示该属性的值是否可以被修改</li><li><strong>enumerable</strong>：表示该属性是否可以通过for-in 循环遍历，默认情况下为true，如果将该特性设置为false，则for-in循环时将遍历不到该属性。</li><li><strong>configurable</strong>：表示是否可以通过delet删除该属性，或者是否可以修改其特性。</li></ul><p>这里要注意的是writable和configurable的区别，writable侧重于能不能修改属性的值，而configurable侧重于能不能配置该属性的特性。</p><h2 id="对象的属性的特性使用" tabindex="-1">对象的属性的特性使用 <a class="header-anchor" href="#对象的属性的特性使用" aria-label="Permalink to &quot;对象的属性的特性使用&quot;">​</a></h2><p>Object.defineProperty()方法来定义：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj,</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">	value:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  	writable:</span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,   </span><span style="color:#6A737D;">// 不能修改该属性的值</span></span>
<span class="line"><span style="color:#E1E4E8;">  	enumerable:</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  	configurable:</span><span style="color:#79B8FF;">true</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.a)    </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.a)  </span><span style="color:#6A737D;">//  1 ： 不会报错，但是静默失败</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj,</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">	value:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  	writable:</span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,   </span><span style="color:#6A737D;">// 不能修改该属性的值</span></span>
<span class="line"><span style="color:#24292E;">  	enumerable:</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  	configurable:</span><span style="color:#005CC5;">true</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.a)    </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">obj.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.a)  </span><span style="color:#6A737D;">//  1 ： 不会报错，但是静默失败</span></span></code></pre></div><h2 id="对象的访问器属性" tabindex="-1">对象的访问器属性 <a class="header-anchor" href="#对象的访问器属性" aria-label="Permalink to &quot;对象的访问器属性&quot;">​</a></h2><p>对象的访问器属性有4个特性：</p><ul><li><strong>get</strong>：获取函数，在读取该属性时调用。</li><li><strong>set</strong>：获取函数，在写入属性时被调用。</li><li><strong>enumerable</strong>：与数据属性的作用相同。</li><li><strong>configurable</strong>：与数据属性的作用相同。</li></ul><p>这里的难点是get和set，如果对属性只定义了get函数，那么该属性就是只读的，必须同时定义get和set函数才说明该属性是可写的，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {a:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj,</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a},</span></span>
<span class="line"><span style="color:#E1E4E8;">  	</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">value</span><span style="color:#E1E4E8;">){</span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> value}</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.b)    </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.a)  </span><span style="color:#6A737D;">//   2</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {a:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj,</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a},</span></span>
<span class="line"><span style="color:#24292E;">  	</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#E36209;">value</span><span style="color:#24292E;">){</span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> value}</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.b)    </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">obj.b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.a)  </span><span style="color:#6A737D;">//   2</span></span></code></pre></div><p>这里a是数据属性，b是a的访问器属性，可读可写。再来看一个只读访问器的例子：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">obj</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {a:</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">Object.</span><span style="color:#B392F0;">defineProperty</span><span style="color:#E1E4E8;">(obj,</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(){</span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.a},</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.b)    </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#E1E4E8;">obj.b </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(obj.a)  </span><span style="color:#6A737D;">//   1 ： 不会报错，但是静默失败</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">obj</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {a:</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">Object.</span><span style="color:#6F42C1;">defineProperty</span><span style="color:#24292E;">(obj,</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(){</span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.a},</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.b)    </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">obj.b </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(obj.a)  </span><span style="color:#6A737D;">//   1 ： 不会报错，但是静默失败</span></span></code></pre></div>`,21),e=[o];function t(c,r,E,y,i,b){return a(),n("div",null,e)}const g=s(p,[["render",t]]);export{d as __pageData,g as default};
