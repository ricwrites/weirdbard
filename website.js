document.getElementById("downloadBtn1").addEventListener("click",() => {
const link = document.createElement("a");
link.href = "/home/sheila/Documents/Ric/Website/WeirdbardWrites Website/assets/books/ForBitterOrVerse.pdf";
link.download = "ForBitterOrVerse.pdf";
link.click();
});
