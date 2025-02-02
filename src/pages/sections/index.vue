<script setup>
import Layout from '@/layouts/layout.vue';
import { BookOpenText,GraduationCap,BookOpenCheck,Baby } from 'lucide-vue-next';

</script>

<template>
  <Layout>
   
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 p-4 mb-10">
      <div class=" flex inset-0 flex-col  items-center justify-center text-center bg-gradient-to-r from-gray-50 to-transparent py-6"
      data-aos="fade-up-right" data-aos-delay="2000" data-aos-duration="2800">
        <p class="text-blue-900 font-bold text-[18px] md:text-[22px] py-2 md:py-4">Read More About Us</p>
        <p class="text-gray-500 text-[14px] md:text-[20px] py-2 md:py-4 mb-3">Inna Antu Memorial Schools</p>
        <button class="mb-3 md:mb-0 bg-blue-900 hover:bg-secondarywe hover:shadow-current px-6 md:px-12 font-bold rounded text-[10px] md:text-[14px] py-2 text-white hover:text-white">Get Started</button>
      </div>
      <div class=""
      data-aos="fade-down" data-aos-delay="2000" data-aos-duration="2800"
      >
        <img src="@/assets/images/banner_03.webp" alt="banner img" class="w-full h-full rounded "

        >
      </div>
    </div>
    <div class="flex flex-col justify-center items-center text-center py-16">
      <p class="text-secondarywe font-bold text-lg md:text-2xl mb-3">What We Can Do For You</p>
      <p class="text-gray-600 text-4xl md:text-6xl  font-bold uppercase">Our sections</p>
    </div>
    <section class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-white hover:bg-primarynd rounded-lg shadow-lg  mx-4 md:mx-1 p-16  group hover:scale-105  duration-500 transition-all hover:cursor-pointer"
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-duration="1000"
      >
        <GraduationCap class="text-black group-hover:text-gray-200  h-10 w-10 p-1 font-bold rounded mb-6" />
        <p class="font-bold text-lg group-hover:text-gray-200">Secondary <br> section</p>
      </div>
      <div class="bg-white hover:bg-primarynd rounded-lg shadow-lg mx-4 md:mx-1  p-16  group hover:scale-105  duration-500 transition-all hover:cursor-pointer"
      data-aos="fade-down"
      data-aos-delay="1000"
      data-aos-duration="1000"
      >
        <BookOpenCheck class="  text-black group-hover:text-gray-200 h-10 w-10 p-1 font-bold rounded mb-6" />
        <p class="font-bold text-lg group-hover:text-gray-200">Primary <br> Section</p>
      </div>
      <div class="bg-white hover:bg-primarynd rounded-lg shadow-lg mx-4 md:mx-1  p-16  group hover:scale-105  duration-500 transition-all hover:cursor-pointer"
      data-aos="fade-up"
      data-aos-delay="1000"
      data-aos-duration="1000"
      >
        <Baby class="   text-black group-hover:text-gray-200 h-10 w-10 p-1 font-bold rounded mb-6" />
        <p class="font-bold text-lg group-hover:text-gray-200">Creche <br> Section</p>
      </div>
      <div class="bg-white hover:bg-primarynd rounded-lg shadow-lg mx-4 md:mx-1  p-16  group hover:scale-105  duration-500 transition-all hover:cursor-pointer"
      data-aos="fade-down"
      data-aos-delay="1000"
      data-aos-duration="1000"
      >
        <BookOpenText class="text-black group-hover:text-gray-200 h-10 w-10 p-1 font-bold rounded mb-6" />
        <p class="font-bold text-lg group-hover:text-gray-200">islamiyya <br> Section</p>
      </div>
    </section>
  </Layout>
  
</template>