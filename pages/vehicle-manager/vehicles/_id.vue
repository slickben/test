<template>
    <div class="grid gap-y-8 pb-8">
        <BioData />

        <div class="grid grid-cols-3 gap-x-6">
            <div class="col-span-2">
                <DocumentStatusCard />
            </div>
            <div class="grid grid-rows-2 gap-4 max-h-100">
                <ActivitiesLog />
            </div>
        </div>
        <Sliding :status="status" classes="">
            <template v-slot:head>
                <div class="flex justify-between items-center">
                    <div>
                        <h3 class="text-2xl font-semibold text-purple-900 capitalize">Update Data</h3>
                        <p class=" text-tertiary-600 font-normal">#13023</p>
                    </div>
                    <button class="focus:outline-none" @click="toggleSlide">X</button >
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
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';

export default {
    name: 'Show',
    data () {
        return {
            status: false
        }
    },
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard,
        Sliding,
        Tabs,
    },
    methods: {
        toggleSlide () {
            this.status = !this.status
        }
    }
}
</script>