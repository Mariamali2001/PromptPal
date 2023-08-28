

document.addEventListener('DOMContentLoaded', function () {
  const backButton = document.getElementById('back-button');
  backButton.addEventListener('click', function () {
    goBack();
  });

  function goBack() {
    window.location.href = 'popup.html';
  }

 
});

// document.addEventListener('DOMContentLoaded', function () {
//   const copyButtons = document.querySelectorAll('.copy-button');
//   copyButtons.forEach(function (button) {
//       button.addEventListener('click', function () {
//           copyCardContent(this);
//       });
//   });

//   function copyCardContent(button) {
//       const card = button.closest('.card');
//       const paragraphs = card.querySelectorAll('p');
//       let content = '';

//       paragraphs.forEach(function (paragraph) {
//           content += paragraph.textContent + '\n\n';
//       });

//       const tempTextarea = document.createElement('textarea');
//       tempTextarea.value = content;
//       document.body.appendChild(tempTextarea);
//       tempTextarea.select();
//       document.execCommand('copy');
//       document.body.removeChild(tempTextarea);
//   }

//   // Other JavaScript code...
// });
// const copyButtons = document.querySelectorAll('.copy-button');
//   copyButtons.forEach(button => {
//       button.addEventListener('click', copyContent);
//   });

//   // Copy content to clipboard when the button is clicked
//   function copyContent(event) {
//       const card = event.target.closest('.card');
//       const content = card.querySelector('.copy-content').textContent;

//       const tempInput = document.createElement('textarea');
//       tempInput.value = content;
//       document.body.appendChild(tempInput);
//       tempInput.select();
//       document.execCommand('copy');
//       document.body.removeChild(tempInput);

//       // Optionally, provide some visual feedback that content was copied
//       event.target.textContent = 'Copied!';
//       setTimeout(() => {
//           event.target.textContent = 'Copy to Clipboard';
//       }, 2000); // Reset button text after 2 seconds
//   }

    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = 'Copy to Clipboard';
            card.appendChild(copyButton);
        });

        // Add event listener to handle the copy action
        document.addEventListener('click', function(event) {
            if (event.target.classList.contains('copy-button')) {
                copyContent(event.target);
            }
        });

        // Copy content to clipboard
        function copyContent(button) {
            const card = button.closest('.card');
            const content = card.querySelector('.copy-content').textContent;

            const tempInput = document.createElement('textarea');
            tempInput.value = content;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand('copy');
            document.body.removeChild(tempInput);

            // Provide visual feedback on the button
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = 'Copy to Clipboard';
            }, 2000); // Reset button text after 2 seconds
        }
    });
