import{_ as a,o as s,c as t,Q as e}from"./chunks/framework.9bc09dc8.js";const E=JSON.parse('{"title":"read命令","description":"","frontmatter":{},"headers":[],"relativePath":"Linux/read命令.md","filePath":"Linux/read命令.md"}'),n={name:"Linux/read命令.md"},o=e(`<h1 id="read命令" tabindex="-1">read命令 <a class="header-anchor" href="#read命令" aria-label="Permalink to &quot;read命令&quot;">​</a></h1><p>Linux read命令用于从标准输入读取值。</p><p>read命令选项如下：</p><table><thead><tr><th>选项</th><th>说明</th></tr></thead><tbody><tr><td>-p</td><td>后面跟提示信息，即在输入前打印提示信息。</td></tr><tr><td>-n</td><td>后跟一个数字，定义输入文本的长度，很实用。</td></tr><tr><td>-a</td><td>后跟一个变量，该变量会被认为是个数组，然后给其赋值，默认是以空格为分割符。</td></tr><tr><td>-s</td><td>安静模式，在输入字符时不再屏幕上显示，例如login时输入密码。</td></tr></tbody></table><h2 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h2><p>-p 参数很常用，允许在 read 命令行中直接指定一个提示。例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">read</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;你的姓名:&quot;</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">name</span></span>
<span class="line"><span style="color:#79B8FF;">echo</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">“你的名字是：</span><span style="color:#E1E4E8;">$name</span><span style="color:#9ECBFF;">&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">read</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;你的姓名:&quot;</span><span style="color:#24292E;">  </span><span style="color:#032F62;">name</span></span>
<span class="line"><span style="color:#005CC5;">echo</span><span style="color:#24292E;"> </span><span style="color:#032F62;">“你的名字是：</span><span style="color:#24292E;">$name</span><span style="color:#032F62;">&quot;</span></span></code></pre></div><p>上面的示例运行后，在终端会看到提示字符“你的姓名：”，此时直接输入名字，即可将该值赋予给变量name。然后打印出name变量。</p>`,8),p=[o];function l(r,c,d,i,h,_){return s(),t("div",null,p)}const u=a(n,[["render",l]]);export{E as __pageData,u as default};
