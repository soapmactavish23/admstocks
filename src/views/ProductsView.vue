<template>
  <Panel header="Produtos">
    <Toolbar>
      <template #start>
        <Button label="Novo" class="p-button-success" icon="pi pi-plus" />
      </template>
      <template #end>
        <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText
            v-model="filters['global'].value"
            placeholder="Pesquisar..."
          />
        </span>
      </template>
    </Toolbar>
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="id" header="id"></Column>
    </DataTable>
  </Panel>
</template>

<script>
import { FilterMatchMode } from "primevue/api";

import { products } from "../data/data";
export default {
  data() {
    return {
      products,
      filters: {},
    };
  },
  created() {
    this.initFilters();
  },
  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
  },
};
</script>

<style></style>
