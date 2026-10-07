import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/component/ui/dialog";
import { Button } from "@/component/ui/button";

const AppModal = ({
  show,
  onclose,
  onSubmit,
  title,
  Children,
  submitLabel = "Save",
  cancelLabel = "Cancel",
  isLoading = false,
  // showFooter = true,
}) => {
  return (
    <Dialog open={show} openChange={onclose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit}>
          <div className="py-2">{Children}</div>
          <DialogFooter>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Loading ..." : submitLabel}
            </Button>
            <Button variant="outline" onClick={() => onclose(false)}>
              {cancelLabel}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
export default AppModal;
