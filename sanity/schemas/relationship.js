import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'relationship',
  title: 'Relationship',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'player',
      title: 'Players',
      type: 'array',
      of: [{type: 'reference', to: {type: 'player'}}],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'relationshipStage',
      title: 'RelationshipStage',
      type: 'array',
      of: [{type: 'reference', to: {type: 'relationshipStage'}}],
    }),
    defineField({
      name: 'realtionshipStartDate',
      title: 'Realtionship Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      player: 'player.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {player} = selection
      return {...selection, subtitle: player && `by ${player}`}
    },
  },
})
