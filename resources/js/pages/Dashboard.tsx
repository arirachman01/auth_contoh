import { Link, router } from "@inertiajs/react";

interface User {
    id: number;
    name: string;
    email: string;
}

interface Props {
    auth?: {
        user?: User;
    };
}

export default function Dashboard({ auth }: Props) {
    const user = auth?.user;

    const logout = () => {
        router.post("/logout");
    };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 text-white">
                <div className="flex h-16 items-center border-b border-gray-800 px-6">
                    <h1 className="text-xl font-bold">My Dashboard</h1>
                </div>

                <nav className="p-4">
                    <Link
                        href="/dashboard"
                        className="mb-2 flex items-center rounded-lg bg-gray-800 px-4 py-3 text-sm font-medium"
                    >
                        <span className="mr-3">🏠</span>
                        Dashboard
                    </Link>

                    <a
                        href="#"
                        className="mb-2 flex items-center rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                        <span className="mr-3">👤</span>
                        Profile
                    </a>

                    <a
                        href="#"
                        className="mb-2 flex items-center rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-gray-800 hover:text-white"
                    >
                        <span className="mr-3">⚙️</span>
                        Settings
                    </a>
                </nav>

                <div className="absolute bottom-0 w-full border-t border-gray-800 p-4">
                    <button
                        onClick={logout}
                        className="flex w-full items-center rounded-lg px-4 py-3 text-sm text-gray-400 hover:bg-red-500/10 hover:text-red-400"
                    >
                        <span className="mr-3">🚪</span>
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="ml-64">
                {/* Navbar */}
                <header className="flex h-16 items-center justify-between border-b bg-white px-8">
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            Dashboard
                        </h2>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="text-right">
                            <p className="text-sm font-medium text-gray-800">
                                {user?.name ?? "User"}
                            </p>

                            <p className="text-xs text-gray-500">
                                {user?.email ?? ""}
                            </p>
                        </div>

                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-900 font-semibold text-white">
                            {user?.name?.charAt(0).toUpperCase() ?? "U"}
                        </div>
                    </div>
                </header>

                {/* Content */}
                <div className="p-8">
                    {/* Welcome */}
                    <div className="mb-8 rounded-2xl bg-gray-900 p-8 text-white">
                        <p className="mb-2 text-sm text-gray-400">
                            Selamat datang kembali 👋
                        </p>

                        <h1 className="text-3xl font-bold">
                            Halo, {user?.name ?? "User"}!
                        </h1>

                        <p className="mt-2 text-gray-400">
                            Berikut adalah ringkasan aktivitas akun kamu.
                        </p>
                    </div>

                    {/* Statistics */}
                    <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    Total User
                                </span>

                                <span className="rounded-lg bg-blue-100 p-2">
                                    👥
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                                1
                            </h3>

                            <p className="mt-2 text-xs text-gray-500">
                                User terdaftar
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    Aktivitas
                                </span>

                                <span className="rounded-lg bg-green-100 p-2">
                                    📊
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                                12
                            </h3>

                            <p className="mt-2 text-xs text-gray-500">
                                Aktivitas bulan ini
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    Status
                                </span>

                                <span className="rounded-lg bg-purple-100 p-2">
                                    ✓
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-gray-900">
                                Aktif
                            </h3>

                            <p className="mt-2 text-xs text-gray-500">
                                Akun sedang aktif
                            </p>
                        </div>

                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <span className="text-sm text-gray-500">
                                    Role
                                </span>

                                <span className="rounded-lg bg-orange-100 p-2">
                                    🔑
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900">
                                User
                            </h3>

                            <p className="mt-2 text-xs text-gray-500">
                                Role akun kamu
                            </p>
                        </div>
                    </div>

                    {/* User Information */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="rounded-xl bg-white p-6 shadow-sm lg:col-span-2">
                            <h2 className="mb-6 text-lg font-semibold text-gray-900">
                                Informasi Akun
                            </h2>

                            <div className="space-y-5">
                                <div>
                                    <p className="text-sm text-gray-500">
                                        Nama
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        {user?.name ?? "-"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        Email
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        {user?.email ?? "-"}
                                    </p>
                                </div>

                                <div>
                                    <p className="text-sm text-gray-500">
                                        User ID
                                    </p>

                                    <p className="mt-1 font-medium text-gray-900">
                                        #{user?.id ?? "-"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Actions */}
                        <div className="rounded-xl bg-white p-6 shadow-sm">
                            <h2 className="mb-6 text-lg font-semibold text-gray-900">
                                Quick Actions
                            </h2>

                            <div className="space-y-3">
                                <button className="w-full rounded-lg bg-gray-900 px-4 py-3 text-left text-sm font-medium text-white hover:bg-gray-800">
                                    Edit Profile
                                </button>

                                <button className="w-full rounded-lg border border-gray-200 px-4 py-3 text-left text-sm font-medium text-gray-700 hover:bg-gray-50">
                                    Account Settings
                                </button>

                                <button
                                    onClick={logout}
                                    className="w-full rounded-lg border border-red-200 px-4 py-3 text-left text-sm font-medium text-red-600 hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
