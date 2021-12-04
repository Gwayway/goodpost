<template>
  <v-app >
    <HelloWorld></HelloWorld>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld
  },

  data: () => ({
    //
  }),
};
</script>
