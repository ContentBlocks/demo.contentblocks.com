<template>
    <div :class="css">
        <div ref="main" class="main">
            <div class="header mb-4">
                <div @click="toggle" class="menu-toggle">
                    <div  v-show="navOpen == false">
                        <i class="fas fa-bars"></i>
                    </div>
                    <div v-show="navOpen == true">
                        <i class="fa fa-arrow-left"></i>
                    </div>
                </div
                ><h3>ContentBlocks Demo</h3>
            </div>

            <h1 class="mb-1">{{title}}</h1>
            <p v-if="!$route.meta.hideEditorMessage">Press [ctrl]+m or tap+hold for 5 seconds to activate editor</p>
            <router-view></router-view>
            <div class="footer">ContentBlocks Demo - <a href="https://www.contentblocks.io/">Learn more</a> or <a href="https://github.com/ContentBlocks/demo.contentblocks.com" target="_blank">Get the source on GitHub</a></div>

        </div>

        <div ref="sidenav" class="sidenav" >
            <div class="menu-wrapper">
                <ul>
                    <li v-for="(route, idx) in routes">
                        <div class="font-weight-bold mb-2">{{route.meta.title}}</div>
                        <ul v-if="route.children">
                            <li v-for="child in route.children">
                                <router-link v-if="child" :to="{ name: child.name }">{{child.meta.title}}</router-link>
                            </li>
                        </ul>
                    </li>

                </ul>


            </div>

        </div>
    </div>
</template>
<script>
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import './assets/scss/styles.scss'
    import routes from './routes' //used to build the menu.
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        data () {
            return {
                routes: routes.children,
                navOpen: true
            }
        },
        computed: {
            css() {
                return this.navOpen ? 'nav-open' : 'nav-closed';
            }
        },
        methods: {
            open() {
                this.navOpen = true;
            },
            close () {
                this.navOpen = false;
            },
            toggle () {
                this.navOpen = !this.navOpen;
            }
        }
    }
</script>
