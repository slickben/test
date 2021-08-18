<template>
    <div class="pb-8">
        <BreadCrumb title="Revalidation"/>
        <div class="max-w-lg-screen mx-auto px-32 xl:py-16 py-10 2xl:px-0  h-full w-full">
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
                                <p class="text-xs text-tertiary-800 bg-tertiary-200 py-2 px-6">Category</p>
                                <div class="py-3 px-4">
                                <div class="pt-1 flex items-center flex-wrap">
                                    <div class="flex items-center pb-6 mr-6">
                                        <input  id="individual" name="individual" class="w-3 h-3 mr-2" type="checkbox" />
                                        <label for="individual" class="text-xs text-tertiary-500">Individual</label>
                                    </div>
                                    <div class="flex items-center pb-6 mr-6">
                                        <input  id="individual" name="individual" class="w-3 h-3 mr-2" type="checkbox" />
                                        <label for="individual" class="text-xs text-tertiary-500">Business</label>
                                    </div>
                                    <div class="flex items-center mr-6">
                                        <input  id="individual" name="individual" class="w-3 h-3 mr-2" type="checkbox" />
                                        <label for="individual" class="text-xs text-tertiary-500">Goverment Agency</label>
                                    </div>
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

                <tr v-for="item in demo">
                    <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                    <td class="text-left py-4 px-5">{{ item.name }}</td>
                    <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                    <td class="text-left py-4 px-5">
                        <Status classes="w-24 h-8 text-xs" :status="item.verification_status" />
                    </td>
                </tr>
            </Table>
        </div>
    </div>
</template>

<script>
    import Table from '~/components/Table.vue';
    import Status from '~/components/Status.vue';
    import TableFilter from '~/components/TableFilter.vue';
    import BreadCrumb from "~/components/BreadCrumb.vue"
    import { mapState } from 'vuex'
    export default {
        components: {
            Table,
            Status,
            TableFilter,
            BreadCrumb
        },
        computed: {
        ...mapState({
            demo: state => state.demo,
        })
        },
        data() {
            return {
                table_head_data: ['Unique Id #', 'Business Name', 'City',  'Verification Status']
            }
        },
    }
</script>