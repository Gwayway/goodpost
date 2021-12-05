<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col>
        <v-btn>审核全部</v-btn>
        <v-btn>支付全部</v-btn>
        <v-file-input  label="File input"></v-file-input>
      </v-col>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="card in cards" :key="card">
          <v-card>
            <v-expansion-panel-header>{{ card }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list two-line>
                <template v-for="n in orderList">
                  <v-list-item :key="n">
                    <v-list-item-avatar color="grey darken-1">
                    
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>单号 {{ n }}</v-list-item-title>

                      <v-list-item-subtitle>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Nihil repellendus distinctio similique
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-btn>审核</v-btn>
                    <v-btn>支付</v-btn>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
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
    orderList: [123, 346, 897],
  }),
};
</script>
<style scoped>
</style>
