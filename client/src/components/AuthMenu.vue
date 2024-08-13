<template>
	<div class="flex flex-col justify-start items-end" ref="targetMenu">
		<div
			@click="handleIsOpen"
			:class="`flex justify-center items-center gap-3 px-4 transition-all cursor-pointer ${
				isOpen && 'dark:bg-shades-d bg-shades-l-400'
			} hover:bg-shades-l hover:dark:bg-shades-d-400 py-2 rounded-xl`"
		>
			<div class="border-2 border-accent-d rounded-full w-12 h-12">
				<img src="https://avatar.iran.liara.run/public/12" alt="" />
			</div>
			<div class="flex flex-col">
				<span class="text-xl">Антон</span>
				<span class="text-shades-l-700 dark:text-shades-d-300">Студент</span>
			</div>
		</div>
		<ul
			v-show="isOpen"
			class="top-16 z-10 absolute flex flex-col border-shades-d-100 dark:border-shades-l-900 bg-shades-l-300 dark:bg-shades-d-600 mt-3 py-1 border rounded-xl w-80 text-lg"
		>
			<li>
				<div
					class="flex justify-between items-center hover:bg-shades-l hover:dark:bg-shades-d-400 mx-1 px-3 py-1 rounded-lg transition-all cursor-pointer"
				>
					<span class="flex-1">Профиль</span> <UserIcon class="w-6" />
				</div>
			</li>
			<li>
				<div
					class="flex justify-between items-center hover:bg-shades-l hover:dark:bg-shades-d-400 mx-1 px-3 py-1 rounded-lg transition-all cursor-pointer"
				>
					<span class="flex-1">Выйти из аккаунта</span>
					<ArrowDownOnSquareIcon class="w-6" />
				</div>
			</li>
			<li>
				<div
					class="bg-shades-d-100 dark:bg-shades-l-900 my-2 w-full h-px"
				></div>
			</li>
			<li>
				<div
					class="flex justify-between items-center hover:bg-shades-l hover:dark:bg-shades-d-400 mx-1 px-3 py-1 rounded-lg transition-all cursor-pointer"
				>
					<span class="flex-1">Мои менторы</span> <FlagIcon class="w-6" />
				</div>
			</li>
			<li>
				<div
					class="flex justify-between items-center hover:bg-shades-l hover:dark:bg-shades-d-400 mx-1 px-3 py-1 rounded-lg text-accent-m transition-all cursor-pointer"
				>
					<span class="flex-1">Избранные</span>
					<BookmarkIconSolid class="w-6" />
				</div>
			</li>
			<li>
				<div
					class="flex justify-between items-center hover:bg-shades-l hover:dark:bg-shades-d-400 mx-1 px-3 py-1 rounded-lg transition-all cursor-pointer"
				>
					<span class="flex-1">Мои занятия</span>
					<ClipboardDocumentCheckIcon class="w-6" />
				</div>
			</li>
			<li>
				<div
					class="flex justify-between items-center hover:bg-shades-l hover:dark:bg-shades-d-400 mx-2 px-2 py-1 rounded-lg transition-all cursor-pointer"
				>
					<span class="flex-1">История занятий</span>
					<ClockIcon class="w-6" />
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup>
import {
	UserIcon,
	ArrowDownOnSquareIcon,
	FlagIcon,
	BookmarkIcon,
	ClipboardDocumentCheckIcon,
	ClockIcon,
} from "@heroicons/vue/24/outline";
import {
	UserIcon as UserIconSolid,
	ArrowDownOnSquareIcon as ArrowDownOnSquareIconSolid,
	FlagIcon as FlagIconSolid,
	BookmarkIcon as BookmarkIconSolid,
	ClipboardDocumentCheckIcon as ClipboardDocumentCheckIconSolid,
	ClockIcon as ClockIconSolid,
} from "@heroicons/vue/24/solid";
import { onClickOutside } from "@vueuse/core";
import { ref } from "vue";

const isOpen = ref(false);
const targetMenu = ref(null);

const handleIsOpen = () => {
	isOpen.value = !isOpen.value;
};

onClickOutside(targetMenu, () => (isOpen.value = false));
</script>
