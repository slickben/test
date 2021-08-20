export default async function ({store, from}) {
    let isInitailLoad = !from

    if(isInitailLoad) {
        store.commit('updatedLoading')

        await store.dispatch('vehicle/getAllVehicles')

        store.commit('updatedLoading')
    }
}