<template>
    <img class="h-80 object-cover w-full" :src="image" :alt="alt">
</template>

<script>
export default {
    props: {
        image: String,
        alt: {
            type: String,
            default: "Banner"
        }
    }
}
</script>