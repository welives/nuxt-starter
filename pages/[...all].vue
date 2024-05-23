<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div class="text-4xl">
      <Iconify name="i-carbon-warning"></Iconify>
    </div>
    <div>Not found</div>
    <div>
      <UButton @click="$router.back()" class="m-3 mt-8">Back</UButton>
    </div>
  </main>
</template>
