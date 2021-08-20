<template>
    <div>
        <div class="pb-8 relative">
            <BreadCrumb title="Location">
                <button @click="toggleAddFunc" class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" >
                    Add Location
                </button>
            </BreadCrumb>
            <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
                <Table classes="rounded-md" :head_data="table_head_data"> 
                    <template v-slot:head>
                        <TableFilter class="pt-5 pb-2">
                            <template v-slot:filter>
                            <div class=" relative">
                                <button :class="[toggle_filter ? 'bg-primary-300 text-tertiary-900 border-primary-300' : 'bg-white text-tertiary-500 border-tertiary-400']" @click="toggleFilterFunc" class=" hover:bg-primary-300 hover:text-tertiary-900 hover:border-primary-300  flex items-center focus:outline-none py-3 px-4 rounded-md border  w-60">
                                    <img src="~/assets/images/filter.png" alt="" srcset="">
                                    <span class="pl-4 text-xs">Filter Owner</span>
                                </button>
                                <div v-show="toggle_filter" class="absolute pt-2 z-70 ">
                                    <div class="bg-white rounded-md text-tertiary-500 shadow">
                                        <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 rounded-t-md px-6">date</p>
                                        <div class="py-3 px-4">
                                            <p class="text-xs">Last</p>
                                            <div class="pt-1">
                                                <button class=" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs">
                                                3days
                                                </button>
                                                <button class=" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs">7 days</button>
                                                <button class=" focus:outline-none py-1 px-2 rounded text-primary-500 bg-primary-100 mr-2 text-xs">30 day</button>
                                            </div>
                                        </div>
                                        <div class="flex items-center">
                                        <div class="py-3 px-4">
                                            <p class="text-xs text-tertiary-500">From</p>
                                            <input class="border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none" type="date" name="" id="">
                                        </div>
                                        <div class="py-3 px-4 text-tertiary-500">
                                            <p class="text-xs">From</p>
                                            <input class="border py-1 px-2 rounded-md text-xs text-tertiary-500 focus:outline-none" type="date" name="" id="">
                                        </div>
                                        </div>
                                        <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6">Unigue Id</p>
                                        <div class="py-5 px-4">
                                        <input class="w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs" placeholder="Enter Unique Id" type="text">
                                        </div>
                                        <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6">Profile Name</p>
                                        <div class="py-5 px-4">
                                            <input class="w-full border-tertiary-400 py-2 px-4 border rounded focus:outline-none placeholder-tertiary-500 text-tertiary-700 text-xs" placeholder="Enter Profie Name" type="text">
                                        </div>
                                        <div class="py-5 px-4 flex justify-between items-center">
                                            <button class="text-xs focus:outline-none text-primary-500 hover:bg-primary-100 px-4 h-6 rounded-xl">clear</button>
                                            <button class="text-xs focus:outline-none text-white hover:bg-primary-500 bg-primary-400 px-4 h-6 rounded-xl ">Filter</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </template>
                            <div class="flex items-center">
                                <span class="text-xs text-tertiary-300 mr-1">Show entries</span>
                                <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                                    <option selected value="10">10</option>
                                    <option value="10">20</option>
                                    <option value="10">30</option>
                                </select>
                            </div>
                        </TableFilter>
                    </template>

                    <tr class="group hover:bg-primary-200 text-xs xl:text-sm" v-for="item in demo">
                        <td class="text-left py-5 px-6">{{ item.unique_Id }}</td>
                        <td class="text-left py-5 px-6">
                            <nuxt-link :to="`/user-manager/users/${ item.name }`">
                                {{item.name }}
                            </nuxt-link>
                        </td>
                        <!-- <td class="text-left py-5 px-6">{{ item.category }}</td> -->
                        <!-- <td class="text-left py-5 px-6"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td> -->
                        <td class="text-left py-5 px-6">
                            
                            <span class="text-xs font-normal pl-1 text-action-danger flex items-center">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0ZM2.42716 1.6157C2.89386 1.30755 3.44075 1.14314 4 1.14286C4.56005 1.14227 5.10777 1.30729 5.57429 1.61714L1.61714 5.57429C0.747696 4.25746 1.11034 2.48516 2.42716 1.6157ZM5.57284 6.3843C5.10614 6.69245 4.55927 6.85686 4 6.85714C3.43995 6.85773 2.89223 6.69271 2.42571 6.38286L6.38286 2.42571C7.2523 3.74252 6.88966 5.51484 5.57284 6.3843Z" fill="#9E0505"/>
                                </svg>
                                <span class="pl-1">enabled</span>
                            </span>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
        <Sliding classes="min-w-105 w-full" v-show="toggle_add">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Add Location</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddFunc" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6 px-10 pt-16" @submit.prevent="submitAdd">

                    <Input class="mb-6" v-model="location.name" type="text" id="name" lable="Name" place_holder="Enter Name" />

                    <InputSelect v-model="location.lga" type="text" id="lga" lable="Local Government Area" >
                    </InputSelect>

                    <div class="flex justify-start">
                        <CustomizeCheckbox v-model="location.status" id="status" label="Status"/>
                    </div>

                    <div class="col-span-2 flex items-center justify-end py-6 pt-10">
                        <FormButton class=" rounded-full" title="Done" type="solid" />
                        <Button class=" rounded-full" :onClick="toggleAddFunc" title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>
        <Sliding classes="min-w-105 w-full" v-show="toggle_edit">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Edit Location</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleAddEdit" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <div>
                <form class="p-6 px-10 pt-16" @submit.prevent="submitAdd">

                    <Input class="mb-6" v-model="location.name" type="text" id="name" lable="Name" place_holder="Enter Name" />

                    <InputSelect v-model="location.lga" type="text" id="lga" lable="Local Government Area" >
                    </InputSelect>

                    <div class="flex justify-start">
                        <CustomizeCheckbox v-model="location.status" id="status" label="Status"/>
                    </div>

                    <div class="col-span-2 flex items-center justify-end py-6 pt-10">
                        <FormButton class=" rounded-full" title="Done" type="solid" />
                        <Button class=" rounded-full" :onClick="toggleAddEdit" title="Cancle" />
                    </div>
                </form>
            </div>
        </Sliding>
    </div>
