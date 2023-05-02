<template>
  <Panel header="Categorias">
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
      :value="categories.categories"
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
    </DataTable>
  </Panel>
</template>

<script>
import { FilterMatchMode } from "primevue/api";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    this.initFilters();
    this.getCategories();
  },
  methods: {
    initFilters() {
      this.filters = {
        global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      };
    },
    ...mapActions(["getCategories"]),
  },
  computed: {
    ...mapState(["categories"]),
  },
};
</script>

<style></style>
