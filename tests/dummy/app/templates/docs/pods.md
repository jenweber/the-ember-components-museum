# Pods

Pods are an alternate file layout option in Ember. They were originally released as an experimental feature, but they became popular. An app can have a mix of pods and non-pods resources.

To create a component using pods, do something like: 

```sh
ember generate component --pod pod-button-name
```

This creates a directory at `components/pod-button-name` that contains a `component.js` and `template.hbs` file.

## Result

```text
components/
    pod-button-name/
        components.hbs
        template.hbs
```

### Why use it?

Pods are not recommended for new applications, since there are unhandled edge cases. The development efforts have turned towards new file system layouts. However, many companies do use pods in production. The benefit of pods is that it's easy to navigate back and forth between `hbs` and `js` for a component in the file explorer. One downside is that with so many files named `template.hbs` and `component.js`, there are some new file search habits to learn, and some IDEs would benefit from the use of plugs to display the parent file name in the file navigation tab.

## Learn more
