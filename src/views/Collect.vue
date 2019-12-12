<template>
  <div class="album">
    <div>
      <div class="footer">
        <h3>D1 玉城東回り線</h3>
        <p>コレクト率: {{ collectionRate }}%</p>
      </div>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <p class="name">🚌 {{ item.name }}</p>
          <template v-if="item.collected"
            ><strong class="rate">コレクト済み</strong></template
          >
          <template v-else><p class="rate">未コレクト</p></template>
        </div>
      </div>
    </div>
    <div>
      <div class="footer">
        <h3>D2 玉城東回り線</h3>
        <p>コレクト率: {{ collectionRate }}%</p>
      </div>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <p class="name">🚌 {{ item.name }}</p>
          <template v-if="item.collected"
            ><strong class="rate">コレクト済み</strong></template
          >
          <template v-else><p class="rate">未コレクト</p></template>
        </div>
      </div>
    </div>
    <div>
      <div class="footer">
        <h3>D3 玉城東回り線</h3>
        <p>コレクト率: {{ collectionRate }}%</p>
      </div>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <p class="name">🚌 {{ item.name }}</p>
          <template v-if="item.collected"
            ><strong class="rate">コレクト済み</strong></template
          >
          <template v-else><p class="rate">未コレクト</p></template>
        </div>
      </div>
    </div>
    <div>
      <div class="footer">
        <h3>D4 玉城東回り線</h3>
        <p>コレクト率: {{ collectionRate }}%</p>
      </div>
      <div class="tiles">
        <div class="tile" v-for="(item, i) in stops" :key="i">
          <p class="name">🚌 {{ item.name }}</p>
          <template v-if="item.collected"
            ><strong class="rate">コレクト済み</strong></template
          >
          <template v-else><p class="rate">未コレクト</p></template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collect",
  data() {
    return {
      stops: [
        { name: "中山入口", collected: false },
        { name: "富里（国道側）", collected: true },
        { name: "奥武入口", collected: true },
        { name: "堀川入口", collected: true },
        { name: "奥武入口", collected: true },
        { name: "志堅原公民館前", collected: true },
        { name: "奥武島", collected: false }
      ]
    };
  },
  computed: {
    collectionRate() {
      const isCollectedCount = this.stops.reduce((result, stop) => {
        if (stop.collected) return ++result;
        return result;
      }, 0);
      if (this.stops.length <= 0) return 0;
      return Math.round((isCollectedCount / this.stops.length) * 100);
    }
  }
};
</script>

<style scoped>
h3,
p {
  margin: 0;
  padding: 0;
}

.footer {
  background-color: #2c3e50;
  text-align: left;
  padding: 0.7rem;
  color: #fff;
  font-weight: bold;
  display: flex;
  flex-flow: row;
  align-items: center;
}

.footer p {
  margin-left: auto;
}

.album {
  width: 100vw;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  overflow-y: scroll;
}

.tiles {
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.tile {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
}

.tile:not(:last-child) {
  border-bottom: 1px solid #2c3e50;
  box-sizing: border-box;
}

.rate {
  margin-left: auto;
}
</style>
