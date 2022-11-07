<template>
  <div>
    <Navbar />

  <div style="background: rgba(5, 91, 120, 0.05)">
    <section class="container py-5">
      <div class="md:flex p-2 items-center justify-center md:w-2/3 mx-auto shadow bg-white">
        <client-only>
          
            <div class="relative">
                <div class="absolute time__text ">
                    <h1 class="relative -left-8  mb-4 text-md font-bold tracking-tight leading-none md:text-md  dark:text-white text-[#667085]">
                        Mining session ends
            </h1>
                    <h1 class="   mb-4 text-2xl font-bold tracking-tight leading-none md:text-xl  dark:text-white text-black">
                    18:23:15
            </h1>
                </div>
               
                <VueApexCharts
                     width="500"
                     type="donut"
                     :options="chartOptions"
                     :series="series"
                 >
                </VueApexCharts>
            </div>
        </client-only>

        <div style="width: 100%; overflow: hidden;">
            <button type="button" class=" text-[#000000] bg-[#FF8A09] w-100 text-center  focus:outline-none  font-medium  text-md px-4 py-3 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Start Mining
                    </button>
                    <div class="mt-5 flex">
                        <button type="button" class="text-[#FFFFFF] bg-[#055B78] w-48 text-center  focus:outline-none  font-medium rounded-lg text-md px-4 py-3 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg  viewBox="0 0 24 24" class="mr-2 -ml-1 w-6 h-6"><path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm5-4V7.85l-2.6 2.6L7 9l5-5l5 5l-1.4 1.45l-2.6-2.6V16Z"/></svg>
                            Upgrade
                    </button>
                    <button type="button" class="text-[#055B78] bg-[#FCF9F9] hover:bg-transparent w-48  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-3 text-center justify-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        
                        <svg class="mr-2 -ml-1 w-6 h-6" viewBox="0 0 24 24"><path fill="currentColor" d="M12 14.975q-.2 0-.387-.075q-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-4.6 4.6q-.15.15-.325.212q-.175.063-.375.063Z"/></svg>
                            Withdraw
                    </button>
                    </div>
        </div>

        </div>
    </section>
      
   <div class="container py-5">
    <div class="md:flex items-center md:w-2/3 mx-auto justify-center gap-5">
       

        <div class="bg-white md:w-2/5  p-3 items-center flex gap-10 shadow h-48">
               
                <div>
                    <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl  dark:text-white text-black">Refer your friends <br> and earn $30 </h1>
                    <button type="button" class="hidden text-[#000000] bg-[#FF8A09] w-48 text-center  focus:outline-none  font-medium rounded-lg text-md px-4 py-3 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Copy referral link
                    </button>
                </div>
               </div>
        <div class="bg-[#033C4F] w-100 h-48 p-3 items-center flex lg:gap-10">
                <div>
      
                    <img src="/images/illustration.svg" alt="">
                </div>
                <div>
                    <h1 class="max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-3xl  dark:text-white text-[#FFFFFF]">Refer your friends <br> and earn $30 </h1>
                    <button type="button" class="text-[#000000] bg-[#FF8A09] w-48 text-center  focus:outline-none  font-medium rounded-lg text-md px-4 py-3 text-center inline-flex items-center justify-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Copy referral link
                    </button>
                </div>
               </div>
    </div>
   </div>
  </div>
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
    components: {
    VueApexCharts: () => import('vue-apexcharts')
  },
    data(){
        return {
          series: [44],
          chartOptions: {
            chart: {
              type: 'donut',
            },
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
        
        }
    },
    computed: {
    apexchart() {
      return () => {
        if (process.client) {
          return import('apexcharts')
        }
      }
    }
}

}
</script>

<style>
#apexchartsofff9tln{
    margin: 0px auto;
}

.time__text {
    right: 1rem;
}
@media(min-width: 768px){
    .time__text {
    top: 8rem;
    left: 11rem;
}
}
</style>