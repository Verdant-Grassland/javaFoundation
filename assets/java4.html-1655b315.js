import{_ as n,o as s,c as a,a as e}from"./app-9add14af.js";const t={},c=e(`<h1 id="第四章" tabindex="-1"><a class="header-anchor" href="#第四章" aria-hidden="true">#</a> 第四章</h1><p>switch选择结构</p><div class="custom-container tip"><p class="custom-container-title">支持类型包括</p><p>int/short/byte/char/枚举/String类型</p></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">switch</span>（表达式）<span class="token punctuation">{</span>
<span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span> 计算表达式的值
       语句<span class="token punctuation">;</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token keyword">case</span> 常量<span class="token number">2</span><span class="token operator">:</span> 
       语法<span class="token punctuation">;</span>
       <span class="token keyword">break</span><span class="token punctuation">;</span>
        …
<span class="token keyword">default</span><span class="token operator">:</span>    如果没有找到匹配的值
	语句<span class="token punctuation">;</span>
	 <span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>1.Switch 分支结构语法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Switch</span>（分值表达式）<span class="token punctuation">{</span>
	<span class="token keyword">case</span> 常量<span class="token number">1</span><span class="token operator">:</span> 
		语句块<span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">case</span> 常量<span class="token number">2</span><span class="token operator">:</span> 
		语句块<span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
	<span class="token keyword">default</span><span class="token operator">:</span> 
		语句块<span class="token number">3</span><span class="token punctuation">;</span>
		<span class="token keyword">break</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>Switch分支表达式的数据类型包括：int、short、byte、char、枚举、String类型（jdk.8及以上版本）</p></div><blockquote><p>default作业：当没有找到满足条件的分支时，则执行default=操作</p></blockquote><blockquote><p>如果在分支中省略break，则分支将会按顺序往下执行，直到遇到break则退出分支结构</p></blockquote><p>2.比较Switch和多重if选择结构</p><p>1）相同点：都是用来处理多分支条件的结构</p><p>2）不同点： Switch选择结构只能处理等值条件判断的情况 多重if选择结构：没有Switch选择结构的限制，特别合适某个变量处于某个连续区间时的情况</p><p>3.Scanner对象的hasnextInt()方法，可以判断用户从键盘输入的字符是否合法的数字</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//检测输入的是否是字符串</span>
hasNext <span class="token class-name">Double</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//检测输入的是否是double类型的数据</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,14),p=[c];function i(l,o){return s(),a("div",null,p)}const r=n(t,[["render",i],["__file","java4.html.vue"]]);export{r as default};
