<template>
    <div class="h-24 bg-white">
        <div class="max-w-lg-screen mx-auto px-32 2xl:px-0 h-full flex items-center justify-between w-full">
            <div class=" text-tertiary-300">
                <h1 class="text-2xl text-primary-900 font-semibold"> {{ title }} </h1>
                <p>Overview</p>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    computed: {
    /**
     * @see https://medium.com/@pratheekhegde/displaying-application-breadcrumbs-in-vue-js-85456dc8a370
     */
        breadCrumbs () {
        let pathArray = this.$route.path.split('/')
        pathArray.shift()
        const breadCrumbs = []
        // needed to handle the intermediary entries for nested vue routes
        let breadcrumb = ''
        let lastIndexFound = 0
        for (let i = 0; i < pathArray.length; ++i) {
            breadcrumb = `${breadcrumb}${'/'}${pathArray[i]}`
            if (this.$route.matched[i] &&
            Object.hasOwnProperty.call(this.$route.matched[i], 'meta') &&
            Object.hasOwnProperty.call(this.$route.matched[i].meta, 'name')) {
            breadCrumbs.push({
                href: i !== 0 && pathArray[i - (i - lastIndexFound)]
                ? '/' + pathArray[i - (i - lastIndexFound)] + breadcrumb
                : breadcrumb,
                disabled: i + 1 === pathArray.length,
                text: this.$route.matched[i].meta.name || pathArray[i]
            })
            lastIndexFound = i
            breadcrumb = ''
            }
        }
        return breadCrumbs
        }
    }
}
</script>