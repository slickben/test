<template>
    <div class="pb-8">
        <BreadCrumb title="Change Of ownership">
            <button @click="toggleChangeOfOwnershipModal" class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600">
                New 
            </button>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 xl:py-16 py-10 2xl:px-0  h-full w-full">
            <Table classes="rounded-md" :head_data="table_head_data"> 
                <template v-slot:head>
                    <TableFilter class="pt-5 pb-2">
                        <template v-slot:filter>
                        <div class=" relative">
                            <button :class="[toggle_filter ? 'bg-primary-300 text-tertiary-900 border-primary-300' : 'bg-white text-tertiary-500 border-tertiary-400']" @click="toggleFilterFunc" class=" hover:bg-primary-300 hover:text-tertiary-900 hover:border-primary-300  flex items-center focus:outline-none py-2 px-4 rounded-md border  w-60">
                            <img src="~/assets/images/filter.png" alt="" srcset="">
                            <span class="pl-4 text-xs">Filter Owner</span>
                            </button>
                            <div v-show="toggle_filter" class="absolute pt-2 z-70 ">
                            <div class="bg-white rounded-md text-tertiary-500 shadow">
                                <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 rounded-t-md px-6">date</p>
                                <div class="py-3 px-4">
                                <p class="text-xs">Last</p>
                                <div class="pt-1">
                                    <button class=" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs">
                                    3days
                                    </button>
                                    <button class=" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs">7 days</button>
                                    <button class=" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs">30 day</button>
                                </div>
                                </div>
                                <div class="flex items-center">
                                <div class="py-3 px-4">
                                    <p class="text-xs text-tertiary-500">From</p>
                                    <input class="border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none" type="date" name="" id="">
                                </div>
                                <div class="py-3 px-4 text-tertiary-500">
                                    <p class="text-xs">From</p>
                                    <input class="border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none" type="date" name="" id="">
                                </div>
                                </div>
                                <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6">Category</p>
                                <div class="py-3 px-4">
                                <div class="pt-1 flex items-center flex-wrap">
                                    <div class="flex items-center pb-6 mr-6">
                                        <input  id="individual" name="individual" class="w-3 h-3 mr-2" type="checkbox" />
                                        <label for="individual" class="text-xs text-tertiary-500">Individual</label>
                                    </div>
                                    <div class="flex items-center pb-6 mr-6">
                                        <input  id="individual" name="individual" class="w-3 h-3 mr-2" type="checkbox" />
                                        <label for="individual" class="text-xs text-tertiary-500">Business</label>
                                    </div>
                                    <div class="flex items-center mr-6">
                                        <input  id="individual" name="individual" class="w-3 h-3 mr-2" type="checkbox" />
                                        <label for="individual" class="text-xs text-tertiary-500">Goverment Agency</label>
                                    </div>
                                </div>
                                </div>
                                <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6">Unigue Id</p>
                                <div class="py-5 px-4">
                                <input class="w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs" placeholder="Enter Unique Id" type="text">
                                </div>
                                <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6">Profile Name</p>
                                <div class="py-5 px-4">
                                <input class="w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs" placeholder="Enter Profie Name" type="text">
                                </div>
                                <div class="py-5 px-4 flex justify-between items-center">
                                <button class="text-xs focus:outline-none text-primary-500 hover:bg-primary-100 px-4 h-6 rounded-xl">clear</button>
                                <button class="text-xs focus:outline-none text-white hover:bg-primary-500 bg-primary-400 px-4 h-6 rounded-xl ">Filter</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </template>
                        <div class="flex items-center">
                        <span class="text-xs text-tertiary-300 mr-1">Show entries</span>
                        <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                            <option selected value="10">10</option>
                            <option value="10">20</option>
                            <option value="10">30</option>
                        </select>
                        </div>
                    </TableFilter>
                </template>

                <tr v-for="item in demo">
                    <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                    <td class="text-left py-4 px-5">{{ item.name }}</td>
                    <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                    <td class="text-left py-4 px-5">
                        <Status classes="w-24 h-8 text-xs" :status="item.verification_status" />
                    </td>
                </tr>
            </Table>
        </div>

        <div v-show="change_of_ownership_modal" class="fixed inset-0 bg-black z-40 bg-opacity-50 px-24 2xl:px-72 pt-12 scrollbar scrollbar-thin scrollbar-thumb-transparent">
            <!--new owner form modal -->
            <div v-show="personalInfoModal" class="absolute bg-black inset-0 bg-opacity-70 px-24 2xl:px-72 pt-12 z-50">
                <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto w-full scrollbar scrollbar-thin scrollbar-thumb-transparent">
                    <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                        <div>
                            <h1 class="text-2xl font-semibold text-primary-900">New Owner Registration</h1>
                            <h2 :class="[step > 1 ? 'opacity-100' : 'opacity-0']" class="text-left text-tertiary-800 pt-2 ">{{ selectedCategory }}</h2>
                        </div>
                        <button @click="toggleOwnerModal" class="focus:outline-none">
                            <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class="flex-grow">
                        <form class="h-full flex flex-col">
                            <!-- wizard form timeline -->
                            <div class="text-xs font-medium text-tertiary-300 border-b relative bg-white">
                                <div class="py-4 text-center text-sm font-normal text-tertiary-600 capitalize">
                                    step {{ step }} of 4
                                </div>
                                <div class="w-full grid grid-cols-4 absolute -bottom-1">
                                    <div :class="[step >= 1 ? 'opacity-100' : 'opacity-0']" class="bg-primary-400 h-2"></div>
                                    <div :class="[step >= 2 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                                    <div :class="[step >= 3 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                                    <div :class="[step >= 4 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                                </div>
                            </div>
                            
                            <!-- form fieldset 1 -->
                            <fieldset v-show="step === 1" class="flex-grow px-16">
                                <h3 class="py-6 px-8 text-xl font-medium text-tertiary-600">Select Category</h3>
                                <div class="pt-8">
                                    <h2 class="text-center text-tertiary-600">Select Owner's Category</h2>
                                </div>
                                <div class="flex justify-center pt-10">
                                    <div>
                                        <div class="flex items-center">
                                            <div :class="[selectedCategory === 'Individaul' ? 'text-primary-400' : 'text-tertiary-500']" @click="selectCategory('Individaul')" class="text-center px-5 hover:text-primary-400 group">
                                                <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400">
                                                    <CategoryIcon type="user" />
                                                </div>
                                                <p class="text-xs py-3">Individaul</p>
                                            </div>
                                            <div :class="[selectedCategory === 'Business' ? 'text-primary-400' : 'text-tertiary-500']" @click="selectCategory('Business')" class="text-center px-5 hover:text-primary-400 group">
                                                <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400 ">
                                                    <CategoryIcon type="business" />
                                                </div>
                                                <p class="group-hover:text-primary-400 text-xs py-3">Business</p>
                                            </div>
                                            <div :class="[selectedCategory === 'Government' ? 'text-primary-400' : 'text-tertiary-500']" @click="selectCategory('Government')" class="text-center px-5 hover:text-primary-400 group">
                                                <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400">
                                                    <CategoryIcon type="government " />
                                                </div>
                                                <p class="group-hover:text-primary-400 text-xs py-3">Government</p>
                                            </div>
                                        </div>
                                        <div class="py-8">
                                            <InputWithButtonRight :onClick="next" v-show="selectedCategory === 'Individaul'" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter BVN/NIN" type="text" />
                                            <!-- error -->
                                            <p v-show="selectedCategory === 'Individaul'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            <InputWithButtonRight :onClick="next" v-show="selectedCategory === 'Business'" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter TIN/CRN" type="text" />
                                            <p v-show="selectedCategory === 'Business'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            <InputWithButtonRight :onClick="next" v-show="selectedCategory === 'Government'" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter Agency Id" type="text" />
                                            <p v-show="selectedCategory === 'Government'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <!-- form fieldset 2 -->
                            <fieldset v-show="step === 2" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                    <div class="col-span-3">
                                        <div class="py-8">
                                            <h3 class=" text-xl font-medium text-tertiary-600">Personal Information</h3>
                                            <p class="text-sm font-normal text-tertiary-300">Please fill-in all required ( <span class=" text-action-danger">*</span> ) input  field</p>
                                        </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                        <InputSelect isRequired="true" id="title" lable="Title"> 
                                            <option value="">Select Title</option>
                                        </InputSelect>

                                        <Input type="text" lable="First Name" place_holder="Enter First Name" id="first_name" isRequired="true" />

                                        <Input type="text" lable="Other Name" place_holder="Enter Other Name" id="other_name" isRequired="false" />

                                        <Input type="text" lable="Last Name" place_holder="Enter Last Name" id="last_name" isRequired="true" />

                                        <InputSelect isRequired="true" id="city" lable="City"> 
                                            <option value="">Select City</option>
                                        </InputSelect>

                                        <Input type="tel" lable="Phone Number" place_holder=" Enter Phone Number" id="phone_number" isRequired="true" />

                                        <Input type="text" lable="Local Government Area" place_holder=" Enter Lga" id="lga" isRequired="true" />

                                        <InputSelect isRequired="true" id="state" lable="State"> 
                                            <option value="">Select State</option>
                                        </InputSelect>
                                        
                                    </div>
                                </div>
                            </fieldset>
                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 3" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                    <div class="col-span-3">
                                        <div class="py-8">
                                            <h3 class=" text-xl font-medium text-tertiary-600">Demographic Information</h3>
                                            <p class="text-sm font-normal text-tertiary-300">Please fill-in all required (<span class=" text-action-danger">*</span>) input  field </p>
                                        </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                        <InputSelect isRequired="true" id="gender" lable="Gender"> 
                                            <option value="">Select Gender</option>
                                        </InputSelect>

                                        <Input type="date" lable="Date of Birth"  id="date_of_birth" isRequired="false" />

                                        <Input type="text" lable="Place of Birth" place_holder="Enter Place of Birth" id="place_of_birth" isRequired="false" />

                                        <InputSelect isRequired="true" id="marital_status" lable="Marital Status"> 
                                            <option value="">Select Marital Status</option>
                                        </InputSelect>

                                        <Input type="text" lable="Residential Address" place_holder="Enter Residential Address" id="residental_address" isRequired="false" />

                                        <Input type="email" lable="Email Address" place_holder="Enter Email Address" id="email" isRequired="false" />

                                        <InputSelect isRequired="true" id="nationality" lable="Nationality"> 
                                            <option value="">Select Nationality </option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="state" lable="State"> 
                                            <option value="">Select State </option>
                                        </InputSelect>
                                        
                                    </div>
                                </div>
                            </fieldset>

                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 4" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                <div class="col-span-2">
                                    <div class="py-8">
                                        <h3 class=" text-xl font-medium text-tertiary-600">Means of Identification</h3>
                                        <p class="text-sm font-normal text-tertiary-300">Please upload all required (<span class=" text-action-danger">*</span>) documents</p>
                                    </div>
                                    <div class=" grid grid-cols-2 gap-y-8 gap-x-10">

                                        <InputSelect isRequired="true" id="document_type" lable="Document Type"> 
                                            <option value="">Select Document</option>
                                        </InputSelect>

                                       <InputFile id="upload" place_holder=".docx" BtnTitle="Choose File" lable="Upload Document" isWithLabel="true" isRequired="true" type="file" />

                                       <div>
                                           <div class="flex justify-between pb-6">
                                               <p class="text-sm font-normal text-tertiary-600">National Identity Card <span class=" text-action-danger">*</span></p>

                                               <p class="text-tertiary-300">.docx</p>
                                           </div>
                                           <div class="flex justify-between pb-6">
                                               <p class="text-sm font-normal text-tertiary-600">Driver’s License<span class=" text-action-danger">*</span></p>

                                               <p class="text-tertiary-300">.docx</p>
                                           </div>
                                       </div>
                                        
                                    </div>
                                </div>
                            </fieldset>
                            <!-- navigatiom Button -->
                            <div class="flex justify-start items-center py-6 px-10 border-t">
                                <Button type="secondary" :onClick="previus" v-show="step > 1 && step < 5" class="mr-12 rounded-lg"  title="Previous"/>
                                <Button class="rounded-lg" type="solid" :onClick="next" v-show="step > 1 && step < 4"   title="Next"/>
                                <Button class="rounded-lg" :onClick="submitPersonaInfo" v-show="step > 3"  type="solid" title="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto scrollbar scrollbar-thin scrollbar-thumb-transparent">
                <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                    <h1 class="text-2xl font-semibold text-primary-900">Change Of Ownership Registration</h1>
                    <button @click.prevent="toggleChangeOfOwnershipModal" class="focus:outline-none">
                        <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                    </button>
                </div>
                <div class="flex-grow">
                    <form class="h-full flex flex-col">
                        <!-- wizard form timeline -->
                        <div class="text-sm font-medium text-tertiary-300 border-b relative">
                            <div class="py-4 capitalize text-center text-sm font-normal text-tertiary-600 ">
                                step {{ step }} of 4
                            </div>
                            <div class="w-full grid grid-cols-4 absolute -bottom-1">
                                <div :class="[step >= 1 ? 'opacity-100' : 'opacity-0']" class="bg-primary-400 h-2"></div>
                                <div :class="[step >= 2 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                                <div :class="[step >= 3 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                                <div :class="[step >= 4 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                            </div>
                        </div>
                        <!-- form fieldset 1 -->
                        <fieldset v-show="step === 1" class="flex-grow px-16">
                            <h3 class="py-6 pt-8 text-xl font-semibold text-tertiary-600">Vehicle ID</h3>
                            <div class=" pt-6 xl:pt-24">
                                <h2 class="text-center text-tertiary-600">Enter Vehicle ID</h2>
                            </div>
                            <div class="flex justify-center">
                                <div class=" max-w-162 w-full px-16">
                                    <div class="py-4 ">
                                        <InputWithButtonRight :onClick="next"  id="vehicle_id" BtnTitle="Continue" place_holder="Enter Vehicle ID" type="text" />
                                        <!-- error -->
                                        <p class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <!-- form fieldset 1 -->
                        <!-- form fieldset 3 -->
                        <fieldset v-show="step === 3" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                <div class="col-span-3">
                                    <div class="py-8">
                                        <h3 class=" text-xl font-medium text-tertiary-600">New Owner</h3>
                                    </div>
                                <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                    <div class="col-span-3">
                                        <p class="text-sm text-tertiary-300">Transfer Vehicle</p>
                                        <div class="py-3 flex items-center">
                                            <Button :onClick="toggleOwnerModal" class="mr-12 rounded-lg" title="New Owner" type="solid" />

                                            <Button :onClick="previus" class="rounded-lg" title="Existing Owner" type="solid" />
                                        </div>
                                    </div>
                                    <div class="col-span-2 pr-40">
                                        <div class="flex-grow py-6  text-sm text-tertiary-500 font-normal shadow rounded-lg px-6">
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Owner’s Name</p>
                                                <p class=" text-base text-primary-900 font-medium">Mr. Erinjobe A. Labaika</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Phone  Number</p>
                                                <p class=" text-base text-primary-900 font-medium">+2348012345678</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Emaill Address</p>
                                                <p class=" text-base text-primary-900 font-medium">everything.some@nothing.com</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Residential Address</p>
                                                <p class=" text-base text-primary-900 font-medium">Plot 134, Lorem ipsum</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Local Government Area</p>
                                                <p class=" text-base text-primary-900 font-medium">Ireposi South</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">City</p>
                                                <p class=" text-base text-primary-900 font-medium">Ikeja</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">State</p>
                                                <p class=" text-base text-primary-900 font-medium">Lagos</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>

                            </div>
                        </fieldset>

                        <!-- form fieldset 3 -->
                        <fieldset v-show="step === 4" class="flex-grow px-16 pb-10">
                            <div class="">
                                <!-- <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Vehicle License Review</h3>
                                </div> -->
                                <div class=" grid grid-cols-3 gap-y-8 gap-x-10 py-6">
                                    <div class="col-start-2 shadow px-6 rounded-xl flex flex-col min-h-105 h-full">
                                        <div class="text-center pt-4  mx-6 pb-4 flex-none text-tertiary-600 font-semibold">
                                            Payment Details
                                        </div>
                                        <div class="flex-grow border-b border-t flex-grow py-6 border-b text-sm text-tertiary-500 font-normal">
                                            <div class="flex justify-between items-center py-2">
                                                <p>Vehicle License</p>
                                                <p>#17500</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p>Road Worthiness</p>
                                                <p>#17500</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p>Radio License</p>
                                                <p>#17500</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p>Insurance</p>
                                                <p>#17500</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p>Registration Fee</p>
                                                <p>#17500</p>
                                            </div>
                                        </div>
                                        <div class="flex justify-between items-center pt-4 pb-4 flex-none text-tertiary-600 font-semibold">
                                            <p>Total</p>
                                            <p>#32,500</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>

                        <!-- form fieldset 3 -->
                        <fieldset v-show="step === 2" class="flex-grow px-16 pb-10 grid grid-cols-10">
                            <div class="col-span-8 mt-12 ">
                                <p class="text-left text-xl text-tertiary-500 pb-8">Vehicle Information</p>
                                <div class="grid grid-cols-2 gap-y-8 border py-5">
                                    <div class=" px-8 border-r">
                                        <div class="flex-grow py-6  text-sm text-tertiary-500 font-normal">
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Owner’s Name</p>
                                                <p class=" text-base text-primary-900 font-medium">Mr. Erinjobe A. Labaika</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Phone  Number</p>
                                                <p class=" text-base text-primary-900 font-medium">+2348012345678</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Emaill Address</p>
                                                <p class=" text-base text-primary-900 font-medium">everything.some@nothing.com</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Residential Address</p>
                                                <p class=" text-base text-primary-900 font-medium">Plot 134, Lorem ipsum</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Local Government Area</p>
                                                <p class=" text-base text-primary-900 font-medium">Ireposi South</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">City</p>
                                                <p class=" text-base text-primary-900 font-medium">Ikeja</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">State</p>
                                                <p class=" text-base text-primary-900 font-medium">Lagos</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" px-8 border-l">
                                        <div class="flex-grow py-6  text-sm text-tertiary-500 font-normal">
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Vehicle Type</p>
                                                <p class=" text-base text-primary-900 font-medium">Saloon Car</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Make</p>
                                                <p class=" text-base text-primary-900 font-medium">Toyota</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Model</p>
                                                <p class=" text-base text-primary-900 font-medium">Avensis</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Year of Manucfacture</p>
                                                <p class=" text-base text-primary-900 font-medium">2014</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Color</p>
                                                <p class=" text-base text-primary-900 font-medium">Wine</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Engine Number</p>
                                                <p class=" text-base text-primary-900 font-medium">3535612836234</p>
                                            </div>
                                            <div class="flex justify-between items-center py-2">
                                                <p class=" text-tertiary-300">Chasis Number</p>
                                                <p class=" text-base text-primary-900 font-medium">3535612836234</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <!-- navigatiom Button -->
                        <div v-show="step > 1" class="flex justify-start items-center py-6 px-10 border-t">
                            <Button type="secondary" :onClick="previus" v-show="step > 1" class="mr-12 rounded-lg"  title="Previus"/>
                            <Button class="rounded-lg" type="solid" :onClick="next" v-show="step > 1 && step < 4"  title="Next"/>
                            <Button :onClick="submitPersonaInfo" v-show="step > 3" class="rounded-lg" type="solid" title="Submit"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Table from '~/components/Table.vue';
    import Status from '~/components/Status.vue';
    import TableFilter from '~/components/TableFilter.vue';
    import BreadCrumb from "~/components/BreadCrumb.vue"
    import InputWithButtonRight from "~/components/form/InputWithButtonRight.vue"
    import InputFile from "~/components/form/InputFile.vue"
    import InputSelect from "~/components/form/InputSelect.vue"
    import Input from "~/components/form/Input.vue"
    import Button from "~/components/Button.vue"
    import { mapState } from 'vuex'
    export default {
        components: {
            Table,
            Status,
            TableFilter,
            BreadCrumb,
            InputWithButtonRight,
            InputSelect,
            Input,
            InputFile,
            Button
        },
        data() {
            return {
                table_head_data: ['Unique Id #', 'Business Name', 'City',  'Verification Status'],
                personalInfoModal: false,
                vehicleInfoModal: false,
                step: 1,
                selectedCategory: '',
                toggle_filter: false,
                change_of_ownership_modal: false
            }
        },
        computed: {
            ...mapState({
                demo: state => state.demo,
            })
        },
        methods: {
            next() {
                this.step+= 1
            },
            previus() {
                if(this.step === 1 ) {
                    return this.step
                }
                this.step-= 1
            },
            toggleFilterFunc() {
                this.toggle_filter = !this.toggle_filter
            },
            toggleChangeOfOwnershipModal(){
                this.change_of_ownership_modal = !this.change_of_ownership_modal
            },
            submitPersonaInfo() {

            },
            selectCategory(category) {
                this.selectedCategory = category
            },
            toggleOwnerModal () {
                this.personalInfoModal = !this.personalInfoModal
            }
        }
    }
</script>