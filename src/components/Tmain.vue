<template>
    <main @click="toDetail">
    </main>
</template>
<style scoped>
main{
    height:12.32rem;
    width: 100%;
    position: fixed;
    top: 1.466667rem;
    left: 0px;
    background: pink;
}
</style>
<script>
export default {
  methods: {
    toDetail(){
      this.$router.push({ name: "detail"});
    }
  }
};
</script>

