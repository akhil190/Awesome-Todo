<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        

        <q-toolbar-title class="absolute-center">Awesome Todo</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer 
    :width="250"
    v-model="leftDrawerOpen" show-if-above bordered content-class="bg-primary" :breakpoint="767">
      <q-list dark>
        <q-item-label header class="text-grey-1 text-weight-bold text-h6 ellipsis">Navigations Navigations Navigations</q-item-label>

        <q-item 
        :key="nav.label" 
        clickable 
        :to="nav.to" 
        exact 
        v-for="nav in navs"
        class="text-grey-2 text-body2">
          <q-item-section avatar>
            <q-icon :name="nav.icon"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{nav.label}}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-footer>
      <q-tabs>
        <q-route-tab 
        :key="nav.label"
        v-for="nav in navs"
        :label="nav.label"  :icon="nav.icon" :to="nav.to" exact />
      </q-tabs>>
    </q-footer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
      navs: [
        {
          label: "Todo",
          icon: "list",
          to: "/"
        },
        {
          label: "Settings",
          icon: "settings",
          to: "/settings"
        }
      ]
    };
  }
};
</script>

<style lang="scss">
@media screen and (min-width: 768px){
  .q-footer {
    display: none;
  }
}
</style>
