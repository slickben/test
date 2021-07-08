<template>
    <div class="w-full h-full rounded border-dashed border-2 border-gray-300">
        {{ $route.params.id }}
    </div>
</template>

<script>

export default {
    name: 'Show',
    meta: { breadCrumb: 'benson' },
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        
    },
}
</script>