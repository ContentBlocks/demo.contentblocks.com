<template>
    <div class="site-wrap">


        <content-block section="sitewide-message" :attributes="message">
            <template v-slot:content="slotProps" >
                <div v-if="slotProps.content.message && slotProps.content.show" class="text-center p-3 " v-html="slotProps.content.message" :style="{backgroundColor: slotProps.content.bgColor, color: slotProps.content.color}">
                    Welcome to the ContentBlocks demo. To edit this page, press [ctrl] + e or hold down your mouse for 5 seconds.
                </div>
            </template>
        </content-block>

        <header class="site-navbar bg-light site-navbar-target pt-2" role="banner" >

            <div class="container">
                <div class="row align-items-center">

                    <div class="col-6 col-xl-2">
                        <h1 class="mb-0 site-logo "><a href="index.html" class="h2 mb-0 text-black">Dogger<span class="text-black">.</span> </a></h1>
                    </div>

                    <div class="col-12 col-md-10 d-none d-xl-block">
                        <nav class="site-navigation position-relative text-right" role="navigation">
                            <content-block section="menu"  :attributes="menu">
                                <template v-slot:content="slotProps" >
                                    <ul v-if="slotProps.content.menuItems" class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li v-for="(menuItem, menuItemIdx) in slotProps.content.menuItems" :key="menuItemIdx"><a :href="menuItem.link.url" :target="menuItem.link.target" class="nav-link">{{menuItem.link.label}}</a></li>
                                    </ul>
                                </template>
                            </content-block>
                        </nav>
                    </div>


                    <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a></div>

                </div>
            </div>

        </header>


        <section class="site-blocks-cover overflow-hidden bg-light" >
            <content-block section="homepage-hero"  :attributes="hero">
                <template v-slot:content="slotProps" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 align-self-center text-center text-md-left">
                                <div class="intro-text">
                                    <h1>{{slotProps.content.title}}</h1>
                                    <p class="mb-4">{{slotProps.content.subtitle}}</p>
                                </div>
                            </div>
                            <div v-if="slotProps.content.image" class="col-md-5 align-self-end text-center text-md-right">
                                <img :src="slotProps.content.image.url" alt="Image" class="img-fluid cover-img">
                            </div>
                        </div>
                    </div>
                </template>
            </content-block>
        </section>


        <section class="site-section " id="services-section">
            <div class="container">
                <content-block section="services"  :attributes="services">
                    <template v-slot:content="slotProps" >
                        <div class="row justify-content-center" data-aos="fade-up">
                            <div class="col-lg-6 text-center heading-section mb-5">
                                <div class="paws">
                                    <span class="icon-paw"></span>
                                </div>
                                <h2 class="text-black mb-2">{{slotProps.content.title}}</h2>
                                <p>{{slotProps.content.description}}</p>
                            </div>
                        </div>


                        <div class="row" v-if="slotProps.content.serviceItems" >
                            <div v-for="(service, serviceIdx) in slotProps.content.serviceItems" :key="serviceIdx" class="col-md-6 mb-4 col-lg-4" data-aos="fade-up" data-aos-delay="">
                                <div class="block_service">
                                    <img :src="service.image.url" alt="Image mb-5">
                                    <h3>{{service.title}}</h3>
                                    <p>{{service.description}} </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </content-block>
            </div>
        </section>



        <footer class="site-footer">
            <content-block section="footer"  :attributes="footer">
                <template v-slot:content="slotProps" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-5">
                                        <h2 class="footer-heading mb-4">{{slotProps.content.footer_title}}</h2>
                                        <p>{{slotProps.content.footer_description}}</p>
                                    </div>
                                    <div class="col-md-3 ml-auto">
                                        <h2 class="footer-heading mb-4">{{slotProps.content.quickLinksTitle}}</h2>
                                        <ul class="list-unstyled">
                                            <li v-for="(quickLink, quickLinkIdx) in slotProps.content.quickLinks" :key="quickLinkIdx"><a :href="quickLink.link.url" :target="quickLink.link.target" class="nav-link">{{quickLink.link.label}}</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <h2 class="footer-heading mb-4">Follow Us</h2>

                                        <div class="d-flex">
                                            <div v-for="(socialItem, idxSocial) in slotProps.content.socialicons" class="social-botton cursor-hand">
                                                <a :href="socialItem.link.url" class="pl-0 pr-3">
                                                    <svg v-if="socialItem.icon" class="svg-icon social-icon" :fill="socialItem.icon.color" viewBox="0 0 512 512">
                                                        <path :d="socialItem.icon.svg"></path>
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </template>
            </content-block>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //We always try to provide your dog the best services
                message: [
                    {
                        _key: 'show',
                        type: 'switch',
                        label: 'Show the message'
                    },
                    {
                        _key: 'message',
                        type: 'wysiwyg',
                        label: 'Sitewide Message',
                        hint: 'Applies to both mobile and desktop.'
                    },
                    {
                        _key: 'bgColor',
                        type: 'color',
                        label: 'Background Color'
                    },
                    {
                        _key: 'color',
                        type: 'color',
                        label: 'Text Color'
                    }
                ],
                menu: [
                    {
                        _key: "menuItems",
                        label: "Menu Items",
                        type: "list",
                        attributes: [
                            {
                                _key: "link",
                                label: "Label",
                                type: "link"
                            }
                        ]
                    }
                ],
                hero: [
                    {
                        _key: "title",
                        label: "Title",
                        type: "text"
                    },
                    {
                        _key: "subtitle",
                        label: "Sub Title",
                        type: "text"
                    },
                    {
                        _key: "image",
                        label: "Image",
                        type: "image"
                    },
                ],
                services: [
                    {
                        _key: "title",
                        label: "Title",
                        type: "text"
                    },
                    {
                        _key: "description",
                        label: "Description",
                        type: "wysiwyg"
                    },
                    {
                        _key: "serviceItems",
                        label: "Service Items",
                        type: "list",
                        attributes: [
                            {
                                _key: "title",
                                label: "Title",
                                type: "text"
                            },
                            {
                                _key: "description",
                                label: "Description",
                                type: "text-area"
                            },
                            {
                                _key: "image",
                                label: "Image",
                                type: "image"
                            },
                        ]
                    }
                ],
                footer: [
                    {
                        _key: "footer_title",
                        label: "Footer Title",
                        type: "text"
                    },
                    {
                        _key: "footer_description",
                        label: "Footer Description",
                        type: "text-area"
                    },
                    {
                        _key: "quickLinksTitle",
                        label: "Quick Links Title",
                        type: "text"
                    },
                    {
                        _key: "quickLinks",
                        label: "Quick Links",
                        type: "list",
                        attributes: [
                            {
                                _key: "link",
                                label: "Link",
                                type: "link"
                            }
                        ]
                    },
                    {
                        _key: 'socialicons',
                        label: 'Social Icons',
                        type: 'list',
                        attributes: [
                            {
                                _key: 'name',
                                label: 'Name',
                                type: 'text'
                            },
                            {
                                _key: 'icon',
                                label: 'Icon',
                                type: 'icon'
                            },
                            {
                                _key: 'link',
                                label: "Link",
                                type: 'link',
                            }
                        ]
                    }
                ]
            }
        }
    }
</script>
<style lang="scss">
    .site-navbar {
        position: relative !important;
    }
    .social-icon {
        width: 30px;
    }


</style>
