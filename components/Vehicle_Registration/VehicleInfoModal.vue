<template>
    <div class="absolute bg-black inset-0 bg-opacity-70 px-24 2xl:px-72 pt-12">
        <div class="container mx-auto flex flex-col bg-white 2xl:pt-12 py-6 rounded-lg h-90-vh overflow-y-auto my-auto">
            <div class="pb-6 flex-none flex items-start justify-between w-full px-12 border-b">
                <h1 class="text-2xl font-semibold text-primary-900">Vehicle Registration</h1>
                <button @click="onclick" class="focus:outline-none">
                    <img src="~/assets/icons/cancle.svg" alt="" srcset="">
                </button>
            </div>
            <div class="flex-grow">
                <form class="h-full flex flex-col">
                    <!-- wizard form timeline -->
                    <div class="text-xs font-medium text-tertiary-300 border-b relative">
                        <div class="py-4 text-center text-sm font-normal text-tertiary-600 ">
                            step {{ step }} of 3
                        </div>
                        <div class="w-full grid grid-cols-3 absolute -bottom-1">
                            <div :class="[step >= 1 ? 'opacity-100' : 'opacity-0']" class="bg-primary-400 h-2"></div>
                            <div :class="[step >= 2 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                            <div :class="[step >= 3 ? 'opacity-100' : 'opacity-0']" class="h-2 bg-primary-400"></div>
                        </div>
                    </div>
                    <!-- form fieldset 1 -->
                    <fieldset v-show="step === 1" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Vehicle Details</h3>
                                    
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">
                                <div>
                                    <InputSelect v-model="vehicleForm.category" isRequired="true" id="category" lable="Vehicle Category"> 
                                        <option value="">Select Category</option>
                                        <option v-for="(categorie, index) in categories" :value="categorie.name">{{categorie.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.category" class="text-sm pt-1 text-action-danger"> {{ errors.category }} </p>
                                </div>

                                <div>
                                    <div class="flex flex-col w-full">
                                        <label for="state" class="pb-2 text-xs font-normal  text-tertiary-600 dark:text-gray-100"> Vehicle Make <span  class="text-red-500">*</span></label>
                                        <select v-model="vehicleForm.make" @change="getSelectedMake($event)"  id="state" required class="border border-gray-300 dark:border-gray-700 px-4 py-3 shadow-sm rounded text-xs font-normal focus:outline-none focus:border-indigo-700 bg-transparent placeholder-tertiary-300 text-tertiary-300 dark:text-gray-400" >
                                            <option value="">Select Make</option>
                                            <option v-for="(make, index) in makes" :key="index" :value="make.name"> {{ make.name }} </option>
                                        </select>
                                    </div>
                                    <p v-show="errors.make" class="text-sm pt-1 text-action-danger"> {{ errors.make }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.model" isRequired="true" id="model" lable="Vehicle Model"> 
                                        <option value="">Select Model</option>
                                        <option v-for="(model, index) in selectedModels" :value="model.name">{{model.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.model" class="text-sm pt-1 text-action-danger"> {{ errors.model }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.year" isRequired="true" id="year" lable="Vehicle Year"> 
                                        <option value="">Select Year</option>
                                        <option v-for="(year, index) in years" :value="year.name">{{year.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.year" class="text-sm pt-1 text-action-danger"> {{ errors.year }} </p>
                                </div>

                                <div>
                                    <Input v-model="vehicleForm.color" type="text" lable="Color" place_holder="Enter Color" id="color" isRequired="true" />
                                    <p v-show="errors.color" class="text-sm pt-1 text-action-danger"> {{ errors.color }} </p>
                                </div>

                                <div>
                                    <Input v-model="vehicleForm.plateNumber" type="text" lable="Plate Number" place_holder="Enter Plate Number" id="last_name" isRequired="true" />
                                    <p v-show="errors.plateNumber" class="text-sm pt-1 text-action-danger"> {{ errors.plateNumber }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.type" isRequired="true" id="type" lable="Vehicle Type"> 
                                        <option value="">Select Vehicle Type</option>
                                        <option v-for="(v_types, index) in v_types" :value="v_types.name">{{v_types.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.type" class="text-sm pt-1 text-action-danger"> {{ errors.type }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.seatCode" isRequired="true" id="seat_code" lable="Seat Code"> 
                                        <option value="">Select Seat Code</option>
                                        <option v-for="(commercial_seat_code, index) in commercial_seat_codes" :value="commercial_seat_code.code">{{commercial_seat_code.code}}</option>
                                    </InputSelect>
                                    <p v-show="errors.seatCode" class="text-sm pt-1 text-action-danger"> {{ errors.seatCode }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.hackneyCode" isRequired="true" id="hackney_code" lable="Hackney Code"> 
                                        <option value="">Select hackney Code</option>
                                        <option v-for="(hackney_code, index) in hackney_codes" :value="hackney_code.name">{{hackney_code.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.hackneyCode" class="text-sm pt-1 text-action-danger"> {{ errors.hackneyCode }} </p>
                                </div>

                                <!-- <InputSelect  isRequired="true" id="state_of_plate_number_allocation" lable="State Of Plate Number Allocation"> 
                                    <option value="">Select State Of Plate Number Allocation</option>
                                </InputSelect> -->
                                
                            </div>
                        </div>
                    </fieldset>
                    <!-- form fieldset 3 -->
                    <fieldset v-show="step === 2" class="flex-grow px-16 pb-10 grid xl:grid-cols-4">
                            <div class="col-span-3">
                                <div class="py-8">
                                    <h3 class=" text-xl font-medium text-tertiary-600">Vehicle Engine Details</h3>
                                </div>
                            <div class=" grid grid-cols-3 gap-y-8 gap-x-10">

                                <div>
                                    <Input v-model="vehicleForm.engineNumber" type="number" lable="Engine Number" place_holder="Enter Engine Number"  id="engine_number" isRequired="true" />
                                    <p v-show="errors.engineNumber" class="text-sm pt-1 text-action-danger"> {{ errors.engineNumber }} </p>
                                </div>
                                

                                <div>
                                    <Input v-model="vehicleForm.chassisNumber" type="number" lable="Chasis Number" place_holder="Enter Chasis Number"  id="Chasis_number" isRequired="true" />
                                    <p v-show="errors.chassisNumber" class="text-sm pt-1 text-action-danger"> {{ errors.chassisNumber }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.engineCapacity" isRequired="true" id="engine_capacity" lable="Engine Capacity "> 
                                        <option value="">Select Engine Capacity </option>
                                        <option v-for="(engine, index) in engines" :value="engine.name">{{engine.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.engineCapacity" class="text-sm pt-1 text-action-danger"> {{ errors.engineCapacity }} </p>
                                </div>

                                <div>
                                    <Input v-model="vehicleForm.mileage" type="text" lable="Mileage" place_holder="Enter Mileage"  id="mileage" isRequired="true" />
                                    <p v-show="errors.mileage" class="text-sm pt-1 text-action-danger"> {{ errors.mileage }} </p>
                                </div>

                                <div>
                                    <Input v-model="vehicleForm.tankCapacity" type="text" lable="Tank Capacity" place_holder="Enter Tank Capacity"  id="tank_capacity" isRequired="true" />
                                    <p v-show="errors.tankCapacity" class="text-sm pt-1 text-action-danger"> {{ errors.tankCapacity }} </p>
                                </div>

                                <div>
                                    <InputSelect v-model="vehicleForm.fuelType" isRequired="true" id="fuel" lable="Fuel Type "> 
                                        <option value="">Select Fuel Type </option>
                                        <option v-for="(fuel, index) in fuels" :value="fuel.name">{{fuel.name}}</option>
                                    </InputSelect>
                                    <p v-show="errors.fuelType" class="text-sm pt-1 text-action-danger"> {{ errors.fuelType }} </p>
                                </div>
                                
                            </div>
                        </div>
                    </fieldset>
                    <!-- navigatiom Button -->
                    <div class="flex justify-start items-center py-6 px-10 border-t">
                        <Button type="secondary" :onClick="previus" v-show="step > 0 && step < 5" class="mr-12 rounded-lg"  title="Previous"/>
                        <Button class="rounded-lg" type="solid" :onClick="next" v-show="step > 0 && step < 2"   title="Next"/>
                        <Button class="rounded-lg" :onClick="submitVehicleInfo" v-show="step > 1"  type="solid" title="Submit"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import InputWithButtonRight from "~/components/form/InputWithButtonRight.vue"
import InputFile from "~/components/form/InputFile.vue"
import InputSelect from "~/components/form/InputSelect.vue"
import Input from "~/components/form/Input.vue"
import { mapState, mapMutations } from 'vuex'
export default {
    components: {
        InputWithButtonRight,
        InputFile,
        InputSelect,
        Input,
    },
    props:['onclick'],
    data() {
        return {
            errors: {},
            step: 1,
            vehicleForm: {
                category: null,
                plateNumber: null,
                make: null,
                model: null,
                year: null,
                type: null,
                color: null,
                chassisNumber: null,
                engineNumber: null,
                engineCapacity: null,
                mileage: null,
                fuelType: null,
                tankCapacity: null,
                hackneyCode: null,
                seatCode: null,
            },
            selectedModels: [],
        }
    },
    computed: {
        ...mapState({
            years:  state => state.settings.vehicle_manager.years,
            v_types:  state => state.settings.vehicle_manager.v_types,
            models:  state => state.settings.vehicle_manager.models,
            makes:  state => state.settings.vehicle_manager.makes,
            hackney_codes:  state => state.settings.vehicle_manager.hackney_codes,
            fuels:  state => state.settings.vehicle_manager.fuels,
            engines:  state => state.settings.vehicle_manager.engines,
            commercial_seat_codes:  state => state.settings.vehicle_manager.commercial_seat_codes,
            categories:  state => state.settings.vehicle_manager.categories,
            agency_categories:  state => state.settings.owner_manager.agency_categories,
        }),
    },
    methods: {
        ...mapMutations({
            ADD_VEHICLE_INFO: 'vehicle_registration/ADD_VEHICLE_INFO'
        }),
        next() {
            if(this.step == 1) {
                if(this.vehicleForm.category && this.vehicleForm.make && this.vehicleForm.model && this.vehicleForm.plateNumber && this.vehicleForm.color && this.vehicleForm.year && this.vehicleForm.type && this.vehicleForm.seatCode && this.vehicleForm.hackneyCode) {
                    this.errors = {};
                    this.step+= 1
                    return
                }

                this.errors = {};

                if (!this.vehicleForm.category) {
                    this.errors.category = 'category required.' ;
                }

                if (!this.vehicleForm.make) {
                    this.errors.make = 'make required.' ;
                }
                if (!this.vehicleForm.model) {
                    this.errors.model = 'model required.' ;
                }
                if (!this.vehicleForm.plateNumber) {
                    this.errors.plateNumber = 'plateNumber required.' ;
                }
                if (!this.vehicleForm.color) {
                    this.errors.color = 'color required.' ;
                }
                if (!this.vehicleForm.year) {
                    this.errors.year = 'year required.' ;
                }
                if (!this.vehicleForm.type) {
                    this.errors.type = 'type required.' ;
                }
                if (!this.vehicleForm.seatCode) {
                    this.errors.seatCode = 'seatCode required.' ;
                }
                if (!this.vehicleForm.hackneyCode) {
                    this.errors.hackneyCode = 'hackneyCode required.' ;
                }
            }
        },
        previus() {
            if(this.step === 1 ) {
                return this.step
            }
            this.step-= 1
        },
        getSelectedMake(event){
            this.selectedModels = []

            this.models.map( model => {
                // console.log(lga.state)
                if(model.make == event.target.value) {
                    this.selectedModels.push(model)
                    // console.log(lga)
                }
            })
            console.log(this.selectedModels)
        },
        submitVehicleInfo () {
            
            if(this.step == 2) {
                if(this.vehicleForm.engineNumber && this.vehicleForm.chassisNumber && this.vehicleForm.engineCapacity && this.vehicleForm.mileage && this.vehicleForm.tankCapacity ) {
                    this.errors = {};
                    this.step = 1
                    let data = {
                        category: this.vehicleForm.category,
                        plateNumber: this.vehicleForm.plateNumber,
                        make: this.vehicleForm.make,
                        model: this.vehicleForm.model,
                        year: this.vehicleForm.year,
                        type: this.vehicleForm.type,
                        color: this.vehicleForm.color,
                        chassisNumber: this.vehicleForm.chassisNumber,
                        engineNumber: this.vehicleForm.engineNumber,
                        engineCapacity: this.vehicleForm.engineCapacity,
                        mileage: this.vehicleForm.mileage,
                        fuelType: this.vehicleForm.fuelType,
                        tankCapacity: this.vehicleForm.tankCapacity,
                        hackneyCode: this.vehicleForm.hackneyCode,
                        seatCode: this.vehicleForm.seatCode,
                    }
                    this.ADD_VEHICLE_INFO(data)
                    this.onclick()
                    return
                }

                this.errors = {};

                if (!this.vehicleForm.engineNumber) {
                    this.errors.engineNumber = 'engineNumber required.' ;
                }
                if (!this.vehicleForm.chassisNumber) {
                    this.errors.chassisNumber = 'chassisNumber required.' ;
                }
                if (!this.vehicleForm.engineCapacity) {
                    this.errors.engineCapacity = 'engineCapacity required.' ;
                }
                if (!this.vehicleForm.mileage) {
                    this.errors.mileage = 'mileage required.' ;
                }
                if (!this.vehicleForm.tankCapacity) {
                    this.errors.tankCapacity = 'tankCapacity required.' ;
                }
            }
        }
    },
    

}
</script>