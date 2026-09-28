import { FormEvent } from "react";
import { Link, useForm } from "@inertiajs/react";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submit = (e: FormEvent) => {
        e.preventDefault();

        post("/register", {
            onSuccess: () => {
                alert("Registrasi berhasil!");
                reset("password", "password_confirmation");
            },
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Register
                        </h1>

                        <p className="mt-2 text-sm text-gray-500">
                            Buat akun baru untuk melanjutkan
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-5">
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Nama
                            </label>

                            <input
                                id="name"
                                type="text"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                autoComplete="name"
                                placeholder="Masukkan nama"
                                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition
                                    focus:ring-2
                                    ${
                                        errors.name
                                            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                                    }`}
                            />

                            {errors.name && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Email
                            </label>

                            <input
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                autoComplete="email"
                                placeholder="nama@email.com"
                                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition
                                    focus:ring-2
                                    ${
                                        errors.email
                                            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                                    }`}
                            />

                            {errors.email && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.email}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                autoComplete="new-password"
                                placeholder="Masukkan password"
                                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition
                                    focus:ring-2
                                    ${
                                        errors.password
                                            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                                    }`}
                            />

                            {errors.password && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password}
                                </p>
                            )}
                        </div>

                        {/* Password Confirmation */}
                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 mb-2"
                            >
                                Konfirmasi Password
                            </label>

                            <input
                                id="password_confirmation"
                                type="password"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value,
                                    )
                                }
                                autoComplete="new-password"
                                placeholder="Ulangi password"
                                className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition
                                    focus:ring-2
                                    ${
                                        errors.password_confirmation
                                            ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                                            : "border-gray-300 focus:border-indigo-500 focus:ring-indigo-100"
                                    }`}
                            />

                            {errors.password_confirmation && (
                                <p className="mt-1 text-sm text-red-500">
                                    {errors.password_confirmation}
                                </p>
                            )}
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition
                                hover:bg-indigo-700
                                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2
                                disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {processing ? "Loading..." : "Register"}
                        </button>
                    </form>

                    {/* Login */}
                    <p className="mt-6 text-center text-sm text-gray-600">
                        Sudah punya akun?{" "}
                        <Link
                            href="/login"
                            className="font-semibold text-indigo-600 hover:text-indigo-700"
                        >
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
