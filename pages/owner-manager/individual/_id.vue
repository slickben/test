<template>
    <div class="grid gap-y-8">
        <BioData />

        <div class="grid grid-cols-3 gap-x-6">
            <ActivitiesLog />
            <div class="grid grid-rows-2 gap-4 max-h-100">
                <AssetsCard />
                <DocumentStatusCard />
            </div>
        </div>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
export default {
    name: 'Show',
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard
    },
    meta: { breadCrumb: 'benson' },
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        
    },
}
</script>