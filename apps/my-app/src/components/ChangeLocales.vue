<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="flex flex-col items-center">
    <NuxtLink :to="switchLocalePath('en')">
      {{ $t('change-to-english') }}
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('pt')">
      {{ $t('change-to-portuguese') }}
    </NuxtLink>
  </div>
</template>
