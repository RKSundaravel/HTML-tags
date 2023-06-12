const tags=document.querySelectorAll(['data-tab-target'])

tabs.array.forEach(tab => {
    tab.addEventListener('click',()=>{
        const target=document.querySelectorAll(tab.dataset.tabTarget)
        target.classList.add('active')
    })
})