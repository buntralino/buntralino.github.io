import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a,o as i}from"./app-CfoanChE.js";const o={};function l(r,e){return i(),t("div",null,e[0]||(e[0]=[a('<h1 id="command-line-tool-api" tabindex="-1"><a class="header-anchor" href="#command-line-tool-api"><span>Command-line tool API</span></a></h1><p>Buntralino&#39;s CLI allows you to quickly create new Buntralino projects and to build and run them. You can install Buntralino CLI with <code>bun install --global buntralino-cli</code>.</p><p>Buntralino CLI has the following commands:</p><h2 id="buntralino-create-name-templatename" tabindex="-1"><a class="header-anchor" href="#buntralino-create-name-templatename"><span><code>buntralino create [name] [templateName]</code></span></a></h2><p>Creates an empty Buntralino project. The <code>name</code> argument is optional and is used to prefill application name — it can be changed later in <code>neutralino.config.json</code>.</p><p><code>templateName</code> defines which template will be copied and configured for your project. Right now the two possible options are <code>new</code> (default) and <code>vite</code>.</p><p>If you don&#39;t specify the template name or all the arguments, an interactive prompt will appear.</p><h2 id="buntralino-add" tabindex="-1"><a class="header-anchor" href="#buntralino-add"><span><code>buntralino add</code></span></a></h2><p>Adds Buntralino to the existing Neutralino.js project. Make sure to run this command in the root of your Neutralino.js project. (Where <code>neutralino.config.json</code> is.)</p><h2 id="buntralino-run-indexpath-or-buntralino-start-indexpath" tabindex="-1"><a class="header-anchor" href="#buntralino-run-indexpath-or-buntralino-start-indexpath"><span><code>buntralino run [indexPath]</code> (or <code>buntralino start [indexPath]</code>)</span></a></h2><p>Runs the Buntralino project. <code>indexPath</code> is the path to the main Bun file that uses <code>buntralino</code> package to open and manage windows. (Defaults to <code>index.ts</code> in the current working directory.)</p><p>You may also need to pass additional arguments to the script you run with the <code>--</code> separator. For example, you may need to call <code>buntralino run -- --devmode</code> to signal your project that it is running in the dev mode.</p><h2 id="buntralino-build-indexpath" tabindex="-1"><a class="header-anchor" href="#buntralino-build-indexpath"><span><code>buntralino build [indexPath]</code></span></a></h2><p>Builds the project for distribution by building Neutralino.js application, bundling all the Bun scripts into an executable, and arranging the results for portable distribution. <code>indexPath</code> is the path to the main Bun file that uses <code>buntralino</code> package to open and manage windows. (Defaults to <code>index.ts</code> in the current working directory.)</p><p>Note that configuration for application name, its icons and metadata is taken from <code>neutralino.config.json</code>. You can find documentation for its fields <a href="https://neutralino.js.org/docs/configuration/neutralino.config.json" target="_blank" rel="noopener noreferrer">here</a>.</p><p>You may also need to pass additional arguments to the <code>bun build</code> command with a <code>--</code> separator. For example, if you need to add <code>--external original-fs</code> to the build command, use this:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">buntralino</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> build</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> src/bun/index.ts</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --external</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> original-fs</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Minification flags, <code>--compile</code> and <code>--outfile</code> are already included — don&#39;t duplicate them.</p><h2 id="buntralino-version" tabindex="-1"><a class="header-anchor" href="#buntralino-version"><span><code>buntralino --version</code></span></a></h2><p>Displays the current <code>buntralino-cli</code> version.</p><h2 id="buntralino-help" tabindex="-1"><a class="header-anchor" href="#buntralino-help"><span><code>buntralino --help</code></span></a></h2><p>Displays help for commands.</p>',22)]))}const c=n(o,[["render",l],["__file","cli.html.vue"]]),u=JSON.parse(`{"path":"/cli.html","title":"Command-line tool API","lang":"en-US","frontmatter":{"icon":"terminal","description":"Command-line tool API Buntralino's CLI allows you to quickly create new Buntralino projects and to build and run them. You can install Buntralino CLI with bun install --global b...","head":[["meta",{"property":"og:url","content":"https://buntralino.github.io/cli.html"}],["meta",{"property":"og:site_name","content":"Buntralino"}],["meta",{"property":"og:title","content":"Command-line tool API"}],["meta",{"property":"og:description","content":"Command-line tool API Buntralino's CLI allows you to quickly create new Buntralino projects and to build and run them. You can install Buntralino CLI with bun install --global b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-02-09T08:04:39.000Z"}],["meta",{"property":"article:modified_time","content":"2025-02-09T08:04:39.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Command-line tool API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-02-09T08:04:39.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"buntralino create [name] [templateName]","slug":"buntralino-create-name-templatename","link":"#buntralino-create-name-templatename","children":[]},{"level":2,"title":"buntralino add","slug":"buntralino-add","link":"#buntralino-add","children":[]},{"level":2,"title":"buntralino run [indexPath] (or buntralino start [indexPath])","slug":"buntralino-run-indexpath-or-buntralino-start-indexpath","link":"#buntralino-run-indexpath-or-buntralino-start-indexpath","children":[]},{"level":2,"title":"buntralino build [indexPath]","slug":"buntralino-build-indexpath","link":"#buntralino-build-indexpath","children":[]},{"level":2,"title":"buntralino --version","slug":"buntralino-version","link":"#buntralino-version","children":[]},{"level":2,"title":"buntralino --help","slug":"buntralino-help","link":"#buntralino-help","children":[]}],"git":{"createdTime":1734439230000,"updatedTime":1739088279000,"contributors":[{"name":"Cosmo Myzrail Gorynych","username":"Cosmo Myzrail Gorynych","email":"admin@nersta.ru","commits":4,"url":"https://github.com/Cosmo Myzrail Gorynych"}]},"filePathRelative":"cli.md","localizedDate":"December 17, 2024","autoDesc":true}`);export{c as comp,u as data};
