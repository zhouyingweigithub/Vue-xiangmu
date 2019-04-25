<template>
  <div>
      <Theader :showMes="true">探探</Theader>
      <Tmain />
      <Tfooter />
      <PopupWindow />
  </div>

</template>
<script>
import Theader from "../../components/Theader.vue";
import Tmain from "../../components/Tmain.vue";
import Tfooter from "../../components/Tfooter.vue";
import PopupWindow from "../../components/PopupWindow.vue";

export default {
  name: "app",
  components: {
    Theader,
    Tmain,
    Tfooter,
    PopupWindow
  }
};
</script>
