export default function LearnASLPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">Learn ASL</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4 text-muted-foreground">
          Welcome to our interactive ASL learning platform. Here you can:
        </p>
        <ul className="list-disc pl-6 mb-6 text-foreground">
          <li>Access interactive ASL lessons</li>
          <li>Watch 3D demonstrations of signs</li>
          <li>Practice with visual guides</li>
          <li>Track your learning progress</li>
        </ul>
      </div>
    </div>
  );
}
