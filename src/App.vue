<template>
<NavBarComp/>
<router-view/>
<FooterComp/>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <!-- <router-view/> -->
</template>
<script>
import NavBarComp from './components/NavBar.vue';
import FooterComp from './components/Footer.vue';
export default {
  components: {NavBarComp, FooterComp}
  
}
</script>


<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
#app{
  background-color: #CA2072;
}

@media screen and (max-width: 700px){
    *{
      overflow: visible;
    } 
  }
</style>
