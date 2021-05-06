import { Business } from "./Business.js"
import { getBusinesses } from "./database.js"

const contentTarget = document.querySelector(".businessList")
const companySearchArticle = document.querySelector(".foundCompanies")


// Event Listener
document.querySelector("#companySearch").addEventListener(
    "keypress", keypressEvent => {
        if (keypressEvent.key === "Enter") {
            const businesses = getBusinesses()

            const enteredText = keypressEvent.target.value.toLowerCase()

            const foundBusiness = businesses.find(business => business.companyName.toLowerCase().includes(enteredText))

            companySearchArticle.innerHTML = Business(foundBusiness)
        }
    }
)



// Renders Business List
export const BusinessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>-Active Business Partners-</h1>"

    businessArray.forEach(business => {
        contentTarget.innerHTML += Business(business)
    })

}



