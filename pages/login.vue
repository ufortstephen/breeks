<template>
  <div class='relative flex min-h-screen flex-col'> 
  <img src="/images/Vector1.svg" alt="" class="absolute">
        <img src="/images/Vector.svg" alt="" class="absolute right-0 -top-20">
  <div class="bg-[#055B78] " style="height: 50vh">
  </div>
<div class="relative md:-top-60 form_container bg-white shadow-lg md:w-2/5 p-4 py-10 mx-auto">
<h2 class="text-2xl font-bold text-[#055B78] text-center">Breeks BNB</h2>
<h4 class="text-sm font-bold text-[#055B78] text-center">We’ll sign you in or create and account if you
don’t have one yet</h4>
<div class="text-center my-5">
<button type="button" class="bg-[#EBF6FA] text-[#055B78] hover:text-[#EBF6FA] hover:bg-[#055B78]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-2/3 text-center mx-auto">
  
  <img src="/images/Google.svg" alt="" class="mr-2 -ml-1 w-4 h-4">
  Sign in with Google
</button></div>

<div class="inline-flex justify-center items-center w-full">
    <hr class="my-2 w-64 h-px bg-gray-200 border-0 dark:bg-gray-700">
    <span class="absolute left-1/2 px-3 font-medium text-gray-900 bg-white -translate-x-1/2 dark:text-white dark:bg-gray-900">or</span>
</div>

<form class="relative -top-0">
    <div class="my-5">
        <div>
            <input type="text" id="first_name" class="bg-transparent text-center border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-2/3 mx-auto" placeholder="Enter your email address" required>
        </div>
        <div class="text-center my-5">
<button type="button" class="bg-[#055B78] text-[#FBFBFB] hover:text-[#EBF6FA] focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center justify-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 w-2/3 text-center mx-auto">
  Continue
</button>

<h5 class="mt-3">Have an account?  <span class="text-[#055B78] font-bold">Login</span></h5></div>
        </div>
</form>



</div>
<img src="/images/BgVector.svg" alt="" class="absolute bottom-0 right-0" style="z-index: -1">
  </div>
</template>

<script>
export default {
  name: 'LoginPage'
}
</script>

<style scoped>
@media (min-width : 768px){
.form_holder{
  position: relative;
  top: -15rem;
}
}
</style>
