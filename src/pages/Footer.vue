<template>
  <footer class="bg-gray-800 text-gray-200 py-10">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Company Info -->
      <div class="text-center md:text-left">
        <h2 class="text-xl font-bold mb-4">Company Info</h2>
        <p class="mb-2">We are a leading provider of quality products and services.</p>
        <p class="mb-2">&copy; 2024 Your Company Name</p>
      </div>

      <!-- Quick Links -->
      <div class="text-center md:text-left">
        <h2 class="text-xl font-bold mb-4">Quick Links</h2>
        <ul>
          <li class="mb-2"><a href="#" class="hover:underline">Home</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">About Us</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">Services</a></li>
          <li class="mb-2"><a href="#" class="hover:underline">Contact</a></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="text-center md:text-left">
        <h2 class="text-xl font-bold mb-4">Contact Info</h2>
        <p class="mb-2">Email: contact@company.com</p>
        <p class="mb-2">Phone: +123 456 7890</p>
        <p class="mb-2">Location: 123 Street, City, Country</p>
      </div>

    </div>

    <!-- Social Media Icons -->
    <div class="mt-8 text-center">
      <a href="#" class="mx-2 text-gray-400 hover:text-gray-200">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#" class="mx-2 text-gray-400 hover:text-gray-200">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#" class="mx-2 text-gray-400 hover:text-gray-200">
        <i class="fab fa-instagram"></i>
      </a>
      <a href="#" class="mx-2 text-gray-400 hover:text-gray-200">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<!-- Import the FontAwesome icons -->
<style scoped>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>
