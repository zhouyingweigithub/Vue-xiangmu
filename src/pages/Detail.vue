<template>
  <div>
    <div v-for="(i,index) in arr" :key="index">
        <img :src="i.img" id="img"> 
        <h2 class="uname" v-text="i.uname"></h2>
        <div style=" padding-left: 10px;">
            <span class="sex" v-text="i.age"></span>
            <span class="constellation" v-text="i.constellation"></span>
            <span class="vip" v-text="i.vip" style="background: #F6B867"></span>
        </div>
        <div class="alive" v-text="i.alive"></div>
        <div class="myMsg">我的信息</div>
        <div class="same">
            <span class="xingzuo">星座</span>
            <span class="r" v-text="i.constellation"></span>
        </div>
        <div class="same">
            <span class="xingzuo">来自</span>
            <span class="r" v-text="i.from"></span>
        </div>
        <div class="myMsg">我的标签</div>
        <div class="same">
            <span style="float:left;  background-color: #435273;" class="tutu jing"></span>
            <span class="same1" style="background:#B5B6B8;color:#435273;" v-text="i.biaoqian"></span>
        </div>
        <div class="myMsg">我的兴趣</div>
        <div class="same">
            <span style="float:left;  background-color: #47913A;" class="tutu yundong"></span>
            <span class="same1" style="background:#D6E8DA;color:#47913A;" v-text="i.active"></span>
        </div>
        <div class="same">
            <span style="float:left;  background-color: #1033C2;" class="tutu yundong"></span>
            <span class="same1" style="background:#BABFDC;color:#1033C2;float:left;" v-text="i.music"></span>
            <span class="same1" style="background:#BABFDC;color:#1033C2;float:left;" v-text="i.music1"></span>
        </div>
        <div class="same">
            <span style="float:left;  background-color: #C16141;" class="tutu canju"></span>
            <span class="same1" style="background:#EBB3A6;color:#C16141;" v-text="i.eate"></span>
        </div>
        <div class="same">
            <span style="float:left;  background-color: #514E7E;" class="tutu shouyinji"></span>
            <span class="same1" style="background:#CAC8E0;color:#514E7E;" v-text="i.video"></span>
        </div>
        <div class="same">
            <span style="float:left;  background-color: #CBAF30;" class="tutu shu"></span>
            <span class="same1" style="background:#FAEDC3;color:#CBAF30;" v-text="i.book"></span>
        </div>
        <div class="same">
            <span style="float:left;  background-color: #77A0C0;" class="tutu feiji"></span>
            <span class="same1" style="background:#D5DEE7;color:#77A0C0;" v-text="i.lvyou"></span>
            <span class="same1" style="background:#D5DEE7;color:#77A0C0;" v-text="i.lvyou1"></span>
            <span class="same1" style="background:#D5DEE7;color:#77A0C0;" v-text="i.lvyou2"></span>
            <span class="same1" style="background:#D5DEE7;color:#77A0C0;" v-text="i.lvyou3"></span>
            <span class="same1" style="background:#D5DEE7;color:#77A0C0;" v-text="i.lvyou4"></span>
        </div>
        <div class="last"></div>
    </div>
    <DetailFooter />
  </div>
</template>
<style>
 .heart{
     height: 1.328502rem;
 }

.huangguan,.xihuan{
    margin-top: .483092rem;
    font-size: .338164rem;
    display: inline-block;
    padding-left:.966184rem;
    width:1.932367rem;
    height: .724638rem;
    text-align: center;
    line-height: .724638rem;
    background: url(../assets/huang.png)no-repeat .241546rem .072464rem;
    background-size:.676329rem;
}
.xihuan{
    margin-top:.386473rem;
    width:3.381643rem;
    margin-left: 12px;
    background: url(../assets/like.png)no-repeat .241546rem .072464rem;
    background-size:.676329rem;
    color: #A8A8A8;
}
.tequan{
    font-size: .338164rem;
    float: right;
    color: red;
    margin-right: .483092rem;
}

#img{
        height: 10rem;
        width: 10rem;
    }

