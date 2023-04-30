<script setup>
import BannerComponent from '../components/global/BannerComponent.vue'
import QuestionsComponent from '../components/questions/QuestionsComponent.vue';
</script>
<template>
    <div>
        <BannerComponent alt="Banner About"
            image="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />

        <div class="p-2">
                <QuestionsComponent question="¿Como puedo registrar mi ganado?" answer="Integer vitae elit tempus, fringilla nulla et, placerat tellus. Nam eget tincidunt turpis. Nam rhoncus nisl non sem suscipit molestie. Fusce ut orci id elit iaculis ultricies. Integer dui metus, semper sit amet dolor non, consequat scelerisque odio." />
                <QuestionsComponent question="¿Como puedo registrar mi ganado?" answer="Integer vitae elit tempus, fringilla nulla et, placerat tellus. Nam eget tincidunt turpis. Nam rhoncus nisl non sem suscipit molestie. Fusce ut orci id elit iaculis ultricies. Integer dui metus, semper sit amet dolor non, consequat scelerisque odio." />
                <QuestionsComponent question="¿Como puedo registrar mi ganado?" answer="Integer vitae elit tempus, fringilla nulla et, placerat tellus. Nam eget tincidunt turpis. Nam rhoncus nisl non sem suscipit molestie. Fusce ut orci id elit iaculis ultricies. Integer dui metus, semper sit amet dolor non, consequat scelerisque odio." />
        </div>
    </div>
</template>