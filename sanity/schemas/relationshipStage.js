import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'relationshipStage',
  title: 'RelationshipStage',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'realtionshipStageStartDate',
      title: 'Realtionship Stage Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'objective',
      title: 'Objective List',
      type: 'array',
      of: [{type: 'reference',to: {type: 'objective'}}],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})
