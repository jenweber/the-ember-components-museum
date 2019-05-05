# Cheatsheet

Reference this page to see examples of all component invocation styles in one view.

## Invocation
-----

### Angle Brackets syntax

```hbs
<SimpleButton></SimpleButton>
```

or shorthand, `<SimpleButton />`

{{link-to "Full explanation" "docs.angle-brackets"}}

### Curly Braces syntax

```hbs
{{simple-button}}
```

{{link-to "Full explanation" "docs.curly-braces"}}

### Component helper

```hbs
{{component "simple-button"}}
```

{{link-to "Full explanation" "docs.component-helper"}}

## Passing arguments
------

### Inline Angle Brackets

```hbs
<ClassicInlineButton @message="Click here!"></ClassicInlineButton>
```

{{link-to "Full explanation" "docs.inline"}}

### Inline Curly Braces

```hbs
{{classic-inline-button message="Click here!"}}
```

{{link-to "Full explanation" "docs.inline"}}

### Block Angle Brackets

```hbs
<ClassicBlockButton @message="Click here!">
    <div>
        <i>Here is some markup to encourage you to click.</i>
    </div>
</ClassicBlockButton>
```

{{link-to "Full explanation" "docs.block"}}

### Block Curly Braces

```hbs
{{#classic-block-button message="Click here!"}}
    <div>
        <i>Here is some markup to encourage you to click.</i>
    </div>
{{/classic-block-button}}  
```

{{link-to "Full explanation" "docs.block"}}

### Positional params

Available only in curly braces syntax.

```js
// positional-button.js
import Component from '@ember/component';

export default Component.extend({}).reopenClass({
    positionalParams: ['buttonText', 'instructions']
});
```

```hbs
<!-- positional-button.hbs -->
<div>{{instructions}}</div>
<button class="my-button">{{buttonText}}</button>
```

{{link-to "Full explanation" "docs.positional-params"}}

## File layout
---------

### Standard

```sh
ember generate component my-component
```

```text
components/
    my-component.js
temnplates/
    components/
        my-component.hbs
```

{{link-to "Full explanation" "docs.standard"}}

### Nested

```sh
ember generate component clickables.nested-button
```

```hbs
{{clickables/nested-button}}
```

{{link-to "Full explanation" "docs.nested"}}

### Pods

```sh
ember generate component --pod my-component
```

```text
components/
    pod-button-name/
        components.hbs
        template.hbs
```

{{link-to "Full explanation" "docs.pods"}}