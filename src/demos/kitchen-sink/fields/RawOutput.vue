<template>
    <div class="raw-output">
        <div>Raw Output</div>
        <pre>{{content}}</pre>

    </div>
</template>
<script>
    export default {
        props: ['content']
    }
</script>
<style lang="scss">
    .raw-output {
        color: #000;
        margin-top: 20px;
        pre {
            display: block;
        }
    }
</style>
