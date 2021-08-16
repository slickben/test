<template>
    <div>
        <div class="pb-8 relative">
            <BreadCrumb title="Users">
                <button @click="toggleAddUserModal" class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" >
                    Create
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
                        <td class="text-left py-5 px-6"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                        <td class="text-left py-5 px-6">
                            
                            <span class="text-xs font-normal pl-1 text-action-danger flex items-center">
                                <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0ZM2.42716 1.6157C2.89386 1.30755 3.44075 1.14314 4 1.14286C4.56005 1.14227 5.10777 1.30729 5.57429 1.61714L1.61714 5.57429C0.747696 4.25746 1.11034 2.48516 2.42716 1.6157ZM5.57284 6.3843C5.10614 6.69245 4.55927 6.85686 4 6.85714C3.43995 6.85773 2.89223 6.69271 2.42571 6.38286L6.38286 2.42571C7.2523 3.74252 6.88966 5.51484 5.57284 6.3843Z" fill="#9E0505"/>
                                </svg>
                                <span class="pl-1">blocked</span>
                            </span>
                        </td>
                        <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                            <div class="flex items-center">
                                <button @click="toggleEditUserModal(item.name)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                    <img src="~/assets/icons/edit.svg" alt="" srcset="">
                                    <p class="text-xs font-normal pl-1 text-primary-500">Edit</p>
                                </button>
                                <button class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 0C1.79086 0 0 1.79086 0 4C0 6.20914 1.79086 8 4 8C6.20914 8 8 6.20914 8 4C8 1.79086 6.20914 0 4 0ZM2.42716 1.6157C2.89386 1.30755 3.44075 1.14314 4 1.14286C4.56005 1.14227 5.10777 1.30729 5.57429 1.61714L1.61714 5.57429C0.747696 4.25746 1.11034 2.48516 2.42716 1.6157ZM5.57284 6.3843C5.10614 6.69245 4.55927 6.85686 4 6.85714C3.43995 6.85773 2.89223 6.69271 2.42571 6.38286L6.38286 2.42571C7.2523 3.74252 6.88966 5.51484 5.57284 6.3843Z" fill="#9E0505"/>
                                    </svg>
                                    <p class="text-xs font-normal pl-1 text-action-danger">Block</p>
                                </button>
                            </div>
                        </td>
                    </tr>
                </Table>
            </div>
        </div>
        <!--new owner form modal -->
        <div v-show="addUserModal" class="2xl:px-60 xl:px-40 px-10 py-10 2xl:py-16 bg-opacity-80 absolute inset-0 bg-tertiary-600 z-40 overflow-hidden py-10">
            <div class="container mx-auto px-12 2xl:px-24 flex flex-col bg-white 2xl:py-8 py-6 h-full rounded-lg">
                <div class="2xl:pb-8 pb-6 flex-none">
                    <h1 class="text-2xl font-medium text-primary-900">Add User</h1>
                </div>
                <form class="flex-grow shadow-sm p-6 px-10 grid grid-cols-8 gap-10 gap-y-4 2l:gap-y-10 mb-3">
                    <div class="col-span-2">
                        <div class="shadow-sm px-8 py-3">
                            <img class="rounded-full mx-auto" src="https://via.placeholder.com/150" alt="" srcset="">
                            <div class="py-5 2xl:px-6">
                                <div class=" relative xl:px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center rounded-xl  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600">
                                    <input class="opacity-0 absolute inset-0" type="file" name="" id="">
                                    Upload Photo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="grid grid-cols-2 p-10 shadow-sm gap-6 2xl:gap-10 pr-20 2xl:pr-36">
                            <div class="flex flex-col w-full">
                                <label for="first_name" class="pb-1 text-xs font-normal  text-tertiary-500 dark:text-gray-100">First Name</label>
                                <input type="text" id="first_name"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3  rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter First Name" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="last_name" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Last Name</label>
                                <input type="text" id="last_name"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Plate Number" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="plate_number" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Phone Number</label>
                                <input type="text" id="plate_number"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Plate Number" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="email" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Email Addresss</label>
                                <input type="text" id="email"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresss" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="location" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Location</label>
                                <select type="text" id="location"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresssr">
                                    <option value="">Select Location</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="role" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Assign Role</label>
                                <select type="text" id="role"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresssr">
                                    <option value="">Select Assign Role</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="department" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Department</label>
                                <select type="text" id="department"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresssr">
                                    <option value="">Select Department</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="password" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Create Password</label>
                                <input type="text" id="password"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Create Password" />
                            </div>
                        </div>
                    </div>
                    <div class="2xl:py-5 col-span-8 flex justify-end items-center">
                        <Button type="solid" title="Add" />
                        <Button :onClick="toggleAddUserModal" title="cancle" />
                    </div>
                </form>
            </div>
        </div>

        <div v-show="editUserModal" class="2xl:px-60 xl:px-40 px-10 py-10 2xl:py-16 bg-opacity-80 absolute inset-0 bg-tertiary-600 z-40 overflow-hidden py-10">
            <div class="container mx-auto px-12 2xl:px-24 flex flex-col bg-white 2xl:py-8 py-6 h-full rounded-lg">
                <div class="2xl:pb-8 pb-6 flex-none">
                    <h1 class="text-2xl font-medium text-primary-900">Add User</h1>
                </div>
                <form class="flex-grow shadow-sm p-6 px-10 grid grid-cols-8 gap-10 gap-y-4 2l:gap-y-10 mb-3">
                    <div class="col-span-2">
                        <div class="shadow-sm px-8 py-3">
                            <img class="rounded-full mx-auto" src="https://via.placeholder.com/150" alt="" srcset="">
                            <div class="py-5 2xl:px-6">
                                <div class=" relative xl:px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center rounded-xl  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600">
                                    <input class="opacity-0 absolute inset-0" type="file" name="" id="">
                                    Upload Photo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-6">
                        <div class="grid grid-cols-2 p-10 shadow-sm gap-6 2xl:gap-10 pr-20 2xl:pr-36">
                            <div class="flex flex-col w-full">
                                <label for="first_name" class="pb-1 text-xs font-normal  text-tertiary-500 dark:text-gray-100">First Name</label>
                                <input type="text" id="first_name"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3  rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter First Name" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="last_name" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Last Name</label>
                                <input type="text" id="last_name"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Plate Number" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="plate_number" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Phone Number</label>
                                <input type="text" id="plate_number"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Plate Number" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="email" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Email Addresss</label>
                                <input type="text" id="email"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresss" />
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="location" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Location</label>
                                <select type="text" id="location"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresssr">
                                    <option value="">Select Location</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="role" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Assign Role</label>
                                <select type="text" id="role"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresssr">
                                    <option value="">Select Assign Role</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="department" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Department</label>
                                <select type="text" id="department"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Email Addresssr">
                                    <option value="">Select Department</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-full">
                                <label for="password" class="pb-1 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Create Password</label>
                                <input type="text" id="password"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-3 rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Create Password" />
                            </div>
                        </div>
                    </div>
                    <div class="2xl:py-5 col-span-8 flex justify-end items-center">
                        <Button type="solid" title="Add" />
                        <Button :onClick="toggleEditUserModal" title="cancle" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Table from '~/components/Table.vue';
    import Status from '~/components/Status.vue';
    import TableFilter from '~/components/TableFilter.vue';
    import BreadCrumb from "~/components/BreadCrumb.vue"
    import { mapState } from 'vuex'
import Button from '~/components/Button.vue';
    export default {
        components: {
            Table,
            Status,
            TableFilter,
            BreadCrumb,
                Button
        },
        computed: {
        ...mapState({
            demo: state => state.demo,
        })
        },
        data() {
            return {
                table_head_data: ['Name', 'Email', 'Department',  'Status', ''],
                addUserModal: false,
                editUserModal: false,
                toggle_filter: false
            }
        },
        methods: {
            toggleAddUserModal () {
                this.addUserModal = !this.addUserModal
            },
            toggleEditUserModal (id) {
                console.log(id)
                this.editUserModal = !this.editUserModal
            },
            toggleFilterFunc( ) {
                this.toggle_filter = !this.toggle_filter
            }
        }
    }
</script>