import { Agent } from "./Agent.js";
import { getBusinesses } from "./database.js";

const contentTarget = document.querySelector(".agentList")
const agentSearchArticle = document.querySelector(".foundAgents")


// Event Listener
document.querySelector("#agentSearch").addEventListener(
    "keypress", keyPressEvent => {
        if (keyPressEvent.key === "Enter") {
            const businesses = getBusinesses()

            const enteredText = keyPressEvent.target.value.toLowerCase()

            const findAgentsBusiness = businesses.find(business =>
                business.purchasingAgent.nameFirst.toLowerCase().includes(enteredText) ||
                business.purchasingAgent.nameLast.toLowerCase().includes(enteredText))

            const foundAgent = FoundAgent(findAgentsBusiness)

            const agentInfo = Agent(foundAgent)

            agentSearchArticle.innerHTML = agentInfo
        }
    }
)

const FoundAgent = (businessObject) => {
    return {
        fullName: `${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}`,
        companyName: businessObject.companyName,
        phoneNumber: businessObject.phoneWork
    }
}


// Renders Agent List
export const AgentList = () => {
    const businesses = getBusinesses()
    contentTarget.innerHTML = "<h1>-Current Agents-</h1>"

    const onlyAgents = businesses.map(business => {
        return {
            fullName: `${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}`,
            companyName: business.companyName,
            phoneNumber: business.phoneWork
        }
    })

    onlyAgents.forEach(agent => {contentTarget.innerHTML += Agent(agent)})

}
