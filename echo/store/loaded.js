export const state = () => ({
    mobileWorksLoaded: false,
    homePageLoaded: [],
});

export const mutations = {
    MOBILE_WORKS_LOADED(state, data) {
        state.mobileWorksLoaded = data;
    },
    HOME_PAGE_LOADED(state, data) {
        const homePageLoaded = state.homePageLoaded;
        homePageLoaded.push(data)
        state.homePageLoaded = homePageLoaded;
    },
}

export const actions = {
    async setMobileWorksLoaded({ commit }) {
        commit('MOBILE_WORKS_LOADED', true);
    },
    async setHomePageLoaded({ commit }, item) {
        commit('HOME_PAGE_LOADED', item);
    }
}