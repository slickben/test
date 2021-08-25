class Lga {
    constructor(name, id, state) {
        this.name = name
        this.id = id
        this.state = state
    }
}

const getLgaState = (states, state_id) => {
    return states.find(state => state.id == state_id)
}

export default {
    // state
    async getStates({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/states');
            commit('ADD_STATES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addState({ commit, }, _state) {
        try {
            const { data } = await this.$axios.post('/settings/owner/states', _state);
            commit('ADD_STATE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editState({ commit, }, _state) {
        try {
            const { data } = await this.$axios.patch(`/settings/owner/states/${_state.id}`, {name: _state.name, code: _state.code, default: _state.default} )
            commit('UPDATE_STATE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteState({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/owner/states/${id}`)
            commit('REMOVE_STATE', id);
        } catch (err) {
            console.log(err)
        }

    },
    // lga
    async getLgas({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/lga');
            const states = await this.$axios.get('/settings/owner/states');

            let lgas = data.map(lga => {
                return new Lga(lga.name, lga.id, getLgaState(states.data, lga.state_id).name)
            })

            commit('ADD_LGAS', lgas);
        } catch (err) {
            console.log(err)
        }

    },
    async addLga({ commit, }, lga) {
        try {
            const { data } = await this.$axios.post('/settings/owner/lga', lga);
            const states = await this.$axios.get('/settings/owner/states');

            let lgas =  new Lga(data.name, data.id, getLgaState(states.data, data.state_id).name)
           
            commit('ADD_LGA', lgas);
        } catch (err) {
            console.log(err)
        }

    },
    async editLga({ commit, }, {lga, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/owner/lga/${id}`, lga);
            const states = await this.$axios.get('/settings/owner/states'); 
            
            let lgas =  new Lga(data.name, data.id, getLgaState(states.data, data.state_id).name)

            commit('UPDATE_LGA', lgas);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteLga({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/owner/lga/${id}`);

            commit('REMOVE_LGA', id);
        } catch (err) {
            console.log(err)
        }

    },
    // prefix
    async getPrefixs({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/prefixes');
            commit('ADD_PREFIXS', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addPrefix({ commit, }, prefix) {
        try {
            const { data } = await this.$axios.post('/settings/owner/prefixes', prefix);
            commit('ADD_PREFIX', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editPrefix({ commit, }, {prefix, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/owner/prefixes/${id}`, prefix);
            commit('UPDATE_PREFIX', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deletePrefix({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/owner/prefixes/${id}`);
            commit('REMOVE_PREFIX', id);
        } catch (err) {
            console.log(err)
        }

    },
    // means of identity
    async getMeansOfIdentities({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/means-of-identities');
            commit('ADD_MEANS_OF_IDENTITIES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addMeansOfIdentity({ commit, }, identity)  {
        try {
            const { data } = await this.$axios.post('/settings/owner/means-of-identities', identity);
            commit('ADD_MEANS_OF_IDENTITY', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editMeansOfIdentity({ commit, }, {identity, id})  {
        try {
            const { data } = await this.$axios.patch(`/settings/owner/means-of-identities${id}`, identity);
            commit('UPDATE_MEANS_OF_IDENTITY', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteMeansOfIdentity({ commit, }, id)  {
        try {
            const { data } = await this.$axios.delete(`/settings/owner/means-of-identity${id}`);
            commit('REMOVE_MEANS_OF_IDENTITY', id);
        } catch (err) {
            console.log(err)
        }

    },
    // marital status
    async getMaritalStatuses({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/marital-status');
            commit('MARITAL_STATUSES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addMaritalStatus({ commit, }, marital_status)  {
        try {
            const { data } = await this.$axios.post('/settings/owner/marital-status', marital_status);
            commit('ADD_MARITAL_STATUS', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editMaritalStatus({ commit, }, {marital_status, id})  {
        try {
            const { data } = await this.$axios.patch(`/settings/owner/marital-status/${id}`, marital_status);
            commit('UPDATE_MARITAL_STATUS', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteMaritalStatus({ commit, }, id)  {
        try {
            const { data } = await this.$axios.delete(`/settings/owner/marital-status/${id}`);
            commit('REMOVE_MARITAL_STATUS', id);
        } catch (err) {
            console.log(err)
        }

    },
    // category
    async getAgencyCategories({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/owner/agency-categories');
            commit('ADD_AGENCY_CATEGORIES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addAgencyCategory({ commit, }, agency)  {
        try {
            const { data } = await this.$axios.post('/settings/owner/agency-categories', agency);
            commit('ADD_AGENCY_CATEGORY', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editAgencyCategory({ commit, }, {agency, id})  {
        try {
            const { data } = await this.$axios.patch(`/settings/owner/agency-categories/${id}`, agency);
            commit('UPDATE_AGENCY_CATEGORY', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteAgencyCategory({ commit, }, id)  {
        try {
            const { data } = await this.$axios.delete(`/settings/owner/agency-categories/${id}`);
            commit('REMOVE_AGENCY_CATEGORY', id);
        } catch (err) {
            console.log(err)
        }

    },
}