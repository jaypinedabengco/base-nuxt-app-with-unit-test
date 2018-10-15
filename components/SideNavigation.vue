<template lang="pug">
    aside.column.section
        p.menu-label.is-hidden-touch General
        ul.menu-list
            li(v-for="(item, key) of items" :key="key")
                nuxt-link(:to="item.to" exact-active-class="is-active")
                    b-icon(:icon="item.icon") 
                    | {{item.title}}
</template>

<script>
export default {
    data () {
        return {
            items: [
                { title: 'Home', icon: 'home', to: { name: 'index' } },
                { title: 'Inspire', icon: 'lightbulb', to: { name: 'inspire' } },
                { title: 'News', icon: 'newspaper', to: { name: 'sources' } }
            ]
        }
    }
}
</script>