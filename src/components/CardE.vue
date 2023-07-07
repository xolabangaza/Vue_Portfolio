  <template>
  <div class="container">
      <div class="d-flex justify-content-between">
        <div class="card my-3 rounded rounded-1" style="width: 18rem;">
          <div class="card-body bg bg-primary">
            <h5 class="card-title">{{education.title}}</h5>
            <p class="card-text">{{education.date}}</p>
             <p class="card-text2">{{education.place}}</p>
          </div>
        </div>
      </div>
    </div> 
  </template>
  
<script>
export default {
  props: ["education"],
};
</script>
<style scoped>

</style>