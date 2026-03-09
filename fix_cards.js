const fs = require('fs');

const semFiles = [
  'app/books/sem1/page.tsx',
  'app/books/sem2/page.tsx',
  'app/books/sem3/page.tsx',
  'app/books/sem4/page.tsx',
  'app/books/sem5/page.tsx',
  'app/books/sem6/page.tsx',
  'app/books/sem7/page.tsx',
  'app/books/sem8/page.tsx',
];

const newCardCode = `const ResourceCard: React.FC<ResourceCardProps> = ({ title, link }) => (
  <Card className="group relative flex h-full flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-glow">
    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
    <div className="z-10 mb-8 space-y-4">
      <div className="inline-block border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
        PDF Resource
      </div>
                             sh                        ing                  t                      -hover:text-primary">
        {title        {title        {ti            {title    10 mt-auto         {title        {titl t        {title   l="noopener         {title        {titlk         {title        {t clas Nam        {title        {title        {ti            {title    10 mt-auto         {title-white t        {title        {title        {ti            {title    10 mt-auto         {title        {titl t        {title   l="noopener         {title        {titlk         {title        {t clas Nam        {title        {title   let content = fs.readFileSync(file, 'utf8');
    
    // Replace old Card definition
    content = content.replace(
      /const ResourceCard: React\.FC<ResourceCardProps> = \(\{ title, link \}\) => \([\s\S]*?<\/Card>\s*\);/,
      newCardCode
    );

    // Also fix the grid layout if it was just w-[350px] or fixed width.
    // Replace grid classes
    content = content.replace(
      /cla      /cla      /cla      /cla      /cla      /cla      /cla      /cla      /cla      /cla      /cla      /cla      /clmax-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-24"'
    );
    
    // add header part before cards to match new theme
    content = content.replace(
      /<main className="flex flex-grow flex-col items-center pt-16">/,
      '<main className="flex flex-grow flex-col items-center pt-24">\n        <div className="mb-16 text-center">\n          <h1 className="font-clash text-4xl font-bold text-white md:text-5xl">Semester Resources</h1>\n          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>\n        </div>'
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log('Updated ' + file);
  }
});
