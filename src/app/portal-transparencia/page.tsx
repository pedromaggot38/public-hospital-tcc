import BreadCrumb from "@/components/breadcrumb"
import { DoctorList } from "@/components/doctorList"

const PortalTransparencia = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Portal Transparência', href: '/portal-transparencia' },
                ]}
            />
            <DoctorList />
        </div>
    )
}

export default PortalTransparencia