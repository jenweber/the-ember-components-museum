# Nested components

In an Ember app, you can group components into subdirectories. When you generate the component, you can do something like `ember generate component clickables.nested-button`.

To use it with curly syntax:

```
{{clickables/nested-button}}
```

At this time, angle brackets do not support nested components, however there is an RFC to add the functionality.

## Result:

{{clickables/nested-button}}

## Why use it?

In an app that's anything larger than a hobby project, it makes sense to group components just for the sake of organization. This is purely a file system choice and has no impact on the component's functionality.