// В файле store/index.js

import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      tasks: []
    };
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    deleteTask(state, index) {
      state.tasks.splice(index, 1);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTask(state, payload) {
      state.tasks[payload.index] = payload.task;
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    loadTasks(state) {
      const savedTasks = localStorage.getItem('tasks');
      if (savedTasks) {
        state.tasks = JSON.parse(savedTasks);
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
    deleteTask({ commit }, index) {
      commit('deleteTask', index);
    },
    updateTask({ commit }, payload) {
      commit('updateTask', payload);
    },
    loadTasks({ commit }) {
      commit('loadTasks');
    }
  }
});

export default store;
