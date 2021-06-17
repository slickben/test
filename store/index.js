export const state = () => ({
    moved: true,
    toggleNav: true
})
  
export const mutations = {
    toggleNav(state) {
        state.toggleNav = !state.toggleNav
    }
}

export const actions = {
    dropdownHandler({commit}, event) {
        let single = event.currentTarget.getElementsByTagName("ul")[0];
        single.classList.toggle("hidden");
    }
}
