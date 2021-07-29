class Owners {
    constructor(owners) {
        this.owners = owners
    }
}

function getOwnersWithType(owners, type) {
    let ownersOnType = [];
    owners.forEach( owner => {
        if(owner.type === type) {
            ownersOnType.push(owner)
        }
    })

    return ownersOnType
}

// updateOwner() {
    
// }


export default {
    ADD_OWNERS(state, owner) {
        let owners = new Owners(owner)
        state.owners = owners
    },
    ADD_INDIVIDUAL_OWNERS(state, owners) {
        state.individualOwners = getOwnersWithType(owners, 'Individual')
    },
    UPDATE_INDIVIDUAL_OWNERS(state, owners) {

        let filterOwner =  state.individualOwners.filter( owner => owner.id != owners.id)

        filterOwner.push(owners)

        state.individualOwners = filterOwner

    },
    ADD_BUSINESS_OWNERS(state, owners) {
        state.businessOwners = getOwnersWithType(owners, 'Business')
    },
    UPDATE_BUSINESS_OWNERS(state, owners) {

        let filterOwner =  state.businessOwners.filter( owner => owner.id != owners.id)

        filterOwner.push(owners)

        state.businessOwners = filterOwner

    },
    ADD_GOVERNMENT_OWNERS(state, owners) {
        state.governmentOwners = getOwnersWithType(owners, 'Government')
    },
    UPDATE_GOVERNMENT_OWNERS(state, owners) {

        let filterOwner =  state.governmentOwners.filter( owner => owner.id != owners.id)

        filterOwner.push(owners)

        state.governmentOwners = filterOwner
    }
}