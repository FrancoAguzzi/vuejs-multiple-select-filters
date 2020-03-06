<template>
  <div>
    <select v-model="selected" :name="filterKey" class="select">
      <option v-for="option in options" :key="option.value" :value="option.value">{{option.label}}</option>
    </select>
  </div>
</template>

<script>
import store from "../store/store";

export default {
  name: "SelectSearch",
  data() {
    return {
      allSelects: {},
      selected: "all"
    };
  },
  props: ["filterKey", "options"],
  computed: {
    storeInputSelectedValue: function() {
      return store.state.listViewFilters.inputSelected;
    }
  },
  watch: {
    selected: function(value) {
      store.commit("setInputSelectedValue", { key: this.filterKey, value });
    }
  }
};
</script>

<style>
.selects-wrapper {
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>