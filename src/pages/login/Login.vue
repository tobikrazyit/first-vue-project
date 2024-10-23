<script setup>
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

// Reactive form data
const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');

const router = useRouter()

const login = () => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value).then((data) => {
    console.log("Successfully Logged In")
    console.log(data);
    router.push("/")
  })
}

// Form validation function
const validateForm = () => {
  // Reset errors
  emailError.value = '';
  passwordError.value = '';

  // Validate email
  if (!email.value) {
    emailError.value = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.value = 'Please enter a valid email address.';
  }

  // Validate password (minimum 6 characters)
  if (!password.value) {
    passwordError.value = 'Password is required.';
  } else if (password.value.length < 6) {
    passwordError.value = 'Password must be at least 6 characters long.';
  }

  // If no errors, proceed with login (for now, just log to the console)
  if (!emailError.value && !passwordError.value) {
    console.log('Login successful!', { email: email.value, password: password.value });
  }
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>

      <form @submit.prevent="validateForm">
        <!-- Email Input -->
        <div class="mb-4">
          <label for="email" class="block text-gray-700 mb-2">Email:</label>
          <input v-model="email" type="email" id="email" placeholder="Enter your email"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="emailError" class="text-red-500 text-sm">{{ emailError }}</span>
        </div>

        <!-- Password Input -->
        <div class="mb-6">
          <label for="password" class="block text-gray-700 mb-2">Password:</label>
          <input v-model="password" type="password" id="password" placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <span v-if="passwordError" class="text-red-500 text-sm">{{ passwordError }}</span>
        </div>

        <!-- Submit Button -->
        <div class="text-center">
          <button type="submit"
            class="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300" @click="login">
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
/* Add any additional custom styles here */
</style>
