document.addEventListener("DOMContentLoaded", function () {
    // Fetch the portfolio data
    fetch("portfolio.json")
      .then((response) => response.json())
      .then((projects) => {
        // Get the project ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const projectId = urlParams.get("id");
  
        // Find the matching project
        const project = projects.find((proj) => proj.id === projectId);
  
        if (project) {
          // Populate images in the swiper slider
          const sliderContainer = document.getElementById("portfolio-slider");
          sliderContainer.innerHTML = project.images
            .map(
              (img) =>
                `<div class="swiper-slide"><img src="${img}" alt="Project Image"></div>`
            )
            .join("");
  
          // Populate project details
          document.getElementById("portfolio-title").textContent = project.title;
          document.getElementById("portfolio-category").textContent =
            project.category;
          document.getElementById("portfolio-description").textContent =
            project.description;
          document.getElementById("portfolio-url").href = project.project_url;
        } else {
          document.getElementById("portfolio-title").textContent =
            "Project Not Found";
          document.getElementById("portfolio-description").textContent =
            "The requested project details could not be loaded.";
        }
      })
      .catch((error) => console.error("Error loading portfolio:", error));
  });
  