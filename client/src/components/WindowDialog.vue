<template>
	<div
		v-if="isVisible"
		class="top-0 left-0 z-50 fixed bg-black bg-opacity-75 w-full h-dvh"
	>
		<div class="relative w-full h-full">
			<div
				class="top-1/2 left-1/2 absolute border-shades-d-100 dark:border-shades-l-900 bg-shades-l dark:bg-shades-d p-8 border rounded-xl max-h-[95vh] -translate-x-1/2 -translate-y-1/2"
			>
				<div class="flex justify-between items-center">
					<h2 class="text-3xl">{{ title }}</h2>
					<XMarkIcon
						@click="emit('handleIsVisible')"
						class="h-12 hover:text-accent-m transition-all cursor-pointer"
					/>
				</div>

				<p
					class="mt-6 pt-6 border-t-2 border-t-shades-d-100 dark:border-t-shades-l-900 text-xl"
				>
					{{ info }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";

defineProps({
	title: String,
	info: String,
	isVisible: Boolean,
});

const emit = defineEmits(["handleIsVisible"]);
</script>
