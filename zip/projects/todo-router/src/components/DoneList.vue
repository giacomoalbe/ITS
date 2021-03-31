<template>
  <div>
    <h1>Cose già fatte</h1>
    <ul>
      <li v-for="(todo, index) in toBeDone" :key="todo">
        {{ todo }}
        <button @click="deleteTodo(index)">Cancella</button>
        <button @click="setAsTodo(index)">Da fare!</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DoneList",
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
      this.toBeDone.splice(index, 1);

      this.updateLocalStorage();
    },
    setAsTodo(index) {
      let todo = this.toBeDone[index];
      this.toBeDone.splice(index, 1);
      this.todos.push(todo);

      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
      localStorage.setItem("tobedone", JSON.stringify(this.toBeDone));
    }
  }
};
</script>
