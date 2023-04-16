# MdmfStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

<hr>

## Step 1: Using WorkSpaces
Create application without starting point 
`ng new mdmf-starter --create-application=false`

## Step 2: Add Projects To WorkSpace
Create Applications/Projects as independent workable/lanuchable applications
 - `ng g application app_home`
 - `ng g application app_restaurants`
 - `ng g application app_orders`

Create a library that is used to share the common methods to the aobve projects
`ng g library lib-utils`

## Reference:

* [How to Build a Micro Frontend with Webpack's Module Federation Plugin](https://www.bitovi.com/blog/how-to-build-a-micro-frontend-architecture-with-angular)
* [Optimizing Your Workflow with Multiple Projects in Angular](https://www.danywalls.com/optimizing-your-workflow-with-multiple-projects-in-angular)
* Video: [Angular multiple apps in on project](https://www.youtube.com/watch?v=VwnY-ULU4dM)



