from weasyprint import HTML

# List of CSS files
stylesheets = [
    'cvA4.css',
    'mainCV.css',
]

document = HTML(string=open('./cv.html','r').read(),base_url = "https://kit.fontawesome.com/41e4a645a9.js") 
# Render HTML to PDF with multiple CSS files
document.write_pdf('./output.pdf', stylesheets=stylesheets)
