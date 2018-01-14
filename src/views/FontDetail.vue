<template>
    <my-page :title="title">
        <div class="create-box">
            <div v-if="font">
                <img class="img" :src="apiDomain + font.image">
                <!--{{ font.name }}-->
                <div class="tags" v-if="font.tags">
                    <ui-badge class="tag-item" :content="tag" v-for="tag in font.tags" :key="tag" />
                </div>
            </div>
        </div>
    </my-page>
</template>

<script>
    import {apiDomain} from '@/config'

    export default {
        data () {
            return {
                title: '字体',
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
                        this.title = '字体' + this.font.name
                    },
                    response => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>
    .tag-item {
        margin-right: 8px;
    }
</style>
