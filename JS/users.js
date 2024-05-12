document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});



    const addUserbutton = document.getElementById('add_user_button')
    addUserbutton.addEventListener('click', ()=>{
        document.querySelector('.add_user_modal').classList.add('show')
        document.querySelector('.add_user_modal_back').classList.remove('dis-none')
    })

    document.querySelector('.add_user_modal_back').addEventListener('click',(e)=>{
        document.querySelector('.add_user_modal').classList.remove('show')
        e.target.classList.add('dis-none')
    })
});