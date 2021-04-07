<template>
  <div>
    <h1>II cani più suimeglo che ce</h1>
    <button @click="fetchDog()">Fecc Dog</button>
    <div v-if="isLoading">Caricando...</div>
    <img v-else :src="cuteDogImage" alt="" width="200" height="200" />
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "CuteDog",
  data() {
    return {
      cuteDogImage: "",
      isLoading: false
    };
  },
  methods: {
    async fetchDog() {
      this.isLoading = true;

      let newCuteDog = await axios.get(
        "https://dog.ceo/api/breeds/image/random"
      );

      this.cuteDogImage = newCuteDog.data.message;

      this.isLoading = false;

      /*
      newCuteDog.then(
        function(response) {
          console.log("Evvati, abbiamo il kane!");
          console.log(response);
          console.log(newCuteDog);
          console.log("Ciaone");
          console.log("Biellone");
          console.log("Scherzone");
          console.log("Toottrone");
          console.log("Buttone");
          console.log("Burrone");
        },
        function(error) {
          console.log("Oppps, qualcosa è andato storto");
          console.log(error);
        }
      );
      */
    }
  }
};
</script>
<style></style>
