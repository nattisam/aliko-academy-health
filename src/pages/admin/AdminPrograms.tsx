import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import type { Tables, TablesInsert } from "@/integrations/supabase/types";

type Program = Tables<"programs">;
type ProgramInsert = TablesInsert<"programs">;

const emptyProgram: ProgramInsert = {
  name: "", slug: "", short_description: "", full_description: "",
  category: "training", tuition: null, duration_weeks: null,
  is_active: true, display_order: 0,
};

export default function AdminPrograms() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState<Program | null>(null);
  const [form, setForm] = useState<ProgramInsert>(emptyProgram);
  const { toast } = useToast();

  const fetchPrograms = async () => {
    const { data } = await supabase.from("programs").select("*").order("display_order");
    setPrograms(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchPrograms(); }, []);

  const openCreate = () => { setEditing(null); setForm(emptyProgram); setDialogOpen(true); };
  const openEdit = (p: Program) => {
    setEditing(p);
    setForm({
      name: p.name, slug: p.slug, short_description: p.short_description,
      full_description: p.full_description, category: p.category,
      tuition: p.tuition, duration_weeks: p.duration_weeks,
      is_active: p.is_active, display_order: p.display_order,
    });
    setDialogOpen(true);
  };

  const handleSave = async () => {
    if (!form.name || !form.slug) {
      toast({ title: "Name and slug are required", variant: "destructive" });
      return;
    }
    if (editing) {
      const { error } = await supabase.from("programs").update(form).eq("id", editing.id);
      if (error) { toast({ title: "Error updating program", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Program updated" });
    } else {
      const { error } = await supabase.from("programs").insert(form);
      if (error) { toast({ title: "Error creating program", description: error.message, variant: "destructive" }); return; }
      toast({ title: "Program created" });
    }
    setDialogOpen(false);
    fetchPrograms();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this program?")) return;
    const { error } = await supabase.from("programs").delete().eq("id", id);
    if (error) { toast({ title: "Error deleting", description: error.message, variant: "destructive" }); return; }
    toast({ title: "Program deleted" });
    fetchPrograms();
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Programs</h1>
          <Button onClick={openCreate}><Plus className="mr-2 h-4 w-4" />Add Program</Button>
        </div>

        <div className="bg-card rounded-lg border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Tuition</TableHead>
                <TableHead>Active</TableHead>
                <TableHead>Order</TableHead>
                <TableHead className="w-24">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">Loading…</TableCell></TableRow>
              ) : programs.length === 0 ? (
                <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No programs yet</TableCell></TableRow>
              ) : programs.map((p) => (
                <TableRow key={p.id}>
                  <TableCell className="font-medium">{p.name}</TableCell>
                  <TableCell className="capitalize">{p.category.replace("_", " ")}</TableCell>
                  <TableCell>{p.duration_weeks ? `${p.duration_weeks} wks` : "—"}</TableCell>
                  <TableCell>{p.tuition ? `$${Number(p.tuition).toLocaleString()}` : "—"}</TableCell>
                  <TableCell>{p.is_active ? "✓" : "✗"}</TableCell>
                  <TableCell>{p.display_order}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button variant="ghost" size="icon" onClick={() => openEdit(p)}><Pencil className="h-4 w-4" /></Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(p.id)}><Trash2 className="h-4 w-4 text-destructive" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{editing ? "Edit Program" : "New Program"}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label>Slug *</Label>
                  <Input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Short Description</Label>
                <Textarea value={form.short_description ?? ""} onChange={(e) => setForm({ ...form, short_description: e.target.value })} rows={2} />
              </div>
              <div className="space-y-2">
                <Label>Full Description</Label>
                <Textarea value={form.full_description ?? ""} onChange={(e) => setForm({ ...form, full_description: e.target.value })} rows={4} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={form.category} onValueChange={(v) => setForm({ ...form, category: v as "training" | "exam_prep" })}>
                    <SelectTrigger><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="training">Training</SelectItem>
                      <SelectItem value="exam_prep">Exam Prep</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Duration (weeks)</Label>
                  <Input type="number" value={form.duration_weeks ?? ""} onChange={(e) => setForm({ ...form, duration_weeks: e.target.value ? Number(e.target.value) : null })} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tuition ($)</Label>
                  <Input type="number" value={form.tuition ?? ""} onChange={(e) => setForm({ ...form, tuition: e.target.value ? Number(e.target.value) : null })} />
                </div>
                <div className="space-y-2">
                  <Label>Display Order</Label>
                  <Input type="number" value={form.display_order ?? 0} onChange={(e) => setForm({ ...form, display_order: Number(e.target.value) })} />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Switch checked={form.is_active ?? true} onCheckedChange={(v) => setForm({ ...form, is_active: v })} />
                <Label>Active</Label>
              </div>
              <Button onClick={handleSave} className="w-full">{editing ? "Update" : "Create"}</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </AdminLayout>
  );
}
