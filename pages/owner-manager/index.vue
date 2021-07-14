<template>
  <div class="">
    <BreadCrumb title="Owner Manager" />
    <div
      class="
        grid grid-cols-1
        gap-y-10
        max-w-lg-screen
        mx-auto
        px-32
        py-10
        2xl:px-0
        h-full
      "
    >
      <div class="grid grid-cols-4 gap-x-12">
        <AnalysisCard
          heading="Summary"
          title="Owner Created"
          total_count="150"
          week_count="12"
          color="text-tertiary-600"
        />
        <AnalysisCard
          heading="Approved"
          title="Owner Approved"
          total_count="75"
          week_count="6"
          color="text-action-success"
        />
        <AnalysisCard
          heading="Pending"
          title="Owner Pending"
          total_count="50"
          week_count="4"
          color="text-action-warning"
        />
        <AnalysisCard
          heading="Denied"
          title="Owner Denied"
          total_count="25"
          week_count="2"
          color="text-action-danger"
        />
      </div>
      <div>
        <Table classes="rounded-3xl" :head_data="table_head_data">
          <template v-slot:head> Recently Added </template>

          <tr class="relative" v-for="owner in owners.owners">
            <td class="text-left py-4 px-5">{{ '' }}</td>
            <td class="text-left py-4 px-5">{{ getFullName(owner) }}</td>
            <td class="text-left py-4 px-5">{{ owner.type }}</td>
            <td class="text-left py-4 px-5">
              <a class="hover:text-blue-500" href="tel:622322662">{{
                $moment(owner.dateCreated).format('MMMM d, YYYY')
              }}</a>
            </td>
            <td class="text-left py-4 px-5">
              <Status classes="w-24 h-8 text-xs" status="pending" />
            </td>
            <nuxt-link :to="`/owner-manager/${owner.type}/${owner.id}`" class="absolute inset-0 "></nuxt-link>
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
export default {
  components: {
    AnalysisCard,
    Table,
    Status,
    BreadCrumb,
  },
  computed: {
    ...mapState({
      owners: (state) => state.owner.owners,
    }),
  },
  methods: {
      getFullName (owner) {
          return `${owner.title ? owner.title : ''} ${owner.firstName} ${owner.lastName} ${owner.otherName ? owner.otherName : ''}`
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