# Positional params

When you pass data to a component, _usually_ you should assign it to particular named properties, like `<MyComponent fruit="apples" veggie="carrots" />`. However some developers instead pass in unnamed properties. They are known as "positional params," and they only work with curly braces syntax. If you're learning Ember, it's good to know that these exist so you can spot them in older apps, but you really shouldn't use them.

{{#docs-snippet name='some-template.hbs'}}
{{positional-button "Click here!" "Some text with instructions"}}
{{/docs-snippet}}

To use the positional params in a template, you have to [jump through some hoops](https://guides.emberjs.com/v2.13.0/components/passing-properties-to-a-component/#toc_positional-params) with changes to the component's JavaScript:

```js
// positional-button.js
import Component from '@ember/component';

export default Component.extend({}).reopenClass({
    positionalParams: ['buttonText', 'instructions']
});
```

Then, the template can use the new names for the parameters:

```hbs
<!-- positional-button.hbs -->
<div>{{instructions}}</div>
<button class="my-button">{{buttonText}}</button>
```

## Result

{{positional-button "Click here!" "Some text with instructions"}}

## Why use it?

Really, it's best not to use positional params. Positional params don't work with Angle Bracket syntax and it's too easy to make mistakes when using them. You can follow [this guide](https://guides.emberjs.com/release/reference/syntax-conversion-guide/) to refactor any examples you find of it in an app.

## Learn more

- [Positional params](https://guides.emberjs.com/release/components/passing-properties-to-a-component/#toc_positional-params) in the Ember.js guides
