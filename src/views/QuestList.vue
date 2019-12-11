<template>
  <div class="quest-list">
    <ul>
      <li v-for="(quest, index) in quests" :key="index" @click="toMap">
        <p>Q</p>
        <p>{{ quest.name }}</p>
      </li>
    </ul>
    <div class="footer">
      <button class="button" @click="toMap">バス停検索する</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestList",
  data() {
    return {
      quests: [
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        {
          type: "map",
          name:
            "近くのバス停の写真を撮ろう！近くのバス停の写真を撮ろう！近くのバス停の写真を撮ろう！",
          point: 10
        },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 },
        { type: "map", name: "近くのバス停の写真を撮ろう！", point: 10 }
      ]
    };
  },
  methods: {
    toMap() {
      this.$router.push("/map");
    }
  }
};
</script>

<style scoped>
ul,
li,
p {
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-flow: column;
  text-align: center;
  align-items: center;
  height: 90%;
  overflow-y: scroll;
}

li {
  list-style: none;
  margin: 10px;
  border-style: solid;
  border-color: red;
  background: #ffffff;
  min-height: 4rem;
  border-radius: 20px;
  width: 90%;
  display: flex;
  align-items: center;
}

li p:first-child {
  margin: 0.5rem;
  padding: 0;
  font-size: 3rem;
}

li p:last-child {
  text-align: left;
}

.footer {
  height: 10%;
  display: flex;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
}

.button {
  background: red;
  width: 90%;
  height: 3rem;
  color: #fff;
  border-radius: 20px;
  font-size: 1rem;
  font-weight: bold;
}

.quest-list {
  background: -moz-linear-gradient(top, #fff, #ffcc00);
  background: -webkit-linear-gradient(top, #fff, #ffcc00);
  background: linear-gradient(to bottom, #fff, #ffcc00);
  width: 100vw;
  height: calc(100vh - 60px);
}

p {
  padding: 0.5rem;
}
</style>
