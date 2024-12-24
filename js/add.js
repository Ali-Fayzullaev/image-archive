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
        img.alt = `Сурат ${index + 1}`;
        img.style.maxWidth = "120px";
        img.style.margin = "10px";
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
            img.alt = `Сурат ${index + 1}`;
            img.style.maxWidth = "120px";
            img.style.margin = "10px";
            img.classList.add("rounded-2");
            img.classList.add("image-container");
            img.classList.add("img-thumbnail");
            img.classList.add("border-primary");
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
