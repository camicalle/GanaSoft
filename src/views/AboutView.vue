<script setup>
import BannerComponent from '../components/global/BannerComponent.vue'
</script>
<template>
  <div>
    <BannerComponent alt="Banner About"
      image="https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
    <div class="flex justify-center p-2">
      <div class="pb-12 pt-8 container">
        <p class="text-center text-gray-500 dark:text-gray-400 text-2xl uppercase font-bold pb-10">
          Información sobre nosotros
        </p>
        <p class="text-justify break-words text-gray-500 dark:text-gray-400 text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, corporis repellat? Repellendus maxime atque
          ducimus eligendi neque velit cumque sed, accusantium explicabo debitis quasi quaerat vel fuga veniam animi
          laboriosam, et, officia dolore? Eius dolorem nisi perspiciatis atque quas iusto quos nobis autem dolore sint,
          dolores nemo expedita repellat aliquid facilis consequatur doloribus esse! Repudiandae suscipit corporis ducimus
          sed animi laboriosam rem cumque ipsa, neque itaque illum voluptate illo ea nostrum quis. Blanditiis fuga totam
          nobis dolores eligendi asperiores perspiciatis? Qui, quidem sed quae obcaecati nulla voluptates itaque fuga
          mollitia nostrum possimus molestiae architecto at odio voluptate ut deleniti soluta a atque officia minima eius!
          Voluptatibus voluptatum ullam harum? Esse illum dolores omnis modi. Voluptatem eligendi, quos voluptatibus unde
          non quae quia id, minima eaque necessitatibus alias quod labore minus fugiat nesciunt repellat laboriosam error
          a
          qui saepe itaque exercitationem doloribus omnis aut. Natus distinctio corporis nam dolore quae dolores nesciunt
          ducimus eaque aperiam quas temporibus quasi ipsa soluta et nemo fugiat cupiditate qui aspernatur, ut accusamus
          laudantium? Ut obcaecati est porro repudiandae aspernatur, optio facere? Nam nobis odit id consequatur
          blanditiis
          recusandae alias? Corrupti exercitationem nam nisi quasi, doloremque fugit inventore illum iste sint non impedit
          id amet est.
        </p>
      </div>
    </div>
    <div class="flex justify-center p-2">
      <div class="container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27905.219265031476!2d-96.53172117786475!3d29.042072998235337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864225b563783ccd%3A0x72f18f47dc961de2!2sGanado%2C%20Texas%2077962%2C%20EE.%20UU.!5e0!3m2!1ses!2sco!4v1682798682329!5m2!1ses!2sco"
          width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
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
