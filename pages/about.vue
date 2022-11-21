<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
      delectus iusto quidem quo id adipisci quas porro libero harum! Nisi!
    </p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
      delectus iusto quidem quo id adipisci quas porro libero harum! Nisi!
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script setup>
const { data } = await useFetch("/api/ninja?name=Iftee", {
  method: "post",
  body: {
    age: 25,
  },
}); // GET (without options object) / POST (with options object) data
</script>

<style scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>