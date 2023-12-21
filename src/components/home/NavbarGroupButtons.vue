<script></script>
<template>
    <ul class="flex flex-col lg:flex-row list-none lg:mx-auto xl:ml-auto">
        <li class="flex items-center">
            <button
                class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                type="button" style="transition: all 0.15s ease 0s" @click="$emit('login')">
                <i class="fas fa-arrow-alt-circle-down"></i>{{ $t("register") }}
            </button>
        </li>
        <li class="flex items-center">
            <button
                class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                type="button" style="transition: all 0.15s ease 0s" @click="$emit('login')">
                <i class="fas fa-arrow-alt-circle-down"></i>{{ $t("enter") }}
            </button>
        </li>
    </ul>
</template>