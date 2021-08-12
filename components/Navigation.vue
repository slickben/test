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
          <div class="pr-6"><slot name="right"></slot></div>
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
export default {
  components: {
      UserProfileDropDown
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
    }),
  },
}
</script>