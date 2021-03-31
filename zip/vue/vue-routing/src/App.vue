<template>
  <div id="app">
    <ul>
      <li
        v-for="link in links"
        :key="link.path"
        :class="{
          active: $route.path == link.path
        }"
        @click="changeRoute(link.path)"
      >
        {{ link.label }}
      </li>
    </ul>
    <!-- <div>
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/utenti">Utenti</router-link>
      <router-link to="/ordini">Ordini</router-link>
    </div> -->

    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      links: [
        {
          label: "Dashboard",
          path: "/dashboard"
        },
        {
          label: "Utenti",
          path: "/utenti"
        },
        {
          label: "Ordini",
          path: "/ordini"
        }
      ]
    };
  },
  methods: {
    changeRoute(section) {
      this.$router.push(section);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.active {
  font-weight: bold;
  color: red;
}
</style>
