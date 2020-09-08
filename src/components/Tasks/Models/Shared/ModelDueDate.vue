<template>
   <div class="row q-mb-sm">
          <q-input outlined label="Due date" :value="dueDate"
          @input="$emit('update:dueDate',$event)">
            <template v-slot:append>
              <q-icon
              name="event"
              class="cursor-pointer">
              <q-popup-proxy>
                  <q-date 
                  :value="dueDate"
                  @input="$emit('update:dueDate',$event)"></q-date>
                   <div class="row items-center justify-end">
                      <q-btn v-close-popup label="Close" color="primary" flat />
                    </div>
              </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>

<style>

</style>