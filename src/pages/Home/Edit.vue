<template>
  <div>
      <Theader :showPen="true">个人资料</Theader>
      <Administrator />
  </div>
</template>

<script>
// 引入头部组件
import Theader from "../../components/Theader.vue";
import Administrator from "../../components/Administrator.vue";

export default {
    name: "app",
  components: {
    Theader,
    Administrator,
  }

};
</script>

<style lang="scss" scoped>
</style>