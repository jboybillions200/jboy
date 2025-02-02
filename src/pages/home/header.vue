<script setup>
import Autoplay from 'embla-carousel-autoplay'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

</script>

<template>
  <header>
    <div class="bg-cover bg-center bg-no-repeat"
    style="background-image: url('@/assets/images/banner_01.webp')">
    <div class="relative flex md:h-screen justify-center items-start">
      <div class="mx-3 md:text-center my-44 md:px-[10%]">
        <p class="text-3xl md:text-5xl font-bold align-center leading-tight ">
          <span class="text-secondarynd">Welcome To, </span>
          <br /> Inna Antu Memorial School
        </p>
        <p class="md:text-2xl"> It is our design to create a balanced islamic education in
          accordance to the Qur'an and Sunnah based on the understanding of our pious predecessors.
        </p>
        <div class="my-2 flex md:justify-center">
          <router-link
            class="hover:outline transition-all hover:translate-y-1 duration-500 outline-1 px-4 py-2 mt-3 rounded-lg bg-primarynd drop-shadow-lg text-white text-lg md:text-2xl font-semibold hover:bg-white hover:text-primarynd  shadow"
            to="/about">Learn More About us</router-link>
        </div>
      </div>


      <!-- bottom left -->
      <div class="absolute -z-10 bottom-20 left-12  w-12 md:w-24" data-aos="fade-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="Book">
          <path
            d="M3 22V9a2 2 0 0 0-2 2V25a2 2 0 0 0 2 2h9.38A11.19 11.19 0 0 0 6 25 3 3 0 0 1 3 22zM29 9V22a3 3 0 0 1-3 3 11.19 11.19 0 0 0-6.38 2H29a2 2 0 0 0 2-2V11A2 2 0 0 0 29 9z"
            fill="rgb(92,140,127)" class="color000000 svgShape"></path>
          <path
            d="M6 5A1 1 0 0 0 5 6V22a1 1 0 0 0 1 1 13.31 13.31 0 0 1 8.28 2.9l.72.58V5.18A3 3 0 0 0 14 5zM27 22V6a1 1 0 0 0-1-1H18a3 3 0 0 0-1 .18v21.3l.72-.58A13.31 13.31 0 0 1 26 23 1 1 0 0 0 27 22z"
            fill="rgb(92,140,127)" class="color000000 svgShape"></path>
        </svg>
      </div>

      <!-- top book left -->
      <div class="absolute -z-10 top-36 left-10 w-12 md:w-24" data-aos="fade-right" data-aos-delay="10">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="Book">
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="M52.655 360.043c37.609 3.443 76.534 13.048 115.294 28.813V429.4L9 401.127V64.931l43.655 7.758V360.043zM255.904 436.516v8.526l-31.946-5.684v-23.275c10.714 6.078 21.345 12.643 31.883 19.686v.83C255.862 436.568 255.883 436.547 255.904 436.516z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="M257.099 117.709v318.893l-.598-.105-.344-.06-.179-.03-.075-.015-.06-.015V119.205c.015-.03.045-.06.06-.09v-1.616l.09.015.165.03.344.06.404.075L257.099 117.709zM83.761 326.553c24.644-.529 54.349 7.883 84.189 25.235v37.069c-38.76-15.765-77.686-25.37-115.294-28.813V41.159c10.279.933 20.661 2.344 31.105 4.211C83.761 45.37 83.761 326.553 83.761 326.553zM255.841 434.701v1.068c-10.538-7.043-21.169-13.608-31.883-19.686v-20.194C235.17 407.391 245.905 420.335 255.841 434.701z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.099,117.709v318.893c-0.09-0.06-0.165-0.119-0.254-0.165c-0.119-0.09-0.224-0.165-0.344-0.24
			c-0.09-0.06-0.179-0.119-0.27-0.165c-0.105-0.09-0.224-0.165-0.329-0.224c-0.015-0.015-0.045-0.03-0.06-0.045V119.205
			c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c-0.195-0.3-0.389-0.598-0.613-0.883c0.21,0.119,0.403,0.254,0.613,0.403
			c0.194,0.119,0.403,0.254,0.598,0.389c0.119,0.075,0.224,0.149,0.344,0.24c0.03,0.015,0.075,0.045,0.105,0.06
			C256.995,117.65,257.055,117.68,257.099,117.709z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="
			M255.904,117.392v1.722c-0.021,0.031-0.041,0.062-0.062,0.093V434.7c-9.936-14.365-20.671-27.309-31.883-38.812
			c-17.871-18.338-36.966-33.045-56.008-44.101c-29.84-17.352-59.545-25.764-84.189-25.235V9.151
			c47.949-1.006,115.076,31.811,165.1,98.44c2.178,2.904,4.335,5.881,6.431,8.92C255.509,116.801,255.707,117.092,255.904,117.392z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.16,119.205v317.396c-0.015-0.03-0.045-0.06-0.06-0.09c-0.03-0.03-0.045-0.075-0.075-0.105
			c-0.09-0.119-0.165-0.254-0.254-0.374c-0.09-0.135-0.179-0.254-0.27-0.374c-0.195-0.299-0.389-0.583-0.598-0.868
			c0-0.03-0.03-0.06-0.06-0.09V119.205c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c0.045,0.045,0.075,0.075,0.09,0.119
			c0.03,0.03,0.045,0.06,0.06,0.09c0.03,0.03,0.045,0.045,0.045,0.075c0.149,0.195,0.284,0.389,0.403,0.584
			c0.21,0.284,0.403,0.568,0.598,0.853C257.114,119.145,257.144,119.175,257.16,119.205z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M504,64.927V401.13l-246.901,43.91v-8.528c0.015,0.03,0.045,0.06,0.06,0.09v-0.838c66.397-44.389,136.848-69.643,203.185-75.717
			V72.691L504,64.927z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.16,119.205v317.172l-0.06,0.015l-0.075,0.015l-0.179,0.03l-0.344,0.06l-0.598,0.105V117.709l0.194-0.03l0.403-0.075
			l0.344-0.06l0.165-0.03l0.09-0.015v1.616C257.114,119.145,257.144,119.175,257.16,119.205z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M460.344,41.154v318.893c-66.337,6.074-136.788,31.328-203.185,75.717v-1.062c50.598-73.174,121.857-109.215,172.081-108.153
			V45.373C439.683,43.503,450.066,42.096,460.344,41.154z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.099,119.115c0.015,0.03,0.045,0.06,0.06,0.09v316.558c-0.015,0.015-0.045,0.03-0.06,0.045
			c-0.105,0.06-0.224,0.135-0.329,0.224c-0.09,0.045-0.179,0.105-0.27,0.165c-0.119,0.075-0.224,0.149-0.344,0.24
			c-0.09,0.045-0.165,0.105-0.254,0.165V117.709c0.045-0.03,0.105-0.06,0.149-0.105c0.03-0.015,0.075-0.045,0.105-0.06
			c0.119-0.09,0.224-0.165,0.344-0.24c0.195-0.135,0.403-0.27,0.598-0.389c0.21-0.149,0.404-0.284,0.613-0.403
			c-0.224,0.284-0.419,0.583-0.613,0.883v1.72H257.099z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="M429.24 9.152v317.396c-50.224-1.062-121.483 34.978-172.081 108.153V119.205c-.015-.03-.045-.06-.06-.09v-1.721c.195-.3.389-.598.613-.883 2.11-3.037 4.249-6.015 6.448-8.917C314.175 40.96 381.291 8.15 429.24 9.152zM223.958 395.889v107.982l-28.004-28.004-28.004 28.004V351.787C186.993 362.844 206.087 377.551 223.958 395.889z"
            class="colorStroke464668 svgStroke"></path>
        </svg>
      </div>
      <!-- top book right -->
      <div class="absolute -z-10 top-8 right-24 w-12 md:w-24" data-aos="slide-left">
        <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 512 512" viewBox="0 0 512 512" id="Book">
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="M52.655 360.043c37.609 3.443 76.534 13.048 115.294 28.813V429.4L9 401.127V64.931l43.655 7.758V360.043zM255.904 436.516v8.526l-31.946-5.684v-23.275c10.714 6.078 21.345 12.643 31.883 19.686v.83C255.862 436.568 255.883 436.547 255.904 436.516z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="M257.099 117.709v318.893l-.598-.105-.344-.06-.179-.03-.075-.015-.06-.015V119.205c.015-.03.045-.06.06-.09v-1.616l.09.015.165.03.344.06.404.075L257.099 117.709zM83.761 326.553c24.644-.529 54.349 7.883 84.189 25.235v37.069c-38.76-15.765-77.686-25.37-115.294-28.813V41.159c10.279.933 20.661 2.344 31.105 4.211C83.761 45.37 83.761 326.553 83.761 326.553zM255.841 434.701v1.068c-10.538-7.043-21.169-13.608-31.883-19.686v-20.194C235.17 407.391 245.905 420.335 255.841 434.701z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.099,117.709v318.893c-0.09-0.06-0.165-0.119-0.254-0.165c-0.119-0.09-0.224-0.165-0.344-0.24
			c-0.09-0.06-0.179-0.119-0.27-0.165c-0.105-0.09-0.224-0.165-0.329-0.224c-0.015-0.015-0.045-0.03-0.06-0.045V119.205
			c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c-0.195-0.3-0.389-0.598-0.613-0.883c0.21,0.119,0.403,0.254,0.613,0.403
			c0.194,0.119,0.403,0.254,0.598,0.389c0.119,0.075,0.224,0.149,0.344,0.24c0.03,0.015,0.075,0.045,0.105,0.06
			C256.995,117.65,257.055,117.68,257.099,117.709z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="
			M255.904,117.392v1.722c-0.021,0.031-0.041,0.062-0.062,0.093V434.7c-9.936-14.365-20.671-27.309-31.883-38.812
			c-17.871-18.338-36.966-33.045-56.008-44.101c-29.84-17.352-59.545-25.764-84.189-25.235V9.151
			c47.949-1.006,115.076,31.811,165.1,98.44c2.178,2.904,4.335,5.881,6.431,8.92C255.509,116.801,255.707,117.092,255.904,117.392z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.16,119.205v317.396c-0.015-0.03-0.045-0.06-0.06-0.09c-0.03-0.03-0.045-0.075-0.075-0.105
			c-0.09-0.119-0.165-0.254-0.254-0.374c-0.09-0.135-0.179-0.254-0.27-0.374c-0.195-0.299-0.389-0.583-0.598-0.868
			c0-0.03-0.03-0.06-0.06-0.09V119.205c0.015-0.03,0.045-0.06,0.06-0.09v-1.721c0.045,0.045,0.075,0.075,0.09,0.119
			c0.03,0.03,0.045,0.06,0.06,0.09c0.03,0.03,0.045,0.045,0.045,0.075c0.149,0.195,0.284,0.389,0.403,0.584
			c0.21,0.284,0.403,0.568,0.598,0.853C257.114,119.145,257.144,119.175,257.16,119.205z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M504,64.927V401.13l-246.901,43.91v-8.528c0.015,0.03,0.045,0.06,0.06,0.09v-0.838c66.397-44.389,136.848-69.643,203.185-75.717
			V72.691L504,64.927z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.16,119.205v317.172l-0.06,0.015l-0.075,0.015l-0.179,0.03l-0.344,0.06l-0.598,0.105V117.709l0.194-0.03l0.403-0.075
			l0.344-0.06l0.165-0.03l0.09-0.015v1.616C257.114,119.145,257.144,119.175,257.16,119.205z"
            class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M460.344,41.154v318.893c-66.337,6.074-136.788,31.328-203.185,75.717v-1.062c50.598-73.174,121.857-109.215,172.081-108.153
			V45.373C439.683,43.503,450.066,42.096,460.344,41.154z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10" d="
			M257.099,119.115c0.015,0.03,0.045,0.06,0.06,0.09v316.558c-0.015,0.015-0.045,0.03-0.06,0.045
			c-0.105,0.06-0.224,0.135-0.329,0.224c-0.09,0.045-0.179,0.105-0.27,0.165c-0.119,0.075-0.224,0.149-0.344,0.24
			c-0.09,0.045-0.165,0.105-0.254,0.165V117.709c0.045-0.03,0.105-0.06,0.149-0.105c0.03-0.015,0.075-0.045,0.105-0.06
			c0.119-0.09,0.224-0.165,0.344-0.24c0.195-0.135,0.403-0.27,0.598-0.389c0.21-0.149,0.404-0.284,0.613-0.403
			c-0.224,0.284-0.419,0.583-0.613,0.883v1.72H257.099z" class="colorStroke464668 svgStroke"></path>
          <path fill="none" stroke="rgb(207,161,99)" stroke-linecap="round" stroke-linejoin="round"
            stroke-miterlimit="10" stroke-width="10"
            d="M429.24 9.152v317.396c-50.224-1.062-121.483 34.978-172.081 108.153V119.205c-.015-.03-.045-.06-.06-.09v-1.721c.195-.3.389-.598.613-.883 2.11-3.037 4.249-6.015 6.448-8.917C314.175 40.96 381.291 8.15 429.24 9.152zM223.958 395.889v107.982l-28.004-28.004-28.004 28.004V351.787C186.993 362.844 206.087 377.551 223.958 395.889z"
            class="colorStroke464668 svgStroke"></path>
        </svg>
      </div>
      <!-- mountain -->
      <div class="absolute -z-20 bottom-10 md:bottom-0 w-full">
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'>
          <rect fill='#FFFFFF' width='1600' height='900' />
          <polygon fill='#5d8c80' points='957 450 539 900 1396 900' />
          <polygon fill='#cfa165' points='957 450 872.9 900 1396 900' />
          <polygon fill='#57887d' points='-60 900 398 662 816 900' />
          <polygon fill='#b89c6b' points='337 900 398 662 816 900' />
          <polygon fill='#51837c' points='1203 546 1552 900 876 900' />
          <polygon fill='#a1996e' points='1203 546 1552 900 1162 900' />
          <polygon fill='#4c8178' points='641 695 886 900 367 900' />
          <polygon fill='#8a9474' points='587 900 641 695 886 900' />
          <polygon fill='#457d75' points='1710 900 1401 632 1096 900' />
          <polygon fill='#74907a' points='1710 900 1401 632 1365 900' />
          <polygon fill='#427874' points='1210 900 971 687 725 900' />
          <polygon fill='#5c8c7f' points='943 900 1210 900 971 687' />
        </svg>
      </div>
    </div>
  </div>
    <!-- <div class="relative w-full h-full my-16">
        
        <div class="absolute inset-0 bg-black/50 z-20"></div>
        
        <img class="object-cover w-full h-full md:h-screen " src="@/assets/images/banner_01.webp" alt="banner_01" />

        <div>

          <div class="absolute inset-0 flex items-center justify-center z-20">
            <Carousel data-aos="fade-up-right" data-aos-duration="7000" class="max-w-full" :plugins="[Autoplay({
              delay: 4000,
            })]">
              <CarouselContent>
                <CarouselItem v-for="(_, index) in 5" :key="index">
                  <div class="text-start  px-2 md:px-5 w-3/4">
                    <h1 class=" font-bold text-white capitalize ">
                      <span class="block text-lg md:text-3xl font-bold">
                        Welcome to our school,

                      </span>
                      <span class="block text-2xl md:text-xl font-bold text-secondarywe">
                        Inna Antu Memorial Schools

                      </span>
                    </h1>
                    <p class="text-xs md:text-xl text-white">It is our design to create a balanced islamic education in
                      accordance to the Qur'an and Sunnah based on the understanding of our pious predecessors.
                    </p>
                    <div class="py-2 mt-4">
                      <router-link to="/about"
                        class="px-5 py-2 bg-white text-primarynd rounded-lg font-semibold text-sm hover:bg-transparent outline-1 outline-white hover:outline hover:text-white transition- duration-500 ease-linear">Learn
                        More</router-link>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
            </Carousel>

          </div>
        </div>
      </div> -->
  </header>
</template>

<style lang="">
  
</style>