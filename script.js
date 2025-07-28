function copyCode() {
  const code = document.querySelector("pre code").textContent;
  navigator.clipboard.writeText(code).then(() => {
    alert("Code copied to clipboard!");
  }).catch(err => {
    alert("Failed to copy code: " + err);
  });
}
