<template>
    <div>
        <BreadCrumb title="Owner Manager"/>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full">
            <BioData>
                <template slot="left">
                    <div class="">
                        <h5 class="text-xs font-normal text-tertiary-300">First Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.firstName ? owner.firstName : '-'}}</p>
                    </div>
                    <div class="">
                        <h5 class="text-xs font-normal text-tertiary-300">Other Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.otherName ? owner.otherName : '-'}}</p>
                    </div>
                    <div class="">
                        <h5 class="text-xs font-normal text-tertiary-300">Last Name</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.lastName ? owner.lastName : '-'}}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">Gender</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.gender }}</p>
                    </div>
                    <div>
                        <h5 class="text-xs font-normal text-tertiary-300">State of origin</h5>
                        <p class="text-xl text-tertiary-700 font-medium">{{ owner.state ? owner.state : '-' }}</p>
                    </div>
                </template>
                <div class="col-span-3 grid grid-cols-1 gap-y-4">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">nIN/BVN</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.ninOrBvn ? owner.ninOrBvn : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Phone number</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.phoneNumber ? owner.phoneNumber : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Email address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.email ? owner.email : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Residential Address</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.street ? owner.street : '-'}}</p>
                        </div>
                    </div>
                    <div class="col-span-4 grid grid-cols-2">
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Marital Status</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.maritalStatus ? owner.maritalStatus : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Local Government Area</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.lga ? owner.lga : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Employment status</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.emplomentStatus ? owner.emplomentStatus : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">City</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.city ? owner.city : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">Occupation</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.occupation ? owner.occupation : '-'}}</p>
                        </div>
                        
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300">State</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.state ? owner.state : '-'}}</p>
                        </div>
                        <div>
                            <h5 class="text-xs font-normal text-tertiary-300 capitalize">date of birth</h5>
                            <p class="text-tertiary-700 font-medium">{{ owner.dateOfBirth ? owner.dateOfBirth : '-'}}</p>
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
        let individualOwners = store.state.owner.individualOwners
        let owner = individualOwners.find( individualOwner => individualOwner.id === params.id)
        return {
            owner
        }
        // console.log(owner)
    },
}
</script>