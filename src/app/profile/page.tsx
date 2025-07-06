import { DashboardLayout } from "@/components/dashboard-layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  return (
    <DashboardLayout>
      <div className="mx-auto w-full max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight font-headline">My Profile</h1>
        <p className="text-muted-foreground mb-8">
          View and manage your profile information.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>User Information</CardTitle>
            <CardDescription>
              Your personal details and account settings.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/avatars/01.png" alt="User Avatar" />
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-2xl font-semibold font-headline">AgimD</h2>
                <p className="text-muted-foreground">admin@produkhub.com</p>
              </div>
            </div>
            <Separator />
            <div className="grid gap-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Role
                </span>
                <span className="col-span-2 text-sm">Administrator</span>
              </div>
              <Separator />
              <div className="grid grid-cols-3 items-center gap-4">
                <span className="text-sm font-medium text-muted-foreground">
                  Member Since
                </span>
                <span className="col-span-2 text-sm">January 1, 2024</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
