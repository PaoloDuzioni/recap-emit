import { reactive } from 'vue';

export const store = reactive({
    appTitle: 'My Star Wars App',
    apiURL: 'https://swapi.dev/api/people/',
    people: [],
    searchText: '',
    isLoading: false,
});
