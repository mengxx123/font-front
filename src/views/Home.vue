<template>
    <my-page title="云设字体">
        <div class="create-box">
            <div class="create-box-right">
                <ul class="font-list">
                    <li class="" v-for="f in fonts">
                        <div class="item" :class="{active: f.name === font}" @click="selectFont(f)">
                            <img class="img" :src="apiDomain + f.image">
                            <!--{{ font.name }}-->
                        </div>
                    </li>
                </ul>
            </div>
            <div class="create-box-left">
                <my-form-item label="内容">
                    <ui-text-field v-model="text" hintText="输入文字后，选择字体，点击生成！" multiLine :rows="3" :rowsMax="6"/>
                </my-form-item>
                <my-form-item label="字体">
                    <ui-select-field v-model="font" maxHeight="200">
                        <ui-menu-item :value="font.name" :title="font.name" v-for="font in fonts" />
                    </ui-select-field>
                </my-form-item>
                <my-form-item label="大小">
                    <ui-text-field v-model="size" />
                </my-form-item>
                <my-form-item label="文字颜色">
                    <ui-text-field v-model="color"/>
                </my-form-item>
                <my-form-item label="背景颜色">
                    <ui-text-field v-model="bgColor"/>
                </my-form-item>
                <my-form-item>
                    <ui-raised-button label="点击生成" primary @click="makeFont"/>
                </my-form-item>

                <h2 class="preview">预览</h2>
                <div>鼠标右键另存为（移动端长按图片保存）</div>
                <div>
                    <img class="preview-img" :src="image">
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
                text: '云设',
                font: '华康娃娃',
                size: 36,
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
                this.makeFont()
            },
            makeFont() {
                console.log('请求')
                console.log(encodeURIComponent(this.color))
                let url = `/font?text=${encodeURIComponent(this.text)}&fill=${encodeURIComponent(this.color)}&font=${encodeURIComponent(this.font)}&size=${this.size}`
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

<style lang="scss" scoped>
    @import "../scss/var";

    .create-box {
        @include clearfix;
        .create-box-left {
            float: left;
            width: 400px;
        }
        .create-box-right {
            float: left;
            width: 300px;
            height: 500px;
            margin-right: 16px;
            overflow: hidden;
            &:hover {
                overflow: auto;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .create-box-right {
            display: none;
        }
    }
</style>
