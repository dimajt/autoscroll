<h1>Auto Scroll</h1>
<p>JavaScript plugin for scroll animation</p>
<h2>Usage</h2>
Add attribute <b><i>to</i></b> for link
<pre>
&lt;a to="one"&gt;&lt;/a&gt;
</pre>
Add <b><i>id</i></b>  with same name to block, to wich you want navigate
<pre>
&lt;div id="one"&gt;
…
&lt;/div&gt;
</pre>
Initialization
<pre>
var S = new Scroll(1000, 1000 / 60);
S.init();
</pre>
first parameter - duration, second - FPS
<h3><a href="http://dimajt.github.io/autoscroll/">Demo</a></h3>
