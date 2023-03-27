import { Sidebar } from "collections";
import { Button } from "components";
import { useRouter } from "next/router";
import { Dashboard as _Dashboard } from "sections";
import { firebaseApi } from "services";

export default function Dashboard({ ...props }) {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      const response = await firebaseApi.POST.signOut();
    } catch (error: any) {
      alert(error.message);
    } finally {
      router.push("/");
    }
  };

  return (
    <>
      <div className="flex h-[100vh]">
        <Sidebar />
        <section className="w-full h-full">
          <nav className="bg-grey flex absolute z-10 justify-between w-full py-[20px] px-[40px]">
            <div></div>
            <Button onClick={handleSignOut} text={"Sign Out"} />
          </nav>
          <_Dashboard />
        </section>
      </div>
    </>
  );
}