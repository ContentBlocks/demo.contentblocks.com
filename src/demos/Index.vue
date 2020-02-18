<template>
    <div class="text-center">
        <h1>Welcome to the ContentBlocks Demo</h1>
        <p>This demo has a working example of a simple static web page. It also has an example of the fields available in ContentBlocks</p>

        <div>
            <router-link :to="{path: '/vuejs/'}">Example Website with ContentBlocks CMS</router-link>
        </div>

        <div>
            <router-link :to="{path: '/kitchen-sink/'}">Kitchen Sink Demo</router-link>
        </div>
    </div>
</template>
