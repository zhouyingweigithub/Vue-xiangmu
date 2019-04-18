<template>
  <div>
   <Pair />
   <Pipei />
   <Liaotian />
  </div>
</template>

<script>
import Pair from "../components/Pair.vue";
import Pipei from "../components/Pipei.vue";
import Liaotian from "../components/Liaotian.vue";

export default {
  name: "app",
  components: {
    Pair,
    Pipei,
    Liaotian
  }
};
</script>
