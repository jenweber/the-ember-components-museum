# Inline components

There are two ways to pass information into a component, either as properties or by using `{{yield}}` to pass a block of markup. We'll cover inline components first, which use only properties.

Here's an example using Angle Brackets, where we are passing in a string "Click here!". Note the `@` in front of the property name.

```hbs
<ClassicInlineButton @message="Click here!"></ClassicInlineButton>
```

Here's an equivalent example using curly braces:

```hbs
{{classic-inline-button message="Click here!"}}
```

The button component uses the data passed in:

```hbs
<!-- classic-inline-button.hbs -->
<button class="my-button" onclick={{action this.helloWorld}}>{{message}}</button>
```

## Result

{{classic-inline-button message="Click here!"}}

## Why use it?

Inline components are more common than block components. Use them whenever you need to only pass a component data, and you don't need to pass in markup.

## Learn more

- <a href="https://guides.emberjs.com/release/components/passing-properties-to-a-component/">Passing properties to a component</a>, from the Ember.js Guides
