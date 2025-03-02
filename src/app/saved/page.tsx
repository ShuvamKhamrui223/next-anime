import { getSavedByEmail } from "@/actions/firebase";
import { currentUser } from "@clerk/nextjs/server";

const SavedPage = async () => {
  const user = await currentUser();
  const savedContent =
    user?.primaryEmailAddress?.emailAddress &&
    (await getSavedByEmail(user?.primaryEmailAddress?.emailAddress));
  console.log(savedContent);
  return <div>saved</div>;
};

export default SavedPage;
