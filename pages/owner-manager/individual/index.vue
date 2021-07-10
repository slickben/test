<template>
    <div class="pb-8">
        <Table classes="rounded-md" :head_data="table_head_data"> 
            <template v-slot:head>
                <TableFilter />
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
</template>

<script>
    import Table from '~/components/Table.vue';
    import Status from '~/components/Status.vue';
    import { mapState } from 'vuex'
    export default {
        components: {
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
                table_head_data: ['Unique Id #', 'Business Name', 'City',  'Verification Status']
            }
        },
    }
</script>