<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { MdSharpMenuBook } from '@kalimahapps/vue-icons';
import { JaFillCloseCircle } from '@kalimahapps/vue-icons';
import { ref } from 'vue';

const isOpen = ref(false)
</script>

<template>
    <nav
        class="w-full  sticky top-0 z-50 px-4 py-3 border-b-2 bg-white border-gray-200 items-center flex justify-between">

        <div data-aos="zoom-in">
            <img class="w-20 md:w-40" src="@/assets/images/nav-logo.webp" alt="logo" width="150" height="150">
        </div>
        <div class="block md:hidden ">
            <MdSharpMenuBook @click="isOpen = true" class="text-2xl text-primarynd" />
        </div>
        <div v-if="isOpen"
            class=" md:hidden bg-white flex fixed h-screen top-0 flex-col w-full rounded-b-2xl shadow-md left-0 font-semibold gap-6 text-lg p-4 z-50 "
            :class="{ ' transition-transform translate-y-0 duration-1000 ease-in-out': isOpen, 'transition-transform translate-y-0 duration-1000 ease-in-out': !isOpen }">
            <div>
                <img class="w-20 md:w-40" src="@/assets/images/nav-logo.webp" alt="logo" width="150" height="150">
            </div>
            <div
                class="flex flex-col w-full bordertext-sm font-semibold gap-6 text-start p-4 z-50 self-baseline  justify-even">
                <router-link data-aos="fade-left" class="hover:text-primarynd" to="/">Home</router-link>
                <router-link data-aos="fade-left" data-aos-delay="50" data-aos-mirror="false" data-aos-once="false"
                    class="hover:text-primarynd" to="/about">About us</router-link>
                <router-link data-aos="fade-left" data-aos-delay="100" class="hover:text-primarynd"
                    to="/section">Sections</router-link>
               <!---
                <router-link data-aos="fade-left" data-aos-delay="150" class="hover:text-primarynd"
                    to="/academics">Academics</router-link>
               -->
                <router-link data-aos="fade-left" data-aos-delay="200" class="hover:text-primarynd"
                    to="/contact_us">Contact Us</router-link>
                <router-link data-aos="fade-up" data-aos-delay="50" to="#"
                    class=" rounded-full px-5 py-2 text-secondary bg-primarynd  text-white font-normal text-center shadow-lgr hover:translate-y-1 duration-500 ease-linear">Let's
                    Talk</router-link>
            </div>
            <div data-aos="fade-up" data-aos-delay="50" class="flex justify-center align-bottom">

                <JaFillCloseCircle @click="isOpen = false"
                    class="text-4xl text-center text-primarynd hover:text-primarynd/60" />
            </div>
        </div>
        <div data-aos="fade-down" class=" hidden text-lg font-semibold text-primarynd space-x-6 items-center md:flex bg-white">

            <router-link class="hover:text-primarynd/30" to="/">
                Home
            </router-link>
            <router-link class="hover:text-primarynd/30" to="/about">About us</router-link>
            <router-link class="hover:text-primarynd/30" to="/section">Sections</router-link>
            <!---<router-link class="hover:text-primarynd/30" to="/academics">Academics</router-link>-->
            <router-link class="hover:text-primarynd/30" to="/contact_us">Contact Us</router-link>
            <router-link to="#"
                class=" rounded-full px-5 py-2 text-secondary bg-primarynd drop-shadow-xl text-white font-normal hover:translate-y-1 duration-500 ease-linear">Let's
                Talk</router-link>
        </div>
    </nav>
</template>