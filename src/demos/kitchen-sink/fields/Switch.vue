<template>
     <div class="demo-wrapper">
         <cb-structured section="demo-fields-switch" :schema="schema">
             <template v-slot:content="props">
                    <label class="switch">
                        <input type="checkbox" :checked="props.content.isChecked.state" />
                        <span class="slider round"></span>
                    </label>
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