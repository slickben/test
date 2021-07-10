<template>
    <div class="grid grid-cols-1 gap-y-10">
        <div class="grid grid-cols-4 gap-x-12">
            <AnalysisCard heading="Summary" title="Owner Created" total_count="150" week_count="12" color="text-tertiary-600" />
            <AnalysisCard heading="Approved" title="Owner Approved" total_count="75" week_count="6" color="text-action-success" />
            <AnalysisCard heading="Pending" title="Owner Pending" total_count="50" week_count="4" color="text-action-warning" />
            <AnalysisCard heading="Denied" title="Owner Denied" total_count="25" week_count="2" color="text-action-danger" />
        </div>
        <div>
            <Table classes="rounded-3xl" :head_data="table_head_data"> 
                <template v-slot:head>
                    Recently Added
                </template>

                <tr v-for="item in demo">
                    <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                    <td class="text-left py-4 px-5">{{ item.name }}</td>
                    <td class="text-left py-4 px-5">{{ item.category }}</td>
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
import AnalysisCard from '~/components/AnalysisCard.vue';
import Table from '~/components/Table.vue';
import Status from '~/components/Status.vue';
import { mapState } from 'vuex'
export default {
    components: {
        AnalysisCard,
        Table,
        Status
    },
    computed: {
        ...mapState({
            demo: state => state.demo,
        })
    },
    data() {
        return {
            table_head_data: ['Unique Id #', 'Profile Name', 'Category', 'Date Created', 'Verification Status']
        }
    },
}
</script>