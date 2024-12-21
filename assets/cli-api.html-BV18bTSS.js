import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,f as n,o as t}from"./app-C9hATcF1.js";const e={};function l(r,i){return t(),a("div",null,i[0]||(i[0]=[n(`<h1 id="programmatic-use-of-buntralino-cli" tabindex="-1"><a class="header-anchor" href="#programmatic-use-of-buntralino-cli"><span>Programmatic use of <code>buntralino</code> CLI</span></a></h1><p>Though <code>buntralino-cli</code> npm package is available as a CLI tool <code>buntralino</code>, it can be used directly through TypeScript as an ESM module:</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">bun</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> --dev</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> buntralino-cli</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-ts line-numbers-mode" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#E45649;--shiki-dark:#D19A66;"> *</span><span style="--shiki-light:#383A42;--shiki-dark:#C678DD;"> as</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> buntralino</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> from</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;buntralino-cli&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Specify the main Bun file where you open Buntralino windows;</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// it is passed to buntralino.run and buntralino.build as the only argument.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B;"> buntralinoIndex</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;src/bun/index.ts&#39;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Run the Buntralino application and wait until it is closed</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> buntralino</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">run</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">buntralinoIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Packages the Buntralino application for redistribution.</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// Make sure to prebuild all the assets used by Neutralino beforehand.</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">await</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B;"> buntralino</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">buntralinoIndex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note that configuration for application name, its icons and metadata is taken from <code>neutralino.config.json</code>. You can find documentation for its fields <a href="https://neutralino.js.org/docs/configuration/neutralino.config.json" target="_blank" rel="noopener noreferrer">here</a>.</p>`,5)]))}const p=s(e,[["render",l],["__file","cli-api.html.vue"]]),d=JSON.parse('{"path":"/cli-api.html","title":"Programmatic use of buntralino CLI","lang":"en-US","frontmatter":{"icon":"code","description":"Programmatic use of buntralino CLI Though buntralino-cli npm package is available as a CLI tool buntralino, it can be used directly through TypeScript as an ESM module: Note tha...","head":[["meta",{"property":"og:url","content":"https://buntralino.github.io/cli-api.html"}],["meta",{"property":"og:site_name","content":"Buntralino"}],["meta",{"property":"og:title","content":"Programmatic use of buntralino CLI"}],["meta",{"property":"og:description","content":"Programmatic use of buntralino CLI Though buntralino-cli npm package is available as a CLI tool buntralino, it can be used directly through TypeScript as an ESM module: Note tha..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-12-17T12:40:30.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-17T12:40:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Programmatic use of buntralino CLI\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-17T12:40:30.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1734439230000,"updatedTime":1734439230000,"contributors":[{"name":"Cosmo Myzrail Gorynych","username":"Cosmo Myzrail Gorynych","email":"admin@nersta.ru","commits":1,"url":"https://github.com/Cosmo Myzrail Gorynych"}]},"filePathRelative":"cli-api.md","localizedDate":"December 17, 2024","autoDesc":true}');export{p as comp,d as data};