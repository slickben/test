<template>
    <div class="fixed inset-0 bg-black z-40 bg-opacity-50 px-24 2xl:px-64 pt-12">
        <div class="container mx-auto flex flex-col py-10 bg-white rounded-lg h-90-vh overflow-y-auto my-auto scrollbar-thin
            scrollbar-thumb-tertiary-200
            scrollbar-track-tertiary-100">
            <div class="pb-6 flex-none flex items-start justify-between w-full border-b px-16 2xl:px-24">
                <h1 class="text-2xl font-medium text-primary-900">Processing Fee</h1>
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
                                <div class="bg-tertiary-100 rounded px-8 pt-4 pb-2 grid-cols-7 grid">
                                    <div class="col-span-4">
                                        <Input class="pb-6" lable="Title" type="text" />
                                        <RadioOrCheckbox type="checkbox" id="registration" label="Required for New Registration "/>
                                        <RadioOrCheckbox type="checkbox" id="revalidation" label="Required for Revalidation"/>
                                        <!-- <RadioOrCheckbox type="checkbox" id="Change of Ownership" label="Required for Change of Ownership"/> -->
                                    </div>
                                    <div class="col-span-3">
                                        <CustomizeCheckbox id="status" label="Status"/>
                                        <RadioOrCheckbox type="checkbox" id="renewal" label="Required for Renewal"/>
                                        <RadioOrCheckbox type="checkbox" id="printable" label="Printable"/>
                                    </div>
                                </div>
                            </div>
                            <div class="pt-6">
                                <h3 class="pb-2 text-tertiary-500 text-sm">Revenue Sharing</h3>
                                <div class="bg-tertiary-100 rounded px-8 py-4 pb-6">
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
                            <div class="flex justify-between items-end">
                                <h3 class="pb-2 text-tertiary-500 text-sm">Pricing</h3>
                            </div>
                            <div class="flex-grow bg-tertiary-100 max-h-139">
                                <Tabs >
                                    <template slot="head">
                                        <li 
                                            v-for="(tab, index) in tabs" 
                                            :key="index" 
                                            class="text-xs cursor-pointer py-3 pt-4 mr-16  border-b-4 "
                                            :class="activeTab===index ? 'text-primary-500 border-primary-500' : 'text-tertiary-500 border-transparent'" 
                                            @click="activeTab = index"
                                        >
                                            {{ tab }}
                                        </li>
                                    </template>
                                    <div class="" v-show="activeTab === 0">
                                        <div class="flex flex-col px-10 py-8 bg-tertiary-100">
                                            <InputWithIcon class="pb-6" type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                            <InputWithIcon type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                        </div>
                                    </div>
                                    <div class="" v-show="activeTab === 1">
                                        <div class="px-10 py-8 bg-tertiary-100">
                                            <InputWithIcon class="pb-6" type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                            <InputWithIcon type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                        </div>
                                    </div>
                                    <div class="" v-show="activeTab === 2">
                                        <div class="flex flex-col px-10 py-8 bg-tertiary-100">
                                            <InputWithIcon class="pb-6" type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                            <InputWithIcon type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                        </div>
                                    </div>
                                </Tabs>
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
import RadioOrCheckbox from '~/components/Document/RadioOrCheckbox.vue'
import CustomizeCheckbox from '~/components/Document/CustomizeCheckbox.vue'
import InputWithIcon from '~/components/Document/InputWithIcon.vue'
export default {
    components: {
        Button,
        Input,
        RadioOrCheckbox,
        CustomizeCheckbox,
        InputWithIcon
    },
    data() {
        return {
            activeTab: 0,
            table_head_data: {
                dynamic: ['Vehicle Type', 'Amount(#)', '', ],
                fixed: ['Category', 'Engine Capacity', 'Amount(#)', '', ],
                price_category: ['Category', 'Capacity', 'Amount(#)']
            },
            pricing_type: '',
            categories: [
                { type: 'benson', amount: 5000},
                { type: 'maik', amount: 300},
                { type: 'suns', amount: 400},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
                { type: 'malicl', amount: 5000},
            ],
            tabs: [
                "New Registration",
                "Renewal",
                "Revalidation",
            ],
        }
    },
}
</script>