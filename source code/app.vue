<script setup>
useHead({
  title: 'Portfolio - Adityo Ar Rafiuddin',
  meta: [
    { name: "description", content: "Adityo Ar Rafiuddin's Portfolio Site" }
  ]
})

useSeoMeta({
  title: "Adityo Ar Rafiuddin - Portfolio",
  ogTitle: "Adityo Ar Rafiuddin",
  description: "Adityo Ar Rafiuddin's Portfolio Site",
  ogDescription: "Adityo Ar Rafiuddin",
  ogImage: "",
  twitterCard: ""
})
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <AppHeader />
    <NuxtPage />
    <AppFooter />
  </div>
</template>
