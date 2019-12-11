<template>
  <div class="home">
    <button @click="toMap">mapへ</button>
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  methods: {
    toMap() {
      this.$router.push("/map");
    }
  }
};
</script>

<style scoped>
button {
  padding: 10rem;
  font-size: 10rem;
}
</style>
