<template>
  <Panel header="Produtos">
    <Toolbar>
      <!-- <template #start>
        <Button label="Novo" class="p-button-success" icon="pi pi-plus" />
      </template> -->
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
    <DataTable
      :value="products"
      dataKey="id"
      ref="dt"
      :paginator="true"
      :rows="10"
      :filters="filters"
      paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
      :rowsPerPageOptions="[5, 10, 25]"
      currentPageReportTemplate="Página {first} de {last} de {totalRecords} registros"
    >
      <Column field="id" header="id"></Column>
      <Column field="name" header="Nome"></Column>
      <Column field="amount" header="Quantidade"></Column>
      <Column field="price" header="Preço">
        <template #body="slotProps">
          R$ {{ slotProps.data.price }}
        </template></Column
      >
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
