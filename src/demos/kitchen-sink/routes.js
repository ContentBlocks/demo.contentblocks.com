import Vue from 'vue';
import Layout from './Layout'
import Home from './Home'
import FieldRoutes from './fields/routes'
import Fields from "./fields/Fields";

var descriptionPrefix = "ContentBlocks kitchen sink - ";

export default {
    path: '/kitchen-sink',
    name: 'layout',
    component: Layout,
    children:[
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Kitchen Sink',
            }
        },
        {
            path: 'fields',
            name: 'fields',
            component: Fields,
            meta: {
                title: 'Fields',
            },
            children: FieldRoutes
        }
    ]
}
