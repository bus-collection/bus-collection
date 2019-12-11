<template>
  <div class="menu">
    <ul>
      <li v-for="(m, i) in menu" :key="i" @click="to(m.route)">
        <p><v-icon :name="m.type" scale="1.7" /></p>
        <p>{{ m.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import "vue-awesome/icons";
import Icon from "vue-awesome/components/Icon";

export default {
  name: "MenuFooter",
  components: {
    "v-icon": Icon
  },
  data() {
    return {
      menu: [
        { name: "Menu", type: "bars", route: "top" },
        { name: "Quest", type: "question-circle", route: "quest-list" },
        { name: "Map", type: "search", route: "map" },
        { name: "Album", type: "images", route: "album" },
        { name: "Ranking", type: "crown", route: "ranking" }
      ]
    };
  },
  methods: {
    to(route) {
      this.$router.push(route);
    }
  }
};
</script>

<style scoped>
.menu {
  height: 60px;
  width: 100vw;
}

ul,
li,
p {
  margin: 0;
  padding: 0;
  list-style: none;
}

ul {
  display: flex;
  flex-flow: row;
}

li {
  width: 20%;
  cursor: pointer;
  height: 60px;
}

li:hover {
  background-color: #2c3e50;
  color: #fff;
  font-weight: bold;
}

li:active {
  transform: scale(1.2, 1.2);
}

li p:first-child {
  margin-top: 7px;
  height: 30px;
}

li p:last-child {
  height: 15px;
}
</style>
