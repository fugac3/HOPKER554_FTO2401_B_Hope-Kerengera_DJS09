const reviewTotalDisplay = document.querySelector('#reviews')
const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')
import { LoyaltyUser, Permissions } from './enums'
import { Review } from './interfaces'

//function to show total number of reviews
export function showReviewTotal(value: number, reviewer: string, isLoyalty: LoyaltyUser) {
    const iconDisplay = LoyaltyUser.GOLD_USER ? '⭐' : ''
    reviewTotalDisplay!.innerHTML = value.toString() + ' review' + makeMultiple(value) + ' | last reviewed by ' + reviewer + ' ' + iconDisplay    
}

//function to welcome user or welcome them back
export function populateUser(isReturning : boolean, userName: string ) {
    if (isReturning){
        returningUserDisplay!.innerHTML = 'back'
    }
    userNameDisplay!.innerHTML = userName
}

//function to show price
export function showDetails(value: boolean | Permissions, element : HTMLDivElement, price: number) {
    if (value) {
        const priceDisplay = document.createElement('div')
        priceDisplay.innerHTML = price.toString() + '/night'
        element.appendChild(priceDisplay)
    }
}

//function for adding "s" after Review if multiple reviews
export function makeMultiple(value: number) : string {
    if (value > 1 || value == 0) {
        return 's'
    } else return ''
}
//function to return top two reviews
export function getTopTwoReviews(reviews : Review[]) : Review[]  {
 const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
 return sortedReviews.slice(0,2)
}