<script setup>
import { useTodoStore } from "../stores/todoStore";
import { ref } from "vue";
const todoStore = useTodoStore();

const inputValue = ref("");
const addTodo = () => {
  todoStore.addTodo(inputValue.value);
  inputValue.value = "";
};
const togglgDone = (id) => {
  todoStore.doneTodo(id);
};
</script>
<template>
  <div>
    <h1>To do List</h1>
    <input type="text" v-model="inputValue" />
    <button @click="addTodo">Add</button>
    <div v-for="todo in todoStore.todos" class="todo-container">
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
}
</style>
