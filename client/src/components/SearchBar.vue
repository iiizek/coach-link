<template>
	<form class="sticky shadow-search-bar">
		<div class="flex justify-center items-stretch">
			<button
				type="reset"
				class="flex items-center gap-3 bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 p-4 rounded-l-lg font-head text-lg text-white uppercase transition-all group"
			>
				<FunnelIcon class="group-hover:scale-125 w-6 transition-all" /><span
					class="text-2xl"
					>Фильтры</span
				>
			</button>
			<input
				ref="searchInput"
				class="focus:border-accent-l bg-shades-d dark:bg-shades-l px-8 focus:border-t-4 focus:border-b-4 text-shades-l text-xl dark:text-shades-d outline-none"
				type="search"
				autocomplete="off"
				placeholder="Поиск лучших менторов!"
			/>
			<button
				type="submit"
				class="flex items-center gap-3 bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 p-4 rounded-r-lg font-head text-lg text-white uppercase transition-all group"
			>
				<span class="text-2xl">Найти</span>
				<MagnifyingGlassIcon
					class="group-hover:rotate-45 group-hover:scale-125 w-6 transition-all"
				/>
			</button>
		</div>
		<div></div>
	</form>
</template>

<script setup>
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";

const searchInput = ref(null);

onMounted(() => {
	searchInput.value.focus();
});
</script>
