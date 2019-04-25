<template>
  <div>
      <Theader :showBig="true">匿名暗恋表白</Theader>
      <Biaobai />

  </div>

</template>
<script>
import Theader from "../../components/Theader.vue";
import Biaobai from "../../components/Biaobai.vue";

export default {
  name: "app",
  components: {
    Theader,
    Biaobai
  }
};
</script>
