<!-- eslint-disable -->
<template>
  <nav class="conteudo">
    <ul>
      <router-link to="/">
        <img src="./../assets/fullstack.png" width="100" />
      </router-link>
      <router-link to="/">
        <li>Home</li>
      </router-link>
      <router-link to="/about">
        <li>Sobre nós</li>
      </router-link>
      <router-link to="/categories">
        <li>Categorias</li>
      </router-link>
      <router-link to="/products">
        <li>Produtos</li>
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.conteudo {
  ul {
    display: flex;
    list-style: none;
    justify-content: space-around;
    align-items: center;
    li {
      margin-left: 1%;
      width: 100px;
    }
  }
}
</style>
