<template>
  <div class="mx-auto h-screen px-8 xl:px-24 
          scrollbar-thin
          scrollbar-thumb-tertiary-200
          scrollbar-track-tertiary-100">
    <div class="absolute inset-0 -z-10">
      <img
        class="h-full w-full"
        src="~/assets/images/home_menu_bg_overlay.png"
        alt=""
        srcset=""
      />
    </div>
    <!-- <div class="w-screen h-full absolute inset-0 -z-10 bg-primary-900 bg-opacity-60">

    </div> -->
    <!-- <div class="absolute inset-0 bg-gray-900 -z-10 opacity-80"></div> -->
    <div class="pb-10 2xl:pb-12 text-right">
      <Navigation :dashboard="true">
        <template v-slot:lift>
          <Logo size="big" />
        </template>
      </Navigation>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 px-24 pb-10 xl:px-28">
      <div class="col-span-4 xl:col-start-2 xl:col-span-3 2xl:col-start-2 2xl:col-span-2">
        <H1 class="2xl:px-4 px-10 pb-8 text-xs text-tertiary-500 uppercase">Modules</H1>
      </div>
      <div class="col-span-4 xl:col-start-2 xl:col-span-3 2xl:col-start-2 2xl:col-span-2 grid grid-cols-5 2xl:gap-12 gap-y-12 grid-rows-2">
        <NavBox css="bg-dashboard-icons-one" link="/owner-manager" name="Owner manager">
          <Icons class="w-10 h-10" type="owner" />
        </NavBox>
        <NavBox
          css="bg-dashboard-icons-two"
          link="/vehicle-manager"
          name="Vehicle operations"
        >
          <Icons class="w-10 h-10" type="car" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-three" link="/" name="Housing Operations">
          <Icons class="w-10 h-10" type="house-m" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-four" link="/plate-manager" name="Plate Manager">
          <Icons class="w-10 h-10" type="plate-m" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-five" link="/" name="Payment">
          <Icons class="w-10 h-10" type="payment-m" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-six" link="/" name="Business intelligence">
          <Icons class="w-10 h-10" type="target-m" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-seven" link="/tax-net" name="Tax net">
          <Icons class="w-10 h-10" type="tax" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-eight" link="/" name="Document Manager">
          <Icons class="w-10 h-10" type="folder-m" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-nine" link="/user-manager" name="User manager">
          <Icons class="w-10 h-10" type="user-m" />
        </NavBox>
        <NavBox
          css="bg-dashboard-icons-ten"
          link="/settings/owner-manager/state"
          name="Settings"
        >
          <Icons class="w-10 h-10" type="setting" />
        </NavBox>
      </div>
    </div>
    <div class="grid grid-cols-4 xl:grid-cols-5 2xl:grid-cols-4 px-24 xl:px-28">
      <div class="col-span-4 xl:col-start-2 xl:col-span-3 2xl:col-start-2 2xl:col-span-2">
        <H1 class="2xl:px-4 px-10 pb-8 text-xs text-tertiary-500 uppercase">Quick Access</H1>
      </div>
      <div class="col-span-4 xl:col-start-2 xl:col-span-3 2xl:col-start-2 2xl:col-span-2 grid grid-cols-5 2xl:gap-12 gap-y-12 grid-rows-2">
        <NavBox css="bg-dashboard-icons-eight" link="/" name="Document Manager">
          <Icons class="w-10 h-10" type="folder-m" />
        </NavBox>
        <NavBox css="bg-dashboard-icons-nine" link="/user-manager" name="User manager">
          <Icons class="w-10 h-10" type="user-m" />
        </NavBox>
      </div>
    </div>
  </div>
</template>

<script>
import NavBox from '~/components/NavBox.vue'
import Navigation from '~/components/Navigation.vue'
import Icons from '~/components/Icons.vue'
import Logo from '~/components/Logo.vue'
export default {
  name: 'Home',
  auth: true,
  components: {
    NavBox,
    Navigation,
    Logo,
    Icons
  },
  data() {
    return {
      icon: 'Vehicle',
    }
  },
}
</script>
