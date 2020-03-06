import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // = data
    listViewFilters: {
      inputSearch: "",
      inputSelected: []
  }
},
  mutations: {
    // update state
    setInputSearchValue(state, value) {
      state.listViewFilters.inputSearch = value;
    },
    setInputSelectedValue(state, value) {
      let inputSelected = state.listViewFilters.inputSelected,
          indexFound = false;
      for (var i = 0; i < inputSelected.length; i++) {
        let currentFilter = inputSelected[i];
        if (currentFilter.key === value.key) {
          inputSelected[i].value = value.value;
          indexFound = true;
        }
      }
      if (!indexFound) {
        inputSelected.push(value);
      }
    }
  }
});
