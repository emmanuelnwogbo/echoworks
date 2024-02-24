export default {
    data() {
        return {
            url: `https://echoworks.herokuapp.com`
        }
    },
    computed: {
        brand_link: function () {
            return `${this.url}/`
        }
    }
}