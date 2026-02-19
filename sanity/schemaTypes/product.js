export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'name' },
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Plastic Crates', value: 'plastic-crates' },
                    { title: 'Plastic Storage Bins', value: 'plastic-storage-bins' },
                    { title: 'Plastic Pallets', value: 'plastic-pallets' },
                    { title: 'Plastic Garbage Bins', value: 'plastic-garbage-bins' },
                    { title: 'Poultry Equipment', value: 'poultry-equipment' },
                ],
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'dimensions',
            title: 'Dimensions',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: { hotspot: true },
        },
    ],
}
