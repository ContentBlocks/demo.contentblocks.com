<template>
    <div class="demo-wrapper">
        <cb-structured section="demo-field-image" :schema='schema'>
            <template v-slot:content="props" >
                <img style="width:120px; border-radius: 50%" :src="props.content.avatar.url"/>
                <raw-output :content="props" ></raw-output>
            </template>
        </cb-structured>
    </div>
</template>
<script>
import mixin from './mixin'
export default {
    mixins:[mixin],
    data(){
        return {
            schema: {
                fields: [
                    {
                        type: 'image',
                        id: 'avatar',
                        label: 'user avarter',
                        required: true
                    }
                ]
            }
        }
    }
}
</script>