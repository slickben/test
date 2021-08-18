<template>
    <div>
        <BreadCrumb item_id="#489755" title="Revenue">
            <Button type="secondary" title="Update"  :onClick="toggleSlide" />
        </BreadCrumb>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Unique ID</h5>
                        <p class="text-xl text-tertiary-900 font-medium truncate ">{{ owner.ownerId ? owner.ownerId : '-'}}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Owner Name</h5>
                        <p class="text-xl text-tertiary-900 font-medium">{{ getFullName(owner) }}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">State of origin</h5>
                        <p class="text-xl text-tertiary-900 font-medium">{{ owner.address.state ? owner.address.state : '-' }}</p>
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
                            <p class="text-tertiary-900 font-medium">{{ owner.address.lga ? owner.address.lga : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Phone number</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.phoneNumber ? owner.phoneNumber : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">City</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.address.city ? owner.address.city : '-'}}</p>
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
                            <p class="text-tertiary-900 font-medium">{{ owner.address.state ? owner.address.state : '-'}}</p>
                        </div>
                        <div class="col-span-3">
                            <h5 class="text-xs font-normal text-tertiary-300">Residential Address</h5>
                            <p class="text-tertiary-900 font-medium">{{ owner.address.street ? owner.address.street : '-'}}</p>
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
                <div class="p-5 px-10" v-show="activeTab === 0">
                    <form class="grid grid-cols-2 gap-6 gap-x-10" @submit.prevent="submitUpdateOwner">

                        <Input id="first_name" place_holder="Labaika" lable="First Name" v-model="update_data.firstName" type="text" />

                        <Input id="last_name" place_holder="Labaika" lable="Last Name" v-model="update_data.lastName" type="text" />

                        <Input id="other_name" place_holder="Labaika" lable="Other Name" v-model="update_data.otherName" type="text" />

                        <Input isDisable="true" id="gender" place_holder="Male" lable="Gender" v-model="update_data.gender" type="text" />

                        <Input id="nin_or_bvn" place_holder="0123456789101" lable="NIN / BVN" v-model="update_data.bvn" type="text" />

                        <Input isDisable="true" id="date_of_birth" place_holder="23 Jan, 1994" lable="Date of Birth" v-model="update_data.dateOfBirth" type="date" />

                        <Input id="phone_number" place_holder="+2348012345678" lable="Phone Number" v-model="update_data.phoneNumber" type="tel" />

                        <Input id="lga" place_holder="Ireposi South" lable="Local Government Area" v-model="update_data.lga" type="text" />

                        <Input id="email" place_holder="everything.some@nothing.com" lable="Email Address" v-model="update_data.emailAddress" type="email" />
                        
                        <Input id="city" place_holder="Ikeja" lable="City" v-model="update_data.city" type="text" />

                        <Input id="residential_address" place_holder="Plot 134, Lorem ipsum" lable="Residential Address" v-model="update_data.street" type="text" />

                        <Input id="state" place_holder="Lagos" lable="Residential Address" v-model="update_data.state" type="text" />

                        <Input id="landmark" place_holder="landmark" lable="landmark" v-model="update_data.landmark" type="text" />

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
import Input from '~/components/form/Input.vue';
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
        Tabs,
        Input
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
            return `${owner.title ? owner.title : ''} ${owner.firstName ? owner.firstName : ''} ${owner.lastName ? owner.lastName : ''} ${owner.otherName ? owner.otherName : ''}`
        },
        toggleSlide () {
            this.toggle_slide = !this.toggle_slide

            this.update_data
        },
        submitUpdateOwner () {
            this.updateOwner({ owner: this.update_data, id: this.owner.id })
        }
    },
    asyncData({store, params,}) {
        let individualOwners = store.state.owner.individualOwners
        let owner = individualOwners.find( individualOwner => individualOwner.id === params.id)
        let update_data = {
            title: owner.title,
            firstName: owner.firstName,
            lastName: owner.lastName,
            otherName: owner.otherName,
            emailAddress: owner.emailAddress,
            "phoneNumber": owner.phoneNumber,
            gender: owner.gender,
            maritalStatus: owner.maritalStatus,
            dateOfBirth: owner.dateOfBirth,
            bvn: owner.ninOrBvn,
            street: owner.address.street,
            city: owner.address.city,
            landmark: owner.address.landmark,
            state: owner.address.state,
            lga: owner.address.lga,
            "type": owner.type,
        }
        return {
            owner,
            update_data
        }
    },
}
</script>