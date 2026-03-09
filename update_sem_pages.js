const fs = require('fs');

const oldCard = `const ResourceCard: React.FC<ResourceCardProps> = ({ title, link }) => (
  <Card className="w-[350px]">
    <CardContent />
    <CardFooter className="flex justify-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Button size="lg">{title}</Button>
      </a>
    </CardFooter>
  </Card>
);`;

const newCard = `const ResourceCard: React.FC<ResourceCardProps> = ({ title, link }) => (
  <Card className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-none border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:bg-glow">
    <div className="absolute right-0 top-0 h-24 w-24 -translate-y-12 translate-x-12 rounded-full bg-primary/10 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
    <div className="z-10 mb-8 space-y-4">
      <div className="inline-block border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-xs uppercase tracking-wider text-prima      <div className="inline-block border border-primary/30 bg-primary/5 pt-2xl font-bold leading-tight text-white transi      <div classNaho      <div className="inline-block border borde    </div>
    <div className="z-10 mt-auto pt-6">
      <a href={link} target="_blank" rel="noopener norefer      <a sN      <a href={ll"             tto      <a href={link} target="_blank" rel="noopener norefer      <a sN      <a href={ll" ol      <a href={link} target="_blank" rel="noopener norefer      <a sN      <a href={ll"             tto      <a href={link} target="_blank" rel="noopener norefer      <a sN      <a href={ll" ol      <a href={link} target="_blank" rel=ol items-center pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 lg:gap-40 mx-auto pb-16">`;

const newLayout = `<main className="flex flex-groconst newLayout = `<main classNa-4 sm:px-6const newLayout = `<main className="flex flex-groconst newLayout = `<main classNa-4 sm:px-6const newLayout = `<main className="flex flex-groconst newLayout = `<main classNa-4 sm:px-6const newLayout = `<main className="flex flex-groconst newLayout = `<main classNa-4 sm:px-6const newLayout = `<main className="flex flex-groconst nd-colsconst newLayout = `<maino pb-24">`;

forforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforfoteforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforforfouto pb-16">/,
        newLayout
      );
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(\`Updated sem\${i}\`);
  }
}
