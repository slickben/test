<template>
  <div class="container flex items-start pt-20 justify-center mx-auto h-screen">
    <img
      class="w-screen h-full absolute inset-0 -z-10"
      src="~/assets/images/overlay-1.svg"
      alt=""
      srcset=""
    />
    <div class="absolute inset-0 bg-gray-900 -z-10 opacity-80"></div>
    <div class="grid grid-cols-5 gap-12 gap-x-16 grid-rows-2">
      <NavBox
        css="bg-purple-900"
        link="/"
        name="Vehicle Operation"
        icon="hard-drive"
      />
      <NavBox
        css="bg-yellow-900"
        link="/"
        name="Document Processing"
        icon="file-text"
      />
      <NavBox
        css="bg-blue-900"
        link="/users"
        name="Users Manager"
        icon="users"
      />
      <NavBox css="bg-red-700" link="/" name="Profiling" icon="database" />
      <NavBox
        css="bg-yellow-700"
        link="/owner-manager"
        name="Owner Manager"
        icon="home"
      />
      <NavBox
        css="bg-gray-700"
        link="/"
        name="Business Intelligence"
        icon="activity"
      />
      <NavBox css="bg-green-700" link="/" name="Plate" icon="sliders" />
      <NavBox css="bg-yellow-700" link="/" name="Payment" icon="credit-card" />
      <NavBox
        css="bg-yellow-700"
        link="/settings"
        name="Settings"
        icon="settings"
      />
    </div>
  </div>
</template>

<script>
import NavBox from '~/components/NavBox.vue'
export default {
  name: 'Home',
  components: {
    NavBox,
  },
}
</script>
