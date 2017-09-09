### The Hot Take API

| Route | Parameters |
| ----- | ---------- |
| GET/safety | ZIP code (#), safety score (0-5) |
| GET/infection | ZIP code, infection score (0-5)|
| GET/prevention | ZIP code, prevention score (0-5) |
| GET/immunization | State (**), immunization rate (0-100%) |
| GET/performance | ZIP code, performance score (0-100%) |
| GET/ratings | ZIP code, patient rating (0-5) |



### Usage

Send queries as JSON or www-form-urlencoded only.



### Contributors

The raw data found in this API was sanitized by Jinia Sarkar and Minh-Tam Tran Le at MedHacks 2017.