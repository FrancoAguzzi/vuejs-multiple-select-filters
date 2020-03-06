<template>
  <!-- <form action="#" method="GET" class="form"> -->
  <div class="form">
    <InputSearch />

    <SelectSearch
      filter-key="role"
      :options="options.roles"
    />
    <SelectSearch
      filter-key="gender"
      :options="options.genders"
    />
    <SelectSearch
      filter-key="country"
      :options="options.countries"
    />
  </div>
  <!-- </form> -->
</template>

<script>
import InputSearch from "./InputSearch";
import SelectSearch from "./SelectSearch";
import Options from '../Mock/Options';

export default {
  name: "Form",
  components: {
    InputSearch,
    SelectSearch
  },
  data() {
    return {
      options: []
    };
  },
  mounted() {
    this.options = Options
  }
};
</script>

<style>
.form {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
