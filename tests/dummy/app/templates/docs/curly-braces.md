# Curly braces syntax

There are three ways to tell a template that you want to use a component with a certain name. When you need to use a component within another `.hbs` template, one option is to put the component's name in curly braces:

{{#docs-snippet name='some-template.hbs'}}
{{simple-button}}
{{/docs-snippet}}

This example just has some regular HTML markup in it:

{{#docs-snippet name='simple-button.hbs'}}
<!-- simple-button.hbs -->
<button class="my-button">Click here!</button>
{{/docs-snippet}}

Curly brace component syntax only works when components have a dash in the file name, like `simple-button`.

## Result:

{{simple-button}}

## Why use it?

If you're starting a new project, you should probably use the newer Angle Bracket syntax instead of curly braces.
However, curly brace syntax is still supported in Ember 3. 

You'll see curly brace components it in older apps and code samples. An app can mix and match styles, even within the same template, so that the syntax can be gradually updated. If your component needs positional params, you will have to do some minor refactoring to use them with Angle Bracket syntax.
