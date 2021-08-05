<template>
    <div class="flex h-full xl:mr-24">
        <div class="flex-none xl:w-72 bg-white h-full sidebar-shadow">
            <SubSideBar title="Vehicle Manager"> 
                <nav class="pt-3">
                    <ul class=" text-tertiary-500">
                        <li
                        class="w-full border-b hover:border-transparent"
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/category">Registration Category</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/type">Vehicle Type</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/make">Vehicle Makes</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/model">Models</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/year">Year of Manufacture</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/engine">Engine Capacity</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/fuel">Fuel Type</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/hackney-codes">Hackney Codes</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/commercial-seat-code">Commercial Seat Code</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/document">Vehicle Document</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/vehicle-manager/Charges"> Charges</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </SubSideBar>
        </div>
        <div class="flex-grow px-10 xl:px-0">
            <SettingsTable :head_data="table_head_data">
                <template slot="head">
                    <div class="flex items-center justify-between pb-6 xl:py-10">
                        <h3 class="text-xl font-medium text-primary-900">Commercial Seat Codes</h3>
                        <div class="flex">
                            <PrimaryButton :onClick="toggleAddFunc" title="Add Seat Code" type="solid" />
                            <!-- <PrimaryButton title="Import Commercial Seat Code" /> -->
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
                <tr v-for="commercial_seat_code in commercial_seat_codes" class="hover:bg-primary-100 group ">
                    <td class="py-5 px-4"> {{ commercial_seat_code.code }} </td>
                    <td class="py-5 px-4"> {{ commercial_seat_code.revenue }} </td>
                    <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                        <div class="flex items-center">
                            <button @click="toggleEditFunc(commercial_seat_code.code)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                <img src="~/assets/icons/edit.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-primary-500">Edit</p>
                            </button>
                            <button @click="deleteCommercialSeatCode(commercial_seat_code.id)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
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
                        <h4 class="text-2xl text-primary-900 font-semibold">Add Seat Code</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6 px-10 pt-16" @submit.prevent="submitAdd">

                    <Input class="pb-6" v-model="commercial_seat_code.revenue" type="number" id="revenue" lable="Revenue" place_holder="Enter Name" />
                    <Input v-model="commercial_seat_code.code" type="number" id="code" lable="Code" place_holder="Enter Name" />

                    <div class="col-span-2 flex items-center justify-end py-6 pt-10">
                        <FormButton title="Done" type="solid" />
                        <Button :onClick="toggleAddFunc" title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>

        <Sliding classes="min-w-105 w-full" v-show="toggle_edit">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Edit Seat Code</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleEditFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6 px-10 pt-16" @submit.prevent="submitEdit">

                    <Input class="pb-6" v-model="commercial_seat_code.revenue" type="number" id="revenue" lable="Revenue" place_holder="Enter Name" />
                    <Input v-model="commercial_seat_code.code" type="number" id="code" lable="Code" place_holder="Enter Name" />

                    <div class="col-span-2 flex items-center justify-end py-6 pt-10">
                        <FormButton title="Done" type="solid" />
                        <Button :onClick="toggleEditFunc" title="Cancle" />
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
import Button from "~/components/Button.vue"
import FormButton from "~/components/FormButton.vue"
import Input from "~/components/form/Input.vue"
import {mapState, mapActions} from 'vuex'
export default {
    components: {
        SubSideBar,
        SettingsTable,
        TableFilter,
        PrimaryButton,
        Sliding,
        Tabs,
        Button,
        FormButton,
        Input
    },
    data() {
        return {
            table_head_data: ['Seater', 'Revenue', '', ],
            toggle_add: false,
            toggle_edit: false,
            commercial_seat_code: {
                revenue: '',
                code: ''
            },
            selected_id: ''
            
        }
    },
    methods: {
        ...mapActions({
            addCommercialSeatCode: 'settings/vehicle_manager/addCommercialSeatCode',
            deleteCommercialSeatCode: 'settings/vehicle_manager/deleteCommercialSeatCode',
            editCommercialSeatCode: 'settings/vehicle_manager/editHackneyCode',
        }),
        toggleAddFunc () {
            this.toggle_add = !this.toggle_add
            this.commercial_seat_code.name = ''
            // this.commercial_seat_code.code = ''
        },
        toggleEditFunc (code) {
            this.toggle_edit = !this.toggle_edit
            this.commercial_seat_codes.map( commercial_seat_code => {
                if(commercial_seat_code.code === code) {
                    this.commercial_seat_code.revenue = commercial_seat_code.revenue
                    this.commercial_seat_code.code = commercial_seat_code.code
                    this.selected_id = commercial_seat_code.id
                }
            })
        },
        submitAdd () {
            this.addCommercialSeatCode(this.commercial_seat_code)
        },
        submitEdit () {
            this.editCommercialSeatCode({commercial_seat_code: this.commercial_seat_code, id: this.selected_id})
        }
    },
    computed: mapState({
        commercial_seat_codes:  state => state.settings.vehicle_manager.commercial_seat_codes
    }),
    async fetch ({ store }) {
        await store.dispatch('settings/vehicle_manager/getCommercialSeatCodes')
    }
}
</script>