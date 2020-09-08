<template>
  <q-banner class="bg-grey-3">
    <template v-slot:avatar>
      <q-icon name="info" color="primary" />
    </template>
    No tasks to do!
    <template v-slot:action>
      <q-btn flat color="primary" label="Add Task" @click="$root.$emit('showAddTask')"/>
    </template>
  </q-banner>
</template>

<script>
export default {};
</script>

<style>
</style>