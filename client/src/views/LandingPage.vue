<template>
	<section
		class="bg-shades-d dark:bg-shades-l px-32 py-10 rounded-3xl text-shades-l dark:text-shades-d"
	>
		<h3 class="text-4xl text-center uppercase">О нас</h3>
		<p class="mt-6 font-semibold text-2xl text-center">
			Команда
			<span class="font-extrabold text-accent-m">CoachLink</span> верит, что
			<span class="text-accent-l">каждый заслуживает</span> доступа к знаниям и
			опыту выдающихся профессионалов. Наш сервис помогает вам найти ментора,
			который подходит именно вам, будь то по цене, опыту или областям знаний.
		</p>
	</section>

	<section class="relative mt-24">
		<h3 class="text-4xl text-center uppercase">Как это работает?</h3>
		<ArrowTrendingUpIcon
			class="-top-80 left-1/2 -z-10 absolute w-3/4 text-accent-d -translate-x-1/2"
		/>
		<div class="z-10 flex justify-center items-center mt-10">
			<div class="bg-shades-l-600 dark:bg-shades-d-400 p-8 rounded-2xl">
				<h4 class="text-2xl">Поиск и Фильтрация</h4>
				<p class="mt-4 text-lg">
					Легко находите менторов по ключевым словам, ценам, тегам и компаниям,
					в которых они работали.
				</p>
			</div>
			<ChevronRightIcon class="w-96" />
			<div class="bg-shades-l-600 dark:bg-shades-d-400 p-8 rounded-2xl">
				<h4 class="text-2xl">Просмотр и Выбор</h4>
				<p class="mt-4 text-lg">
					Ознакомьтесь с профилями менторов, читайте отзывы и выбирайте того,
					кто подходит вам больше всего.
				</p>
			</div>
			<ChevronRightIcon class="w-96" />
			<div class="bg-shades-l-600 dark:bg-shades-d-400 p-8 rounded-2xl">
				<h4 class="text-2xl">Обучение и Обратная Связь</h4>
				<p class="mt-4 text-lg">
					Свяжитесь с ментором, начните обучение и делитесь своими впечатлениями
					с другими пользователями.
				</p>
			</div>
		</div>
	</section>

	<section class="mt-24">
		<h3 class="mb-16 text-4xl text-center uppercase">Почему выбираете нас?</h3>
		<div class="flex flex-1 justify-between items-center">
			<div class="flex flex-col gap-6 w-1/2">
				<details
					name="why-us"
					class="border-shades-d dark:border-shades-l bg-white-opacity dark:bg-black-opacity p-4 border rounded-2xl open:dark:text-accent-m-300 open:text-accent-m-600 transition-all"
				>
					<summary class="font-head text-3xl cursor-pointer">
						Большой Выбор Менторов
					</summary>
					<p class="mt-2 text-2xl">
						У нас представлены эксперты из различных областей и с разным уровнем
						опыта.
					</p>
				</details>
				<details
					name="why-us"
					class="border-shades-d dark:border-shades-l bg-white-opacity dark:bg-black-opacity p-4 border rounded-2xl open:dark:text-accent-m-300 open:text-accent-m-600 transition-all"
				>
					<summary class="font-head text-3xl cursor-pointer">
						Простота Использования
					</summary>
					<p class="mt-2 text-2xl">
						Интуитивно понятный интерфейс позволяет быстро находить нужную
						информацию и связываться с менторами.
					</p>
				</details>
				<details
					name="why-us"
					class="border-shades-d dark:border-shades-l bg-white-opacity dark:bg-black-opacity p-4 border rounded-2xl open:dark:text-accent-m-300 open:text-accent-m-600 transition-all"
				>
					<summary class="font-head text-3xl cursor-pointer">
						Качество и Надежность
					</summary>
					<p class="mt-2 text-2xl">
						Мы тщательно проверяем анкеты менторов, чтобы вы могли быть уверены
						в их компетентности.
					</p>
				</details>
			</div>
			<div class="w-1/2">
				<img
					class="filter-why-us"
					src="@/assets/why-us-pic.png"
					alt="Why us pic"
				/>
			</div>
		</div>
	</section>

	<section class="flex justify-between items-start my-16">
		<div class="w-1/2">
			<img src="@/assets/ambitions-pic.svg" alt="" />
		</div>
		<div class="flex flex-col gap-16 w-1/2">
			<div class="flex flex-col gap-3">
				<h3 class="text-4xl text-accent-m">Начните Свой Путь к Успеху</h3>
				<p class="text-2xl">
					Присоединяйтесь к нашему сообществу и найдите ментора, который поможет
					вам достичь новых высот. Зарегистрируйтесь сегодня и начните свое
					путешествие к успеху с поддержкой лучших наставников.
				</p>
			</div>
			<div class="flex flex-col gap-3">
				<h3 class="text-4xl text-accent-m">Поддержка и контакты</h3>
				<p class="text-2xl">
					Если у вас возникли вопросы или вам нужна помощь, свяжитесь с нами
					через [контактная информация].
				</p>
			</div>
			<p class="text-4xl text-end italic">
				Мы рады приветствовать вас на нашем сервисе и желаем успехов в вашем
				обучении!
			</p>
		</div>
	</section>
</template>

<script setup>
import {
	ArrowTrendingUpIcon,
	ChevronRightIcon,
} from "@heroicons/vue/24/outline";
</script>
