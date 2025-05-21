//We need to randomly generate a user with a name and location
//We will use the faker library to generate a random name and location

import { faker } from '@faker-js/faker';
//We will use the faker library to generate a random name and location

export class User{
  name: string;
  location:{
    lat: number; // latitude
    lng: number; // longitude
  };
  constructor(){
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}