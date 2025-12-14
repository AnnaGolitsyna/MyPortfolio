function SkillStackPage() {
  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold">Skill Stack</h1>
      <p className="mt-4">Technologies and tools I work with.</p>

      <div className="mt-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Frontend</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-blue-600 rounded-full text-sm">Next.js</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Backend</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-green-600 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-green-600 rounded-full text-sm">Express</span>
            <span className="px-3 py-1 bg-green-600 rounded-full text-sm">PostgreSQL</span>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-3">Tools</h2>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Git</span>
            <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Docker</span>
            <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">VS Code</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillStackPage;
