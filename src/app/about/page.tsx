import BreadCrumb from "@/components/breadcrumb"
import ImageGallery from "@/components/imageGallery"
import NavigationButtonsSection from "@/components/sections/navigationButtons"

const About = () => {

    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Sobre', href: '/about' },
                ]}
            />
            <div className="flex flex-col gap-6">
                <NavigationButtonsSection />
                <ImageGallery />
            </div>
        </div>
    )
}

export default About