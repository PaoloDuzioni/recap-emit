<script>
export default {
    name: 'CardItem',
    props: {
        character: Object,
    },
};
</script>

<template>
    <div class="card p-3 mb-3 text-center">
        <h2>{{ character.name }}</h2>
        <h3>{{ character.gender }}</h3>
        <p>Number of films: {{ character.films.length }}</p>
    </div>
</template>

<style lang="scss" scoped></style>
