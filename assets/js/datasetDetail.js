const datasetDetails = [
    {
        title: "Fire and Smoke Dataset",
        description:
            "This dataset is an extremely challenging set of over 7000+ original Fire and Smoke images captured and crowdsourced from over 400+ urban and rural areas.",
        datasetSize: "10000",
        capturedBy: "Crowdsource",
        usage: "for fire and smoke",
        annotations: "",
        url: "https://www.kaggle.com",
        images: ["assets/img/sample_fire_and_smoke_1.jpeg", "assets/img/sample_vehicle_1.jpeg"],
        href: "fire-and-smoke",
    },
    {
        title: "Indian Vehicle Dataset",
        description: "This dataset contains 50,000+ original Vehicle images captured over 5000+ urban and rural areas.",
        datasetSize: "10000",
        capturedBy: "Crowdsource",
        usage: "for Indian vehicle dataset",
        annotations: "",
        url: "https://www.kaggle.com",
        images: ["assets/img/sample_fire_and_smoke_1.jpeg", "assets/img/sample_vehicle_1.jpeg"],
        href: "indian-vehicle",
    },
    {
        title: "Indian Traffic Sign Dataset",
        description:
            "This dataset contains 4000+ original traffic sign images captured over 1000+ urban and rural areas.",
        datasetSize: "10000",
        capturedBy: "Crowdsource",
        usage: "for Indian vehicle dataset",
        annotations: "",
        url: "https://www.kaggle.com",
        images: ["assets/img/sample_fire_and_smoke_1.jpeg", "assets/img/sample_vehicle_1.jpeg"],
        href: "indian-traffic-sign",
    },
    {
        title: "Trash Detection Dataset",
        description:
            "This dataset contains 15,000+ original trash object images captured over 3000+ urban and rural areas.",
        datasetSize: "10000",
        capturedBy: "Crowdsource",
        usage: "for Trash detection dataset",
        annotations: "",
        url: "https://www.kaggle.com",
        images: ["assets/img/sample_fire_and_smoke_1.jpeg", "assets/img/sample_vehicle_1.jpeg"],
        href: "trash-detection",
    },
    {
        title: "Material Detection Dataset",
        description:
            "This dataset contains 20,000+ original material object images captured over 7000+ urban and rural areas.",
        datasetSize: "10000",
        capturedBy: "Crowdsource",
        usage: "for Material detection dataset",
        annotations: "",
        url: "https://www.kaggle.com",
        images: ["assets/img/sample_fire_and_smoke_1.jpeg", "assets/img/sample_vehicle_1.jpeg"],
        href: "material-detection",
    },
    {
        title: "Cracked Screen Dataset",
        description: "This dataset contains 9,000+ original cracked screen images captured over 2000+ people.",
        datasetSize: "10000",
        capturedBy: "Crowdsource",
        usage: "for Cracked screen dataset",
        annotations: "",
        url: "https://www.kaggle.com",
        images: ["assets/img/sample_fire_and_smoke_1.jpeg", "assets/img/sample_vehicle_1.jpeg"],
        href: "cracked-screen",
    },
];

if (typeof window !== "undefined") {
    var currentDataset;
    var currentPage = window.location.href.split("?")[1];
    datasetDetails.forEach((dataset) => {
        if (dataset.href === currentPage) {
            currentDataset = dataset;
        }
    });

    // Populating dataset details page with the current dataset data
    var carousel = document.getElementById("dataset-carousel-wrapper");
    if (currentDataset) {
        currentDataset.images.forEach((image) => {
            var swiperSlide = document.createElement("div");
            swiperSlide.setAttribute("class", "swiper-slide");
            var img = document.createElement("img");
            img.setAttribute("src", image);
            swiperSlide.appendChild(img);
            carousel.appendChild(swiperSlide);
        });
    }

    var list = document.getElementById("dataset-detail-info");

    var title = document.createElement("li");
    title.innerHTML = `<strong>Title</strong>: ${currentDataset.title}`;
    list.appendChild(title);

    var datasetSize = document.createElement("li");
    datasetSize.innerHTML = `<strong>Dataset Size</strong>: ${currentDataset.datasetSize}`;
    list.appendChild(datasetSize);

    var capturedBy = document.createElement("li");
    capturedBy.innerHTML = `<strong>Captured By</strong>: ${currentDataset.capturedBy}`;
    list.appendChild(capturedBy);

    var usage = document.createElement("li");
    usage.innerHTML = `<strong>Usage</strong>: ${currentDataset.usage}`;
    list.appendChild(usage);

    var datasetDesc = document.getElementById("dataset-description");
    var heading = document.createElement("h2");
    heading.innerHTML = currentDataset.title;

    var description = document.createElement("p");
    description.innerHTML = currentDataset.description;

    datasetDesc.appendChild(heading);
    datasetDesc.appendChild(description);

    var datasetBtn = document.getElementById("dataset-btn");
    var link = document.createElement("a");
    link.setAttribute("src", currentDataset.url);
    link.setAttribute(
        "class",
        "btn-keggle scrollto d-inline-flex align-items-center justify-content-center align-self-center"
    );
    link.setAttribute("target", "_blank");

    var btnText = document.createElement("span");
    btnText.innerHTML = "Download Dataset";

    link.appendChild(btnText);
    datasetBtn.appendChild(link);
}
