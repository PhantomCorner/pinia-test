import { defineStore } from "pinia";
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
    filter: "all",
  }),
  getters: {
    filterTodos() {
      if (this.filter === "all") {
        return this.todos;
      }
      if (this.filter === "done") {
        return this.todos.filter((todo) => todo.done === true);
      }
      if (this.filter === "undone") {
        return this.todos.filter((todo) => todo.done === false);
      }
    },
  },
  actions: {
    addTodo(todo) {
      this.todos.push({
        id: Math.ceil(Math.random() * 1000000),
        text: todo,
        done: false,
      });
    },
    doneTodo(id) {
      const index = this.todos.findIndex((todo) => {
        return todo.id === id;
      });

      this.todos[index].done = !this.todos[index].done;
    },
  },
});
