import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.3afb20c3.js";const g=JSON.parse('{"title":"map的实例方法","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/map的实例方法.md","filePath":"JavaScript/map的实例方法.md"}'),l={name:"JavaScript/map的实例方法.md"},o=p(`<h1 id="map的实例方法" tabindex="-1">map的实例方法 <a class="header-anchor" href="#map的实例方法" aria-label="Permalink to &quot;map的实例方法&quot;">​</a></h1><p>要增加或修改Map实例的键值，使用set()方法，允许链式操作，如果set()方法中的键名已在map中存在，那么就会修改键对应的值，否则就是增加键值，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">([ [</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">],[</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">] ])</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//修改键对应的值</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// 增加键值</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;d&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">4</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;f&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">6</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//链式操作</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map)</span></span>
<span class="line"><span style="color:#6A737D;">//=&gt; Map(6) { &#39;a&#39; =&gt; 1, &#39;b&#39; =&gt; 3, &#39;c&#39;=&gt;3,&#39;d&#39;=&gt;4,&#39;e&#39;=&gt;5,&#39;f&#39;=&gt;6}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">([ [</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">],[</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">] ])</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//修改键对应的值</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// 增加键值</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;d&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">4</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">5</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;f&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">6</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//链式操作</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map)</span></span>
<span class="line"><span style="color:#6A737D;">//=&gt; Map(6) { &#39;a&#39; =&gt; 1, &#39;b&#39; =&gt; 3, &#39;c&#39;=&gt;3,&#39;d&#39;=&gt;4,&#39;e&#39;=&gt;5,&#39;f&#39;=&gt;6}</span></span></code></pre></div><p>使用has()方法可以查询map是否存在某个键：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 承接上文的map</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">has</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39; a &#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//   =&gt; true</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">( </span><span style="color:#9ECBFF;">&#39; aa &#39;</span><span style="color:#E1E4E8;"> )  </span><span style="color:#6A737D;">//  =&gt; false</span></span>
<span class="line"><span style="color:#B392F0;">使用get</span><span style="color:#E1E4E8;">()方法可以通过键查询对应的值，如果键不存在，则返回undefined：</span></span>
<span class="line"><span style="color:#6A737D;">// 承接上文的map</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">)     </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;aa&#39;</span><span style="color:#E1E4E8;">)    </span><span style="color:#6A737D;">//  undefined</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 承接上文的map</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">has</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39; a &#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//   =&gt; true</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">( </span><span style="color:#032F62;">&#39; aa &#39;</span><span style="color:#24292E;"> )  </span><span style="color:#6A737D;">//  =&gt; false</span></span>
<span class="line"><span style="color:#6F42C1;">使用get</span><span style="color:#24292E;">()方法可以通过键查询对应的值，如果键不存在，则返回undefined：</span></span>
<span class="line"><span style="color:#6A737D;">// 承接上文的map</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">)     </span><span style="color:#6A737D;">// 1</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;aa&#39;</span><span style="color:#24292E;">)    </span><span style="color:#6A737D;">//  undefined</span></span></code></pre></div><p>使用delete()方法删除map中的键，删除成功返回true，删除不成功(键不存在)则返回false，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 承接上文的map</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;f&#39;</span><span style="color:#E1E4E8;">)    </span><span style="color:#6A737D;">// =&gt;true</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">delete</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;f&#39;</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// =&gt;false，键已经在上一步被删除了</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 承接上文的map</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;f&#39;</span><span style="color:#24292E;">)    </span><span style="color:#6A737D;">// =&gt;true</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">delete</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;f&#39;</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// =&gt;false，键已经在上一步被删除了</span></span></code></pre></div><p>要取得map的键值对的个数，使用size属性：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 承接上文</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map.size)   </span><span style="color:#6A737D;">// =&gt;5</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 承接上文</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map.size)   </span><span style="color:#6A737D;">// =&gt;5</span></span></code></pre></div><p>如果要清空map中所有的键值对，使用clear()方法，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 承接上文</span></span>
<span class="line"><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">clear</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map.size)   </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map)  </span><span style="color:#6A737D;">// Map(0) {}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 承接上文</span></span>
<span class="line"><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">clear</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map.size)   </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map)  </span><span style="color:#6A737D;">// Map(0) {}</span></span></code></pre></div>`,11),e=[o];function t(c,r,y,E,i,d){return a(),n("div",null,e)}const m=s(l,[["render",t]]);export{g as __pageData,m as default};
