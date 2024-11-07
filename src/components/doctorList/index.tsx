'use client';
import { Doctor } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { columns } from "./columns";
import { DataTable } from './data-table'

export function DoctorList() {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await fetch('/api/doctors');
                if (!response.ok) {
                    throw new Error("Failed to fetch doctors");
                }
                const data = await response.json();
                if (Array.isArray(data)) {
                    setDoctors(data);
                } else {
                    throw new Error("Formato de dados inválido");
                }
            } catch (error) {
                console.error("Failed to fetch doctors:", error);
                setError("Ocorreu um erro ao buscar os médicos.");
            } finally {
                setIsLoading(false);
            }
        };
        fetchDoctors();
    }, []);

    return (
        <div>
            {isLoading ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="p-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
                                    <Skeleton className="h-4 w-1/4" />
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
                                    <Skeleton className="h-4 w-1/4" />
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
                                    <Skeleton className="h-4 w-1/4" />
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
                                    <Skeleton className="h-4 w-1/4" />
                                </th>
                                <th className="p-4 text-left text-sm font-medium text-gray-700 border-b border-gray-300">
                                    <Skeleton className="h-4 w-1/4" />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from({ length: 6 }).map((_, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="p-4">
                                        <Skeleton className="h-4 w-full" />
                                    </td>
                                    <td className="p-4">
                                        <Skeleton className="h-4 w-full" />
                                    </td>
                                    <td className="p-4">
                                        <Skeleton className="h-4 w-full" />
                                    </td>
                                    <td className="p-4">
                                        <Skeleton className="h-4 w-full" />
                                    </td>
                                    <td className="p-4">
                                        <Skeleton className="h-4 w-full" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div className="container mx-auto">
                    <DataTable columns={columns} data={doctors} />
                </div>
            )}
        </div>
    )
}