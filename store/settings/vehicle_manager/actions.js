class Model {
    constructor(name, id, make) {
        this.name = name
        this.id = id
        this.make = make
    }
}

const geModelMake = (makes, make_id) => {
    return makes.find(make => make.id === make_id)
}

export default {
    async getEngines({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/engine-capacity');
            commit('ADD_ENGINES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addEngine({ commit, }, engine) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/engine-capacity', engine);
            commit('ADD_ENGINE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editEngine({ commit, }, {id, engine}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/engine-capacity/${id}`, engine);
            commit('UPDATE_ENGINE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteEngine({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/engine-capacity/${id}`);
            commit('REMOVE_ENGINE', data);
        } catch (err) {
            console.log(err)
        }

    },

    async getFuels({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/fuel-types');
            commit('ADD_FUELS', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addFuel({ commit, }, fuel) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/fuel-types', fuel);
            commit('ADD_FUEL', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editFuel({ commit, }, {fuel, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/fuel-types/${id}`, fuel);
            commit('UPDATE_FUEL', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteFuel({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/fuel-types/${id}`);
            commit('REMOVE_FUEL', data);
        } catch (err) {
            console.log(err)
        }

    },

    async getModels({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/models');
            const makes = await this.$axios.get('/settings/vehicle/makes');

            let Models = data.map(model => {
                return new Model(model.name, model.id, geModelMake(makes.data, model.make_id).name)
            })

            commit('ADD_MODELS', Models);
        } catch (err) {
            console.log(err)
            // commit('ADD_MODEL', err);
        }

    },
    async addModel({ commit, }, model) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/models', model);
            const makes = await this.$axios.get('/settings/vehicle/makes');

            let model = new Model(data.name, data.id, geModelMake(makes.data, data.make_id).name)

            commit('ADD_MODEL', model);
        } catch (err) {
            console.log(err)
            // commit('ADD_MODEL', err);
        }

    },
    async editModel({ commit, }, {_model, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/models/${id}`, _model);
            const makes = await this.$axios.get('/settings/vehicle/makes');

            let model = new Model(data.name, data.id, geModelMake(makes.data, data.make_id).name)

            commit('UPDATE_MODEL', model);
        } catch (err) {
            console.log(err)
            // commit('ADD_MODEL', err);
        }

    },
    async deleteModel({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/models/${id}`);

            commit('REMOVE_MODEL', id);
        } catch (err) {
            console.log(err)
            // commit('ADD_MODEL', err);
        }

    },

    async getYears({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/years');
            commit('ADD_YEARS', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addYear({ commit, }, year) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/years', year);
            commit('ADD_YEAR', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editYear({ commit, }, {year, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/years/${id}`, year);
            commit('UPDATE_YEAR', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteYear({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/years/${id}`);
            commit('REMOVE_YEAR', data);
        } catch (err) {
            console.log(err)
        }

    },

    async getMakes({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/makes');
            commit('ADD_MAKES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addMake({ commit, }, make) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/makes', make);
            commit('ADD_MAKE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editMake({ commit, }, {make, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/makes/${id}`, make);
            commit('UPDATE_MAKE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteMake({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/makes/${id}`);
            commit('REMOVE_MAKE', id);
        } catch (err) {
            console.log(err)
        }

    },

    async getVehicleType({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/types');
            commit('ADD_VEHICLE_TYPES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addVehicleType({ commit, }, type) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/types', type);
            commit('ADD_VEHICLE_TYPE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editVehicleType({ commit, }, {type, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/types/${id}`, type);
            commit('UPDATE_VEHICLE_TYPE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteVehicleType({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/types/${id}`);
            commit('REMOVE_VEHICLE_TYPE', id);
        } catch (err) {
            console.log(err)
        }

    },


    async getCategories({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/categories');
            commit('ADD_CATEGORIES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addCategory({ commit, }, category) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/categories', category);
            commit('ADD_CATEGORY', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editCategory({ commit, }, {category, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/categories/${id}`, category);
            commit('UPDATE_CATEGORY', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteCategory({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/categories/${id}`);
            commit('REMOVE_CATEGORY', id);
        } catch (err) {
            console.log(err)
        }

    },

    async getHackneyCodes({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/hackney-codes');
            commit('ADD_HACKNEY_CODES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addHackneyCode({ commit, }, hack_code) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/hackney-codes', hack_code);
            commit('ADD_HACKNEY_CODE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editHackneyCode({ commit, }, {hack_code, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/hackney-codes/${id}`, hack_code);
            commit('UPDATE_HACKNEY_CODE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteHackneyCode({ commit, }, id) {
        try {
            const { data } = await this.$axios.delete(`/settings/vehicle/hackney-codes/${id}`);
            commit('REMOVE_HACKNEY_CODE', data);
        } catch (err) {
            console.log(err)
        }

    },

    async getCommercialSeatCodes({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/commercial-seat-codes');
            commit('ADD_COMMERCIAL_SEAT_CODES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async addCommercialSeatCode({ commit, }, seat_code) {
        try {
            const { data } = await this.$axios.post('/settings/vehicle/commercial-seat-codes', seat_code);
            commit('ADD_COMMERCIAL_SEAT_CODE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async editCommercialSeatCode({ commit, }, {seat_code, id}) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/commercial-seat-codes/${id}`, seat_code);
            commit('UPDATE_COMMERCIAL_SEAT_CODE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async deleteCommercialSeatCode({ commit, }, id) {
        try {
            const { data } = await this.$axios.patch(`/settings/vehicle/commercial-seat-codes/${id}`);
            commit('REMOVE_COMMERCIAL_SEAT_CODE', data);
        } catch (err) {
            console.log(err)
        }

    }
}