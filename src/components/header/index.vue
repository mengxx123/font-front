<template>
    <header class="page-header">
        <div class="container">
            <div>这是页面头部</div>
            <router-link to="/">首页</router-link>
            <router-link to="/repolist">图标库</router-link>
            <router-link to="/editor">编辑器</router-link>
            <router-link to="/help">帮助</router-link>
            <router-link to="/feedback">反馈</router-link>
        </div>
    </header>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        mounted() {
        },
        methods: {
        }
    }
</script>
