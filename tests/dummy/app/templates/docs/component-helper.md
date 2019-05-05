# Component helper

Most of the time, when you use a component, you know the name of the component to use in an `hbs` template file. But what about when you want the component used to change based on some data? That's what the [`component`](https://api.emberjs.com/ember/3.9/classes/Ember.Templates.helpers/methods/component?anchor=component) helper is for.

For example, let's say that I am building a health questionnaire form. If the user checks some specific combination of boxes, I want to show a specific component. If they check all of them, I show another. If they check none, I show yet a different component. If I put all this logic in the template with `{{#if}}` helpers, it would be very ugly. Instead, I could write a computed property that returned the name of the component to use, based on the checked boxes. Then, the component helper could use the name to render the right thing.

The [`component`](https://api.emberjs.com/ember/3.9/classes/Ember.Templates.helpers/methods/component?anchor=component) helper API docs have lots of examples of using it with inline, block, and nested sytnax, so we'll cover just one example here.

```hbs
{{component "simple-button"}}
```

## Result:

{{component "simple-button"}}

## Why use it?

When you're first starting out in Ember, you will probably not use this much. But if you're working on projects with complex business logic and UI flows, the component helper becomes useful! For example, you could even have some server-side data and logic that controls which component gets rendered. That's pretty powerful!
