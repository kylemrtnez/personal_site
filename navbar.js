'use strict';

class NavBar extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = 
            `<nav class="main-nav">
                <ul>
                    <li class='left'><a href="https://www.kylemartinez.dev">kylemartinez.dev</a> </li>
                    <li class='right'><a href="https://www.kylemartinez.dev/about.html">About</a></li>
                    <li class='right'><a href="mailto:kyle.martinez.043@gmail.com">Contact</a></li>
                    <li class='right'><a href="https://www.kylemartinez.dev">Portfolio</a></li>
                    <li class='right end-nav'><a href="https://www.linkedin.com/in/kylemartinez/">LinkedIn</a></li>
                    <li class="dropdown-content"><a href="https://www.kylemartinez.dev/about.html">About</a></li>
                    <li class="dropdown-content"><a href="mailto:kyle.martinez.043@gmail.com">Contact</a></li>
                    <li class="dropdown-content"><a href="https://kylemartinez.dev">Portfolio</a></li>
                    <li class="dropdown-content"><a href="https://www.linkedin.com/in/kylemartinez/">LinkedIn</a></li>
                    <div class="dropdown mobile-nav">
                        <button class='hamburger'><i class="fas fa-bars fa-2x"></i></button>
                    </div>
                </ul>
            </nav>` 
    };
}

customElements.define('nav-bar', NavBar);