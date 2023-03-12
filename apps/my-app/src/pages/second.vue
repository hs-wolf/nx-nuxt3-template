<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col items-center gap-2">
    <h1>my-app</h1>
    <NuxtIcon name="logo" filled />
    <NuxtLink :to="localePath({ name: 'index' })">
      {{ $t('go-to-first-page') }}
    </NuxtLink>
    <NuxtImg
      src="/nuxt-logo.png"
      width="256"
      height="256"
      alt="Nuxt Logo"
      loading="lazy"
    />
    <NuxtLink :to="switchLocalePath('en')">
      {{ $t('change-to-english') }}
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('pt')">
      {{ $t('change-to-portuguese') }}
    </NuxtLink>
  </div>
</template>
