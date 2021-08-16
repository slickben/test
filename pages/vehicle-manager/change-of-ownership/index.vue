<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle Manager"/>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 xl:py-16 py-10 2xl:px-0  h-full w-full">
            <Table classes="rounded-md" :head_data="table_head_data"> 
                <template v-slot:head>
                    <TableFilter />
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

        <div class="fixed inset-0 bg-black z-40 bg-opacity-50 px-24 2xl:px-48 pt-12 hidden">
            <!--new owner form modal -->
            <div v-show="personalInfoModal" class=" absolute inset-0 bg-opacity-50 px-24 2xl:px-48 pt-12">
                <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto">
                    <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                        <h1 class="text-2xl font-medium text-primary-900">Change Of OwnerShip</h1>
                        <button class="focus:outline-none">
                            <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class="flex-grow">
                        <form class="h-full flex flex-col">
                            <!-- wizard form timeline -->
                            <div class="text-xs font-medium text-tertiary-300 border-b relative">
                                <div class="py-4 text-center text-sm font-normal text-tertiary-600 ">
                                    step 2 of 4
                                </div>
                                <div class="w-full grid grid-cols-3 absolute -bottom-1">
                                    <div class="bg-primary-400 h-2"></div>
                                    <div class="h-2 bg-primary-400"></div>
                                    <div class="h-2"></div>
                                </div>
                            </div>
                            
                            <!-- form fieldset 1 -->
                            <fieldset v-show="step === 1" class="flex-grow px-16">
                                <h3 class="py-6 px-8 text-xl font-medium text-tertiary-600">Select Category</h3>
                                <div class="pt-12">
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
                                            <InputWithButtonRight :onClick="next" v-show="selectedCategory === 'Individaul'" id="nin_or_bvn" BtnTitle="Submit" place_holder="Enter BVN/NIN" type="text" />
                                            <!-- error -->
                                            <p v-show="selectedCategory === 'Individaul'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            <InputWithButtonRight :onClick="next" v-show="selectedCategory === 'Business'" id="nin_or_bvn" BtnTitle="Submit" place_holder="Enter TIN/CRN" type="text" />
                                            <p v-show="selectedCategory === 'Business'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            <InputWithButtonRight :onClick="next" v-show="selectedCategory === 'Government'" id="nin_or_bvn" BtnTitle="Submit" place_holder="Enter Agency Id" type="text" />
                                            <p v-show="selectedCategory === 'Government'" class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <!-- form fieldset 2 -->
                            <fieldset v-show="step === 2" class="flex-grow px-16 pb-10 grid grid-cols-4">
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
                            <fieldset v-show="step === 3" class="flex-grow px-16 pb-10 grid grid-cols-4">
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
                            <fieldset v-show="step === 4" class="flex-grow px-16 pb-10 grid grid-cols-4">
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
                                <Button :onClick="previus" v-show="step > 1 && step < 5" class="mr-12" type="solid" title="Previus"/>
                                <Button :onClick="next" v-show="step > 1 && step < 4" type="secondary"  title="Next"/>
                                <Button :onClick="submitPersonaInfo" v-show="step > 3" class="" type="solid" title="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div  class=" absolute inset-0 bg-opacity-50 px-24 2xl:px-48 pt-12">
                <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto">
                    <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                        <h1 class="text-2xl font-medium text-primary-900">New Registration</h1>
                        <button class="focus:outline-none">
                            <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class="flex-grow">
                        <form class="h-full flex flex-col">
                            <!-- wizard form timeline -->
                            <div class="text-xs font-medium text-tertiary-300 border-b relative">
                                <div class="py-4 text-center text-sm font-normal text-tertiary-600 ">
                                    step 1 of 5
                                </div>
                                <div class="w-full grid grid-cols-3 absolute -bottom-1">
                                    <div class="bg-primary-400 h-2"></div>
                                    <div class="h-2 bg-primary-400"></div>
                                    <div class="h-2"></div>
                                </div>
                            </div>
                            <!-- form fieldset 1 -->
                            <fieldset v-show="step === 1" class="flex-grow px-16">
                                <h3 class="py-6 px-8 text-xl font-medium text-tertiary-600">Vehicle ID</h3>
                                <div class=" pt-12 xl:pt-24">
                                    <h2 class="text-center text-tertiary-600">Enter Vehicle ID</h2>
                                </div>
                                <div class="flex justify-center">
                                    <div>
                                        <div class="py-4 w-100">
                                            <InputWithButtonRight :onClick="next"  id="nin_or_bvn" BtnTitle="Continue" place_holder="Enter Vehicle ID" type="text" />
                                            <!-- error -->
                                            <p class="text-sm pt-1 text-action-danger">Owner Not Found</p>
                                            
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <!-- form fieldset 1 -->
                            <fieldset v-show="step === 2" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                    <div class="col-span-3">
                                        <div class="py-8">
                                            <h3 class=" text-xl font-medium text-tertiary-600">Vehicle Details</h3>
                                            
                                        </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                        <Input type="text" lable="Owner Name" place_holder="Benson Momodu" id="owner_name" isRequired="true" />

                                        <InputSelect isRequired="true" id="make" lable="Vehicle Make"> 
                                            <option value="">Select Make</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="model" lable="Vehicle Model"> 
                                            <option value="">Select Model</option>
                                        </InputSelect>

                                        <Input type="text" lable="Color" place_holder="Enter Color" id="color" isRequired="true" />

                                        <InputSelect isRequired="true" id="type" lable="Vehicle Type"> 
                                            <option value="">Select Type</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="year" lable="Vehicle Year"> 
                                            <option value="">Select Year</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="engine_capacity" lable="Engine Capacity "> 
                                            <option value="">Select Engine Capacity </option>
                                        </InputSelect>

                                        <Input type="text" lable="Phone Number" place_holder="Enter Phone Number" id="phone_number" isRequired="true" />

                                        <Input type="text" lable="Plate Number" place_holder="Enter Plate Number" id="plate_number" isRequired="true" />

                                        <Input type="number" lable="Engine Number" place_holder="Enter Engine Number"  id="engine_number" isRequired="true" />
                                        
                                    </div>
                                </div>
                            </fieldset>
                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 3" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                    <div class="col-span-3">
                                        <div class="py-8">
                                            <h3 class=" text-xl font-medium text-tertiary-600">New Owner</h3>
                                        </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                        <div>
                                            <p class="text-sm text-tertiary-300">Transfer Vehicle</p>
                                            <div class="py-3 flex items-center">
                                                <Button :onClick="previus" class="mr-12" title="New Owner" type="solid" />

                                                <Button :onClick="previus" class="" title="Existing Owner" type="solid" />
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </fieldset>

                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 4" class="flex-grow px-16 pb-10">
                                <div class="">
                                    <div class="py-8">
                                        <h3 class=" text-xl font-medium text-tertiary-600">Vehicle License Review</h3>
                                    </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                        <div>
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
                                        </div>
                                    </div>
                                </div>
                            </fieldset>

                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 5" class="flex-grow px-16 pb-10 grid grid-cols-10">
                                <div class="col-start-2 col-span-8 mt-16 ">
                                    <p class="text-center text-sm text-tertiary-500 pb-4">Review Information</p>
                                    <div class="grid grid-cols-2 gap-y-8 border py-5">
                                        <div class=" px-8 border-r">
                                            <div class="flex-grow py-6  text-sm text-tertiary-500 font-normal">
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
                                        </div>
                                        <div class=" px-8 border-l">
                                            <div class="flex-grow py-6  text-sm text-tertiary-500 font-normal">
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
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <!-- navigatiom Button -->
                            <div class="flex justify-start items-center py-6 px-10 border-t">
                                <Button :onClick="previus" v-show="step > 1" class="mr-12" type="solid" title="Previus"/>
                                <Button :onClick="next" v-show="step < 5" type="secondary"  title="Next"/>
                                <Button :onClick="submitPersonaInfo" v-show="step > 4" class="" type="solid" title="Submit"/>
                            </div>
                        </form>
                    </div>
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
            InputFile
        },
        data() {
            return {
                table_head_data: ['Unique Id #', 'Business Name', 'City',  'Verification Status'],
                personalInfoModal: false,
                vehicleInfoModal: false,
                step: 1,
                selectedCategory: '',
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
                if(this.step === 0 ) {
                    return this.step
                }
                this.step-= 1
            },
            submitPersonaInfo() {

            }
        }
    }
</script>