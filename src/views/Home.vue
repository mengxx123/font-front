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
                        字体
                        <select>
                            <option>默认字体</option>
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
                <h2>预览</h2>
                <div>
                    <img :src="image">
                </div>
            </div>
        </main>
        <ui-footer></ui-footer>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                text: '小明',
                color: '#000000',
                bgColor: '#ffffff',
                image: 'http://localhost:1027/tmp/47fe4440-dfda-11e7-a3e1-71844063d4aa.svg'
            }
        },
        mounted() {
            this.init()
        },
        methods: {
            init() {
                let url = `/font?text=${encodeURI(this.text)}`
//                let url = 'http://pinke.yunser.com/user/loginPassword'
                this.$http.get(url).then(
                    response => {
                        let data = response.data
                        console.log(data)
                        if (data.code === 200) {
                            this.image = data.data
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
