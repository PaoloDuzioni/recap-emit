<script>
import { store } from './store';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
import AppSearch from './components/AppSearch.vue';

export default {
    name: 'App',
    components: {
        AppHeader,
        CardList,
        AppSearch,
    },
    data() {
        return {
            store,
        };
    },
    mounted() {
        this.getPeople();
    },
    methods: {
        getPeople() {
            this.store.isLoading = true;

            const params = {};
            if (this.store.searchText) {
                console.log(this.store.searchText);
                params.search = this.store.searchText;
            }

            axios
                .get(this.store.apiURL, {
                    params,
                })
                .then(resp => {
                    this.store.people = resp.data.results;
                })
                .catch(err => console.log(err))
                .finally(() => {
                    this.store.isLoading = false;
                });
        },
    },
};
</script>

<template>
    <AppHeader />
    <AppSearch @search="getPeople" />
    <CardList />
</template>

<style scoped></style>
