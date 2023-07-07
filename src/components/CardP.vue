<template>
  <div
    :to="{ title: 'project', params: { id: project } }"
    class="card my-3">
      <img :src="project.image" :alt="project.title" />
      <h4>
        {{ project.title }}
      </h4>
      <p>{{ project.desc }}</p>
      <p>{{ project.languages }}</p>
      <div class="btns">
        <a :href="project.netlify" class="btn" target="_blank"> Netlify</a>
        <a :href="project.github" class="btn" target="_blank"> Github</a>
      </div>
    
  </div>
</template>

<script>
export default {
  props: ["project"],
};
</script>
<style scoped>
.card {
  display: flex;
  width: 20rem;
  background-color: rgb(199, 114, 199);
}
.card h4, .card p{
  margin: auto;
}
 
.btns{
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
}

.btn a{
    text-decoration: none;
}

.btn{
   background-color:blueviolet;
    border-radius: 0.5rem;
    width: 6rem;
    height: 2rem;
    padding: 0.5rem;
} 



</style>
