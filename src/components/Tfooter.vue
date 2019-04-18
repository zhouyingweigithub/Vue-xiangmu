<template>
   <footer>
       <ul>
           <li>
               <i><p><img src="../assets/recall.png" alt=""></p></i>
           </li>
           <li>
                <i class="spe"><p><img src="../assets/no.png" alt=""></p></i>
           </li>
           <li>
                <i><p><img src="../assets/know.png" alt=""></p></i>
           </li>
           <li>
                <i class="spe"><p><img src="../assets/like.png" alt=""></p></i>
           </li>
           <li>
                <i><p><img src="../assets/super.png" alt=""></p></i>
           </li>
       </ul>
   </footer>
</template>
<style scoped>
footer {
  height: 4rem;
  width: 100%;
  background: #f7f7f7;
  position: fixed;
  bottom: 0px;
  left: 0px;
}
footer ul {
  height: 100%;
  width: 100%;
  padding: 0 11px;
  box-sizing: border-box;
  display: flex;
}
footer ul li {
  float: left;
  flex: 1;
}
footer ul li i{
  display: block;
  width: 1.466667rem;
  height: 1.466667rem;
  border-radius: 50%;
  background: #efede8;
  margin-right: 0.3rem;
  margin-top: 1.2rem;
  overflow: hidden;
}
footer ul li:nth-child(5) {
  margin-right: 0px;
}
footer ul li .spe {
  height: 1.866667rem;
  width: 1.866667rem;
  border-radius: 50%;
  margin-top: 1.1rem;
}
footer ul li i p {
  width: 1.093333rem;
  height: 1.093333rem;
  background: #fff;
  border-radius: 50%;
  margin-left: 0.186667rem;
  margin-top: 0.186667rem;
  overflow: hidden;
  position: relative;
}
footer ul li i p img {
  position: absolute;
  top: 0.256667rem;
  left: 0.256667rem;
  height: 0.586667rem;
  width: 0.586667rem;
  z-index: 3;
}
footer ul .spe p {
  width: 1.493333rem;
  height: 1.493333rem;
}
footer ul li .spe p img {
  height: 0.746667rem;
  width: 0.746667rem;
  position: absolute;
  top: 0.346667rem;
  left: 0.376667rem;
}
footer ul li i p:hover{
    transform: scale(1.1)
}
</style>
<script>
export default {
    methods: {
    }
    
}
</script>