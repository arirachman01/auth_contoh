interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    users: User[];
}

export default function Show({ users }: Props) {
    return (
        <div>
            <h1>Daftar User</h1>

            <p>Jumlah User: {users.length}</p>

            {/* {users.map((user) => (
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))} */}
        </div>
    );
}
