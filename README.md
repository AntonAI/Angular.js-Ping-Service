# Angular.js-Ping
An Angular.js module that pings a specified URL or IP using an HTTP GET request.

## Installation
- Copy pingService.js to your project's JavaScript directory.
- Add a dependency for the 'pingService' module to your app.
- Inject the 'ping' service into your controller(s).

## Usage
From your controller(s):
```bash
ping.ping(testURL, function(response) {
  if (response > 0) {
    // Ping successful
  } else {
    // Ping failed
  }
});
```
If ping was successful, callback will return the time in took to reach the testURL in seconds (ex. 3.24). If ping failed, callback will return 0.
