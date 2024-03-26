function generatePDF(html, value) {
    // HTML with default value
    html = html ?? `<!DOCTYPE html>
    <!-- Your HTML code name-->
    `;
    
    // Construct the complete HTML with necessary scripts
    const originalHTML = `
        <!-- Your HTML code with necessary scripts -->
    `;
    
    // Encode the HTML for data URL
    var encodedHtml = encodeURIComponent(originalHTML);
    
    // Replace the placeholder in the HTML with the provided value
    encodedHtml = encodedHtml.replace('name', value);
    
    return "data:text/html;charset=utf-8," + encodedHtml;
}
