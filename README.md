# VueJS Table with multiple filters (n selects and input):

## Running project:
1. Inside vuejs-multiple-select-filters folder, run "npm install" in the console.
2. Run "npm run serve" in the console and then open the local server.

## Creating new select:
1. at TableSkeleton.js add the new select name at the end of the array
2. add a new property to Users
3. add the new select options at Options.js
4. add a SelectSearch component at FormComponent and give it a filterKey and an options.${newProp} as the others
