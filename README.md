# Find a Doctor 

An app that pinpoints a doctor's location on the map.

Live site: https://skmanik.github.io/find-dr

## Instructions

* Enter a doctor's name into the search bar. Format the name `First Middle Last`. (A valid example: `Stephen Smith` or `Stephen H Smith`). 
* Click the `Submit` button.
* View the map. In a moment the pinpoint will recenter on the doctor's location.

## Implementation

* `Axios` and `Open Payments Data API` to retrieve information about doctor, including address
* `Google Maps API` and `Google Maps React` package to display location data on the map via pinpoint
* `React.js` to build and render UI: Search bar, Map container, banner, etc 

## Running

```bash
$ cd find-dr
$ npm install
$ yarn start
```

## Data Sets & Dependencies

* [Open Payments Data API](https://dev.socrata.com/foundry/openpaymentsdata.cms.gov/a3k9-9uq3)
* [React.js](https://reactjs.org/)
* [Axios](https://www.npmjs.com/package/axios)
* [Google Maps React](https://github.com/fullstackreact/google-maps-react)
* [Google Maps API](https://developers.google.com/maps/documentation/javascript/tutorial)