const actions = {};
const mutations = {};
const state = {
    baseUrl: "1",
    maincomfirurl:"2",
    mainpayurl:"3",
    actions: [{
        name: "comfir",
        shoturl: ""
    }, {
        name: "discomfir",
        shoturl: ""
    }, {
        name: "pay",
        shoturl: ""
    }, {
        name: "dispay",
        shoturl: ""
    }, ]
}
const getters = {};
export default {
    namespaced: true,
    actions,
    mutations,
    state,
    getters
}