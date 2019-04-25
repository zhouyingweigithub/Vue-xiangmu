<template>
      <div class="tt">
        <div class="tou">
         <div class="pair" v-text="pair"></div>
         <div class="cof">
            <div class="friend">
                <div class="acof">
                    <span class="ps">朋友圈</span>
                    <span style="float:right">
                        <span  class="pl"></span>
                        <span class="pr">＞</span>
                    </span>                    
                </div>
            </div>
        </div>
        <div class="pd">
            <div class="db">
                <span class="pairing">所有配对</span>
                <span class="chact">聊天</span>
            </div>
        </div>
        </div>

        <div>
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
         


        <div>
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
      </div>     
    
</template>
<style scopde>

.tt {
  width: 8.623188rem;
  float: right;
  overflow: hidden;
  background: rgba(27, 16, 16, 0.5);
  color: white;
}
.pair {
  width: 100%;
  height: 1.73913rem;
  text-align: center;
  border-bottom: 0.024155rem solid #ccc;
  font-size: 0.483092rem;
  line-height: 1.73913rem;
}
.cof {
  height: 1.811594rem;
  width: 100%;
  text-align: center;
  display: flex;
}
.friend {
  height: 1.328502rem;
  width: 7.971014rem;
  background: #786b72;
  border-radius: 0.241546rem;
  margin: auto;
}
.acof {
  height: 1.328502rem;
  width: 7.971014rem;
}
.ps {
  padding-left: 0.966184rem;
  height: 1.328502rem;
  font-size: 0.386473rem;
  float: left;
  line-height: 1.328502rem;
  background: url(../assets/p.png) no-repeat left;
  background-size: 0.724638rem;
  margin-left: 0.289855rem;
}
.pl {
  margin-top: 0.193237rem;
  height: 0.942029rem;
  width: 0.942029rem;
  line-height: 0.942029rem;
  float: left;
  border-radius: 50%;
  border: 0.024155rem solid #cccccc;
  background: url(../assets/tou.png);
  background-size: 0.942029rem;
}
.pr {
  height: 1.328502rem;
  margin-right: 0.289855rem;
  float: right;
  width: 0.362319rem;
  line-height: 1.328502rem;
  font-size: 0.531401rem;
}
.pd {
  height: 0.845411rem;
  padding-bottom: 0.193237rem;
}
.db {
  width: 7.971014rem;
  height: 0.797101rem;
  margin: auto;
}
.db > span {
  display: inline-block;
  width: 3.961353rem;
  height: 0.797101rem;
  text-align: center;
  line-height: 0.797101rem;
  font-size: 0.338164rem;
  color: whitesmoke;
  border: 0.024155rem solid #6e6c6d;
}
.db .pairing {
  background: violet;
  border-radius: 0.120773rem 0 0 0.120773rem;
  border-right: none;
}
.db .chact {
  background: turquoise;
  border-radius: 0 0.120773rem 0.120773rem 0;
  border-left: none;
}
.chactBox,
.chactBox1 {
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
<script>
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/5.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/3.jpg";
export default {
  data() {
    return {
      pair: "999个匹配",
      arr: [
        {
          img: img1,
          name: "十八岁的老阿姨",
          dialogue: "配对于4月10号"
        },
        {
          name: "小猪家的胖胖",
          dialogue: "配对于4月12号",
          img: img2
        },
        {
          img: img3,
          name: "会打架的菠萝",
          dialogue: "配对于4月13号"
        },
        {
          name: "小猪家的胖胖",
          dialogue: "配对于4月14号",
          img: img4
        },
        {
          img: img5,
          name: "大番薯",
          dialogue: "配对于4月15号"
        }
      ],
      arr1: [
        {
          img: img1,
          name: "十八岁的老阿姨",
          dialogue: "多喝热水"
        },
        {
          name: "小猪家的胖胖",
          dialogue: "我佛了",
          img: img2
        },
        {
          img: img3,
          name: "会打架的菠萝",
          dialogue: "好困好累"
        },
        {
          name: "小猪家的胖胖",
          dialogue: "好咯",
          img: img4
        },
        {
          img: img5,
          name: "大番薯",
          dialogue: "完犊子了"
        }
      ]
    };
  }
};
</script>


