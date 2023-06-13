import{_ as n,o as s,c as a,a as e}from"./app-9add14af.js";const p={},t=e(`<h1 id="第三章" tabindex="-1"><a class="header-anchor" href="#第三章" aria-hidden="true">#</a> 第三章</h1><p>1.逻辑运算符：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>（与）两边表达式都为真时，结果才为真，一边为假，一边为真，结果为假
<span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">||</span>（或）两边的表达式只有一个为真，结果就为真
<span class="token number">3</span><span class="token punctuation">)</span><span class="token operator">!</span>（非）原来为真，经过非之后，结果为假。原来为假，经过非之后，结果为真，它是一个取反的操作
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运算符优先级顺序： ！&gt;算术运算符&gt;比较运算符&gt;&amp;&amp;&gt;</p><p>2.选择结构语法：</p><p>1）基本if选择结构：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span>（条件为真）<span class="token punctuation">{</span>
	<span class="token comment">//代码块</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2）if…else选择结构：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span>（条件为真）<span class="token punctuation">{</span>
	<span class="token comment">//代码块1</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token comment">//代码块2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断偶数的条件:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3）多重if选择结构：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span>（条件）<span class="token punctuation">{</span>
	<span class="token comment">//代码块1</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span>（条件<span class="token number">2</span>）<span class="token punctuation">{</span>
	<span class="token comment">//代码块2</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span>（条件<span class="token number">3</span>）<span class="token punctuation">{</span>
	<span class="token comment">//代码块3</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span>（条件<span class="token number">4</span>）<span class="token punctuation">{</span>
	<span class="token comment">//代码块4</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>多重if选择结构的特点：找到满足条件的if去执行，只执行一个分支</p></div><p>4）if嵌套结构:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">if</span><span class="token punctuation">(</span>条件<span class="token number">1</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
	<span class="token keyword">if</span>（条件<span class="token number">2</span>）
		<span class="token comment">//代码块1</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span>  <span class="token punctuation">{</span>
		<span class="token comment">//代码块2</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
	<span class="token comment">//代码块3</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.随机数获取方式：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Math</span><span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>会获得0-1之间的随机数，不包括0，也不包括1. 如果想获得0-9之间的随机数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span> random <span class="token operator">=</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>4.==和equals的区别？</p><blockquote><p>==:主要做值类型数据比较，他比较的是变量的内存地址是否一致 equals:主要比较字符串的内容是否一致</p></blockquote><p>5.java基本数据类型（值类型）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">int</span>（整型）、<span class="token keyword">double</span>（双精度浮点型）、<span class="token keyword">boolean</span>（布尔类型）、<span class="token keyword">char</span>（字符类型）、<span class="token keyword">long</span>（长整型）、<span class="token keyword">short</span>（短整型）、<span class="token keyword">byte</span>（字节）、<span class="token keyword">float</span>（单精度浮点类型）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>引用类型：类、字符串（String）</p><div class="custom-container tip"><p class="custom-container-title">提示</p><p>java基本数据类型比较用==，引用类型String比较应用equals</p></div>`,26),c=[t];function o(l,i){return s(),a("div",null,c)}const d=n(p,[["render",o],["__file","java3.html.vue"]]);export{d as default};
