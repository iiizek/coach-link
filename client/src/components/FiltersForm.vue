<template>
	<div>
		<OpenComboBox
			title="Теги"
			placeholder="Найти теги..."
			:items="filterTags"
		/>
	</div>

	<div>
		<h5 class="mb-4 text-lg uppercase">Ценовой диапазон</h5>
		<div class="flex flex-col justify-start items-start gap-4">
			<div class="flex justify-start items-center gap-2">
				<label class="text-lg cursor-pointer" for="from-cost">От:</label>
				<input
					class="focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
					id="from-cost"
					type="text"
					placeholder="0 руб."
				/>
			</div>
			<div class="flex justify-start items-center gap-2">
				<label class="text-lg cursor-pointer" for="to-cost">До:</label>
				<input
					class="focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
					id="to-cost"
					type="text"
					placeholder="25000 руб."
				/>
			</div>
		</div>
	</div>

	<div>
		<OpenComboBox
			title="Компании"
			placeholder="Найти компании..."
			:items="filterTags"
		/>
	</div>

	<div>
		<OpenComboBox
			title="Профессии"
			placeholder="Найти профессии..."
			:items="filterTags"
		/>
	</div>
</template>

<script setup>
import { ref } from "vue";
import OpenComboBox from "./OpenComboBox.vue";

const filterTags = ref([
	{ id: 1, name: "Frontend" },
	{ id: 2, name: "Backend" },
	{ id: 3, name: "Vue" },
	{ id: 4, name: "Java" },
	{ id: 5, name: "Python" },
]);
</script>
