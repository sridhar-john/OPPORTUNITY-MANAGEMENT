// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  client_id: '447243278135-une39aofm0e0f5luu9vubl53h02om6hm.apps.googleusercontent.com',
  cookiepolicy: 'single_host_origin',
  scope: 'profile email',
  BASE_URL:"http://localhost:8080/opportunity/",
  src :"https://apis.google.com/js/platform.js?onload=googleSDKLoaded"
};



/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
