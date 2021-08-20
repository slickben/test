<template>
  <div class="flex flex-no-wrap bg-tertiary-200 h-screen">
    <!-- Sidebar Start -->
    <Sidebar title="User Manager" class="z-20">
      <ul class="pt-3">
        <Nav :toggleNav="toggleNav" name="Users" link="/user-manager/users">
          <Icons type="users" />
        </Nav>
        <Nav :toggleNav="toggleNav" name="Roles" link="/user-manager/role">
          <Icons type="role" />
        </Nav>
        <Nav :toggleNav="toggleNav" name="Location" link="/user-manager/location">
          <Icons type="location" />
        </Nav>
      </ul>
    </Sidebar>
    <!-- Sidebar Ends -->
    <div class="w-full h-full flex flex-col">
      <!-- Navigation starts -->
      <Navigation css="bg-white px-8 2xl:pr-24 shadow z-10 flex-none">
        <template v-slot:lift>
          <ToggleSideBarBtn />
        </template>
      </Navigation>
      <!-- Navigation ends -->
      <div
        class="
          flex-grow
          h-full
          overflow-y-auto
          shadow
          scrollbar-thin
          scrollbar-thumb-tertiary-200
          scrollbar-track-tertiary-100
        "
      >
        <div class="h-full">
          <!-- Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border -->

          <nuxt-child />
        </div>
      </div>
      <!-- <Footer /> -->
    </div>
  </div>
</template>
<script>
import Sidebar from '~/components/SideBar.vue'
import Navigation from '~/components/Navigation.vue'
import ToggleSideBarBtn from '~/components/ToggleSideBarBtn.vue'
import BreadCrumb from '~/components/BreadCrumb.vue'
import Footer from '~/components/Footer.vue'
import Nav from '~/components/Nav.vue'
import Icons from '~/components/Icons.vue'
import { mapState } from 'vuex'

export default {
  name: 'UserManager',
  auth: true,
  layout: 'vehicle',
  components: {
    Sidebar,
    Navigation,
    ToggleSideBarBtn,
    BreadCrumb,
    Footer,
    Nav,
    Icons
  },
  computed: mapState({
    toggleNav: (state) => state.toggleNav,
  }),
}
</script>
