"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import type { Database } from "@/lib/schema";
import { useState } from "react";

type Species = Database["public"]["Tables"]["species"]["Row"];

export default function SpeciesDetailsDialog({ species }: { species: Species }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" aria-label={`Learn more about ${species.scientific_name}`}>
          Learn more
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{species.scientific_name}</DialogTitle>
          <DialogDescription>{species.common_name}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Kingdom:</span>
            <span className="col-span-3">{species.kingdom}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Population:</span>
            <span className="col-span-3">{species.total_population?.toLocaleString() ?? "Unknown"}</span>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <span className="font-bold">Description:</span>
            <span className="col-span-3">{species.description ?? "No description available."}</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
