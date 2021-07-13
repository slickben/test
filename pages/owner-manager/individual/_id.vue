<template>
    <div>
        <BreadCrumb title="Owner Manager">
            <Button :onClick="toggleSlide" type="solid" title="Update" />
        </BreadCrumb>
        <div class="grid gap-y-8 pb-8 max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full">
            <BioData />

            <div class="grid grid-cols-3 gap-x-6">
                <ActivitiesLog />
                <div class="grid grid-rows-2 gap-4 max-h-100">
                    <AssetsCard />
                    <DocumentStatusCard />
                </div>
            </div>
        </div>
        <Sliding :status="status">
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">Update Data</h4>
                        <p class="text-base text-tertiary-600 font-normal py-2">#0123</p>
                    </div>
                    <button @click="toggleSlide" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <Tabs />
        </Sliding>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import Button from '~/components/Button.vue';

import {mapState } from 'vuex';

export default {
    name: 'Show',
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard,
        BreadCrumb,
        Sliding,
        Tabs,
        Button
    },
    data () {
        return {
            status: true
        }
    },
    methods: {
        toggleSlide () {
            this.status = !this.status
        }
    },
    // computed: mapState({
    //     owners:  state => state.owner.owners
    // }),
    // fetch () {
    //     this.$store.dispatch('owner/getAllOwners')
    // }
}
</script>