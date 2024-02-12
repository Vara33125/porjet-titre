const burger = document.querySelector('.burgerMenu')

document.addEventListener('click', (e) => {
        const value = e.target.classList;
        
        if (value === burger) {
            document.querySelector('header').style.height = '200px' ;
        }
} )

