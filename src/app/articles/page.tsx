import { ArticleList } from "@/components/articleList"
import BreadCrumb from "@/components/breadcrumb"
import PagesTitles from "@/components/pagesTitles"

const Articles = () => {
    return (
        <div>
            <BreadCrumb
                items={[
                    { label: 'Notícias', href: '/articles' },
                ]}
            />
            <PagesTitles title="Notícias" />
            <div className="m-4">
                <ArticleList />
            </div>
        </div>
    )
}

export default Articles