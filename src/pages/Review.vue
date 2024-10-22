<template>
  <section class="review-slider py-16">
    <div class="container mx-auto">
      <div class="bg-white rounded-lg p-5 md:p-8">
        <!-- Grid for Reviews: 1 column on small screens, 3 columns on large screens -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          <div v-for="(review, index) in visibleReviews" :key="index"
            class="text-center bg-gray-100 p-3 md:p-12 rounded-md">
            <h2 class="text-2xl font-bold mb-4">{{ review.name }}</h2>
            <!-- Rating -->
            <div class="flex justify-center mb-2">
              <span v-for="star in 5" :key="star" class="text-yellow-500">
                <svg v-if="star <= review.rating" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor"
                  viewBox="0 0 24 24" stroke="none">
                  <path
                    d="M12 .587l3.668 7.429L24 9.791l-6 5.841 1.415 8.268L12 18.75l-7.415 4.15L6 15.632 0 9.791l8.332-1.775L12 .587z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 17l-5 3 1.45-6.27L2 9.27l6.57-.57L12 3l2.43 5.7L21 9.27l-6.45.36L15 17z" />
                </svg>
              </span>
            </div>
            <!-- Review Message -->
            <p class="text-gray-600 text-lg mb-6">"{{ review.message }}"</p>
          </div>
        </div>

        <!-- Navigation Buttons -->
        <div class="flex justify-between items-center mt-6">
          <button @click="prevReviews" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            :disabled="currentIndex === 0">
            &lt;
          </button>

          <button @click="nextReviews" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r"
            :disabled="currentIndex + reviewsPerSlide >= reviews.length">
            &gt;
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample reviews data
const reviews = ref([
  { name: 'John Doe', rating: 5, message: 'Amazing service! Highly recommended.' },
  { name: 'Jane Smith', rating: 4, message: 'Great product, very satisfied with my purchase.' },
  { name: 'Alice Johnson', rating: 3, message: 'Good value for money, but there is room for improvement.' },
  { name: 'Bob Williams', rating: 4, message: 'The customer service was excellent!' },
  { name: 'Mike Davis', rating: 5, message: 'Absolutely fantastic experience!' },
  { name: 'Sara Wilson', rating: 4, message: 'Very happy with the service provided.' },
  { name: 'John Doe', rating: 5, message: 'Amazing service! Highly recommended.' },
  { name: 'Jane Smith', rating: 4, message: 'Great product, very satisfied with my purchase.' },
  { name: 'Alice Johnson', rating: 3, message: 'Good value for money, but there is room for improvement.' },
]);

const currentIndex = ref(0);

// Reviews per slide based on screen size
const reviewsPerSlide = computed(() => {
  if (window.innerWidth < 768) {
    return 1;
  } else if (window.innerWidth >= 768 && window.innerWidth < 998) {
    return 2;
  } else {
    return 3;
  }
});

// Show visible reviews based on the current index and reviewsPerSlide
const visibleReviews = computed(() =>
  reviews.value.slice(currentIndex.value, currentIndex.value + reviewsPerSlide.value)
);

// Navigation logic to switch reviews
const nextReviews = () => {
  if (currentIndex.value + reviewsPerSlide.value < reviews.value.length) {
    currentIndex.value += reviewsPerSlide.value;
  }
};

const prevReviews = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= reviewsPerSlide.value;
  }
};
</script>

<style scoped>
.review-slider {
  padding: 16px;
}

.review-card {
  transition: transform 0.3s;
}

.review-card:hover {
  transform: translateY(-5px);
}
</style>
