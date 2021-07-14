<template>
    <div>
        <BreadCrumb title="Owner Manager"/>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Business Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.businessName ? owner.businessName : '-'}}</p>
                    </div>
                    <div class="col-span-2">
                        <h5 class="text-xs font-normal text-tertiary-300">Business Type</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.businessType ? owner.businessType : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.state }}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Tax Identification Number</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.gender ? owner.gender : '-' }}</p>
                    </div>
                </template>
                <div class="col-span-3 grid grid-cols-1 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Company Registration Number</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.businessRegNunber ? owner.businessRegNunber : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.Address ? owner.Address : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Email address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.email ? owner.email : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">website</h5>
                            <p class="">{{ owner.website ? owner.website : '-'}}</p>
                        </div>
                    </div>
                    <div class="col-span-4 grid grid-cols-2">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Business Sector</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.businessSector ? owner.businessSector : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Nature of business</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.natureOfBusiness ? owner.natureOfBusiness : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Number of Staff</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.numberOfStaff ? owner.numberOfStaff : '-'}}</p>
                        </div>
                        
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Phone number</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.phoneNumber ? owner.phoneNumber : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Estimated Revenue</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.estimatedRevenue ? owner.estimatedRevenue : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Local Government Area</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.lga ? owner.lga : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Estimated Asset Value</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.estimatedAssetValue ? owner.estimatedAssetValue : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">City</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.city ? owner.city : '-'}}</p>
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
        let businessOwners = store.state.owner.businessOwners
        let owner = businessOwners.find( businessOwner => businessOwner.id === params.id)
        return {
            owner
        }
        // console.log(owner)
    },
}
</script>