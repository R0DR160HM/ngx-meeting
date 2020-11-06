# NgxMeeting

A simple lib to create embed meeting with Jitsi iFrame API (https://jitsi.github.io/handbook/docs/dev-guide/dev-guide-iframe)

# Instalation

To install use `npm i ngx-meeting`

# Getting Started

To start, import the `NgxMeetingModule` and than, in your template declare the NgxMeetingComponent passing your meeting url in the domain @Input() (if you dont have your own domain, you can use "meet.jit.si"):
`
<ngx-meeting domain="<your_domain || meet.jit.si>/<random_stuff_that_you_want>"><ngx-meeting>
`

<!-- This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.14.

## Code scaffolding

Run `ng generate component component-name --project ngx-meeting` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-meeting`.
> Note: Don't forget to add `--project ngx-meeting` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-meeting` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-meeting`, go to the dist folder `cd dist/ngx-meeting` and run `npm publish`.

## Running unit tests

Run `ng test ngx-meeting` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md). -->
