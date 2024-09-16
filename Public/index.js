// console.log($);


function restart(){
    $('#list').empty()
    $.get('/todo',(data)=>{
        console.log(data);

        for(let i of data){
            $('#list').append(`<li>${i}</li>`)
        }
    })
}
restart()

$('#btn').on('click',()=>{
    
    let data = $('#input').val()
    console.log(data,'dttttaaa');
    $.post('/todo',{data},(res)=>{
        console.log(res,'yhi h bhaii');
        
    
    })
    restart()
    $('#input').val('')
    
})

