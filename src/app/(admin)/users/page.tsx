import TestClientComponent from "~/components/TestClientComponent";
import { getAllUsers } from "~/prisma/users";

export default async function Page() {
    const users = await getAllUsers().then((res) => res);

    return (
        <div className="page-wrapper w-4xl">
            {users.map((user) => {
                const userToRender = {
                    id: user.id,
                    firstName: user.firstName ?? "",
                    lastName: user.lastName ?? "",
                    username: user.username ?? "",
                    email: user.primaryEmailAddress?.emailAddress,
                    imageUrl: user.imageUrl,
                    phoneNumber: user.primaryPhoneNumber?.phoneNumber,
                };
                return <TestClientComponent user={userToRender} />;
            })}
        </div>
    );
}
