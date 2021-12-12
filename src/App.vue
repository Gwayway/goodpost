<template>
  <v-app>
    <HelloWorld></HelloWorld>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
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
  methods:{
    test(){
      console.log("4536363446");
    }
  }
};
</script>
