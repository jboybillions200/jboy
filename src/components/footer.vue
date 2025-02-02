<script setup>
import { computed } from 'vue';

let date = computed(() => new Date().getFullYear())
</script>
<template>

    <footer class="mx-2 md:mx-1 shadow">
        <div  class="w-full py-12 mt-10  bg-primarynd text-white foot">
            <div class="container mx-auto flex flex-col md:flex-row flex-wrap justify-between md:px-6 px-8 ">
                <div class="mb-6 flex flex-col " data-aos="slide-right" data-aos-delay="800" data-aos-duration="800">
                    <img src="@/assets/images/logo_300.webp" alt="School Logo" class="mb-4 w-24 md:w-32">
                    <h2 class="text-lg font-bold">Inna Antu Memorial School</h2>
                    <p>123 Learning Lane, Knowledge City, 45678</p>
                </div>

                <div class="mb-6 " data-aos="slide-up" data-aos-delay="800" data-aos-duration="800">
                    <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul>
                        <li><a href="#" class="text-gray-300 hover:text-white">About Us</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Admissions</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Academics</a></li>
                        <li><a href="#" class="text-gray-300 hover:text-white">Contact</a></li>
                    </ul>
                </div>

                <div class="mb-6" data-aos="slide-up" data-aos-delay="800" data-aos-duration="800">
                    <h3 class="text-lg font-semibold mb-4">Social Media</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="text-gray-300 hover:text-white"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>

                <div class="" data-aos="slide-up" data-aos-delay="800" data-aos-duration="800">
                    <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
                    <p>Email: info@innaantuschools.com.ng</p>
                    <p>Phone: 08065301413, 07035899057</p>
                </div>
            </div>
        </div>
        <div class="text-center py-2 text-gray-800 font-semibold text-xs md:text-sm">
            <p> &commat; {{ date }} INNAANTU MEMORIAL SCHOOL. All Rights Reserved be were of scammers</p>
        </div>
    </footer>
</template>
<style>
    .foot {
        border-radius: 35px;
    
    }
</style>