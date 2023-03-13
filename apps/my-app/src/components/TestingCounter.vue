<script setup lang="ts">
const counter = useTesting();

const localePath = useLocalePath();
</script>

<template>
  <div class="flex flex-col items-center">
    <button @click.prevent="counter++">
      {{ $t('testing-counter', { value: counter }) }}
    </button>
    <NuxtLink :to="localePath({ name: 'testing' })">
      {{ $t('go-to-testing-page') }}
    </NuxtLink>
  </div>
</template>
