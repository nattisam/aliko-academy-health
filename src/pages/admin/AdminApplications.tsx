import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import type { Tables } from "@/integrations/supabase/types";

type Application = Tables<"applications"> & {
  students: { first_name: string; last_name: string; email: string } | null;
  programs: { name: string } | null;
};

const statusColors: Record<string, "default" | "secondary" | "destructive" | "outline"> = {
  new: "default",
  in_review: "secondary",
  accepted: "outline",
  enrolled: "outline",
  rejected: "destructive",
  withdrawn: "destructive",
};

export default function AdminApplications() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetch = async () => {
    const { data } = await supabase
      .from("applications")
      .select("*, students(first_name, last_name, email), programs(name)")
      .order("created_at", { ascending: false });
    setApps((data as Application[]) ?? []);
    setLoading(false);
  };

  useEffect(() => { fetch(); }, []);

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("applications").update({ status: status as any }).eq("id", id);
    if (error) { toast({ title: "Error", description: error.message, variant: "destructive" }); return; }
    toast({ title: `Status updated to ${status.replace(/_/g, " ")}` });
    fetch();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Applications</h1>

        <div className="bg-card rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Student</TableHead>
                <TableHead>Program</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Change Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">Loading…</TableCell></TableRow>
              ) : apps.length === 0 ? (
                <TableRow><TableCell colSpan={6} className="text-center py-8 text-muted-foreground">No applications yet</TableCell></TableRow>
              ) : apps.map((a) => (
                <TableRow key={a.id}>
                  <TableCell className="font-medium">
                    {a.students ? `${a.students.first_name} ${a.students.last_name}` : "—"}
                    {a.students && <span className="block text-xs text-muted-foreground">{a.students.email}</span>}
                  </TableCell>
                  <TableCell>{a.programs?.name ?? "—"}</TableCell>
                  <TableCell className="capitalize text-sm">{a.source.replace(/_/g, " ")}</TableCell>
                  <TableCell><Badge variant={statusColors[a.status] ?? "default"}>{a.status.replace(/_/g, " ")}</Badge></TableCell>
                  <TableCell className="text-sm text-muted-foreground">{new Date(a.created_at).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Select value={a.status} onValueChange={(v) => updateStatus(a.id, v)}>
                      <SelectTrigger className="w-36 h-8 text-xs"><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {["new", "in_review", "accepted", "rejected", "enrolled", "withdrawn"].map((s) => (
                          <SelectItem key={s} value={s}>{s.replace(/_/g, " ")}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </AdminLayout>
  );
}
