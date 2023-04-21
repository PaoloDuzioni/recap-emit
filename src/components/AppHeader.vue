<script>
import { store } from '../store';

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <header class="mb-5 p-3 bg-white text-center">
        <h1>{{ store.appTitle }}</h1>
    </header>
</template>

<style lang="scss" scoped></style>
