<template>
	<div
		ref="targetList"
		class="relative flex flex-col justify-stretch items-start w-full"
	>
		<button
			@click="handleOpen"
			type="button"
			:class="`inline-block p-2 rounded-lg text-xl placeholder:text-shades-d-200 outline-none peer hover:dark:bg-accent-m hover:bg-accent-m  ${
				isOpen ? 'bg-accent-m' : 'bg-shades-l-300  dark:bg-shades-d-700'
			}`"
		>
			{{ chosenItem.name }}
		</button>
		<ul
			v-show="isOpen"
			class="z-10 absolute flex flex-col border-accent-m bg-shades-l-300 dark:bg-shades-d-700 mt-14 border rounded-lg h-64 overflow-y-auto"
		>
			<li class="px-3 py-2 rounded text-lg transition-all cursor-pointer">
				<input
					placeholder="Поиск..."
					type="text"
					class="bg-shades-l dark:bg-shades-d px-2 py-2 rounded-lg w-full text-xl placeholder:text-shades-d-200 outline-none peer"
				/>
			</li>
			<li
				v-for="item in items"
				:key="item.id"
				class="hover:bg-accent-m px-3 py-2 rounded text-lg hover:text-white transition-all cursor-pointer"
			>
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";

defineProps({
	chosenItem: Object,
	items: Array,
});

const isOpen = ref(false);
const targetList = ref(null);

const handleOpen = () => {
	isOpen.value = !isOpen.value;
};

onClickOutside(targetList, () => (isOpen.value = false));
</script>
