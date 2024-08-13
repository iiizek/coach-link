<template>
	<h5 class="mb-4 text-lg uppercase">{{ title }}</h5>
	<div>
		<input
			class="mb-4 focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
			type="text"
			:placeholder="placeholder"
		/>
	</div>
	<ul
		class="flex flex-col justify-start items-start gap-1 p-2 max-h-32 text-nowrap overflow-auto"
	>
		<li
			v-for="item in items"
			:key="item.id"
			class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
		>
			<input class="cursor-pointer scale-125" id="tag-1" type="checkbox" />
			<label class="text-lg cursor-pointer" for="tag-1">{{ item.name }}</label>
		</li>
	</ul>
</template>

<script setup>
defineProps({
	title: String,
	placeholder: String,
	items: Array,
});
</script>
