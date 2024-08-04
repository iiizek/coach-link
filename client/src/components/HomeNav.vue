<template>
	<router-link to="/auth-student">
		<button
			class="flex items-center gap-3 bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 p-4 rounded-l-lg h-full font-head text-lg text-white uppercase transition-all group"
		>
			<span class="text-2xl transition-all group-hover:translate-x-1">⭢</span>
			Ищу наставника
		</button>
	</router-link>

	<router-link to="/search">
		<button
			class="flex items-center gap-3 bg-shades-d hover:bg-shades-d-400 hover:dark:bg-shades-l-600 dark:bg-shades-l p-4 h-full font-head text-lg text-shades-l dark:text-shades-d uppercase transition-all group"
		>
			Поиск менторов
			<MagnifyingGlassIcon
				class="group-hover:rotate-45 group-hover:scale-125 w-6 transition-all"
			/>
		</button>
	</router-link>

	<router-link to="/auth-mentor">
		<button
			class="flex items-center gap-3 bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 p-4 rounded-r-lg h-full font-head text-lg text-white uppercase transition-all group"
		>
			Я наставник
			<span class="text-2xl transition-all group-hover:-translate-x-1">⭠</span>
		</button>
	</router-link>
</template>

<script setup>
import { MagnifyingGlassIcon } from "@heroicons/vue/24/outline";
</script>
