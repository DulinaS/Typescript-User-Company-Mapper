/// <reference types="@types/google.maps" />
import { Company } from "./Company";
import { User } from "./user"; 

import { CustomMap } from "./CustomMap";

/* //index.html points index.ts as the entry point
//This will convert User.ts to User.js
const user = new User();
const company = new Company();
console.log(user);
console.log(company); */

//This will create a customMap object
const customMap = new CustomMap('map');


//Create a new user object
const user = new User();

//Create a new company object
const company = new Company();

//Add the user marker to the map
customMap.addMarker(user);
//Add the company marker to the map
customMap.addMarker(company);


