<template>
    <div class="leftSideBar">
        <div class="headPortrait" @click="toHome">
            <i></i>
            <p class="username">rabbit就爱吃肉</p>
            <p class="changeImage">点击查看/编辑</p>
        </div>
        <ul class="mainCont">
            <li @click="toTab(index)" v-for="(t,index) in tabber" :key="index" :class="{'btn':tab===index}">
                <img :src="t.imge">
                <i v-text="t.title"></i>
            </li>
        </ul>
    </div>
</template>

<style lang="scss">
.leftSideBar {
  width: 8.4rem;
  height: 100%;
  background: #25211f;
  color: #fff;
  .headPortrait {
    width: 100%;
    height: 6.133333rem;
    text-align: center;
    overflow: hidden;
    i {
      display: block;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: #fff;
      margin-left: 3.2rem;
      margin-top: 0.933333rem;
    }
    .username {
      font-size: 0.586667rem;
      margin-top: 0.32rem;
      margin-bottom: 0.266667rem;
    }
    .changeImage {
      color: #4a4848;
      font-size: 0.373333rem;
    }
  }
  .mainCont {
    height: 11.653333rem;
    width: 100%;
    padding-left: 0.933333rem;
    box-sizing: border-box;
    li {
      font-size: 0.533333rem;
      height: 0.933333rem;
      overflow: hidden;
      line-height: 0.933333rem;
      vertical-align: middle;
      margin-bottom: 0.666667rem;
      img {
        display: inline-block;
        width: 0.533333rem;
        height: 0.533333rem;
        vertical-align: middle;
        margin-top: -0.106667rem;
        margin-right: 0.4rem;
      }
      i {
        font-style: normal;
      }
    }
  }
}
</style>

<script>
import imge1 from "../assets/photo.png";
import imge2 from "../assets/crown.png";
import imge3 from "../assets/message.png";
import imge4 from "../assets/identity.png";
import imge5 from "../assets/install.png";
import imge6 from "../assets/help.png";
import imge7 from "../assets/share.png";
export default {
  data() {
    return {
      tabber: [
        { title: "探探", name: "tantan", imge: imge1 },
        { title: "激活特权", name: "crown", imge: imge2 },
        { title: "匿名暗恋表白", name: "message", imge: imge3 },
        { title: "认证中心", name: "indentity", imge: imge4 },
        { title: "设置", name: "install", imge: imge5 },
        { title: "新手指导", name: "help", imge: imge6 },
        { title: "推荐给好友", name: "share", imge: imge7 }
      ],
      tab: 0
    };
  },
  methods: {
    // 点击头像回到吧编辑页
    toHome() {
      this.$router.push({ name: "edit" });
    },
    // 切换底部选项卡
    toTab(tab) {
      this.tab = tab;
      // 获取当前的tab的name值
      let name = this.tabber[tab].name;
      // 跳路由
      this.$router.push({ name });
    }
  }
};
</script>
