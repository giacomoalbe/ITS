<template>
  <div id="app">
    <ul>
      <li :key="link.path" v-for="link in links" @click="goToSection(link)">
        {{ link.label }}
      </li>
    </ul>
    <h3>La sezione selezionata selelezionanieb slelsaè {{ selectedLink }}</h3>
    <router-view></router-view>
    <!--
    <div v-if="selectedLink == 'Impostazioni'">
      <button>Aggiungi</button>
      <button>Modifica</button>
      <button>Elimina</button>
      <button style="background-color: red">Vasco</button>
    </div>
    <div v-if="selectedLink == 'Profilo'">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGy7IqwS-_hBv9VRzlW1cxu1PYCs2PMK6z5Q&usqp=CAU"
        alt=""
      />
    </div>
    <div v-if="selectedLink == 'Dashboard'">
      <img
        src="https://s21089.pcdn.co/wp-content/uploads/features/analytics/dashboard.jpg"
        alt=""
      />
    </div>
    -->
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      links: [
        {
          label: "Dashboard",
          path: "/dashboard"
        },
        {
          label: "Profilo",
          path: "/profile"
        },
        {
          label: "Impostazioni",
          path: "/settings"
        }
      ],
      selectedLink: null
    };
  },
  methods: {
    goToSection(link) {
      this.selectedLink = link;

      this.$router.push(link.path);
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

li {
  cursor: pointer;
}

li:hover {
  text-decoration: underline;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}
</style>
