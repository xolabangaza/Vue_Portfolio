<template>
<h1 class="text-center">Education</h1>
    <div v-if="educations" class="timeline">
      <div class="container">
        <div class="content">
        <Card v-for="education of educations" :education="education" :key="education.id" />
        </div>
        </div>
    </div>
    <div v-else>Loading..</div>
    
</template>

<script>
import Card from '@/components/CardE.vue'

export default {
    components: { Card },

    computed: {
        educations() {
            return this.$store.state.educations
            
        }
    },

    mounted() {
        this.$store.dispatch("getEducations")
        console.log(this.educations)
    }
}
</script>

