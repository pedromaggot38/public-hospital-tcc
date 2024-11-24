import BreadCrumb from "@/components/breadcrumb"

const PortalTransparencia = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Portal Transparência', href: '/portal-transparencia' },
                ]}
            />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-5">
                Portal da Transparência
            </h2>
            <div className="m-4">

            </div>
        </div>
    )
}

export default PortalTransparencia