import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class NativeInlineButtonComponent extends Component {
  @action
  helloWorld() {
    console.log('Hello, world!');
  }
}