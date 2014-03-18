/*jshint esnext:true */

// Traceur TodoMVC
// ---------------
// This is a re-write of the Backbone [TodoMVC](http://todomvc.com) app using
// ECMAScript 6 features and the Angular 2.0 dependency injection framework.
// It's made possible using [Traceur](https://github.com/google/traceur-compiler) compiler
// and was authored by Addy Osmani, Pascal Hartig, Sindre Sorhus, Stephen Sawchuk,
// Rick Waldron, Domenic Denicola and Guy Bedford. Dependency injection features
// added by Tero Parviainen.

// You can [run](http://teropa.github.io/todomvc-backbone-es6/) the completed app,
// [watch](https://github.com/teropa/todomvc-backbone-es6) the project repository
// or look at the original [ES5 implementation](http://goo.gl/8opExB).

// Begin your ES6 adventure here
// -----------------------------

// #### Imports


// We first import the di.js Injector, which we can use to launch the application.
// We can do this with the `import` keyword.
import {Injector} from './di/injector';

// We then import the classes we defined in the TodoApp module.
import {AppView, Filters} from './todo-app';

// Document ready
// --------------

// #### Arrow Functions (Statements)
// Load the application once the DOM is ready, using `jQuery.ready`
// `() => { ... }` which you'll see below is the statement form of
// the arrow function syntax. Practically speaking, it is lightweight
// sugar for `function () { ... }.bind(this)`.
//
// Apart from containing statements instead of an automatically-returned
// expression, it has the same properties as the expression-form arrow functions
// we talked about above.
$(() => {
  // We create a di.js Injector which will hold all of our managed application
  // components.
  var injector = new Injector();
  // *Finally, we kick things off by creating the **App**.*
  // We use the injector to instantiate an `AppView` and a `Filters` instance.
  // We then kick off the Backbone router.
  injector.get(AppView);
  injector.get(Filters);
  Backbone.history.start();
});

