<template>
<div class="container p-5 animate__animated animate__flipInY">
      <div class="row justify-content-between">
        <div class="card my-3" style="width: 11rem;" v-for="skill in skill" :key="skill.id">
          <img :src="skill.image" class="card-img-top" :alt="skill.lang">
          <div class="card-body">
            <h5 class="card-title">{{skill.lang}}</h5>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
             <div class="progress-bar w-75"></div>
           </div>
          </div>
        </div>
      </div>
    </div> 
  </template>
  
<script>
export default {
  props: ["skill"],
};
</script>

<style scoped>
  @media screen and (max-width: 700px) {
    .container{
      margin-inline-start: 20px;
    }
}
</style>