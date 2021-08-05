<template>
    <div>
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
                                    <div class="bg-white rounded px-8 pt-4 pb-2 grid-cols-7 grid">
                                        <div class="col-span-4">
                                            <Input class="pb-6" lable="Title" type="text" />
                                            <RadioOrCheckbox type="checkbox" id="registration" label="Required for New Registration "/>
                                            <RadioOrCheckbox type="checkbox" id="revalidation" label="Required for Revalidation"/>
                                            <RadioOrCheckbox type="checkbox" id="Change of Ownership" label="Required for Change of Ownership"/>
                                        </div>
                                        <div class="col-span-3">
                                            <CustomizeCheckbox id="status" label="Status"/>
                                            <RadioOrCheckbox type="checkbox" id="renewal" label="Required for Renewal"/>
                                            <RadioOrCheckbox type="checkbox" id="printable" label="Printable"/>
                                            <div class="flex items-center ">
                                                <label for="rememberme" class="text-xs text-tertiary-800 mr-2">Pricing Type</label>
                                                <select v-model="pricing_type" id="rememberme" name="rememberme" class=" text-xs px-3 focus:outline-none border py-1 rounded-lg text-tertiary-300"  >
                                                    <option value="">Select Type</option>
                                                    <option value="dynamic">Dynamic</option>
                                                    <option value="fixed">Fixed</option>
                                                    <option value="flat">Flat</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-6">
                                    <h3 class="pb-2 text-tertiary-500 text-sm">Validity Period</h3>
                                    <div class="bg-white rounded px-8 pt-4 grid-cols-7 grid">
                                        <div class="col-span-4">
                                            <div class="text-sm text-tertiary-500 pb-2">Private</div>
                                            <div class="flex items-center">
                                                <RadioOrCheckbox type="radio" id="private" label="6 months"/>
                                                <RadioOrCheckbox type="radio" id="private" label="12 months"/>
                                            </div>
                                            <div class="text-sm text-tertiary-500 pb-2">Government</div>
                                            <div class="flex items-center">
                                                <RadioOrCheckbox type="radio" id="government" label="6 months"/>
                                                <RadioOrCheckbox type="radio" id="government" label="12 months"/>
                                            </div>
                                        </div>
                                        <div class="col-span-3">
                                            <div class="text-sm text-tertiary-500 pb-2">Commercial</div>
                                            <div class="flex items-center">
                                                <RadioOrCheckbox type="radio" id="commercial" label="6 months"/>
                                                <RadioOrCheckbox type="radio" id="commercial" label="12 months"/>
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
                            <div class="pt-3 flex flex-col">
                                <div class="flex justify-between items-end">
                                    <h3 class="pb-2 text-tertiary-500 text-sm">Pricing</h3>
                                    <Button  class="mb-2" type="solid" title="Add Pricing" />
                                </div>
                                <div class="flex-grow bg-white max-h-139">
                                    <Tabs v-if="pricing_type === 'dynamic'">
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
                                            <div class="w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto ">
                                                <div class="overflow-hidden">
                                                    <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                                                        <div class="max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                                                            <table class="min-w-full bg-primary-100">
                                                                <thead class="text-sm text-tertiary-800">
                                                                    <tr>
                                                                        <th v-for="val in table_head_data.dynamic" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                                                            <div class="py-4 text-tertiary-500"> {{ val }}  </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                                                    <tr v-for="category in categories" class="hover:bg-primary-100 group border-b">
                                                                        <td class="py-3 px-5 text-left"> {{ category.type }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                                                                            <div class="flex items-center">
                                                                                <button @click="deleteCategory(category.id)" class="flex items-center focus:outline-none pr-2">
                                                                                    <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                                                                    <p class="text-xs font-normal pl-1 text-action-danger"></p>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" v-show="activeTab === 1">
                                            <div class="w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto ">
                                                <div class="overflow-hidden">
                                                    <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                                                        <div class="max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                                                            <table class="min-w-full bg-primary-100">
                                                                <thead class="text-sm text-tertiary-800">
                                                                    <tr>
                                                                        <th v-for="val in table_head_data.dynamic" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                                                            <div class="py-4 text-tertiary-500"> {{ val }}  </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                                                    <tr v-for="category in categories" class="hover:bg-primary-100 group border-b">
                                                                        <td class="py-3 px-5 text-left"> {{ category.type }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                                                                            <div class="flex items-center">
                                                                                <button @click="deleteCategory(category.id)" class="flex items-center focus:outline-none pr-2">
                                                                                    <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                                                                    <p class="text-xs font-normal pl-1 text-action-danger"></p>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" v-show="activeTab === 2">
                                            <div class="w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto ">
                                                <div class="overflow-hidden">
                                                    <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                                                        <div class="max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                                                            <table class="min-w-full bg-primary-100">
                                                                <thead class="text-sm text-tertiary-800">
                                                                    <tr>
                                                                        <th v-for="val in table_head_data.dynamic" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                                                            <div class="py-4 text-tertiary-500"> {{ val }}  </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                                                    <tr v-for="category in categories" class="hover:bg-primary-100 group border-b">
                                                                        <td class="py-3 px-5 text-left"> {{ category.type }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                                                                            <div class="flex items-center">
                                                                                <button @click="deleteCategory(category.id)" class="flex items-center focus:outline-none pr-2">
                                                                                    <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                                                                    <p class="text-xs font-normal pl-1 text-action-danger"></p>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tabs>
                                    <Tabs v-if="pricing_type === 'fixed'">
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
                                            <div class="w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto ">
                                                <div class="overflow-hidden">
                                                    <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                                                        <div class="max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                                                            <table class="min-w-full bg-primary-100">
                                                                <thead class="text-sm text-tertiary-800">
                                                                    <tr>
                                                                        <th v-for="val in table_head_data.fixed" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                                                            <div class="py-4 text-tertiary-500"> {{ val }}  </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                                                    <tr v-for="category in categories" class="hover:bg-primary-100 group border-b">
                                                                        <td class="py-3 px-5 text-left"> {{ category.type }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                                                                            <div class="flex items-center">
                                                                                <button @click="deleteCategory(category.id)" class="flex items-center focus:outline-none pr-2">
                                                                                    <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                                                                    <p class="text-xs font-normal pl-1 text-action-danger"></p>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" v-show="activeTab === 1">
                                            <div class="w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto ">
                                                <div class="overflow-hidden">
                                                    <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                                                        <div class="max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                                                            <table class="min-w-full bg-primary-100">
                                                                <thead class="text-sm text-tertiary-800">
                                                                    <tr>
                                                                        <th v-for="val in table_head_data.fixed" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                                                            <div class="py-4 text-tertiary-500"> {{ val }}  </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                                                    <tr v-for="category in categories" class="hover:bg-primary-100 group border-b">
                                                                        <td class="py-3 px-5 text-left"> {{ category.type }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                                                                            <div class="flex items-center">
                                                                                <button @click="deleteCategory(category.id)" class="flex items-center focus:outline-none pr-2">
                                                                                    <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                                                                    <p class="text-xs font-normal pl-1 text-action-danger"></p>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="" v-show="activeTab === 2">
                                            <div class="w-full max-w-249 mx-auto xl:pl-16 2xl:pl-0 2xl:mx-auto ">
                                                <div class="overflow-hidden">
                                                    <div class="relative w-full pt-14 bg-primary-100 text-tertiary-800">
                                                        <div class="max-h-80 bg-white overflow-y-auto scrollbar-thin scrollbar-thumb-tertiary-200 scrollbar-track-white">
                                                            <table class="min-w-full bg-primary-100">
                                                                <thead class="text-sm text-tertiary-800">
                                                                    <tr>
                                                                        <th v-for="val in table_head_data.fixed" class="text-left px-5 text-sm font-normal h-0 py-0 border-0">   
                                                                            <div class="py-4 text-tertiary-500"> {{ val }}  </div>
                                                                        </th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                                                    <tr v-for="category in categories" class="hover:bg-primary-100 group border-b">
                                                                        <td class="py-3 px-5 text-left"> {{ category.type }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-5 text-left"> {{ category.amount }} </td>
                                                                        <td class="py-3 px-4 group-hover:text-tertiary-400 text-transparent flex justify-end">
                                                                            <div class="flex items-center">
                                                                                <button @click="deleteCategory(category.id)" class="flex items-center focus:outline-none pr-2">
                                                                                    <img src="~/assets/icons/delete.svg" alt="" srcset="">
                                                                                    <p class="text-xs font-normal pl-1 text-action-danger"></p>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Tabs>
                                    <div v-if="pricing_type === 'flat'">
                                        <div class="flex flex-col px-10 py-8">
                                            <InputWithIcon type="number" id="amount" label="Amount">
                                                <svg width="24" height="11" viewBox="0 0 24 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M0.56 8.256H6.216V7.248H0.56V8.256ZM0.56 5.736H6.216V4.728H0.56V5.736ZM8.04125 11H9.20325V2.418L14.2573 11H15.6573V0.99H14.4952V9.264L9.62325 0.99H8.04125V11ZM17.4721 8.256H23.1281V7.248H17.4721V8.256ZM17.4721 5.736H23.1281V4.728H17.4721V5.736Z" fill="#3968F9"/>
                                                </svg>
                                            </InputWithIcon>
                                        </div>
                                    </div>
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
        <div class="fixed inset-0 bg-black z-50 bg-opacity-20 px-24 2xl:px-64 flex items-center hidden">
            <div class="max-w-162 mx-auto bg-white w-full h-70-vh">
                <div class="py-3 flex-none flex items-start justify-between w-full border-b px-10">
                    <h1 class="text-2xl font-medium text-primary-900">Add Pricing</h1>
                    <button class="focus:outline-none">
                        <img class="w-4" src="~/assets/icons/cancle.svg" alt="" srcset="">
                    </button>
                </div>

                <div class="px-10 pt-10 flex flex-col">
                    <div class="flex flex-col flex-none">
                        <label for="rememberme" class="text-tertiary-800 pb-2">Pricing Category</label>
                        <select v-model="pricing_type" id="rememberme" name="rememberme" class=" text-xs px-3 focus:outline-none border py-3 rounded text-tertiary-300"  >
                            <option value="">Select Price Category</option>
                            <option value="dynamic">Dynamic</option>
                            <option value="fixed">Fixed</option>
                            <option value="flat">Flat</option>
                        </select>
                    </div>
                    <div class="max-h-75 overflow-y-auto mt-10 border-l border-r scrollbar-thin flex-grow">
                        <table class="min-w-full bg-primary-100 ">
                            <thead class="text-sm text-tertiary-800">
                                <tr>
                                    <th v-for="val in table_head_data.price_category" class="text-left px-5 text-sm font-normal py-3 border-0">   
                                        {{ val }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="bg-white text-sm text-tertiary-500 font-normalz relative">
                                <tr  class="border-b">
                                    <td class="py-3 px-2 text-left"> 
                                        <select v-model="pricing_type" id="category" name="category" class=" text-xs px-3 focus:outline-none border py-2 rounded text-tertiary-300"  >
                                            <option value="">Select Vehicle Category</option>
                                            <option value="dynamic">Dynamic</option>
                                            <option value="fixed">Fixed</option>
                                            <option value="flat">Flat</option>
                                        </select>
                                    </td>
                                    <td class="py-3 px-2 text-left">
                                        <select v-model="pricing_type" id="capacity" name="capacity" class=" text-xs px-3 focus:outline-none border py-2 rounded text-tertiary-300"  >
                                            <option value="">Select Engine Capacity</option>
                                            <option value="dynamic">Dynamic</option>
                                            <option value="fixed">Fixed</option>
                                            <option value="flat">Flat</option>
                                        </select> 
                                    </td>
                                    <td class="py-3 px-2 text-transparent flex justify-start items-center">
                                        <input class="py-1 mt-1 rounded px-3 border w-20 focus:outline-none" type="text" name="" placeholder="Amount" id="">
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="py-1 border flex justify-end items-center flex-none">
                        <Button class="h-8" type="" title="Add Row" />
                    </div>
                </div>

                <div class="pt-5 px-10 flex justify-end items-center flex-none">
                    <Button type="solid" title="Submit" />
                    <Button type="" title="Cencle" />
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