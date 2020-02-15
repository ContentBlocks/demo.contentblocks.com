import Fields from './Fields'
import ButtonField from './Button'
import ColorField from './Color'
var descriptionPrefix = "ContentBlocks - Fields - "

export default [,
    {
        path: 'fields/button',
        name: 'field-button',
        component: () => import('./Button'),
        meta: {
            title: 'Button Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix + 'Button'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'Button'
                }
            ]
        },
    },
    {
        path: 'fields/color',
        name: 'field-color',
        component: () => import('./Color'),
        meta: {
            title: 'Color Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix + 'Color'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'Button'
                }
            ]
        },
    }
]

