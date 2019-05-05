# Block components

There are two ways to pass information into a component, either as properties or by passing a block of markup. A block form component can handle both of these types of information.

Here's an example using Angle Brackets. We are passing a normal property in, the `message` "Click here!" but inside the tag, we can also put some markup:

```hbs
<ClassicBlockButton @message="Click here!">
    <div>
        <i>Here is some markup to encourage you to click.</i>
    </div>
</ClassicBlockButton>
```

Here's an equivalent example using curly braces:

```hbs
{{#classic-block-button message="Click here!"}}
    <div>
        <i>Here is some markup to encourage you to click.</i>
    </div>
{{/classic-block-button}}  
```

That markup is available in the component as `{{yield}}`

```
<!-- classic-block-button.hbs -->
{{yield}}
<button class="my-button">{{message}}</button>
```


## Result

{{#classic-block-button message="Click here!"}}
    <div>
        <i>Here is some markup to encourage you to click.</i>
    </div>
{{/classic-block-button}}

## Why use it?

Block components are useful when you want to reuse a component in a bunch of places.
You have to turn the layout and presentation into something flexible. That's when it becomes helpful to be able to pass markup too, not just properties.

There are also some fancy things you can do with the scope of data when using block form. One of the best resources for learning them is this [hilarious and informative](https://www.youtube.com/watch?v=MpFudGJn2J0) talk by Miguel Camba.

## Learn more