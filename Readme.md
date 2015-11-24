# Continuous Demonstration

This is an example app to show how you can use continuous demonstration.

This app uses the npm module [demonstrator](https://www.npmjs.com/package/demonstrator) to record a [browser-monkey](https://www.npmjs.com/package/browser-monkey) session. It then saves it to the continuous demonstration server.

This is currently highly experimental.

# Try it
However you can run it by cloning this repo.

* `npm install`
* running `DEMONSTRATOR_API_KEY=test DEMONSTRATOR_USER=dereke DEMONRATOR_APP=demo karma start`
* visit the [results page](https://continuous-demo.herokuapp.com/api/dereke/demo/recent)

# Known issues

* You need to switch to the debug tab in karma for xhr requests to be processed
* Only one test in the suite will run at a time (so one is marked as only)
* The continuous demonstration server currentl only displays raw data
