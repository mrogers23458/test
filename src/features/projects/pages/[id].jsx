import { useParams } from "react-router-dom";
import ProjectDetailLayout from "../layouts/details";

export default function ProjectDetailPage() {
  // project id is pulled off params
  const { id } = useParams();

  // data is requested on the page by RQ
  /*
    const { data: project, isLoading, error } = useQuery(['project', id], () => getProjectById(id), {
        retry: 2,
        staleTime: 30000, // Cache project data for 30 seconds
      });
   */

  // state is managed in project presenter
  /*
     const { formattedProject } = useProjectDetailPresenter(project);
     */

  const sudoFormatted = {
    projectName: "Project 1",
    projectDescription: "it should describe project 1",
  };

  // finally passed to projectViewer Layout
  return <ProjectDetailLayout project={sudoFormatted} />;
}
