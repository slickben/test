<template>
    <div class="fixed inset-0 bg-black z-40 bg-opacity-50 px-24 2xl:px-64 pt-12">
        <div class="container mx-auto flex flex-col py-10 bg-tertiary-100 rounded-lg h-90-vh overflow-y-auto my-auto scrollbar-thin
            scrollbar-thumb-tertiary-200
            scrollbar-track-tertiary-100">
            <div class="pb-6 flex-none flex items-start justify-between w-full border-b px-16 2xl:px-24">
                <h1 class="text-2xl font-medium text-primary-900">Add Document</h1>
                <button class="focus:outline-none">
                    <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                </button>
            </div>
            <div class="flex-grow pb-8 pt-2 px-16 2xl:px-24 flex flex-col">
                <div class="flex-grow">
                    <div class="grid grid-cols-2 gap-x-32">
                        <div>
                            <div class="pt-6">
                                <h3 class="pb-2 text-tertiary-500 text-sm">General</h3>
                                <div class="bg-white rounded px-8 py-4 pb-6 grid-cols-7 grid">
                                    <div class="col-span-4">
                                        <Input class="pb-6" lable="Title" type="text" />
                                        <div class="flex items-center pb-6">
                                            <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                                            <label for="rememberme" class="text-xs text-tertiary-800">Required for New Registration</label>
                                        </div>
                                        <div class="flex items-center pb-6">
                                            <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                                            <label for="rememberme" class="text-xs text-tertiary-800">Required for Revalidation</label>
                                        </div>
                                        <div class="flex items-center">
                                            <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                                            <label for="rememberme" class="text-xs text-tertiary-800">Required for Change of Ownership</label>
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <div class="flex items-center justify-end py-6">
                                            <p class="pr-2 text-tertiary-500 text-sm">Status:</p>
                                            <div class="cursor-pointer rounded-full relative shadow-sm">
                                                <input type="checkbox" name="notification_updates" id="toggle6" class="focus:outline-none checkbox w-8 h-8 rounded-full bg-white absolute m-1 shadow-sm appearance-none cursor-pointer" />
                                                <label for="toggle6" class="toggle-label dark:bg-gray-700 block w-32 h-10 overflow-hidden rounded-full bg-gray-300 cursor-pointer py-2 px-3 text-white"></label>
                                            </div>
                                        </div>
                                        <div class="flex items-center pb-6">
                                            <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                                            <label for="rememberme" class="text-xs text-tertiary-800">Required for Renewal</label>
                                        </div>
                                        <div class="flex items-center pb-6">
                                            <input id="rememberme" name="rememberme" class="w-3 h-3 mr-2" type="checkbox" />
                                            <label for="rememberme" class="text-xs text-tertiary-800">Printable</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6">
                                <h3 class="pb-2 text-tertiary-500 text-sm">Validity Period</h3>
                                <div class="bg-white rounded px-8 py-4 pb-6 grid-cols-7 grid">
                                    <div class="col-span-4">
                                        <div class="text-sm text-tertiary-500 pb-2">Private</div>
                                        <div class="flex items-center">
                                            <div class="flex items-center pb-4">
                                                <input id="rememberme" name="private" class="w-3 h-3 mr-2" type="radio" />
                                                <label for="rememberme" class="text-xs text-tertiary-800">6 months</label>
                                            </div>
                                            <div class="flex items-center pb-4 pl-4">
                                                <input id="rememberme" name="private" class="w-3 h-3 mr-2" type="radio" />
                                                <label for="rememberme" class="text-xs text-tertiary-800">12 months</label>
                                            </div>
                                        </div>
                                        <div class="text-sm text-tertiary-500 pb-2">Government</div>
                                        <div class="flex items-center">
                                            <div class="flex items-center">
                                                <input id="rememberme" name="government" class="w-3 h-3 mr-2" type="radio" />
                                                <label for="rememberme" class="text-xs text-tertiary-800">6 months</label>
                                            </div>
                                            <div class="flex items-center pl-4">
                                                <input id="rememberme" name="government" class="w-3 h-3 mr-2" type="radio" />
                                                <label for="rememberme" class="text-xs text-tertiary-800">12 months</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-span-3">
                                        <div class="text-sm text-tertiary-500 pb-2">Commercial</div>
                                        <div class="flex items-center">
                                            <div class="flex items-center pb-4">
                                                <input id="rememberme" name="commercial" class="w-3 h-3 mr-2" type="radio" />
                                                <label for="rememberme" class="text-xs text-tertiary-800">6 months</label>
                                            </div>
                                            <div class="flex items-center pb-4 pl-4">
                                                <input id="rememberme" name="commercial" class="w-3 h-3 mr-2" type="radio" />
                                                <label for="rememberme" class="text-xs text-tertiary-800">12 months</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6">
                                <h3 class="pb-2 text-tertiary-500 text-sm">Revenue Sharing</h3>
                                <div class="bg-white rounded px-8 py-4 pb-6">
                                    <div class="flex items-center pb-3 justify-between">
                                        <p class="text-xs text-tertiary-500">Board of Internal Revenue (BIR)</p>
                                        <p class="text-xs text-tertiary-500">Platform</p>
                                    </div>
                                    <div class="flex items-center">
                                        <p class="text-sm text-primary-400 pr-2">%</p>
                                        <input class="rounded-lg overflow-hidden appearance-none bg-primary-300 h-2 w-full" type="range" min="1" max="100" step="1" value="50" />
                                    </div>
                                    <div class="flex items-center pt-3 justify-between">
                                        <p class="text-xs text-tertiary-500">50</p>
                                        <p class="text-xs text-tertiary-500">50</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 flex flex-col">
                            <h3 class="pb-2 text-tertiary-500 text-sm">Pricing</h3>
                            <div class="flex-grow bg-white max-h-139">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex justify-end items-center pt-8 flex-none">
                    <Button class="mr-12" type="solid" title="Processed To Payment"/>
                    <Button type="secondary"  title="Cancle"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Button from '~/components/Button.vue'
import Input from '~/components/form/Input.vue'
export default {
    components: {
        Button,
        Input
    }
}
</script>