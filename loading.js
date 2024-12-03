let loading_website= document.querySelector('.loading-website');

document.body.classList.add('overflow');
window.addEventListener('load', function() {
    
    let pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log("Page loaded in: " + pageLoadTime + "ms");
    
    // Hide the loading screen after the page is fully loaded
    document.body.classList.remove('overflow')
    loading_website.style=`opacity:0; visibility:hidden`;
});
