<script setup>
</script>
<template>
    <div>
        <div class="flex flex-wrap bg-slate-100">
            <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div class="relative flex flex-col min-w-0 break-words border-t-4 bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4 pb-12">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Fincas</h5>
                                <span class="font-semibold text-xl text-blueGray-700">{{ quantityFarm }}</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <a href="farms"
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div class="relative flex flex-col min-w-0 break-words border-t-4 bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4 pb-12">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Animales</h5>
                                <span class="font-semibold text-xl text-blueGray-700">{{ quantityAnimal }}</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <a href="/animals"
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4">
                <div class="relative flex flex-col min-w-0 break-words border-t-4 bg-white rounded mb-3 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4 pb-12">
                        <div class="flex flex-wrap">
                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 class="text-blueGray-400 uppercase font-bold text-xs"> Personas</h5>
                                <span class="font-semibold text-xl text-blueGray-700">{{ quantityPerson }}</span>
                            </div>
                            <div class="relative w-auto pl-4 flex-initial">
                                <a href="/animals"
                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                        class="w-6 h-6">
                                        <path fill-rule="evenodd"
                                            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
                                            clip-rule="evenodd" />
                                        <path
                                            d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            quantityFarm: 0,
            quantityAnimal: 0,
            quantityPerson: 0
        }
    },
    mounted() {
        const url = import.meta.env.VITE_BASE_URL;

        const urlFarms = url + 'ryDMil1F/farms'
        axios.get(urlFarms)
            .then(response => {
                this.quantityFarm = response.data.length;
            });

        const urlAnimals = url + 'wAG4EG_q/animals'
        axios.get(urlAnimals)
            .then(response => {
                this.quantityAnimal = response.data.length;
            });


        const urlPersons = url + 'jMpHsrSf/persons'
        axios.get(urlPersons)
            .then(response => {
                this.quantityPerson = response.data.length;
            });
    },
}
</script>

