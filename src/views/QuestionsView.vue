<script setup>
import BannerComponent from '../components/global/BannerComponent.vue'
import QuestionsComponent from '../components/questions/QuestionsComponent.vue';
</script>
<template>
    <div>
        <BannerComponent alt="Banner About"
            image="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        <div class="p-2">
                <QuestionsComponent />
        </div>
    </div>
</template>