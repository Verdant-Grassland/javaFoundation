import{_ as a,o as n,c as s,a as e}from"./app-9add14af.js";const t={},p=e(`<h1 id="第二章" tabindex="-1"><a class="header-anchor" href="#第二章" aria-hidden="true">#</a> 第二章</h1><p><strong>1.注释</strong></p><p><strong>1）.单行注释：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2）多行注释：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">/*…*/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2.布尔类型,只有两个取值</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">true</span>（真的）、<span class="token boolean">false</span>（假的）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3.开发java程序的步骤：</strong></p><div class="custom-container tip"><p class="custom-container-title">提示</p><p><strong>1）编辑源程序</strong></p><p><strong>2）编译程序</strong></p><p><strong>3）运行程序</strong></p></div><p><strong>4.运算符</strong></p><p><strong>1）算术运算符</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">+</span>，<span class="token operator">-</span>，<span class="token operator">*</span>，<span class="token operator">/</span>（除），<span class="token operator">%</span>（取余），<span class="token operator">++</span>，<span class="token operator">--</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>2）赋值运算符：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>3）关系运算符</strong>：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&gt;</span><span class="token punctuation">,</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">,</span><span class="token punctuation">&gt;</span></span><span class="token operator">=</span><span class="token punctuation">,</span><span class="token operator">&lt;=</span><span class="token punctuation">,</span><span class="token operator">==</span>（等于）<span class="token punctuation">,</span><span class="token operator">!=</span>（不等于）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>4）逻辑运算符：</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token operator">&amp;&amp;</span>（与）、<span class="token operator">||</span>（或）、！（非）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.自动类型转换规则</p><blockquote><p>规则1：如果一个操作数为double型，则整个表达可提升为double型</p></blockquote><blockquote><p>规则2：满足自动类型转换的条件</p></blockquote><p>6.类型转换有两种方式：</p><p>1）自动类型转换</p><p>2）强制类型转换</p><p>7.输入类的对象：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Scanner</span> input<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入字符串的数据：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>input<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入double类型的数据:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>input<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入int类型的数据：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>input<span class="token punctuation">.</span><span class="token function">nextInt</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输入char类型的数据：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>input<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,35),o=[p];function c(l,i){return n(),s("div",null,o)}const d=a(t,[["render",c],["__file","java2.html.vue"]]);export{d as default};