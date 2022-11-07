<template>
    <div>
    <Navbar />
    <DashboardCards />

    <section class="py-5"  style="background: rgba(184, 227, 219, 0.1);">
        <div class="container pb-5 md:px-5 md:w-2/3" style="background: rgba(5, 91, 120, 0.05)">
            <div class="flex justify-between items-center py-2 md:p-4" >
                <div class="flex gap-5 items-center">
                    <h4 class="text-[ #3F3F3F] text-xl font-bold">Transaction History</h4>

                    <select class="bg-[#FAFAFA] rounded-lg border-none outline-none">
                        <option value="filter">Filter</option>
                    </select>
                </div>
                <div><h6 class="text-[#3F3F3F]">See all</h6></div>
            </div>

            <div class="overflow-x-auto relative my-5">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
     
        <tbody>
            <tr class="bg-[#FCFAFA] border-b dark:bg-gray-800 dark:border-gray-700 mb-5">
               
                <th scope="row" class="md:flex py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white rounded-lg" style=" align-items:center; gap:1rem">
                    <img src="/images/Avatar.svg" alt="" class="h-6 w-6"/>
                    <span class="text-[#3F3F3F] font-semibold text-md">You referred Samuel</span>
                </th>
                <td class="py-4 px-6 text-[#3F3F3F]">
                    11:45 Aug 25, 2022
                </td>
                <td class="py-4 px-6 text-[#00CD6B]">
                    $10
                </td>
                <td class="py-4 px-6">
                    <button type="button" class=" px-4 py-2 text-[#F0F4FF] bg-[#055B78]  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  text-center justify-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Claim
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</div>

            <section>
                


            </section>
        </div>
    </section>

    <section>
        <section class="bg-[#055B78] dark:bg-gray-900 mb-0 relative overflow-hidden">
    <div class="grid container px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-2xl font-bold tracking-tight leading-none md:text-3xl xl:text-3xl dark:text-white text-white">Start mining Bitcoin <br>
                    for free now with Breeks 
            </h1>
            <p class="max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">With our integrated CRM, project <br> management, collaboration and  invoicing capabilities.</p>
            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-[#FF8A09] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> -->

           <div class="flex gap-4"> <a href=""><img src="/images/AppStore.svg" alt=""></a>
            <a href=""><img src="/images/GooglePlay.svg" alt=""></a></div>

            <!-- <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Speak to Sales
            </a>  -->
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="/images/iPhoneX.svg" alt="mockup">
        </div>                
    </div>
</section>
    </section>
    <Footer />
    
    </div>
  </template>
  
  <script>
  export default {
    name: 'Dashboard'
  }
  </script>

  <style scoped>
  table {
  border-collapse:separate; 
  border-spacing: 0 1em;
}
  </style>
  