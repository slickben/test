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
            
            let owners = data.data

            commit('ADD_OWNERS', owners);
            commit('ADD_INDIVIDUAL_OWNERS', owners);
            commit('ADD_BUSINESS_OWNERS', owners);
            commit('ADD_GOVERNMENT_OWNERS', owners);
            console.log('add here')
        } catch (err) {
            console.log(err)
        }

    },
    async updateOwner({ commit, }, {owner, id} ) {
        try {

            console.log(owner, id)

            const { data } = await this.$axios.patch(`/owners/${id}/update`, owner );

            if(data.data.type === "Individual") {
                commit('UPDATE_INDIVIDUAL_OWNERS', data.data);
            }else if(data.data.type === "Business") {
                commit('UPDATE_BUSINESS_OWNERS', data.data);
            }else {
                commit('UPDATE_GOVERNMENT_OWNERS', data.data);
            }
            
            

            console.log(data)
        } catch (err) {
            console.log('error', err.response.data)
        }

    }
}