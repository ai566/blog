import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.9bc09dc8.js";const g=JSON.parse('{"title":"map到数组的转换","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/map到数组的转换.md","filePath":"JavaScript/map到数组的转换.md"}'),l={name:"JavaScript/map到数组的转换.md"},o=p(`<h1 id="map到数组的转换" tabindex="-1">map到数组的转换 <a class="header-anchor" href="#map到数组的转换" aria-label="Permalink to &quot;map到数组的转换&quot;">​</a></h1><p>对map实例使用下面三种方法，可以返回可迭代对象：</p><ul><li>keys()，返回由键组成的新数组</li><li>values()，返回由值组成的新数组</li><li>entries()，返回由键值组成的二维数组</li></ul><p>例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">map</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Map</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">).</span><span style="color:#B392F0;">set</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;c&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">())  </span><span style="color:#6A737D;">//=&gt;[Map Iterator] { &#39;a&#39;, &#39;b&#39;, &#39;c&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">())</span><span style="color:#6A737D;">// =&gt; [Map Iterator] { 1, 2, 3 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(map.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">())</span><span style="color:#6A737D;">// =&gt; [Map Entries] { [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">map</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Map</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">2</span><span style="color:#24292E;">).</span><span style="color:#6F42C1;">set</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;c&#39;</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">3</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">())  </span><span style="color:#6A737D;">//=&gt;[Map Iterator] { &#39;a&#39;, &#39;b&#39;, &#39;c&#39; }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map.</span><span style="color:#6F42C1;">values</span><span style="color:#24292E;">())</span><span style="color:#6A737D;">// =&gt; [Map Iterator] { 1, 2, 3 }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(map.</span><span style="color:#6F42C1;">entries</span><span style="color:#24292E;">())</span><span style="color:#6A737D;">// =&gt; [Map Entries] { [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] }</span></span></code></pre></div><p>使用Array.from()或者<code>[...iterator]</code>，就可以将上面几个可迭代对象转换为真正的数组：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 承接上文代码</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">keys</span><span style="color:#E1E4E8;">()])</span><span style="color:#6A737D;">// =&gt; [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39; ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">values</span><span style="color:#E1E4E8;">()]) </span><span style="color:#6A737D;">// =&gt; [ 1, 2, 3 ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">([</span><span style="color:#F97583;">...</span><span style="color:#E1E4E8;">map.</span><span style="color:#B392F0;">entries</span><span style="color:#E1E4E8;">()]) </span><span style="color:#6A737D;">// =&gt; [ [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] ]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 承接上文代码</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">keys</span><span style="color:#24292E;">()])</span><span style="color:#6A737D;">// =&gt; [ &#39;a&#39;, &#39;b&#39;, &#39;c&#39; ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">values</span><span style="color:#24292E;">()]) </span><span style="color:#6A737D;">// =&gt; [ 1, 2, 3 ]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">([</span><span style="color:#D73A49;">...</span><span style="color:#24292E;">map.</span><span style="color:#6F42C1;">entries</span><span style="color:#24292E;">()]) </span><span style="color:#6A737D;">// =&gt; [ [ &#39;a&#39;, 1 ], [ &#39;b&#39;, 2 ], [ &#39;c&#39;, 3 ] ]</span></span></code></pre></div>`,7),e=[o];function c(t,r,y,E,i,F){return a(),n("div",null,e)}const m=s(l,[["render",c]]);export{g as __pageData,m as default};
