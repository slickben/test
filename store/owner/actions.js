class Owner {
    constructor(firstName, lastName, otherName, phoneNumber, email, gender, title, maritalStatus, dateOfBirth, type, city, landmark, lga, state, street, dateCreated, id) {
        this.firstName = firstName
        this.lastName = lastName
        this.otherName = otherName
        this.phoneNumber = phoneNumber
        this.email = email
        this.gender = gender
        this.title = title
        this.maritalStatus = maritalStatus
        this.dateOfBirth = dateOfBirth
        this.type = type
        this.city = city
        this.landmark = landmark
        this.lga = lga
        this.state = state
        this.street = street
        this.dateCreated = dateCreated
        this.id = id
    }
    getFullName () {
        return `${this.title} ${this.firstName} ${this.lastName}`
    }
}

export default {
    async getAllOwners({ commit, }) {
        try {
            const { data } = await this.$axios.get('/owners');
            let owners = data.data.map( owner => {
                return new Owner(owner.attributes.firstName, owner.attributes.lastName, owner.attributes.otherName, owner.attributes.phoneNumber, owner.attributes.email, owner.attributes.gender, owner.attributes.title, owner.attributes.maritalStatus, owner.attributes.dateOfBirth, owner.attributes.type, owner.relationships.address.city, owner.relationships.address.landmark, owner.relationships.address.lga, owner.relationships.address.state, owner.relationships.address.street, owner.attributes.createdAt, owner.id)
            })
            commit('ADD_OWNERS', owners);
            commit('ADD_INDIVIDUAL_OWNERS', owners);
            commit('ADD_BUSINESS_OWNERS', owners);
            commit('ADD_GOVERNMENT_OWNERS', owners);
            console.log('add here')
        } catch (err) {
            console.log(err)
        }

    }
}