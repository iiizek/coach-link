<template>
	<div class="flex justify-between items-center my-4">
		<div class="w-1/2">
			<img src="@/assets/home-page-main-pic.svg" class="w-full" />
		</div>

		<div class="flex justify-center items-center w-1/2">
			<AuthForm />
			<!-- <MentorApplicationForm /> -->
		</div>
	</div>

	<WindowDialog
		title="Ваша заявка была отправлена"
		info="Мы получили вашу заявку на регистрацию в наставники. Через некоторое время вы получите письмо, на указанную вами эл. почту с информацией о регистрации"
		:is-visible="dialogIsVisible"
		@handle-is-visible="handleIsVisible"
	/>
</template>

<script setup>
import AuthForm from "@/components/AuthForm.vue";
import MentorApplicationForm from "@/components/MentorApplicationForm.vue";
import WindowDialog from "@/components/WindowDialog.vue";
import { ref } from "vue";

const dialogIsVisible = ref(true);

const handleIsVisible = () => {
	dialogIsVisible.value = false;
};
</script>
