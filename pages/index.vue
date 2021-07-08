<template>
  <div class="mx-auto h-screen px-24">
    <img
      class="w-screen h-full absolute inset-0 -z-10"
      src="~/assets/images/home-menu-bg-overlay.png"
      alt=""
      srcset=""
    />
    <!-- <div class="absolute inset-0 bg-gray-900 -z-10 opacity-80"></div> -->
    <div class="pb-36 text-right">
      <Navigation>
        <template v-slot:lift>
          <Logo size="big"/>
        </template>
      </Navigation>
    </div>
    <div class="grid grid-cols-4">
      <div class="col-start-2 col-span-2 grid grid-cols-5 gap-12  grid-rows-2">
        <NavBox css="bg-purple-900" link="/owner-manager" name="Owner manager">
          <img class="rounded " src="~/assets/images/Owner.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Vehicle operations">
          <img class="mx-auto" src="~/assets/images/Vehicle.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Housing Operations">
          <img class="mx-auto" src="~/assets/images/Housing.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Plate Manager">
          <img class="mx-auto" src="~/assets/images/Plate.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Payment">
          <img class="mx-auto" src="~/assets/images/Payment.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Business intelligence">
          <img class="mx-auto" src="~/assets/images/Business intelligence.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Tax net">
          <img class="mx-auto" src="~/assets/images/Tax net.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Document Manager">
          <img class="mx-auto" src="~/assets/images/Document Manager.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="User manager">
          <img class="mx-auto" src="~/assets/images/User Manager.svg" alt="" srcset="">
        </NavBox>
        <NavBox css="bg-purple-900" link="/" name="Settings">
          <img class="mx-auto" src="~/assets/images/Settings.svg" alt="" srcset="">
        </NavBox>
      </div>
    </div>
  </div>
</template>

<script>
import NavBox from '~/components/NavBox.vue';
import Navigation from '~/components/Navigation.vue';
import Logo from '~/components/Logo.vue';
export default {
  name: 'Home',
  auth: false,
  components: {
    NavBox,
    Navigation,
    Logo
  },
  data () {
    return {
      icon: 'Vehicle'
    }
  },
}
</script>
