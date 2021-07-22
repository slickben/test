<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle Manager">
            <nuxt-link class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" to="/vehicle-manager/vehicles/create">
                New Registration
            </nuxt-link>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full w-full">
            <Table classes="rounded-md" :head_data="table_head_data"> 
                <template v-slot:head>
                    <TableFilter />
                </template>

                <tr class="relative" v-for="vehicle in vehicles">
                    <td class="text-left py-4 px-5">{{ vehicle.attributes.plateNumber }}</td>
                    <!-- <td class="text-left py-4 px-5">{{ vehicle }}</td> -->
                    <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ getOwnerName(vehicle.attributes.ownedBy) }}</a></td>
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ vehicle.attributes.category }}</a></td>
                    <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ $moment(vehicle.attributes.createdAt).format('MMMM d, YYYY') }}</a></td>
                    <td class="text-left py-4 px-5">
                        <Status classes="w-24 h-8 text-xs" status="approved" />
                    </td>
                    <nuxt-link :to="`/vehicle-manager/${vehicle.type}/${vehicle.id}`" class="absolute inset-0 "></nuxt-link>
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
                if(owner.attributes.type === 'Business') {
                    ownersName = owner.attributes.businessName
                }else if (owner.attributes.type === 'Government') {
                    ownersName = owner.attributes.agencyName
                }else {
                    ownersName = `${owner.attributes.firstName} ${owner.attributes.lastName} ${owner.attributes.otherName ? owner.attributes.otherName : ''}`
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