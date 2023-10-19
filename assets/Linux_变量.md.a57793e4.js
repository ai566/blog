import{_ as s,o as a,c as e,Q as n}from"./chunks/framework.9bc09dc8.js";const v=JSON.parse('{"title":"变量","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/变量.md","filePath":"Linux/变量.md"}'),p={name:"Linux/变量.md"},o=n(`<h1 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h1><p>变量在Linux脚本中非常常见。</p><h2 id="声明变量并赋值" tabindex="-1">声明变量并赋值 <a class="header-anchor" href="#声明变量并赋值" aria-label="Permalink to &quot;声明变量并赋值&quot;">​</a></h2><p>声明变量很简单，只需要使用等号将变量名和变量值连接起来即可：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a=1</span></span>
<span class="line"><span style="color:#e1e4e8;">str=hello</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $a</span></span>
<span class="line"><span style="color:#e1e4e8;">echo $str</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a=1</span></span>
<span class="line"><span style="color:#24292e;">str=hello</span></span>
<span class="line"><span style="color:#24292e;">echo $a</span></span>
<span class="line"><span style="color:#24292e;">echo $str</span></span></code></pre></div><p>如果值有空格，则需要使用引号：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">str</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">=&quot;hello bash&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">str</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=&quot;hello bash&quot;</span></span></code></pre></div><p>要特别注意，等号两边不能有空格，下面的命令是错的：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">a  =  1</span></span>
<span class="line"><span style="color:#e1e4e8;">bash: a: command not found</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">a  =  1</span></span>
<span class="line"><span style="color:#24292e;">bash: a: command not found</span></span></code></pre></div><p>bash会把a当做命令、= 和1当做参数去执行。</p><h2 id="打印变量" tabindex="-1">打印变量 <a class="header-anchor" href="#打印变量" aria-label="Permalink to &quot;打印变量&quot;">​</a></h2><p>使用echo加上美元符号$和花括号打印变量：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">echo $PATH</span></span>
<span class="line"><span style="color:#e1e4e8;">echo \${PATH}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">echo $PATH</span></span>
<span class="line"><span style="color:#24292e;">echo \${PATH}</span></span></code></pre></div><p>如果变量名称不存在空格和特殊字符，上面两种方式都可以。如果存在空格或特殊字符，变量名称就要用花括号括起来。</p><h2 id="字符串转义" tabindex="-1">字符串转义 <a class="header-anchor" href="#字符串转义" aria-label="Permalink to &quot;字符串转义&quot;">​</a></h2><p>有些时候我们恰好需要用到特殊字符本来的含义，例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;coffee is </span><span style="color:#E1E4E8;">$five</span><span style="color:#9ECBFF;">&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;coffee is </span><span style="color:#24292E;">$five</span><span style="color:#032F62;">&quot;</span></span></code></pre></div><p>这里会找到名为five的变量解析出来，但我们的本意是只想显示“咖啡是5美元”，所以使用转义：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;coffee is </span><span style="color:#79B8FF;">\\$</span><span style="color:#9ECBFF;">five&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;coffee is </span><span style="color:#005CC5;">\\$</span><span style="color:#032F62;">five&quot;</span></span></code></pre></div><p>这样就输出了“coffee is $five”。</p>`,20),l=[o];function c(t,i,r,d,h,u){return a(),e("div",null,l)}const g=s(p,[["render",c]]);export{v as __pageData,g as default};
