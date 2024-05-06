// Imports
import './styles/index.css';
import home from './modules/home';
import menu from './modules/menu';
import contact from './modules/contact';
import clearPage from './modules/clearPage';

// Get buttons
const buttons = document.querySelectorAll('button');

home();

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        switch (button.id) {
            case 'home-btn':
                clearPage();
                home();
                break;
            case 'menu-btn':
                clearPage();
                menu();
                break;
            case 'contact-btn':
                clearPage();
                contact();
                break;
        }
    });
});
