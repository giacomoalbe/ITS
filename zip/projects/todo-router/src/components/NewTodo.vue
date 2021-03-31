<template>
  <div>
    <input type="text" v-model="newTodo" />
    <button @click="addTodo()">Aggiungi</button>
  </div>
</template>

<script>
export default {
  name: "NewTodo",
  components: {},
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  mounted() {
    this.loadTodosFromLocalStorage();
  },
  methods: {
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = "";

      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    loadTodosFromLocalStorage() {
      if (localStorage.getItem("todos") != "") {
        let todosString = localStorage.getItem("todos");
        let todosArray = JSON.parse(todosString);

        this.todos = todosArray;
      }
    }
  }
};
</script>