</template>

<script>
    import Table from '~/components/Table.vue';
    import Status from '~/components/Status.vue';
    import TableFilter from '~/components/TableFilter.vue';
    import BreadCrumb from "~/components/BreadCrumb.vue"
    import Input from "~/components/form/Input.vue"
    import InputSelect from "~/components/form/InputSelect.vue"
    import CustomizeCheckbox from "~/components/Document/CustomizeCheckbox.vue"
    import { mapState } from 'vuex'
    import Button from '~/components/Button.vue';
    export default {
        components: {
            Table,
            Status,
            TableFilter,
            BreadCrumb,
            Button,
            Input,
            InputSelect,
            CustomizeCheckbox
        },
        computed: {
        ...mapState({
            demo: state => state.demo,
            isloading: state => state.isloading,
        })
        },
        data() {
            return {
                table_head_data: ['Location', 'Local Government',  'Status'],
                addUserModal: false,
                editUserModal: false,
                toggle_add: false,
                toggle_edit: false,
                location: {
                    name: '',
                    lga: '',
                    status: false
                }
            }
        },
        methods: {
            toggleAddFunc() {
                this.toggle_add = !this.toggle_add
            },
            toggleAddEdit() {
                this.toggle_edit = !this.toggle_edit
            },
            toggleAddUserModal () {
                this.addUserModal = !this.addUserModal
            },
            toggleEditUserModal (id) {
                console.log(id)
                this.editUserModal = !this.editUserModal
            }
        }
    }
</script>