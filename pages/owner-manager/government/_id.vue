<template>
    <div>
        <BreadCrumb title="Owner Manager"/>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Agency Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.agencyName ? owner.agencyName : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">District</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.district ? owner.district : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.state ? owner.state : '-' }}</p>
                    </div>
                </template>
                <div class="col-span-3 grid grid-cols-1 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Ministry</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.ministry ? owner.ministry : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.address ? owner.address : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Name of Representative</h5>
                            <p class="text-tertiary-700 font-medium">{{ getFullName(owner) ? getFullName(owner) : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Role / Position of Representative</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.roleOrPosition ? owner.roleOrPosition : '-'}}</p>
                        </div>
                    </div>
            </BioData>

            <div class="grid grid-cols-3 gap-x-6">
                <ActivitiesLog />
                <div class="grid grid-rows-2 gap-4 max-h-100">
                    <AssetsCard />
                    <DocumentStatusCard />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import {mapState} from 'vuex'
export default {
    name: 'Show',
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard,
        BreadCrumb
    },
    methods: {
        getFullName (owner) {
            return `${owner.title ? owner.title : ''} ${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
        }
    },
    asyncData({store, params,}) {
        let governmentOwners = store.state.owner.governmentOwners
        let owner = governmentOwners.find( governmentOwner => governmentOwner.id === params.id)
        return {
            owner
        }
        // console.log(owner)
    },
}
</script>