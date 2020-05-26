# SpaRoutingSample

The goal of this project is to demonstrate the usage of Single Page Application Hosted on Amazon S3 + Cloudfront.

The Cloudfront is used as Proxy server, and manage the routing for every module.

Every module is represented by a subfolder at the root of the domain.
Each module is deployd in a different S3 bucket, to manage decoupling.

Each module is responsible for is own routing and menu.

A Lambda@Edge must be attached to the cloudfront Origin request, in order to manage "Deep Link" and page refresh to reach the "Controller", index.html

example visible at www.jetlab.org (work in progress)




# Angular Part
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
