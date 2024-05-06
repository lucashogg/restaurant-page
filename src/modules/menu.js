const menu = () => {
    const content = document.querySelector('#content');

    const mainContent = document.createElement('div');
    mainContent.classList.add('main-content');

    const heading = document.createElement('h1');
    heading.innerText = 'Menu';

    const wineContent = document.createElement('div');
    wineContent.classList.add('wine-content');
    wineContent.innerHTML = `
        <h2>Rosé</h2>
        <div class="prices">
            <ul>
                <li>House</li>
                <li>Fancy</li>
            </ul>
            <ul>
                <li>$9</li>
                <li>$11</li>
            </ul>
        </div>
        <h2>White</h2>
        <div class="prices">
            <ul>
                <li>House</li>
                <li>Fancy</li>
            </ul>
            <ul>
                <li>$10</li>
                <li>$12</li>
            </ul>
        </div>
        <h2>Red</h2>
        <div class="prices">
            <ul>
                <li>House</li>
                <li>Fancy</li>
            </ul>
            <ul>
                <li>$11</li>
                <li>$13</li>
            </ul>
        </div>
    `;

    mainContent.appendChild(heading);
    mainContent.appendChild(wineContent);
    content.appendChild(mainContent);
}

export default menu;