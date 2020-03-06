<template>
    <thead class="tableHead">
        <tr>
        <th scope="col" v-for="(column, key) in columns" :key="key">{{column}}</th>
        </tr>
    </thead>
</template>

<script>
import TableSkeleton from '../Mock/TableSkeleton';

export default {
    data() {
        return {
            columns: TableSkeleton.columns
        }
    }
}
</script>

<style>

</style>