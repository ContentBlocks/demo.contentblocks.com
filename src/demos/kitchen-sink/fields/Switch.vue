<template>
     <div class="demo-wrapper">
         <cb-structured section="demo-fields-switch" :schema="schema">
             <template v-slot:content="props">
                 <span v-if="props.content.isChecked.state">I am visible, edit to turn me on and off.</span>
                 <raw-output :content="props"></raw-output>
             </template>
         </cb-structured>
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
                        type: 'switch',
                        id: 'isChecked',
                        label: 'Checked'
                    }
                ]
            }
        }
    }
}
</script>
