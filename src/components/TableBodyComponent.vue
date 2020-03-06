<template>
  <tbody>
    <tr v-for="(user, index) in filteredUsers" :key="index">
      <td v-for="(value, key) in user" :key="key">{{value}}</td>
    </tr>
  </tbody>
</template>

<script>
import Users from "../Mock/Users";
import store from "../store/store";

export default {
  name: "TableBodyComponent",
  data() {
    return {
      allUsers: []
    };
  },
  mounted() {
    this.allUsers = Users;
  },
  computed: {
    inputSelected: function() {
      return store.state.listViewFilters.inputSelected;
    },
    inputSearch: function() {
      return store.state.listViewFilters.inputSearch;
    },
    filteredUsers: function() {
      return this.allUsers.filter(user => {
        // declaring variables
        let foundSelect = false,
          foundSearch = false;

        // select search filter
        if (this.inputSelected.length === 0) {
          // user didn't used any select filter
          foundSelect = true;
        } else {
          // user used some select filter
          this.inputSelected.every(currentFilter => {
            let showAll = currentFilter.value === "all";
            let filterEqualToUserValue =
              user[currentFilter.key].toLowerCase() === currentFilter.value; // selected value matches user property value

            foundSelect = showAll || filterEqualToUserValue;

            return foundSelect;
          });
        }

        // input text search
        if (this.inputSearch === "") {
          // user didn't searched for any text
          foundSearch = true;
        } else {
          // user searched for some text
          for (let prop in user) {
            // iterates over all user.properties and tests if it matches the text search
            if (
              user[prop].toLowerCase().match(this.inputSearch.toLowerCase())
            ) {
              foundSearch = true;
              break;
            }
          }
        }
        return foundSelect && foundSearch;
      });
    }
  }
};
</script>

<style>
</style>