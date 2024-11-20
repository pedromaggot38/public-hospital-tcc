import React from 'react'

interface BreadcrumbItem {
    label: string
    href: string
}

interface BreadcrumbProps {
    items: BreadcrumbItem[]
}

export default function BreadCrumb({ items }: BreadcrumbProps) {
    return (
        <div className="flex items-center py-2 overflow-x-auto whitespace-nowrap">
            <a href="/" className="text-gray-600 dark:text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
            </a>
            <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>

            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <a href={item.href} className="text-gray-600 dark:text-gray-200 hover:underline">
                        {item.label}
                    </a>

                    {index < items.length - 1 && (
                        <span className="mx-5 text-gray-500 dark:text-gray-300">/</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    )
}