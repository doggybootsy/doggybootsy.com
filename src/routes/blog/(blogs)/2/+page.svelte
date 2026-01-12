<script lang="ts">
	import Anchor from "$lib/components/anchor.svelte";
	import Details from "$lib/components/details.svelte";
	import Inlinecode from "$lib/components/markdown/inlinecode.svelte";
</script>

<div class="*:not-last:mb-4 text-center">
	<h2 class="font-bold text-lg">Preamble</h2>

	<p>
		I have been using Discord since 2018.
		For most of that time I was client mods.
		BetterDiscord being my first client mod!
	</p>
	
	<p>
		Because of BetterDiscord I started to learn CSS to style Discord UI. 
		After some time I switched to using powercord where I learned how to program in JavaScript to make plugins.
	</p>

	<p>
		With my knowledge between those 2 languages, I went on to create multiple plugins/themes (for several client mods) and some personal Discord client mods. 
		While doing that I learned a lot about Discord internals.
	</p>

	<p>
		Because of BetterDiscord being my first mod it was always inspiration for me.
		When developing my own personal client mods, I looked at BetterDiscord to see how things were done.
		For a client mod called Vizality, I even made a compat layer for BetterDiscord so you can use BetterDiscord plugins within it.
	</p>

	<h2 class="font-bold text-lg">How it all actually started</h2>

	<p>
		While working on a personal client mod, VX, I was implementing a theme store to download themes from the BetterDiscord website.
		As I was developing it, I added a feature to embed BetterDiscord theme links in chat.
		When I was talking to a contributor of VX, Zrodevkaan, I was showing him the theme embed.
		Due to a communication mistake with them, where they thought it was for BetterDiscord itself.
		That demo was sent to Zerebos (owner of BetterDiscord).
		Because of the negligence, I ended up remaking it all over for BetterDiscord.
		It took nearly 3 months to make the builtin addon store and have it pulled into the client codebase.
		The original version had several unexpected bugs, most of which were fixed. 
	</p>

	<p>
		With that incident I started to get more involved with BetterDiscord as whole. 
		I started to involve myself with the community side and the development side of BetterDiscord.
		While for the most part neglicting my own personal client mod.
	</p>

	<p>
		With me neglicting VX, it was mostly Zrodevkaan working on it. 
		Then Discord made <Anchor href="https://www.npmjs.com/package/@discord/intl">
			<Inlinecode>
				<!-- <svg class="size-4 text-[rgb(203,56,55)]" viewBox="0 0 700 700" fill="currentColor" aria-hidden="true">
					<polygon fill="currentColor" points="0,700 700,700 700,0 0,0"></polygon>
					<polygon fill="#ffffff" points="150,550 350,550 350,250 450,250 450,550 550,550 550,150 150,150 "></polygon>
				</svg> -->
				@discord/intl
			</Inlinecode>
		</Anchor> and pushed it to the client. 
		With that change it broke roughly 70% of my client mod.
		Zrodevkaan made a fix for it, but with discord constantly changing everything I decided to stop working on it.
		So I switched fully to BetterDiscord, Zrodevkaan joining me too.
	</p>

	<p>
		With mine and Zrodevkaan development for BD, it had help spark Zerebos development again for BetterDiscord. 
		Which lead to a major file structure change and conversation to TypeScript.
		Additionally it lead to other BetterDiscord softwares getting rewrote / worked on. 
	</p>

	<p>
		Since that incident I mostly ended up mostly doing bug fixes, random QoL, and implementing smaller apis.
	</p>

	<p>
		After a while doing that, I was invited to join the core team.
		This is where most of my development for bd has happened.
	</p>

	<h3 class="font-bold">Types of things I did</h3>

	<Details summary="Bug Squashing" group="i-did">
		<ul class="*:my-4 *:*:not-first:text-sm *:*:not-first:mx-2 *:*:not-first:text-slate-300/85">
			<li>
				<div>Addon Store Bugs</div>
				<div>Fixed addon links being pulled from codeblocks</div>
				<div>Fixed the install modal from not closing when it errored</div>
			</li>
			<li>
				<div>Crashing</div>
				<div>Fixed a bug that caused Discord to crash when mentioning a discord bot</div>
				<div>Fixed a bug that caused Discord to crash when using a command with options</div>
			</li>
		</ul>
	</Details>
	<Details summary="Quality of Life" group="i-did">
		<ul class="*:my-4 *:*:not-first:text-sm *:*:not-first:mx-2 *:*:not-first:text-slate-300/85">
			<li>
				<div>Webpack API rewrite in TypeScript</div>
				<div>Made general module searches faster by nearly 2x</div>
				<div>Made store lookups ~5500x faster</div>
			</li>
			<li>
				<div>Code Editor QoL overhual</div>
				<div>Added multiple settings to help edit the Monaco editor</div>
				<div>Added the footer from Visual Studio Code</div>
			</li>
		</ul>
	</Details>
	<Details summary="API Addtions" group="i-did">
		<ul class="*:my-4 *:*:not-first:text-sm *:*:not-first:mx-2 *:*:not-first:text-slate-300/85">
			<li>
				<div>React Helpers</div>
				<div>Added 3 react hooks for varius tasks</div>
				<div>Added a few react utils to <code>BdApi.ReactUtils</code></div>
			</li>
			<li>
				<div>Webpack</div>
				<div>Added several filters to help find modules</div>
				<div>Added varius API's requested by addon developers</div>
			</li>
		</ul>
	</Details>

	<p>
		I was reached out with the possibility to take over BetterDiscord by Zerebos.
		I stated I would be open to it, if only Zerebos was okay with it.
		After a while Zerebos decided it would be beneficial for BetterDiscord to hand over the main client development to me. 
	</p>

	<p>
		After the initial transition I managed to mess up the 1.13 release after trying to implement a minor fix.
		This caused a several hour issue for BetterDiscord, which ended up with Zerebos fixing it.
		After that there was only 1 other bad release due to my negligence and confusion. 
		Since then there has been no issues.
	</p>

	<p>
		With me becoming lead developer I have welcomed 2 other people to join the BetterDiscord core team.
		They are <Anchor href="gh:DaddyBoard">DaddyBoard</Anchor> and <Anchor href="gh:TheLazySquid">TheLazySquid</Anchor>.
		Those two will both be helping with the addon life cycle, helping clear out old and abandoned addons amongst other things.
		Additionally, DaddyBoard will be helping with PR and other general community management. 
	</p>

	<p>
		In conclusion, I managed to become the lead developer of BetterDiscord because of an accident.
	</p>

	<p>
		I highly recommend reading Zerebos's blog on this <Anchor href="https://zerebos.com/blog/betterdiscord-passing-the-torch/">Passing the Torch: The Future of BetterDiscord</Anchor>
	</p>
</div>