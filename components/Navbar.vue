<template>
  
<nav class="bg-[#F4F4F4] border-gray-200 px-2 sm:px-4 py-3 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <a href="#" class="flex items-center">
      <img src="/images/breeks_logo.svg" class="mr-3 h-100 w-100" alt="Flowbite Logo">
  </a>
  <div class="flex md:order-2 items-center gap-5">
      <ul class="hidden md:flex flex flex-col md:flex-row items-center"> <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-[#B8731C] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg">About Us</a>
      </li>
       
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-[#055B78] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 font-bold text-lg">Contact Us</a>
      </li></ul>
      
        <button type="button" class="text-white bg-[#055B78] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-3 items-center justify-center text-lg md:ml-5">
            <span>Login </span>
            <!-- <svg width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"/></svg> -->
            </button>
        <button type="button" class="hidden  md:block text-[#2C3CCC] bg-transparent hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center  border-[#0A1F72] mr-0 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 flex gap-3 items-center justify-center text-lg" style="border: 1px solid #0A1F72;">
            Register
            </button>
      
     
      <button data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden md:hidden  justify-between items-center w-full md:flex md:w-auto md:order-1" id="navbar-cta">
    <ul class="flex flex-col p-0 mt-7 bg-gray-50 rounded-lg  border-none md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-none md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-none">
    
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
      </li>
     
      <li>
        <a href="#" class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
      </li>
    </ul>
  </div>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style>

</style>