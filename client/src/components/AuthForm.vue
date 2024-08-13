<template>
	<form
		class="flex flex-col items-stretch border-shades-d-100 dark:border-shades-l-900 bg-shades-l-100 dark:bg-shades-d-900 shadow-xl border rounded-2xl w-full"
	>
		<div class="flex justify-center items-stretch">
			<button
				:class="`flex-1 px-6 py-4 dark:border-shades-l-900 border-shades-d-100 border-b rounded-tl-2xl text-xl ${
					regOrAuth === 'reg' ? 'text-white bg-accent-m' : ''
				}`"
				type="button"
				value="reg"
				@click="handleRegOrAuth"
			>
				Регистрация
			</button>
			<button
				:class="`flex-1 dark:border-shades-l-900 border-shades-d-100 px-6 py-4 border-r border-b rounded-tr-2xl text-xl ${
					regOrAuth === 'auth' ? 'text-white bg-accent-m' : ''
				}`"
				type="button"
				value="auth"
				@click="handleRegOrAuth"
			>
				Авторизация
			</button>
		</div>
		<div class="flex flex-col gap-6 p-6">
			<div class="flex flex-col gap-1">
				<label for="email" class="text-lg">Эл. почта</label>
				<div class="relative">
					<input
						class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl placeholder:text-shades-d-200 outline-none peer focus:outline-accent-m"
						id="email"
						type="email"
						placeholder="email@example.net"
					/>
					<AtSymbolIcon
						class="top-1/2 right-2 absolute w-8 text-shades-d-200 peer-focus:text-accent-m -translate-y-1/2"
					/>
				</div>
			</div>

			<div
				v-show="regOrAuth === 'reg'"
				class="flex justify-between items-stretch gap-4"
			>
				<div class="flex flex-col gap-1 w-full">
					<label class="text-lg" for="second-name">Фамилия</label>
					<input
						class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl outline-none focus:outline-accent-m"
						type="text"
						id="second-name"
						placeholder="Иванов"
					/>
				</div>
				<div class="flex flex-col gap-1 w-full">
					<label class="text-lg" for="first-name">Имя</label>
					<input
						class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl outline-none focus:outline-accent-m"
						type="text"
						id="first-name"
						placeholder="Иван"
					/>
				</div>
			</div>

			<div
				v-show="regOrAuth === 'reg'"
				class="flex justify-between items-stretch gap-4"
			>
				<div class="flex flex-col gap-1 w-full">
					<label class="text-lg" for="messengers">Мессенджеры</label>
					<input
						class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl outline-none focus:outline-accent-m"
						type="text"
						id="messengers"
						placeholder="@example, vk.com/my_uid"
					/>
				</div>
				<div class="flex flex-col gap-1 w-full">
					<label class="text-lg" for="phone">Номер телефона</label>
					<input
						class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl outline-none focus:outline-accent-m"
						type="tel"
						id="phone"
						placeholder="89001001010"
					/>
				</div>
			</div>

			<div class="flex justify-between items-stretch gap-4">
				<div class="flex flex-col gap-1 w-full">
					<label class="text-lg" for="password">Пароль</label>
					<div class="relative">
						<input
							class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl placeholder:text-shades-d-200 outline-none peer focus:outline-accent-m"
							type="password"
							id="password"
							placeholder="XXXXX"
						/>
						<LockClosedIcon
							class="top-1/2 right-2 absolute w-8 text-shades-d-200 peer-focus:text-accent-m -translate-y-1/2"
						/>
					</div>
				</div>
				<div v-show="regOrAuth === 'reg'" class="flex flex-col gap-1 w-full">
					<label class="text-lg" for="repass">Повтор пароля</label>
					<input
						class="bg-shades-l-300 dark:bg-shades-d-700 py-2 pr-12 pl-2 rounded-lg w-full text-xl outline-none focus:outline-accent-m"
						type="password"
						id="repass"
						placeholder="XXXXX"
					/>
				</div>
			</div>

			<div
				v-show="regOrAuth === 'reg'"
				class="flex justify-center items-center gap-4 hover:dark:dark:bg-shades-d-700 hover:bg-shades-l-300 mt-2 p-2 rounded-lg transition-all cursor-pointer"
			>
				<input
					class="dark:bg-shades-d-700 cursor-pointer accent-accent-m scale-125"
					id="user-agreements"
					type="checkbox"
				/>
				<label class="text-center text-lg cursor-pointer" for="user-agreements"
					>Я ознакомлен и полностью согласен с
					<span class="text-accent-m">пользовательским соглашением</span></label
				>
			</div>

			<button
				class="bg-accent-m hover:bg-accent-m-400 mt-2 p-2 rounded-lg text-white text-xl"
				type="submit"
			>
				{{
					regOrAuth === "auth"
						? "Войти"
						: $route.name === "auth-mentor"
						? "Далее"
						: "Зарегистрироваться"
				}}
			</button>
		</div>
	</form>
</template>

<script setup>
import { AtSymbolIcon } from "@heroicons/vue/24/outline";
import { LockClosedIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const regOrAuth = ref("reg");

const handleRegOrAuth = e => {
	regOrAuth.value = e.target.value;
};
</script>
