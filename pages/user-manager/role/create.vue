<template>
    <div class="pb-8 h-full">
        <BreadCrumb title="Create Role">
            <div class="flex">
                <Button class="rounded-full" type="solid" title="Add"  :onClick="toggleSlide" />
                <Button class="rounded-full" type="" title="cancle"  :onClick="toggleSlide" />
            </div>
        </BreadCrumb>
        <div class="max-w-lg-screen mx-auto px-10 xl:px-32 py-10 2xl:px-0  h-full w-full">
            <div class="flex items-center p-6 bg-white mb-6 rounded-lg">
                <div class="flex-none">
                    <div class="flex flex-col w-96">
                        <label for="engine_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Name <span class="text-red-500">*</span></label>
                        <input type="text" id="engine_number" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Super Admin" />
                    </div>
                </div>
                <div class="flex-grow pr-20 pl-8">
                    <div class="flex flex-col w-full">
                        <label for="engine_number" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100">Description<span class="text-red-500">*</span></label>
                        <input type="text" id="engine_number" required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="Enter Role Description" />
                    </div>
                </div>
            </div>
            <div class="grid gap-y-8 bg-white h-full">
                <Tabs>
                    <template slot="head">
                        <li 
                            v-for="(tab, index) in tabs" 
                            :key="index" 
                            class="text-xs cursor-pointer py-2 mr-10 border-b-4 "
                            :class="activeTab===index ? 'text-primary-400 border-primary-400' : 'text-tertiary-500 border-transparent'" 
                            @click="activeTab = index"
                        >
                            {{ tab }}
                        </li>
                    </template>
                    <div class="py-5 grid grid-cols-4" v-show="activeTab === 0">
                        <nav class="">
                            <ul class=" text-tertiary-500">
                                <li
                                class="w-full  hover:border-transparent"
                                >
                                    <button :class="[toggle == 'owner manager' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('owner manager')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Owner Manager</button>
                                </li>
                                <li 
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'vehicle manager' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('vehicle manager')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Vehicle Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button disabled :class="[toggle == 'housing operations' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-300']" @click="togglePermission('housing operations')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Houseing Operations</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'plate manager' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('plate manager')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Plate Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'payment' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('payment')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Payment </button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'business intelligence' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('business intelligence')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Business Intelligence </button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'tax net' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('tax net')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Tax Net </button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'document manager' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('document manager')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Document Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'user manager' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('user manager')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">User Manager</button>
                                </li>
                                <li
                                class="w-full  hover:border-transparent "
                                >
                                    <button :class="[toggle == 'settings' ? 'text-primary-500 bg-primary-100' : 'text-tertiary-500']" @click="togglePermission('settings')" class="py-3 px-6 focus:outline-none  border-transparent  w-full text-left block font-normal text-xs xl:text-base block" to="">Settings</button>
                                </li>
                            </ul>
                        </nav>
                        <div class="col-span-3 pl-12 pt-4">
                            <!-- example structure -->
                            <div class="relative hidden">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view vehicle" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view vehicle</span>
                                        </label>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle registration" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle registration</span>
                                            </label>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="vehicle change-of-ownership" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle change of ownership</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle change-of-ownership" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle change of ownership</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle revalidation" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle revalidation</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle renewal" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle renewal</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" absolute ml-1 left-0 pl-px-1 inset-y-0 pt-3 pb-2">
                                        <div class="h-full border border-tertiary-200">

                                        </div>
                                    </div>
                            </div>
                            <!-- PARENT -->
                            <div v-show="toggle == 'owner manager'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <!-- <img src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view owner" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">View Owner</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'vehicle manager'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view vehicle" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view vehicle</span>
                                        </label>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle registration" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle registration</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle change-of-ownership" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle change of ownership</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle revalidation" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle revalidation</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="vehicle renewal" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">vehicle renewal</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" absolute ml-1 left-0 pl-px-1 inset-y-0 pt-3 pb-2">
                                        <div class="h-full border border-tertiary-200">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'plate manager'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <!-- <img src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view plate" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">View Plate</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'payment'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <!-- <img src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view payment" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">View payment</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'business intelligence'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                        </div>
                                        <label class="flex items-center">
                                            <input value="View business-intelligence" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">View Business Intelligence</span>
                                        </label>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="report owners-and-vehicle" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">Owners And Vehicle Report</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="report document-and-renewals" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">Documents And Renewals Report</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="report revenue" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">Revenue Report</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" absolute ml-1 left-0 pl-px-1 inset-y-0 pt-3 pb-2">
                                        <div class="h-full border border-tertiary-200">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'tax net'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <!-- <img src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view tax-net" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">View Tax Net</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'document manager'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <!-- <img src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view document-processing" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">View document processing</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'user manager'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view vehicle" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view User Manager</span>
                                        </label>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="view users" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view users</span>
                                            </label>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="create user" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">create user</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="edit user" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">edit user</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="delete user" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">delete user</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="view role" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view role</span>
                                            </label>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="create role" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">create role</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="edit role" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">edit role</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="delete role" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">delete role</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                            </div>
                                            <label class="flex items-center">
                                                <input value="view location" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view location</span>
                                            </label>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="create location" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">create location</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="edit location" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">edit location</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                        <div class="ml-10 pt-5 relative">
                                            <div class="flex items-center">
                                                <div class="pr-1 flex items-end pl-1">
                                                    <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                    <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                                </div>
                                                <label class="flex items-center">
                                                    <input value="delete location" v-model="permissions" type="checkbox" class="form-checkbox">
                                                    <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">delete location</span>
                                                </label>
                                            </div>
                                            <div class=" absolute pl-px-2 inset-y-0 -top-2 pb-2">
                                                <div class="h-full border border-tertiary-200">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class=" absolute ml-1 left-0 pl-px-1 inset-y-0 pt-3 pb-2">
                                        <div class="h-full border border-tertiary-200">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="toggle == 'settings'">
                                <div class="relative">
                                    <div class="flex items-center">
                                        <div class="pr-1">
                                            <img src="~/assets/icons/chevron-down.svg" alt="" srcset="">
                                        </div>
                                        <label class="flex items-center">
                                            <input value="view settings" v-model="permissions" type="checkbox" class="form-checkbox">
                                            <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">view settings</span>
                                        </label>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings general" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings general</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings import" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings import</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings vehicle" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings vehicle</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings owner" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings owner</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings document" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings document</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings commercial-park" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings commercial park</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings charges" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings charges</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class="mt-5 ml-1 relative">
                                        <div class="flex items-center">
                                            <div class="pr-1 flex items-end">
                                                <img src="~/assets/icons/line.svg" alt="" srcset="">
                                                <!-- <img class=" -ml-1" src="~/assets/icons/chevron-down.svg" alt="" srcset=""> -->
                                            </div>
                                            <label class="flex items-center">
                                                <input value="settings location-manager" v-model="permissions" type="checkbox" class="form-checkbox">
                                                <span class="ml-2 text-xs xl:text-sm text-tertiary-600 capitalize">settings location manager</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div class=" absolute ml-1 left-0 pl-px-1 inset-y-0 pt-3 pb-2">
                                        <div class="h-full border border-tertiary-200">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-5 px-6 " v-show="activeTab === 1">
                        <div class="flex flex-col w-100">
                            <label for="vehicle_type" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100 text-left">Add User<span class="text-red-500">*</span></label>
                            <select id="vehicle_type"  required class="border border-gray-300 dark:border-gray-700 pl-3 py-4 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" placeholder="@example">
                                <option value="">Select Vehicle Type </option>
                            </select>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    </div>
