import { ArticleList } from "@/components/articleList"
import BreadCrumb from "@/components/breadcrumb"

const Articles = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Notícias', href: '/articles' },
                ]}
            />
            <h2 className="text-xl sm:text-3xl font-bold text-gray-900 py-5">
                Notícias
            </h2>
            <div className="m-4">
                <ArticleList />
            </div>
        </div>
    )
}

export default Articles