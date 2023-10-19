import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.9bc09dc8.js";const C=JSON.parse('{"title":"数值类型","description":"","frontmatter":{},"headers":[],"relativePath":"JavaScript/数值类型.md","filePath":"JavaScript/数值类型.md"}'),o={name:"JavaScript/数值类型.md"},p=l(`<h1 id="数值类型" tabindex="-1">数值类型 <a class="header-anchor" href="#数值类型" aria-label="Permalink to &quot;数值类型&quot;">​</a></h1><p>数值类型是最常见的原始类型，包括整数、浮点数、无穷大（小）、NaN。</p><p>使用如下方式新建数值类型的变量：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">     </span><span style="color:#6A737D;">// 整数</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> floatNum </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0.1</span><span style="color:#E1E4E8;">   </span><span style="color:#6A737D;">// 浮点数</span></span>
<span class="line"><span style="color:#F97583;">let</span><span style="color:#E1E4E8;"> num</span><span style="color:#F97583;">=</span><span style="color:#79B8FF;">1.0</span><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 虽然跟了小数点，但依然会被处理成整数</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">     </span><span style="color:#6A737D;">// 整数</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> floatNum </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0.1</span><span style="color:#24292E;">   </span><span style="color:#6A737D;">// 浮点数</span></span>
<span class="line"><span style="color:#D73A49;">let</span><span style="color:#24292E;"> num</span><span style="color:#D73A49;">=</span><span style="color:#005CC5;">1.0</span><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 虽然跟了小数点，但依然会被处理成整数</span></span></code></pre></div><p>NaN是一种特殊的数值，表示运算错误，但不会报错。Infinity表示无穷大，-Infinity表示无穷小，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">//=&gt; NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">/</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// =&gt; Infinity，很多语言会报错，但是这里为无穷大</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">5</span><span style="color:#F97583;">/-</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">)  </span><span style="color:#6A737D;">// =&gt; -Infinity</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">//=&gt; NaN</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">/</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// =&gt; Infinity，很多语言会报错，但是这里为无穷大</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">5</span><span style="color:#D73A49;">/-</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">)  </span><span style="color:#6A737D;">// =&gt; -Infinity</span></span></code></pre></div><p>有三种函数用于将其它形式的值转为数值，Number()是通用的，可将类似数值的字符串或单数值元素的数组转换为数组。parseInt()和parseFloat()用于将开头是数字而存在非数字的字符串提取成数值，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">))  </span><span style="color:#6A737D;">// 遇布尔值转为1或0</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">))  </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">undefined</span><span style="color:#E1E4E8;">))  </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123&#39;</span><span style="color:#E1E4E8;">))           </span><span style="color:#6A737D;">// =&gt;123</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123 456&#39;</span><span style="color:#E1E4E8;">))    </span><span style="color:#6A737D;">// =&gt; NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123hello&#39;</span><span style="color:#E1E4E8;">))   </span><span style="color:#6A737D;">// =&gt; NaN</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">Number</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;">))  </span><span style="color:#6A737D;">//=&gt;0</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">parseInt</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123hello&#39;</span><span style="color:#E1E4E8;">))  </span><span style="color:#6A737D;">//=&gt; 123</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#B392F0;">parseFloat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;1.23hello&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">//=&gt; 1.23</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">))  </span><span style="color:#6A737D;">// 遇布尔值转为1或0</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">null</span><span style="color:#24292E;">))  </span><span style="color:#6A737D;">// 0</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">undefined</span><span style="color:#24292E;">))  </span><span style="color:#6A737D;">// NaN</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123&#39;</span><span style="color:#24292E;">))           </span><span style="color:#6A737D;">// =&gt;123</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123 456&#39;</span><span style="color:#24292E;">))    </span><span style="color:#6A737D;">// =&gt; NaN</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123hello&#39;</span><span style="color:#24292E;">))   </span><span style="color:#6A737D;">// =&gt; NaN</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">Number</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;">))  </span><span style="color:#6A737D;">//=&gt;0</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">parseInt</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123hello&#39;</span><span style="color:#24292E;">))  </span><span style="color:#6A737D;">//=&gt; 123</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">parseFloat</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;1.23hello&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">//=&gt; 1.23</span></span></code></pre></div><p>由于乘法运算和减法运算在碰到数值时会隐式调用Number()，因此可以使用此方法快速调用Number()，可以看作一种语法糖，例如：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">)    </span><span style="color:#6A737D;">//=&gt;1，等同于Number(true) </span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;123&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">)   </span><span style="color:#6A737D;">// =&gt; 246，等同于Number(&#39;123&#39;)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">)    </span><span style="color:#6A737D;">//=&gt;1，等同于Number(true) </span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;123&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">2</span><span style="color:#24292E;">)   </span><span style="color:#6A737D;">// =&gt; 246，等同于Number(&#39;123&#39;)</span></span></code></pre></div>`,10),e=[p];function t(c,r,y,E,i,F){return n(),a("div",null,e)}const d=s(o,[["render",t]]);export{C as __pageData,d as default};
