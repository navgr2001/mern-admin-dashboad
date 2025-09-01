import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/admin/admin_layout.tsx", [
    route("dashboard", "routes/admin/dashboard.tsx"),
    route("all_users", "routes/admin/all_users.tsx"),
  ]),
] satisfies RouteConfig;
