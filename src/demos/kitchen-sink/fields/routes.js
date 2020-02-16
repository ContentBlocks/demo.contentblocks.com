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
    },
    {
        path: 'fields/html',
        name: 'field-html',
        component: () => import('./HTML'),
        meta: {
            title: 'HTML Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'HTML'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'HTML'
                }
            ]
        }
    },
    {
        path: 'fields/text',
        name: 'field-text',
        component: () => import('./Text'),
        meta: {
            title: 'Text Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'Text'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'Text'
                }
            ]
        }
    },
    {
        path: 'fields/image',
        name: 'field-image',
        component: () => import('./Image'),
        meta: {
            title: 'Image Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'Image'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'Image'
                }
            ]
        }
    },
    {
        path: 'fields/icon',
        name: 'field-icon',
        component: () => import('./Icon'),
        meta: {
            title: 'Icon Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'icon'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'icon'
                }
            ]
        }
    },
    {
        path: 'fields/link',
        name: 'field-link',
        component: () => import('./Link'),
        meta: {
            title: 'Link Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'link'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'link'
                }
            ]
        }
    },
    {
        path: 'fields/list',
        name: 'field-list',
        component: () => import('./List'),
        meta: {
            title: 'List Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'list'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'list'
                }
            ]
        }
    },
    {
        path: 'fields/switch',
        name: 'field-switch',
        component: () => import('./Switch'),
        meta: {
            title: 'Switch Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'switch'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'switch'
                }
            ]
        }
    },
    {
        path: 'fields/textarea',
        name: 'field-textarea',
        component: () => import('./Textarea'),
        meta: {
            title: 'Textarea Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'textarea'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'textarea'
                }
            ]
        }
    },
    {
        path: 'fields/wysiwyg',
        name: 'field-WYSIWYG',
        component: () => import('./WYSIWYG'),
        meta: {
            title: 'WYSIWYG Field',
            metaTags: [
                {
                    name: 'description',
                    content: descriptionPrefix +'WYSIWYG'
                },
                {
                    property: 'og:description',
                    content: descriptionPrefix + 'WYSIWYG'
                }
            ]
        }
    }
]

