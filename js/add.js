// Получаем элементы
const fileInput = document.getElementById("upload");
const gallery = document.getElementById("gallery");
const clearButton = document.getElementById("clear");
const galleriesByClass = document.querySelectorAll(".gallery"); // Все элементы с классом .gallery

// Суратларни массивга қўшиш ва сақлаш
fileInput.addEventListener("change", (event) => {
    const files = event.target.files; // Танланган файллар массиви
    let images = JSON.parse(localStorage.getItem("images")) || []; // Мавжуд суратлар массивини олиш
    Array.from(files).forEach((file) => {
        const reader = new FileReader();

        reader.onload = function () {
            images.push(reader.result); // Суратни массивга қўшиш
            localStorage.setItem("images", JSON.stringify(images)); // Массивни сақлаш
            displayImages(); // Янгиланган галереяни кўрсатиш
        };

        reader.readAsDataURL(file); // Суратни Base64 форматига айлантириш
    });
});

// Сақланган суратларни кўрсатиш
function displayImages() {
    const images = JSON.parse(localStorage.getItem("images")) || [];
    gallery.innerHTML = ""; // Галереяни тозалаш

    images.forEach((image, index) => {
        const img = document.createElement("img");
        img.src = image;
        img.alt = `Img ${index + 1}`;
        img.style.maxWidth = "120px";
        img.classList.add("rounded-2");
        img.classList.add("image-container");
        img.classList.add("img-thumbnail");
        img.classList.add("border-primary");
        gallery.appendChild(img); // Суратни галереяга қўшиш
    });
    

    // Добавляем изображения в элементы с классом .gallery
    galleriesByClass.forEach((galleryElement) => {
        galleryElement.innerHTML = ""; // Тозалаш
        images.forEach((image, index) => {
            const img = document.createElement("img");
            img.src = image;
            img.alt = `Img ${index + 1}`;
            img.style.maxWidth = "120px";
            img.style.margin = "10px";
            img.classList.add("rounded-2");
            img.classList.add("image-container");
            img.classList.add("img-thumbnail");
            img.classList.add("border-primary");
            img.classList.add("position-relative");
            
            const deleteImg = document.createElement("span");
            // galleryElement.appendChild(img.appendChild(deleteImg));
            deleteImg.classList.add("bi");
            deleteImg.classList.add("bi-trash");
            deleteImg.classList.add("text-danger")
            deleteImg.classList.add("d-inline");

            // deleteImg.classList.add("position-absolute");
            deleteImg.classList.add("top-0");
            deleteImg.classList.add("z-3")
            deleteImg.classList.add("start-0");
            deleteImg.classList.add("p-2");
            img.appendChild(deleteImg); 
            deleteImg.addEventListener("click", () => {
                img.remove();
                deleteImg.remove();
            })
            
            galleryElement.appendChild(img.appendChild(deleteImg));
            galleryElement.appendChild(img); // Қўшиш
        });
    });

    
}



// Ҳамма суратларни ўчириш
clearButton.addEventListener("dblclick", () => {
    localStorage.removeItem("images"); // Суратлар массивини ўчириш
    gallery.innerHTML = ""; // Галереяни тозалаш

    // Очищаем все элементы с классом .gallery
    galleriesByClass.forEach((galleryElement) => {
        galleryElement.innerHTML = "";
    });
    

    alert("all deleted!");
});

// Саҳифани янгилаганда суратларни кўрсатиш
displayImages();


//  Get the modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Get all images with the class 'img-thumbnail'
var images = document.getElementsByClassName("img-thumbnail");

// Loop through all images and add click event
for (var i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  };
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
};

modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
