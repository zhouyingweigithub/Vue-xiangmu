<template>
<div>
  <Cheader>编辑个人信息</Cheader>
    <Redact /> 
  </div>
</template>

<script>
import Redact from "../components/Redact.vue";
import Cheader from "../components/Cheader.vue";

export default {
  components: {
    Cheader,
    Redact
  }
};
</script>

<style scope>
</style>
