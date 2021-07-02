document.addEventListener('DOMContentLoaded',function(){
    const field = document.querySelectorAll('.field');
    document.querySelector('.btn').disabled = true;
    field.forEach(function(){
        let counter = 0;
        if(field.item.value.length > 0){
            counter++;
        }
        if(counter == field.length){
            document.querySelector('.btn').disabled = false;
        }
    });
});