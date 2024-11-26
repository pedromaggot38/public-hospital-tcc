import BreadCrumb from "@/components/breadcrumb"
import { DoctorList } from "@/components/doctorList"
import PagesTitles from "@/components/pagesTitles"

const Doctors = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Plantão', href: '/doctors' },
                ]}
            />
            <PagesTitles title="Plantão" />
            <div className="m-4">
                <DoctorList />
            </div>
        </div>
    )
}

export default Doctors