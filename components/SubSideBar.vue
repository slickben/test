<template>
  <div>
    <h2 class="p-5 text-2xl text-primary-900 font-semibold">Owner Manager</h2>
    <nav class="pt-3">
      <ul class=" text-tertiary-500">
        <li
          class="w-full border-b hover:border-transparent"
        >
          <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/owner-manager/state">State</nuxt-link>
        </li>
        <li
          class="w-full border-b hover:border-transparent "
        >
          <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/owner-manager/lga">Local Government Area</nuxt-link>
        </li>
        <li
          class="w-full border-b hover:border-transparent "
        >
          <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/owner-manager/prefix">Prefix</nuxt-link>
        </li>
        <li
          class="w-full border-b hover:border-transparent "
        >
          <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/owner-manager/marital-status">Marital Status</nuxt-link>
        </li>
        <li
          class="w-full border-b hover:border-transparent "
        >
          <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/owner-manager/agency-category">Agency Ministry</nuxt-link>
        </li>
        <li
          class="w-full border-b hover:border-transparent "
        >
          <nuxt-link class="py-3 px-6 border-l-8 border-transparent hover:text-primary-500 hover:bg-primary-100 w-full hover:border-primary-500 block" to="/settings/owner-manager/means-of-identity">Means of Identification</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>