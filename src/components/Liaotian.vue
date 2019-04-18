<template>
     <div class="pair2">
          <div class="chactBox" v-for="(i,index) in arr" :key='index'>
            <div class="hp">
                <div class="hpImg"><img :src="i.img"></div>
            </div>
            <div class="contain">
                <div class="user" v-text="i.name"></div>
                <div class="dialogue" v-text="i.dialogue"></div>
            </div>
        </div>
      </div>
</template>
<script>
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/5.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/3.jpg";
export default {
  data() {
    return {
      arr: [
        {
          img: img1,
          name: "啦啦啦",
          dialogue: "不知道"
        },
        {
          name: "啊啊啊啊",
          dialogue: "好吧",
          img: img2
        },
        {
          img: img3,
          name: "嗯嗯呢",
          dialogue: "不知道哎"
        },
      ]
    };
  }
};
</script>
<style>
.pair2 {
  width: 8.623188rem;
  float: right;
  background: rgba(27, 16, 16, 0.5);
  color: white;
}
.chactBox {
  height: 1.811594rem;
  width: 100%;
}
.hp {
  width: 2.05314rem;
  float: left;
  height: 1.811594rem;
}
.hpImg {
  height: 1.449275rem;
  width: 1.449275rem;
  border-radius: 50%;
  margin-top: 0.144928rem;
  margin-left: 0.289855rem;
  border: 0.024155rem solid #ccc;
  overflow: hidden;
}
.hpImg img {
  height: 1.449275rem;
}
.contain {
  float: right;
  margin-top: 0.289855rem;
  width: 6.521739rem;
  height: 1.449275rem;
  border-bottom: 0.024155rem solid #ccc;
}
.user,
.dialogue {
  font-size: 0.386473rem;
  line-height: 0.676329rem;
}
</style>
