<template>
    <div>
        <div class="p-2">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ question }}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        question: {
            type: String,
            default: 'No asignada'
        },
        answer: {
            type: String,
            default: 'No asignada'
        }
    }
}
</script>