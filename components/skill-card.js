import { Image } from 'react-datocms'

export default function SkillCard({ name, details,  image: { responsiveImage } }) {
  return (
    <div className="overflow-hidden">
      <div className="flex justify-center">
        <Image
          className="w-3/4"
          data={{
            ...responsiveImage,
            alt: `${name} logo`,
          }}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        {details && (
          <div
            className="text-gray-700 text-base"
            dangerouslySetInnerHTML={{
              __html: details,
            }}
          />
        )}
      </div>
    </div>
  )
}