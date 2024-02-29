<template>
  <form @submit.prevent="submitForm" class="task-form">
    <input type="text" v-model="newTask" placeholder="Enter task" class="task-input" />
    <button type="submit" class="add-button">Add Task</button>
  </form>
</template>

<script>
export default {
  name: 'TaskForm',
  data() {
    return {
      newTask: ''
    }
  },
  methods: {
    submitForm() {
      if (this.newTask.trim() === '') return
      this.$store.dispatch('addTask', this.newTask)
      this.newTask = ''
    },
   
  }
}
</script>

<style scoped>
.task-form {
  display: flex;
  align-items: center;
}

.task-input {
  flex-grow: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.add-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: #0056b3;
}
</style>
