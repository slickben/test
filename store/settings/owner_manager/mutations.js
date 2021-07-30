
export default {
    // state
    ADD_STATES (state, states) {
        state.states = states
    },
    
    ADD_STATE (state, states) {
        state.states.push(states) 
    },

    UPDATE_STATE (state, _state) {

        let filterState =  state.states.filter( state => state.id != _state.id)

        filterState.push(_state)

        state.states = filterState
    },

    REMOVE_STATE (state, id) {

        let filterState =  state.states.filter( state => state.id != id)

        state.states = filterState
    },
    // lga

    ADD_LGAS (state, lgas) {
        state.lgas = lgas
    },
    ADD_LGA (state, lga) {
        state.lgas.push(lga) 
    },

    UPDATE_LGA (state, _lga) {

        let filterLgas =  state.lgas.filter( lga => lga.id != _lga.id)

        filterLgas.push(_lga)

        state.lgas = filterLgas
    },

    REMOVE_LGA (state, id) {

        let filterLgas =  state.lgas.filter( lga => lga.id != id)

        state.lgas = filterLgas
    },
    
    // prefix
    ADD_PREFIXS (state, prefixs) {
        state.prefixs = prefixs
    },
    ADD_PREFIX (state, prefix) {
        state.prefixs.push(prefix) 
    },

    UPDATE_PREFIX (state, _prefix) {

        let filterPrefixs =  state.prefixs.filter( prefix => prefix.id != _prefix.id)
        console.log(filterPrefixs)
        filterPrefixs.push(_prefix)

        state.prefixs = filterPrefixs
    },

    REMOVE_PREFIX(state, id) {

        let filterPrefixs =  state.prefixs.filter( prefix => prefix.id != id)
        console.log(id)
        state.prefixs = filterPrefixs
    },
    // means of identity
    ADD_MEANS_OF_IDENTITIES (state, means_of_identities) {
        state.means_of_identities = means_of_identities
    },
    ADD_MEANS_OF_IDENTITY (state, identity) {
        state.means_of_identities.push(identity) 
    },
    UPDATE_MEANS_OF_IDENTITY (state, _identity) {

        let filterIdentities =  state.means_of_identities.filter( identity => identity.id != _identity.id)

        filterIdentities.push(_identity)

        state.means_of_identities = filterIdentities
    },
    REMOVE_MEANS_OF_IDENTITY(state, id) {

        let filterIdentities =  state.means_of_identities.filter( identity => identity.id != id)
        console.log(id)
        state.means_of_identities = filterIdentities
    },
    // marital status
    MARITAL_STATUSES (state, marital_statuses) {
        state.marital_statuses = marital_statuses
    },
    ADD_MARITAL_STATUS (state, marital_status) {
        state.marital_statuses.push(marital_status) 
    },
    UPDATE_MARITAL_STATUS (state, _marital_status) {

        let filterMaritalStatus =  state.marital_statuses.filter( marital_status => marital_status.id != _marital_status.id)

        filterMaritalStatus.push(_marital_status)

        state.marital_statuses = filterMaritalStatus
    },
    REMOVE_MARITAL_STATUS(state, id) {

        let filterMaritalStatus =  state.marital_statuses.filter( marital_status => marital_status.id != id)
        console.log(id)
        state.marital_statuses = filterMaritalStatus
    },
    // a
    ADD_AGENCY_CATEGORIES (state, agency_categories) {
        state.agency_categories = agency_categories
    },
    ADD_AGENCY_CATEGORY (state, agency) {
        state.agency_categories.push(agency) 
    },
    UPDATE_AGENCY_CATEGORY (state, _agency) {

        let filterAgencies =  state.agency_categories.filter( agency => agency.id != _agency.id)

        filterAgencies.push(_agency)

        state.agency_categories = filterAgencies
    },
    REMOVE_AGENCY_CATEGORY(state, id) {

        let filterAgencies =  state.agency_categories.filter( _agency => _agency.id != id)
        console.log(id)
        state.agency_categories = filterAgencies
    },
}