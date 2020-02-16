<template>
    <div class="demo-wrapper">
        <cb-structured section="demo-field-list" :schema='schema'>
            <template v-slot:content="props" >
                    <ul>
                        <li  v-for="(item, i) in props.content.todos.items" :key="i">
                            
                            <span :style="`color: #000;text-decoration: ${item.isCompleted.state ? 'line-through': ''}`">{{item.name.text}}</span>
                            
                        </li>
                    </ul>
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
                        type: 'list',
                        id: 'todos',
                        label: 'My todos',
                        fields: [
                            {
                                type: 'text',
                                id: 'name',
                                label: 'name'
                            },
                            {                              
                                type: 'switch',
                                id: 'isCompleted',
                                label: 'completed'
                            
                            }
                        ]
                    }
                ]
            }
        }
    }
}
</script>