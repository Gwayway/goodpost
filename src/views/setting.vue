<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field
      v-model="comfirurl"
      label="审核主地址"
      required
    ></v-text-field>

    <v-text-field
      v-model="payurl"
      label="支付主地址"
      required
    ></v-text-field>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      保存
    </v-btn>
  </v-form>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    payurl: "",
    comfirurl: "",
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
};
</script>