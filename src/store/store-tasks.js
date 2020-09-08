import Vue from 'vue'
import { uid } from 'quasar'

const state = {
    tasks: {
        'ID1': {
            name: "Market",
            completed: false,
            dueDate: "28/08/2020",
            dueTime: "04:00 PM"
        },
        'ID2': {
            name: "Get fruits",
            completed: false,
            dueDate: "12/10/2020",
            dueTime: "05:00 PM"
        },
        'ID3': {
            name: "Study",
            completed: false,
            dueDate: "22/05/2020",
            dueTime: "06:00 PM"
        },
    },
    showAddTaskModel: false
    /*  tasks: [
         {
           id: 1,
           name: "Market",
           completed: false,
           dueDate: "28/08/2020",
           dueTime: "04:00 PM"
         },
         {
           id: 2,
           name: "Get fruits",
           completed: false,
           dueDate: "12/10/2020",
           dueTime: "05:00 PM"
         },
         {
           id: 3,
           name: "Study",
           completed: false,
           dueDate: "22/05/2020",
           dueTime: "06:00 PM"
         }
       ] */
}

const mutations = {
    updateTask(state, payload) {
        Object.assign(state.tasks[payload.id], payload.updates)
    },
    deleteTask(state, id) {
        Vue.delete(state.tasks, id)
    },
    addTask(state, payload) {
        Vue.set(state.tasks, payload.id, payload.task)
    }
}

const actions = {
    updateTask({ commit }, payload) {
        commit('updateTask', payload)
    },
    deleteTask({ commit }, id) {
        commit('deleteTask', id)
    },
    addTask({ commit }, task) {
    let taskId = uid()
        let payload = {
            id: taskId,
            task: task
        }
        commit('addTask', payload)
    }
}

const getters = {
    tasksToDo: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            if (!task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
    tasksCompleted: (state) => {
        let tasks = {}
        Object.keys(state.tasks).forEach(function (key) {
            let task = state.tasks[key]
            if (task.completed) {
                tasks[key] = task
            }
        })
        return tasks
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}