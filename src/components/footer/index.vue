<template>
    <footer class="page-footer">
        <div class="container">
            <div class="nav-list">
                <router-link to="/about">关于</router-link>&nbsp;|&nbsp;
                <router-link to="/copyright">版权说明</router-link>
            </div>
            <div class="copyright">© 2016-2018 <a href="https://yunser.com/" target="_blank">云设</a></div>
        </div>
    </footer>
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

<style lang="scss" scoped>
    .page-footer {
        padding: 32px 0;
        text-align: center;
        background-color: #fff;
        .nav-list {
            margin-bottom: 8px;
            a {
                color: #666;
            }
        }
        .copyright {
            a {
                color: inherit;
            }
        }
    }
</style>
