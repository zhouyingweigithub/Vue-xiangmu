<template>
  <div>
      <Theader :showMes="true">认证中心</Theader>
      <indentityCont />

  </div>
</template>

<script>
// 引入头部组件
import Theader from "../../components/Theader.vue";
import indentityCont from "../../components/indentityCont.vue";

export default {
  name: "app",
  components: {
    Theader,
    indentityCont,
  },
};
</script>

<style lang="scss" scoped>
</style>