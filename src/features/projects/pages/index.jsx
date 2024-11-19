import MainLayout from "features/main/layouts";
import { Link } from "react-router-dom";

export default function ProjectsOverviewPage() {
  // React Query Fetches the data in the page
  /*
      const { data: projects = [], isLoading, error } = useQuery('projects', getProjects, {
    staleTime: 60000,
    retry: 2,
  });
    */

  const sudoProjectData = [
    {
      id: 1,
      projectName: "project 1",
      projectDescription: "it should describe project 1",
    },
    {
      id: 2,
      projectName: "project 2",
      projectDescription: "it should describe project 2",
    },
    {
      id: 3,
      projectName: "project 3",
      projectDescription: "it should describe project 3",
    },
  ];

  // presentation hook creates presentation formed data and manages state
  /* const { filteredProjects, applyFilter } = useProjectsPresenter(projects);
  }); */

  // finally data is passed to viewer layout

  return (
    <MainLayout>
      {sudoProjectData.map((project) => (
        /* This will be a project card component */
        <div>
          <Link to={`/projects/${project.id}`}>
            <p>{project.projectName}</p>
          </Link>
          <p>{project.projectDescription}</p>
        </div>
      ))}
    </MainLayout>
  );
}
