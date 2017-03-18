[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

# Less SMACSS Starter

Inspired by [SMACSS](https://smacss.com/) from Jonathan Snook, a SMACSS starter kit with using gulp and less, for quickly starting off small to medium sized projects.

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
- layout should have its own source file, file name shoule be same as its module name
- naming conventions, using prefix `l-`, for example `l-header`

### Module

- module
  - module should be consisted with sub-components
  - module should be used to contain contents
  - module should be reusable
  - module should be isolated from each other
  - module should be expanded to fill the layout
  - module should have its own source file
  - module should not have width and margin
  - naming conventions, single word or words seperated by `-`, for example `modal`
- sub-component
  - sub-component should be the child elements that make up the module
  - naming conventions, `module-name__sub-component-name`
- variations
  - could either be variations to a module or variations to a sub-component
  - naming conventions, `module-or-component-name--variation-characteristic`

## Example

html structure
```html
<div class="l-modal"> <!--layout-->
  <div class="modal--dark"> <!--module variations-->
    <div class="modal__header--bright"> <!--sub-component variations-->
      Hello world!
    </div>
  </div>
</div>
```
[source](index.html)

layout style `(layouts/_modal.less)`
```less
.l-modal {
  .text-center;
  width: 400px;
  margin: 0 auto;
}
```
[source](src/less/layouts/_modal.less)

module style `(modules/_modal.less)`
```less
/* base module */
.modal {
  padding: 10px;

  /* module variations */
  &--dark {
    &:extend(.modal);
    background-color: @black-color;
  }
}

/* sub-component */
.modal__header {
  color: @white-color;

  /* sub-component variations */
  &--bright {
    &:extend(.modal__header);
    background-color: @red-color;
  }
}
```
[source](src/less/modules/_modal.less)