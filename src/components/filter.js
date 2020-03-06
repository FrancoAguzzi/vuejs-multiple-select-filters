
let finalList = [];
for (var i = 0; i < usersObject.length; i++) {
    let currentUser = usersObject[i];
    let isValid = true;
    for(var j = 0; j < filters.length; j ++) {
        let currentFilter = filters[j];
        if (currentUser[currentFilter.key] !== currentFilter.value) {
            isValid = false;
        }
    }
    if(isValid) {
        finalList.push(currentUser);
    }
}


let finalList = [];
for (var i = 0; i < this.allUsers.length; i++) {
  // iterates over all users
  let currentUser = this.allUsers[i];
  // stores the current user
  let isValid = false;
  if (store.state.listViewFilters.inputSelected.length === 0 && store.state.listViewFilters.inputSearch === "") {
    isValid = true
  } else if (
    this.selectInputFilter(currentUser) ||
    this.searchInputFilter(currentUser)
  ) {
    isValid = true;
  }
  if (isValid) {
    finalList.push(currentUser);
  }
}
i = 0;
return finalList;



// IMPLEMENTAR DEPOIS

Boolean(inputSearch.localeCompare(user.id)) ||
  Boolean(inputSearch.localeCompare(user.name)) ||
  Boolean(inputSearch.localeCompare(user.role)) ||
  Boolean(inputSearch.localeCompare(user.gender)) ||
  Boolean(inputSearch.localeCompare(user.exp))
