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
            <DoctorList />
        </div>
    )
}

export default Doctors