<template>
<h1 class="text-center fw-5" >My Testimonial</h1>
    <div v-if="testimonials" class="flex-container">
        <Card :testimonial="testimonials"  />
    </div>
    <div v-else>Loading..</div>
    
</template>

<script>
import Card from '@/components/CardT.vue'

export default {
    components: { Card },

    computed: {
        testimonials() {
            return this.$store.state.testimonials
            
        }
    },

    mounted() {
        this.$store.dispatch("getTestimonials")
        console.log(this.testimonials)
    }
}
</script>

<style>
   
</style>