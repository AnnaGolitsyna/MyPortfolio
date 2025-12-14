function ProjectsPage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4">Here are some of my projects.</p>

      <div className="mt-8 grid gap-6">
        {/* Project cards will go here */}
        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Project 1</h2>
          <p className="mt-2 text-gray-300">Project description goes here.</p>
        </div>

        <div className="border rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Project 2</h2>
          <p className="mt-2 text-gray-300">Project description goes here.</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
