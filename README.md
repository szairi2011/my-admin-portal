# MyAdminPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

NB:
A number of start up scripts have been created for convenience:

1. `npm run dev` to start the json-server database, and bootstrap the Angular application in parallel.
2. `npm run generate` to generate a fake database for a convenient development experience

## How to set up NgRx and scaffold the store
1. Install the npm packages:
  a. 
      `npm install @ngrx/store --save`
      `npm install @ngrx/effects --save`
      `npm install @ngrx/router-store --save`
      `npm install @ngrx/store-devtools --save`
      `npm install @ngrx/entity --save`
    
    We could also install above packages in a single command:
      `npm install @ngrx/{store, effects, router-store, store-devtools, entity} --save`

      `npm install @ngrx/schematics --save-dev` NB: Make sure to save schematics as a dev dependency
     
  b. Set the ngrx schematics:
  To use @ngrx/schematics as the default collection in our Angular CLI project, we can add it to our angular.json:
      `ng config cli.defaultCollection @ngrx/schematics`

  c. Create the app store:
  We first create the root level store as a central location for all feature reducers later:
  Note: We may include --dry-run flag to be in the safe side first
      `ng generate store store --module=app.module.ts --root=true --state-path=store --state-interface=AppState`

      

