<template>
    <div>
        <div class="p-2" v-for="question in questions" :key="question.id">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row w-full">
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ question.question }}</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ question.answer }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            questions: [
                {
                    id: '1',
                    question: '¿Como puedo registrar mi ganado?',
                    answer: 'Integer vitae elit tempus, fringilla nulla et, placerat tellus. Nam eget tincidunt turpis. Nam rhoncus nisl non sem suscipit molestie. Fusce ut orci id elit iaculis ultricies. Integer dui metus, semper sit amet dolor non, consequat scelerisque odio.'
                },
                {
                    id: '2',
                    question: '¿Como puedo registrar mi ganado?',
                    answer: 'Integer vitae elit tempus, fringilla nulla et, placerat tellus. Nam eget tincidunt turpis. Nam rhoncus nisl non sem suscipit molestie. Fusce ut orci id elit iaculis ultricies. Integer dui metus, semper sit amet dolor non, consequat scelerisque odio.'
                },
                {
                    id: '3',
                    question: '¿Como puedo registrar mi ganado?',
                    answer: 'Integer vitae elit tempus, fringilla nulla et, placerat tellus. Nam eget tincidunt turpis. Nam rhoncus nisl non sem suscipit molestie. Fusce ut orci id elit iaculis ultricies. Integer dui metus, semper sit amet dolor non, consequat scelerisque odio.'
                }
            ]
        }
    }
}
</script>