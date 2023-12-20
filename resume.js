document.getElementById('downloadBtn').addEventListener('click', function () {
    // Replace 'path/to/your/file.pdf' with the actual path to your PDF file
    const pdfPath = 'OmerGevaResume2024.pdf';

    // Create an anchor element
    const a = document.createElement('a');

    // Set the download attribute and file path
    a.download = 'OmerGevaResume2024.pdf';
    a.href = pdfPath;

    // Append the anchor element to the document
    document.body.appendChild(a);

    // Trigger a click event on the anchor element
    a.click();

    // Remove the anchor element from the document
    document.body.removeChild(a);
});


// scroll to resume button
// Define the scroll function
function scrollToTarget() {
    var downloadBtn = document.getElementById('downloadBtn');
    var scrollDistance = 1700; // Adjust this value to control how far the scroll goes down

    if (downloadBtn) {
      window.scrollTo({
        top: downloadBtn.offsetTop + scrollDistance,
        behavior: 'smooth'
      });
    }
  }