import getters from './getters'
import actions from './actions'
import mutations from './mutations'

export default {
  namespaced: true,
  state: {
    loading: false,
    progress: 0
  },
  getters,
  actions,
  mutations
}
