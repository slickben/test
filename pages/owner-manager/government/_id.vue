<template>
    <div>
        <BreadCrumb title="Owner Manager">
            <Button title="Update"  :onClick="toggleSlide" />
        </BreadCrumb>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Agency Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.agencyName ? owner.agencyName : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">District</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.district ? owner.district : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.state ? owner.state : '-' }}</p>
                    </div>
                </template>
                <div class="col-span-3 grid grid-cols-1 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Ministry</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.ministry ? owner.ministry : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.address ? owner.address : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Name of Representative</h5>
                            <p class="text-tertiary-700 font-medium">{{ getFullName(owner) ? getFullName(owner) : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Role / Position of Representative</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.roleOrPosition ? owner.roleOrPosition : '-'}}</p>
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
                            <label for="agency_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Agency Name</label>
                            <input v-model="update_data.agencyName" id="agency_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Erinjobe" />
                        </div>
                        <div class="flex flex-col">
                            <label for="district" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">District</label>
                            <input v-model="update_data.district" id="district" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Male" />
                        </div>
                        <div class="flex flex-col">
                            <label for="role_or_permission" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Role Or Permission</label>
                            <input v-model="update_data.roleOrPermission" id="role_or_permission" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="0123456789101" />
                        </div>
                        <div class="flex flex-col">
                            <label for="ministry" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Ministry</label>
                            <input v-model="update_data.ministry" id="ministry" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="23 Jan, 1994" />
                        </div>
                        <div class="flex flex-col">
                            <label for="address" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Address</label>
                            <input v-model="update_data.address.street" id="address" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="+2348012345678" />
                        </div>
                        <div class="flex flex-col">
                            <label for="state" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                            <input v-model="update_data.address.state" id="state" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ireposi South" />
                        </div>
                        <div class="flex flex-col">
                            <label for="city" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">City</label>
                            <input v-model="update_data.address.city" id="city" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="everything.some@nothing.com" />
                        </div>
                        <div class="flex flex-col">
                            <label for="lga" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Local Government Area</label>
                            <input v-model="update_data.address.lga" id="lga" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Ikeja" />
                        </div>
                        <div class="col-span-2 flex items-center justify-center py-6">
                            <Button title="Save Changes" type="solid" />
                            <Button title="Cancle" />
                        </div>
                    </form>
                </div>
            </Tabs>
        </Sliding>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import Button from '~/components/Button.vue';
import FormButton from '~/components/FormButton.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import {mapActions} from 'vuex'
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
                "Documents",
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
            this.updateOwner(this.update_data)
        }
    },
    asyncData({store, params,}) {
        let governmentOwners = store.state.owner.governmentOwners
        let owner = governmentOwners.find( governmentOwner => governmentOwner.id === params.id)
        let update_data = {
            id: owner.id,
            firstName: owner.firstName,
            lastName: owner.lastName,
            agencyName: owner.agencyName,
            ministry: owner.ministry,
            roleOrPermission: owner.roleOrPermission,
            district: owner.district,
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
        // console.log(owner)
    },
}
</script>