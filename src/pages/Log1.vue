<template>
    <div id="log1">
        <ul>
            <li style="display:block"><img src="../assets/Log1.jpg" alt="" @click="jjj" v-show="bool"></li>
            <li><img src="../assets/Log1.jpg" alt=""></li>
            <li><img src="../assets/Log1.jpg" alt=""></li>
        </ul>
        <div>
            <div>
                <span style="background:#000000"></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div>
            <div>
                <div>
                    <img src="../assets/wx.png" alt="">
                    <span>微信登录</span>
                </div>
            </div>
            <div><span>手机号码登录</span></div>
        </div>
        <div>
          <span>点击登录既同意探探的</span>
          <span>用户协议及隐私条款</span>
        </div>
    </div>
</template>

<style scoped>
*ul li {
  list-style: none;
}
#log1 {
  background: #f3f2ed;
  width: 100%;
  height: 17.777778rem;
}
#log1 ul {
  width: 100%;
  height: 11.15942rem;
}
#log1 ul li {
  width: 100%;
  height: 100%;
  float: left;
  display: none;
}
#log1 ul li img {
  width: 100%;
  height: 100%;
}
#log1 > div:nth-child(2) {
  width: 100%;
  height: 0.241546rem;
  float: left;
}
#log1 > div:nth-child(2) > div {
  width: 1.256039rem;
  height: 0.241546rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
#log1 > div:nth-child(2) > div span {
  display: block;
  width: 0.241546rem;
  height: 0.241546rem;
  float: left;
  margin-left: 0.241546rem;
  background: #91918e;
  border-radius: 50%;
}
#log1 > div:nth-child(2) > div span:nth-child(1) {
  margin: 0;
}
#log1 > div:nth-child(3) {
  width: 100%;
  overflow: hidden;
  margin-top: 1.352657rem;
  padding: 0 0.531401rem;
  box-sizing: border-box;
}
#log1 > div:nth-child(3) > div {
  width: 100%;
  height: 1.352657rem;
  border: 0.024155rem solid #bbb2ae;
  border-radius: 0.241546rem;
  font-size: 0.386473rem;
  line-height: 1.352657rem;
  text-align: center;
  position: relative;
}
#log1 > div:nth-child(3) > div:nth-child(1) {
  background: #71b87c;
}
#log1 > div:nth-child(3) > div:nth-child(1) > div {
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#log1 > div:nth-child(3) > div:nth-child(1) img {
  width: 0.724638rem;
  height: 0.724638rem;
  vertical-align: middle;
}
#log1 > div:nth-child(3) > div:nth-child(1) span {
  color: #fff;
  margin-left: 0.241546rem;
}
#log1 > div:nth-child(3) > div:nth-child(2) {
  margin-top: 0.57971rem;
  background: #f3f2ed;
  color: #8c8484;
}
#log1 > div:nth-child(4) {
  text-align: center;
  overflow: hidden;
  margin-top: 0.821256rem;
  font-size: 0.338164rem;
  color: #cfcfcb;
}
#log1 > div:nth-child(4) span:nth-child(2) {
  color: #d0d0cc;
}
</style>

<script>
export default {
  data() {
    return {
      bool: true
    };
  },
  methods: {
    jjj() {
      this.bool = true ? false : true;
    }
  }
};
</script>


