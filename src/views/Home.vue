<template>
  <div class="home">
    <h1>Welcome to Task Manager</h1>
    <router-link to="/tasks" class="button">View Tasks</router-link>
  </div>
</template>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: #0056b3;
}
</style>
