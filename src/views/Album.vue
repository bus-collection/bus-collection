<template>
  <div class="album">
    <div>
      <h3>バス停</h3>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <img :src="item.src" :alt="item.name" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3>路線</h3>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <img :src="item.src" :alt="item.name" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
    <div>
      <h3>クエスト</h3>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <img :src="item.src" :alt="item.name" />
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const questionImage = require("../assets/question.png");

export default {
  name: "Album",
  data() {
    return {
      stops: [
        { name: "堀川", src: questionImage },
        { name: "中山入口", src: require("../assets/busstop.jpg") },
        { name: "富里", src: questionImage },
        { name: "玉城中学校前", src: questionImage },
        { name: "奥武入口", src: questionImage },
        { name: "中山入口", src: questionImage },
        { name: "玉城小学校前", src: questionImage },
        { name: "堀川", src: questionImage },
        { name: "玉城幼稚園", src: questionImage },
        { name: "富里", src: questionImage },
        { name: "富里（国道側）", src: questionImage },
        { name: "第二富里", src: questionImage },
        { name: "堀川橋", src: questionImage },
        { name: "堀川入口", src: questionImage },
        { name: "志堅原公民館前", src: questionImage },
        { name: "志堅原入口", src: questionImage },
        { name: "堀川入口", src: questionImage },
        { name: "富里（国道側）", src: questionImage },
        { name: "玉城中学校前", src: questionImage },
        { name: "富里（国道側）", src: questionImage },
        { name: "堀川橋", src: questionImage },
        { name: "玉城小学校前", src: questionImage },
        { name: "屋嘉部入口", src: questionImage },
        { name: "志堅原", src: questionImage },
        { name: "志堅原公民館前", src: questionImage }
      ],
      routes: [
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage }
      ],
      quests: [
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage },
        { name: "奥部入り口", src: questionImage }
      ]
    };
  }
};
</script>

<style scoped>
h3,
p {
  margin: 0;
  padding: 0;
}

h3 {
  background-color: #2c3e50;
  text-align: left;
  padding: 0.7rem;
  color: #fff;
  font-weight: bold;
}

.album {
  width: 100vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  overflow-y: scroll;
}

img {
  width: 4rem;
  height: 4rem;
  display: inline-block;
  border: 1px solid #2c3e50;
}

.tiles {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.tile {
  display: inline-block;
  width: 5rem;
  margin: 1rem;
}
</style>
