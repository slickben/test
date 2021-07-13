class Lga {
    constructor(name, id, state) {
        this.name = name
        this.id = id
        this.state = state
    }
}

const getLgaState = (states, state_id) => {
    return states.find(state => state.id === state_id)
}

export default {
    async getStates({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/state');
            commit('ADD_STATE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getLgas({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/lga');
            const states = await this.$axios.get('/settings/owner/state');

            let lgas = data.map(lga => {
                return new Lga(lga.name, lga.id, getLgaState(states.data, lga.state_id).name)
            })

            commit('ADD_LGA', lgas);
        } catch (err) {
            console.log(err)
        }

    },
    async getPrefixs({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/prefix');
            commit('ADD_PREFIX', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getMeansOfIdentities({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/means-of-identity');
            commit('ADD_MEANS_OF_IDENTITIES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getMaritalStatuses({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/marital-status');
            commit('MARITAL_STATUSES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getAgencyCategories({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/agency-category');
            commit('AGENCY_CATEGORIES', data);
        } catch (err) {
            console.log(err)
        }

    },
}