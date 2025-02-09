import ActivityTitle from "~/components/ActivityTitle";
import UsersTable from "~/components/UsersTable";
import {
    getAllRoles,
    getAllTypes,
    getAllUsers,
    setUserRole,
    setUserType,
} from "~/prisma/users";

export default async function Page() {
    const userRoles = await getAllRoles().then((res) => res.data);
    const userTypes = await getAllTypes().then((res) => res.data);

    async function setRoleAction(
        _: any,
        payload: { userId: string | string[]; roleId: string }
    ) {
        "use server";
        const response = await setUserRole(payload.userId, payload.roleId);
        return { status: response.status, message: response.message };
    }

    async function setTypeAction(
        _: any,
        payload: { userId: string | string[]; typeId: string }
    ) {
        "use server";
        const response = await setUserType(payload.userId, payload.typeId);
        return { status: response.status, message: response.message };
    }

    const users: UserToRender[] = (await getAllUsers().then((res) => res)).map((user) => ({
        id: user.id,
        firstName: user.firstName ?? "",
        lastName: user.lastName ?? "",
        username: user.username ?? "",
        email: user.primaryEmailAddress?.emailAddress,
        imageUrl: user.imageUrl,
        phoneNumber: user.primaryPhoneNumber?.phoneNumber,
        role: userRoles!.find((role) => role.id === user.privateMetadata?.roleId),
        type: userTypes!.find((type) => type.id === user.privateMetadata?.typeId),
        officerTypeId: user.privateMetadata?.officerTypeId,
    }));

    return (
        <div className="page-wrapper w-4xl self-center">
            <ActivityTitle>Users</ActivityTitle>
            <UsersTable
                data={users}
                userRoles={userRoles || []}
                userTypes={userTypes || []}
                onSetRoleAction={setRoleAction}
                onSetTypeAction={setTypeAction}
            />
        </div>
    );
}
