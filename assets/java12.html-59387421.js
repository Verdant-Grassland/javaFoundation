import{_ as s,r as e,o as t,c as p,b as c,d as i,e as o,a}from"./app-9add14af.js";const l={},d=a(`<h1 id="第十二章" tabindex="-1"><a class="header-anchor" href="#第十二章" aria-hidden="true">#</a> 第十二章</h1><h4 id="会定义和使用类的方法" tabindex="-1"><a class="header-anchor" href="#会定义和使用类的方法" aria-hidden="true">#</a> 会定义和使用类的方法</h4><h5 id="理解变量作用域" tabindex="-1"><a class="header-anchor" href="#理解变量作用域" aria-hidden="true">#</a> 理解变量作用域</h5><div class="custom-container tip"><p class="custom-container-title">提示</p><p>会添加JavaDoc注释</p></div><p>1.定义类的方法 步骤一：定义方法名以及返回值类型</p><p>步骤二：编写方法体</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> 返回值类型 方法名<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token comment">//方法的主体</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.方法的返回值两种情况 1）如果方法具有返回值，方法中必须使用关键字return返回该值，返回值类型为该返回值的类型</p><p>2）如果方法没有返回值，返回值类型为void</p><p>3.语法 return 表达式; 作用： 跳出方法、返回结果</p>`,10),u=a(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>）类型 变量名<span class="token operator">=</span>对象名<span class="token punctuation">.</span>方法<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>说明：变量的类型一定要与方法的返回类型一样</p><p>2）在输出的代码中调用带返回值类型的方法：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>对象名<span class="token punctuation">.</span>方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>5.对于没有返回值类型(void)的方法，需要直接调用.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>如：对象名<span class="token punctuation">.</span>方法名<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>没有返回值类型的方法，不能在输出代码中调用</p><div class="custom-container warning"><p class="custom-container-title">注意事项</p><p>方法中可以调用方法，但是一个方法定义中，不能再包括另外一个方法定义。</p><p>方法的返回类型只有一个，方法的返回值也之呢个有一个</p></div><p>成员变量个局部变量的区别 1.作用域不同</p><p>1）局部变量的作用域仅限于定义它的方法</p><p>2）成员变量的作用域在整个类内部都是可见的</p><p>2.初始值不同</p><p>1）Java会给成员变量一个初始值</p><p>2）java不会给局部变量赋予初始值</p><div class="custom-container warning"><p class="custom-container-title">注意</p><p>1）在同一个方法中，不允许有同名局部变量</p><p>2）在不同的方法中，可以有同名局部变量</p><p>3）在同一个类中，成员变量和局部变量同名时，局部变量具有更高的优先级</p></div><blockquote><p>减少代码量实现代码复用</p></blockquote>`,16);function r(v,m){const n=e("Badge");return t(),p("div",null,[d,c("p",null,[i("4.调用带返回值方法的方式："),o(n,{type:"danger",text:"重点"})]),u])}const h=s(l,[["render",r],["__file","java12.html.vue"]]);export{h as default};