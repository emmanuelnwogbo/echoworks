export default {
    data() {
        return {
            url: `https://works.echoafrica.co`
        }
    },
    computed: {
        brand_link: function () {
            return `${this.url}/`
        }
    }
}