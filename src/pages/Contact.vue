<template>
  <section class="contact-us py-16 px-5 bg-gray-100">
    <div class="container mx-auto">
      <h1 class="text-3xl font-bold text-center mb-8">Contact Us</h1>
      <div class="flex flex-col lg:flex-row gap-5 md:gap-10">
        <!-- Left Side: Contact Information -->
        <div class="flex-1 bg-white rounded-lg shadow-lg p-5 md:p-8 flex justify-center items-center">
          <div>
            <h2 class="text-2xl font-bold mb-4">Get in Touch</h2>
            <div class="text-left w-full"> <!-- This div ensures the text is left-aligned -->
              <p class="text-gray-700 mb-0 md:mb-3 flex items-center text-lg">
                <i class="fa-regular fa-address-book text-blue-500 mr-2"></i>
                <strong>Address:</strong> 1234 Street Name, City, Country
              </p>
              <p class="text-gray-700 mb-0 md:mb-3 flex items-center text-lg">
                <i class="fa-solid fa-phone text-blue-500 mr-2"></i>
                <strong>Phone:</strong> +1 (234) 567-8900
              </p>
              <p class="text-gray-700 mb-0 md:mb-3 flex items-center text-lg">
                <i class="fas fa-envelope text-blue-500 mr-2"></i>
                <strong>Email:</strong> contact@example.com
              </p>
              <p class="text-gray-700 flex items-center text-lg">
                <i class="fas fa-map text-blue-500 mr-2"></i>
                <strong>Location:</strong>
                <span>Find us on Google Maps</span>
                <a href="https://www.google.com/maps" target="_blank" class="text-blue-500 hover:underline ml-1">
                  View Map
                </a>
              </p>
            </div>
          </div>
        </div>

        <!-- Right Side: Contact Form -->
        <div class="flex-1 bg-white rounded-lg shadow-lg p-5 md:p-8">
          <h2 class="text-2xl font-bold mb-4">Send Us a Message</h2>
          <form @submit.prevent="handleSubmit">
            <!-- Name Field -->
            <div class="mb-2 md:mb-6">
              <label for="name" class="block text-gray-700 font-bold mb-0 md:mb-2 text-lg">Name</label>
              <input type="text" id="name" v-model="form.name" placeholder="Enter your name"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required />
            </div>

            <!-- Email Field -->
            <div class="mb-2 md:mb-6">
              <label for="email" class="block text-gray-700 font-bold mb-0 md:mb-2 text-lg">Email</label>
              <input type="email" id="email" v-model="form.email" placeholder="Enter your email"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required />
            </div>

            <!-- Message Field -->
            <div class="mb-2 md:mb-6">
              <label for="message" class="block text-gray-700 font-bold mb-0 md:mb-2 text-lg">Message</label>
              <textarea id="message" v-model="form.message" placeholder="Enter your message" rows="4"
                class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="w-full bg-blue-500 text-white py-2 px-4 rounded-lg font-bold hover:bg-blue-600 transition">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Contact form data
const form = ref({
  name: '',
  email: '',
  message: '',
});

// Form submit handler
const handleSubmit = () => {
  // Logic to handle form submission (e.g., send data to server)
  alert(`Message sent from: ${form.value.name} (${form.value.email})`);

  // Reset the form fields
  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
};
</script>

<style scoped>
/* Additional custom styles can go here */
.contact-us {
  background-color: #f7fafc;
  /* Gray background for the whole section */
}

.flex-1 {
  background-color: #ffffff;
  /* White background for the contact information section */
}

@media (max-width: 768px) {
  .text-lg {
    font-size: 0.875rem;
    /* Smaller text size for small screens */
  }
}
</style>
