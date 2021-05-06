export const Business = (businessObject) => {
    return `
    <section class="business">
        <h3 class="business__name">${businessObject.companyName}</h3>
        <div class="business"business__address">${businessObject.addressFullStreet}</div>
        <div class="business"business__address">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
        <hr>
    </section>
    `
}