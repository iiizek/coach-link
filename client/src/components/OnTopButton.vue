<template>
	<button
		v-auto-animate
		v-if="visible"
		@click="scrollToTop"
		class="right-10 bottom-10 z-50 fixed flex justify-center items-center bg-shades-d-900 p-4 rounded-full text-lg text-shades-l hover:text-accent-m transition-all"
	>
		<ArrowUpIcon class="w-8 h-8" />
	</button>
</template>

<script setup>
import { ArrowUpIcon } from "@heroicons/vue/24/solid";

import { ref, onMounted, onUnmounted } from "vue";

const visible = ref(false);

const toggleVisibility = () => {
	if (window.scrollY > 250) {
		visible.value = true;
	} else {
		visible.value = false;
	}
};

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

onMounted(() => {
	window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
	window.removeEventListener("scroll", toggleVisibility);
});
</script>
