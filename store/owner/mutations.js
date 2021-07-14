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


export default {
    ADD_OWNERS(state, owner) {
        let owners = new Owners(owner)
        state.owners = owners
    },
    ADD_INDIVIDUAL_OWNERS(state, owners) {
        state.individualOwners = getOwnersWithType(owners, 'Individual')
    },
    ADD_BUSINESS_OWNERS(state, owners) {
        state.businessOwners = getOwnersWithType(owners, 'Business')
    },
    ADD_GOVERNMENT_OWNERS(state, owners) {
        state.governmentOwners = getOwnersWithType(owners, 'Government')
    }
}