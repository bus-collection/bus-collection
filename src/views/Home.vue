<template>
  <div class="home">
    <button @click="toMap">mapへ</button>
    <button @click="toTop">topへ</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    toMap() {
      this.$router.push("/map");
    },
    toTop() {
      this.$router.push("/top");
    }
  }
};
</script>

<style scoped>
button {
    padding: 2rem;
    font-size: 2rem;
    border: 1px solid;
}
</style>
