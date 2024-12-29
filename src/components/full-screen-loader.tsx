import { LoaderIcon } from "lucide-react";

interface FullScreenLoaderProps {
  label?: string;
}

export const FullScreenLoader = ({ label }: FullScreenLoaderProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2">
      <LoaderIcon className="size-6 animate-spin text-muted-foreground" />
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
    </div>
  );
};
