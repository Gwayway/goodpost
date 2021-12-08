<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col>
        <v-btn>审核全部</v-btn>
        <v-btn>支付全部</v-btn>
        <v-file-input label="File input"></v-file-input>
      </v-col>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="obj in orderObj" :key="obj.card">
          <v-card>
            <v-expansion-panel-header>{{ obj.card }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list two-line>
                <template v-for="n in obj.order" >
                  <v-list-item :key="n.num">
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>单号 {{ n.num }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{ n.resmessage }}
                      </v-list-item-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          :actionbt="bt.name"
                          v-for="bt in obj.actions"
                          :key="bt.name"
                          text
                          outlined
                          color="primary"
                          @click="dosomthing(bt)"
                          >{{ bt.name }}</v-btn
                        >
                      </v-card-actions>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== obj.length"
                    :key="`divider-${n.num}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-expansion-panel-content>
          </v-card>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    cards: ["审核", "支付"],
    orderObj: [
      {
        card: "审核",
        order: [
          { num: 1, resmessage: "" },
          { num: 2, resmessage: "" },
        ],
        actions: [
          {
            name: "审核",
            actionsfuntion: function (that) {
              that.comfir();
            },
          },
          { name: "反审核", actionsfuntion: () => {} },
        ],
      },
      {
        card: "支付",
        order: [
          { num: 1, resmessage: "" },
          { num: 2, resmessage: "" },
        ],
        actions: [
          { name: "支付", actionsfuntion: () => {} },
          { name: "反支付", actionsfuntion: () => {} },
        ],
      },
    ],
  }),
  methods: {
    dosomthing(bt) {
      bt.actionsfuntion(this);
    },
    comfir() {
      console.log("调用审核");
    },
    pay() {},
    discomfir() {},
    dispay() {}
  },
};
</script>
<style scoped>
</style>