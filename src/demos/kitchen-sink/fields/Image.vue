<template>
    <div class="demo-wrapper">
        <cb-structured section="demo-field-image" :schema='schema'>
            <template v-slot:content="props" >
                <img  :src="props.content.myImage.url"/>
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
                        id: 'myImage',
                        label: 'Profile Picture',
                        required: true
                    }
                ]
            }
        }
    }
}
</script>

<style scoped>
    .demo-wrapper img {
        max-height: 150px;
    }
</style>
