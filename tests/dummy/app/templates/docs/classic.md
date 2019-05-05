# Classic components

A classic component is the default for the JavaScript files associated with a component. It extends from `EmberObject`.

Generating a classic component results in the following boilerplate:

```js
import Component from '@ember/component';

export default Component.extend({
});
```

An action in a classic component looks like this:

```js
import Component from '@ember/component';

export default Component.extend({
    actions: {
        helloWorld() {
            console.log('Hello, world!');
        }
    }
});
```

## Result

{{classic-inline-button message="Click here!"}}

## Why use it

A classic component will match most of the code that you see while googling. It's the main way to write the JavaScript for apps that are using stable versions of Ember.

## Learn more
