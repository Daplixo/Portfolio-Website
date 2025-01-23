// document.addEventListener("DOMContentLoaded", function () {
//     const experimentBoxes = document.querySelectorAll('[class^="experiment"]');
//     const body = document.body;

//     // Click on any experiment box
//     experimentBoxes.forEach(function (box) {
//         box.addEventListener("click", function (event) {
//             event.stopPropagation();
            
//             // Remove any existing selections
//             experimentBoxes.forEach(b => b.classList.remove('selected'));
            
//             // Add selection to clicked box
//             box.classList.add('selected');
            
//             // Apply blur to body
//             body.classList.add('blur-background');
//         });
//     });

//     // Click anywhere outside
//     body.addEventListener("click", function (event) {
//         // Only trigger if click is NOT on an experiment box
//         if (!event.target.closest('[class^="experiment"]')) {
//             experimentBoxes.forEach(box => {
//                 box.classList.remove('selected');
//             });
//             body.classList.remove('blur-background');
//         }
//     });
// });