.uname{
     padding-left: .241546rem;
    width: 100%;
    margin-bottom: .120773rem;
    height: .603865rem;
    line-height: .603865rem;
    font-size: .386473rem;
     box-sizing: border-box;
    color: pink;
}
.sex{
    border-radius: .120773rem;
    display:inline-block;
    padding-left:.724638rem;
    height: .483092rem;
    width: 1.570048rem;
    background: url(../assets/sex.png)no-repeat .241546rem .072464rem;
    background-color:pink;
    background-size: .386473rem;
    box-sizing: border-box;
    font-size: .338164rem;
    color: white;
}
.constellation,.vip{
     border-radius: .120773rem;
    display:inline-block;
    margin-left: .483092rem;
    background: turquoise;
    height: .483092rem;
    width: 1.449275rem;
    text-align: center;
    font-size: .338164rem;
    color: white;
}

.alive{
    margin-top: .241546rem;
    color: #ccc;
    padding-left: .241546rem;
    font-size: .338164rem;
}
.myMsg{
    width: 100%;
    height:1.642512rem;
    background: #F6F5F3;
    padding-left: .241546rem;
    line-height: 1.642512rem;
    font-size: .386473rem;
    color: #AEADAB;
    border-top: .024155rem solid #ccc;
    box-sizing: border-box;
}
.same{
    width: 100%;
    height: 1.086957rem;
    padding-left: .241546rem;
     border-top: .024155rem solid #ccc;
     box-sizing: border-box;
}
.xingzuo{
    font-size:.386473rem;
    height: 1.086957rem;
    line-height: 1.086957rem;
     color: #AEADAB;
}
.r{
    margin-left: .724638rem;
    font-size: .386473rem;
}
.like{
    display: inline-block;
    height: .724638rem;
    width: 1.207729rem;
    border-radius: .193237rem;
    line-height: .724638rem;
    text-align: center;
    box-sizing: border-box;
    font-size: .338164rem;
}
.same1{
    margin-left:.338164rem;
    box-sizing: border-box;
    margin-top:.193237rem;
    display: inline-block;
    background: darkturquoise;
    height:.724638rem;
    line-height: .724638rem;
    border-radius: .120773rem;
    font-size: .338164rem;
    padding:0rem .241546rem;
    text-align: center;
}
.tutu{
    width: .603865rem;
    height: .603865rem;
    border-radius: .193237rem;
    margin-top:.241546rem;
    background-image: url(../assets/jing.png);
    background-size:.386473rem;
    background-repeat: no-repeat;
    background-position: center center;
    border-bottom: .024155rem solid #cccccc;
}
.yundong{
    background-image: url(../assets/yundong.png);
}
.yinyue{
    background-image: url(../assets/yinyue.png);   
}
.canju{
    background-image: url(../assets/canju.png);
}
.shouyinji{
    background-image: url(../assets/shouyinji.png);
}
.shu{
    background-image: url(../assets/shu.png);
}
.feiji{
    background-image: url(../assets/feiji.png);
}
.bq{
    border-radius: .241546rem;
    height: .845411rem;
    padding:0 .241546rem;
    line-height:.845411rem; 
    margin-top: .193237rem;
    margin-left: .386473rem;
}
.last{
    width: 100%;
    height: 1.014493rem;
    background: #F6F5F3;
}
</style>
<script>
import DetailFooter from "../components/DetailFooter.vue";
import img from "../assets/timg.jpg";
export default {
  components: {
    DetailFooter
  },
    data(){
        return{
          
         arr:[{
            from:'广东',
            img:img,
            uname:"十八岁的老女人",
            age:'18',
            constellation:"处女座",
            vip:"VIP会员",
            alive:"一分钟前活跃",
            biaoqian:"吃货",
            like:"唱歌",
            from:'广州',
            eate:'港式早茶',
            active:'睡觉',
            music:'G.E.M邓紫棋',
            music1:'Taylor Swift',
            video:"这个杀手不太冷",
            book:"海贼王",
            lvyou:"桂林",
            lvyou1:'香格里拉',
            lvyou2:'丽江',
            lvyou3:'张家界',
            lvyou4:'泰国',
            }
            ]
            
        }
    }
}
</script>


