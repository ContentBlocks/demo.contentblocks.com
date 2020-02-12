<template>
    <div class="site-wrap">


        <cb-structured section="sitewide-message" :schema="message">
            <template v-slot:content="slotProps" >
                <div v-if="slotProps.content.message && slotProps.content.show.state"
                     class="text-center p-3 "
                     :style="{backgroundColor: slotProps.content.bgColor.hex, color: slotProps.content.color.hex}">
                    <div class="d-flex justify-content-center">
                        <div v-html="slotProps.content.message.html" class="mr-4"></div>
                        <div>
                            <a :href="slotProps.content.link.url" :target="slotProps.content.link.target">
                                <svg  class="svg-icon social-icon" :fill="slotProps.content.icon.color" viewBox="0 0 512 512">
                                    <path :d="slotProps.content.icon.svg"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </template>
        </cb-structured>

        <header class="site-navbar bg-light site-navbar-target pt-2" role="banner" >

            <div class="container">
                <div class="row align-items-center">

                    <div class="col-6 col-xl-2">
                        <h1 class="mb-0 site-logo "><a href="index.html" class="h2 mb-0 text-black">Dogger<span class="text-black">.</span> </a></h1>
                    </div>

                    <div class="col-12 col-md-10 d-none d-xl-block">
                        <nav class="site-navigation position-relative text-right" role="navigation">
                            <cb-structured section="menu"  :schema="menu">
                                <template v-slot:content="slotProps" >
                                    <ul v-if="slotProps.content.menuItems" class="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                                        <li v-for="(menuItem, menuItemIdx) in slotProps.content.menuItems.items" :key="menuItemIdx">
                                            <a :href="menuItem.link.url" :target="menuItem.link.target" class="nav-link">{{menuItem.link.label}}</a>
                                        </li>
                                    </ul>
                                </template>
                            </cb-structured>
                        </nav>
                    </div>


                    <div class="col-6 d-inline-block d-xl-none ml-md-0 py-3" style="position: relative; top: 3px;"><a href="#" class="site-menu-toggle js-menu-toggle float-right"><span class="icon-menu h3"></span></a></div>

                </div>
            </div>

        </header>


        <section class="site-blocks-cover overflow-hidden bg-light" >
            <cb-structured section="homepage-hero"  :schema="hero">
                <template v-slot:content="slotProps" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-7 align-self-center text-center text-md-left">
                                <div class="intro-text">
                                    <h1>{{slotProps.content.title.text}}</h1>
                                    <p class="mb-4">{{slotProps.content.subtitle.text}}</p>
                                </div>
                            </div>
                            <div v-if="slotProps.content.image" class="col-md-5 align-self-end text-center text-md-right">
                                <img :src="slotProps.content.image.url" alt="Image" class="img-fluid cover-img">
                            </div>
                        </div>
                    </div>
                </template>
            </cb-structured>
        </section>


        <section class="site-section " id="services-section">
            <div class="container">
                <cb-structured section="services"  :schema="services">
                    <template v-slot:content="slotProps" >
                        <div class="row justify-content-center" data-aos="fade-up">
                            <div class="col-lg-6 text-center heading-section mb-5 ">
                                <div class="paws">
                                    <span class="icon-paw"></span>
                                </div>
                                <h2 class="text-black mb-2">{{slotProps.content.title.text}}</h2>
                                <p v-html="slotProps.content.description.html"></p>
                            </div>
                        </div>


                        <div class="row" v-if="slotProps.content.serviceItems" >
                            <div v-for="(service, serviceIdx) in slotProps.content.serviceItems.items" :key="serviceIdx" class="col-md-6 mb-4 col-lg-4 " data-aos="fade-up" data-aos-delay="">
                                <div class="block_service text-center ">
                                    <img :src="service.image.url" alt="Image mb-5">
                                    <h3>{{service.title.text}}</h3>
                                    <p>{{service.description.text}} </p>
                                </div>
                            </div>
                        </div>
                    </template>
                </cb-structured>
            </div>
        </section>



        <footer class="site-footer">
            <cb-structured section="footer"  :schema="footer">
                <template v-slot:content="slotProps" >
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="row">
                                    <div class="col-md-5">
                                        <h2 class="footer-heading mb-4">{{slotProps.content.footer_title.text}}</h2>
                                        <p>{{slotProps.content.footer_description.text}}</p>
                                    </div>
                                    <div class="col-md-3 ml-auto">
                                        <h2 class="footer-heading mb-4">{{slotProps.content.quickLinksTitle.text}}</h2>
                                        <ul v-if="slotProps.content.quickLinks" class="list-unstyled">
                                            <li v-for="(quickLink, quickLinkIdx) in slotProps.content.quickLinks.items" :key="quickLinkIdx"><a :href="quickLink.link.url" :target="quickLink.link.target" class="nav-link">{{quickLink.link.label}}</a></li>
                                        </ul>
                                    </div>
                                    <div class="col-md-3">
                                        <h2 class="footer-heading mb-4">Follow Us</h2>

                                        <div  v-if="slotProps.content.socialIcons" class="d-flex">
                                            <div v-for="(socialItem, idxSocial) in slotProps.content.socialIcons.items" class="social-botton cursor-hand">
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
            </cb-structured>
        </footer>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                //We always try to provide your dog the best services
                message: {
                    fields: [
                        {
                            id: 'show',
                            type: 'switch',
                            label: 'Show the message',

                        },
                        {
                            id: 'message',
                            type: 'wysiwyg',
                            label: 'Sitewide Message',
                            hint: 'Applies to both mobile and desktop.'
                        },
                        {
                            id: 'icon',
                            label: 'Icon',
                            type: 'icon'
                        },
                        {
                            id: 'link',
                            label: "Link",
                            type: 'link',
                        },
                        {
                            id: 'bgColor',
                            type: 'color',
                            label: 'Background Color'
                        },
                        {
                            id: 'color',
                            type: 'color',
                            label: 'Text Color'
                        }
                    ]
                },
                menu: {
                    fields: [
                        {
                            id: "menuItems",
                            label: "Menu Items",
                            type: "list",
                            fields: [
                                {
                                    id: "link",
                                    label: "Label",
                                    type: "link"
                                }
                            ]
                        }
                    ]
                },
                hero: {
                    fields: [
                        {
                            id: "title",
                            label: "Title",
                            type: "text"
                        },
                        {
                            id: "subtitle",
                            label: "Sub Title",
                            type: "text"
                        },
                        {
                            id: "image",
                            label: "Image",
                            type: "image"
                        },
                    ]
                },
                services: {
                    fields: [
                        {
                            id: "title",
                            label: "Title",
                            type: "text"
                        },
                        {
                            id: "description",
                            label: "Description",
                            type: "wysiwyg"
                        },
                        {
                            id: "serviceItems",
                            label: "Service Items",
                            type: "list",
                            fields: [
                                {
                                    id: "title",
                                    label: "Title",
                                    type: "text"
                                },
                                {
                                    id: "description",
                                    label: "Description",
                                    type: "text-area"
                                },
                                {
                                    id: "image",
                                    label: "Image",
                                    type: "image"
                                },
                            ]
                        }
                    ]
                },
                footer: {
                    fields: [
                        {
                            id: "footer_title",
                            label: "Footer Title",
                            type: "text"
                        },
                        {
                            id: "footer_description",
                            label: "Footer Description",
                            type: "text-area"
                        },
                        {
                            id: "quickLinksTitle",
                            label: "Quick Links Title",
                            type: "text"
                        },
                        {
                            id: "quickLinks",
                            label: "Quick Links",
                            type: "list",
                            fields: [
                                {
                                    id: "link",
                                    label: "Link",
                                    type: "link"
                                }
                            ]
                        },
                        {
                            id: 'socialIcons',
                            label: 'Social Icons',
                            type: 'list',
                            fields: [
                                {
                                    id: 'name',
                                    label: 'Name',
                                    type: 'text'
                                },
                                {
                                    id: 'icon',
                                    label: 'Icon',
                                    type: 'icon'
                                },
                                {
                                    id: 'link',
                                    label: "Link",
                                    type: 'link',
                                }
                            ]
                        }
                    ]
                }
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
