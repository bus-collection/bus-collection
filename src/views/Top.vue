<template>
  <div class="top" @click="toQuestList">
    <h1>バスコレ</h1>
  </div>
</template>

<script>
export default {
  name: "top",
  methods: {
    toQuestList() {
      this.$router.push("/quest-list");
    }
  }
};
</script>

<style scoped>
h1, .top {
  margin: 0;
  padding: 0;
}

.top {
  height: 100vh;
  width: 100vw;
  background: radial-gradient(#ff0000, #ff0099);
  display: flex;
  align-items: center;
  vertical-align: middle;
}

h1 {
  color: orange;
  font-size: 5rem;
  margin: 0 auto;
}
</style>
