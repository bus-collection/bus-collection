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
        { name: "奥武入口", src: "https://user-images.githubusercontent.com/12771142/70679378-44bd6d00-1cd8-11ea-9c0c-6fd0c3157e28.JPG" },
        { name: "中山入口", src: questionImage },
        { name: "玉城小学校前", src: "https://user-images.githubusercontent.com/12771142/70679278-00ca6800-1cd8-11ea-967e-44f27721362f.JPG" },
        { name: "堀川", src: questionImage },
        { name: "玉城幼稚園", src: questionImage },
        { name: "富里", src: questionImage },
        { name: "富里（国道側）", src: "https://user-images.githubusercontent.com/12771142/70679375-3ff8b900-1cd8-11ea-9e74-177e96736def.JPG" },
        { name: "第二富里", src: questionImage },
        { name: "堀川橋", src: questionImage },
        { name: "堀川入口", src: questionImage },
        { name: "志堅原公民館前", src: "https://user-images.githubusercontent.com/12771142/70679347-28213500-1cd8-11ea-8041-5f7dd6904d2f.JPG" },
        { name: "志堅原入口", src: questionImage },
        { name: "堀川入口", src: questionImage },
        { name: "富里（国道側）", src: questionImage },
        { name: "玉城中学校前", src: questionImage },
        { name: "富里（国道側）", src: questionImage },
        { name: "堀川橋", src: questionImage },
        { name: "玉城小学校前", src: questionImage },
        { name: "屋嘉部入口", src: "https://user-images.githubusercontent.com/12771142/70679298-0a53d000-1cd8-11ea-9f6a-75ddc3da3ac4.JPG" },
        { name: "志堅原", src: "https://user-images.githubusercontent.com/12771142/70679389-4be47b00-1cd8-11ea-9915-c540021bf1b5.JPG" },
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
