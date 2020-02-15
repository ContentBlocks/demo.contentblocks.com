<template>
    <div>
        <div class="demo-wrapper">
            <cb-structured section="demo-fields-button" :schema="schema">
                <template v-slot:content="props" >
                    <button :class="props.content.myButton.style" @click="clicked">{{props.content.myButton.label}}</button>
                </template>
            </cb-structured>
        </div>
    </div>
</template>
<script>
    export default {
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
