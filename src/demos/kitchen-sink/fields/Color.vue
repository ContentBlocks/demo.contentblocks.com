<template>
    <div>
        <div class="demo-wrapper">
            <cb-structured section="demo-fields-color" :schema="schema">
                <template v-slot:content="props" >
                    <div  class="color-box" :style="{backgroundColor: props.content.myColor.hex}"></div>
                    <raw-output :content="props"></raw-output>
                </template>
            </cb-structured>
        </div>
    </div>
</template>
<script>
    import mixin from './mixin'
    export default {
        mixins: [mixin],
        data() {
            return {
                schema: {
                    fields: [
                        {
                            id: 'myColor',
                            type: 'color',
                            label: 'Example Color Output'
                        }
                    ]
                }
            }
        },
        methods: {
            clicked() {
                alert("clicked");
            }
        }
    }
</script>
<style scoped>
    .color-box {
        height: 50px;
        width: 50px;
    }
</style>
