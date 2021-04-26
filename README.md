# Departing-Trains

An app that gets the departing times of trains using the MBTA T Network

# Installation

npm install

# Scripts

npm run build
npm test
npm start

# Tech Stack

This app depends on Express, React, React-DOM, and Axios.

# Streaming and API Key

Because the MBTA API generously offers 20 requests per minute and because I was shooting for an MVP, I decided not to stream the data and really needed no API key. So you won't either.

# Departure Times

This App follows best practices https://www.mbta.com/developers/v3-api/best-practices suggested by MBTA. In particular, as suggested, the Arrival Time is used to display the time remaining till arrival rather than the time remaining till departure. I recognize this as being divergent from the prompt. Were this an actual client I would have clarified this. I could easily refactor to always use the departure time (when present).

# Testing

I'm working on learning Enzyme and Jest and hope to have coverage of the critical line soon.
