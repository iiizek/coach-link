<template>
	<label
		for="upload"
		class="relative flex justify-center items-center border-4 border-shades-d-100 hover:border-accent-m hover:dark:border-accent-m dark:border-shades-l-900 border-dotted rounded-lg w-full h-48 transition-all cursor-pointer group"
	>
		<input
			id="upload"
			@change="handleFileChange"
			accept="image/"
			type="file"
			class="invisible"
		/>
		<div
			class="group-hover:text-accent-m top-1/2 left-1/2 absolute text-center text-shades-d-100 dark:text-shades-l-900 transition-all -translate-x-1/2 -translate-y-1/2"
		>
			<PhotoIcon class="m-auto h-20" v-if="!previewUrl" />
			<div v-else class="m-auto h-40">
				<img :src="previewUrl" alt="Preview" class="w-full h-full" />
			</div>
			<span v-if="!previewUrl" class="text-xl">Нажмите или перетащите</span>
		</div>
	</label>
</template>

<script setup>
import { PhotoIcon } from "@heroicons/vue/24/outline";
import { ref, onUnmounted } from "vue";

const file = ref(null);
const previewUrl = ref(null);

const handleFileChange = e => {
	const selectedFile = e.target.files[0];

	if (selectedFile && selectedFile.type.startsWith("image/")) {
		file.value = selectedFile;
		previewUrl.value = URL.createObjectURL(selectedFile);
	} else {
		file.value = null;
		previewUrl.value = null;
	}
};

onUnmounted(() => {
	if (previewUrl.value) {
		URL.revokeObjectURL(previewUrl.value);
	}
});
</script>
