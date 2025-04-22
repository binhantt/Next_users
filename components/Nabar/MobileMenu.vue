<template>
  <div class="space-y-1 px-2">
    <NuxtLink
      v-for="item in menuItems"
      :key="item.path"
      :to="item.path"
      :class="[
        'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200',
        $route.path === item.path
          ? 'bg-indigo-50 text-indigo-700'
          : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
      ]"
      @click="$emit('click')"
    >
      {{ item.name }}
    </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  menuItems: {
    type: Array,
    required: true
  }
});

defineEmits(['click']);
</script>

<style scoped>
/* Các styles cho menu di động */
</style>