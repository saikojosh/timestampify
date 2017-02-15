# timestampify
Converts a JavaScript date into a timestamp.

## Basic Usage
By default a UTC timestamp in milliseconds is returned when a JavaScript data is passed in.

```javascript
const timestampify = require('timestampify');
const myJavaScriptDate = new Date();

timestampify(myJavaScriptDate);  // 1487162378729 <-- This is in UTC
```

## Convert to a Timezone
To get a timestamp in a given timezone, pass a timezone identifier as the second parameter. Any identifer that [Moment.js Timezone](http://momentjs.com/timezone/) accepts will work.

```javascript
const timestampify = require('timestampify');
const myJavaScriptDate = new Date();

timestampify(myJavaScriptDate, 'Europe/Paris');  // 1487162394017
timestampify(myJavaScriptDate, 'Europe/London');  // 1487162398214
```

## Get a Unix Timestamp (in seconds)
To get a timestamp in the UNIX format (i.e. in seconds, not milliseconds) pass in `true` as the third parameter.

```javascript
const timestampify = require('timestampify');
const myJavaScriptDate = new Date();

timestampify(myJavaScriptDate, null, true);  // 1487162867 <-- This is a UNIX timestamp in UTC
```
