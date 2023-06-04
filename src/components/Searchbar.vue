<template>
    <label class="relative block">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </span>
        <input class="placeholder:italic placeholder:text-gray-400 block bg-white w-full border border-gray-300 rounded-md py-2 pl-10 pr-3 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="搜一搜" type="text" v-model="content" @keydown.enter="onPressEnter"/>
    </label>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const emit = defineEmits(['search'])
const content = ref('')
const onPressEnter = () => {
    emit('search', content.value)
}

</script>
<style>
.search {
    display: flex;
    background-color: #fff;
    border-radius: 5px;
    width: 200px;
}
</style>