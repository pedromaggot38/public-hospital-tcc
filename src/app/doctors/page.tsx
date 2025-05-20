import BreadCrumb from "@/components/breadcrumb";
import PagesTitles from "@/components/pagesTitles";
import { DataTable } from "@/components/doctorList/data-table";
import { columns } from "@/components/doctorList/columns";
import { getDoctors } from "@/lib/doctors";

export const dynamic = 'force-dynamic';

export default async function Doctors() {
    const doctors = await getDoctors();

    return (
        <div>
            <BreadCrumb items={[{ label: "Plantão", href: "/doctors" }]} />
            <PagesTitles title="Plantão" />
            <div className="m-4 container mx-auto">
                <DataTable columns={columns} data={doctors} />
            </div>
        </div>
    );
}
