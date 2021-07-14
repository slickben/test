class Owner {
    constructor(firstName, lastName, otherName, phoneNumber, type, city, landmark, lga, state, street) {
        this.firstName = firstName
        this.lastName = lastName
        this.otherName = otherName
        this.phoneNumber = phoneNumber
        this.type = type
        this.city = city
        this.landmark = landmark
        this.lga = lga
        this.state = state
        this.street = street
    }
}

export default  {
    async getAllOwners({ commit, }) {
        console.log(Owner)
        try {
            const {data} = await this.$axios.get('/owners');
            commit('ADD_OWNERS', data);
            console.log('add here')
        } catch (err) {
            console.log(err)
        }

    }
}