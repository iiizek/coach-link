<template>
	<ul class="flex justify-start items-stretch gap-2">
		<li
			v-for="item in chosenItems"
			:key="item.id"
			class="bg-accent-d p-2 rounded-lg text-white text-xl"
		>
			{{ item.name }}
		</li>
		<li class="relative flex flex-col justify-stretch items-end">
			<input
				@focusin="openList"
				@focusout="closeList"
				placeholder="Поиск..."
				type="text"
				class="bg-shades-l-300 dark:bg-shades-d-700 px-2 py-2 rounded-lg w-40 text-xl placeholder:text-shades-d-200 outline-none peer focus:outline-accent-m focus:dark:outline-accent-m"
			/>
			<ul
				class="z-10 absolute flex flex-col border-accent-m bg-shades-l-300 dark:bg-shades-d-700 mt-14 border rounded-lg h-40 overflow-y-auto"
				v-show="isOpenList"
			>
				<li
					v-for="item in items"
					:key="item.id"
					class="hover:bg-accent-m px-3 py-2 rounded text-lg hover:text-white transition-all cursor-pointer"
				>
					{{ item.name }}
				</li>
			</ul>
		</li>
	</ul>
</template>

<script setup>
import { ref } from "vue";

defineProps({
	chosenItems: Array,
	items: Array,
});

const isOpenList = ref(false);

const openList = () => {
	isOpenList.value = true;
};

const closeList = () => {
	isOpenList.value = false;
};
</script>
