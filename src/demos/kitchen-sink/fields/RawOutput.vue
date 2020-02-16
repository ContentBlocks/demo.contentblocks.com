<template>
    <div class="raw-output">
        <div>Raw Output</div>
        <pre>{{content}}</pre>

    </div>
</template>
<script>
    export default {
        name: 'raw-output',
        props: ['content']
    }
</script>
<style lang="scss">
    .raw-output {
        color: rgb(49, 153, 89);
        padding: 10px;
        background-color: rgb(31, 29, 29);
        margin-top: 20px;
        pre {
            display: block;
            color: #eee;
        }
    }
</style>
