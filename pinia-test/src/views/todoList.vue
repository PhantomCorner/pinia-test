<script setup>
import { useTodoStore } from "../stores/todoStore";
import { ref } from "vue";
const todoStore = useTodoStore();
const showDoneOnly = ref(false);
const inputValue = ref("");
const addTodo = () => {
  todoStore.addTodo(inputValue.value);
  inputValue.value = "";
};
const togglgDone = (id) => {
  todoStore.doneTodo(id);
};
const filterDone = () => {
  showDoneOnly.value = !showDoneOnly.value;
};
const todoClass = (status) => {
  let defaultClass = "todo-container";
  if (status) {
    defaultClass += " crossed";
  }
  return defaultClass;
};
</script>
<template>
  <div>
    <h1>To do List</h1>
    <input type="text" v-model="inputValue" />
    <button @click="addTodo">Add</button>
    <button @click="filterDone">
      {{ showDoneOnly ? "Show All" : "Show Done Only" }}
    </button>
    <div
      v-for="todo in showDoneOnly ? todoStore.markDone : todoStore.todos"
      :key="todo.id"
      :class="todoClass(todo.done)"
    >
      <p>ID: {{ todo.id }}</p>
      <p>Name: {{ todo.text }}</p>
      <p>Status: {{ todo.done }}</p>
      <button @click="togglgDone(todo.id)">Toggle</button>
    </div>
  </div>
</template>

<style>
.todo-container {
  display: flex;
  gap: 2em;
}

.crossed {
  text-decoration-line: line-through;
}
</style>
