the-ember-components-museum
==============================================================================

There are many different ways that you can define and use Components in Ember 3! This project has documentation and working examples of all the different forms that Components take:

- inline and block
- curly brackets and angle brackets
- classic and native classes
- nested and un-nested
- standard file layout and pods

Visit the docs at: TODO

To see the code of the components themselves, look in the `addon/components` directory.

If you're not familiar with addon code, you should know that it's mostly the same as an app structure. You could copy and paste these same components into an app and they would work fine. To learn how to make your own addon, check out [this tutorial](https://cli.emberjs.com/release/writing-addons/intro-tutorial/). I made this as an addon so I could use [ember-cli-addon-docs](https://ember-learn.github.io/ember-cli-addon-docs) to create the site for viewing the components.

Developing locally
------------------------------------------------------------------------------

* `git clone <repository-url>`
* `cd the-ember-components-museum`
* `npm install`
* `ember serve`

Visit the app at [http://localhost:4200](http://localhost:4200)

The `tests/dummy/app` directory contains the code that shows the components rendered in the interactive documentation.


Running tests
------------------------------------------------------------------------------

* `ember test` – Runs the test suite on the current Ember version
* `ember test --server` – Runs the test suite in "watch mode"
* `ember try:each` – Runs the test suite against multiple Ember versions


For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
