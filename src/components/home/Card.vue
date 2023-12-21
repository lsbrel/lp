<script>
export default {
    props: {
        title: String,
        text: String,
        color: String
    }
}
</script>
<template>
    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-md rounded-lg">
        <div class="px-4 py-5 flex-auto">
            <div class="text-gray-300 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-md rounded-full"
                :class="color">
                <i class="fas fa-award"></i>
            </div>
            <h6 class="text-xl font-semibold text-gray-700">{{ title }}</h6>
            <p class="mt-2 mb-4 text-gray-600 text-300">
                {{ text }}
            </p>
        </div>
    </div>
</template>