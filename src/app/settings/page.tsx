import { DashboardLayout } from "@/components/dashboard-layout";
import { SettingsForm } from "@/components/settings-form";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight font-headline">Settings</h1>
        <p className="text-muted-foreground mb-8">
          Manage your account and preferences.
        </p>
        <SettingsForm />
      </div>
    </DashboardLayout>
  );
}
