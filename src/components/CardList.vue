<script>
import { store } from '../store';
import CardItem from './CardItem.vue';

export default {
    name: 'CardList',
    components: {
        CardItem,
    },
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <section class="container">
        <div v-if="store.isLoading">Loading...</div>
        <div
            v-else
            class="row"
        >
            <div
                v-for="(card, index) in store.people"
                :key="index"
                class="col-md-4"
            >
                <CardItem :character="card" />
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped></style>
