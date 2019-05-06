# Native classes

When Ember was created, JavaScript had no native classes, so `EmberObject` was created to bring some class-like functionality into apps. Today, JavaScript has Native Classes, and there's a way to use them in Ember!

This feature is currently available in the [Ember Octane Preview](https://emberjs.com/editions/octane), aka canary in Ember. Stay tuned for when it shows up in a stable release! In the meantime, you can also install [sparkles-component](), which gets you most of the way there for components.

Generating a new component in Octane results in the following boilerplate:

```js
import Component from '@glimmer/component';

export default class NativeInlineButtonComponent extends Component {
}
```

An action in a native class component looks like this:

```js
import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NativeInlineButtonComponent extends Component {
  @action
  helloWorld() {
    console.log('Hello, world!');
  }
}
```

The action is used in a template like this:

```hbs
<button onclick={{this.helloWorld}}>Click here</button>
```

## Result

{{native-inline-button}}

## Why use it

Thanks to native classes in JavaScript, now some of Ember's key API features can be expressed in regular JavaScript. This is a huge leap forward in Ember's ergonomics and it greatly improves the learning story. You can read more about native classes in Ember in this RFC.

## Learn more

- [Ember Octane Preview Guides](https://guides.emberjs.com/editions/octane)
