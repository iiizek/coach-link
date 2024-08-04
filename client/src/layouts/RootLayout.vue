<template>
	<div class="relative flex flex-col min-h-screen">
		<RootHeader />

		<main class="flex-1 p-6">
			<slot></slot>
		</main>

		<RootFooter />
	</div>
</template>

<script setup>
import RootHeader from "@/components/RootHeader.vue";
import RootFooter from "@/components/RootFooter.vue";
</script>
