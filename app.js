let idNum=0
let movList=[]

$('#formInfo').on('click', function(e){
    e.preventDefault();
    let title = $('.title').val();
    let rating = $('.rating').val();
    let movieObj = {title, rating, idNum};
    let addMovieHtml= createHtml(movieObj);
    idNum++
    movList.push(movieObj)
    $('tbody').append(addMovieHtml)
    $('.title').val('')
    $('.rating').val('')
})


function createHtml(movieObj){
    return `
    <tr>
    <td>${movieObj.title}</td>
    <td>${movieObj.rating}</td>
    <td>
      <button class="btn btn-danger" data-delete-id=${data.currentId}>
        Delete
      </button>
    </td>
  <tr>
`;
}



// e.preventDefault();
// let title = $('.title').val();
// let rating = $('.rating').val();
// $('thead').append('<tr class="newMovie"></tr>');
// $('.newMovie').append('<td class="t"></td');
// $('.newMovie').append('<td class="r"></td');
// $('.newMovie').append('<td class="b"></td')
// $('.t').text(`${title}`);
// $('.r').text(`${rating}`);
// $('.b').append('<button>Delete</button>');
// $('.b').on('click', function(){
//     $('.newMovie').remove();
// $('.title').val('')
// $('.rating').val('')
// })