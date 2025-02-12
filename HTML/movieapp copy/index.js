const moviesList =[]
const baseURL= 'https://masai-movie-app-default-rtdb.firebaseio.com/'
const parentDiv = document.getElementById('main')


async function fetchData(){


      try{
         const response = await fetch(`${baseURL}/movies.json`)
        const data=  await response.json()
        console.log(data)
        displayMovies(data)
        pagination(data)
      }catch(error){
        console.log('Error',error)
      }
}


fetchData()

function displayMovies(data){
  const URL='https://images.pexels.com/photos/2346001/pexels-photo-2346001.jpeg?auto=compress&cs=tinysrgb&w=800';
  data.forEach(element => {
      const {title,genre,release_date
          ,rating, thumbnail_url}= element

   const childDiv = document.createElement('div')
   childDiv.className='child'
   childDiv.innerHTML=`
     <div class='img' ><img src="${URL}"></div>
    <div class='title'><p onclick='modal("${element.id-1}")'style="font-weight: bold;">${title}</p></div>
    <p>${genre}</p>
    <p>${release_date}</p>
    <p>${rating}</p>
   `
   parentDiv.appendChild(childDiv)
  });

}

// async function modal(ele){
//     console.log(ele)
//     document.querySelectorAll('.child').forEach(child => child.style.display = 'none')
//     const modalDiv=document.createElement('div')
//     try{
//     const response = await fetch(`${baseURL}/movies/${ele}.json`)
//        const data=  await response.json()
//        console.log(data)
//         const {title,genre,release_date
//             ,rating, thumbnail_url,director,duration}= data
//         modalDiv.innerHTML=`
//         <div class='img' ><img src='${thumbnail_url}'></div>
//         <div class='title'><p style="font-weight: bold;">${title}</p></div>
//         <p>${genre}</p>
//         <p>${release_date}</p>
//          <p>${director}</p>
//          <p>${duration}</
//         <p>${rating}</p>`
//        ;
      
//       main.appendChild(modalDiv)
//      }catch(error){
//        console.log('Error',error)
//      }

  
// }

async function modal(ele) {
  console.log(ele);
  //document.querySelectorAll('.child').forEach(child => child.style.display = 'none');
  const modalDiv = document.createElement('div');
  modalDiv.className = 'modal fade';
  modalDiv.id = 'exampleModal';
  modalDiv.tabIndex = -1;
  modalDiv.role = 'dialog';
  modalDiv.setAttribute('aria-labelledby', 'exampleModalLabel');
  modalDiv.setAttribute('aria-hidden', 'true');

  try {
    
      const response = await fetch(`${baseURL}/movies/${ele}.json`);
      const data = await response.json();
      console.log(data);
      const { title, genre, release_date, rating, thumbnail_url, director, duration } = data;
      modalDiv.innerHTML = `
          <div class="modal-dialog" role="document">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      <div class='img'><img src='${url}' alt='${title}' class='img-fluid'></div>
                      <p><strong>Genre:</strong> ${genre}</p>
                      <p><strong>Release Date:</strong> ${release_date}</p>
                      <p><strong>Director:</strong> ${director}</p>
                      <p><strong>Duration:</strong> ${duration}</p>
                      <p><strong>Rating:</strong> ${rating}</p>
                  </div>
                  <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                  </div>
              </div>
          </div>
      `;
      document.body.appendChild(modalDiv);
      $('#exampleModal').modal('show');
  } catch (error) {
      console.log('Error', error);
  }
}


 function search(){
    const input = document.getElementById('search')
    console.log(input.value)
    searchData(input.value)
    
}


async function searchData(val){
    try{
        const response = await fetch(`${baseURL}/movies.json`)
        const data=  await response.json()
        console.log(data)
        const res = data.forEach(element => {
            filter((element)=>{
                console.log(element.title)
                (element.title===val||element.tags.filter((a)=>a===val)||element.genre.filter((a)=>a===val))
                 
            })
        });
        console.log(res)
        
    }catch(error){
      console.log('Error',error)
    }
}


function pagination(data){
  const itemPerPage= 10
  const pageNumbers = document.getElementById('pageNumbers')
  const pages= Math.ceil(data.length/itemPerPage)
  console.log(pages)
  const pageDiv = document.getElementById('pageNumbers')
  for(let i=1;i<=pages;i++){
   const btn = document.createElement('button')
   btn.className='pageBtn'
   btn.textContent=`${i}`
   pageNumbers.append(btn)
  }

}

function click(num){
   
}