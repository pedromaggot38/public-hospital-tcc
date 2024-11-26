import BreadCrumb from "@/components/breadcrumb"
import PagesTitles from "@/components/pagesTitles"
import ContactUsSection from "@/components/sections/contactUs"

const ContactUs = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Contato', href: '/contact-us' },
                ]}
            />
            <PagesTitles title="Contato" />
            <div className="m-4">
                <ContactUsSection />
            </div>
        </div>
    )
}

export default ContactUs