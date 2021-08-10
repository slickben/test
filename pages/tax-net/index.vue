<template>
  <div class="">
    <BreadCrumb title="Tax Net" />
    <div
      class="
        grid grid-cols-1
        gap-y-10
        max-w-lg-screen
        mx-auto
        xl:px-32
        px-10
        py-10
        2xl:px-0
        h-full
      "
    >
      <div class="grid grid-cols-5 gap-x-6">
        <div class="col-span-3">
          <LineGraph class="rounded-xl" />
        </div>
        <div class="col-span-2">
          <Table classes="rounded-xl" :head_data="table_head_data">
          <template v-slot:head> Recently Added </template>

          <tr class="relative" v-for="owner in owners.owners">
            <td class="text-left py-4 px-5">{{ '12321' }}</td>
            <td class="text-left py-4 px-5">{{ getFullName(owner) }}</td>
            <td class="text-left py-4 px-5">{{ owner.type }}</td>
            <td class="text-left py-4 px-5">
              <a class="hover:text-blue-500" href="tel:622322662">
                {{
                $moment(owner.createdAt).format('MMMM d, YYYY')
              }}
              </a>
            </td>
            <td class="text-left py-4 px-5">
              <Status classes="w-24 h-8 text-xs" status="pending" />
            </td>
            <nuxt-link :to="`/owner-manager/${owner.type}/${owner.id}`" class="absolute inset-0 "></nuxt-link>
          </tr>
          </Table>
        </div>
      </div>
      <div class="grid grid-cols-3 xl:gap-x-32 gap-x-20 bg-white py-6 pb-12 px-8 rounded">
        <div class="col-span-3 ">
          <p class="pb-3 text-tertiary-500">Summary</p>
        </div>
        <AnalysisCardWithBg
          heading="Summary"
          title="Commercial Vehicles"
          total_count="150000000"
          week_count="12"
          color="text-white"
        />
        <AnalysisCardWithBg
          heading="Approved"
          title="Total Tax Payable"
          total_count="75"
          week_count="6"
          color="text-white"
        />
        <AnalysisCardWithBg
          heading="Pending"
          title="Tota Tax Received"
          total_count="50"
          week_count="4"
          color="text-white"
        />
      </div>
      
    </div>
  </div>
</template>

<script>
import AnalysisCardWithBg from '~/components/AnalysisCardWithBg.vue'
import Table from '~/components/Table.vue'
import Status from '~/components/Status.vue'
import { mapState } from 'vuex'
import BreadCrumb from '~/components/BreadCrumb.vue'
import LineGraph from '~/components/LineGraph.vue'
export default {
  components: {
    AnalysisCardWithBg,
    Table,
    Status,
    BreadCrumb,
    LineGraph
  },
  computed: {
    ...mapState({
      owners: (state) => state.owner.owners,
    }),
  },
  methods: {
      getFullName (owner) {
          if(owner.type === 'Government') {
            return `${owner.representativeTitle ? owner.representativeTitle : ''} ${owner.representativeFirstname} ${owner.representativeLastname} ${owner.representativeOtherName ? owner.representativeOtherName : ''}`
          }else {
            return `${owner.title ? owner.title : ''} ${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
          }
      }
  },
  data() {
    return {
      table_head_data: [
        'Unique Id #',
        'Number Of Vehicles',
      ],
    }
  },
}
</script>