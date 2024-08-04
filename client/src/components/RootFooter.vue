<template>
	<footer class="flex justify-center items-center bg-shades-d-600 px-4 py-6">
		<div class="opacity-70 text-center text-shades-l">
			<p>CoachLink© {{ footerYear }}</p>
			<p>Все права защищены</p>
		</div>
	</footer>
</template>

<script setup>
import { onMounted, ref } from "vue";

const footerYear = ref();

onMounted(() => {
	const date = new Date();
	footerYear.value = date.getFullYear();
});
</script>
