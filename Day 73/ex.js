function CardTemplate(thumbnail, duration, title, views, likes, months) {
    // Format views
    let viewStr = views;
    if (views >= 1000 && views < 1000000) {
        viewStr = (views / 1000).toFixed(1) + "k";
    } else if (views >= 1000000) {
        viewStr = (views / 1000000).toFixed(1) + "M";
    }

    // Create the HTML template using backticks
    let html = `
        <div class="card">
            <div class="image-container">
                <img class="image"
                    src="${thumbnail}"
                    alt="Video thumbnail">
                <h6>${duration}</h6>
            </div>

            <div class="text">
                <h1>${title}</h1>
                <p>Views: ${viewStr} | Likes: ${likes} | ${months} months ago</p>
            </div>
        </div>
    `;

    // Append the new card to the container
    document.querySelector(".container").innerHTML += html;
}

// Call the function to add a card
CardTemplate(
    "https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEmCKgBEF5IWvKriqkDGQgBFQAAiEIYAdgBAeIBCggYEAIYBjgBQAE=&rs=AOn4CLDPqs5LtUVsb50otOywVTZEmI75fg",
    "31:36",
    "Introduction to Backend and Frontend | Video #45",
    456000000,
    100000,
    2
);
