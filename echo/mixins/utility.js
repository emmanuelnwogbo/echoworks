import { mapActions, mapState } from 'vuex';

export default {
    data() {
        return {
            isLoading: true,
            visible: false
        }
    },
    methods: {
        ...mapActions('loaded', ['setHomePageLoaded']),
    },
    computed: {
        ...mapState({
            homePageLoaded: state => state.loaded.homePageLoaded,
        }),
    }
}