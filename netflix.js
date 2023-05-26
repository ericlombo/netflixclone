const parentlist = document.querySelector('.parentlist')
parentlist.addEventListener('click', function(e){
    if (e.target.tagName=== 'LI'){
        const inside=e.target.querySelector('.inside')
        inside.classList.toggle("hidden")
    }

})