<template>
  <div class="navigation">
    <button :key="link.path" v-for="link in links">
      <router-link :to="link.path">
        {{ link.label }}
      </router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  components: {},
  data() {
    return {
      links: [
        {
          label: "Nuovo",
          path: "/new"
        },
        {
          label: "Da Fare",
          path: "/todo"
        },
        {
          label: "Già Fatti",
          path: "/done"
        }
      ]
    };
  },
  methods: {}
};
</script>
