<template>
    <div>
        <Table :head_data="table_head_data"> 
            <template v-slot:head>
                <div class="flex items-center justify-between">
                    <div>
                        <input class="h-10 w-96 focus:outline-none rounded-md border text-sm px-4" type="search" placeholder="search...." name="" id="">
                    </div>
                    <div class="flex items-center">
                        <span class="text-xs text-tertiary-500 mr-4">Show entries</span>
                        <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                            <option selected value="10">10</option>
                            <option value="10">20</option>
                            <option value="10">30</option>
                        </select>
                    </div>
                </div>
            </template>

            <tr v-for="item in demo">
                <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                <td class="text-left py-4 px-5">{{ item.name }}</td>
                <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                <td class="text-left py-4 px-5"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                <td class="text-left py-4 px-5">
                    <Status :status="item.verification_status" />
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