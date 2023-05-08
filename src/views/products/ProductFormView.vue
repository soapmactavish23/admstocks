<template>
  <div class="md:col-8 md:col-offset-2">
    <form @submit.prevent="send">
      <Card class="text-center">
        <template #title>
          <h3>Novo Produto</h3>
        </template>
        <template #content>
          <div class="p-fluid text-left">
            <div class="field">
              <label for="description">Descrição</label>
              <InputText
                v-model="form.name"
                id="description"
                placeholder="Digite a descrição"
                required
              />
            </div>
            <div class="field">
              <label for="quantity">Quantidade</label>
              <InputText
                v-model="form.amount"
                id="quantity"
                placeholder="Digite a quantidade"
                type="number"
                required
              />
            </div>
            <div class="field">
              <label for="price">Preço</label>
              <InputText
                id="price"
                v-model="form.price"
                placeholder="Digite o preço"
                type="decimal"
                required
              />
            </div>
          </div>
        </template>
        <template #footer>
          <Button
            icon="pi pi-check"
            label="Salvar"
            class="p-button-success"
            type="submit"
          />
        </template>
      </Card>
    </form>
  </div>
</template>

<script>
import Product from "./model/product";
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      form: new Product(),
    };
  },
  created() {
    if (this.$route.query.id) {
      this.form.id = this.$route.query.id;
      this.findProductById(this.form.id);
    }
  },
  computed: {
    ...mapState(["products"]),
  },
  methods: {
    ...mapActions("products", ["addProducts", "findProductById"]),
    send() {
      this.addProducts(this.form).then(() => {
        alert("Salvo com sucesso!");
        this.form = new Product();
      });
    },
  },
};
</script>

<style></style>
