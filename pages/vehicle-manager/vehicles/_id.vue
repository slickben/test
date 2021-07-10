<template>
    <div class="pb-8">
        <div class="max-w-lg-screen mx-auto px-32 py-10 2xl:px-0  h-full w-full">
            <div class="grid gap-y-8">
                <BioData />

                <div class="grid grid-cols-3 gap-x-6">
                    <div class="col-span-2">
                        <Table classes="rounded-md" :head_data="table_head_data"> 
                            <template v-slot:head>
                                <TableFilter />
                            </template>

                            <tr v-for="item in demo">
                                <td class="text-left py-4 px-5">{{ item.unique_Id }}</td>
                                <td class="text-left py-4 px-5">{{ item.name }}</td>
                                <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                                <td class="text-left py-4 px-5"><a class="hover:text-blue-500" href="tel:622322662">{{ item.date_created }}</a></td>
                                <td class="text-left py-4 px-5">
                                    <Status classes="w-24 h-8 text-xs" :status="item.verification_status" />
                                </td>
                            </tr>
                        </Table>
                    </div>
                    <div class="grid gap-4 max-h-100">
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
        </div>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import { mapState } from 'vuex'

export default {
    name: 'Show',
    data () {
        return {
            status: false,
            table_head_data: ['Unique Id #', 'Profile Name', 'Category', 'Date Created']
        }
    },
    computed: {
        ...mapState({
            demo: state => state.demo,
        })
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