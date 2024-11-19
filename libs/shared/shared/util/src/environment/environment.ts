import { UNFOOTPRINT_API_KEY_TEST } from './.key';

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  unFootprintApiUri: 'https://api.test.unfootprint.com/graphql',
  unFootprintApiKey: UNFOOTPRINT_API_KEY_TEST,
  unFootprintUri: 'https://test.unfootprint.com/',
  unFootprintAccountId: '1ffb5b0a-7dec-4ef9-a14f-0c1573259bdc',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
