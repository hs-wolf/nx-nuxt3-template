<script setup lang="ts">
definePageMeta({ middleware: ['counter-check'] });

const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <h1>my-app</h1>
    <NuxtIcon name="logo" filled />
    <NuxtLink :to="localePath({ name: 'index' })">
      {{ $t('go-to-first-page') }}
    </NuxtLink>
  </div>
</template>
