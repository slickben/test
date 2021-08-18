<template>
  <nav :class="css" class="flex h-20 items-center">
    <div class="flex-none">
      <div class="h-full hidden lg:flex items-end w-96">
        <slot name="lift">

        </slot>
      </div>
    </div>
    <div class="flex items-end flex-grow">
      <div class="w-full flex items-center pl-8 justify-end">
        <div :class="[ !dashboard ? 'text-gray-800' : 'text-white']" class="flex items-center relative cursor-pointer pl-3">
          <button
            class="border-0 focus:outline-none focus:border-transparent pr-6"
          >
            <img src="~/assets/icons/search.svg" alt="" srcset="" />
          </button>
          <div @click="menuDropdownHandler($event)" v-show="!dashboard" class="pr-6 relative">
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
            <div>
                <div class="rounded-full absolute top-0 pt-7 right-0 w-100 pr-6 pl-16 hidden dropdown">
                <div class="bg-white shadow grid grid-cols-3 gap-y-4 px- py-3 px-2">
                  <nuxtLink to="/owner-manager" class=" border-opacity-0 border p-2 hover:border-primary-400 hover:text-primary-400 py-3 text-tertiary-500 text-center">
                    <Icon class="mx-auto w-6 h-6" type="owner" />
                    <p class=" text-xs truncate text-center pt-1">Owner manager</p>
                  </nuxtLink>
                  <nuxtLink to="/vehicle-manager"  class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="vehicle" />
                    <p class=" text-xs truncate text-center pt-1">Vehicle manager</p>
                  </nuxtLink>
                  <nuxtLink to="/plate-manager" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="plate" />
                    <p class=" text-xs truncate text-center pt-1">Plate manager</p>
                  </nuxtLink>
                  <nuxtLink to="/" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="payment" />
                    <p class=" text-xs truncate text-center pt-1">Payment</p>
                  </nuxtLink>
                  <nuxtLink to="/" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="business" />
                    <p class=" text-xs truncate text-center">Business Intelligence</p>
                  </nuxtLink>
                  <nuxtLink to="/tax-net" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="tax" />
                    <p class=" text-xs truncate text-center">Tax Net</p>
                  </nuxtLink>
                  <nuxtLink to="/" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="folder" />
                    <p class=" text-xs truncate text-center">Document Manager</p>
                  </nuxtLink>
                  <nuxtLink to="/user-manager" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="users" />
                    <p class=" text-xs truncate text-center">User manager</p>
                  </nuxtLink>
                  <nuxtLink to="/settings" class=" border-opacity-0 border p-2 text-tertiary-500 hover:border-primary-400 hover:text-primary-400 py-3 ">
                    <Icon class="mx-auto w-6 h-6" type="setting" />
                    <p class=" text-xs truncate text-center">Settings</p>
                  </nuxtLink>
                </div>
                </div>
            </div>
          </div>
          <div class="flex items-center" @click="dropdownHandler($event)">
            <div class="rounded-full">
              <UserProfileDropDown/>
              <div class="relative">
                <img
                  class="rounded-full h-10 w-10 object-cover"
                  src="~assets/images/peter_idowu.png"
                  alt="avatar"
                />
                <div
                  class="
                    w-2
                    h-2
                    rounded-full
                    bg-green-400
                    border border-white
                    absolute
                    inset-0
                    mb-0
                    mr-0
                    m-auto
                  "
                ></div>
              </div>
            </div>
            <p class="text-sm mx-3">Jane Doe</p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import UserProfileDropDown from  '~/components/UserProfileDropDown.vue'
import Icon from  '~/components/Icons.vue'
export default {
  components: {
      UserProfileDropDown,
      Icon
  },
  props: {
      css: String,
      dashboard: Boolean
  },
  methods: {
    ...mapMutations({
      toggleNav: 'toggleNav',
    }),
    ...mapActions({
      dropdownHandler: 'dropdownHandler',
      menuDropdownHandler: 'menuDropdownHandler',
    }),
  },
}
</script>