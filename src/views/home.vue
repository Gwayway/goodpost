<template>
  <v-container class="py-8 px-6" fluid>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="text-h5 grey lighten-2"> 输入单号 </v-card-title>
        <v-text-field
          prepend-icon="mdi-map-marker"
          v-model="inputvale"
          placeholder="请输入单号"
        ></v-text-field>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="add"> 确认 </v-btn>
          <v-btn color="primary" text @click="dialog = false"> 关闭 </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-row>
      <v-col>
        <v-btn>审核全部</v-btn>
        <v-btn>支付全部</v-btn>
        <v-btn @click="(dialog = true), (addtype = 0)">添加审核单据</v-btn>
        <v-btn @click="(dialog = true), (addtype = 1)">添加支付单据</v-btn>
        <v-file-input label="File input" v-model="fileObj"></v-file-input>
      </v-col>
      <v-expansion-panels accordion @click.native="dosomthing">
        <v-expansion-panel v-for="obj in orderObj" :key="obj.card">
          <v-card>
            <v-expansion-panel-header>{{ obj.card }}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-list two-line>
                <template v-for="n in obj.order">
                  <v-list-item :key="n.id">
                    <v-list-item-avatar color="grey darken-1" data-a="开心">
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>单号 {{ n.num }}</v-list-item-title>

                      <v-list-item-subtitle>
                        {{ n.resmessage }}
                      </v-list-item-subtitle>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                          target
                          :data-actiontype="bt.actiontype"
                          :data-ordernum="n.num"
                          v-for="bt in obj.actions"
                          :key="bt.name"
                          text
                          outlined
                          color="primary"
                          ><span
                            :data-actiontype="bt.actiontype"
                            :data-ordernum="n.num"
                            >{{ bt.name }}</span
                          ></v-btn
                        >
                      </v-card-actions>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider
                    v-if="n !== obj.length"
                    :key="`divider-${n.id}`"
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
import { nanoid } from "nanoid";
export default {
  data: () => ({
    addtype: -1,
    fileObj: null,
    inputvale: "",
    dialog: false,
    cards: ["审核", "支付"],
    orderObj: [
      {
        card: "审核",
        order: [
          { id: nanoid(), num: 1, resmessage: "" },
          { id: nanoid(), num: 2, resmessage: "" },
        ],
        actions: [
          {
            name: "审核",
            actiontype: 1,
          },
          { name: "反审核", actiontype: "reject" },
        ],
      },
      {
        card: "支付",
        order: [
          { id: nanoid(), num: 1, resmessage: "" },
          { id: nanoid(), num: 2, resmessage: "" },
        ],
        actions: [
          { name: "支付成功", actiontype: "PAID" },
          { name: "退票", actiontype: "RETURNED" },
        ],
      },
    ],
  }),
  methods: {
    getFileObj() {
      let reader = new FileReader();
      reader.readAsText(this.fileObj, "UTF-8");
      reader.onload = (e) => {
        console.log(e.target.result);
      };
    },
    dosomthing(e) {
      let actiontype = e.target.dataset.actiontype;
      let ordernum = e.target.dataset.ordernum;
      if (!actiontype) {
        return;
      }
      switch (actiontype) {
        case "1":
          {
            alert(actiontype + ":" + ordernum);
          }

          break;
        case "2":
          {
            alert(actiontype + ":" + ordernum);
          }

          break;
        case "3":
          {
            alert(actiontype + ":" + ordernum);
          }

          break;
        case "4":
          {
            alert(actiontype + ":" + ordernum);
          }

          break;
        default:
          {
            alert("null");
          }
          break;
      }
    },
    add() {
      this.orderObj[this.addtype].order.unshift({
              id: nanoid(),
              num: this.inputvale,
              resmessage: "",
            });
            this.dialog = false;
    },
    test(e) {
      console.log(e);
    },
  },
  watch: {},
};
</script>
<style scoped>
</style>