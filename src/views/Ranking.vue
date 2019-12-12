<template>
  <div class="ranking">
    <div class="header">
      <p><v-icon name="user-circle" scale="3" /></p>
      <p>{{ me }}</p>
    </div>
    <div class="level">
      <p>Lv: 1</p>
    </div>
    <div class="body">
      <div class="my-info">
        <div>
          <p>🚌 バス停</p>
          <p>4</p>
          <p>/all: 3000</p>
        </div>
        <div>
          <p>🚌 バス路線</p>
          <p>0</p>
          <p>/all: 100</p>
        </div>
        <div>
          <p>🚌 クエスト</p>
          <p>2</p>
          <p>/all: 100</p>
        </div>
      </div>
      <div class="rank">
        <p>Ranking</p>
        <template v-for="(r, i) in tenRanker">
          <template v-if="r.name === me">
            <p :class="`rank-${i + 1} me`" :key="i">{{ i + 1 }}: {{ r.name }}</p>
          </template>
          <template v-else>
            <p :class="`rank-${i + 1}`" :key="i">{{ i + 1 }}: {{ r.name }}</p>
          </template>
        </template>
      </div>
    </div>
    <div class="footer">
      <p>140</p>
      <p>point</p>
    </div>
  </div>
</template>

<script>
import Icon from "vue-awesome/components/Icon";

export default {
  name: "Ranking",
  components: {
    "v-icon": Icon
  },
  data() {
    return {
      me: "金城 太郎",
      ranker: [
        { name: "沖縄 太郎" },
        { name: "沖縄 二郎" },
        { name: "沖縄 三郎" },
        { name: "大城 太郎" },
        { name: "大城 二郎" },
        { name: "大城 三郎" },
        { name: "金城 太郎" },
        { name: "金城 二郎" },
        { name: "金城 三郎" },
        { name: "儀武 太郎" },
        { name: "儀武 二郎" }
      ]
    };
  },
  computed: {
    tenRanker() {
      const ranker = [];
      for (let i = 0; i < 10; i++) {
        ranker.push(this.ranker[i]);
      }
      return ranker;
    }
  }
};
</script>

<style scoped>
p {
  margin: 0;
  padding: 0;
}

.ranking {
  width: 100vw;
  height: calc(100vh - 60px);
}

.header {
  display: flex;
  flex-flow: row;
  height: 10%;
  background-color: #2c3e50;
  color: #fff;
  font-weight: bold;
  align-items: center;
}

.header p {
  margin-left: 0.5rem;
}

.header p:first-child {
  margin-left: 1rem;
}

.header p:last-child {
  font-size: 2rem;
}

.level {
  height: 15%;
  font-size: 3.5rem;
  box-sizing: border-box;
  border-bottom: 1px solid #2c3e50;
  display: flex;
  width: 100%;
  align-items: center;
  text-align: center;
}

.level p {
  width: 100%;
}

.body {
  display: flex;
  flex-flow: row;
  height: 55%;
  box-sizing: border-box;
  border-bottom: 1px solid #2c3e50;
}

.my-info,
.rank {
  width: 50%;
  padding-top: 0.5rem;
  box-sizing: border-box;
}

.my-info {
  border-right: 1px solid #2c3e50;
}

.my-info div p:first-child {
  text-align: left;
  width: 100%;
  padding-left: 1rem;
  box-sizing: border-box;
  font-weight: bold;
}

.my-info div p:nth-child(2) {
  font-size: 2rem;
  padding-right: 2rem;
  box-sizing: border-box;
}

.my-info div p:last-child {
  text-align: right;
  width: 100%;
  padding-right: 1rem;
  box-sizing: border-box;
}

.rank p:first-child {
  text-align: left;
  width: 100%;
  padding-left: 1rem;
  box-sizing: border-box;
  font-weight: bold;
}

.rank p:not(:first-child) {
  text-align: left;
  width: 100%;
  padding-left: 1.2rem;
  box-sizing: border-box;
  font-weight: bold;
}

.rank-1 {
  font-size: 1.6rem;
}

.rank-2 {
  font-size: 1.4rem;
}

.rank-3 {
  font-size: 1.2rem;
}

.footer {
  height: 20%;
  display: flex;
  flex-flow: row;
  font-size: 2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #2c3e50;
  width: 100%;
  align-items: center;
}

.footer p:first-child {
  font-size: 4rem;
  width: 70%;
}

.footer p:last-child {
  width: 30%;
}

.me {
  color: #ff2222;
  font-weight: bold;
}
</style>
