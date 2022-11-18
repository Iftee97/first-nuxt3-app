<template>
  <div>
    <h2>
      Product Details for <strong>{{ id }}</strong>
    </h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae atque
      reprehenderit eum repellendus hic, saepe modi in itaque praesentium alias.
    </p>
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
  layout: "products",
});
</script>