const featuresElement = document.getElementById(
  "features-section",
)! as HTMLElement;
const articlesContainer = document.getElementById(
  "articles-container",
)! as HTMLDivElement;

const options: IntersectionObserverInit = {
  root: null,
  rootMargin: "0px 0px -100px 0px",
  threshold: 0,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in-visible");
    observer.unobserve(entry.target);
  });
}, options);

observer.observe(featuresElement);

// Choose this way because to selects the elements no matter how far they are nested in the DOM.
articlesContainer.querySelectorAll(".feature-card").forEach((element) => {
  observer.observe(element);
})

// This way required the elements to be immediate children elements to the parent.
// [...articlesContainer.children].forEach((ele) => {
//   console.log(ele);
//   observer.observe(ele);
// });

