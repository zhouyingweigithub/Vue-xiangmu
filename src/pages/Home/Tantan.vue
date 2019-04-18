<template>
  <div>
      <Theader :showMes="true">探探</Theader>
      <Tmain />
      <Tfooter />
  </div>

</template>
<script>
import Theader from "../../components/Theader.vue";
import Tmain from "../../components/Tmain.vue";
import Tfooter from "../../components/Tfooter.vue";

export default {
  name: "app",
  components: {
    Theader,
    Tmain,
    Tfooter
  }
};
</script>
