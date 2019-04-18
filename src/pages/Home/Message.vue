<template>
  <div>
      <Theader :showMes="flase" :showPen="flase" :showBig="true" :showHelp="flase" :showMore="flase">匿名暗恋表白</Theader>
  </div>

</template>
<script>
import Theader from "../../components/Theader.vue";

export default {
  name: "app",
  components: {
    Theader,
  }
};
</script>
