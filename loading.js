let loading_website= document.querySelector('.loading-website');

window.addEventListener('load', function() {
    
    let pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    console.log("Page loaded in: " + pageLoadTime + "ms");
    
    // Hide the loading screen after the page is fully loaded
    document.body.style=`overflow-y:scroll`  
    loading_website.style=`opacity:0; visibility:hidden`;
});
