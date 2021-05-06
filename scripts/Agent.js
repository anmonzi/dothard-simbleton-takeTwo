export const Agent = (agentObject) => {
    return `
    <section class="agent">
        <h3 class="agent__name">${agentObject.fullName}</h3>
        <div class="agent__company">${agentObject.companyName}</div>
        <div class="agent__phoneNumber">${agentObject.phoneNumber}</div>
        <hr>
    </section>
    `
}