<template>
    <ui-page :title="title || page.title" ref="page">
        <div slot="drawer">
            <div class="header">
                <img class="logo" src="/static/img/font.svg">
            </div>
            <ui-list @itemClick="toggle()">
                <ui-list-item title="字体生成" to="/">
                    <ui-icon slot="left" value="home"/>
                </ui-list-item>
                <ui-list-item title="所有字体" to="/fonts">
                    <ui-icon slot="left" value="grade"/>
                </ui-list-item>
                <!--<ui-list-item title="Logo" to="/logo">-->
                    <!--<ui-icon slot="left" value="grade"/>-->
                <!--</ui-list-item>-->
                <!--<ui-list-item title="帮助" to="/help">-->
                    <!--<ui-icon slot="left" value="grade"/>-->
                <!--</ui-list-item>-->
                <ui-list-item title="关于" href="https://project.yunser.com/products/1a85bf506be011e98f990d4a429815cc" target="_blank">
                    <ui-icon slot="left" value="info"/>
                </ui-list-item>
            </ui-list>
        </div>
        <slot></slot>
        <ui-footer slot="footer"></ui-footer>
    </ui-page>
</template>

<script>
    export default {
        data() {
            return {
                open: false,
                docked: true
            }
        },
        props: {
            title: {
                type: String,
                default: ''
            },
            name: {
                type: String,
                default: 'default'
            },
            page: {
                type: Object,
                default: function () {
                    return {
                        title: '云设'
                    }
                }
            },
            backable: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            toggle() {
                console.log(this.$refs.page)
            }
        }
    }
</script>

<style lang="scss" scoped>
.header {
    padding: 40px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.logo {
    display: block;
    width: 80px;
    margin: 0 auto;
}
.ui-position-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>