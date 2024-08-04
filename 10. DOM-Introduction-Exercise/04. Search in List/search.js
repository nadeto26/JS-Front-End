function search() {

   const townEls = document.querySelectorAll("#towns li");

   function checksForMatches(input, elements) {
      e => e.elements == input

      return [...townEls].filter((x) =>
         x.textContent.toLowerCase().includes(input.toLowerCase())
      );
   }

   function clearPreviousState() {
      townEls.forEach((el) => {
         el.style.fontWeight = "normal";
         el.style.fontWeight = "none";
      });
   }

   clearPreviousState();


   const inputSearch = document.getElementById("searchText");

   const result = document.getElementById("result");

   const getMatches = checksForMatches(inputSearch.value);

   getMatches.forEach((matchEl) => {
      matchEl.style.fontWeight = "bold";
      matchEl.style.textDecoration = "underline";
   });

   document.querySelector(
      "div#result"
   ).textContent = `${getMatches.length} matches found`;
}




