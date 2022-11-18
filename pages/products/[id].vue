<template>
  <div>
    <ProductDetails :product="product" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
}); // add products layout in this page

const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;

const { data: product } = await useFetch(uri, { key: id }); // fetch product

if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found!",
    fatal: true,
  });
}
</script>