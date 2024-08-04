<template>
	<div class="overflow-hidden">
		<section class="relative w-full h-screen">
			<img
				class="bottom-0 absolute w-full h-screen dark:filter-main-pic-dark"
				:src="HomePageMainPic"
				alt="Home image"
			/>
			<div
				class="top-0 left-1/2 absolute bg-white-opacity dark:bg-black-opacity px-4 py-10 rounded-3xl w-full text-center -translate-x-1/2"
			>
				<div>
					<h3 class="mb-2 text-4xl text-accent-m text-nowrap uppercase">
						Найдите идеального наставника!
					</h3>
					<p class="text-xl">
						Наш портал поможет Вам найти лучших менторов для для вашего личного
						и профессионального роста
					</p>
				</div>
				<div class="flex justify-center items-stretch mt-4 w-full">
					<HomeNav v-if="$route.name === 'landing'" />
					<SearchBar v-else-if="$route.name === 'search'" />
				</div>
			</div>
		</section>

		<slot></slot>
	</div>
</template>

<script setup>
import HomePageMainPic from "@/assets/home-page-main-pic.svg";
import HomeNav from "@/components/HomeNav.vue";
import SearchBar from "@/components/SearchBar.vue";
</script>
