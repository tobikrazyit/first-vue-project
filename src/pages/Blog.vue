<template>
  <section class="blog-page py-16 bg-gray-100">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Blog</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5">
        <div v-for="(blog, index) in blogs" :key="index" class="bg-white rounded-lg shadow-lg overflow-hidden">
          <img :src="blog.image" alt="Blog Image" class="w-full h-48 object-cover" />
          <div class="p-6">
            <h2 class="text-xl font-semibold mb-2">{{ blog.title }}</h2>
            <p class="text-gray-600 mb-4">{{ blog.report }}</p>
            <a :href="blog.link" class="text-blue-500 hover:underline" target="_blank">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Sample blogs data
const blogs = ref([
  {
    title: 'Understanding Vue.js',
    report: 'A comprehensive guide to understanding the Vue.js framework and its core concepts.',
    image: 'https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D',
    link: '#', // Link to the blog post
  },
  {
    title: 'Getting Started with Tailwind CSS',
    report: 'Learn how to effectively use Tailwind CSS to style your applications with utility-first classes.',
    image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZvb2R8ZW58MHx8MHx8fDA%3D', 
    link: '#',
  },
  {
    title: 'Best Practices for Building React Apps',
    report: 'Explore best practices for developing React applications to ensure maintainability and scalability.',
    image: 'https://images.unsplash.com/photo-1478998674531-cb7d22e769df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    link: '#',
  },
  {
    title: 'Django for Beginners',
    report: 'An introductory guide for beginners to get started with Django, the popular web framework.',
    image: 'https://plus.unsplash.com/premium_photo-1700752343056-e89926bf5ff9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjV8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    link: '#',
  },
  {
    title: 'JavaScript ES6 Features',
    report: 'Discover the new features introduced in ES6 and how they improve JavaScript programming.',
    image: 'https://images.unsplash.com/photo-1456404823214-a69ef7a1fae5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGZvb2R8ZW58MHx8MHx8fDA%3D',
    link: '#',
  },
  {
    title: 'Node.js for Backend Development',
    report: 'Learn how to use Node.js for backend development and building RESTful APIs.',
    image: 'https://plus.unsplash.com/premium_photo-1678897742200-85f052d33a71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA1fHxmb29kfGVufDB8fDB8fHww',
    link: '#',
  },
]);
</script>

<style scoped>
/* Custom styles for the blog page can go here */
</style>
