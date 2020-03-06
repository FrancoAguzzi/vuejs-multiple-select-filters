<template>
  <div class="list-view-container">
      <FormComponent />
      <TableComponent />
  </div>
</template>

<script>
import FormComponent from './FormComponent';
import TableComponent from './TableComponent';

export default {
    name: 'ListView',
    data() {
        return {
        }
    },
    components: {
        FormComponent,
        TableComponent
    }
}
</script>

<style>
.list-view-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>