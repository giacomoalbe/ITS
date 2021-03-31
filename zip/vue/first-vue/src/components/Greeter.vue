<template>
  <div>
    <h1>Ciao, {{ name }}!</h1>
    <h2>Età: {{ age }}</h2>
    <h2 v-if="age >= 18">
      Puoi entrare!
    </h2>
    <h2 v-else>
      Non puoi entrare!
    </h2>
  </div>
</template>

<script>
export default {
  name: "Greeter",
  props: {
    name: String,
    age: Number
  },
  data() {
    return {};
  },
  mounted() {
    console.log("Siamo ritornati, porca t***a!");
  },
  methods: {}
};
</script>
