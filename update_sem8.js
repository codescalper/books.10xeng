const fs = require('fs');
let content = fs.readFileSync('app/books/sem8/page.tsx', 'utf8');

const newCard = `const ResourceCard: React.FC<ResourceCardProps> = ({ title, link, links }) => (
  <Card className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-glow">
    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
    <div className="z-10 mb-8 space-y-4">
      <div className="inline-block border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-primary">
        Resource
      </div>
      <h3 className="font-clash text-2xl font-bold leading-tight text-white transition-colors group-hover:text-primary">
        {title}
      </h3>
    </div>
    <div className="z-10 mt-auto pt-6">
      {      {      {      {   ={      {      {      {      {   ={      {      {      {      {    w-      {      {      {      {   ={      {      {      {      {   ={      {      {      {      { fo      {      {      {      {   ={      {      {      {      {   ={      {      {      {      {    w-      {      {      {      {   ={      {      {      {      {   ={      {      {      {      { fo      {      {      {      {   ={    
                                                                                                                                                                                 g-                                         View Options
            </Button>
          </DialogTrigger>
          <DialogContent className="border-border bg-card rounded-none">
                   Header>
              <DialogTitle className="font-clash text-2xl text-white">{title}</DialogTitle>
              <DialogDescription className="flex flex-col space-y-4 pt-4">
                {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) =>                 {links?.map((item, idx) => 
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )}
    </div>
  </Card>
);`;

// Extract old card
const oldCardRegex = /const ResourceCard: React\.FC<ResourceCardProps> = \(\{ title,[\s\S]*?<\/Card>\s*\)const oldCardRegntent.replace(oldCardRegex, newCaconst oldCardRegex = /const ResourceCard: React\.FC<ResourceCardProplex-cconst oldCardRegex = /cos*<const oldCardRegex = /const ResourceCard: React\.FC<ResourceCardProps> = \(\{ title,[\s\S]16const oldCardRegex = /const ResourceCard: React\.FC<ResourceCardPropx-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="font-clash text-4xl font-bold text-white md:text-5xl">Semester Resources</h1>
          <div className="mx-auto mt-4 h-1 w-20 bg-primary"></div>
        </div>
        <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto pb-24">`
);

fs.writeFileSync('app/books/sem8/page.tsx', content);
