<template>
    <h1 class="text-center">My skills</h1>
    <div v-if="skills" class="flex-container">
        <Card :skill="skills" />
    </div>
    <div v-else>Loading..</div>
    
</template>
<script>
import Card from '@/components/CardS.vue'

export default {
    components: { Card },

    computed: {
        skills() {
            return this.$store.state.skills
            
        }
    },

    mounted() {
        this.$store.dispatch("getSkills")
        console.log(this.skills)
    }
}
</script>