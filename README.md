# Angular.js-Ping
An Angular.js module that pings a specified URL or IP using an HTTP GET request.
## Installation
- Copy pingService.js to your project's JavaScript directory.
- Add a dependency for the 'pingService' module to your project.
- Inject the 'ping' service into your controller(s).
## Usage
ping.ping(testURL, callback(response));

If ping was successful, returns the time in took to reach the resource in seconds (ex. 3.24).
If ping failed, returns 0.
