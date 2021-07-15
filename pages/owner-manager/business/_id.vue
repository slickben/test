<template>
    <div>
        <BreadCrumb title="Owner Manager">
            <Button title="Update"  :onClick="toggleSlide" />
        </BreadCrumb>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Business Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.businessName ? owner.businessName : '-'}}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Business Type</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.businessType ? owner.businessType : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.state }}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Tax Identification Number</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.taxIdNumber ? owner.taxIdNumber : '-' }}</p>
                    </div>
                </template>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Company Registration Number</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.registrationNumber ? owner.registrationNumber : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Business Sector</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.businessSector ? owner.businessSector : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Phone number</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.phoneNumber ? owner.phoneNumber : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Address</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.address.street ? owner.address.street : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Email address</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.email ? owner.email : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Local Government Area</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.lga ? owner.lga : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">City</h5>
                        <p class="text-tertiary-700 font-medium">{{ owner.city ? owner.city : '-'}}</p>
                    </div>
            </BioData>

            <div class="grid grid-cols-3 gap-x-6">
                <ActivitiesLog />
                <div class="grid grid-rows-2 gap-4 max-h-100">
                    <AssetsCard />
                    <DocumentStatusCard />
                </div>
            </div>
        </div>
        <Sliding classes="min-w-150" v-show="toggle_slide"> 
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Update Data</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleSlide" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <Tabs>
                <template slot="head">
                    <li 
                        v-for="(tab, index) in tabs" 
                        :key="index" 
                        class="text-xs cursor-pointer py-2 mr-10 text-tertiary-500 border-b-4 "
                        :class="activeTab===index ? 'text-purple-600 border-purple-600' : 'border-transparent'" 
                        @click="activeTab = index"
                    >
                        {{ tab }}
                    </li>
                </template>
                <div class="p-5 " v-show="activeTab === 0">
                    <form @submit.prevent="" class="grid grid-cols-2 gap-6">
                        <div class="flex flex-col">
                            <label for="business_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Businesst Name</label>
                            <input v-model="owner.businessName" id="business_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Labaika" />
                        </div>
                        <div class="flex flex-col">
                            <label for="business_type" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Business Type</label>
                            <input v-model="owner.businessType" id="business_type" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                        </div>
                        <div class="flex flex-col">
                            <label for="state" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                            <input v-model="owner.address.state" id="state" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Erinjobe" />
                        </div>
                        <div class="flex flex-col">
                            <label for="tax_id_number" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">
                                Tax Identification Number</label>
                            <input v-model="owner.taxIdNumber" id="tax_id_number" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Male" />
                        </div>
                        <div class="flex flex-col">
                            <label for="company_reg_number" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Company Registration Number</label>
                            <input v-model="owner.registrationNumber" id="company_reg_number" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="0123456789101" />
                        </div>
                        <div class="flex flex-col">
                            <label for="phone_number" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Phone Number</label>
                            <input v-model="owner.phoneNumer" id="phone_number" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="23 Jan, 1994" />
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Email Address</label>
                            <input v-model="owner.email" id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="everything.some@nothing.com" />
                        </div>
                        <div class="flex flex-col">
                            <label for="city" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">City</label>
                            <input v-model="owner.address.city" id="city" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="+2348012345678" />
                        </div>
                        <div class="flex flex-col">
                            <label for="business_sector" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Business Sector</label>
                            <input v-model="owner.businessSector" id="business_sector" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                        </div>
                        <div class="flex flex-col">
                            <label for="street" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Address</label>
                            <input v-model="owner.address.street" id="street" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Graphic Artist" />
                        </div>
                        <div class="flex flex-col">
                            <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Local Government Area</label>
                            <input v-model="owner.address.lga" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ireposi South" />
                        </div>
                        <div class="col-span-2 flex items-center justify-center py-6">
                            <FormButton title="Save Changes" type="solid" />
                            <Button :onClick="toggleSlide" title="Cancle" />
                        </div>
                    </form>
                </div>
                <!-- <div class="p-5 grid grid-cols-2 gap-6" v-show="activeTab === 1">
                    <div class="flex flex-col">
                        <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">First Name</label>
                        <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Labaika" />
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Other Name</label>
                        <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                        <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Lagos" />
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Employement Status</label>
                        <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Self-Employed" />
                    </div>
                    <div class="flex flex-col">
                        <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Occupation</label>
                        <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Graphic Artist" />
                    </div>
                    <div class="col-span-2 flex items-center justify-center py-6">
                        <Button title="Save Changes" type="solid" />
                        <Button title="Cancle" />
                    </div>
                </div> -->
            </Tabs>
        </Sliding>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import Button from '~/components/Button.vue';
import FormButton from '~/components/FormButton.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Show',
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard,
        BreadCrumb,
        Button,
        FormButton,
        Sliding,
        Tabs
    },
    data () {
        return {
            toggle_slide: false,
            activeTab: 0,
            tabs: [
                "Bio Data",
            ],
        }
    },
    methods: {
        ...mapActions({
            updateOwner: 'owner/updateOwner'
        }),
        getFullName (owner) {
            return `${owner.title ? owner.title : ''} ${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
        },
        toggleSlide () {
            this.toggle_slide = !this.toggle_slide
        },
        submitUpdateOwner () {
            this.updateOwner(this.owner)
        }
    },
    asyncData({store, params,}) {
        let businessOwners = store.state.owner.businessOwners
        let owner_data = businessOwners.find( businessOwner => businessOwner.id === params.id)
        let owner = {
            firstName: owner_data.firstName,
            lastName: owner_data.lastName,
            id: owner_data.id,
            businessName: owner_data.businessName,
            businessType: owner_data.businessType,
            taxIdNumber: owner_data.taxIdNumber,
            registrationNumber: owner_data.companyRegNumber,
            businessSector: owner_data.businessSector,
            phoneNumber: owner_data.phoneNumber,
            email: owner_data.email,
            address: {
                lga: owner_data.lga,
                state: owner_data.state,
                city: owner_data.city,
                street: owner_data.street,
            }
        }
        return {
            owner
        }
        // console.log(owner)
    },
}
</script>