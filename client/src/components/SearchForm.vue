<template>
	<form
		class="top-20 left-1/2 sticky flex flex-col items-stretch gap-6 shadow-search-bar"
	>
		<div class="flex justify-center items-stretch">
			<button
				@click="handleFiltersOpen"
				type="reset"
				:class="`flex items-center gap-3 ${
					isFiltersOpen
						? 'bg-shades-l-200 text-shades-d dark:bg-shades-d-800 dark:text-shades-l'
						: 'bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 text-white'
				}  p-4 rounded-l-lg font-head text-lg  uppercase transition-all group`"
			>
				<FunnelIcon
					v-if="!isFiltersOpen"
					class="group-hover:scale-125 w-6 transition-all"
				/>
				<XMarkIcon v-else class="group-hover:scale-125 w-6 transition-all" />
				<span class="text-2xl">Фильтры</span>
			</button>
			<input
				ref="searchInput"
				class="focus:border-accent-l bg-shades-d dark:bg-shades-l px-8 focus:border-t-4 focus:border-b-4 text-shades-l text-xl dark:text-shades-d outline-none"
				type="search"
				autocomplete="off"
				placeholder="Поиск лучших менторов!"
			/>
			<button
				type="submit"
				class="flex items-center gap-3 bg-accent-l hover:bg-accent-l-400 hover:dark:bg-accent-l-600 p-4 rounded-r-lg font-head text-lg text-white uppercase transition-all group"
			>
				<span class="text-2xl">Найти</span>
				<MagnifyingGlassIcon
					class="group-hover:rotate-45 group-hover:scale-125 w-6 transition-all"
				/>
			</button>
		</div>
		<div
			v-show="isFiltersOpen"
			class="flex justify-around items-start gap-4 bg-shades-l-200 dark:bg-shades-d-800 p-6 rounded-lg"
		>
			<div>
				<h5 class="mb-4 text-lg uppercase">Теги</h5>
				<div>
					<input
						class="mb-4 focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
						type="text"
						placeholder="Найти теги..."
					/>
				</div>
				<ul
					class="flex flex-col justify-start items-start gap-1 p-2 max-h-32 text-nowrap overflow-auto"
				>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="tag-1"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="tag-1">Python</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="tag-2"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="tag-2">Frontend</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="tag-3"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="tag-3"
							>Data Analyst</label
						>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="tag-4"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="tag-4">ML</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="tag-5"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="tag-5">ML</label>
					</li>
				</ul>
			</div>

			<div>
				<h5 class="mb-4 text-lg uppercase">Ценовой диапазон</h5>
				<div class="flex flex-col justify-start items-start gap-4">
					<div class="flex justify-start items-center gap-2">
						<label class="text-lg cursor-pointer" for="from-cost">От:</label>
						<input
							class="focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
							id="from-cost"
							type="text"
							placeholder="0 руб."
						/>
					</div>
					<div class="flex justify-start items-center gap-2">
						<label class="text-lg cursor-pointer" for="to-cost">До:</label>
						<input
							class="focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
							id="to-cost"
							type="text"
							placeholder="25000 руб."
						/>
					</div>
				</div>
			</div>

			<div>
				<h5 class="mb-4 text-lg uppercase">Компании</h5>
				<div>
					<input
						class="mb-4 focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
						type="text"
						placeholder="Найти компании..."
					/>
				</div>
				<ul
					class="flex flex-col justify-start items-start gap-1 p-2 max-h-32 overflow-auto"
				>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="company-1"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="company-1"
							>VK Group</label
						>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="company-2"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="company-2">Yandex</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="company-3"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="company-3"
							>SberTech</label
						>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="company-4"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="company-4">T-Bank</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="company-5"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="company-5"
							>X5 Tech</label
						>
					</li>
				</ul>
			</div>

			<div>
				<h5 class="mb-4 text-lg uppercase">Профессии</h5>
				<div>
					<input
						class="mb-4 focus:outline-accent-m bg-shades-d dark:bg-shades-l px-3 py-1 rounded text-lg text-shades-l dark:text-shades-d outline-none"
						type="text"
						placeholder="Найти профессии..."
					/>
				</div>
				<ul
					class="flex flex-col justify-start items-start gap-1 p-2 max-h-32 overflow-auto"
				>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="job-1"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="job-1">Frontend</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="job-2"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="job-2">Backend</label>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="job-3"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="job-3"
							>Data Science</label
						>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="job-4"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="job-4"
							>Data Analyst</label
						>
					</li>
					<li
						class="flex justify-center items-center gap-2 cursor-pointer accent-accent-m"
					>
						<input
							class="cursor-pointer scale-125"
							id="job-5"
							type="checkbox"
						/>
						<label class="text-lg cursor-pointer" for="job-5">HR</label>
					</li>
				</ul>
			</div>
		</div>
	</form>
</template>

<script setup>
import {
	FunnelIcon,
	MagnifyingGlassIcon,
	XMarkIcon,
} from "@heroicons/vue/24/outline";
import { onMounted, ref } from "vue";

const searchInput = ref(null);
const isFiltersOpen = ref(false);

const handleFiltersOpen = () => {
	isFiltersOpen.value = !isFiltersOpen.value;
};

onMounted(() => {
	searchInput.value.focus();
});
</script>
