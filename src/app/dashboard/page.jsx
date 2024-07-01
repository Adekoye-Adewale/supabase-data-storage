import withAuth from "../hooks/withAuth";


const AdminPage = () => {
    return <div>Welcome Admin</div>;
};

export default withAuth(AdminPage, ['Admin']);
