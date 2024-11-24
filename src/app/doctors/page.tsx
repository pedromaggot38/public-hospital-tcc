import BreadCrumb from "@/components/breadcrumb"
import { DoctorList } from "@/components/doctorList"

const Doctors = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Médicos', href: '/doctors' },
                ]}
            />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-5">
                Médicos
            </h2>
            <div className="m-4">
                <DoctorList />
            </div>
        </div>
    )
}

export default Doctors