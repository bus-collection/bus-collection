<template>
  <div class="page2">
    <button class="button1">ボタン1</button>
    <button class="button2">ボタン2</button>
    <button class="button3">ボタン3</button>
    <button class="button4">ボタン4</button>
  </div>
</template>

<script>
export default {
  name: "QuestList"
};
</script>

<style scoped>
.top {
  background: radial-gradient(#ff0000, #ff0099);
}
.button1 {
  margin: 10px;
  border-style: solid;
  border-color: red;
  background: #ffffff;
  width: 300px;
  height: 100px;
  border-radius: 20px;
}
.button2 {
  margin: 10px;
  border-style: solid;
  border-color: red;
  background: #ffffff;
  width: 300px;
  height: 100px;
  border-radius: 20px;
}
.button3 {
  margin: 10px;
  border-style: solid;
  border-color: red;
  background: #ffffff;
  width: 300px;
  height: 100px;
  border-radius: 20px;
}
.button4 {
  background: red;
  width: 280px;
  height: 50px;
  color: #fff;
}

.page2 {
  background: -moz-linear-gradient(top, #fff, #ffcc00);
  background: -webkit-linear-gradient(top, #fff, #ffcc00);
  background: linear-gradient(to bottom, #fff, #ffcc00);
}
</style>
