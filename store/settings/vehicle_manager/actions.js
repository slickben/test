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
            commit('ADD_ENGINE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getFuels({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/fuel-type');
            commit('ADD_FUEL', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getModels({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/model');
            const makes = await this.$axios.get('/settings/vehicle/make');

            let Models = data.map(model => {
                return new Model(model.name, model.id, geModelMake(makes.data, model.make_id).name)
            })

            commit('ADD_MODEL', Models);
        } catch (err) {
            console.log(err)
            // commit('ADD_MODEL', err);
        }

    },
    async getYears({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/year');
            commit('ADD_YEAR', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getMakes({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/make');
            commit('ADD_MAKE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getVehicleType({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/type');
            commit('ADD_VEHICLE_TYPE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getCategories({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/category');
            commit('CATEGORIES', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getHackneyCodes({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/hackney-code');
            commit('ADD_HACKNEY_CODE', data);
        } catch (err) {
            console.log(err)
        }

    },
    async getCommercialSeatCodes({ commit, }) {
        try {
            const { data } = await this.$axios.get('/settings/vehicle/commercial-seat-code');
            commit('ADD_COMMERCIAL_SEAT_CODE', data);
        } catch (err) {
            console.log(err)
        }

    }
}