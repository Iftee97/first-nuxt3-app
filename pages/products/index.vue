<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="product in products" :key="product.id">
        <NuxtLink :to="`/products/${product.id}`">{{ product.title }}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
}); // add products layout in this page

const { data: products } = await useFetch("https://fakestoreapi.com/products"); // fetch data from API
</script>