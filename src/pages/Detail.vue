<template>
<div>
    <PosionMsg>
        <img src="../assets/c1.jpg" alt="" id="img"> 
        <h2 class="uname" v-text="uname"></h2>
         <div style=" padding-left: 10px;">
            <span class="sex" v-text="age"></span>
            <span class="constellation" v-text="constellation"></span>
        </div>
        <div class="alive" v-text="alive"></div>
        <div class="myMsg" v-text="myMsg"></div>
        <div class="same">
            <span >星座</span>
            <span class="r" v-text="constellation"></span>
        </div>
        <div class="same">
            <span>来自</span>
            <span class="r" v-text="from"></span>
        </div>
        <div class="myMsg">我的标签</div>
        <div class="same">
            <span>#</span>
            <span class="same1" style="background:#ff7f00;" v-text="like"></span>
        </div>
         <div class="myMsg">我的兴趣</div>
        <div class="same">
            <span>运动</span>
            <span class="same1" style="background:#ff7f00;" v-text="active"></span>
        </div>
        <div class="same">
            <span>音乐</span>
            <span class="same1" style="background:#ff7f00;" v-text="music"></span>
        </div>
         <div class="same">
            <span>美食</span>
            <span class="same1" style="background:#ff7f00;" v-text="eate"></span>
        </div>
    </PosionMsg>
    <DetailFooter />
    </div>
</template>
<style>
#img {
  width: 100%;
}
.uname {
  padding-left: 0.241546rem;
  width: 100%;
  margin-bottom: 0.120773rem;
  height: 0.603865rem;
  line-height: 0.603865rem;
  font-size: 0.386473rem;
  box-sizing: border-box;
}
.sex {
  border-radius: 0.120773rem;
  display: inline-block;
  padding-left: 0.724638rem;
  height: 0.483092rem;
  width: 1.570048rem;
  background: url(../assets/sex.png) no-repeat 0.241546rem 0.072464rem;
  background-color: pink;
  background-size: 0.386473rem;
  box-sizing: border-box;
  font-size: 0.338164rem;
}
.constellation {
  border-radius: 0.120773rem;
  display: inline-block;
  margin-left: 0.483092rem;
  background: #ff7f00;
  height: 0.483092rem;
  width: 1.449275rem;
  text-align: center;
  font-size: 0.338164rem;
}
.alive {
  margin-top: 0.241546rem;
  color: #ccc;
  padding-left: 0.241546rem;
  font-size: 0.338164rem;
}
.myMsg {
  width: 100%;
  height: 1.207729rem;
  background: #f6f5f3;
  padding-left: 0.241546rem;
  line-height: 1.207729rem;
  font-size: 0.386473rem;
  color: #474747;
  border-top: 0.024155rem solid #ccc;
  box-sizing: border-box;
}
.same {
  width: 100%;
  height: 1.086957rem;
  line-height: 1.086957rem;
  padding-left: 0.241546rem;
  border-top: 0.024155rem solid #ccc;
  box-sizing: border-box;
}
.same span {
  display: inline-block;
  width: 1.207729rem;
  height: 0.603865rem;
  line-height: 0.603865rem;
  text-align: center;
  font-size: 0.338164rem;
}
.r {
  margin-left: 0.724638rem;
  font-size: 0.338164rem;
}
.like {
  display: inline-block;
  height: 0.724638rem;
  width: 1.207729rem;
  border-radius: 0.193237rem;
  line-height: 0.724638rem;
  text-align: center;
  box-sizing: border-box;
  font-size: 0.338164rem;
}
.same1 {
  margin-left: 0.241546rem;
  box-sizing: border-box;
  display: inline-block;
  background: darkturquoise;
  width: 1.207729rem;
  height: 0.483092rem;
  border-radius: 0.120773rem;
  font-size: 0.338164rem;
}
</style>
<script>
import DetailFooter from "../components/DetailFooter.vue";
export default {
  components: {
    DetailFooter
  },
  data() {
    return {
      uname: "十八岁的老阿姨",
      age: "18",
      constellation: "处女座",
      alive: "900m,一分钟前活跃",
      myMsg: "我的信息",
      like: "唱歌",
      from: "广州",
      eate: "中餐",
      active: "瑜伽",
      music: "流行"
    };
  },
  methods: {}
};
</script>


