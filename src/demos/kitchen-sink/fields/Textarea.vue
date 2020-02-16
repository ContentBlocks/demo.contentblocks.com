<template>
     <div class="demo-wrapper">
         <cb-structured section="demo-fields-text-area" :schema="schema">
             <template v-slot:content="props">
                 <p style="color:#333">{{props.content.note.text}}</p>
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
                        type: 'text-area',
                        id: 'note',
                        label: 'enter your note',
                        hint: 'Try to keep it to a few lines of text if you can.',
                        placeholder: 'Please enter a short note'
                    }
                ]
            }
        }
    }
}
</script>
