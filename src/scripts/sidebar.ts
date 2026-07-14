const openSidebarBtn = document.getElementById(
  "open-toggle",
)! as HTMLButtonElement;
const closeSidebarBtn = document.getElementById(
  "close-sidebar",
)! as HTMLButtonElement;

const dialogElement = document.getElementById(
  "sidebar-dialog",
)! as HTMLDialogElement;

openSidebarBtn.addEventListener("click", () => {
  dialogElement.showModal();
  openSidebarBtn.setAttribute("aria-expanded", "true");
});

closeSidebarBtn.addEventListener("click", () => {
  dialogElement.close();
  openSidebarBtn.setAttribute("aria-expanded", "false");
});

const desktopMedia = window.matchMedia("(min-width: 1024px)");

function handleViewportChange(event: MediaQueryList | MediaQueryListEvent) {
  if (event.matches && dialogElement.open) {
    dialogElement.close();
    openSidebarBtn.setAttribute("aria-expanded", "false");
  }
}

desktopMedia.addEventListener("change", handleViewportChange);

// Run once on page load as well.
handleViewportChange(desktopMedia);
