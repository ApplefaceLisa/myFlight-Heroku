# MEAN stack flights SPA

MEAN stack course final project.

## mongodb database:
- database name: myFlightsDB
- collections name:
  - Carriers
  - Routes
  - flightDetails

### Database operation
#### export / import
- data stored under ./flights_data/db_exported
- collections exported using command
```
mongoexport /db:myFlightsDB /collection:Carriers /out:Carriers.json
mongoexport /db:myFlightsDB /collection:Routes /out:Routes.json
mongoexport /db:myFlightsDB /collection:flightDetails /out:flightDetails.json
```

- database importing before running code
```
mongoimport /db:myFlightsDB /collection:Carriers /file:Carriers.json
mongoimport /db:myFlightsDB /collection:Routes /file:Routes.json
mongoimport /db:myFlightsDB /collection:flightDetails /file:flightDetails.json
```

- more info:
```
mongoimport --help
mongoexport --help
```

#### dump / restore
- data stored under ./flights_data/db_dumped
- database dumped using command
```
mongodump /db:myFlightsDB /out:db_dumped
```

- database restoring before running code
  - `cmd1 > mongod --dbpath \Users\Public\data\db`
  - `cmd2 > mongo`
  - `cmd3 > mongorestore /drop /db:myFlightsDB <parent_path>/myFlightsDB`
    - parent_path means the parent path of folder myFlightsDB where stored
      the dumped files(.bson, .metadata).

- more info:
```
mongodump --help
mongorestore --help
```"# myFlight-toHeroku" 
