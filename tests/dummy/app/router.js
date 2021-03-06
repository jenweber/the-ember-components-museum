import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() { 
    this.route('curly-braces');
    this.route('angle-brackets');
    this.route('nested');
    this.route('inline');
    this.route('block');
    this.route('component-helper');
    this.route('native-classes');
    this.route('positional-params');
    this.route('pods');
    this.route('cheatsheet');
    this.route('standard');
    this.route('classic');
  });
  this.route('docs');

});

export default Router;