</template>

<script>
import Status from '~/components/Status.vue';
import BioData from '~/components/BioData.vue';AssetsCard
import ActivitiesLog from '~/components/ActivitiesLog.vue';
import AssetsCard from '~/components/AssetsCard.vue';
import Sliding from '~/components/Sliding.vue';
import Tabs from '~/components/Tabs.vue';
import Button from '~/components/Button.vue';
import BreadCrumb from '~/components/BreadCrumb.vue';
import { mapState, mapActions } from 'vuex'

export default {
    name: 'Show',
    data () {
        return {
            toggle_slide: false,
            table_head_data: ['Unique Id #', 'Profile Name', 'Category', 'Date Created'],
            activeTab: 0,
            tabs: [
                "Permission",
            ],
            permissions: [],
            toggle: 'owner manager',
        }
    },
    components: {
        Status,
        BioData,
        ActivitiesLog,
        AssetsCard,
        Sliding,
        Tabs,
        BreadCrumb,
        Button
    },
    computed: {
        ...mapState({
            demo: state => state.demo
        })
    },
    methods: {
        togglePermission(module) {
            this.toggle = module
        },
        ...mapActions({
            updateOwner: 'vehicle/updateVehicle'
        }),
        toggleSlide () {
            this.toggle_slide = !this.toggle_slide
        },
        getOwnerName (owner) {
            let ownersName
            if(owner.attributes.type === 'Business') {
                ownersName = owner.attributes.businessName
            }else if (owner.attributes.type === 'Government') {
                ownersName = owner.attributes.agencyName
            }else {
                ownersName = `${owner.attributes.firstName} ${owner.attributes.lastName} ${owner.attributes.otherName ? owner.attributes.otherName : ''}`
            }

            return ownersName
        }
    },
    asyncData({store, params,}) {

    }
}
</script>

<style>
.checkbox:checked + .check-icon {
    display: flex;
}
</style>