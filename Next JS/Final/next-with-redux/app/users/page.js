import Heading from "../../components/Heading";
import UsersList from "../../components/UsersList";

export default function UsersPage() {
  return (
    <main className="page-container">
      <Heading>Users</Heading>
      <UsersList />
    </main>
  );
}
