# Angle brackets syntax

There are three ways to tell a template that you want to use a component with a certain name. When you need to use a component within another `.hbs` template, one option is to put the component's name in angle brackets. You should capitalize the first letter of each word in the component's filename:

```
<SimpleButton></SimpleButton>
```

You can use the shorthand for Angle Brackets like this: `<SampleButton />`. These two examples do the same thing.

This button component just has some regular HTML markup in it:

```hbs
<!-- simple-button.hbs -->
<button class="my-button">Click here!</button>
```

## Result

<SimpleButton></SimpleButton>

## Why use it?

Angle Bracket syntax was introduced in [Ember 3.4](https://blog.emberjs.com/2018/10/07/ember-3-4-released.html).

If you're starting a new project, you should probably use Angle Bracket syntax instead of curly bracket syntax, since it has some new helpful features. For example, Angle Brackets can have a component named with one word, like `simple`. No dash needed! It's also much easier to tell that something in a template is a component and not a helper or variable.

## Learn more