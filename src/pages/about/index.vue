<script setup lang="js">
import Layout from '@/layouts/layout.vue';

import { ArrowRight } from 'lucide-vue-next';

import img1 from '@/assets/images/banner_01.webp';
import img2 from '@/assets/images/banner_02.webp';
import img3 from '@/assets/images/banner_03.webp';



import { ref, onMounted, onUnmounted } from 'vue';


// Carousel state
const currentSlide = ref(0);
const slides = ref([
  img1,img2, img3
]);

// Auto-slide interval
let autoSlideInterval = null;

// Go to the next slide
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

// Go to the previous slide
const prevSlide = () => {
  currentSlide.value =
    (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

// Go to a specific slide
const goToSlide = (index) => {
  currentSlide.value = index;
};

// Start auto-slide
const startAutoSlide = () => {
  autoSlideInterval = setInterval(nextSlide, 5000); // Slide changes every 5 seconds
};

// Stop auto-slide
const stopAutoSlide = () => {
  clearInterval(autoSlideInterval);
};

// Lifecycle hooks
onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});

import logoImage from '@/assets/images/user.png';
import logo from '@/assets/images/fem.jpeg'
import { SquareArrowUpRightIcon } from 'lucide-vue-next';

const staffData = [
  {
    image: logoImage,
    name: 'Stephane Lawrence',
    animation: 'fade-right',
    delay: '150',
    duration: '1500'
  },
  {
    image: logoImage,
    name: 'Amelia Johnson',
    animation: 'zoom-in-down',
    delay: '150',
    duration: '2500'
  },
  {
    image: logoImage,
    name: 'John Smith',
    animation: 'fade-left',
    delay: '150',
    duration: '1500'
  }
];

</script>
<template>
  <Layout class="">
  <div class="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-4 mb-10 ">
     <!-- Carousel Section -->
     <div class="relative group overflow-hidden shadow-lg" data-aos="zoom-in-left" data-aos-delay="250" data-aos-duration="2800">
    <!-- Carousel Container -->
    <div class="carousel overflow-hidden ">
      <div
        class="carousel-content flex transition-transform ease-in-out duration-500"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <!-- Dynamically Render Slides -->
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="carousel-item min-w-full "
        >
          <img :src="slide" alt="" class="w-full max-h-96 object-cover transition-all duration-700 group-hover:brightness-50" />
        </div>
      </div>
    </div>
    <div class="absolute inset-0 flex  items-center justify-center text-center  opacity-0 text-white text-3xl md:text-6xl font-bold transition-opacity duration-400 group-hover:opacity-100"
    
    >
      Inna Antu Memorial Schools
    </div>
    
    <!-- Navigation Buttons 
    <button
      @click="prevSlide"
      class="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
    >
      &#8592;
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-700 text-white p-2 rounded-full shadow-md hover:bg-gray-600"
    >
      &#8594;
    </button>
  -->
    <!-- Dots for Navigation 
    <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        class="block w-3 h-3 rounded-full"
        :class="index === currentSlide ? 'bg-gray-800' : 'bg-gray-400'"
      ></span>
    </div>
  -->
  </div>

    <!-- Text Section -->
    <div class="p-6 md:p-4" data-aos="fade-right" data-aos-delay="200" data-aos-duration="2800">
      <p class="text-gray-900 text-justify text-sm md:text-base leading-relaxed">
        I am delighted to welcome you to Inna Antu Memorial School, where we are shaping the minds of the future. As
        the Learning Director, I am committed to fostering a safe space that embodies innovative educational practices,
        tailored for the 21st century.
        <br /><br />
        We, at Inna Antu Memorial School, are dedicated to providing a holistic learning experience that combines
        academic excellence with creativity, critical thinking, and problem-solving skills. We strive to create a global
        and supportive community that encourages curiosity, innovation, and collaboration. Children who attend our
        school are sure to be exposed to modern teaching techniques and learning experiences that are relevant to them
        in their time, closing the doors to old and obsolete practices. After rigorous training and workshops, our staff
        are eager to receive children to help each one of them discover their strengths and interests, while guiding them
        to reach their full potential.
        <br /><br />
        I invite you to explore our website and learn more about our unique approach to education. Together, we can
        empower the next generation of leaders, thinkers, and change-makers.
      </p>
    </div>

   
  </div>


    <div class="flex flex-col text-center py-8">
      <p class="font-bold text-primarynd text-4xl mb-10" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="1000">Our Team</p>
      <p class="font-bold text-2xl md:text-5xl mb-6" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">Meet the minds behind</p>
      <p class="text-[14px] md:text-[20px] text-gray-400" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">The academy has carefully selected a team of quality innovation <br> and seasoned educators or passionate 
      and experienced in <br> handling children in various level.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-4">
  <div 
    v-for="(staff, index) in staffData" 
    :key="index" 
    class="flex flex-col items-center md:items-start md:flex-row bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
    :data-aos="staff.animation"
    :data-aos-delay="staff.delay"
    :data-aos-duration="staff.duration"
  >
    <!-- Image Section -->
    <div class="p-3 rounded-lg">
      <img 
        :src="staff.image" 
        alt="Staff Image" 
        class="bg-gray-100 w-36 sm:w-44 p-4 rounded shadow-lg hover:shadow-gray-500 hover:scale-105 transition-transform duration-500 cursor-pointer"
      >
    </div>

    <!-- Text Section -->
    <div class="py-4 md:py-0 px-6">
      <p class="text-blue-700 text-sm sm:text-[16px] mb-2">Staff Name</p>
      <p class="text-gray-700 font-bold text-base sm:text-[18px] leading-tight">
        {{ staff.name }}
      </p>
    </div>
  </div>
