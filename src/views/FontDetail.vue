<template>
    <div class="page-home">
        <ui-header></ui-header>
        <main class="page-body">
            <div class="container">
                这是首页内容
                <router-link to="/about">关于</router-link>
                <div>
                    <textarea v-model="text" placeholder="输入文字后，选择字体，点击生成！"></textarea>
                    <div>
                        字体:
                        <select v-model="font">
                            <option v-for="font in fonts" :value="font.name">{{ font.name }}</option>
                        </select>
                        大小
                        <select>
                            <option>中型字</option>
                        </select>
                        文字颜色
                        <input v-model="color">
                        背景颜色
                        <input v-model="bgColor">
                    </div>
                </div>
                <button @click="makeFont">点击生成</button>
                <h2>预览</h2>
                <div>
                    <img :src="image">
                </div>
                <ul class="row font-list">
                    <li class="col-xs-12 col-sm-4 col-md-4 col-lg-3" v-for="f in fonts">
                        <div class="item" :class="{active: f.name === font}" @click="selectFont(f)">
                            <img class="img" :src="apiDomain + f.image">
                            <!--{{ font.name }}-->
                        </div>
                    </li>
                </ul>
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
                text: '小明',
                font: '华康娃娃',
                color: '#000000',
                bgColor: '#ffffff',
                image: 'http://localhost:1027/tmp/47fe4440-dfda-11e7-a3e1-71844063d4aa.svg',
                fonts: [],
                apiDomain: apiDomain
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                console.log(encodeURI('#f000'))
                this.makeFont()

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
            },
            makeFont() {
                console.log('请求')
                console.log(encodeURIComponent(this.color))
                let url = `/font?text=${encodeURIComponent(this.text)}&fill=${encodeURIComponent(this.color)}&font=${encodeURIComponent(this.font)}`
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 0) {
                            this.image = apiDomain + data.data
                        } else {
                            alert('系统出错')
                        }
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
