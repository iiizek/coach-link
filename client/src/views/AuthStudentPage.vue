<template>
	<div class="flex justify-between items-center my-4">
		<div class="flex justify-center items-center w-1/2">
			<AuthForm />
		</div>

		<div class="w-1/2">
			<img src="@/assets/ambitions-pic.svg" class="w-full" />
		</div>
	</div>
</template>

<script setup>
import AuthForm from "@/components/AuthForm.vue";
</script>
