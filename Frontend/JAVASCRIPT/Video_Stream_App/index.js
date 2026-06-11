const carousalImages=["https://img.magnific.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg","https://cdn.dribbble.com/userupload/7252257/file/original-2b59b6e3d487636b28446d723a776566.jpg?resize=752x&vertical=center","https://chennaivision.com/tamil-movies/wp-content/uploads/2021/08/cv1.jpg"];


const carousalContainer=document.getElementById("carousal-container");
let currentSlide=0;
let allMovies=[];
const moviesContainer=document.getElementById("movies-container");


async function getMoviesData(){
 try{
     const response=await fetch("http://localhost:3000/movies");
     allMovies=await response.json();
     displayMovies(allMovies) ;    
 }catch(err){
  console.log(err)
 }
}


function displayMovies(movies=allMovies){

if(!moviesContainer){
  console.log("Movies container is missing");
  return;
}
if(!movies || movies.length==0){
  moviesContainer.innerHTML="<p>No movies found</p>"
}
movies.forEach((movie=>{
 
  const card=document.createElement("div");
  card.className="movie-card";
  card.innerHTML=`
  <div class="movie-poster">
  <img src=${movie.poster} alt=${movie.title} class="movie-poster-img">
  </div>
   <div class="movie-info">
     <div class="movie-title">${movie.title}</div>
       <div class="movie-year">${movie.year}</div>
         <div class="movie-category">${movie.Category}</div>
         <div class="movie-rating">${movie.rating}⭐</div>
         <div class="movie-buttons">
         <button class="btn btn-cart">🛒Cart
         </button>
          <button class="btn btn-favourite">❤️Favourite
         </button>
         </div>
  </div>
  
  `
  moviesContainer.appendChild(card);
}))

}







function initCarousal(){
    carousalImages.forEach((imageUrl,index)=>{
      const slide=document.createElement("div");
      slide.className="carousal-slide"
      if(index==0){
        slide.classList.add("active");
      }

      const img=document.createElement("img");
      img.className="carousal-image"
      img.src=imageUrl;
      slide.appendChild(img);
      carousalContainer.appendChild(slide);
    })
}

function updateCarousal(){
    const slides=document.querySelectorAll(".carousal-slide");
   
    slides.forEach((slide,index)=>{
      
        if(index===currentSlide){
        
            slide.classList.add("active");
        }else{
          slide.classList.remove("active");
        }
    })
}

function autoNext(){
   currentSlide=(currentSlide+1)%carousalImages.length;
   updateCarousal()
}

function changeSlide(direction){

 currentSlide=(currentSlide+direction+carousalImages.length)%carousalImages.length;

 updateCarousal();

}
getMoviesData()
initCarousal()
setInterval(autoNext,2000);