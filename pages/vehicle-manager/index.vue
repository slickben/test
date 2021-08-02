<template>
    <div class="pb-8">
        <BreadCrumb title="Vehicle Manager">
            <nuxt-link class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" to="/vehicle-manager/vehicles/create">
                New Registration
            </nuxt-link>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
            <div class="grid grid-cols-1 gap-y-10">
                <div class="grid grid-cols-4 xl:gap-x-12 gap-x-8">
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

                        <tr class="relative" v-for="vehicle in vehicles">
                            <td class="text-left py-4 px-5">{{ vehicle.plateNumber }}</td>
                            <!-- <td class="text-left py-4 px-5">{{ vehicle }}</td> -->
                            <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >
                                {{ getOwnerName(vehicle.ownedBy) }}</a></td>
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ vehicle.category }}</a></td>
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ $moment(vehicle.createdAt).format('MMMM d, YYYY') }}</a></td>
                            <td class="text-left py-4 px-5">
                                <Status classes="w-24 h-8 text-xs" status="approved" />
                            </td>
                            <!-- <nuxt-link :to="`/vehicle-manager/${vehicle.type}/${vehicle.id}`" class="absolute inset-0 "></nuxt-link> -->
                        </tr>
                    </Table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AnalysisCard from '~/components/AnalysisCard.vue';
import Table from '~/components/Table.vue';
import Status from '~/components/Status.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import { mapState } from 'vuex'
export default {
    components: {
        AnalysisCard,
        Table,
        Status,
        BreadCrumb
    },
    computed: {
        ...mapState({
            vehicles: state => state.vehicle.vehicles,
        })
    },
    methods: {
        getOwnerName (owner) {
            let ownersName
            if (!owner) {
                return
            }
            console.log(owner)
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
            table_head_data: ['Plate Number', 'Owner Name', 'Vehicle Category', 'Date Created', 'Verification Status'],
            toggleSlide: false
        }
    },
}
</script>