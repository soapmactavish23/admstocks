<template>
  <div class="home">
    <div class="grid">
      <div class="col-6">
        <img src="./../assets/trade.png" width="400" alt="Trade" />
      </div>
      <div class="col-6">
        <Card>
          <template #title> Categorias </template>
          <template #content>
            <p>
              Os diversos tipos de Produtos são divididos em categorias
              específicas
            </p>
          </template>
        </Card>
        <br />
        <Card>
          <template #title> Produtos </template>
          <template #content>
            <p>
              Você pode acrescentar no tipo de produto, ou acrescentar,
              atualizar e deletar produto já existente. Some quick example text
              to build on the card title and make up the bulk of the card's
              content.
            </p>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
