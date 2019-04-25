<template>
  <div class="content">
    <div class="icon indentity">
     <p class="p1">真实头像认证</p>
     <p class="p2">大幅提高配对成功率，享受专属特权</p>
      <ul>
        <li>
          <div><img src="../assets/v.png" alt=""></div>
          <p>认证标识</p>
        </li>
        <li>          
          <div><img src="../assets/morelike.png" alt=""></div>
          <p>更多喜欢次数</p>
        </li>
        <li>          
          <div><img src="../assets/zan.png" alt=""></div>
          <p>优先推荐</p>
        </li>
      </ul>
     <p class="p3">立即认证</p>
    </div>
    <div class="student indentity">
           <p class="p1">学生身份认证</p>
     <p class="p2">提供在校学校信息，享受多项学生特权</p>
      <ul>
        <li>
          <div><img src="../assets/student.png" alt=""></div>
          <p>学生标识</p>
        </li>
        <li>          
          <div><img src="../assets/celect.png" alt=""></div>
          <p>筛选认证用户</p>
        </li>
        <li>          
          <div><img src="../assets/save.png" alt=""></div>
          <p>满满信任感</p>
        </li>
      </ul>
     <p class="p3">立即认证</p>
    </div>
    <p>*认证资料仅用于审核，其他用户不可见</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.content {
  margin-top: 1.466667rem;
  height: 16.32rem;
  width: 100%;
  background: #f7f7f7;
  overflow: hidden;
  padding: 0 0.266667rem;
  box-sizing: border-box;
  text-align: center;
  .indentity {
    height: 6.933333rem;
    background: #fff;
    border-radius: 0.266667rem;
    overflow: hidden;
    .p1 {
      font-size: 0.586667rem;
      margin-top: 0.48rem;
      margin-bottom: 0.266667rem;
    }
    .p2 {
      font-size: 0.4rem;
      color: #757575;
    }
    ul {
      height: 2.8rem;
      padding: 0 0.666667rem;
      display: flex;
      margin-top: 0.533333rem;
      li {
        flex: 1;
        float: left;
        div {
          width: 2rem;
          height: 2rem;
          border-radius: 50%;
          background: #f6f5f1;
          margin-left: 0.35rem;
          img {
            width: 1.2rem;
            height: 1.2rem;
            margin-top: 0.45rem;
          }
        }
        p {
          color: #adadad;
          margin-top: 0.133333rem;
          font-size: 0.4rem;
        }
      }
    }
    .p3 {
      height: 1.28rem;
      background: #ff7542;
      font-size: 0.4rem;
      line-height: 1.28rem;
      color: #fff;
      margin-top: 0.266667rem;
    }
  }
  .icon {
    margin: 0.4rem 0;
  }
  .student {
    margin-left: 0.266667rem;
    width: 8.933333rem;
  }
  p {
    color: #adadad;
    margin-top: .4rem;
    font-size: .346667rem;
  }
}
</style>