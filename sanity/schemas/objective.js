import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'objective',
  title: 'Objective',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'currentValue',
        title: 'CurrentValue',
        type: 'number',
      }),
    defineField({
        name: 'expectedValue',
        title: 'ExpectedValue',
        type: 'number',
      }),
  ],
})
