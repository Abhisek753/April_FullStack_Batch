const carousalImages=["https://img.magnific.com/free-vector/online-cinema-banner-with-open-clapper-board-film-strip_1419-2242.jpg","https://cdn.dribbble.com/userupload/7252257/file/original-2b59b6e3d487636b28446d723a776566.jpg?resize=752x&vertical=center","https://chennaivision.com/tamil-movies/wp-content/uploads/2021/08/cv1.jpg"];


const carousalContainer=document.getElementById("carousal-container");

function initCarousal(){
    console.log("my carousal");
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
initCarousal()