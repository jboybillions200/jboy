<script setup>
import { ref, computed } from 'vue';
const testimonials = ref([
    {
        name: "John Doe",
        quote: "This school has completely transformed my child's life. The teachers are dedicated and the environment is supportive.",
        avatar: "https://via.placeholder.com/150"
    },
    {
        name: "Jane Smith",
        quote: "A fantastic institution that puts students first. My child loves learning here and has grown tremendously.",
        avatar: "https://via.placeholder.com/150"
    },
    {
        name: "Robert Brown",
        quote: "The emphasis on holistic education has been a game changer for our family. Highly recommend this school!",
        avatar: "https://via.placeholder.com/150"
    },
    {
        name: "Emily Davis",
        quote: "My child has discovered a love for learning, thanks to the engaging curriculum and passionate teachers.",
        avatar: "https://via.placeholder.com/150"
    }
]);

const currentIndex = ref(0);
const visibleItems = 3; // Number of visible items

const loopedTestimonials = computed(() => {
    return [
        ...testimonials.value.slice(-visibleItems),
        ...testimonials.value,
        ...testimonials.value.slice(0, visibleItems)
    ];
});

const totalItems = computed(() => testimonials.value.length);

const nextTestimonial = () => {
    if (currentIndex.value < totalItems.value) {
        currentIndex.value++;
    } else {
        currentIndex.value = 0;
    }
};

const prevTestimonial = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--;
    } else {
        currentIndex.value = totalItems.value;
    }
};

</script>
<template>
    <div class="min-h-2/3 flex items-center justify-center py-10 relative">
        <div class="container shadow-none mx-auto px-4">
            <div class="leading-snug text-center font-normal text-lg mb-10" data-aos="fade-down">
                <h3 class="text-4xl md:text-4xl font-semibold capitalize">Parent Testimonials</h3>
                <p class="text-sm md:text-lg leading-tight text-gray-400">All tailored to equipping children with skills that are
                    relevant in the 21st century</p>
            </div>
            <div class="relative overflow-hidden rounded-lg p-6 w-full ">
                <button @click="prevTestimonial"
                    class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 z-10 focus:outline-none">
                    <i class="fas fa-chevron-left text-gray-700"></i>
                </button>

                <div ref="carousel" class="flex space-x-4 transition-transform duration-500 ease-in-out"
                    :style="{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }">
                    <div v-for="(testimonial, index) in loopedTestimonials" :key="index"
                        class="flex-shrink-0 w-1/2 md:w-1/3  bg-gray-50 p-4 rounded-lg shadow">
                        <div class="flex items-center mb-4">
                            <img :src="testimonial.avatar" :alt="testimonial.name" class="w-12 h-12 rounded-full mr-4">
                            <h2 class="text-lg font-semibold text-gray-700">{{ testimonial.name }}</h2>
                        </div>
                        <p class="text-gray-600 italic">"{{ testimonial.quote }}"</p>
                    </div>
                </div>

                <button @click="nextTestimonial"
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 hover:bg-gray-400 rounded-full p-2 z-10 focus:outline-none">
                    <i class="fas fa-chevron-right text-gray-700"></i>
                </button>
            </div>
        </div>
        <!-- <div class="md:w-full absolute -z-10 ">
            <svg style="width: 250px;" xmlns='http://www.w3.org/2000/svg'  width='759' height='759' viewBox='0 0 200 200'><rect fill='#FFFFFF' width='200' height='200'/><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='88' y1='88' x2='0' y2='0'><stop  offset='0' stop-color='#024741'/><stop  offset='1' stop-color='#326c65'/></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='75' y1='76' x2='168' y2='160'><stop  offset='0' stop-color='#828282'/><stop  offset='0.09' stop-color='#a5a5a5'/><stop  offset='0.18' stop-color='#bdbdbd'/><stop  offset='0.31' stop-color='#d0d0d0'/><stop  offset='0.44' stop-color='#dddddd'/><stop  offset='0.59' stop-color='#e8e8e8'/><stop  offset='0.75' stop-color='#f0f0f0'/><stop  offset='1' stop-color='#F6F6F6'/></linearGradient><filter id='c' x='0' y='0' width='200%' height='200%'><feGaussianBlur in='SourceGraphic' stdDeviation='12' /></filter></defs><polygon fill='url(#a)' points='0 174 0 0 174 0'/><path fill='#000' fill-opacity='0' filter='url(#c)' d='M121.8 174C59.2 153.1 0 174 0 174s63.5-73.8 87-94c24.4-20.9 87-80 87-80S107.9 104.4 121.8 174z'/><path fill='url(#b)' d='M142.7 142.7C59.2 142.7 0 174 0 174s42-66.3 74.9-99.3S174 0 174 0S142.7 62.6 142.7 142.7z'/></svg>
        </div> -->
    </div>
</template>


<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

body {
    font-family: 'Inter', sans-serif;
}

.carousel-container {
    display: flex;
    transition: transform 0.5s ease-in-out;
}
</style>