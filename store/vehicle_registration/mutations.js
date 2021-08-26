


export default {
    ADD_PLATES(state, plate) {
        state.plates = plate
    },

    TOGGLE_VEHICLE_REGISTRATION(state) {
        state.toggle_vehicle_registration = !state.toggle_vehicle_registration
    },
    ADD_VEHICLE_INFO(state, data) {
        state.vehicleData = data
    },
    ADD_OWNER_INFO (state, data) {
        state.ownerData = data
    }
}