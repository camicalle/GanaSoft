<script setup>
import BannerComponent from '../components/global/BannerComponent.vue'
import HeaderComponent from '../components/global/HeaderComponent.vue';
import FooterComponent from '../components/global/FooterComponent.vue';
</script>
<template>
  <div>
    <HeaderComponent />
    <BannerComponent alt="Banner About" image="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <FooterComponent />
  </div>
</template>

<style>
/* @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
} */
</style>
