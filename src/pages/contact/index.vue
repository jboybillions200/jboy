<script setup>
import Layout from '@/layouts/layout.vue';


</script>

<template>
  <Layout>
    <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 overflow-hidden">
      <main class="flex flex-col bg-gradient-to-r from-gray-100 to-transparent rounded-lg ">
        <div class="p-6">
          <p class="text-blue-900 text-2xl mb-3 font-bold">contact us</p>
          <p class="text-3xl md:text-6xl font-bold">let's talk about <br> everything</p>
        </div>
        <div class="p-6" data-aos="slide-up" data-aos-delay="1000" data-aos-duration="1000">
          <img src="@/assets/images/02.png" alt="" class="w-full h-full bg-cover">
        </div>
      </main>
      <form action="mailto:your-email@example.com" method="POST" enctype="text/plain" class="flex flex-col p-6 mx-14">
        <div class="flex flex-col py-4 ">
          <label for="name" class="text-black font-bold mb-3 text-sm md:text-lg">Enter Your Full Name:</label>
          <input type="text" 
          placeholder="Your Name *"
          required
          class="md:px-4 px-2 text-black text-sm md:text-lg py-2 md:py-3 w-full outline-none rounded-full bg-gray-100"
          >
          </div>
        <div class="flex flex-col py-4 ">
          <label for="name" class="text-black font-bold mb-3 text-sm md:text-lg">Enter Your Email Address:</label>
          <input type="email" 
          placeholder="Your Email *"
          required
          class="md:px-4 px-2 text-black py-2 text-sm md:text-lg md:py-3 w-full outline-none rounded-full bg-gray-100"
          >
          </div>
        <div class="flex flex-col py-4 ">
          <label for="name" class="text-black font-bold mb-3 text-sm md:text-lg">Write A message</label>
          <textarea name="" id="" class="min-w-4xl max-h-40 bg-gray-100 text-sm md:text-lg outline-none py-2 px-4 rounded" placeholder="Question?" required></textarea>
        </div>
        <div class="mt-3 mb-3">
          <input type="checkbox" id="agree" name="agree" class="bg-blue-900 p-4 "><span class="text-sm"> I agree to the terms and conditions</span>
        </div> 
          <button type="submit" class="bg-blue-900 hover:bg-yellow-600 w-28 px-6 py-2 rounded text-white text-[12px] md:text-[14px] font-bold hover:translate-y-1 duration-500 ease-linear drop-shadow-xl ">Submit</button>
        
      </form>
    </section>
  </Layout>
  
</template>
<style>
  
</style>