<script setup>
import { FaChildren } from '@kalimahapps/vue-icons';
import { MiSolidRobot } from '@kalimahapps/vue-icons';
import { IcLearning } from '@kalimahapps/vue-icons';
const offers = [
        {
          title: "Robotics and Coding",
          icon: "🤖",
          description:
            "Robotics and coding programs foster creativity and problem-solving skills by engaging students in hands-on experiences with programming and automation. These initiatives prepare students for the rapidly evolving digital economy by equipping them with essential technical skills, encouraging innovation, and helping them build confidence in their ability to navigate and contribute to a technology-driven world."
        },
        {
          title: "Technology Integration",
          icon: "💻",
          description:
            "Integrating technology into education blends digital tools with traditional teaching methods to create interactive and engaging learning environments. This approach enables students to access global resources, collaborate virtually, and leverage e-learning platforms, enhancing their understanding of complex concepts and ensuring they are prepared for the challenges of a connected world."
        },
        {
          title: "Project-Based Learning",
          icon: "📚",
          description:
            "Project-based learning encourages students to work collaboratively to solve real-world problems through structured projects. This method promotes active, experiential learning by developing teamwork, critical thinking, and problem-solving skills. By working on meaningful projects, students can connect their academic knowledge to practical applications, fostering deeper understanding and engagement."
        },
        {
          title: "Teaching Mentorship",
          icon: "👩‍🏫",
          description:
            "Teaching mentorship programs provide educators with guidance and support for professional growth. By fostering peer-to-peer learning, sharing best practices, and encouraging collaboration, mentorship initiatives enhance teaching quality and create a culture of continuous improvement within educational institutions, ultimately benefiting students."
        },
        {
          title: "Interdisciplinary Curriculum",
          icon: "🔗",
          description:
            "An interdisciplinary curriculum integrates concepts from multiple subjects, encouraging students to see connections and think holistically. This approach cultivates innovation and a deeper understanding of topics by linking academic learning to real-life applications. It inspires students to approach challenges with creativity and a broader perspective."
        },
        {
          title: "Child-Centered Learning",
          icon: "🌟",
          description:
            "Child-centered learning prioritizes the individual needs, interests, and strengths of each student. This approach encourages self-paced, inquiry-driven education within a supportive environment that fosters personal growth. By tailoring learning experiences to each child, this method builds confidence, enhances engagement, and nurtures lifelong learners."
        }
      ]
</script>

<template>
    <section class="p-10">
        <div class="min-h-screen  flex items-center justify-center">
            <div class="container mx-auto px-4">
                <div class="leading-snug text-center font-normal text-lg mb-10" data-aos="fade-down">
                    <h3 class="text-4xl md:text-4xl font-semibold capitalize">What we Offer</h3>
                    <p class="text-sm md:text-lg leading-tight text-gray-400">All tailored to equipping children with skills that are relevant in the 21st century</p>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div v-for="(goal, index) in offers" :key="index" class="bg-white shadow-lg rounded-lg p-6"  data-aos="fade-up" data-aos-delay="{{ index * 100 }}">
                    <div class="flex items-center mb-4">
                        <span class="text-4xl mr-3">{{ goal.icon }}</span>
                        <h2 class="text-xl md:text-2xl font-semibold text-gray-700">{{ goal.title }}</h2>
                    </div>
                    <p class="text-gray-500 md:text-lg font-normal">{{ goal.description }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="">
    
</style>