import type { ReactNode } from "react";
import "./admin-theme.css";
import { AdminShell } from "./components";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
