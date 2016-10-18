# servicesHub - Handle SMS through TWILIO

This is a micro service to send a SMS through TWILIO's API


## Create an account on TWILIO

You have first to create an account on Twilio and create a phone number.

Then, get the phone number, the account SID and auth token.


## Send a SMS

```
curl -i -X POST \
  -d "accountSid=..." \
  -d "authToken=..." \
  -d "from=+..." \
  -d "to=+..." \
  -d "body=..." \
  -d "async=[true|false]" \
  "http://serviceshub1.bacto.net:9093/send"
```

Notes:

- Numbers "from" and "to" are international numbers format, ie. +33xxxxxxxxx for a french number.

- If you set async to true, the micro service will not wait for SMS to be sent. It's fast but you will not notice if there is an error.
