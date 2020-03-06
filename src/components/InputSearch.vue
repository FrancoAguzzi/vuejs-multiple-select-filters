<template>
  <div class="inputs-wrapper">
    <input
      :type="input.type"
      :name="input.name"
      :placeholder="input.placeholder"
      class="input"
      v-model="search"
    />
  </div>
</template>

<script>
import InputMock from "../Mock/Input";
import store from '../store/store';

export default {
  name: "InputSearch",
  data() {
    return {
      input: {},
      search: ""
    };
  },
  computed: {
    storeInputSearchValue: function() {
      return store.state.listViewFilters.inputSearch;
    }
  },
  mounted() {
    this.input = InputMock;
  },
  watch: {
    search: function(search) {
      store.commit("setInputSearchValue", search);
    }
  }
};
</script>

<style>
.input {
  width: 100%;
  margin: 50px 0;
  padding: 10px 0 10px 20px;
  border-radius: 5px;
  outline: none;
}

.inputs-wrapper {
  width: 55%;
}
</style>
