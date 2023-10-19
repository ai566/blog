import{_ as s,o as a,c as n,Q as e}from"./chunks/framework.3afb20c3.js";const g=JSON.parse('{"title":"排序和去重——sort命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/排序和去重——sort命令.md","filePath":"Linux/排序和去重——sort命令.md"}'),p={name:"Linux/排序和去重——sort命令.md"},l=e(`<h1 id="排序和去重——sort命令" tabindex="-1">排序和去重——sort命令 <a class="header-anchor" href="#排序和去重——sort命令" aria-label="Permalink to &quot;排序和去重——sort命令&quot;">​</a></h1><p>可以使用sort命令对每行进行排序，默认每从第一个字符开始，比较ASCII值进行排序。</p><p>sort命令选项如下：</p><ul><li>-r ： 逆序</li><li>-f ： 不区分大小写</li><li>-n ： 以数字为依据</li></ul><h2 id="文本的排序" tabindex="-1">文本的排序 <a class="header-anchor" href="#文本的排序" aria-label="Permalink to &quot;文本的排序&quot;">​</a></h2><p>例如如下文本文件1.md：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">aa</span></span>
<span class="line"><span style="color:#e1e4e8;">abd</span></span>
<span class="line"><span style="color:#e1e4e8;">A</span></span>
<span class="line"><span style="color:#e1e4e8;">abc</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">aa</span></span>
<span class="line"><span style="color:#24292e;">abd</span></span>
<span class="line"><span style="color:#24292e;">A</span></span>
<span class="line"><span style="color:#24292e;">abc</span></span></code></pre></div><p>运行<code>sort 1.md</code>后输出如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">A</span></span>
<span class="line"><span style="color:#e1e4e8;">aa</span></span>
<span class="line"><span style="color:#e1e4e8;">abc</span></span>
<span class="line"><span style="color:#e1e4e8;">abd</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">A</span></span>
<span class="line"><span style="color:#24292e;">aa</span></span>
<span class="line"><span style="color:#24292e;">abc</span></span>
<span class="line"><span style="color:#24292e;">abd</span></span></code></pre></div><h2 id="数值的排序" tabindex="-1">数值的排序 <a class="header-anchor" href="#数值的排序" aria-label="Permalink to &quot;数值的排序&quot;">​</a></h2><p>假设一个文件2.md如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">2</span></span>
<span class="line"><span style="color:#e1e4e8;">3</span></span>
<span class="line"><span style="color:#e1e4e8;">10</span></span>
<span class="line"><span style="color:#e1e4e8;">111</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">2</span></span>
<span class="line"><span style="color:#24292e;">3</span></span>
<span class="line"><span style="color:#24292e;">10</span></span>
<span class="line"><span style="color:#24292e;">111</span></span></code></pre></div><p>必须加上-n告诉以数值为依据，否则会当成字符串以ASCII逐字符比较。如下示例：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">$  sort -n  2.md</span></span>
<span class="line"><span style="color:#e1e4e8;">2</span></span>
<span class="line"><span style="color:#e1e4e8;">3</span></span>
<span class="line"><span style="color:#e1e4e8;">10</span></span>
<span class="line"><span style="color:#e1e4e8;">111</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">$  sort -n  2.md</span></span>
<span class="line"><span style="color:#24292e;">2</span></span>
<span class="line"><span style="color:#24292e;">3</span></span>
<span class="line"><span style="color:#24292e;">10</span></span>
<span class="line"><span style="color:#24292e;">111</span></span></code></pre></div><h2 id="删除重复行" tabindex="-1">删除重复行 <a class="header-anchor" href="#删除重复行" aria-label="Permalink to &quot;删除重复行&quot;">​</a></h2><p>删除重复行前先进行排序，然后使用管道传递给uniq命令即可。</p><p>如下文本文件3.md：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">A</span></span>
<span class="line"><span style="color:#e1e4e8;">B</span></span>
<span class="line"><span style="color:#e1e4e8;">A</span></span>
<span class="line"><span style="color:#e1e4e8;">A</span></span>
<span class="line"><span style="color:#e1e4e8;">B</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">A</span></span>
<span class="line"><span style="color:#24292e;">B</span></span>
<span class="line"><span style="color:#24292e;">A</span></span>
<span class="line"><span style="color:#24292e;">A</span></span>
<span class="line"><span style="color:#24292e;">B</span></span></code></pre></div><p>运行如下命令删除重复行：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">sort</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">3</span><span style="color:#9ECBFF;">.md</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">|</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">uniq</span></span>
<span class="line"><span style="color:#B392F0;">A</span></span>
<span class="line"><span style="color:#B392F0;">B</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;">  </span><span style="color:#032F62;">sort</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3</span><span style="color:#032F62;">.md</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">uniq</span></span>
<span class="line"><span style="color:#6F42C1;">A</span></span>
<span class="line"><span style="color:#6F42C1;">B</span></span></code></pre></div>`,20),o=[l];function c(t,i,r,d,y,h){return a(),n("div",null,o)}const b=s(p,[["render",c]]);export{g as __pageData,b as default};
