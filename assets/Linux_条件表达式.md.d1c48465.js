import{_ as t,o as a,c as s,Q as d}from"./chunks/framework.9bc09dc8.js";const f=JSON.parse('{"title":"条件表达式","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/条件表达式.md","filePath":"Linux/条件表达式.md"}'),e={name:"Linux/条件表达式.md"},l=d(`<h1 id="条件表达式" tabindex="-1">条件表达式 <a class="header-anchor" href="#条件表达式" aria-label="Permalink to &quot;条件表达式&quot;">​</a></h1><p>在脚本中经常会用到条件表达式，条件表达式常用在if语句中，用中括号包裹，各个部分用空格隔开，例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> [ </span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">-eq</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> ]</span></span>
<span class="line"><span style="color:#F97583;">then</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">相等</span></span>
<span class="line"><span style="color:#F97583;">fi</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">if</span><span style="color:#24292E;"> [ </span><span style="color:#005CC5;">2</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">-eq</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> ]</span></span>
<span class="line"><span style="color:#D73A49;">then</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">相等</span></span>
<span class="line"><span style="color:#D73A49;">fi</span></span></code></pre></div><p>条件表达式中最常见的情况是比较，比较常用的比较是数值比较和字符串比较。</p><h2 id="数值比较" tabindex="-1">数值比较 <a class="header-anchor" href="#数值比较" aria-label="Permalink to &quot;数值比较&quot;">​</a></h2><p>与数学公式不同，数值比较需要用到-gt、-lt、-eq表示大于、小于、等于号，而不能是&gt;、&lt;、=。</p><table><thead><tr><th>比较运算符</th><th>解释</th><th>示例</th></tr></thead><tbody><tr><td>-eq</td><td>相等</td><td>[ 1 -eq 2 ]</td></tr><tr><td>-ne</td><td>不等于</td><td>[ 1 ne 2 ]</td></tr><tr><td>-ge</td><td>大于等于</td><td>[ 1 -eq 2 ]</td></tr><tr><td>-gt</td><td>大于</td><td>[ 2 -gt 1 ]</td></tr><tr><td>-le</td><td>小于等于</td><td>[ 1 -le 2 ]</td></tr><tr><td>-lt</td><td>小于</td><td>[ 1 -le 2 ]</td></tr></tbody></table><p>表格示例中空格间距比较大，就是为了题型注意各个部分一定要加上空格。</p><h2 id="字符串比较" tabindex="-1">字符串比较 <a class="header-anchor" href="#字符串比较" aria-label="Permalink to &quot;字符串比较&quot;">​</a></h2><p>字符串的比较方式是根据ASCII逐个字母比较，常用的字符串比较运算符如下：</p><table><thead><tr><th>比较运算符</th><th>含义</th><th>示例</th></tr></thead><tbody><tr><td>=</td><td>相同</td><td>[ &#39;a&#39; = &#39;a&#39; ]</td></tr><tr><td>!=</td><td>不同</td><td>[ &#39;a&#39; != &#39;b&#39; ]</td></tr><tr><td>&lt;</td><td>小于</td><td>[ &#39;a&#39; &lt; &#39;A&#39; ]</td></tr><tr><td><code>&gt;</code></td><td>大于</td><td>[ &#39;a&#39; &gt; &#39;A&#39; ]</td></tr><tr><td>-n str</td><td>字符串str长度是否非0</td><td>[ -n &#39;a&#39; ]</td></tr><tr><td>-z str</td><td>字符串str长度是否为0</td><td>[ -z &#39;&#39; ]</td></tr></tbody></table><h2 id="文件判断" tabindex="-1">文件判断 <a class="header-anchor" href="#文件判断" aria-label="Permalink to &quot;文件判断&quot;">​</a></h2><p>文件判断常用的运算符如下表：</p><table><thead><tr><th>运算符</th><th>解释</th></tr></thead><tbody><tr><td>-d file</td><td>判断file是否为目录</td></tr><tr><td>-e file</td><td>判断file是否存在</td></tr><tr><td>-f file</td><td>检查file是否为文件</td></tr><tr><td>-r file</td><td>判断文件是否可读</td></tr><tr><td>-s file</td><td>判断file是否存在并非空</td></tr><tr><td>-w file</td><td>判断file是可写</td></tr><tr><td>-x file</td><td>判断file是可执行</td></tr></tbody></table>`,14),n=[l];function r(o,p,c,i,h,y){return a(),s("div",null,n)}const E=t(e,[["render",r]]);export{f as __pageData,E as default};
