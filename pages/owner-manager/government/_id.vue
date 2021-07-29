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
                        <p class="text-xl text-tertiary-700 font-medium truncate">{{ owner.id ? owner.id : '-'}}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Agency Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.agencyName ? owner.agencyName : '-'}}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.address.state ? owner.address.state : '-' }}</p>
                    </div>
                </template>
                <div class="col-span-3 grid grid-cols-3 gap-y-4">
                        <div class="col-span-2 xl:col-span-1">
                            <h5 class="text-xs font-normal text-tertiary-300">Ministry</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.ministry ? owner.ministry : '-'}}</p>
                        </div>
                        <div class="xl:col-span-2">
                            <h5 class="text-xs font-normal text-tertiary-300">District</h5>
                            <p class="text-xl text-tertiary-700 font-medium">{{ owner.district ? owner.district : '-'}}</p>
                        </div>
                        <div class="col-span-3">
                            <h5 class="text-xs font-normal text-tertiary-300">Address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.address.street ? owner.address.street : '-'}}</p>
                        </div>
                        <div class="col-span-3">
                            <h5 class="text-xs font-normal text-tertiary-300">Name of Representative</h5>
                            <p class="text-tertiary-700 font-medium">{{ getFullName(owner) ? getFullName(owner) : '-'}}</p>
                        </div>
                        <div class="col-span-3">
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
                        :class="activeTab===index ? 'text-primary-500 border-primary-500' : 'text-tertiary-500 border-transparent'" 
                        @click="activeTab = index"
                    >
                        {{ tab }}
                    </li>
                </template>
                <div class="p-5 px-10" v-show="activeTab === 0">
                    <form class="grid grid-cols-2 gap-6 gap-x-10" @submit.prevent="submitUpdateOwner">
                        <Input id="agency_name" place_holder="agencyName" lable="Agency Name" v-model="update_data.agencyName" type="text" />

                        <Input id="agency_type" place_holder="agencyType" lable="Agency Type" v-model="update_data.agencyType" type="text" />

                        <Input id="representative_title" place_holder="representativeTitle" lable="Representative Title" v-model="update_data.representativeTitle" type="text" />

                        <Input id="representative_firstname" place_holder="representativeFirstname" lable="Representative Firstname" v-model="update_data.representativeFirstname" type="text" />

                        <Input id="representative_lastname" place_holder="representativeLastname" lable="Representative Lastname" v-model="update_data.representativeLastname" type="text" />

                        <Input id="representative_role" place_holder="representativeRole" lable="Representative Role" v-model="update_data.representativeRole" type="text" />

                        <Input id="phone_number" place_holder="+2348012345678" lable="Phone Number" v-model="update_data.phoneNumber" type="tel" />

                        <Input id="email" place_holder="everything.some@nothing.com" lable="Email Address" v-model="update_data.emailAddress" type="email" />

                        <Input id="residential_address" place_holder="Plot 134, Lorem ipsum" lable="Residential Address" v-model="update_data.street" type="text" />

                        <Input id="city" place_holder="Plot 134, Lorem ipsum" lable="City" v-model="update_data.city" type="text" />

                        <Input id="state" place_holder="Lagos" lable="Residential Address" v-model="update_data.state" type="text" />

                        <Input id="lga" place_holder="lga" lable="Local Government Area" v-model="update_data.lga" type="text" />

                        <Input id="landmark" place_holder="landmark" lable="landmark" v-model="update_data.landmark" type="text" />

                        <div class="col-span-2 flex items-center justify-center py-6">
                            <FormButton title="Save Changes" type="solid" />
                            <Button :onClick="toggleSlide" title="Cancle" />
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
import Input from '~/components/form/Input.vue';
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
        Tabs,
        Input
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
            return `${owner.representativeTitle ? owner.representativeTitle : ''} ${owner.representativeFirstname} ${owner.representativeLastname} `
        },
        toggleSlide () {
            this.toggle_slide = !this.toggle_slide
        },
        submitUpdateOwner () {
            this.updateOwner({owner: this.update_data, id: this.owner.id})
        }
    },
    asyncData({store, params,}) {
        let governmentOwners = store.state.owner.governmentOwners
        let owner = governmentOwners.find( governmentOwner => governmentOwner.id === params.id)
        let update_data = {
            agencyName: owner.agencyName,
            agencyType: owner.agencyType,
            representativeTitle: owner.representativeTitle,
            representativeFirstname: owner.representativeFirstname,
            representativeLastname: owner.representativeLastname,
            representativeRole: owner.representativeRole,
            phoneNumber: owner.phoneNumber,
            emailAddress: owner.emailAddress,
            lga: owner.address.lga,
            state: owner.address.state,
            city: owner.address.city,
            street: owner.address.street,
            "type": owner.type,
            "landmark": owner.landmark
        }
        return {
            owner,
            update_data
        }
        // console.log(owner)
    },
}
</script>