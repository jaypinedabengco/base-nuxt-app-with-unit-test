<template lang="pug">
    div
        div.container
            b-table(
                :data="sources" 
                paginated 
                :columns="columns"
                per-page="10" 
                :opened-detailed="defaultOpenedDetails" 
                detailed 
                detail-key="id" 
                @details-open="(row, index) => $toast.open(`Expanded ${row.name}`)")
                template(slot="detail" slot-scope="props")
                    div.content
                        p {{props.row.name}}
                        p {{props.row.description}}
</template>

<script>
import { mapState } from 'vuex'

export default {
    fetch: async ({ store }) => {
        const { sources } = store.state.news
        if (!sources || sources.length === 0) {
            await store.dispatch({
                type: 'news/initializeSources'
            })
        }
    },
    data () {
        return {
            defaultOpenedDetails: [1],
            columns: [
                {
                    field: 'name',
                    label: 'Name',
                },
                {
                    field: 'category',
                    label: 'Category'
                },
                {
                    field: 'country',
                    label: 'Country',
                },
                {
                    field: 'language',
                    label: 'Language',
                }
            ]
        }
    },
    computed: {
        ...mapState('news/', ['sources'])
    }
}
</script>

