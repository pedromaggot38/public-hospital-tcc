'use client';
import { Doctor } from "@/types/interfaces";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";

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
                <div className="space-y-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Skeleton key={index} className="h-56 w-full rounded-lg" />
                    ))}
                </div>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <div>
                    {doctors.map((doctor) => (
                        <div key={doctor.id}>
                            <div>
                                {doctor.name}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}