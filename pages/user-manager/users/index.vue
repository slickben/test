<template>
    <div>
        <div class="pb-8 relative">
            <BreadCrumb title="User Manager">
                <button @click="toggleAddUserModal" class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" >
                    New User
                </button>
            </BreadCrumb>
            <div class="max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full w-full">
                <Table classes="rounded-md" :head_data="table_head_data"> 
                    <template v-slot:head>
                        <TableFilter />
                    </template>

                    <tr class="group hover:bg-primary-200" v-for="item in demo">
                        <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                        <td class="text-left py-4 px-5">{{ item.name }}</td>
                        <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                        <td class="text-left py-4 px-5"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                        <td class="text-left py-4 px-5">
                            <Status classes="w-24 h-8 text-xs" :status="item.verification_status" />
                        </td>
                        <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                            <div class="flex items-center">
                                <button @click="toggleEditStateFunc(item.name)" class="flex items-center focus:outline-none pr-2 opacity-0 group-hover:opacity-100">
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
                </Table>
            </div>
        </div>
        <!--new owner form modal -->
        <div v-show="addUserModal" class="2xl:px-60 px-40 py-10 2xl:py-16 bg-opacity-80 absolute inset-0 bg-tertiary-600 z-40 overflow-hidden py-10">
            <div class="container mx-auto px-12 2xl:px-24 flex flex-col bg-white 2xl:py-8 py-6 h-full rounded-lg">
                <div class="2xl:pb-8 pb-6 flex-none">
                    <h1 class="text-2xl font-medium text-primary-900">Add User</h1>
                </div>
                <form class="flex-grow shadow-sm p-6 px-10 grid grid-cols-8 gap-10 gap-y-4 2l:gap-y-10 mb-3">
                    <div class="col-span-2">
                        <div class="shadow-sm px-8 py-3">
                            <img class="rounded-full mx-auto" src="https://via.placeholder.com/150" alt="" srcset="">
                            <div class="py-5 2xl:px-6">
                                <div class=" relative px-6 min-w-28 min-h-10 text-primary-500 text-xs flex items-center justify-center rounded-xl  focus:outline-none border border-primary-300 hover:bg-primary-200 hover:text-primary-600">
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
                addUserModal: false
            }
        },
        methods: {
            toggleAddUserModal () {
                this.addUserModal = !this.addUserModal
            }
        }
    }
</script>