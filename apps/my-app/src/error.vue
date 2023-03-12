<script setup lang="ts">
defineProps<{
  error:
    | Error
    | {
        url: string;
        statusCode: number;
        statusMessage: string;
        message: string;
        description: string;
        data?: any;
      }
    | null
    | undefined;
}>();

const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div class="flex flex-col items-center">
    <h1>Error Page</h1>
    <p>{{ error?.message }}</p>
    <button class="font-bold" @click="handleError">
      Clear Error
    </button>
  </div>
</template>
