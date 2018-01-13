<template>
    <my-page title="云设字体">
        <div class="create-box">
            <ui-text-field v-model="keyword" hintText="输入关键词进行筛选"/>
            <div class="all">已经收录 {{ fonts.length }} 个艺术字体！</div>
            <ul class="row font-list">
                <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3" v-for="f in filterFonts">
                    <div class="item" @click="selectFont(f)">
                        <router-link class="link" :to="'/fonts/' + f.id">
                            <img class="img" :src="apiDomain + f.image">
                            <!--{{ font.name }}-->
                            <div class="tags" v-if="f.tags">
                                <ui-badge class="tag-item" :content="tag" v-for="tag in f.tags" />
                            </div>
                        </router-link>
                    </div>
                </li>
            </ul>
        </div>
    </my-page>
</template>

<script>
    import {apiDomain} from '@/config'

    export default {
        data () {
            return {
                keyword: '',
                fonts: [],
                apiDomain: apiDomain
            }
        },
        computed: {
            filterFonts() {
                return this.fonts.filter(font => {
                    if (font.name.indexOf(this.keyword) !== -1) {
                        return true
                    }
                })
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                this.$http.get('/fonts').then(
                    response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.fonts = data.data
                        }
                    },
                    response => {
                        console.log(response)
                    })
            },
            selectFont(font) {
                this.font = font.name
            }
        }
    }
</script>

<style scoped>
    .all {
        margin-bottom: 16px;
        color: #999;
    }
</style>
