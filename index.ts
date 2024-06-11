
import { showReviewTotal, populateUser, showDetails, getTopTwoReviews} from './utils'
import { Permissions , LoyaltyUser } from './enums'
import { Review, Property } from './interfaces'
import MainProperty from './classes' 
const propertyContainer = document.querySelector('.properties')
const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')
const footer = document.querySelector('.footer')

let isLoggedIn: boolean

//array of customers and their reviews (in format of Review interface)
const reviews: Review[] = [
    {
        name: 'Sheila',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
    },
]

const you = {
    firstName: 'Hope',
    lastName: 'Kerengera',
    permissions: Permissions.ADMIN,
    isReturning: true,
    age: 21,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}

//array of property objects (in format of Property interface) with details of property
const properties : Property[] = [ 
    {
        image: 'images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+112343823978921, 'marywinkle@gmail.com'],
        isAvailable: true  
    },
    {
        image: 'images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 30,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+1298239028490830, 'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        image: 'images/london-property.jpg',
        title: 'London Flat',
        price: 25,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553, 'andyluger@aol.com'],
        isAvailable: true
    },
    {
        image: 'images/paris.png',
        title: 'French Cottage',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Paris',
            code: 45334,
            country: 'France'
        },
        contact: [ +27349822083, 'robby@gmail.com'],
        isAvailable: false
    }
]


showReviewTotal(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

populateUser(you.isReturning, you.firstName)

//for loop to create card
for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].image)
    card.appendChild(image)
    showDetails(you.permissions, card, properties[i].price)
    propertyContainer!.appendChild(card)
}

let count = 0

//displays top two reviews
function addReviews(array : Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer!.appendChild(card)
        }
        container!.removeChild(button!) 
    }
}

button!.addEventListener('click', () => addReviews(reviews))

let currentLocation : [string, string, number] = ['Cape Town', '11.03', 17]
footer!.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

//create main property to be displayed
let yourMainProperty = new MainProperty(
    'images/italian-property.jpg', 
    'Italian House',
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }] )

//display main property
const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
mainImageContainer!.appendChild(image)