<template>
  <div id="app">
    <router-view />
    <template v-if="!isTop">
      <menu-footer></menu-footer>
    </template>
  </div>
</template>

<script>
import MenuFooter from "./components/MenuFooter.vue";

export default {
  name: "App",
  components: {
    MenuFooter
  },
  data() {
    return {
      isTop: false
    };
  },
  watch: {
    $route(to, from) {
      if (to.name === "top") {
        this.isTop = true;
      } else {
        this.isTop = false;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
