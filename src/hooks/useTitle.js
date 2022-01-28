
export default function useTitle ({title, description}){
        document.title = `${title} | GifSer`
        const metaDescription = document.querySelector('meta[name=description]')
        metaDescription.setAttribute('content', description)

}