</div>


    <section>
      <p class="text-center text-2xl md:text-5xl font-bold mt-8">Hoost the right plans for your <br> School</p>
    </section>
    <main class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 py-12 animate-pulse hover:animate-none">
      <div class="flex flex-col bg-transparent hover:text-white duration-1000 hover:scale-110 hover:shadow group hover:bg-primarynd p-16 parent mx-12 my-8 py-8">
        <h1 class="text-[26px] font-bold mb-3 text-center">Secondary</h1>
        <p class="text-gray-500 group-hover:text-white mb-10 text-center text-[18px]"></p>
        <hr class="w-full text-center mx-auto text-gray-500 group-hover:text-white opacity-30 font-bold">
        <p class="text-justify text-gray-500 group-hover:text-white  mt-6 mb-10 text-[14px]">
       In our Secondary program, we focus on fostering academic excellence and personal growth. Students are encouraged to explore a variety of subjects while developing critical thinking, problem-solving, and communication skills. Our curriculum supports students in preparing for their future academic endeavors and equips them with the knowledge and confidence
        </p>

        <button class="flex border w-1/2 py-2  rounded outline-none focus:ring-0 bg-primarynd ">
          <p class="text-sm text-gray-100 ml-1 font-medium">Read More</p>
          <ArrowRight class="size-5 text-gray-100 ml-1 font-medium " />
        </button>
        <!--
        <h2 class="text-[24px] hover:text-white text-center mb-10 font-bold">Free</h2>
        <button class="bg-primarynd  group-hover:bg-white  py-2 text-white group-hover:text-primarynd text-[12px] font-bold mx-8 shadow-md rounded-full child">Choose plan</button>
       -->
      </div>
      <div class="flex flex-col bg-transparent hover:text-white duration-1000 hover:scale-110 hover:shadow group hover:bg-primarynd p-16 parent mx-12 my-8 py-8">
        <h1 class="text-[26px] font-bold mb-3 text-center">Primary</h1>
        <p class="text-gray-500 group-hover:text-white mb-10 text-center text-[18px]"></p>
        <hr class="w-full text-center mx-auto text-gray-500 group-hover:text-white opacity-30 font-bold">
        <p class="text-justify text-gray-500 group-hover:text-white  mt-6 mb-10 text-[14px]">At the Primary level, we focus on cultivating a love for learning while developing essential academic skills. Our curriculum is designed to challenge and engage students in subjects like math, science, language arts, and social studies. With an emphasis on hands-on learning, creativity, and critical thinking, we ensure that each child’s individual strengths are nurtured and supported.
        </p>
        <button class="flex border w-1/2 py-2  rounded outline-none focus:ring-0  bg-primarynd">
          <p class="text-sm text-gray-100 ml-1 font-medium">Read More</p>
          <ArrowRight class="size-5 text-gray-100 ml-1 font-medium  " />
        </button>
        <!--
        <h2 class="text-[24px] hover:text-white text-center mb-10 font-bold"><span class="text-gray-400 group-hover:text-slate-700 text-sm">$</span>19/<span class="text-gray-400 group-hover:text-slate-700 text-sm">mo</span></h2>
        <button class="bg-primarynd  group-hover:bg-white  py-2 text-white group-hover:text-primarynd text-[12px] font-bold mx-8 shadow-md rounded-full child">Choose plan</button>
          -->
      </div>
      <div class="flex flex-col bg-transparent hover:text-white duration-1000 hover:scale-110 hover:shadow group hover:bg-primarynd p-16 parent mx-12 my-8 py-8">
        <h1 class="text-[26px] font-bold mb-3 text-center">Creche</h1>
        <p class="text-gray-500 group-hover:text-white mb-10 text-center text-[18px]"></p>
        <hr class="w-full text-center mx-auto text-gray-500 group-hover:text-white opacity-30 font-bold">
        <p class=" text-gray-500 group-hover:text-white  mt-6 mb-10 text-[14px] text-justify">Our Nursery program is designed for young learners, providing a warm and nurturing environment where children can explore and develop their social, emotional, and cognitive skills. Through playful learning and hands-on activities, we help children build a strong foundation for their academic journey. Our experienced teachers ensure that every child feels valued, safe, and excited to learn.
        </p>
        <button class="flex border w-1/2 py-2  rounded outline-none focus:ring-0  bg-primarynd">
          <p class="text-sm text-gray-100 ml-1 font-medium">Read More</p>
          <ArrowRight class="size-5 text-gray-100 ml-1 font-medium " />
        </button>
       <!--
        <h2 class="text-[24px] hover:text-white text-center mb-10 font-bold"><span class="text-gray-400 group-hover:text-slate-700 text-sm">$</span>199.9/<span class="text-gray-400 group-hover:text-slate-700 text-sm">mo</span></h2>
         <button class="bg-primarynd  group-hover:bg-white  py-2 text-white group-hover:text-primarynd text-[12px] font-bold mx-8 shadow-md rounded-full child">Choose plan</button>
       -->
      </div>
      
      
    </main>
  </Layout>
</template>
<style>
 .parent {
  border-radius: 35px;
 }
</style>