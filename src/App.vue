<template>
  <div>
    <Menu />
    <hr />
  </div>
  <router-view />
</template>

<script>
import Menu from "./components/Menu.vue";
export default {
  components: { Menu },
};
</script>

<style lang="scss">
body {
  font-family: (--font-family);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  hr {
    border-bottom: 1.4px solid #2c3e50;
  }
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
