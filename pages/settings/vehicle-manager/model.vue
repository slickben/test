<template>
    <div class="flex h-full mr-24">
        <div class="flex-none w-72 bg-white h-full sidebar-shadow">
            <SubSideBar title="Vehicle Manager"> 
                <nav class="pt-3">
                    <ul class=" text-tertiary-500">
                        <li
                        class="w-full border-b hover:border-transparent"
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/category">Registration Category</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/type">Vehicle Type</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/make">Vehicle Makes</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/model">Models</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/year">Year of Manufacture</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/engine">Engine Capacity</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/fuel">Fuel Type</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/hackney-codes">Hackney Codes</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/commercial-seat-code">Commercial Seat Code</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/vehicle-manager/license">Vehicle License</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </SubSideBar>
        </div>
        <div class="flex-grow">
            <SettingsTable :head_data="table_head_data">
                <template slot="head">
                    <div class="flex items-center justify-between py-10">
                        <h3 class="text-xl font-medium text-primary-900">Models</h3>
                        <div class="flex">
                            <PrimaryButton :onClick="toggleAddFunc" title="Add Model" type="solid" />
                            <!-- <PrimaryButton title="Import State" /> -->
                        </div>
                    </div>
                    <div class="flex items-center justify-between">
                        <div>
                            <input class="h-10 w-96 focus:outline-none rounded-md border text-sm px-4 bg-transparent" type="search" placeholder="search...." name="" id="">
                        </div>
                        <div class="flex items-center">
                            <span class="text-xs text-tertiary-500 mr-4 ">Show entries</span>
                            <select class="focus:outline-none w-16 h-10 border px-2 rounded-md bg-transparent" name="" id="">
                                <option selected value="10">10</option>
                                <option value="10">20</option>
                                <option value="10">30</option>
                            </select>
                        </div>
                    </div>
                </template>
                <tr v-for="model in models" class="hover:bg-primary-100 group ">
                    <td class="py-5 px-4"> {{ model.name }} </td>
                    <td class="py-5 px-4"> {{ model.make }} </td>
                    <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                        <div class="flex items-center">
                            <button @click="toggleEditFunc(model.name)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                <img src="~/assets/icons/edit.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-primary-500">Edit</p>
                            </button>
                            <button class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-action-danger">Delete</p>
                            </button>
                        </div>
                    </td>
                </tr>
            </SettingsTable>
        </div>
        <Sliding classes="min-w-105 w-full" v-show="toggle_add">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Add Model</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6" action="">
                    <div class="flex flex-col pb-6">
                        <label for="name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Name</label>
                        <input v-model="name" id="name" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Name" />
                    </div>

                    <div class="flex flex-col pb-6">
                        <label for="make" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Name</label>
                        <input v-model="make" id="make" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Name" />
                    </div>

                    <div class="col-span-2 flex items-center justify-center py-6">
                        <Button title="Done" type="solid" />
                        <Button title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>

        <Sliding classes="min-w-105 w-full" v-show="toggle_edit">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Edit Model</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleEditFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6" action="">
                    <div class="flex flex-col pb-6">
                        <label for="name" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Name</label>
                        <input v-model="name" id="name" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Name" />
                    </div>

                    <div class="flex flex-col pb-6">
                        <label for="make" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">Name</label>
                        <input v-model="make" id="make" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Name" />
                    </div>

                    <div class="col-span-2 flex items-center justify-center py-6">
                        <Button title="Done" type="solid" />
                        <Button title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>
    </div>
</template>

<script>
import SubSideBar from "~/components/SubSideBar.vue"
import SettingsTable from "~/components/SettingsTable.vue"
import TableFilter from "~/components/TableFilter.vue"
import PrimaryButton from "~/components/PrimaryButton.vue"
import Sliding from "~/components/Sliding.vue"
import Tabs from "~/components/Tabs.vue"
import {mapState} from 'vuex'
export default {
    components: {
        SubSideBar,
        SettingsTable,
        TableFilter,
        PrimaryButton,
        Sliding,
        Tabs
    },
    data() {
        return {
            table_head_data: ['Name',  '', ],
            toggle_add: false,
            toggle_edit: false,
            name: '',
            make: ''
        }
    },
    methods: {
        toggleAddFunc () {
            this.toggle_add = !this.toggle_add
        },
        toggleEditFunc (name) {
            this.toggle_edit = !this.toggle_edit
            this.models.map( model => {
                if(model.name === name) {
                    this.name = model.name
                }
            })
        },
        submitAddState () {

        },
        submitEditState () {
            
        }
    },
    computed: mapState({
        models:  state => state.settings.vehicle_manager.models
    }),
    async fetch ({ store }) {
        await store.dispatch('settings/vehicle_manager/getModels')
    }
}
</script>