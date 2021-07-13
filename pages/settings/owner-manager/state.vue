<template>
    <div class="flex h-full mr-24">
        <div class="flex-none w-72 bg-white h-full sidebar-shadow">
            <SubSideBar> 

            </SubSideBar>
        </div>
        <div class="flex-grow">
            <SettingsTable :head_data="table_head_data">
                <template slot="head">
                    <div class="flex items-center justify-between py-10">
                        <h3 class="text-xl font-medium text-primary-900">State</h3>
                        <div class="flex">
                            <PrimaryButton :onClick="toggleAddStateFunc" title="Add State" type="solid" />
                            <PrimaryButton title="Import State" />
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
                            <button class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
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
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Add State</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddStateFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6" action="">
                    <div class="flex flex-col pb-6">
                        <label for="State" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                        <input v-model="State" id="State" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter State" />
                    </div>
                    <div class="flex flex-col">
                        <label for="status_code" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State Code</label>
                        <input v-model="status_code" id="status_code" class="text-tertiary-300 focus:outline-none  bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Status Code" />
                    </div>

                    <div class="col-span-2 flex items-center justify-center py-6">
                        <Button title="Done" type="solid" />
                        <Button title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>

        <Sliding classes="min-w-105 w-full" v-show="toggle_edit_state">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Edit State</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleEditStateFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6" action="">
                    <div class="flex flex-col pb-6">
                        <label for="State" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State</label>
                        <input v-model="edit_state.name" id="State" type="text" class="text-tertiary-300 focus:outline-none f bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter State" />
                    </div>
                    <div class="flex flex-col">
                        <label for="status_code" class="text-tertiary-500 text-xs font-normal leading-tight tracking-normal mb-2 text-left">State Code</label>
                        <input v-model="edit_state.code" id="status_code" class="text-tertiary-300 focus:outline-none  bg-white font-normal w-full h-10 flex items-center pl-3 text-xs border-tertiary-500 rounded border" placeholder="Enter Status Code" />
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
            table_head_data: ['Name', 'State Code', '', ],
            toggle_add_state: false,
            toggle_edit_state: false,
            state: '',
            status_code: '',
            edit_state: {}
        }
    },
    methods: {
        toggleAddStateFunc () {
            this.toggle_add_state = !this.toggle_add_state
        },
        toggleEditStateFunc (name) {
            this.toggle_edit_state = !this.toggle_edit_state
            this.states.map( state => {
                if(state.name === name) {
                    this.edit_state = state
                }
            })
        },
        submitAddState () {

        },
        submitEditState () {
            
        }
    },
    computed: mapState({
        states:  state => state.settings.owner_manager.states
    }),
    async fetch ({ store }) {
        await store.dispatch('settings/owner_manager/getStates')
    }
}
</script>