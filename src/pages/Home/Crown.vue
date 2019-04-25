<template>
  <div>
      <Theader :showMore="true">激活特权</Theader>
      <CrownCent />
  </div>

</template>
<script>
import Theader from "../../components/Theader.vue";
import CrownCent from "../../components/CrownCent.vue";

export default {
  name: "app",
  components: {
    Theader,
    CrownCent,
  }
};
</script>
