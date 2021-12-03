// write your code here
//challenge 1
//find the menu
//get all ramen
//create images for each ramen

const fetchAllRamens = () => {
    fetch("http://localhost:3000/ramens/")
    .then(resp => resp.json())
    .then(ramens => {
        ramens.forEach(ramen => {
            createMenuImage(ramen);
        });
    });
};

const createMenuImage = (ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image; 
    img.alt = ramen.name; 
    img.id = ramen.id;

    //Event Listener 
    img.addEventListener("click", handleUpdateDetail);

    ramenMenu.append(img);
};


 //challenge 2
 //add event to the main image items
 //grab all ramen details - DOM Elements
 //create a function to update detail
 //add event listener to each menu item
 const ramenMenu = document.getElementById("ramen-menu")
 const ramenDetail = document.getElementById("ramen-detail");
 const ramenName = ramenDetail.querySelector(".name");
 const ramenRestaurant = ramenDetail.querySelector("h3");
 const ramenDetailImage = ramenDetail.querySelector("img");
 const rating = document.getElementById("rating-display");
 const comment = document.getElementById("comment-display");
 
 const updateDetail = (ramen) => {
     ramenName.textContent = ramen.name;
     ramenRestaurant.innerText = ramen.restaurant;
     ramenDetailImage.src = ramen.image;
     ramenDetailImage.alt = ramen.name;
     rating.innerText = ramen.rating;
     comment.innerText = ramen.comment;
 };

 const handleUpdateDetail = (event) => {
     //fetch to a ramens/:id
     //then we need to update detail
     fetchARamen(event.target.id);
 };

 const fetchARamen = (id) => {
     fetch("http://localhost:3000/ramens/" + id)
     .then((resp) => resp.json())
     .then((ramen) => {
         console.log(ramen);
         updateDetail(ramen);
     });
 };

//challenge 3
//submit form to add new ramen
//find the form
//capture the inputs of the form
//create a new ramen object
//push into our allRamen array (which we will create)
//create a new menu item
//may need to refactor the detail event handler...

const form = document.getElementById("new-ramen");

const handleSubmit = event => {
    event.preventDefault()
    const ramenObj = {
        name: form[0].value,
        restaurant: form[1].value,
        image: form[2].value,
        rating: form[3].value,
        comment: form[4].value,
    }
     createMenuImage(ramenObj)
     form.reset()
}

const init = () => {
    fetchAllRamens();
    form.addEventListener("submit", handleSubmit)
};

init();