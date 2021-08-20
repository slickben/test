export const state = () => ({
    moved: true,
    toggleNav: true,
    demo: [
        {
            unique_Id: '0123',
            name: 'MR. ERINJOBE A. LABAIKA',
            category: 'Individual',
            date_created: '16 Jun 2021',
            verification_status: 'approved'
        },
        {
            unique_Id: '0108',
            name: 'EKE ALUMINIUM & SONS LTD.',
            category: 'Business',
            date_created: '16 Jun 2021',
            verification_status: 'pending'
        },
        {
            unique_Id: '099',
            name: 'ALHAJI DENDE SAMBO',
            category: 'Individual',
            date_created: '15 Jun 2021',
            verification_status: 'denied'
        },
        {
            unique_Id: '067',
            name: 'LAGOS STATE MINISTRY OF FINANCE',
            category: 'Government Agency',
            date_created: '15 Jun 2021',
            verification_status: 'approved'
        },
        {
            unique_Id: '066',
            name: 'RESONANCE MICROFINANCE BANK',
            category: 'business',
            date_created: '14 Jun 2021',
            verification_status: 'pending'
        }
    ],
    isloading: false
})
  
export const mutations = {
    toggleNav(state) {
        state.toggleNav = !state.toggleNav
    },
    updatedLoading(state) {
        state.isloading = !state.isloading
    },
}

export const actions = {
    dropdownHandler({commit}, event) {
        let single = event.currentTarget.getElementsByClassName("dropdown")[0];
        console.log(event.currentTarget.getElementsByTagName("ul")[0])
        single.classList.toggle("hidden");
    },

    menuDropdownHandler({commit}, event) {
        let single = event.currentTarget.getElementsByClassName("dropdown")[0];
        // console.log(single)
        single.classList.toggle("hidden");
    }
}
