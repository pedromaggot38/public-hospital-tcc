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
            <ArticleList />
        </div>
    )
}

export default Articles