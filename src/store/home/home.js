import {
  reqCategoryList
} from "@/api"

const state = {
  categoryList: []
}
const mutations = {
  cateGoryListArray(state, data) {
    state.categoryList = data
  }
}
const actions = {
  async getCategoryList({
    commit
  }) {
    let res = await reqCategoryList()
    console.log(res);
    if (res.code == 200) {
      commit('cateGoryListArray', res.data)
    }
  }
}
const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}