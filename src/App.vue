<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Banner from './pages/Banner.vue';
import About from './pages/About.vue';
import Review from './pages/Review.vue';
import Blog from './pages/Blog.vue';
import Contact from './pages/Contact.vue';
import Footer from './pages/Footer.vue';

import {ref} from 'vue';

// Reactive state for menu open/close
const isMenuOpen = ref(false);

// Toggle menu function
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="navbar-brand">
          <strong class="text-3xl delicious">Delicious<span
              class="text-orange-500 font-bold">Food</span></strong>
        </div>
        <div class="navbar-links">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div class="navbar-toggle" @click="toggleMenu">
          <span v-if="!isMenuOpen">☰</span>
          <span v-else>✖</span>
        </div>
      </div>

      <div v-if="isMenuOpen" class="navbar-menu">
        <ul>
          <li><a href="/" @click="toggleMenu">Home</a></li>
          <li><a href="/about" @click="toggleMenu">About</a></li>
          <li><a href="/services" @click="toggleMenu">Services</a></li>
          <li><a href="/contact" @click="toggleMenu">Contact</a></li>
        </ul>
      </div>
    </nav>
  </header>
  <main>
    <Banner />
    <About />
    <Review />
    <Blog />
    <Contact />
    <Footer />
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Knewave&display=swap');
.navbar {
  background-color: #333;
  color: #fff;
  padding: 1.5rem;
}

.delicious{
  font-family: "Knewave", system-ui;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar-brand a {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
}

.navbar-links ul {
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
}
.navbar-links a:hover {
  border-bottom: 1px solid white;
}

.navbar-toggle {
  display: none;
  cursor: pointer;
  font-size: 1.5rem;
}

.navbar-menu {
  display: none;
}

@media (max-width: 768px) {
  .navbar-links {
    display: none;
  }

  .navbar-toggle {
    display: block;
  }

  .navbar-menu {
    display: block;
    background-color: #333;
    padding: 1rem;
  }

  .navbar-menu ul {
    list-style-type: none;
    padding: 0;
  }

  .navbar-menu a {
    color: #fff;
    text-decoration: none;
    display: block;
    margin-bottom: 1rem;
  }
}
</style>