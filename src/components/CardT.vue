  <template>
   <div class="container">
      <div class="row justify-content-between">
        <div class="card my-3 rounded rounded-5" style="width: 18rem;" v-for="test in testimonial" :key="test.id">
          <img :src="test.image" class="card-img-top rounded rounded-5" style="width: 17rem;" :alt="test.title">
          <div class="card-body">
            <h5 class="card-title">{{test.title}}</h5>
            <p class="card-text">{{test.desc}}</p>
          </div>
        </div>
      </div>
    </div> 
  </template>
  
<script>
export default {
  props: ["testimonial"],
};
</script>

<style scoped>
 @media screen and (max-width: 700px) {
    .container{
      margin: 0;
      margin-inline-start: 10px;
      margin-inline-end: 30px
    }

    .card img{
      width: 100%;
      margin-block: 20px;
    }
}
</style>
