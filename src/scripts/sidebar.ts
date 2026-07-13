const toggleSidebarBtn = document.getElementById(
  "sidebar-toggle",
)! as HTMLButtonElement;
const closeSidebarBtn = document.getElementById(
  "close-sidebar",
)! as HTMLButtonElement;

const dialogElement = document.getElementById("sidebar-dialog")! as HTMLDialogElement;

toggleSidebarBtn.addEventListener("click", () => {
  dialogElement.showModal()
  toggleSidebarBtn.setAttribute("aria-expanded", "true");
});

closeSidebarBtn.addEventListener("click", () => {
  dialogElement.close();
  toggleSidebarBtn.setAttribute("aria-expanded", "false");
});


