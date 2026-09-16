const approvedProjects = new Set(["kitchen-giant"]);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function GET(
  _request: Request,
  context: RouteContext<"/api/[project]">,
) {
  const { project } = await context.params;
  const isApproved = approvedProjects.has(project.toLowerCase());

  return Response.json("false", { headers: corsHeaders });
}

export async function OPTIONS() {
  return new Response(null, { status: 204, headers: corsHeaders });
}
