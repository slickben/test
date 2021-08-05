<template>
    <div class="flex h-full xl:mr-24">
        
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
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        redirect('category')
    },
}
</script>