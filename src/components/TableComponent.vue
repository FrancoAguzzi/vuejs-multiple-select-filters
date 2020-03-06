<template>
  <table class="table table-striped table-dark">
    <TableHeadComponent />
    <TableBodyComponent />
  </table>
</template>

<script>
import TableBodyComponent from './TableBodyComponent';
import TableHeadComponent from './TableHeadComponent';

export default {
    name: 'TableComponent',
    data() {
      return {
      }
    },
    components: {
      TableBodyComponent,
      TableHeadComponent
    }
}
</script>
  
<style>
  .table {
    width: 80%;
  }
</style>