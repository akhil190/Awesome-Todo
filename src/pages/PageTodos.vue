<template>
  <q-page class="q-pa-md">
    <no-tasks v-if="!Object.keys(tasksToDo).length"/>
    <tasks-todo v-else :tasksToDo="tasksToDo" />

    <tasks-completed v-if="Object.keys(tasksCompleted).length" :tasksCompleted="tasksCompleted" />

    <div class="absolute-bottom text-center q-mb-lg">
      <q-btn @click="showAddTask = true" round color="primary" size="24px" icon="add" />
       <q-chip class="glossy" ripple  :color="getChipColor()"    text-color="white" icon-right="star">
        Star
      </q-chip>
    </div>

    <q-dialog v-model="showAddTask">
      <add-task @close="showAddTask = false" />
    </q-dialog>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      showAddTask: false
    };
  },
  computed: {
    /*  tasks() {
          return this.$store.getters['tasks/tasks']     // grab from 'tasks' store module and will grab 'tasks' getter
      } */

    // OR

    // one more way to grab the getter is mapGetters(vuex builtin)
    // mapGetters directly maps to the getters

    ...mapGetters("tasks", ["tasksToDo", "tasksCompleted"])
  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true;
    }) 
  },
  components: {
    "add-task": require("components/Tasks/Models/AddTasks.vue").default,
    "tasks-todo": require("components/Tasks/TasksToDo.vue").default,
    "tasks-completed": require("components/Tasks/TasksCompleted.vue").default,
    "no-tasks": require("components/Tasks/NoTasks.vue").default
  },
  methods: {
    getChipColor() {
      return '#ff0000'
    }
  }
}
</script>

<style>
.text-strikethrough {
  text-decoration: line-through;
}
</style>
