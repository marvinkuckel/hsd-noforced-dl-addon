document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggle-switch");
    const statusText = document.getElementById("status-text");
  
    // Load the toggle state from storage
    browser.storage.local.get("isEnabled").then((result) => {
      const isEnabled = result.isEnabled ?? true; // Default to false
      toggleSwitch.checked = isEnabled;
      statusText.textContent = isEnabled ? "Download PREVENTED" : "Download not PREVENTED";
    });
  
    // Add event listener for toggle switch
    toggleSwitch.addEventListener("change", () => {
      const isEnabled = toggleSwitch.checked;
      // Save the toggle state to storage
      console.log({ isEnabled });
      browser.storage.local.set({ isEnabled });
      // Update the status text
      statusText.textContent = isEnabled ? "Download PREVENTED" : "Download not PREVENTED";
    });
  });
  