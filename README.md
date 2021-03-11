Notes:

Install Angular CLI:

- npm install -g @angular/cli

Update Angular version:

- ng update

Create new Angular project:
-ng new app-name

Run a project:

- ng serve -o

Generate components:

- ng generate component component-name

A component consists of three things:

1. A component class that handles data and functionality.
2. An HTML template that determines the UI.
3. Component-specific styles that define the look and feel.

Routing: 1. create component and 2. add components to Routes array in app-routing.module.ts / app.module.ts
https://angular.io/guide/router

- ActivatedRoute - provides access to information about a route associated with a component (url, params, etc).

Dependency Injection - adding to the constructor, to be used within component

One way data binding - data flows either from component logic to template (or vice versa). Property binding sets values for properties of HTML elements or directives (i.e.toggle button functionality, set paths programmatically, and share values between components). https://angular.io/guide/property-binding

Two way data binding - data flows back and forth to component and template (i.e. a form that is both able to set and retrieve data) -- ngModel, FormsModule

ng-template:

if / else - [ngIf] [ngIfElse]

Style Binding - dynamic styling (can specify in component or template)

Class Binding - way to add or remove classes for styling - https://angular.io/guide/attribute-binding#class-binding

- can also set multiple classes with ngClass

Services - special components that are reusable throughout the app ("generate service"):
`ng g s service-name`

Angular HTTP Client - used to connect with APIs (thru http service)

Directives - apply app logic in templates

- Components are also considered directives (@Component is a decorator function that specifies the Angular metadata for the component)
- Structural directives shape or reshape the DOM's structure, by adding, removing, and manipulating elements (create and destroy DOM elements).
- Attribute directives apply conditional style to elements, show or hide elements or dynamically change the behavior of a component according to a changing property

- \*ngFor - loop (add, remove, manipulate DOM elements - useful for lists)
- \*ngIf - if statement (conditional rendering)
- RouterLink - when applied to an element in a template, makes that element a link that initiates navigation to a route.
- ngClass - used to add class(es)

- ngOnInit() {} - lifecycle hook aka componentDidMount

Passing data to a child

Passing data to a parent

- @Input() - decorator used to get data / state from parent to child
- @Output()
- @EventEmitter() / notify.emit()
- import { Input } from '@angular/core';
- import { Output, EventEmitter } from '@angular/core';

Pipes - ways to transform data in template (format strings, currency amounts, dates and other display data) - https://angular.io/guide/pipes

https://coursetro.com/posts/code/174/Angular-8-Tutorial-&-Crash-Course
https://angular.io/api

Display child components by placing the selector in parent's template --> `<app-child></app-child>`

Interface - can be used as a data type model (type checking and dev errors)
