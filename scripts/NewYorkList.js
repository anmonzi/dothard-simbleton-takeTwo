import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"

const contentTarget = document.querySelector(".businessList--newYork")



const findNewYorkBusinesses = (businessObject) => {
    if (businessObject.addressStateCode === "NY") {
        return true
    }
    return false
}



export const NewYorkBusinesses = () => {
    const businesses = getBusinesses()
    contentTarget.innerHTML = "<h1>-New York Based Businesses-</h1>"

    const filteredBusinesses = businesses.filter( findNewYorkBusinesses )

    filteredBusinesses.forEach(business => {
        contentTarget.innerHTML += Business(business)
    })

}