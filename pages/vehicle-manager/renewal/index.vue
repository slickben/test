<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle Manager"/>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
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
            <div  class=" absolute inset-0 bg-opacity-50 px-24 2xl:px-48 pt-12">
                <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto">
                    <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                        <h1 class="text-2xl font-medium text-primary-900">Vehicle License Renewal</h1>
                        <button class="focus:outline-none">
                            <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                        </button>
                    </div>
                    <div class="flex-grow">
                        <forn class="h-full flex flex-col">
                            <!-- wizard form timeline -->
                            <div class="text-xs font-medium text-tertiary-300 border-b relative">
                                <div class="py-4 text-center text-sm font-normal text-tertiary-600 ">
                                    step 1 of 4
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
                                <div class=" pt-10 xl:pt-24">
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
                                <Button :onClick="previus" v-show="step > 1" class="mr-12" type="solid" title="Previus"/>
                                <Button :onClick="next" v-show="step < 4" type="secondary"  title="Next"/>
                                <Button :onClick="submitPersonaInfo" v-show="step > 3" class="" type="solid" title="Submit"/>
                            </div>
                        </forn>
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
                step: 1,
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