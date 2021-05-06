import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"

const contentTarget = document.querySelector(".businessList--manufacturing")



const findManufacturingBusinesses = (businessObject) => {
    if (businessObject.companyIndustry === "Manufacturing") {
        return true
    }
    return false
}


export const ManufacturingBusinesses = () => {
    const businesses = getBusinesses()
    contentTarget.innerHTML = "<h1>-Manufacturing Businesses-</h1>"

    const filteredBusinesses = businesses.filter( findManufacturingBusinesses )

    filteredBusinesses.forEach(business => {
        contentTarget.innerHTML += Business(business)
    })
}


