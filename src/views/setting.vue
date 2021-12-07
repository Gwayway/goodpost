<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="maincomfirurl"
      label="审核主地址"
      required
    ></v-text-field>

    <v-text-field
      v-model="comfirurl"
      label="审核地址"
      required
      style="width: 50%"
    ></v-text-field>

    <v-text-field
      v-model="discomfirurl"
      label="反审核地址"
      required
      style="width: 50%"
    ></v-text-field>

    <v-text-field
      v-model="mainpayurl"
      label="支付主地址"
      required
    ></v-text-field>

    <v-text-field
      v-model="payurl"
      label="支付地址"
      required
      style="width: 50%"
    ></v-text-field>

    <v-text-field
      v-model="dispayurl"
      label="反支付地址"
      required
      style="width: 50%"
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      保存修改
    </v-btn>
  </v-form>
</template>
<script>
import {mapState} from 'vuex';
export default {
  data: () => ({
    valid: true,
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
  computed:{
    ...mapState('setting',['maincomfirurl','mainpayurl','comfirurl','discomfirurl','payurl','dispayurl']),
  }
};
</script>
<style scoped>
.a {
  width: 50%;
  background-color: aquamarine;
}
</style>