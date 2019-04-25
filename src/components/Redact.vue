<template>
<div class="redact">
  <div  v-for="(i,index) in arr" :key="index">
    <div class="tou">
        <div class="top">
            <div class=" left" style="float:left">
                <img :src="i.img" alt="">
            </div>
            <div class="right" style="float:right">
                <div class="same" style="border-bottom:1px solid #fff;">
                    <img :src="i.img1" alt="">
                </div>
                <div class="same"  style="border-bottom:1px solid #fff;">
                     <img :src="i.img1" alt="">
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="same"  style="float:left; border-right:1px solid #fff;">
                 <img :src="i.img1" alt="">
            </div>
            <div class="same"  style="float:left; border-right:1px solid #fff;">
                 <img :src="i.img1" alt="">
            </div>
            <div class="same"  style="float:left; border-right:1px solid #fff;">
                 <img :src="i.img1" alt="">
            </div>
        </div>
    </div>
    <div class="body">
        <div class="wenzi" style="float:left">
            <p v-text="i.name"></p>
            <p style="color: #C9C9CB;">点击编辑个人信息(如姓名、年龄)</p>
        </div>
        <div style="float:right;color: #C9C9CB;" class="tubiao">＞</div>
    </div>
    <div class="foot">
            我的信息
    </div>
    <div class="oops">
        <span style="width:2.657005rem;float:left;">行业</span>
        <span style="float:left;">添加行业信息</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="width:2.657005rem;float:left;">工作领域</span>
        <span style="float:left;">添加工作领域信息</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="width:2.657005rem;float:left;">公司</span>
        <span style="float:left;">添加公司信息</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="width:2.657005rem;float:left;">来自</span>
        <span style="float:left;">添加你的家乡信息</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="width:2.657005rem;float:left;">经常出没</span>
        <span style="float:left;">添加你经常去的地点</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops" style="border:none;">
        <span style="width:2.657005rem;float:left;">个人签名</span>
        <span style="float:left;">添加你的个人签名</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
    <div class="foot">
            我的标签
    </div>
    <div class="oops" style="border:none;">
        <span style="float:left;  background-color: #435273;" class="tutu jing"></span>
        <span style="float:left;color:#435273; background: #B5B6B8;" class="bq">女友永远是对的</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="foot">
           我的兴趣
    </div>
    <div class="oops">
        <span style="float:left;background-color: #3F9941;" class="tutu yundong"></span>
        <span style="float:left;color:#3F9941; background-color: #D3EADA;" class="bq">睡觉</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="float:left;background-color: #1231C8;" class="tutu yinyue"></span>
        <span style="float:left;color:#1231C8; background-color: #B9BFDB;" class="bq">G.E.M邓紫棋</span>
        <span style="float:left;color:#1231C8; background-color: #B9BFDB;" class="bq">Taylor Swift</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="float:left;background-color: #CF5B48;" class="tutu canju"></span>
        <span style="float:left;color:#CF5B48; background-color: #E9B4A1;" class="bq">港式早茶</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="float:left;background-color: #504D7D;" class="tutu shouyinji"></span>
        <span style="float:left;color:#504D7D; background-color: #CAC8E0;" class="bq">这个杀手不太冷</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops">
        <span style="float:left;background-color: #D9AC3F;" class="tutu shu"></span>
        <span style="float:left;color:#D9AC3F; background-color: #FAEDC3;" class="bq">海贼王</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
      <div class="oops" style="border:none;">
        <span style="float:left;background-color: #70A2C5;" class="tutu feiji"></span>
        <span style="float:left;color:#70A2C5; background-color: #D3DFE5;" class="bq">桂林</span>
        <span style="float:left;color:#70A2C5; background-color: #D3DFE5;" class="bq">香格里拉</span>
        <span style="float:left;color:#70A2C5; background-color: #D3DFE5;" class="bq">丽江</span>
        <span style="float:left;color:#70A2C5; background-color: #D3DFE5;" class="bq">张家界</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
     <div class="foot">
           我的问答
    </div>
        <div class="body" style="border-bottom:.024155rem solid #F5F5F5;">
        <div class="wenzi" style="float:left">
            <p >如果女朋友生气了，怎么哄</p>
            <p style="color: #C9C9CB;">多喝热水</p>
        </div>
        <div style="float:right;color: #C9C9CB;font-size: .483092rem;" class="tubiao">＞</div>
    </div>
    <div class="oops">
        <span style="float:left;" class="tutu jia"></span>
        <span style="float:left;color:#BBBBBB;" class="bq">添加问题</span>
        <span style="float:right; margin-right:.362319rem;font-size: .483092rem;">＞</span>
    </div>
    <div class="last"></div>
  </div>
</div>

</template>
<script>
import img from "../assets/1.jpg"
import img1 from "../assets/jiahao.png"
;
export default {
    data(){
        return{

            arr:[
                {  

                    name:'oops,18',
                    img:img,
                    img1:img1,
                },
            ]
        }
    }
}
</script>
<style scoped>
.redact{
    margin-top: 1.466667rem;
}
.tou{
    width: 10rem;
    height: 10rem;
}
.top{
    height: 6.618357rem;
    width: 10rem;
}
.left,.left img{
   height: 6.618357rem;
   width: 6.666667rem;
}
.same{
    width:3.333333rem;
    height: 3.309179rem;
    box-sizing: border-box;
    background: #ccc;
    position: relative;
}
.same img{
    margin: auto;
    width:.772947rem;
    height: .772947rem;
    box-sizing: border-box;
    position:absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
}
.body{
    height:1.207729rem;
    width: 9.178744rem;
    font-size: .483092rem;
    margin:.362319rem .362319rem;
}
.wenzi p{
    font-size:.386473rem;
    line-height:.603865rem;
}
.tubiao{
    height: 1.207729rem;
    line-height: 1.207729rem;
    font-size:.724638rem;
}
.foot{
    height: 1.884058rem;
    background: #F6F5F3;
    line-height: 1.884058rem;
    font-size:.434783rem ;
    padding-left: .362319rem;
    color: #C9C9CB;
}
.oops{
    font-size: .386473rem;
    height: 1.256039rem;
    margin-left:.362319rem;
    line-height:  1.256039rem;
    border-bottom:.024155rem solid #F5F5F5;
    color: #C9C9CB;
}
.tutu{
    width: .603865rem;
    height: .603865rem;
    border-radius: .193237rem;
    margin-top:.31401rem;
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
.jia{
    width: .483092rem;
    height: .483092rem;
    border-radius: 50%;
    background-image: url(../assets/jiahao.png);
     background-size:.483092rem;
}
.last{
    width: 100%;
    height: 1.014493rem;
    background: #F6F5F3;
}
</style>

