const home = () => {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const heading = document.createElement('h1');
    heading.innerText = 'Ditch the Ordinary, Discover Wines Close to Home';

    const lineBreak = document.createElement('p');
    lineBreak.innerHTML = '&nbsp';

    const homepageInfo = document.createElement('p');
    homepageInfo.innerHTML = `<p>Welcome to Lucas, your neighborhood wine shop. Inspired by the cozy ambiance of French and Spanish wine bars, we offer a curated selection of wines from both regions.</p>
    <p>&nbsp</p>
    <p>Forget the same old routine - explore a world-class collection right here in your neighborhood. We've chosen these authentic wines to elevate your everyday and take your taste buds on a European adventure.</p>
    `;

    mainContent.appendChild(heading);
    mainContent.appendChild(homepageInfo);
    content.appendChild(mainContent);
}

export default home;