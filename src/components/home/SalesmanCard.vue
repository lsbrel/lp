<script>
export default{
    props:{
        name: String,
        region: String,
        photo: String
    }
}
</script>
<template>
    <div class="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div class="px-6">
            <img :alt="name" :src="photo" class="shadow-lg rounded-full max-w-full mx-auto"
                style="max-width: 120px" />
            <div class="pt-6 text-center">
                <h5 class="text-xl font-bold text-black">{{ name }}</h5>
                <p class="mt-1 text-sm text-gray-500 uppercase font-semibold text-black">
                    {{ region }}
                </p>
                <div class="mt-6">
                    <button class="bg-blue-400 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button">
                        <i class="fab fa-twitter"></i></button><button
                        class="bg-blue-600 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button">
                        <i class="fab fa-facebook-f"></i></button><button
                        class="bg-pink-500 text-white w-8 h-8 rounded-full outline-none focus:outline-none mr-1 mb-1"
                        type="button">
                        <i class="fab fa-dribbble"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>