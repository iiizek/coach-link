<template>
	<div
		v-if="isVisible"
		class="top-0 left-0 z-50 fixed bg-black bg-opacity-75 w-full h-screen"
	>
		<div class="relative w-full h-full">
			<div
				class="top-0 right-0 absolute bg-shades-l dark:bg-shades-d p-6 w-1/4 h-full overflow-auto"
				ref="targetDrawer"
			>
				<div class="flex justify-start items-center gap-4">
					<ChevronLeftIcon
						class="w-10 hover:text-accent-m transition-all hover:-translate-x-1 cursor-pointer"
						@click="emit('closeDrawer')"
					/>
					<h2 class="text-2xl">{{ title }}</h2>
				</div>
				<div class="flex flex-col gap-8 mt-8">
					<slot></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ChevronLeftIcon } from "@heroicons/vue/24/outline";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

defineProps({
	title: String,
	isVisible: Boolean,
});

const emit = defineEmits(["closeDrawer"]);

const targetDrawer = ref(null);

onClickOutside(targetDrawer, () => emit("closeDrawer"));
</script>
