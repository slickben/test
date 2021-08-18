<template>
  <div class="flex flex-no-wrap bg-tertiary-200 h-screen">
    <!-- Sidebar Start -->
    <Sidebar title="Settings">
      <ul class="pt-3">
        <Nav :toggleNav="toggleNav" name="Owner Manager" link="/settings/owner-manager/state">
          <Icons type="owner" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Vehicle Operations"
          link="/settings/vehicle-manager/category"
        >
          <Icons type="vehicle" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Housing Operations"
          link="/"
        >
          <Icons type="house" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Plate Manager"
          link="/"
        >
          <Icons type="file" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Payment"
          link="/"
        >
          <Icons type="payment" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Business Intelligence"
          link="/"
        >
          <Icons type="target" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Tax Net"
          link="/"
        >
          <Icons type="tax" />
        </Nav>
        <Nav
          :toggleNav="toggleNav"
          name="Document Manager"
          link="/"
        >
          <Icons type="folder" />
        </Nav>
        <!-- <Nav
          :toggleNav="toggleNav"
          name="User manager"
          link="/"
        >
          <img src="~assets/icons/user-icon.svg" alt="" srcset="" />
        </Nav> -->
      </ul>
    </Sidebar>
    <!-- Sidebar Ends -->
    <div class="w-full h-full flex flex-col">
      <!-- Navigation starts -->
      <Navigation css="bg-white px-8 2xl:pr-24 shadow z-10 flex-none">
        <template v-slot:right>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 4H8V8H4V4Z" fill="#707070" />
            <path d="M4 10H8V14H4V10Z" fill="#707070" />
            <path d="M8 16H4V20H8V16Z" fill="#707070" />
            <path d="M10 4H14V8H10V4Z" fill="#707070" />
            <path d="M14 10H10V14H14V10Z" fill="#707070" />
            <path d="M10 16H14V20H10V16Z" fill="#707070" />
            <path d="M20 4H16V8H20V4Z" fill="#707070" />
            <path d="M16 10H20V14H16V10Z" fill="#707070" />
            <path d="M20 16H16V20H20V16Z" fill="#707070" />
          </svg>
        </template>
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
          relative
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
  name: 'OwnerManager',
  auth: false,
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
