<template>
	<div class="flex flex-col min-h-screen">
		<header
			class="flex justify-between items-center border-accent-m-400 dark:border-accent-m-600 bg-shades-l-200 dark:bg-shades-d-800 px-4 py-2 border-b"
		>
			<div class="flex items-center gap-4">
				<img class="w-14 h-14" :src="Logo" alt="Logo" />
				<div>
					<h1 class="text-2xl">CoachLink</h1>
					<p class="text-shades-l-700 text-sm dark:text-shades-d-300">
						У нас лучшие наставники
					</p>
				</div>
			</div>

			<nav class="flex justify-center items-center gap-4">
				<div>
					<div
						class="flex justify-center items-center gap-3 px-4 transition-all cursor-pointer hover: hover:bg-shades-l hover:dark:bg-shades-d py-2 rounded-xl"
					>
						<div class="border-2 border-accent-d border rounded-full w-12 h-12">
							<img src="https://avatar.iran.liara.run/public/12" alt="" />
						</div>
						<div class="flex flex-col">
							<span class="text-xl">Антон</span>
							<span class="text-shades-l-700 dark:text-shades-d-300"
								>Студент</span
							>
						</div>
					</div>
					<div></div>
				</div>

				<div
					class="hover:opacity-70 w-10 h-10 transition-all cursor-pointer"
					@click="toggleDark()"
				>
					<SunIcon v-if="isLight" />
					<MoonIcon v-else />
				</div>
			</nav>
		</header>

		<main class="flex-1 p-6">
			<slot></slot>
		</main>

		<footer class="flex justify-center items-center bg-shades-d-600 px-4 py-6">
			<div class="opacity-70 text-center text-shades-l">
				<p>CoachLink© {{ footerYear }}</p>
				<p>Все права защищены</p>
			</div>
		</footer>
	</div>
</template>

<script setup>
import Logo from "@/assets/logo.svg";

import { onMounted, ref } from "vue";
import { useDark, useToggle } from "@vueuse/core";
import { MoonIcon, SunIcon } from "@heroicons/vue/24/outline";

const footerYear = ref();

const isLight = useDark();
const toggleDark = useToggle(isLight);

onMounted(() => {
	const date = new Date();
	footerYear.value = date.getFullYear();
});
</script>
