<template>
  <div class="mx-auto h-screen px-8 xl:px-24">
    <img
      class="w-screen h-full absolute inset-0 -z-10"
      src="~/assets/images/home_menu_bg_overlay.png"
      alt=""
      srcset=""
    />
    <div class="w-screen h-full absolute inset-0 -z-10 bg-primary-900 bg-opacity-70">

    </div>
    <!-- <div class="absolute inset-0 bg-gray-900 -z-10 opacity-80"></div> -->
    <div class="pb-20 2xl:pb-28 text-right">
      <Navigation>
        <template v-slot:lift>
          <Logo size="big" />
        </template>
      </Navigation>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 px-24 xl:px-0">
      <div class="col-span-4 xl:col-start-2 xl:col-span-3 2xl:col-start-2 2xl:col-span-2">
        <H1 class="2xl:px-6 px-10 pb-8 text-xs text-tertiary-500 uppercase">Modules</H1>
      </div>
      <div class="col-span-4 xl:col-start-2 xl:col-span-3 2xl:col-start-2 2xl:col-span-2 grid grid-cols-5 2xl:gap-12 gap-y-12 grid-rows-2">
        <NavBox css="bg-dashboard-icons-one" link="/owner-manager" name="Owner manager">
          <img
            class="rounded"
            src="~/assets/images/owner.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox
          css="bg-dashboard-icons-two"
          link="/vehicle-manager"
          name="Vehicle operations"
        >
          <img
            class="mx-auto"
            src="~/assets/images/vehicle.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-three" link="/" name="Housing Operations">
          <img
            class="mx-auto"
            src="~/assets/images/housing.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-four" link="/plate-manager" name="Plate Manager">
          <img
            class="mx-auto"
            src="~/assets/images/plate.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-five" link="/" name="Payment">
          <img
            class="mx-auto"
            src="~/assets/images/payment.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-six" link="/" name="Business intelligence">
          <img
            class="mx-auto"
            src="~/assets/images/business_intelligence.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-seven" link="/tax-net" name="Tax net">
          <img
            class="mx-auto"
            src="~/assets/images/tax_net.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-eight" link="/" name="Document Manager">
          <img
            class="mx-auto"
            src="~/assets/images/document_manager.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox css="bg-dashboard-icons-nine" link="/user-manager" name="User manager">
          <img
            class="mx-auto"
            src="~/assets/images/user_manager.svg"
            alt=""
            srcset=""
          />
        </NavBox>
        <NavBox
          css="bg-dashboard-icons-ten"
          link="/settings/owner-manager/state"
          name="Settings"
        >
          <img
            class="mx-auto"
            src="~/assets/images/settings.svg"
            alt=""
            srcset=""
          />
        </NavBox>
      </div>
    </div>
  </div>
</template>

<script>
import NavBox from '~/components/NavBox.vue'
import Navigation from '~/components/Navigation.vue'
import Logo from '~/components/Logo.vue'
export default {
  name: 'Home',
  auth: false,
  components: {
    NavBox,
    Navigation,
    Logo,
  },
  data() {
    return {
      icon: 'Vehicle',
    }
  },
}
</script>
