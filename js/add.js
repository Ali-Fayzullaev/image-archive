// Получаем элементы
const fileInput = document.getElementById("upload");
const gallery = document.getElementById("gallery");
const clearButton = document.getElementById("clear");
const galleriesByClass = document.querySelectorAll(".gallery"); // Все элементы с классом .gallery
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

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
        img.style.maxWidth = "200px";
        img.style.height = "180px";
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
            // let height = 180;
            // let width = 200;

            plus.addEventListener("click", () => {
              
              height += 10;
              width += 10;
              console.log(height);
            img.style.maxWidth = `${width}px`;
            img.style.height = `${height}px`;
            })
            minus.addEventListener("click", () => {
              height -= 10;
              width -= 10;
              img.style.maxWidth = `${width}px`;
              img.style.height = `${height}px`;
            })

            let height = 180;
            let width = 200;


            img.src = image;
            img.alt = `Img ${index + 1}`;
            img.style.maxWidth = `${width}px`;
            img.style.height = `${height}px`;
            img.classList.add("rounded-2");
            img.classList.add("image-container");
            img.classList.add("img-thumbnail");
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
