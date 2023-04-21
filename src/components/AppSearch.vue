<script>
import { store } from '../store';
export default {
    name: 'AppSearch',
    emits: ['search'],
    data() {
        return {
            store,
        };
    },
};
</script>

<template>
    <section class="container">
        <form @submit.prevent="">
            <div class="d-flex mb-5">
                <input
                    type="text"
                    class="form-control me-3"
                    placeholder="Search characters..."
                    v-model="store.searchText"
                />
                <button
                    class="btn btn-primary"
                    @click="$emit('search')"
                >
                    Search
                </button>
            </div>
        </form>
    </section>
</template>

<style lang="scss" scoped></style>
