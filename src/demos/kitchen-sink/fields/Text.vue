<template>
     <div class="demo-wrapper">
         <cb-structured section="demo-fields-text" :schema="schema">
             <template v-slot:content="props">
                 <p style="color:#333">{{props.content.city.text}}</p>
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
                        type: 'text',
                        id: 'city',
                        label: 'City',
                        text: 'Seattle, US',
                        placholder: 'Enter city name',
                        hint: 'city'
                    }
                ]
            }
        }
    }
}
</script>