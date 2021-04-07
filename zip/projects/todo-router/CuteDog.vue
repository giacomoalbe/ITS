<template>
  <div>
    <h1>II cani più suimeglo che ce</h1>
    <button @click="fetchDog()">Fecc Dog</button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CuteDog",
  data() {
    return {};
  },
  methods: {
    fetchDog() {
      console.log("Do the magic");
      let data = axios.get("https://dog.ceo/api/breeds/image/random");

      console.log(data);
    }
  }
};
</script>
<style></style>
