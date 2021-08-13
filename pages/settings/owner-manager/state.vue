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
                        <h3 class="text-xl font-medium text-primary-900">State</h3>
                        <div class="flex">
                            <PrimaryButton :onClick="toggleAddStateFunc" title="Add State" type="solid" />
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
                <tr v-for="state in states" class="hover:bg-primary-100 group ">
                    <td class="py-5 px-4"> {{ state.name }} </td>
                    <td class="py-5 px-4"> {{ state.code }} </td>
                    <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                        <div class="flex items-center">
                            <button class="flex items-center focus:outline-none pr-2">
                                <img v-if="state.default === 1" src="~/assets/icons/star.svg" alt="" srcset="">
                                <img v-else class="opacity-0 group-hover:opacity-100" src="~/assets/icons/star.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-tertiary-800 opacity-0 group-hover:opacity-100">Set as default</p>
                            </button>
                            <button @click="toggleEditStateFunc(state.name)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                <img src="~/assets/icons/edit.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-primary-500">Edit</p>
                            </button>
                            <button @click="deleteState(state.id)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                <p class="text-xs font-normal pl-1 text-action-danger">Delete</p>
                            </button>
                        </div>
                    </td>
                </tr>
            </SettingsTable>
        </div>
        <Sliding classes="min-w-105 w-full" v-show="toggle_add_state">
            <template slot="head">
                <div class="flex items-center justify-between px-2">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Add State</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddStateFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6 px-8" @submit.prevent="submitAddState">
                    <div class="flex flex-col pb-6 pt-10">
                        <label for="State" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                        <input v-model="C_state.name" id="State" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter State" />
                    </div>
                    <div class="flex flex-col pb-6">
                        <label for="status_code" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State Code</label>
                        <input v-model="C_state.code" id="status_code" class="text-tertiary-300 focus:outline-none  bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Status Code" />
                    </div>
                    <div class="flex">
                        <label class="flex items-center">
                            <input v-model="C_state.default" type="checkbox" class="form-checkbox ">
                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600">Set To Default </span>
                        </label>
                    </div>
                    <div class="col-span-2 flex items-center justify-end py-6 pt-16">
                        <FormButton title="Done" type="solid" />
                        <Button :onClick="toggleAddStateFunc" title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>

        <Sliding classes="min-w-105 w-full" v-show="toggle_edit_state">
            <template slot="head">
                <div class="flex items-center justify-between px-2">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Edit State</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleEditStateFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6 px-8" @submit.prevent="submitEditState">
                    <div class="flex flex-col pb-6 pt-10">
                        <label for="State" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                        <input v-model="edit_state.name" id="State" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter State" />
                    </div>
                    <div class="flex flex-col">
                        <label for="status_code" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State Code</label>
                        <input v-model="edit_state.code" id="status_code" class="text-tertiary-300 focus:outline-none  bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Status Code" />
                    </div>

                    <div class="col-span-2 flex items-center justify-end py-6">
                        <FormButton title="Done" type="solid" />
                        <Button :onClick="toggleEditStateFunc" title="Cancle" />
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
import Button from "~/components/Button.vue"
import FormButton from "~/components/FormButton.vue"
import Sliding from "~/components/Sliding.vue"
import Tabs from "~/components/Tabs.vue"
import {mapState, mapActions} from 'vuex'
export default {
    components: {
        SubSideBar,
        SettingsTable,
        TableFilter,
        PrimaryButton,
        Button,
        FormButton,
        Sliding,
        Tabs
    },
    data() {
        return {
            table_head_data: ['Name', 'State Code', '', ],
            toggle_add_state: false,
            toggle_edit_state: false,
            C_state: {
                name: '',
                code: '',
                default: false
            },
            edit_state: {}
        }
    },
    computed: mapState({
        states:  state => state.settings.owner_manager.states
    }),
    methods: {
        ...mapActions({
            addState: 'settings/owner_manager/addState',
            deleteState: 'settings/owner_manager/deleteState',
            editState: 'settings/owner_manager/editState',
        }),
        toggleAddStateFunc () {
            this.toggle_add_state = !this.toggle_add_state
        },
        toggleEditStateFunc (name) {
            this.toggle_edit_state = !this.toggle_edit_state
            this.states.map( state => {
                if(state.name === name) {
                    this.edit_state.name = state.name
                    this.edit_state.code = state.code
                    this.edit_state.id = state.id
                    this.edit_state.default = state.default
                }
            })
        },
        submitAddState () {
            this.addState(this.C_state)

            this.C_state.name = ""
            this.C_state.code = ""
        },
        submitEditState () {
            this.editState(this.edit_state)
        },
    },
    async fetch ({ store }) {
        await store.dispatch('settings/owner_manager/getStates')
    }
}
</script>