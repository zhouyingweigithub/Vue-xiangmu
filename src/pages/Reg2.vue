<template>
<div id="reg2">
    <div>
    <div>
      <img src="../assets/shangyiye.png" alt="">
    </div>
    <span>验证码登录</span>
    </div>
    <div>
        <p>验证码已经过短信发送至：</p>
        <p>+86 13877045640</p>
    </div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
    <div>
        <span>重新发送（<span>5秒</span>）</span>
    </div>
    <div>
        <span>密码登录</span>
    </div>
</div>
</template>

<style scoped>
#reg2 {
  width: 100%;
  height: 17.777778rem;
  background: #f6f5f1;
}
#reg2 > div:nth-child(1) {
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
#reg2 > div:nth-child(1) div {
  height: 1rem;
  width: 1rem;
  position: absolute;
  left: 0.241546rem;
  top: 50%;
  transform: translateY(-50%);
}
#reg2 > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}
#reg2 > div:nth-child(2) {
  width: 100%;
  overflow: hidden;
  font-size: 0.434783rem;
  color: #abaaaa;
  text-align: center;
}
#reg2 > div:nth-child(2) p:nth-child(1){
    margin-top: 0.845411rem;
}
#reg2 > div:nth-child(2) p:nth-child(2){
    color:#444444;
}
#reg2 ul{
    width: 100%;
    height: 2.415459rem;
    margin-top: 0.917874rem;
    padding: 0 0.797101rem;
    box-sizing: border-box;
}
#reg2 ul li{
    width: 1.73913rem;
    height: 100%;
    margin-left: 0.434783rem;
    background: #fff;
    float: left;
    border-left: 1px solid #f6f5f1;
    border-right: 1px solid #f6f5f1;
    box-sizing: border-box;
    border-radius: 0.193237rem;
}
#reg2 ul li:nth-child(1){
    margin-left: 0;
}
#reg2 div:nth-child(4){
    margin-top: 1.449275rem;
    font-size: 0.386473rem;
    text-align: center;
    color: #c7c7c7;
}
#reg2 div:nth-child(5){
    margin-top: 1.15942rem;
    color: #709fde;
    text-align: center;
    font-size: 0.386473rem;
}
#reg2 div:nth-child(4) span,
#reg2 div:nth-child(5) span{
    cursor: pointer;
}
</style>

<script>

</script>
