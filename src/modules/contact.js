const contact = () => {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const heading = document.createElement('h1');
    heading.innerText = 'Contact';

    const contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = `
        <h2>Hours</h2>
        <div class="space-between">
            <ul>
                <li>Monday - Friday</li>
                <li>Saturday</li>
                <li>Sunday</li>
            </ul>
            <ul>
                <li>12pm - 10pm</li>
                <li>11am - 12am</li>
                <li>Closed</li>
            </ul>
        </div>
        <h2>Address</h2>
        <p>123 Main St.</p>
        <p>Anytown, Anystate 12345</p>
        <h2>Phone</h2>
        <p>555-555-5555</p>
    `;

    mainContent.appendChild(heading);
    mainContent.appendChild(contactInfo);
    content.appendChild(mainContent);
}

export default contact;