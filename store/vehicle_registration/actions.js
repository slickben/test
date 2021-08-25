
export default {
    async getAllPlateNumbers({ commit, }) {
        try {
            const { data } = await this.$axios.get('/plate-numbers');

            commit('ADD_PLATES', data.data);
        } catch (err) {
            console.log(err)
        }

    },

    toggleVehicleRegistration({ commit, }) {
        
    },
}