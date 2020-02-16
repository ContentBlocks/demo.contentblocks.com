<template>
     <div class="demo-wrapper">
         <cb-structured section="demo-fields-wysiwyg" :schema="schema">
             <template v-slot:content="props">
                 <p v-html="props.content.note.html"></p>
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
                        type: 'wysiwyg',
                        id: 'note',
                        label: 'enter your note',
                        hint: 'note',
                        placeholder: 'Please enter a short note'
                    }
                ]
            }
        }
    }
}
</script>
