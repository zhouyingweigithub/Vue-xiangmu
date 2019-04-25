<template>
    <div id="Vip1">
      <!-- 头像 -->
        <div class="xinxi">
          <div class="beijing">
            <img src="../assets/touxiang.jpg" alt="">
          </div>
          <div class="touxiang">
            <div>
              <img src="../assets/touxiang.jpg" alt="">
            </div>
            <div>
              <p>依山尽</p>
              <p v-text="title"></p>
            </div>
          </div>
        </div>
        <!-- 分类 -->
        <div class="fenlei">
          <ul>
            <li @click="changeCont(index)" v-for="(t,index) in tabber" :key="index" v-text="t.title" :class="{
        'gaoliang':tab===index}"></li>
          </ul>
        </div>

        <!-- 选项1 -->
        <div class="xuanxiang" v-show="tab===0">
          <ul>
            <li>
              <div>
                <img src="../assets/a1.jpg" alt="">
              </div>
              <div>
                <p>会员身份标识</p>
                <p>昵称升级为红色，专属身份标识</p>
              </div>
            </li>
            <li>
              <div>
                <img src="../assets/a2.jpg" alt="">
              </div>
              <div>
                <p>每天5个“超级喜欢”</p>
                <p>喜欢更有分量，配对飙升5倍！</p>
              </div>
            </li>
            <li>
              <div>
                <img src="../assets/a3.jpg" alt="">
              </div>
              <div>
                <p>滑错无限反悔</p>
                <p>强制反悔，瞬间找回错过缘分！</p>
              </div>
            </li>
            <li>
              <div>
                <img src="../assets/a4.jpg" alt="">
              </div>
              <div>
                <p>任意更改定位</p>
                <p>位置漫游，与全球朋友asy嗨！</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- 选项2 -->
        <div class="xuanxiang" v-show="tab===1">
          <ul>
            <li>
              <div>
                <img src="../assets/b1.jpg" alt="">
              </div>
              <div>
                <p>查看谁喜欢我</p>
                <p>TA喜欢了我？右滑立即配对！</p>
              </div>
            </li>
          </ul>
        </div>
        <!-- 选项3 -->
        <div class="xuanxiang" v-show="tab===2">
          <ul>
            <li>
              <div>
                <img src="../assets/c1.jpg" alt="">
              </div>
              <div>
                <p>超级曝光</p>
                <p>配对利器！30分钟内10倍的人优先看到你！</p>
              </div>
            </li>
          </ul>
        </div>

        <!-- 底部 -->
        <div class="bottom">
          <h6>获取VIP会员</h6>
        </div>
    </div>
</template>

<style scoped>
#Vip1 {
  width: 100%;
  height: 17.777778rem;
  text-align: center;
}
#Vip1 .bottom {
  width: 100%;
  height: 1.497585rem;
  background: #d34530;
  position: fixed;
  bottom: 0;
  font-size: 0.386473rem;
  line-height: 1.497585rem;
  color: #fff;
  font-weight: 600;
  background: linear-gradient(to left top, #ff863e, #ff3f45);
}
#Vip1 .xinxi {
  width: 100%;
  height: 3.52657rem;
  position: relative;
  overflow: hidden;
  margin-top: 1.466667rem;
}
#Vip1 .xinxi .beijing {
  width: 10rem;
  height: 10rem;
}
#Vip1 .xinxi .beijing img {
  width: 10rem;
  height: 10rem;
  margin-top: -30%;

  -webkit-filter: blur(5px); /* Chrome, Opera */
  -moz-filter: blur(5px);
  -ms-filter: blur(5px);
  filter: blur(5px);
}
#Vip1 .xinxi .touxiang {
  width: 80%;
  height: 1.811594rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0.724638rem;
}
#Vip1 .xinxi .touxiang > div:nth-child(1) {
  height: 1.811594rem;
  width: 1.811594rem;
  border-radius: 50%;
  float: left;
  overflow: hidden;
}
#Vip1 .xinxi .touxiang > div:nth-child(1) img {
  width: 100%;
  height: 100%;
}
#Vip1 .xinxi .touxiang > div:nth-child(2) {
  width: 4.830918rem;
  height: 100%;
  float: left;
  padding: 0.386473rem 0.483092rem;
  box-sizing: border-box;
  text-align: left;
}
#Vip1 .xinxi .touxiang > div:nth-child(2) p:nth-child(1) {
  font-size: 0.434783rem;
  color: #fff;
}
#Vip1 .xinxi .touxiang > div:nth-child(2) p:nth-child(2) {
  font-size: 0.289855rem;
  color: #cfbab6;
}
#Vip1 .fenlei {
  width: 100%;
  height: 1.304348rem;
}
#Vip1 .fenlei ul {
  width: 100%;
  height: 100%;
  display: flex;
}
#Vip1 .fenlei ul li {
  flex: 1;
  float: left;
  line-height: 1.304348rem;
  font-size: 0.386473rem;
  color: #979797;
  border-bottom: 1px solid #979797;
}
#Vip1 .fenlei ul .gaoliang {
  color: #f1603f;
  border-bottom: 1px solid #f1603f;
}
#Vip1 .xuanxiang {
  width: 100%;
  min-height: 11.352657rem;
  border-bottom: 1px solid #ccc;
}
#Vip1 .xuanxiang ul {
  width: 100%;
  overflow: hidden;
  padding: 0.483092rem 0.531401rem;
  box-sizing: border-box;
}
#Vip1 .xuanxiang ul li {
  width: 100%;
  height: 1.352657rem;
  margin-bottom: 0.772947rem;
}
#Vip1 .xuanxiang ul li div:nth-child(1) {
  width: 1.352657rem;
  height: 100%;
  float: left;
  border-radius: 50%;
  overflow: hidden;
}
#Vip1 .xuanxiang ul li div:nth-child(1) img {
  width: 100%;
  height: 100%;
}
#Vip1 .xuanxiang ul li div:nth-child(2) {
  height: 100%;
  width: 6.038647rem;
  float: left;
  margin-left: 0.483092rem;
  padding: 0.193237rem 0;
  box-sizing: border-box;
  text-align: left;
}
#Vip1 .xuanxiang ul li div:nth-child(2) p:nth-child(1) {
  font-size: 0.386473rem;
  color: #000;
  font-weight: 600;
}
#Vip1 .xuanxiang ul li div:nth-child(2) p:nth-child(2) {
  font-size: 0.338164rem;
  color: #818181;
}
</style>

<script>
export default {
  data() {
    return {
      tabber: [
        { title: "VIP特权" },
        { title: "查看谁喜欢我" },
        { title: "超级曝光" }
      ],
      tab: 0,
      title: "VIP特权",
    };
  },
  methods: {
    // 切换底部选项卡
    changeCont(tab) {
      this.tab = tab;
      this.title =  this.tabber[tab].title;
      // 获取当前的tab的name值
      let name = this.tabber[tab].name;
      // 跳路由
      this.$router.push({ name });
    }
  }
};
</script>


