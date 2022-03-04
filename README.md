# Truepill PDF Generation Service

This is a service for generating PDFs from either markup or by visiting a URL. Its based upon Node, Express, Alpine, and Puppeteer.

## How to run

Please be sure to have docker and docker compose installed

- Clone repo
- run `docker-compose build`
- run `docker-compose run` to run the container. This will start it in dev mode so code changes are actively applied.

## Paths

- post `/api/pdf/html` `{html: '<html here>'}` 
- post `/api/pdf/url` `{url: '<valid url here>'}` 

## Current state

convert html or a url into a pdf.

## Future state

Add auth key option to generation though url (for security reasonse)

Add middleware/database to add in authkey functionality. To prevent any external users from using the service.

Add in options functionality to change window size/shape, or other factors related to displaying