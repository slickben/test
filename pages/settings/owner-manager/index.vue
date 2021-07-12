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
                            <PrimaryButton title="Add State" type="solid" />
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
                <tr class="hover:bg-primary-100 group ">
                    <td class="py-5 px-4">b</td>
                    <td class="py-5 px-4"></td>
                    <td class="py-5 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">dfgcgfyvd</td>
                </tr>
            </SettingsTable>
        </div>
    </div>
</template>

<script>
import SubSideBar from "~/components/SubSideBar.vue"
import SettingsTable from "~/components/SettingsTable.vue"
import TableFilter from "~/components/TableFilter.vue"
import PrimaryButton from "~/components/PrimaryButton.vue"
export default {
    components: {
        SubSideBar,
        SettingsTable,
        TableFilter,
        PrimaryButton
    },
    data() {
        return {
            table_head_data: ['Name', 'State Code', '', ]
        }
    },
}
</script>