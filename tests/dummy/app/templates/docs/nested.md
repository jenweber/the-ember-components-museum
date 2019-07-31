# Nested components

In an Ember app, you can group components into subdirectories. When you generate the component, you can do something like `ember generate component clickables.nested-button`.

```sh
ember generate component clickables/nested-button
```

To use it with curly syntax:

```
{{clickables/nested-button}}
```

As of Ember 3.10, nested components can be invoked with angle brackets using the :: separator:

```
<Clickables::NestedButton />
```

## Result

{{clickables/nested-button}}

## Why use it?

In an app that's anything larger than a hobby project, it makes sense to group components just for the sake of organization. This is purely a file system choice and has no impact on the component's functionality.

## Learn more

- [File layout](https://cli.emberjs.com/release/advanced-use/project-layouts/) from the CLI Guides
