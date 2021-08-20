<template>
    <div>
        <BreadCrumb title="Revenue"/>
        <div class="pb-8 grid grid-cols-1 gap-y-10 max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full">
            <Table classes="rounded-md" :head_data="table_head_data"> 
                <template v-slot:head>
                    <TableFilter />
                </template>

                <tr class="relative" v-for="individualOwner in individualOwners">
                    <td class="text-left py-5 px-6">{{ '23423' }}</td>
                    <td class="text-left py-5 px-6">{{ getFullName(individualOwner) }}</td>
                    <!-- <td class="text-left py-5 px-6">{{ item.category }}</td> -->
                    <td class="text-left py-5 px-6"><a class="hover:text-blue-500" >{{ individualOwner.address.city }}</a></td>
                    <td class="text-left py-5 px-6">
                        <Status classes="w-24 h-8 text-xs" status="pending" />
                    </td>
                    <nuxt-link :to="`/owner-manager/${individualOwner.type}/${individualOwner.id}`" class="absolute inset-0 "></nuxt-link>
                </tr>
            </Table>
        </div>
    </div>
</template>

<script>
    import Table from '~/components/Table.vue';
    import Status from '~/components/Status.vue';
    import BreadCrumb from '~/components/BreadCrumb.vue';
    import { mapState } from 'vuex'
    export default {
        components: {
            Table,
            Status,
            BreadCrumb
        },
        computed: {
            ...mapState({
                individualOwners: state => state.owner.individualOwners,
                isloading: state => state.isloading,
            }),
        },
        methods: {
            getFullName (owner) {
                return `${owner.title ? owner.title : ''} ${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
            }
        },
        data() {
            return {
                table_head_data: ['Unique Id #', 'Name', 'City',  'Verification Status']
            }
        },
    }
</script>