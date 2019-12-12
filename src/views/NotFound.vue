<template>
  <div class="notfound">
    <h2>404。お探しのページは見つかりませんでした。</h2>
    <button @click="toTop">Topページに戻る</button>
  </div>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    toTop() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
h2,
button {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: #2c3e50;
}

h2 {
  padding: 1rem;
}

button {
  font-size: 1.5rem;
}

.notfound {
  height: calc(100vh - 60px);
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
</style>
