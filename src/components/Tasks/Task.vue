<template>
  <q-item
    @click="updateTask({id: id, updates: {completed: !task.completed}})"
    clickable
    v-ripple
    :class="!task.completed ? 'bg-lime-2' : 'bg-green-1'"
  >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="task.completed ? 'text-strikethrough' : ''">{{task.name}}</q-item-label>
    </q-item-section>

    <q-item-section v-if="task.dueDate" side top>
      <div class="row">
        <q-icon name="event" size="18px"></q-icon>
        <div class="column">
          <q-item-label caption>{{task.dueDate}}</q-item-label>
          <small>
            <q-item-label caption>{{task.dueTime}}</q-item-label>
          </small>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn @click.stop="promptToDelete(id)" flat round dense color="red" icon="delete"></q-btn>
        <q-btn @click.stop="showEditTask = true" flat round dense color="primary" icon="edit"></q-btn>
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task @close="showEditTask = false" 
      :task="task"
      :id= "id"/>
    </q-dialog>

  </q-item>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["task", "id"],
  data() {
    return {
      showEditTask: false
    }
  },
  methods: {
    ...mapActions("tasks", ["updateTask", "deleteTask"]),
    promptToDelete(id) {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Are u sure want to delete?",
          ok: {
            push: true
          },
          cancel: {
            color: "negative"
          },
          persistent: true
        })
        .onOk(() => {
          this.deleteTask(id);
        });
    }
  },
  components: {
    'edit-task': require('components/Tasks/Models/EditTasks.vue').default
  }
};
</script>

<style>
</style>