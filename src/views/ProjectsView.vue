<template>
<h1 class="text-center animate__animated animate__bounceInLeft">Check out my work</h1>
    <div v-if="projects" class="flex-container fw-bold animate__animated animate__slideInLeft">
        <Card v-for="project of projects" :project="project" :key="project.id" />
    </div>
    <div v-else>Loading..</div>
    
</template>

<script>
import Card from '@/components/CardP.vue'

export default {
    components: { Card },

    computed: {
        projects() {
            return this.$store.state.projects
            
        }
    },

    mounted() {
        this.$store.dispatch("getProjects")
        console.log(this.projects)
    }
}
</script>

<style scoped>
.flex-container{
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: auto;
    margin-inline: 20px;
}
    
</style>