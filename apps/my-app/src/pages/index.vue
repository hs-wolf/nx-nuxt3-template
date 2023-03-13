<script setup lang="ts">
const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <h1>my-app</h1>
    <NuxtIcon name="logo" filled />
    <NuxtLink :to="localePath({ name: 'second' })">
      {{ $t('go-to-second-page') }}
    </NuxtLink>
    <NuxtImg src="/nuxt-logo.png" width="256" height="256" alt="Nuxt Logo" loading="lazy" />
    <ChangeLocales />
    <TestingCounter />
  </div>
</template>
