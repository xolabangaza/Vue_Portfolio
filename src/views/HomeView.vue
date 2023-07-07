<template>
<div class="home">
    <h1 class="fw-bolder animate__animated animate__heartBeat">Welcome <br>to my World</h1>
        <h2 class="fw-bold animate__animated animate__heartBeat">Let's make Magic</h2>
 </div>
        
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style scoped>
   .home{
        background-image: linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(https://i.postimg.cc/W3q4BT50/pexels-designecologist-1779487.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;

      }
      h1{
        position: absolute;
        color:crimson;
        font-size: 80px !important;
        font-family:'Courier New', Courier, monospace;
        text-align: center;
        top: 35%;
        left: 30%;
      }

      h2{
        position: absolute;
        color:crimson;
        font-size: 60px !important;
        font-family:'Courier New', Courier, monospace;
        text-align: center;
        top:70%;
        left: 30%;
      }

      /* Media Queries */
/* @media (max-width: 700px) {
  h1 {
    font-size: 60px !important;
    top: 30%;
    left: 20%;
  }

  h2 {
    font-size: 40px !important;
    top: 60%;
    left: 20%;
  }
} */

/* @media (max-width: 300px) {
  h1 {
    font-size: 40px !important;
    top: 20%;
    left: 10%;
  }

  h2 {
    font-size: 30px !important;
    top: 50%;
    left: 10%;
  }
} */

/* Media Queries */
/* @media (max-width: 700px) {
  .home {
    background-size: contain;
  }
} */

/* @media (max-width: 300px) {
  .home {
    background-size: auto;
  }
} */

  @media screen and (max-width: 700px){
      .home{
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 100vh;
      }

      h1{
        position: absolute;
        color:crimson;
        font-size: 35px !important;
        font-family:'Courier New', Courier, monospace;
        text-align: center;
        top: 35%;
        left: 30%;
        margin-inline-end: 90px;
      }

      h2{
        position: absolute;
        color:crimson;
        font-size: 35px !important;
        font-family:'Courier New', Courier, monospace;
        text-align: center;
        top:70%;
        left: 30%;
        margin-inline-end: 90px;
      }
  }
</style>
