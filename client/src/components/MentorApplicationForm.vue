<template>
	<form
		class="flex flex-col items-stretch border-shades-d-100 dark:border-shades-l-900 bg-shades-l-100 dark:bg-shades-d-900 shadow-xl border rounded-2xl w-full"
	>
		<div class="flex flex-col gap-6 p-6">
			<div class="flex flex-col gap-1">
				<label for="bio" class="text-lg">Кто вы?</label>

				<textarea
					rows="3"
					class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl placeholder:text-shades-d-200 outline-none peer focus:outline-accent-m"
					id="bio"
					placeholder="Напишите здесь вашу краткую биографию, опыт работы и т.д."
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label for="skills" class="text-lg">Чему вы можете обучить?</label>

				<textarea
					rows="3"
					class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl placeholder:text-shades-d-200 outline-none peer focus:outline-accent-m"
					id="skills"
					placeholder="Создавать реактивные Vue-приложения, ..."
				/>
			</div>

			<div class="flex flex-col gap-1">
				<label class="text-lg">Где работали?</label>
				<ComboBox :chosenItems="chosenCompany" :items="companyList" />
			</div>

			<div class="flex flex-col items-start gap-1">
				<label class="text-lg">Ваша должность:</label>
				<DropdownMenu :chosenItem="chosenWork" :items="workList" />
			</div>

			<div class="flex flex-col gap-1">
				<label class="text-lg">Выберите теги для вашей анкеты:</label>
				<ComboBox :chosenItems="chosenTag" :items="tagList" />
			</div>

			<div class="flex flex-col gap-1">
				<label class="text-lg">Ваша фотография:</label>
				<imageUploadForm />
			</div>

			<button
				class="bg-accent-m hover:bg-accent-m-400 mt-2 p-2 rounded-lg text-white text-xl"
				type="submit"
			>
				Отправить анкету
			</button>
		</div>
	</form>
</template>

<script setup>
import { reactive, ref } from "vue";

import ComboBox from "./ComboBox.vue";
import imageUploadForm from "./imageUploadForm.vue";
import DropdownMenu from "./DropdownMenu.vue";

const companyList = ref([
	{ id: 1, name: "VK Group" },
	{ id: 2, name: "Yandex" },
	{ id: 3, name: "T-Bank" },
	{ id: 4, name: "SberTech" },
	{ id: 5, name: "Samokat" },
]);
const chosenCompany = ref([
	{ id: 3, name: "T-Bank" },
	{ id: 4, name: "SberTech" },
]);

const workList = ref([
	{ id: 1, name: "VK Group" },
	{ id: 2, name: "Yandex" },
	{ id: 3, name: "T-Bank" },
	{ id: 4, name: "SberTech" },
	{ id: 5, name: "Samokat" },
]);
const chosenWork = reactive({ id: 8, name: "Backend" });

const tagList = ref([
	{ id: 1, name: "VK Group" },
	{ id: 2, name: "Yandex" },
	{ id: 3, name: "T-Bank" },
	{ id: 4, name: "SberTech" },
	{ id: 5, name: "Samokat" },
]);
const chosenTag = ref([
	{ id: 3, name: "T-Bank" },
	{ id: 4, name: "SberTech" },
]);
</script>
