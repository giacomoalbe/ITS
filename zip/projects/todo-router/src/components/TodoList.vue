<template>
  <div>
    <h1>Cose da fare:</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="todo">
        {{ todo }}
        <button @click="deleteTodo(index)">Cancella</button>
        <button @click="setAsDone(index)">Fatto!</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  components: {},
  data() {
    return {
      todos: [],
      toBeDone: []
    };
  },
  mounted() {
    this.todos = this.loadTodosFromLocalStorage("todos");
    this.toBeDone = this.loadTodosFromLocalStorage("tobedone");
  },
  methods: {
    loadTodosFromLocalStorage(which) {
      if (localStorage.getItem(which) != null) {
        let todosString = localStorage.getItem(which);
        let todosArray = JSON.parse(todosString);

        return todosArray;
      }
      return [];
    },
    deleteTodo(index) {
      console.log("Adesso lo cancello!", index);
      this.todos.splice(index, 1);

      this.updateLocalStorage();
    },
    setAsDone(index) {
      console.log("Adesso lo segno come fatto", index);

      let doneTodo = this.todos[index];
      this.todos.splice(index, 1);
      this.toBeDone.push(doneTodo);

      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("tobedone", JSON.stringify(this.toBeDone));
    }
  }
};
</script>
