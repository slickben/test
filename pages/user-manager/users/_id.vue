<template>
    <div class="relative">
        <BreadCrumb item_id="#09873" title="Users">
            <button @click="toggleSlide" class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" >
                Update User
            </button>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-6 2xl:py-10 2xl:px-0  h-full w-full">
            <div class="bg-white rounded-xl flex flex-col h-full overflow-y-auto scrollbar-thin
            scrollbar-thumb-tertiary-200
            scrollbar-track-tertiary-100">
                <div class="flex-none border-b px-10 flex items-center py-6">
                    <div class="relative">
                        <img class="rounded-full w-28 h-28 bg-primary-500" src="https://via.placeholder.com/150" alt="" srcset="">
                        <div class=" absolute inset-0 bg-primary-400 rounded-full"></div>
                    </div>
                    <div class="pl-5">
                        <h3 class="text-2xl text-tertiary-800">Afolabi Davies</h3>
                        <p class=" text-primary-500 text-sm xl:text-base">afo.davies@outlook.com <span class=" text-tertiary-500">(Super Admin)</span></p>
                    </div>
                </div>
                <div class="flex-grow flex">
                    <div class="flex-none w-50 border-r px-10 py-3">
                        <p class=" text-tertiary-300 py-3">Name</p>
                        <p class=" text-tertiary-300 py-3">Phone Number</p>
                        <p class=" text-tertiary-300 py-3">Email Address</p>
                        <p class=" text-tertiary-300 py-3">Department</p>
                        <p class=" text-tertiary-300 py-3">Location</p>
                        <p class=" text-tertiary-300 py-3">Role</p>
                        <p class=" text-tertiary-300 py-3">Status</p>
                    </div>
                    <div class="px-10 py-3">
                        <p class=" text-tertiary-600 py-3">Afolabi davies</p>
                        <p class=" text-tertiary-600 py-3">+234 801 234 5678</p>
                        <p class=" text-tertiary-600 py-3">afo.davies@outlook.com</p>
                        <p class=" text-tertiary-600 py-3">IT</p>
                        <p class=" text-tertiary-600 py-3">Ikeja, Lagos</p>
                        <p class=" text-tertiary-600 py-3">Super Admin</p>
                        <p class=" text-tertiary-600 py-3">Active</p>
                    </div>
                </div>
            </div>
        </div>
        <Sliding classes="min-w-150 w-150" v-show="toggle_slide"> 
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
                        class="text-xs cursor-pointer py-2 mr-10 border-b-4 "
                        :class="activeTab===index ? 'text-primary-400 border-primary-400' : 'text-tertiary-500 border-transparent'" 
                        @click="activeTab = index"
                    >
                        {{ tab }}
                    </li>
                </template>
                <div class="p-5 px-10" v-show="activeTab === 0">
                    <form class="grid grid-cols-2 gap-6" @submit.prevent="submitUpdateOwner">
                        <div>
                            <div class="shadow-sm px-8 py-3 pb-6 mb-5">
                                <div class="relative w-28 mx-auto ">
                                    <img class="rounded-full w-28 h-28 bg-primary-500 mx-auto" src="https://via.placeholder.com/150" alt="" srcset="">
                                    <div class=" absolute inset-0 bg-primary-400 rounded-full"></div>
                                </div>
                                <div class="py-5 2xl:px-6">
                                    <div class=" relative px-6 w-36 min-h-10 mx-auto text-primary-500 text-xs flex items-center justify-center rounded-xl  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600">
                                        <input class="opacity-0 absolute inset-0" type="file" name="" id="">
                                        Upload Photo
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col pb-3">
                                <label for="date_of_birth" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Date of Birth</label>
                                <input  id="date_of_birth" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="23 Jan, 1994" />
                            </div>
                            <div class="flex flex-col pb-3">
                                <label for="phone_number" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Phone Number</label>
                                <input  id="phone_number" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="+2348012345678" />
                            </div>
                        </div>
                        <div>
                            <div class="flex flex-col pb-5">
                                <label for="first_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">First Name</label>
                                <input  id="first_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Labaika" />
                            </div>
                            <div class="flex flex-col pb-5">
                                <label for="last_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Last Name</label>
                                <input  id="last_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                            </div>
                            <div class="flex flex-col pb-5">
                                <label for="other_name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Other Name</label>
                                <input  id="other_name" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                            </div>
                            <div class="flex flex-col pb-3">
                                <label for="gender" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Gender</label>
                                <input  id="gender" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Male" />
                            </div>
                            <div class="flex flex-col pb-3">
                                <label for="nin_or_bvn" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">NIN / BVN</label>
                                <input  id="nin_or_bvn" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="0123456789101" />
                            </div>
                        </div>
                        <div class="col-span-2 flex items-center justify-center py-6">
                            <FormButton title="Save Changes" type="solid" />
                            <Button :onClick="toggleSlide" title="Cancle" />
                        </div>
                    </form>
                </div>
                <div class="p-5 px-10 grid grid-cols-2 gap-6" v-show="activeTab === 1">
                    <div>
                        <div class="flex flex-col pb-4">
                            <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">First Name</label>
                            <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Labaika" />
                        </div>
                        <div class="flex flex-col pb-4">
                            <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Other Name</label>
                            <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Aladeen" />
                        </div>
                        <div class="flex flex-col pb-4">
                            <label for="email" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                            <input id="email" class="text-tertiary-600 focus:outline-none focus:border focus:border-tertiary-700 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-tertiary-600 rounded border" placeholder="Lagos" />
                        </div>
                    </div>
                    <div class="col-span-2 flex items-center justify-center py-6">
                        <Button title="Save Changes" type="solid" />
                        <Button title="Cancle" />
                    </div>
                </div>
            </Tabs>
        </Sliding>
    </div>
</template>

<script>
// import Status from '~/components/Status.vue';
// import BioData from '~/components/BioData.vue';AssetsCard
// import ActivitiesLog from '~/components/ActivitiesLog.vue';
// import AssetsCard from '~/components/AssetsCard.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import FormButton from '~/components/FormButton.vue';
import Button from '~/components/Button.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import {mapState, mapActions} from 'vuex'
export default {
    name: 'Show',
    components: {
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
                "Profile",
                "Change Password",
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

            this.update_data
        },
        submitUpdateOwner () {
            this.updateOwner(this.update_data)
        }
    },
    asyncData({store, params,}) {
    //     let individualOwners = store.state.owner.individualOwners
    //     let owner = individualOwners.find( individualOwner => individualOwner.id === params.id)
    //     let update_data = {
    //         id: owner.id,
    //         firstName: owner.firstName,
    //         lastName: owner.lastName,
    //         otherName: owner.otherName,
    //         gender: owner.gender,
    //         ninOrBvn: owner.ninOrBvn,
    //         dateOfBirth: owner.dateOfBirth,
    //         phoneNumber: owner.phoneNumber,
    //         email: owner.email,
    //         address: {
    //             lga: owner.lga,
    //             state: owner.state,
    //             city: owner.city,
    //             street: owner.street,
    //         }
    //     }
    //     return {
    //         owner,
    //         update_data
    //     }
    },
}
</script>