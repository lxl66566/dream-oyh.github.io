import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o,c as l,d as s,b as n,a as i,e as a}from"./app-zPZ9ZSMY.js";const c={},r=a(`<h1 id="python-爬虫教程" tabindex="-1"><a class="header-anchor" href="#python-爬虫教程"><span>Python 爬虫教程</span></a></h1><h2 id="环境安装" tabindex="-1"><a class="header-anchor" href="#环境安装"><span>环境安装</span></a></h2><p>使用爬虫需要安装<code>requests</code>和<code>bs4</code>两个第三方库</p><p>安装命令为：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>poetry <span class="token function">install</span> requests
poetry <span class="token function">install</span> bs4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="爬虫原理" tabindex="-1"><a class="header-anchor" href="#爬虫原理"><span>爬虫原理</span></a></h2><p>爬虫要做的，是从用户端口向网页服务器发送一个请求，网页服务器再根据请求做出响应，返回一个网页内容给用户，归纳下来，爬虫的步骤可分为三步，即：</p><ol><li>获取网页内容——从用户端口向网页服务器发送一个请求，服务器针对该请求返回用户网页内容。在浏览器里访问服务器时，服务器返回的内容会被浏览器渲染成可读性好、美观的网站页面，但是对于程序的响应，服务器返回的内容更加原始；</li><li>解析网页内容——通过请求得到的网页内容太多太杂了，需要对内容解析，将我们所需要的内容提取出来；</li><li>储存或分析数据——结合具体需求，对提取得到的数据进行后处理，可以对数据进行可视化处理、图表展示等。</li></ol><div class="hint-container warning"><p class="hint-container-title">爬虫在使用时必须注意：</p><ol><li>不要爬取公民隐私数据</li><li>不要爬取受著作权保护的内容</li><li>不要爬取国家事务、国防建设、尖端领域的计算机系统等保密性内容</li><li>请求频率和数量不能过高</li><li>网站如果明确做出反爬限制，比如加密内容，不要去强行突破</li></ol></div><h2 id="http-请求和响应" tabindex="-1"><a class="header-anchor" href="#http-请求和响应"><span>HTTP 请求和响应</span></a></h2><blockquote><p>HTTP(HyperText Transfer Protocol) 是超文本传输协议，它是互联网上应用最为广泛的一种网络协议。设计 HTTP 最初的目的是为了提供一种发布和接收 HTML 页面的方法。</p></blockquote><h3 id="http-请求" tabindex="-1"><a class="header-anchor" href="#http-请求"><span>HTTP 请求</span></a></h3><p>向 HTTP 发送请求主要包含两种方法，GET 和 POST，GET 用于获取数据，POST 用于发布数据，故在爬虫大部分情况下用 GET 方法。</p><p>一个完整的 HTTP 请求通常由三部分组成，分别是：请求行、请求头和请求体，如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>GET /user/info HTTP/1.1 <span class="token comment"># 请求行</span>
<span class="token comment"># 请求头</span>
Host: www.example.com
User-Agent: Mozilla/5.0 <span class="token punctuation">(</span>Windows NT <span class="token number">10.0</span><span class="token punctuation">;</span> Win64<span class="token punctuation">;</span> x64<span class="token punctuation">)</span> AppleWebKit/5
Accept:*/*

<span class="token comment"># 请求体</span>
<span class="token comment"># {</span>
<span class="token comment">#     &quot;username&quot;: &quot;admin&quot;,</span>
<span class="token comment">#     &quot;email&quot;:&quot;admin@example.com&quot; </span>
<span class="token comment"># } </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>请求行包括：请求类型（GET），访问路径（/user/info），HTTP 协议版本（HTTP/1.1）</p><p>请求头包括：Host 表示请求的主机名（结合访问路径能得到完整的网址），User-Agent 表示用户客户端的相关信息，Accept 表示客户端可接受的响应类型。</p><p>请求体内包括：客户端传给服务器的其他数据，如用户名和邮箱等，GET 方法请求体一般是空的。</p><h3 id="http-响应" tabindex="-1"><a class="header-anchor" href="#http-响应"><span>HTTP 响应</span></a></h3><p>一个完整的 HTTP 响应通常由三部分组成，分别是：状态行、响应头和响应体，如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>HTTP/1.1 <span class="token number">200</span> OK <span class="token comment"># 状态行</span>

<span class="token comment"># 响应头</span>
Date: Mon, <span class="token number">18</span> May <span class="token number">2020</span> 06:55:39 GMT
Content-Type: text/html<span class="token punctuation">;</span> <span class="token assign-left variable">charset</span><span class="token operator">=</span>UTF-8

<span class="token comment"># 响应体</span>
<span class="token operator">&lt;</span><span class="token operator">!</span>DOCTYPE html<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>html <span class="token assign-left variable">lang</span><span class="token operator">=</span><span class="token string">&quot;en&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>head<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta <span class="token assign-left variable">charset</span><span class="token operator">=</span><span class="token string">&quot;UTF-8&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>meta <span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;viewport&quot;</span> <span class="token assign-left variable">content</span><span class="token operator">=</span><span class="token string">&quot;width=device-width, initial-scale=1.0&quot;</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/head<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>该响应体仅作示例使用，不能代表真实情况，也不具备实际意义<span class="token operator">&lt;</span>/body<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>/html<span class="token operator">&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>状态行中包含 HTTP 响应协议、状态码和状态消息，常见的状态码如下：</p><div class="hint-container tip"><p class="hint-container-title">常见的状态码</p><table><thead><tr><th style="text-align:center;">状态码</th><th style="text-align:center;">状态消息</th><th style="text-align:left;">状态内容</th></tr></thead><tbody><tr><td style="text-align:center;">200</td><td style="text-align:center;">OK</td><td style="text-align:left;">客户端请求成功</td></tr><tr><td style="text-align:center;">301</td><td style="text-align:center;">Moved Permanently</td><td style="text-align:left;">资源被永久移到到新地址</td></tr><tr><td style="text-align:center;">400</td><td style="text-align:center;">Bad Request</td><td style="text-align:left;">客户端不能被服务器所理解</td></tr><tr><td style="text-align:center;">401</td><td style="text-align:center;">Unauthorized</td><td style="text-align:left;">请求未经授权</td></tr><tr><td style="text-align:center;">403</td><td style="text-align:center;">Forbidden</td><td style="text-align:left;">服务器拒绝提供服务</td></tr><tr><td style="text-align:center;">404</td><td style="text-align:center;">Not Found</td><td style="text-align:left;">请求资源不存在</td></tr><tr><td style="text-align:center;">500</td><td style="text-align:center;">Internal Server Error</td><td style="text-align:left;">服务器发生不可预期错误</td></tr><tr><td style="text-align:center;">503</td><td style="text-align:center;">Server Unavailable</td><td style="text-align:left;">服务器当前不能处理客户端的请求</td></tr></tbody></table></div><p>响应头包括：<code>Date</code> 表示响应发送的时间，<code>Content-Type</code> 表示响应的类型，<code>Content-Length</code> 表示响应内容的长度。</p><p>响应体包含服务端返回给客户端的数据，如 HTML 页面、图片、文件等。</p><h2 id="爬虫的-python-实现" tabindex="-1"><a class="header-anchor" href="#爬虫的-python-实现"><span>爬虫的 Python 实现</span></a></h2><h3 id="定义请求和-user-agent" tabindex="-1"><a class="header-anchor" href="#定义请求和-user-agent"><span>定义请求和&#39;User-Agent&#39;</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
head <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64) &quot;</span>
<span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
    <span class="token string">&quot;http://books.toscrape.com/&quot;</span><span class="token punctuation">,</span>
    headers<span class="token operator">=</span>head<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义 User-agent 的目的是把爬虫程序伪装成正常浏览器，通过<code>requests.get()</code>导入请求，括号内为待爬取网站的 url 网址。</p><p>定义的<code>response</code>是一个<code>response</code>对象，可以返回以下值：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">)</span> <span class="token comment"># 返回状态码</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>headers<span class="token punctuation">)</span> <span class="token comment"># 返回响应头</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>text<span class="token punctuation">)</span> <span class="token comment"># 返回响应体</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span> <span class="token comment"># 返回请求是否响应成功</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取响应源码并解析网页内容" tabindex="-1"><a class="header-anchor" href="#获取响应源码并解析网页内容"><span>获取响应源码并解析网页内容</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>content <span class="token operator">=</span> response<span class="token punctuation">.</span>text <span class="token comment"># 获取响应源码</span>
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup <span class="token comment"># 导入 BeautifulSoup</span>
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&quot;html.parser&quot;</span><span class="token punctuation">)</span> <span class="token comment"># 解析网页内容，通过&quot;html.parser&quot;指定解析器，一般情况下不需要更改</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="案例分析" tabindex="-1"><a class="header-anchor" href="#案例分析"><span>案例分析</span></a></h3>`,34),d={href:"http://books.toscrape.com/",target:"_blank",rel:"noopener noreferrer"},u=a(`<p>首先，在网页中找到所有价格所在的标签，并确认其属性。具体确认方法是，在网页内右键，点击“检查”（或者直接按 F12 键调取界面源码），再按<code>ctrl+shift+C</code>在页面中选择价格元素进行查看（也就是 F12 打开窗口后最左上角的按键），观察价格所处位置，其被标签<code>&lt;p class=&quot;price_color&quot;&gt;&lt;/p&gt;</code>所定义。因此，我们要找的元素，是这个网页中<code>p</code>标签的<code>price_color</code>类的字符。</p><p>程序如下：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>all_price <span class="token operator">=</span> soup<span class="token punctuation">.</span>findAll<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;price_color&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中，<code>findAll()</code>函数第一个参数为<code>html</code>的标签，<code>attrs</code>需要提供键值对，表示类的属性。得到的<code>all_price</code>类似一个列表，包含了所有符合要求的标签（但其实是<code>&#39;bs4.element.ResultSet</code>对象）.</p><p>接下来，我们需要提取出标签中的内容，即价格。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">for</span> price <span class="token keyword">in</span> all_price<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>price<span class="token punctuation">.</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只想得到价格本身，而忽略英镑单位，可以这么写程序：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">for</span> price <span class="token keyword">in</span> all_price<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>price<span class="token punctuation">.</span>string<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>整理得到爬虫的最终总程序为：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

head <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;User-Agent&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Mozilla/5.0 (Windows NT 10.0; Win64; x64)&quot;</span>
<span class="token punctuation">}</span>
response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>
    <span class="token string">&quot;http://books.toscrape.com/&quot;</span><span class="token punctuation">,</span>
    headers<span class="token operator">=</span>head<span class="token punctuation">,</span>
<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>ok<span class="token punctuation">)</span>
content <span class="token operator">=</span> response<span class="token punctuation">.</span>text
soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>content<span class="token punctuation">,</span> <span class="token string">&quot;html.parser&quot;</span><span class="token punctuation">)</span>
all_price <span class="token operator">=</span> soup<span class="token punctuation">.</span>findAll<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">,</span> attrs<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;class&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;price_color&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> price <span class="token keyword">in</span> all_price<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>price<span class="token punctuation">.</span>string<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="一些变式" tabindex="-1"><a class="header-anchor" href="#一些变式"><span>一些变式</span></a></h3><p>如果需要爬取的标签，是<code>h3</code>元素下的<code>a</code>元素，那需要将程序更改为：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>all_price <span class="token operator">=</span> soup<span class="token punctuation">.</span>findAll<span class="token punctuation">(</span><span class="token string">&quot;h3&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> price <span class="token keyword">in</span> all_price<span class="token punctuation">:</span>
    h3_a <span class="token operator">=</span> price<span class="token punctuation">.</span>findAll<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> h3_a_price <span class="token keyword">in</span> h3_a<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>h3_a_price<span class="token punctuation">.</span>string<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>即，<code>findAll</code>得到的对象可以再次迭代寻找。</p>`,14);function k(m,v){const e=p("ExternalLinkIcon");return o(),l("div",null,[r,s("p",null,[n("以该"),s("a",d,[n("专门用于联系爬虫的网页"),i(e)]),n("为例，现在需要爬取每本书的价格。")]),u])}const b=t(c,[["render",k],["__file","web_crawler.html.vue"]]),y=JSON.parse(`{"path":"/code/python/web_crawler.html","title":"Python 爬虫教程","lang":"zh-CN","frontmatter":{"date":"2024-02-11T00:00:00.000Z","icon":"pachong","category":"Python 库","tag":"教程","description":"Python 爬虫教程 环境安装 使用爬虫需要安装requests和bs4两个第三方库 安装命令为： 爬虫原理 爬虫要做的，是从用户端口向网页服务器发送一个请求，网页服务器再根据请求做出响应，返回一个网页内容给用户，归纳下来，爬虫的步骤可分为三步，即： 获取网页内容——从用户端口向网页服务器发送一个请求，服务器针对该请求返回用户网页内容。在浏览器里访问...","head":[["meta",{"property":"og:url","content":"https://dream-oyh.github.io/code/python/web_crawler.html"}],["meta",{"property":"og:site_name","content":"Dream_oyh 的 blog"}],["meta",{"property":"og:title","content":"Python 爬虫教程"}],["meta",{"property":"og:description","content":"Python 爬虫教程 环境安装 使用爬虫需要安装requests和bs4两个第三方库 安装命令为： 爬虫原理 爬虫要做的，是从用户端口向网页服务器发送一个请求，网页服务器再根据请求做出响应，返回一个网页内容给用户，归纳下来，爬虫的步骤可分为三步，即： 获取网页内容——从用户端口向网页服务器发送一个请求，服务器针对该请求返回用户网页内容。在浏览器里访问..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-17T14:32:00.000Z"}],["meta",{"property":"article:author","content":"OYH"}],["meta",{"property":"article:tag","content":"教程"}],["meta",{"property":"article:published_time","content":"2024-02-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-17T14:32:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 爬虫教程\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-02-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-17T14:32:00.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"OYH\\",\\"email\\":\\"19859860010@163.com\\"}]}"]]},"headers":[{"level":2,"title":"环境安装","slug":"环境安装","link":"#环境安装","children":[]},{"level":2,"title":"爬虫原理","slug":"爬虫原理","link":"#爬虫原理","children":[]},{"level":2,"title":"HTTP 请求和响应","slug":"http-请求和响应","link":"#http-请求和响应","children":[{"level":3,"title":"HTTP 请求","slug":"http-请求","link":"#http-请求","children":[]},{"level":3,"title":"HTTP 响应","slug":"http-响应","link":"#http-响应","children":[]}]},{"level":2,"title":"爬虫的 Python 实现","slug":"爬虫的-python-实现","link":"#爬虫的-python-实现","children":[{"level":3,"title":"定义请求和'User-Agent'","slug":"定义请求和-user-agent","link":"#定义请求和-user-agent","children":[]},{"level":3,"title":"获取响应源码并解析网页内容","slug":"获取响应源码并解析网页内容","link":"#获取响应源码并解析网页内容","children":[]},{"level":3,"title":"案例分析","slug":"案例分析","link":"#案例分析","children":[]},{"level":3,"title":"一些变式","slug":"一些变式","link":"#一些变式","children":[]}]}],"git":{"createdTime":1707929375000,"updatedTime":1708180320000,"contributors":[{"name":"dream同学0","email":"1399541701@qq.com","commits":3},{"name":"dream_linux","email":"1399541701@qq.com","commits":2}]},"readingTime":{"minutes":5.34,"words":1601},"filePathRelative":"code/python/web_crawler.md","localizedDate":"2024年2月11日","excerpt":"\\n<h2>环境安装</h2>\\n<p>使用爬虫需要安装<code>requests</code>和<code>bs4</code>两个第三方库</p>\\n<p>安装命令为：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>poetry <span class=\\"token function\\">install</span> requests\\npoetry <span class=\\"token function\\">install</span> bs4\\n</code></pre></div>","autoDesc":true}`);export{b as comp,y as data};
