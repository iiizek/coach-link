<template>
	<form
		class="top-20 left-1/2 sticky flex flex-col items-stretch gap-6 shadow-search-bar"
	>
		<div class="flex justify-center items-stretch">
			<button
				@click="emit('openFilterDrawer')"
				type="button"
				:class="`flex items-center gap-3 ${
					isFiltersOpen
						? 'bg-shades-l-200 text-shades-d dark:bg-shades-d-800 dark:text-shades-l'
						: 'bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 text-white'
				}  p-4 rounded-l-lg font-head text-lg  uppercase transition-all group`"
			>
				<FunnelIcon
					v-if="!isFiltersOpen"
					class="group-hover:scale-125 w-6 transition-all"
				/>
				<XMarkIcon v-else class="group-hover:scale-125 w-6 transition-all" />
				<span class="text-2xl">Фильтры</span>
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
	</form>
</template>

<script setup>
import {
	FunnelIcon,
	MagnifyingGlassIcon,
	XMarkIcon,
} from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";

const emit = defineEmits(["openFilterDrawer"]);

const searchInput = ref(null);
const isFiltersOpen = ref(false);

onMounted(() => {
	searchInput.value.focus();
});
</script>
