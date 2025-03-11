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
const filterDone = (val) => {
  if (val) todoStore.filter = "done";
  if (!val) todoStore.filter = "undone";
  if (val === "all") todoStore.filter = "all";
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
    <button @click="filterDone('all')">Show All</button>
    <button @click="filterDone(true)">Done only</button>
    <button @click="filterDone(false)">Undone Only</button>
    <div
      v-for="todo in todoStore.filterTodos"
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
