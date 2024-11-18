import BreadCrumb from "@/components/breadcrump"
import ImageGallery from "@/components/imageGallery"

const About = () => {

    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Sobre', href: '/about' },
                ]}
            />
            <ImageGallery />
        </div>
    )
}

export default About