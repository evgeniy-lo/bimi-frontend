export const initLoadMoreReviews = () => {
  const reviews = document.querySelectorAll(".reviews__card");
  const loadMoreContainer = document.querySelector(".reviews__load-more");
  const loadMoreButton = document.querySelector(".reviews__load-more-button");

  loadMoreButton.addEventListener("click", (e) => {
    e.preventDefault();

    reviews.forEach(review => {
      review.classList.add("is-visible");
    })

    loadMoreContainer.style.display = "none";
  })
};
