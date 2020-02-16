<template>
    <div class="demo-wrapper">
        <cb-structured section="demo-field-link" :schema='schema'>
            <template v-slot:content="props" >
                <a :href="props.content.websiteLink.url" :target="props.content.websiteLink.target">{{props.content.websiteLink.text}}</a>
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
                        type: 'link',
                        id: 'websiteLink',
                        label: 'Company Website',
                        required: true
                    }
                ]
            }
        }
    }
}
</script>
