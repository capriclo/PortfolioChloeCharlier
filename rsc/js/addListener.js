document.addEventListener("DOMContentLoaded", () => {
    const movingTimelineElt = document.getElementById('moving-timeline');
    const navbarTogglerElt = document.getElementById('navbar_toggler');
    const navbarContainerElt = document.getElementById('navbar_container');
    const navLinkElts = document.getElementsByClassName('nav-link');
    const navbarLogoContainerElt = document.getElementById('navbar-logo');
    const navbarLogoElt = document.querySelector('#navbar-logo .logo');
    const navbarTextElt = document.querySelector('#navbar-logo .text');
    const introductionSectionElt = document.getElementById('introduction');
    const portfolioLinkElt = document.getElementById('portfolio-link');

    if(window.innerWidth <= 750 && movingTimelineElt !== null) {
        movingTimelineElt.classList.remove('timeline-inverted');
    }

    window.addEventListener('resize', function(e) {
        if(movingTimelineElt !== null) {
            if(window.innerWidth <= 750) {
                movingTimelineElt.classList.remove('timeline-inverted');
            } else {
                movingTimelineElt.classList.add('timeline-inverted');
            }
        }
    });

    if(navbarTogglerElt !== null && navbarContainerElt !== null && navbarLogoElt !== null && navbarTextElt !== null) {
        navbarTogglerElt.addEventListener('click', function(e) {
            console.log("click");
            if(navbarContainerElt.classList.contains('opened')) {
                navbarContainerElt.classList.remove('opened');
                navbarLogoElt.classList.remove('d-none');
                navbarTextElt.classList.add('d-none');
            } else {
                navbarContainerElt.classList.add('opened');
                navbarLogoElt.classList.add('d-none');
                navbarTextElt.classList.remove('d-none');
            }
        });
    }

    if(navLinkElts.length > 0 && navbarTogglerElt !== null && navbarContainerElt !== null && navbarLogoElt !== null && navbarTextElt !== null) {
        for (let i = 0; i < navLinkElts.length; ++i) {
            const navLinkElt = navLinkElts[i];
            navLinkElt.addEventListener('click', function(e) {
                const targetId = navLinkElt.dataset.target;
                const targetElt = document.getElementById(targetId);

                if(targetElt !== null) {
                    scrollToTarget(targetElt);
                }

                if(navbarContainerElt.classList.contains('opened')) {
                    navbarContainerElt.classList.remove('opened');
                    navbarLogoElt.classList.remove('d-none');
                    navbarTextElt.classList.add('d-none');
                }
            });
        }
    }

    if(navbarLogoContainerElt !== null && introductionSectionElt !== null) {
        navbarLogoContainerElt.addEventListener('click', function(e) {
            scrollToTarget(introductionSectionElt);
        });
    }

    if(portfolioLinkElt !== null) {
        portfolioLinkElt.addEventListener('click', function(e) {
            const targetId = portfolioLinkElt.dataset.target;
            const targetElt = document.getElementById(targetId);

            if(targetElt !== null) {
                scrollToTarget(targetElt);
            }
        });
    }

    /**
     *
     * @param {Element} element 
     */
    function scrollToTarget(element) {    
        const header = document.querySelector('header');        
        if(header !== null) {            
            const offset = header.offsetHeight;                        
            window.scroll({
                left: 0,                 
                top: element.offsetTop - offset,                
                behavior: 'smooth'            
            })        
        }    
    }
});