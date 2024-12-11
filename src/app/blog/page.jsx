import "../../../public/css/Hero.css"
import SearchInput from './SearchInput'
import BlogCards from './BlogCards'
const page = () => (
    <>
        <div className="flex justify-center align-baseline">
            <span className="text-base">currently working (Under Construction)</span>
        </div>
        <section className="m-8">
            <SearchInput />
        </section>
        <BlogCards />
    </>

)

export default page
