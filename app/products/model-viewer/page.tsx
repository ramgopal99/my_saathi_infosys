export default function ModelViewerPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-primary">3D Model Viewer</h1>
      <div className="prose max-w-none">
        <p className="text-lg mb-4 text-muted-foreground">
          Explore our collection of 3D sign language models:
        </p>
        <ul className="list-disc pl-6 mb-6 text-foreground">
          <li>View detailed 3D models of ASL signs</li>
          <li>Rotate and interact with models</li>
          <li>Learn proper hand positioning</li>
          <li>Study sign movements in 3D space</li>
        </ul>
      </div>
    </div>
  );
} 