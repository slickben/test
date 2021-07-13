export default async function ({store, from}) {
    let isInitailLoad = !from

    if(isInitailLoad) {
        await store.dispatch('owner/getAllOwners')
    }
}