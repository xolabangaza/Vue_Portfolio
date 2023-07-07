<template>
  <footer>  
    <div class="icon">
  <ul class="nav justify-content-center border-bottom pb-3 mb-3 ">
      <a href="https://www.facebook.com/" target="_blank"
        ><i class="fa-brands fa-facebook fa-fade m-3 fs-1"></i ></a>
      <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram fa-fade m-3 fs-1">
        </i></a>
      <a
        href="https://www.github.com/"
        target="_blank" ><i class="fa-brands fa-github fa-fade m-3 fs-1"></i></a>
  </ul>

    </div>
   
        <div class="copyright">
            <p>copyright©️ 2023</p> 
            <p>made by Xola Bangaza</p>
        </div>
    </footer>  

</template>

<script>
export default {
    
}
</script>

<style scoped>
 footer{
        background-color: rgba(222, 84, 142, 1);
        font-size: 20px;
        padding: 10px;
        text-align: center;

      }
 /* .icon{
  background-color: rgb(245, 124, 169);
  padding:1rem; */
  
     
 .copyright{
        display: flex;
        justify-content: space-between;
        margin: 20px;
      }
 .copyright:hover{
  color:crimson;
 }     

    
</style>