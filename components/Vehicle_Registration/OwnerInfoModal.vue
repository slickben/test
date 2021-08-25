<template>
    <!--new owner form modal -->
    <div class="absolute bg-black inset-0 bg-opacity-70 px-24 2xl:px-72 pt-12 "> 
        <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto w-full">
            <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                <div>
                    <h1 class="text-2xl font-semibold text-primary-900">New Owner Registration</h1>
                    <h2 :class="[step > 1 ? 'opacity-100' : 'opacity-0']" class="text-left text-tertiary-800 pt-2 ">{{ selectedCategory }}</h2>
                </div>
                <button @click="onclick" class="focus:outline-none">
                    <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                </button>
            </div>
            <div class="flex-grow">
                <form class="h-full flex flex-col">
                    <!-- wizard form timeline -->
                    <div class="text-xs font-medium text-tertiary-300 border-b relative">
                        <div class="py-4 text-center text-sm font-normal text-tertiary-600 ">
                            step {{ step }} of 3
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
                        <div class="grid grid-cols-2">
                            <div>
                                <h3 class="py-6 px-8 text-xl font-medium text-tertiary-600">Exiting Owner</h3>
                                <div class="pl-6 px-20 pt-40">
                                    <InputWithButtonRight v-model="individualOwnerForm.bvn" :onClick="next" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter BVN/NIN" type="text" />
                                    <!-- error -->
                                    <p class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                </div>
                            </div>
                            <div>
                                <h3 class="py-6 px-8 text-xl font-medium text-tertiary-600">New Owner</h3>
                                <div class="pt-8">
                                    <h2 class="text-center text-tertiary-600">Select Owner's Category</h2>
                                </div>
                                <div class="flex justify-center pt-10">
                                    <div>
                                        <div class="flex items-center">
                                            <div :class="[selectedCategory === 'Individual' ? 'text-primary-400' : 'text-tertiary-500']" @click="selectCategory('Individual')" class="text-center px-5 hover:text-primary-400 group">
                                                <div class="border border-tertiary-200 rounded-2xl p-8 group-hover:text-primary-400">
                                                    <CategoryIcon type="user" />
                                                </div>
                                                <p class="text-xs py-3">Individual</p>
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
                                            <InputWithButtonRight v-model="individualOwnerForm.bvn" :onClick="next" v-show="selectedCategory === 'Individual'" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter BVN/NIN" type="text" />
                                            <!-- error -->
                                            <p v-show="selectedCategory === 'Individual'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            <InputWithButtonRight v-model="businessOwnerForm.tin" :onClick="next" v-show="selectedCategory === 'Business'" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter TIN/CRN" type="text" />
                                            <p v-show="selectedCategory === 'Business'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            <InputWithButtonRight v-model="governmentOwnerForm.agencyId" :onClick="next" v-show="selectedCategory === 'Government'" id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter Agency Id" type="text" />
                                            <p v-show="selectedCategory === 'Government'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <!-- form fieldset 2 -->
                    <fieldset v-show="step === 2 && selectedCategory === 'Individual'" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Personal Information</h3>
                                    <p class="text-sm font-normal text-tertiary-300">Please fill-in all required ( <span class=" text-action-danger">*</span> ) input  field</p>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                <div>
                                    <InputSelect v-model="individualOwnerForm.title" isRequired="true" id="title" lable="Title"> 
                                        <option value="">Select Title</option>
                                        <option v-for="(prefix, index) in prefixs" :key="index" :value="prefix.name">{{ prefix.name }}</option>
                                    </InputSelect>
                                    <p v-show="errors.title" class="text-sm pt-1 text-action-danger"> {{ errors.title }} </p>
                                </div>

                                <div>
                                    <Input v-model="individualOwnerForm.firstName" type="text" lable="First Name" place_holder="Enter First Name" id="first_name" isRequired="true" />
                                    <p v-show="errors.firstName" class="text-sm pt-1 text-action-danger"> {{ errors.firstName }} </p>
                                </div>

                                <div>
                                    <Input v-model="individualOwnerForm.otherName" type="text" lable="Other Name" place_holder="Enter Other Name" id="other_name" isRequired="false" />
                                    <p v-show="errors.otherName" class="text-sm pt-1 text-action-danger"> {{ errors.otherName }} </p>
                                </div>

                                <div>
                                    <Input v-model="individualOwnerForm.lastName" type="text" lable="Last Name" place_holder="Enter Last Name" id="last_name" isRequired="true" />
                                    <p v-show="errors.lastName" class="text-sm pt-1 text-action-danger"> {{ errors.lastName }} </p>
                                </div>
                                

                                

                                <div>
                                    <div class="flex flex-col w-full">
                                        <label for="state" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100"> State <span  class="text-red-500">*</span></label>
                                        <select v-model="individualOwnerForm.state" @change="getSelectedState($event)"  id="state" required class="border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" >
                                            <option value="">Select State</option>
                                            <option v-for="(state, index) in states" :key="index" :value="state.name"> {{ state.name }} </option>
                                        </select>
                                    </div>
                                    <p v-show="errors.state" class="text-sm pt-1 text-action-danger"> {{ errors.state }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="individualOwnerForm.city" isRequired="true" id="city" lable="City"> 
                                        <option value="">Select City</option>
                                        <option v-for="(state, index) in states" :key="index" :value="state.name"> {{ state.name }} </option>
                                    </InputSelect>
                                    <p v-show="errors.city" class="text-sm pt-1 text-action-danger"> {{ errors.city }} </p>
                                </div>

                                <div>
                                    <Input v-model="individualOwnerForm.phoneNumber" type="tel" lable="Phone Number" place_holder=" Enter Phone Number" id="phone_number" isRequired="true" />
                                    <p v-show="errors.phoneNumber" class="text-sm pt-1 text-action-danger"> {{ errors.phoneNumber }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="individualOwnerForm.lga" isRequired="true" id="lga"> 
                                        <option value="">Select Local Government Area</option>
                                        <option v-for="(lga, index) in selectedLgas" :key="index" :value="lga.name"> {{ lga.name }} </option>
                                    </InputSelect>
                                    <p v-show="errors.lga" class="text-sm pt-1 text-action-danger"> {{ errors.lga }} </p>
                                </div>
                                
                            </div>
                        </div>
                    </fieldset>

                    <fieldset v-show="step === 2 && selectedCategory === 'Business'" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Business Information</h3>
                                    <p class="text-sm font-normal text-tertiary-300">Please fill-in all required ( <span class=" text-action-danger">*</span> ) input  field</p>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                <!-- <InputSelect v-model="businessOwnerForm.businessName" isRequired="true" id="business_name" > 
                                    <option value="">Select Title</option>
                                </InputSelect> -->

                                <div>
                                    <Input v-model="businessOwnerForm.businessName" type="text" lable="Business Name" place_holder="Enter Business Name" id="business_name" isRequired="true" />
                                    <p v-show="errors.businessName" class="text-sm pt-1 text-action-danger"> {{ errors.businessName }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.registrationNumber" type="number" lable="Business Registration Number" place_holder="Enter Business Registration Number" id="reg_number" isRequired="false" />
                                    <p v-show="errors.registrationNumber" class="text-sm pt-1 text-action-danger"> {{ errors.registrationNumber }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.tin" type="text" lable="Tax Identification Number" place_holder="Enter TIN" id="tin" isRequired="true" />
                                    <p v-show="errors.tin" class="text-sm pt-1 text-action-danger"> {{ errors.tin }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="businessOwnerForm.businessSector" isRequired="true" id="business_sector" lable="Business Sector"> 
                                        <option value="">Select Business Sector</option>
                                        <option v-for="(busines_sector, index) in busines_sectors" :value="busines_sector" :key="index">{{busines_sector}}</option>
                                    </InputSelect>
                                    <p v-show="errors.businessSector" class="text-sm pt-1 text-action-danger"> {{ errors.businessSector }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.emailAddress" type="email" lable="Email Address" place_holder=" Enter Phone Number" id="email" isRequired="true" />
                                    <p v-show="errors.emailAddress" class="text-sm pt-1 text-action-danger"> {{ errors.emailAddress }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.phoneNumber" type="tel" lable="Phone Number" place_holder=" Enter Phone Number" id="phone_number" isRequired="true" />
                                    <p v-show="errors.phoneNumber" class="text-sm pt-1 text-action-danger"> {{ errors.phoneNumber }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.street" type="text" lable="Address" place_holder=" Enter Address" id="street" isRequired="true" />
                                    <p v-show="errors.street" class="text-sm pt-1 text-action-danger"> {{ errors.street }} </p>
                                </div>

                                <div>
                                    <div class="flex flex-col w-full">
                                        <label for="state" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100"> State <span  class="text-red-500">*</span></label>
                                        <select v-model="businessOwnerForm.state" @change="getSelectedState($event)"  id="state" required class="border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" >
                                            <option value="">Select State</option>
                                            <option v-for="(state, index) in states" :key="index" :value="state.name"> {{ state.name }} </option>
                                        </select>
                                    </div>
                                    <p v-show="errors.state" class="text-sm pt-1 text-action-danger"> {{ errors.state }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="businessOwnerForm.lga" isRequired="true" id="lga"> 
                                        <option value="">Select Local Government Area</option>
                                        <option v-for="(lga, index) in selectedLgas" :key="index" :value="lga.name"> {{ lga.name }} </option>
                                    </InputSelect>
                                    <p v-show="errors.lga" class="text-sm pt-1 text-action-danger"> {{ errors.lga }} </p>
                                </div>
                                
                            </div>
                        </div>
                    </fieldset>

                    <fieldset v-show="step === 2 && selectedCategory === 'Government'" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Agency Information</h3>
                                    <p class="text-sm font-normal text-tertiary-300">Please fill-in all required ( <span class=" text-action-danger">*</span> ) input  field</p>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                <!-- <InputSelect v-model="businessOwnerForm.businessName" isRequired="true" id="business_name" > 
                                    <option value="">Select Title</option>
                                </InputSelect> -->

                                <div>
                                    <Input v-model="governmentOwnerForm.agencyName" type="text" lable="Agency Name" place_holder="Enter Agency Name" id="agency_name" isRequired="true" />
                                    <p v-show="errors.agencyName" class="text-sm pt-1 text-action-danger"> {{ errors.agencyName }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="governmentOwnerForm.agencyType" isRequired="true" id="agency_type" lable="Agency Type">
                                        <option value="">Select Agency type</option>
                                        <option v-for="(agency_categorie, index) in agency_categories" :value="agency_categorie.name">{{agency_categorie.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.agencyType" class="text-sm pt-1 text-action-danger"> {{ errors.agencyType }} </p>
                                </div>

                                <div>
                                    <Input v-model="governmentOwnerForm.emailAddress" type="email" lable="Email Address" place_holder=" Enter Phone Number" id="email" isRequired="true" />
                                    <p v-show="errors.emailAddress" class="text-sm pt-1 text-action-danger"> {{ errors.emailAddress }} </p>
                                </div>

                                <div>
                                    <Input v-model="governmentOwnerForm.phoneNumber" type="tel" lable="Phone Number" place_holder=" Enter Phone Number" id="phone_number" isRequired="true" />
                                    <p v-show="errors.phoneNumber" class="text-sm pt-1 text-action-danger"> {{ errors.phoneNumber }} </p>
                                </div>

                                <div>
                                    <Input v-model="governmentOwnerForm.street" type="text" lable="Address" place_holder=" Enter Address" id="street" isRequired="true" />
                                    <p v-show="errors.street" class="text-sm pt-1 text-action-danger"> {{ errors.street }} </p>
                                </div>

                                <div>
                                    <div class="flex flex-col w-full">
                                        <label for="state" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100"> State <span  class="text-red-500">*</span></label>
                                        <select v-model="governmentOwnerForm.state" @change="getSelectedState($event)"  id="state" required class="border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" >
                                            <option value="">Select State</option>
                                            <option v-for="(state, index) in states" :key="index" :value="state.name"> {{ state.name }} </option>
                                        </select>
                                    </div>
                                    <p v-show="errors.state" class="text-sm pt-1 text-action-danger"> {{ errors.state }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="governmentOwnerForm.lga" isRequired="true" id="lga" lable="Local Government Area"> 
                                        <option value="">Select Local Government Area</option>
                                        <option v-for="(lga, index) in selectedLgas" :key="index" :value="lga.name"> {{ lga.name }} </option>
                                    </InputSelect>
                                    <p v-show="errors.lga" class="text-sm pt-1 text-action-danger"> {{ errors.lga }} </p>
                                </div>

                                <div>
                                    <Input v-model="governmentOwnerForm.landmark" type="text" lable="Nearest Landmark" place_holder=" Enter Nearest Landmark" id="street" isRequired="true" />
                                    <p v-show="errors.landmark" class="text-sm pt-1 text-action-danger"> {{ errors.landmark }} </p>
                                </div>
                                
                            </div>
                        </div>
                    </fieldset>
                    <!-- form fieldset 3 -->
                    <fieldset v-show="step === 3 && selectedCategory === 'Individual'" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Demographic Information</h3>
                                    <p class="text-sm font-normal text-tertiary-300">Please fill-in all required (<span class=" text-action-danger">*</span>) input  field </p>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                <div>
                                    <InputSelect v-model="individualOwnerForm.gender" isRequired="true" id="gender" lable="Gender"> 
                                        <option value="">Select Gender</option>

                                        <option v-for="(gender, index) in genders" :value="gender.name" :key="index">{{ gender.name }}</option>
                                    </InputSelect>
                                    <p v-show="errors.gender" class="text-sm pt-1 text-action-danger"> {{ errors.gender }} </p>
                                </div>

                                <div>
                                    <Input type="date" v-model="individualOwnerForm.dateOfBirth" lable="Date of Birth"  id="date_of_birth" isRequired="false" />
                                    <p v-show="errors.dateOfBirth" class="text-sm pt-1 text-action-danger"> {{ errors.dateOfBirth }} </p>
                                </div>

                                <!-- <Input type="text" v-model="individualOwnerForm.placeOfBirth" lable="Place of Birth" place_holder="Enter Place of Birth" id="place_of_birth" isRequired="false" /> -->

                                <div>
                                    <InputSelect v-model="individualOwnerForm.maritalStatus" isRequired="true" id="marital_status" lable="Marital Status"> 
                                        <option  value="">Select Marital Status</option>
                                        <option v-for="(marital_statuse, index) in marital_statuses" :value="marital_statuse.name"> {{ marital_statuse.name }} </option>
                                    </InputSelect>
                                    <p v-show="errors.maritalStatus" class="text-sm pt-1 text-action-danger"> {{ errors.maritalStatus }} </p>
                                </div>

                                <div>
                                    <Input type="text" v-model="individualOwnerForm.street" lable="Street Address" place_holder="Enter Street Address" id="street_address" isRequired="false" />
                                    <p v-show="errors.street" class="text-sm pt-1 text-action-danger"> {{ errors.street }} </p>
                                </div>

                                <div>
                                    <Input v-model="individualOwnerForm.email" type="email" lable="Email Address" place_holder="Enter Email Address" id="email" isRequired="false" />
                                    <p v-show="errors.email" class="text-sm pt-1 text-action-danger"> {{ errors.email }} </p>
                                </div>

                                <!-- <InputSelect isRequired="true" id="nationality" lable="Nationality"> 
                                    <option value="">Select Nationality </option>
                                </InputSelect> -->

                                <!-- <InputSelect v-model="individualOwnerForm." isRequired="true" id="state" lable="State"> 
                                    <option value="">Select State Of Origin</option>
                                </InputSelect> -->
                                
                            </div>
                        </div>
                    </fieldset>

                    <fieldset v-show="step === 3 && selectedCategory === 'Business'" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Representative Information</h3>
                                    <p class="text-sm font-normal text-tertiary-300">Please fill-in all required ( <span class=" text-action-danger">*</span> ) input  field</p>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                <div>
                                    <InputSelect v-model="businessOwnerForm.title" isRequired="true" id="title" lable="Title"> 
                                        <option value="">Select Title</option>
                                        <option v-for="(prefix, index) in prefixs" :key="index" :value="prefix.name">{{ prefix.name }}</option>
                                    </InputSelect>
                                    <p v-show="errors.title" class="text-sm pt-1 text-action-danger"> {{ errors.title }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.firstName" type="text" lable="First Name" place_holder="Enter First Name" id="first_name" isRequired="true" />
                                    <p v-show="errors.firstName" class="text-sm pt-1 text-action-danger"> {{ errors.firstName }} </p>
                                </div>

                                <!-- <Input v-model="businessOwnerForm.otherName" type="text" lable="Other Name" place_holder="Enter Other Name" id="other_name" isRequired="false" /> -->

                                <div>
                                    <Input v-model="businessOwnerForm.lastName" type="text" lable="Last Name" place_holder="Enter Last Name" id="last_name" isRequired="true" />
                                    <p v-show="errors.lastName" class="text-sm pt-1 text-action-danger"> {{ errors.lastName }} </p>
                                </div>
                                

                                <div>
                                    <Input v-model="individualOwnerForm.landmark" type="text" lable="Nearest Landmark" place_holder=" Enter Nearest Landmark" id="street" isRequired="true" />
                                    <p v-show="errors.landmark" class="text-sm pt-1 text-action-danger"> {{ errors.landmark }} </p>
                                </div>

                                <div>
                                    <Input v-model="businessOwnerForm.city" type="text" isRequired="true" id="city" lable="city" /> 
                                    <p v-show="errors.city" class="text-sm pt-1 text-action-danger"> {{ errors.city }} </p>
                                </div>
                                
                            </div>
                        </div>
                    </fieldset>

                    <fieldset v-show="step === 3 && selectedCategory === 'Government'" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Representative Information</h3>
                                    <p class="text-sm font-normal text-tertiary-300">Please fill-in all required ( <span class=" text-action-danger">*</span> ) input  field</p>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                <div>
                                    <InputSelect v-model="governmentOwnerForm.representativeTitle" isRequired="true" id="title" lable="Title"> 
                                        <option value="">Select Title</option>
                                        <option v-for="(prefix, index) in prefixs" :key="index" :value="prefix.name">{{ prefix.name }}</option>
                                    </InputSelect>
                                    <p v-show="errors.representativeTitle" class="text-sm pt-1 text-action-danger"> {{ errors.representativeTitle }} </p>
                                </div>

                                <div>
                                    <Input v-model="governmentOwnerForm.representativeFirstname" type="text" lable="First Name" place_holder="Enter First Name" id="first_name" isRequired="true" />
                                    <p v-show="errors.representativeFirstname" class="text-sm pt-1 text-action-danger"> {{ errors.representativeFirstname }} </p>
                                </div>

                                <!-- <Input v-model="governmentOwnerForm.otherName" type="text" lable="Other Name" place_holder="Enter Other Name" id="other_name" isRequired="false" /> -->

                                <div>
                                    <Input v-model="governmentOwnerForm.representativeLastname" type="text" lable="Last Name" place_holder="Enter Last Name" id="last_name" isRequired="true" />
                                    <p v-show="errors.representativeLastname" class="text-sm pt-1 text-action-danger"> {{ errors.representativeLastname }} </p>
                                </div>

                                <!-- <InputSelect v-model="governmentOwnerForm.ro" isRequired="true" id="city" lable="City"> 
                                    <option value="">Select City</option>
                                </InputSelect> -->

                                <div>
                                    <Input v-model="governmentOwnerForm.representativeRole" type="text" lable="Phone Number" place_holder=" Enter Phone Number" id="phone_number" isRequired="true" />
                                    <p v-show="errors.representativeRole" class="text-sm pt-1 text-action-danger"> {{ errors.representativeRole }} </p>
                                </div>
                                
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
                        <Button class="rounded-lg" :onClick="submitOwnerInfo" v-show="step > 3"  type="solid" title="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import InputWithButtonRight from "~/components/form/InputWithButtonRight.vue"
import InputFile from "~/components/form/InputFile.vue"
import InputSelect from "~/components/form/InputSelect.vue"
import Input from "~/components/form/Input.vue"
import { mapState } from 'vuex'
export default {
    components: {
        InputWithButtonRight,
        InputFile,
        InputSelect,
        Input,
    },
    props: ['onclick'],
    data() {
        return {
            step: 1,
            individualOwnerForm: {
                title: null,
                firstName:null,
                otherName:null,
                lastName:null,
                emailAddress:null,
                phoneNumber:null,
                gender:null,
                maritalStatus:null,
                dateOfBirth:null,
                bvn: null,
                street:null,
                city:null,
                landmark: null,
                state: null,
                lga:null,
                type:null
            },
            businessOwnerForm: {
                title: null,
                businessName:null,
                registrationNumber:null,
                tin:null,
                businessSector: null,
                firstName:null,
                lastName:null,
                emailAddress:null,
                phoneNumber:null,
                street:null,
                city:null,
                landmark: null,
                state: null,
                lga:null,
                type:null
            },
            governmentOwnerForm: {
                agencyName:null,
                agencyType:null,
                representativeTitle:null,
                representativeFirstname:null,
                representativeLastname:null,
                representativeRole:null,
                emailAddress:null,
                phoneNumber:null,
                street:null,
                city: null,
                landmark: null,
                state: null,
                lga:null,
                type:null,
                // agencyId: null
            },
            genders: [
                { name: 'Male'},
                { name: 'Female'}
            ],
            selectedLgas: [],
            selectedCategory: '',
            errors: {},
            busines_sectors: ['benn', 'gggg', 'hhhhh']
        }
    },
    methods: {
        next() {
            
            if(this.step == 1){
                this.step+= 1
            }else if(this.step == 2 && this.selectedCategory == 'Individual'){
                if(this.individualOwnerForm.title && this.individualOwnerForm.firstName && this.individualOwnerForm.otherName && this.individualOwnerForm.lastName && this.individualOwnerForm.city && this.individualOwnerForm.phoneNumber && this.individualOwnerForm.lga && this.individualOwnerForm.state){
                    this.errors = {};
                    this.step+= 1
                    return
                }

                this.errors = {};

                if (!this.individualOwnerForm.title) {
                    this.errors.title = 'title required.' ;
                }
                if (!this.individualOwnerForm.firstName) {
                    this.errors.firstName = 'firstName required.' ;
                }
                if (!this.individualOwnerForm.otherName) {
                    this.errors.otherName = 'otherName required.' ;
                }
                if (!this.individualOwnerForm.lastName) {
                    this.errors.lastName = 'lastName required.' ;
                }
                if (!this.individualOwnerForm.city) {
                    this.errors.city = 'city required.' ;
                }
                if (!this.individualOwnerForm.phoneNumber) {
                    this.errors.phoneNumber = 'phoneNumber required.' ;
                }
                if (!this.individualOwnerForm.lga) {
                    this.errors.lga = 'lga required.' ;
                }
                if (!this.individualOwnerForm.state) {
                    this.errors.state = 'state required.' ;
                }

            }else if(this.step == 2 && this.selectedCategory == 'Business') {
                if(this.businessOwnerForm.businessName && this.businessOwnerForm.registrationNumber && this.businessOwnerForm.tin && this.businessOwnerForm.businessSector && this.businessOwnerForm.emailAddress && this.businessOwnerForm.phoneNumber && this.businessOwnerForm.street && this.businessOwnerForm.lga && this.businessOwnerForm.state){
                     this.errors = {};
                    this.step+= 1
                    return
                }

                this.errors = {};

                if (!this.businessOwnerForm.businessName) {
                    this.errors.businessName = 'businessName required.' ;
                }
                if (!this.businessOwnerForm.registrationNumber) {
                    this.errors.registrationNumber = 'registrationNumber required.' ;
                }
                if (!this.businessOwnerForm.tin) {
                    this.errors.tin = 'tin required.' ;
                }
                if (!this.businessOwnerForm.businessSector) {
                    this.errors.businessSector = 'businessSector required.' ;
                }
                if (!this.businessOwnerForm.emailAddress) {
                    this.errors.emailAddress = 'emailAddress required.' ;
                }
                if (!this.businessOwnerForm.phoneNumber) {
                    this.errors.phoneNumber = 'phoneNumber required.' ;
                }
                if (!this.businessOwnerForm.lga) {
                    this.errors.lga = 'lga required.' ;
                }
                if (!this.businessOwnerForm.state) {
                    this.errors.state = 'state required.' ;
                }
                // if (!this.businessOwnerForm.landmark) {
                //     this.errors.landmark = 'landmark required.' ;
                // }
                if (!this.businessOwnerForm.street) {
                    this.errors.street = 'street required.' ;
                }
            }else if(this.step == 2 && this.selectedCategory == 'Government') {
                if(this.governmentOwnerForm.agencyName && this.governmentOwnerForm.agencyType && this.governmentOwnerForm.phoneNumber && this.governmentOwnerForm.emailAddress && this.governmentOwnerForm.street && this.governmentOwnerForm.lga && this.governmentOwnerForm.state && this.governmentOwnerForm.landmark){
                    this.errors = {};
                    this.step += 1
                    return
                }

                this.errors = {};

                if (!this.governmentOwnerForm.agencyName) {
                    this.errors.agencyName = 'agencyName required.' ;
                }
                if (!this.governmentOwnerForm.agencyType) {
                    this.errors.agencyType = 'agencyType required.' ;
                }
                if (!this.governmentOwnerForm.phoneNumber) {
                    this.errors.phoneNumber = 'phoneNumber required.' ;
                }
                if (!this.governmentOwnerForm.emailAddress) {
                    this.errors.emailAddress = 'emailAddress required.' ;
                }
                if (!this.governmentOwnerForm.phoneNumber) {
                    this.errors.phoneNumber = 'phoneNumber required.' ;
                }
                if (!this.governmentOwnerForm.lga) {
                    this.errors.lga = 'lga required.' ;
                }
                if (!this.governmentOwnerForm.street) {
                    this.errors.street = 'street required.' ;
                }
                if (!this.governmentOwnerForm.street) {
                    this.errors.street = 'street required.' ;
                }
                if (!this.governmentOwnerForm.landmark) {
                    this.errors.landmark = 'landmark required.' ;
                }
            }


        },
        previus() {
            if(this.step === 1 ) {
                return this.step
            }
            this.step-= 1
        },
        getSelectedState(event){

            this.selectedLgas = []

            this.lgas.map( lga => {
                // console.log(lga.state)
                if(lga.state == event.target.value) {
                    this.selectedLgas.push(lga)
                    console.log(lga)
                }
            })
            console.log(this.selectedLgas)
        },
        selectCategory(category) {
            this.selectedCategory = category
        },

        submitOwnerInfo() {
            if(this.step == 3 && this.selectedCategory == 'Individual') {
                if(this.individualOwnerForm.gender && this.individualOwnerForm.dateOfBirth && this.individualOwnerForm.maritalStatus && this.individualOwnerForm.street && this.individualOwnerForm.emailAddress && this.individualOwnerForm.landmark){
                    this.errors = {};
                    this.step = 1
                    this.onclick()
                    return
                }

                this.errors = {};

                if (!this.individualOwnerForm.gender) {
                    this.errors.gender = 'gender required.' ;
                }
                if (!this.individualOwnerForm.dateOfBirth) {
                    this.errors.dateOfBirth = 'dateOfBirth required.' ;
                }
                if (!this.individualOwnerForm.maritalStatus) {
                    this.errors.maritalStatus = 'maritalStatus required.' ;
                }
                if (!this.individualOwnerForm.street) {
                    this.errors.street = 'street required.' ;
                }
                if (!this.individualOwnerForm.emailAddress) {
                    this.errors.emailAddress = 'emailAddress required.' ;
                }
                if (!this.individualOwnerForm.landmark) {
                    this.errors.landmark = 'landmark required.' ;
                }
            }else if(this.step == 3 && this.selectedCategory == 'Business') {
                if(this.businessOwnerForm.title && this.businessOwnerForm.firstName && this.businessOwnerForm.lastName && this.businessOwnerForm.landmark && this.businessOwnerForm.city ){
                    this.errors = {};
                    this.step = 1
                    this.onclick()
                    return
                }

                this.errors = {};

                if (!this.businessOwnerForm.title) {
                    this.errors.title = 'title required.' ;
                }
                if (!this.businessOwnerForm.firstName) {
                    this.errors.firstName = 'firstName required.' ;
                }
                if (!this.businessOwnerForm.lastName) {
                    this.errors.lastName = 'lastName required.' ;
                }
                if (!this.businessOwnerForm.landmark) {
                    this.errors.landmark = 'landmark required.' ;
                }
                if (!this.businessOwnerForm.city) {
                    this.errors.city = 'city required.' ;
                }
            }else if(this.step == 2 && this.selectedCategory == 'Government') {
                if(this.governmentOwnerForm.representativeTitle && this.governmentOwnerForm.representativeFirstname && this.governmentOwnerForm.representativeLastname && this.governmentOwnerForm.representativeRole){
                    this.errors = {};
                    this.step = 1
                    this.onclick()
                    return
                }

                this.errors = {};

                if (!this.governmentOwnerForm.representativeTitle) {
                    this.errors.representativeTitle = 'representativeTitle required.' ;
                }
                if (!this.governmentOwnerForm.representativeFirstname) {
                    this.errors.representativeFirstname = 'representativeFirstname required.' ;
                }
                if (!this.governmentOwnerForm.representativeLastname) {
                    this.errors.representativeLastname = 'representativeLastname required.' ;
                }
                if (!this.governmentOwnerForm.representativeRole) {
                    this.errors.representativeRole = 'representativeRole required.' ;
                }
            }
        }
    },
    computed: {
        ...mapState({
            categories:  state => state.settings.vehicle_manager.categories,
            agency_categories:  state => state.settings.owner_manager.agency_categories,
            states:  state => state.settings.owner_manager.states,
            prefixs:  state => state.settings.owner_manager.prefixs,
            means_of_identities:  state => state.settings.owner_manager.means_of_identities,
            marital_statuses:  state => state.settings.owner_manager.marital_statuses,
            lgas:  state => state.settings.owner_manager.lgas,
        }),
    },

}
</script>