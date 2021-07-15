

// function getOwnersWithType(owners, type) {
//     let ownersOnType = [];
//     owners.forEach( owner => {
//         if(owner.type === type) {
//             ownersOnType.push(owner)
//         }
//     })

//     return ownersOnType
// }


export default {
    ADD_VEHICLES(state, vehicles) {
        state.vehicles = vehicles
    },
    // ADD_INDIVIDUAL_OWNERS(state, owners) {
    //     state.individualOwners = getOwnersWithType(owners, 'Individual')
    // },
    // ADD_BUSINESS_OWNERS(state, owners) {
    //     state.businessOwners = getOwnersWithType(owners, 'Business')
    // },
    // ADD_GOVERNMENT_OWNERS(state, owners) {
    //     state.governmentOwners = getOwnersWithType(owners, 'Government')
    // }
}