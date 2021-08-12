<template>
  <div class="">
    <BreadCrumb :back="false" title="Owner Manager" />
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
      <div>
        <Table classes="rounded-xl" :head_data="table_head_data">
          <template v-slot:head>
              <TableFilter>
                <div class="flex items-center">
                  <img src="~/assets/images/filter.png" alt="" srcset="">
                  <select class="focus:outline-none w-24 h-10 border px-2 rounded-md mr-2 ml-1" name="" id="">
                      <option selected value="10">Category</option>
                      <option value="10">20</option>
                      <option value="10">30</option>
                  </select>
                  <select class="focus:outline-none w-24 h-10 border px-2 rounded-md mr-2" name="" id="">
                      <option selected value="10">Status</option>
                      <option value="10">20</option>
                      <option value="10">30</option>
                  </select>
                  <input type="date" class="focus:outline-none w-36 h-10 border px-2 rounded-md mr-4" name="" id="" >
                </div>
                <div class="flex items-center">
                  <span class="text-xs text-tertiary-500 mr-1">Show entries</span>
                  <select class="focus:outline-none w-16 h-10 border px-2 rounded-md" name="" id="">
                      <option selected value="10">10</option>
                      <option value="10">20</option>
                      <option value="10">30</option>
                  </select>
                </div>
              </TableFilter>
          </template>

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
            <nuxt-link :to="`/owner-manager/${owner.ownerId}`" class="absolute inset-0 "></nuxt-link>
          </tr>
        </Table>
      </div>
    </div>
  </div>
</template>

<script>
import AnalysisCard from '~/components/AnalysisCard.vue'
import Table from '~/components/Table.vue'
import Status from '~/components/Status.vue'
import { mapState } from 'vuex'
import BreadCrumb from '~/components/BreadCrumb.vue'
import TableFilter from '~/components/TableFilter.vue'
import Input from '~/components/form/Input.vue'
export default {
  components: {
    AnalysisCard,
    Table,
    Status,
    BreadCrumb,
    TableFilter,
    Input
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
        'Profile Name',
        'Category',
        'Date Created',
        'Verification Status',
      ],
    }
  },
}
</script>