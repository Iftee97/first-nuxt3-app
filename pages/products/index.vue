<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="product in products" :key="product.id">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
}); // add products layout in this page

const { data: products } = await useFetch("https://fakestoreapi.com/products"); // fetch data from API

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
}); // add title & meta tags in this page
</script>