import { intialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await intialProfile();
  
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if(server) {
    return redirect(`/channels/${server.id}`);
  }
  return <SetupPage data={data} />;
};

export default SetupPage;