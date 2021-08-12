<template>
    <div class="h-24 bg-white relative">
        <div class="max-w-lg-screen mx-auto xl:px-32 px-10 2xl:px-0 h-full flex items-center justify-between w-full">
            <div class=" text-tertiary-300">
                <h1 class="text-2xl text-primary-900 font-semibold"> {{ title }} </h1>
                <nav class="rounded font-sans w-full">
                    <ol class="list-reset flex">
                        <li :class="[index !== breadCrumbs.length-1 ? 'text-primary-400' : 'text-tertiary-600']" v-for="(breadCrumb, index) in breadCrumbs"><nuxt-link :to="breadCrumb.fullPath" class="">{{ breadCrumb.title }} <span v-if="index !== breadCrumbs.length-1" class="mx-2 text-tertiary-600">/</span></nuxt-link></li>
                        
                    </ol>
                </nav>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
        <div v-show="back" class="xl:px-24 absolute inset-y-0 flex items-center ">
            <a href="" @click.prevent="$router.back()">
                  <img src="~/assets/images/back.svg" alt="" srcset="">
            </a>
        </div>
    </div>

</template>

<script>
import titleCase from 'ap-style-title-case'
export default {
    props: ['title', 'back'],
    computed: {
        breadCrumbs () {
            const fullPath = this.$route.fullPath

            const params = fullPath.startsWith('/')
                ? fullPath.substring(1).split('/')
                : fullPath.split('/')

            const crumbs = []

            let path = ''

            params.forEach((param, index) => {
                path = `${path}/${param}`
                const match = this.$router.match(path)
                if (match.name !== null) {
                crumbs.push({
                    title: titleCase(param.replace(/-/g, ' ')),
                    ...match,
                })
                }
            })

            crumbs.shift()

            return crumbs

        }
    }
}
</script>