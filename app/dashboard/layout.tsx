import SideNav from "../ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex">
        <SideNav />
        <main className="w-full">{children}</main>
      </div>
    </div>
  );
}
