<template>
  <div class="">
    <type-nav></type-nav>
    <list-container></list-container>
    <recommend></recommend>
    <rank></rank>
    <like></like>
    <floor></floor>
    <floor></floor>
  </div>
</template>

<script>
import TypeNav from "@/components/TypeNav/TypeNav.vue";
import ListContainer from "./listContainer/ListContainer.vue";
import Recommend from "./recommend/Recommend.vue";
import Rank from "./rank/Rank.vue";
import Like from "./like/like.vue";
import Floor from "./floor/Floor.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    TypeNav,
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
  },

  created() {},
  mounted() {},
  methods: {},
};
</script>

<style lang='scss' scoped>
</style>