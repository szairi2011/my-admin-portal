# MyAdminPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

NB:
A number of start up scripts have been created for convenience:
1. `npm generate` to create a fake data for the development environment
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
    
    We could also install above packages in a single command like so:
      `npm install @ngrx/{store, effects, router-store, store-devtools, entity} --save`

      `npm install @ngrx/schematics --save-dev` NB: Make sure to save schematics as a dev dependency
     
  b. Set up the ngrx schematics:
    To use @ngrx/schematics as the default collection in our Angular CLI project, we can add it to our angular.json:
      `ng config cli.defaultCollection @ngrx/schematics`

  c. Create the app store:
    We first create the root level store as a central location for all feature reducers later:
      Note: We may include --dry-run flag to be in the safe side first
      `ng generate store store --module=app.module.ts --root=true --state-path=store --state-interface=AppState`

  d. Generate an actions file for a feature state:
    Again we can use ngrx schematics to reduce boilerplate:
      `ng g action store/actions/users/user-task --api=true --skip-tests  --dry-run` 
    NB: 
      - Proceed without a dry run if we are happy with the steps involved ...
      - A project called ngrx-course, in the same folder, can be followed as a learning material. It contains ngrx gists and handy ngrx schematics hints that could be used as a quick startup material  
    
  ====

  d. Generate ngrx feature files in few steps:
  Here is a hint on how we can leverage schematics to scaffold ngrx components quicker, while leveraging the power of ngrx entity:
    1. ng generate entity store/user-task --group --reducers ./index.ts --skip-tests --module ../pages/user/profile/profile.module.ts  --dry-run
    2. ng generate effect store/effects/user-task --module pages/user/profile/profile.module.ts --skip-tests --dry-run
    3. ng generate selector store/selectors/user-task --skip-tests --dry-run

========

4. ng g feature store/features/user-task --group --reducers ../index.ts --module pages/user/profile/profile.module.ts --skip-tests --dry-run

To test your Angular build locally:

## Build your app: ng build --prod
We may need to build a stable release and deploy the app, while switching to a different Git branch to continue improving the app and avoid ops interruptions untill we get a CI ready for this app. For this: 
1. Make sure to check out to master branch first, than merge from any previous branching if needed
2. Build the app usng following command: > ng build for a dev dist. or > ng build --prod for a production distribution
2. Install http-server for serving the app: > npm i -g http-server
3. cd (change directory) into the the build location and run the app by typing command > http-server
4. Open http-server url appending /index.html to it, should look something like this http://127.0.0.1:8080/index.html
