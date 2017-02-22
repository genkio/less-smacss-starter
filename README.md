[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

# Less SMACSS Starter

Inspired by [SMACSS](https://smacss.com/) from Jonathan Snook, a SMACSS starter kit with gulp, less, and some built-in base classes, for quickly starting off small to medium sized projects.

## Getting Started

    npm install
    gulp

## General Rules

- be consistent
- `class` over `id`
- each html element should have only one class
- avoid `!important` except used in states
- the maximum nesting level should not go beyond 3

### Layout

- layout should be the major content areas, like header, content, footer
- layout should be used to contain modules
- layout should determine the dimensions and positioning of its modules
- naming conventions, using prefix `l-`
  - `l-header`, `l-content`, `l-footer`

### Module

- (root) module
  - module should be consisted with sub-components
  - module should be used to contain contents
  - module should be reusable
  - module should be isolated from each other
  - module should be expanded to fill the layout
  - module should have its own source file
  - module should not have width and margin
- sub-component
  - sub-component should be the child elements that make up the module
- sub-module
  - sub-module should be considered as variations to module
- naming conventions
  - `modal`
  - `modal__header`
  - `modal--dark`
- [example](https://github.com/j1wu/less-smacss-starter/blob/master/src/less/modules/_modal.less)
