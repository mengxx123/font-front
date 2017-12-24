<template>
    <div class="page-home">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="container container-main">
                <div class="create-box">
                    <div v-if="font">
                        <img class="img" :src="apiDomain + font.image">
                        <!--{{ font.name }}-->
                        <div class="tags" v-if="font.tags">
                            <span class="tag-item badge" v-for="tag in font.tags">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    import {apiDomain} from '@/config'

    export default {
        data () {
            return {
                font: null,
                apiDomain: apiDomain
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let fontId = this.$route.params.id
                this.$http.get('/fonts/' + fontId).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        this.font = data
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
</style>
