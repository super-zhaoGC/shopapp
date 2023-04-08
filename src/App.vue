<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="isShow"></Footer>
  </div>
</template>
<script>
import Header from "components/header/Header.vue";
import Footer from "components/footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      isShow: "",
    };
  },
  mounted() {},
  updated() {
    this.isShow = this.$route.meta.isShow;
  },
};
</script>
<style>
</style>
