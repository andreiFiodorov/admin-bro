const Renderer = require('../utils/renderer')
const Filter = require('../utils/filter')
const date = require('./date')

const renderer = new Renderer()

/**
 * @type {PropertyType}
 * @module datetime
 * @category PropertyTypes
 */
module.exports = {
  head: date.head,

  list: (property, record, h) => {
    let value = record.param(property.name())
    value = h.moment(value).format('YYYY-MM-DD HH:mm')
    return renderer.render('property-types/default/list', {
      h, value, record, property,
    })
  },
  show: (property, record, h) => {
    let value = record.param(property.name())
    value = h.moment(value).format('YYYY-MM-DD HH:mm')
    return renderer.render('property-types/default/show', {
      value, property, h,
    })
  },

  edit: (property, record, h) => {
    let value = record.param(property.name())
    value = h.moment(value).format('YYYY-MM-DD HH:mm')
    const error = record.error(property.name())
    return renderer.render('property-types/datetime/edit', {
      value, property, h, error,
    })
  },

  filter: (property, filterProperty, h) => {
    const filterKey = Filter.toFilterKey(property)
    const value = (filterProperty && filterProperty.value) || {}
    return renderer.render('property-types/datetime/filter', {
      property, filterKey, h, value,
    })
  },
}
