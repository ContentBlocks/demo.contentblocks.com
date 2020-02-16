<template>
     <div>
        <div class="demo-wrapper">
            <cb-structured section="demo-fields-html" :schema="schema">
                <template v-slot:content='props'>
                    <h1 style="color:#333" :class="props.content.head.style">{{props.content.head}}</h1>
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
    data(){
        return {
            schema: {
                fields: [
                    {
                        type: 'html',
                        id: 'head',
                        label: 'custom header 1 tag'
                    },
                ]
            }
        }
    }
}
</script>