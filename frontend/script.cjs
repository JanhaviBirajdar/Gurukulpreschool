const fs = require('fs');

const files = [
  'src/pages/AboutPage.jsx',
  'src/pages/ContactPage.jsx',
  'src/pages/GalleryPage.jsx',
  'src/pages/ProgramsPage.jsx',
  'src/pages/TestimonialsPage.jsx',
  'src/components/home/Features.jsx',
  'src/components/home/Hero.jsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // We want to add text-center to paragraphs that have text-lg, text-xl, or text-2xl
    // which are typical for paragraphs under headings.
    let newContent = content.replace(/className="([^"]*text-(lg|xl|2xl)[^"]*)"/g, (match, p1) => {
        if (!p1.includes('text-center') && !p1.includes('text-left') && !p1.includes('text-right')) {
            return `className="text-center ${p1}"`;
        }
        return match;
    });

    if (content !== newContent) {
      fs.writeFileSync(file, newContent, 'utf8');
      console.log('Updated ' + file);
    }
  }
});
