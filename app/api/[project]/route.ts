const approvedProjects = new Set(["kitchen-giant"]);

export async function GET(
  _request: Request,
  context: RouteContext<"/api/[project]">,
) {
  const { project } = await context.params;
  const isApproved = approvedProjects.has(project.toLowerCase());

  return Response.json(isApproved);
}
