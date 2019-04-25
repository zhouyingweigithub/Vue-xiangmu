<template>
   <footer>
       <ul>
          
           <li>
              <!-- <span><img src="../assets/no.png" alt=""></span> -->
                <i><img src="../assets/no.png" alt=""></i>
           </li>
           <li>
                <i><img src="../assets/super.png" alt=""></i>
           </li>
          
           <li>
                <i><img src="../assets/like.png" alt=""></i>
           </li>
           
       </ul>
   </footer>
</template>
<style scoped>
footer {
  height: 1.449275rem;
  width: 100%;
  background: linear-gradient(to top,#fff,rgba(230, 219, 101, 0));
  position: fixed;
  bottom: 0rem;
  left: 0rem;
}
footer ul {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  display: flex;
}
footer ul li {
  float: left;
  flex: 1;
  width: 1.449275rem;
 height: 1.449275rem;
  position: relative;
}
footer ul li i{
  display: block;
  width:1.086957rem;
  height:1.086957rem;
  border-radius: 50%;
  background: #efede8;
  overflow: hidden;
  position: absolute;
  transform: translate(-50%,-50%);
  left:50% ;
  top: 50%;
}
footer ul li i img {
  position: absolute;
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width:.724638rem;
  height:.724638rem;
}

</style>
<script>
export default {
    methods: {
    }
    
}
</script>