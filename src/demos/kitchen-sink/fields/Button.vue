<template>
    <div>
        <div class="demo-wrapper">
            <cb-structured section="demo-fields-button" :schema="schema">
                <template v-slot:content="props" >
                    <button :class="props.content.myButton.style" @click="clicked">{{props.content.myButton.label}}</button>
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
        data() {
            return {
                schema: {
                    fields: [
                        {
                            id: 'myButton',
                            type: 'button',
                            label: 'Example Button'
                        }
                    ]
                }
            }
        },
        methods: {
            clicked() {
                alert("clicked");
            }
        }
    }
</script>
