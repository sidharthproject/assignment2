document.addEventListener("DOMContentLoaded", function () {
    const data = [
      {
        text: "Exquisite Watches",
        subText: "Gold Luxury, Choose Us",
        description:
          "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$499.00",
        image: "./Watches.png",
        ambientColor: "#f4aa69",
        ambientColor1: "#fedabb",
      },
      {
        text: "Dainty Timepieces",
        subText: "Silver Luxury, Choose Us",
        description:
          "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$469.00",
        image: "./WatchesSilver.png",
        ambientColor: "#b2b4b4",
        ambientColor1: "#e1e1e1",
      },
      {
        text: "Elegant Timepieces",
        subText: "Choose Luxury, Choose Us",
        description:
          "Discover the Perfect Watch for Every Occasion and Elevate Your Style with Timeless Elegance and Precision Craftsmanship - watch",
        price: "$529.00",
        image: "./WatchesGreen.png",
        ambientColor: "#39ab60",
        ambientColor1: "#65d48b",
      },
      {
        text: "Refined Timepieces",
        subText: "Choose Luxury, Choose Us",
        description:
          "Explore the Ideal Timepiece for Any Moment and Enhance Your Style with Timeless Sophistication and Impeccable Craftsmanship - timepiece",
        price: "$599.00",
        image: "./WatchesRed.png",
        ambientColor: "#f45b59",
        ambientColor1: "#fe9e8d",
      },
    ];
  
    const splideList = document.querySelector(".splide__list");
    const heading = document.querySelector(".heading h1");
    const subText = document.querySelector(".heading h3");
    const description = document.querySelector(".description p");
    const price = document.querySelector(".price");
    const body = document.body; // Select the body to update its background
  
    // Dynamically add slides to the carousel
    data.forEach((item) => {
      const li = document.createElement("li");
      li.className = "splide__slide";
      li.innerHTML = `<img src="${item.image}" alt="${item.text}" />`;
      splideList.appendChild(li);
    });
  
    // Initialize Splide carousel
    const splide = new Splide("#splide-carousel", {
      type: "loop",
      perPage: 1,
      arrows: true,
      pagination: false,
    });
 
        const bar = document.querySelector(".bar img");
        const sidebar = document.querySelector(".sidebar");
        const closeBtn = document.querySelector(".sidebar .close-btn");
      
        // Open sidebar when the "bar" icon is clicked
        bar.addEventListener("click", () => {
          sidebar.classList.add("open");
        });
      
        // Close sidebar when the "close" button is clicked
        closeBtn.addEventListener("click", () => {
          sidebar.classList.remove("open");
        });
      
        // Optional: Close sidebar when clicking outside of it
        document.addEventListener("click", (e) => {
          if (!sidebar.contains(e.target) && !bar.contains(e.target)) {
            sidebar.classList.remove("open");
          }
        });
    
      
    // Update content and page background when the active slide changes
    splide.on("active", (Slide) => {
      const newIndex = Slide.index % data.length; // Ensure the index wraps correctly
      const item = data[newIndex];
  
      if (!item) return; // Safeguard: skip if item is undefined
  
      heading.textContent = item.text;
      subText.innerHTML = `${item.subText.split(", ")[0]}, <span>${item.subText.split(", ")[1]}</span>`;
      description.textContent = item.description;
      price.textContent = item.price;
  
      // Update the background of the entire page
      const gradient = `linear-gradient(to bottom right, ${item.ambientColor}, ${item.ambientColor1})`;
      body.style.background = gradient;
    });
  
    splide.mount();
  });
  