<template>
    <div class='demo-wrapper'>
        <cb-structured section='demo-fields-icon' :schema="schema">
            <template v-slot:content="props">
                <i :style="`color:${props.content.icon.color}; width:100px; height:100px;`" :class="[props.content.icon.style,props.content.icon.name]"></i>
                <raw-output :content="props"></raw-output>
            </template>
        </cb-structured>
    </div>
</template>

<script>
import mixin from './mixin'
export default {
    mixins: [mixin],
    data() {
        return {
            schema: {
                fields: [
                    {
                        id: 'icon',
                        label: 'facebook-icon',
                        type: 'icon',
                        hint: 'icon'
                    }
                ]
            }
        }
    }
}
</script>