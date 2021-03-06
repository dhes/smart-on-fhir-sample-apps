# Writing to the Fhir Server

This is a simple app that shows how to write (create/update) data to the fhir server.
Please see the code for details.


## Install & Run
Install NodeJS, Go to the app directory and run:
```sh
npm i
npm start
```

You should see something like

    Starting up http-server, serving ./
    Available on:
        http://127.0.0.1:9090
        http://10.23.49.21:9090

You can stop the server if needed using <kbd>Ctrl+C</kbd>.

At this point your Launch URI is http://127.0.0.1:9090/launch.html and your
Redirect URI is http://127.0.0.1:9090. The easiest way to launch the app is to
go to https://launch.smarthealthit.org, paste your launch url at the bottom and
click "Launch". Alternatively, you can just click this link to launch:

http://127.0.0.1:9090/launch.html?launch=eyJhIjoiMSIsImIiOiJzbWFydC0xNTc3NzgwIn0&iss=http%3A%2F%2Flaunch.smarthealthit.org%2Fv%2Fr3%2Ffhir

ADDENDUM DH:

This folder is for updating the "write" project. The older project was based on fhir-client verion ^0.1.11. the latest version is 2.40. 2 was a major rewrite. For more information see: 

    http://docs.smarthealthit.org/client-js/migration
    http://docs.smarthealthit.org/client-js/v2.html
    http://docs.smarthealthit.org/client-js/