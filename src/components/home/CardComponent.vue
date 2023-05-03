<template>
    <div>
        <div class="pb-12 pt-16">
            <p class="text-center text-gray-500 dark:text-gray-400 text-2xl uppercase font-bold">
                Lo que brindamos a nuestros usuarios
            </p>
        </div>
        <div class="flex justify-center">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
                <div v-for="card in cards" :key="card.id">
                    <div 
                        class="max-w-sm bg-white border border-b-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="rounded-t-lg"
                                :src="card.image"
                                :alt="card.alt" />
                        </a>
                        <div class="p-5">
                            <a href="#">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    {{ card.title }}
                                </h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ card.description }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    image: 'https://images.pexels.com/photos/4483774/pexels-photo-4483774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Inventario',
                    alt: 'Image Inventario',
                    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
                },
                {
                    id: 2,
                    image: 'https://images.pexels.com/photos/4792286/pexels-photo-4792286.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Organización',
                    alt: 'Image Organización',
                    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
                },
                {
                    id: 3,
                    image: 'https://images.pexels.com/photos/668353/pexels-photo-668353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                    title: 'Tranquilidad',
                    alt: 'Image Tranquilidad',
                    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
                }
            ]
        }
    }
}
</script>