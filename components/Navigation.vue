<template>
  <nav :class="css" class="flex h-20 items-center">
    <div class="flex-none">
      <div class="h-full hidden lg:flex items-end w-96">
        <slot name="lift">

        </slot>
        <!-- <div class="relative w-20">
                    <div class="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="16" height="16" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx="10" cy="10" r="7" />
                            <line x1="21" y1="21" x2="15" y2="15" />
                        </svg>
                    </div>
                    <input class="border-0 bg-transparent focus:outline-none text-sm text-gray-500  pl-12 py-2" type="search" placeholder="Search" />
                </div> -->
      </div>
    </div>
    <div class="flex items-end flex-grow">
      <div class="w-full flex items-center pl-8 justify-end">
        <div class="flex items-center relative cursor-pointer pl-3">
          <button
            class="border-0 focus:outline-none focus:border-transparent pr-6"
          >
            <img src="~/assets/icons/search.svg" alt="" srcset="" />
          </button>
          <div class="pr-6"><slot name="right"></slot></div>
          <div class="flex items-center" @click="dropdownHandler($event)">
            <div class="rounded-full">
              <UserProfileDropDown/>
              <div class="relative">
                <img
                  class="rounded-full h-10 w-10 object-cover"
                  src="~assets/images/peter-idowu.png"
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
            <p class="text-gray-800 text-sm mx-3">Jane Doe</p>
            <!-- <div class="cursor-pointer text-gray-600">
                            <svg aria-haspopup="true" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" />
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </div> -->
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
import UserProfileDropDown from  '~/components/UserProfileDropDown.vue'
export default {
  components: {
      UserProfileDropDown
  },
  props: {
      css: String
  },
  methods: {
    ...mapMutations({
      toggleNav: 'toggleNav',
    }),
    ...mapActions({
      dropdownHandler: 'dropdownHandler',
    }),
  },
}
</script>