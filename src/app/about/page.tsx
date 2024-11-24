import BreadCrumb from "@/components/breadcrumb"
import ImageGallery from "@/components/sections/imageGallery"
import LocationMap from "@/components/sections/locationMap"
import NavigationButtonsSection from "@/components/sections/navigationButtons"

const About = () => {

    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Sobre', href: '/about' },
                ]}
            />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-5">
                Sobre
            </h2>
            <div className="flex flex-col gap-6">
                <NavigationButtonsSection />
                <LocationMap />
                <ImageGallery />
            </div>
        </div>
    )
}

export default About