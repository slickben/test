<template>
    <h1>k</h1>
</template>

<script>
export default {
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        redirect('user-manager/users')
    },
}
</script>