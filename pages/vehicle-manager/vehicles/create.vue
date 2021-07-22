<template>
    <div class=" absolute inset-0 bg-white z-40 ">
        <div class="container mx-auto 2xl:px-24 flex flex-col py-10 2xl:py-16 h-screen">
            <div class="pb-8 2xl:pb-12 flex-none">
                <h1 class="text-2xl font-medium text-primary-900">New Registration</h1>
            </div>
            <div class=" bg-tertiary-100 flex-grow p-10">
                <div class="grid grid-cols-2">
                   <div class="h-full">
                        <div class="flex items-center relative">
                            <div class="h-full pl-1">
                                <img class="" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                <div class="absolute -bottom-16 2xl:-bottom-24 left-4 h-full 2xl:py-3 pt-5">
                                    <div class="h-full border-r border-tertiary-600">

                                    </div>
                                </div>
                            </div>
                            <div class="my-4 2xl:my-6">
                                <h4 class="pb-3 text-center font-medium text-tertiary-600">Owner Details</h4>
                                <div class="w-80 2xl:w-100 h-20 2xl:h-28 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5">
                                    <Button :onClick="submitPersonaInfo" class="2xl:mr-12" type="solid" title="New owner"/>
                                    <Button :onClick="toggleExistigOwnerModal" type="secondary"  title="Existing owner"/>
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center relative">
                            <div class="h-full pl-1">
                                <img class="" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                <div class="absolute -bottom-16 2xl:-bottom-24 left-4 h-full 2xl:py-3 pt-5">
                                    <div class="h-full border-r border-tertiary-600">

                                    </div>
                                </div>
                            </div>
                            <div class="my-4 2xl:my-6">
                                <h4 class="pb-3 text-center font-medium text-tertiary-600">Vehicle Details</h4>
                                <div class="w-80 2xl:w-100 h-20 2xl:h-28 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5 ">
                                    <Button :onClick="togglevehicleModal" class="" type="solid" title="New Vehicle"/>
                                    <!-- <Button type="secondary" title="Existing owner"/> -->
                                </div>
                            </div>
                        </div>
                        <div class="flex items-center">
                            <div class="pl-1">
                                <img src="~/assets/icons/check-mark.svg" alt="" srcset="">
                            </div>
                            <div class="my-4 2xl:my-6">
                                <h4 class="pb-3 text-center font-medium text-tertiary-600">Plate Number</h4>
                                <div class="w-80 2xl:w-100 h-20 2xl:h-28 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5">
                                    <Button class="" type="solid" title="Plate Number"/>
                                    <!-- <Button type="secondary" title="Existing owner"/> -->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="2xl:ml-20 h-full">
                        <div class="w-full bg-white rounded-xl px-8 h-full flex flex-col">
                            <h3 class="p-6 border-b text-center text-tertiary-500 font-medium flex-none text-sm">
                                Payment Details
                            </h3>
                            <div class="flex-grow py-6 border-b text-sm text-tertiary-500 font-normal">
                                <div class="flex justify-between items-center py-3">
                                    <p>Vehicle License</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Road Worthiness</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Radio License</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Insurance</p>
                                    <p>#17500</p>
                                </div>
                                <div class="flex justify-between items-center py-3">
                                    <p>Registration Fee</p>
                                    <p>#17500</p>
                                </div>
                            </div>
                            <div class="py-6 text-sm text-tertiary-500 font-normal">
                                <div class="flex items-center justify-between">
                                    <p>Total</p>
                                    <p>#17500</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="flex justify-end items-center pt-10">
                    <Button class="mr-12" type="solid" title="Processed To Payment"/>
                    <Button type="secondary"  title="Cancle"/>
                </div>
            </div>
        </div>
        <!--new owner form modal -->
        <div v-show="personalInfoModal" class=" absolute inset-0 bg-tertiary-600 z-40 overflow-hidden py-10">
            <div class="container mx-auto px-12 2xl:px-24 flex flex-col bg-white 2xl:py-12 py-6 h-full rounded-lg">
                <div class="2xl:pb-12 pb-6 flex-none">
                    <h1 class="text-2xl font-medium text-primary-900">New Registration</h1>
                </div>
                <div class=" border border-t-0 border-tertiary-400 rounded flex-grow">
                    <forn class="h-full flex flex-col">
                        <!-- wizard form timeline -->
                        <div class="grid grid-cols-3 text-xs font-medium text-tertiary-300">
                            <!-- completed -->
                            <div :class="[step > 0 ? completedClass : '', step === 0 ? activeClass : '']" class="border flex items-center justify-center rounded-tl py-5  ">
                                <div class="mr-4">
                                    <Icons class="w-4" type="check-mark" />
                                </div>
                                <p>Select Category</p>
                            </div>
                            <!-- active -->
                            <div :class="[step > 1 ? completedClass : '', step === 1 ? activeClass : '']"  class="border  flex items-center justify-center  py-5">
                                <div class="mr-4">
                                    <Icons class="w-4" type="check-mark" />
                                </div>
                                <p>Personal Information</p>
                            </div>
                            <div :class="[step > 2 ? completedClass : '', step === 2 ? activeClass : '']" class="border border-l-0 border-tertiary-300 flex items-center justify-center  py-5 rounded-tr">
                                <div class="mr-4">
                                    <Icons class="w-4" type="check-mark" />
                                </div>
                                <p>DEMOGRAPHIC INFORMATION</p>
                            </div>
                            <!-- <div class="border border-l-0 border-r-0 border-tertiary-300 flex items-center justify-center  py-5 rounded-tr-xl">
                                <img class="w-4 mr-3" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                <p>MEANS OF IDENTIFICATION</p>
                            </div> -->
                        </div>
                        <!-- form fieldset 0 -->
                        <fieldset v-show="step === 0" class="flex-grow px-16 pt-12">
                            <div>
                                <h2 class="text-center text-tertiary-600">Select Owner's Category</h2>
                            </div>
                            <div class="flex justify-center pt-10">
                                <div class="flex items-center">
                                    <div class="text-center px-5 hover:text-primary-400 group">
                                        <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400 text-tertiary-500">
                                            <CategoryIcon type="user" />
                                        </div>
                                        <p class="text-tertiary-500 group-hover:text-primary-400 text-xs py-3">Individaul</p>
                                    </div>
                                    <div class="text-center px-5 hover:text-primary-400 group">
                                        <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400 text-tertiary-500">
                                            <CategoryIcon type="business" />
                                        </div>
                                        <p class="text-tertiary-500 group-hover:text-primary-400 text-xs py-3">Individaul</p>
                                    </div>
                                    <div class="text-center px-5 hover:text-primary-400 group">
                                        <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400 text-tertiary-500">
                                            <CategoryIcon type="government " />
                                        </div>
                                        <p class="text-tertiary-500 group-hover:text-primary-400 text-xs py-3">Individaul</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <!-- form fieldset 1 -->
                        <fieldset v-show="step === 1" class="flex-grow px-16 py-10">
                            <div class="grid grid-cols-4 gap-y-10 gap-x-10">
                                <div class="flex flex-col w-full">
                                    <label for="title" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Title <span class="text-red-500">*</span></label>
                                    <select id="title"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Prifix</option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="first_name" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">First Name <span class="text-red-500">*</span></label>
                                    <input type="text" id="first_name"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="First Name" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="other_name" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Other Name <span class="text-red-500">*</span></label>
                                    <input type="text" id="other_name"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Other Name" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="last_name" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Last Name <span class="text-red-500">*</span></label>
                                    <input type="text" id="last_name" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Last Name" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="address" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Residential Adderss <span class="text-red-500">*</span></label>
                                    <input type="text" id="address"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Residential Adderss" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="phone_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Phone Number <span class="text-red-500">*</span></label>
                                    <input type="tel" id="phone_number" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Phone Number" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="email" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Email <span class="text-red-500">*</span></label>
                                    <input type="email" id="email"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Email" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="state" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">State <span class="text-red-500">*</span></label>
                                    <input type="text" id="state" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="State" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="city" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">City <span class="text-red-500">*</span></label>
                                    <input type="text" id="city"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="lga" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Local Government Area <span class="text-red-500">*</span></label>
                                    <input type="text" id="lga"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Local Government Area" />
                                </div>
                                
                            </div>
                        </fieldset>
                        <!-- form fieldset 2 -->
                        <fieldset v-show="step === 2" class="flex-grow px-16 py-10">
                            <div class="grid grid-cols-4 gap-y-10 gap-x-10">
                                <div class="flex flex-col w-full">
                                    <label for="gender" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Gender <span class="text-red-500">*</span></label>
                                    <input type="text" id="gender"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Gender" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="nationality" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Nationality <span class="text-red-500">*</span></label>
                                    <input type="text" id="nationality"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Nationality" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="state_of_origin" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">State Of Origin <span class="text-red-500">*</span></label>
                                    <input type="text" id="state_of_origin" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="State Of Origin" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="date_of_birth" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Date Of Birth <span class="text-red-500">*</span></label>
                                    <input type="date" id="date_of_birth" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Date Of Birth" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="marital_status" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Marital Status <span class="text-red-500">*</span></label>
                                    <select id="marital_status" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Marital Status">
                                        <option value="">Select Marital Status</option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="place_of_birth" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Place Of Birth <span class="text-red-500">*</span></label>
                                    <input type="text" id="place_of_birth" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example" />
                                </div>
                            </div>
                        </fieldset>
                        <!-- navigatiom Button -->
                        <div class="flex justify-end items-center py-6 px-10">
                            <Button :onClick="previus" v-show="step > 0 && step < 2" class="mr-12" type="solid" title="Previus"/>
                            <Button :onClick="next" v-show="step < 2" type="secondary"  title="Next"/>
                            <Button :onClick="submitPersonaInfo" v-show="step > 1" class="" type="solid" title="Submit"/>
                        </div>
                    </forn>
                </div>
            </div>
        </div>
        <!--existing owner form modal -->
        <div v-show="existingOwnModal" class=" absolute inset-0 bg-tertiary-600 z-40 overflow-hidden py-10">
            <div class="container mx-auto px-12 2xl:px-24 flex flex-col bg-white 2xl:py-12 py-6 h-full rounded-lg">
                <div class="2xl:pb-12 pb-6 flex-none">
                    <h1 class="text-2xl font-medium text-primary-900">New Registration</h1>
                </div>
                <div class=" shadow border-tertiary-400 rounded flex-grow">
                    <forn class="h-full flex justify-center pt-32">
                        <div class="flex flex-col md:py-0 py-4">
                            <label for="email3" class="dark:text-gray-100 text-sm leading-tight tracking-normal mb-2 font-normal text-center pb-3 text-tertiary-600">Input Existing Owner Unique ID</label>
                            <div class="relative flex items-center">
                                
                                <input id="email3" class="text-tertiary-300 dark:text-gray-400 focus:outline-none focus:border focus:border-primary-400 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal py-3 flex items-center pl-6 text-sm rounded-l border border-r-0 w-96" placeholder="Pass through" />
                                <button @click="toggleExistigOwnerModal" class="text-white text-sm flex items-center px-10 py-3 border-r dark:border-gray-700 h-full bg-primary-400 dark:bg-indigo-600 rounded-r cursor-pointer focus:outline-none">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </forn>
                </div>
            </div>
        </div>

        <!--new owner form modal -->
        <div v-show="vehicleInfoModal" class=" absolute inset-0 bg-tertiary-600 z-40 overflow-hidden py-10">
            <div class="container mx-auto px-12 2xl:px-24 flex flex-col bg-white 2xl:py-12 py-6 h-full rounded-lg">
                <div class="2xl:pb-12 pb-6 flex-none">
                    <h1 class="text-2xl font-medium text-primary-900">New Registration</h1>
                </div>
                <div class=" border border-t-0 border-tertiary-400 rounded flex-grow">
                    <forn class="h-full flex flex-col">
                        <!-- wizard form timeline -->
                        <div class="grid grid-cols-2 text-xs font-medium text-tertiary-300 flex-none">
                            <!-- completed -->
                            <div :class="[step > 0 ? completedClass : '', step === 0 ? activeClass : '']" class="border flex items-center justify-center rounded-tl py-5  ">
                                <div class="mr-4">
                                    <Icons class="w-4" type="check-mark" />
                                </div>
                                <p>Vehicle Deatils</p>
                            </div>
                            <!-- active -->
                            <div :class="[step > 1 ? completedClass : '', step === 1 ? activeClass : '']"  class="border  flex items-center justify-center  py-5">
                                <div class="mr-4">
                                    <Icons class="w-4" type="check-mark" />
                                </div>
                                <p>Vehicle License</p>
                            </div>
                            
                            <!-- <div class="border border-l-0 border-r-0 border-tertiary-300 flex items-center justify-center  py-5 rounded-tr-xl">
                                <img class="w-4 mr-3" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                <p>MEANS OF IDENTIFICATION</p>
                            </div> -->
                        </div>
                        <!-- form fieldset 0 -->
                        <fieldset v-show="step === 0" class="flex-grow px-16 py-10">
                            <div class="grid grid-cols-4 gap-y-10 gap-x-10">
                                <div class="flex flex-col w-full">
                                    <label for="vehicle_category" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-g ray-100">Vehicle Category <span class="text-red-500">*</span></label>
                                    <select id="vehicle_category"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Category</option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="vehicle_make" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Vehicle Make <span class="text-red-500">*</span></label>
                                    <select id="vehicle_make"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Vehicle Make </option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="vehicle_model" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Vehicle Model <span class="text-red-500">*</span></label>
                                    <select id="vehicle_modelz"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Vehicle Model </option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="seat_code" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Seat Code <span class="text-red-500">*</span></label>
                                    <select id="seat_codez"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Vehicle Seat Code </option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="vehicle_year" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Year of Manufacture<span class="text-red-500">*</span></label>
                                    <select id="vehicle_year"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Year </option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="vehicle_color" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Color <span class="text-red-500">*</span></label>
                                    <input type="text" id="vehicle_color"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Color" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="plate_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Plate Number <span class="text-red-500">*</span></label>
                                    <input type="text" id="plate_number"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Plate Number" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="mileage" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Mileage<span class="text-red-500">*</span></label>
                                    <select id="mileage"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Mileage </option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="vehicle_type" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Vehicle Type<span class="text-red-500">*</span></label>
                                    <select id="vehicle_type"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Vehicle Type </option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="engine_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Engine number <span class="text-red-500">*</span></label>
                                    <input type="text" id="engine_number" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Engine number" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="chasis_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Chasis number<span class="text-red-500">*</span></label>
                                    <input type="text" id="chasis_number"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Chasis number" />
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="tank_capacity" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Tank Capacity<span class="text-red-500">*</span></label>
                                    <select id="tank_capacity"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Tank Capacity</option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="state_of_plate_number_allocation" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">State of Plate Number Allocation *<span class="text-red-500">*</span></label>
                                    <select id="state_of_plate_number_allocation"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select State of Plate Number Allocation</option>
                                    </select>
                                </div>
                                <div class="flex flex-col w-full">
                                    <label for="engine_capacity" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Engine Capacity *<span class="text-red-500">*</span></label>
                                    <select id="engine_capacity"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                        <option value="">Select Engine Capacity *</option>
                                    </select>
                                </div>
                            </div>
                        </fieldset>
                        <!-- form fieldset 2 -->
                        <fieldset v-show="step === 1" class="flex-grow px-16 py-10 overflow-y-auto">
                            
                        </fieldset>
                        <!-- navigatiom Button -->
                        <div class="flex justify-end items-center py-6 px-10 flex-none">
                            <Button :onClick="previus" v-show="step > 0 && step < 1" class="mr-12" type="solid" title="Previus"/>
                            <Button :onClick="next" v-show="step < 1" type="secondary"  title="Next"/>
                            <Button :onClick="togglevehicleModal" v-show="step > 0" class="" type="solid" title="Submit"/>
                        </div>
                    </forn>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
import Button from '~/components/Button.vue'
import CategoryIcon from '~/components/CategoryIcon.vue'
import Icons from '~/components/Icons.vue'
export default {
    components: {
        Button,
        CategoryIcon,
        Icons
    },
    data () {
        return {
            step: 0,
            personalInfoModal: false,
            existingOwnModal: false,
            vehicleInfoModal: false,
            completedClass: 'border-l-0 border-primary-400 bg-primary-400 text-white',
            activeClass: 'border-tertiary-600'
        }
    },
    methods: {
        next() {
            this.step+= 1
        },
        previus() {
            if(this.step === 0 ) {
                return this.step
            }
            this.step-= 1
        },
        submitPersonaInfo() {
            this.personalInfoModal = !this.personalInfoModal
            this.step = 0
        },
        toggleExistigOwnerModal () {
            this.existingOwnModal = !this.existingOwnModal
        },
        togglevehicleModal () {
            this.vehicleInfoModal = !this.vehicleInfoModal
        }
    }
    
}
</script>