import Fields from './Fields'
import ButtonField from './Button'
var descriptionPrefix = "ContentBlocks - Fields - "

export default [,
    {
        path: 'fields/button',
        name: 'field-button',
        component: ButtonField,
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
    }
]

