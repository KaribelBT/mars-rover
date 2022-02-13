## Installing the app

Git clone `https://github.com/KaribelBT/mars-rover.git`.
Run `cd mars-rover`.
Run `npm install`.
Run `ng serve`  for a dev server. 
Navigate to `http://localhost:4200/`.

## Deploy URL

`https://karibelbt.github.io/mars-rover/`


## Requested features

Using Create Angular App or your custom solution (Angular is a must), build an app that:
- Connects to the NASA API (https://api.nasa.gov/)
- Obtains photos from the 'Mars Rover' endpoint
- Allows the user to see the photos of each rover (Curiosity, Opportunity and Spirit)
- The photos list should be paginated showing a max of 25 photos per page (dynamic loading similar to facebook/instagram will be nice, but not required)
- Allows the user to filter the rover photos by camera
- By default it shows the latest photos for current day
- Allows the user to search for photos based on 'Earth Day' date (2020-09-22)
- Allows the user to search for photos based on the 'Sol' date (2890)
- Please use a linter!
- Include a few tests.
- Let the user store search parameters as favorites or bookmarks that can be recalled in the future (Local storage is accepted, any serverless way of storing data is also accepted)

## Missing features

- Tests.
- Not found error when api returns zero results.
- Dynamic length paginator.
- Full responsive design, the app is not entirely responsive.
- Enviroment variables.