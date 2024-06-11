import { LoyaltyUser } from './enums'
import { Price, Country } from './types'

//review interface specifying types for name, stars, loyaltyUser and date
export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string;   
}

//property interface specifying types for properties
export interface Property {
    image: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country
    }
    contact: [ number, string];
    isAvailable: boolean;
}
