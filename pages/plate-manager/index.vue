                                                                                                                    <template>
    <div class="pb-8">
        <BreadCrumb title="Plate Manager">
            <!-- <nuxt-link class="min-w-28 px-6 h-10 text-white text-xs flex items-center justify-center rounded-xl bg-primary-400 focus:outline-none border-0 mr-4 hover:bg-primary-600" to="/vehicle-manager/vehicles/create">
                New Registration
            </nuxt-link> -->
            <!-- <Button type="solid" title="New" /> -->
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
            <div class="grid grid-cols-1 gap-y-10">
                <!-- <div class="grid grid-cols-4 gap-x-12">
                    <AnalysisCard heading="Summary" title="Owner Created" total_count="150" week_count="12" color="text-tertiary-600" />
                    <AnalysisCard heading="Approved" title="Owner Approved" total_count="75" week_count="6" color="text-action-success" />
                    <AnalysisCard heading="Pending" title="Owner Pending" total_count="50" week_count="4" color="text-action-warning" />
                    <AnalysisCard heading="Denied" title="Owner Denied" total_count="25" week_count="2" color="text-action-danger" />
                </div> -->
                <div>
                    <Table classes="rounded-lg" :head_data="table_head_data"> 
                        <template v-slot:head>
                            <TableFilter />
                        </template>

                        <tr class="relative" v-for="plate in plates">
                            <td class="text-left py-4 px-5">{{ plate.number }}</td>
                            <!-- <td class="text-left py-4 px-5">{{ vehicle }}</td> -->
                            <!-- <td class="text-left py-4 px-5">{{ item.category }}</td> -->
                            <!-- <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ getOwnerName(vehicle.attributes.ownedBy) }}</a></td> -->
                            <td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ plate.type}}</a></td>
                            <!-- /<td class="text-left py-4 px-5"><a class="hover:text-blue-500" >{{ $moment(plate).format('MMMM d, YYYY') }}</a></td> -->
                            <td class="text-left py-4 px-5">
                                <PlateStatus classes="w-24 h-8 text-xs" :status="plate.status" />
                            </td>
                            <div @click="getSelectedPlate(plate.number)" class="absolute inset-0 block"></div>
                        </tr>
                    </Table>
                </div>
            </div>
        </div>
        <Sliding classes="min-w-150" v-show="toggle_slide"> 
            <template slot="head">
                <div class="flex items-center justify-between">
                    <div>
                        <h4 class="text-2xl text-primary-900 font-semibold">{{ selected_plate.number }}</h4>
                        <!-- <p class="text-base text-tertiary-600 font-normal py-2">#0123</p/> -->
                    </div>
                    <button @click="toggleSlide" class="text-tertiary-600 font-semibold focus:outline-none border-0 text-2xl">X</button>
                </div>
            </template>
            <Tabs>
                <template slot="head">
                    <li 
                        v-for="(tab, index) in tabs" 
                        :key="index" 
                        class="text-xs cursor-pointer py-2 mr-10 -500 border-b-4 "
                        :class="activeTab===index ? 'text-primary-500 border-primary-500' : 'text-tertiary border-transparent'" 
                        @click="activeTab = index"
                    >
                        {{ tab }}
                    </li>
                </template>
                <div class="p-5 px-10" v-show="activeTab === 0">
                    <div class="flex-grow flex">
                        <div class="flex-none w-50 border-r pr-8 py-3">
                            <p class=" text-tertiary-300 py-3 text-left">Plate Number</p>
                            <p class=" text-tertiary-300 py-3 text-left">Plate Type</p>
                            <!-- <p class=" text-tertiary-300 py-3 text-left">Email Address</p> -->
                            <p class=" text-tertiary-300 py-3 text-left">Issued Date</p>
                            <p class=" text-tertiary-300 py-3 text-left">State Of Allocation</p>
                            <p class=" text-tertiary-300 py-3 text-left">Status</p>
                        </div>
                        <div class="px-10 py-3 text-left">
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.number }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.type }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.createdAt ?  selected_plate.createdAt : ''}}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.state_of_allocation ? selected_plate.state_of_allocation : '' }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.status }}</p>
                        </div>
                    </div>
                </div>
                <div class="p-5 px-10" v-show="activeTab === 1">
                    <div class="flex-grow flex" v-if="selected_plate.owner !== null">
                        <div class="flex-none w-50 border-r pr-8 py-3">
                            <p class=" text-tertiary-300 py-3 text-left">{{ selected_plate.owner !== null }}</p>
                            <p class=" text-tertiary-300 py-3 text-left">Plate Type</p>
                            <!-- <p class=" text-tertiary-300 py-3 text-left">Email Address</p> -->
                            <p class=" text-tertiary-300 py-3 text-left">Issued Date</p>
                            <p class=" text-tertiary-300 py-3 text-left">State Of Allocation</p>
                            <p class=" text-tertiary-300 py-3 text-left">Status</p>
                        </div>
                        <div class="px-10 py-3 text-left">
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.number }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.type }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.createdAt ?  selected_plate.createdAt : ''}}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.state_of_allocation ? selected_plate.state_of_allocation : '' }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.status }}</p>
                        </div>
                    </div>
                </div>
                <div class="p-5 px-10" v-show="activeTab === 2" >
                    <div class="flex-grow flex " v-if="selected_plate.owner !== null">
                        <div class="flex-none w-50 border-r pr-8 py-3">
                            <p class=" text-tertiary-300 py-3 text-left">{{ selected_plate.owner !== null }}</p>
                            <p class=" text-tertiary-300 py-3 text-left">Plate Type</p>
                            <!-- <p class=" text-tertiary-300 py-3 text-left">Email Address</p> -->
                            <p class=" text-tertiary-300 py-3 text-left">Issued Date</p>
                            <p class=" text-tertiary-300 py-3 text-left">State Of Allocation</p>
                            <p class=" text-tertiary-300 py-3 text-left">Status</p>
                        </div>
                        <div class="px-10 py-3 text-left">
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.number }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.type }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.createdAt ?  selected_plate.createdAt : ''}}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.state_of_allocation ? selected_plate.state_of_allocation : '' }}</p>
                            <p class=" text-tertiary-600 py-3">{{ selected_plate.status }}</p>
                        </div>
                    </div>
                </div>
            </Tabs>
        </Sliding>
    </div>
</template>

<script>
import AnalysisCard from '~/components/AnalysisCard.vue';
import Table from '~/components/Table.vue';
import PlateStatus from '~/components/PlateStatus.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import TableFilter from '~/components/TableFilter.vue';
import Button from '~/components/Button.vue';
import { mapState } from 'vuex'
export default {
    components: {
        AnalysisCard,
        Table,
        PlateStatus,
        BreadCrumb,
        TableFilter,
        Button
    },
    data() {
        return {
            table_head_data: ['Plate Number', 'Plate Type', 'Status'],
            toggle_slide: false,
            activeTab: 0,
            tabs: [
                "Plate Number Information",
                "Owner Information",
                "Vehicle Information",
            ],
            selected_plate: ''
        }
    },
    computed: {
        ...mapState({
            plates: state => state.plate.plates,
        })
    },
    methods: {
        toggleSlide() {

            this.toggle_slide = !this.toggle_slide

        },
        getSelectedPlate(number) {
            this.selected_plate = this.plates.find( plate => plate.number == number)
            this.toggle_slide = !this.toggle_slide
        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        await store.dispatch('plate/getAllPlateNumbers')
    },
}
</script>