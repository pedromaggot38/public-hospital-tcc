import Image from 'next/image';

export function ServiceCard({ title, description, icon }) {
    return (
        <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-lg bg-gray-800 p-4">
                <Image 
                    src={icon} 
                    alt={`${title} Icon`} 
                    width={20} 
                    height={20} 
                    className="w-8 h-8 object-contain" 
                />
            </div>
            <div>
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="mt-1 text-sm text-gray-300">{description}</p>
            </div>
        </div>
    );
}
