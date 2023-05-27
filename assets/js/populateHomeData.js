/**
 * Populating datasets from datasets.js
 */
var datasetsRow = document.getElementsByClassName("datasets-row")[0];
datasets.forEach((dataset) => {
    var datasetDiv = document.createElement("a");
    datasetDiv.setAttribute("class", "col-lg-4 col-md-6");
    datasetDiv.setAttribute("data-aos", "fade-up");
    datasetDiv.setAttribute("data-aos-delay", dataset.delay);
    datasetDiv.setAttribute("href", `dataset-detail.html?${dataset.params}`);

    var serviceBox = document.createElement("div");
    serviceBox.setAttribute("class", `service-box ${dataset.color}`);

    var image = document.createElement("img");
    image.setAttribute("src", dataset.image);

    var datasetDetail = document.createElement("div");
    datasetDetail.setAttribute("class", "dataset-detail-div");

    var h3 = document.createElement("h3");
    h3.innerHTML = dataset.title;

    var para = document.createElement("p");
    para.setAttribute("class", "dataset-text");
    para.innerHTML = dataset.description;

    datasetDetail.appendChild(h3);
    datasetDetail.appendChild(para);

    serviceBox.appendChild(image);
    serviceBox.appendChild(datasetDetail);

    datasetDiv.appendChild(serviceBox);

    datasetsRow.appendChild(datasetDiv);
});

/**
 * Populating testimonials from datasets.js
 */
// var testimonialRow = document.getElementById("testimonial-swiper-wrapper");
// testimonials.forEach((testimonial) => {
//     var swiperSlide = document.createElement("div");
//     swiperSlide.setAttribute("class", "swiper-slide");

//     var testimonialItem = document.createElement("div");
//     testimonialItem.setAttribute("class", "testimonial-item");

//     var starsRow = document.createElement("div");
//     starsRow.setAttribute("class", "stars");

//     for (var i = 0; i < testimonial.stars; i++) {
//         let star = document.createElement("i");
//         star.setAttribute("class", "bi bi-star-fill");
//         starsRow.appendChild(star);
//     }

//     var text = document.createElement("p");
//     text.innerHTML = testimonial.feedback;

//     var profileSection = document.createElement("div");
//     profileSection.setAttribute("class", "profile mt-auto");

//     var userImage = document.createElement("img");
//     userImage.setAttribute("class", "testimonial-img");
//     userImage.setAttribute("src", testimonial.userImg);
//     userImage.setAttribute("alt", "testimonial-profile-img");

//     var userName = document.createElement("h3");
//     userName.innerHTML = testimonial.name;

//     var userDesignation = document.createElement("h4");
//     userDesignation.innerHTML = testimonial.designation;

//     profileSection.appendChild(userImage);
//     profileSection.appendChild(userName);
//     profileSection.appendChild(userDesignation);

//     testimonialItem.appendChild(starsRow);
//     testimonialItem.appendChild(text);
//     testimonialItem.appendChild(profileSection);

//     swiperSlide.appendChild(testimonialItem);

//     testimonialRow.appendChild(swiperSlide);
// });

// /**
//  * Testimonials slider
//  */
// new Swiper(".testimonials-slider", {
//     speed: 600,
//     loop: true,
//     autoplay: {
//         delay: 5000,
//         disableOnInteraction: false,
//     },
//     slidesPerView: "auto",
//     pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: true,
//     },
//     breakpoints: {
//         320: {
//             slidesPerView: 1,
//             spaceBetween: 40,
//         },

//         1200: {
//             slidesPerView: 3,
//         },
//     },
// });
