<template>
	<li
		class="flex items-stretch border-shades-d-100 dark:border-shades-d-400 bg-shades-l dark:bg-shades-d shadow hover:shadow-lg border rounded-xl transition-all hover:-translate-y-1 cursor-pointer"
	>
		<img
			class="rounded-l-xl w-1/3 h-full object-cover"
			src="https://primamediamts.servicecdn.ru/f/big/4001/4000721.jpg?2c1984709f2596165d34153f12bf119f"
			alt="Mentor Avatar"
		/>
		<div class="flex flex-col px-6 py-4 w-full">
			<div class="flex justify-between items-center w-full">
				<ul class="flex flex-wrap justify-start items-stretch gap-2 mb-2">
					<li>
						<div
							class="bg-shades-l-600 dark:bg-shades-d-400 px-1 py-0.5 rounded text-nowrap text-white"
						>
							Python
						</div>
					</li>
					<li>
						<div
							class="bg-shades-l-600 dark:bg-shades-d-400 px-1 py-0.5 rounded text-nowrap text-white"
						>
							Django
						</div>
					</li>
				</ul>

				<span class="text-shades-d-200 dark:text-shades-l-700">Backend</span>
			</div>

			<div class="mt-2 text-xl uppercase">
				<h6>Иванов Иван</h6>
			</div>

			<div class="flex justify-between items-end mt-6">
				<ul class="flex flex-wrap gap-2">
					<li>
						<div class="text-shades-d-200 dark:text-shades-l-700">Yandex</div>
					</li>
					<li>
						<div class="text-shades-d-200 dark:text-shades-l-700">Samokat</div>
					</li>
				</ul>

				<span class="font-bold font-head text-accent-m">3990 ₽</span>
			</div>
		</div>
	</li>
</template>

<script setup></script>
