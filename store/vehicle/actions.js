// class Vehicle {
//     constructor(ownerNames, ownerId, vehicleId, plateNumber, vehicleCategory, make, model, year, type, color, engineCapacity, engineNumber, ChasisNumber, fuelType, stateOfPlateAllocation, mileage, tankCapacity) {
//         this.ownerNames = ownerNames
//         this.ownerId = ownerId
//         this.vehicleId = vehicleId
//         this.phoneNumber = plateNumber
//         this.vehicleCategory = vehicleCategory
//         this.make = make
//         this.model = model
//         this.year = year
//         this.type = type
//         this.color = color
//         this.engineCapacity =engineCapacity
//         this.engineNumber = engineNumber
//         this.ChasisNumber = ChasisNumber
//         this.fuelType = fuelType
//         this.stateOfPlateAllocation = stateOfPlateAllocation
//     }
// }

// function getOwnerName (vehicle) {
//     let ownersName
//     if(vehicle.ownedBy.attributes.type === 'Business') {
//         ownersName = vehicle.ownedBy.attributes.businessName
//     }else if (vehicle.ownedBy.attributes.type === 'Government') {
//         ownersName = vehicle.ownedBy.attributes.agencyName
//     }else {
//         ownersName = `${vehicle.ownedBy.attributes.firstName} ${vehicle.ownedBy.attributes.lastNme} ${vehicle.ownedBy.attributes.otherNme ? vehicle.ownedBy.attributes.otherNme : ''}`
//     }

//     return ownersName
// }

export default {
    async getAllVehicles({ commit, }) {
        try {
            const { data } = await this.$axios.get('/vehicles');
            // let vehicles = data.data.map( vehicle => {
                
            //     return new Vehicle(

            //     )
            // })
            commit('ADD_VEHICLES', data.data);
            console.log('add here')
        } catch (err) {
            console.log(err)
        }

    },
    async updateVehicle({ commit, }, vehicle ) {
        try {
            const { data } = await this.$axios.put(`/vehicles/${vehicle.id}`, {
                vehicle
            });

            console.log(data)
        } catch (err) {
            console.log(err)
        }

    }
}