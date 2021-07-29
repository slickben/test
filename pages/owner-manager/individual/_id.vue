<template>
    <div>
        <BreadCrumb title="Owner Manager">
            <Button type="secondary" title="Update"  :onClick="toggleSlide" />
        </BreadCrumb>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Unique ID</h5>
                        <p class="text-xl text-tertiary-900 font-medium truncate ">{{ owner.id ? owner.id : '-'}}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Owner Name</h5>
                        <p class="text-xl text-tertiary-900 font-medium">{{ getFullName(owner) }}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">State of origin</h5>
                        <p class="text-xl text-tertiary-900 font-medium">{{ owner.state ? owner.state : '-' }}</p>
                    </div>
                </template>
                    <div class="col-span-2 grid grid-cols-3 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">nIN/BVN</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.ninOrBvn ? owner.ninOrBvn : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Marital Status</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.maritalStatus ? owner.maritalStatus : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Local Government Area</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.lga ? owner.lga : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Phone number</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.phoneNumber ? owner.phoneNumber : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">City</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.city ? owner.city : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300 capitalize">date of birth</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.dateOfBirth ? owner.dateOfBirth : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Email address</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.email ? owner.email : '-'}}</p>
                        </div>
                        <div class="col-start-3 xl:col-start-3">
                            <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.state ? owner.state : '-'}}</p>
                        </div>
                        <div class="col-span-3">
                            <h5 class="text-xs font-normal text-tertiary-300">Residential Address</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.street ? owner.street : '-'}}</p>
                        </div>
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
                        <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/>
                    </div>
                    <button @click="toggleSlide" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">
                        <img src="~assets/icons/cancle.svg" alt="" srcset="">
                    </button>
                </div>
            </template>
            <Tabs>
                <template slot="head">
                    <li 
                        v-for="(tab, index) in tabs" 
                        :key="index"
                        class="text-xs cursor-pointer py-2 mr-10  border-b-4 "
                        :class="activeTab===index ? ' text-primary-500 border-primary-500' : 'border-transparent text-tertiary-500'" 
                        @click="activeTab = index"
                    >
                        {{ tab }}
                    </li>
                </template>
                <div class="p-5" v-show="activeTab === 0">
                    <form class="grid grid-cols-2 gap-6" @submit.prevent="submitUpdateOwner">
                        <div class="flex flex-col">
                            <label for="first_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">First Name</label>
                            <input v-model="update_data.firstName" id="first_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Labaika" />
                        </div>
                        <div class="flex flex-col">
                            <label for="last_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Last Name</label>
                            <input v-model="update_data.lastName" id="last_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                        </div>
                        <div class="flex flex-col">
                            <label for="other_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Other Name</label>
                            <input v-model="update_data.otherName" id="other_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                        </div>
                        <div class="flex flex-col">
                            <label for="gender" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Gender</label>
                            <input v-model="update_data.gender" id="gender" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Male" />
                        </div>
                        <div class="flex flex-col">
                            <label for="nin_or_bvn" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">NIN / BVN</label>
                            <input v-model="update_data.ninOrBvn" id="nin_or_bvn" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="0123456789101" />
                        </div>
                        <div class="flex flex-col">
                            <label for="date_of_birth" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Date of Birth</label>
                            <input v-model="update_data.dateOfBirth" id="date_of_birth" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="23 Jan, 1994" />
                        </div>
                        <div class="flex flex-col">
                            <label for="phone_number" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Phone Number</label>
                            <input v-model="update_data.phoneNumber" id="phone_number" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="+2348012345678" />
                        </div>
                        <div class="flex flex-col">
                            <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Local Government Area</label>
                            <input v-model="update_data.address.lga" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ireposi South" />
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Email Address</label>
                            <input v-model="update_data.email" id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="everything.some@nothing.com" />
                        </div>
                        <div class="flex flex-col">
                            <label for="city" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">City</label>
                            <input v-model="update_data.address.city" id="city" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                        </div>
                        <div class="flex flex-col">
                            <label for="residential_address" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Residential Address</label>
                            <input v-model="update_data.address.street" id="residential_address" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Plot 134, Lorem ipsum" />
                        </div>
                        <div class="flex flex-col">
                            <label for="state" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                            <input v-model="update_data.address.state" id="state" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Lagos" />
                        </div>
                        <div class="col-span-2 flex items-center justify-center py-6">
                            <FormButton title="Save Changes" type="solid" />
                            <Button :onClick="toggleSlide" title="Cancle" />
                        </div>
                    </form>
                </div>
                <div class="p-5 grid grid-cols-2 gap-6" v-show="activeTab === 1">
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
                        <!-- <Button title="Save Changes" type="solid" />
                        <Button title="Cancle" /> -->
                    </div>
                </div>
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
import FormButton from '~/components/FormButton.vue';
import Button from '~/components/Button.vue';
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
        FormButton,
        Button,
        Sliding,
        Tabs
    },
    data () {
        return {
            toggle_slide: false,
            activeTab: 0,
            tabs: [
                "Bio Data",
                "Documents",
            ],
            
        }
    },
    methods: {
        ...mapActions({
            updateOwner: 'owner/updateOwner'
        }),
        // ${owner.title ? owner.title : ''} 
        getFullName (owner) {
            return `${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
        },
        toggleSlide () {
            this.toggle_slide = !this.toggle_slide

            this.update_data
        },
        submitUpdateOwner () {
            this.updateOwner(this.update_data)
        }
    },
    asyncData({store, params,}) {
        let individualOwners = store.state.owner.individualOwners
        let owner = individualOwners.find( individualOwner => individualOwner.id === params.id)
        let update_data = {
            id: owner.id,
            firstName: owner.firstName,
            lastName: owner.lastName,
            otherName: owner.otherName,
            gender: owner.gender,
            ninOrBvn: owner.ninOrBvn,
            dateOfBirth: owner.dateOfBirth,
            phoneNumber: owner.phoneNumber,
            email: owner.email,
            address: {
                lga: owner.lga,
                state: owner.state,
                city: owner.city,
                street: owner.street,
            }
        }
        return {
            owner,
            update_data
        }
    },
}
</script>