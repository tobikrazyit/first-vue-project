<template>
  <section class="banner h-[50vh] md:h-[100vh]"
    :style="{ backgroundImage: `url('https://plus.unsplash.com/premium_photo-1728412896156-6a46d1e983a8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8')` }">
    <div class="banner-content px-5">
      <h1 class="font-bold text-[25px] md:text-[60px]">Enjoy The Delicious Food</h1>
      <p class="px-5 md:px-40 py-5 text-[13px] md:text-[25px]">Delicious food brings joy with every bite, blending rich
        flavors, fresh ingredients, and delightful textures that satisfy cravings perfectly.</p>
      <button class="text-2xl font-bold bg-orange-500 py-3 px-10 rounded-sm">Order Now</button>
    </div>
  </section>
</template>

<script>


</script>

<style scoped>
.banner {
  position: relative;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Dark overlay */
}

.banner-content {
  position: relative;
  z-index: 1;
}
</style>
