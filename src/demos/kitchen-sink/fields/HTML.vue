<template>
     <div>
        <div class="demo-wrapper">
            <cb-structured section="demo-fields-html" :schema="schema">
                <template v-slot:content='props'>
                    <div  v-html="props.content.myHtml.html"></div>
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
                        id: 'myHtml',
                        label: 'Enter raw HTML'
                    },
                ]
            }
        }
    }
}
</script>
