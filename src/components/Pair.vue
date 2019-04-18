<template>
<div class="allPair">
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
</template>
<style>
.allPair {
  width: 8.623188rem;
  /* height: 17.777778rem; */
  float: right;
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
  margin-bottom: 0.193237rem;
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
</style>
<script>
export default {
  data() {
    return {
      pair: "999个匹配"
    };
  }
};
</script>


