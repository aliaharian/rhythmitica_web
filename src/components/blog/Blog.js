import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from '../../assets/styleSheets/blog.module.scss'
import { getPostsList } from "../../../redux/posts";
import BlogHeader from "./BlogHeader";
import PostsList from "./PostsList";
const Blog = ({ categories }) => {
    const posts = useSelector((state) => state.posts.posts);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [q, setQ] = useState('')
    const Dispatch = useDispatch();

    const handleSelectCategory = (e , value) => {
        console.log('id',value)
        setSelectedCategory(value)
    }
    const handleSearch = (force = false) => {
        if (force == true) {
            Dispatch(getPostsList(false, null, { q: '', cat_id: selectedCategory }, 1))
        } else {
            handlePaginate()
        }
    }

    useEffect(() => {
        handlePaginate()
    }, [selectedCategory])

    const handlePaginate = (page = 1) => {
        Dispatch(getPostsList(false, null, { q: q, cat_id: selectedCategory }, page))
    }
    return (
        <div className={classes.blogMainContainer}>
                <BlogHeader
                    handleSelectCategory={handleSelectCategory}
                    categories={categories}
                    selectedCategory={selectedCategory}
                    _handleSearch={handleSearch}
                    q={q}
                    setQ={setQ}
                />
                <PostsList handlePaginate={handlePaginate} />
        </div>
    )
}
export default Blog;