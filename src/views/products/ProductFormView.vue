<template>
  <div class="md:col-8 md:col-offset-2">
    <form action="">
      <Card class="text-center">
        <template #title>
          <h3>Novo Produto</h3>
        </template>
        <template #content>
          <div class="p-fluid text-left">
            <div class="field">
              <label for="description">Descrição</label>
              <InputText id="description" placeholder="Digite a descrição" required />
            </div>
            <div class="field">
              <label for="quantity">Quantidade</label>
              <InputText id="quantity" placeholder="Digite a quantidade" type="number" required />
            </div>
            <div class="field">
              <label for="price">Preço</label>
              <InputText id="price" placeholder="Digite o preço" type="number" required />
            </div>
          </div>
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="Salvar" class="p-button-success" @click="send" />
        </template>
      </Card>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    send() {
      
    }
  }
};
</script>

<style></style>
