<template>
  <q-card>
    <model-header>Edit Task</model-header>

    <form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <model-task-name :name.sync="taskToSubmit.name" ref="modelTaskName" />

        <model-due-date :dueDate.sync="taskToSubmit.dueDate" />

        <model-due-time 
         v-if="taskToSubmit.dueDate"
        :dueTime.sync="taskToSubmit.dueTime" />
        
        <model-button/>
      </q-card-section>
    </form>
  </q-card>
</template>

<script>
import { mapActions } from "vuex";

export default {
    props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {  }
    };
  },
  methods: {
    ...mapActions("tasks", ["updateTask"]),
    submitForm() {
      this.$refs.modelTaskName.$refs.name.validate()
      if (! this.$refs.modelTaskName.$refs.name.hasError) {
        this.submitTask();
      }
    },
    submitTask() {
      this.updateTask({
          id: this.id,
          updates: this.taskToSubmit
      })
      this.$emit("close"); // close is a custom directive which we are using in PageTodos.vue
    } 
  },
  components: {
    "model-header": require("components/Tasks/Models/Shared/ModelHeader.vue")
      .default,
    "model-task-name": require("components/Tasks/Models/Shared/ModelTaskName.vue")
      .default,
    "model-due-date": require("components/Tasks/Models/Shared/ModelDueDate.vue")
      .default,
    "model-due-time": require("components/Tasks/Models/Shared/ModuleDueTime.vue").default,
    "model-button": require("components/Tasks/Models/Shared/ModelButtons.vue")
      .default
  },
  mounted() {
      this.taskToSubmit = Object.assign({}, this.task)
  }
};
</script>