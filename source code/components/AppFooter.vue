<script setup>
function nameClick() {
    document.getElementById('name').scrollIntoView({
        behavior: 'smooth'
    });
}
</script>
<template>
    <footer
        class="fixed bottom-0 left-0 z-20 w-full p-4 bg-blue-600 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-5 dark:bg-gray-800 dark:border-gray-600">
        <div class="text-center">
            <button @click="nameClick" type="button"
                class="hidden lg:flex text-3xl text-white footer-left font-medium focus:outline-none bg-transparent hover:text-sky-200 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:text-white animate__animated animate__rotateIn">Adityo
                Ar Rafiuddin</button>
        </div>
        <div class="text-center animate__animated animate__rotateIn">
            <span class="text-sm text-white dark:text-white">© 2024 <NuxtLink to="https://linktr.ee/adityoarr"
                    class="hover:underline text-sky-200 underline" target="_blank">adityoarr</NuxtLink>. All Rights
                Reserved.
            </span>
        </div>
    </footer>
</template>