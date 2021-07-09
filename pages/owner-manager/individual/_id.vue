<template>
    <div class="grid gap-y-8">
        <div class="grid grid-cols-4 bg-white rounded-lg gap-x-2">
            <div class="p-5 border-r-4">
                <h3 class="text-xs font-normal text-tertiary-500">Bio Data</h3>
                <div class="pt-6 grid grid-cols-2 gap-4 capitalize">
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">First Name</h5>
                        <p class="text-xl text-primary-900 font-medium">labaika</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Other Name</h5>
                        <p class="text-xl text-primary-900 font-medium">aladeen</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Last Name</h5>
                        <p class="text-xl text-primary-900 font-medium">Erinjobe</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">gender</h5>
                        <p class="text-xl text-primary-900 font-medium">male</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">unique id</h5>
                        <p class="text-xl text-primary-900 font-medium">#0123</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State of origin</h5>
                        <p class="text-xl text-primary-900 font-medium">Kwara</p>
                    </div>
                </div>
            </div>
            <div class="col-span-3 p-5">
                <div class="pt-3 grid grid-cols-3 gap-y-4 capitalize text-sm text-primary-900 font-normal">
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">nIN/BVN</h5>
                        <p class="">0123456789101</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Marital Status</h5>
                        <p class="">Single</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Local Government Area</h5>
                        <p class="">Ireposi South</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Phone number</h5>
                        <p class="">+234 801 234 5678</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Employment status</h5>
                        <p class="">self-employed</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">City</h5>
                        <p class="">ikeja</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Email address</h5>
                        <p class="">everything.some@nothing.com</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">occupation</h5>
                        <p class="">Graphic artist</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                        <p class="">Lagos</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Residential Address</h5>
                        <p class="">Plot 134, Lorem ipsum</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">income range (Monthly)</h5>
                        <p class="">#100,000 - #250,000</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">date of birth</h5>
                        <p class="">23 Jan, 1994</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-3 gap-x-6">
            <div class="col-span-2 bg-white rounded-xl h-full">
                <h3 class="text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b">activity log</h3>
                <div class="relative overflow-y-auto h-4/5 p-5 pb-4">
                    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 23px"></div>
                    <!-- right timeline -->
                    <div class="mb-5 flex  items-center w-full">
                        <div class="z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full">
                        </div>
                        <div class="px-6">
                            <h3 class="font-normal text-sm text-tertiary-600 flex items-center">
                                Insurance Purchase
                                <span class="px-3">
                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z" fill="#BDBDBD"/>
                                    </svg>

                                </span>
                                <span class="text-tertiary-300 text-xs">3 minutes ago</span>
                            </h3>
                        </div>
                    </div>

                    <div class="mb-5 flex  items-center w-full">
                        <div class="z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full">
                        </div>
                        <div class="px-6">
                            <h3 class="font-normal text-sm text-tertiary-600 flex items-center">
                                Road Worthiness Purchase
                                <span class="px-3">
                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z" fill="#BDBDBD"/>
                                    </svg>

                                </span>
                                <span class="text-tertiary-300 text-xs">1:40 pm 15-06-2021</span>
                            </h3>
                        </div>
                    </div>
                    
                    <div class="mb-5 flex  items-center w-full">
                        <div class="z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full">
                        </div>
                        <div class="px-6">
                            <h3 class="font-normal text-sm text-tertiary-600 flex items-center">
                                Vehicle License Purchase
                                <span class="px-3">
                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z" fill="#BDBDBD"/>
                                    </svg>

                                </span>
                                <span class="text-tertiary-300 text-xs">1:35 pm 15-06-2021</span>
                            </h3>
                        </div>
                    </div>

                    <div class="mb-5 flex  items-center w-full">
                        <div class="z-20 flex items-center bg-tertiary-300 shadow-xl w-2 h-2 rounded-full">
                        </div>
                        <div class="px-6">
                            <h3 class="font-normal text-sm text-tertiary-600 flex items-center">
                                Radio License Purchase
                                <span class="px-3">
                                    <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.696 0.444V1.9L0.28 1.9L0.28 0.444L14.696 0.444Z" fill="#BDBDBD"/>
                                    </svg>

                                </span>
                                <span class="text-tertiary-300 text-xs">1:30 pm 15-06-2021</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-rows-2 gap-4">
                <div class="bg-white rounded-xl">
                    <h3 class="text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b">assets</h3>
                    <div class=" p-5">
                        <h3 class="text-xs font-normal text-tertiary-500 capitalize pb-4">total asset:</h3>
                        <div class="flex items-center">
                            <div class="text-center pr-4">
                                <div class="w-12 h-12 border border-purple-400 rounded-full">
                                    <img src="" alt="" srcset="">
                                </div>
                                <p class="text-xs font-normal text-purple-400">House</p>
                            </div>
                            <div class="text-center pr-4">
                                <div class="w-12 h-12 border border-purple-400 rounded-full">
                                    <img src="" alt="" srcset="">
                                </div>
                                <p class="text-xs font-normal text-purple-400">House</p>
                            </div>
                            <div class="text-center pr-4">
                                <div class="w-12 h-12 border border-purple-400 rounded-full">
                                    <img src="" alt="" srcset="">
                                </div>
                                <p class="text-xs font-normal text-purple-400">House</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white rounded-xl">
                    <h3 class="text-xs font-normal text-tertiary-500 capitalize p-5 pb-4 border-b">document status</h3>
                    <div class="">
                        <table class="min-w-full bg-primary-100">
                            <thead class="text-sm text-tertiary-800">
                                <tr>
                                    <th class="text-left py-2 px-5 text-xs font-normal"> Document type</th>
                                    <th class="text-left py-2 px-5 text-xs font-normal"> Status </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white text-xs text-tertiary-500 font-normal">
                                <tr class="border-b">
                                    <td class="text-left py-2 px-5">Driver’s Licence</td>
                                    <td class="text-left py-2 px-5">
                                        <Status classes="w-16 text-thin" status="approved" />
                                    </td>
                                </tr>
                                <tr class="border-b">
                                    <td class="text-left py-2 px-5">International Passport</td>
                                    <td class="text-left py-2 px-5">
                                        <Status classes="w-16 text-thin" status="pending" />
                                    </td>
                                </tr>
                                <tr >
                                    <td class="text-left py-2 px-5">Bank Verification Number</td>
                                    <td class="text-left py-2 px-5">
                                        <Status classes="w-16 text-thin" status="denied" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
export default {
    name: 'Show',
    components: {
        Status
    },
    meta: { breadCrumb: 'benson' },
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        
    },
}
</script>