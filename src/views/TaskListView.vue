<template>
  <div class="task-list-view">
    <h1 class="page-title">Tasks</h1>
    <task-form />
    <div class="task-list">
      <div class="task-item" v-for="(task, index) in tasks" :key="index">
        <span class="task-name">{{ editIndex === index ? editedTask : task }}</span>
        <div class="task-buttons">
          <button class="edit-button" @click="editTask(index)">Edit</button>
          <button class="delete-button" @click="deleteTask(index)">Delete</button>
        </div>
      </div>
    </div>

   
    <div class="modal" v-if="editIndex !== null">
      <div class="modal-content">
        <h2>Edit Task</h2>
        <input type="text" v-model="editedTask" placeholder="Edit task" class="edit-input" />
        <div class="modal-buttons">
          <button @click="saveEdit" class="save-button">Save</button>
          <button @click="cancelEdit" class="cancel-button">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm.vue'

export default {
  name: 'TaskListView',
  components: {
    TaskForm
  },
  data() {
    return {
      editIndex: null,
      editedTask: ''
    }
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
  methods: {
    editTask(index) {
      this.editIndex = index;
      this.editedTask = this.tasks[index];
    },
    saveEdit() {
      if (this.editedTask.trim() === '') return;
      this.$store.dispatch('updateTask', { index: this.editIndex, task: this.editedTask });
      this.closeModal();
    },
    cancelEdit() {
      this.editIndex = null;
      this.editedTask = '';
    },
    deleteTask(index) {
      this.$store.dispatch('deleteTask', index);
    },
    closeModal() {
      this.editIndex = null;
      this.editedTask = '';
    }
  }
}
</script>

<style scoped>
.task-list-view {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  font-family: 'Roboto', sans-serif;
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
}

.task-form {
  margin-bottom: 20px;
}

.task-list {
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow: hidden;
}

.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 7px 20px;
  border-bottom: 1px solid #ccc;
}

.task-item:last-child {
  border-bottom: none;
}

.task-name {
  flex-grow: 1;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
}

.task-buttons {
  display: flex;
  align-items: center;
}

.edit-button, .delete-button {
  padding: 8px 12px;
  margin-left: 10px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.edit-button:hover, .delete-button:hover {
  background-color: #0056b3;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  text-align: center;
}

.modal-content h2 {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  margin-bottom: 15px;
}

.edit-input {
  width: 90%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.modal-buttons {
  display: flex;
  justify-content: flex-end;
}

.save-button, .cancel-button {
  padding: 8px 12px;
  margin-left: 10px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover, .cancel-button:hover {
  background-color: #0056b3;
}
</style>
