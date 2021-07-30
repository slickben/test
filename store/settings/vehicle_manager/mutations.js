
export default {
    // engine
    ADD_ENGINES(state, engines) {
        state.engines = engines
    },
    ADD_ENGINE (state, engine) {
        state.engines.push(engine) 
    },
    UPDATE_ENGINE (state, _engine) {

        let filterEngine =  state.engines.filter( engine => engine.id != _engine.id)

        filterEngine.push(_engine)

        state.engines = filterEngine
    },

    REMOVE_ENGINE (state, id) {

        let filterEngine =  state.engines.filter( engine => engine.id != id)

        state.engines = filterEngine
    },
    // seat code
    ADD_COMMERCIAL_SEAT_CODES(state, commercial_seat_codes) {
        state.commercial_seat_codes = commercial_seat_codes
    },
    ADD_COMMERCIAL_SEAT_CODE (state, commercial_seat_code) {
        state.commercial_seat_codes.push(commercial_seat_code) 
    },
    UPDATE_COMMERCIAL_SEAT_CODE (state, _commercial_seat_code) {

        let filterSeatCodes =  state.commercial_seat_codes.filter( commercial_seat_code => commercial_seat_code.id != _commercial_seat_code.id)

        filterSeatCodes.push(_commercial_seat_code)

        state.commercial_seat_codes = filterSeatCodes
    },
    REMOVE_COMMERCIAL_SEAT_CODE (state, id) {

        let filterSeatCodes =  state.commercial_seat_codes.filter( commercial_seat_code => commercial_seat_code.id != id)

        state.commercial_seat_codes = filterSeatCodes
    },
    // hackney code
    ADD_HACKNEY_CODES(state, hackney_codes) {
        state.hackney_codes = hackney_codes
    },
    ADD_HACKNEY_CODE (state, hackney_code) {
        state.hackney_codes.push(hackney_code) 
    },
    UPDATE_HACKNEY_CODE (state, _hackney_code) {

        let filterHackneyCodes =  state.hackney_codes.filter( hackney_code => hackney_code.id != _hackney_code.id)

        filterHackneyCodes.push(_hackney_code)

        state.hackney_codes = filterHackneyCodes
    },
    REMOVE_HACKNEY_CODE (state, id) {

        let filterHackneyCodes =  state.hackney_codes.filter( hackney_code => hackney_code.id != id)

        state.hackney_codes = filterHackneyCodes
    },
    // fuel
    ADD_FUELS(state, fuels) {
        state.fuels = fuels
    },
    ADD_FUEL (state, fuel) {
        state.fuels.push(fuel) 
    },
    UPDATE_FUEL (state, _fuel) {

        let filterFuels =  state.fuels.filter( fuel => fuel.id != _fuel.id)

        filterFuels.push(_fuel)

        state.fuels = filterFuels
    },
    REMOVE_FUEL (state, id) {

        let filterFuels =  state.fuels.filter( fuel => fuel.id != id)

        state.fuels = filterFuels
    },

    // year
    ADD_categories(state, years) {
        state.years = years
    },
    ADD_YEAR (state, year) {
        state.years.push(year) 
    },
    UPDATE_YEAR (state, _year) {

        let filterYears =  state.years.filter( year => year.id != _year.id)

        filterYears.push(_year)

        state.years = filterYears
    },
    REMOVE_YEAR (state, id) {

        let filterYears =  state.years.filter( year => year.id != id)

        state.years = filterYears
    },

    // make
    ADD_MAKES(state, makes) {
        state.makes = makes
    },
    ADD_MAKE (state, make) {
        state.makes.push(make) 
    },
    UPDATE_MAKE (state, _make) {

        let filterMakes =  state.makes.filter( make => make.id != _make.id)

        filterMakes.push(_make)

        state.makes = filterMakes
    },
    REMOVE_MAKE (state, id) {

        let filterMakes =  state.makes.filter( make => make.id != id)

        state.makes = filterMakes
    },

    // type
    ADD_VEHICLE_TYPES(state, v_type) {
        state.v_types = v_type
    },
    ADD_VEHICLE_TYPE (state, v_type) {
        state.v_types.push(v_type) 
    },
    UPDATE_VEHICLE_TYPE (state, _v_type) {

        let filterType =  state.v_types.filter( v_type => v_type.id != _v_type.id)

        filterType.push(_v_type)

        state.v_types = filterType
    },
    REMOVE_VEHICLE_TYPE (state, id) {

        let filterType =  state.v_types.filter( year => year.id != id)

        state.v_types = filterType
    },

    // category
    ADD_CATEGORIES(state, categories) {
        state.categories = categories
    },
    ADD_CATEGORY (state, category) {
        state.categories.push(category) 
    },
    UPDATE_CATEGORY (state, _category) {

        let filteCategories =  state.categories.filter( category => category.id != _category.id)

        filteCategories.push(_category)

        state.categories = filteCategories
    },
    REMOVE_CATEGORY (state, id) {

        let filteCategories =  state.categories.filter( category => category.id != id)

        state.categories = filteCategories
    },

    // model
    ADD_MODELS(state, model) {
        state.models = model
    },
    ADD_MODEL(state, model) {
        state.models.push(model) 
    },
    UPDATE_MODEL (state, _model) {

        let filteModels =  state.models.filter( model => model.id != _model.id)

        filteModels.push(_model)

        state.models = filteModels
    },
    REMOVE_MODEL (state, id) {

        let filteModels =  state.models.filter( model => model.id != id)

        state.models = filteModels
    },
}