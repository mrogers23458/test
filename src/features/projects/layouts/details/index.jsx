import MainLayout from "features/main/layouts";

export default function ProjectDetailLayout({ project }) {
  // destructure whenever possible
  const {
    projectName = "Default Name",
    projectDescription = "Default Description",
  } = project;

  return (
    <MainLayout>
      <header>Project Detail Header (organism) - {projectName}</header>
      <div>
        Project Detail Container (organism) / widget - {projectDescription}
      </div>
    </MainLayout>
  );
}
