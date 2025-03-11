import { defineStore } from "pinia";
export const useTodoStore = defineStore("todoStore", {
  state: () => ({
    todos: [],
  }),
  getters: {
    markDone: (state) => {
      state.todos.filter((todo) => todo.done);
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
