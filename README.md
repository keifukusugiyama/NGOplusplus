# NGO++
NGO plus plus is a website for Non-Profit Organizations to post and co-sponsor events with other organizations. This was done as a group project for final presentation. 

## Technologies used:
- JavaScript
- Express
- Angular
- Node JS
- HTML
- CSS
- Bootstrap
- MongoDB
- mongoose
- Google maps API
- GitHub
- Amazon Web Services EC2
- Postman API
- modularization

## Features:
- Searchable list of events
![main page top](Screenshots/main1.jpg)
- Searchable list of Organizations
![main page bottom](Screenshots/main2.jpg)
- User registration and login
- Form verificaction and encrypted password
![login registration](Screenshots/LoginReg.jpg)
- Register organization
![Register Organization page 1](Screenshots/RegisterOrg1.jpg)
![Register Organization page 2](Screenshots/RegisterOrg2.jpg)
![Register Organization page 3](Screenshots/RegisterOrg3.jpg)
- View organization details with list of events
![Organization details](Screenshots/OrgDetails.jpg)
- Add admins for organization
- Create event 
![Create event 1](Screenshots/CreateEvent1.jpg)
![Create event 2](Screenshots/CreateEvent2.jpg)
- Post messages on events 
- Co-sponsor event
- View event location on google maps
![Event details](Screenshots/EventDetails.jpg)
- User level verification on multiple functionalities
    - Add new organization (logged in)
    - Join as admin (logged in)
    - Edit organization details (organization admin)
    - Add new event (organization admin)
    - Co-sponsor event (organization admin)
    - Post message on event (logged in) 


## Database:
- User 
- Organization (one to many with user as admin)
- Event (many to many with organization as hosts, one to many with message)
- Message (many to one with user as authors)