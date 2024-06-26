import {defineField, defineType} from 'sanity'
import category from './category'

export default defineType({
  name: 'restaurant',
  title: 'Restaurants',
  type: 'document',
  fields:  [
    {
      name:'name',
      type: 'string',
      title:'Name',
      validation: rule=>rule.required()
    },
     {
      name:'email',
      type: 'string',
      title:'Email',
      validation: rule=>rule.required()
    },
     {

      name:'phonenumber',
      type: 'number',
      title:'Phone Number',
      validation: rule=>rule.required()
    },
    {
      name:'description',
      type: 'string',
      title:'Description',
      validation: rule=>rule.max(200)
    },
    {
      name:'image',
      type: 'image',
      title:'image of the Restaurant' 
    },
    {
      name:'lat',
      type: 'number',
      title:'latitude of the restaurant' 
    },
    {
      name:'lng',
      type: 'number',
      title:'longitude of the restaurant' 
    },
    {
      name:'address',
      type: 'string',
      title:'Restaurant Address',
      validation: rule=>rule.required(), 
    },
    {
      name:'rating',
      type: 'number',
      title:'Enter a number between 1 to 5',
      validation:rule=>rule.required().min(1).max(5).error('please enter a valid number'),
    },
    {
      name:'reviews',
      type: 'string',
      title:'Reviews',
       
    },
    {
        name:'category',
        title:'category',
        validation:rule=>rule.required(),
        type:'reference',
        to:[{type:'category'}],
    },
    {
      name:'dishes',
      type: 'array',
      title:'Dishes',
      of:[{type:'reference', to:[{type:'dish'}]}]
       
    }
  ],
})
