
export default {
    ADD_ENGINE (state, engines) {
        state.engines = engines
    },
    ADD_COMMERCIAL_SEAT_CODE (state, commercial_seat_codes) {
        state.commercial_seat_codes = commercial_seat_codes
    },
    ADD_HACKNEY_CODE (state, hackney_codes) {
        state.hackney_codes = hackney_codes
    },
    ADD_FUEL (state, fuels) {
        state.fuels = fuels
    },
    ADD_YEAR (state, years) {
        state.years = years
    },
    ADD_MAKE (state, makes) {
        state.makes = makes
    },
    ADD_VEHICLE_TYPE (state, v_types) {
        state.v_types = v_types
    },
    CATEGORIES (state, categories) {
        state.categories = categories
    },
    ADD_MODEL (state, models) {
        state.models = models
    }
}