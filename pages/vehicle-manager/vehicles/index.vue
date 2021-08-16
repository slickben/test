<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle">
            <nuxt-link class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" to="/vehicle-manager/vehicles/create">
                New Registration
            </nuxt-link>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 xl:py-16 py-10 2xl:px-0  h-full w-full">
            <Table classes="rounded-md" :head_data="table_head_data"> 
                <template v-slot:head>
                    <TableFilter> 
                        <div class="flex items-center">
                            Filter Category
                            <select class="focus:outline-none w-40 h-10 border px-2 rounded-md mr-4 ml-1" name="" id="">
                                <option selected value="10">All</option>
                                <option value="10">20</option>
                                <option value="10">30</option>
                            </select>
                        </div>
                        <div class="flex items-center">
                            <span class="text-xs text-tertiary-500 mr-1">Show entries</span>
                            <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                                <option selected value="10">10</option>
                                <option value="10">20</option>
                                <option value="10">30</option>
                            </select>
                        </div>
                    </TableFilter>
                </template>

                <tr class="relative" v-for="vehicle in vehicles">
                    <td class="text-left py-4 px-5">{{ vehicle.plateNumber }}</td>
                    <!-- <td class="text-left py-4 px-5">{{ vehicle }}</td> -->
                    <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ getOwnerName(vehicle.ownedBy) }}</a></td>
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ vehicle.category }}</a></td>
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ $moment(vehicle.createdAt).format('MMMM d, YYYY') }}</a></td>
                    <td class="text-left py-4 px-5">
                        <Status classes="w-24 h-8 text-xs" status="approved" />
                    </td>
                    <nuxt-link :to="`/vehicle-manager/vehicles/${vehicle.id}`" class="absolute inset-0 "></nuxt-link>
                </tr>
            </Table>
        </div>
        <div class="fixed inset-0 bg-black z-40 bg-opacity-50 px-24 2xl:px-48 pt-12 hidden">
            <div class="container mx-auto px-16 2xl:px-24 flex flex-col py-10 bg-white rounded-lg h-90-vh overflow-y-auto my-auto scrollbar-thin
                scrollbar-thumb-tertiary-200
                scrollbar-track-tertiary-100">
                <div class="pb-6 flex-none flex items-start justify-between w-full ">
                    <h1 class="text-2xl font-medium text-primary-900">New Registration</h1>
                    <button class="focus:outline-none">
                        <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                    </button>
                </div>
                <div class=" bg-tertiary-100 flex-grow pb-8 pt-2 px-10">
                    <div class="grid xl:grid-cols-2">
                        <div class="h-full">
                            <div class="flex items-center relative">
                                <div class="h-full pl-1">
                                    <img class="" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                    <div class="absolute -bottom-20 2xl:-bottom-24 left-4 h-full 2xl:py-3 pt-6">
                                        <div class="h-full border-r border-tertiary-600">

                                        </div>
                                    </div>
                                </div>
                                <div class="my-4 2xl:my-4">
                                    <h4 class="pb-2 text-center font-normal text-sm text-tertiary-600">Owner Details</h4>
                                    <div class="w-96 h-32 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5">
                                        <Button :onClick="submitPersonaInfo" class="" type="solid" title="New owner"/>
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center relative">
                                <div class="h-full pl-1">
                                    <img class="" src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                    <div class="absolute -bottom-20 2xl:-bottom-24 left-4 h-full 2xl:py-3 pt-6">
                                        <div class="h-full border-r border-tertiary-600">

                                        </div>
                                    </div>
                                </div>
                                <div class="my-4 2xl:my-4">
                                    <h4 class="pb-2 text-center font-normal text-sm text-tertiary-600">Vehicle Details</h4>
                                    <div class="w-96 h-32 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5 ">
                                        <Button :onClick="togglevehicleModal" class="" type="solid" title="New Vehicle"/>
                                        <!-- <Button type="secondary" title="Existing owner"/> -->
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-center">
                                <div class="pl-1">
                                    <img src="~/assets/icons/check-mark.svg" alt="" srcset="">
                                </div>
                                <div class="my-4 2xl:my-4">
                                    <h4 class="pb-2 text-center font-normal text-sm text-tertiary-600">Plate Number</h4>
                                    <div class="w-96 h-32 rounded-3xl flex items-center justify-center border border-tertiary-600 ml-5">
                                        <!-- <Button class="" type="solid" title="Plate Number"/> -->
                                        <!-- <Button type="secondary" title="Existing owner"/> -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="2xl:ml-20 h-full pt-6">
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
                    <div class="flex justify-end items-center pt-8">
                        <!-- <Button class="mr-12" type="solid" title="Processed To Payment"/>
                        <Button type="secondary"  title="Cancle"/> -->
                    </div>
                </div>
            </div>
            <!--new owner form modal -->
            <div v-show="personalInfoModal" class=" absolute inset-0 bg-opacity-50 px-24 2xl:px-48 pt-12">
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
                                <Button :onClick="previus" v-show="step > 1 && step < 5" class="mr-12" type="solid" title="Previus"/>
                                <Button :onClick="next" v-show="step > 1 && step < 4" type="secondary"  title="Next"/>
                                <Button :onClick="submitPersonaInfo" v-show="step > 3" class="" type="solid" title="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div v-show="vehicleInfoModal" class=" absolute inset-0 bg-opacity-50 px-24 2xl:px-48 pt-12">
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
                                    step 1 of 3
                                </div>
                                <div class="w-full grid grid-cols-3 absolute -bottom-1">
                                    <div class="bg-primary-400 h-2"></div>
                                    <div class="h-2 bg-primary-400"></div>
                                    <div class="h-2"></div>
                                </div>
                            </div>
                            <!-- form fieldset 1 -->
                            <fieldset v-show="step === 1" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                    <div class="col-span-3">
                                        <div class="py-8">
                                            <h3 class=" text-xl font-medium text-tertiary-600">Vehicle Details</h3>
                                            
                                        </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                        <InputSelect isRequired="true" id="category" lable="Vehicle Category"> 
                                            <option value="">Select Category</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="make" lable="Vehicle Make"> 
                                            <option value="">Select Make</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="model" lable="Vehicle Model"> 
                                            <option value="">Select Model</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="year" lable="Vehicle Year"> 
                                            <option value="">Select Year</option>
                                        </InputSelect>

                                        <Input type="text" lable="Color" place_holder="Enter Color" id="color" isRequired="true" />

                                        <Input type="text" lable="Plate Number" place_holder="Enter Plate Number" id="last_name" isRequired="true" />

                                        <InputSelect isRequired="true" id="type" lable="Vehicle Type"> 
                                            <option value="">Select Type</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="seat_code" lable="Seat Code"> 
                                            <option value="">Select Seat Code</option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="state_of_plate_number_allocation" lable="State Of Plate Number Allocation"> 
                                            <option value="">Select State Of Plate Number Allocation</option>
                                        </InputSelect>
                                        
                                    </div>
                                </div>
                            </fieldset>
                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 2" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                                    <div class="col-span-3">
                                        <div class="py-8">
                                            <h3 class=" text-xl font-medium text-tertiary-600">Vehicle Engine Details</h3>
                                        </div>
                                    <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                        <Input type="number" lable="Engine Number" place_holder="Enter Engine Number"  id="engine_number" isRequired="true" />

                                        <Input type="number" lable="Chasis Number" place_holder="Enter Chasis Number"  id="Chasis_number" isRequired="true" />

                                        <InputSelect isRequired="true" id="engine_capacity" lable="Engine Capacity "> 
                                            <option value="">Select Engine Capacity </option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="mileage" lable="Mileage "> 
                                            <option value="">Select Mileage </option>
                                        </InputSelect>

                                        <InputSelect isRequired="true" id="tank_capacity" lable="Tank Capacity "> 
                                            <option value="">Select Tank Capacity </option>
                                        </InputSelect>
                                        
                                    </div>
                                </div>
                            </fieldset>

                            <!-- form fieldset 3 -->
                            <fieldset v-show="step === 3" class="flex-grow px-16 pb-10">
                                <div class="">
                                    <div class="py-8">
                                        <h3 class=" text-xl font-medium text-tertiary-600">Vehicle License Review</h3>
                                    </div>
                                    <div class=" grid grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-10">
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
                            <!-- navigatiom Button -->
                            <div class="flex justify-start items-center py-6 px-10 border-t">
                                <Button :onClick="previus" v-show="step > 1 && step < 4" class="mr-12" type="solid" title="Previus"/>
                                <Button :onClick="next" v-show="step < 3" type="secondary"  title="Next"/>
                                <Button :onClick="submitPersonaInfo" v-show="step > 2" class="" type="solid" title="Submit"/>
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
                table_head_data: ['Plate Number', 'Owner Name', 'Vehicle Category', 'Date Created', 'Verification Status'],
                step: 1,
                personalInfoModal: false,
                vehicleInfoModal: false,
                selectedCategory: '',
                form: {

                }
            }
        },
        computed: {
            ...mapState({
                vehicles: state => state.vehicle.vehicles,
            }),
        },
        methods: {
            getOwnerName (owner) {
                let ownersName
                if(!owner) {
                    return
                }
                console.log(owner)
                if(owner.type === 'Business') {
                    ownersName = owner.businessName
                }else if (owner.type === 'Government') {
                    ownersName = owner.agencyName
                }else {
                    ownersName = `${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
                }

                return ownersName
            },
            selectCategory(category) {
                this.selectedCategory = category
            },
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
                this.step = 1
            },
            toggleExistigOwnerModal () {
                this.existingOwnModal = !this.existingOwnModal
            },
            togglevehicleModal () {
                this.vehicleInfoModal = !this.vehicleInfoModal
            }
        },
    }
</script>