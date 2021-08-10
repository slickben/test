<template>
    <div class="pb-8">
        <BreadCrumb title="User Manager">
            <nuxt-link class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" to="/user-manager/role/create">
                New Role
            </nuxt-link>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
            <Table classes="rounded-md" :head_data="table_head_data"> 
                <template v-slot:head>
                    <TableFilter />
                </template>

                <tr class="relative text-xs xl:text-sm" v-for="vehicle in vehicles">
                    <td class="text-left py-4 px-5">{{ vehicle.plateNumber }}</td>
                    <!-- <td class="text-left py-4 px-5">{{ vehicle }}</td> -->
                    <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ getOwnerName(vehicle.ownedBy) }}</a></td>
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ vehicle.category }}</a></td>
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ $moment(vehicle.createdAt).format('MMMM d, YYYY') }}</a></td>
                    <td class="text-left py-4 px-5">
                        <Status classes="w-24 h-8 text-xs" status="approved" />
                    </td>
                    <nuxt-link :to="`/user-manager/role/${vehicle.id}`" class="absolute inset-0 "></nuxt-link>
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
                vehicles: state => state.vehicle.vehicles,
            }),
        },
        methods: {
            getOwnerName (owner) {
                let ownersName
                if (owner === null) {
                    return
                }
                if(owner.type === 'Business') {
                    ownersName = owner.businessName
                }else if (owner.type === 'Government') {
                    ownersName = owner.agencyName
                }else {
                    ownersName = `${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
                }

                return ownersName
            }
        },
        data() {
            return {
                table_head_data: ['Plate Number', 'Owner Name', 'Vehicle Category', 'Date Created', 'Verification Status']
            }
        },
    }
</script>