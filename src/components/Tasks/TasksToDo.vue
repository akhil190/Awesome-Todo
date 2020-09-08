<template>
  <div>
    <list-header bgcolor="bg-orange-4">Todo</list-header>
    <q-list bordered padding separator>
      <task v-for="(task,key) in tasksToDo" :key="key" :task="task" :id="key"></task>
    </q-list>
  </div>
</template>

<script>
export default {
  props: ["tasksToDo"],
  components: {
    task: require("components/Tasks/Task.vue").default,
    "list-header": require("components/Tasks/Models/Shared/ListHeader.vue")
      .default
  }
};
</script>

<style>
</style>