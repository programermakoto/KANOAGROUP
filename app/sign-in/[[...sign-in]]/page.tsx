import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20">
      <SignIn />
    </div>
  );
}
