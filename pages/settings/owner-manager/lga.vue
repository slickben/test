<template>
    <div class="flex h-full xl:mr-24">
        <div class="flex-none xl:w-72 bg-white h-full sidebar-shadow">
            <SubSideBar title="Owner Manager"> 
                <nav class="pt-3">
                    <ul class=" text-tertiary-500">
                        <li
                        class="w-full border-b hover:border-transparent"
                        >
                        <nuxt-link class="py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/owner-manager/state">State</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/owner-manager/lga">Local Government Area</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/owner-manager/prefix">Prefix</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/owner-manager/marital-status">Marital Status</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/owner-manager/agency-category">Agency Ministry</nuxt-link>
                        </li>
                        <li
                        class="w-full border-b hover:border-transparent "
                        >
                        <nuxt-link class="py-4 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block text-xs xl:text-sm" to="/settings/owner-manager/means-of-identity">Means of Identification</nuxt-link>
                        </li>
                    </ul>
                </nav>
            </SubSideBar>
        </div>
        <div class="flex-grow px-10 xl:px-0">
            <SettingsTable :head_data="table_head_data">
                <template slot="head">
                    <div class="flex items-center justify-between pb-6 xl:py-10">
                        <h3 class="text-xl font-medium text-primary-900">Local Government Area</h3>
                        <div class="flex">
                            <PrimaryButton :onClick="toggleAddFunc" title="Add Lga" type="solid" />
                            <!-- <PrimaryButton title="Import Lga" /> -->
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
                <tr v-for="lga in lgas" class="hover:bg-primary-100 group ">
                    <td class="py-5 px-4"> {{ lga.name }} </td>
                    <td class="py-5 px-4"> {{ lga.state }} </td>
                    <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                        <div class="flex items-center">
                            <button class="flex items-center focus:outline-none pr-2">
                                <img v-if="lga.default === 1" src="~/assets/icons/star.svg" alt="" srcset="">
                                <img v-else class="opacity-0 group-hover:opacity-100" src="~/assets/icons/star.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-tertiary-800 opacity-0 group-hover:opacity-100">Set as default</p>
                            </button>
                            <button @click="toggleEditFunc(lga.name)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                <img src="~/assets/icons/edit.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-primary-500">Edit</p>
                            </button>
                            <button @click="deleteLga(lga.id)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
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
                        <h4 class="text-2xl text-primary-900 font-semibold">Add Lga</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-8 px-10 pt-16" @submit.prevent="submitAddLga">
                    <Input class="pb-6" v-model="lga.name" id="name" type="text" lable="Name" place_holder="enter name" />

                    <SelectInput v-model="lga.state_id" lable="State" id="status_code">
                        <option v-for="state in states" :value="state.id">{{state.name}}</option>
                    </SelectInput>

                    <div class="col-span-2 flex items-center justify-center py-6">
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
                        <h4 class="text-2xl text-primary-900 font-semibold">Edit Lga</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleEditFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-8 px-10 pt-16" @submit.prevent="submitEditLga">
                    <Input class="pb-6" v-model="lga.name" id="name" type="text" lable="Name" place_holder="enter name" />

                    <SelectInput v-model="lga.state_id" lable="State" id="status_code">
                        <option :value="C_state.id">{{ C_state.name }}</option>
                        <option v-for="state in states" :value="state.id">{{state.name}}</option>
                    </SelectInput>

                    <div class="col-span-2 flex items-center justify-center py-6">
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
import SelectInput from "~/components/form/InputSelect.vue"
import {mapState, mapActions} from 'vuex'
export default {
    components: {
        SubSideBar,
        SettingsTable,
        TableFilter,
        PrimaryButton,
        Sliding,
        Tabs,
        Input,
        SelectInput,
        Button,
        FormButton
    },
    data() {
        return {
            table_head_data: ['Name', 'State', '', ],
            toggle_add: false,
            toggle_edit: false,
            lga:{
                name: '',
                state_id: '',
            },
            lga_id: '',
            C_state: ''
        }
    },
    methods: {
        ...mapActions({
            addLga: 'settings/owner_manager/addLga',
            deleteLga: 'settings/owner_manager/deleteLga',
            editLga: 'settings/owner_manager/editLga',
        }),
        toggleAddFunc () {
            this.toggle_add = !this.toggle_add
        },
        toggleEditFunc (name) {
            this.toggle_edit = !this.toggle_edit
            
            this.lgas.map( lga => {
                if(lga.name === name) {
                    this.C_state = this.states.find(state => state.name === lga.state)
                    this.lga.name = lga.name
                    this.lga.state_id = this.C_state.id
                    this.lga_id = lga.id
                }
            })
        },
        submitAddLga () {
            this.addLga(this.lga)
        },
        submitEditLga () {
            this.editLga({lga: this.lga, id: this.lga_id})
        }
    },
    computed: mapState({
        lgas:  state => state.settings.owner_manager.lgas,
        states:  state => state.settings.owner_manager.states
    }),
    async fetch ({ store }) {
        await store.dispatch('settings/owner_manager/getLgas')
        await store.dispatch('settings/owner_manager/getStates')
    }
}
</script>