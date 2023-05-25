//your JS code here. If required.
function removeColor() {
  // Get the reference to the colorSelect dropdown
  const dropdown = document.getElementById("colorSelect");

  // Get the selected index of the dropdown
  const selectedIndex = dropdown.selectedIndex;

  // Remove the selected color option from the dropdown
  dropdown.remove(selectedIndex);
}
