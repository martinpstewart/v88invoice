window.function = function (html, fileName, format, zoom, orientation, margin, breakBefore, breakAfter, breakAvoid, fidelity, customDimensions) {
	// FIDELITY MAPPING
	const fidelityMap = {
		low: 1,
		standard: 1.5,
		high: 2,
	};

	// DYNAMIC VALUES
	html = html.value ?? "<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <title>HTML TO PDF</title>
</head>

<body>
  <p>Visit www.v88.co.uk <a href="https://www.v88.co.uk">
  <script src="function.js"></script>
  <script src="driver.js"></script>
</body>

</html>
"

	// HTML THAT IS RETURNED AS A RENDERABLE URL
	const originalHTML = `
	  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
	  <style>${customCSS}</style>
	  <div class="main">
	  <div class="header">
		<button class="button" id="download">Download</button>
	  </div>
	  <div id="content">${html}</div>
	  </div>
	  <script>
	  document.getElementById('download').addEventListener('click', function() {
		var element = document.getElementById('content');
		var button = this;
		button.innerText = 'Downloading...';
		button.className = 'downloading';
  
		var opt = {
		pagebreak: { mode: ['css'], before: ${JSON.stringify(breakBefore)}, after: ${JSON.stringify(breakAfter)}, avoid: ${JSON.stringify(breakAvoid)} },
		margin: ${margin},
		filename: '${fileName}',
		html2canvas: {
		  useCORS: true,
		  scale: ${quality}
		},
		jsPDF: {
		  unit: 'px',
		  orientation: '${orientation}',
		  format: [${finalDimensions}],
		  hotfixes: ['px_scaling']
		}
		};
		html2pdf().set(opt).from(element).toPdf().get('pdf').then(function(pdf) {
		button.innerText = 'Done 🎉';
		button.className = 'done';
		setTimeout(function() { 
		  button.innerText = 'Download';
		  button.className = ''; 
		}, 2000);
		}).save();
	  });
	  </script>
	  `;
	var encodedHtml = encodeURIComponent(originalHTML);
	return "data:text/html;charset=utf-8," + encodedHtml;
};
