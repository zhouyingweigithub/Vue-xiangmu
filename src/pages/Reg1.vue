<template>
  <div id="reg1">

    <div>
    <div>
      <img src="../assets/shangyiye.png" alt="">
    </div>
    <span>手机号码</span>
    </div>

    <div>
    请输入正确的手机号码，点击并继续
    </div>

    <ul>
      <li>
        <div>+86</div>
        <input type="text" placeholder="手机号码">
      </li>
      <li>继续</li>
    </ul>

  </div>
 
</template>

<script>
export default {
};
</script>

<style scoped>
#reg1 {
  width: 100%;
  height: 17.777778rem;
  background: #f6f5f1;
}
#reg1 > div:nth-child(1) {
  width: 100%;
  height: 1.207729rem;
  background: #c85740;
  position: relative;
  text-align: center;
  font-size: 0.434783rem;
  line-height: 1.207729rem;
  color: #fff;
  position: relative;
}
#reg1 > div:nth-child(1) div {
  height: 1rem;
  width: 1rem;
  position: absolute;
  left: 0.241546rem;
  top: 50%;
  transform: translateY(-50%);
}
#reg1 > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}
#reg1 > div:nth-child(2) {
  width: 100%;
  height: 2.125604rem;
  line-height: 2.125604rem;
  font-size: 0.434783rem;
  color: #abaaaa;
  text-align: center;
}
#reg1 ul {
  overflow: hidden;
  padding: 0 0.2657rem;
  box-sizing: border-box;
}
#reg1 ul li {
  width: 100%;
  height: 1.594203rem;
  border-radius: 0.193237rem;
  margin-bottom: 0.772947rem;
  font-size: 0.531401rem;
  color: #c2c2c7;
  padding: 0.217391rem 0;
  box-sizing: border-box;
}
#reg1 ul li:nth-child(1) {
  background: #fff;
}
#reg1 ul li:nth-child(2) {
  background: #e8e6e0;
}
#reg1 ul li:nth-child(1) div {
  height: 1.183575rem;
  float: left;
  line-height: 1.183575rem;
  height: 1.183575rem;
  text-align: center;
  width: 2.222222rem;
  border-right: 0.024155rem solid #f3f3f2;
  color: #373737;
}
#reg1 ul li:nth-child(1) input {
  height: 1.183575rem;
  width: 7.046377rem;
  float: left;
  border: 0;
  line-height: 1.183575rem;
  padding: 0 0.555556rem;
  box-sizing: border-box;
}
#reg1 ul li:nth-child(2) {
  text-align: center;
  line-height: 1.15942rem;
  color: #fff;
}
</style>
