window.function = function (html, fileName, format, zoom, orientation, margin, breakBefore, breakAfter, breakAvoid, fidelity, customDimensions) {
	// FIDELITY MAPPING
	const fidelityMap = {
		low: 1,
		standard: 1.5,
		high: 2,
	};

	// DYNAMIC VALUES
	html = html.value ?? "<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HTML Table Generator</title>
<style>
    table {
        border: 1px solid #000000;
        border-collapse: collapse;
        padding: 5px;
        text-align: left;
    }

    table td {
        border: 1px solid #000000;
        padding: 5px;
        background: #FFFFFF;
        text-align: left;
    }


</style>
</head>
<body>
<center>
<b>Item Title</b>
 <div id="flag"><table>
  
</table>
<table>
  <tr>
</div>
   <td><strong>1153238 Alberta Ltd. o/a Build360</strong></td>
  </tr>
  <tr>
   <td><strong>403-764-0505</strong></td>
  </tr>
  <tr>
   <td><strong>H-7056 Farrel Rd SE</strong></td>
  </tr>
  <tr>
   <td><strong>Calgary, AB T2H 0T2</strong></td>
  </tr>
  <tr>
   <td><strong>Canada</strong></td>
  </tr>
</table>

<p>
<p>
<hr>

<p>
<style>
    .spacer {
        width: 100%; /* Adjust the width as needed */
        height: 50px; /* Adjust the height as needed */
    }
</style>
<div class="spacer"></div>
<center><table>
  <tr>
   <td><strong>Prepared For</strong></td>
   <td><strong>Estimate Date</strong></td>
   <td><strong>Estimate Number</strong></td>
   <td><strong>Reference Number</strong></td>
  </tr>
  <tr>
   <td>Cristall Group</td>
   <td>22/03/2024, 17:42:03</td>
   <td></td>
   <td></td>
  </tr>
</table>

<style>
    .spacer {
        width: 100%; /* Adjust the width as needed */
        height: 50px; /* Adjust the height as needed */
    }
</style>
<div class="spacer"></div>
<p>

<table>
<tr><td><strong>Description</strong>
</td>
<td><strong>Price</strong>
</td>
</tr>
<tr><td><b>Chapter: Replacement Window</b></td><td>CAD 3,475.00</tr>
</table>
<p>

<div id="flag">
<table>
  <tr>
   <td><strong>Subtotal</strong>
   </td>
   <td>CAD 3,475
   </td>
  </tr>
  <tr>
   <td><strong>Tax (5%)</strong>
   </td>
   <td>CAD 174
   </td>
  </tr>
  <tr>
   <td><strong>Estimate Total (CAD)</strong>
   </td>
   <td>CAD 3,649
   </td>
  </tr>
</table></div></center>
";

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
