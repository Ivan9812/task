<template>
    <div>
      <div v-for="(task, index) in tasks" :key="index">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">Delete</button>
        <button @click="editTask(index)">Edit</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'TaskList',
    props: {
      tasks: Array
    },
    methods: {
      deleteTask(index) {
        this.$store.dispatch('deleteTask', index)
      },
     
    }
  }
  </script>
  