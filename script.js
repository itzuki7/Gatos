document.addEventListener("DOMContentLoaded", function () {
    const getCatButton = document.getElementById("getCatButton");
    const catImage = document.getElementById("catImage");

    getCatButton.addEventListener("click", async () => {
        try {
            const response = await fetch("https://api.thecatapi.com/v1/images/search");
            if (!response.ok) {
                throw new Error("No se pudo obtener una imagen de gato.");
            }

            const data = await response.json();
            const imageUrl = data[0].url;
            catImage.src = imageUrl;
            catImage.style.display = "block";
        } catch (error) {
            console.error(error);
            alert("Error al cargar la imagen del gato.");
        }
    });
});
